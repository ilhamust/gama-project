<template>
  <section class="bg-gray-50 py-16 px-6 md:px-16">
    <div class="max-w-7xl mx-auto">
      <!-- Judul Utama -->
      <div class="text-center mb-10">
        <h2 class="text-3xl md:text-4xl font-bold text-green-700">Edukasi GAMA</h2>
        <p class="text-gray-600 max-w-2xl mx-auto">
          Belajar bertani modern bersama para pakar dan praktisi.
        </p>
      </div>

      <!-- Kelas Mini Section -->
      <div class="flex justify-between items-center mb-4">
        <h3 class="text-xl font-semibold text-gray-800">Kelas Mini</h3>
        <router-link to="/under-construction" class="text-green-700 font-medium hover:underline">Temukan Kelas Lainnya →</router-link>
        <!-- /edukasi/kelas-mini  -->
      </div>
      <div class="overflow-x-auto pb-6">
        <div class="flex gap-6 w-max">
          <div
            v-for="(kelas, index) in kelasList.slice(0, 3)"
            :key="index"
            class="min-w-[260px] bg-white border rounded-xl shadow hover:shadow-lg transition duration-300"
          >
            <img :src="kelas.image" :alt="kelas.title" class="w-full h-40 object-cover rounded-t-xl" />
            <div class="p-4">
              <router-link :to="kelas.link">
                <h3 class="text-md font-semibold text-gray-800 hover:text-green-700 transition">
                  {{ kelas.title }}
                </h3>
              </router-link>
              <div class="flex items-center text-sm text-gray-500 mt-2">
                <svg class="w-4 h-4 mr-1 text-green-700" fill="currentColor" viewBox="0 0 20 20"><path d="M10 10a3 3 0 100-6 3 3 0 000 6zM2 17a6 6 0 0112 0H2z"/></svg>
                <span>{{ kelas.pengajar }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Tanya Pakar Section -->
      <div class="flex justify-between items-center mb-4 mt-10">
        <h3 class="text-xl font-semibold text-gray-800">Tanya Pakar</h3>
        <router-link to="/under-construction" class="text-green-700 font-medium hover:underline">Temukan Kelas Lainnya →</router-link>
        <!-- /edukasi/tanya-pakar -->
      </div>
      <div class="overflow-x-auto pb-6">
        <div class="flex gap-6 w-max">
          <div
            v-for="(kelas, index) in kelasList.slice(3, 7)"
            :key="index"
            class="min-w-[260px] bg-white border rounded-xl shadow hover:shadow-lg transition duration-300"
          >
            <img :src="kelas.image" :alt="kelas.title" class="w-full h-40 object-cover rounded-t-xl" />
            <div class="p-4">
              <router-link :to="kelas.link">
                <h3 class="text-md font-semibold text-gray-800 hover:text-green-700 transition">
                  {{ kelas.title }}
                </h3>
              </router-link>
              <div class="flex items-center text-sm text-gray-500 mt-2">
                <svg class="w-4 h-4 mr-1 text-green-700" fill="currentColor" viewBox="0 0 20 20"><path d="M10 10a3 3 0 100-6 3 3 0 000 6zM2 17a6 6 0 0112 0H2z"/></svg>
                <span>{{ kelas.pengajar }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Video Interaktif Section -->
      <div class="flex justify-between items-center mb-4 mt-10">
        <h3 class="text-xl font-semibold text-gray-800">Video Interaktif</h3>
        <router-link to="/under-construction" class="text-green-700 font-medium hover:underline">Temukan Kelas Lainnya →</router-link>
        <!-- /edukasi/video -->
      </div>
      <div class="overflow-x-auto pb-6">
        <div class="flex gap-6 w-max">
          <div
            v-for="(kelas, index) in kelasList.slice(7, 10)"
            :key="index"
            class="min-w-[260px] bg-white border rounded-xl shadow hover:shadow-lg transition duration-300"
          >
            <img :src="kelas.image" :alt="kelas.title" class="w-full h-40 object-cover rounded-t-xl" />
            <div class="p-4">
              <router-link :to="kelas.link">
                <h3 class="text-md font-semibold text-gray-800 hover:text-green-700 transition">
                  {{ kelas.title }}
                </h3>
              </router-link>
              <div class="flex items-center text-sm text-gray-500 mt-2">
                <svg class="w-4 h-4 mr-1 text-green-700" fill="currentColor" viewBox="0 0 20 20"><path d="M10 10a3 3 0 100-6 3 3 0 000 6zM2 17a6 6 0 0112 0H2z"/></svg>
                <span>{{ kelas.pengajar }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
const kelasList = [
  {
    title: 'Tani Tangguh: Mengelola Risiko di Lahan Sendiri',
    image: '/images/kelas1.png',
    pengajar: 'Pakar Agronomi',
    // link: '/edukasi/tani-tangguh'
    link: '/under-construction'
  },
  {
    title: 'Cerdas Digital: Petani Melek Teknologi',
    image: '/images/kelas2.png',
    pengajar: 'Pakar Teknologi',
    // link: '/edukasi/cerdas-digital'
    link: '/under-construction'
  },
  {
    title: 'Tani Untung: Strategi Bertani yang Produktif & Berkelanjutan',
    image: '/images/kelas3.png',
    pengajar: 'Pakar Keuangan',
    // link: '/edukasi/tani-untung'
    link: '/under-construction'
  },
  {
    title: 'Pakar Agronomi',
    image: '/images/pakar1.png',
    pengajar: 'Pakar Agronomi',
    // link: '/edukasi/pakar-agronomi'
    link: '/under-construction'
  },
  {
    title: 'Pakar Iklim dan Cuaca',
    image: '/images/pakar2.png',
    pengajar: 'Pakar Iklim',
    // link: '/edukasi/pakar-cuaca'
    link: '/under-construction'
  },
  {
    title: 'Pakar Keuangan',
    image: '/images/pakar3.png',
    pengajar: 'Pakar Keuangan',
    // link: '/edukasi/pakar-keuangan'
    link: '/under-construction'
  },
  {
    title: 'Pakar Teknologi Pertanian',
    image: '/images/pakar4.png',
    pengajar: 'Pakar Teknologi',
    // link: '/edukasi/pakar-teknologi'
    link: '/under-construction'
  },
  {
    title: 'Panen Aman, Hati Tenang',
    image: '/images/video1.png',
    pengajar: 'Tim Edukasi GAMA',
    // link: '/edukasi/video-panen-aman'
    link: '/under-construction'
  },
  {
    title: 'Aplikasi GAMA: Panduan Praktis dari Sawah ke Layar',
    image: '/images/video2.png',
    pengajar: 'Tim Edukasi GAMA',
    // link: '/edukasi/video-panduan-gama'
    link: '/under-construction'
  },
  {
    title: 'Cuaca, Komoditas, dan Keputusan Bertani',
    image: '/images/video3.png',
    pengajar: 'Pakar Cuaca & Komoditas',
    // link: '/edukasi/video-cuaca-komoditas'
    link: '/under-construction'
  }
]
</script>
