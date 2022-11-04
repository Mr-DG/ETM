<script setup>
import Home from './views/Home/Home.vue'
// 响应式（改变html的font-size）
function refreshRem() {
  const docEl = document.documentElement
  const width = window.innerWidth
  // pc端和移动端的font-size都为1px
  let rem = width > 750 ? width / 1920 : width / 750
  docEl.style.fontSize = rem + 'px'
}
refreshRem()

window.addEventListener('resize', refreshRem)
</script>

<template>
  <Home />
</template>

<style>

</style>
