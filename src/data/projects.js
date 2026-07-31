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
    thumbnail: "/projects/example.jpg",
    hero: "/projects/example.jpg",
    // Sub images / gallery detail project (bisa 1 - n gambar)
    gallery: [
      {
        src: "/projects/example.jpg",
        caption: "Landing page & dashboard utama",
      },
    ],
    description: "Sistem pemantauan peminjaman barang dan pembuatan surat",
    longDescription:
      "Web ini merupakan sistem yang mencoba memangkas proses peminjaman barang dan pembuatan surat yang biasanya dilakukan secara manual. Dengan sistem ini, mahasiswa dapat meminjam barang dan membuat surat secara online, sehingga mengurangi waktu dan tenaga yang dibutuhkan.",
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
    thumbnail: "/projects/example.jpg",
    hero: "/projects/example.jpg",
    // Sub images / gallery detail project (bisa 1 - n gambar)
    gallery: [
      {
        src: "/projects/example.jpg",
        caption: "Landing page & dashboard utama",
      },
    ],
    description: "API untuk ",
    longDescription:
      "Web ini merupakan sistem yang mencoba memangkas proses peminjaman barang dan pembuatan surat yang biasanya dilakukan secara manual. Dengan sistem ini, mahasiswa dapat meminjam barang dan membuat surat secara online, sehingga mengurangi waktu dan tenaga yang dibutuhkan.",
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
    longDescription: "RASI Watch adalah smart display berbasis ESP32-C3 yang dirancang khusus untuk pengendara motor agar perjalanan menjadi lebih praktis, aman, dan informatif. Terhubung langsung dengan smartphone Android melalui Bluetooth, RASI Watch mampu menampilkan navigasi Google Maps secara real-time, informasi kendaraan, kontrol multimedia, hingga berbagai fitur kustomisasi yang dapat disesuaikan dengan kebutuhan pengguna.",
    tech: ["ESP-32", "Chronos", "TinyGPS", "Web-Server ESP32", "Little FS"],
    features: ["Navigasi Google Maps", "Kustom Pengaturan", "Pembacaan Voltmeter", "Spedometer Digital", "Pembacaan Temperature", "Jam Offline Basis Satelit"],
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
    longDescription: "RASI Watch adalah smart display berbasis ESP32-C3 yang dirancang khusus untuk pengendara motor agar perjalanan menjadi lebih praktis, aman, dan informatif. Terhubung langsung dengan smartphone Android melalui Bluetooth, RASI Watch mampu menampilkan navigasi Google Maps secara real-time, informasi kendaraan, kontrol multimedia, hingga berbagai fitur kustomisasi yang dapat disesuaikan dengan kebutuhan pengguna.",
    tech: ["ESP-32", "Chronos", "TinyGPS", "Web-Server ESP32", "Little FS"],
    features: ["Navigasi Google Maps", "Kustom Pengaturan", "Pembacaan Voltmeter", "Spedometer Digital", "Pembacaan Temperature", "Jam Offline Basis Satelit"],
    highlights: [
      "Plug and Play pada kendaraan",
      "Custom booting, nama dan pengaturan",
      "Support bahasa indonesia dan inggris",
    ],
    github: "#",
    demo: "#",
  },
];
