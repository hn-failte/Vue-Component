<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <button @click="doit">do</button>
  </div>
</template>

<script>
export default {
  name: 'app',
  methods: {
    doit() {
      this.$toast({
        status: true,
        msg: 'ShitShitShit'
      })
    }
  },
}
</script>

<style lang="scss">
#app {
  text-align: center;
}
</style>
