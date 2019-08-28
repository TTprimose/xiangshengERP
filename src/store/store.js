import Vue from 'vue'
import Vuex from 'vuex'
// import utils from '../utils/common'
import frame from './module/frame'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        frame
    }
})
