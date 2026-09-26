
// ---------- Configuração (preencher antes de publicar) ----------
const CONFIG = {
  email: '',          // e-mail profissional novo — ainda não existe
  linkedin: '',
  instagram: '',
};

// ---------- Textos PT / EN ----------
const TEXTOS = {
  pt: {
    'cap.quem': 'Quem cria', 'cap.numeros': 'Volume',
    'cap.trabalhos': 'Trabalhos', 'cap.produto': 'Seu produto', 'cap.servicos': 'O que eu faço', 'cap.contato': 'Contato',
    'nav.contato': 'Contato', 'hud.funcao': 'IA Creator',
    'a.cargo': 'IA Creator',
    'a.lead': 'Crio avatares, vozes e cenas com IA para VSLs, leads, upsells e anúncios — em cinco idiomas. E construo as automações que aceleram tudo isso.',
    'a.rolar': 'Role para ver mais',
    'c.som': 'Ativar som', 'c.som-on': 'Som ligado',
    'd.criativos': 'criativos criados', 'd.anos': 'anos de experiência', 'd.idiomas': 'idiomas', 'd.formatos': 'formatos',
    'e.titulo': 'Trabalhos',
    'e.lead': 'Avatares, inserts 3D e histórias feitos para ofertas reais.',
    'e.f.todos': 'Todos', 'e.f.homens': 'Homens', 'e.f.mulheres': 'Mulheres', 'e.f.historias': 'Histórias',
    'f.titulo': 'Seu produto poderia estar aqui.',
    'f.lead': 'A velaxa é uma marca fictícia que criei do zero com IA: identidade, embalagens, linha de produtos e hero shots — sem estúdio, sem fotógrafo, sem frete. Imagina isso com a sua embalagem.',
    'g.titulo': 'O que eu faço',
    'h.titulo': 'Vamos escalar a próxima oferta?', 'h.cta': 'Entre em contato',
    'h.nota': 'Vaga, freela ou projeto: me manda um e-mail e a gente conversa.',
    'h.faixa': 'IA Creator · EN · DE · FR · IT · PT · +2.000 criativos · ', 'h.carregou': 'esta página carregou em', 'h.direitos': 'Todos os direitos reservados',
    'h.assunto': 'Contato pelo site — Alisson Martins',
    'h.corpo': 'Olá, Alisson! Vi seu site e gostaria de conversar.\n\nEmpresa:\nVaga/projeto:\n',
    'h.embreve': 'em breve',
  },
  en: {
    'cap.quem': 'The creator', 'cap.numeros': 'Volume',
    'cap.trabalhos': 'Work', 'cap.produto': 'Your product', 'cap.servicos': 'What I do', 'cap.contato': 'Contact',
    'nav.contato': 'Contact', 'hud.funcao': 'AI Creator',
    'a.cargo': 'AI Creator',
    'a.lead': 'I create AI avatars, voices and scenes for VSLs, leads, upsells and ads — in five languages. And I build the automations that speed it all up.',
    'a.rolar': 'Scroll for more',
    'c.som': 'Turn sound on', 'c.som-on': 'Sound on',
    'd.criativos': 'creatives produced', 'd.anos': 'years of experience', 'd.idiomas': 'languages', 'd.formatos': 'formats',
    'e.titulo': 'Work',
    'e.lead': 'Avatars, 3D inserts and stories made for real offers.',
    'e.f.todos': 'All', 'e.f.homens': 'Men', 'e.f.mulheres': 'Women', 'e.f.historias': 'Stories',
    'f.titulo': 'Your product could be here.',
    'f.lead': 'velaxa is a fictional brand I built from scratch with AI: identity, packaging, product line and hero shots — no studio, no photographer, no shipping. Picture this with your packaging.',
    'g.titulo': 'What I do',
    'h.titulo': 'Ready to scale your next offer?', 'h.cta': 'Get in touch',
    'h.nota': 'Job, freelance or project: send me an email and let’s talk.',
    'h.faixa': 'AI Creator · EN · DE · FR · IT · PT · 2,000+ creatives · ', 'h.carregou': 'this page loaded in', 'h.direitos': 'All rights reserved',
    'h.assunto': 'Contact from website — Alisson Martins',
    'h.corpo': 'Hi Alisson! I saw your website and would like to talk.\n\nCompany:\nRole/project:\n',
    'h.embreve': 'soon',
  },
};

const SERVICOS = {
  pt: [
    ['Avatares do zero', 'Personagens realistas criados do nada, com rosto, voz e personalidade consistentes.'],
    ['Lipsync', 'Boca, respiração e microexpressões sincronizadas com qualquer locução.'],
    ['Localização em 5 idiomas', 'O mesmo criativo em EN, DE, FR, IT e PT, pronto para cada mercado.'],
    ['Inserts e B-roll com IA', 'Cenas 3D, histórias e demonstrações que sustentam a narrativa da VSL.'],
    ['Vozes e locução com IA', 'Clonagem e direção de voz com emoção, ritmo e sotaque certos.'],
    ['UGC com IA', 'Depoimentos no formato nativo de rede social, prontos para anúncio.'],
    ['Cenas de demonstração de produto', 'Hero shots e uso do produto sem estúdio, ator ou frete.'],
    ['Automações', 'Ferramentas próprias que cortam horas de trabalho manual da produção.'],
  ],
  en: [
    ['Avatars from scratch', 'Realistic characters built from nothing, with consistent face, voice and personality.'],
    ['Lipsync', 'Mouth, breathing and micro-expressions synced to any voiceover.'],
    ['Localization in 5 languages', 'The same creative in EN, DE, FR, IT and PT, ready for each market.'],
    ['AI inserts & B-roll', '3D scenes, stories and demos that carry the VSL narrative.'],
    ['AI voices & voiceover', 'Voice cloning and direction with the right emotion, pace and accent.'],
    ['AI UGC', 'Native social-style testimonials, ready to run as ads.'],
    ['Product demo scenes', 'Hero shots and product-in-use scenes with no studio, actors or shipping.'],
    ['Automations', 'In-house tools that cut hours of manual work out of production.'],
  ],
};

let idioma = 'pt';
try { idioma = localStorage.getItem('idioma') === 'en' ? 'en' : 'pt'; } catch { /* sem storage */ }
const t = (chave) => TEXTOS[idioma][chave] ?? chave;

// Títulos grandes viram letras soltas (para o glitch); cada palavra fica inteira na mesma linha.
function quebrarLetras(el) {
  el.innerHTML = el.textContent.split(' ').map((p) =>
    `<span class="palavra">${[...p].map((c) => `<span class="letra">${c}</span>`).join('')}</span>`).join(' ');
}

function aplicarIdioma() {
  document.documentElement.lang = idioma === 'pt' ? 'pt-BR' : 'en';
  document.querySelectorAll('[data-i18n]').forEach((el) => { el.textContent = t(el.dataset.i18n); });
  document.querySelectorAll('.titulo-display[data-i18n]').forEach(quebrarLetras);
  document.querySelectorAll('.idioma [data-lang]').forEach((el) => el.classList.toggle('ativo', el.dataset.lang === idioma));
  const lista = document.querySelector('.servicos');
  lista.innerHTML = SERVICOS[idioma].map(([h, p], i) =>
    `<li><span class="num">${String(i + 1).padStart(2, '0')}</span><h3>${h}</h3><p>${p}</p></li>`).join('');
  lista.querySelectorAll('h3').forEach(quebrarLetras);
  montarContato();
  if (typeof traduzirPrompt === 'function') traduzirPrompt();
}

function montarContato() {
  const pedir = document.getElementById('pedir-portfolio');
  const email = document.getElementById('link-email');
  if (CONFIG.email) {
    const url = `mailto:${CONFIG.email}?subject=${encodeURIComponent(t('h.assunto'))}&body=${encodeURIComponent(t('h.corpo'))}`;
    pedir.href = url;
    email.href = `mailto:${CONFIG.email}`;
    email.textContent = CONFIG.email;
  } else {
    pedir.href = '#contato';
    email.textContent = `E-mail · ${t('h.embreve')}`;
    email.classList.add('pendente');
  }
  for (const rede of ['linkedin', 'instagram']) {
    const a = document.getElementById(`link-${rede}`);
    a.href = CONFIG[rede] || '#';
    a.classList.toggle('pendente', !CONFIG[rede]);
    if (CONFIG[rede]) { a.target = '_blank'; a.rel = 'noopener'; }
  }
}

document.querySelector('.idioma').addEventListener('click', () => {
  idioma = idioma === 'pt' ? 'en' : 'pt';
  try { localStorage.setItem('idioma', idioma); } catch { /* sem storage */ }
  aplicarIdioma();
});

// ---------- Rolagem suave ----------
// A página é uma sequência: sempre começa do topo, mesmo ao recarregar.
if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
window.scrollTo(0, 0);
gsap.registerPlugin(ScrollTrigger, ScrambleTextPlugin);
const movimentoReduzido = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (movimentoReduzido) document.documentElement.classList.add('movimento-reduzido');

const lenis = new Lenis({ lerp: 0.09 });
window.__lenis = lenis;   // útil para depuração no console
lenis.scrollTo(0, { immediate: true });
lenis.on('scroll', ScrollTrigger.update);
gsap.ticker.add((tempo) => lenis.raf(tempo * 1000));
gsap.ticker.lagSmoothing(0);

document.querySelectorAll('[data-nav]').forEach((a) => a.addEventListener('click', (e) => {
  e.preventDefault();
  lenis.scrollTo(a.getAttribute('href'), { duration: 1.6 });
}));

// Capítulo ativo na navegação
document.querySelectorAll('main > section').forEach((sec) => {
  ScrollTrigger.create({
    trigger: sec, start: 'top 50%', end: 'bottom 50%',
    onToggle: (self) => {
      if (!self.isActive) return;
      document.querySelectorAll('.capitulos a').forEach((a) => a.classList.toggle('ativo', a.dataset.cap === sec.id));
    },
  });
});

// Título quebrado em letras
document.querySelectorAll('[data-split]').forEach((el) => {
  el.innerHTML = el.innerHTML.split(/(<br>)/).map((parte) => parte === '<br>' ? parte
    : [...parte].map((c) => `<span class="letra">${c === ' ' ? '&nbsp;' : c}</span>`).join('')).join('');
});

// ---------- A: vídeo da Hanna — o pedido aparece pronto e a pessoa clica em "Gerar" ----------
// O clique libera o som (o navegador só deixa tocar com áudio depois de uma interação): carrega rápido e ela já fala.
const HERO_TEXTOS = {
  pt: { prompt: 'gerar vídeo: Hanna, UGC, 1 avatar → 5 idiomas, voz nativa, 9:16', botao: 'Gerar', gerando: 'gerando', pronto: 'pronto · 5 idiomas' },
  en: { prompt: 'generate video: Hanna, UGC, 1 avatar → 5 languages, native voice, 9:16', botao: 'Generate', gerando: 'generating', pronto: 'done · 5 languages' },
};
const heroQuadro = document.querySelector('.hero-quadro');
const heroVideo = heroQuadro.querySelector('.hero-midia');
const botaoSomHero = document.querySelector('.hero-video .botao-som');
let tx = HERO_TEXTOS[idioma];
const caixa = heroQuadro.querySelector('.prompt-caixa'), digitado = heroQuadro.querySelector('.digitado');
const barra = heroQuadro.querySelector('.prompt-barra span'), status = heroQuadro.querySelector('.prompt-status');
const botaoGerar = heroQuadro.querySelector('.botao-gerar');
let progresso = 0, gerando = false, pronto = false, heroNaTela = true;
function mostrarProgresso(v) {
  progresso = v;
  barra.style.width = `${v}%`;
  status.textContent = pronto ? tx.pronto : gerando ? `${tx.gerando} · ${Math.round(v)}%` : '';
}
function tocarHero() { if (pronto && heroNaTela) heroVideo.play().catch(() => {}); }
// Antes do clique: o primeiro quadro fica desfocado atrás do pedido, como uma prévia do que vai ser gerado.
gsap.set(heroVideo, { opacity: 0.35, scale: 1.06, filter: 'blur(16px)' });
gsap.set(botaoSomHero, { opacity: 0, y: 8 });
gsap.set(botaoGerar, { opacity: 0, y: 6, pointerEvents: 'none' });
function mostrarBotao() {
  gsap.to(botaoGerar, { opacity: 1, y: 0, duration: 0.4, ease: 'back.out(2)', onComplete: () => { botaoGerar.style.pointerEvents = ''; } });
}
// O pedido já chega escrito, com o botão pronto (sem esperar digitar).
digitado.textContent = tx.prompt;
gsap.delayedCall(movimentoReduzido ? 0 : 0.5, mostrarBotao);

botaoGerar.addEventListener('click', () => {
  if (gerando) return;
  gerando = true;
  // Toca e pausa dentro do clique: o navegador passa a aceitar o áudio quando o vídeo aparecer.
  heroVideo.muted = false;
  heroVideo.play().then(() => { if (!pronto) { heroVideo.pause(); heroVideo.currentTime = 0; } }).catch(() => {});
  gsap.to(botaoGerar, { opacity: 0, scale: 0.9, duration: 0.25, onComplete: () => { botaoGerar.hidden = true; } });
  gsap.to({ v: 0 }, { v: 100, duration: 0.6, ease: 'power1.inOut',
    onUpdate() { mostrarProgresso(this.targets()[0].v); }, onComplete: revelarVideo });
});
function revelarVideo() {
  pronto = true;
  mostrarProgresso(100);
  heroVideo.currentTime = 0;
  botaoSomHero.textContent = t(heroVideo.muted ? 'c.som' : 'c.som-on');
  gsap.timeline({ onStart: tocarHero })
    .to(heroVideo, { opacity: 1, scale: 1, filter: 'blur(0px)', duration: 0.8, ease: 'power2.out' })
    .to(caixa, { opacity: 0, y: -12, filter: 'blur(6px)', duration: 0.4, onComplete: () => { caixa.style.visibility = 'hidden'; } }, 0.3)
    .to(botaoSomHero, { opacity: 1, y: 0, duration: 0.5 }, 0.5);
}
// O botão "Gerar" puxa levemente para o cursor (efeito ímã) enquanto o mouse passa por cima.
botaoGerar.addEventListener('pointermove', (e) => {
  const r = botaoGerar.getBoundingClientRect();
  gsap.to(botaoGerar, { x: (e.clientX - r.left - r.width / 2) * 0.25, y: (e.clientY - r.top - r.height / 2) * 0.35, duration: 0.3 });
});
botaoGerar.addEventListener('pointerleave', () => gsap.to(botaoGerar, { x: 0, y: 0, duration: 0.5, ease: 'elastic.out(1, 0.4)' }));
// Troca PT/EN: o pedido, o status e os botões acompanham o idioma do site.
function traduzirPrompt() {
  tx = HERO_TEXTOS[idioma];
  digitado.textContent = tx.prompt;
  botaoGerar.textContent = tx.botao;
  mostrarProgresso(progresso);
  botaoSomHero.textContent = t(heroVideo.muted ? 'c.som' : 'c.som-on');
  if (typeof desenharFoto === 'function') desenharFoto(Math.max(0, pFoto));
}
botaoSomHero.addEventListener('click', () => {
  heroVideo.muted = !heroVideo.muted;
  tocarHero();
  botaoSomHero.textContent = t(heroVideo.muted ? 'c.som' : 'c.som-on');
});

// ---------- H: foto do Shiro — pedido de geração que falha ("pessoa real detectada") e revela a foto ----------
// Tudo anda com a rolagem: digita, a barra enche, trava no erro e a foto aparece (e volta se a pessoa subir).
const FOTO_TEXTOS = {
  pt: { prompt: 'gerar retrato: Alisson Martins, IA Creator, luz de estúdio, fundo escuro, 8k',
    gerando: 'gerando', erro: 'error 404 · real_human_detected' },
  en: { prompt: 'generate portrait: Alisson Martins, AI Creator, studio light, dark background, 8k',
    gerando: 'generating', erro: 'error 404 · real_human_detected' },
};
const fotoContato = document.querySelector('.foto-contato');
fotoContato.insertAdjacentHTML('beforeend', `<div class="prompt-caixa"><p class="prompt-linha"><span class="digitado"></span><span class="cursor"></span></p>
  <div class="prompt-barra"><span></span></div><p class="prompt-status"></p></div>`);
const caixaFoto = fotoContato.querySelector('.prompt-caixa'), digitadoFoto = fotoContato.querySelector('.digitado');
const barraFoto = fotoContato.querySelector('.prompt-barra span'), statusFoto = fotoContato.querySelector('.prompt-status');
const fotoBase = fotoContato.querySelector('.base'), seloFoto = fotoContato.querySelector('figcaption');
let pFoto = -1;
function desenharFoto(p) {
  const lim = (v) => Math.min(1, Math.max(0, v));
  const tf = FOTO_TEXTOS[idioma];
  const d = lim(p / 0.3), b = lim((p - 0.32) / 0.25), erro = p >= 0.57, r = lim((p - 0.7) / 0.25);
  digitadoFoto.textContent = tf.prompt.slice(0, Math.round(d * tf.prompt.length));
  barraFoto.style.width = `${63 * b}%`;
  statusFoto.textContent = erro ? tf.erro : `${tf.gerando} · ${Math.round(63 * b)}%`;
  caixaFoto.classList.toggle('erro', erro);
  statusFoto.classList.toggle('erro', erro);
  gsap.set(caixaFoto, { opacity: 1 - lim(r * 2), y: -10 * r, filter: `blur(${6 * r}px)` });
  gsap.set(fotoBase, { opacity: r, scale: 1.04 - 0.04 * r, filter: `blur(${12 * (1 - r)}px)` });
  gsap.set(seloFoto, { opacity: lim((p - 0.92) / 0.08) });
}
ScrollTrigger.create({ trigger: '.contato-palco', start: 'top 75%', end: 'bottom bottom', scrub: true,
  onUpdate: (self) => { pFoto = self.progress; desenharFoto(pFoto); } });
desenharFoto(0);

// Fora da tela o vídeo pausa (e volta a tocar quando a pessoa sobe de novo).
new IntersectionObserver(([e]) => {
  heroNaTela = e.isIntersecting;
  if (heroNaTela) tocarHero(); else heroVideo.pause();
}).observe(heroVideo);

// Entradas de texto
// Entrada do título: espera as partículas ficarem prontas (ou 1,2 s) para não disputar o processador.
gsap.set('#quem .letra', { yPercent: 110, opacity: 0, filter: 'blur(8px)' });
gsap.set('#quem .cargo, #quem .lead, #quem .dica-rolar', { y: 20, opacity: 0 });
let tituloMostrado = false;
function mostrarTitulo() {
  if (tituloMostrado) return;
  tituloMostrado = true;
  gsap.to('#quem .letra', { yPercent: 0, opacity: 1, filter: 'blur(0px)', stagger: 0.04, duration: 1.1, ease: 'expo.out' });
  gsap.to('#quem .cargo, #quem .lead, #quem .dica-rolar', { y: 0, opacity: 1, stagger: 0.12, duration: 1, delay: 0.5 });
}
setTimeout(mostrarTitulo, 1200);

// Glitch pontual nos títulos grandes que estão na tela: algumas letras (ou o título todo) separam em ciano/magenta.
function glitchTitulos() {
  const naTela = (el) => { const r = el.getBoundingClientRect(); return r.bottom > 0 && r.top < window.innerHeight; };
  // Serviços: só 1 ou 2 por vez, para a lista não virar um pisca-pisca.
  const servicos = gsap.utils.shuffle([...document.querySelectorAll('.servicos h3')].filter(naTela)).slice(0, 1 + Math.round(Math.random()));
  [...document.querySelectorAll('.titulo-display')].filter(naTela).concat(servicos).forEach((titulo) => {
    const letras = [...titulo.querySelectorAll('.letra')].filter((l) => l.textContent.trim());
    const todas = Math.random() < 0.2;
    const alvo = todas ? letras : gsap.utils.shuffle(letras).slice(0, 2 + Math.floor(Math.random() * 4));
    alvo.forEach((l) => l.classList.add(todas ? 'glitch-forte' : 'glitch-letra'));
    setTimeout(() => alvo.forEach((l) => l.classList.remove('glitch-forte', 'glitch-letra')), todas ? 420 : 320);
  });
  setTimeout(glitchTitulos, 1800 + Math.random() * 1700);
}
if (!movimentoReduzido) setTimeout(glitchTitulos, 3500);
// O topo some desfocando no fim da seção — só no computador; no celular ele rola normalmente.
gsap.matchMedia().add('(min-width: 861px)', () => {
  gsap.to('#quem .bloco-texto, #quem .hero-video', {
    opacity: 0, y: -60, filter: 'blur(10px)', ease: 'none',
    scrollTrigger: { trigger: '#quem', start: '86% bottom', end: 'bottom bottom', scrub: true },
  });
});
// ---------- D: túnel dos 2000 ----------
const mundo = document.querySelector('.tunel-mundo');
const tiles = [];
const PROFUNDIDADE = 9000;
const totalParede = Math.min(window.WALL_COUNT || 0, window.innerWidth < 860 ? 160 : 321);
for (let i = 0; i < totalParede; i++) {
  const img = document.createElement('img');
  img.dataset.src = `media/wall/${String(i + 1).padStart(3, '0')}.jpg`;   // carrega só perto da seção D
  img.alt = '';
  img.decoding = 'async';   // sem loading=lazy: em 3D o navegador acha que estão fora da tela e nunca carrega
  const ang = Math.random() * Math.PI * 2;
  const raio = (window.innerWidth < 860 ? 260 : 420) + Math.random() * 520;
  tiles.push({ el: img, x: Math.cos(ang) * raio, y: Math.sin(ang) * raio * 0.75, z: -(i / totalParede) * PROFUNDIDADE - 300 });
  mundo.appendChild(img);
}
// As 321 miniaturas só baixam quando o túnel começa a entrar na tela. Como ele vem logo depois do topo,
// qualquer margem faria elas baixarem já ao abrir o site (principalmente no celular).
new IntersectionObserver((entradas, obs) => {
  if (!entradas.some((e) => e.isIntersecting)) return;
  for (const tl of tiles) tl.el.src = tl.el.dataset.src;
  obs.disconnect();
}).observe(document.getElementById('numeros'));
const contador = { v: 0 };
const elContador = document.getElementById('contador');
function desenharTunel(prog) {
  const cam = prog * PROFUNDIDADE;
  for (const tl of tiles) {
    const z = tl.z + cam;
    const visivel = z < 500 && z > -6000;
    tl.el.style.visibility = visivel ? 'visible' : 'hidden';
    if (visivel) {
      tl.el.style.transform = `translate3d(${tl.x}px, ${tl.y}px, ${z}px)`;
      tl.el.style.opacity = Math.min(1, (z + 6000) / 2500) * Math.min(1, (500 - z) / 300);
    }
  }
}
desenharTunel(0);
// O túnel só começa depois que o texto do +2000 aparece (texto entra em 'top 40%').
ScrollTrigger.create({
  trigger: '#numeros', start: 'top 10%', end: 'bottom top', scrub: true,
  onUpdate: (self) => desenharTunel(self.progress),
});
gsap.fromTo('.tunel', { opacity: 0 }, { opacity: 1, ease: 'none', scrollTrigger: { trigger: '#numeros', start: 'top 10%', end: 'top -25%', scrub: true } });
gsap.to(contador, {
  v: 2000, ease: 'power1.inOut', snap: { v: 10 },
  onUpdate: () => { elContador.textContent = contador.v.toLocaleString('pt-BR'); },
  scrollTrigger: { trigger: '#numeros', start: 'top 30%', end: 'center center', scrub: 1 },
});
gsap.from('.numeros > *', { opacity: 0, y: 30, stagger: 0.08, scrollTrigger: { trigger: '#numeros', start: 'top 40%', toggleActions: 'play none none reverse' } });

// ---------- E: feed de celular ----------
const trilho = document.querySelector('.feed-trilho');
const secTrabalhos = document.getElementById('trabalhos');
let itensFeed = [];
let gatilhoFeed = null;
let ativoFeed = -1;

function montarFeed(filtro) {
  const lista = (window.FEED || []).filter((f) => filtro === 'todos' || f.tipo === filtro);
  trilho.innerHTML = '';
  itensFeed = lista.map((f, i) => {
    const d = document.createElement('div');
    d.className = 'feed-item';
    d.style.top = `${i * 100}%`;
    d.innerHTML = `<img src="media/feed/${f.id}.jpg" alt="" loading="lazy"><span class="tag">${f.tipo}</span>`;
    trilho.appendChild(d);
    return { el: d, dados: f, video: null };
  });
  secTrabalhos.style.height = `${Math.max(2, lista.length) * 32 + 100}vh`;
  ativoFeed = -1;
  if (gatilhoFeed) gatilhoFeed.kill();
  gatilhoFeed = ScrollTrigger.create({
    trigger: secTrabalhos, start: 'top top', end: 'bottom bottom', scrub: 0.6,
    snap: itensFeed.length > 1 ? { snapTo: 1 / (itensFeed.length - 1), duration: 0.35, delay: 0.08, ease: 'power2.out' } : false,
    onUpdate: (self) => {
      const pos = self.progress * (itensFeed.length - 1);
      gsap.set(trilho, { yPercent: -pos * 100 });
      ativarFeed(Math.round(pos));
    },
  });
  ScrollTrigger.refresh();
  ativarFeed(0);
}

function ativarFeed(i) {
  if (i === ativoFeed || !itensFeed[i]) return;
  ativoFeed = i;
  itensFeed.forEach((item, k) => {
    const perto = Math.abs(k - i) <= 1;
    if (perto && !item.video) {
      const v = document.createElement('video');
      Object.assign(v, { muted: true, loop: true, playsInline: true, preload: 'metadata', src: `media/feed/${item.dados.id}.mp4` });
      v.setAttribute('muted', '');
      v.poster = `media/feed/${item.dados.id}.jpg`;
      item.el.querySelector('img').replaceWith(v);
      item.video = v;
    }
    if (item.video) (k === i ? item.video.play().catch(() => {}) : item.video.pause());
  });
}

document.querySelectorAll('.filtros button').forEach((b) => b.addEventListener('click', () => {
  document.querySelectorAll('.filtros button').forEach((x) => x.classList.toggle('ativo', x === b));
  montarFeed(b.dataset.filtro);
  lenis.scrollTo(secTrabalhos, { duration: 0.8 });
}));

// HUD de baixo só acompanha o topo; some a partir da seção D.
ScrollTrigger.create({
  trigger: '#numeros', start: 'top 80%',
  onEnter: () => document.body.classList.add('hud-oculto'),
  onLeaveBack: () => document.body.classList.remove('hud-oculto'),
});

// ---------- F · Seu produto: pilha de cartas ----------
const cartas = gsap.utils.toArray('#produto .carta');
const pilhaAtual = document.getElementById('pilha-atual');
document.getElementById('pilha-total').textContent = String(cartas.length).padStart(2, '0');
// Posição de uma carta que está "n" posições abaixo do topo da pilha.
const naPilha = (n) => ({ xPercent: -50, yPercent: -50, y: n * 14, scale: 1 - n * 0.04, rotation: n === 0 ? 0 : (n % 2 ? 3 : -3) });
cartas.forEach((c, i) => gsap.set(c, { ...naPilha(Math.min(i, 3)), zIndex: cartas.length - i, opacity: i > 3 ? 0 : 1 }));
const tlPilha = gsap.timeline({
  scrollTrigger: {
    trigger: '#produto', start: 'top top', end: 'bottom bottom', scrub: 0.6,
    onUpdate: (self) => {
      const k = Math.min(cartas.length - 1, Math.floor(self.progress * (cartas.length - 1) + 0.5));
      pilhaAtual.textContent = String(k + 1).padStart(2, '0');
    },
  },
});
cartas.forEach((carta, i) => {
  if (i === cartas.length - 1) return;
  const lado = i % 2 ? 1 : -1;
  tlPilha.to(carta, { x: () => lado * window.innerWidth * 0.9, y: -120, rotation: lado * 28, opacity: 0, ease: 'power2.in', duration: 1 }, i);
  // As de baixo sobem uma posição.
  cartas.slice(i + 1).forEach((c, j) => {
    if (j > 3) return;
    tlPilha.to(c, { ...naPilha(j), opacity: 1, ease: 'power2.out', duration: 1 }, i);
  });
});

// ---------- G e H: entradas ----------
gsap.utils.toArray('.cabecalho-secao, .contato').forEach((el) => {
  gsap.from(el.children, { y: 40, opacity: 0, stagger: 0.1, duration: 1, scrollTrigger: { trigger: el, start: 'top 80%' } });
});

// Rodapé: "aberto a novos projetos" passando pelos 5 idiomas do site, com o texto embaralhando na troca.
const STATUS = [['PT', 'aberto a novos projetos'], ['EN', 'open to new projects'], ['DE', 'offen für neue Projekte'],
  ['FR', 'ouvert aux nouveaux projets'], ['IT', 'aperto a nuovi progetti']];
let statusAtual = idioma === 'en' ? 1 : 0;
const statusLang = document.getElementById('status-lang'), statusTexto = document.getElementById('status-texto');
function trocarStatus() {
  const [lang, texto] = STATUS[statusAtual];
  statusLang.textContent = lang;
  gsap.to(statusTexto, { duration: 0.7, scrambleText: { text: texto, chars: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', speed: 0.5 } });
  statusAtual = (statusAtual + 1) % STATUS.length;
}
trocarStatus();
if (!movimentoReduzido) setInterval(trocarStatus, 3200);

// Rodapé: quanto tempo a página levou para carregar neste acesso.
window.addEventListener('load', () => {
  const s = performance.now() / 1000;
  document.getElementById('tempo-carga').textContent = `${s.toLocaleString(idioma === 'pt' ? 'pt-BR' : 'en', { maximumFractionDigits: 2, minimumFractionDigits: 2 })} s`;
});

// ---------- Início ----------
aplicarIdioma();
// O feed (vídeos) só é montado quando o navegador estiver ocioso.
requestAnimationFrame(() => requestAnimationFrame(mostrarTitulo));
(window.requestIdleCallback || ((f) => setTimeout(f, 300)))(() => montarFeed('todos'));
