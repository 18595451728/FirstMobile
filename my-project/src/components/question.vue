<template>
    <div class="container">
        <div class="header">
            <img src="http://rongyuejiaoyu.com/static/mobile/images/icon_return.png" alt="" @click="back">
        </div>
        <div class="allheader">
            <!--//小区-->
            <div class="commu">
                <div class="commu-con">
                    <div class="community" :class="{active:index==0}" v-for="(item,index) in community">
                        {{item.classname}}
                    </div>
                </div>
                <div class="xiala" @click="xiala()">
                    <img src="../assets/arrow-off.png" alt="">
                </div>
            </div>
            <div v-if="showcommunity" class="choosecom">
                <div v-for="(item,index) in community">{{item.classname}}</div>
            </div>

<!--//风格-->
            <div class="commu">
                <div class="commu-con">
                    <div class="community" :class="{active:index==0}" v-for="(item,index) in package">
                        {{item.classname}}
                    </div>

                </div>
                <div class="xiala" @click="xiala1()">
                    <img src="../assets/arrow-off.png" alt="">
                </div>
            </div>
            <div v-if="showpackage" class="choosecom">
                <div v-for="(item,index) in package">{{item.classname}}</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "question",
        data: function () {
            return {
                showcommunity: !1,
                showpackage:!1,
                cid: '',
                community: [
                    {
                        id: 0,
                        classname: '全部'
                    }
                ],
                package: [
                    {
                        id: 0,
                        classname: '全部'
                    }
                ]
            }
        },
        mounted: function () {
            var that = this
            console.log(this.$route.query.cid)
            var cid = this.$route.query.cid
            this.cid = cid
            this.$axios.post('/Package/packageCate', {}).then(function (res) {
                console.log(res.data.data)
                var data = res.data.data
                that.community = that.community.concat(data.estate)
                that.package = that.package.concat(data.packageStyle)

            })
        },
        methods: {
            xiala: function () {
                this.showcommunity = !this.showcommunity
            },
            xiala1: function () {
                this.showpackage = !this.showpackage
            },
            back:function () {
                this.$router.back(-1)
            }
        }
    }
</script>

<style scoped>
    .container {
        font-size: 28px;
    }
    .header{
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 85px;
        padding: 21px 28px;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        background: #000;
    }
    .header img{
        width: 23px;
        height: 42px;
    }
    .allheader {
        position: fixed;
        left: 0;
        top: 85px;
        width: 100%;
    }

    .commu {
        width: 100%;

        border-bottom: 1px solid #eee;
        position: relative;
    }

    .commu-con {
        white-space: nowrap;
        overflow-x: scroll;
        padding-right: 100px;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;

    }

    .xiala {
        position: absolute;
        right: 0;
        top: 0;
        width: 100px;
        height: 97px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: white;
    }

    .community {
        line-height: 100px;
        display: inline-block;
        width: 20%;
        text-align: center;
    }

    .community.active {
        color: red;
    }

    .choosecom {
        max-height: 400px;
        overflow-y: scroll;
    }

    .choosecom > div {
        padding-left: 30px;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        line-height: 80px;
        border-bottom: 1px solid #eee;
        font-size: 24px;
    }
</style>
