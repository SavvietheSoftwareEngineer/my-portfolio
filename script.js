// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if(target){
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Fade-in on scroll
const faders = document.querySelectorAll('.portfolio-item, #portfolio h2, #contact h2');
const appearOptions = { threshold: 0.2, rootMargin: "0px 0px -50px 0px" };
const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll){
  entries.forEach(entry => {
    if(!entry.isIntersecting) return;
    entry.target.classList.add('appear');
    appearOnScroll.unobserve(entry.target);
  });
}, appearOptions);
faders.forEach(fader => appearOnScroll.observe(fader));

// Hero typing effect
const heroText = "Web Developer & WordPress Specialist";
const heroElement = document.querySelector('.typing-text');
let index = 0;
function typeHeroText() {
  if(index < heroText.length){
    heroElement.textContent += heroText.charAt(index);
    index++;
    setTimeout(typeHeroText, 80);
  }
}
window.addEventListener('load', () => {
  heroElement.textContent = "";
  typeHeroText();
});

// Floating Contact Button
const contactBtn = document.createElement('a');
contactBtn.href = "#contact";
contactBtn.textContent = "Contact Me";
contactBtn.className = "floating-btn";
document.body.appendChild(contactBtn);

/* Add CSS in style.css:
.floating-btn {
  position: fixed;
  right: 20px;
  bottom: 20px;
  background: linear-gradient(90deg,#0a74da,#6c63ff);
  color: #fff;
  padding: 15px 25px;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  box-shadow: 0 8px 20px rgba(0,0,0,0.3);
  transition: transform 0.3s, box-shadow 0.3s;
  z-index: 100;
}
.floating-btn:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 25px rgba(0,0,0,0.4);
}
*/
