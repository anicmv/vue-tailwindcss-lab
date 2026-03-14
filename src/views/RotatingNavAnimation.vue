<!--
Tailwind 样式笔记（RotatingNavAnimation）：
- 语法拆解示例：
  1) `origin-top-left` = transform-origin 在左上角。
  2) `-rotate-20` = `transform: rotate(-20deg)`。
  3) `-translate-x-full` = `transform: translateX(-100%)`。
  4) `duration-500` = 500ms 过渡时长。
- 本页关键类：
  1) 外层 `relative min-h-screen overflow-x-hidden`：提供定位上下文并防横向滚动。
  2) 内容容器 `origin-top-left transition-transform`：用于整页旋转动画。
  3) 固定圆盘 `fixed -left-[100px] -top-[100px]`：复制原始旋转控制器结构。
  4) 侧边菜单项根据 `showNav` 切换 `translate-x`：实现滑入。
  5) 使用文本符号 `☰/✕` 替代图标库，避免额外依赖。
-->
<template>
  <BackHome />
  <div class="relative min-h-screen overflow-x-hidden bg-[#333] font-sans text-[#222]">
    <div
      class="min-h-screen w-screen origin-top-left bg-[#fafafa] p-[50px] transition-transform duration-500"
      :class="showNav ? '-rotate-20' : ''"
    >
      <div class="fixed -left-[100px] -top-[100px]">
        <div
          class="relative h-[200px] w-[200px] rounded-full bg-[#ff7979] transition-transform duration-500"
          :class="showNav ? '-rotate-[70deg]' : ''"
        >
          <button
            class="absolute left-[60%] top-1/2 h-[40%] border-0 bg-transparent p-0 text-[26px] leading-none text-white outline-none"
            @click="showNav = true"
          >
            ☰
          </button>
          <button
            class="absolute left-1/2 top-[60%] h-[40%] origin-top-left rotate-90 border-0 bg-transparent p-0 text-[26px] leading-none text-white outline-none"
            @click="showNav = false"
          >
            ✕
          </button>
        </div>
      </div>

      <article class="mx-auto my-[50px] max-w-[1000px]">
        <h1 class="m-0 text-3xl font-bold">Amazing Article</h1>
        <small class="italic text-[#555]">Florin Pop</small>
        <p class="my-4 leading-relaxed text-[#333]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium quia in ratione dolores
          cupiditate, maxime aliquid impedit dolorem nam dolor omnis atque fuga labore modi veritatis porro
          laborum minus, illo, maiores recusandae cumque ipsa quos.
        </p>
        <h3 class="mt-6 text-xl font-semibold">My Dog</h3>
        <img :src="dogImg" alt="doggy" class="max-w-full" >
        <p class="my-4 leading-relaxed text-[#333]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit libero deleniti rerum quo, incidunt vel
          consequatur culpa ullam. Magnam facere earum unde harum. Ea culpa veritatis magnam at aliquid.
        </p>
      </article>
    </div>

    <nav class="fixed bottom-10 left-0 z-30">
      <ul class="list-none pl-[30px] text-white uppercase">
        <li class="my-10 transition-transform duration-300" :class="showNav ? 'translate-x-0 delay-300' : '-translate-x-full'">🏠 Home</li>
        <li class="my-10 ml-[15px] transition-transform duration-300" :class="showNav ? 'translate-x-0 delay-300' : '-translate-x-[150%]'">👤 About</li>
        <li class="my-10 ml-[30px] transition-transform duration-300" :class="showNav ? 'translate-x-0 delay-300' : '-translate-x-[200%]'">✉ Contact</li>
      </ul>
    </nav>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import BackHome from '@/components/BackHome.vue'
import dogImg from '@/assets/images/demo/rotatingNavAnimation-img.avif'

const showNav = ref(false)
</script>
