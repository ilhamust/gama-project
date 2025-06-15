<template>
  <section class="bg-white py-20 px-6 md:px-16 overflow-hidden relative">
    <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
      <!-- Gambar -->
      <div class="relative" data-aos="fade-right">
        <img src="/src/assets/images/profil-gama.jpg" alt="GAMA Profile" class="rounded-xl w-full shadow-lg" />
      </div>

      <!-- Konten -->
      <div data-aos="fade-left" class="space-y-6">
        <p class="text-sm uppercase text-green-700 tracking-wide font-semibold">Tentang GAMA</p>
        <h2 class="text-3xl md:text-4xl font-bold text-gray-800 leading-snug">
          GAMA, Garda Masyarakat Agraria
        </h2>
        <p class="text-gray-600 text-base md:text-lg">
          GAMA adalah platform asuransi pertanian yang hadir untuk melindungi petani Indonesia dari risiko gagal panen,
          fluktuasi harga komoditas, dan kerusakan alat tani. Kami menggabungkan teknologi digital dengan jaringan agen
          lapangan untuk menyediakan layanan asuransi yang cepat, mudah diakses, dan transparan.
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
