(function () {
  const table = document.getElementById('imu-data-table');
  if (!table) return;

  const endpoint = table.getAttribute('data-endpoint');
  const tbody = table.querySelector('tbody');
  const filterRow = document.getElementById('imu-filter-row');
  const countNode = document.getElementById('imu-row-count');

  const columns = [
    'platform', 'split', 'traj_id', 'npz_relpath', 'inferred_source',
    'n_samples', 'duration_s', 'sample_rate_hz',
    'file_size_bytes'
  ];

  const nonFilterable = new Set([
    'traj_id',
    'npz_relpath',
    'n_samples',
    'duration_s',
    'sample_rate_hz',
    'file_size_bytes'
  ]);

  let rows = [];
  let sortBy = 'traj_id';
  let sortAsc = true;

  function platformClass(v) {
    const p = String(v || '').toLowerCase();
    if (p === 'car') return 'car';
    if (p === 'drone') return 'drone';
    if (p === 'quadruped' || p === 'dog') return 'quadruped';
    if (p === 'handheld' || p === 'human') return 'handheld';
    return 'unknown';
  }

  function fmtValue(col, v) {
    if (v === null || v === undefined) return '';
    if (col === 'platform') {
      const p = String(v).toLowerCase();
      if (p === 'dog') return 'quadruped';
      if (p === 'human') return 'handheld';
      return String(v);
    }
    if (col === 'file_size_bytes') return (Number(v) / (1024 * 1024)).toFixed(2) + ' MiB';
    if (col === 'duration_s') return Number(v).toFixed(3);
    if (typeof v === 'boolean') return v ? 'true' : 'false';
    return String(v);
  }

  function makeFilters() {
    filterRow.innerHTML = '';
    columns.forEach((col) => {
      const th = document.createElement('th');
      if (nonFilterable.has(col)) {
        th.textContent = '';
        filterRow.appendChild(th);
        return;
      }
      const sel = document.createElement('select');
      sel.dataset.col = col;
      sel.addEventListener('change', render);
      th.appendChild(sel);
      filterRow.appendChild(th);
    });
  }

  function populateFilterOptions() {
    filterRow.querySelectorAll('select').forEach((sel) => {
      const col = sel.dataset.col;
      const vals = Array.from(new Set(rows.map((r) => String(r[col])))).sort((a, b) => a.localeCompare(b));
      sel.innerHTML = '<option value="">All</option>' + vals.map((v) => `<option value="${v.replace(/"/g, '&quot;')}">${v}</option>`).join('');
    });
  }

  function getFilters() {
    const filters = {};
    filterRow.querySelectorAll('select').forEach((sel) => {
      if (sel.value !== '') filters[sel.dataset.col] = sel.value;
    });
    return filters;
  }

  function applyFilters(data) {
    const filters = getFilters();
    return data.filter((r) => {
      for (const [k, q] of Object.entries(filters)) {
        if (String(r[k]) !== String(q)) return false;
      }
      return true;
    });
  }

  function applySort(data) {
    return data.slice().sort((a, b) => {
      const av = a[sortBy];
      const bv = b[sortBy];
      const an = Number(av);
      const bn = Number(bv);
      let cmp = 0;
      if (!Number.isNaN(an) && !Number.isNaN(bn) && av !== '' && bv !== '') cmp = an - bn;
      else cmp = String(av ?? '').localeCompare(String(bv ?? ''), undefined, { numeric: true, sensitivity: 'base' });
      return sortAsc ? cmp : -cmp;
    });
  }

  function render() {
    const filtered = applyFilters(rows);
    const sorted = applySort(filtered);
    const rowTint = {
      car: '#fff7ed',
      drone: '#e8f4ff',
      quadruped: '#f0fdf4',
      handheld: '#faf5ff',
      unknown: '#ffffff'
    };
    const html = sorted.map((r) => {
      const pClass = platformClass(r.platform);
      const tds = columns.map((col) => {
        if (col === 'platform') return `<td><span class="imu-platform-badge imu-p-${pClass}">${fmtValue(col, r[col])}</span></td>`;
        return `<td style="background:${rowTint[pClass] || '#fff'}">${fmtValue(col, r[col])}</td>`;
      }).join('');
      return `<tr class="imu-row-${pClass}">${tds}</tr>`;
    }).join('');
    tbody.innerHTML = html;
    countNode.textContent = `${sorted.length} / ${rows.length} trajectories shown`;
  }

  function initSortHeaders() {
    table.querySelectorAll('thead tr:first-child th').forEach((th) => {
      th.addEventListener('click', () => {
        const col = th.dataset.col;
        if (!col) return;
        if (sortBy === col) sortAsc = !sortAsc;
        else { sortBy = col; sortAsc = true; }
        render();
      });
    });
  }

  makeFilters();
  initSortHeaders();

  fetch(endpoint)
    .then((r) => r.json())
    .then((data) => {
      rows = data;
      populateFilterOptions();
      render();
    })
    .catch((e) => {
      countNode.textContent = 'Failed to load metadata: ' + e;
    });
})();
