---
title: IMU Challenge
subtitle: Cross-Platform Inertial Positioning Benchmark
layout: page
show_sidebar: false
hide_footer: false
hide_hero: false
hero_height: is-medium
hero_image: /img/datasets/dataset_video_short.gif
hero_kpis:
  - value: "359"
    label: "Trajectories"
  - value: "41.39 h"
    label: "Total Duration"
  - value: "5"
    label: "Platforms"
permalink: /imuchallenge/
---

## What This Challenge Is

The IMU Challenge is a CMU AirLab competition and benchmark for cross-platform inertial positioning.

Participants train and evaluate models on shared train/validation splits and are ranked on held-out test sets. The benchmark is motivated by the Tartan IMU direction: large-scale pretraining, efficient adaptation, and robust generalization across platforms.

## Placeholder Intro Video: Learning IMU Odometry

<video controls preload="metadata" style="display:block; width:100%; border-radius:12px; border:1px solid #d8ebf9; margin:0 0 1rem 0;">
  <source src="/img/science_robotics/learning_imu_odometry_intro.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

<div class="imu-note">
All official dataset packages, download links, and the live metadata explorer are published on <a href="/imuchallenge/data/"><strong>/imuchallenge/data</strong></a>.
</div>

## Challenge Goal

Build IMU models that improve cross-platform robustness and beat current state-of-the-art transfer performance under a common benchmark protocol.

## Benchmark Structure

<div class="imu-card"><strong>Train:</strong> development data for model fitting and ablation.</div>
<div class="imu-card"><strong>Validation:</strong> public split for model selection and error analysis.</div>
<div class="imu-card"><strong>Test:</strong> held-out benchmark split for official ranking.</div>

## Start Here

- [Setup](/imuchallenge/setup/)
- [Platforms](/imuchallenge/platforms/)
- [Data](/imuchallenge/data/)
- [Announcements](/imuchallenge/announcements/)
- [About](/imuchallenge/about/)

## References

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
  title={IMU Challenge: Cross-Platform Inertial Positioning Benchmark},
  author={CMU AirLab and Super Odometry Group},
  year={2026},
  howpublished={\url{https://superodometry.com/imuchallenge}},
  note={Dataset and benchmark challenge page}
}
```
