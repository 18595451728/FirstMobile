<template>
    <div class="container">

        <div class="thumb">
            <img src="http://rongyuejiaoyu.com/static/mobile/images/icon_kids.png" alt="">
        </div>
        <div class="thumb-c">
            <div class="thumb-con">
                <div class="c1">
                    <img src="http://rongyuejiaoyu.com/static/mobile/images/icon_s1.png" alt="">
                    <p>专项练习</p>
                </div>
                <div class="c1">
                    <img src="http://rongyuejiaoyu.com/static/mobile/images/icon_s2.png" alt="">
                    <p>真题模考</p>
                </div>
                <div class="c3">
                    <img src="http://rongyuejiaoyu.com/static/mobile/images/icon_s3.png" alt="">
                    <p>智能组卷</p>
                </div>
            </div>
            <div class="CFA">
                <h6>CFA题库</h6>
                <div class="cfalist">
                    <router-link tag="div" to="/question?cid=690" class="list">一级</router-link>
                    <router-link tag="div" to="/question?cid=691" class="list">二级</router-link>
                    <router-link tag="div" to="/question?cid=692" class="list">三级</router-link>
                </div>
            </div>
        </div>
        <deep></deep>
    </div>
</template>

<script>
    import deep from './model/deep.vue'

    export default {
        name: "tiku",
        components: {
            deep
        },
        data: function () {
            return {
                aaa: ''
            }
        },
        mounted() {
            console.log(this.$route.query.aaa)
            this.aaa = this.$route.query.aaa
        },
        methods: {}
    }
</script>

<style scoped>

    .thumb img {
        width: 100%;
        height: 420px;
    }

    .thumb-c {
        width: 100%;
        height: 100%;
        padding-top: 100px;
        position: relative;
    }

    .thumb-con {
        width: 684px;
        height: 180px;
        background: #fff;
        position: absolute;
        left: 50%;
        margin-left: -342px;
        top: -80px;
        box-shadow: #ccc 0 0 10px;
        -webkit-border-radius: 10px;
        -moz-border-radius: 10px;
        border-radius: 10px;
        padding: 28px 55px;
        box-sizing: border-box;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .thumb-con div {
        text-align: center;
    }

    .thumb-con div p {
        font-size: 28px;
        color: #333;
    }

    .thumb-con div:nth-child(1) img {
        width: 67px;
        height: 77px;
    }

    .thumb-con div:nth-child(2) img {
        width: 76px;
        height: 77px;
    }

    .thumb-con div:nth-child(3) img {
        width: 86px;
        height: 77px;
    }

    .CFA {
        padding: 0 40px;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }

    .CFA h6 {
        font-weight: 400;
        font-size: 30px;
        color: #303030;
        margin: 45px 0 25px 0;
    }

    .cfalist {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .list {
        width: 206px;
        height: 72px;
        line-height: 72px;
        background: #ecf7ef;
        font-size: 26px;
        text-align: center;
        -webkit-border-radius: 40px;
        -moz-border-radius: 40px;
        border-radius: 40px;
        float: left;
        display: inline;
        margin: 0 20px 20px 0;
        color: #49a45e;
    }
</style>
