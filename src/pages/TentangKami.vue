<template>
  <section class="bg-gray-50 py-16 px-6 md:px-16">
    <div class="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8">

      <!-- Sidebar -->
      <aside class="w-full lg:w-1/4">
        <div class="bg-white shadow rounded-lg overflow-hidden">
          <h3 class="bg-green-700 text-white font-semibold py-4 px-6">TENTANG KAMI</h3>
          <ul>
            <li v-for="item in menu" :key="item.id" @click="selected = item.id"
              class="flex justify-between items-center px-6 py-3 cursor-pointer transition"
              :class="selected === item.id ? 'bg-green-100 border-l-4 border-green-700 font-semibold text-green-700' : 'hover:bg-gray-100 text-gray-700'">
              {{ item.label }}
              <span v-if="selected === item.id" class="text-green-700">→</span>
            </li>
          </ul>
        </div>
      </aside>

      <!-- Main Content -->
      <article class="flex-1">
        <div class="bg-white rounded-xl border-l-8 border-green-600 shadow-md p-8 relative">
          <div v-if="selected === 'profil'">
            <h2 class="text-2xl font-bold text-green-700 mb-4">Profil Perusahaan</h2>
            <p class="text-gray-700 leading-relaxed">
              GAMA (Garda Masyarakat Agraria) adalah platform asuransi pertanian yang hadir untuk melindungi petani
              Indonesia dari risiko gagal panen, fluktuasi harga komoditas, dan kerusakan alat tani. Kami menggabungkan
              teknologi digital dengan jaringan agen lapangan untuk menyediakan layanan asuransi yang cepat, mudah
              diakses, dan transparan.
            </p>
            <p class="text-gray-700 mt-4">
              <strong>Komitmen kami:</strong> Memberikan pelayanan yang transparan, proses klaim yang cepat, dan edukasi
              keuangan menyeluruh kepada seluruh petani. Bersama tim profesional dan teknologi canggih, kami berupaya menciptakan ekosistem asuransi pertanian digital yang inklusif dan ramah pengguna untukmendukung ketahanan pangan Nasional.
            </p>
          </div>

          <div v-else-if="selected === 'filosofi'">
            <h2 class="text-2xl font-bold text-green-700 mb-4">Filosofi Logo</h2>

            <!-- Pusatkan logo -->
            <div class="flex justify-center mb-6">
              <img src="/src/assets/images/gama-logo.png" alt="Logo GAMA" class="w-40" />
            </div>

            <!-- Deskripsi -->
            <ul class="space-y-2 text-gray-700 list-disc pl-5">
              <li><strong>Tanaman:</strong> Melambangkan akar kehidupan petani dan semangat pertumbuhan. Tanaman mencerminkan harapan baru dan hasil yang tumbuh dari perlindungan yang kuat yang menjadi peran GAMA dalam menjaga pertanian.</li>
              <li><strong>Dua tangan terbuka:</strong> Menggambarkan kehadiran yang merangkul dan melayani. Tangan terbuka menandakan bahwa GAMA hadir bukan hanya sebagai penyedia layanan tetapi juga sebagai mitra yang siap menolong, mendampingi, dan memberi rasa aman kepada petani.</li>
              <li><strong>Perisai:</strong> Simbol kesiapsiagaan dan ketahanan. Perisai menunjukkan komitmen GAMA dalam menjaga petani dari risiko-risiko yang tak terduga, memberikan rasa aman yang menjadi pondasi keberlanjutan usaha tani.</li>
              <li><strong>Warna kuning:</strong> Mewakili cahaya dan semangat positif. Warna ini menjadi lambang harapan baru bagi petani untuk berani menghadapi risiko dengan percaya diri, karena ada perlindungan yang menjamin usaha mereka tidak sia-sia.</li>
              <li><strong>Warna hijau:</strong> Menunjukkan keseimbangan, kesuburan, dan keberlanjutan. Hijau menegaskan bahwa GAMA berpijak pada semangat pertanian yang alami, lestari, dan ramah lingkungan, dengan menempatkan kesejahteraan petani sebagai prioritas utama.</li>
            </ul>
          </div>


          <div v-else-if="selected === 'visi'">
            <h2 class="text-2xl font-bold text-green-700 mb-4">Visi & Misi</h2>
            <div class="mb-4">
              <h3 class="font-semibold text-green-600">Visi</h3>
              <p class="text-gray-700">
                Menjadi garda terdepan dalam perlindungan finansial petani Indonesia melalui inovasi teknologi &
                kolaborasi.
              </p>
            </div>
            <div>
              <h3 class="font-semibold text-green-600">Misi</h3>
              <ul class="space-y-2 text-gray-700 list-decimal pl-5">
                <li>Memberikan solusi perlindungan risiko tani yang cepat, transparan, dan mudah diakses semua kalangan
                  petani.</li>
                <li>Membangun ekosistem sektor pertanian.</li>
                <li>Meningkatkan literasi dan kesejahteraan petani melalui edukasi.</li>
                <li>Berkolaborasi dengan pemerintah, komunitas tani, dan sektor swasta dalam membangun ekosistem
                  pertanian yang tangguh untuk mendukung ketahanan pangan nasional.</li>
              </ul>
            </div>
          </div>

          <div v-else-if="selected === 'struktur'">
            <h2 class="text-2xl font-bold text-green-700 mb-4">Struktur Organisasi</h2>
            <img src="/src/assets/images/struktur-organisasi.png" alt="Struktur Organisasi GAMA" class="rounded-xl shadow w-full max-w-2xl" />
          </div>
        </div>
      </article>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const selected = ref('profil')
const menu = [
  { id: 'profil', label: 'Profil Perusahaan' },
  { id: 'filosofi', label: 'Filosofi Logo' },
  { id: 'visi', label: 'Visi & Misi' },
  { id: 'struktur', label: 'Struktur Organisasi' }
]
</script>

<style scoped>
ul li span {
  font-weight: bold;
}
</style>
