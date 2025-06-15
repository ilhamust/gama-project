<template>
 <section class="bg-green-700 px-6 md:px-16 text-white py-20" id="product-section">
    <div class="max-w-7xl mx-auto w-full">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold mb-2" data-aos="fade-down">Produk Asuransi GAMA</h2>
        <p class="text-white/80 max-w-2xl mx-auto" data-aos="fade-down" data-aos-delay="200">
          Kami menyediakan perlindungan menyeluruh untuk mendukung aktivitas pertanian Anda.
        </p>
      </div>

      <!-- Kartu Produk -->
      <div class="flex flex-wrap justify-center gap-8" data-aos="fade-up" data-aos-delay="300">
        <div v-for="(product, index) in products" :key="index"
          class="bg-white text-green-800 rounded-xl shadow-md hover:shadow-xl transition transform hover:-translate-y-2 hover:bg-green-100 px-8 py-6 w-[300px] md:w-[360px] h-[300px] md:h-[230px] flex flex-col items-center justify-center text-center">
          <component :is="product.icon" class="w-12 h-12 mb-4 text-green-600" />
          <h3 class="text-xl font-semibold">{{ product.title }}</h3>
        </div>

      </div>

      <!-- Tombol Aksi -->
      <div class="text-center mt-12" data-aos="fade-up" data-aos-delay="500">
        <router-link to="/produk-asuransi"
          class="inline-block border border-white text-white px-6 py-2 rounded hover:bg-white hover:text-green-700 transition">
          Lihat Semua Produk
        </router-link>
      </div>
    </div>
  </section>
</template>

<script setup>
import AOS from 'aos'
import 'aos/dist/aos.css'
import { onMounted } from 'vue'
import {
  ShieldCheckIcon,
  CurrencyDollarIcon,
  WrenchScrewdriverIcon
} from '@heroicons/vue/24/solid'

onMounted(() => {
  AOS.init({
    duration: 800,
    once: true
  })
})

const products = [
  {
    title: 'Asuransi Gagal Panen',
    icon: ShieldCheckIcon
  },
  {
    title: 'Asuransi Harga Komoditas',
    icon: CurrencyDollarIcon
  },
  {
    title: 'Asuransi Alat Tani',
    icon: WrenchScrewdriverIcon
  }
]
</script>
