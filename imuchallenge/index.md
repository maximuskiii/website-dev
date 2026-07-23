---
title: IMU Odometry Challenge
subtitle: Cross-Platform Inertial Positioning Benchmark
layout: page
show_sidebar: false
hide_footer: false
hide_hero: true
permalink: /imuchallenge/
---

<header class="imu-home-hero" aria-labelledby="imu-home-title">
  <video class="imu-home-hero-video" autoplay loop muted playsinline preload="auto" aria-hidden="true">
    <source src="/img/imuchallenge/hero_preview.mp4" type="video/mp4">
  </video>
  <div class="imu-home-hero-shade" aria-hidden="true"></div>

  <div class="imu-home-hero-inner">
    <a class="imu-home-live" href="https://www.kaggle.com/competitions/tartanimu-iros2026" target="_blank" rel="noopener">
      <span class="imu-home-live-status"><span class="imu-home-live-dot" aria-hidden="true"></span>Live</span>
      <span>Competition open for IROS 2026</span>
      <i class="fas fa-arrow-right" aria-hidden="true"></i>
    </a>

    <p class="imu-home-eyebrow">Cross-platform inertial positioning benchmark</p>
    <h1 id="imu-home-title">IMU Odometry <span>Challenge</span></h1>
    <p class="imu-home-lead">Can one model sense motion for any robot? Estimate 3D body-frame velocity from raw 6-axis IMU with one unified model across car, drone, quadruped, and handheld motion.</p>

    <div class="imu-home-actions" aria-label="Challenge actions">
      <a class="imu-home-action imu-home-action--primary" href="https://www.kaggle.com/competitions/tartanimu-iros2026" target="_blank" rel="noopener">
        <i class="fab fa-kaggle" aria-hidden="true"></i><span>Compete on Kaggle</span>
      </a>
      <a class="imu-home-action imu-home-action--secondary" href="https://forms.gle/oRr4rCNxqTP1U6uS8" target="_blank" rel="noopener">
        <i class="fas fa-user-plus" aria-hidden="true"></i><span>Register Team</span>
      </a>
    </div>

    <nav class="imu-home-resources" aria-label="Challenge resources">
      <a href="/imuchallenge/setup/"><i class="fas fa-rocket" aria-hidden="true"></i>Setup</a>
      <a href="/imuchallenge/data/"><i class="fas fa-database" aria-hidden="true"></i>Dataset</a>
      <a href="/imuchallenge/data/explorer/"><i class="fas fa-chart-area" aria-hidden="true"></i>Explorer</a>
      <a href="https://github.com/superxslam/TartanIMU" target="_blank" rel="noopener"><i class="fab fa-github" aria-hidden="true"></i>Baseline</a>
    </nav>
  </div>

  <div class="imu-home-stats-shell">
    <dl class="imu-home-stats">
      <div><dt>Platforms</dt><dd>4</dd></div>
      <div><dt>Windows</dt><dd>~136K</dd></div>
      <div><dt>Total Duration</dt><dd>37.9 hrs</dd></div>
      <div><dt>Sample Rate</dt><dd>200 Hz</dd></div>
    </dl>
  </div>
</header>

<section class="imu-home-section imu-home-platforms" id="platforms-overview">
  <div class="imu-home-section-inner">
    <div class="imu-home-section-heading">
      <p class="imu-home-eyebrow">Benchmark coverage</p>
      <h2>Four motion domains. One platform-blind model.</h2>
      <p>Train and validation data identify the platform. The anonymized test set does not, requiring a single model to generalize across radically different dynamics.</p>
    </div>

    <div class="imu-home-platform-grid">
      <a class="imu-home-platform is-car" href="/imuchallenge/platforms/car/">
        <img src="/img/imuchallenge/platforms/car.webp" alt="Car inertial odometry platform and trajectories" width="960" height="546" loading="lazy" decoding="async">
        <span class="imu-home-platform-body">
          <span><strong>Car</strong><small>Ground vehicle motion</small></span>
          <i class="fas fa-arrow-right" aria-hidden="true"></i>
        </span>
      </a>
      <a class="imu-home-platform is-drone" href="/imuchallenge/platforms/drone/">
        <img src="/img/imuchallenge/platforms/drone.webp" alt="Drone inertial odometry platform and trajectories" width="960" height="560" loading="lazy" decoding="async">
        <span class="imu-home-platform-body">
          <span><strong>Drone</strong><small>Aerial 6-DoF flight</small></span>
          <i class="fas fa-arrow-right" aria-hidden="true"></i>
        </span>
      </a>
      <a class="imu-home-platform is-quadruped" href="/imuchallenge/platforms/quadruped/">
        <img src="/img/imuchallenge/platforms/quadruped.webp" alt="Quadruped inertial odometry platform and trajectories" width="960" height="543" loading="lazy" decoding="async">
        <span class="imu-home-platform-body">
          <span><strong>Quadruped</strong><small>Contact-rich locomotion</small></span>
          <i class="fas fa-arrow-right" aria-hidden="true"></i>
        </span>
      </a>
      <a class="imu-home-platform is-handheld" href="/imuchallenge/platforms/handheld/">
        <img src="/img/imuchallenge/platforms/handheld.webp" alt="Handheld inertial odometry platform and trajectories" width="960" height="534" loading="lazy" decoding="async">
        <span class="imu-home-platform-body">
          <span><strong>Handheld</strong><small>Human-scale motion</small></span>
          <i class="fas fa-arrow-right" aria-hidden="true"></i>
        </span>
      </a>
    </div>
  </div>
</section>

<section class="imu-home-section imu-home-section--muted" id="features">
  <div class="imu-home-section-inner">
    <div class="imu-home-section-heading">
      <p class="imu-home-eyebrow">Challenge design</p>
      <h2>Built to test generalization, not platform recognition.</h2>
    </div>

    <div class="imu-home-feature-grid">
      <article class="imu-home-feature">
        <span class="imu-home-feature-icon"><i class="fas fa-layer-group" aria-hidden="true"></i></span>
        <div>
          <h3>One Model, Four Embodiments</h3>
          <p>A single model must handle car, drone, quadruped, and handheld trajectories at once. Switching between platform-specific experts is not possible.</p>
        </div>
      </article>
      <article class="imu-home-feature">
        <span class="imu-home-feature-icon"><i class="fas fa-eye-slash" aria-hidden="true"></i></span>
        <div>
          <h3>Platform-Blind Testing</h3>
          <p>Platform labels support training and validation, while test labels and platform-revealing trajectory identifiers remain hidden.</p>
        </div>
      </article>
      <article class="imu-home-feature">
        <span class="imu-home-feature-icon"><i class="fas fa-route" aria-hidden="true"></i></span>
        <div>
          <h3>Trajectory-Level Evaluation</h3>
          <p>Predicted velocities are integrated into paths, aligned to ground truth with SE(3) Umeyama alignment, and scored equally across platforms.</p>
        </div>
      </article>
      <article class="imu-home-feature">
        <span class="imu-home-feature-icon"><i class="fas fa-code-branch" aria-hidden="true"></i></span>
        <div>
          <h3>Open TartanIMU Baseline</h3>
          <p>Reference checkpoints, training code, and a browser-based Hugging Face demo provide a reproducible starting point for every team.</p>
        </div>
      </article>
    </div>
  </div>
</section>

<section class="imu-home-section" id="task-evaluation">
  <div class="imu-home-section-inner">
    <div class="imu-home-section-heading">
      <p class="imu-home-eyebrow">Protocol at a glance</p>
      <h2>From raw inertial windows to ranked trajectories.</h2>
      <p>The benchmark keeps the model interface compact while evaluating the accumulated motion that matters in deployment.</p>
    </div>

    <div class="imu-home-evaluation-grid">
      <article class="imu-home-evaluation-card">
        <div class="imu-home-evaluation-heading">
          <span><i class="fas fa-wave-square" aria-hidden="true"></i></span>
          <div><small>01</small><h3>The Task</h3></div>
        </div>
        <dl>
          <div><dt>Input</dt><dd>Raw 6-axis IMU: acceleration in m/s² and angular velocity in rad/s, sampled at 200 Hz.</dd></div>
          <div><dt>Context</dt><dd>One-second windows of 200 samples, provided as sequences of 10 consecutive windows.</dd></div>
          <div><dt>Output</dt><dd>Per-window 3D body-frame velocity <strong>v = (v<sub>x</sub>, v<sub>y</sub>, v<sub>z</sub>)</strong> in m/s.</dd></div>
        </dl>
      </article>

      <article class="imu-home-evaluation-card">
        <div class="imu-home-evaluation-heading">
          <span><i class="fas fa-chart-line" aria-hidden="true"></i></span>
          <div><small>02</small><h3>Scoring</h3></div>
        </div>
        <dl>
          <div><dt>Primary</dt><dd>Macro-averaged Absolute Trajectory Error (ATE), with all four platforms weighted equally.</dd></div>
          <div><dt>Evaluation</dt><dd>Organizers integrate predicted velocities with ground-truth orientation, then align and score each path.</dd></div>
          <div><dt>Splits</dt><dd>Train for fitting, validation for model selection, and anonymized public/private test trajectories for ranking.</dd></div>
        </dl>
      </article>
    </div>

    <a class="imu-home-text-link" href="/imuchallenge/setup/">Read the complete setup and evaluation protocol <i class="fas fa-arrow-right" aria-hidden="true"></i></a>
  </div>
</section>

<section class="imu-home-section imu-home-section--muted" id="partners">
  <div class="imu-home-section-inner">
    <div class="imu-home-section-heading">
      <p class="imu-home-eyebrow">Organizers and partners</p>
      <h2>Backed by robotics research and real-world deployment.</h2>
    </div>

    <div class="imu-home-partners">
      <a href="https://theairlab.org/" target="_blank" rel="noopener" aria-label="CMU AirLab">
        <img src="/img/logos/Horizontal@2x.png" alt="CMU AirLab" width="600" height="147" loading="lazy" decoding="async">
      </a>
      <div class="imu-home-amazon" aria-label="Amazon FAR">
        <span>amazon</span><i aria-hidden="true"></i><strong>FAR</strong>
      </div>
      <a href="https://www.ri.cmu.edu/" target="_blank" rel="noopener" aria-label="Carnegie Mellon University Robotics Institute">
        <img src="/img/riLogo2019.svg" alt="Carnegie Mellon University Robotics Institute" loading="lazy" decoding="async">
      </a>
    </div>

    <a class="imu-home-text-link" href="/imuchallenge/about/">Meet the organizers and learn more <i class="fas fa-arrow-right" aria-hidden="true"></i></a>
  </div>
</section>

<section class="imu-home-section" id="updates">
  <div class="imu-home-section-inner imu-home-updates-inner">
    <div class="imu-home-section-heading">
      <p class="imu-home-eyebrow">Announcements</p>
      <h2>Challenge updates.</h2>
    </div>

    <div class="imu-home-updates">
      <article class="imu-home-update is-latest">
        <time datetime="2026-07-09">Jul 09, 2026</time>
        <div><span>Latest</span><p>The competition is live on Kaggle: <a href="https://www.kaggle.com/competitions/tartanimu-iros2026" target="_blank" rel="noopener">TartanIMU Challenge: Multi-Platform Inertial Odometry</a>.</p></div>
      </article>
      <article class="imu-home-update">
        <time datetime="2026-05-30">May 30, 2026</time>
        <div><p>The official dataset release hub is available from the <a href="/imuchallenge/data/">challenge data page</a>.</p></div>
      </article>
      <article class="imu-home-update">
        <time datetime="2026-05-30">May 30, 2026</time>
        <div><p>Platform pages for Car, Drone, Quadruped, and Handheld are published.</p></div>
      </article>
      <article class="imu-home-update">
        <time datetime="2026-05-30">May 30, 2026</time>
        <div><p>The initial IMU Odometry Challenge website and benchmark structure launched.</p></div>
      </article>
    </div>
  </div>
</section>

<section class="imu-home-section imu-home-citation-section" id="citation">
  <div class="imu-home-section-inner">
    <div class="imu-home-section-heading">
      <p class="imu-home-eyebrow">Research resources</p>
      <h2>Citation and reference models.</h2>
      <p>Run the TartanIMU specialist models in the <a href="https://huggingface.co/spaces/Tartan-IMU/imu_odometry_challenge_demo" target="_blank" rel="noopener">Hugging Face demo</a>. The challenge is held with the <a href="/interoception/">IROS 2026 Beyond Exteroception workshop</a>.</p>
    </div>

    <div class="imu-home-citation-grid">
      <div class="imu-home-citation-block">
        <h3>TartanIMU (CVPR 2025)</h3>
        <pre><code>@inproceedings{zhao2025tartanimu,
  title={Tartan IMU: A Light Foundation Model for Inertial
         Positioning in Robotics},
  author={Zhao, Shibo and Yagnyatinskiy, Maxim and others},
  booktitle={Proceedings of the IEEE/CVF Conference on Computer
             Vision and Pattern Recognition (CVPR)},
  year={2025},
  url={https://openaccess.thecvf.com/content/CVPR2025/papers/
       Zhao_Tartan_IMU_A_Light_Foundation_Model_for_Inertial_
       Positioning_in_CVPR_2025_paper.pdf}
}</code></pre>
      </div>
      <div class="imu-home-citation-block">
        <h3>IMU Odometry Challenge</h3>
        <pre><code>@misc{imuchallenge2026,
  title={IMU Odometry Challenge: Cross-Platform Inertial
         Positioning Benchmark},
  author={CMU AirLab and Super Odometry Group},
  year={2026},
  howpublished={\url{https://superodometry.com/imuchallenge/}},
  note={Dataset and benchmark challenge page}
}</code></pre>
      </div>
    </div>
  </div>
</section>

<script>
  document.addEventListener('DOMContentLoaded', function() {
    const video = document.querySelector('.imu-home-hero-video');
    if (!video) return;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (reducedMotion.matches) {
      video.pause();
      return;
    }

    const observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) video.play().catch(function() {});
        else video.pause();
      });
    }, { threshold: 0.1 });
    observer.observe(video);
  });
</script>
