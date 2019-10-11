<template>
    <div class="recent">
        <div class="recent-title">
            <span class="line"></span><span>{{recent.title}}</span>
        </div>
        <div class="recent-list">
            <router-link tag="div" to="" v-for="item in recent.con"><img :src="item"
                                              alt=""></router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: "recent",
        props:['recent']
    }
</script>

<style scoped>
    .recent {
        width: 100%;
        background: #ffffff;
    }

    .recent-title {
        line-height: 113px;
        font-family: pictos bold;
        font-size: 34px;
        font-weight: 550;
        padding: 0 20px;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }

    .line {
        display: inline-block;
        width: 4px;
        height: 32px;
        background: #212775;
        -webkit-border-radius: 2px;
        -moz-border-radius: 2px;
        border-radius: 2px;
        vertical-align: middle;
        margin-right: 10px;
    }

    .recent .recent-list {
        background: #ffffff;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        padding: 0 22px;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }
    .recent .recent-list>div{
        margin-bottom: 10px;
    }
    .recent .recent-list img {
        width: 338px;
        height: 120px;
    }
</style>
