<!--
Tailwind 样式笔记（Home）：
- 先看命名规则：
  1) `px-5` = `p`(padding) + `x`(left/right) + `5`(spacing scale 5 = 1.25rem = 20px)。
  2) `py-14` = `p` + `y`(top/bottom) + `14`(3.5rem = 56px)。
  3) `mt-3` = `m`(margin) + `t`(top) + `3`(0.75rem = 12px)。
  4) `text-4xl` 是字体大小 token，不是 spacing；`md:text-5xl` 表示在 `md` 断点及以上生效。
- 本页关键类：
  1) `min-h-screen`：`min-height: 100vh`，至少一屏高。
  2) `bg-[#f7f7f8]`：自定义背景色（方括号是 arbitrary value）。
  3) `px-5 py-14`：主容器水平 20px、垂直 56px 内边距。
  4) `mx-auto max-w-5xl`：左右外边距 auto（居中）+ 最大宽度 `64rem`（1024px）。
  5) `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3`：默认 1 列，`sm` 起 2 列，`lg` 起 3 列。
  6) `gap-4`：网格行列间距 `1rem`（16px）。
  7) `rounded-2xl border p-6`：圆角 `1rem`、细边框、内边距 `1.5rem`（24px）。
-->
<template>
  <main class="min-h-screen bg-[#f7f7f8] px-5 py-14 text-[#111827]">
    <section class="mx-auto max-w-5xl">
      <h1 class="text-center text-4xl font-semibold tracking-tight md:text-5xl">Tailwind CSS Lab Gallery</h1>
      <p class="mt-3 text-center text-[#6b7280]">选择一个页面开始浏览</p>
      <div class="mx-auto mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <router-link
        v-for="page in pageList"
        :key="page.name"
        :to="page.path"
        class="group rounded-2xl border border-[#e5e7eb] bg-white p-6 shadow-[0_1px_2px_rgba(16,24,40,0.06)] transition hover:border-[#d1d5db] hover:shadow-[0_8px_24px_rgba(16,24,40,0.08)]"
      >
          <p class="text-xs font-medium uppercase tracking-[0.16em] text-[#9ca3af]">Demo {{ page.index }}</p>
          <h2 class="mt-3 text-xl font-semibold text-[#111827]">{{ page.title }}</h2>
      </router-link>
      </div>
    </section>
  </main>
</template>

<script setup>
import { pages } from '../router/index.js'

const pageList = pages.map((p, i) => ({
  ...p,
  index: String(i + 1).padStart(2, '0'),
}))
</script>
