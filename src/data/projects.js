export const projects = [
  {
    id: 1,
    slug: "student-staff-web",
    title: "Student Staff Web (SSC)",
    category: "Web",
    year: "2024",
    role: "Fullstack Developer",
    duration: "-",
    status: "Selesai (Perlu pengembangan)",
    thumbnail: "/projects/ssc/thumbnail.png",
    hero: "/projects/ssc/thumbnail.png",
    // Sub images / gallery detail project (bisa 1 - n gambar)
    gallery: [
      {
        src: "/projects/ssc/landing_page.png",
        caption: "Landing page & dashboard utama",
      },
      {
        src: "/projects/ssc/pengajuan.png",
        caption: "Pengajuan peminjaman barang & surat",
      },
      {
        src: "/projects/ssc/hasil_pengajuan.png",
        caption: "Daftar pengajuan yang masih on-going",
      },
      {
        src: "/projects/ssc/pengajuan_revisi.png",
        caption: "Admin dapat menolak surat dan meminta revisi",
      },
      {
        src: "/projects/ssc/persetujuan_revisi.png",
        caption: "Admin melakukan pengecekan permohonan revisi dan menyetujui",
      },
      {
        src: "/projects/ssc/pengajuan_selesai.png",
        caption:
          "Pengajuan telah di setujui semua pihak terkait dan siap dicetak",
      },
    ],
    description: "Sistem pemantauan peminjaman barang dan pembuatan surat",
    longDescription:
      "Student Service Center (SSC) adalah aplikasi web yang dikembangkan untuk mendigitalisasi proses peminjaman barang dan pengajuan surat di lingkungan kampus. Sistem ini menggantikan proses manual yang sebelumnya mengharuskan mahasiswa mendatangi beberapa penanggung jawab. Dengan layanan berbasis online, proses administrasi menjadi lebih efisien, cepat, dan mudah dipantau oleh mahasiswa maupun pihak terkait.",
    tech: ["Laravel", "Tailwind CSS", "jQuery", "MySQL"],
    features: ["Autentikasi", "Dashboard", "Tracking Proses"],
    highlights: [
      "Mengurangi waktu dan tenaga dalam proses peminjaman barang dan pembuatan surat",
      "Sistem tracking untuk memantau proses pembuatan surat",
      "Konsistensi data karena semua template sudah diatur sistem",
    ],
    github: "dfddfa",
    demo: "#",
  },
  {
    id: 2,
    slug: "spm-api",
    title: "SPM API",
    category: "Web",
    year: "2024",
    role: "Backend Developer",
    duration: "2 Minggu",
    status: "Selesai",
    thumbnail: "/projects/spm/route.png",
    hero: "/projects/spm/route.png",
    // Sub images / gallery detail project (bisa 1 - n gambar)
    gallery: [],
    description:
      "API untuk manajemen data Standar Penjaminan Mutu Tel-U Surabaya",
    longDescription:
      "API ini merupakan projek magang yang ditujukan untuk mempermudah pengelolaan data Standar Penjaminan Mutu (SPM) di Telkom University Surabaya. API ini mendukung berbagai operasi CRUD (Create, Read, Update, Delete) serta parameter seperti searching, sorting dan pagination untuk data SPM, sehingga memudahkan pengelolaan dan integrasi dengan sistem lain yang digunakan di lingkungan kampus.",
    tech: ["Laravel", "MySQL"],
    features: ["Autentikasi", "Dashboard", "Tracking Proses"],
    highlights: [
      "Mendukung operasi CRUD untuk data SPM",
      "Mendukung searching, sorting, dan pagination",
    ],
    github: "https://github.com/azzaaass/spm_api/wiki",
    demo: "#",
  },
  {
    id: 3,
    slug: "rakaat-terawih",
    title: "Rakaat Terawih",
    category: "Web",
    year: "2026",
    role: "Fullstack Developer",
    duration: "3 Hari",
    status: "Selesai",
    thumbnail: "/projects/rakaat-terawih/hero.png",
    hero: "/projects/rakaat-terawih/hero.png",
    // Sub images / gallery detail project (bisa 1 - n gambar)
    gallery: [
      {
        src: "/projects/rakaat-terawih/mahzab.png",
        caption: "Pilihan mahzab",
      },
      {
        src: "/projects/rakaat-terawih/progress-sholat.png",
        caption: "Progress sholat",
      },
      {
        src: "/projects/rakaat-terawih/rekomendasi-surat.png",
        caption: "Rekomendasi surah",
      },
      {
        src: "/projects/rakaat-terawih/doa.png",
        caption: "Doa setelah sholat",
      },
      {
        src: "/projects/rakaat-terawih/riwayat-sholat.png",
        caption: "Doa setelah sholat",
      },
    ],
    description: "Web app pencatatan rakaat sholat terawih",
    longDescription:
      "Dibuat atas keresahan terhadap cara perhitungan rakaat sholat terawih yang manual. Kekhusyukan sholat dapat terganggu karena harus menghitung rakaat dan terkadang lupa berapa rakaat yang sudah dilakukan. Dengan web ini, pengguna dapat mencatat rakaat sholat terawih secara online dan dapat melihat progressnya.",
    tech: ["Vite", "Tailwind CSS", "jQuery"],
    features: ["Rakaat Sholat", "Rekomendasi Surah", "Doa Setelah Sholat"],
    highlights: [
      "Ringan dan mudah digunakan",
      "Data tersimpan meskipun pengguna menutup browser",
      "Mendukung 2 mahzab (Muhammadiyah dan Nahdlatul Ulama)",
    ],
    github: "#",
    demo: "#",
  },
  {
    id: 4,
    slug: "rasi",
    title: "Rasi",
    category: "IoT",
    year: "2025",
    role: "IoT Engineer",
    duration: "-",
    status: "Versi 1.7",
    thumbnail: "/projects/rasi/hero.png",
    hero: "/projects/rasi/hero.png",
    // Sub images / gallery detail project (bisa 1 - n gambar)
    gallery: [
      {
        src: "/projects/rasi/katalog02.png",
        caption: "Watchfaces",
      },
      {
        src: "/projects/rasi/katalog03.png",
        caption: "Navigasi google maps",
      },
      {
        src: "/projects/rasi/katalog04.png",
        caption: "Dynamic bar",
      },
      {
        src: "/projects/rasi/katalog05.png",
        caption: "Notifikasi",
      },
      {
        src: "/projects/rasi/katalog06.png",
        caption: "Kontrol tombol sentuh",
      },
      {
        src: "/projects/rasi/katalog07.png",
        caption: "Pengaturan full custom",
      },
    ],
    description: "Alat navigasi google maps untuk kendaraan (Terjual +300 pc)",
    longDescription:
      "RASI Watch adalah smart display berbasis ESP32-C3 yang dirancang khusus untuk pengendara motor agar perjalanan menjadi lebih praktis, aman, dan informatif. Terhubung langsung dengan smartphone Android melalui Bluetooth, RASI Watch mampu menampilkan navigasi Google Maps secara real-time, informasi kendaraan, kontrol multimedia, hingga berbagai fitur kustomisasi yang dapat disesuaikan dengan kebutuhan pengguna.",
    tech: ["ESP-32", "Chronos", "TinyGPS", "Web-Server ESP32", "Little FS"],
    features: [
      "Navigasi Google Maps",
      "Kustom Pengaturan",
      "Pembacaan Voltmeter",
      "Spedometer Digital",
      "Pembacaan Temperature",
      "Jam Offline Basis Satelit",
    ],
    highlights: [
      "Plug and Play pada kendaraan",
      "Custom booting, nama dan pengaturan",
      "Support bahasa indonesia dan inggris",
    ],
    github: "#",
    demo: "#",
  },
  {
    id: 5,
    slug: "rasi rgb",
    title: "Rasi RGB",
    category: "IoT",
    year: "2025",
    role: "IoT Engineer",
    duration: "-",
    status: "Versi 1.7",
    thumbnail: "/projects/rasi_rgb/home_screen.png",
    hero: "/projects/rasi_rgb/home_screen.png",
    // Sub images / gallery detail project (bisa 1 - n gambar)
    gallery: [
      {
        src: "/projects/rasi/katalog02.png",
        caption: "Watchfaces",
      },
      {
        src: "/projects/rasi/katalog03.png",
        caption: "Navigasi google maps",
      },
      {
        src: "/projects/rasi/katalog04.png",
        caption: "Dynamic bar",
      },
      {
        src: "/projects/rasi/katalog05.png",
        caption: "Notifikasi",
      },
      {
        src: "/projects/rasi/katalog06.png",
        caption: "Kontrol tombol sentuh",
      },
      {
        src: "/projects/rasi/katalog07.png",
        caption: "Pengaturan full custom",
      },
    ],
    description: "Alat navigasi google maps untuk kendaraan (Terjual +300 pc)",
    longDescription:
      "RASI Watch adalah smart display berbasis ESP32-C3 yang dirancang khusus untuk pengendara motor agar perjalanan menjadi lebih praktis, aman, dan informatif. Terhubung langsung dengan smartphone Android melalui Bluetooth, RASI Watch mampu menampilkan navigasi Google Maps secara real-time, informasi kendaraan, kontrol multimedia, hingga berbagai fitur kustomisasi yang dapat disesuaikan dengan kebutuhan pengguna.",
    tech: ["ESP-32", "Chronos", "TinyGPS", "Web-Server ESP32", "Little FS"],
    features: [
      "Navigasi Google Maps",
      "Kustom Pengaturan",
      "Pembacaan Voltmeter",
      "Spedometer Digital",
      "Pembacaan Temperature",
      "Jam Offline Basis Satelit",
    ],
    highlights: [
      "Plug and Play pada kendaraan",
      "Custom booting, nama dan pengaturan",
      "Support bahasa indonesia dan inggris",
    ],
    github: "#",
    demo: "#",
  },
];
