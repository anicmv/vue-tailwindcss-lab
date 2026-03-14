<!--
Tailwind 样式笔记（TopNavBar）：
- 命名拆解（你关心的 `px-5` 这类）：
  1) `p` = padding（内边距）。
  2) `m` = margin（外边距）。
  3) `x` = 水平方向（left + right），`y` = 垂直方向（top + bottom）。
  4) `px-5` = 左右内边距都为 spacing scale 的 5（Tailwind 默认 1.25rem = 20px）。
  5) `px-4` = 左右内边距 1rem（16px）；`px-3` = 0.75rem（12px）；`px-8` = 2rem（32px）。
  6) `py-2` = 上下内边距 0.5rem（8px）。
  7) `h-16` = 高度 4rem（64px）；`h-7` = 高度 1.75rem（28px）；`w-7` = 宽度 1.75rem（28px）。
  8) `text-lg` / `text-sm` / `text-xs` = 字号预设。
  9) `font-semibold` / `font-medium` / `font-bold` = 字重预设。
  10) `rounded-md` / `rounded-lg` = 圆角预设。
  11) `bg-*` / `text-*` / `border-*` = 背景色 / 文字色 / 边框色。
  12) `border-b` = 仅下边框。
  13) `sticky top-0` = 吸顶并固定在顶部 0。
  14) `z-50` = 层级 50。
  15) `backdrop-blur-xl` = 背景模糊（用于半透明顶栏）。
  16) `sm:*` / `lg:*` = 在对应断点及以上生效（响应式前缀）。
  17) `hover:*` = hover 状态生效；`transition` = 过渡动画。

- 本文件 class 全量说明：
  1) `min-h-screen`：最小高度为一屏（100vh）。
  2) `bg-slate-50`：浅灰背景。
  3) `text-slate-900`：深色主文本。
  4) `sticky`：粘性定位。
  5) `top-0`：距离顶部 0。
  6) `z-50`：层级较高，避免被正文遮挡。
  7) `border-b`：底部边框。
  8) `border-slate-200/80`：80% 透明度的浅灰边框。
  9) `bg-white/80`：80% 透明白色背景。
  10) `backdrop-blur-xl`：背景大模糊。
  11) `mx-auto`：水平居中。
  12) `max-w-7xl`：最大宽度 80rem（1280px）。
  13) `px-4`：左右内边距 16px。
  14) `sm:px-6`：`sm` 及以上左右内边距 24px。
  15) `lg:px-8`：`lg` 及以上左右内边距 32px。
  16) `flex`：弹性布局。
  17) `h-16`：高度 64px。
  18) `items-center`：交叉轴居中（垂直居中）。
  19) `justify-between`：主轴两端对齐。
  20) `gap-2`：元素间距 8px。
  21) `text-lg`：较大标题字号。
  22) `font-semibold`：600 字重。
  23) `tracking-tight`：紧凑字距。
  24) `inline-flex`：行内弹性布局。
  25) `h-7`：高度 28px。
  26) `w-7`：宽度 28px。
  27) `justify-center`：主轴居中。
  28) `rounded-md`：中等圆角。
  29) `bg-slate-900`：深色背景。
  30) `text-xs`：较小字号。
  31) `font-bold`：700 字重。
  32) `text-white`：白色文字。
  33) `gap-1`：元素间距 4px。
  34) `rounded-lg`：较大圆角。
  35) `px-3`：左右内边距 12px。
  36) `py-2`：上下内边距 8px。
  37) `text-sm`：小字号。
  38) `font-medium`：500 字重。
  39) `transition`：常用属性过渡动画。
  40) `text-slate-600`：中灰文字。
  41) `hover:bg-slate-100`：悬停浅灰背景。
  42) `hover:text-slate-900`：悬停文字加深。
-->
<template>
  <BackHome />
  <div class="min-h-screen bg-slate-50 text-slate-900">
    <header class="sticky top-0 z-50 border-b border-slate-200/80 bg-white/80 backdrop-blur-xl">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="flex h-16 items-center justify-between">
          <a href="#" class="flex items-center gap-2 text-lg font-semibold tracking-tight text-slate-900">
            MySite
          </a>

          <nav aria-label="Main navigation">
            <ul class="flex items-center gap-1">
              <li v-for="item in navItems" :key="item.name">
                <a
                  href="#"
                  :aria-current="item.active ? 'page' : undefined"
                  class="rounded-lg px-3 py-2 text-sm font-medium transition"
                  :class="
                    item.active
                      ? 'bg-slate-100 text-slate-900'
                      : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                  "
                >
                  {{ item.name }}
                </a>
              </li>
            </ul>
          </nav>
        </div>
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
