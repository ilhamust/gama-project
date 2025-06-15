<template>
  <section class="bg-white py-20 px-6 md:px-16">
    <div class="max-w-7xl mx-auto">
      <h2 class="text-3xl md:text-4xl font-bold text-center text-green-700 mb-12" data-aos="fade-down">
        Apa Kata Mereka
      </h2>

      <!-- Testimoni Carousel Looping -->
      <div class="overflow-hidden relative">
        <div class="whitespace-nowrap animate-slide hover:pause-animation">
          <div
            v-for="(item, index) in [...testimonials, ...testimonials]"
            :key="index"
            class="bg-green-50 border border-green-100 rounded-xl p-6 w-80 inline-block align-top card mx-2"
          >
            <p class="text-gray-700 text-sm leading-relaxed mb-4">“{{ item.review }}”</p>
            <div class="flex text-yellow-400 mb-4">
              <i class="fas fa-star" v-for="i in 5" :key="i"></i>
            </div>
            <div class="flex items-center gap-4">
              <img :src="item.avatar" alt="Avatar" class="w-12 h-12 rounded-full object-cover" />
              <div>
                <p class="font-semibold text-green-700">{{ item.name }}</p>
                <p class="text-xs text-gray-500">{{ item.role }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
const testimonials = [
  {
    name: 'Siti Rahma',
    role: 'Petani Padi, Magelang',
    review:
      'Asuransi dari GAMA sangat membantu saat sawah saya kebanjiran. Klaimnya cepat dan mudah!',
    avatar: 'https://i.pravatar.cc/100?img=12'
  },
  {
    name: 'Budi Santoso',
    role: 'Petani Jagung, Sleman',
    review:
      'Saya merasa lebih aman dengan asuransi harga komoditas. Terima kasih GAMA!',
    avatar: 'https://i.pravatar.cc/100?img=15'
  },
  {
    name: 'Dewi Kartika',
    role: 'Petani Sayur, Kulon Progo',
    review:
      'Alat semprot rusak bisa diasuransikan? GAMA luar biasa! Sekarang saya tidak khawatir lagi.',
    avatar: 'https://i.pravatar.cc/100?img=16'
  }
]
</script>

<style scoped>
@keyframes slide {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

.animate-slide {
  display: inline-flex;
  animation: slide 30s linear infinite;
}

.hover\:pause-animation:hover {
  animation-play-state: paused;
}

.card {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
}
</style>
