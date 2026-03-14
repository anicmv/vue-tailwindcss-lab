<!--
Tailwind 样式笔记（BackHome）：
- 命名拆解：
  1) `px-3` = `p`(padding) + `x`(left/right) + `3`(spacing scale = 0.75rem = 12px)。
  2) `py-2` = `p` + `y`(top/bottom) + `2`(0.5rem = 8px)。
  3) `border-slate-200/80` = `border-color: slate-200` 且透明度 80%。
  4) `bg-white/70` = 白色背景，70% 不透明度；`hover:bg-white/80` = hover 时 80%。
  5) `z-[1000]`、`shadow-[...]` = arbitrary value（方括号自定义值）。
- 本文件 class 全量说明（按出现顺序）：
  1) `fixed`：`position: fixed`。
  2) `z-[1000]`：层级 1000。
  3) `select-none`：禁用文本选择。
  4) `rounded-full`：最大圆角（胶囊/圆形）。
  5) `border`：1px 边框。
  6) `border-slate-200/80`：浅灰半透明边框。
  7) `bg-white/70`：半透明白底。
  8) `px-3`：左右内边距 12px。
  9) `py-2`：上下内边距 8px。
  10) `text-sm`：字体 0.875rem。
  11) `leading-none`：行高 1。
  12) `text-slate-700`：深灰文字色。
  13) `shadow-[0_1px_2px_rgba(16,24,40,0.08)]`：自定义轻阴影。
  14) `backdrop-blur-sm`：背景模糊（小强度）。
  15) `cursor-grab`：默认抓取手型。
  16) `hover:bg-white/80`：悬停时背景更实。
  17) `active:cursor-grabbing`：按下时抓取中手型。
-->
<template>
    <div
        ref="btnRef"
        class="fixed z-[1000] select-none rounded-full border border-slate-200/80 bg-white/70 px-3 py-2 text-sm leading-none text-slate-700 shadow-[0_1px_2px_rgba(16,24,40,0.08)] backdrop-blur-sm cursor-grab hover:bg-white/80 active:cursor-grabbing"
        :style="{ left: x + 'px', top: y + 'px' }"
        @mousedown="onMouseDown"
    >
        ← 首页
    </div>
</template>

<script setup>
import { ref, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const btnRef = ref(null)

const x = ref(16)
const y = ref(16)

let isDragging = false
let moved = false
let startX = 0
let startY = 0
let originX = 0
let originY = 0

const clamp = (v, min, max) => Math.min(Math.max(v, min), max)

const onMouseMove = (e) => {
    if (!isDragging) return

    const dx = e.clientX - startX
    const dy = e.clientY - startY

    if (Math.abs(dx) > 3 || Math.abs(dy) > 3) moved = true

    const btnW = btnRef.value?.offsetWidth || 80
    const btnH = btnRef.value?.offsetHeight || 36
    const maxX = window.innerWidth - btnW - 8
    const maxY = window.innerHeight - btnH - 8

    x.value = clamp(originX + dx, 8, maxX)
    y.value = clamp(originY + dy, 8, maxY)
}

const onMouseUp = () => {
    if (!isDragging) return
    isDragging = false

    document.removeEventListener('mousemove', onMouseMove)
    document.removeEventListener('mouseup', onMouseUp)

    // 只有“没拖动”才跳首页
    if (!moved) {
        router.push('/')
    }

    moved = false
}

const onMouseDown = (e) => {
    if (e.button !== 0) return
    e.preventDefault()

    isDragging = true
    moved = false
    startX = e.clientX
    startY = e.clientY
    originX = x.value
    originY = y.value

    document.addEventListener('mousemove', onMouseMove)
    document.addEventListener('mouseup', onMouseUp)
}

onUnmounted(() => {
    document.removeEventListener('mousemove', onMouseMove)
    document.removeEventListener('mouseup', onMouseUp)
})
</script>
