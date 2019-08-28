import utils from '../../utils/common'
import router from '../../router'

const views = {
    namespaced: true,
    state: {
        //框架布局
        device: {
            winwidth: '',
            winheight: ''
        },
        treeData: [],
        userInfo: {},
        tabs: [],
        tabsActive: null,
        closeState: false

    },
    mutations: {
        // 框架布局
        changDevice(state, data) {
            state.device.winwidth = data.winwidth
            state.device.winheight = data.winheight
        },
        changTree(state, data) {
            state.treeData = utils.findTree(state.treeData, data)
            sessionStorage.setItem('tree', JSON.stringify(state.treeData))
        },
        tabsChangeTree(state, data) {
            state.treeData = utils.tabsChangeTree(state.treeData, data)
            sessionStorage.setItem('tree', JSON.stringify(state.treeData))
        },
        initTreeData(state, data) {
            state.treeData = data
        },
        initUserData(state, data) {
            state.userInfo = data
        },
        addTabsList(state, data) {
            let flag = true

            state.tabs.forEach(item => {
                if (item.id == data.id){
                    flag = false
                }
            })

            if (flag){
                state.tabs.push(data)
            }
            // state.tabs.push(data)

            sessionStorage.setItem('tabsInfo', JSON.stringify(state.tabs))
        },
        removeTabsList(state, data) {
            state.tabs.forEach((item, index) => {
                if (item.id == data) {
                    if (state.tabsActive == data) {
                        if (index == 0) {
                            state.tabsActive = state.tabs[index + 1].id
                            router.push(state.tabs[index + 1].path)
                            state.treeData = utils.tabsChangeTree(state.treeData, state.tabs[index + 1])
                        } else {
                            state.tabsActive = state.tabs[index - 1].id
                            router.push(state.tabs[index - 1].path)
                            state.treeData = utils.tabsChangeTree(state.treeData, state.tabs[index - 1])
                        }
                    }
                    state.tabs.splice(index, 1)
                }
            })
            sessionStorage.setItem('tabsInfo', JSON.stringify(state.tabs))
            sessionStorage.setItem('tree', JSON.stringify(state.treeData))
        },
        setTabsActive(state, data) {
            state.tabsActive = data
        },
        setTabsList(state, data) {
            state.tabs = data
        },
        changeClose(state, data){
            state.closeState = data
        },
        closeAllTabs(state, data) {
            state.tabs = []
            state.tabs.push(data)
            state.tabsActive = data.id
            if (router.history.current.path != data.path && router.history.current.path != '/login') {
                router.push(data.path)
            }
            sessionStorage.setItem('tabsInfo', JSON.stringify(state.tabs))
            sessionStorage.setItem('tabsActive', JSON.stringify(data.id))
            sessionStorage.setItem('tree', JSON.stringify(state.treeData))
        }
    },
    actions: {
        // 框架布局
        setDevice(context, data) { //适应宽高
            context.commit('changDevice', data)
        },
        setTree(context, data) { //打开关闭导航目录
            context.commit('changTree', data)
        },
        initTree(context, data) { //初始化导航
            context.commit('initTreeData', data)
            sessionStorage.setItem('tree', JSON.stringify(data))
        },
        initUser(context, data) { //初始化登陆用户
            context.commit('initUserData', data)
            sessionStorage.setItem('userInfo', JSON.stringify(data))
        },
        //标签导航
        addTabs(context, data) {
            context.commit('addTabsList', data)
        },
        removeTabs(context, data) {
            context.commit('removeTabsList', data)
        },
        setTabs(context, data) {
            context.commit('setTabsActive', data)
            sessionStorage.setItem('tabsActive', JSON.stringify(data))
        },
        initTabs(context, data) {
            context.commit('setTabsList', data)
        },
        stateClose(context, data) {
            context.commit('changeClose', data)
        },
        tabsChange(context, data){
            context.commit('tabsChangeTree', data)
        },
        closeAll(context, data) {
            context.commit('closeAllTabs', data)
        }
    }
}

export default views
