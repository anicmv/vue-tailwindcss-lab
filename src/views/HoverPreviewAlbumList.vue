<!--
Tailwind 样式笔记（HoverPreviewAlbumList）：
- 命名拆解：
  1) `px-6` = 左右内边距 24px；`py-10` = 上下 40px。
  2) `transition-[background-image]` = 仅背景图属性过渡（arbitrary property）。
  3) `max-w-[520px]` / `max-w-[260px]` / `max-h-[360px]` = arbitrary 尺寸值。
  4) `top-1/2 -translate-y-1/2` = 先放 50%，再上移自身 50% 做垂直居中。
- 本文件 class 全量说明（去重）：
  1) `min-h-screen`：最小高度一屏。
  2) `bg-[#111827]`：深色背景底色。
  3) `bg-cover`：背景图铺满容器。
  4) `bg-center`：背景图居中。
  5) `bg-no-repeat`：背景不重复。
  6) `px-6`：左右 24px。
  7) `py-10`：上下 40px。
  8) `transition-[background-image]`：背景图切换动画属性。
  9) `duration-300`：300ms。
  10) `mx-auto`：居中。
  11) `max-w-5xl`：最大宽度 1024px。
  12) `rounded-xl`：0.75rem 圆角。
  13) `border`：1px 边框。
  14) `border-white/20`：20% 白色边框。
  15) `bg-slate-900/45`：45% 透明深色背景。
  16) `p-4`：内边距 16px。
  17) `text-white`：白色文字。
  18) `backdrop-blur-md`：中等强度背景模糊。
  19) `w-full`：100% 宽。
  20) `table-fixed`：固定表格布局。
  21) `border-collapse`：合并边框。
  22) `text-left`：左对齐。
  23) `text-sm`：小字号。
  24) `border-b`：下边框。
  25) `px-3`：左右 12px。
  26) `py-3`：上下 12px。
  27) `font-semibold`：600 字重。
  28) `text-white/95`：95% 白字。
  29) `border-white/15`：15% 白边框。
  30) `align-middle`：表格单元格垂直居中。
  31) `relative`：相对定位。
  32) `cursor-pointer`：手型。
  33) `overflow-visible`：允许溢出显示。
  34) `text-sky-100`：浅蓝白文字。
  35) `inline-block`：行内块。
  36) `max-w-[260px]`：最大宽度 260px。
  37) `truncate`：溢出省略号。
  38) `pointer-events-none`：禁鼠标事件。
  39) `absolute`：绝对定位。
  40) `left-full`：左边缘贴父元素右边缘。
  41) `top-1/2`：顶部 50%。
  42) `z-20`：层级 20。
  43) `ml-1`：左外边距 4px。
  44) `-translate-y-1/2`：上移 50%。
  45) `block`：块级元素。
  46) `h-auto`：高度自动。
  47) `max-h-[360px]`：最大高度 360px。
  48) `w-auto`：宽度自动。
  49) `max-w-[520px]`：最大宽度 520px。
  50) `object-contain`：完整包含显示不裁切。
  51) `mt-3`：上边距 12px。
  52) `text-white/90`：90% 白字。
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
