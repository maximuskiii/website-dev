import { Client } from "https://cdn.jsdelivr.net/npm/@gradio/client@2.3.1/dist/index.js";

(function(){
  const root=document.getElementById('imu-preview-root');
  if(!root) return;
  const params=new URLSearchParams(window.location.search);
  const platform=params.get('platform')||'';
  const split=params.get('split')||'';
  const traj=params.get('traj_id')||'';

  const SPACE_ID='Tartan-IMU/internal-leaderboard';

  function esc(s){return String(s).replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"}[m]));}
  function mdToHtmlLite(s){
    // Minimal markdown-bold support for messages like "**Car preview model:** ...".
    return esc(s).replace(/\*\*(.+?)\*\*/g,'<strong>$1</strong>');
  }

  const BEST_MODEL_URL='https://huggingface.co/Tartan-IMU/TartanIMU/tree/main';

  // Metadata stores display names (quadruped/handheld); the inference API expects
  // the raw platform keys the dataset files actually use (dog/human).
  const DISPLAY_TO_RAW_PLATFORM={quadruped:'dog', handheld:'human', car:'car', drone:'drone'};

  // three.js is only needed for 3D mode — load it lazily on first switch rather
  // than up-front, so classic-only visits never pay for it.
  let THREE=null, OrbitControls=null, CSS2DRenderer=null, CSS2DObject=null;
  async function ensureThree(){
    if(THREE) return;
    // Resolved via the page's <script type="importmap"> — OrbitControls imports
    // "three" internally as a bare specifier, which a raw URL import can't satisfy.
    const [threeMod, controlsMod, labelMod]=await Promise.all([
      import('three'),
      import('three/addons/controls/OrbitControls.js'),
      import('three/addons/renderers/CSS2DRenderer.js')
    ]);
    THREE=threeMod;
    OrbitControls=controlsMod.OrbitControls;
    CSS2DRenderer=labelMod.CSS2DRenderer;
    CSS2DObject=labelMod.CSS2DObject;
  }

  // Holds the live three.js scene for the 3D tab so it can be paused/resumed on
  // toggle and fully torn down if the page is restored from bfcache and re-inits.
  let scene3d=null;
  function disposeScene3d(){
    if(!scene3d) return;
    if(scene3d.rafId!=null) cancelAnimationFrame(scene3d.rafId);
    scene3d.resizeObserver&&scene3d.resizeObserver.disconnect();
    scene3d.controls&&scene3d.controls.dispose();
    scene3d.renderer&&scene3d.renderer.dispose();
    if(scene3d.renderer&&scene3d.renderer.domElement&&scene3d.renderer.domElement.parentNode){
      scene3d.renderer.domElement.parentNode.removeChild(scene3d.renderer.domElement);
    }
    if(scene3d.labelRenderer&&scene3d.labelRenderer.domElement&&scene3d.labelRenderer.domElement.parentNode){
      scene3d.labelRenderer.domElement.parentNode.removeChild(scene3d.labelRenderer.domElement);
    }
    scene3d=null;
  }

  function init(){
    disposeScene3d();
    fetch('/assets/data/imuchallenge_metadata.json')
      .then(r=>r.json())
      .then(rows=>{
        const item=rows.find(x=>String(x.platform)===platform && String(x.split)===split && String(x.traj_id)===traj)
          || rows.find(x=>String(x.traj_id)===traj);
        if(!item){
          root.innerHTML='<p>Trajectory not found. Please return to <a href="/imuchallenge/data/explorer/">Data Explorer</a>.</p>';
          return;
        }
        const modelNote=`<div class="imu-note" style="margin:0.5rem 0 1rem 0;">
              Prediction shown is from the <strong>TartanIMU team's best cross-platform checkpoint</strong> — <a href="${BEST_MODEL_URL}" target="_blank" rel="noopener">view on Hugging Face &rarr;</a>
            </div>`;
        const trainNote=item.split==='train'
          ?`<div style="margin:0.5rem 0 1rem 0;padding:0.6rem 0.9rem;border-left:3px solid #f59e0b;background:#fefce8;color:#92400e;font-size:0.85rem;border-radius:0 6px 6px 0;">
              <strong>Note:</strong> This is a <strong>training trajectory</strong> — the reference model was trained on this data. Performance here is <em>not</em> indicative of generalisation to unseen sequences. See the <strong>val</strong> split for held-out results.
            </div>`
          :'';
        root.innerHTML=`
          <h2 style="margin-top:0;">${esc(item.traj_id)}</h2>
          <div class="imu-live-badge"><span class="imu-live-dot"></span>Live inference</div>

          <div class="imu-preview-toggle" role="tablist" aria-label="Preview mode">
            <button type="button" class="imu-preview-toggle-btn is-active" id="imu-mode-classic" role="tab" aria-selected="true">Classic View</button>
            <button type="button" class="imu-preview-toggle-btn" id="imu-mode-3d" role="tab" aria-selected="false">3D View</button>
          </div>

          <div id="imu-preview-classic">
            <div class="imu-preview-grid">
              <div class="imu-preview-panel">
                <div id="imu-preview-thumb" class="imu-preview-box">
                  <div class="imu-preview-loading">
                    <div class="imu-spinner"></div>
                    <div class="imu-preview-loading-text">Generating live preview…</div>
                    <div class="imu-progress"><div class="imu-progress-fill" id="imu-progress-fill"></div></div>
                  </div>
                </div>
              </div>
              <div class="imu-preview-panel">
                <div id="imu-velocity-thumb" class="imu-preview-box">
                  <div class="imu-preview-loading">
                    <div class="imu-spinner"></div>
                    <div class="imu-preview-loading-text">Generating velocity plot…</div>
                    <div class="imu-progress"><div class="imu-progress-fill" id="imu-velocity-progress-fill"></div></div>
                  </div>
                </div>
              </div>
            </div>
            <div id="imu-velocity-caption" class="imu-note" style="display:none;margin-top:0.75rem;font-size:0.85rem;"></div>
          </div>

          <div id="imu-preview-3d" style="display:none;">
            <div id="imu-3d-mount" class="imu-preview-3d-mount">
              <div class="imu-preview-loading">
                <div class="imu-spinner"></div>
                <div class="imu-preview-loading-text" id="imu-3d-status">Waiting for 3D view…</div>
                <div class="imu-progress"><div class="imu-progress-fill" id="imu-3d-progress-fill"></div></div>
              </div>
            </div>
            <div id="imu-3d-legend" class="imu-note" style="display:none;margin-top:0.75rem;font-size:0.85rem;"></div>
          </div>

          <div class="imu-note" style="margin:0.5rem 0 1rem 0;font-size:0.85rem;">
            <strong>RMSE</strong> (m/s): error between predicted and true velocity across every 1 s window. <strong>ATE</strong> (m): average position error over consecutive ~5 m stretches.
          </div>
          ${modelNote}
          ${trainNote}
          <div class="imu-metrics" style="margin-top:0;">
            <div class="imu-metric"><span class="value">${esc(item.platform==='dog'?'quadruped':(item.platform==='human'?'handheld':item.platform))}</span><span class="label">Platform</span></div>
            <div class="imu-metric"><span class="value">${esc(item.split)}</span><span class="label">Split</span></div>
            <div class="imu-metric"><span class="value">${Number(item.duration_s).toFixed(3)} s</span><span class="label">Duration</span></div>
            <div class="imu-metric"><span class="value">${esc(item.sample_rate_hz)} Hz</span><span class="label">Sample Rate</span></div>
          </div>
          <div class="imu-card"><strong>Source:</strong> ${esc(item.inferred_source)}<br><strong>Samples:</strong> ${esc(item.n_samples)}<br><strong>Relative Path:</strong> <code>${esc(item.npz_relpath)}</code><br><strong>File Size:</strong> ${(Number(item.file_size_bytes)/(1024*1024)).toFixed(2)} MiB</div>
          <p><a href="/imuchallenge/data/explorer/">Back to Data Explorer</a></p>
        `;

        loadClassicPreview(item);
        setupModeToggle(item);
      })
      .catch(err=>{
        root.innerHTML='Failed to load metadata: '+esc(err);
      });

    function setupModeToggle(item){
      const btnClassic=document.getElementById('imu-mode-classic');
      const btn3d=document.getElementById('imu-mode-3d');
      const classicView=document.getElementById('imu-preview-classic');
      const view3d=document.getElementById('imu-preview-3d');
      let loaded3d=false;

      btnClassic.addEventListener('click',()=>{
        if(btnClassic.classList.contains('is-active')) return;
        btnClassic.classList.add('is-active'); btnClassic.setAttribute('aria-selected','true');
        btn3d.classList.remove('is-active'); btn3d.setAttribute('aria-selected','false');
        classicView.style.display=''; view3d.style.display='none';
        if(scene3d) scene3d.pause();
      });

      btn3d.addEventListener('click',()=>{
        if(btn3d.classList.contains('is-active')) return;
        btn3d.classList.add('is-active'); btn3d.setAttribute('aria-selected','true');
        btnClassic.classList.remove('is-active'); btnClassic.setAttribute('aria-selected','false');
        classicView.style.display='none'; view3d.style.display='';
        if(scene3d) scene3d.resume();
        if(!loaded3d){ loaded3d=true; load3DPreview(item); }
      });
    }

    async function runPreviewJob(apiName, item, onMessage){
      const client=await Client.connect(SPACE_ID);
      const rawPlatform=DISPLAY_TO_RAW_PLATFORM[item.platform]||item.platform;
      const trajStem=`${rawPlatform}_${item.split}_${item.traj_id}`;
      const job=client.submit(apiName,{split:item.split,platform:rawPlatform,traj_id:trajStem});
      let final=null;
      for await (const msg of job){
        if(msg.type==='data'){
          final=msg.data;
          if(onMessage && final && final[1]!=null) onMessage(String(final[1]));
        }else if(msg.type==='status' && msg.stage==='error'){
          throw new Error(msg.message||'Preview request failed');
        }
      }
      if(!final) throw new Error('No response from model server');
      return final;
    }

    async function loadImagePanel(apiName, item, boxId, fillId, imageIndex, captionSlotId, captionIndex){
      const box=document.getElementById(boxId);
      if(!box) return;
      const fill=document.getElementById(fillId);
      // Approximate progress — inference typically resolves in ~1.5s; ease toward 92%
      // and hold there so the bar never appears to finish before the response lands.
      if(fill) requestAnimationFrame(()=>{ fill.style.width='92%'; });
      try{
        const final=await runPreviewJob(apiName,item);
        const imageData=final[imageIndex];
        if(!imageData) throw new Error(final[1]||'Preview failed');
        const url=imageData.url;
        if(!url) throw new Error('No image returned');
        if(fill){
          fill.style.transition='width 0.25s ease-out';
          fill.style.width='100%';
          await new Promise(r=>setTimeout(r,220));
        }
        box.innerHTML='';
        const img=document.createElement('img');
        img.src=url;
        img.alt=boxId==='imu-preview-thumb'?'trajectory preview':'velocity preview';
        box.appendChild(img);
        // Drop the loading-state aspect-ratio/background box once the real image is
        // in — otherwise a plot whose native aspect ratio isn't 16:9 gets letterboxed
        // with wasted background on either side.
        box.classList.add('is-loaded');
        if(captionSlotId && captionIndex!=null && final[captionIndex]){
          const capSlot=document.getElementById(captionSlotId);
          if(capSlot){ capSlot.innerHTML=mdToHtmlLite(final[captionIndex]); capSlot.style.display=''; }
        }
      }catch(err){
        box.textContent='Failed to load: '+(err&&err.message?err.message:err);
      }
    }

    function loadClassicPreview(item){
      // Independent request/status slots on the Space — safe to run concurrently.
      loadImagePanel('/request_preview', item, 'imu-preview-thumb', 'imu-progress-fill', 2, null, null);
      loadImagePanel('/request_preview_velocity', item, 'imu-velocity-thumb', 'imu-velocity-progress-fill', 2, 'imu-velocity-caption', 3);
    }

    async function load3DPreview(item){
      const mount=document.getElementById('imu-3d-mount');
      const status=document.getElementById('imu-3d-status');
      const fill=document.getElementById('imu-3d-progress-fill');
      const legend=document.getElementById('imu-3d-legend');
      if(fill) requestAnimationFrame(()=>{ fill.style.width='85%'; });
      try{
        const final=await runPreviewJob('/request_preview_trajectory', item, (m)=>{ if(status) status.textContent=m; });
        const trajectory=final[2];
        if(!trajectory) throw new Error(final[1]||'Trajectory request failed');
        if(fill){
          fill.style.transition='width 0.25s ease-out';
          fill.style.width='100%';
          await new Promise(r=>setTimeout(r,150));
        }
        await ensureThree();
        mount.innerHTML='';
        buildScene3d(mount, trajectory);
        legend.style.display='';
        legend.innerHTML=`<strong>RMSE</strong> (velocity): ${Number(trajectory.rmse).toFixed(3)} m/s &nbsp;·&nbsp; <strong>ATE</strong> (position): ${Number(trajectory.ate).toFixed(3)} m<br>
          <span style="color:#2563eb;">■</span> Predicted &nbsp; <span style="color:#16a34a;">■</span> Ground truth &nbsp; <span style="opacity:0.7;">(drag to orbit, scroll to zoom)</span>`;
      }catch(err){
        mount.innerHTML='Failed to load 3D view: '+(err&&err.message?err.message:err);
      }
    }

    function buildScene3d(mount, trajectory){
      disposeScene3d();
      const width=mount.clientWidth||900;
      const height=Math.max(480, width*9/16);
      mount.style.height=height+'px';

      const scene=new THREE.Scene();
      scene.background=new THREE.Color(0xf2f9ff);

      const camera=new THREE.PerspectiveCamera(50, width/height, 0.01, 100000);
      const renderer=new THREE.WebGLRenderer({antialias:true});
      renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2));
      renderer.setSize(width,height);
      mount.appendChild(renderer.domElement);

      const labelRenderer=new CSS2DRenderer();
      labelRenderer.setSize(width,height);
      labelRenderer.domElement.style.cssText='position:absolute;top:0;left:0;pointer-events:none;';
      mount.appendChild(labelRenderer.domElement);

      // The data's (x, y, z) matches the reference matplotlib plot, where z is the
      // vertical axis. three.js treats +Y as "up", so remap z -> three's Y here —
      // everything downstream (grid, axis labels, camera) then just uses three's
      // native up-axis conventions and stays visually consistent with the 2D plot.
      const posPred=trajectory.pos_pred||[];
      const posGt=trajectory.pos_gt||[];
      function toVec3(p){ return new THREE.Vector3(p[0], p[2], p[1]); }

      function toLine(points,color){
        const flat=new Float32Array(points.length*3);
        points.forEach((p,i)=>{ const v=toVec3(p); flat[i*3]=v.x; flat[i*3+1]=v.y; flat[i*3+2]=v.z; });
        const geom=new THREE.BufferGeometry();
        geom.setAttribute('position', new THREE.BufferAttribute(flat,3));
        return new THREE.Line(geom, new THREE.LineBasicMaterial({color}));
      }
      if(posPred.length>1) scene.add(toLine(posPred,0x2563eb));
      if(posGt.length>1) scene.add(toLine(posGt,0x16a34a));

      // Size the ground grid/axes and camera to the trajectory's own extent.
      const box=new THREE.Box3();
      posPred.concat(posGt).forEach(p=>box.expandByPoint(toVec3(p)));
      if(box.isEmpty()) box.set(new THREE.Vector3(-1,-1,-1), new THREE.Vector3(1,1,1));
      const size=new THREE.Vector3(); box.getSize(size);
      const center=new THREE.Vector3(); box.getCenter(center);
      const span=Math.max(size.x,size.y,size.z,1);

      const grid=new THREE.GridHelper(span*1.6, 20, 0xbfdbfe, 0xe2e8f0);
      grid.position.set(center.x, box.min.y, center.z);
      scene.add(grid);
      scene.add(new THREE.AmbientLight(0xffffff,1.0));

      function makeLabel(text,color,size){
        const div=document.createElement('div');
        div.textContent=text;
        div.style.cssText=`font:${size||'600 12px'} system-ui,sans-serif;color:${color};background:rgba(255,255,255,0.85);padding:1px 5px;border-radius:4px;white-space:nowrap;`;
        return new CSS2DObject(div);
      }

      // "Nice" round tick values (1/2/5 * 10^n) within [min,max], matplotlib-style.
      function niceTicks(min,max,targetCount){
        const range=max-min;
        if(range<=0) return [min];
        const rough=range/targetCount;
        const mag=Math.pow(10, Math.floor(Math.log10(rough)));
        const norm=rough/mag;
        const step=(norm<1.5?1:norm<3?2:norm<7?5:10)*mag;
        const start=Math.ceil(min/step)*step;
        const ticks=[];
        for(let t=start;t<=max+step*1e-6;t+=step) ticks.push(Number(t.toFixed(6)));
        return ticks;
      }
      function fmtTick(t){ return String(Number(t.toFixed(3))); }

      // Corner coordinate frame anchored at the trajectory's own min-corner (rather
      // than crossing through the middle of the paths), so it reads like an axis
      // legend: X (red), Y (green, depth), Z (blue, vertical — matches the 2D plot).
      // Each axis is drawn at its own real data extent (not a shared synthetic
      // length) so tick numbers along it are actual meter values.
      const origin=new THREE.Vector3(box.min.x, box.min.y, box.min.z);
      // Colors deliberately avoid the path colors (blue=predicted, green=ground
      // truth) above so the axis frame never reads as a third trajectory.
      const axes=[
        {dir:new THREE.Vector3(1,0,0), len:size.x, minVal:box.min.x, color:0xf59e0b, hex:'#b45309', text:'X (m)'},
        {dir:new THREE.Vector3(0,0,1), len:size.z, minVal:box.min.z, color:0x8b5cf6, hex:'#6d28d9', text:'Y (m)'},
        {dir:new THREE.Vector3(0,1,0), len:size.y, minVal:box.min.y, color:0x475569, hex:'#334155', text:'Z (m, vertical)'}
      ];
      axes.forEach(a=>{
        const end=origin.clone().addScaledVector(a.dir, a.len);
        const geom=new THREE.BufferGeometry().setFromPoints([origin, end]);
        const line=new THREE.Line(geom, new THREE.LineBasicMaterial({color:a.color}));
        scene.add(line);
        const label=makeLabel(a.text, a.hex);
        label.position.copy(end);
        scene.add(label);

        niceTicks(a.minVal, a.minVal+a.len, 4).forEach(t=>{
          const pos=origin.clone().addScaledVector(a.dir, t-a.minVal);
          const tick=makeLabel(fmtTick(t), '#64748b', '500 10px');
          tick.position.copy(pos);
          scene.add(tick);
        });
      });

      camera.position.set(center.x+span*1.2, center.y+span*1.0, center.z+span*1.2);
      camera.lookAt(center);

      const controls=new OrbitControls(camera, renderer.domElement);
      controls.target.copy(center);
      controls.enableDamping=true;
      controls.dampingFactor=0.08;
      controls.update();

      function animate(){
        scene3d.rafId=requestAnimationFrame(animate);
        controls.update();
        renderer.render(scene,camera);
        labelRenderer.render(scene,camera);
      }

      const resizeObserver=new ResizeObserver(()=>{
        const w=mount.clientWidth||width;
        const h=Math.max(480, w*9/16);
        mount.style.height=h+'px';
        camera.aspect=w/h;
        camera.updateProjectionMatrix();
        renderer.setSize(w,h);
        labelRenderer.setSize(w,h);
      });
      resizeObserver.observe(mount);

      scene3d={
        rafId:null, controls, renderer, labelRenderer, resizeObserver,
        pause(){ if(scene3d.rafId!=null){ cancelAnimationFrame(scene3d.rafId); scene3d.rafId=null; } },
        resume(){ if(scene3d.rafId==null) animate(); }
      };
      animate();
    }
  }

  init();
  // Back/forward navigation can restore this page from bfcache without re-running
  // the script, leaving the progress bar frozen mid-animation — force a fresh run.
  window.addEventListener('pageshow', function(e){
    if(e.persisted) init();
  });
})();
