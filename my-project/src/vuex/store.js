import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


const state={
    count:0
}
const mutations={
    add(state,n){
        this.state.count+=n
    },
    reduce(state,n){
        this.state.count-=n
        console.log(123456)
    }
}
const actions={
    yibu(context,n){
        context.commit('reduce',n)
    }
}
export default new Vuex.Store({
    state,
    mutations,
    actions
})
