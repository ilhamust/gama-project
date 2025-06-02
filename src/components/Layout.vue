<template>
  <div>
    <!-- HEADER -->
    <header class="bg-white shadow sticky top-0 z-50">
      <div class="max-w-7xl mx-auto px-4 py-5 flex justify-between items-center">
        <!-- Logo -->
        <router-link to="/" class="flex items-center gap-2">
          <img src="/src/assets/images/gama-logo-bottom.png" class="w-32 h-auto" />
        </router-link>

        <!-- Menu Desktop + Tablet -->
        <nav class="hidden lg:flex items-center space-x-6 text-gray-700 font-medium relative">
          <router-link to="/" class="relative group pb-1 hover:text-green-700">
            <span>Beranda</span>
            <span
              class="absolute left-0 bottom-0 h-0.5 w-0 bg-green-700 transition-all duration-300 group-hover:w-full"></span>
          </router-link>
          <router-link to="/produk-asuransi" class="relative group pb-1 hover:text-green-700">
            <span>Produk</span>
            <span
              class="absolute left-0 bottom-0 h-0.5 w-0 bg-green-700 transition-all duration-300 group-hover:w-full"></span>
          </router-link>
          <router-link to="/informasi-alat" class="relative group pb-1 hover:text-green-700">
            <span>Alat Tani</span>
            <span
              class="absolute left-0 bottom-0 h-0.5 w-0 bg-green-700 transition-all duration-300 group-hover:w-full"></span>
          </router-link>
          <router-link to="/informasi-alat" class="relative group pb-1 hover:text-green-700">
            <span>Edukasi</span>
            <span
              class="absolute left-0 bottom-0 h-0.5 w-0 bg-green-700 transition-all duration-300 group-hover:w-full"></span>
          </router-link>
          <router-link to="/informasi-alat" class="relative group pb-1 hover:text-green-700">
            <span>Tentang Kami</span>
            <span
              class="absolute left-0 bottom-0 h-0.5 w-0 bg-green-700 transition-all duration-300 group-hover:w-full"></span>
          </router-link>

          <!-- Desktop/tablet search -->
          <div class="relative group flex items-center ml-2">
            <template v-if="!searchOpenDesktop">
              <button @click="toggleSearchDesktop" class="text-green-700 hover:text-green-800">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M21 21l-4.35-4.35M17 11A6 6 0 1111 5a6 6 0 016 6z" />
                </svg>
              </button>
            </template>
            <template v-else>
              <div class="flex items-center space-x-2">
                <input type="text" placeholder="Cari..."
                  class="bg-transparent border-b border-green-700 text-sm px-2 py-0.5 focus:outline-none w-50" />
                <button @click="toggleSearchDesktop"
                  class="text-green-700 text-lg font-bold hover:text-green-800">×</button>
              </div>
            </template>
          </div>



          <router-link to="/login">
            <button class="ml-4 bg-green-700 text-white px-4 py-1.5 rounded hover:bg-green-800 transition">
              Login
            </button>
          </router-link>
        </nav>

        <!-- MOBILE INLINE SEARCH + MENU -->
        <div class="lg:hidden flex items-center gap-2 relative">
          <!-- Search Toggle / Input -->
          <div class="flex items-center gap-1">
            <template v-if="!searchOpenMobile">
              <button @click="toggleSearchMobile" class="text-green-700 hover:text-green-800">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M21 21l-4.35-4.35M17 11A6 6 0 1111 5a6 6 0 016 6z" />
                </svg>
              </button>
            </template>
            <template v-else>
              <input type="text" placeholder="Cari"
                class="w-50 bg-transparent border-b border-green-700 text-sm px-2 py-0.5 text-gray-800 placeholder-gray-500 focus:outline-none" />
              <button @click="toggleSearchMobile"
                class="text-green-700 text-lg font-bold hover:text-green-800">×</button>
            </template>
          </div>

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
            <router-link to="/informasi-alat" class="block hover:text-green-700" @click="closeMenu">Alat
              Tani</router-link>
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
    <footer class="bg-gray-100 text-center text-sm text-gray-500 py-4 mt-10">
      &copy; 2025 GAMA. Semua hak dilindungi.
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue'

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
</script>
