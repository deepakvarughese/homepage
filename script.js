// --- 1. TYPEWRITER LOGIC ---
const text = "welcome";
const typeSpeed = 750;
let i = 0;

function typeWriter() {
  const displayElement = document.getElementById("typewriter");
  if (i < text.length) {
    displayElement.innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, typeSpeed);
  }
}

// --- 4. INITIALIZE ON LOAD ---
window.onload = () => {
  typeWriter();
};

document.addEventListener("DOMContentLoaded", () => {
  const track = document.querySelector(".carousel-track");
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");

  if (track && prevBtn && nextBtn) {
    nextBtn.addEventListener("click", () => {
      const slideWidth = track.clientWidth;
      track.scrollBy({ left: slideWidth, behavior: "smooth" });
    });

    prevBtn.addEventListener("click", () => {
      const slideWidth = track.clientWidth;
      track.scrollBy({ left: -slideWidth, behavior: "smooth" });
    });
  }
});
