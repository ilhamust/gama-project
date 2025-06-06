<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/pagination'
import hero1 from '/src/assets/images/hero1.jpg'
import hero2 from '/src/assets/images/hero2.jpg'
import hero3 from '/src/assets/images/hero3.jpg'


const slides = [
  {
    image: hero1,
    title: 'Asuransi Gagal Panen',
    subtitle: 'Lindungi hasil panen Anda dari risiko cuaca ekstrem, hama, dan bencana alam. Panen aman, petani tenang.',
  },
  {
    image: hero2,
    title: 'Asuransi Alat Tani',
    subtitle: 'Perlindungan untuk traktor, pompa, dan alat pertanian lainnya dari kerusakan atau kehilangan. Alat terjaga, kerja lancar.',
  },
  {
    image: hero3,
    title: 'Asuransi Harga Komoditas',
    subtitle: 'Jaminan harga jual komoditas Anda tetap stabil. Harga anjlok, petani tetap untung.',
  }
]
</script>

<template>
  <Swiper
    :modules="[Autoplay, Pagination]"
    :slides-per-view="1"
    :loop="true"
    :autoplay="{ delay: 5000 }"
    :pagination="{ clickable: true }" 
    class="h-[90vh]"
  >
    <SwiperSlide v-for="(slide, index) in slides" :key="index">
      <div
        class="h-full bg-cover bg-center relative"
        :style="{ backgroundImage: `url(${slide.image})` }"
      >
        <!-- Overlay -->
        <div class="absolute inset-0 bg-black/40"></div>

        <!-- Text Box -->
        <div class="absolute bottom-32 left-6 md:left-16 max-w-xl text-white z-10">
          <h1 class="text-3xl md:text-5xl font-bold mb-4 leading-tight">
            {{ slide.title }}
          </h1>
          <p class="text-base md:text-lg mb-6 text-white/90">
            {{ slide.subtitle }}
          </p>
        </div>
      </div>
    </SwiperSlide>
  </Swiper>
</template>

