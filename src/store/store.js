import Vue from 'vue'
import vuex from 'vuex'
Vue.use(vuex);

export default new vuex.Store({
    state: {
        djq:1,
        scdp:12,
        ye:123,
        jf:1230,
        savefoods:[],
        vuextotal:"",
    },
    mutations:{
        vuexfoods(state,newfoods){
            state.savefoods = newfoods;
        },
        vuextotal(state,newtotal){
            state.vuextotal = newtotal;
        }
    },
    
})