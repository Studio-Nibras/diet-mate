/**
 * DietMate - About Page
 */

document.addEventListener("DOMContentLoaded", () => {
  initAboutPage();
});


function initAboutPage() {
  setupAboutCards();
}


function setupAboutCards() {
  const cards = document.querySelectorAll(
    ".why-card, .approach-step"
  );

  if (!cards.length) return;

  cards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      card.classList.add("is-hovered");
    });

    card.addEventListener("mouseleave", () => {
      card.classList.remove("is-hovered");
    });
  });
}