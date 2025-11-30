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
const text = `Hi Nana!

Semangat menjalani harinya ya!
Kalau kamu ngerasa hari-harimu berat silahkan bersandar kepadaku.
Akan kupinjamkan bahuku untukmu bersandar.
Jangan sungkan untuk cerita ya Nana!

Aku selalu di sini mendengarkan
dan menanti cerita darimu.

- Best Regard A-kun.`;

const speed = 50;
let index = 0;

function typeWriter() {
  if (index < text.length) {
    const type = document.getElementById("typewriter");
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

// ======================== BGM ===========================
const bgm = document.getElementById("bgm");
const musicBtn = document.getElementById("musicBtn");

let isPlaying = false;

// mencegah autoplay error
bgm.volume = 0.8;

musicBtn.addEventListener("click", () => {
  if (!isPlaying) {
    bgm.play();
    isPlaying = true;
    musicBtn.textContent = "❚❚ Pause Music";
  } else {
    bgm.pause();
    isPlaying = false;
    musicBtn.textContent = "▶ Play Music";
  }
});

// ======================== Disk Animation ===========================
document.getElementById("title").textContent = "Violet";
document.getElementById("artist").textContent = "ninomae inanis";


document.querySelector(".disc img").src = "disc.png";
