<!--
Tailwind 样式笔记（Home）：
- 仅当前文件实际使用的 class：
  1) `min-h-screen`：最小高度 100vh。
  2) `bg-gray-50`：页面浅灰背景。
  3) `mx-auto`：容器水平居中。
  4) `max-w-7xl`：最大宽度 1280px。
  5) `px-4`：左右内边距 16px。
  6) `py-4`：上下内边距 16px。
  7) `sm:px-6`：`sm` 断点及以上左右内边距 24px。
  8) `lg:px-8`：`lg` 断点及以上左右内边距 32px。
  9) `pt-10`：上内边距 40px。
  10) `grid`：网格布局。
  11) `grid-cols-1`：默认 1 列。
  12) `gap-4`：网格间距 16px。
  13) `sm:grid-cols-2`：小屏及以上 2 列。
  14) `lg:grid-cols-3`：大屏及以上 4 列。
  15) `rounded-lg`：中等圆角。
  16) `bg-white`：白色卡片背景。
  17) `p-5`：卡片内边距 20px。
  18) `shadow`：默认阴影。
  19) `transition`：过渡动画。
  20) `hover:border-[#d1d5db]`：悬停边框颜色。
  21) `hover:shadow-[0_8px_24px_rgba(16,24,40,0.08)]`：悬停阴影增强。
  22) `text-xs`：小字号。
  23) `font-medium`：字重 500。
  24) `uppercase`：大写。
  25) `tracking-[0.16em]`：自定义字距。
  26) `text-[#9ca3af]`：浅灰文字色。
  27) `mt-3`：上外边距 12px。
  28) `text-xl`：标题字号。
  29) `font-semibold`：字重 600。
  30) `text-[#111827]`：深灰文字色。
  31) `p-4`：四个方向的内边距都是 16px。
-->
<template>
  <div class="min-h-screen bg-gray-50">
    <main class="mx-auto max-w-7xl p-4 sm:px-6 lg:px-8">
      <div class="pt-10 grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        <router-link
            v-for="page in pageList"
            :key="page.name"
            :to="page.path"
        >
          <section
              class="rounded-lg bg-white p-5 shadow transition hover:border-[#d1d5db] hover:shadow-[0_8px_24px_rgba(16,24,40,0.08)]">
            <p class="text-xs font-medium uppercase tracking-[0.16em] text-[#9ca3af]">Demo {{ page.index }}</p>
            <h2 class="mt-3 text-xl font-semibold text-[#111827]">{{ page.title }}</h2>
          </section>
        </router-link>
      </div>
    </main>
  </div>
</template>

<script setup>
import {pages} from '../router/index.js'

const pageList = pages.map((p, i) => ({
  ...p,
  index: String(i + 1).padStart(2, '0'),
}))
</script>
