<!--
Tailwind 样式笔记（TopNavBar）：
- 语法拆解示例：
  1) `h-16` = `height: 4rem`（64px）；`md:h-14` 这种写法表示在断点覆盖高度。
  2) `px-6` = `p`(padding) + `x`(left/right) + `6`(1.5rem = 24px)。
  3) `max-w-6xl mx-auto` = 最大宽度 + 水平居中容器。
  4) `after:scale-x-0 hover:after:scale-x-100` = 伪元素下划线从 0 到 100% 展开。
- 本页关键类：
  1) `sticky top-0 z-40`：导航吸顶并保持层级。
  2) `border-b bg-white/95 backdrop-blur`：轻分割线和半透明磨砂顶栏。
  3) `flex items-center justify-between`：左品牌右菜单布局。
  4) `uppercase text-sm tracking-[0.08em]`：菜单文字风格统一。
  5) `focus-visible:outline-*`：键盘可访问焦点样式。
-->
<template>
  <BackHome />
  <div class="min-h-screen bg-[#f7f7f8] text-slate-900">
    <header class="sticky top-0 z-40 w-full border-b border-slate-200 bg-white/95 backdrop-blur">
      <div class="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6 md:h-14 md:px-4">
        <a href="#" class="shrink-0 text-xl font-bold tracking-tight text-slate-900">MySite</a>
        <nav aria-label="Main navigation" class="overflow-x-auto">
          <ul class="flex list-none items-center gap-4 p-0 md:gap-3">
            <li v-for="item in navItems" :key="item.name">
              <a
                href="#"
                :aria-current="item.active ? 'page' : undefined"
                class="relative inline-block whitespace-nowrap px-1 py-2 text-sm font-medium uppercase tracking-[0.08em] text-slate-700 transition-colors hover:text-slate-900 focus-visible:rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-300 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:bg-sky-300 after:transition-transform hover:after:scale-x-100"
                :class="item.active ? 'text-slate-900 after:scale-x-100' : ''"
              >
                {{ item.name }}
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  </div>
</template>

<script setup>
import BackHome from '@/components/BackHome.vue'

const navItems = [
  { name: 'Home', active: true },
  { name: 'About', active: false },
  { name: 'Services', active: false },
  { name: 'Portfolio', active: false },
  { name: 'Contact', active: false },
]
</script>
