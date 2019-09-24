<template>
    <div class="footer">
        <router-link tag="div" to="/">首页</router-link>
        <router-link tag="div" to="/store">商城</router-link>
        <router-link tag="div" to="/tiku">题库</router-link>
        <router-link tag="div" to="/mine">我的</router-link>
    </div>
</template>
s
<script>
    export default {
        name: "deep"
    }
</script>

<style scoped>
    .footer{
        width: 750px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        line-height: 100px;
        position: fixed;
        left: 0;
        bottom: 0;
        font-size: 30px;
        border-top: 1px solid #eee;
    }
    .footer>div{
        width: 25%;
        text-align: center;
    }
</style>
