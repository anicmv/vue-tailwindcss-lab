<template>
  <main class="min-h-screen bg-[#f7f7f8] px-5 py-14 text-[#111827]">
    <section class="mx-auto max-w-5xl">
      <h1 class="text-center text-4xl font-semibold tracking-tight md:text-5xl">Tailwind CSS Lab Gallery</h1>
      <p class="mt-3 text-center text-[#6b7280]">选择一个页面开始浏览</p>
      <div class="mx-auto mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <router-link
        v-for="page in pageList"
        :key="page.name"
        :to="page.path"
        class="group rounded-2xl border border-[#e5e7eb] bg-white p-6 shadow-[0_1px_2px_rgba(16,24,40,0.06)] transition hover:border-[#d1d5db] hover:shadow-[0_8px_24px_rgba(16,24,40,0.08)]"
      >
          <p class="text-xs font-medium uppercase tracking-[0.16em] text-[#9ca3af]">Demo {{ page.index }}</p>
          <h2 class="mt-3 text-xl font-semibold text-[#111827]">{{ page.title }}</h2>
      </router-link>
      </div>
    </section>
  </main>
</template>

<script setup>
import { pages } from '../router/index.js'

const pageList = pages.map((p, i) => ({
  ...p,
  index: String(i + 1).padStart(2, '0'),
}))
</script>
