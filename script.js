// ======================== Hearts Animation ===========================
function createHeart() {
  const heart = document.createElement("div");
  heart.className = "heart";

  const size = Math.random() * 40 + 20;
  heart.style.width = size + "px";
  heart.style.height = size + "px";
  heart.style.left = Math.random() * window.innerWidth + "px";
  heart.style.animationDuration = (Math.random() * 3 + 3) + "s";

  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 6000);
}

setInterval(createHeart, 200);

// ======================== Typewriter ===========================
const text = `Hi Nana!, Semangat menjalani harinya ya!
Kalau kamu ngerasa hari-harimu berat silahkan bersandar kepadaku.
Akan kupinjamkan bahuku untukmu bersandar.
Jangan sungkan untuk cerita ya Nana!

Aku selalu di sini mendengarkan
dan menanti cerita darimu.

- Best Regard A-kun.`;

const speed = 50;
let index = 0;

function typeWriter() {
  const type = document.getElementById("typewriter");
  if (index < text.length) {
    if (text[index] === "\n") {
      type.innerHTML += "<br>";
    } else {
      type.innerHTML += text[index];
    }
    index++;
    setTimeout(typeWriter, speed);
  }
}

typeWriter();

// ======================== Fade-in Animation ===========================
function fadeIn(element) {
  element.classList.remove("show");
  void element.offsetWidth;
  element.classList.add("show");
}

// ======================== BGM ===========================
const audio = document.getElementById("bgm");
audio.volume = 0.1;

// ======================== DISC ELEMENT ===========================
const disc = document.querySelector(".disc");
const discImage = document.getElementById("disc-image");

// ======================== SONG INFO ELEMENT ===========================
const titleText = document.getElementById("title");
const artistText = document.getElementById("artist");

// ======================== PLAYLIST ===========================
const playlist = [
  {
    title: "Violet",
    artist: "Ninomae Inanis",
    src: "bgm/bgm1.mp3",
    image: "disc/disc1.png"
  },
  {
    title: "Unravel",
    artist: "Single by TK from Ling tosite sigure",
    src: "bgm/bgm2.mp3",
    image: "disc/disc2.webp"
  },
  {
    title: "Silhouette",
    artist: "KANA-BOON",
    src: "bgm/bgm3.mp3",
    image: "disc/disc3.webp"
  }
];

let currentSong = 0;

// ======================== LOAD SONG ===========================
function loadSong(index) {
  const song = playlist[index];

  audio.src = song.src;
  audio.play().catch(() => {});

  titleText.textContent = song.title;
  artistText.textContent = song.artist;
  discImage.src = song.image;

  fadeIn(titleText);
  fadeIn(artistText);
  fadeIn(discImage);

// Update icon saat lagu berubah (lagu selalu auto-play)
playPauseBtn.textContent = "⏸️"; 
isPlaying = true;
}

// ======================== NEXT & PREV ===========================
document.getElementById("nextBtn").addEventListener("click", () => {
  currentSong++;
  if (currentSong >= playlist.length) currentSong = 0;
  loadSong(currentSong);
});

document.getElementById("prevBtn").addEventListener("click", () => {
  currentSong--;
  if (currentSong < 0) currentSong = playlist.length - 1;
  loadSong(currentSong);
});

// ======================== PLAY & PAUSE ===========================
const playPauseBtn = document.getElementById("playPauseBtn");
let isPlaying = false;

playPauseBtn.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    playPauseBtn.textContent = "⏸️";
    disc.classList.remove("paused");
    isPlaying = true;
  } else {
    audio.pause();
    playPauseBtn.textContent = "▶️";
    disc.classList.add("paused");
    isPlaying = false;
  }
});


// ======================== DISC SPIN CONTROL ===========================
audio.addEventListener("play", () => {
  disc.classList.remove("paused");
});

audio.addEventListener("pause", () => {
  disc.classList.add("paused");
});

// ======================== AUTOPLAY AFTER USER INTERACTION ===========================
function enableMusic() {
  audio.play().catch(() => {});
  disc.classList.remove("paused");

  document.removeEventListener("click", enableMusic);
  document.removeEventListener("touchstart", enableMusic);
  document.removeEventListener("keydown", enableMusic);
}

document.addEventListener("click", enableMusic);
document.addEventListener("touchstart", enableMusic);
document.addEventListener("keydown", enableMusic);

// ======================== INITIAL LOAD ===========================
loadSong(currentSong);
