import { iniciarParticulas } from './particulas.js?v=38';

// ---------- Configuração (preencher antes de publicar) ----------
const CONFIG = {
  email: '',          // e-mail profissional novo — ainda não existe
  linkedin: '',
  instagram: '',
};

// ---------- Textos PT / EN ----------
const TEXTOS = {
  pt: {
    'cap.quem': 'Quem cria', 'cap.ruido': 'Do ruído ao rosto', 'cap.idiomas': 'Cinco idiomas', 'cap.numeros': 'Volume',
    'cap.trabalhos': 'Trabalhos', 'cap.produto': 'Seu produto', 'cap.servicos': 'O que eu faço', 'cap.contato': 'Contato',
    'nav.contato': 'Contato', 'hud.funcao': 'IA Creator · Direct Response',
    'a.cargo': 'IA Creator · Direct Response',
    'a.lead': 'Crio avatares, vozes e cenas com IA para VSLs, leads, upsells e anúncios — em cinco idiomas. E construo as automações que aceleram tudo isso.',
    'a.rolar': 'Role para gerar',
    'b.titulo': 'Do ruído ao rosto',
    'b.lead': 'Toda imagem gerada começa como ruído. Cada passo tira um pouco do caos, até sobrar alguém que nunca existiu.',
    'c.titulo': 'Um rosto. Cinco idiomas.',
    'c.lead': 'A mesma personagem vende em inglês, alemão, francês, italiano e português. Repare no que acontece quando ela vira de costas.',
    'c.som': 'Ativar som', 'c.som-on': 'Som ligado', 'c.previa': 'Prévia · vídeo final em produção',
    'd.criativos': 'criativos criados', 'd.anos': 'anos em Direct Response', 'd.idiomas': 'idiomas', 'd.formatos': 'formatos',
    'e.titulo': 'Trabalhos',
    'e.lead': 'Avatares, inserts 3D e histórias feitos para ofertas reais.',
    'e.f.todos': 'Todos', 'e.f.homens': 'Homens', 'e.f.mulheres': 'Mulheres', 'e.f.historias': 'Histórias',
    'f.titulo': 'Seu produto poderia estar aqui.',
    'f.lead': 'A velaxa é uma marca fictícia que criei do zero com IA: identidade, embalagens, linha de produtos e hero shots — sem estúdio, sem fotógrafo, sem frete. Imagina isso com a sua embalagem.',
    'g.titulo': 'O que eu faço',
    'h.titulo': 'Vamos escalar a próxima oferta?', 'h.cta': 'Entre em contato',
    'h.nota': 'Vaga, freela ou projeto: me manda um e-mail e a gente conversa.',
    'h.faixa': 'IA Creator · Direct Response · EN · DE · FR · IT · PT · +2.000 criativos · ', 'h.carregou': 'esta página carregou em',
    'h.assunto': 'Contato pelo site — Alisson Martins',
    'h.corpo': 'Olá, Alisson! Vi seu site e gostaria de conversar.\n\nEmpresa:\nVaga/projeto:\n',
    'h.embreve': 'em breve',
  },
  en: {
    'cap.quem': 'The creator', 'cap.ruido': 'Noise to face', 'cap.idiomas': 'Five languages', 'cap.numeros': 'Volume',
    'cap.trabalhos': 'Work', 'cap.produto': 'Your product', 'cap.servicos': 'What I do', 'cap.contato': 'Contact',
    'nav.contato': 'Contact', 'hud.funcao': 'AI Creator · Direct Response',
    'a.cargo': 'AI Creator for Direct Response',
    'a.lead': 'I create AI avatars, voices and scenes for VSLs, leads, upsells and ads — in five languages. And I build the automations that speed it all up.',
    'a.rolar': 'Scroll to generate',
    'b.titulo': 'From noise to face',
    'b.lead': 'Every generated image starts as noise. Each step removes a little chaos, until someone who never existed is left.',
    'c.titulo': 'One face. Five languages.',
    'c.lead': 'The same character sells in English, German, French, Italian and Portuguese. Watch what happens when she turns around.',
    'c.som': 'Turn sound on', 'c.som-on': 'Sound on', 'c.previa': 'Preview · final video in production',
    'd.criativos': 'creatives produced', 'd.anos': 'years in direct response', 'd.idiomas': 'languages', 'd.formatos': 'formats',
    'e.titulo': 'Work',
    'e.lead': 'Avatars, 3D inserts and stories made for real offers.',
    'e.f.todos': 'All', 'e.f.homens': 'Men', 'e.f.mulheres': 'Women', 'e.f.historias': 'Stories',
    'f.titulo': 'Your product could be here.',
    'f.lead': 'velaxa is a fictional brand I built from scratch with AI: identity, packaging, product line and hero shots — no studio, no photographer, no shipping. Picture this with your packaging.',
    'g.titulo': 'What I do',
    'h.titulo': 'Ready to scale your next offer?', 'h.cta': 'Get in touch',
    'h.nota': 'Job, freelance or project: send me an email and let’s talk.',
    'h.faixa': 'AI Creator · Direct Response · EN · DE · FR · IT · PT · 2,000+ creatives · ', 'h.carregou': 'this page loaded in',
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

// Falas do vídeo-vitrine (rascunho — ver video-vitrine/ROTEIRO.md)
const FALAS = [
  "Three months ago these jeans wouldn't get past my knees. Today they close with room to spare.",
  'Ich habe alles versucht. Diät, Fitnessstudio, Tee, Shakes. Nichts hat funktioniert.',
  "Ce n'est pas un manque de volonté. C'est ton métabolisme qui ralentit la nuit.",
  'Dieci gocce prima di dormire. Solo questo. Il primo cambiamento? Niente più gonfiore.',
  'Mas sabe o que é mais louco? Eu não existo. Nem eu, nem essa casa, nem esse produto.',
  'Esse vídeo inteiro foi feito com IA — pelo Alisson Martins. Imagina o que ele faz pela sua oferta.',
];

let idioma = 'pt';
try { idioma = localStorage.getItem('idioma') || 'pt'; } catch { /* sem storage */ }
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
  atualizarBotaoSom();
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

// ---------- A e B: partículas ----------
const hud = document.getElementById('hud-leitura');
const hudSteps = document.getElementById('hud-steps');
function escreverHud(steps) {
  const s = String(Math.round(steps)).padStart(2, '0');
  hud.textContent = `SEED 4821 · STEP ${s}/30`;
  if (hudSteps) hudSteps.textContent = `STEPS · ${s}/30`;
}

let campo = null;
async function montarParticulas() {
  if (movimentoReduzido) return;
  try {
    campo = await iniciarParticulas(document.getElementById('particulas'), ['media/foto.jpg', 'media/avatar-retrato.jpg']);
  } catch (erro) {
    console.warn('Partículas desativadas:', erro);
    document.documentElement.classList.add('sem-webgl');
    return;
  }
  window.__campo = campo;

  // Estado das partículas como função pura da rolagem — um só lugar decide t e opacidade;
  // particulas.js suaviza a chegada ao alvo.
  const lim = (v) => Math.min(1, Math.max(0, v));
  const faixa = (y, de, ate) => lim((y - de) / (ate - de));
  function atualizar() {
    const y = window.scrollY, vh = window.innerHeight;
    const q = document.getElementById('quem'), r = document.getElementById('ruido');
    const c = document.getElementById('idiomas'), n = document.getElementById('numeros');
    let tAlvo, op = 1;
    // B começa assim que o texto de A termina de sumir (fim de #quem) e a Hanna fica pronta a 60% de #ruido.
    const pRuido = faixa(y, q.offsetTop + q.offsetHeight - vh, r.offsetTop + r.offsetHeight * 0.6 - vh);
    // A Hanna se desfaz enquanto C sobe (troca cruzada com a vitrine, sem tela vazia no meio).
    const fimB = r.offsetTop + r.offsetHeight - vh;
    const pSome = faixa(y, fimB - vh * 0.4, fimB);
    const pNum = faixa(y, n.offsetTop - vh, n.offsetTop + n.offsetHeight);
    // Depois da vitrine as partículas somem de vez (o túnel do D já é o fundo).
    if (pSome > 0 || pNum > 0) { tAlvo = 3 + 0.8 * pSome; op = 1 - pSome; }   // rosto vira poeira e some
    // As partículas só existem em B: nascem do ruído (t = 2) e viram a Hanna (t = 3). Em A ficam invisíveis.
    else { tAlvo = 2 + pRuido; op = lim(pRuido * 4); }
    campo.alvoT = tAlvo;
    campo.alvoOpacidade = op;
    escreverHud(tAlvo <= 1 ? tAlvo * 30 : lim(tAlvo - 2) * 30);
  }
  lenis.on('scroll', atualizar);
  window.addEventListener('resize', atualizar);
  atualizar();

  // Foto real da Hanna: aparece quando o rosto de partículas termina de se formar.
  const fotoHanna = document.getElementById('rosto-hanna');
  const suave = (v, a, b) => { const x = lim((v - a) / (b - a)); return x * x * (3 - 2 * x); };
  function posicionarFotos() {
    const r = campo.rostoNaTela();
    fotoHanna.style.width = fotoHanna.style.height = `${r.lado}px`;
    fotoHanna.style.left = `${r.cx - r.lado / 2}px`;
    fotoHanna.style.top = `${r.cy - r.lado / 2}px`;
  }
  posicionarFotos();
  window.addEventListener('resize', posicionarFotos);
  gsap.ticker.add(() => {
    const tt = campo.t;
    const opHanna = suave(tt, 2.82, 2.98) * (1 - suave(tt, 3.02, 3.3)) * lim(campo.opacidade);
    fotoHanna.style.opacity = opHanna;
    fotoHanna.style.filter = `blur(${(1 - opHanna) * 10}px)`;
    campo.esconde = opHanna;
  });
}

// ---------- A: foto do Shiro — pedido de geração que falha ("pessoa real detectada") e revela a foto ----------
// Protótipos: ?foto=rolagem (avança com a rolagem, padrão) · ?foto=auto (roda sozinho ao carregar).
const FOTO_TEXTOS = {
  pt: { prompt: 'gerar retrato: Alisson Martins, IA Creator, luz de estúdio, fundo escuro, 8k',
    gerando: 'gerando', erro: 'error 404 · real_human_detected' },
  en: { prompt: 'generate portrait: Alisson Martins, AI Creator, studio light, dark background, 8k',
    gerando: 'generating', erro: 'error 404 · real_human_detected' },
};
const variante = new URLSearchParams(location.search).get('foto') === 'auto' ? 'auto' : 'rolagem';
const fotoA = document.querySelector('#quem .foto-a');
let tx = FOTO_TEXTOS[idioma];
fotoA.classList.add('v-prompt');
fotoA.innerHTML = `<img class="base" src="media/foto.jpg" alt="">
  <div class="prompt-caixa"><p class="prompt-linha"><span class="digitado"></span><span class="cursor"></span></p>
  <div class="prompt-barra"><span></span></div><p class="prompt-status">${tx.gerando} · 0%</p></div>`;
const caixa = fotoA.querySelector('.prompt-caixa'), digitado = fotoA.querySelector('.digitado');
const barra = fotoA.querySelector('.prompt-barra span'), status = fotoA.querySelector('.prompt-status');
const fotoBase = fotoA.querySelector('.base');
let emErro = false;
function mostrarProgresso(v) {
  barra.style.width = `${v}%`;
  if (!emErro) status.textContent = `${tx.gerando} · ${Math.round(v)}%`;   // no erro, a mensagem fica
}
function mostrarErro(ligado) {
  emErro = ligado;
  caixa.classList.toggle('erro', ligado);
  status.classList.toggle('erro', ligado);
  if (ligado) status.textContent = tx.erro;
}
// O pedido é digitado sozinho ao carregar (para a tela não ficar parada); o resto depende da versão.
const digitar = gsap.to({}, { duration: tx.prompt.length * 0.03, delay: 1.2, ease: 'none',
  onUpdate() { digitado.textContent = tx.prompt.slice(0, Math.round(this.progress() * tx.prompt.length)); } });
// Troca PT/EN: o pedido, o status e o erro acompanham o idioma do site.
function traduzirPrompt() {
  tx = FOTO_TEXTOS[idioma];
  digitado.textContent = tx.prompt.slice(0, Math.round(digitar.progress() * tx.prompt.length));
  status.textContent = emErro ? tx.erro : `${tx.gerando} · ${Math.round(parseFloat(barra.style.width) || 0)}%`;
}

if (variante === 'auto') {
  const prog = { v: 0 };
  gsap.timeline({ delay: 1.2 + tx.prompt.length * 0.03 })
    .to(prog, { v: 63, duration: 1.6, ease: 'power1.in', onUpdate: () => mostrarProgresso(prog.v) }, '+=0.3')
    .add(() => mostrarErro(true))
    .to(caixa, { opacity: 0, y: -10, filter: 'blur(6px)', duration: 0.6 }, '+=1.6')
    .fromTo(fotoBase, { opacity: 0, scale: 1.04, filter: 'blur(12px)' },
      { opacity: 1, scale: 1, filter: 'blur(0px)', duration: 1.1, ease: 'power2.out' }, '-=0.2');
} else {
  // Com a rolagem: a barra enche, trava no erro e a foto aparece — e tudo volta se a pessoa rolar para cima.
  document.getElementById('quem').classList.add('a-longa');
  const lim = (v) => Math.min(1, Math.max(0, v));
  let erroLigado = false;
  gsap.ticker.add(() => {
    const q = document.getElementById('quem');
    const p = lim(window.scrollY / ((q.offsetHeight - window.innerHeight) * 0.62));
    if (p > 0 && digitar.progress() < 1) digitar.progress(1);     // rolou antes de terminar de digitar
    mostrarProgresso(63 * lim(p / 0.5));
    if (p >= 0.5 !== erroLigado) { erroLigado = p >= 0.5; mostrarErro(erroLigado); }
    const r = lim((p - 0.68) / 0.3);                                 // revelação da foto
    gsap.set(caixa, { opacity: 1 - lim(r * 2), y: -10 * r, filter: `blur(${6 * r}px)` });
    gsap.set(fotoBase, { opacity: r, scale: 1.04 - 0.04 * r, filter: `blur(${12 * (1 - r)}px)` });
  });
}
// Seletor temporário para o Shiro comparar as versões.
document.body.insertAdjacentHTML('beforeend', `<nav class="troca-prototipo" aria-label="Protótipos da foto">
  ${[['rolagem', 'A · Com rolagem'], ['auto', 'B · Automático']].map(([v, n]) =>
    `<button type="button" data-v="${v}" class="${v === variante ? 'ativo' : ''}">${n}</button>`).join('')}</nav>`);
document.querySelectorAll('.troca-prototipo button').forEach((b) => b.addEventListener('click', () => {
  const u = new URL(location.href); u.searchParams.set('foto', b.dataset.v); location.href = u;
}));

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
gsap.to('#quem .bloco-texto, #quem .foto-a', {
  opacity: 0, y: -60, filter: 'blur(10px)', ease: 'none',
  scrollTrigger: { trigger: '#quem', start: () => (variante === 'rolagem' ? '86% bottom' : '65% bottom'), end: 'bottom bottom', scrub: true },
});
gsap.timeline({ scrollTrigger: { trigger: '#ruido', start: 'top 70%', end: 'bottom bottom', scrub: true } })
  .from('#ruido .bloco-texto > *', { y: 40, opacity: 0, filter: 'blur(8px)', stagger: 0.1, duration: 0.3 })
  .to('#ruido .hud-flutuante li', { opacity: 1, stagger: 0.08, duration: 0.2 }, 0.1)
  .to({}, { duration: 0.6 });   // o texto de B fica visível enquanto a Hanna se forma
// ...e some (desfocando) junto com ela enquanto a seção C sobe.
gsap.to('#ruido .bloco-texto, #ruido .hud-flutuante', {
  opacity: 0, y: -60, filter: 'blur(10px)', ease: 'none', immediateRender: false,
  scrollTrigger: { trigger: '#ruido', start: () => `bottom-=${window.innerHeight * 0.4} bottom`, end: () => `bottom-=${window.innerHeight * 0.2} bottom`, scrub: true },
});

// ---------- C: vitrine, troca de idioma ----------
const legenda = document.querySelector('.vitrine-legenda');
const quadro = document.querySelector('.vitrine-quadro');
const chips = [...document.querySelectorAll('.chips-idioma li')];
let falaAtual = -1;
function mostrarFala(i) {
  if (i === falaAtual) return;
  falaAtual = i;
  chips.forEach((c) => c.classList.toggle('ativo', +c.dataset.idx === Math.min(i, 4)));
  gsap.to(legenda, { duration: 0.8, scrambleText: { text: FALAS[i], chars: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789', speed: 0.6 } });
  quadro.classList.remove('glitch');
  void quadro.offsetWidth;
  if (i >= 4) quadro.classList.add('glitch');
}
gsap.timeline({ scrollTrigger: { trigger: '#idiomas', start: 'top top', end: 'bottom bottom', scrub: 1,
  onUpdate: (self) => mostrarFala(Math.min(FALAS.length - 1, Math.floor(self.progress * FALAS.length * 0.999))) } })
  .fromTo('.vitrine-midia', { scale: 1 }, { scale: 1.12, ease: 'none', duration: 1 });
// C sobrepõe o fim de B (margin-top: -100vh no CSS). Enquanto sobe, o palco de C é segurado no topo da tela,
// então C surge no lugar enquanto a Hanna vira poeira — troca cruzada, sem tela vazia.
gsap.fromTo('#idiomas .palco', { y: () => -window.innerHeight }, {
  y: 0, ease: 'none', immediateRender: true,
  scrollTrigger: { trigger: '#idiomas', start: 'top bottom', end: 'top top', scrub: true, invalidateOnRefresh: true },
});
gsap.fromTo('.vitrine', { opacity: 0, scale: 0.85, filter: 'blur(12px)' }, {
  opacity: 1, scale: 1, filter: 'blur(0px)', ease: 'none',
  scrollTrigger: { trigger: '#idiomas', start: 'top 40%', end: 'top top', scrub: true },
});
gsap.fromTo('#idiomas .bloco-texto > *', { y: 30, opacity: 0, filter: 'blur(8px)' }, {
  y: 0, opacity: 1, filter: 'blur(0px)', stagger: 0.1, ease: 'none',
  scrollTrigger: { trigger: '#idiomas', start: 'top 20%', end: 'top top', scrub: true },
});

const botaoSom = document.querySelector('.botao-som');
function atualizarBotaoSom() {
  botaoSom.textContent = t('c.som');
  botaoSom.hidden = !document.querySelector('.vitrine-midia[src$=".mp4"]');   // só aparece quando o vídeo final existir
}

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
// As 321 miniaturas só baixam quando o túnel está a ~2 telas de distância (não pesam no início).
new IntersectionObserver((entradas, obs) => {
  if (!entradas.some((e) => e.isIntersecting)) return;
  for (const tl of tiles) tl.el.src = tl.el.dataset.src;
  obs.disconnect();
}, { rootMargin: '200% 0px' }).observe(document.getElementById('numeros'));
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

// HUD de baixo só vale para as partículas; some a partir da seção C.
ScrollTrigger.create({
  trigger: '#idiomas', start: 'top 80%',
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
mostrarFala(0);
// Partículas primeiro; o feed (vídeos) só é montado quando o navegador estiver ocioso.
montarParticulas().finally(() => {
  document.getElementById('particulas').classList.add('pronto');
  requestAnimationFrame(() => requestAnimationFrame(mostrarTitulo));
  (window.requestIdleCallback || ((f) => setTimeout(f, 300)))(() => montarFeed('todos'));
});
