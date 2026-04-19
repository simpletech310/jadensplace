/* Jaden's Place — editorial interactions */
(function () {
  'use strict';

  const root = document.documentElement;
  const body = document.body;
  const header = document.querySelector('.site-header');

  // Orchestrated page load — add .loaded to trigger hero staggered entrance
  requestAnimationFrame(() => {
    requestAnimationFrame(() => body.classList.add('loaded'));
  });

  // Sticky header scrolled state
  const onScroll = () => {
    if (!header) return;
    if (window.scrollY > 16) header.classList.add('scrolled');
    else header.classList.remove('scrolled');
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  // Mobile nav toggle
  const toggle = document.querySelector('.nav-toggle');
  if (toggle) {
    toggle.addEventListener('click', () => {
      const open = body.classList.toggle('nav-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      body.style.overflow = open ? 'hidden' : '';
    });
  }
  document.querySelectorAll('.nav-links a').forEach((link) => {
    link.addEventListener('click', () => {
      body.classList.remove('nav-open');
      body.style.overflow = '';
    });
  });

  // Active nav based on current pathname
  const current = (window.location.pathname.split('/').pop() || 'index.html').toLowerCase();
  document.querySelectorAll('.nav-links a').forEach((link) => {
    const href = (link.getAttribute('href') || '').toLowerCase();
    const bare = href.replace(/^.*\//, '') || 'index.html';
    const currentBase = current.split('.')[0];
    const bareBase = bare.split('.')[0];
    if (currentBase === bareBase || (current === '' && bare === 'index.html')) {
      link.classList.add('active');
    }
  });

  // Scroll reveal
  const io = ('IntersectionObserver' in window)
    ? new IntersectionObserver((entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in');
            io.unobserve(e.target);
          }
        });
      }, { threshold: 0.14, rootMargin: '0px 0px -8% 0px' })
    : null;
  document.querySelectorAll('.rv').forEach((el) => {
    if (io) io.observe(el); else el.classList.add('in');
  });

  // Animated counters
  const counterIo = ('IntersectionObserver' in window)
    ? new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target;
          const target = parseFloat(el.dataset.count || '0');
          const suffix = el.dataset.suffix || '';
          const prefix = el.dataset.prefix || '';
          const duration = 1500;
          const start = performance.now();
          const easeOut = (t) => 1 - Math.pow(1 - t, 3);
          const step = (now) => {
            const t = Math.min(1, (now - start) / duration);
            const v = target * easeOut(t);
            const formatted = target % 1 === 0 ? Math.round(v) : v.toFixed(1);
            el.textContent = prefix + Number(formatted).toLocaleString() + suffix;
            if (t < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
          counterIo.unobserve(el);
        });
      }, { threshold: 0.45 })
    : null;
  document.querySelectorAll('[data-count]').forEach((el) => {
    if (counterIo) counterIo.observe(el); else el.textContent = el.dataset.count;
  });

  // Donation tier selector
  const tiers = document.querySelectorAll('.tier');
  tiers.forEach((tier) => {
    tier.addEventListener('click', () => {
      tiers.forEach((t) => t.classList.remove('active'));
      tier.classList.add('active');
    });
  });

  // Stub form submit handling
  document.querySelectorAll('form[data-stub]').forEach((form) => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const msg = form.querySelector('[data-success]');
      if (msg) msg.hidden = false;
      form.reset();
    });
  });

  // Smooth scroll with header offset for in-page anchors
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener('click', (e) => {
      const id = a.getAttribute('href');
      if (!id || id === '#') return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      const offset = (header ? header.offsetHeight : 0) + 20;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });

  // Footer year
  const yearEl = document.querySelectorAll('[data-year]');
  yearEl.forEach((el) => { el.textContent = new Date().getFullYear(); });
})();
