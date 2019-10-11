<template>
    <div>
        <guide></guide>
        <banner :banner="banner"></banner>
        <recent :recent="recent"></recent>
        <keep-alive>
            <lesson :lesson="lessons"></lesson>
        </keep-alive>
        <deep></deep>
    </div>
</template>

<script>

    import deep from './model/deep'
    import guide from './model/guide'
    import banner from './model/banner'
    import recent from './model/recent'
    import lesson from './model/lesson'

    export default {
        name: "store",
        components: {
            deep,
            guide,
            banner,
            recent,
            lesson
        },
        data() {
            return {
                banner: ['http://img.rongyuejiaoyu.com/uploads/20190924/7b75c935a8ba2eee77672d3f21cda86b.jpg', 'http://img.rongyuejiaoyu.com/uploads/20190831/45389919ac354278761cb980432347bd.jpg', 'http://img.rongyuejiaoyu.com/uploads/20190601/746260718aa1a782a7f98d5714d595a1.jpg']
                ,recent:{
                    title:'必看专区',
                    con:['http://www.rongyuejiaoyu.com/static/index/images/adver_radio.jpg','http://www.rongyuejiaoyu.com/static/index/images/adver_book.png']
                },
                lessons:[
                    {
                        lessonname:'CFA',
                        items:[
                            {   id:195,
                                pic:'http://global.rycfa.com/image/default/B0D9EF42EF224E12A2BB6412B4D9562E-6-2.jpg',
                                name:'CFA私播持证通关班',
                                price:7980.00,
                                person:5606
                            },
                            {id:171,
                                pic:'http://global.rycfa.com/image/default/DB84E0146E48427FA0927113B337B9CE-6-2.jpg',
                                name:'CFA持证通关智课',
                                price:7980.00,
                                person:4925
                            },
                            {id:169,
                                pic:'http://global.rycfa.com/image/default/DAB0A08DF678472DB35766898DBDDA2A-6-2.jpg',
                                name:'EIPB金融硕士~2019尼斯大学EIPB金融硕士火热招生中',
                                price:98000.00,
                                person:663
                            },
                            {id:208,
                                pic:'http://global.rycfa.com/image/default/FCC4F3DE77964520AA5255B1C8E0AB78-6-2.jpg',
                                name:'CFA+FRM双证菁英计划面授课',
                                price:35980.00,
                                person:3901
                            }

                        ]
                    },
                    {
                        lessonname:'FRM',
                        items:[
                            {id:198,
                                pic:'http://global.rycfa.com/image/default/8810460B81B84B14AF278AFAF6FF1A52-6-2.jpg',
                                name:'FRM全科面授课程',
                                price:24800.00,
                                person:3863
                            },
                            {id:174,
                                pic:'http://global.rycfa.com/image/default/4B22F7BA6AAA47A5BB35CDCD9C4E2DC6-6-2.jpg',
                                name:'FRM持证通关智课',
                                price:6980.00,
                                person:6868
                            },
                            {id:150,
                                pic:'http://global.rycfa.com/image/default/54C1EABD6C124D75ACD037C2DF503668-6-2.jpg',
                                name:'FRM二级押题班',
                                price:398.00,
                                person:2397
                            }

                        ]
                    }
                ]
            }
        }
    }
</script>

<style scoped>
    #app > div {
        padding-top: 90px;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        padding-bottom: 150px;
    }
</style>
