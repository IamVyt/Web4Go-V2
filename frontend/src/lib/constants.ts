import type { PortfolioItem, ServiceItem, StatItem, CardItem, NavItem } from '../types';

export const ASSET_BASE_URL = 'https://api.getlayers.ai/storage/v1/object/public/public/assets/lumora-e8b711fc68';

export const HERO_BEFORE_SRC = '/hero/mascot_a.jpg';
export const HERO_AFTER_SRC = '/hero/mascot_b.jpg';

export const PALETTE = {
  bg: '#ffffff',
  text: '#111111',
  muted: '#f1f0ee',
  border: '#e6e5e2',
  dark: '#0a0a0a',
  accent: '#B4E50D',
  accentFrom: '#B4E50D',
  accentTo: '#8ab505',
  cardDark: '#0a0a0a',
  tagBorder: 'rgba(255, 255, 255, 0.25)',
} as const;

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    name: 'Jasa Pembuatan Website',
    category: 'Jasa',
    year: '2026',
    description: 'Tingkatkan kredibilitas & penjualan bisnis Anda sekarang dengan website profesional yang cepat, elegan, dan siap konversi.',
    tags: ['Landing Page', 'Company Profile', 'Toko Online'],
  },
  {
    name: 'Nova Finance',
    category: 'Product',
    year: '2024',
    description: 'A finance platform reimagined — clear data, calm interfaces, and effortless flows.',
    tags: ['Product Design', 'Web App', 'QA'],
  },
  {
    name: 'Helio Studio',
    category: 'Identity',
    year: '2023',
    description: 'A bold visual identity and art direction system built to scale across every surface.',
    tags: ['Brand Identity', 'Art Direction'],
  },
  {
    name: 'Pulse Health',
    category: 'Mobile',
    year: '2023',
    description: 'A wellness app grounded in research, shipped end to end from concept to release.',
    tags: ['Mobile App', 'UX Research', 'Development'],
  },
];

export const WORK_CATEGORIES = [
  { id: 'Jasa', label: 'Jasa', subtitle: 'Layanan Pembuatan Website' },
  { id: 'Product', label: 'Product', subtitle: 'Web Apps & UI Systems' },
  { id: 'Identity', label: 'Identity', subtitle: 'Visual & Art Direction' },
  { id: 'Mobile', label: 'Mobile', subtitle: 'iOS & Android Applications' },
] as const;

export const SERVICE_ITEMS: ServiceItem[] = [
  {
    index: '01',
    title: 'Blog Pribadi',
    description: 'Website personal branding, artikel, & portofolio karya kreatif.',
    details: 'Solusi ideal untuk content creator, penulis, praktisi, atau profesional yang ingin membangun personal branding kuat di internet. Dilengkapi dengan sistem manajemen artikel yang simpel, tampilan bersih & estetis, optimasi kecepatan, serta integrasi newsletter dan media sosial.',
    deliverables: ['Manajemen Artikel / CMS Praktis', 'Desain Minimalis & Fast Loading', 'Integrasi Media Sosial & Kontak', 'SEO Friendly untuk Google'],
  },
  {
    index: '02',
    title: 'Website Perusahaan',
    description: 'Website korporat modern untuk meningkatkan kredibilitas & prospek bisnis.',
    details: 'Dirancang khusus untuk perusahaan, CV, PT, startup, atau institusi yang membutuhkan profil bisnis profesional dan meyakinkan. Menampilkan layanan, portfolio klien, testimoni, profil tim, form kontak, dan integrasi WhatsApp instan untuk mendapatkan calon klien baru.',
    deliverables: ['Struktur Company Profile Lengkap', 'Lead Capture & Form WhatsApp', 'Desain Premium & Mobile Responsive', 'Optimasi Kecepatan & Keamanan SSL'],
  },
  {
    index: '03',
    title: 'Toko Online',
    description: 'Platform katalog produk & transaksi penjualan otomatis 24/7.',
    details: 'Website e-commerce lengkap dengan katalog produk terstruktur, sistem keranjang belanja (cart), kalkulasi ongkos kirim otomatis, dashboard manajemen pesanan, serta integrasi pembayaran modern atau checkout via WhatsApp langsung.',
    deliverables: ['Katalog Produk & Fitur Keranjang', 'Checkout Otomatis / WhatsApp', 'Hitung Ongkir Otomatis Ekspedisi', 'Dashboard Pengelolaan Produk'],
  },
  {
    index: '04',
    title: 'Website Donasi',
    description: 'Platform penggalangan dana & donasi online transparan dan aman.',
    details: 'Sistem donasi dan crowdfunding online untuk yayasan, lembaga sosial, masjid, komunitas, atau program kemanusiaan. Dilengkapi form donasi instan, progress bar capaian dana donasi, laporan donasi transparan, dan notifikasi konfirmasi donatur secara otomatis.',
    deliverables: ['Form Donasi Cepat & Multi-Metode', 'Progress Bar Target Donasi Real-time', 'Laporan & Transparansi Dana', 'Notifikasi Donatur via WhatsApp/Email'],
  },
];

export const TEAM_MEMBERS: import('../types').TeamMember[] = [
  {
    name: 'Firman',
    role: 'The Strategist',
    specialty: 'Strategy',
    quote: '"Memastikan setiap ide punya arah yang jelas, branding yang kuat, dan strategi yang relevan."',
    imageUrl: '/team/firman.jpg',
  },
  {
    name: 'Dwi',
    role: 'Technical Lead & System Builder',
    specialty: 'Architecture',
    quote: '"Arsitek di balik layar yang memastikan sistem website kokoh, efisien, dan siap skala besar."',
    imageUrl: '/team/dwi.jpg',
  },
  {
    name: 'Deva',
    role: 'Product & Design Lead',
    specialty: 'UI/UX Design',
    quote: '"Mengubah fungsi teknis menjadi pengalaman visual yang premium, estetik, dan intuitif."',
    imageUrl: '/team/deva.jpg',
  },
  {
    name: 'Vivit',
    role: 'Marketing & Research Lead',
    specialty: 'Research',
    quote: '"Garda depan dalam riset pasar dan inovasi produk untuk memastikan solusi tetap kompetitif."',
    imageUrl: '/team/vivit.jpg',
  },
];

export const STATS_DATA: StatItem[] = [
  { value: 150, suffix: '+', label: 'Projects delivered' },
  { value: 98, suffix: '%', label: 'Client retention' },
  { value: 12, suffix: '', label: 'Years of craft' },
  { value: 40, suffix: '+', label: 'Team members' },
];

export const TESTIMONIALS_DATA: import('../types').TestimonialItem[] = [
  {
    name: 'Leonardo C.',
    handle: '@sslhongkong',
    rating: 5,
    initials: 'LC',
    avatarBg: '#2563eb',
    content: 'Melebihi Ekspektasi, gak pelit ilmu, request yang diminta langsung direspond dengan cepat. Next project website akan tetap ke Web4Go, sukses selalu Web4Go!',
  },
  {
    name: 'Gufi Laura P.',
    handle: '@notarippat',
    rating: 5,
    initials: 'GL',
    avatarBg: '#db2777',
    content: 'Melebihi harapan saya, Web4Go sangat profesional, informatif, dan memenuhi ekspektasi saya. Thanks Web4Go. Semoga dapat bekerjasama kembali.',
  },
  {
    name: 'Andy L.',
    handle: '@ITSB',
    rating: 5,
    initials: 'AL',
    avatarBg: '#d97706',
    content: 'Keren banget, hasilnya diatas ekspektasi saya. Suka banget dengan pelayanannya, ramah, fast respon, dan jujur. Terima kasih banyak atas kerjasamanya! 🙏🙏🙏',
  },
];

export const CLIENT_PARTNERS_DATA: import('../types').ClientPartner[] = [
  { name: 'SATUTIM', sub: 'Sejuta Mahakarya', badge: 'ST' },
  { name: 'KBL', sub: 'PT Karsa Buana Lestari', badge: 'KB' },
  { name: 'MPW', sub: 'PT Multi Pratama Wijaya', badge: 'PW' },
  { name: 'SAP', sub: 'Law Firm', badge: 'SP' },
  { name: 'Bangun Oman', sub: 'Design Contractor', badge: 'BO' },
  { name: 'BMH', sub: 'Baitul Maal Hidayatullah', badge: 'BM' },
];

export const CARD_ITEMS: CardItem[] = [
  { caption: 'Conversion design', title: 'Crafted to convert.' },
  { caption: 'Engineering', title: 'Built to scale.' },
  { caption: 'Brand systems', title: 'Designed to last.' },
];

export const PARTNER_NAMES = ['Kaido', 'Northpeak', 'Vellum', 'Orbit', 'Brightline', 'Cobalt', 'Mesa'];

export const BLOG_ARTICLES: import('../types').BlogArticle[] = [
  {
    id: 'scalable-web-architecture',
    title: 'Membangun Arsitektur Web Skalabel untuk Startup & Bisnis Berkembang',
    subtitle: 'Panduan teknis mengenai decoupled stack, edge caching, dan optimasi performa modern.',
    category: 'Engineering',
    date: '16 Agustus, 2026',
    readTime: '6 min read',
    summary: 'Bedah tuntas arsitektur full-stack terdesentralisasi, manajemen state efisien, caching edge global, dan strategi deployment tanpa downtime.',
    imageUrl: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80',
    author: {
      name: 'Dwi',
      role: 'Technical Lead & System Builder',
      initials: 'DW',
      avatarUrl: '/team/dwi.jpg',
    },
    tags: ['Architecture', 'Performance', 'Full-Stack', 'Cloud'],
    infobox: {
      topic: 'Sistem Arsitektur Web',
      industry: 'Software Engineering & SaaS',
      difficulty: 'Intermediate — Advanced',
      targetAudience: 'Tech Leads, Developers & Founders',
    },
    sections: [
      {
        id: 'pendahuluan',
        heading: '1. Mengapa Skalabilitas Menjadi Kunci?',
        body: [
          'Dalam era digital saat ini, lonjakan pengguna yang cepat dapat menjadi pedang bermata dua jika infrastruktur website Anda rapuh. Website yang lambat atau mengalami crash di saat kampanye pemasaran puncak mengakibatkan kerugian konversi langsung dan hilangnya kepercayaan audiens.',
          'Di Web4Go, kami menerapkan pendekatan arsitektur berlapis (modular) yang memastikan setiap komponen—mulai dari front-end presentation hingga database querying—dapat diskalakan secara independen tanpa membebani server utama.',
        ],
        callout: 'Skalabilitas bukan hanya tentang menambah kapasitas RAM server, melainkan membangun kode yang efisien dan arsitektur data yang cerdas.',
      },
      {
        id: 'decoupled-architecture',
        heading: '2. Pendekatan Decoupled Front-End & Edge Caching',
        body: [
          'Dengan memisahkan lapisan UI dari backend database, front-end dapat dikompilasi menjadi aset statis yang didistribusikan ke ratusan titik Edge CDN di seluruh dunia. Hasilnya adalah response time di bawah 50ms untuk pengguna di belahan dunia mana pun.',
          'Data dinamis disinkronkan melalui asynchronous microservices atau GraphQL/REST API yang aman dan ringan, mengurangi beban compute hingga 80% dibandingkan sistem monolitik tradisional.',
        ],
        keyPoints: [
          'Edge Server Rendering (ESR) untuk konten dinamis berkecepatan instan.',
          'Optimasi payload bundle JavaScript dengan code-splitting presisi.',
          'Caching cerdas dengan stale-while-revalidate headers.',
        ],
      },
      {
        id: 'database-and-state',
        heading: '3. Manajemen State & Database Read/Write Splitting',
        body: [
          'Saat traffic melonjak, kemacetan hampir selalu terjadi pada lapisan database. Kami menerapkan pola read-replica dan redis caching untuk query yang sering diakses, sehingga operasi transaksi intensif tetap berjalan mulus.',
        ],
      },
    ],
    conclusion: 'Membangun arsitektur yang kuat sejak hari pertama menghemat ratusan jam waktu refactoring dan jutaan rupiah biaya infrastruktur saat bisnis Anda mulai scale up.',
  },
  {
    id: 'quiet-precision-in-design',
    title: 'The Art of Quiet Precision: Mengapa Desain Minimalis Meningkatkan Konversi',
    subtitle: 'Bagaimana mengurangi friksi visual dan menyusun hierarki tipografi mengarahkan tindakan pengguna secara alami.',
    category: 'Product Design',
    date: '10 Agustus, 2026',
    readTime: '5 min read',
    summary: 'Eksplorasi filosofi desain minimalis modern: ruang negatif, mikro-animasi halus, dan tipografi tegas yang mengalirkan pengguna ke tujuan bisnis.',
    imageUrl: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80',
    author: {
      name: 'Deva',
      role: 'Product & Design Lead',
      initials: 'DV',
      avatarUrl: '/team/deva.jpg',
    },
    tags: ['UI/UX Design', 'Conversion Rate', 'Typography', 'Micro-interactions'],
    infobox: {
      topic: 'Prinsip UI/UX & Konversi',
      industry: 'Product Design & Branding',
      difficulty: 'All Levels',
      targetAudience: 'Product Designers, Marketers, Founders',
    },
    sections: [
      {
        id: 'noise-vs-signal',
        heading: '1. Membedakan Sinyal dari Derau Visual (Noise vs Signal)',
        body: [
          'Banyak website gagal mengonversi pengunjung bukan karena kekurangan fitur, melainkan karena kelebihan elemen visual yang saling berebut perhatian. Ketika semua tombol berkedip dan warna bertabrakan, pengguna mengalami cognitive overload.',
          'Prinsip "Quiet Precision" berfokus pada menyajikan satu aksi utama yang jelas di setiap viewport, menggunakan ruang kosong (whitespace) sebagai pemandu mata pengunjung menuju value proposition Anda.',
        ],
        callout: 'Desain yang baik bukanlah ketika tidak ada lagi yang bisa ditambahkan, melainkan ketika tidak ada lagi yang perlu dihilangkan tanpa merusak esensinya.',
      },
      {
        id: 'micro-interactions',
        heading: '2. Peran Mikro-Interaksi dalam Membangun Kepercayaan',
        body: [
          'Animasi transisi yang halus (subtle easing curve) memberikan sensasi website yang hidup dan responsif. Respons instan saat kursor digerakkan atau tombol ditekan memberikan konfirmasi psikologis bahwa sistem bekerja dengan sempurna.',
        ],
        keyPoints: [
          'Gunakan kurva cubic-bezier yang natural (contoh: 0.16, 1, 0.3, 1).',
          'Pastikan durasi animasi tidak melebihi 350ms agar antarmuka tidak terasa lambat.',
          'Kontras warna aksen yang terarah (seperti aksen lime #B4E50D) hanya untuk titik konversi krusial.',
        ],
      },
    ],
    conclusion: 'Minimalisme bukan berarti membosankan; minimalisme adalah tentang kejelasan niat, kemewahan ruang, dan efisiensi komunikasi visual.',
  },
  {
    id: 'riset-vs-copy-paste',
    title: 'Membangun Aset Digital melalui Riset vs Sekadar Copy-Paste Template',
    subtitle: 'Dampak nyata pendekatan berbasis data dan riset pasar terhadap nilai jangka panjang bisnis Anda.',
    category: 'Filosofi & Riset',
    date: '04 Agustus, 2026',
    readTime: '7 min read',
    summary: 'Mengapa template pasaran seringkali gagal bersaing di search engine dan konversi, serta bagaimana riset audiens menciptakan aset digital autentik.',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    author: {
      name: 'Vivit',
      role: 'Marketing & Research Lead',
      initials: 'VT',
      avatarUrl: '/team/vivit.jpg',
    },
    tags: ['Market Research', 'SEO', 'Brand Identity', 'Digital Assets'],
    infobox: {
      topic: 'Riset Pasar & Diferensiasi Digital',
      industry: 'Business Strategy & Growth',
      difficulty: 'Beginner — Intermediate',
      targetAudience: 'Business Owners & Strategy Leaders',
    },
    sections: [
      {
        id: 'jebakan-template',
        heading: '1. Jebakan Template Instan',
        body: [
          'Di pasar yang dipenuhi ribuan website serupa, menggunakan template siap pakai membuat brand Anda tenggelam dalam kerumunan. Template sering kali membawa ratusan baris kode yang tidak perlu (bloatware), memperlambat loading, dan memiliki struktur SEO generik.',
          'Ketika website Anda terlihat sama persis dengan puluhan kompetitor, calon klien akan membandingkan Anda semata-mata berdasarkan harga termurah, bukan nilai keunggulan produk Anda.',
        ],
        callout: 'Aset digital Anda adalah representasi 24/7 dari kredibilitas perusahaan Anda. Investasikan pada diferensiasi yang nyata.',
      },
      {
        id: 'metodologi-riset',
        heading: '2. Metodologi Riset Web4Go',
        body: [
          'Setiap proyek kami diawali dengan riset mendalam terhadap tiga pilar: Analisis Pesaing (Competitive Landscape), Pola Pencarian Pengguna (Search Intent), dan Karakteristik Audiens (User Persona).',
          'Dari riset ini, kami menyusun narasi copywriting yang menjawab langsung keraguan calon pelanggan serta merancang arsitektur informasi yang memandu mereka menuju aksi pemesanan.',
        ],
        keyPoints: [
          'Audit menyeluruh kelemahan website kompetitor di industri target.',
          'Pemetaan keyword bernilai konversi tinggi (high buyer-intent keywords).',
          'Pengujian struktur navigasi dengan tes kemudahan pengguna.',
        ],
      },
    ],
    conclusion: 'Website bukan sekadar brosur online; website adalah mesin pertumbuhan yang bekerja lebih keras jika dibangun di atas fondasi riset yang akurat.',
  },
  {
    id: 'go-to-market-playbook',
    title: 'From Prototype to Scale: The Web4Go Studio Playbook',
    subtitle: 'Framework peluncuran produk digital dari tahap ide awal hingga skala pasar yang lebih luas.',
    category: 'Strategy',
    date: '28 Juli, 2026',
    readTime: '6 min read',
    summary: 'Langkah-langkah strategis dalam menyelaraskan desain produk, kelincahan development, dan storytelling brand sejak hari pertama peluncuran.',
    imageUrl: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80',
    author: {
      name: 'Firman',
      role: 'The Strategist',
      initials: 'FM',
      avatarUrl: '/team/firman.jpg',
    },
    tags: ['Go-to-Market', 'Startup', 'Roadmap', 'Strategy'],
    infobox: {
      topic: 'Peluncuran Produk & Go-to-Market',
      industry: 'Venture Strategy & Product Management',
      difficulty: 'Intermediate',
      targetAudience: 'Founders, Product Managers, CXOs',
    },
    sections: [
      {
        id: 'fase-discovery',
        heading: '1. Menemukan Titik Temu Antara Solusi dan Kebutuhan Pasar',
        body: [
          'Banyak produk gagal bukan karena coding yang buruk, melainkan karena membangun fitur yang tidak diinginkan oleh siapa pun. Framework kami membagi peluncuran menjadi sprint validasi cepat.',
          'Kami fokus meluncurkan versi MVP (Minimum Viable Product) yang memiliki sentuhan visual premium dan performa sempurna pada core feature utama.',
        ],
        callout: 'Kecepatan eksekusi yang dipadukan dengan kualitas visual tinggi menciptakan momentum awal yang sulit ditandingi.',
      },
      {
        id: 'skala-distribusi',
        heading: '2. Menyiapkan Infrastruktur untuk Pertumbuhan Eksponensial',
        body: [
          'Setelah validasi awal tercapai, fokus beralih ke otomatisasi funnel akuisisi, pelacakan analitik mendalam, dan integrasi CRM untuk memaksimalkan retensi pelanggan.',
        ],
        keyPoints: [
          'Tracking event analitik berbasis privasi pengguna.',
          'A/B testing pada elemen copywriting dan CTA tombol utama.',
          'Automasi onboarding email untuk retensi pengguna baru.',
        ],
      },
    ],
    conclusion: 'Strategi yang tepat adalah kompas yang memastikan setiap baris kode dan setiap pixel desain bermuara pada hasil bisnis yang terukur.',
  },
  {
    id: 'modern-web-security',
    title: 'Praktik Keamanan Web Modern: Melindungi Data & Integritas Pengguna',
    subtitle: 'Standar keamanan enterprise yang wajib diterapkan pada setiap platform web publik.',
    category: 'Engineering',
    date: '20 Juli, 2026',
    readTime: '5 min read',
    summary: 'Tinjauan mendalam mengenai Content Security Policy (CSP), proteksi serangan CSRF/XSS, enkripsi data end-to-end, dan hardening server.',
    imageUrl: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80',
    author: {
      name: 'Dwi',
      role: 'Technical Lead & System Builder',
      initials: 'DW',
      avatarUrl: '/team/dwi.jpg',
    },
    tags: ['Security', 'DevOps', 'Data Protection', 'Compliance'],
    infobox: {
      topic: 'Cybersecurity & Web Hardening',
      industry: 'Information Security & Infrastructure',
      difficulty: 'Advanced',
      targetAudience: 'Developers & DevOps Engineers',
    },
    sections: [
      {
        id: 'security-headers',
        heading: '1. Mengamankan Lapisan HTTP Header',
        body: [
          'Keamanan web dimulai dari konfigurasi header yang tepat. Mengimplementasikan Strict-Transport-Security (HSTS), X-Content-Type-Options, dan Content-Security-Policy (CSP) yang ketat memblokir 90% upaya injeksi skrip berbahaya.',
        ],
        callout: 'Keamanan bukan fitur tambahan; keamanan adalah fondasi arsitektur sejak baris kode pertama ditulis.',
      },
    ],
    conclusion: 'Menjaga keamanan data pengguna adalah bukti nyata komitmen profesionalisme dan integritas jangka panjang brand Anda.',
  },
  {
    id: 'seo-and-speed-optimization',
    title: 'Rahasia Kecepatan Loading 99+ dan SEO Organik Berkelanjutan',
    subtitle: 'Strategi teknis mencapai skor Core Web Vitals sempurna di Google Lighthouse.',
    category: 'Growth & SEO',
    date: '14 Juli, 2026',
    readTime: '5 min read',
    summary: 'Bagaimana kompresi gambar modern (AVIF/WebP), font subsetting, dan zero-layout shift mendongkrak peringkat website di hasil pencarian Google.',
    imageUrl: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&w=1200&q=80',
    author: {
      name: 'Vivit',
      role: 'Marketing & Research Lead',
      initials: 'VT',
      avatarUrl: '/team/vivit.jpg',
    },
    tags: ['Core Web Vitals', 'PageSpeed', 'Technical SEO', 'Conversion'],
    infobox: {
      topic: 'Core Web Vitals & Technical SEO',
      industry: 'Search Marketing & Performance',
      difficulty: 'Intermediate',
      targetAudience: 'Marketers, Developers, SEO Specialists',
    },
    sections: [
      {
        id: 'cwv-metrics',
        heading: '1. Memahami Tiga Metrik Utama Core Web Vitals',
        body: [
          'Google mengukur pengalaman pengguna melalui Largest Contentful Paint (LCP), Interaction to Next Paint (INP), dan Cumulative Layout Shift (CLS). Website dengan performa hijau di ketiga metrik ini terbukti mendapatkan prioritas ranking yang lebih tinggi.',
        ],
        keyPoints: [
          'Optimasi LCP di bawah 1.5 detik dengan preloading font dan critical CSS.',
          'Menghilangkan Layout Shift (CLS = 0) dengan mendefinisikan aspect-ratio eksplisit pada gambar.',
          'Mengurangi waktu eksekusi thread JavaScript agar INP berada di bawah 100ms.',
        ],
      },
    ],
    conclusion: 'Kecepatan adalah fitur utama. Setiap pengurangan 0.1 detik waktu muat meningkatkan rasio konversi hingga 8%.',
  },
];

export const FAQ_DATA: import('../types').FaqItem[] = [
  {
    id: 'faq-1',
    question: 'Apa yang membedakan Web4Go dari studio atau agensi digital lainnya?',
    answer: 'Kami membangun produk digital melalui riset mendalam, arsitektur sistem yang skalabel, dan desain visual presisi—bukan sekadar copy-paste template. Setiap aset yang kami buat dirancang khusus untuk mendorong konversi nyata, kecepatan akses maksimal, dan pertumbuhan bisnis jangka panjang.',
    category: 'Filosofi & Pendekatan',
  },
  {
    id: 'faq-2',
    question: 'Berapa lama estimasi waktu pengerjaan untuk sebuah proyek?',
    answer: 'Waktu pengerjaan disesuaikan dengan skala dan kompleksitas proyek. Untuk website profil bisnis atau landing page presisi berkisar antara 1–3 minggu. Sedangkan untuk aplikasi web kustom atau sistem enterprise berkisar antara 4–8 minggu dengan laporan progres berkala di setiap sprint.',
    category: 'Timeline & Pengerjaan',
  },
  {
    id: 'faq-3',
    question: 'Bagaimana alur kerja sama dari awal hingga peluncuran?',
    answer: 'Proses kami terbagi dalam 4 fase terstruktur: (1) Discovery & Research untuk membedah tujuan bisnis Anda, (2) UI/UX Design & Prototyping interaktif, (3) Clean Development & Rigorous QA Testing untuk performa bebas bug, serta (4) Deployment & Post-Launch Support.',
    category: 'Proses Kerja',
  },
  {
    id: 'faq-4',
    question: 'Apakah Web4Go menyediakan layanan pemeliharaan (maintenance) setelah website rilis?',
    answer: 'Tentu saja. Kami menyediakan paket pemeliharaan berkelanjutan mencakup pembaruan keamanan, backup berkala, optimasi performa server, monitoring uptime, serta penyesuaian konten atau penambahan fitur baru sesuai kebutuhan perkembangan bisnis Anda.',
    category: 'Layanan & Support',
  },
  {
    id: 'faq-5',
    question: 'Bagaimana cara memulai diskusi atau konsultasi proyek dengan tim Web4Go?',
    answer: 'Anda dapat langsung menekan tombol "Mulai Proyek" atau mengisi formulir kontak di website kami. Tim kami akan segera merespons dan menjadwalkan sesi konsultasi gratis untuk mendiskusikan visi, estimasi biaya, dan roadmap terbaik untuk proyek Anda.',
    category: 'Konsultasi & Biaya',
  },
];

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', target: 'home' },
  { label: 'Work', target: 'works' },
  { label: 'Services', target: 'services' },
  { label: 'Team', target: 'team' },
  { label: 'FAQ', target: 'faq' },
  { label: 'Articles', target: 'blog' },
  { label: 'Contact', target: 'contact' },
];

export const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];

export const LOADER_FILL_MS = 1300;
export const BRUSH_RADIUS = 143;
export const BRUSH_DECAY = 0.016;
