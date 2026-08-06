function calculateBMI(height, weight) {

    const heightInMeter = height / 100;

    const bmi = weight / (heightInMeter * heightInMeter);

    return Number(bmi.toFixed(1));

}

function calculateBMR(gender, height, weight, age) {

    if (gender === "male") {

        return Math.round(
            (10 * weight) +
            (6.25 * height) -
            (5 * age) +
            5
        );

    }

    return Math.round(
        (10 * weight) +
        (6.25 * height) -
        (5 * age) -
        161
    );

}

function calculateDailyCalories(bmr, activity) {

    return Math.round(
        bmr * activity
    );

}

function calculateTargetCalories(calories, goal) {

    switch (goal) {

        case "lose":
            return calories - 500;

        case "gain":
            return calories + 500;

        default:
            return calories;

    }

}

function calculateAssessment(data) {

    const bmi = calculateBMI(
        data.height,
        data.weight
    );

    const bmr = calculateBMR(
        data.gender,
        data.height,
        data.weight,
        data.age
    );

    const dailyCalories =
        calculateDailyCalories(
            bmr,
            data.activity
        );

    const targetCalories =
        calculateTargetCalories(
            dailyCalories,
            data.goal
        );

    return {

        ...data,

        bmi,

        bmr,

        dailyCalories,

        targetCalories,

        assessmentCompleted: true,

        createdAt: new Date().toISOString()

    };

}