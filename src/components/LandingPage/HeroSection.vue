<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/pagination'

const slides = [
  {
    image: '/src/assets/images/hero1.jpg',
    title: 'Lindungi Panen Anda Sekarang',
    subtitle: 'Asuransi pertanian modern, cepat, dan terpercaya.',
    ctaText: 'Pelajari Produk',
    ctaLink: '/produk-asuransi'
  },
  {
    image: '/src/assets/images/hero2.jpg',
    title: 'Diskon Alat Tani Eksklusif',
    subtitle: 'Dapatkan voucher potongan harga hingga 50%',
    ctaText: 'Lihat Alat Tani',
    ctaLink: '/informasi-alat'
  },
  {
    image: '/src/assets/images/hero3.jpg',
    title: 'Edukasi & Konsultasi Pertanian',
    subtitle: 'Bersama GAMA, Anda tidak sendiri.',
    ctaText: 'Mulai Belajar',
    ctaLink: '/edukasi'
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
          <div class="flex gap-4 flex-wrap">
            <router-link
              :to="slide.ctaLink"
              class="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded shadow transition"
            >
              {{ slide.ctaText }}
            </router-link>
            <router-link
              to="/kontak"
              class="border border-white text-white px-6 py-2 rounded hover:bg-white hover:text-green-700 transition"
            >
              Hubungi Kami
            </router-link>
          </div>
        </div>
      </div>
    </SwiperSlide>
  </Swiper>
</template>

