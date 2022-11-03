<template>
  <ul id="sectionControl" type="none">
    <li id="pageUlLi1" class="pageUlLi" :class="{ activeLi: currentIndex == 0 }"></li>
    <li id="pageUlLi2" class="pageUlLi" :class="{ activeLi: currentIndex == 1 }"></li>
    <li id="pageUlLi3" class="pageUlLi" :class="{ activeLi: currentIndex == 2 }"></li>
    <li id="pageUlLi4" class="pageUlLi" :class="{ activeLi: currentIndex == 3 }"></li>
    <li id="pageUlLi5" class="pageUlLi" :class="{ activeLi: currentIndex == 4 }"></li>
  </ul>
</template>
<script setup>
const { currentIndex } = defineProps(['currentIndex'])
</script>
<style scoped>
#sectionControl {
  position: fixed;
  right: 50px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 9999;
}

.activeLi {
  background-color: #fff;
}

li {
  width: 10px;
  height: 10px;
  margin: 0 10px;
  background: gray;
  cursor: pointer;
  margin: 20rem 0;
  border-radius: 50%;
}

@media screen and (max-width: 750px) {
  #sectionControl {
    right: 20px;
  }
}
</style>