<template>
  <main class="w-full p-[5px]">
    <BackHome />
    <section class="columns-5 gap-[5px] max-[980px]:columns-4 max-[750px]:columns-2">
      <div
          v-for="(image, index) in images"
          :key="index"
          class="mb-[5px] break-inside-avoid"
      >
        <img
            :src="image"
            :alt="`waterfall-${index + 1}`"
            class="block w-full"
        >
      </div>
    </section>
  </main>
</template>

<script setup>
import BackHome from '../components/BackHome.vue'

const imageModules = import.meta.glob('../assets/images/multiColumnWaterfall/*.{jpg,jpeg,png,webp}', {
  eager: true,
  import: 'default'
})

const images = Object.entries(imageModules)
  .sort(([a], [b]) => {
    const aNum = Number(a.match(/\/(\d+)\.[^.]+$/)?.[1] ?? 0)
    const bNum = Number(b.match(/\/(\d+)\.[^.]+$/)?.[1] ?? 0)
    return aNum - bNum
  })
  .map(([, url]) => url)
</script>


