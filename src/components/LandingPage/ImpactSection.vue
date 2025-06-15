<template>
  <section class="bg-green-700 text-white py-20 px-6 md:px-16">
    <div class="max-w-7xl mx-auto text-center">
      <h2 class="text-3xl md:text-4xl font-bold mb-12" data-aos="fade-down">Dampak Kami</h2>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div v-for="(stat, index) in stats" :key="index" class="space-y-2" data-aos="zoom-in" :data-aos-delay="index * 200">
          <div class="text-5xl font-bold">
            {{ displayNumbers[index] }}+
          </div>
          <p class="text-white/80 text-lg">{{ stat.label }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref } from 'vue'

const stats = [
  { label: 'Petani Terlindungi', value: 129 },
  { label: 'Klaim Diselesaikan', value: 95 },
  { label: 'Kerja Sama Komunitas & Mitra', value: 15 }
]

const displayNumbers = ref(stats.map(() => 0))

function animateNumbers() {
  stats.forEach((stat, i) => {
    const duration = 1500
    const frameRate = 30
    const totalFrames = Math.round(duration / frameRate)
    let frame = 0

    const interval = setInterval(() => {
      frame++
      const progress = frame / totalFrames
      displayNumbers.value[i] = Math.floor(stat.value * progress)
      if (frame === totalFrames) {
        displayNumbers.value[i] = stat.value
        clearInterval(interval)
      }
    }, frameRate)
  })
}

onMounted(() => {
  animateNumbers()
})
</script>

<style scoped>
section {
  min-height: 50vh;
}
</style>
