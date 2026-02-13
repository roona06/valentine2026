const start = document.getElementById("start");
const error = document.getElementById("error");
const choice = document.getElementById("choice");
const final = document.getElementById("final");

// NO → error screen
document.getElementById("no").addEventListener("click", () => {
  start.classList.add("hidden");
  error.classList.remove("hidden");

  setTimeout(() => {
    error.classList.add("hidden");
    start.classList.remove("hidden");
  }, 2500);
});

// YES → choice screen
document.getElementById("yes").addEventListener("click", () => {
  start.classList.add("hidden");
  choice.classList.remove("hidden");
});

// CHOICE → final screen
document.querySelectorAll(".choice-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    choice.classList.add("hidden");
    final.classList.remove("hidden");
    startHearts();
    typeWriter();
  });
});

// FLOATING EMOJIS
function startHearts() {
  const emojis = ["🌸", "🪷", "🐻"];

  setInterval(() => {
    const floaty = document.createElement("div");
    floaty.className = "heart";
    floaty.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    floaty.style.left = Math.random() * 100 + "vw";
    document.body.appendChild(floaty);

    setTimeout(() => floaty.remove(), 4000);
  }, 350);
}

// TYPEWRITER EFFECT
function typeWriter() {
  const el = document.getElementById("typeText");
  const text = el.innerText;
  el.innerText = "";
  let i = 0;

  const interval = setInterval(() => {
    el.innerText += text[i];
    i++;
    if (i >= text.length) clearInterval(interval);
  }, 35);
}

