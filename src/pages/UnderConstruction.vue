<template>
  <section class="min-h-screen bg-white  flex flex-col items-center justify-center px-4 text-center">
    <!-- Ilustrasi -->
    <img
      src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif"
      alt="Sedang dalam pengembangan"
      class="w-72 md:w-[400px] lg:w-[480px]"
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
        href="https://wa.me/628818548476"
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
