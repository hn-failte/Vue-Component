<template>
    <div class='confirm-board' ref="confirmBoard" @click.passive="confirmCancel">
        <div class="confirm-container" ref="confirmContainer" @click.stop="()=>{}">
            <div class="confirm-title" :style="'background: ' + bgColor">{{title}}</div>
            <div class="confirm-body">{{msg}}</div>
            <div class="confirm-btns">
                <a class="confirm-btn-confirm" href="javascript: void(0)" @click="confirmSuccess">{{ok}}</a>
                <a class="confirm-btn-cancel" href="javascript: void(0)" @click="confirmCancel">{{cancel}}</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'confirm'
}
</script>

<style lang="scss">
    div.confirm-board{
        position: fixed;
        top: 0;
        left: 0;
        z-index: 1000;
        width: 100vw;
        height: 100vh;
        background: rgba(33, 33, 33, .5);
        box-sizing: content-box;
        color: #fff;
        div.confirm-container{
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: #fff;
            width: 7rem;
            min-height: 3rem;
            transition: width,height .2s;

            div.confirm-title{
                width: 7rem;
                height: 1rem;
                line-height: 1rem;
                font-size: .36rem;
                font-weight: bolder;
                text-align: center;
            }
            div.confirm-body{
                width: 7rem;
                line-height: .44rem;
                box-sizing: border-box;
                padding: .5rem;
                font-size: .36rem;
                color: #333;
            }
            div.confirm-btns{
                    width: 100%;
                    height: 1rem;
                    display: flex;
                    justify-content: space-around;
                    align-items: center;
                &>a{
                    display: block;
                    width: 3rem;
                    height: .8rem;
                    line-height: .8rem;
                    font-size: .36rem;
                    border-radius: 999px;
                    text-align: center;
                    text-decoration: none;
                    color: #333;
                    background: #bbb;
                }
            }
        }
    }
</style>