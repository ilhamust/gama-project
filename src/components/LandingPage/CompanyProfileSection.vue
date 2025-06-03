<template>
  <section class="bg-white py-20 px-6 md:px-16 overflow-hidden relative">
    <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
      <!-- Gambar -->
      <div class="relative" data-aos="fade-right">
        <img src="/src/assets/images/profil-gama.jpg" alt="GAMA Profile" class="rounded-xl w-full shadow-lg" />

        <!-- Kartu Visi & Misi - di atas gambar -->
        <div class="absolute -bottom-6 right-4 w-full max-w-md grid grid-cols-2 gap-4" data-aos="fade-up">
          <div class="bg-green-700 text-white p-4 rounded-lg shadow-md">
            <h3 class="font-semibold text-base mb-1">Visi Kami</h3>
            <p class="text-sm">Menjadi mitra utama petani Indonesia dalam membangun pertanian berkelanjutan.</p>
          </div>
          <div class="bg-green-100 text-green-900 p-4 rounded-lg shadow-md">
            <h3 class="font-semibold text-base mb-1">Misi Kami</h3>
            <p class="text-sm">Memberikan solusi asuransi, edukasi, dan teknologi bagi petani modern.</p>
          </div>
        </div>
      </div>

      <!-- Konten -->
      <div data-aos="fade-left" class="space-y-6">
        <p class="text-sm uppercase text-green-700 tracking-wide font-semibold">Siapa Kami</p>
        <h2 class="text-3xl md:text-4xl font-bold text-gray-800 leading-snug">
          Komitmen GAMA Untuk Petani Indonesia
        </h2>
        <p class="text-gray-600 text-base md:text-lg">
          GAMA adalah perusahaan yang fokus membantu petani dengan asuransi pertanian, diskon alat tani, serta edukasi dan konsultasi berbasis digital.
          Kami hadir untuk menjawab tantangan pertanian modern dengan pendekatan yang inklusif, aman, dan terpercaya.
        </p>

        <!-- Tombol -->
        <router-link
          to="/tentang-kami"
          class="inline-block mt-4 border border-green-700 text-green-700 px-6 py-2 rounded hover:bg-green-700 hover:text-white transition"
          data-aos="fade-up"
        >
          Lihat Selengkapnya
        </router-link>
      </div>
    </div>
  </section>
</template>

<script setup>
import AOS from 'aos'
import 'aos/dist/aos.css'
import { onMounted } from 'vue'

onMounted(() => {
  AOS.init({
    duration: 800,
    once: true
  })
})
</script>
