<!--
Tailwind 样式笔记（MultiColumnWaterfall）：
- 命名拆解：
  1) `p-[5px]` = `p`(padding) + arbitrary value `[5px]`。
  2) `mb-[5px]` = `m`(margin) + `b`(bottom) + `[5px]`。
  3) `max-[980px]:columns-4` = 在 `max-width: 980px` 条件下启用 4 列。
- 本文件 class 全量说明：
  1) `p-[5px]`：主容器四周 5px 内边距。
  2) `columns-5`：使用 CSS multi-column，列数 5。
  3) `gap-[5px]`：列间距 5px。
  4) `max-[980px]:columns-4`：<=980px 时改为 4 列。
  5) `max-[750px]:columns-2`：<=750px 时改为 2 列。
  6) `mb-[5px]`：每个图片块底部间距 5px。
-->
<template>
  <main class="p-[5px]">
    <BackHome />
    <section class="columns-5 gap-[5px] max-[980px]:columns-4 max-[750px]:columns-2">
      <div
          v-for="(image, index) in images"
          :key="index"
          class="mb-[5px]"
      >
        <img
            :src="image"
            :alt="`waterfall-${index + 1}`"
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
