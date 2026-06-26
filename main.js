/* ============================================================
   株式会社星翔 — main.js
============================================================ */

'use strict';

/* --- STAR FIELD ------------------------------------------ */
function initStarfield(canvasId, count, maxAlpha) {
  const canvas = document.getElementById(canvasId);
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let stars = [];
  let W = 0, H = 0, rafId;

  function resize() {
    W = canvas.width  = canvas.offsetWidth;
    H = canvas.height = canvas.offsetHeight;
    buildStars();
  }

  function buildStars() {
    stars = Array.from({ length: count }, () => ({
      x:     Math.random() * W,
      y:     Math.random() * H,
      r:     Math.random() * 1.4 + 0.2,
      alpha: Math.random() * maxAlpha,
      speed: Math.random() * 0.18 + 0.04,
      phase: Math.random() * Math.PI * 2,
      gold:  Math.random() < 0.1
    }));
  }

  let t = 0;
  function tick() {
    ctx.clearRect(0, 0, W, H);
    t += 0.007;
    for (const s of stars) {
      const a = s.alpha * (0.55 + 0.45 * Math.sin(t * s.speed * 4 + s.phase));
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fillStyle = s.gold
        ? `rgba(245,200,66,${a})`
        : `rgba(255,255,255,${a})`;
      ctx.fill();
    }
    rafId = requestAnimationFrame(tick);
  }

  const ro = new ResizeObserver(resize);
  ro.observe(canvas);
  resize();
  tick();

  // Pause when tab hidden
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) cancelAnimationFrame(rafId);
    else tick();
  });
}

/* --- HEADER SCROLL --------------------------------------- */
function initHeader() {
  const header   = document.getElementById('header');
  const logoText = document.getElementById('logoText');
  if (!header) return;

  function onScroll() {
    const scrolled = window.scrollY > 60;
    header.classList.toggle('scrolled', scrolled);
    if (logoText) logoText.classList.toggle('visible', scrolled);
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

/* --- HAMBURGER MENU -------------------------------------- */
function initHamburger() {
  const btn = document.getElementById('hamburger');
  const nav = document.getElementById('globalNav');
  if (!btn || !nav) return;

  btn.addEventListener('click', () => {
    const open = btn.classList.toggle('open');
    nav.classList.toggle('open', open);
    btn.setAttribute('aria-expanded', open);
    btn.setAttribute('aria-label', open ? 'メニューを閉じる' : 'メニューを開く');
  });

  // Close on nav link click
  nav.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      btn.classList.remove('open');
      nav.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
    });
  });
}

/* --- SCROLL REVEAL --------------------------------------- */
function initReveal() {
  const items = document.querySelectorAll('.reveal');
  if (!items.length) return;

  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -64px 0px' });

  items.forEach(el => io.observe(el));
}

/* --- NUMBER COUNTUP -------------------------------------- */
function initCountup() {
  const els = document.querySelectorAll('[data-countup]');
  if (!els.length) return;

  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const el  = e.target;
      const end = parseFloat(el.dataset.countup);
      const dur = 1800;
      const dec = (el.dataset.decimals || 0) | 0;
      let start = null;
      function step(ts) {
        if (!start) start = ts;
        const prog = Math.min((ts - start) / dur, 1);
        const ease = 1 - Math.pow(1 - prog, 3);
        el.textContent = (end * ease).toFixed(dec);
        if (prog < 1) requestAnimationFrame(step);
        else el.textContent = end.toFixed(dec);
      }
      requestAnimationFrame(step);
      io.unobserve(el);
    });
  }, { threshold: 0.5 });

  els.forEach(el => io.observe(el));
}

/* --- SMOOTH ANCHOR --------------------------------------- */
function initSmoothAnchor() {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      const offset = document.getElementById('header')?.offsetHeight || 72;
      window.scrollTo({ top: target.offsetTop - offset, behavior: 'smooth' });
    });
  });
}

/* --- INIT ------------------------------------------------ */
document.addEventListener('DOMContentLoaded', () => {
  initStarfield('starsCanvas',  300, 0.92);
  initStarfield('recruitStars', 130, 0.55);
  initHeader();
  initHamburger();
  initReveal();
  initCountup();
  initSmoothAnchor();
});
