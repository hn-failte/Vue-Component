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
      this.$confirm({
        success() {
          console.log(111)
        },
        cancel() {
          console.log(111)
        }
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
