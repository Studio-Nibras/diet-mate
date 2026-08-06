function validateCurrentStep() {

    switch (currentStep) {

        case 0:

            if (!document.getElementById("name").value.trim()) {

                alert("Please enter your name");

                return false;

            }

            break;

        case 1:

            if (!document.getElementById("height").value) {

                alert("Please enter your height");

                return false;

            }

            break;

        case 2:

    if (!assessmentData.activity) {

        alert("Choose your activity");

        return false;

    }

break;

case 3:

    if (!assessmentData.goal) {

        alert("Choose your goal");

        return false;

    }

break;

    }

    return true;

}