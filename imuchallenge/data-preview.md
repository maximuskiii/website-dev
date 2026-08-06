---
title: Trajectory Preview
layout: page
show_sidebar: false
hide_footer: false
hide_hero: true
permalink: /imuchallenge/data/preview/
body_class: imu-preview-wide
---

<h1 class="imu-page-title">{% include imu-bot.html %}Trajectory Preview</h1>

<div id="imu-preview-root" class="imu-card">Loading trajectory preview...</div>

<!-- Import map for the 3D preview mode: three.js's OrbitControls addon imports "three"
     as a bare specifier internally, which only resolves via a map like this one. -->
<script type="importmap">
{ "imports": {
  "three": "https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.module.js",
  "three/addons/": "https://cdn.jsdelivr.net/npm/three@0.160.0/examples/jsm/"
}}
</script>
<script type="module" src="{{ site.baseurl }}/assets/js/imuchallenge-preview.js"></script>
