(() => {
  'use strict';
  const { projects, tools, certificates } = window.portfolioContent;
  const escape = value => String(value).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
  const tags = list => `<ul class="tags">${list.map(tag=>`<li>${escape(tag)}</li>`).join('')}</ul>`;
  const arts = {
    penales: `<svg viewBox="0 0 430 240" aria-hidden="true"><defs><pattern id="net" width="18" height="18" patternUnits="userSpaceOnUse"><path d="M18 0H0V18" fill="none" stroke="#859c6040" stroke-width=".7"/></pattern></defs><path d="M50 177V47H380V177" fill="url(#net)" stroke="#c6ed9c" stroke-width="3"/><path d="M50 177L23 203H405L380 177M23 203L50 47M405 203L380 47" fill="none" stroke="#90ae6c"/><path d="M100 81H190V156H100Z" fill="#cefc831c" stroke="#cefc83" stroke-dasharray="5 4"/><path d="M215 190Q250 92 312 89" fill="none" stroke="#cefc83" stroke-width="2" stroke-dasharray="6 6"/><circle cx="215" cy="190" r="13" fill="#e9f2df"/><path d="M209 184L219 182L224 191L216 199L207 193Z" fill="#304327"/><circle cx="232" cy="87" r="10" fill="#adc991"/><path d="M232 104V143M205 125L232 110L268 123M232 143L211 165M232 143L252 166" stroke="#adc991" stroke-width="7" stroke-linecap="round" fill="none"/><text x="273" y="58" class="art-label">PREDICT. LEARN. PLAY.</text></svg>`,
    bridge:`<svg viewBox="0 0 440 245" aria-hidden="true"><path d="M12 192L220 235L428 172L220 118Z" fill="#a7b28e13" stroke="#a1b39144"/><path d="M65 158L333 83L384 103L117 180Z" fill="#bda877" stroke="#d4c6a6"/><path d="M65 158V114L333 39V83M117 180V136L384 59V103" fill="none" stroke="#e3cf9b" stroke-width="3"/><path d="M65 126L333 51M117 149L384 72M91 151V107M143 137V92M196 122V78M250 107V63M303 92V48M143 173V128M196 157V113M250 142V98M303 126V83M358 110V67" stroke="#beac84" stroke-width="2"/><path d="M94 169V205M347 112V147" stroke="#b3a07c" stroke-width="8"/><path d="M60 197V162M399 156V116" stroke="#78966b" stroke-width="3"/><circle cx="60" cy="151" r="20" fill="#58784c"/><circle cx="399" cy="105" r="24" fill="#5c7c50"/><text x="139" y="213" class="art-label">GEOMETRÍA + TEXTURA + LUZ</text></svg>`,
    excel:`<svg viewBox="0 0 440 245" aria-hidden="true"><rect x="28" y="35" width="170" height="151" rx="5" fill="#101a12" stroke="#69885a"/><rect x="239" y="52" width="170" height="151" rx="5" fill="#14231a" stroke="#a6d384"/><path d="M28 65H198M28 95H198M28 125H198M28 155H198M75 65V185M132 65V185M239 82H409M239 112H409M239 142H409M239 172H409M286 82V203M344 82V203" stroke="#a3c78638"/><rect x="133" y="96" width="64" height="28" fill="#cefc8338"/><rect x="345" y="113" width="63" height="28" fill="#cefc8355"/><path d="M174 111C229 91 211 133 263 127" fill="none" stroke="#cefc83" stroke-width="2"/><path d="M254 121L264 127L254 134" stroke="#cefc83" stroke-width="2" fill="none"/><text x="42" y="54" class="art-label">ARCHIVO A</text><text x="253" y="72" class="art-label">ARCHIVO B</text><text x="63" y="217" class="art-label">COMPARAR → ENCONTRAR → EXPORTAR</text></svg>`,
    code:`<div class="art-window" aria-hidden="true"><div class="window-dots"><i></i><i></i><i></i></div><code><em>const</em> construir = {\n  propósito: <em>'educación'</em>,\n  método: <em>'colaboración'</em>,\n  siguientePaso: <em>'aprender'</em>\n};</code></div>`
  };
  document.querySelector('#project-grid').innerHTML = projects.map((p,i)=>`<article class="project-card reveal"><div class="project-art ${p.art==='bridge'?'art-cpp':''}"><span class="project-number">0${i+1} / PROYECTO</span>${arts[p.art]}<span class="project-category">${escape(p.category)} · Esquema ilustrativo</span></div><div class="project-info"><div class="project-title-row"><h3>${escape(p.title)}</h3><button class="project-open" data-project="${p.id}" aria-label="Ver detalles: ${escape(p.label)}">↗</button></div><p>${escape(p.description)}</p>${tags(p.tags)}</div></article>`).join('');
  document.querySelector('#tools-grid').innerHTML = tools.map(t=>`<article class="tool-card" data-group="${t.group}"><img src="assets/icons/${t.icon}.svg" alt="" width="39" height="39" loading="lazy" ${t.icon==='powerbi'?'class="powerbi-icon"':t.icon==='excel'?'class="excel-icon"':''}><h3>${escape(t.name)}</h3><p>${escape(t.label)}</p></article>`).join('');
  document.querySelector('#certificate-grid').innerHTML = certificates.map(c=>`<article class="certificate-card reveal"><div class="certificate-thumb"><img src="assets/certificados/${c.file}.webp" alt="Vista del certificado de ${escape(c.title)} a nombre de Beckham Luis Gonzales Morales" loading="lazy" width="640" height="450"></div><div class="certificate-content"><span class="certificate-issuer">${escape(c.issuer)}</span><h3>${escape(c.title)}</h3><p>${escape(c.date)} · ${escape(c.hours)}<br>${escape(c.type)}</p><a href="assets/certificados/${c.file}.pdf" target="_blank" rel="noopener noreferrer" aria-label="Ver certificado de ${escape(c.title)} en PDF, abre en otra pestaña">Ver certificado <span>↗</span></a></div></article>`).join('');

  const menu = document.querySelector('.menu-toggle');
  const nav = document.querySelector('#navigation');
  const closeMenu = () => {nav.classList.remove('open');menu.setAttribute('aria-expanded','false');menu.setAttribute('aria-label','Abrir menú');};
  menu.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));menu.setAttribute('aria-label',open?'Cerrar menú':'Abrir menú');});
  nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));
  document.addEventListener('keydown',event=>{if(event.key==='Escape'&&nav.classList.contains('open')){closeMenu();menu.focus();}});
  document.addEventListener('click',event=>{if(!event.target.closest('.header'))closeMenu();});
  document.querySelectorAll('[data-filter]').forEach(button=>button.addEventListener('click',()=>{
    document.querySelectorAll('[data-filter]').forEach(b=>{b.classList.toggle('active',b===button);b.setAttribute('aria-pressed',String(b===button));});
    document.querySelectorAll('.tool-card').forEach(card=>{card.hidden=button.dataset.filter!=='all'&&card.dataset.group!==button.dataset.filter;});
    window.ScrollTrigger?.refresh();
  }));
  const dialog=document.querySelector('#project-dialog');
  let previousFocus;
  document.querySelectorAll('[data-project]').forEach(button=>button.addEventListener('click',()=>{
    const p=projects.find(p=>p.id===button.dataset.project);previousFocus=button;
    document.querySelector('#dialog-content').innerHTML=`<p class="dialog-kicker">${escape(p.label)}</p><h2 id="dialog-title">${escape(p.title)}</h2>${tags(p.tags)}<h3>La pregunta</h3><p>${escape(p.challenge)}</p><h3>Cómo lo abordé</h3><p>${escape(p.approach)}</p><h3>Lo que puse en práctica</h3><ul>${p.learning.map(item=>`<li>${escape(item)}</li>`).join('')}</ul><p class="dialog-note">${escape(p.note)}</p><a class="button primary" href="mailto:beckam.luis.01@gmail.com?subject=${encodeURIComponent('Conversemos sobre '+p.label)}">Conversemos sobre este proyecto <span>↗</span></a>`;
    dialog.showModal();document.body.classList.add('modal-open');
  }));
  document.querySelector('.dialog-close').addEventListener('click',()=>dialog.close());
  dialog.addEventListener('click',event=>{const r=dialog.getBoundingClientRect();if(event.target===dialog&&(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom))dialog.close();});
  dialog.addEventListener('close',()=>{document.body.classList.remove('modal-open');previousFocus?.focus({preventScroll:true});});
  document.querySelector('#year').textContent=new Date().getFullYear();
  const reduceMotion=window.matchMedia('(prefers-reduced-motion: reduce)');
  const motionButton=document.querySelector('#motion-toggle');
  let motionPaused=reduceMotion.matches;
  let animations;
  const refreshProgress=()=>{const max=document.documentElement.scrollHeight-innerHeight;document.querySelector('.scroll-progress').style.width=(max>0?scrollY/max*100:0)+'%';};
  let framePending=false;
  addEventListener('scroll',()=>{if(!framePending){framePending=true;requestAnimationFrame(()=>{refreshProgress();framePending=false;});}},{passive:true});
  addEventListener('resize',refreshProgress);
  function animate(){
    if(!window.gsap||!window.ScrollTrigger||motionPaused)return;
    gsap.registerPlugin(ScrollTrigger);
    animations=gsap.context(()=>{
      gsap.from('.hero-copy > *',{y:24,opacity:0,duration:.85,stagger:.11,ease:'power3.out',clearProps:'all'});
      gsap.from('.hero-art',{y:35,opacity:0,rotate:4,duration:1.2,ease:'power3.out',clearProps:'all'});
      gsap.utils.toArray('.section h2,.about-copy,.facts,.project-card,.certificate-card,.timeline article').forEach(el=>{
        gsap.from(el,{y:35,opacity:0,duration:.7,ease:'power2.out',scrollTrigger:{trigger:el,start:'top 93%',once:true},clearProps:'all'});
      });
      gsap.to('.orbit-a',{rotation:30,ease:'none',scrollTrigger:{trigger:'.hero',start:'top top',end:'bottom top',scrub:1}});
      gsap.to('.orbit-b',{rotation:-15,ease:'none',scrollTrigger:{trigger:'.hero',start:'top top',end:'bottom top',scrub:1}});
    });
  }
  function setMotion(paused){motionPaused=paused;document.documentElement.classList.toggle('motion-off',paused);motionButton.setAttribute('aria-pressed',String(paused));motionButton.textContent=paused?'Activar animaciones':'Pausar animaciones';if(paused){animations?.revert();animations=null;}else animate();}
  motionButton.addEventListener('click',()=>setMotion(!motionPaused));
  reduceMotion.addEventListener('change',event=>setMotion(event.matches));
  setMotion(motionPaused);refreshProgress();

  const themeButton=document.querySelector('#theme-toggle');
  const root=document.documentElement;
  let themeChanging=false;
  function applyTheme(theme){
    root.dataset.theme=theme;
    themeButton.setAttribute('aria-label',theme==='dark'?'Activar modo claro':'Activar modo oscuro');
    themeButton.setAttribute('aria-pressed',String(theme==='light'));
    document.querySelector('meta[name="theme-color"]').content=theme==='dark'?'#101410':'#f5f6ef';
    try{localStorage.setItem('bg-theme',theme);}catch(e){/* El tema sigue funcionando sin almacenamiento. */}
  }
  applyTheme(root.dataset.theme||'dark');
  themeButton.addEventListener('click',async()=>{
    if(themeChanging)return;
    const next=root.dataset.theme==='dark'?'light':'dark';
    if(motionPaused||reduceMotion.matches){applyTheme(next);return;}
    if(!document.startViewTransition){
      applyTheme(next);root.classList.add('theme-fallback');
      setTimeout(()=>root.classList.remove('theme-fallback'),600);return;
    }
    themeChanging=true;
    const rect=themeButton.getBoundingClientRect();
    const x=rect.left+rect.width/2,y=rect.top+rect.height/2;
    const radius=Math.hypot(Math.max(x,innerWidth-x),Math.max(y,innerHeight-y));
    try{
      const transition=document.startViewTransition(()=>applyTheme(next));
      await transition.ready;
      await root.animate({clipPath:[`circle(0px at ${x}px ${y}px)`,`circle(${radius}px at ${x}px ${y}px)`]},
        {duration:650,easing:'cubic-bezier(.4,0,.2,1)',pseudoElement:'::view-transition-new(root)'}).finished;
      await transition.finished;
    }catch(e){applyTheme(next);}finally{themeChanging=false;}
  });
  const navLinks=Array.from(nav.querySelectorAll('a'));
  const sectionObserver=new IntersectionObserver(entries=>{
    for(const entry of entries){if(entry.isIntersecting){navLinks.forEach(link=>{const active=link.hash==='#'+entry.target.id;link.classList.toggle('active',active);if(active)link.setAttribute('aria-current','location');else link.removeAttribute('aria-current');});}}
  },{rootMargin:'-15% 0px -65% 0px'});
  document.querySelectorAll('main section[id]').forEach(section=>sectionObserver.observe(section));
})();
