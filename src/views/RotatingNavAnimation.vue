<!--
Tailwind 样式笔记（RotatingNavAnimation）：
- 命名拆解：
  1) `p-[50px]`、`-left-[100px]`、`-top-[100px]`、`h-[200px]`、`w-[200px]` 为 arbitrary 像素值。
  2) `origin-top-left` = 变换原点左上角。
  3) `-rotate-20` / `-rotate-[70deg]` = 负角度旋转。
  4) `-translate-x-full` / `-translate-x-[150%]` / `-translate-x-[200%]` = 左移不同百分比。
- 本文件 class 全量说明：
  1) `relative`：相对定位。
  2) `min-h-screen`：最小高度一屏。
  3) `overflow-x-hidden`：隐藏横向溢出。
  4) `bg-[#333]`：深灰底色。
  5) `font-sans`：无衬线字体栈。
  6) `text-[#222]`：正文色。
  7) `w-screen`：宽度 100vw。
  8) `origin-top-left`：旋转原点。
  9) `bg-[#fafafa]`：内容区浅灰底。
  10) `p-[50px]`：内边距 50px。
  11) `transition-transform`：transform 动画。
  12) `duration-500`：500ms。
  13) `-rotate-20`：容器旋转 -20 度（动态）。
  14) `fixed`：固定定位。
  15) `-left-[100px]`：向左偏移 100px。
  16) `-top-[100px]`：向上偏移 100px。
  17) `h-[200px]`：高 200px。
  18) `w-[200px]`：宽 200px。
  19) `rounded-full`：圆形。
  20) `bg-[#ff7979]`：粉红圆盘。
  21) `-rotate-[70deg]`：圆盘旋转 -70 度（动态）。
  22) `absolute`：绝对定位。
  23) `left-[60%]`：左偏移 60%。
  24) `top-1/2`：上偏移 50%。
  25) `h-[40%]`：高度 40%。
  26) `border-0`：无边框。
  27) `bg-transparent`：透明背景。
  28) `p-0`：内边距 0。
  29) `text-[26px]`：字体 26px。
  30) `leading-none`：行高 1。
  31) `text-white`：白字。
  32) `outline-none`：无 outline。
  33) `left-1/2`：左偏移 50%。
  34) `top-[60%]`：上偏移 60%。
  35) `rotate-90`：旋转 90 度。
  36) `mx-auto`：居中。
  37) `my-[50px]`：上下外边距 50px。
  38) `max-w-[1000px]`：最大宽 1000px。
  39) `m-0`：外边距 0。
  40) `text-3xl`：标题字号。
  41) `font-bold`：粗体。
  42) `italic`：斜体。
  43) `text-[#555]`：辅助文字色。
  44) `my-4`：上下外边距 16px。
  45) `leading-relaxed`：宽松行高。
  46) `text-[#333]`：段落文字色。
  47) `mt-6`：上边距 24px。
  48) `text-xl`：副标题字号。
  49) `font-semibold`：半粗体。
  50) `max-w-full`：图片最大宽 100%。
  51) `bottom-10`：距底部 40px。
  52) `left-0`：左侧 0。
  53) `z-30`：层级 30。
  54) `list-none`：去列表符号。
  55) `pl-[30px]`：左内边距 30px。
  56) `uppercase`：大写。
  57) `my-10`：上下外边距 40px。
  58) `transition-transform`：菜单位移动画。
  59) `duration-300`：300ms。
  60) `translate-x-0`：回到原位（动态）。
  61) `delay-300`：延迟 300ms（动态）。
  62) `-translate-x-full`：左移 100%（动态）。
  63) `ml-[15px]`：左外边距 15px。
  64) `-translate-x-[150%]`：左移 150%（动态）。
  65) `ml-[30px]`：左外边距 30px。
  66) `-translate-x-[200%]`：左移 200%（动态）。
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
