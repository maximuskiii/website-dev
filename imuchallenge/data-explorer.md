---
title: Data Explorer
layout: page
show_sidebar: false
hide_footer: false
hide_hero: true
permalink: /imuchallenge/data/explorer/
---

<h1 class="imu-page-title">{% include imu-bot.html %}Data Explorer</h1>

<p>Browse every trajectory in the dataset — filter by platform or split, sort any column, and open a live model preview. See the <a href="/imuchallenge/data/">Data page</a> for schema, sensor specs, and split counts.</p>

<p>All trajectories are sampled at <strong>200 Hz</strong>. Each 1-second window contains exactly 200 IMU samples.</p>

<h2 style="margin-bottom:0.35rem;">Browse by platform</h2>
<p style="margin-top:0;color:#4b5563;font-size:0.92rem;">Click a platform to jump to its trajectories in the table below, or open its dedicated page for sensor and domain details.</p>

<div class="imu-explore-platform-grid" role="group" aria-label="Jump to a platform in the trajectory table">
  <div class="imu-explore-platform-tile">
    <a class="imu-platform-feature" href="#imu-data-table" data-platform="car">
      <img src="/img/imuchallenge/previews/car_train_0000.png" alt="Car trajectory preview" loading="lazy" decoding="async">
      <span>Car</span>
    </a>
    <a class="imu-explore-platform-tile-details" href="/imuchallenge/platforms/car/">Platform details &rarr;</a>
  </div>
  <div class="imu-explore-platform-tile">
    <a class="imu-platform-feature" href="#imu-data-table" data-platform="drone">
      <img src="/img/imuchallenge/previews/drone_train_0000.png" alt="Drone trajectory preview" loading="lazy" decoding="async">
      <span>Drone</span>
    </a>
    <a class="imu-explore-platform-tile-details" href="/imuchallenge/platforms/drone/">Platform details &rarr;</a>
  </div>
  <div class="imu-explore-platform-tile">
    <a class="imu-platform-feature" href="#imu-data-table" data-platform="quadruped">
      <img src="/img/imuchallenge/previews/quadruped_train_0000.png" alt="Quadruped trajectory preview" loading="lazy" decoding="async">
      <span>Quadruped</span>
    </a>
    <a class="imu-explore-platform-tile-details" href="/imuchallenge/platforms/quadruped/">Platform details &rarr;</a>
  </div>
  <div class="imu-explore-platform-tile">
    <a class="imu-platform-feature" href="#imu-data-table" data-platform="handheld">
      <img src="/img/imuchallenge/previews/handheld_train_0000.png" alt="Handheld trajectory preview" loading="lazy" decoding="async">
      <span>Handheld</span>
    </a>
    <a class="imu-explore-platform-tile-details" href="/imuchallenge/platforms/handheld/">Platform details &rarr;</a>
  </div>
</div>

<div class="imu-note" style="margin:0.5rem 0 1rem 0;font-size:0.85rem;">
  <strong>Tip:</strong> click any row — or its <strong>&#9654; Live Preview</strong> button — to see a live model preview in action.
</div>

<div class="imu-table-toolbar">
  <div id="imu-row-count">Loading metadata...</div>
</div>

<div class="imu-table-wrap">
  <table class="imu-data-table" id="imu-data-table" data-endpoint="{{ site.baseurl }}/assets/data/imuchallenge_metadata.json">
    <thead>
      <tr>
        <th data-col="platform">Platform</th>
        <th data-col="split">Split</th>
        <th data-col="traj_id">Trajectory</th>
        <th data-col="npz_relpath">Preview</th>
        <th data-col="inferred_source">Source</th>
        <th data-col="n_samples">Samples</th>
        <th data-col="duration_s">Duration</th>
        <th data-col="file_size_bytes">File size</th>
      </tr>
      <tr class="imu-filter-row" id="imu-filter-row"></tr>
    </thead>
    <tbody></tbody>
  </table>
</div>

<script src="{{ site.baseurl }}/assets/js/imuchallenge-data-explorer.js"></script>
