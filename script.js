// Typing effect
const text = "Web Developer & WordPress Specialist";
const target = document.querySelector(".typing-text");
let i = 0;

function typeText() {
  if (i < text.length) {
    target.textContent += text.charAt(i);
    i++;
    setTimeout(typeText, 80);
  }
}

window.addEventListener("load", () => {
  target.textContent = "";
  typeText();
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    document.querySelector(link.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});
