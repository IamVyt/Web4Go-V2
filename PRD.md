# PRD - Web4Go Website

## 1. Overview
- **Nama Produk:** Web4Go Website
- **Tipe Produk:** Multi-page company website (bukan lagi single landing page), terdiri dari 6 halaman utama: Home, Tentang Kami, Layanan, Portofolio, Blog, dan Kontak
- **Tim:** Firman (The Strategist), Dwi (Technical Lead & System Builder), Deva (Product & Design Lead), Vivit (Marketing & Research Lead)
- **Tujuan Utama:** Mengubah pengunjung website menjadi lead (kontak/konsultasi) dengan presentasi yang kredibel dan modern, sekaligus jadi pusat informasi lengkap soal layanan Web4Go dan media edukasi lewat blog.

## 2. Latar Belakang & Masalah
Banyak UMKM, startup, sampai siswa/mahasiswa di Indonesia butuh jasa pembuatan website atau aplikasi tapi bingung memilih penyedia yang terpercaya. Selain itu, calon klien sering butuh informasi lebih dalam sebelum memutuskan (profil tim, detail layanan, bukti kerja nyata) yang susah disampaikan lewat satu halaman saja. Website Web4Go perlu punya struktur informasi yang jelas per halaman, supaya calon klien bisa eksplorasi sesuai kebutuhan mereka.

## 3. Goals & Success Metrics
| Goal | Metrik |
|---|---|
| Tingkatkan lead masuk | Jumlah klik tombol CTA (konsultasi/WhatsApp) per halaman |
| Bangun kredibilitas | Waktu rata-rata di halaman Portofolio & Tentang Kami |
| Dukung SEO & edukasi pasar | Traffic organik ke halaman Blog |
| Perjelas pilihan layanan | Rasio klik dari dropdown Layanan ke halaman detail |

## 4. Target Pengguna
- Pemilik UMKM yang belum punya website
- Startup early-stage yang butuh landing page atau aplikasi cepat
- Bisnis yang ingin upgrade dari website lama ke desain modern
- Siswa dan mahasiswa yang butuh jasa pembuatan website, misalnya untuk tugas kuliah, proyek organisasi, portofolio pribadi, atau kebutuhan lomba

## 5. Struktur Halaman & Navigasi
Navbar utama berisi:
1. **Home** (`/`)
2. **Tentang Kami** (`/tentang-kami`)
3. **Layanan** (dropdown, tidak diklik langsung)
   - Jasa Pembuatan Website (`/layanan/jasa-pembuatan-website`)
   - Pembuatan Aplikasi (`/layanan/pembuatan-aplikasi`)
4. **Portofolio** (`/portofolio`)
5. **Blog** (`/blog`)
6. **Kontak** (`/kontak`)

## 6. Scope

**In scope (v1):**
- 6 halaman utama sesuai struktur navigasi di atas
- Navbar dengan dropdown menu untuk Layanan
- Footer konsisten di semua halaman
- Halaman Portofolio dengan detail per proyek, termasuk live demo dan testimoni klien terkait (testimoni ditampilkan menyatu di halaman detail proyek, bukan halaman terpisah)
- Blog dasar (list artikel + halaman detail artikel), konten dikelola manual lewat data/file kode di v1
- Desain responsif (mobile, tablet, desktop)
- Animasi scroll reveal dan micro-interaction
- Integrasi tombol kontak langsung (WhatsApp/email) di semua halaman relevan

**Out of scope (v1):**
- CMS/admin dashboard untuk update konten (termasuk blog dan portofolio)
- Sistem pembayaran online
- Multi-language support
- Search/filter artikel blog yang kompleks (v1 cukup list sederhana, filter kategori dasar kalau memungkinkan)

## 7. Tim & Founder
| Nama | Role |
|---|---|
| Firman | The Strategist |
| Dwi | Technical Lead & System Builder |
| Deva | Product & Design Lead |
| Vivit | Marketing & Research Lead |

> Detail lengkap profil tiap founder (bio, foto, keahlian) ditampilkan di halaman Tentang Kami.

## 8. Feature Breakdown per Halaman

### Home
- Hero: judul, tagline, tombol konsultasi gratis
- Ringkasan layanan (preview singkat, tautan ke halaman Layanan)
- Ringkasan portofolio (beberapa proyek unggulan, tautan ke halaman Portofolio)
- Testimoni ringkas (beberapa kartu/carousel)
- CTA penutup sebelum footer

### Tentang Kami
- Cerita/latar belakang Web4Go
- Visi & misi
- Profil tim & founder lengkap (foto, role, keahlian, tautan sosial media)

### Layanan
**Jasa Pembuatan Website** (`/layanan/jasa-pembuatan-website`)
- Sub layanan: company profile, landing page, e-commerce, maintenance
- Detail tiap sub layanan
- Paket harga & promo

**Pembuatan Aplikasi** (`/layanan/pembuatan-aplikasi`)
- Sub layanan: *(perlu dirinci tim, contoh: mobile app, web app custom, integrasi sistem)*
- Detail tiap sub layanan
- Paket harga (kalau ada)

### Portofolio
- Galeri proyek dengan filter kategori
- Detail tiap proyek: deskripsi, tautan live demo, testimoni klien terkait (ditampilkan menyatu di halaman ini)

### Blog
- List artikel (bisa difilter per kategori/tag dasar)
- Halaman detail artikel

### Kontak
- Form kontak atau tombol langsung ke WhatsApp/email
- Informasi kontak lengkap (alamat kalau ada, jam operasional)
- Tautan sosial media

## 9. Non-Functional Requirements
- Performance: First Contentful Paint di bawah 2 detik pada koneksi 4G, termasuk untuk halaman Blog yang mungkin berisi gambar besar
- Responsive: mobile-first, breakpoint standar Tailwind (sm, md, lg, xl)
- SEO: meta title & description unik per halaman (penting terutama untuk Blog dan halaman Layanan), open graph tags, sitemap dasar
- Aksesibilitas dasar: alt text gambar, kontras warna cukup, elemen interaktif (termasuk dropdown navbar) bisa diakses keyboard

## 10. Asumsi & Open Questions
- Testimoni klien ditampilkan menyatu di halaman detail Portofolio (bukan halaman `/testimoni` terpisah seperti draf sebelumnya), mengikuti arahan terbaru
- Konten Blog di v1 dikelola manual lewat data/file kode (belum ada CMS), perlu ditentukan siapa di tim yang bertanggung jawab update konten blog secara rutin
- Detail sub-layanan di "Pembuatan Aplikasi" belum dirinci, perlu dilengkapi tim sebelum masuk fase Design
- Warna brand belum final (dibahas lebih lanjut di Design.md)
- Perlu didata proyek mana saja yang sudah siap dijadikan live demo publik sebelum halaman Portofolio di-launch
