<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <three-swiper :swiperList="[1, 2, 3, 4, 5]"/>
  </div>
</template>

<script>
import ThreeSwiper from './components/ThreeSwiper.vue'

export default {
  name: 'app',
  components: {
    [ThreeSwiper.name]: ThreeSwiper
  }
}
</script>

<style lang="scss">
#app {
  text-align: center;
}
</style>
