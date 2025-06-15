<template>
  <section class="bg-green-700 text-white py-20 px-6 md:px-16">
    <div class="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      <!-- Deskripsi Kontak -->
      <div data-aos="fade-right">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">Hubungi Kami</h2>
        <p class="text-white/80 text-base md:text-lg">
          Punya pertanyaan atau ingin tahu lebih lanjut tentang layanan kami? Isi form berikut atau hubungi kami langsung.
        </p>
        <ul class="mt-6 space-y-2 text-white/90">
          <li><i class="fas fa-map-marker-alt mr-2"></i>Jl. Ringroad Barat, Sleman, Yogyakarta</li>
          <li><i class="fas fa-envelope mr-2"></i>gama@gmail.com</li>
          <li><i class="fas fa-phone mr-2"></i>+62 881 8548 476</li>
        </ul>
      </div>

      <!-- Form Kontak -->
      <form @submit.prevent="handleSubmit" class="bg-white rounded-xl p-6 text-green-800 shadow-md" data-aos="fade-left">
        <div class="mb-4">
          <label class="block mb-1 font-medium">Nama</label>
          <input v-model="form.name" type="text" class="w-full border border-green-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500" required />
        </div>
        <div class="mb-4">
          <label class="block mb-1 font-medium">Email</label>
          <input v-model="form.email" type="email" class="w-full border border-green-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500" required />
        </div>
        <div class="mb-4">
          <label class="block mb-1 font-medium">Pesan</label>
          <textarea v-model="form.message" rows="4" class="w-full border border-green-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500" required></textarea>
        </div>
        <button type="submit" class="bg-green-600 text-white px-5 py-2 rounded hover:bg-green-700 transition">
          Kirim Pesan
        </button>
      </form>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const form = ref({
  name: '',
  email: '',
  message: ''
})

function handleSubmit() {
  alert(`Pesan dari ${form.value.name} berhasil dikirim!`)
  form.value = { name: '', email: '', message: '' }
}
</script>

<style scoped>
input, textarea {
  font-family: inherit;
}
</style>
