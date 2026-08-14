# DietMate 🥗

> Teman perjalananmu menuju pola hidup yang lebih sehat.

DietMate adalah aplikasi web berbasis nutrisi yang dirancang untuk membantu pengguna memahami kebutuhan nutrisi mereka dan membangun pola makan yang lebih terstruktur berdasarkan kondisi serta tujuan pribadi.

DietMate menyediakan fitur assessment, analisis kebutuhan nutrisi, rekomendasi meal plan, tracking progress, edukasi nutrisi, dan profil pengguna dalam satu platform yang sederhana dan mudah digunakan.


## Fitur Utama

### Personalized Assessment

Pengguna dapat melakukan assessment dengan memasukkan informasi pribadi seperti:

- Usia
- Jenis kelamin
- Tinggi badan
- Berat badan
- Tingkat aktivitas
- Tujuan nutrisi

Data tersebut digunakan untuk menghasilkan rekomendasi nutrisi yang lebih sesuai dengan kebutuhan pengguna.

### Nutrition Analysis

DietMate melakukan analisis berdasarkan data assessment pengguna, meliputi:

- Kebutuhan kalori harian
- Kebutuhan protein
- Kebutuhan karbohidrat
- Kebutuhan lemak
- BMI
- Tujuan nutrisi

### Personalized Meal Plan

DietMate menyediakan rekomendasi makanan berdasarkan tujuan pengguna.

Pilihan tujuan meliputi:

- **Lose Weight** — menurunkan berat badan
- **Maintain Weight** — mempertahankan berat badan
- **Gain Weight** — meningkatkan berat badan

Setiap rekomendasi makanan dilengkapi dengan informasi nutrisi seperti:

- Kalori
- Protein
- Karbohidrat
- Lemak

### Random Meal

Pengguna dapat menemukan rekomendasi makanan secara acak melalui fitur Random Meal.

Fitur ini membantu pengguna mendapatkan variasi pilihan makanan sehingga tidak terpaku pada menu yang sama.

### Progress Tracking

Pengguna dapat memantau perjalanan mereka melalui fitur progress tracking.

Informasi yang ditampilkan dapat membantu pengguna melihat perkembangan dan menjaga konsistensi dalam menjalankan pola hidup yang lebih sehat.

### Nutrition Education

DietMate menyediakan halaman edukasi yang berisi informasi seputar:

- Nutrisi
- Pola makan sehat
- Kalori
- Makronutrien
- Gaya hidup sehat

Tujuannya adalah membantu pengguna memahami alasan di balik rekomendasi yang diberikan oleh aplikasi.

### Profile

Pengguna dapat melihat informasi pribadi dan preferensi nutrisi yang telah mereka masukkan ke dalam aplikasi.

### Responsive Design

DietMate dirancang agar dapat digunakan pada berbagai ukuran perangkat:

- Desktop
- Tablet
- Smartphone

---

## Teknologi yang Digunakan

### Frontend

- HTML5
- CSS3
- JavaScript
- Bootstrap 5
- Bootstrap Icons

### Tools

- Visual Studio Code
- Git
- GitHub
- Vercel

### Penyimpanan Data

DietMate menggunakan:

- `localStorage`

untuk menyimpan data assessment dan data pengguna pada browser.

---

## Struktur Project

diet-mate/
│
├── assets/
│   ├── images/
│   └── ...
│
├── components/
│   └── ...
│
├── css/
│   ├── global.css
│   ├── navbar.css
│   ├── hero.css
│   ├── features.css
│   ├── about.css
│   ├── faq.css
│   ├── assessment.css
│   ├── dashboard.css
│   └── sidebar.css
│
├── js/
│   ├── storage.js
│   ├── calculation.js
│   ├── helper.js
│   └── ...
│
├── assessment/
│   ├── assessment.js
│   ├── ui.js
│   ├── validation.js
│   └── wizard.js
│
├── pages/
│   ├── assessment.html
│   ├── dashboard.html
│   ├── education.html
│   └── meal-plan.html
│   └── profile.html
│   └── progress.html
├── index.html
├── features.html
├── about.html
├── faq.html
│
└── README.md