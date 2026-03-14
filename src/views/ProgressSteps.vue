<!--
Tailwind 样式笔记（ProgressSteps）：
- 命名拆解：
  1) `w-[350px]`、`h-[30px]`、`m-[5px]`、`px-[30px]` = arbitrary 尺寸值。
  2) `top-1/2 -translate-y-1/2` = 垂直居中组合。
  3) `disabled:*` = disabled 状态样式。
  4) `active:scale-95` = 按压缩放到 95%。
- 本文件 class 全量说明：
  1) `flex`：弹性布局。
  2) `min-h-screen`：最小高度一屏。
  3) `items-center`：纵向居中。
  4) `justify-center`：横向居中。
  5) `overflow-hidden`：溢出隐藏。
  6) `bg-[#f1f1f1]`：页面背景。
  7) `text-center`：文字居中。
  8) `relative`：相对定位。
  9) `mb-8`：下外边距 32px。
  10) `w-[350px]`：宽度 350px。
  11) `max-w-full`：最大宽度 100%。
  12) `justify-between`：两端分布。
  13) `absolute`：绝对定位。
  14) `left-0`：左侧 0。
  15) `top-1/2`：顶部 50%。
  16) `h-1`：高度 4px。
  17) `w-full`：宽度 100%。
  18) `-translate-y-1/2`：上移自身 50%。
  19) `bg-[#383838]`：深灰底轨/禁用色。
  20) `bg-[#3498db]`：蓝色前景条/按钮。
  21) `transition-all`：过渡全部。
  22) `duration-300`：300ms。
  23) `z-10`：层级 10。
  24) `h-[30px]`：高 30px。
  25) `w-[30px]`：宽 30px。
  26) `rounded-full`：圆形。
  27) `border-[3px]`：边框 3px。
  28) `text-black`：黑字。
  29) `transition-colors`：颜色过渡。
  30) `border-[#3498db]`：激活边框蓝色。
  31) `border-[#383838]`：非激活边框深灰。
  32) `m-[5px]`：外边距 5px。
  33) `rounded-md`：中等圆角。
  34) `border-0`：无边框。
  35) `px-[30px]`：左右内边距 30px。
  36) `py-2`：上下内边距 8px。
  37) `text-sm`：小字号。
  38) `text-white`：白字。
  39) `active:scale-95`：按压缩放。
  40) `disabled:cursor-not-allowed`：禁用鼠标形态。
  41) `disabled:bg-[#383838]`：禁用背景色。
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
