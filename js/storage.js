const STORAGE_KEY = "dietmate-user";


/* ========================================
   SAVE ASSESSMENT
======================================== */

function saveAssessment(data) {

    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(data)
    );

}


/* ========================================
   GET ASSESSMENT
======================================== */

function getAssessment() {

    const data =
        localStorage.getItem(STORAGE_KEY);

    return data
        ? JSON.parse(data)
        : null;

}


/* ========================================
   CLEAR ASSESSMENT
======================================== */

function clearAssessment() {

    localStorage.removeItem(STORAGE_KEY);

}


/* ========================================
   PROGRESS HISTORY
======================================== */

/**
 * Get weight history from user data.
 *
 * Returns:
 * [
 *   {
 *      date: "2026-08-08",
 *      weight: 70
 *   }
 * ]
 */
function getProgressHistory() {

    const user = getAssessment();

    if (!user) {
        return [];
    }

    return user.progressHistory || [];

}


/* ========================================
   SAVE PROGRESS ENTRY
======================================== */

function saveProgressEntry(weight) {

    const user = getAssessment();

    if (!user) {
        return false;
    }


    const history =
        user.progressHistory || [];


    const today =
        new Date().toISOString().split("T")[0];


    /*
        Kalau user update beberapa kali
        di hari yang sama, kita update
        entry hari tersebut daripada
        membuat duplikat.
    */

    const existingIndex =
        history.findIndex(
            item => item.date === today
        );


    const entry = {
        date: today,
        weight: Number(weight)
    };


    if (existingIndex !== -1) {

        history[existingIndex] = entry;

    } else {

        history.push(entry);

    }


    /*
        Pastikan history selalu
        berdasarkan tanggal.
    */

    history.sort(
        (a, b) =>
            new Date(a.date) -
            new Date(b.date)
    );


    const updatedUser = {
        ...user,

        weight: Number(weight),

        progressHistory: history
    };


    saveAssessment(updatedUser);

    return true;

}


/* ========================================
   INITIALIZE PROGRESS HISTORY
======================================== */

function initializeProgressHistory() {

    const user = getAssessment();

    if (!user) {
        return [];
    }


    /*
        Kalau history sudah ada,
        jangan dibuat ulang.
    */

    if (
        user.progressHistory &&
        user.progressHistory.length > 0
    ) {
        return user.progressHistory;
    }


    const today =
        new Date().toISOString().split("T")[0];


    const history = [

        {
            date: today,

            weight: Number(user.weight)

        }

    ];


    const updatedUser = {

        ...user,

        progressHistory: history

    };


    saveAssessment(updatedUser);


    return history;

}