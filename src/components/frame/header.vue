<template>
    <div>
        <div class="header">
            <p class="logo_title">易淘优品</p>
            <div class="login_user" v-popover:popover>
                <img src alt />
                <i :class="!showHide ? 'el-icon-arrow-down hide' : 'el-icon-arrow-down show'"></i>
            </div>
        </div>
        <el-popover ref="popover" v-model='showHide' trigger="click">
            <ul class="popo_box">
                <li >修改密码</li>
                <li @click="clearLogin">退出登录</li>
            </ul>
        </el-popover>
    </div>
</template>

<script>
export default {
    name: "headbox",
    data() {
        return {
            showHide: false
        };
    },
    components: {},
    methods: {
        clearLogin() {
            this.$router.push({
                path: '/login'
            })
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
.header {
    width: 100%;
    height: 70px;
    line-height: 70px;
    background: linear-gradient(top, #2ea1f8, #1991eb);
    display: flex;
    justify-content: space-between;
    .logo_title{
        font-size: 30px;
        color: white;
        text-indent: 50px
    }
    .icon {
        width: 300px;
        height: 40px;
        margin: 15px 30px;
    }
    .login_user {
        display: flex;
        margin: 10px 30px;
        font-size: 20px;
        line-height: 70px;
        color: white;
        cursor: pointer;
        height: 48px;
        img {
            width: 36px;
            height: 36px;
            margin: auto;
            margin-right: 10px;
            border-radius: 50%;
            border: 1px solid;
        }
        i {
            line-height: 50px;
        }
        .hide {
            transition: all 0.5s;
        }
        .show {
            transform: rotateX(180deg);
            transition: all 0.5s;
        }
    }
}
.popo_box {
    text-align: center;
    li{
        cursor: pointer;
        padding: 10px 0;
    }
    li:hover{
        background: #e3f1ff;
        color: #409eff
    }
}
</style>
