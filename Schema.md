# Data Schema - Web4Go Website

Semua tipe data di bawah ini idealnya disimpan di `src/types/index.ts` dan dipakai bareng data statis di folder `src/data/` (lihat Architecture.md).

## 1. NavItem (Navigasi)
```ts
export interface NavItem {
  label: string;
  path?: string;            // kosong kalau item ini cuma trigger dropdown
  children?: NavItem[];     // submenu, dipakai untuk "Layanan"
}
```
Contoh isi untuk menu "Layanan":
```ts
{
  label: "Layanan",
  children: [
    { label: "Jasa Pembuatan Website", path: "/layanan/jasa-pembuatan-website" },
    { label: "Pembuatan Aplikasi", path: "/layanan/pembuatan-aplikasi" },
  ],
}
```

## 2. Founder
```ts
export interface Founder {
  id: string;
  name: string;
  role: string;          // contoh: "The Strategist", "Technical Lead & System Builder"
  photoUrl: string;
  bio?: string;
  socialLinks?: {
    linkedin?: string;
    instagram?: string;
    github?: string;
  };
}
```

## 3. Service (Layanan)
```ts
export type ServiceGroup = "jasa-pembuatan-website" | "pembuatan-aplikasi";

export interface Service {
  id: string;
  group: ServiceGroup;      // menentukan service ini masuk halaman Layanan yang mana
  title: string;             // contoh: "Company Profile Website", "Mobile App Development"
  description: string;
  icon: string;              // nama icon dari lucide-react
  subCategory?: string;      // contoh: "company-profile" | "landing-page" | "ecommerce" | "maintenance" untuk group website
  startingPrice?: number;    // opsional, kalau mau ditampilkan "mulai dari"
}
```

## 4. PortfolioItem (Portofolio Proyek)
```ts
export interface PortfolioItem {
  id: string;
  slug: string;              // dipakai di route /portofolio/:slug
  title: string;
  category: string;          // contoh: "E-Commerce", "Company Profile", "Mobile App"
  imageUrl: string;
  description: string;
  liveDemoUrl?: string;      // tautan live demo proyek
  testimonialId?: string;    // relasi ke Testimonial, ditampilkan menyatu di halaman detail proyek ini
  isPlaceholder?: boolean;   // true kalau ini contoh/dummy, bukan proyek klien asli
}
```

## 5. Testimonial (Testimoni Klien)
```ts
export interface Testimonial {
  id: string;
  clientName: string;
  company?: string;
  rating: number;            // skala 1 - 5
  message: string;
  photoUrl?: string;
  isPlaceholder?: boolean;   // true kalau data contoh, belum dari klien asli
}
```
> Testimonial ditampilkan di dua tempat: preview singkat di Home, dan detail lengkap di halaman `/portofolio/:slug` lewat relasi `testimonialId` pada `PortfolioItem`.

## 6. PricingPackage (Paket Harga & Promo)
```ts
export interface PricingPackage {
  id: string;
  group: ServiceGroup;       // paket ini termasuk layanan website atau aplikasi
  name: string;               // contoh: "Paket Starter", "Paket Business"
  price: number;
  billingNote?: string;       // contoh: "per tahun", "sekali bayar"
  features: string[];
  isPromo?: boolean;
  promoLabel?: string;        // contoh: "Diskon 20%"
  isPopular?: boolean;
}
```

## 7. BlogPost (Blog)
```ts
export interface BlogPost {
  id: string;
  slug: string;                // dipakai di route /blog/:slug
  title: string;
  excerpt: string;             // ringkasan singkat untuk list artikel
  content: string;              // isi lengkap artikel (Markdown atau plain text)
  coverImageUrl: string;
  author: string;               // contoh: salah satu nama founder
  publishedAt: string;          // format ISO date, contoh "2026-08-14"
  tags?: string[];
  readingTimeMinutes?: number;
}
```

## 8. ContactInfo (Halaman Kontak & Footer)
```ts
export interface ContactInfo {
  whatsappNumber: string;
  email: string;
  address?: string;
  officeHours?: string;        // contoh: "Senin - Jumat, 09.00 - 17.00 WIB"
  mapEmbedUrl?: string;         // opsional, kalau mau tampilkan peta lokasi
  socialLinks: {
    instagram?: string;
    linkedin?: string;
    tiktok?: string;
  };
}
```

## 9. Catatan Penggunaan Data
- Field `isPlaceholder` di `PortfolioItem` dan `Testimonial` **wajib** diisi jujur. Kalau ada proyek/testimoni yang belum asli, tandai `true` supaya ada indikator visual (misal label "Contoh Proyek") dan tidak menyesatkan calon klien
- `liveDemoUrl` di `PortfolioItem` harus mengarah ke link yang benar-benar bisa diakses publik, jangan sampai broken link
- `testimonialId` di `PortfolioItem` harus konsisten dengan `id` di data `Testimonial`, supaya relasi antar data tidak putus
- `slug` di `PortfolioItem` dan `BlogPost` harus unik dan URL-friendly (huruf kecil, pakai tanda hubung, tanpa spasi atau karakter spesial)
- Semua harga di `PricingPackage` sebaiknya angka murni (number), formatting ke Rupiah dilakukan di level komponen, bukan di data
- Konten `BlogPost.content` sebaiknya ditulis orisinal oleh tim, bukan hasil copy-paste dari sumber lain (lihat Rules.md soal content rules)
