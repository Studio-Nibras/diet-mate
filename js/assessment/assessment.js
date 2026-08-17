const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

document.addEventListener("DOMContentLoaded", () => {
    renderStep();
});

nextBtn.addEventListener("click", () => {

    if (!validateCurrentStep())
        return;

    saveCurrentStep();

    if (currentStep < steps.length - 1) {

        currentStep++;

        renderStep();

    } else {

        analyzeAssessment();

    }

});

prevBtn.addEventListener("click", () => {

    if (currentStep === 0) {
        // Jika di step pertama, kembali ke index
        window.location.href = "../index.html";
        return;
    }

    if (currentStep > 0) {
        currentStep--;
        renderStep();
    }

});

function saveCurrentStep() {

    switch (currentStep) {

        case 0:

            assessmentData.name =
                document.getElementById("name").value.trim();

            assessmentData.age =
                Number(document.getElementById("age").value);

            assessmentData.gender =
                document.getElementById("gender").value;

            break;

        case 1:

            assessmentData.height =
                Number(document.getElementById("height").value);

            assessmentData.weight =
                Number(document.getElementById("weight").value);

            break;

        case 2:
            break;

        case 3:
            break;

    }

    console.log(assessmentData);

}

function analyzeAssessment() {

    const overlay =
        document.getElementById("loadingOverlay");

    overlay.classList.remove("d-none");

    const loadingMessage =
        document.getElementById("loadingMessage");

    const statusIds = [

        "status-1",
        "status-2",
        "status-3",
        "status-4",
        "status-5",
        "status-6"

    ];

    const messages = [

        "Sistem DietMate sedang menganalisis tubuhmu...",

        "Mengolah informasi kesehatan...",

        "Menghitung kebutuhan energi harian...",

        "Menyesuaikan rekomendasi berdasarkan aktivitas...",

        "Mempersonalisasi target diet...",

        "Hampir selesai..."

    ];

    let index = 0;

    const interval = setInterval(() => {

        loadingMessage.textContent = messages[index];

        const item =
            document.getElementById(statusIds[index]);

        item.classList.add("active");

        item.innerHTML =
            '<span class="status-mark"><i class="bi bi-check-lg"></i></span> ' +
            item.innerText.replace(/^○\s*/, "");

        index++;

        if (index >= statusIds.length) {

            clearInterval(interval);

            const result =
                calculateAssessment(
                    assessmentData
                );

            saveAssessment(result);

            setTimeout(() => {

                window.location.href =
                    "dashboard.html";

            }, 800);

        }

    }, 650);

}
