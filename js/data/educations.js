const educationArticles = [

    {
        id: 1,

        category: "healthy-tips",

        categoryLabel: "Healthy Tips",

        title: "Mulai Hidup Sehat dari Kebiasaan Kecil",

        description:
            "Perubahan kecil yang dilakukan secara konsisten dapat membantu membangun pola hidup yang lebih sehat.",

        icon: "bi-sunrise-fill",

        background: "card-bg-green",

        featured: true,

        content: `
            <p>
                Menjalani hidup sehat tidak selalu berarti
                harus mengubah seluruh kebiasaan dalam satu
                waktu.
            </p>

            <h5>Mulai dari hal sederhana</h5>

            <p>
                Kamu bisa mulai dengan memperhatikan pola makan,
                menjaga aktivitas fisik, mencukupi kebutuhan
                istirahat, dan membangun kebiasaan yang sesuai
                dengan rutinitas sehari-hari.
            </p>

            <h5>Yang penting adalah konsistensi</h5>

            <ul>
                <li>Pilih kebiasaan yang realistis.</li>
                <li>Lakukan secara bertahap.</li>
                <li>Pantau perkembanganmu.</li>
                <li>Jangan terlalu fokus pada kesempurnaan.</li>
            </ul>

            <p>
                Health journey bukan tentang perubahan instan,
                tetapi tentang membangun kebiasaan yang dapat
                kamu jalani dalam jangka panjang.
            </p>
        `
    },


    {
        id: 2,

        category: "nutrition",

        categoryLabel: "Nutrition Basics",

        title: "Memahami Kebutuhan Kalori Harian",

        description:
            "Kenali bagaimana kebutuhan energi tubuh berkaitan dengan aktivitas dan tujuan kesehatanmu.",

        icon: "bi-fire",

        background: "card-bg-orange",

        featured: false,

        content: `
            <p>
                Kalori merupakan satuan energi yang digunakan
                tubuh untuk menjalankan berbagai aktivitas.
            </p>

            <h5>Kenapa kebutuhan setiap orang berbeda?</h5>

            <p>
                Kebutuhan energi dapat berbeda berdasarkan
                usia, jenis kelamin, ukuran tubuh, aktivitas
                fisik, dan tujuan kesehatan.
            </p>

            <h5>Gunakan informasi sebagai panduan</h5>

            <p>
                Angka kebutuhan kalori sebaiknya digunakan
                sebagai panduan untuk membantu memahami
                kebutuhan tubuh.
            </p>
        `
    },


    {
        id: 3,

        category: "nutrition",

        categoryLabel: "Nutrition Basics",

        title: "Mengenal Makronutrien",

        description:
            "Protein, karbohidrat, dan lemak memiliki peran berbeda dalam memenuhi kebutuhan tubuh.",

        icon: "bi-egg-fried",

        background: "card-bg-cream",

        featured: false,

        content: `
            <p>
                Makronutrien adalah kelompok zat gizi yang
                dibutuhkan tubuh dalam jumlah relatif besar.
            </p>

            <h5>Protein</h5>

            <p>
                Protein berperan dalam berbagai fungsi tubuh,
                termasuk membantu membangun dan mempertahankan
                jaringan tubuh.
            </p>

            <h5>Karbohidrat</h5>

            <p>
                Karbohidrat merupakan salah satu sumber energi
                utama bagi tubuh.
            </p>

            <h5>Lemak</h5>

            <p>
                Lemak juga dibutuhkan tubuh dan memiliki
                berbagai fungsi penting.
            </p>
        `
    },


    {
        id: 4,

        category: "lifestyle",

        categoryLabel: "Healthy Lifestyle",

        title: "Pentingnya Aktivitas Fisik",

        description:
            "Aktivitas fisik merupakan bagian penting dari gaya hidup sehat bersama pola makan yang seimbang.",

        icon: "bi-person-walking",

        background: "card-bg-mint",

        featured: false,

        content: `
            <p>
                Gaya hidup sehat tidak hanya berkaitan dengan
                makanan. Aktivitas fisik juga menjadi bagian
                penting dalam menjaga kebugaran.
            </p>

            <h5>Mulai sesuai kemampuan</h5>

            <p>
                Aktivitas fisik tidak harus selalu berupa
                olahraga dengan intensitas tinggi.
            </p>

            <h5>Bangun kebiasaan</h5>

            <p>
                Pilih aktivitas yang kamu sukai dan sesuai
                dengan rutinitasmu agar lebih mudah dilakukan
                secara konsisten.
            </p>
        `
    },


    {
        id: 5,

        category: "lifestyle",

        categoryLabel: "Healthy Lifestyle",

        title: "Membangun Pola Hidup yang Konsisten",

        description:
            "Konsistensi lebih penting daripada perubahan besar yang hanya dilakukan dalam waktu singkat.",

        icon: "bi-calendar-heart",

        background: "card-bg-green",

        featured: false,

        content: `
            <p>
                Salah satu tantangan dalam menjalani pola hidup
                sehat adalah mempertahankan kebiasaan dalam
                jangka panjang.
            </p>

            <h5>Buat tujuan yang realistis</h5>

            <p>
                Tujuan yang terlalu besar dapat terasa sulit
                dilakukan. Membaginya menjadi langkah kecil
                dapat membantu membuat perjalanan terasa lebih
                ringan.
            </p>

            <h5>Evaluasi perjalananmu</h5>

            <p>
                Pantau perkembangan untuk melihat kebiasaan
                yang sudah berhasil kamu bangun.
            </p>
        `
    },


    {
        id: 6,

        category: "myth-fact",

        categoryLabel: "Myth vs Fact",

        title: "Mitos: Semua Karbohidrat Harus Dihindari",

        description:
            "Karbohidrat memiliki banyak jenis dan merupakan salah satu sumber energi bagi tubuh.",

        icon: "bi-question-circle-fill",

        background: "card-bg-orange",

        featured: false,

        content: `
            <p>
                <strong>Mitos:</strong>
                semua makanan yang mengandung karbohidrat
                harus dihindari ketika ingin menjalani pola
                makan sehat.
            </p>

            <h5>Faktanya</h5>

            <p>
                Karbohidrat merupakan salah satu sumber energi
                bagi tubuh. Yang lebih penting adalah memahami
                jenis makanan, jumlah, serta pola makan secara
                keseluruhan.
            </p>
        `
    },


    {
        id: 7,

        category: "myth-fact",

        categoryLabel: "Myth vs Fact",

        title: "Mitos: Makan Sehat Harus Mahal",

        description:
            "Pola makan sehat dapat dibangun dengan bahan makanan sederhana yang tersedia di sekitar kita.",

        icon: "bi-wallet2",

        background: "card-bg-cream",

        featured: false,

        content: `
            <p>
                <strong>Mitos:</strong>
                menjalani pola makan sehat selalu membutuhkan
                bahan makanan mahal.
            </p>

            <h5>Faktanya</h5>

            <p>
                Pilihan makanan sehat tidak selalu harus berasal
                dari bahan premium. Banyak bahan makanan sederhana
                yang dapat menjadi bagian dari pola makan seimbang.
            </p>
        `
    }

];