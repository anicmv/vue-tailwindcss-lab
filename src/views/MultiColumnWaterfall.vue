<!--
Tailwind 样式笔记（MultiColumnWaterfall）：
- 语法拆解示例：
  1) `p-[5px]` = `p`(padding) + `[5px]`(arbitrary value，自定义值)。
  2) `mb-[5px]` = `m`(margin) + `b`(bottom) + `[5px]`。
  3) `max-[980px]:columns-4` = 在 `max-width:980px` 条件下应用 `columns-4`。
- 本页关键类：
  1) `w-full p-[5px]`：容器宽度 100%，四周 5px 内边距。
  2) `columns-5 gap-[5px]`：5 列瀑布流，列间距 5px。
  3) `max-[980px]:columns-4 max-[750px]:columns-2`：响应式列数降级。
  4) `break-inside-avoid`：避免单个图片块在列内被拆分。
  5) `block w-full`：图片块级显示并铺满父容器宽度。
-->
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
