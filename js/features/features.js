/**
 * DietMate - Features Page
 */

document.addEventListener("DOMContentLoaded", () => {
  initFeaturesPage();
});


function initFeaturesPage() {
  setupFeatureCards();
}


function setupFeatureCards() {
  const cards = document.querySelectorAll(".features-card");

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