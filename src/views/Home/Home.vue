<template>
  <div class="main">
    <TopNav :currentIndex="currentIndex" />
    <Control :currentIndex="currentIndex" />
    <Section1 :class="{
      active: currentIndex == 0,
      preActive: prevIndex == 0,
      sectionMoveFromTop: !direction && currentIndex == 0,
    }" />
    <Section2 :class="{
      active: currentIndex == 1,
      preActive: prevIndex == 1,
      sectionMoveFromBottom: direction && currentIndex == 1,
      sectionMoveFromTop: !direction && currentIndex == 1
    }" />
    <Section3 :class="{
      active: currentIndex == 2,
      preActive: prevIndex == 2,
      sectionMoveFromBottom: direction && currentIndex == 2,
      sectionMoveFromTop: !direction && currentIndex == 2
    }" />
    <Section4 :class="{
      active: currentIndex == 3,
      preActive: prevIndex == 3,
      sectionMoveFromBottom: direction && currentIndex == 3,
      sectionMoveFromTop: !direction && currentIndex == 3
    }" />
    <Section5 :class="{
      active: currentIndex == 4,
      preActive: prevIndex == 4,
      sectionMoveFromBottom: direction && currentIndex == 4,
      sectionMoveFromTop: !direction && currentIndex == 4
    }" />
  </div>
</template>
<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import TopNav from '../../components/TopNav.vue'
import Control from './Control.vue'
import Section1 from './Section1.vue'
import Section2 from './Section2.vue'
import Section3 from './Section3.vue'
import Section4 from './Section4.vue'
import Section5 from './Section5.vue'
const navItem = document.getElementsByClassName('nav-item')
const pageUlLi = document.getElementsByClassName('pageUlLi')
// 要跳转的section
const currentIndex = ref(0)
// 上一个section
const prevIndex = ref()
// 记录往上滚动还是往下滚动
const direction = ref(true)
// 记录是否是点击触发
const isClick = ref(false)

// 切换section
const toSection = (index) => {
  if (isClick.value) {
    prevIndex.value = currentIndex.value
    isClick.value = false
  }
  currentIndex.value = index
}

// 向上滚动回调
const upFn = () => {
  direction.value = false
  // 向上滚动
  // 如果是第一个section，则不能往上跳
  if (currentIndex.value === 0) {
    return
  }
  prevIndex.value = currentIndex.value
  currentIndex.value--
  toSection(currentIndex.value)
}
// 向下滚动回调
const downFn = () => {
  direction.value = true
  // 向下滚动
  // 最后一个section不滚动
  if (currentIndex.value === 4) {
    return
  }
  prevIndex.value = currentIndex.value
  currentIndex.value++
  toSection(currentIndex.value)
}
// 滚动鼠标回调函数
const scrollFunc = (e) => {
  if (e.wheelDelta > 0) {
    upFn()
  } else {
    downFn()
  }
}

onMounted(() => {
  for (let i = 0; i < navItem.length; i++) {
    pageUlLi[i].addEventListener('click', () => {
      isClick.value = true
      toSection(i)
    })
  }
  for (let i = 0; i < navItem.length; i++) {
    navItem[i].addEventListener('click', () => {
      isClick.value = true
      toSection(i)
    })
  }
})

// 销毁滚动事件
const destroyScroll = () => {
  window.removeEventListener('mousewheel', a)
}
onUnmounted(() => {
  destroyScroll()
})

// 节流函数
function throttle(fn, delay) {
  let activeTime = 0
  return function () {
    const currentTime = Date.now()
    // 如果当前时间与上次执行的时间之差大于delay，执行一次fn
    if (currentTime - activeTime > delay) {
      fn.apply(this, arguments)
      activeTime = Date.now()
    }
  }
}
// 监听鼠标滚动事件
const a = throttle(scrollFunc, 700)
window.addEventListener('mousewheel', a)

//////////////////////////////////////
/////////// 处理移动端滑动//////////////
//////////////////////////////////////
const touch = () => {
  let startPageY
  let endPageY
  const touchMove = (e) => {
    endPageY = e.changedTouches[0].pageY
    if (startPageY - endPageY > 0) {
      downFn()
    } else if (startPageY - endPageY < 0) {
      upFn()
    } else {
      console.log('没滑动')
    }
  }
  const b = throttle(touchMove, 700)
  // 获取触碰屏幕时的pageY
  window.addEventListener('touchstart', function (e) {
    startPageY = e.changedTouches[0].pageY
  })
  // 监听手指滑动
  window.addEventListener('touchmove', b, false)
}
touch()

</script>
<style scoped>
.main {
  width: 100%;
  height: 100%;
  position: relative;
}

.section {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  z-index: 10;
}

.active {
  z-index: 999;
}

.preActive {
  z-index: 99;
}

.isFooterShow {
  visibility: visible;
}

/* 动效 */
/* page向下滚动动效 */
.sectionMoveFromBottom {
  animation: moveFromBottom 0.65s cubic-bezier(0.45, 0.05, 0.55, 0.95);
}

@keyframes moveFromBottom {
  from {
    -webkit-transform: translate3d(0%, 100%, 1px) scale(0.75, 1);
  }

  to {
    -webkit-transform: translate3d(0%, 0%, 1px) scale(1, 1);
  }
}

/* page向上滚动动效 */
.sectionMoveFromTop {
  transform-origin: top;
  -webkit-animation: moveFromTop 0.65s cubic-bezier(0.45, 0.05, 0.55, 0.95);
  animation: moveFromTop 0.65s cubic-bezier(0.45, 0.05, 0.55, 0.95);
}

@keyframes moveFromTop {
  from {
    -webkit-transform: translate3d(0%, -100%, 1px) scale(0.75, 1);
  }

  to {
    -webkit-transform: translate3d(0%, 0%, 1px) scale(1, 1);
  }
}

/* footer出现动效 */
.footer-show {
  transform: translateY(-414rem);
  -webkit-animation: showFooter 0.4s cubic-bezier(0.45, 0.05, 0.55, 0.95);
  animation: showFooter 0.4s cubic-bezier(0.45, 0.05, 0.55, 0.95);
}

@keyframes showFooter {
  from {
    -webkit-transform: translateY(0px);
  }

  to {
    -webkit-transform: translateY(-414rem);
  }
}

/* footer消失动效 */
.footer-hide {
  transform: translateY(0px);
  -webkit-animation: hideFooter 0.4s cubic-bezier(0.45, 0.05, 0.55, 0.95);
  animation: hideFooter 0.4s cubic-bezier(0.45, 0.05, 0.55, 0.95);
}

@keyframes hideFooter {
  from {
    transform: translateY(-414rem);
  }

  to {
    transform: translateY(0px);
  }
}
</style>