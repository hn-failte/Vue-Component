<template>
    <div class="toast-container" ref="toast" v-if="status">{{msg}}</div>
</template>

<script>
export default {
    name: 'toast'
}
</script>

<style lang="scss">
.toast-container {
    position: fixed;
    bottom: 100px;
    left: 50%;
    transform: translateX(-50%);
    display: inline-block;
    padding: 5px 20px;
    font-size: 16px;
    min-height: 26px;
    word-break: break-all;
    line-height: 26px;
    max-width: 300px;
    opacity: 1;
    background: rgb(172, 172, 172);
    border-radius: 999px;
    transition: opacity 1s;
}
</style>