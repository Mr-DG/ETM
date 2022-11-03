<template>
  <div class="top-nav">
    <div class="more" @click="handleClick"><img src="../assets/imgs/mobile/more.png" alt=""></div>
    <div class="nav-left">
      <img src="../assets/imgs/pc/logo.png" alt="">
    </div>
    <div class="nav-right" :class="{ show: isShow }">
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
import { ref } from 'vue'
defineProps({
  currentIndex: Number
})

const isShow = ref(false)

const handleClick = () => {
  isShow.value = !isShow.value
}
</script>
<style scoped lang="less">
.top-nav {
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

  .more {
    width: 30px;
    display: none;

    img {
      width: 100%;
    }
  }
}

@media screen and (max-width: 750px) {
  .top-nav {
    justify-content: flex-end;
    padding: 0 30px;

    .more {
      display: block;
    }

    .nav-left,
    .nav-right {
      font-size: 24rem;
      display: none;
      position: absolute;
      right: 0;
      top: 120rem;
      width: 200rem;
      height: 500rem;
      background-color: rgba(0, 0, 0, .5);
      z-index: 9999;

      div {
        padding: 0;
        margin: 0;
        line-height: 80rem;
        height: 80rem;
        text-align: center;
      }
    }

    .show {
      display: block;
    }
  }
}
</style>