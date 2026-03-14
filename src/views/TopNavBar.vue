<!--
Tailwind 样式笔记（TopNavBar）：
- 命名拆解：
  1) `px-6` = `p` + `x` + `6`(24px)；`md:px-4` = md 断点改成 16px。
  2) `md:h-14` = md 及以上高度 56px。
  3) `focus-visible:*` = 键盘聚焦可见时应用。
  4) `after:*` = 作用于 `::after` 伪元素。
- 本文件 class 全量说明：
  1) `min-h-screen`：最小高度一屏。
  2) `bg-[#f7f7f8]`：背景色。
  3) `text-slate-900`：主文字色。
  4) `sticky`：吸顶定位。
  5) `top-0`：顶部 0。
  6) `z-40`：层级 40。
  7) `w-full`：满宽。
  8) `border-b`：下边框。
  9) `border-slate-200`：浅灰边框色。
  10) `bg-white/95`：95% 白底。
  11) `backdrop-blur`：背景模糊。
  12) `mx-auto`：居中。
  13) `flex`：弹性布局。
  14) `h-16`：高度 64px。
  15) `max-w-6xl`：最大宽度 72rem（1152px）。
  16) `items-center`：纵向居中。
  17) `justify-between`：两端分布。
  18) `px-6`：左右 24px。
  19) `md:h-14`：中屏高度 56px。
  20) `md:px-4`：中屏左右 16px。
  21) `shrink-0`：禁止收缩。
  22) `text-xl`：标题字号。
  23) `font-bold`：700 字重。
  24) `tracking-tight`：紧凑字距。
  25) `overflow-x-auto`：横向溢出可滚动。
  26) `list-none`：去列表符号。
  27) `gap-4`：间距 16px。
  28) `p-0`：内边距 0。
  29) `md:gap-3`：中屏间距 12px。
  30) `relative`：相对定位。
  31) `inline-block`：行内块。
  32) `whitespace-nowrap`：不换行。
  33) `px-1`：左右 4px。
  34) `py-2`：上下 8px。
  35) `text-sm`：小字号。
  36) `font-medium`：500 字重。
  37) `uppercase`：大写。
  38) `tracking-[0.08em]`：自定义字距。
  39) `text-slate-700`：默认菜单色。
  40) `transition-colors`：颜色过渡。
  41) `hover:text-slate-900`：悬停变深。
  42) `focus-visible:rounded-sm`：聚焦轻圆角。
  43) `focus-visible:outline`：显示轮廓。
  44) `focus-visible:outline-2`：轮廓线宽 2px。
  45) `focus-visible:outline-offset-4`：轮廓外偏移 4px。
  46) `focus-visible:outline-sky-300`：轮廓色。
  47) `after:absolute`：伪元素绝对定位。
  48) `after:bottom-0`：伪元素贴底。
  49) `after:left-0`：伪元素左对齐。
  50) `after:h-0.5`：伪元素高 2px。
  51) `after:w-full`：伪元素宽 100%。
  52) `after:origin-left`：缩放原点在左。
  53) `after:scale-x-0`：初始 X 缩放 0。
  54) `after:bg-sky-300`：伪元素颜色。
  55) `after:transition-transform`：伪元素 transform 过渡。
  56) `hover:after:scale-x-100`：悬停展开下划线。
  57) `after:scale-x-100`（动态类）：激活菜单保持下划线展开。
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
