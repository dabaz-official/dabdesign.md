(function () {
  'use strict';

  var root = document.documentElement;

  /* ---------- token helpers ---------- */
  function raw(name) {
    return getComputedStyle(root).getPropertyValue(name).trim();
  }
  function resolve(value, depth) {
    depth = depth || 0;
    if (depth > 10) return value;
    var m = value.match(/^var\(\s*(--[^,\s)]+)\s*\)$/);
    return m ? resolve(raw(m[1]), depth + 1) : value;
  }
  function token(name) { return resolve(raw(name)); }

  function parseColor(value) {
    var s = String(value).trim();
    var hex = s.match(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i);
    if (hex) {
      var h = hex[1];
      if (h.length === 3) h = h[0] + h[0] + h[1] + h[1] + h[2] + h[2];
      return [
        parseInt(h.slice(0, 2), 16),
        parseInt(h.slice(2, 4), 16),
        parseInt(h.slice(4, 6), 16)
      ];
    }
    var rgb = s.match(/^rgba?\(([^)]+)\)$/i);
    if (rgb) {
      var parts = rgb[1].split(',').map(function (x) { return parseFloat(x); });
      return [parts[0], parts[1], parts[2]];
    }
    return null;
  }

  function channel(c) {
    var v = c / 255;
    return v <= 0.04045 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
  }
  function luminance(rgb) {
    return 0.2126 * channel(rgb[0]) + 0.7152 * channel(rgb[1]) + 0.0722 * channel(rgb[2]);
  }
  function contrast(fg, bg) {
    var a = parseColor(fg);
    var b = parseColor(bg);
    if (!a || !b) return null;
    var la = luminance(a);
    var lb = luminance(b);
    var hi = Math.max(la, lb);
    var lo = Math.min(la, lb);
    return (hi + 0.05) / (lo + 0.05);
  }

  /* ---------- theme ---------- */
  var THEME_KEY = 'dabwave-foundation-theme';
  var mq = window.matchMedia('(prefers-color-scheme: dark)');

  function storedPref() {
    try { return localStorage.getItem(THEME_KEY) || 'system'; } catch (e) { return 'system'; }
  }
  function resolved(pref) {
    if (pref === 'system') return mq.matches ? 'dark' : 'light';
    return pref;
  }
  function applyTheme(pref) {
    root.dataset.theme = resolved(pref);
    var buttons = document.querySelectorAll('[data-theme-value]');
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].setAttribute('aria-pressed', String(buttons[i].dataset.themeValue === pref));
    }
    renderRoleLabels();
    renderContrast();
  }

  var ROLE_PRIMITIVES = {
    background: { light: 'gray-50', dark: 'gray-950' },
    surface: { light: 'gray-0', dark: 'gray-900' },
    'surface-secondary': { light: 'gray-100', dark: 'gray-800' }
  };
  function renderRoleLabels() {
    var theme = root.dataset.theme;
    Object.keys(ROLE_PRIMITIVES).forEach(function (role) {
      var el = document.querySelector('[data-role-primitive="' + role + '"]');
      if (el) el.textContent = ROLE_PRIMITIVES[role][theme];
    });
  }

  var themeButtons = document.querySelectorAll('[data-theme-value]');
  for (var i = 0; i < themeButtons.length; i++) {
    themeButtons[i].addEventListener('click', function () {
      var pref = this.dataset.themeValue;
      try { localStorage.setItem(THEME_KEY, pref); } catch (e) {}
      applyTheme(pref);
    });
  }
  mq.addEventListener('change', function () {
    if (storedPref() === 'system') applyTheme('system');
  });

  /* ---------- viewport readout ---------- */
  var readout = document.getElementById('viewport-readout');
  var inline = document.getElementById('viewport-inline');
  var rangeEl = document.getElementById('active-range');

  function activeRange(w) {
    if (w < 640) return 'base — below 640px';
    if (w < 768) return 'breakpoint-sm — 640–767px';
    if (w < 1024) return 'breakpoint-md — 768–1023px';
    if (w < 1280) return 'breakpoint-lg — 1024–1279px';
    if (w < 1536) return 'breakpoint-xl — 1280–1535px';
    return 'breakpoint-2xl — 1536px and up';
  }
  function updateViewport() {
    var text = window.innerWidth + ' × ' + window.innerHeight + ' px';
    if (readout) readout.textContent = text;
    if (inline) inline.textContent = text;
    if (rangeEl) rangeEl.textContent = activeRange(window.innerWidth);
  }
  window.addEventListener('resize', updateViewport);

  /* ---------- 2. palette ---------- */
  var GRAYS = [
    'gray-0', 'gray-50', 'gray-100', 'gray-200', 'gray-300', 'gray-400', 'gray-500',
    'gray-600', 'gray-700', 'gray-800', 'gray-900', 'gray-950', 'gray-1000'
  ];
  function renderSwatches() {
    var grid = document.getElementById('swatches');
    if (!grid) return;
    GRAYS.forEach(function (name) {
      var item = document.createElement('div');
      item.className = 'swatch-item';
      var chip = document.createElement('div');
      chip.className = 'swatch';
      chip.style.setProperty('--swatch', 'var(--' + name + ')');
      var label = document.createElement('span');
      label.className = 'swatch__name';
      label.textContent = name;
      var value = document.createElement('span');
      value.className = 'swatch__hex';
      value.textContent = token('--' + name);
      item.appendChild(chip);
      item.appendChild(label);
      item.appendChild(value);
      grid.appendChild(item);
    });
  }

  /* ---------- 3. typography ---------- */
  var TYPES = [
    { token: 'text-display', spec: 'clamp(2.25rem, 1.5rem + 3vw, 3rem) · 1.1 · 600', en: 'Design with intent', zh: '以一致为起点', mix: 'DabWave 2026' },
    { token: 'text-h1', spec: 'clamp(1.875rem, 1.5rem + 1.5vw, 2.25rem) · 1.2 · 600', en: 'A system that holds', zh: '系统的骨架', mix: 'DabWave 设计系统' },
    { token: 'text-h2', spec: '1.5rem · 1.2 · 600', en: 'Section heading', zh: '章节标题', mix: 'Foundation 2026' },
    { token: 'text-h3', spec: '1.25rem · 1.3 · 600', en: 'Subsection heading', zh: '小节标题', mix: 'Tokens and roles' },
    { token: 'text-h4', spec: '1.125rem · 1.4 · 600', en: 'Card heading', zh: '卡片标题', mix: 'Light and dark' },
    { token: 'text-body-lg', spec: '1.125rem · 1.7 · 400', en: 'Lead paragraph text for introductions.', zh: '用于导语的较大正文。', mix: 'DabWave 让每个站点保持一致。' },
    { token: 'text-body', spec: '1rem · 1.7 · 400', en: 'Default body text sits at 16px with 1.7 line height.', zh: '默认正文为 16px，行高 1.7。', mix: '中英混排 DabWave 2026 测试。' },
    { token: 'text-body-sm', spec: '0.875rem · 1.6 · 400', en: 'Supporting text at 14px.', zh: '辅助说明文字，14px。', mix: '辅助文字 mixed with Latin.' },
    { token: 'text-label', spec: '0.875rem · 1.4 · 600', en: 'Button label', zh: '按钮标签', mix: 'Label 标签' },
    { token: 'text-caption', spec: '0.75rem · 1.5 · 400', en: 'Metadata and hints at 12px.', zh: '元信息与提示，12px。', mix: 'Caption 元信息' }
  ];
  function sample(cls, text, lang) {
    var p = document.createElement('p');
    p.className = cls;
    if (lang) p.setAttribute('lang', lang);
    p.textContent = text;
    return p;
  }
  function renderTypes() {
    var host = document.getElementById('type-specimens');
    if (!host) return;
    TYPES.forEach(function (item) {
      var row = document.createElement('div');
      row.className = 'type-row';
      var meta = document.createElement('div');
      meta.className = 'type-row__meta';
      var code = document.createElement('code');
      code.textContent = item.token;
      var spec = document.createElement('span');
      spec.textContent = item.spec;
      meta.appendChild(code);
      meta.appendChild(spec);
      var samples = document.createElement('div');
      samples.className = 'type-row__samples';
      samples.appendChild(sample(item.token, item.en));
      samples.appendChild(sample(item.token, item.zh, 'zh-CN'));
      samples.appendChild(sample(item.token, item.mix));
      row.appendChild(meta);
      row.appendChild(samples);
      host.appendChild(row);
    });
  }

  /* ---------- 4. spacing ---------- */
  var SPACES = ['space-0', 'space-0-5', 'space-1', 'space-2', 'space-3', 'space-4', 'space-5',
    'space-6', 'space-8', 'space-10', 'space-12', 'space-16', 'space-20', 'space-24'];
  function renderSpaces() {
    var host = document.getElementById('space-list');
    if (!host) return;
    SPACES.forEach(function (name) {
      var row = document.createElement('div');
      row.className = 'space-row';
      var code = document.createElement('code');
      code.textContent = name;
      var bar = document.createElement('span');
      bar.className = 'space-bar';
      bar.style.width = 'var(--' + name + ')';
      var value = document.createElement('span');
      value.className = 'space-row__value';
      value.textContent = token('--' + name);
      row.appendChild(code);
      row.appendChild(bar);
      row.appendChild(value);
      host.appendChild(row);
    });
  }

  /* ---------- 5. radius ---------- */
  var RADII = ['radius-none', 'radius-xs', 'radius-sm', 'radius-md', 'radius-lg', 'radius-pill', 'radius-full'];
  function renderRadii() {
    var host = document.getElementById('radius-grid');
    if (!host) return;
    RADII.forEach(function (name) {
      var item = document.createElement('div');
      item.className = 'radius-item';
      var box = document.createElement('div');
      box.className = 'radius-box';
      if (name === 'radius-pill') box.classList.add('radius-box--pill');
      if (name === 'radius-full') box.classList.add('radius-box--full');
      box.style.borderRadius = 'var(--' + name + ')';
      var code = document.createElement('code');
      code.textContent = name + ' · ' + token('--' + name);
      item.appendChild(box);
      item.appendChild(code);
      host.appendChild(item);
    });
  }

  /* ---------- 6. sizing ---------- */
  var ICONS = [['size-icon-sm', '16'], ['size-icon-md', '20'], ['size-icon-lg', '24'], ['size-icon-xl', '32']];
  var CONTROLS = [['control-height-sm', 'sm'], ['control-height-md', 'md'], ['control-height-lg', 'lg']];
  function renderSizing() {
    var icons = document.getElementById('icon-row');
    if (icons) {
      ICONS.forEach(function (pair) {
        var item = document.createElement('div');
        item.className = 'icon-item';
        var box = document.createElement('div');
        box.className = 'icon-box';
        box.style.width = 'var(--' + pair[0] + ')';
        box.style.height = 'var(--' + pair[0] + ')';
        box.textContent = pair[1];
        var code = document.createElement('code');
        code.textContent = pair[0] + ' · ' + token('--' + pair[0]);
        item.appendChild(box);
        item.appendChild(code);
        icons.appendChild(item);
      });
    }
    var controls = document.getElementById('control-row');
    if (controls) {
      CONTROLS.forEach(function (pair) {
        var item = document.createElement('div');
        item.className = 'control-item';
        var box = document.createElement('div');
        box.className = 'control-box';
        box.style.height = 'var(--' + pair[0] + ')';
        box.textContent = pair[1];
        var code = document.createElement('code');
        code.textContent = pair[0] + ' · ' + token('--' + pair[0]);
        item.appendChild(box);
        item.appendChild(code);
        controls.appendChild(item);
      });
    }
  }

  /* ---------- 8. containers ---------- */
  var CONTAINERS = ['container-sm', 'container-md', 'container-lg', 'container-xl', 'container-2xl', 'container-fluid'];
  function renderContainers() {
    var host = document.getElementById('container-list');
    if (!host) return;
    CONTAINERS.forEach(function (name) {
      var demo = document.createElement('div');
      demo.className = 'container-demo';
      var bar = document.createElement('div');
      bar.className = 'container-demo__bar';
      bar.style.maxWidth = 'var(--' + name + ')';
      bar.textContent = name + ' · ' + token('--' + name);
      demo.appendChild(bar);
      host.appendChild(demo);
    });
  }

  /* ---------- 10. contrast ---------- */
  var PAIRS = [
    ['text-primary on background', '--color-text-primary', '--color-background', 4.5],
    ['text-primary on surface', '--color-text-primary', '--color-surface', 4.5],
    ['text-primary on surface-secondary', '--color-text-primary', '--color-surface-secondary', 4.5],
    ['text-secondary on background', '--color-text-secondary', '--color-background', 4.5],
    ['text-secondary on surface', '--color-text-secondary', '--color-surface', 4.5],
    ['text-secondary on surface-secondary', '--color-text-secondary', '--color-surface-secondary', 4.5],
    ['text-tertiary on background', '--color-text-tertiary', '--color-background', 4.5],
    ['text-tertiary on surface', '--color-text-tertiary', '--color-surface', 4.5],
    ['text-tertiary on surface-secondary', '--color-text-tertiary', '--color-surface-secondary', 4.5],
    ['text-inverse on text-primary surface', '--color-text-inverse', '--color-text-primary', 4.5],
    ['text-disabled on surface', '--color-text-disabled', '--color-surface', 4.5, true],
    ['border-strong on background', '--color-border-strong', '--color-background', 3],
    ['border-strong on surface', '--color-border-strong', '--color-surface', 3],
    ['border-strong on surface-secondary', '--color-border-strong', '--color-surface-secondary', 3],
    ['focus on background', '--color-focus', '--color-background', 3],
    ['focus on surface', '--color-focus', '--color-surface', 3],
    ['focus on surface-secondary', '--color-focus', '--color-surface-secondary', 3],
    ['on-success on success', '--color-on-success', '--color-success', 4.5],
    ['on-warning on warning', '--color-on-warning', '--color-warning', 4.5],
    ['on-danger on danger', '--color-on-danger', '--color-danger', 4.5],
    ['success-strong on success-subtle', '--color-success-strong', '--color-success-subtle', 4.5],
    ['warning-strong on warning-subtle', '--color-warning-strong', '--color-warning-subtle', 4.5],
    ['danger-strong on danger-subtle', '--color-danger-strong', '--color-danger-subtle', 4.5],
    ['selection-fg on selection-bg', '--color-selection-fg', '--color-selection-bg', 4.5]
  ];

  function renderContrast() {
    var body = document.getElementById('contrast-body');
    var summary = document.getElementById('contrast-summary');
    if (!body) return;
    body.textContent = '';

    var pass = 0;
    var fail = 0;
    var exempt = 0;

    PAIRS.forEach(function (pair) {
      var fg = token(pair[1]);
      var bg = token(pair[2]);
      var min = pair[3];
      var isExempt = pair[4] === true;
      var value = contrast(fg, bg);

      var tr = document.createElement('tr');
      var c1 = document.createElement('td');
      c1.textContent = pair[0];
      var c2 = document.createElement('td');
      c2.textContent = value === null ? 'n/a' : value.toFixed(2) + ':1';
      var c3 = document.createElement('td');
      c3.textContent = isExempt ? '—' : min + ':1';
      var c4 = document.createElement('td');
      var verdict = document.createElement('span');
      verdict.className = 'verdict';

      if (isExempt) {
        verdict.classList.add('verdict--exempt');
        verdict.textContent = 'exempt';
        exempt++;
      } else if (value !== null && value >= min) {
        verdict.classList.add('verdict--pass');
        verdict.textContent = 'pass';
        pass++;
      } else {
        verdict.classList.add('verdict--fail');
        verdict.textContent = 'FAIL';
        fail++;
      }

      c4.appendChild(verdict);
      tr.appendChild(c1);
      tr.appendChild(c2);
      tr.appendChild(c3);
      tr.appendChild(c4);
      body.appendChild(tr);
    });

    if (summary) {
      summary.textContent = pass + ' pass · ' + fail + ' fail · ' + exempt +
        ' exempt (recorded) — computed from the active theme\'s resolved variables.';
    }
  }

  /* ---------- boot ---------- */
  renderSwatches();
  renderTypes();
  renderSpaces();
  renderRadii();
  renderSizing();
  renderContainers();
  updateViewport();
  applyTheme(storedPref());
})();
