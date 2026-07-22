---
title: "IROS'26 Workshop: Beyond Exteroception"
subtitle: "Interoceptive Perception for Resilient Robotics — Tentative: Sep 27, 2026"
layout: page
show_sidebar: false
hide_footer: true
hero_height: is-large
hero_image: /img/IROS_2026_tab/pittsburgh_from_pdf.jpg
---

<!-- Additional fonts and styles -->
<link href="https://fonts.googleapis.com/css?family=Google+Sans|Noto+Sans|Castoro" rel="stylesheet">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/jpswalsh/academicons@1/css/academicons.min.css">

<style>
  body {
    font-family: 'Google Sans', 'Noto Sans', sans-serif;
  }

  /* Full-width hero banner */
  .hero[style*="background"] {
    width: 100vw !important;
    max-width: 100vw !important;
    margin-left: calc(50% - 50vw) !important;
    margin-right: calc(50% - 50vw) !important;
    padding: 0 !important;
    border-radius: 0 !important;
    overflow: hidden !important;
    background-size: cover !important;
    background-position: center 85% !important;
    background-repeat: no-repeat !important;
    min-height: 400px !important;
    aspect-ratio: 2.5 / 1;
    position: relative !important;
    left: 0 !important;
  }

  .hero:not([style*="background-image"]) {
    width: 100% !important;
    max-width: 100% !important;
    margin-left: 0 !important;
    margin-right: 0 !important;
    padding: 1.5rem 0 !important;
  }

  .hero.is-large[style*="background-image"] {
    height: auto !important;
    min-height: 300px !important;
    max-height: 50vh !important;
  }

  @media (max-width: 768px) {
    .hero[style*="background-image"] {
      aspect-ratio: 16 / 9;
    }
  }

  .hero[style*="background-image"] .hero-body,
  .hero[style*="background-image"] .container {
    max-width: 100% !important;
    width: 100% !important;
    padding: 0 !important;
    margin: 0 !important;
  }

  body, html {
    overflow-x: hidden;
  }

  .layout--page .hero,
  .layout--default .hero {
    margin-top: 0 !important;
    margin-bottom: 2rem !important;
    left: 0 !important;
    right: 0 !important;
  }

  .hero .hero-body {
    display: flex !important;
    flex-direction: column !important;
    justify-content: flex-start !important;
    padding-top: 8rem !important;
  }

  .hero .container {
    text-align: left !important;
    padding-left: 15% !important;
    max-width: 100% !important;
    width: 100% !important;
  }

  /* Title styling */
  .publication-title {
    font-family: 'Google Sans', sans-serif;
    word-wrap: break-word;
    overflow-wrap: break-word;
    hyphens: auto;
  }

  #main-title {
    font-size: clamp(2rem, 5vw, 3.5rem) !important;
    line-height: 1.1 !important;
    margin-bottom: 1.5rem !important;
    padding: 0 1rem !important;
    font-weight: 800 !important;
    letter-spacing: 0 !important;
  }

  @media (max-width: 768px) {
    #main-title {
      font-size: clamp(1.5rem, 8vw, 2.2rem) !important;
      line-height: 1.2 !important;
      letter-spacing: 0 !important;
    }
  }

  /* Section styles */
  .title-section,
  .content-section,
  section.section {
    max-width: 1200px !important;
    margin-left: auto !important;
    margin-right: auto !important;
    width: 100% !important;
    padding: 2rem 1rem !important;
  }

  .title-section .container,
  .content-section .container,
  section.section .container {
    max-width: 100% !important;
    width: 100% !important;
    margin: 0 !important;
    padding: 0 !important;
  }

  @media (max-width: 1200px) {
    .title-section,
    .content-section,
    section.section {
      width: 95% !important;
    }
  }

  .section {
    padding: 1.5rem 1.5rem;
  }

  .section p {
    text-align: justify;
  }

  /* TOC sidebar */
  .toc {
    width: 280px;
    font-family: 'Google Sans', sans-serif;
    position: fixed;
    top: 100px;
    display: none;
    z-index: 1000;
    max-height: calc(100vh - 280px);
    overflow-y: auto;
    padding-right: 10px;
    box-sizing: border-box;
    scrollbar-width: none;
    -ms-overflow-style: none;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
  }

  @media (min-width: 1400px) {
    .toc.show {
      left: max(20px, calc(25vw - 400px));
      display: block !important;
      opacity: 1;
    }
  }

  .toc::-webkit-scrollbar {
    display: none;
  }

  .toc h3 {
    font-family: 'Google Sans', sans-serif;
    font-size: 24px;
    margin-top: 0;
    margin-bottom: 10px;
  }

  .toc hr {
    border: 0;
    height: 1px;
    background-color: #ccc;
    margin-bottom: 15px;
  }

  .toc ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .toc li {
    margin-bottom: 6px;
  }

  .toc a {
    text-decoration: none;
    color: #333;
    font-size: 16px;
    transition: color 0.2s ease, font-weight 0.2s ease;
  }

  .toc a:hover {
    color: #000;
    text-decoration: underline;
  }

  .toc a.active {
    color: #4f7a00;
    font-weight: 700;
    position: relative;
    padding-left: 12px;
  }

  .toc a.active::before {
    content: "|";
    position: absolute;
    left: 0;
    color: #4f7a00;
    font-weight: 700;
  }

  @media (max-width: 1399px) {
    .toc {
      display: none !important;
    }
  }

  /* Card styles */
  .workshop-card {
    background: #fdfdfd;
    border: 1px solid #eee;
    padding: 2.5rem;
    border-radius: 20px;
    margin: 2rem 0;
    box-shadow: 0 10px 30px rgba(0,0,0,0.05);
    position: relative;
  }

  .workshop-card-label {
    position: absolute;
    top: -15px;
    left: 30px;
    background: #4f7a00;
    color: white;
    padding: 5px 20px;
    border-radius: 20px;
    font-weight: 800;
    font-family: monospace;
  }

  /* Schedule table */
  .schedule-table {
    width: 100%;
    border-collapse: collapse;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 2px 10px rgba(0,0,0,0.05);
  }

  .schedule-table th {
    background: #1a1a1a;
    color: #fff;
    padding: 14px 16px;
    font-weight: 700;
    font-size: 0.95rem;
    text-align: center;
  }

  .schedule-table td {
    padding: 12px 16px;
    text-align: center;
    vertical-align: middle;
    border-bottom: 1px solid #eee;
    font-size: 0.95rem;
  }

  .schedule-table tr:hover {
    background-color: #f9f9f9;
  }

  .schedule-table tr.break-row {
    background-color: #f0f4e8;
  }

  .schedule-table tr.break-row:hover {
    background-color: #e8eee0;
  }

  /* Speaker grid */
  .speaker-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: 2rem;
    margin-top: 1.5rem;
  }

  @media (max-width: 768px) {
    .speaker-grid {
      grid-template-columns: repeat(2, 1fr);
      gap: 1.5rem;
    }
  }

  .speaker-card {
    text-align: center;
  }

  .speaker-card img {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 10px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  }

  .speaker-card .speaker-name {
    font-weight: 700;
    margin-bottom: 2px;
  }

  .speaker-card .speaker-name a {
    color: #333;
    text-decoration: none;
  }

  .speaker-card .speaker-name a:hover {
    color: #4f7a00;
    text-decoration: underline;
  }

  .speaker-card .speaker-role {
    font-size: 0.85rem;
    color: #666;
    margin-bottom: 2px;
  }

  .speaker-card .speaker-affiliation {
    font-size: 0.85rem;
    color: #999;
  }

  .speaker-card .speaker-topic {
    font-size: 0.8rem;
    color: #4f7a00;
    font-style: italic;
    margin-top: 4px;
  }

  /* Topic list */
  .topic-list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.75rem;
  }

  @media (max-width: 768px) {
    .topic-list {
      grid-template-columns: 1fr;
    }
  }

  .topic-list li {
    padding: 10px 16px;
    background: #f8f9fa;
    border-radius: 8px;
    border-left: 4px solid #4f7a00;
    font-size: 0.95rem;
    color: #333;
  }

  /* Responsive hero body */
  .hero-body {
    padding: 2rem 1rem !important;
  }

  @media (min-width: 769px) {
    .hero-body {
      padding: 3rem 1.5rem !important;
    }
  }

  .challenge-cta {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    margin-top: 0;
    padding: 0.75rem 1rem;
    border-radius: 6px;
    background: #4f7a00;
    color: #fff;
    font-weight: 700;
    text-decoration: none;
    box-shadow: 0 4px 12px rgba(0,0,0,0.12);
    transition: background-color 0.2s ease, transform 0.2s ease;
  }

  .challenge-cta:hover {
    background: #3e6100;
    color: #fff;
    transform: translateY(-1px);
  }

  .tentative-date {
    margin: 0;
    color: #4d4d4d;
    font-size: 1rem;
    text-align: center !important;
  }

  .cta-row {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 0.65rem;
    margin-top: 1rem;
  }

  .challenge-cta.is-secondary {
    background: #fff;
    color: #2f4900;
    border: 1px solid #4f7a00;
    box-shadow: none;
  }

  .challenge-cta.is-secondary:hover {
    background: #f2f7e9;
    color: #223600;
  }

  .cta-status {
    flex-basis: 100%;
    margin: 0.15rem 0 0;
    color: #555;
    font-size: 0.9rem;
    text-align: center !important;
  }

  .mobile-section-nav {
    display: none;
    max-width: 760px;
    margin: 1.25rem auto 0;
    text-align: left;
    border-top: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
  }

  .mobile-section-nav summary {
    padding: 0.75rem 0;
    color: #222;
    font-weight: 700;
    cursor: pointer;
  }

  .mobile-section-nav nav {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem 1rem;
    padding: 0 0 0.85rem;
  }

  .mobile-section-nav a {
    color: #2f4900;
    font-weight: 600;
  }

  .dates-list {
    border-top: 1px solid #d8d8d8;
  }

  .date-row {
    display: grid;
    grid-template-columns: minmax(150px, 190px) minmax(0, 1fr);
    gap: 1.5rem;
    align-items: baseline;
    padding: 1rem 0;
    border-bottom: 1px solid #d8d8d8;
  }

  .date-row time {
    color: #2f4900;
    font-weight: 700;
  }

  .date-row p {
    margin: 0;
    text-align: left;
  }

  .timeline-note,
  .section-intro {
    color: #555;
    text-align: left !important;
  }

  .timeline-note {
    margin-top: 1rem;
    font-size: 0.9rem;
  }

  .section-intro {
    max-width: 800px;
    margin: 0 0 1.5rem;
  }

  @media (max-width: 1399px) {
    .mobile-section-nav {
      display: block;
    }
  }

  @media (max-width: 768px) {
    .section p {
      text-align: left;
    }

    .date-row {
      grid-template-columns: 1fr;
      gap: 0.35rem;
    }

    .cta-row {
      align-items: stretch;
    }

    .challenge-cta {
      justify-content: center;
      width: 100%;
    }

    .schedule-table {
      display: block;
      overflow: visible;
      box-shadow: none;
    }

    .schedule-table tbody,
    .schedule-table tr,
    .schedule-table td {
      display: block;
      width: 100%;
    }

    .schedule-table tr:first-child {
      display: none;
    }

    .schedule-table tr {
      margin-bottom: 0.85rem;
      border: 1px solid #ddd;
      border-radius: 8px;
      overflow: hidden;
      background: #fff;
    }

    .schedule-table td {
      display: grid;
      grid-template-columns: 5.25rem minmax(0, 1fr);
      gap: 0.75rem;
      padding: 0.7rem 0.8rem;
      border-bottom: 1px solid #eee;
      text-align: left;
    }

    .schedule-table td:last-child {
      border-bottom: 0;
    }

    .schedule-table td::before {
      color: #555;
      font-size: 0.78rem;
      font-weight: 700;
      text-transform: uppercase;
    }

    .schedule-table td:nth-child(1)::before {
      content: "Time";
    }

    .schedule-table td:nth-child(2)::before {
      content: "Speaker";
    }

    .schedule-table td:nth-child(3)::before {
      content: "Topic";
    }

    .schedule-table .break-row td[colspan]::before {
      content: "Session";
    }
  }
</style>

<!-- Main Title Section -->
<section class="section title-section">
  <!-- Table of Contents -->
  <div class="toc">
    <h3>Content</h3>
    <hr>
    <ul>
      <li><a href="#abstract">Abstract</a></li>
      <li><a href="#important-dates">Important Dates</a></li>
      <li><a href="#scope">Workshop Scope</a></li>
      <li><a href="#speakers">Invited Speakers</a></li>
      <li><a href="#program">Program</a></li>
      <li><a href="#organizers">Organizers</a></li>
    </ul>
  </div>

  <div class="container">
    <div class="columns is-centered">
      <div class="column has-text-centered">
        <h1 class="title is-1 publication-title" id="main-title"><span style="color:#4f7a00;">Beyond Exteroception</span>: Interoceptive Perception <br>for Resilient Robotics</h1>
        <p style="font-size: 1.3rem; color: #555; margin-bottom: 0.35rem;">IROS 2026 Workshop &mdash; Pittsburgh, PA</p>
        <p class="tentative-date"><strong>Tentative date:</strong> September 27, 2026</p>
        <div class="cta-row" aria-label="Workshop actions">
          <a class="challenge-cta" href="/imuchallenge/">
            <span class="icon" aria-hidden="true"><i class="fas fa-trophy"></i></span>
            <span>Explore Challenge</span>
          </a>
          <a class="challenge-cta is-secondary" href="https://forms.gle/oRr4rCNxqTP1U6uS8" target="_blank" rel="noopener">
            <span class="icon" aria-hidden="true"><i class="fas fa-user-plus"></i></span>
            <span>Register Team</span>
          </a>
          <a class="challenge-cta is-secondary" href="https://www.kaggle.com/competitions/tartanimu-iros2026/submissions" target="_blank" rel="noopener">
            <span class="icon" aria-hidden="true"><i class="fas fa-upload"></i></span>
            <span>Submit on Kaggle</span>
          </a>
          <p class="cta-status"><span class="icon" aria-hidden="true"><i class="fas fa-clock"></i></span> Workshop registration and poster submission details are coming soon.</p>
        </div>
        <details class="mobile-section-nav">
          <summary>On this page</summary>
          <nav aria-label="Workshop sections">
            <a href="#abstract">Abstract</a>
            <a href="#important-dates">Important Dates</a>
            <a href="#scope">Workshop Scope</a>
            <a href="#speakers">Speakers</a>
            <a href="#program">Program</a>
            <a href="#organizers">Organizers</a>
          </nav>
        </details>
      </div>
    </div>
  </div>
</section>

<!-- Abstract Section -->
<section class="section content-section" id="abstract" style="padding-top: 1rem !important;">
  <div class="container">
    <h2 class="title is-2" style="text-align: left; margin-bottom: 2rem;">Abstract</h2>
    <div class="columns is-centered">
      <div class="column is-four-fifths">
        <p style="font-size: 1.0rem; color: #222; line-height: 1.8;">
          Modern robots increasingly rely on external sensors—cameras, LiDARs, and radars—as their primary perceptual modality. Yet biological organisms evolved a fundamentally different strategy: they first understand their own body through vestibular and proprioceptive feedback before interpreting the external world. This workshop explores <strong>internal perception</strong>, the use of inertial measurement units (IMUs), joint encoders, force/torque sensors, and other body-mounted proprioceptive sensors, as a primary, not auxiliary, source of perceptual intelligence for resilient robotics.
        </p>
        <p style="font-size: 1.0rem; color: #222; line-height: 1.8; margin-top: 1rem;">
          We argue that robust autonomy demands perception systems that are not only world-facing but also self-aware of their motion, dynamics, and physical state. This is not a metaphorical notion but a principled research direction centered on inertial sensing, proprioception, and their integration with external perception. Topics span learning-based inertial odometry, cross-embodiment proprioceptive motion model, adaptive sensor fusion under degradation, and the emerging role of humanoid robots as testbeds for internal-sensing research. The workshop brings together researchers from state estimation, legged locomotion, inertial navigation, and neuroscience-inspired robotics to define the foundations of this underexplored paradigm. Featuring invited talks, a contributed poster session, a panel discussion, and the inaugural <strong>Learning IMU Odometry Challenge</strong>, this workshop aims to catalyze a community around instinct-like perception for resilient robots.
        </p>
      </div>
    </div>
  </div>
</section>

<!-- Important Dates Section -->
<section class="section content-section" id="important-dates" style="padding-top: 1rem !important;">
  <div class="container">
    <h2 class="title is-2" style="text-align: left; margin-bottom: 2rem;">Important Dates</h2>
    <div class="columns is-centered">
      <div class="column is-four-fifths">
        <div class="dates-list">
          <div class="date-row">
            <time datetime="2026-03">March 2026</time>
            <p>Challenge website launch and team pre-registration opens.</p>
          </div>
          <div class="date-row">
            <time datetime="2026-04">April 2026</time>
            <p>Training data, baseline code, and evaluation toolkit released.</p>
          </div>
          <div class="date-row">
            <time datetime="2026-05">May–August 2026</time>
            <p>Open development phase with public leaderboard updates.</p>
          </div>
          <div class="date-row">
            <time datetime="2026-08-15">August 15, 2026</time>
            <p>Final challenge submission deadline.</p>
          </div>
          <div class="date-row">
            <time datetime="2026-09-01">September 1, 2026</time>
            <p>Top teams notified and spotlight invitations issued.</p>
          </div>
          <div class="date-row">
            <time datetime="2026-09-27">September 27, 2026</time>
            <p>Workshop, challenge spotlight talks, and award announcements (tentative).</p>
          </div>
        </div>
        <p class="timeline-note">The workshop date is tentative. Live competition rules and submission deadlines on Kaggle remain the source of truth.</p>
      </div>
    </div>
  </div>
</section>

<!-- Workshop Scope Section -->
<section class="section content-section" id="scope" style="padding-top: 1rem !important;">
  <div class="container">
    <h2 class="title is-2" style="text-align: left; margin-bottom: 2rem;">Workshop Scope</h2>
    <div class="columns is-centered">
      <div class="column is-four-fifths">
        <p style="font-size: 1.0rem; color: #222; line-height: 1.8;">
          Robots need to understand both the world around them and the state of their own bodies. This workshop examines inertial measurement units, joint encoders, force/torque sensing, and other proprioceptive signals as primary sources of perceptual intelligence—not merely auxiliary inputs to vision and LiDAR pipelines.
        </p>
        <p style="font-size: 1.0rem; color: #222; line-height: 1.8; margin-top: 1rem;">
          The program connects state estimation, legged locomotion, inertial navigation, humanoid robotics, and learning-based perception. Invited talks, challenge spotlights, contributed posters, a panel discussion, and open networking will focus on systems that remain reliable when external sensing is degraded or unavailable.
        </p>
        <h3 class="title is-4" style="text-align: left; margin-top: 2rem; margin-bottom: 1rem;">Topics</h3>
        <ul class="topic-list">
          <li>Learning-based inertial odometry and navigation</li>
          <li>IMU foundation models and cross-platform generalization</li>
          <li>Proprioceptive state estimation for legged and humanoid robots</li>
          <li>Multi-IMU fusion and spatial-temporal calibration</li>
          <li>Adaptive sensor fusion under environmental degradation</li>
          <li>Online adaptation and self-supervised learning</li>
          <li>Vestibular and proprioceptive inspiration from neuroscience</li>
          <li>Sim-to-real transfer for internal perception</li>
          <li>Robustness benchmarks and evaluation metrics</li>
          <li>Contact-rich and force-aware state estimation</li>
          <li>Differentiable factor graphs and learned optimization</li>
          <li>Integration with visual and geometric foundation models</li>
        </ul>
        <p style="font-size: 1.0rem; color: #222; line-height: 1.8; margin-top: 1.5rem;">
          <strong>Who should attend:</strong> researchers, students, and practitioners working in state estimation, inertial navigation, robot learning, legged or humanoid robotics, sensor fusion, and resilient autonomy. No specialized workshop prerequisite is required.
        </p>
      </div>
    </div>
  </div>
</section>

<!-- Invited Speakers Section -->
<section class="section content-section" id="speakers" style="padding-top: 1rem !important;">
  <div class="container">
    <h2 class="title is-2" style="text-align: left; margin-bottom: 0.75rem;">Invited Speakers</h2>
    <p class="section-intro">The current invited lineup spans locomotion, state estimation, learning, and resilient perception. Additional program updates will be posted as they are finalized.</p>
    <div class="columns is-centered">
      <div class="column is-four-fifths">
        <div class="speaker-grid">
          <div class="speaker-card">
            <img src="/img/invited_speakers/marco_hutter.jpeg" alt="Marco Hutter"/>
            <p class="speaker-name"><a href="https://rsl.ethz.ch/the-lab/people/person-detail.hutter.html">Marco Hutter</a></p>
            <p class="speaker-role">Professor of Robotic Systems</p>
            <p class="speaker-affiliation">ETH Zurich</p>
            <p class="speaker-topic">Learning-based Locomotion and Control for Legged Robots</p>
          </div>
          <div class="speaker-card">
            <img src="/img/slam_series/davides.jpg" alt="Davide Scaramuzza"/>
            <p class="speaker-name">Davide Scaramuzza</p>
            <p class="speaker-role">Professor of Robotics and Perception</p>
            <p class="speaker-affiliation">University of Zurich</p>
            <p class="speaker-topic">Talk title to be announced</p>
          </div>
          <div class="speaker-card">
            <img src="/img/IROS_2026_tab/Maani_Ghaffari.jpg" alt="Maani Ghaffari"/>
            <p class="speaker-name"><a href="https://robotics.umich.edu/people/faculty/maani-ghaffari/">Maani Ghaffari</a></p>
            <p class="speaker-role">Assistant Professor, Naval Architecture and Marine Engineering and Robotics</p>
            <p class="speaker-affiliation">University of Michigan</p>
            <p class="speaker-topic">Talk title to be announced</p>
          </div>
          <div class="speaker-card">
            <img src="/img/IROS_2026_tab/Chen_Feng.jpg" alt="Chen Feng"/>
            <p class="speaker-name"><a href="https://engineering.nyu.edu/faculty/chen-feng">Chen Feng</a></p>
            <p class="speaker-role">Institute Associate Professor</p>
            <p class="speaker-affiliation">NYU Tandon School of Engineering</p>
            <p class="speaker-topic">Talk title to be announced</p>
          </div>
          <div class="speaker-card">
            <img src="/img/IROS_2026_tab/Koushil_Sreenath.jpg" alt="Koushil Sreenath"/>
            <p class="speaker-name"><a href="https://vcresearch.berkeley.edu/faculty/koushil-sreenath">Koushil Sreenath</a></p>
            <p class="speaker-role">Professor, Mechanical Engineering</p>
            <p class="speaker-affiliation">University of California, Berkeley</p>
            <p class="speaker-topic">Talk title to be announced</p>
          </div>
          <div class="speaker-card">
            <img src="/img/IROS_2026_tab/Carmelo_Sferrazza.jpg" alt="Carmelo Sferrazza"/>
            <p class="speaker-name"><a href="https://sferrazza.cc/">Carmelo (Carlo) Sferrazza</a></p>
            <p class="speaker-role">Incoming Assistant Professor, Mechanical Engineering</p>
            <p class="speaker-affiliation">The University of Texas at Austin</p>
            <p class="speaker-topic">Talk title to be announced</p>
          </div>
          <div class="speaker-card">
            <img src="/img/IROS_2026_tab/yuheng2024.jpg" alt="Yuheng Qiu"/>
            <p class="speaker-name"><a href="http://yuhengqiu.com/">Yuheng Qiu</a></p>
            <p class="speaker-role">Ph.D. Student, Mechanical Engineering</p>
            <p class="speaker-affiliation">Carnegie Mellon University</p>
            <p class="speaker-topic">Talk title to be announced</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Program Section -->
<section class="section content-section" id="program" style="padding-top: 1rem !important;">
  <div class="container">
    <h2 class="title is-2" style="text-align: left; margin-bottom: 2rem;">Program</h2>
    <div class="columns is-centered">
      <div class="column is-four-fifths">
        <table class="schedule-table">
          <tr>
            <th style="width:15%;">Time</th>
            <th style="width:25%;">Speaker</th>
            <th style="width:60%;">Topic</th>
          </tr>
          <tr>
            <td>8:30 - 8:40 AM</td>
            <td><strong>Shibo Zhao</strong></td>
            <td>Opening Address & Challenge Introduction</td>
          </tr>
          <tr>
            <td>8:40 - 9:10 AM</td>
            <td><strong>Marco Hutter</strong><br><span style="color:#999; font-size:0.85rem;">ETH Zurich</span></td>
            <td>Learning-based Locomotion and Control for Legged Robots</td>
          </tr>
          <tr>
            <td>9:10 - 9:40 AM</td>
            <td><strong>Davide Scaramuzza</strong><br><span style="color:#999; font-size:0.85rem;">University of Zurich</span></td>
            <td>Title to be announced</td>
          </tr>
          <tr>
            <td>9:40 - 10:10 AM</td>
            <td><strong>Carmelo Sferrazza</strong><br><span style="color:#999; font-size:0.85rem;">The University of Texas at Austin</span></td>
            <td>Title to be announced</td>
          </tr>
          <tr>
            <td>10:10 - 10:30 AM</td>
            <td><strong>Challenge Spotlight</strong></td>
            <td>Top 3 team spotlight talks (5 min presentation + 2 min Q&A each)</td>
          </tr>
          <tr class="break-row">
            <td>10:30 - 11:00 AM</td>
            <td colspan="2"><strong>Coffee Break</strong> — Poster session from challenge teams and contributed papers</td>
          </tr>
          <tr>
            <td>11:00 - 11:30 AM</td>
            <td><strong>Maani Ghaffari</strong><br><span style="color:#999; font-size:0.85rem;">University of Michigan</span></td>
            <td>Title to be announced</td>
          </tr>
          <tr>
            <td>11:30 - 12:00 PM</td>
            <td><strong>Chen Feng</strong><br><span style="color:#999; font-size:0.85rem;">NYU Tandon School of Engineering</span></td>
            <td>Title to be announced</td>
          </tr>
          <tr class="break-row">
            <td>12:00 - 1:30 PM</td>
            <td colspan="2"><strong>Lunch Break</strong> — Lunch and networking</td>
          </tr>
          <tr>
            <td>1:30 - 2:00 PM</td>
            <td><strong>Koushil Sreenath</strong><br><span style="color:#999; font-size:0.85rem;">University of California, Berkeley</span></td>
            <td>Title to be announced</td>
          </tr>
          <tr>
            <td>2:00 - 2:30 PM</td>
            <td><strong>Yuheng Qiu</strong><br><span style="color:#999; font-size:0.85rem;">Carnegie Mellon University</span></td>
            <td>Title to be announced</td>
          </tr>
          <tr>
            <td>2:30 - 3:00 PM</td>
            <td><strong>Poster Session</strong></td>
            <td>Contributed abstracts and demos</td>
          </tr>
          <tr class="break-row">
            <td>3:00 - 3:30 PM</td>
            <td colspan="2"><strong>Coffee Break</strong> — Networking and posters</td>
          </tr>
          <tr>
            <td>3:30 - 4:00 PM</td>
            <td><strong>Invited Speaker</strong><br><span style="color:#777; font-size:0.85rem;">To be announced</span></td>
            <td>Title to be announced</td>
          </tr>
          <tr>
            <td>4:00 - 4:30 PM</td>
            <td><strong>Wenshan Wang</strong><br><span style="color:#999; font-size:0.85rem;">Carnegie Mellon University</span></td>
            <td>Title to be announced</td>
          </tr>
          <tr>
            <td>4:30 - 5:00 PM</td>
            <td><strong>Panel Discussion</strong></td>
            <td>Future of Internal Perception</td>
          </tr>
          <tr>
            <td>5:00 - 5:15 PM</td>
            <td><strong>Shibo Zhao</strong></td>
            <td>Closing Remarks</td>
          </tr>
          <tr class="break-row">
            <td>5:15 - 5:45 PM</td>
            <td colspan="2"><strong>Open Networking</strong> — Networking among attendees</td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</section>

<!-- Organizers Section -->
<section class="section content-section" id="organizers" style="padding-top: 1rem !important;">
  <div class="container">
    <h2 class="title is-2" style="text-align: left; margin-bottom: 2rem;">Organizers</h2>
    <div class="columns is-centered">
      <div class="column is-four-fifths">
        <h3 class="title is-4" style="text-align: left; margin-bottom: 1rem;">Corresponding Organizers</h3>
        <div class="speaker-grid">
          <div class="speaker-card">
            <img src="/img/IROS_2026_tab/Guanya_Commencement.jpg" alt="Guanya Shi"/>
            <p class="speaker-name"><a href="https://www.gshi.me/">Guanya Shi</a></p>
            <p class="speaker-role">Assistant Professor, Robotics Institute</p>
            <p class="speaker-affiliation">Carnegie Mellon University</p>
          </div>
          <div class="speaker-card">
            <img src="/img/iccv_organizers/wenshan_wang.jpg" alt="Wenshan Wang"/>
            <p class="speaker-name"><a href="https://www.ri.cmu.edu/ri-faculty/wenshan-wang/">Wenshan Wang</a></p>
            <p class="speaker-role">Systems Scientist, Robotics Institute</p>
            <p class="speaker-affiliation">Carnegie Mellon University</p>
          </div>
          <div class="speaker-card">
            <img src="/img/team/shibozNew.png" alt="Shibo Zhao"/>
            <p class="speaker-name"><a href="https://shibowing.github.io/">Shibo Zhao</a></p>
            <p class="speaker-role">Ph.D. Candidate, Robotics Institute</p>
            <p class="speaker-affiliation">Carnegie Mellon University</p>
          </div>
        </div>

        <h3 class="title is-4" style="text-align: left; margin-top: 3rem; margin-bottom: 1rem;">Main Organizers</h3>
        <div class="speaker-grid">
          <div class="speaker-card">
            <img src="/img/invited_speakers/basti.jpg" alt="Sebastian Scherer"/>
            <p class="speaker-name"><a href="https://www.ri.cmu.edu/ri-faculty/sebastian-scherer/">Sebastian Scherer</a></p>
            <p class="speaker-role">Research Professor, Robotics Institute</p>
            <p class="speaker-affiliation">Carnegie Mellon University</p>
          </div>
          <div class="speaker-card">
            <img src="/img/invited_speakers/chenwang.jpg" alt="Chen Wang"/>
            <p class="speaker-name"><a href="https://chenwang.site/">Chen Wang</a></p>
            <p class="speaker-role">Assistant Professor, Computer Science and Engineering</p>
            <p class="speaker-affiliation">University at Buffalo</p>
          </div>
          <div class="speaker-card">
            <img src="/img/IROS_2026_tab/Muqing_Cao.jpg" alt="Muqing Cao"/>
            <p class="speaker-name"><a href="https://caomuqing.github.io/">Muqing Cao</a></p>
            <p class="speaker-role">Postdoc, Robotics Institute</p>
            <p class="speaker-affiliation">Carnegie Mellon University</p>
          </div>
          <div class="speaker-card">
            <img src="/img/IROS_2026_tab/Junyi_Geng.jpg" alt="Junyi Geng"/>
            <p class="speaker-name"><a href="https://ari-psu.github.io/">Junyi Geng</a></p>
            <p class="speaker-role">Assistant Professor, Aerospace Engineering</p>
            <p class="speaker-affiliation">Pennsylvania State University</p>
          </div>
          <div class="speaker-card">
            <img src="/img/IROS_2026_tab/yuheng2024.jpg" alt="Yuheng Qiu"/>
            <p class="speaker-name"><a href="http://yuhengqiu.com/">Yuheng Qiu</a></p>
            <p class="speaker-role">Ph.D. Student, Mechanical Engineering</p>
            <p class="speaker-affiliation">Carnegie Mellon University</p>
          </div>
          <div class="speaker-card">
            <img src="/img/IROS_2026_tab/Sifan Zhou.jpg" alt="Sifan Zhou"/>
            <p class="speaker-name"><a href="https://scholar.google.com/citations?hl=en&amp;user=kSdqoi0AAAAJ">Sifan Zhou</a></p>
            <p class="speaker-role">Ph.D. Student</p>
            <p class="speaker-affiliation">Carnegie Mellon University</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- JavaScript for TOC Scroll Behavior -->
<script>
  document.addEventListener('DOMContentLoaded', function() {
    const toc = document.querySelector('.toc');
    const mainTitle = document.getElementById('main-title');

    if (toc && mainTitle) {
      function checkTocVisibility() {
        const titleRect = mainTitle.getBoundingClientRect();
        if (titleRect.top <= 100) {
          toc.classList.add('show');
        } else {
          toc.classList.remove('show');
        }
      }
      window.addEventListener('scroll', checkTocVisibility);
      checkTocVisibility();
    }

    const tocLinks = document.querySelectorAll('.toc a');
    const sections = [];

    tocLinks.forEach(link => {
      const href = link.getAttribute('href');
      if (href && href.startsWith('#')) {
        const sectionId = href.substring(1);
        const section = document.getElementById(sectionId);
        if (section) {
          sections.push({ id: sectionId, element: section, link: link });
        }
      }
    });

    function updateActiveTocLink() {
      const scrollPosition = window.scrollY + 150;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      let currentSection = null;

      if (window.scrollY + windowHeight >= documentHeight - 50) {
        currentSection = sections[sections.length - 1];
      } else {
        for (let i = 0; i < sections.length; i++) {
          const section = sections[i];
          const rect = section.element.getBoundingClientRect();
          const sectionTop = rect.top + window.scrollY;
          const sectionBottom = sectionTop + rect.height;
          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            currentSection = section;
            break;
          }
        }
        if (!currentSection) {
          for (let i = sections.length - 1; i >= 0; i--) {
            const sectionTop = sections[i].element.getBoundingClientRect().top + window.scrollY;
            if (sectionTop <= scrollPosition) {
              currentSection = sections[i];
              break;
            }
          }
        }
      }

      tocLinks.forEach(link => link.classList.remove('active'));
      if (currentSection) {
        currentSection.link.classList.add('active');
      }
    }

    window.addEventListener('scroll', updateActiveTocLink);
    updateActiveTocLink();
  });
</script>
