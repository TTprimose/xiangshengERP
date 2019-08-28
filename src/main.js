import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'
import ElementUI from 'element-ui'
import ECharts from 'vue-echarts'
import moment from 'moment'
import md5 from 'js-md5';

// 引入公用方法
import utils from './utils/base'
import json from './utils/json'

//echarts
import 'echarts/lib/chart/bar'
import 'echarts/lib/chart/line'
import 'echarts/lib/chart/gauge'
import 'echarts/lib/chart/radar'
import 'echarts/lib/chart/scatter'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/legend'

import 'element-ui/lib/theme-chalk/index.css'
// 覆盖样式
// 清除样式
import './assets/css/base.css'
// 覆盖样式
import './assets/css/common.css'
// 报告样式
import './assets/css/report.css'


Vue.prototype.utils = utils
Vue.prototype.json = json
Vue.prototype.$md5 = md5

Vue.component('v-chart', ECharts)

Vue.use(ElementUI, {
    size: 'small'
})

Vue.prototype.$moment = moment

var winheight = document.documentElement.clientHeight,
    winwidth = document.documentElement.clientWidth

store.dispatch('frame/setDevice', {winwidth: winwidth, winheight: winheight})
if (sessionStorage.getItem('tree')){ //导航结构
    store.dispatch('frame/initTree', JSON.parse(sessionStorage.getItem('tree')))
}
if (sessionStorage.getItem('userInfo')){ //用户信息
    store.dispatch('frame/initUser', JSON.parse(sessionStorage.getItem('userInfo')))
}
if (sessionStorage.getItem('tabsInfo')){ //标签导航
    store.dispatch('frame/initTabs', JSON.parse(sessionStorage.getItem('tabsInfo')))
    if (JSON.parse(sessionStorage.getItem('tabsInfo')).length > 1){
        store.dispatch('frame/stateClose', true)
    }
}
if (sessionStorage.getItem('tabsActive')){ //当前页面
    store.dispatch('frame/setTabs', JSON.parse(sessionStorage.getItem('tabsActive')))
}

Vue.config.productionTip = false

window.addEventListener('resize', function() {
    winheight = document.documentElement.clientHeight
    winwidth = document.documentElement.clientWidth
    // if (winheight < 700){
    //     winheight = 700
    // }
    // if (winwidth < 1380){
    //     winwidth = 1380
    // }
    store.dispatch('frame/setDevice', {winwidth: winwidth, winheight: winheight})
})

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')


