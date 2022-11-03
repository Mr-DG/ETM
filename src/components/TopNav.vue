<template>
  <div class="top-nav">
    <div class="nav-left">
      <img src="../assets/imgs/pc/logo.png" alt="">
    </div>
    <div class="nav-right">
      <div class="nav-item" :class="{ active: currentIndex == 0 }">Background</div>
      <div class="nav-item" :class="{ active: currentIndex == 1 }">Platfrom</div>
      <div class="nav-item" :class="{ active: currentIndex == 2 }">Model</div>
      <div class="nav-item" :class="{ active: currentIndex == 3 }">Nodes</div>
      <div class="nav-item" :class="{ active: currentIndex == 4 }">Ledger</div>
      <div>Download</div>
    </div>
  </div>
</template>
<script setup>
defineProps({
  currentIndex: Number
})
</script>
<style scoped lang="less">
.top-nav {
  // box-sizing: border-box;
  max-width: 1200px;
  height: 80px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9999;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  padding: 0 40px;

  .nav-right {
    width: 770px;
    display: flex;
    justify-content: space-between;
    line-height: 80px;
    gap: 10px;
    font-size: 20px;
    color: #fff;
    height: 100%;

    div {
      cursor: pointer;
      padding: 0 5px;
    }

    .active {
      background-image: url('../assets/imgs/pc/active-background.png');
    }
  }
}

@media screen and (max-width: 750px) {
  .top-nav {
    display: none;
  }
}
</style>