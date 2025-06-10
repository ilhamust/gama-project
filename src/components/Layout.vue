<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()

const showMobileMenu = ref(false)
const searchOpenMobile = ref(false)
const searchOpenDesktop = ref(false)

function toggleMobileMenu() {
  showMobileMenu.value = !showMobileMenu.value
}

function toggleSearchMobile() {
  searchOpenMobile.value = !searchOpenMobile.value
}

function toggleSearchDesktop() {
  searchOpenDesktop.value = !searchOpenDesktop.value
}

function closeMenu() {
  showMobileMenu.value = false
}

import { onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)

function handleScroll() {
  isScrolled.value = window.scrollY > 10
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <div>
    <!-- HEADER -->
    <header :class="[
      'sticky top-0 z-50 transition-all duration-300',
      showMobileMenu
        ? 'bg-white shadow'
        : (isScrolled ? 'bg-white/45 backdrop-blur-md shadow' : 'bg-white/80 backdrop-blur-md')
    ]">


      <div class="max-w-7xl mx-auto px-4 py-5 flex justify-between items-center">
        <!-- Logo -->
        <router-link to="/" class="flex items-center gap-2">
          <img src="/src/assets/images/gama-logo-bottom.png" class="w-32 h-auto" />
        </router-link>

        <!-- Menu Desktop + Tablet -->
        <nav class="hidden lg:flex items-center space-x-6 text-gray-700 font-medium relative">
          <!-- Beranda -->
          <router-link to="/" class="relative group pb-1" :class="{
            'text-green-700': route.path === '/',
            'text-gray-700 hover:text-green-700': route.path !== '/'
          }">
            <span>Beranda</span>
            <span class="absolute left-0 bottom-0 h-0.5 bg-green-700 transition-all duration-300"
              :class="route.path === '/' ? 'w-full' : 'w-0 group-hover:w-full'"></span>
          </router-link>

          <!-- Produk -->
          <router-link to="/produk-asuransi" class="relative group pb-1" :class="{
            'text-green-700': route.path.startsWith('/produk-asuransi'),
            'text-gray-700 hover:text-green-700': !route.path.startsWith('/produk-asuransi')
          }">
            <span>Produk</span>
            <span class="absolute left-0 bottom-0 h-0.5 bg-green-700 transition-all duration-300"
              :class="route.path.startsWith('/produk-asuransi') ? 'w-full' : 'w-0 group-hover:w-full'"></span>
          </router-link>

          <!-- Edukasi -->
          <router-link to="/edukasi" class="relative group pb-1" :class="{
            'text-green-700': route.path.startsWith('/edukasi'),
            'text-gray-700 hover:text-green-700': !route.path.startsWith('/edukasi')
          }">
            <span>Edukasi</span>
            <span class="absolute left-0 bottom-0 h-0.5 bg-green-700 transition-all duration-300"
              :class="route.path.startsWith('/edukasi') ? 'w-full' : 'w-0 group-hover:w-full'"></span>
          </router-link>

          <!-- Tentang Kami -->
          <router-link to="/tentang-kami" class="relative group pb-1" :class="{
            'text-green-700': route.path.startsWith('/tentang-kami'),
            'text-gray-700 hover:text-green-700': !route.path.startsWith('/tentang-kami')
          }">
            <span>Tentang Kami</span>
            <span class="absolute left-0 bottom-0 h-0.5 bg-green-700 transition-all duration-300"
              :class="route.path.startsWith('/tentang-kami') ? 'w-full' : 'w-0 group-hover:w-full'"></span>
          </router-link>

          <router-link to="/login">
            <button class="ml-4 bg-green-700 text-white px-4 py-1.5 rounded hover:bg-green-800 transition">
              Login
            </button>
          </router-link>
        </nav>

        <!-- MOBILE INLINE SEARCH + MENU -->
        <div class="lg:hidden flex items-center gap-2 relative">

          <!-- Hamburger Menu -->
          <button @click="toggleMobileMenu">
            <svg class="w-6 h-6 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

      </div>

      <!-- MENU DRAWER MOBILE -->
      <transition name="slide">
        <div v-if="showMobileMenu"
          class="fixed top-0 right-0 w-4/5 max-w-xs h-full bg-white shadow-lg z-50 p-6 transition transform">
          <div class="flex justify-between items-center mb-6">
            <span class="text-green-700 font-bold text-xl">Menu</span>
            <button @click="closeMenu" class="text-green-700 font-bold text-2xl">×</button>
          </div>

          <nav class="space-y-4 text-gray-800 font-medium">
            <router-link to="/" class="block hover:text-green-700" @click="closeMenu">Beranda</router-link>
            <router-link to="/produk-asuransi" class="block hover:text-green-700"
              @click="closeMenu">Produk</router-link>
            <router-link to="/edukasi" class="block hover:text-green-700" @click="closeMenu">Edukasi</router-link>
            <router-link to="/tentang-kami" class="block hover:text-green-700" @click="closeMenu">Tentang
              Kami</router-link>
            <router-link to="/login" class="block hover:text-green-700">
              <button class="w-full bg-green-700 text-white py-2 rounded hover:bg-green-800 transition mt-2">
                Login
              </button>
            </router-link>
          </nav>
        </div>
      </transition>
    </header>
    <!-- CONTENT -->
    <main>
      <slot />
    </main>

    <!-- FOOTER -->
    <footer class="bg-green-700 text-white  px-6 md:px-16 pt-14">
      <!-- Bagian Utama Footer -->
      <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 pb-10">

        <!-- Kolom 1: Logo & Deskripsi -->
        <div>
          <div class="flex items-center mb-4">
            <img src="/src/assets/images/gama-logo-putih-text.png" alt="Logo GAMA" class="w-30 h-20" />
          </div>
          <p class="text-sm text-white/80 mb-4 leading-relaxed">
            Bersama membangun ekonomi hijau menuju ketahanan pangan nasional
          </p>
          <div class="flex gap-3 text-white">
            <a href="https://instagram.com/gamagroup.id" target="_blank" class="hover:text-green-300"
              aria-label="Instagram">
              <i class="fab fa-instagram text-lg"></i>
            </a>
            <a href="https://facebook.com" target="_blank" class="hover:text-green-300" aria-label="Facebook">
              <i class="fab fa-facebook-f text-lg"></i>
            </a>
            <a href="https://wa.me/628818548476" target="_blank" class="hover:text-green-300" aria-label="WhatsApp">
              <i class="fab fa-whatsapp text-lg"></i>
            </a>
          </div>
        </div>

        <!-- Kolom 2: Produk & Layanan -->
        <div>
          <h3 class="text-md font-semibold mb-3">Produk & Layanan</h3>
          <ul class="space-y-2 text-sm text-white/90">
            <li><router-link to="/produk-asuransi" class="hover:underline">Asuransi Gagal Panen</router-link></li>
            <li><router-link to="/produk-asuransi" class="hover:underline">Asuransi Harga Komoditas</router-link></li>
            <li><router-link to="/produk-asuransi" class="hover:underline">Asuransi Alat Tani</router-link></li>
            <li><router-link to="/konsultasi" class="hover:underline">Konsultasi Pertanian</router-link></li>
          </ul>
        </div>

        <!-- Kolom 3: Informasi -->
        <div>
          <h3 class="text-md font-semibold mb-3">Informasi</h3>
          <ul class="space-y-2 text-sm text-white/90">
            <li><router-link to="/edukasi" class="hover:underline">Edukasi Pertanian</router-link></li>
            <li><router-link to="/informasi-alat" class="hover:underline">Informasi Alat Tani</router-link></li>
            <li><router-link to="/tentang-kami" class="hover:underline">Tentang Kami</router-link></li>
            <li><router-link to="/kontak" class="hover:underline">Hubungi Kami</router-link></li>
          </ul>
        </div>

        <!-- Kolom 4: Kontak -->
        <div>
          <h3 class="text-md font-semibold mb-3">Kontak Kami</h3>
          <p class="text-sm text-white/80 leading-relaxed">
            Jl. Ringroad Barat, Dowangan<br />
            Sleman, Yogyakarta 5529<br />
            Email: <a href="mailto:gama@gmail.com">gama@gmail.com</a><br />
            Telp: <a href="tel:+628818548476">+62 881 8548 476</a>
          </p>
        </div>
      </div>
      <!-- Copyright -->
      <div class="text-center text-xs text-white/70 mt-4 border-t border-white/20 pt-2 pb-4">
        &copy; 2025 GAMA (Garda Masyarakat Agraria). Semua hak cipta dilindungi.
      </div>
    </footer>
  </div>
</template>
