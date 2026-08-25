# Development Rules & Guidelines - Web4Go Landing Page

## 1. Coding Conventions
- Gunakan TypeScript secara ketat, hindari `any` implisit
- Nama komponen PascalCase, nama file mengikuti nama komponen (`HeroSection.tsx`)
- Hanya functional component dengan hooks, tidak ada class component
- Satu komponen satu tanggung jawab (jangan gabung logic banyak section ke satu file besar)

## 2. Styling Rules
- Gunakan Vanilla CSS dengan CSS custom properties untuk design tokens (warna, spacing, radii)
- Semua styling ditulis di file CSS terpisah, hindari inline style kecuali untuk nilai dinamis yang memang tidak bisa lewat class (misal warna dari data)
- Gunakan className string biasa atau template literals untuk conditional className
- Semua warna, font, dan spacing utama sebaiknya konsisten dengan `Design.md`, jangan bikin variasi baru tanpa alasan jelas

## 3. Content Rules
- Semua copywriting harus orisinal, dilarang copy-paste dari kompetitor atau agency lain manapun
- Data portofolio dan testimoni yang belum berasal dari klien asli wajib ditandai jelas sebagai contoh (lihat `isPlaceholder` di Schema.md), jangan tampilkan seolah data asli
- Klaim angka (jumlah klien, tahun berdiri, dsb) hanya boleh ditampilkan kalau memang akurat dan bisa dipertanggungjawabkan tim Web4Go

## 4. Git & Version Control
- Satu branch per fitur/section, contoh: `feature/hero-section`, `feature/pricing-section`
- Commit message pakai format conventional commits: `feat:`, `fix:`, `style:`, `docs:`, `refactor:`
- Jangan langsung push ke branch utama, review dulu lewat pull request minimal oleh satu anggota tim lain

## 5. Performance Rules
- Lazy load gambar yang berada di bawah fold (di luar viewport awal)
- Animasi hanya pakai properti `transform` dan `opacity` supaya GPU-accelerated, hindari animasi `width`/`height`/`top`/`left` langsung
- Kompres semua aset gambar sebelum dipakai, prioritaskan format modern (WebP/AVIF) kalau memungkinkan

## 6. Aksesibilitas
- Semua gambar wajib punya `alt` text yang deskriptif
- Kontras warna teks terhadap background minimal memenuhi standar WCAG AA
- Semua tombol dan link harus bisa diakses via keyboard (tab-able, ada focus state yang terlihat)

## 7. Checklist Sebelum Deploy
- [ ] Cek tampilan di breakpoint mobile, tablet, desktop
- [ ] Cek di minimal 2 browser berbeda (Chrome dan Firefox/Safari)
- [ ] Jalankan Lighthouse audit (performance, accessibility, SEO, best practices)
- [ ] Pastikan semua tombol CTA (WhatsApp/kontak) berfungsi dan mengarah ke nomor/link yang benar
- [ ] Review ulang semua copywriting, tidak ada typo atau klaim yang tidak akurat
