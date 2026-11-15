/* ==========================================================================
   HAPPY BIRTHDAY SCRIPT - INTERACTIVE EXPERIENCE
   ========================================================================== */

// --- 1. DỄ DÀNG TÙY BIẾN THÔNG TIN TẠI ĐÂY ---
const CONFIG = {
  name: "Ju Jing Yi",
  date: { day: "18", month: "6" },
  letter: "Nhân ngày đặc biệt này, chúc bạn luôn có thật nhiều sức khỏe để theo đuổi những ước mơ của mình. Thật nhiều niềm vui để mỗi ngày trôi qua đều là một ngày đáng nhớ, và thật nhiều may mắn để mọi điều đều thuận lợi. Mong rằng tuổi mới sẽ mang đến cho bạn những cơ hội mới, những trải nghiệm đáng giá và những khoảnh khắc hạnh phúc bên gia đình, bạn bè và những người yêu thương. Tuổi mới thật rực rỡ và luôn luôn mỉm cười nhé! ✨🎂",
  photos: [
    "./style/img/Anh (1).jpg",
    "./style/img/Anh (2).jpg",
    "./style/img/Anh (3).jpg",
    "./style/img/Anh (4).jpg",
    "./style/img/Anh (5).jpg",
    "./style/img/Anh (6).jpg",
    "./style/img/Anh (7).jpg",
    "./style/img/Anh (8).jpg",
    "./style/img/Anh (9).jpg",
    "./style/img/Anh (10).jpg"
  ]
};

// --- DOM ELEMENTS ---
const introScreen = document.getElementById('intro-screen');
const mainScreen = document.getElementById('main-screen');
const letterModal = document.getElementById('letter-modal');
const giftBox = document.getElementById('gift-box');
const btnOpenLetter = document.getElementById('btn-open-letter');
const btnCloseLetter = document.getElementById('btn-close-letter');
const btnStartMemories = document.getElementById('btn-start-memories');
const typewriterElem = document.getElementById('typewriter-text');
const avatarImg = document.getElementById('avatar-img');
const personName = document.getElementById('person-name');
const dayElem = document.querySelector('.date-badge .day');
const monthElem = document.querySelector('.date-badge .month');
const polaroidContainer = document.getElementById('polaroid-container');
const petalsContainer = document.getElementById('petals-container');
const musicToggle = document.getElementById('music-toggle');

// Audio
const bgMusic = document.getElementById('bg-music');
const soundPop = document.getElementById('sound-pop');
const soundFirework = document.getElementById('sound-firework');

let isMusicPlaying = false;
let fireworksAnimationId = null;
let polaroidInterval = null;
let typewriterTimeout = null;
let currentPhotoIndex = 0;

// ==================== INIT CONFIG ====================
function initConfig() {
  if (personName) personName.textContent = CONFIG.name;
  if (dayElem) dayElem.textContent = CONFIG.date.day;
  if (monthElem) monthElem.textContent = CONFIG.date.month;
  if (avatarImg && CONFIG.photos.length > 0) {
    avatarImg.src = CONFIG.photos[0];
  }
}
initConfig();

// ==================== PETALS GENERATOR ====================
function createPetals() {
  const count = 25;
  for (let i = 0; i < count; i++) {
    const petal = document.createElement('div');
    petal.classList.add('petal');
    const size = Math.random() * 12 + 10;
    petal.style.width = size + 'px';
    petal.style.height = (size * 1.4) + 'px';
    petal.style.left = Math.random() * 100 + 'vw';
    petal.style.animationDuration = (Math.random() * 6 + 6) + 's';
    petal.style.animationDelay = (Math.random() * 8) + 's';
    petalsContainer.appendChild(petal);
  }
}
createPetals();

// ==================== MUSIC CONTROLLER ====================
function toggleMusic() {
  if (bgMusic.paused) {
    bgMusic.play().then(() => {
      isMusicPlaying = true;
      musicToggle.classList.add('playing');
      musicToggle.innerHTML = '<i class="fa-solid fa-compact-disc"></i>';
    }).catch(e => console.log('Audio autoplay blocked:', e));
  } else {
    bgMusic.pause();
    isMusicPlaying = false;
    musicToggle.classList.remove('playing');
    musicToggle.innerHTML = '<i class="fa-solid fa-music"></i>';
  }
}
musicToggle.addEventListener('click', toggleMusic);

// ==================== AVATAR SLIDESHOW ====================
setInterval(() => {
  if (CONFIG.photos.length <= 1) return;
  currentPhotoIndex = (currentPhotoIndex + 1) % CONFIG.photos.length;
  avatarImg.style.opacity = '0';
  setTimeout(() => {
    avatarImg.src = CONFIG.photos[currentPhotoIndex];
    avatarImg.style.opacity = '1';
  }, 400);
}, 3500);

// ==================== SCREEN 1 -> SCREEN 2 (GIFT BOX CLICK) ====================
giftBox.addEventListener('click', () => {
  soundPop.currentTime = 0;
  soundPop.play().catch(() => {});

  // Play BGM
  bgMusic.play().then(() => {
    isMusicPlaying = true;
    musicToggle.classList.add('playing');
    musicToggle.innerHTML = '<i class="fa-solid fa-compact-disc"></i>';
  }).catch(() => {});

  // Fade out intro
  introScreen.classList.add('fade-out');
  setTimeout(() => {
    introScreen.classList.add('hide');
    mainScreen.classList.remove('hide');
  }, 700);
});

// ==================== SCREEN 2 -> SCREEN 3 (OPEN LETTER) ====================
btnOpenLetter.addEventListener('click', () => {
  soundPop.currentTime = 0;
  soundPop.play().catch(() => {});

  letterModal.classList.remove('hide');
  startFireworks();
  startTypewriter(CONFIG.letter);
});

// Close Letter Modal
btnCloseLetter.addEventListener('click', () => {
  letterModal.classList.add('hide');
  stopFireworks();
  stopPolaroids();
  clearTimeout(typewriterTimeout);
});

// ==================== TYPEWRITER EFFECT ====================
function startTypewriter(text) {
  typewriterElem.textContent = '';
  typewriterElem.parentElement.classList.remove('done');
  let i = 0;

  function typeChar() {
    if (i < text.length) {
      typewriterElem.textContent += text.charAt(i);
      i++;
      typewriterTimeout = setTimeout(typeChar, 45);
    } else {
      typewriterElem.parentElement.classList.add('done');
    }
  }
  typeChar();
}

// ==================== SCREEN 4: FLOATING POLAROIDS ====================
btnStartMemories.addEventListener('click', () => {
  soundPop.currentTime = 0;
  soundPop.play().catch(() => {});
  startPolaroids();
});

function startPolaroids() {
  if (polaroidInterval) return;
  for (let i = 0; i < 3; i++) {
    setTimeout(spawnSinglePolaroid, i * 700);
  }
  polaroidInterval = setInterval(spawnSinglePolaroid, 1400);
}

function stopPolaroids() {
  clearInterval(polaroidInterval);
  polaroidInterval = null;
  polaroidContainer.innerHTML = '';
}

function spawnSinglePolaroid() {
  if (CONFIG.photos.length === 0) return;
  const card = document.createElement('div');
  card.classList.add('polaroid-card');

  const photo = CONFIG.photos[Math.floor(Math.random() * CONFIG.photos.length)];
  const randomRot = (Math.random() * 30 - 15).toFixed(1) + 'deg';
  const randomDrift = (Math.random() * 80 - 40).toFixed(0) + 'px';
  const randomDuration = (Math.random() * 6 + 10).toFixed(1) + 's';
  const randomLeft = (Math.random() * 75 + 5).toFixed(1) + '%';

  card.style.left = randomLeft;
  card.style.setProperty('--rot', randomRot);
  card.style.setProperty('--drift', randomDrift);
  card.style.animationDuration = randomDuration;

  card.innerHTML = '<img src="' + photo + '" alt="Kỷ niệm"><div class="polaroid-caption">Memories ✨</div>';

  polaroidContainer.appendChild(card);

  setTimeout(() => {
    if (card && card.parentElement) {
      card.remove();
    }
  }, parseFloat(randomDuration) * 1000 + 500);
}

// ==================== FIREWORKS SYSTEM ====================
const canvas = document.getElementById('fireworks-canvas');
const ctx = canvas.getContext('2d');

let particles = [];
let rockets = [];

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

class Rocket {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = canvas.height;
    this.targetY = Math.random() * (canvas.height * 0.5) + canvas.height * 0.1;
    this.speed = Math.random() * 3 + 5;
    this.color = 'hsl(' + (Math.random() * 360) + ', 100%, 65%)';
    this.trail = [];
  }

  update() {
    this.trail.push({ x: this.x, y: this.y });
    if (this.trail.length > 5) this.trail.shift();
    this.y -= this.speed;
    return this.y <= this.targetY;
  }

  draw() {
    ctx.save();
    ctx.strokeStyle = this.color;
    ctx.lineWidth = 2.5;
    ctx.beginPath();
    for (let i = 0; i < this.trail.length; i++) {
      ctx.lineTo(this.trail[i].x, this.trail[i].y);
    }
    ctx.stroke();
    ctx.restore();
  }

  explode() {
    const count = 45;
    for (let i = 0; i < count; i++) {
      particles.push(new Particle(this.x, this.y, this.color));
    }
    soundFirework.currentTime = 0;
    soundFirework.play().catch(() => {});
  }
}

class Particle {
  constructor(x, y, color) {
    this.x = x;
    this.y = y;
    this.color = color;
    const angle = Math.random() * Math.PI * 2;
    const speed = Math.random() * 4.5 + 1.5;
    this.vx = Math.cos(angle) * speed;
    this.vy = Math.sin(angle) * speed;
    this.alpha = 1;
    this.decay = Math.random() * 0.018 + 0.012;
    this.gravity = 0.07;
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;
    this.vy += this.gravity;
    this.alpha -= this.decay;
    return this.alpha <= 0;
  }

  draw() {
    ctx.save();
    ctx.globalAlpha = Math.max(this.alpha, 0);
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, 2.5, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }
}

let rocketTimer = 0;

function animateFireworks() {
  ctx.fillStyle = 'rgba(6, 6, 17, 0.25)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  rocketTimer++;
  if (rocketTimer % 28 === 0) {
    rockets.push(new Rocket());
  }

  for (let i = rockets.length - 1; i >= 0; i--) {
    const r = rockets[i];
    if (r.update()) {
      r.explode();
      rockets.splice(i, 1);
    } else {
      r.draw();
    }
  }

  for (let i = particles.length - 1; i >= 0; i--) {
    const p = particles[i];
    if (p.update()) {
      particles.splice(i, 1);
    } else {
      p.draw();
    }
  }

  fireworksAnimationId = requestAnimationFrame(animateFireworks);
}

function startFireworks() {
  if (!fireworksAnimationId) {
    resizeCanvas();
    animateFireworks();
  }
}

function stopFireworks() {
  if (fireworksAnimationId) {
    cancelAnimationFrame(fireworksAnimationId);
    fireworksAnimationId = null;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    rockets = [];
    particles = [];
  }
}