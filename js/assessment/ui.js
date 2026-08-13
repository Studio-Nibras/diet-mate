const content = document.getElementById("step-content");

function renderStep() {

    const step = steps[currentStep];

    content.innerHTML = `

        <h2 class="fw-bold mb-3">
            ${step.title}
        </h2>

        <p class="text-secondary mb-4">
            ${step.subtitle}
        </p>

        ${step.content}

    `;

    updateProgress();

    prevBtn.disabled = currentStep === 0;

if (currentStep === steps.length - 1) {

    nextBtn.innerHTML = `
        Analisis
        <i class="bi bi-arrow-right"></i>
    `;

} else {

    nextBtn.innerHTML = `
        Lanjut
        <i class="bi bi-arrow-right"></i>
    `;

}

}

function updateProgress() {

    const dots = document.querySelectorAll(".step");

    dots.forEach((dot, index) => {

        dot.classList.remove("active");

        if (index <= currentStep) {

            dot.classList.add("active");

        }

    });

}

// function selectCard(group, value, element){

//     document
//         .querySelectorAll(`.${group} .option-card`)
//         .forEach(card=>card.classList.remove("active"));

//     element.classList.add("active");

//     if (group === "activity-group") {

//     assessmentData.activity = Number(value);

// }

function selectCard(group, value, element) {
    document
        .querySelectorAll(`.${group} .option-card`)
        .forEach(card => card.classList.remove("active", "is-invalid"));

    element.classList.add("active");

    const error = document.querySelector(`.${group}`)?.parentElement?.querySelector(".field-error");
    if (error) error.remove();

    if (group === "activity-group") {
        assessmentData.activity = Number(value);
    }

    if (group === "goal-group") {
        assessmentData.goal = value;
    }
}
