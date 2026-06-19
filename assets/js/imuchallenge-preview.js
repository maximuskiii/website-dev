(function(){
  const root=document.getElementById('imu-preview-root');
  if(!root) return;
  const params=new URLSearchParams(window.location.search);
  const platform=params.get('platform')||'';
  const split=params.get('split')||'';
  const traj=params.get('traj_id')||'';

  function esc(s){return String(s).replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"}[m]));}

  fetch('/assets/data/imuchallenge_metadata.json')
    .then(r=>r.json())
    .then(rows=>{
      const item=rows.find(x=>String(x.platform)===platform && String(x.split)===split && String(x.traj_id)===traj)
        || rows.find(x=>String(x.traj_id)===traj);
      if(!item){
        root.innerHTML='<p>Trajectory not found. Please return to <a href="/imuchallenge/data/">Data Explorer</a>.</p>';
        return;
      }
      const thumb=item.thumbnail || '/img/place_holder_01.png';
      const trainNote=item.split==='train'
        ?`<div style="margin:0.5rem 0 1rem 0;padding:0.6rem 0.9rem;border-left:3px solid #f59e0b;background:#fefce8;color:#92400e;font-size:0.85rem;border-radius:0 6px 6px 0;">
            <strong>Note:</strong> This is a <strong>training trajectory</strong> — the reference model was trained on this data. Performance here is <em>not</em> indicative of generalisation to unseen sequences. See the <strong>val</strong> split for held-out results.
          </div>`
        :'';
      root.innerHTML=`
        <h2 style="margin-top:0;">${esc(item.traj_id)}</h2>
        <img src="${esc(thumb)}" alt="trajectory thumbnail" style="width:100%;max-width:980px;border-radius:12px;border:1px solid #d8ebf9;margin:0.5rem 0 1rem 0;"/>
        ${trainNote}
        <div class="imu-metrics" style="margin-top:0;">
          <div class="imu-metric"><span class="value">${esc(item.platform==='dog'?'quadruped':(item.platform==='human'?'handheld':item.platform))}</span><span class="label">Platform</span></div>
          <div class="imu-metric"><span class="value">${esc(item.split)}</span><span class="label">Split</span></div>
          <div class="imu-metric"><span class="value">${Number(item.duration_s).toFixed(3)} s</span><span class="label">Duration</span></div>
          <div class="imu-metric"><span class="value">${esc(item.sample_rate_hz)} Hz</span><span class="label">Sample Rate</span></div>
        </div>
        <div class="imu-card"><strong>Source:</strong> ${esc(item.inferred_source)}<br><strong>Samples:</strong> ${esc(item.n_samples)}<br><strong>Relative Path:</strong> <code>${esc(item.npz_relpath)}</code><br><strong>File Size:</strong> ${(Number(item.file_size_bytes)/(1024*1024)).toFixed(2)} MiB</div>
        <p><a href="/imuchallenge/data/">Back to Data Explorer</a></p>
      `;
    })
    .catch(err=>{
      root.innerHTML='Failed to load metadata: '+esc(err);
    });
})();
