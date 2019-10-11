<template>
    <div>
        <guide></guide>
        <banner :banner="banner"></banner>
        <options></options>
        <recent :recent="recent"></recent>
        <deep></deep>
    </div>
</template>

<script>
    import deep from './model/deep'
    import banner from './model/banner'
    import guide from './model/guide'
    import options from './model/options'
    import recent from './model/recent'
    export default {
        name: "index",
        components:{
            deep,
            banner,
            guide,
            options,
            recent
        },
        data:function () {
            return {
                banner:[
                    'http://img.rongyuejiaoyu.com/uploads/20190930/9bba536e507e9a14f8ff1485c1ac97ef.jpg',
                    'http://img.rongyuejiaoyu.com/uploads/20190924/7b75c935a8ba2eee77672d3f21cda86b.jpg',
                    'http://img.rongyuejiaoyu.com/uploads/20190831/45389919ac354278761cb980432347bd.jpg'
                ],
                recent:{
                    title:'优势项目',
                    con:['http://rongyuejiaoyu.com/static/mobile/images/i_cfabg.png','http://rongyuejiaoyu.com/static/mobile/images/i_cfabg.png','http://rongyuejiaoyu.com/static/mobile/images/i_cfabg.png','http://rongyuejiaoyu.com/static/mobile/images/i_cfabg.png']
                },
            }
        },
        mounted(){
            console.log(this.$store.state.count)
        },
        methods:{
            choose(){
                var foodlist = this.foodlist,l = foodlist.length,n=parseInt(Math.random()*l)
                console.log(n)
                this.choosefood = foodlist[n]
            }
        }
    }
</script>

<style scoped>
    #app > div {
        background: #f5f9fc;
        padding-top: 90px;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        padding-bottom: 150px;
    }
</style>
