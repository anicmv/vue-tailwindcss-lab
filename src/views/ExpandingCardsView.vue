<!--
Tailwind 样式笔记（ExpandingCardsView）：
- 语法拆解示例：
  1) `w-[90vw]` = arbitrary value，宽度 90vw。
  2) `h-[80vh]` = 高度 80vh。
  3) `flex-[0.5]` / `flex-[5]` = 自定义 flex-grow/shrink/basis 组合（快速实现伸缩）。
  4) `duration-500 ease-in` = 500ms 过渡 + ease-in 曲线。
- 本页关键类：
  1) `flex items-center justify-center`：容器居中布局。
  2) `bg-cover bg-center bg-no-repeat`：卡片背景图显示策略。
  3) `transition-all`：卡片激活时宽度平滑扩展。
  4) `opacity-0` -> `opacity-100`：标题在激活后显隐。
  5) `max-[480px]:hidden`：小屏隐藏后两张卡片。
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
