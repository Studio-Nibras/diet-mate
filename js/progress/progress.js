let weightChart = null;


document.addEventListener("DOMContentLoaded", () => {

    const user = getAssessment();

    if (!user) {
        window.location.href = "assessment.html";
        return;
    }


    initializeProgressHistory();


    const updatedUser = getAssessment();


    initProgress(updatedUser);

});

function initProgress(user) {

    renderGreeting(user);

    renderOverview(user);

    renderWeightStatistics();

    renderGoalProgress(user);

    renderWeeklySummary();

    renderChart();

    renderAchievements(user);

    setupWeightUpdate();

}

function renderGreeting(user) {

    const element =
        document.getElementById(
            "progressGreeting"
        );


    if (!element) return;


    const name =
        user.name || "Sobat DietMate";


    element.textContent =
        `Tetap Semangat, ${name}!`;

}

function renderOverview(user) {

    const currentWeight =
        Number(user.weight);


    const bmi =
        Number(user.bmi);


    const currentWeightElement =
        document.getElementById(
            "currentWeight"
        );


    const bmiElement =
        document.getElementById(
            "bmiValue"
        );


    const bmiStatusElement =
        document.getElementById(
            "bmiStatus"
        );


    const goalElement =
        document.getElementById(
            "goalValue"
        );


    if (currentWeightElement) {

        currentWeightElement.textContent =
            currentWeight.toFixed(1);

    }


    if (bmiElement) {

        bmiElement.textContent =
            bmi.toFixed(1);

    }


    if (bmiStatusElement) {

        bmiStatusElement.textContent =
            getBMIStatus(bmi);

    }


    if (goalElement) {

        goalElement.textContent =
            getGoalLabel(user.goal);

    }

}

function renderWeightStatistics() {

    const history =
        getProgressHistory();


    const changeElement =
        document.getElementById(
            "weightChange"
        );


    const changeLabel =
        document.getElementById(
            "weightChangeLabel"
        );


    const changeIcon =
        document.getElementById(
            "weightChangeIcon"
        );


    const checkInElement =
        document.getElementById(
            "checkInCount"
        );


    if (checkInElement) {

        checkInElement.textContent =
            history.length;

    }


    if (history.length < 2) {

        if (changeElement) {
            changeElement.textContent = "--";
        }

        if (changeLabel) {
            changeLabel.textContent =
                "butuh 2 Pencatatan untuk melihat perubahan";
        }

        return;

    }


    const current =
        Number(
            history[history.length - 1].weight
        );


    const previous =
        Number(
            history[history.length - 2].weight
        );


    const change =
        current - previous;


    if (changeElement) {

        const prefix =
            change > 0
                ? "+"
                : "";

        changeElement.textContent =
            `${prefix}${change.toFixed(1)}`;

    }


    if (changeLabel) {

        changeLabel.textContent =
            "kg dari pencatatan sebelumnya";

    }


    if (changeIcon) {

        if (change < 0) {

            changeIcon.className =
                "bi bi-arrow-down";

            changeIcon.parentElement.classList.add(
                "weight-change-down"
            );

        } else if (change > 0) {

            changeIcon.className =
                "bi bi-arrow-up";

            changeIcon.parentElement.classList.add(
                "weight-change-up"
            );

        } else {

            changeIcon.className =
                "bi bi-dash";

            changeIcon.parentElement.classList.add(
                "weight-change-neutral"
            );

        }

    }

}

function renderWeeklySummary() {

    const history =
        getProgressHistory();


    const weeklyData =
        history.slice(-7);


    const changeElement =
        document.getElementById(
            "weeklyChange"
        );


    const trendElement =
        document.getElementById(
            "weeklyTrend"
        );


    if (
        weeklyData.length < 2
    ) {

        if (changeElement) {

            changeElement.textContent =
                "Belum cukup data";

        }


        if (trendElement) {

            trendElement.className =
                "weekly-trend trend-neutral";

            trendElement.innerHTML = `
                <i class="bi bi-dash"></i>
                Butuh minimal 2 kali pencatatan
            `;

        }

        return;

    }


    const firstWeight =
        Number(
            weeklyData[0].weight
        );


    const latestWeight =
        Number(
            weeklyData[weeklyData.length - 1].weight
        );


    const change =
        latestWeight - firstWeight;


    if (changeElement) {

        if (change === 0) {

            changeElement.textContent =
                "Tidak berubah";

        } else {

            const prefix =
                change > 0
                    ? "+"
                    : "";

            changeElement.textContent =
                `${prefix}${change.toFixed(1)} kg`;

        }

    }


    if (!trendElement) return;


    if (change < 0) {

        trendElement.className =
            "weekly-trend trend-down";

        trendElement.innerHTML = `
            <i class="bi bi-arrow-down"></i>
            Berat menurun
        `;

    } else if (change > 0) {

        trendElement.className =
            "weekly-trend trend-up";

        trendElement.innerHTML = `
            <i class="bi bi-arrow-up"></i>
            Berat meningkat
        `;

    } else {

        trendElement.className =
            "weekly-trend trend-neutral";

        trendElement.innerHTML = `
            <i class="bi bi-dash"></i>
            Berat stabil
        `;

    }

}

function getBMIStatus(bmi) {

    if (!bmi || Number.isNaN(bmi)) {
        return "-";
    }


    if (bmi < 18.5) {
        return "Berat Badan Kurang";
    }


    if (bmi < 25) {
        return "Normal";
    }


    if (bmi < 30) {
        return "Kelebihan Berat Badan";
    }


    return "Obesitas";

}

function getGoalLabel(goal) {

    const goalMap = {

        lose: "Turun Berat",

        maintain: "Menjaga Berat",

        gain: "Naik Berat"

    };


    return goalMap[goal] || "-";

}

function renderGoalProgress(user) {

    const history =
        getProgressHistory();


    const currentWeight =
        Number(user.weight);


    const currentWeightElement =
        document.getElementById(
            "journeyCurrentWeight"
        );


    const goalElement =
        document.getElementById(
            "journeyGoal"
        );


    const progressBar =
        document.getElementById(
            "goalProgressBar"
        );


    const progressText =
        document.getElementById(
            "goalProgressText"
        );


    const note =
        document.getElementById(
            "progressNote"
        );


    if (currentWeightElement) {

        currentWeightElement.textContent =
            `${currentWeight.toFixed(1)} kg`;

    }


    if (goalElement) {

        goalElement.textContent =
            getGoalLabel(user.goal);

    }


    /*
        Karena DietMate belum memiliki
        target weight, progress bar di sini
        merepresentasikan progress tracking,
        bukan persentase menuju berat tertentu.
    */

    const checkInCount =
        history.length;


    const trackingProgress =
        Math.min(
            checkInCount * 20,
            100
        );


    if (progressBar) {

        progressBar.style.width =
            `${trackingProgress}%`;

    }


    if (progressText) {

        progressText.textContent =
            `${trackingProgress}%`;

    }


    if (note) {

        if (checkInCount === 1) {

            note.textContent =
                "Kamu sudah memulai perjalanan. " +
                "Lanjutkan pencatatan secara berkala.";

        } else if (checkInCount < 5) {

            note.textContent =
                `Kamu sudah mencatat ${checkInCount} kali. ` +
                "Tetap konsisten memantau perkembanganmu.";

        } else {

            note.textContent =
                "Keren! Kamu sudah konsisten mencatat " +
                "perkembanganmu.";

        }

    }

}

function renderChart() {

    const canvas =
        document.getElementById(
            "weightChart"
        );


    if (!canvas) return;


    const history =
        getProgressHistory().slice(-7);


    const labels =
        history.map(item =>
            formatDate(item.date)
        );


    const weights =
        history.map(item =>
            Number(item.weight)
        );


    const ctx =
        canvas.getContext("2d");


    if (weightChart) {

        weightChart.destroy();

    }


    weightChart = new Chart(ctx, {

        type: "line",

        data: {

            labels,

            datasets: [

                {

                    label: "Berat Badan",

                    data: weights,

                    borderWidth: 3,

                    tension: 0.35,

                    pointRadius: 5,

                    pointHoverRadius: 7,

                    fill: false,

                    borderColor: "#6BA85A",

                    backgroundColor: "#6BA85A"

                }

            ]

        },


        options: {

            responsive: true,

            maintainAspectRatio: false,


            interaction: {

                intersect: false,

                mode: "index"

            },


            plugins: {

                legend: {

                    display: false

                },


                tooltip: {

                    callbacks: {

                        label: function (context) {

                            return ` ${context.parsed.y} kg`;

                        }

                    }

                }

            },


            scales: {

                y: {

                    beginAtZero: false,

                    grid: {

                        color: "#eeeeee"

                    },


                    ticks: {

                        callback: function (value) {

                            return `${value} kg`;

                        }

                    }

                },


                x: {

                    grid: {

                        display: false

                    }

                }

            }

        }

    });

}

function formatDate(dateString) {

    const date =
        new Date(dateString);


    return date.toLocaleDateString(
        "id-ID",
        {
            day: "numeric",
            month: "short"
        }
    );

}

function setupWeightUpdate() {

    const input =
        document.getElementById(
            "weightInput"
        );


    const button =
        document.getElementById(
            "updateWeightBtn"
        );


    const message =
        document.getElementById(
            "updateMessage"
        );


    if (!input || !button) return;


    button.addEventListener(
        "click",
        () => {

            const newWeight =
                Number(input.value);


            if (!newWeight || newWeight <= 0) {

                showUpdateMessage(
                    message,
                    "Masukkan berat badan yang valid.",
                    "error"
                );

                return;

            }


            if (newWeight > 500) {

                showUpdateMessage(
                    message,
                    "Masukkan angka yang valid.",
                    "error"
                );

                return;

            }


            const success =
                saveProgressEntry(
                    newWeight
                );


            if (!success) {

                showUpdateMessage(
                    message,
                    "Gagal menyimpan progress.",
                    "error"
                );

                return;

            }


            const updatedUser =
                getAssessment();


            renderOverview(
                updatedUser
            );

            renderGoalProgress(
                updatedUser
            );

            renderWeightStatistics();

            renderWeeklySummary();

            renderChart();

            renderAchievements(
                updatedUser
            );


            input.value = "";


            showUpdateMessage(
                message,
                "Berat badan berhasil diperbarui!",
                "success"
            );

        }
    );

}


function showUpdateMessage(
    element,
    text,
    type
) {

    if (!element) return;


    element.textContent =
        text;


    element.className =
        `update-message ${type}`;


    setTimeout(() => {

        element.textContent =
            "";


        element.className =
            "update-message";

    }, 3000);

}

function renderAchievements(user) {

    const container =
        document.getElementById(
            "achievementsContainer"
        );


    if (!container) return;


    const history =
        getProgressHistory();


    const checkInCount =
        history.length;


    const achievements = [

        {
            icon: "bi-flag-fill",

            title: "Perjalanan Sehat Dimulai",

            description:
                "Kamu sudah menyelesaikan assessment DietMate.",

            unlocked: true

        },


        {
            icon: "bi-calendar-check",

            title: "Pencatatan Pertama",

            description:
                "Catat perkembangan berat badan untuk membuka pencapaian ini.",

            unlocked:
                checkInCount >= 2

        },


        {
            icon: "bi-trophy-fill",

            title: "Konsistensi",

            description:
                "Capai 5 kali pencatatan untuk membuka pencapaian ini.",

            unlocked:
                checkInCount >= 5

        }

    ];


    container.innerHTML =
        achievements.map(item => {

            return `

                <div class="col-lg-4 col-md-6">

                    <div class="achievement-card">

                        <div class="achievement-icon">
                            <i class="bi ${item.icon}"></i>
                        </div>

                        <h5>
                            ${item.title}
                        </h5>

                        <p>
                            ${item.unlocked
                    ? "Achievement unlocked!"
                    : item.description
                }
                        </p>

                    </div>

                </div>

            `;

        }).join("");

}