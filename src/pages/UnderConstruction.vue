<template>
  <section class="min-h-screen bg-gray-50  flex flex-col items-center justify-center px-4 text-center">
    <!-- Ilustrasi -->
    <img
      src=""
      alt="Sedang dalam pengembangan"
      class="w-56 md:w-64 mb-6"
    />

    <!-- Judul -->
    <h1 class="text-2xl md:text-3xl font-bold text-green-800 mb-2">
      Ups! Fitur Ini Masih Dalam Pengembangan
    </h1>

    <!-- Deskripsi -->
    <p class="text-gray-600 mb-6 max-w-md">
      Kami sedang menyempurnakan halaman ini agar dapat digunakan dengan optimal. Sabar ya!
      Untuk informasi lebih lanjut, hubungi kami.
    </p>

    <!-- Tombol Aksi -->
    <div class="flex flex-col sm:flex-row gap-4 justify-center">
      <a
        href="mailto:dev@gama.id"
        class="px-5 py-2 border border-green-700 text-green-700 hover:bg-green-700 hover:text-white rounded-md transition"
      >
        Hubungi Developer
      </a>
      <button
        @click="goBack"
        class="px-5 py-2 bg-green-700 text-white hover:bg-green-800 rounded-md transition"
      >
        Kembali ke Halaman Sebelumnya
      </button>
    </div>
  </section>
</template>

<script setup>
function goBack() {
  window.history.length > 1 ? window.history.back() : window.location.href = '/'
}
</script>
