<template>
  <Layout>
    <section class="bg-white py-16 px-6 md:px-16">
      <div class="max-w-7xl mx-auto text-center mb-16">
        <h1 class="text-4xl font-bold text-green-700">Produk Asuransi GAMA</h1>
        <p class="text-gray-600 mt-2 max-w-2xl mx-auto">
          Kami hadir untuk melindungi petani Indonesia dari risiko usaha tani dengan berbagai produk andalan.
        </p>
      </div>

      <div class="space-y-24">
        <!-- Loop Produk -->
        <div
          v-for="(item, index) in produk"
          :key="index"
          class="grid md:grid-cols-2 gap-10 items-center"
          :class="{ 'md:flex-row-reverse': index % 2 === 1 }"
          data-aos="fade-up"
        >
          <!-- Gambar -->
          <div>
            <img :src="item.image" :alt="item.title" class="w-full rounded-lg shadow-lg" />
          </div>

          <!-- Konten -->
          <div>
            <h2 class="text-2xl font-semibold text-green-700 mb-4">{{ item.title }}</h2>
            <ul class="space-y-2 mb-6 text-gray-700">
              <li v-for="(benefit, i) in item.benefits" :key="i" class="flex items-start gap-2">
                <i class="fas fa-check-circle text-green-600 mt-1"></i>
                <span>{{ benefit }}</span>
              </li>
            </ul>
            <router-link
              :to="item.link"
              class="inline-block bg-green-700 text-white px-6 py-2 rounded hover:bg-green-800 transition"
            >
              Ajukan Sekarang
            </router-link>
          </div>
        </div>
      </div>
    </section>
  </Layout>
</template>

<script setup>

const produk = [
  {
    title: 'Asuransi Gagal Panen',
    image: '/images/gagal-panen.png',
    link: '/pengajuan/gagal-panen',
    benefits: [
      'Melindungi dari banjir, kekeringan, hama & penyakit',
      'Menjamin ganti rugi biaya usaha tani',
      'Didukung oleh pemerintah dan mitra terpercaya',
    ],
  },
  {
    title: 'Asuransi Harga Komoditas',
    image: '/images/harga-komoditas.png',
    link: '/pengajuan/harga-komoditas',
    benefits: [
      'Melindungi dari fluktuasi harga pasar saat panen',
      'Menjamin kestabilan pendapatan petani',
      'Cocok untuk komoditas musiman seperti cabai & padi',
    ],
  },
  {
    title: 'Asuransi Alat Tani',
    image: '/images/alat-tani.png',
    link: '/pengajuan/alat-tani',
    benefits: [
      'Perlindungan terhadap kerusakan alat seperti traktor & pompa',
      'Ganti rugi biaya perbaikan atau penggantian',
      'Membantu kelancaran operasional tani',
    ],
  },
]
</script>

<style scoped>
/* Tambahkan animasi masuk pakai AOS */
</style>
