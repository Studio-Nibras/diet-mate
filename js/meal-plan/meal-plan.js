const selectedMeals = {};

document.addEventListener("DOMContentLoaded", () => {

    const user = getAssessment();

    if (!user) {

        window.location.href = "assessment.html";
        return;

    }

    renderMealPlan(user);

});

function renderMealPlan(user){

    currentPlan = mealPlans[user.goal];

    document.getElementById("targetCalories").textContent =
        user.targetCalories;

    randomMeal("breakfast");

    randomMeal("lunch");

    randomMeal("snack");

    randomMeal("dinner");

}

function showMealDetail(mealType){

    const meals = currentPlan[mealType];

    const titleMap = {

        breakfast: "Sarapan",

        lunch: "Makan Siang",

        snack: "Snack",

        dinner: "Makan Malam"

    };

    document.getElementById("mealModalTitle").textContent =
        titleMap[mealType];

    let html = "";

    meals.forEach(menu=>{

        html += `

        <div class="meal-item">

            <div>

                <h5>

                    ${menu.name}

                </h5>

                <small>

                    Protein ${menu.protein} g

                    • Karbo ${menu.carbs} g

                    • Lemak ${menu.fat} g

                </small>

            </div>

            <span class="badge bg-success">

                ${menu.calories} kkal

            </span>

        </div>

        `;

    });

    document.getElementById("mealModalBody").innerHTML =
        html;

    new bootstrap.Modal(
        document.getElementById("mealModal")
    ).show();

}

function randomMeal(mealType) {

    const meals = currentPlan[mealType];

    let random;

    if (meals.length === 1) {
        random = meals[0];
    } else {
        do {
            random = meals[Math.floor(Math.random() * meals.length)];
        } while (
            selectedMeals[mealType] &&
            random.name === selectedMeals[mealType].name
        );
    }

    selectedMeals[mealType] = random;

    document.getElementById(`${mealType}Name`).textContent = random.name;
    document.getElementById(`${mealType}Calories`).textContent = random.calories;
    document.getElementById(`${mealType}Macro`).textContent =
        `Protein ${random.protein} g • Karbo ${random.carbs} g • Lemak ${random.fat} g`;
}

let currentPlan = null;