document.addEventListener(
    "DOMContentLoaded",
    () => {

        loadProfile();

        setupResetJourney();

    }
);

function loadProfile() {

    const user =
        getAssessment();


    if (!user) {

        redirectToLanding();

        return;

    }


    renderProfile(user);

}

function renderProfile(user) {

    const name =
        user.name || "User";


    const goal =
        formatGoal(user.goal);


    const gender =
        formatGender(user.gender);


    const activity =
        formatActivity(user.activityLevel);


    const bmi =
        formatNumber(user.bmi);


    setText(
        "profileName",
        name
    );


    setText(
        "profileGoal",
        goal
    );


    setText(
        "profileAvatar",
        getInitial(name)
    );


    setText(
        "profileInfoName",
        name
    );


    setText(
        "profileAge",
        user.age
            ? `${user.age} tahun`
            : "-"
    );


    setText(
        "profileGender",
        gender
    );


    setText(
        "profileHeight",
        user.height ?? "-"
    );


    setText(
        "profileWeight",
        user.weight ?? "-"
    );


    setText(
        "profileBMI",
        bmi
    );


    setText(
        "profileBMIStatus",
        getBMIStatus(user.bmi)
    );


    setText(
        "profileBMR",
        formatNumber(user.bmr)
    );


    setText(
        "profileCalories",
        formatNumber(user.dailyCalories)
    );


    setText(
        "profileActivity",
        activity
    );


    setText(
        "profileGoalDetail",
        goal
    );

}


function setupResetJourney() {

    const resetBtn =
        document.getElementById(
            "resetJourneyBtn"
        );


    const confirmBtn =
        document.getElementById(
            "confirmResetBtn"
        );


    if (!resetBtn || !confirmBtn) {
        return;
    }


    const modalElement =
        document.getElementById(
            "resetJourneyModal"
        );


    const modal =
        bootstrap.Modal.getOrCreateInstance(
            modalElement
        );


    resetBtn.addEventListener(
        "click",
        () => {

            modal.show();

        }
    );


    confirmBtn.addEventListener(
        "click",
        () => {

            clearAssessment();

            clearProgressStorage();


            window.location.href =
                "../index.html";

        }
    );

}


function clearProgressStorage() {

    const progressKeys = [

        "dietmate-progress",

        "dietmate-progress-history",

        "progressHistory"

    ];


    progressKeys.forEach(
        key => {

            localStorage.removeItem(key);

        }
    );

}

function setText(
    id,
    value
) {

    const element =
        document.getElementById(id);


    if (!element) return;


    element.textContent =
        value ?? "-";

}


function getInitial(name) {

    if (!name) return "U";


    return name
        .trim()
        .charAt(0)
        .toUpperCase();

}


function formatNumber(value) {

    if (
        value === null ||
        value === undefined ||
        value === ""
    ) {

        return "-";

    }


    const number =
        Number(value);


    if (Number.isNaN(number)) {
        return value;
    }


    return number.toLocaleString(
        "id-ID",
        {
            maximumFractionDigits: 1
        }
    );

}


function formatGoal(goal) {

    const goals = {

        lose:
            "Turun Berat Badan",

        gain:
            "Naik Berat Badan",

        maintain:
            "Pertahankan Berat Badan"

    };


    return (
        goals[goal] ||
        goal ||
        "-"
    );

}


function formatGender(gender) {

    const genders = {

        male:
            "Laki-laki",

        female:
            "Perempuan"

    };


    return (
        genders[gender] ||
        gender ||
        "-"
    );

}


function formatActivity(activity) {

    const activities = {

        sedentary:
            "Sedentary",

        light:
            "Lightly Active",

        moderate:
            "Moderately Active",

        active:
            "Active",

        very_active:
            "Very Active"

    };


    return (
        activities[activity] ||
        activity ||
        "-"
    );

}


function getBMIStatus(bmi) {

    const value =
        Number(bmi);


    if (Number.isNaN(value)) {
        return "-";
    }


    if (value < 18.5) {
        return "Underweight";
    }


    if (value < 25) {
        return "Normal";
    }


    if (value < 30) {
        return "Overweight";
    }


    return "Obesity";

}


function redirectToLanding() {

    window.location.href =
        "../index.html";

}