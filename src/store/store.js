import Vue from 'vue'
import vuex from 'vuex'
Vue.use(vuex);

export default new vuex.Store({
    state: {
        djq:1,
        scdp:12,
        ye:123,
        jf:1230,
        // savefoods:sessionStorage.getItem('savefoods'),
        // vuextotal:sessionStorage.getItem('vuextotal'),
        // goodsobject:[]
    },
    mutations:{
        vuexfoods(state,newfoods){
            sessionStorage.getItem("vuexfoods",newfoods)
            state.vuexfoods = newfoods;
        },
        vuextotal(state,newtotal){
            sessionStorage.getItem("vuextotal",newtotal)
            state.vuextotal = newtotal;
        },
        goodsobject(state,newgoods){
            sessionStorage.getItem("goodsobject",newgoods)
            state.goodsobject = newgoods;
        }
    },
    getters:{

    }
    
})