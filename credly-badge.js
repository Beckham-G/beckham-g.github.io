(() => {
  'use strict';

  const stage = document.querySelector('.credly-badge-stage');
  if (!stage || stage.dataset.initialized) return;
  stage.dataset.initialized = 'true';
  const source = 'https://cdn.credly.com/assets/utilities/embed.js';

  // The official loader replaces the supplied div with its unmodified iframe.
  // Add a descriptive title without changing the badge or its contents.
  const labelFrame = () => {
    const frame = stage.querySelector('iframe');
    if (!frame) return false;
    frame.title = 'Insignia oficial de AWS Certified AI Practitioner de Beckham Luis Gonzales Morales en Credly';
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
        loadBadge();
      }
    }, { rootMargin: '200px' });
    visibility.observe(stage);
  } else loadBadge();
})();
