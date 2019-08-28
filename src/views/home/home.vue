<template>
    <div class="homeBox" ref="box">
        <HEADER></HEADER>
        <div class="view_box">
            <TREE class="view_left" :style="{'width': leftWidth - 41 + 'px'}"></TREE>
            <div>
                <HEADTABS :style="{'width': viewWidth - leftWidth + 40 + 'px'}"></HEADTABS>
                <div class="view_right" :style="{'width': viewWidth - leftWidth + 'px', 'height': viewHeight + 'px'}" ref='viewWidth'>
                <!-- <div class="view_right" :style="{'height': $store.state.device.winheight - 106 + 'px'}"> -->
                    <!-- <keep-alive>
                        <router-view></router-view>
                    </keep-alive> -->
                    <router-view v-if="isRouterAlive" ></router-view>
                </div>
            </div>
        </div>
        <FOOTER></FOOTER>
    </div>
</template>

<script>
import HEADER from "../../components/frame/header";
import FOOTER from "../../components/frame/footer";
import TREE from "../../components/frame/tree/tree";
import HEADTABS from '../../components/frame/headTabs'

export default {
    name: "home",
    data() {
        return {
            isRouterAlive: true,
            leftWidth: 290,
            viewWidth: null,
            viewHeight: null
        };
    },
    provide() {
        return {
            reload: this.reload
        }
    },
    components: {
        HEADER,
        FOOTER,
        TREE,
        HEADTABS
    },
    methods: {
        reload() {
            this.isRouterAlive = false
            this.$nextTick(() => {
                this.isRouterAlive = true
            })
        }
    },
    created() {
        this.viewWidth = this.$store.state.frame.device.winwidth
        this.viewHeight = this.$store.state.frame.device.winheight - 186

    },
    mounted() {
        let that = this

        window.onresize = function() {
            that.viewWidth = document.documentElement.clientWidth
        }
    },
    props: {},
    computed: {},
    watch: {}
};
</script>

<style scoped lang="less">
.homeBox {
    width: 100vw;
    height: 100vh;
    .view_box {
        display: flex;
        .view_right {
            padding: 20px;
            background: #f5f7f8;
            overflow: auto;
            // overflow: hidden;
        }
        .view_left{
            border-right: 1px solid #e7eaec
        }
    }
}
</style>
