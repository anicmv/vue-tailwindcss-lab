<!--
Tailwind 样式笔记（ProgressSteps）：
- 语法拆解示例：
  1) `w-[350px]` = arbitrary value，自定义宽度 350px。
  2) `top-1/2 -translate-y-1/2` = 先定位到 50%，再向上平移半个自身高度实现垂直居中。
  3) `disabled:*` = 在 disabled 状态下应用样式。
  4) `active:scale-95` = 按下按钮时缩放到 95%。
- 本页关键类：
  1) 容器 `min-h-screen flex items-center justify-center`：整页居中。
  2) 进度条底轨与前景条都用绝对定位叠加。
  3) 圆点用 `rounded-full border-[3px]`，激活态切换边框色。
  4) 进度宽度来自 `:style="{ width: progressWidth }"`。
  5) 按钮禁用态使用 `disabled:bg-[#383838] disabled:cursor-not-allowed`。
-->
<template>
  <BackHome />
  <main class="flex min-h-screen items-center justify-center overflow-hidden bg-[#f1f1f1]">
    <section class="text-center">
      <div class="relative mb-8 flex w-[350px] max-w-full items-center justify-between">
        <div class="absolute left-0 top-1/2 h-1 w-full -translate-y-1/2 bg-[#383838]" />
        <div class="absolute left-0 top-1/2 h-1 -translate-y-1/2 bg-[#3498db] transition-all duration-300" :style="{ width: progressWidth }" />

        <div
          v-for="n in totalSteps"
          :key="n"
          class="z-10 flex h-[30px] w-[30px] items-center justify-center rounded-full border-[3px] bg-[#f1f1f1] text-black transition-colors duration-300"
          :class="n <= currentActive ? 'border-[#3498db]' : 'border-[#383838]'"
        >
          {{ n }}
        </div>
      </div>

      <button
        class="m-[5px] rounded-md border-0 bg-[#3498db] px-[30px] py-2 text-sm text-white active:scale-95 disabled:cursor-not-allowed disabled:bg-[#383838]"
        :disabled="currentActive === 1"
        @click="prevStep"
      >
        Prev
      </button>
      <button
        class="m-[5px] rounded-md border-0 bg-[#3498db] px-[30px] py-2 text-sm text-white active:scale-95 disabled:cursor-not-allowed disabled:bg-[#383838]"
        :disabled="currentActive === totalSteps"
        @click="nextStep"
      >
        Next
      </button>
    </section>
  </main>
</template>

<script setup>
import { computed, ref } from 'vue'
import BackHome from '@/components/BackHome.vue'

const totalSteps = 4
const currentActive = ref(1)

const progressWidth = computed(() => `${((currentActive.value - 1) / (totalSteps - 1)) * 100}%`)

const nextStep = () => {
  currentActive.value = Math.min(currentActive.value + 1, totalSteps)
}

const prevStep = () => {
  currentActive.value = Math.max(currentActive.value - 1, 1)
}
</script>
