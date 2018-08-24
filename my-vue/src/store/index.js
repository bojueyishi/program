import Vue from 'vue'
import Vuex from 'vuex'
import maincontent_store from './maincontent_store.js'
Vue.use(Vuex);

export default new Vuex.Store({
    /*state:{
        show:false
    }*/
   modules:{
   		maincontent: maincontent_store
   }
})