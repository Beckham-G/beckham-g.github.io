(() => {
  'use strict';

  const certificates = window.portfolioContent?.certificates;
  const grid = document.querySelector('#certificate-grid');
  if (!certificates?.length || !grid || !window.HTMLDialogElement) return;

  const root = document.documentElement;
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const canAnimate = () => !reducedMotion.matches && !root.classList.contains('motion-off');
  const dialog = document.createElement('dialog');
  dialog.id = 'certificate-preview';
  dialog.className = 'certificate-preview';
  dialog.setAttribute('aria-labelledby', 'certificate-preview-title');
  dialog.setAttribute('aria-describedby', 'certificate-preview-description');
  dialog.innerHTML = `
    <button class="certificate-preview-close" type="button" aria-label="Cerrar certificado" autofocus>
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="m6 6 12 12M18 6 6 18"/></svg>
    </button>
    <div class="certificate-preview-layout">
      <div class="certificate-preview-stage"><img class="certificate-preview-image" alt="" width="640" height="450"></div>
      <div class="certificate-preview-details">
        <span class="certificate-preview-kicker">FORMACIÓN COMPLEMENTARIA</span>
        <h2 id="certificate-preview-title"></h2>
        <p class="certificate-preview-issuer"></p>
        <dl class="certificate-preview-facts">
          <div><dt>Fecha</dt><dd class="certificate-preview-date"></dd></div>
          <div><dt>Duración</dt><dd class="certificate-preview-hours"></dd></div>
          <div><dt>Reconocimiento</dt><dd class="certificate-preview-type"></dd></div>
        </dl>
        <p id="certificate-preview-description">Certificado a nombre de Beckham Luis Gonzales Morales.</p>
        <div class="certificate-preview-actions">
          <a class="button primary certificate-preview-pdf" target="_blank" rel="noopener noreferrer">Abrir PDF <span aria-hidden="true">↗</span></a>
          <a class="certificate-preview-download" download>Descargar certificado <span aria-hidden="true">↓</span></a>
        </div>
      </div>
    </div>`;
  document.body.append(dialog);

  const previewImage = dialog.querySelector('.certificate-preview-image');
  const pdfLink = dialog.querySelector('.certificate-preview-pdf');
  const downloadLink = dialog.querySelector('.certificate-preview-download');
  let trigger = null;
  let currentAnimation = null;
  let closing = false;

  function stopAnimation() {
    currentAnimation?.finish();
    currentAnimation = null;
  }

  function animate(keyframes, duration) {
    stopAnimation();
    if (!canAnimate()) return null;
    currentAnimation = dialog.animate(keyframes, {
      duration,
      easing: 'cubic-bezier(.2,.8,.2,1)',
    });
    return currentAnimation;
  }

  async function closePreview() {
    if (!dialog.open || closing) return;
    closing = true;
    const closingAnimation = animate([
      { opacity: 1, transform: 'translateY(0) scale(1)' },
      { opacity: 0, transform: 'translateY(10px) scale(.985)' },
    ], 150);
    if (closingAnimation) {
      try { await closingAnimation.finished; } catch (_) { /* A new motion preference can end the effect. */ }
    }
    dialog.close();
  }

  function openPreview(certificate, link) {
    if (dialog.open) return;
    trigger = link;
    closing = false;
    dialog.querySelector('#certificate-preview-title').textContent = certificate.title;
    dialog.querySelector('.certificate-preview-issuer').textContent = certificate.issuer;
    dialog.querySelector('.certificate-preview-date').textContent = certificate.date;
    dialog.querySelector('.certificate-preview-hours').textContent = certificate.hours;
    dialog.querySelector('.certificate-preview-type').textContent = certificate.type;
    previewImage.src = `assets/certificados/${certificate.file}.webp`;
    previewImage.alt = `Certificado de ${certificate.title} a nombre de Beckham Luis Gonzales Morales`;
    pdfLink.href = link.href;
    pdfLink.setAttribute('aria-label', `Abrir certificado de ${certificate.title} en PDF, en otra pestaña`);
    downloadLink.href = link.href;
    downloadLink.download = `${certificate.file}-beckham-gonzales.pdf`;
    dialog.showModal();
    document.body.classList.add('modal-open');
    animate([
      { opacity: 0, transform: 'translateY(18px) scale(.975)' },
      { opacity: 1, transform: 'translateY(0) scale(1)' },
    ], 260);
  }

  certificates.forEach(certificate => {
    const link = Array.from(grid.querySelectorAll('.certificate-content a')).find(candidate =>
      candidate.getAttribute('href') === `assets/certificados/${certificate.file}.pdf`);
    if (!link) return;
    link.classList.add('certificate-preview-trigger');
    link.setAttribute('aria-haspopup', 'dialog');
    link.setAttribute('aria-controls', dialog.id);
    link.setAttribute('aria-label', `Ampliar certificado de ${certificate.title}`);
    link.innerHTML = 'Ampliar certificado <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M8 4H4v4m12-4h4v4M4 16v4h4m12-4v4h-4M4 4l5 5m11-5-5 5M4 20l5-5m11 5-5-5"/></svg>';
    link.addEventListener('click', event => {
      if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      openPreview(certificate, link);
    });
  });

  dialog.querySelector('.certificate-preview-close').addEventListener('click', closePreview);
  dialog.addEventListener('cancel', event => {
    event.preventDefault();
    closePreview();
  });
  dialog.addEventListener('click', event => {
    if (event.target !== dialog) return;
    const bounds = dialog.getBoundingClientRect();
    if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) closePreview();
  });
  dialog.addEventListener('close', () => {
    stopAnimation();
    closing = false;
    document.body.classList.toggle('modal-open', Boolean(document.querySelector('dialog[open]')));
    if (trigger?.isConnected) trigger.focus({ preventScroll: true });
  });
  reducedMotion.addEventListener('change', () => { if (!canAnimate()) stopAnimation(); });
  new MutationObserver(() => { if (!canAnimate()) stopAnimation(); }).observe(root, { attributes: true, attributeFilter: ['class'] });
})();
