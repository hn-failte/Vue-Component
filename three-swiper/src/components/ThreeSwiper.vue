<template>
    <v-touch :swipe-options="{direction: 'horizontal'}" @swipeleft="slideToLeft" @swiperight="slideToRight">
        <div class="swiper-container" ref="swiper">
            <!-- 完美轮播上补位 -->
            <div class="swiper-item" :style="anim" v-if="size > 0" :index="size-2"><div class="img">{{LeftItemContent[0]}}</div></div>
            <div class="swiper-item" :style="anim" v-if="size > 0" :index="size-1"><div class="img">{{LeftItemContent[1]}}</div></div>

            <!-- 轮播位 -->
            <div class="swiper-item" :style="anim" v-for="(item, index) in list" :key="index" :index="index"><div class="img">{{item}}</div></div>
            
            <!-- 完美轮播下补位 -->
            <div class="swiper-item" :style="anim" v-if="size > 0" :index="size > 0 ? 0 : ''"><div class="img">{{RightItemContent[0]}}</div></div>
            <div class="swiper-item" :style="anim" v-if="size > 0" :index="size > 0 ? 1 : ''"><div class="img">{{RightItemContent[1]}}</div></div>

            <!-- 轮播控制键 -->
            <div class="slide-left" @click="slideToRight"></div>
            <div class="slide-right" @click="slideToLeft"></div>

            <!-- 当前轮播位事件触发键 -->
            <v-touch tag="a" href="javascript: void(0);" @tap="fireEvent" class="item-select"></v-touch>
        </div>
    </v-touch>
</template>

<script>
/**
 * 三栏中央聚焦轮播图
 */
export default {
    name: 'three-swiper',
    data() {
        return {
            activeIndex: 2,
            loopAside: 1,
            animSetter: null,
            // 渐变动画配置
            animGetter: {
                "transition-property": "left,opacity,height,width,z-index",
                "transition-duration": ".3s",
                "transition-timing-function": "ease",
                "transition-delay": "0s",
            }
        };
    },
    props: {
        swiperList: {
            type: Array,
            default: () => []
        },
        autoplay: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        // 切换动画
        anim: {
            get() {
                return this.animSetter || this.animGetter
            },
            set(newAnim) {
                this.animSetter = newAnim
            }
        },
        // 需要渲染的列表
        list() {
            return this.swiperList;
        },
        // 需要渲染的列表的长度
        size() {
            return this.list.length;
        },
        // 轮播图节点
        swiper() {
            return this.$refs.swiper;
        },
        // 上补位内容
        LeftItemContent() {
            return this.size > 0 ? [this.list[this.list.length - 2], this.list[this.list.length - 1]] : '';
        },
        // 下补位内容
        RightItemContent() {
            return this.size > 0 ? [this.list[0], this.list[1]] : '';
        }
    },
    watch: {},
    methods: {
        // 序号减小
        slideToRight() {
            console.log('failte-swipe', 'ltr');
            console.log('failte-index', this.activeIndex);
            //在减小到1以下时，先变更序号，再触发动画
            if(this.activeIndex === 1) {
                this.activeIndex = this.size + 1;
                this.anim = {};
                this.activeItem(this.activeIndex);
                this.anim = null;
            }
            setTimeout(() => {
                console.log('failte-index', this.activeIndex);
                this.activeIndex = this.activeIndex - 1;
                console.log('failte-index', this.activeIndex);
                this.activeItem(this.activeIndex);
            }, 0);
        },
        // 序号增大
        slideToLeft() {
            console.log('failte-swipe', 'rtl');
            console.log('failte-index', this.activeIndex);
            //在增加到size+1以上时，先变更序号，再触发动画
            if(this.activeIndex === this.size + 1) {
                this.activeIndex = 1;
                this.anim = {};
                this.activeItem(this.activeIndex);
                this.anim = null;
            }
            setTimeout(() => {
                console.log('failte-index', this.activeIndex);
                this.activeIndex = this.activeIndex + 1;
                console.log('failte-index', this.activeIndex);
                this.activeItem(this.activeIndex);
            }, 0);
        },
        // 切换主、副显示项
        activeItem(payload) {
            let elList = this.swiper.getElementsByClassName('swiper-item');
            Array.from(elList).forEach((item, index) => {
                item.className = 'swiper-item';
                if (payload - 1 === index) {
                    item.className = 'swiper-item swiper-item-left';
                }
                if (payload === index) {
                    item.className = 'swiper-item swiper-item-active';
                }
                if (payload + 1 === index) {
                    item.className = 'swiper-item swiper-item-right';
                }
            });
        },
        fireEvent() {
            console.log(document.querySelector(".swiper-item-active").getAttribute("index"))
            alert(document.querySelector(".swiper-item-active").getAttribute("index"))
        }
    },
    mounted() {
        this.activeItem(this.activeIndex);
    }
};
</script>

<style lang="scss" scoped>
.swiper-container {
  margin: 0 auto;
  position: relative;
  height: 8.14rem;
  width: 8.24rem;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  overflow: unset;
}

.swiper-item {
  flex-shrink: 0;
  flex-grow: 0;
  width: 0;
  height: 0;
  display: none;
//   background: url('../../static/theme_phone.png') no-repeat top center;
  background: red;
  background-size: 100% 100%;
  opacity: 0.6;
  z-index: 1;
}

.swiper-item-left {
  width: 3.1rem;
  height: 6.51rem;
  display: block;
  position: absolute;
  left: 0;
  z-index: 2;
}

.swiper-item-active {
  display: block;
  position: absolute;
  left: 2.1rem;
  width: 3.88rem;
  height: 8.14rem;
  z-index: 3;
  opacity: 1;
  .img{
      color: yellowgreen;
  }
}

.swiper-item-right {
  width: 3.1rem;
  height: 6.51rem;
  display: block;
  position: absolute;
  left: 5.14rem;
  z-index: 2;
}

.slide-left {
  position: absolute;
  left: -0.75rem;
  z-index: 3;
  width: 0.55rem;
  height: 1.13rem;
//   background: url('../../static/theme_left.png') no-repeat top center;
  background: red;
  background-size: 100% 100%;
}

.slide-right {
  position: absolute;
  right: -0.75rem;
  z-index: 3;
  width: 0.55rem;
  height: 1.13rem;
//   background: url('../../static/theme_right.png') no-repeat top center;
  background: red;
  background-size: 100% 100%;
}

.item-select {
  display: block;
  background: transparent;
  width: 4.68rem;
  height: 1.6rem;
  position: absolute;
  bottom: -1.94rem;
  left: 50%;
  margin-left: -2.34rem;
  z-index: 4;
}
</style>