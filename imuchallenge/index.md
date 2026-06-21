---
title: IMU Odometry Challenge
subtitle: Cross-Platform Inertial Positioning Benchmark
layout: page
show_sidebar: false
hide_footer: false
hide_hero: false
hero_height: is-medium
hero_image: /img/datasets/dataset_video_short.gif
hero_link: /imuchallenge/setup/
hero_link_text: GET STARTED
hero_link2: https://forms.gle/oRr4rCNxqTP1U6uS8
hero_link_text2: REGISTER
hero_subtitle2: "Held in conjunction with Beyond Exteroception: Interoceptive Perception for Resilient Robotics Workshop at IROS 2026"
permalink: /imuchallenge/
---

## Announcements

<div class="imu-announcements-feed">
  <div class="imu-card">
    <strong>May 30, 2026:</strong> The official dataset release hub is set to <a href="/imuchallenge/data/"><code>/imuchallenge/data/</code></a>.
  </div>
  <div class="imu-card">
    <strong>May 30, 2026:</strong> Platform pages (Car, Drone, Quadruped, Handheld) are published.
  </div>
  <div class="imu-card">
    <strong>May 30, 2026:</strong> Initial IMU Odometry Challenge website structure is now live under the <code>/imuchallenge/</code> namespace.
  </div>
</div>

## What This Challenge Is

The IMU Odometry Challenge is a CMU AirLab competition and benchmark for neural inertial odometry.

Participants train and evaluate models on shared train/validation splits and are ranked on held-out test sets. The benchmark is motivated by the Tartan IMU direction: large-scale pretraining, efficient adaptation, and robust generalization across platforms.

This challenge is held in conjunction with the [IROS'26 Workshop: "Beyond Exteroception: Interoceptive Perception for Resilient Robotics"](/interoception/).

## Intro Video: Learning IMU Odometry

<video controls preload="metadata" style="display:block; width:100%; border-radius:12px; border:1px solid #d8ebf9; margin:0 0 1rem 0;">
  <source src="/img/science_robotics/learning_imu_odometry_intro.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

<div class="imu-note">
All official dataset packages, download links, and the live metadata explorer are published on <a href="/imuchallenge/data/"><strong>/imuchallenge/data</strong></a>.
</div>

## Try the Live Demo

<div class="imu-card">
Run our reference TartanIMU specialist models on your own IMU sequences directly in the browser — no setup required. <a href="https://huggingface.co/spaces/Tartan-IMU/imu_odometry_challenge_demo" target="_blank" rel="noopener"><strong>Launch the Hugging Face Space demo &rarr;</strong></a>
</div>

## Challenge Goal

Build IMU odometry models that generalize across robot platforms and beat current state-of-the-art performance under a shared benchmark protocol, surfacing research questions for the workshop discussion on interoceptive robot perception.

### Problem Formulation

**Input:** Raw 6-DOF IMU measurements — accelerometer (a_x, a_y, a_z) in m/s² and gyroscope (ω_x, ω_y, ω_z) in rad/s — sampled at **200 Hz**. Each input window spans **1 second (200 samples)**; models receive sequences of **10 consecutive windows (10 s total)**.

**Output:** Per-window **3D body-frame velocity predictions v = (v_x, v_y, v_z)** in m/s. Positions are derived by the organizers via integration with ground-truth orientation.

### Evaluation Metrics

Submissions are ranked on held-out test trajectories across all platforms using:

<div class="imu-card"><strong>Velocity RMSE</strong> &nbsp;<em>(primary ranking metric)</em><br>Macro-averaged velocity RMSE — mean of per-platform RMSEs — so platform size imbalance cannot be gamed.</div>

<div class="imu-card"><strong>ATE — Absolute Trajectory Error</strong> &nbsp;<em>(secondary metric)</em><br>Position RMSE over 5 m drift-corrected segments, computed by the organizers by integrating predicted velocities with ground-truth orientation.</div>

## Benchmark Structure

<div class="imu-card"><strong>Train:</strong> development data for model fitting and ablation.</div>
<div class="imu-card"><strong>Validation:</strong> public split for model selection and error analysis.</div>
<div class="imu-card"><strong>Test:</strong> held-out benchmark split for official ranking.</div>

## Start Here

- [Setup](/imuchallenge/setup/)
- [Platforms](/imuchallenge/platforms/)
- [Data](/imuchallenge/data/)
- [About](/imuchallenge/about/)

## BibTeX

```bibtex
@inproceedings{zhao2025tartanimu,
  title={Tartan IMU: A Light Foundation Model for Inertial Positioning in Robotics},
  author={Zhao, Shibo and Yagnyatinskiy, Maxim and others},
  booktitle={Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)},
  year={2025},
  url={https://openaccess.thecvf.com/content/CVPR2025/papers/Zhao_Tartan_IMU_A_Light_Foundation_Model_for_Inertial_Positioning_in_CVPR_2025_paper.pdf}
}
```

```bibtex
@misc{imuchallenge2026,
  title={IMU Odometry Challenge: Cross-Platform Inertial Positioning Benchmark},
  author={CMU AirLab and Super Odometry Group},
  year={2026},
  howpublished={\url{https://superodometry.com/imuchallenge}},
  note={Dataset and benchmark challenge page}
}
```
