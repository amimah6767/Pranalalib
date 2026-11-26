import { CatalogBook, RepositoryItem } from '../types/library';

export const HERO_LIBRARY_IMAGE = '/src/assets/images/hero_library_sanctuary_1795661176323.jpg';

export const CATALOG_BOOKS: CatalogBook[] = [
  {
    id: 'buku-arsitektur-kayu',
    kind: 'book',
    title: 'Arsitektur Kayu & Iklim Tropis Nusantara',
    subtitle: 'Kajian Konstruksi Rangka, Ventilasi Silang, dan Ketahanan Material Tradisional',
    author: 'Ir. Pramudya Wiratama, M.Ars.',
    publisher: 'Pustaka Cendekia Arsitektur',
    year: 2025,
    pages: 248,
    isbn: '978-623-8410-12-4',
    callNumber: '720.959 WIR a',
    category: 'Arsitektur & Ruang',
    coverImage: '/src/assets/images/cover_arsitektur_nusantara_1795661176861.jpg',
    coverTone: 'sage',
    synopsis:
      'Buku ini mengulas bagaimana teknik pertukangan kayu tradisional di kepulauan tropis menjawab tantangan kelembapan tinggi, curah hujan musiman, serta pergerakan udara alami tanpa bergantung pada pendingin mekanis.',
    chapters: [
      {
        id: 'bab-1',
        number: 'Bab I',
        title: 'Nalar Iklim dalam Bangunan Tropis Lembap',
        durationMinutes: 6,
        paragraphs: [
          'Setiap bentukan atap yang menjulang dan kolong rumah yang terangkat dari tanah di Nusantara bukanlah pilihan gaya semata, melainkan jawaban teknis atas dua kenyataan alam: radiasi matahari sepanjang tahun dan kelembapan udara yang kerap melampaui delapan puluh persen.',
          'Dalam pembacaan ruang modern, bangunan yang nyaman sering kali disamakan dengan ruang tertutup berpendingin udara. Padahal, arsitektur vernakular telah lama menunjukkan bahwa kenyamanan termal dapat dicapai melalui pengendalian bayangan, pemilihan material berkapasitas panas rendah, serta bukaan silang yang terarah.',
          'Kayu keras pilihan seperti jati, ulin, dan merbau menyimpan kelenturan struktural sekaligus pori-pori alami yang tidak menyimpan panas berlebih. Ketika malam tiba, suhu permukaan kayu turun jauh lebih cepat dibandingkan dinding beton masif, sehingga ruang dalam kembali sejuk bagi penghuninya.',
        ],
        pullQuote:
          'Bangunan tropis yang bijak tidak melawan angin dan hujan, melainkan menuntun keduanya menjadi bagian dari keseharian ruang.',
        footnote:
          'Catatan 1: Pengukuran lapangan pada tiga rumah panggung di pesisir Sulawesi dan Jawa Tengah menunjukkan selisih suhu dalam ruangan hingga 3,4 derajat Celsius lebih rendah dibanding bangunan berdinding bata tanpa ventilasi atap.',
      },
      {
        id: 'bab-2',
        number: 'Bab II',
        title: 'Sistem Sambungan Tanpa Paku dan Kelenturan Gempa',
        durationMinutes: 7,
        paragraphs: [
          'Di sepanjang jalur cincin api, kekakuan struktur justru menjadi titik rapuh. Para tukang kayu masa lampau mengembangkan sistem purus dan lubang yang diperkuat pasak kayu—sebuah mekanisme sambungan yang memungkinkan rangka bergeser tipis saat menerima gaya lateral gempa tanpa mematahkan balok utama.',
          'Pada umpak batu yang menopang tiang utama, bangunan berdiri melalui tumpuan gravitasi yang terukur. Ketika getaran tanah datang, kaki tiang dapat bergeser sejenak di atas batu datar, menyerap energi kinetik, lalu kembali stabil tanpa meruntuhkan struktur atap.',
          'Dokumentasi struktur rangka pada bab ini memetakan dua belas variasi sambungan pasak yang masih dapat diadaptasi untuk bangunan ruang baca publik, balai warga, dan pavilion pendidikan berbiaya perawatan rendah.',
        ],
        footnote:
          'Catatan 2: Istilah purus merujuk pada lidah kayu yang dibentuk pada ujung balok untuk masuk presisi ke dalam lubang kolom.',
      },
      {
        id: 'bab-3',
        number: 'Bab III',
        title: 'Kisi-Kisi Cahaya dan Kenyamanan Visual Ruang Baca',
        durationMinutes: 5,
        paragraphs: [
          'Cahaya matahari tropis membawa energi sekaligus silau yang melelahkan mata bila masuk secara langsung ke bidang baca. Oleh karena itu, teritisan atap yang lebar dan jalusi kayu miring berfungsi menyaring cahaya langit menjadi pantulan lembut yang merata.',
          'Kisi-kisi vertikal dengan jarak celah terukur memecah terik siang menjadi ritme bayangan yang menenangkan. Dalam konteks perpustakaan modern, penerapan prinsip kisi-kisi kayu ini membantu pembaca bertahan berjam-jam di meja baca tanpa ketegangan mata.',
        ],
      },
    ],
  },
  {
    id: 'buku-ekologi-pesisir',
    kind: 'book',
    title: 'Ekologi Pesisir & Sabuk Hijau Bakau',
    subtitle: 'Dinamika Ekosistem Payau, Mitigasi Abrasi, dan Pengetahuan Masyarakat Pantai',
    author: 'Dr. Ratna Kusumawardhani',
    publisher: 'Balai Pustaka Lingkungan Maritim',
    year: 2024,
    pages: 312,
    isbn: '978-623-7790-45-1',
    callNumber: '577.69 KUS e',
    category: 'Ekologi & Lingkungan',
    coverImage: '/src/assets/images/cover_ekologi_pesisir_1795661176891.jpg',
    coverTone: 'slate',
    synopsis:
      'Monograf lengkap mengenai peran hutan mangrove sebagai benteng alami garis pantai, penyimpan karbon biru, serta ruang hidup bersama antara biota laut dan komunitas nelayan.',
    chapters: [
      {
        id: 'bab-1',
        number: 'Bab I',
        title: 'Akar Tunjang di Perbatasan Darat dan Laut',
        durationMinutes: 6,
        paragraphs: [
          'Di zona pasang surut tempat air tawar sungai bertemu gelombang asin lautan, tumbuh vegetasi yang menguasai seni bertahan dalam ketidakpastian. Akar tunjang bakau mencengkeram lumpur lunak, memecah energi ombak sebelum menghantam tanggul tambak dan permukiman.',
          'Lebih dari sekadar pepohonan pantai, sabuk hijau mangrove merupakan arsitektur biologis yang menahan sedimen. Setiap jengkal lumpur yang terperangkap di antara belitan akar menjadi daratan baru yang memperpanjang umur garis pantai selama puluhan tahun.',
        ],
        pullQuote:
          'Menjaga lima puluh meter hutan bakau di tepi pantai jauh lebih murah dan berkelanjutan daripada membangun ratusan meter beton pemecah gelombang.',
        footnote:
          'Catatan 1: Data pemantauan pesisir utara Jawa menunjukkan penurunan kecepatan arus gelombang hingga 65 persen setelah melewati jalur bakau selebar 30 meter.',
      },
      {
        id: 'bab-2',
        number: 'Bab II',
        title: 'Karbon Biru dan Siklus Nutrien Muara',
        durationMinutes: 6,
        paragraphs: [
          'Sedimen anoksik di bawah tegakan mangrove menyimpan cadangan karbon organik dalam jumlah jauh lebih padat dibandingkan hutan daratan tropis. Daun yang gugur membusuk perlahan, membentuk detritus yang menghidupi kepiting bakau, udang, dan anakan ikan karang.',
          'Ketika ekosistem ini terganggu oleh konversi lahan jangka pendek, karbon yang tersimpan selama ratusan tahun terlepas kembali ke atmosfer, sementara rantai pangan perikanan pesisir menyusut drastis.',
        ],
      },
      {
        id: 'bab-3',
        number: 'Bab III',
        title: 'Silvofishery: Jalan Tengah Konservasi dan Ekonomi',
        durationMinutes: 5,
        paragraphs: [
          'Pemulihan pesisir tidak akan bertahan apabila memisahkan warga dari sumber penghidupannya. Pola wanamina atau silvofishery memadukan kolam budidaya ikan bandeng dan kepiting di sela-sela tegakan bakau yang tetap terjaga.',
          'Dengan menjaga rasio tutupan pohon minimal enam puluh persen di area tambak, kualitas air tetap jernih oleh penyaringan alami akar, sehingga risiko kegagalan panen akibat penyakit dapat ditekan secara signifikan.',
        ],
      },
    ],
  },
  {
    id: 'buku-sastra-sejarah',
    kind: 'book',
    title: 'Jejak Aksara di Persimpangan Niaga',
    subtitle: 'Sejarah Naskah Pesisir, Surat Dagang, dan Jaringan Literasi Abad XVII–XIX',
    author: 'Prof. Hendra Wijaya Kusuma',
    publisher: 'Penerbit Pranala Historika',
    year: 2025,
    pages: 286,
    isbn: '978-623-9021-08-7',
    callNumber: '899.221 WIJ j',
    category: 'Sastra & Sejarah',
    coverImage: '/src/assets/images/cover_sastra_sejarah_1795661177587.jpg',
    coverTone: 'terracotta',
    synopsis:
      'Penelusuran terhadap tradisi tulis di kota-kota pelabuhan Nusantara yang mempertemukan juru tulis istana, nakhoda niaga, dan penyair lintas bahasa dalam lembar kertas berwatermark Eropa hingga dluwang lokal.',
    chapters: [
      {
        id: 'bab-1',
        number: 'Bab I',
        title: 'Pelabuhan sebagai Ruang Pertemuan Aksara',
        durationMinutes: 6,
        paragraphs: [
          'Sebelum mesin cetak menyebar luas di abad kesembilan belas, pelabuhan bukan hanya tempat bertukarnya rempah, kain sutra, dan keramik. Di balai syahbandar dan langgar pesisir, naskah-naskah syair, undang-undang laut, serta surat perjanjian dagang disalin berulang kali dengan tangan.',
          'Keberadaan ragam aksara—Jawi, Pegon, Jawa, Bugis-Makassar, hingga Latin awal—menunjukkan masyarakat pesisir yang terbiasa membaca dunia dalam berbagai sistem tanda. Seorang juru tulis yang cakap kerap bertindak sekaligus sebagai penerjemah diplomatik.',
        ],
        pullQuote:
          'Dari lembar kertas yang dibawa kapal niaga, kita membaca bukan sekadar daftar barang dagangan, melainkan cara masyarakat masa lalu merumuskan keadilan.',
      },
      {
        id: 'bab-2',
        number: 'Bab II',
        title: 'Dluwang, Kertas Eropa, dan Tinta Alam',
        durationMinutes: 7,
        paragraphs: [
          'Kertas dluwang yang dibuat dari kulit kayu pohon saeh memiliki serat panjang yang kuat dan permukaan hangat bagi ujung pena bambu. Meskipun kertas buatan pabrik Belanda dan Inggris mulai masuk melalui jalur dagang, para penyalin naskah di pedalaman tetap menghargai ketahanan dluwang terhadap kelembapan.',
          'Tinta diracik dari jelaga lampu minyak yang dicampur getah pohon akasia atau air perasan kulit buah tertentu, menghasilkan warna hitam kecokelatan yang tetap terbaca jelas hingga dua abad kemudian.',
        ],
        footnote:
          'Catatan 1: Koleksi naskah berbahan dluwang yang terawat dengan baik memiliki pH kertas mendekati netral, lebih stabil daripada kertas bubur kayu industri abad ke-20.',
      },
      {
        id: 'bab-3',
        number: 'Bab III',
        title: 'Merawat Ingatan Tertulis di Era Daring',
        durationMinutes: 5,
        paragraphs: [
          'Digitalisasi arsip memberi kesempatan bagi pembaca masa kini untuk membuka kembali lembaran naskah langka tanpa menyentuh kertas aslinya yang rapuh. Namun, akses daring menuntut etika baca yang sadar konteks: menjaga keutuhan teks, mencatat rujukan secara jujur, serta menghormati hak pelestarian lembaga penyimpan.',
        ],
      },
    ],
  },
  {
    id: 'buku-filsafat-ilmu',
    kind: 'book',
    title: 'Nalar Kosmos & Etika Pengetahuan',
    subtitle: 'Pengantar Sejarah Pemikiran Sains, Astronomi Klasik, dan Tanggung Jawab Ilmiah',
    author: 'Dra. Sekar Ayu Paramita, M.Hum.',
    publisher: 'Lembaga Kajian Humaniora Terbuka',
    year: 2026,
    pages: 218,
    isbn: '978-623-8514-33-0',
    callNumber: '121.09 PAR n',
    category: 'Filsafat & Sains',
    coverImage: '/src/assets/images/cover_filsafat_ilmu_1795661177647.jpg',
    coverTone: 'bronze',
    synopsis:
      'Refleksi jernih mengenai bagaimana manusia menyusun alat ukur langit, merumuskan metode pembuktian, dan mempertanyakan batas moral dari pengetahuan yang terus berkembang.',
    chapters: [
      {
        id: 'bab-1',
        number: 'Bab I',
        title: 'Dari Astrolab ke Observatorium Modern',
        durationMinutes: 6,
        paragraphs: [
          'Sejak ribuan tahun lalu, langit malam adalah perpustakaan terbuka pertama bagi umat manusia. Pelaut membaca rasi bintang untuk menentukan haluan pulang, sementara petani menandai pergeseran bayangan matahari untuk memulai musim tanam.',
          'Astrolab kuningan yang terukir presisi bukan hanya perkakas astronomi, melainkan perwujudan keyakinan bahwa semesta memiliki keteraturan matematis yang dapat dipelajari oleh nalar yang sabar.',
        ],
        pullQuote:
          'Ilmu pengetahuan selalu bermula dari rasa takjub yang disertai kerendahan hati untuk menguji ulang apa yang kita kira sudah pasti.',
      },
      {
        id: 'bab-2',
        number: 'Bab II',
        title: 'Metode Keraguan dan Kejujuran Data',
        durationMinutes: 6,
        paragraphs: [
          'Kekuatan sains tidak terletak pada kemampuannya memberi jawaban mutlak dalam sekejap, melainkan pada kesediaannya mengoreksi diri ketika bukti baru ditemukan. Catatan pengamatan yang gagal sering kali sama berharganya dengan penemuan yang berhasil.',
          'Di tengah derasnya arus informasi cepat, ketekunan memeriksa sumber primer, mencatat keterbatasan penelitian, dan mengakui kesalahan metodologis adalah fondasi utama integritas akademik.',
        ],
      },
      {
        id: 'bab-3',
        number: 'Bab III',
        title: 'Pengetahuan sebagai Barang Publik',
        durationMinutes: 5,
        paragraphs: [
          'Perpustakaan berperan sebagai penjaga agar pengetahuan tidak terkurung menjadi komoditas eksklusif. Dengan menyediakan ruang baca terbuka yang dapat diakses lintas generasi, masyarakat membangun nalar bersama yang kritis, tenang, dan berakar pada bukti.',
        ],
      },
    ],
  },
  {
    id: 'buku-ragam-tenun',
    kind: 'book',
    title: 'Kamus Visual Ragam Hias Tenun Timur',
    subtitle: 'Simbolisme Motif, Pewarna Alam, dan Narasi Lisan Perempuan Penenun',
    author: 'Nirmala Sari & Tim Dokumentasi Budaya',
    publisher: 'Penerbit Wastra Nusantara',
    year: 2024,
    pages: 196,
    isbn: '978-623-6102-77-9',
    callNumber: '746.14 SAR k',
    category: 'Sosial & Budaya',
    coverTone: 'bronze',
    synopsis:
      'Inventarisasi motif ikat dan songket dari kawasan timur kepulauan, menelusuri bahan pewarna akar mengkudu, tarum indigo, hingga makna sosial di balik setiap helai benang.',
    chapters: [
      {
        id: 'bab-1',
        number: 'Bab I',
        title: 'Membaca Kain sebagai Teks Sosial',
        durationMinutes: 5,
        paragraphs: [
          'Setiap motif pada selembar kain tenun ikat membawa ingatan kolektif komunitas pembuatnya. Garis belah ketupat, figur kuda, hingga sulur tumbuhan laut berfungsi sebagai penanda silsilah, doa keselamatan, serta pengingat hubungan harmonis dengan leluhur dan alam.',
          'Proses pembuatannya tidak mengenal ketergesaan: mulai dari memintal kapas, mengikat benang dengan serat gebang, mencelup berulang ke dalam rendaman nila dan mengkudu, hingga menenun di alat tenun gedogan yang bertumpu pada pinggang penenun.',
        ],
        pullQuote:
          'Dalam sehelai tenun pewarna alam, waktu tidak dihitung dengan jam, melainkan dengan kesabaran menunggu warna meresap hingga ke inti serat.',
      },
      {
        id: 'bab-2',
        number: 'Bab II',
        title: 'Kimia Alami dari Kebun Pewarna',
        durationMinutes: 6,
        paragraphs: [
          'Biru indigo diperoleh dari fermentasi daun tarum yang dicampur kapur sirih, sedangkan merah hangat lahir dari kulit akar mengkudu yang dipadukan dengan kemiri bakar dan minyak jarak sebagai pengikat warna alami.',
          'Pengetahuan proporsi bahan pewarna ini diwariskan secara lisan dan praktik langsung dari ibu kepada anak perempuan, membentuk laboratorium botani rakyat yang ramah lingkungan karena limbah pencelupannya kembali menyuburkan tanah.',
        ],
      },
    ],
  },
  {
    id: 'buku-tata-subak',
    kind: 'book',
    title: 'Pengantar Tata Kelola Air Subak Modern',
    subtitle: 'Harmoni Ekologi Pertanian, Hukum Adat Irigasi, dan Tantangan Alih Fungsi Lahan',
    author: 'Dr. I Wayan Sudarma',
    publisher: 'Pustaka Agraria Lestari',
    year: 2025,
    pages: 230,
    isbn: '978-623-7088-19-3',
    callNumber: '631.58 SUD p',
    category: 'Ekologi & Lingkungan',
    coverTone: 'sage',
    synopsis:
      'Analisis mendalam tentang sistem pengairan kolektif berbasis keadilan sosial yang telah teruji ratusan tahun, serta relevansinya bagi ketahanan pangan dan tata air daerah aliran sungai.',
    chapters: [
      {
        id: 'bab-1',
        number: 'Bab I',
        title: 'Keadilan Pembagian Air dari Hulu ke Hilir',
        durationMinutes: 6,
        paragraphs: [
          'Sistem irigasi tradisional subak bekerja melalui prinsip transparansi yang sederhana namun tegas: setiap petani mengetahui jatah airnya melalui takik kayu pengukur bernama tektek yang dipasang pada saluran pembagi.',
          'Penjadwalan tanam serentak antar-kelompok sawah bukan sekadar ritual koordinasi, melainkan strategi ekologi terpadu untuk memutus siklus hama tikus dan wereng secara alami tanpa ketergantungan penuh pada pestisida kimia.',
        ],
        pullQuote:
          'Air yang mengalir di parit sawah bukan milik perorangan, melainkan amanah bersama yang dijaga melalui musyawarah.',
      },
      {
        id: 'bab-2',
        number: 'Bab II',
        title: 'Menjaga Ruang Hijau di Tengah Tekanan Urbanisasi',
        durationMinutes: 5,
        paragraphs: [
          'Ketika kawasan permukiman dan pariwisata berkembang pesat, saluran irigasi kerap terpotong atau tercemar limbah domestik. Kajian ini menawarkan model perlindungan zona penyangga pertanian serta insentif jasa ekosistem agar generasi muda tetap melihat pertanian berkelanjutan sebagai pilihan masa depan yang bermartabat.',
        ],
      },
    ],
  },
];

export const REPOSITORY_ITEMS: RepositoryItem[] = [
  {
    id: 'rep-ruang-baca-publik',
    kind: 'repository',
    repoCode: 'PP-REP-2026-008',
    type: 'Jurnal Kajian',
    title: 'Adaptasi Ruang Baca Publik di Kota Menengah Jawa Tengah: Studi Kasus Kenyamanan Termal dan Aksesibilitas',
    authors: 'Larasati Ningrum, M.T. & Bagus Santoso, S.Sos.',
    institution: 'Pusat Studi Tata Kota & Literasi',
    department: 'Jurnal Perencanaan Wilayah & Ruang Publik Vol. 14(1)',
    year: 2026,
    pages: 24,
    abstract:
      'Penelitian ini mengevaluasi kinerja ruang baca perpustakaan daerah di tiga kota menengah di Jawa Tengah dari aspek pencahayaan alami, akustik, serta aksesibilitas bagi penyandang disabilitas dan lansia. Hasil observasi menunjukkan bahwa integrasi taman baca semi-terbuka dan tata letak rak rendah meningkatkan durasi kunjungan pembaca hingga 42 persen.',
    keywords: ['Ruang Baca Publik', 'Aksesibilitas', 'Kenyamanan Termal', 'Perpustakaan Daerah'],
    citationApa:
      'Ningrum, L., & Santoso, B. (2026). Adaptasi Ruang Baca Publik di Kota Menengah Jawa Tengah: Studi Kasus Kenyamanan Termal dan Aksesibilitas. Jurnal Perencanaan Wilayah & Ruang Publik, 14(1), 1-24. Pranala Pustaka.',
    sections: [
      {
        id: 'abstrak-pendahuluan',
        number: '01',
        title: 'Pendahuluan & Latar Belakang',
        durationMinutes: 5,
        paragraphs: [
          'Perpustakaan umum daerah di Indonesia menghadapi pergeseran peran yang signifikan dalam satu dekade terakhir. Tidak lagi sekadar gudang peminjaman buku cetak, perpustakaan kini dituntut hadir sebagai ruang ketiga yang aman, tenang, dan inklusif bagi pelajar, pekerja lepas, peneliti independen, serta warga lanjut usia.',
          'Namun, banyak gedung perpustakaan yang dibangun pada era 1990-an masih mengandalkan ruang tertutup dengan pencahayaan lampu neon berlebih dan jarak antar-rak yang sempit. Kondisi ini kerap memicu kelelahan visual dan membatasi pergerakan pengguna kursi roda.',
          'Kajian lapangan ini dilaksanakan di Surakarta, Salatiga, dan Magelang untuk merumuskan pedoman renovasi ringan yang hemat energi namun berdampak langsung pada kualitas pengalaman membaca warga.',
        ],
        footnote:
          'Pengukuran tingkat pencahayaan menggunakan luxmeter terkalibrasi pada pukul 09.00, 12.00, dan 15.00 WIB di 18 titik meja baca.',
      },
      {
        id: 'metodologi-temuan',
        number: '02',
        title: 'Metodologi & Temuan Utama',
        durationMinutes: 6,
        paragraphs: [
          'Pengumpulan data menggabungkan pengukuran fisik ruang (suhu, kelembapan relatif, tingkat kebisingan desibel, dan iluminasi meja baca) dengan kuesioner persepsi kenyamanan terhadap 240 pengunjung aktif selama enam minggu.',
          'Ruang baca yang menggunakan dinding berlubang kerawang di sisi timur serta warna cat dinding krem redup mencatat keluhan silau paling rendah (kurang dari 8 persen responden), dibandingkan ruang dengan dinding kaca penuh tanpa peneduh.',
          'Selain itu, penempatan jalur ramp landai dengan kemiringan 1:12 dan penyediaan meja baca berketinggian fleksibel meningkatkan keterlibatan pengunjung lansia dan penyandang disabilitas secara nyata.',
        ],
        pullQuote:
          'Kenyamanan ruang baca lahir dari kesederhanaan proporsi: cahaya yang lembut, jarak pandang yang lega, dan ketiadaan kebisingan mekanis.',
      },
      {
        id: 'kesimpulan',
        number: '03',
        title: 'Kesimpulan & Rekomendasi Desain',
        durationMinutes: 4,
        paragraphs: [
          'Perbaikan kualitas ruang baca publik tidak selalu menuntut pembangunan gedung baru. Penataan ulang orientasi meja tegak lurus terhadap jendela, penggantian warna permukaan meja menjadi kayu matte anti-silau, serta penyediaan akses baca digital di lokasi merupakan langkah strategis yang dapat segera diterapkan oleh pengelola perpustakaan kota menengah.',
        ],
      },
    ],
  },
  {
    id: 'rep-lamun-tomini',
    kind: 'repository',
    repoCode: 'PP-REP-2025-042',
    type: 'Tesis',
    title: 'Pemetaan Keanekaragaman Hayati Padang Lamun sebagai Penyangga Pangan Pesisir di Teluk Tomini',
    authors: 'Fajar Ramadhan Putra, S.Kel.',
    institution: 'Fakultas Ilmu Kelautan dan Perikanan',
    department: 'Program Magister Pengelolaan Sumberdaya Pesisir',
    year: 2025,
    pages: 118,
    abstract:
      'Tesis ini memetakan distribusi tujuh spesies lamun di perairan dangkal Teluk Tomini menggunakan transek kuadrat dan citra penginderaan jauh resolusi menengah, serta menganalisis keterkaitannya dengan hasil tangkapan ikan baronang masyarakat setempat.',
    keywords: ['Padang Lamun', 'Teluk Tomini', 'Keanekaragaman Hayati', 'Perikanan Pesisir'],
    citationApa:
      'Putra, F. R. (2025). Pemetaan Keanekaragaman Hayati Padang Lamun sebagai Penyangga Pangan Pesisir di Teluk Tomini [Tesis Magister]. Pranala Pustaka Repositori.',
    sections: [
      {
        id: 'bab-1',
        number: '01',
        title: 'Urgensi Ekosistem Padang Lamun',
        durationMinutes: 5,
        paragraphs: [
          'Dibandingkan terumbu karang dan hutan mangrove, padang lamun sering kali terlewat dari perhatian publik karena letaknya yang terendam di perairan dangkal berlumpur-pasir. Padahal, ekosistem ini merupakan daerah asuhan krusial bagi puluhan spesies ikan konsumsi bernilai ekonomi penting bagi nelayan tradisional.',
          'Di Teluk Tomini, perubahan arus sedimen akibat pembukaan lahan di daratan mulai mengancam kejernihan air di beberapa teluk kecil, menurunkan kemampuan fotosintesis lamun pada kedalaman lebih dari empat meter.',
        ],
      },
      {
        id: 'bab-2',
        number: '02',
        title: 'Distribusi Spesies dan Pola Pemanfaatan Nelayan',
        durationMinutes: 6,
        paragraphs: [
          'Survei pada 12 stasiun pengamatan mengidentifikasi dominasi Enhalus acoroides dan Thalassia hemprichii dengan persentase tutupan berkisar antara 48 hingga 76 persen. Zona dengan tutupan di atas 60 persen menunjukkan kelimpahan juvenil ikan tiga kali lipat lebih tinggi.',
          'Wawancara mendalam bersama tetua nelayan menunjukkan adanya aturan tidak tertulis mengenai larangan penambatan perahu bermesin tepat di tengah hamparan lamun subur serta pembagian musim tangkap alat ramah lingkungan.',
        ],
      },
    ],
  },
  {
    id: 'rep-pelestarian-naskah',
    kind: 'repository',
    repoCode: 'PP-REP-2025-019',
    type: 'Monograf Riset',
    title: 'Pelestarian Naskah Kertas Eropa Abad ke-19 di Arsip Daerah: Protokol Konservasi Preventif Non-Invasif',
    authors: 'Dra. Wulandari Kusumaningtyas & Tim Konservasi Kertas',
    institution: 'Balai Pelestarian Dokumen & Arsip Nusantara',
    department: 'Divisi Konservasi Manuskrip',
    year: 2025,
    pages: 84,
    abstract:
      'Panduan teknis konservasi preventif bagi pustakawan daerah dalam menangani naskah berbahan kertas rag-paper dan tinta besi galik yang mengalami oksidasi, termasuk standar ruang simpan bebas asam serta prosedur pemindaian tanpa tekanan jilid.',
    keywords: ['Konservasi Naskah', 'Tinta Besi Galik', 'Arsip Daerah', 'Digitalisasi'],
    citationApa:
      'Kusumaningtyas, W., & Tim Konservasi Kertas. (2025). Pelestarian Naskah Kertas Eropa Abad ke-19 di Arsip Daerah: Protokol Konservasi Preventif Non-Invasif. Balai Pelestarian Dokumen & Arsip Nusantara.',
    sections: [
      {
        id: 'bagian-1',
        number: '01',
        title: 'Karakteristik Tinta Besi Galik dan Kerapuhan Serat',
        durationMinutes: 5,
        paragraphs: [
          'Sebagian besar surat resmi dan buku catatan administrasi abad kesembilan belas ditulis menggunakan tinta besi galik yang diracik dari tanin buah oak dan fero sulfat. Seiring berjalannya waktu dan fluktuasi kelembapan udara, ion besi bebas memicu reaksi oksidasi yang membakar serat kertas di sekitar goresan huruf.',
          'Oleh karena itu, langkah penyelamatan pertama bukanlah penambalan tergesa-gesa dengan pita perekat modern, melainkan stabilisasi iklim mikro ruang simpan pada suhu 20–22 derajat Celsius dengan kelembapan relatif terkendali di kisaran 45–50 persen.',
        ],
      },
      {
        id: 'bagian-2',
        number: '02',
        title: 'Pemindaian Overhead dan Akses Baca Daring',
        durationMinutes: 5,
        paragraphs: [
          'Naskah dengan punggung jilid yang kaku dilarang keras ditekan rata pada pemindai datar konvensional karena berisiko mematahkan benang jahit asli. Penggunaan penyangga buku berbentuk huruf V dengan sudut bukaan maksimal 110 derajat dan kamera overhead resolusi tinggi memastikan dokumen terekam utuh tanpa stres fisik.',
          'Hasil reproduksi digital kemudian disajikan dalam ruang baca web berproteksi agar peneliti di seluruh Indonesia dapat mengkaji isi naskah setiap saat tanpa harus meminjam fisik dokumen asli.',
        ],
      },
    ],
  },
  {
    id: 'rep-pencahayaan-perpustakaan',
    kind: 'repository',
    repoCode: 'PP-REP-2024-103',
    type: 'Skripsi',
    title: 'Efisiensi Pencahayaan Alami pada Bangunan Perpustakaan Tropis Menggunakan Simulasi Bukaan Atap',
    authors: 'Dimas Aditya Pratama',
    institution: 'Departemen Teknik Arsitektur',
    department: 'Program Sarjana Arsitektur',
    year: 2024,
    pages: 92,
    abstract:
      'Studi komputasional dan model skala untuk mengoptimalkan masuknya cahaya langit tidak langsung melalui clerestory menghadap utara-selatan pada ruang koleksi perpustakaan kampus.',
    keywords: ['Pencahayaan Alami', 'Clerestory', 'Arsitektur Perpustakaan', 'Efisiensi Energi'],
    citationApa:
      'Pratama, D. A. (2024). Efisiensi Pencahayaan Alami pada Bangunan Perpustakaan Tropis Menggunakan Simulasi Bukaan Atap [Skripsi]. Pranala Pustaka Repositori.',
    sections: [
      {
        id: 'bagian-1',
        number: '01',
        title: 'Tantangan Distribusi Cahaya pada Ruang Koleksi Luas',
        durationMinutes: 5,
        paragraphs: [
          'Ruang perpustakaan yang dalam sering kali mengalami ketimpangan pencahayaan: area dekat jendela terlalu terang dan panas, sementara area rak buku di bagian tengah menjadi gelap sehingga membutuhkan penerangan buatan sepanjang hari.',
          'Dengan memanfaatkan bukaan atap bertingkat atau clerestory yang dilengkapi sirip pemantul cahaya berwarna terang, sinar langit dapat diarahkan ke plafon dan disebarkan secara lembut ke bagian tengah ruangan.',
        ],
      },
      {
        id: 'bagian-2',
        number: '02',
        title: 'Hasil Simulasi dan Penghematan Beban Listrik',
        durationMinutes: 4,
        paragraphs: [
          'Simulasi tahunan menunjukkan bahwa kombinasi orientasi bukaan utara-selatan dan rasio bukaan 15 persen dari luas lantai mampu memenuhi standar kenyamanan baca 300 lux selama 78 persen jam operasional siang hari, menurunkan konsumsi listrik penerangan hingga 54 persen.',
        ],
      },
    ],
  },
  {
    id: 'rep-literasi-bahasa-ibu',
    kind: 'repository',
    repoCode: 'PP-REP-2024-087',
    type: 'Jurnal Kajian',
    title: 'Bahasa Ibu dan Literasi Digital Generasi Muda di Wilayah Pedalaman Kalimantan',
    authors: 'Dr. Yohanes B. Kalang & Mei Ling, M.Pd.',
    institution: 'Institut Kajian Bahasa & Kebudayaan Daerah',
    department: 'Jurnal Pendidikan Bahasa Nusantara Vol. 9(2)',
    year: 2024,
    pages: 30,
    abstract:
      'Kajian etnografi mengenai bagaimana penyediaan cerita rakyat dwibahasa pada platform baca web sederhana membantu siswa sekolah dasar mempertahankan penguasaan bahasa ibu sekaligus meningkatkan minat baca.',
    keywords: ['Bahasa Ibu', 'Literasi Digital', 'Cerita Rakyat', 'Pendidikan Dasar'],
    citationApa:
      'Kalang, Y. B., & Ling, M. (2024). Bahasa Ibu dan Literasi Digital Generasi Muda di Wilayah Pedalaman Kalimantan. Jurnal Pendidikan Bahasa Nusantara, 9(2), 112-141.',
    sections: [
      {
        id: 'bagian-1',
        number: '01',
        title: 'Jembatan Antara Tradisi Lisan dan Layar Digital',
        durationMinutes: 5,
        paragraphs: [
          'Kesenjangan bahan bacaan berbahasa daerah sering menjadi faktor menurunnya kecakapan generasi muda dalam menuturkan kosakata khas lingkungan sekitar mereka. Anak-anak terbiasa mengakses gawai, tetapi jarang menemukan konten yang merefleksikan kisah, nama sungai, dan kearifan kampung halaman mereka.',
          'Melalui kerja sama guru sekolah dasar dan tetua adat, tiga puluh cerita lisan ditranskripsikan ke dalam format buku bacaan daring dwibahasa yang ringan dimuat meski pada koneksi seluler terbatas.',
        ],
      },
      {
        id: 'bagian-2',
        number: '02',
        title: 'Dampak Terhadap Kebiasaan Membaca di Sekolah',
        durationMinutes: 4,
        paragraphs: [
          'Evaluasi setelah satu semester menunjukkan peningkatan pemahaman bacaan siswa sebesar 28 persen serta munculnya keterlibatan aktif orang tua dalam membacakan kembali kisah lokal bersama anak-anak di rumah.',
        ],
      },
    ],
  },
  {
    id: 'rep-catatan-rempah',
    kind: 'repository',
    repoCode: 'PP-REP-2023-055',
    type: 'Naskah Arsip',
    title: 'Transkripsi & Anotasi: Catatan Perdagangan Rempah dan Pelabuhan Kuno Pantai Utara Abad XVIII',
    authors: 'Tim Filologi Pranala Pustaka (Penyunting: Dr. Ahmad Fauzan)',
    institution: 'Koleksi Khusus Arsip Maritim',
    department: 'Seri Sumber Primer Sejarah Niaga',
    year: 2023,
    pages: 68,
    abstract:
      'Edisi suntingan teks lengkap beserta catatan kaki historis atas buku catatan syahbandar pelabuhan kecil abad kedelapan belas yang merekam jenis komoditas, ukuran kapal niaga, serta tarif bea pelabuhan.',
    keywords: ['Sejarah Maritim', 'Pelabuhan Kuno', 'Naskah Arsip', 'Filologi'],
    citationApa:
      'Fauzan, A. (Peny.). (2023). Transkripsi & Anotasi: Catatan Perdagangan Rempah dan Pelabuhan Kuno Pantai Utara Abad XVIII. Koleksi Khusus Arsip Maritim Pranala Pustaka.',
    sections: [
      {
        id: 'bagian-1',
        number: '01',
        title: 'Pengantar Naskah dan Kondisi Fisik Sumber',
        durationMinutes: 5,
        paragraphs: [
          'Naskah asli terdiri atas tiga puluh empat folio kertas berwatermark gambar mahkota yang tersimpan dalam jilid kulit kambing tipis. Tulisan menggunakan aksara Pegon dan angka Arab-Melayu dengan kerapian konsisten, menandakan penulisnya merupakan juru catat resmi pelabuhan.',
          'Daftar barang yang paling sering muncul antara lain lada hitam, cengkih, gula kelapa, garam halus, beras, serta barang tembikar yang dibawa jung kecil dari perairan barat.',
        ],
      },
      {
        id: 'bagian-2',
        number: '02',
        title: 'Etika Transaksi dan Jaminan Keselamatan Nakhoda',
        durationMinutes: 5,
        paragraphs: [
          'Salah satu pasal penting di bagian akhir catatan mengatur kewajiban syahbandar melindungi awak kapal asing yang mengalami kerusakan layar akibat angin barat. Barang muatan dicatat di gudang pelabuhan dan baru boleh dilepas setelah kapal selesai diperbaiki atau pemilik sah melapor.',
        ],
      },
    ],
  },
];
