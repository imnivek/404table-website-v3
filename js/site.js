/* =========================================================
   404TABLE 官網 V3 — 共用互動
   抽屜 / reveal / 滾動進度 / toast / modal / 假送出 / 課程篩選
   ========================================================= */
(function () {
  'use strict';

  /* ---- 行動版選單抽屜 ---- */
  function initDrawer() {
    var openBtn = document.getElementById('menu-open');
    var drawer = document.getElementById('mobile-drawer');
    if (!drawer) return;
    function open() { drawer.classList.add('show'); document.body.style.overflow = 'hidden'; }
    function close() { drawer.classList.remove('show'); document.body.style.overflow = ''; }
    if (openBtn) openBtn.addEventListener('click', open);
    drawer.querySelectorAll('a').forEach(function (a) { a.addEventListener('click', close); });
    var closeBtn = document.getElementById('menu-close');
    if (closeBtn) closeBtn.addEventListener('click', close);
  }

  /* ---- 滾動進度條 ---- */
  function initProgress() {
    var bar = document.getElementById('scroll-progress');
    if (!bar) return;
    function update() {
      var h = document.documentElement;
      var max = h.scrollHeight - h.clientHeight;
      bar.style.width = (max > 0 ? (h.scrollTop / max) * 100 : 0) + '%';
    }
    document.addEventListener('scroll', update, { passive: true });
    update();
  }

  /* ---- 進場淡入 ---- */
  function initReveal() {
    var els = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window) || !els.length) {
      els.forEach(function (el) { el.classList.add('in'); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -6% 0px' });
    els.forEach(function (el) { io.observe(el); });
  }

  /* ---- Toast ---- */
  var toastEl;
  function toast(msg) {
    if (!toastEl) {
      toastEl = document.createElement('div');
      toastEl.className = 'toast';
      document.body.appendChild(toastEl);
    }
    toastEl.innerHTML = '<span class="material-symbols-outlined">check_circle</span><span>' + msg + '</span>';
    toastEl.classList.add('show');
    clearTimeout(toastEl._t);
    toastEl._t = setTimeout(function () { toastEl.classList.remove('show'); }, 3200);
  }
  window.tableToast = toast;

  /* ---- Modal ---- */
  function closeAnyModal() {
    var open = document.querySelector('.modal-backdrop.open');
    if (open) { open.classList.remove('open'); document.body.style.overflow = ''; }
  }
  function initModals() {
    document.addEventListener('click', function (e) {
      var opener = e.target.closest('[data-modal-open]');
      if (opener) {
        var m = document.getElementById(opener.getAttribute('data-modal-open'));
        if (m) {
          m.classList.add('open');
          document.body.style.overflow = 'hidden';
          var title = opener.getAttribute('data-title');
          if (title) {
            var slot = m.querySelector('[data-fill-title]');
            if (slot) slot.textContent = title;
            var hidden = m.querySelector('input[name="項目"]');
            if (hidden) hidden.value = title;
          }
        }
        return;
      }
      if (e.target.closest('[data-modal-close]') || e.target.classList.contains('modal-backdrop')) {
        closeAnyModal();
      }
    });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeAnyModal(); });
  }

  /* ---- 表單假送出 ---- */
  function initForms() {
    document.querySelectorAll('form[data-fake-submit]').forEach(function (form) {
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        var msg = form.getAttribute('data-success') || '已收到你的資料，我們會盡快與你聯絡！';
        form.reset();
        var modal = form.closest('.modal-backdrop');
        if (modal) { modal.classList.remove('open'); document.body.style.overflow = ''; }
        toast(msg);
      });
    });
  }

  /* ---- 課程查找：左側分類 + 關鍵字 + 排序（電商「分類找商品」式） ---- */
  function initCourses() {
    var grid = document.getElementById('course-results');
    if (!grid) return;
    var cards = Array.prototype.slice.call(grid.querySelectorAll('[data-cat]'));
    var original = cards.slice();               // 推薦排序＝原始順序
    var chips = document.querySelectorAll('.cat-nav [data-filter]');
    var searchEl = document.querySelector('[data-search]');
    var sortEl = document.querySelector('[data-sort]');
    var countEl = document.querySelector('[data-count]');
    var labelEl = document.querySelector('[data-cat-label]');
    var curCat = 'all', curKw = '';

    function visible(card) {
      var okCat = curCat === 'all' || card.getAttribute('data-cat') === curCat;
      var okKw = !curKw || card.textContent.toLowerCase().indexOf(curKw) > -1;
      return okCat && okKw;
    }
    function apply() {
      var n = 0;
      cards.forEach(function (c) { var v = visible(c); c.style.display = v ? '' : 'none'; if (v) n++; });
      if (countEl) countEl.textContent = n;
      var empty = grid.querySelector('.course-empty');
      if (n === 0 && !empty) {
        empty = document.createElement('div');
        empty.className = 'course-empty';
        empty.textContent = '找不到符合的課程，換個關鍵字或分類試試。';
        grid.appendChild(empty);
      } else if (n > 0 && empty) { empty.remove(); }
    }
    function sortBy(key) {
      var arr = original.slice();
      if (key === 'price-asc') arr.sort(function (a, b) { return (+a.dataset.price) - (+b.dataset.price); });
      else if (key === 'price-desc') arr.sort(function (a, b) { return (+b.dataset.price) - (+a.dataset.price); });
      else if (key === 'hours-desc') arr.sort(function (a, b) { return (+b.dataset.hours) - (+a.dataset.hours); });
      arr.forEach(function (c) { grid.appendChild(c); });
    }
    chips.forEach(function (chip) {
      chip.addEventListener('click', function () {
        chips.forEach(function (c) { c.classList.remove('is-active'); });
        chip.classList.add('is-active');
        curCat = chip.getAttribute('data-filter');
        if (labelEl) labelEl.textContent = curCat === 'all' ? '全部課程' : chip.textContent.replace(/\s*\d+\s*$/, '').trim();
        apply();
      });
    });
    if (searchEl) searchEl.addEventListener('input', function () { curKw = searchEl.value.trim().toLowerCase(); apply(); });
    if (sortEl) sortEl.addEventListener('change', function () { sortBy(sortEl.value); apply(); });
    apply();
  }

  /* ---- 創辦團隊 Coverflow 堆疊輪播 ---- */
  function initFounders() {
    var root = document.getElementById('founder-carousel');
    if (!root) return;
    var cards = Array.prototype.slice.call(root.querySelectorAll('.founder'));
    var n = cards.length;
    if (!n) return;
    var dotsWrap = document.getElementById('fc-dots');
    var active = 0;
    var dots = [];

    if (dotsWrap) {
      cards.forEach(function (_, i) {
        var d = document.createElement('button');
        d.className = 'fc-dot';
        d.setAttribute('aria-label', '第 ' + (i + 1) + ' 位');
        d.addEventListener('click', function () { active = i; render(); });
        dotsWrap.appendChild(d);
        dots.push(d);
      });
    }
    function render() {
      var w = root.clientWidth;
      var spread = Math.min(w * 0.28, 250);
      cards.forEach(function (card, i) {
        var d = i - active;
        if (d > n / 2) d -= n;
        if (d < -n / 2) d += n;
        var ad = Math.abs(d);
        var scale = 1 - ad * 0.16;
        card.style.transform = 'translateX(' + (d * spread) + 'px) scale(' + scale + ') rotateY(' + (-d * 7) + 'deg)';
        card.style.zIndex = String(50 - ad * 10);
        card.style.opacity = ad >= 3 ? '0' : String(1 - ad * 0.16);
        card.classList.toggle('is-front', d === 0);
        card.setAttribute('aria-hidden', d === 0 ? 'false' : 'true');
      });
      dots.forEach(function (dt, i) { dt.classList.toggle('is-active', i === active); });
    }
    function go(dir) { active = (active + dir + n) % n; render(); }
    cards.forEach(function (card, i) {
      card.addEventListener('click', function () { if (i !== active) { active = i; render(); } });
    });
    var prev = document.querySelector('[data-fc-prev]');
    var next = document.querySelector('[data-fc-next]');
    if (prev) prev.addEventListener('click', function () { go(-1); });
    if (next) next.addEventListener('click', function () { go(1); });

    // 觸控滑動
    var sx = null;
    root.addEventListener('touchstart', function (e) { sx = e.touches[0].clientX; }, { passive: true });
    root.addEventListener('touchend', function (e) {
      if (sx === null) return;
      var dx = e.changedTouches[0].clientX - sx;
      if (Math.abs(dx) > 40) go(dx < 0 ? 1 : -1);
      sx = null;
    });
    // 滑鼠拖曳
    var dsx = null;
    root.addEventListener('mousedown', function (e) { dsx = e.clientX; });
    window.addEventListener('mouseup', function (e) {
      if (dsx === null) return;
      var dx = e.clientX - dsx;
      if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1);
      dsx = null;
    });
    // 鍵盤左右鍵
    root.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowLeft') { e.preventDefault(); go(-1); }
      else if (e.key === 'ArrowRight') { e.preventDefault(); go(1); }
    });
    window.addEventListener('resize', render);
    render();
  }

  document.addEventListener('DOMContentLoaded', function () {
    initDrawer(); initProgress(); initReveal();
    initModals(); initForms(); initCourses(); initFounders();
  });
})();
