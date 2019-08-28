<template>
    <div class="treeBox" :style="{'height': $store.state.frame.device.winheight - 106 + 'px'}" >
        <nodeTree :nodeInfo='$store.state.frame.treeData'></nodeTree>
    </div>
</template>

<script>
import nodeTree from "./nodeTree";
export default {
    name: "tree",
    data() {
        return {}
    },
    components: {
        nodeTree
    },
    methods: {},
    created() {},
    mounted() {},
    props: {},
    computed: {},
    watch: {}
};
</script>

<style scoped lang="less">
.treeBox {
    width:100%;
    background: white;
}
</style>
