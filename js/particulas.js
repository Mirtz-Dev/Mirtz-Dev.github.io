// Campo de partículas: ruído → rosto A → ruído → rosto B → poeira de fundo.
// O progresso (uT, de 0 a 4) é controlado pela rolagem em main.js.
import * as THREE from 'three';

const VERT = /* glsl */ `
  attribute vec3 aRuido;
  attribute vec3 aA;
  attribute vec3 aB;
  attribute float aLumA;
  attribute float aLumB;
  attribute float aRand;
  uniform float uT;
  uniform float uTempo;
  uniform float uBase;
  uniform vec2 uMouse;     // cursor no espaço do rosto
  uniform float uForca;    // 0 = sem interação; 1 = interação cheia (só na seção A)
  varying float vLum;
  varying float vRand;

  float passo(float t) { return smoothstep(0.0, 1.0, clamp(t * 1.25 - aRand * 0.25, 0.0, 1.0)); }

  void main() {
    vec3 p; float lum;
    if (uT < 1.0)      { float e = passo(uT);       p = mix(aRuido, aA, e);              lum = mix(0.18, aLumA, e); }
    else if (uT < 2.0) { float e = passo(uT - 1.0); p = mix(aA, aRuido * 1.2, e);        lum = mix(aLumA, 0.18, e); }
    else if (uT < 3.0) { float e = passo(uT - 2.0); p = mix(aRuido * 1.2, aB, e);        lum = mix(0.18, aLumB, e); }
    else               { float e = passo(uT - 3.0); p = mix(aB, aRuido * 2.4, e);        lum = mix(aLumB, 0.12, e); }
    p += 0.015 * vec3(sin(uTempo * 0.7 + aRand * 40.0), cos(uTempo * 0.6 + aRand * 31.0), sin(uTempo * 0.5 + aRand * 17.0));
    // O cursor abre um "buraco" macio: empurra para fora com um leve redemoinho e levanta em z.
    vec2 dm = p.xy - uMouse;
    float dist = length(dm);
    float f = uForca * smoothstep(0.55, 0.0, dist);
    vec2 dir = dm / max(dist, 1e-4);
    p.xy += (dir * 0.30 + vec2(-dir.y, dir.x) * 0.08) * f * (0.6 + 0.8 * aRand);
    p.z += f * 0.35;
    vec4 mv = modelViewMatrix * vec4(p, 1.0);
    gl_Position = projectionMatrix * mv;
    gl_PointSize = uBase * (0.3 + 0.95 * lum) * (5.0 / -mv.z);
    vLum = lum;
    vRand = aRand;
  }
`;

const FRAG = /* glsl */ `
  uniform float uOpacidade;
  uniform float uEsconde;
  varying float vLum;
  varying float vRand;
  void main() {
    float d = length(gl_PointCoord - 0.5);
    if (d > 0.5) discard;
    float suave = smoothstep(0.5, 0.0, d);
    vec3 cor = mix(vec3(0.03, 0.32, 0.38), vec3(0.86, 1.0, 1.0), vLum);
    if (vRand > 0.985) cor = mix(vec3(1.0, 0.17, 0.84), vec3(1.0), vLum * 0.4);
    // uEsconde apaga o rosto de pontos quando a foto real está por cima (sobra um halo leve).
    gl_FragColor = vec4(cor, suave * (0.22 + 0.78 * vLum) * uOpacidade * (1.0 - 0.88 * uEsconde));
  }
`;

// Amostra a imagem numa grade N×N dentro de uma elipse e devolve luminância por ponto.
function amostrar(img, N) {
  const c = document.createElement('canvas');
  c.width = c.height = N;
  const ctx = c.getContext('2d', { willReadFrequently: true });
  const lado = Math.min(img.naturalWidth, img.naturalHeight);
  ctx.drawImage(img, (img.naturalWidth - lado) / 2, (img.naturalHeight - lado) / 2, lado, lado, 0, 0, N, N);
  const px = ctx.getImageData(0, 0, N, N).data;
  // Cor de fundo = média dos cantos; o que difere dela é a pessoa (cabelo e barba escuros incluídos).
  const cantos = [0, N - 1, N * (N - 1), N * N - 1].map((p) => p * 4);
  const fundo = [0, 1, 2].map((c) => cantos.reduce((s, p) => s + px[p + c], 0) / 4);
  const lum = new Float32Array(N * N);
  for (let j = 0; j < N; j++) {
    for (let i = 0; i < N; i++) {
      const k = (j * N + i) * 4;
      const l = (0.299 * px[k] + 0.587 * px[k + 1] + 0.114 * px[k + 2]) / 255;
      const dif = Math.hypot(px[k] - fundo[0], px[k + 1] - fundo[1], px[k + 2] - fundo[2]) / 255;
      const pessoa = Math.min(1, Math.max(0, (dif - 0.06) / 0.1));
      const dx = (i / N - 0.5) / 0.46, dy = (j / N - 0.5) / 0.5;
      const mascara = 1 - Math.min(1, Math.max(0, (Math.hypot(dx, dy) - 0.8) / 0.2));
      lum[j * N + i] = Math.max(l, pessoa * 0.3) * mascara;
    }
  }
  // Estica o contraste pelo percentil 98, para rostos escuros não virarem "máscara".
  const ordenado = Float32Array.from(lum).sort();
  const topo = ordenado[Math.floor(ordenado.length * 0.98)] || 1;
  for (let k = 0; k < lum.length; k++) lum[k] = Math.pow(Math.min(1, lum[k] / topo), 0.85);
  return lum;
}

function carregar(src) {
  return new Promise((ok, erro) => {
    const img = new Image();
    img.onload = () => ok(img);
    img.onerror = erro;
    img.src = src;
  });
}

export async function iniciarParticulas(canvas, fontes) {
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: false, alpha: true, powerPreference: 'high-performance' });
  const pr = Math.min(window.devicePixelRatio, 2);
  renderer.setPixelRatio(pr);

  const celular = window.matchMedia('(max-width: 860px)').matches;
  const N = celular ? 110 : 170;
  const LADO = 2.5;

  const [imgA, imgB] = await Promise.all(fontes.map(carregar));
  const lumA = amostrar(imgA, N), lumB = amostrar(imgB, N);

  const total = N * N;
  const aA = new Float32Array(total * 3), aB = new Float32Array(total * 3), aRuido = new Float32Array(total * 3);
  const aRand = new Float32Array(total);
  for (let j = 0, k = 0; j < N; j++) {
    for (let i = 0; i < N; i++, k++) {
      const x = (i / (N - 1) - 0.5) * LADO, y = -(j / (N - 1) - 0.5) * LADO;
      aA.set([x, y, lumA[k] * 0.18], k * 3);
      aB.set([x, y, lumB[k] * 0.18], k * 3);
      const r = 1.6 + Math.random() * 2.2, t = Math.random() * Math.PI * 2, f = Math.acos(2 * Math.random() - 1);
      aRuido.set([r * Math.sin(f) * Math.cos(t), r * Math.sin(f) * Math.sin(t) * 0.7, r * Math.cos(f) * 0.6], k * 3);
      aRand[k] = Math.random();
    }
  }

  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(aA, 3));
  geo.setAttribute('aA', new THREE.BufferAttribute(aA, 3));
  geo.setAttribute('aB', new THREE.BufferAttribute(aB, 3));
  geo.setAttribute('aRuido', new THREE.BufferAttribute(aRuido, 3));
  geo.setAttribute('aLumA', new THREE.BufferAttribute(lumA, 1));
  geo.setAttribute('aLumB', new THREE.BufferAttribute(lumB, 1));
  geo.setAttribute('aRand', new THREE.BufferAttribute(aRand, 1));

  const uniforms = { uT: { value: 0 }, uTempo: { value: 0 }, uBase: { value: 4 }, uOpacidade: { value: 1 }, uEsconde: { value: 0 },
    uMouse: { value: new THREE.Vector2(99, 99) }, uForca: { value: 0 } };
  const mat = new THREE.ShaderMaterial({
    vertexShader: VERT, fragmentShader: FRAG, uniforms,
    transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
  });
  const pontos = new THREE.Points(geo, mat);
  pontos.frustumCulled = false;

  const cena = new THREE.Scene();
  const grupo = new THREE.Group();
  grupo.add(pontos);
  cena.add(grupo);
  const camera = new THREE.PerspectiveCamera(35, 1, 0.1, 100);
  camera.position.z = 5;

  const alturaVisivel = 2 * 5 * Math.tan(THREE.MathUtils.degToRad(17.5));
  let deslocX = 0, escala = 1;

  function redimensionar() {
    const w = window.innerWidth, h = window.innerHeight;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    const larguraVisivel = alturaVisivel * camera.aspect;
    const celularAgora = w <= 860;
    escala = celularAgora ? Math.min(1, (larguraVisivel * 0.95) / LADO) : Math.min(1.15, (alturaVisivel * 0.9) / LADO);
    // Mais perto do centro, mas sem invadir o texto da esquerda (~620px a partir da borda).
    const unidadesPorPx = larguraVisivel / w;
    const minimo = (620 - w / 2) * unidadesPorPx + (LADO * escala) / 2;
    deslocX = celularAgora ? 0 : Math.max(larguraVisivel * 0.12, minimo);
    grupo.scale.setScalar(escala);
    // Tamanho do ponto ≈ espaçamento da grade em pixels, para o rosto "fechar".
    uniforms.uBase.value = (LADO / N) * escala * (h / alturaVisivel) * pr * 1.25;
  }
  redimensionar();
  window.addEventListener('resize', redimensionar);

  const mouse = { x: 0, y: 0, dentro: false };
  window.addEventListener('pointermove', (e) => {
    mouse.x = e.clientX / window.innerWidth - 0.5;
    mouse.y = e.clientY / window.innerHeight - 0.5;
    mouse.dentro = e.pointerType === 'mouse';
  });
  document.addEventListener('pointerleave', () => { mouse.dentro = false; });
  const mouseLocal = new THREE.Vector2(99, 99);
  let forca = 0;

  const relogio = new THREE.Timer();
  let deslocAlvo = 1, deslocAtual = 1, subida = 0;
  let alvoT = 0, alvoOpacidade = 1;
  renderer.setAnimationLoop((agora) => {
    relogio.update(agora);
    uniforms.uTempo.value = relogio.getElapsed();
    // Suavização pelo tempo real (não por quadro): chega ao alvo igual em 30 ou 144 fps.
    const k = 1 - Math.exp(-Math.min(relogio.getDelta(), 0.5) * 4.5);
    uniforms.uT.value += (alvoT - uniforms.uT.value) * k;
    uniforms.uOpacidade.value += (alvoOpacidade - uniforms.uOpacidade.value) * k;
    deslocAtual += (deslocAlvo - deslocAtual) * 0.08;
    grupo.position.x = deslocX * deslocAtual;
    grupo.position.y = subida;
    // Rotação bem sutil (antes girava o rosto inteiro atrás do mouse).
    grupo.rotation.y += (mouse.x * 0.08 - grupo.rotation.y) * k;
    grupo.rotation.x += (mouse.y * 0.05 - grupo.rotation.x) * k;
    // Cursor -> coordenadas do rosto (plano z=0), com atraso macio para o "buraco" deslizar.
    const larguraVisivel = alturaVisivel * camera.aspect;
    const alvoX = (mouse.x * larguraVisivel - grupo.position.x) / escala;
    const alvoY = (-mouse.y * alturaVisivel - grupo.position.y) / escala;
    const km = 1 - Math.exp(-Math.min(relogio.getDelta() || 0.016, 0.5) * 9);
    mouseLocal.x += (alvoX - mouseLocal.x) * km;
    mouseLocal.y += (alvoY - mouseLocal.y) * km;
    uniforms.uMouse.value.copy(mouseLocal);
    // Interação só na seção A (rosto do Shiro se formando / formado), some suavemente depois.
    const alvoForca = mouse.dentro ? Math.max(0, 1 - Math.max(0, uniforms.uT.value - 1) * 5) : 0;
    forca += (alvoForca - forca) * k;
    uniforms.uForca.value = forca;
    renderer.render(cena, camera);
  });

  return {
    set alvoT(v) { alvoT = v; },
    get t() { return uniforms.uT.value; },
    set alvoOpacidade(v) { alvoOpacidade = v; },
    get opacidade() { return uniforms.uOpacidade.value; },
    set esconde(v) { uniforms.uEsconde.value = v; },
    set lado(v) { deslocAlvo = v; },   // 1 = à direita (desktop), 0 = centro
    set subida(v) { subida = v; },
    // Onde o rosto está na tela (px CSS), para alinhar a foto real por cima das partículas.
    rostoNaTela() {
      const h = window.innerHeight, w = window.innerWidth;
      const pxPorUnidade = h / alturaVisivel;
      return { cx: w / 2 + deslocX * pxPorUnidade, cy: h / 2, lado: LADO * escala * pxPorUnidade };
    },
  };
}
