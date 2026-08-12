const steps = [
    {
        title: "Selamat Datang di DietMate",
        subtitle: "Mari mulai dengan mengenal tubuhmu.",
        content: `
            <div class="mb-4">
                <label class="form-label">Nama Lengkap</label>
                <input class="form-control" id="name" type="text" placeholder="Tulis nama lengkapmu">
            </div>

            <div class="mb-4">
                <label class="form-label">Usia</label>
                <input class="form-control" id="age" type="number" placeholder="Tulis usiamu">
            </div>

            <div>
                <label class="form-label">Jenis Kelamin</label>

                <select class="form-select" id="gender">
                    <option value="">Pilih Jenis Kelamin</option>
                    <option value="male">Laki-laki</option>
                    <option value="female">Perempuan</option>
                </select>
            </div>
        `
    },

    {
        title: "Informasi Tubuh",
        subtitle: "Beri tahu kami tentang kondisi tubuhmu.",

        content: `
            <div class="mb-4">
                <label class="form-label">Tinggi Badan (cm)</label>

                <input
                    class="form-control"
                    id="height"
                    type="number"
                    placeholder="Tulis tinggi badanmu">
            </div>

            <div>
                <label class="form-label">Berat Badan (kg)</label>

                <input
                    class="form-control"
                    id="weight"
                    type="number"
                    placeholder="Tulis berat badanmu">
            </div>
        `
    },

    {
        title: "Tingkat Aktivitas",
        subtitle: "Pilih tingkat aktivitas harianmu.",

        content: `

<div class="activity-group option-grid">

<div
class="option-card"
onclick="selectCard('activity-group','1.2',this)">

<h5>Minim Gerak</h5>

<p>Sebagian besar waktu dihabiskan duduk.</p>

</div>

<div
class="option-card"
onclick="selectCard('activity-group','1.375',this)">

<h5>Aktif Ringan</h5>

<p>Aktivitas ringan 1-3 hari/minggu.</p>

</div>

<div
class="option-card"
onclick="selectCard('activity-group','1.55',this)">

<h5>Cukup Aktif</h5>

<p>Olahraga 3–5 hari/minggu.</p>

</div>

<div
class="option-card"
onclick="selectCard('activity-group','1.725',this)">

<h5>Sangat Aktif</h5>

<p>Olahraga hampir setiap hari.</p>

</div>

`
    },

    {
        title: "Tujuan",
        subtitle: "Apa targetmu?",

        content:`

<div class="goal-group option-grid">

<div
class="option-card"
onclick="selectCard('goal-group','lose',this)">

<h5>Turun Berat Badan</h5>

<p>Kurangi lemak tubuh secara aman.</p>

</div>

<div
class="option-card"
onclick="selectCard('goal-group','maintain',this)">

<h5>Pertahankan Berat Badan</h5>

<p>Jaga kondisi tubuhmu saat ini.</p>

</div>

<div
class="option-card"
onclick="selectCard('goal-group','gain',this)">

<h5>Naik Berat Badan</h5>

<p>Tambah massa otot dan berat badan.</p>

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
