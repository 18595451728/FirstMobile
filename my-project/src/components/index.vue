<template>
    <div>
        <router-link tag="div" to="/hello">111</router-link>
        <h1>222</h1>
        <deep></deep>
    </div>
</template>

<script>
    import deep from './model/deep'
    export default {
        name: "index",
        components:{
            deep
        }
    }
</script>

<style scoped>

</style>
