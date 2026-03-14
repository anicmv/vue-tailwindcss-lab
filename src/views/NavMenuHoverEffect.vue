<!--
Tailwind 样式笔记（NavMenuHoverEffect）：
- 命名拆解：
  1) `px-6` = `p`(padding) + `x` + `6`(24px)。
  2) `gap-x-4` = 列间距 16px；`gap-y-2` = 行间距 8px。
  3) `group-hover:scale-x-100` = 父 `group` hover 时子元素 `scaleX(1)`。
  4) `-translate-x-1/2` = `translateX(-50%)`。
- 本文件 class 全量说明：
  1) `flex`：弹性布局。
  2) `min-h-screen`：最小高度一屏。
  3) `w-full`：宽度 100%。
  4) `items-center`：交叉轴居中。
  5) `justify-center`：主轴居中。
  6) `bg-[#f7f7f8]`：背景色。
  7) `px-6`：左右内边距 24px。
  8) `list-none`：去列表符号。
  9) `flex-wrap`：可换行。
  10) `gap-x-4`：横向间距 16px。
  11) `gap-y-2`：纵向间距 8px。
  12) `p-0`：内边距 0。
  13) `md:gap-x-6`：中屏及以上横向间距 24px。
  14) `group`：状态分组父级。
  15) `relative`：相对定位。
  16) `inline-block`：行内块。
  17) `py-2`：上下内边距 8px。
  18) `text-2xl`：大字号。
  19) `uppercase`：大写。
  20) `tracking-wide`：较宽字距。
  21) `text-[#262626]`：深灰文字。
  22) `md:text-3xl`：中屏及以上更大字号。
  23) `pointer-events-none`：禁鼠标事件。
  24) `absolute`：绝对定位。
  25) `bottom-0`：贴底部。
  26) `left-1/2`：左偏移 50%。
  27) `h-1`：高度 4px。
  28) `w-1/2`：宽度 50%。
  29) `-translate-x-1/2`：左移自身一半，居中。
  30) `scale-x-0`：初始 X 缩放 0。
  31) `bg-sky-300`：线条颜色。
  32) `transition-transform`：仅 transform 过渡。
  33) `duration-300`：300ms 动画时长。
  34) `ease-in-out`：缓动曲线。
  35) `group-hover:scale-x-100`：hover 时展开线条。
-->
<template>
  <BackHome />
  <main class="flex min-h-screen w-full items-center justify-center bg-[#f7f7f8] px-6">
    <nav>
      <ul class="flex list-none flex-wrap items-center justify-center gap-x-4 gap-y-2 p-0 md:gap-x-6">
        <li v-for="item in navItems" :key="item">
          <a
            href="#"
            class="group relative inline-block py-2 text-2xl uppercase tracking-wide text-[#262626] md:text-3xl"
          >
            {{ item }}
            <span
              class="pointer-events-none absolute bottom-0 left-1/2 h-1 w-1/2 -translate-x-1/2 scale-x-0 bg-sky-300 transition-transform duration-300 ease-in-out group-hover:scale-x-100"
            />
          </a>
        </li>
      </ul>
    </nav>
  </main>
</template>

<script setup>
import BackHome from '@/components/BackHome.vue'

const navItems = ['home', 'about', 'services', 'portfolio', 'contact']
</script>
