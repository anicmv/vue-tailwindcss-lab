<!--
Tailwind 样式笔记（ExpandingCardsView）：
- 命名拆解：
  1) `w-[90vw]` / `h-[80vh]`：arbitrary value，自定义视口尺寸。
  2) `flex-[0.5]` / `flex-[5]`：arbitrary flex 值，控制收缩/展开比例。
  3) `max-[480px]:hidden`：最大宽度 480px 下隐藏。
  4) `delay-[400ms]`：arbitrary delay，自定义延迟 400ms。
- 本文件 class 全量说明：
  1) `flex`：弹性布局。
  2) `min-h-screen`：最小高度 100vh。
  3) `items-center`：纵向居中。
  4) `justify-center`：横向居中。
  5) `overflow-hidden`：超出裁切。
  6) `bg-[#f7f7f8]`：背景色。
  7) `mx-auto`：居中容器。
  8) `w-[90vw]`：宽度 90vw。
  9) `max-[480px]:w-screen`：<=480px 时宽度 100vw。
  10) `relative`：相对定位。
  11) `m-2`：外边距 8px。
  12) `h-[80vh]`：高度 80vh。
  13) `cursor-pointer`：手型。
  14) `rounded-[50px]`：50px 圆角。
  15) `bg-cover`：背景覆盖。
  16) `bg-center`：背景居中。
  17) `bg-no-repeat`：背景不重复。
  18) `text-white`：白字。
  19) `transition-all`：全部可过渡属性动画。
  20) `duration-500`：500ms。
  21) `ease-in`：ease-in 曲线。
  22) `flex-[5]`：激活态大比例。
  23) `flex-[0.5]`：非激活态小比例。
  24) `max-[480px]:hidden`：小屏隐藏某些卡片。
  25) `absolute`：绝对定位。
  26) `bottom-5`：底部 20px。
  27) `left-5`：左侧 20px。
  28) `m-0`：外边距 0。
  29) `text-2xl`：标题字号。
  30) `transition-opacity`：仅透明度动画。
  31) `duration-300`：300ms。
  32) `opacity-100`：显示。
  33) `delay-[400ms]`：延迟 400ms。
  34) `opacity-0`：隐藏。
  35) `delay-0`：无延迟。
-->
<template>
  <BackHome />
  <main class="flex min-h-screen items-center justify-center overflow-hidden bg-[#f7f7f8]">
    <section class="mx-auto flex w-[90vw] items-center justify-center max-[480px]:w-screen">
      <article
        v-for="(panel, index) in panels"
        :key="panel.title"
        :style="{ backgroundImage: `url(${panel.image})` }"
        class="relative m-2 h-[80vh] cursor-pointer rounded-[50px] bg-cover bg-center bg-no-repeat text-white transition-all duration-500 ease-in"
        :class="[
          activeIndex === index ? 'flex-[5]' : 'flex-[0.5]',
          index > 2 ? 'max-[480px]:hidden' : '',
        ]"
        @click="setActive(index)"
      >
        <h3
          class="absolute bottom-5 left-5 m-0 text-2xl transition-opacity duration-300 ease-in"
          :class="activeIndex === index ? 'opacity-100 delay-[400ms]' : 'opacity-0 delay-0'"
        >
          {{ panel.title }}
        </h3>
      </article>
    </section>
  </main>
</template>

<script setup>
import { ref } from 'vue'
import BackHome from '@/components/BackHome.vue'

const panels = [
  { title: 'Explore The World', image: new URL('../assets/images/demo/001.avif', import.meta.url).href },
  { title: 'Wild Forest', image: new URL('../assets/images/demo/002.avif', import.meta.url).href },
  { title: 'Sunny Beach', image: new URL('../assets/images/demo/003.avif', import.meta.url).href },
  { title: 'City on Winter', image: new URL('../assets/images/demo/004.avif', import.meta.url).href },
  { title: 'Mountains - Clouds', image: new URL('../assets/images/demo/005.avif', import.meta.url).href },
]

const activeIndex = ref(0)

const setActive = (index) => {
  activeIndex.value = index
}
</script>
