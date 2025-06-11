<template>
  <section class="bg-white py-16 px-6 md:px-16">
    <div class="max-w-7xl mx-auto">
      <!-- Judul -->
      <div class="text-center mb-10">
        <h2 class="text-3xl md:text-4xl font-bold text-green-700 mb-2">Berita Pertanian</h2>
        <p class="text-gray-600 max-w-2xl mx-auto">
          Update dan informasi terbaru seputar pertanian, teknologi, dan kebijakan.
        </p>
      </div>

      <!-- Grid 2 Kolom -->
      <div class="flex flex-col lg:flex-row gap-12">
        <!-- Kolom Kiri: Berita Utama -->
        <div class="flex-1 space-y-10">
          <div
            v-for="(item, index) in news"
            :key="index"
            class="group flex flex-col md:flex-row gap-6"
            data-aos="fade-up"
          >
            <!-- Gambar -->
            <div class="overflow-hidden rounded-lg w-full md:w-60 h-44">
              <img
                :src="item.image"
                alt="Gambar berita"
                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            <!-- Konten -->
            <div class="flex-1">
              <p class="text-sm text-gray-400 mb-1">{{ item.date }}</p>
              <h3
                class="text-lg font-semibold text-gray-800 mb-2 transition-colors duration-300 group-hover:text-green-700"
              >
                {{ item.title }}
              </h3>
              <p class="text-sm text-gray-600">{{ item.summary }}</p>
              <router-link
                :to="item.link"
                class="mt-3 inline-block text-green-700 hover:underline text-sm font-medium"
              >
                Baca Selengkapnya →
              </router-link>
            </div>
          </div>
        </div>

        <!-- Kolom Kanan: Berita Populer -->
        <aside class="w-full lg:w-1/3 space-y-6">
          <h4 class="text-xl font-semibold text-green-700">Berita Populer</h4>
          <ul class="space-y-4">
            <li
              v-for="(item, index) in popularNews"
              :key="index"
              class="border-l-4 border-green-700 pl-4 hover:bg-green-50 transition"
            >
              <router-link :to="item.link" class="text-sm text-gray-800 font-medium hover:text-green-700">
                {{ item.title }}
              </router-link>
            </li>
          </ul>
        </aside>
      </div>
    </div>
  </section>
</template>

<script setup>
const news = [
  {
    title: 'Petani Terlindungi dari Cuaca Ekstrem dengan Asuransi Gagal Panen',
    summary:
      'Musim tanam kini tak lagi menegangkan. Dengan Asuransi Gagal Panen, petani tetap mendapat perlindungan saat tanaman gagal panen akibat banjir, kekeringan, atau serangan hama. Pemerintah dan mitra asuransi siap bantu petani bangkit!',
    date: '5 Juni 2025',
    image: '/images/news1.jpg',
    // link: '/berita/asuransi-cuaca-digital'
    link: '/under-construction'
  },
  {
    title: 'Harga Anjlok? Petani Tetap Aman Berkat Asuransi Harga Komoditas',
    summary:
      'Fluktuasi harga hasil panen tak perlu dikhawatirkan lagi. Asuransi Harga Komoditas hadir untuk menjaga kestabilan penghasilan petani saat harga pasar turun drastis. Solusi pasti untuk petani cerdas masa kini.',
    date: '4 Juni 2025',
    image: '/images/news2.jpg',
    // link: '/berita/asuransi-harga-komoditas'
    link: '/under-construction'
  },
  {
    title: 'Alat Tani Rusak? Kini Bisa Diasuransikan!',
    summary:
      'Asuransi Alat Tani memberikan perlindungan pada alat-alat penting pertanian Anda, mulai dari traktor, pompa air, hingga alat semprot. Kerusakan tak lagi jadi hambatan panen. Kerja tenang, hasil maksimal.',
    date: '3 Juni 2025',
    image: '/images/news3.jpg',
    // link: '/berita/asuransi-alat-tani'
    link: '/under-construction'
  }
]

const popularNews = [
  { title: 'Tren Asuransi Pertanian 2025', link: '/berita/tren-asuransi-pertanian' },
  { title: 'Cara Petani Muda Sukses di Era Digital', link: '/berita/petani-muda-digital' },
  { title: 'Penggunaan IoT dalam Irigasi Sawah', link: '/berita/iot-irigasi' },
  { title: 'GAMA Jalin Kerja Sama dengan Kementan', link: '/berita/kerjasama-gama-kementan' }
]
</script>
