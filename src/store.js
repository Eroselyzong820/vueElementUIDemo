import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        count: 0,
        comfirmForm:'',
        params:{
            goodsList:[]
        }
    },
    mutations: {
        coundAdd(state) {
            console.log(state);
            state.count++;
        },
        transFromMute(state, params) {
            state.params.goodsList = params;
        }

    },
    actions: {
        transFromAction(ctx, params) {
            setTimeout(function () {
                state.transformInfo = params;
            } , 2000)
        }
    }
})
//mutations 追踪前后状态，但是异步会追踪不到
//actions ：可以做异步 dispatch  commit