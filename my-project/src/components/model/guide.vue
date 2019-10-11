<template>
    <div class="guide">
        <div class="g-left">
            <img src="http://rongyuejiaoyu.com/static/mobile/images/logo.png" alt="">
            <div class="func">
                <router-link tag="a" to="">登录</router-link>/
                <router-link tag="a" to="">注册</router-link>
            </div>
        </div>
        <div class="g-right">
            <router-link tag="div" to="">
                <img src="http://rongyuejiaoyu.com/static/mobile/images/icon_search.png" alt="">
            </router-link>
            <router-link tag="div" to="">
                <img src="http://rongyuejiaoyu.com/static/mobile/images/icon_sort.png" alt="">
            </router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: "guide"
    }
</script>

<style scoped>
    .guide {
        width: 100%;
        height: 90px;
        line-height: 90px;
        background: #fff;
        padding: 0 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        box-sizing: border-box;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        position: fixed;
        left: 0;
        top: 0;
        z-index: 1111;
        box-shadow: 0 5px 10px -5px #cccccc;
    }
    .g-left{
        width: 320px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .g-left img{
        width: 160px;
    }
    .g-left a{
        color: #212775;
        font-size: 28px;
        margin: 0 5px;
    }
    .g-right{
        display: flex;
        align-items: center;
    }
    .g-right div{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .g-right img{
        width: 45px;
    }
    .g-right div:first-child img{
        width: 40px;
        margin-right: 35px;
    }


</style>
