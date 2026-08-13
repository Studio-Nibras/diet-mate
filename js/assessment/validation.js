// function validateCurrentStep() {

//     switch (currentStep) {

//         case 0:

//             if (!document.getElementById("name").value.trim()) {

//                 alert("Please enter your name");

//                 return false;

//             }

//             break;

//         case 1:

//             if (!document.getElementById("height").value) {

//                 alert("Please enter your height");

//                 return false;

//             }

//             break;

//         case 2:

//     if (!assessmentData.activity) {

//         alert("Choose your activity");

//         return false;

//     }

// break;

// case 3:

//     if (!assessmentData.goal) {

//         alert("Choose your goal");

//         return false;

//     }

// break;

//     }

//     return true;

// }

function clearValidationErrors() {
    document.querySelectorAll(".field-error").forEach(error => error.remove());
    document.querySelectorAll(".is-invalid").forEach(field => field.classList.remove("is-invalid"));
}

function showInputError(inputId, message) {
    const field = document.getElementById(inputId);
    if (!field) return false;

    field.classList.add("is-invalid");

    const wrapper = field.closest("div");
    const existingError = wrapper.querySelector(".field-error");
    if (existingError) existingError.remove();

    const error = document.createElement("div");
    error.className = "field-error";
    error.textContent = message;
    wrapper.appendChild(error);

    return false;
}

function showGroupError(groupSelector, message) {
    const group = document.querySelector(groupSelector);
    if (!group) return false;

    const parent = group.parentElement;
    const existingError = parent.querySelector(".field-error");
    if (existingError) existingError.remove();

    const error = document.createElement("div");
    error.className = "field-error";
    error.textContent = message;
    parent.appendChild(error);

    return false;
}

function validateCurrentStep() {
    clearValidationErrors();

    switch (currentStep) {
        case 0:
            if (!document.getElementById("name").value.trim()) {
                return showInputError("name", "Nama lengkap wajib diisi.");
            }

            if (!document.getElementById("age").value) {
                return showInputError("age", "Usia wajib diisi.");
            }

            if (!document.getElementById("gender").value) {
                return showInputError("gender", "Jenis kelamin wajib dipilih.");
            }

            break;

        case 1:
            if (!document.getElementById("height").value) {
                return showInputError("height", "Tinggi badan wajib diisi.");
            }

            if (!document.getElementById("weight").value) {
                return showInputError("weight", "Berat badan wajib diisi.");
            }

            break;

        case 2:
            if (!assessmentData.activity) {
                return showGroupError(".activity-group", "Silakan pilih tingkat aktivitasmu.");
            }
            break;

        case 3:
            if (!assessmentData.goal) {
                return showGroupError(".goal-group", "Silakan pilih tujuanmu.");
            }
            break;
    }

    return true;
}