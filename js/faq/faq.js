/**
 * DietMate - FAQ
 */

document.addEventListener("DOMContentLoaded", () => {
  initFAQ();
});


function initFAQ() {
  renderFAQs("all");
  setupCategoryFilter();
}


function renderFAQs(category) {

  const faqList = document.getElementById("faq-list");
  const faqEmpty = document.getElementById("faq-empty");

  if (!faqList) return;

  const filteredFAQs =
    category === "all"
      ? faqData
      : faqData.filter(
          (faq) => faq.category === category
        );


  faqList.innerHTML = "";


  if (!filteredFAQs.length) {

    faqEmpty?.classList.remove("d-none");

    return;
  }


  faqEmpty?.classList.add("d-none");


  filteredFAQs.forEach((faq, index) => {

    const item = createFAQItem(
      faq,
      index
    );

    faqList.appendChild(item);

  });

}


function createFAQItem(faq, index) {

  const item = document.createElement("div");

  item.className = "faq-item";

  item.innerHTML = `
    <button
      class="faq-question"
      type="button"
      aria-expanded="false"
      aria-controls="faq-answer-${faq.id}"
    >

      <span class="faq-question-text">
        ${faq.question}
      </span>

      <span class="faq-question-icon">
        <i class="bi bi-plus"></i>
      </span>

    </button>

    <div
      id="faq-answer-${faq.id}"
      class="faq-answer"
      aria-hidden="true"
    >

      <div class="faq-answer-inner">
        <p>
          ${faq.answer}
        </p>
      </div>

    </div>
  `;


  const question =
    item.querySelector(".faq-question");

  question.addEventListener(
    "click",
    () => {

      toggleFAQ(item);

    }
  );


  return item;
}


function toggleFAQ(item) {

  const question =
    item.querySelector(".faq-question");

  const answer =
    item.querySelector(".faq-answer");

  const icon =
    item.querySelector(".faq-question-icon i");


  const isOpen =
    question.getAttribute(
      "aria-expanded"
    ) === "true";


  // Close other FAQ items

  document
    .querySelectorAll(".faq-item")
    .forEach((otherItem) => {

      if (otherItem === item) return;

      const otherQuestion =
        otherItem.querySelector(
          ".faq-question"
        );

      const otherAnswer =
        otherItem.querySelector(
          ".faq-answer"
        );

      const otherIcon =
        otherItem.querySelector(
          ".faq-question-icon i"
        );


      otherQuestion.setAttribute(
        "aria-expanded",
        "false"
      );

      otherAnswer.setAttribute(
        "aria-hidden",
        "true"
      );

      otherItem.classList.remove(
        "active"
      );

      otherIcon.className =
        "bi bi-plus";

    });


  // Toggle current item

  if (isOpen) {

    question.setAttribute(
      "aria-expanded",
      "false"
    );

    answer.setAttribute(
      "aria-hidden",
      "true"
    );

    item.classList.remove("active");

    icon.className =
      "bi bi-plus";

  } else {

    question.setAttribute(
      "aria-expanded",
      "true"
    );

    answer.setAttribute(
      "aria-hidden",
      "false"
    );

    item.classList.add("active");

    icon.className =
      "bi bi-dash";

  }

}


function setupCategoryFilter() {

  const buttons =
    document.querySelectorAll(
      ".faq-category"
    );


  buttons.forEach((button) => {

    button.addEventListener(
      "click",
      () => {

        const category =
          button.dataset.category;


        buttons.forEach(
          (item) => {
            item.classList.remove(
              "active"
            );
          }
        );


        button.classList.add("active");


        renderFAQs(category);

      }
    );

  });

}