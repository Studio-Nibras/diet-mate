const steps = [
    {
        title: "Welcome",
        subtitle: "Let's get to know your body first.",
        content: `
            <div class="mb-4">
                <label class="form-label">Full Name</label>
                <input class="form-control" id="name" type="text" placeholder="Enter your name">
            </div>

            <div class="mb-4">
                <label class="form-label">Age</label>
                <input class="form-control" id="age" type="number" placeholder="20">
            </div>

            <div>
                <label class="form-label">Gender</label>

                <select class="form-select" id="gender">
                    <option value="">Choose Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>
            </div>
        `
    },

    {
        title: "Body Information",
        subtitle: "Tell us about your body.",

        content: `
            <div class="mb-4">
                <label class="form-label">Height (cm)</label>

                <input
                    class="form-control"
                    id="height"
                    type="number"
                    placeholder="170">
            </div>

            <div>
                <label class="form-label">Weight (kg)</label>

                <input
                    class="form-control"
                    id="weight"
                    type="number"
                    placeholder="65">
            </div>
        `
    },

    {
        title: "Lifestyle",
        subtitle: "Choose your daily activity.",

        content: `

<div class="activity-group option-grid">

<div
class="option-card"
onclick="selectCard('activity-group','1.2',this)">

<h5>Sedentary</h5>

<p>Most of the day sitting.</p>

</div>

<div
class="option-card"
onclick="selectCard('activity-group','1.375',this)">

<h5>Light Active</h5>

<p>Light activity 1-3 days/week.</p>

</div>

<div
class="option-card"
onclick="selectCard('activity-group','1.55',this)">

<h5>Moderately Active</h5>

<p>Exercise 3-5 days/week.</p>

</div>

<div
class="option-card"
onclick="selectCard('activity-group','1.725',this)">

<h5>Very Active</h5>

<p>Exercise almost every day.</p>

</div>

`
    },

    {
        title: "Your Goal",
        subtitle: "What's your target?",

        content:`

<div class="goal-group option-grid">

<div
class="option-card"
onclick="selectCard('goal-group','lose',this)">

<h5>Lose Weight</h5>

<p>Reduce body fat safely.</p>

</div>

<div
class="option-card"
onclick="selectCard('goal-group','maintain',this)">

<h5>Maintain</h5>

<p>Keep your current body.</p>

</div>

<div
class="option-card"
onclick="selectCard('goal-group','gain',this)">

<h5>Gain Weight</h5>

<p>Increase muscle and weight.</p>

</div>

</div>

`
    }

];

let currentStep = 0;

const assessmentData = {
    name: "",
    age: "",
    gender: "",
    height: "",
    weight: "",
    activity: "",
    goal: ""
};
