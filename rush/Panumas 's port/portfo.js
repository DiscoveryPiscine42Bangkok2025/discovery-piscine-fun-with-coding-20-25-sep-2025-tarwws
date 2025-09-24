const burger = document.getElementById('burger');
const menu = document.getElementById('menu');

burger.addEventListener('click', () => {
    menu.classList.toggle('open');
    if (menu.classList.contains('open')) {
        burger.innerHTML = '✕';
        burger.style.color = '#000000ff';
    } else {
        burger.innerHTML = '☰';
        burger.style.color = '#000000ff';
    }
});

const menuLinks = document.querySelectorAll('.menu a');
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('open');
        burger.innerHTML = '☰';
        burger.style.color = '#000000ff';
    });
});

document.addEventListener('click', (e) => {
    if (!burger.contains(e.target) && !menu.contains(e.target)) {
        menu.classList.remove('open');
        burger.innerHTML = '☰';
        burger.style.color = '#000000ff';
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const audio = document.getElementById("bg-music");

    audio.muted = true;
    audio.play().then(() => {
        setTimeout(() => {
            audio.muted = false;
        }, 1000);
    }).catch(() => {
        console.log("Autoplay blocked, waiting for user interaction");
    });

    document.body.addEventListener("click", () => {
        if (audio.paused) {
            audio.play();
        }
        audio.muted = false;
    }, { once: true });
});

document.addEventListener("DOMContentLoaded", () => {
  const audio = document.getElementById("bg-music");
  const toggleBtn = document.getElementById("music-toggle");

  audio.muted = true;
  audio.play().catch(() => {
    console.log("Autoplay blocked until user interacts");
  });

  let isPlaying = true;
  toggleBtn.addEventListener("click", () => {
    if (isPlaying) {
      audio.pause();
      toggleBtn.innerHTML = '<i class="fas fa-music"></i> Music Off';
    } else {
      audio.play();
      toggleBtn.innerHTML = '<i class="fas fa-music"></i> Music On';
    }
    isPlaying = !isPlaying;
  });

  document.body.addEventListener("click", () => {
    audio.muted = false;
  }, { once: true });
});
