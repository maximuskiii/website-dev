---
title: IMU Challenge Data
layout: page
show_sidebar: false
hide_footer: false
hide_hero: true
permalink: /imuchallenge/data/
---

# Data

## Downloads

<ul class="imu-link-list">
  <li><a href="https://huggingface.co/Tartan-IMU" target="_blank" rel="noopener">Main Hugging Face Organization (Tartan-IMU)</a></li>
  <li><a href="https://huggingface.co/datasets/Tartan-IMU/Car/tree/main" target="_blank" rel="noopener">Car Dataset</a></li>
  <li><a href="https://huggingface.co/datasets/Tartan-IMU/Drone/tree/main" target="_blank" rel="noopener">Drone Dataset</a></li>
  <li><a href="https://huggingface.co/datasets/Tartan-IMU/Quadruped/tree/main" target="_blank" rel="noopener">Quadruped Dataset</a></li>
  <li><a href="https://huggingface.co/datasets/Tartan-IMU/Handheld/tree/main" target="_blank" rel="noopener">Handheld Dataset</a></li>
  <li><a href="#" aria-disabled="true">Humanoid Dataset (Placeholder: coming soon)</a></li>
</ul>

*Licensing note: licensing details are still being finalized with the maintainers and are currently WIP.*

## Dataset Schema

Each trajectory `.npz` includes:

- `retargetted_ts`
- `retargetted_imu` (`[:, :3]` acceleration, `[:, 3:]` gyroscope)
- `retargetted_pos`
- `retargetted_quat`

Ground truth alignment is included in the prepared files, and split organization is train/val/test.

## Data Explorer

<div class="imu-table-toolbar">
  <div id="imu-row-count">Loading metadata...</div>
</div>

<div class="imu-table-wrap">
  <table class="imu-data-table" id="imu-data-table" data-endpoint="{{ site.baseurl }}/assets/data/imuchallenge_metadata.json">
    <thead>
      <tr>
        <th data-col="platform">platform</th>
        <th data-col="split">split</th>
        <th data-col="traj_id">traj_id</th>
        <th data-col="npz_relpath">npz_relpath</th>
        <th data-col="inferred_source">source</th>
        <th data-col="n_samples">n_samples</th>
        <th data-col="duration_s">duration_s</th>
        <th data-col="sample_rate_hz">sample_rate_hz</th>
        <th data-col="file_size_bytes">file_size_bytes</th>
      </tr>
      <tr class="imu-filter-row" id="imu-filter-row"></tr>
    </thead>
    <tbody></tbody>
  </table>
</div>

<script src="{{ site.baseurl }}/assets/js/imuchallenge-data-explorer.js"></script>
