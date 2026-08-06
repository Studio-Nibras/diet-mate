document.addEventListener("DOMContentLoaded", () => {

    const user = getAssessment();

    if (!user) {

        window.location.href = "assessment.html";

        return;

    }

    renderDashboard(user);

});

function renderDashboard(user){

    setGreeting(user.name);

    document.getElementById("bmiValue").textContent =
        user.bmi;

    document.getElementById("calories").textContent =
        user.targetCalories;

    document.getElementById("weight").textContent =
        user.weight;

    document.getElementById("goal").textContent =
        getGoalLabel(user.goal);

    document.getElementById("bmiStatus").textContent =
        getBMIStatus(user.bmi);

    document.getElementById("recommendationText").textContent =
        `Hari ini target konsumsi kalori kamu sekitar ${user.targetCalories} kcal. Pilih makanan bergizi seimbang dan jangan lupa minum air putih yang cukup.`;

}

function getBMIStatus(bmi) {

    if (bmi < 18.5) {
        return "Kurus";
    }

    if (bmi < 25) {
        return "Normal";
    }

    if (bmi < 30) {
        return "Berlebih";
    }

    return "Obesitas";

}

function getGoalLabel(goal) {

    switch (goal) {

        case "lose":
            return "Turun Berat";

        case "gain":
            return "Naik Berat";

        case "maintain":
            return "Pertahankan";

        default:
            return "-";

    }

}

function setGreeting(name) {

    const hour = new Date().getHours();

    const title = document.getElementById("greetingTitle");
    const subtitle = document.getElementById("greetingSubtitle");

    if (hour >= 5 && hour < 11) {

        title.textContent =
            `Selamat Pagi, ${name}`;

        subtitle.textContent =
            "Semoga harimu menyenangkan. Jangan lupa sarapan sehat!";

    }

    else if (hour >= 11 && hour < 15) {

        title.textContent =
            `Selamat Siang, ${name}`;

        subtitle.textContent =
            "Pastikan kebutuhan nutrisimu tetap terpenuhi hari ini.";

    }

    else if (hour >= 15 && hour < 18) {

        title.textContent =
            `Selamat Sore, ${name}`;

        subtitle.textContent =
            "Tetap semangat menjaga pola hidup sehat.";

    }

    else {

        title.textContent =
            `Selamat Malam, ${name}`;

        subtitle.textContent =
            "Semoga istirahatmu berkualitas dan tetap jaga kesehatan.";

    }

}