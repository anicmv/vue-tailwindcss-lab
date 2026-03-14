<!--
Tailwind 样式笔记（HoverPreviewAlbumList）：
- 语法拆解示例：
  1) `min-h-screen` = 最小高度 100vh。
  2) `bg-cover bg-center bg-no-repeat` = 背景图铺满/居中/不重复。
  3) `backdrop-blur-md` = 背后内容模糊（毛玻璃）。
  4) `max-w-[520px]` = arbitrary value，自定义最大宽度 520px。
- 本页关键类：
  1) 背景层：`transition-[background-image] duration-300` 实现背景图切换过渡。
  2) 卡片层：`bg-slate-900/45 border border-white/20` 半透明暗卡片。
  3) 表格：`table-fixed border-collapse` 固定列宽，分割线清晰。
  4) 预览层：`absolute left-full top-1/2 -translate-y-1/2` 悬浮在文件名右侧。
  5) 文本截断：`max-w-[260px] truncate` 文件名过长时省略号。
-->
<template>
  <BackHome />
  <main
    class="min-h-screen bg-[#111827] bg-cover bg-center bg-no-repeat px-6 py-10 transition-[background-image] duration-300"
    :style="{ backgroundImage: `url('${currentBg}')` }"
  >
    <section class="mx-auto max-w-5xl rounded-xl border border-white/20 bg-slate-900/45 p-4 text-white backdrop-blur-md">
      <table class="w-full table-fixed border-collapse text-left text-sm">
        <thead>
          <tr>
            <th class="border-b border-white/20 px-3 py-3 font-semibold text-white/95">上传时间</th>
            <th class="border-b border-white/20 px-3 py-3 font-semibold text-white/95">文件名</th>
            <th class="border-b border-white/20 px-3 py-3 font-semibold text-white/95">相册</th>
            <th class="border-b border-white/20 px-3 py-3 font-semibold text-white/95">大小</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in files" :key="item.id">
            <td class="border-b border-white/15 px-3 py-3 align-middle">{{ item.uploadTime }}</td>
            <td
              class="relative cursor-pointer overflow-visible border-b border-white/15 px-3 py-3 align-middle text-sky-100"
              @mouseenter="onNameEnter(item)"
              @mouseleave="onNameLeave"
            >
              <span class="inline-block max-w-[260px] truncate align-middle">{{ item.fileName }}</span>
              <div
                v-if="hoveredId === item.id"
                class="pointer-events-none absolute left-full top-1/2 z-20 ml-1 -translate-y-1/2"
              >
                <img :src="item.previewUrl" :alt="item.fileName" class="block h-auto max-h-[360px] w-auto max-w-[520px] object-contain" >
              </div>
            </td>
            <td class="border-b border-white/15 px-3 py-3 align-middle">{{ item.album }}</td>
            <td class="border-b border-white/15 px-3 py-3 align-middle">{{ item.size }}</td>
          </tr>
        </tbody>
      </table>

      <p v-if="files.length === 0" class="mt-3 text-white/90">
        未检测到图片，请把文件放到：<code>src/assets/images/multiColumnWaterfall/</code>
      </p>
    </section>
  </main>
</template>

<script setup>
import { ref } from 'vue'
import BackHome from '@/components/BackHome.vue'

const imageModules = import.meta.glob('../assets/images/multiColumnWaterfall/*.{png,jpg,jpeg,webp,gif}', {
  eager: true,
  import: 'default',
})

const localImages = Object.values(imageModules)
const hoveredId = ref(null)
const defaultBg = localImages[0] || ''
const currentBg = ref(defaultBg)

const files = ref(
  localImages.map((img, index) => {
    const rawName = decodeURIComponent(img.split('/').pop() || `image_${index + 1}.png`)
    return {
      id: index + 1,
      uploadTime: `2026-03-${String((index % 9) + 1).padStart(2, '0')} 10:12:33`,
      fileName: rawName,
      album: 'MultiColumnWaterfall',
      size: '1kb',
      previewUrl: img,
    }
  }),
)

function onNameEnter(item) {
  hoveredId.value = item.id
  currentBg.value = item.previewUrl
}

function onNameLeave() {
  hoveredId.value = null
  currentBg.value = defaultBg
}
</script>
