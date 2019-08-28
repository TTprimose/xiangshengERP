<template>
    <div class="tabs" id="tabs">
        <div class="tabsBox">
            <el-tabs
                v-model="$store.state.frame.tabsActive"
                type="card"
                :closable="$store.state.frame.closeState"
                @tab-click="tabChange"
                @tab-remove="removeTab"
            >
                <el-tab-pane
                    v-for="item in $store.state.frame.tabs"
                    :key="item.id"
                    :label="item.name"
                    :name="item.id"
                ></el-tab-pane>
            </el-tabs>
        </div>
        <div class="colseBtn" @click="closeAll">
            <i class="el-icon-switch-button"></i>
        </div>
    </div>
</template>

<script>
export default {
    name: "",
    data() {
        return {
            state: true,
            item: ""
        };
    },
    components: {},
    inject: ["reload"],
    methods: {
        removeTab(targetName) {
            this.$store.dispatch("frame/removeTabs", targetName);
            if (this.$store.state.frame.tabs.length == 1) {
                this.$store.dispatch("frame/stateClose", false);
            }
        },
        tabChange(targetName) {
            this.$store.dispatch("frame/setTabs", targetName.name);
            this.findItem(this.$store.state.frame.treeData, targetName.name);
            this.$store.dispatch("frame/tabsChange", this.item);
            if (this.$route.path == this.item.path) {
                this.reload();
            } else {
                this.$router.push(this.item.path);
            }
        },
        findItem(data, id) {
            let list = data;

            for (let i = 0; i < list.length; i++) {
                if (list[i].id == id) {
                    this.item = list[i];
                } else {
                    this.findItem(list[i].children, id);
                }
            }
        },
        closeAll() {
            if (this.$store.state.frame.tabs.length > 1) {
                let list = this.utils.findList(
                    this.$store.state.frame.treeData
                );

                list.forEach(item => {
                    if (item.name == "主页") {
                        item.open = true;
                        this.$store.dispatch(
                            "frame/closeAll",
                            item.children[0]
                        ); //页面跳转并设置初始树打开和导航标识
                    }
                });
            }
        }
    },
    created() {},
    mounted() {},
    props: {},
    computed: {},
    watch: {}
};
</script>

<style scoped lang="less">
.tabs {
    height: 40px;
    display: flex;
    justify-content: space-between;
    line-height: 40px;
    .tabsBox {
        width: 97%;
    }
    .colseBtn {
        width: 3%;
        border: 1px solid #e4e7ed;
        color: #909399;
        text-align: center;
        cursor: pointer;
        font-size: 18px;
    }
}
</style>
