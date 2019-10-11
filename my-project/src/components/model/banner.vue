<template>
    <div class="swiper-container banner">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="item in banner">
                <img :src="item"
                     alt="">
            </div>
        </div>
    </div>
</template>

<script>
    import Swiper from 'swiper'
    import 'swiper/dist/css/swiper.min.css'
    export default {
        name: "banner",
        props:['banner'],
        mounted() {
            console.log(this.banner)
            new Swiper('.banner', {
                loop: true,
            })

        }
    }
</script>

<style scoped>
    .swiper-container {
        height: 350px;
    }

    .swiper-container img {
        width: 100%;
        height: 100%;
    }
</style>
