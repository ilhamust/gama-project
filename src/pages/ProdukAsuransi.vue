<template>
  <section class="bg-gray-50 py-16 px-6 md:px-16">
    <div class="max-w-7xl mx-auto">
      <h2 class="text-3xl font-bold text-green-700 text-center mb-4">Produk Asuransi GAMA</h2>
      <p class="text-center text-gray-600 mb-12">Pilih perlindungan terbaik untuk mendukung aktivitas pertanian Anda.</p>

      <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="(item, index) in products"
          :key="index"
          class="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition transform hover:scale-105 relative"
        >
          <!-- Header -->
          <div class="bg-gradient-to-r from-green-600 to-green-500 text-white p-5">
            <div class="flex items-center gap-3 mb-3">
              <component :is="item.icon" class="w-6 h-6 text-white" />
              <h3 class="text-lg font-semibold">{{ item.title }}</h3>
            </div>
            <p class="text-sm">
  Rp {{ item.price.toLocaleString('id-ID') }}/{{ item.unit }}
</p>


            <span v-if="item.popular"
              class="absolute top-3 right-3 bg-yellow-400 text-green-900 text-xs font-bold px-2 py-0.5 rounded-full">
              Terpopuler
            </span>
          </div>

          <!-- Konten -->
          <div class="p-5 flex flex-col justify-between min-h-[350px]">
            <ul class="text-sm text-gray-700 space-y-2 mb-6">
              <li v-for="(benefit, bIndex) in item.benefits" :key="bIndex" class="flex gap-2 items-start">
                <span class="text-green-600 mt-0.5">✔</span>
                <span>{{ benefit }}</span>
              </li>
            </ul>

            <div class="flex flex-col gap-2">
              <router-link
                :to="item.startLink"
                class="bg-green-600 hover:bg-green-700 text-white text-center py-2 rounded-md transition"
              >
                Mulai Asuransi
              </router-link>
              <router-link
                :to="item.detailLink"
                class="border border-green-600 text-green-700 text-center py-2 rounded-md hover:bg-green-600 hover:text-white transition"
              >
                Pelajari Produk
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import {
  ShieldCheckIcon,
  CurrencyDollarIcon,
  WrenchScrewdriverIcon
} from '@heroicons/vue/24/solid'

const products = [
  {
    title: 'Asuransi Gagal Panen',
    price: 100000,
    unit : 'musim',
    icon: ShieldCheckIcon,
    popular: true,
    benefits: [
      'Perlindungan banjir, kekeringan & hama',
      'Klaim cepat & mudah',
      'Didukung pemerintah & mitra terpercaya'
    ],
    // startLink: '/daftar/gagal-panen',
    // detailLink: '/asuransi/gagal-panen'
    startLink: '/under-construction',
    detailLink: '/under-construction'
  },
  {
    title: 'Asuransi Harga Komoditas',
    price: 75000,
    unit : 'hektare',
    icon: CurrencyDollarIcon,
    popular: false,
    benefits: [
      'Lindungi saat harga panen anjlok',
      'Jaga stabilitas penghasilan petani',
      'Data harga transparan & akurat'
    ],
    startLink: '/daftar/harga-komoditas',
    detailLink: '/asuransi/harga-komoditas'
  },
  {
    title: 'Asuransi Alat Tani',
    price: 50000,
    unit : 'alat',
    icon: WrenchScrewdriverIcon,
    popular: false,
    benefits: [
      'Proteksi alat pertanian penting',
      'Kinerja pertanian lebih terjaga'
    ],
    startLink: '/daftar/alat-tani',
    detailLink: '/asuransi/alat-tani'
  }
]
</script>
