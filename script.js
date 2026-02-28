// --- 1. TYPEWRITER LOGIC ---
const text = "welcome";
const typeSpeed = 150;
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
