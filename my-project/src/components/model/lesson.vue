<template>
    <div>
        <div class="lesson CFA" v-for="(item,index) in lesson">
            <div class="recent-title">
                <span class="line"></span><span>{{item.lessonname}}热门课程推荐</span>
            </div>
            <div class="lesson_detail">
                <div class="swiper-container swiper-cfa">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide" v-for="(items,index1) in item.items">
                            <router-link  :to="{path:'/detail',query:{id:items.id}}">
                                <div class="video-list" :title="items.name">
                                    <router-link :to="{path:'/detail',query:{id:items.id}}"><img
                                            :src="items.pic"
                                            alt=""></router-link>
                                    <div class="video-con">
                                        <p class="video-name">
                                            {{items.name}}</p>
                                        <div class="mes-bottom">
                                            <p>￥{{items.price}}</p>
                                            <p>{{items.person}}人已购</p>
                                        </div>
                                    </div>
                                </div>
                            </router-link>
                        </div>

                    </div>
                </div>

            </div>
            <div class="look_more">
                <router-link tag="a" to="">更多{{item.lessonname}}课程》</router-link>
            </div>
        </div>
    </div>
</template>

<script>
    import Swiper from 'swiper'
    import 'swiper/dist/css/swiper.min.css'
    export default {
        name: "lesson",
        props:['lesson'],
        mounted() {
            console.log(this.lesson)
            var lesson = this.lesson
            for (var i in lesson){
                console.log(lesson[i])
                for(var j in lesson[i].items){
                    lesson[i].items[j].price = lesson[i].items[j].price.toFixed(2)
                }
            }
            this.lesson = lesson
                new Swiper('.swiper-cfa', {
                    slidesPerView: 2,
                });
        },
        methods:{
            tolearn(index,idx){
                console.log(index,idx)
            }
        }
    }
</script>

<style scoped>
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

    .lesson {
        width: 100%;
        background: #fff;
        padding-bottom: 10px;
    }

    .lesson .lesson_detail {
        padding: 0 30px;
    }

    .lesson .lesson_detail .video-list {
        width: 330px;
        height: 325px;
    }

    .lesson .lesson_detail .video-list a > img {
        width: 100%;
        height: 200px;
    }

    .lesson .lesson_detail .video-list .video-con {
        margin-top: 10px;
    }

    .lesson .lesson_detail .video-list .video-con .video-name {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        color: #333;
    }

    .lesson .lesson_detail .video-list .video-con .mes-bottom {
        margin-top: 10px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .lesson .lesson_detail .video-list .video-con .mes-bottom p:first-child {
        font-size: 24px;
        color: #ef3333;
        font-family: pictos medium;
    }

    .lesson .lesson_detail .video-list .video-con .mes-bottom p:first-child img {
        width: 31px;
        display: inline;
        vertical-align: middle;
        margin-right: 10px;
    }

    .lesson .lesson_detail .video-list .video-con .mes-bottom p:last-child {
        font-size: 24px;
        color: #999999;
    }

    .lesson .look_more a {
        width: 250px;
        height: 50px;
        line-height: 50px;
        border: 2px solid #2a4c7e;
        color: #2a4c7e;
        text-align: center;
        box-sizing: border-box;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        margin: 10px auto 0;
        display: block;
        -webkit-border-radius: 30px;
        -moz-border-radius: 30px;
        border-radius: 30px;
        font-size: 26px;
    }

    .book {
        padding-bottom: 40px;
    }
</style>
