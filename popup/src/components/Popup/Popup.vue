<template>
    <div class='popup-container' ref="popup" v-if="status">
        <div class="popup-content" ref="popupBody">
            <div class="popup-title">{{title}}</div>
            <div class="popup-msg">{{msg}}</div>
            <a class="popup-btn-close" href="javascript: void(0)" @click="hidePopup">x</a>
            <a class="popup-btn-confirm" href="javascript: void(0)" @click="hidePopup">OK</a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'popup'
}
</script>

<style lang="scss">
    div.popup-container{
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background: rgba(33, 33, 33, .5);
        box-sizing: content-box;
        div.popup-content{
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: #fff;
            width: 0;
            height: 0;
            transition: width,height .2s;
        }
        div.popup-title{
            width: 590px;
            height: 20px;
            padding: 5px;
            line-height: 20px;
            text-align: center;
            background: #3498db;
        }
        div.popup-msg{
            width: 588px;
            height: 239px;
            text-align: center;
            border: 1px solid #999;
            border-top: none;
            padding: 15px 5px;
            word-break: break-all;
        }
        a.popup-btn-close{
            position: absolute;
            top: 5px;
            right: 5px;
            display: block;
            width: 20px;
            height: 20px;
            line-height: 20px;
            font-size: 16px;
            text-align: center;
            text-decoration: none;
            color: #666;
            background: #f00;
        }
        a.popup-btn-confirm{
            position: absolute;
            bottom: 5px;
            left: 50%;
            transform: translateX(-50%);
            display: block;
            width: 80px;
            height: 30px;
            line-height: 30px;
            font-size: 16px;
            border-radius: 999px;
            text-align: center;
            text-decoration: none;
            color: #333;
            background: #bbb;
        }
    }
</style>