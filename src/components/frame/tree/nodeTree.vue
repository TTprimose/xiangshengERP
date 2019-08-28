<template>
    <div class="nodeBox">
        <div
            v-for="(item, index) in nodeInfo"
            :key="index"
            :class="item.open ? 'modle_box active_box': 'modle_box'"
        >
            <div
                @click="openTree(item)"
                :style="{textIndent: item.resourceType * 20 + 'px'}"
                :class="$store.state.frame.tabsActive == item.id ? 'show_name active': 'show_name'"
            >
                <span>{{item.name}}</span>
                <i :class="item.open == false ? 'el-icon-arrow-down transhow' : 'el-icon-arrow-down tranopen'" v-if='item.children.length'></i>
            </div>
            <transition
                v-on:before-enter="beforeEnter"
                v-on:enter="enter"
                v-on:after-enter="afterEnter"
                name="draw"
            >
                <!-- v-show="item.open" -->
                <nodeBox
                    :nodeInfo="item.children"
                    :key="item.id"
                    class="children_box"
                    v-show="item.open"
                ></nodeBox>
            </transition>
        </div>
    </div>
</template>

<script>
export default {
    name: "nodeBox",
    data() {
        return {
            height: ""
        };
    },
    components: {},
    inject: ["reload"],
    methods: {
        openTree(item) {
            if (item.type == 1) {
                this.$store.dispatch("frame/setTree", item);
            } else {
                if (this.$route.path == item.path) {
                    this.reload();
                } else {
                    this.$store.dispatch("frame/addTabs", item);
                    this.$store.dispatch("frame/setTabs", item.id);
                    this.$store.dispatch("frame/stateClose", true);
                    this.$router.push(item.path);
                }
            }
        },

        beforeEnter(el) {
            el.style.height = "0";
        },
        enter(el) {
            el.style.height = el.scrollHeight + "px";
        },
        afterEnter(el) {
            el.style.height = "";
        }
    },
    created() {},
    mounted() {},
    props: {
        nodeInfo: {
            type: Array,
            default() {
                return [];
            }
        }
    },
    computed: {},
    watch: {}
};
</script>

<style scoped lang="less">
.nodeBox {
    display: flex;
    flex-wrap: wrap;
    .modle_box {
        width: 100%;
        .show_name {
            height: 40px;
            line-height: 40px;
            background: white;
            position: relative;
            color: #666;
            font-size: 14px;
            cursor: pointer;
            display: flex;
            justify-content: space-between;
            i{
                margin-right: 10px;
                line-height: 40px;
                font-size: 16px;
                transition: all 0.5s
            }
            .transhow{
                transition: all 0.5s
            }
            .tranopen{
                transform: rotateX(180deg);
                transition: all 0.5s
            }
        }
        .active {
            background: #e3f1ff;
            color: #409eff;

        }
    }
    .active_box .show_name{
        background: #e3f1ff;
    }
    .active_box .show_name::before {
        content: '';
        width: 5px;
        background: #409eff;
        position: absolute;
        left: 0;
        top:0;
        bottom: 0
    }
    .draw-enter-active,
    .draw-leave-active {
        overflow: hidden;
        height: 40px;
        transition: height 0.3s ease;
    }
    .draw-enter,
    .draw-leave-to {
        height: 0;
    }
}
</style>
