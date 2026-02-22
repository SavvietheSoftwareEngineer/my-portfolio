// THEME TOGGLE
const toggle = document.getElementById("themeToggle");
const body = document.body;

toggle.onclick = () => {
  body.classList.toggle("light");
  toggle.textContent = body.classList.contains("light") ? "🌞" : "🌙";
};

// FILTERS
const filterBtns = document.querySelectorAll(".filter-btn");
const cards = document.querySelectorAll(".card");

filterBtns.forEach(btn => {
  btn.onclick = () => {
    filterBtns.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    const filter = btn.dataset.filter;
    cards.forEach(card => {
      card.style.display =
        filter === "all" || card.classList.contains(filter)
          ? "block"
          : "none";
    });
  };
});

// MODALS
document.querySelectorAll(".card").forEach(card => {
  card.onclick = () =>
    document.getElementById(card.dataset.modal).classList.add("active");
});

document.querySelectorAll(".close").forEach(btn => {
  btn.onclick = () =>
    btn.closest(".modal").classList.remove("active");
});

window.onclick = e => {
  if (e.target.classList.contains("modal")) {
    e.target.classList.remove("active");
  }
};
