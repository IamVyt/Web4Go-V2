# Architecture - Web4Go Website

## 1. Tech Stack
- **Framework:** React 18+ dengan TypeScript
- **Routing:** React Router (react-router-dom), wajib karena situs ini multi-halaman (6 halaman utama + subhalaman)
- **Styling:** Vanilla CSS dengan CSS custom properties (variabel) untuk design tokens
- **Animasi:** CSS transitions/animations + custom hooks (IntersectionObserver untuk scroll reveals, rAF untuk canvas effects)
- **Icon:** Inline SVG components
- **Build Tool:** Vite
- **Backend:** Express.js + SQLite (form submissions)
- **Konten Blog (v1):** disimpan sebagai data statis TypeScript (atau file Markdown yang di-parse saat build), belum pakai headless CMS. Bisa upgrade ke CMS (Sanity/Contentful/sejenisnya) di iterasi berikutnya kalau volume artikel makin banyak

## 2. Struktur Folder (usulan)
```
web4go-website/
├── public/
│   └── assets/
│       ├── images/
│       └── icons/
├── src/
│   ├── components/
│   │   ├── ui/
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── Container.tsx
│   │   │   └── SectionHeading.tsx
│   │   ├── layout/
│   │   │   ├── Navbar.tsx
│   │   │   ├── NavDropdown.tsx
│   │   │   └── Footer.tsx
│   │   └── sections/
│   │       ├── HeroSection.tsx
│   │       ├── ServicesPreviewSection.tsx
│   │       ├── PortfolioPreviewSection.tsx
│   │       ├── TestimonialsPreviewSection.tsx
│   │       └── CtaSection.tsx
│   ├── pages/
│   │   ├── HomePage.tsx
│   │   ├── AboutPage.tsx
│   │   ├── services/
│   │   │   ├── WebsiteServicePage.tsx
│   │   │   └── AppServicePage.tsx
│   │   ├── PortfolioPage.tsx
│   │   ├── PortfolioDetailPage.tsx
│   │   ├── BlogPage.tsx
│   │   ├── BlogPostPage.tsx
│   │   └── ContactPage.tsx
│   ├── router.tsx
│   ├── data/
│   │   ├── services.ts
│   │   ├── portfolio.ts
│   │   ├── testimonials.ts
│   │   ├── pricing.ts
│   │   ├── team.ts
│   │   ├── blog.ts
│   │   └── navigation.ts
│   ├── types/
│   │   └── index.ts
│   ├── lib/
│   │   ├── constants.ts (data, tokens, copy)
│   │   ├── adaptive-grid.ts (rem-based viewport scaling)
│   │   ├── scroll.ts (Lenis smooth scroll, scroll lock)
│   │   └── api.ts (fetch wrapper for backend)
│   ├── hooks/
│   │   ├── useReveal.ts (IntersectionObserver scroll reveals)
│   │   ├── useClock.ts (live clock)
│   │   └── useLiquidReveal.ts (canvas brush effect)
│   ├── context/
│   │   └── AppContext.tsx (global state: introReady, nav, modal, scroll)
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── tsconfig.json
├── vite.config.ts
└── package.json
```

## 3. Routing
| Path | Halaman |
|---|---|
| `/` | Home |
| `/tentang-kami` | Tentang Kami |
| `/layanan/jasa-pembuatan-website` | Detail layanan Jasa Pembuatan Website |
| `/layanan/pembuatan-aplikasi` | Detail layanan Pembuatan Aplikasi |
| `/portofolio` | List/galeri portofolio |
| `/portofolio/:slug` | Detail proyek (deskripsi, live demo, testimoni terkait) |
| `/blog` | List artikel blog |
| `/blog/:slug` | Detail artikel blog |
| `/kontak` | Halaman kontak |

> Dropdown "Layanan" di navbar langsung mengarah ke dua link di atas (Jasa Pembuatan Website & Pembuatan Aplikasi), tidak perlu halaman index `/layanan` kecuali tim memutuskan itu perlu untuk SEO atau UX.

## 4. Component Architecture
- `App.tsx` merender root layout (Navbar + `<Outlet />` dari React Router + Footer), sehingga Navbar dan Footer konsisten tampil di semua halaman
- `router.tsx` mendefinisikan seluruh route di atas, dibungkus satu layout route
- `Navbar.tsx` memanggil `NavDropdown.tsx` khusus untuk menu Layanan (hover atau klik untuk membuka submenu)
- Tiap halaman di `pages/` menyusun section/komponen dari `components/sections/` dan `components/ui/`, dengan data dari `data/`
- Semua tipe data terpusat di `types/index.ts` (lihat Schema.md)

## 5. Strategi Animasi
- Scroll reveal pakai `motion.div` dengan `whileInView` untuk fade in + slide up saat section masuk viewport, dipakai konsisten di semua halaman
- Dropdown menu Layanan pakai animasi fade + slide kecil saat terbuka/tertutup (`motion.div` dengan `AnimatePresence`)
- Hover animation (scale, border transition) pakai `motion.button` / `motion.div` atau class Tailwind `transition-all`
- Elemen scroll infinite (kalau ada, misal badge partner) pakai animasi CSS `@keyframes` murni, bukan Motion, supaya ringan
- Semua animasi utamakan `transform` dan `opacity`, hindari animasi yang memicu reflow/layout thrashing

## 6. State Management
- Mayoritas halaman statis, cukup `useState` lokal per komponen
- Contoh kebutuhan state: dropdown Layanan terbuka/tertutup, filter kategori di Portfolio Page, filter kategori/tag di Blog Page
- Belum perlu state management library (Zustand/Redux) di v1

## 7. Data Layer
- Semua konten (layanan, portofolio, testimoni, paket harga, tim, blog, navigasi) disimpan sebagai data statis bertipe TypeScript di folder `data/`
- Struktur tipe datanya mengikuti `Schema.md`
- Konten Blog dan Portofolio kemungkinan paling sering berubah, jadi paling prioritas untuk dipindah ke headless CMS di iterasi berikutnya kalau tim butuh update tanpa redeploy

## 8. Deployment (usulan)
- Frontend: Static hosting (Vercel/Netlify), build command `npm run build`, output folder `dist/`
- Backend: Node.js hosting (Railway/Render/VPS), menjalankan Express.js server
- Pastikan routing client-side (React Router) dikonfigurasi dengan benar di hosting (rewrite semua path ke `index.html`) supaya refresh di halaman selain Home tidak 404
- Environment variables untuk backend URL di production
