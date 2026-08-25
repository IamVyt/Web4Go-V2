# Design System - Web4Go Landing Page

## 1. Brand Identity
- **Nama:** Web4Go
- **Positioning:** Jasa pembuatan website yang modern, terpercaya, dan gercep buat UMKM sampai startup
- **Kesan yang mau dibangun:** profesional tapi tetap approachable, bukan kaku ala korporat, bukan juga generic template agency

## 2. Tipografi
- **Font sans (body/teks umum):** Inter
- **Font display (headline):** Outfit
- Import via Google Fonts:
```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Outfit:wght@400;500;600&display=swap');
```
- Konfigurasi di Tailwind theme sebagai `--font-sans` (Inter) dan `--font-display` (Outfit)

## 3. Palet Warna (usulan awal, bisa disesuaikan tim)
| Nama | Hex | Penggunaan |
|---|---|---|
| Primary Dark | #0a152d | Background tombol utama, teks headline penting |
| Secondary Dark | #0a1b33 | Teks headline sekunder |
| Body Text | #64748b | Subheadline, paragraf |
| Background | #f9fafb | Background utama halaman |
| Surface | #ffffff | Card, container |
| Border | slate-200/50 (rgba halus) | Border card dan container |
| Accent | *(belum ditentukan, disarankan pilih 1 warna cerah untuk CTA sekunder/badge promo)* | Badge promo, highlight |

> Catatan: palet ini terinspirasi dari prinsip "clean minimal dengan aksen gelap", bukan hasil contek desain dari kompetitor manapun. Warna accent masih perlu didiskusikan bareng tim biar sesuai identitas Web4Go.

## 4. Layout & Spacing
- Container utama: `max-w-[1400px] mx-auto` dengan padding horizontal responsif (`px-6 md:px-16`)
- Card dan section pakai rounded besar (`rounded-[32px]` sampai `rounded-[48px]`) untuk kesan modern dan lembut
- Shadow halus, bukan shadow tebal: `shadow-[0_40px_100px_-20px_rgba(0,0,0,0.03)]`
- Jarak antar section: `mt-10` sampai `mt-20` tergantung kepadatan konten

## 5. Pola Styling Komponen
- **Tombol utama (CTA):** `rounded-full`, background dark, teks putih, ada hover scale animation
- **Tombol sekunder:** `rounded-full`, border tipis, background putih/transparan, hover border lebih gelap
- **Card (layanan, portofolio, testimoni, paket harga):** `rounded-2xl` atau lebih besar, border `border-slate-200/60`, shadow halus, transisi warna border saat hover
- **Navbar/Floating nav (kalau dipakai):** `bg-white/90 backdrop-blur-2xl`, rounded-full, shadow lembut

## 6. Responsive Breakpoints
Mengikuti default Tailwind:
- Mobile: base (< 640px)
- Tablet: `md` (>= 768px)
- Desktop: `lg` (>= 1024px)
- Wide: `xl` (>= 1280px)

Prioritaskan mobile-first, terutama untuk section Layanan Jasa, Portofolio, dan Paket Harga karena kontennya padat (grid/list yang perlu menyesuaikan jumlah kolom).

## 7. Guideline Animasi
- Scroll reveal: fade in + translate Y kecil (misal dari `opacity-0 translateY(20px)` ke `opacity-100 translateY(0)`)
- Durasi hover/interaksi kecil: 200-300ms
- Durasi transisi elemen besar (background, section masuk viewport): 500-1000ms
- Semua animasi pakai easing halus (`ease-out` atau custom cubic-bezier), hindari animasi yang terlalu "snappy" atau bouncy berlebihan supaya tetap terkesan profesional

## 8. Prinsip Desain Umum
1. Konten dulu, dekorasi kemudian, jangan sampai animasi mengorbankan keterbacaan
2. Konsisten: satu jenis rounded corner, satu jenis shadow style, dipakai di semua card sejenis
3. Hindari meniru layout/desain kompetitor (termasuk referensi yang pernah dibahas sebelumnya), desain harus punya karakter Web4Go sendiri
