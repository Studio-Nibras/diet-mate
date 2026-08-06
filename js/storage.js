const STORAGE_KEY = "dietmate-user";

function saveAssessment(data) {

    localStorage.setItem(

        STORAGE_KEY,

        JSON.stringify(data)

    );

}

function getAssessment() {

    const data = localStorage.getItem(STORAGE_KEY);

    return data ? JSON.parse(data) : null;

}

function clearAssessment() {

    localStorage.removeItem(STORAGE_KEY);

}