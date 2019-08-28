import Vue from 'vue'
import Router from 'vue-router'
import {
    Message
} from 'element-ui'

Vue.use(Router)


const router = new Router({
    // mode: 'history',
    routes: [
        {
            path: '/',
            component: () => import('./views/home/home'),
            children: [
                {
                    path: '/',
                    redirect: 'main'
                },
                //===================================================== 主页 =======================================================
                {
                    path: 'main',
                    name: 'mian',
                    component: () => import('./views/main/main')
                },
                //===================================================== 会员管理 =======================================================
                {
                    path: 'viplist',
                    name: '会员列表',
                    component: () => import('./views/vipManagement/viplist')
                },
                {
                    path: 'viprelation',
                    name: '会员关系',
                    component: () => import('./views/vipManagement/viprelation')
                },
                {
                    path: 'viprank',
                    name: '会员等级',
                    component: () => import('./views/vipManagement/viprank')
                },
                {
                    path: 'vipranktest',
                    name: '会员等级变更日志',
                    component: () => import('./views/vipManagement/vipranktest')
                },
                //===================================================== 商品管理 =======================================================
                {
                    path: 'shoplist',
                    name: '商品列表',
                    component: () => import('./views/shopManagement/shoplist')
                },
                {
                    path: 'shoprecommend',
                    name: '推荐商品',
                    component: () => import('./views/shopManagement/shoprecommend')
                },
                {
                    path: 'shops',
                    name: '店铺商品',
                    component: () => import('./views/shopManagement/shops')
                },
                {
                    path: 'shopgift',
                    name: '礼包套餐',
                    component: () => import('./views/shopManagement/shopgift')
                },
                {
                    path: 'shoptype',
                    name: '商品分类',
                    component: () => import('./views/shopManagement/shoptype')
                },
                {
                    path: 'shopstandard',
                    name: '商品规格',
                    component: () => import('./views/shopManagement/shopstandard')
                },
                {
                    path: 'shopcomment',
                    name: '评论管理',
                    component: () => import('./views/shopManagement/shopcomment')
                },
                //===================================================== 价格管理 =======================================================
                {
                    path: 'viprice',
                    name: '会员价格管理',
                    component: () => import('./views/priceManagement/viprice')
                },
                //===================================================== 咨讯管理 =======================================================
                {
                    path: 'findlist',
                    name: '发现管理',
                    component: () => import('./views/consultManagement/findlist')
                },
                {
                    path: 'advertisement',
                    name: '广告管理',
                    component: () => import('./views/consultManagement/advertisement')
                },
                //===================================================== 收货管理 =======================================================
                {
                    path: 'receipt',
                    name: '收货管理',
                    component: () => import('./views/receiptManagement/receipt')
                },
                //===================================================== 收藏管理 =======================================================
                {
                    path: 'collect',
                    name: '收藏管理',
                    component: () => import('./views/collectManagement/collect')
                },
                //===================================================== 财务管理 =======================================================
                {
                    path: 'fundflow',
                    name: '资金流水',
                    component: () => import('./views/financeManagement/fundflow')
                },
                {
                    path: 'integral',
                    name: '积分明细',
                    component: () => import('./views/financeManagement/integral')
                },
                {
                    path: 'wholesale',
                    name: '批发卷明细',
                    component: () => import('./views/financeManagement/wholesale')
                },
                {
                    path: 'easy',
                    name: '易币明细',
                    component: () => import('./views/financeManagement/easy')
                },
                {
                    path: 'withdraw',
                    name: '提现审核',
                    component: () => import('./views/financeManagement/withdraw')
                },
                {
                    path: 'recharge',
                    name: '充值确认',
                    component: () => import('./views/financeManagement/recharge')
                },
                //===================================================== 订单管理 =======================================================
                {
                    path: 'order',
                    name: '订单管理',
                    component: () => import('./views/orderManagement/order')
                },
                //===================================================== 报表统计 =======================================================
                {
                    path: 'statement',
                    name: '统计概览',
                    component: () => import('./views/statementManagement/statement')
                },
                //===================================================== 系统设置 =======================================================
                {
                    path: 'menu',
                    name: '菜单管理',
                    component: () => import('./views/systemManagement/menu')
                },
                {
                    path: 'authority',
                    name: '权限管理',
                    component: () => import('./views/systemManagement/authority')
                },
                {
                    path: 'system',
                    name: '系统管理',
                    component: () => import('./views/systemManagement/system')
                }
            ]
        },
        {
            path: '/login',
            component: () => import('./views/login/login'),
            name: 'login'
        }
    ]
})

router.beforeEach((to, from, next) => {

    if (to.fullPath == '/') {
        if (sessionStorage.getItem('userInfo')) {
            next()
            return
        } else {
            Message({
                message: '会话已过期,请重新登录!',
                showClose: true,
                type: 'warning'
            });

            next({
                path: '/login'
            })
            return
        }
    } else if (to.fullPath == '/login'){
        next()
        return
    } else {
        if (sessionStorage.getItem('userInfo')) {
            next()
            return
        } else {
            Message({
                message: '会话已过期,请重新登录!',
                showClose: true,
                type: 'warning'
            });

            next({
                path: '/login'
            })
            return
        }
    }
})
export default router
