# Kelly Adams — Home & CV (LinkedIn-style)

Versi ringkas dari template "Kelly" (BootstrapMade), disederhanakan menjadi **2 halaman saja**:
halaman **Home** dan halaman **CV** bergaya profil LinkedIn (cover banner + foto profil,
About, Experience, Education, Organization, Skills, Certificates, Languages, Contact).

Halaman yang tidak digunakan dari template asli (About, Services, Portfolio,
Portfolio Details, Contact, Starter Page) telah dihapus, begitu juga navigasi
dropdown, isotope filter, swiper slider, glightbox, dan AOS yang tidak lagi
diperlukan untuk dua halaman ini.

## Struktur folder

```
kelly-cv/
│── index.html          # Halaman Home
│── cv.html              # Halaman CV (gaya profil LinkedIn)
│── css/
│     style.css          # Semua styling kustom
│── js/
│     script.js          # Navbar aktif, fade-in scroll, scroll-to-top, dll.
│── assets/
│     profile.jpg        # Foto profil placeholder (ganti dengan foto asli)
│     cover-banner.jpg   # Banner cover pada halaman CV (opsional diganti)
│── README.md
```

## Cara pakai

1. Buka `index.html` langsung di browser — tidak perlu server atau build tool.
2. Bootstrap 5 dan Bootstrap Icons dimuat lewat CDN (perlu koneksi internet saat dibuka).
3. Ganti `assets/profile.jpg` dengan foto asli (disarankan rasio 1:1 / persegi).
4. Ganti `assets/cover-banner.jpg` bila ingin banner CV yang berbeda.
5. Untuk tombol **Download CV / Download PDF**, tambahkan file
   `assets/CV-Kelly-Adams.pdf` — tombol akan otomatis mengunduhnya.
   Selama file belum ada, tombol akan menampilkan pesan pengingat.
6. Ubah teks nama, profesi, pengalaman, pendidikan, dsb. langsung di
   `index.html` dan `cv.html` sesuai data Anda.

## Kustomisasi warna

Semua warna diatur lewat CSS variable di bagian atas `css/style.css`:

```css
--color-primary: #0A66C2;   /* biru khas LinkedIn */
--color-bg: #F3F6F8;
--color-text: #1D2226;
```

Ubah nilai-nilai ini untuk mengganti skema warna di seluruh halaman.
