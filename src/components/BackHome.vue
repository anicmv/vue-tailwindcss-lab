<!--
Tailwind 样式笔记（BackHome）：
- 语法拆解示例：
  1) `px-3` = `p`(padding) + `x`(left/right) + `3`(0.75rem = 12px)。
  2) `py-2` = `p` + `y`(top/bottom) + `2`(0.5rem = 8px)。
  3) `text-sm` = font-size token（0.875rem），不是 spacing。
  4) `hover:bg-white/80` = hover 状态下背景白色 80% 不透明度。
- 本组件关键类：
  1) `fixed z-[1000]`：固定定位并提升层级（arbitrary z-index）。
  2) `rounded-full border border-slate-200/80`：胶囊圆角 + 浅色边框。
  3) `bg-white/70 backdrop-blur-sm`：半透明底 + 背景轻模糊。
  4) `text-slate-700 shadow-[...]`：深灰文字 + 自定义轻阴影。
  5) `cursor-grab active:cursor-grabbing select-none`：拖拽手势与防文字选中。
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
