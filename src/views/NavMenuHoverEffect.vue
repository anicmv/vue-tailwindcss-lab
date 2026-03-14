<!--
Tailwind 样式笔记（NavMenuHoverEffect）：
- 语法拆解示例：
  1) `px-6` = `p`(padding) + `x`(left/right) + `6`(1.5rem = 24px)。
  2) `md:text-3xl` = 在 `md` 断点及以上应用 `text-3xl`。
  3) `group-hover:scale-x-100` = 父元素 `group` hover 时，子元素应用 `scale-x-100`。
  4) `-translate-x-1/2` = `transform: translateX(-50%)`，常用于水平居中。
- 本页关键类：
  1) `flex min-h-screen items-center justify-center`：内容在视口内水平垂直居中。
  2) `flex flex-wrap gap-x-4 gap-y-2`：导航项横向排列，换行并设置横纵间距。
  3) `relative inline-block py-2 text-2xl uppercase`：链接作为定位容器并设定排版风格。
  4) `absolute bottom-0 left-1/2 w-1/2 h-1`：下划线定位在文字底部并默认宽度 50%。
  5) `scale-x-0 transition-transform duration-300 group-hover:scale-x-100`：下划线从隐藏到展开动画。
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
