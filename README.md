<div align="center">

  <img src="frontend/public/favicon.svg" alt="Web4Go Logo" width="80" height="80" />

  # ⚡ Web4Go — Studio Website V2
  
  **Bangun Aset Digital Masa Depanmu melalui Riset — Bukan Sekadar Copy-Paste.**

  <p align="center">
    A high-performance, design-first digital studio platform built with <strong>React</strong>, <strong>TypeScript</strong>, <strong>Three.js</strong>, and <strong>Vite</strong>. Featuring an interactive 3D WebGL character, dynamic encyclopedic publications, smooth marquee showcases, and mobile-optimized inquiry workflows.
  </p>

  <p align="center">
    <a href="#-fitur-utama"><img src="https://img.shields.io/badge/Status-Production%20Ready-success?style=for-the-badge&logo=vercel&logoColor=white" alt="Status" /></a>
    <a href="#-tech-stack"><img src="https://img.shields.io/badge/Frontend-React%20%7C%20TypeScript%20%7C%20Vite-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React" /></a>
    <a href="#-tech-stack"><img src="https://img.shields.io/badge/3D%20Graphics-Three.js%20WebGL-B4E50D?style=for-the-badge&logo=three.js&logoColor=black" alt="Three.js" /></a>
    <a href="#-tech-stack"><img src="https://img.shields.io/badge/Styling-Custom%20Design%20System-black?style=for-the-badge&logo=css3&logoColor=white" alt="CSS" /></a>
  </p>

  <p align="center">
    <a href="#-quick-start">Quick Start</a> •
    <a href="#-fitur-utama">Fitur Utama</a> •
    <a href="#-arsitektur-proyek">Arsitektur</a> •
    <a href="#-tech-stack">Tech Stack</a> •
    <a href="#-tim-studio">Tim Studio</a>
  </p>

</div>

---

## 🌟 Tentang Web4Go V2

**Web4Go V2** dirancang untuk menghadirkan pengalaman digital kelas atas bagi calon klien dan brand modern. Berbeda dari website agensi konvensional yang mengandalkan template generik, Web4Go dibangun dengan fondasi riset mendalam, sistem visual yang presisi, performa *Core Web Vitals* optimal, serta interaktivitas 3D yang hidup dan berkarakter.

---

## ✨ Fitur Utama

### 🤖 1. Karakter Maskot 3D Interaktif (WebGL & Three.js)
* Maskot 3D bergaya keramik minimalis dengan emblem logo Web4Go 3D di bagian dada.
* Pelacakan rotasi halus mengikuti pergerakan kursor (*smooth mouse tracking*) dan fisika sentuhan *drag-and-snapback*.
* Partikel ambient neon lime (`#B4E50D`) yang mengambang dinamis di seluruh latar belakang viewport.
* Dilengkapi mekanisme *smart auto-resize* dan *pan-y touch handling* agar navigasi di layar smartphone tetap mulus.

### 📑 2. Sistem Publikasi & Berita Dinamis (Wikipedia-Style Hub & Detail)
* **Katalog Berita Pintar (*Articles Hub*)**: Kolom pencarian kata kunci *real-time*, filter kategori multi-topik (*Engineering, Product Design, Strategy, Growth & SEO*), dan sorotan artikel utama (*Featured Banner*).
* **Halaman Artikel Ensiklopedis (*Wikipedia & Modern Publication Style*)**:
  * Bar progres membaca (*Reading Progress Bar*) neon lime di bagian atas layar.
  * Daftar Isi (*Table of Contents*) interaktif dengan fitur *Scrollspy* otomatis.
  * Kotak fakta singkat (*Wikipedia Infobox Factsheet*).
  * Format konten kaya: kutipan kunci (*callout blockquote*), daftar poin implementasi, profil bio penulis, serta rekomendasi artikel terkait.
* Mendukung riwayat navigasi browser penuh via *Hash Routing* (`#/articles` & `#/article/:id`).

### 🛠️ 3. Alur 4 Langkah Pembuatan Website Interaktif
* Menampilkan transparansi alur kerja Web4Go:
  1. `01. Order Layanan`
  2. `02. Perencanaan Design Web`
  3. `03. Pengiriman Konten Website`
  4. `04. Website Publish`
* Dilengkapi *dropdown accordion* minimalis untuk membedah estimasi waktu, output deliverables, dan detail pengerjaan.

### 💬 4. Testimoni Klien & Marquee Mitra
* Animasi gulir horizontal tanpa henti (*infinite smooth marquee*): kartu review klien bergerak perlahan ke kiri, badge partner bergerak ke kanan.
* Fitur *pause-on-hover* dan *pause-on-touch* untuk kemudahan membaca ulasan.

### ❓ 5. Accordion Tanya Jawab (FAQ Section)
* Jawaban lengkap atas pertanyaan krusial calon klien mengenai perbedaan riset vs template, estimasi waktu, keamanan data, dan hak milik aset.
* Ikon plus/minus bermetamorfosis mulus saat accordion dibuka.

### 📱 6. Desain Responsif & Mobile Ergonomics
* Tampilan smartphone (HP) dioptimalkan secara khusus: modal pemesanan bergaya *bottom-sheet*, ukuran tombol ramah sentuhan (min 48px), dan pencegahan *auto-zoom* input iOS.

---

## 🛠️ Tech Stack

| Lapisan | Teknologi | Deskripsi |
| :--- | :--- | :--- |
| **Core Framework** | React 18 & TypeScript | Komponen UI modular dengan *strict type safety* |
| **Build Tool** | Vite 8 | Kompilasi kilat, HMR instan, dan optimasi bundle produksi |
| **3D Rendering** | Three.js (WebGL) | Rendering maskot 3D, pencahayaan studio & sistem partikel |
| **Styling** | Vanilla CSS (Design Tokens) | Kontrol estetika penuh, glassmorphism, dan micro-animations |
| **Backend API** | Node.js & Express (TypeScript) | Layanan REST API untuk penanganan formulir konsultasi |
| **Iconography & Asset** | Custom SVG Vector System | Ikon presisi tajam tanpa beban library eksternal |

---

## 📂 Arsitektur Proyek

```plaintext
Web4Gogo/
├── frontend/                     # React + Vite Client Application
│   ├── public/                   # Static assets, 3D assets & Favicon
│   │   ├── favicon.svg           # Vector Logo Mark
│   │   └── models/               # 3D GLB Models & HDR Environments
│   ├── src/
│   │   ├── components/
│   │   │   ├── icons/            # Modular SVG Icon Components
│   │   │   ├── layout/           # Header, Footer, SkipLink
│   │   │   ├── overlays/         # Fullscreen NavMenu & RequestModal
│   │   │   ├── pages/            # ArticlesHub & ArticleDetail Pages
│   │   │   ├── sections/         # Hero, 3D Mascot, About, Services, FAQ, Blog
│   │   │   └── ui/               # PillButton, Eyebrow, TagChip
│   │   ├── context/              # AppContext (Navigation, Modal & Router State)
│   │   ├── hooks/                # useClock, useReveal, useLiquidReveal
│   │   ├── lib/                  # Constants, API helpers, Scroll utilities
│   │   ├── types/                # TypeScript Interfaces & Models
│   │   ├── App.tsx               # Main Application Root
│   │   ├── index.css             # Global Design System & Responsive Styles
│   │   └── main.tsx              # React DOM Entry Point
│   ├── package.json
│   ├── tsconfig.json
│   └── vite.config.ts
├── backend/                      # Express Backend API Service
│   ├── src/
│   │   ├── db/                   # JSON / Database Data Layer
│   │   ├── routes/               # Consultation Request Endpoints
│   │   └── index.ts              # API Server Entry
│   └── package.json
├── .gitignore                    # Git Exclusion Rules
├── Architecture.md               # Technical Architecture Documentation
├── PRD.md                        # Product Requirement Document
└── README.md                     # Project Showcase Documentation
```

---

## 🚀 Quick Start

### 1. Clone Repository
```bash
git clone https://github.com/IamVyt/Web4Go-V2.git
cd Web4Go-V2
```

### 2. Jalankan Frontend
```bash
# Masuk ke direktori frontend & install dependencies
cd frontend
npm install

# Jalankan development server
npm run dev
```
Aplikasi akan aktif di **`http://localhost:5173`**.

### 3. Build untuk Produksi
```bash
npm run build
```
Hasil build siap *deploy* akan berada di folder `frontend/dist`.

---

## 👥 Tim Studio Web4Go

<div align="center">
  <table>
    <tr>
      <td align="center"><strong>Dwi</strong><br />Technical Lead & System Builder</td>
      <td align="center"><strong>Deva</strong><br />Product & Design Lead</td>
      <td align="center"><strong>Vivit</strong><br />Marketing & Research Lead</td>
      <td align="center"><strong>Firman</strong><br />The Strategist</td>
    </tr>
  </table>
</div>

---

<div align="center">
  <sub>Dibuat dengan dedikasi dan standar presisi tinggi oleh tim <strong>Web4Go Studio</strong>.</sub>
</div>
