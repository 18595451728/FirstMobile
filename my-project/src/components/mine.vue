<template>
    <div>
        <h1>个人中心</h1>
        <deep></deep>
        <div>{{$store.state.count}}</div>
        <div @click="add()" class="changenum">加</div>
        <div @click="reduce()" class="changenum">减</div>
        <div @click="yibu()" class="changenum">异步减</div>
    </div>
</template>

<script>
    import deep from './model/deep'
    export default {
        name: "mine",
        components:{
            deep
        },
        methods:{
            add(){
                this.$store.commit('add',5)
            },
            reduce(){
                this.$store.commit('reduce',15)
            },
            yibu(){
                this.$store.dispatch('yibu',100)
                console.log(10000)
            }
        }
    }
</script>

<style scoped>
.changenum{
    width: 100px;
    line-height: 50px;
    text-align: center;
    background: red;
    color: white;
    margin-bottom: 10px;
}
</style>
