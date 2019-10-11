<template>
    <div class="four_con">
        <ul>
            <li>
                <router-link to="">
                    <img src="http://rongyuejiaoyu.com/static/mobile/images/icon_index01.png" alt="">
                    <p>课程中心</p>
                </router-link>
            </li>
            <li>
                <router-link to="">
                    <img src="http://rongyuejiaoyu.com/static/mobile/images/icon_index02.png" alt="">
                    <p>直播中心</p>
                </router-link>
            </li>
            <li>
                <router-link to="">
                    <img src="http://rongyuejiaoyu.com/static/mobile/images/icon_index03.png" alt="">
                    <p>试听中心</p>
                </router-link>
            </li>
            <li>
                <router-link to="">
                    <img src="http://rongyuejiaoyu.com/static/mobile/images/icon_index06.png" alt="">
                    <p>题库</p>
                </router-link>
            </li>
            <li>
                <router-link to="">
                    <img src="http://rongyuejiaoyu.com/static/mobile/images/icon_index08.png" alt="">
                    <p>APP下载</p>
                </router-link>
            </li>
            <li>
                <router-link to="">
                    <img src="http://rongyuejiaoyu.com/static/mobile/images/icon_index04.png" alt="">
                    <p>热点资讯</p>
                </router-link>
            </li>

            <li>
                <router-link to="">
                    <img src="http://rongyuejiaoyu.com/static/mobile/images/icon_index05.png" alt="">
                    <p>问答</p>
                </router-link>
            </li>
            <li>
                <router-link to="">
                    <img src="http://rongyuejiaoyu.com/static/mobile/images/icon_index10.png" alt="">
                    <p>联系我们</p>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "options"
    }
</script>

<style scoped>
    .four_con {
        width: 100%;
        background: #fff;
        padding: 30px .0rem 0 .0rem;
        box-sizing: border-box;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        margin-bottom: 10px;
    }
    .four_con ul {
        *zoom: 1;
    }
    .four_con ul:before,
    .four_con ul:after {
        display: table;
        content: "";
    }
    .four_con ul:after {
        clear: both;
    }
    .four_con ul li {
        text-align: center;
        width: 25%;
        float: left;
        display: inline;
        margin-bottom: 30px;
    }
    .four_con ul li img {
        width: 75px;
        height: 75px;
        margin: 0 auto;
    }
    .four_con ul li p {
        margin-top: 15px;
        font-size: 26px;
        color: #232228;
        font-weight: 550;
    }
</style>
