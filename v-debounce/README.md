# v-debounce

Vue节流指令

## 用法

我们在main.js中引入

```js
import Vue from 'vue';
import VDebounce from 'v-debounce';

Vue.use(VDebounce, {
    name: 'v-debounce',
    time: 3000
});
// name是可选的，默认为'v-debounce'
// time是可选的，默认为3000
```

然后在需要的地方引用该指令
```vue
<template>
    <!-- 默认会将click事件加入防抖 -->
    <button v-debounce="handler">点击</button>

    <!-- 若带上touch参数可以将touch事件加入防抖 -->
    <button v-debounce.touch="handler">点击</button>
</template>

<script>
export default {
    methods: {
        handler() {
            console.log('run')
        }
    }
}
</script>
```

支持的事件如下：

1、click
若无修饰符，默认为点击事件

2、touch

3、keyup

4、keypress

5、touchend

8、keydown