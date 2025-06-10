<template>
  <section class="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-12">
    <div class="bg-white shadow-xl rounded-2xl w-full max-w-4xl overflow-hidden">
      <div class="flex flex-col md:flex-row">
        <!-- Tabs -->
        <div class="md:w-1/2 p-8">
          <div class="flex mb-6 border rounded-full overflow-hidden">
            <button
              :class="activeTab === 'login' ? activeBtnClass : inactiveBtnClass"
              @click="activeTab = 'login'"
              class="w-1/2 py-2 text-sm font-medium transition"
            >
              Login
            </button>
            <button
              :class="activeTab === 'register' ? activeBtnClass : inactiveBtnClass"
              @click="activeTab = 'register'"
              class="w-1/2 py-2 text-sm font-medium transition"
            >
              Daftar
            </button>
          </div>

          <!-- Login Form -->
          <transition name="fade" mode="out-in">
            <div v-if="activeTab === 'login'" key="login" class="space-y-4">
              <input type="email" placeholder="Masukkan Email" class="form-input" />
              <input type="password" placeholder="Masukkan Password" class="form-input" />
              <div class="text-right text-sm text-green-700 hover:underline cursor-pointer">
                Lupa password?
              </div>
              <button class="primary-btn w-full">Login</button>
              <div class="text-center text-sm">
                Belum punya akun? <span class="text-green-700 hover:underline cursor-pointer" @click="activeTab = 'register'">Daftar sekarang</span>
              </div>
              <div class="divider">atau</div>
              <button class="w-full flex items-center justify-center gap-2 border rounded py-2 hover:bg-gray-50">
                <img src="/src/assets/images/google.svg" alt="Google" class="w-5 h-5" />
                <span class="text-sm text-gray-700">Login dengan Google</span>
              </button>
            </div>

            <!-- Register Form -->
            <div v-else key="register" class="space-y-4">
              <input type="text" placeholder="Nama Lengkap" class="form-input" />
              <input type="email" placeholder="Masukkan Email" class="form-input" />
              <input type="password" placeholder="Masukkan Password" class="form-input" />
              <input type="password" placeholder="Ulangi Password" class="form-input" />
              <button class="primary-btn w-full">Daftar</button>
              <div class="text-center text-sm">
                Sudah punya akun? <span class="text-green-700 hover:underline cursor-pointer" @click="activeTab = 'login'">Login sekarang</span>
              </div>
              <div class="divider">atau</div>
              <button class="w-full flex items-center justify-center gap-2 border rounded py-2 hover:bg-gray-50">
                <img src="/src/assets/images/google.svg" alt="Google" class="w-5 h-5" />
                <span class="text-sm text-gray-700">Daftar dengan Google</span>
              </button>
            </div>
          </transition>
        </div>

        <!-- Image or Right Content -->
        <div class="hidden md:w-1/2 bg-gradient-to-br from-green-700 to-green-600 text-white p-8  flex-col items-center justify-center md:flex">
          <img src="/src/assets/images/gama-logo-putih.png" alt="GAMA Logo" class="w-24 mb-4" />
          <h2 class="text-xl font-bold mb-2 text-center">Selamat Datang di GAMA</h2>
          <p class="text-sm text-center">Solusi asuransi dan edukasi pertanian yang mudah dan cepat.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
const activeTab = ref('login')

const activeBtnClass = 'bg-green-700 text-white'
const inactiveBtnClass = 'bg-white text-green-700 hover:bg-green-50'
</script>

<style lang="postcss" scoped>
.form-input {
  @apply w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-400 text-sm;
}
.primary-btn {
  @apply bg-green-700 text-white py-2 rounded hover:bg-green-800 transition;
}
.fade-enter-active, .fade-leave-active {
  transition: all 0.3s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
.divider {
  @apply text-center text-gray-400 text-sm relative my-4;
}
.divider::before, .divider::after {
  content: '';
  @apply absolute top-1/2 w-1/3 h-px bg-gray-300;
}
.divider::before {
  left: 0;
}
.divider::after {
  right: 0;
}
</style>
