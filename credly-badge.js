(() => {
  'use strict';

  const stage = document.querySelector('.credly-badge-stage');
  if (!stage || stage.dataset.initialized) return;
  stage.dataset.initialized = 'true';
  const source = 'https://cdn.credly.com/assets/utilities/embed.js';
  function settleFrame(frame) {
    requestAnimationFrame(() => requestAnimationFrame(() => {
      if (frame.dataset.layoutSettled || !stage.getClientRects().length) return;
      // Credly shortens text during its first layout. Refresh the frame once
      // after the visible panel has its final width, keeping its original URL.
      frame.dataset.layoutSettled = 'true';
      frame.src = frame.src;
    }));
  }

  // The official loader replaces the supplied div with its unmodified iframe.
  // Add a descriptive title without changing the badge or its contents.
  const labelFrame = () => {
    const frame = stage.querySelector('iframe');
    if (!frame) return false;
    frame.title = 'Insignia oficial de AWS Certified AI Practitioner de Beckham Luis Gonzales Morales en Credly';
    frame.addEventListener('load', () => settleFrame(frame), { once: true });
    return true;
  };
  const observer = new MutationObserver(() => { if (labelFrame()) observer.disconnect(); });
  if (!labelFrame()) observer.observe(stage, { childList: true });

  function loadBadge() {
    if (document.querySelector(`script[src="${source}"]`)) return;
    const script = document.createElement('script');
    script.src = source;
    script.type = 'text/javascript';
    script.async = true;
    script.addEventListener('error', () => {
      observer.disconnect();
      const message = stage.querySelector('.credly-placeholder span');
      if (message) message.textContent = 'Puedes verificarla con el enlace de la tarjeta.';
    }, { once: true });
    document.body.append(script);
  }

  // Load the single external script when certificates approach the viewport.
  if ('IntersectionObserver' in window) {
    const visibility = new IntersectionObserver(entries => {
      if (entries.some(entry => entry.isIntersecting)) {
        visibility.disconnect();
        requestAnimationFrame(() => requestAnimationFrame(loadBadge));
      }
    }, { rootMargin: '200px' });
    visibility.observe(stage);
  } else loadBadge();
  document.querySelector('.aws-official-badge')?.addEventListener('toggle', event => {
    const frame = stage.querySelector('iframe');
    if (event.target.open && frame) settleFrame(frame);
  });
})();
