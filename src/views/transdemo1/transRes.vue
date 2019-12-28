<template>
    <div class="form-box">
        <h2> 结果页</h2>
        <div class="sucText">{{message}}</div>
        <div class="btn_content">
            <button class="el_button " type="primary" @click="returnBack()">返回</button>
            <button class="el_button el_button_primary ml20" type="primary" @click="more()">再來一筆</button>
        </div>
    </div>
</template>
<style scoped>
    .form-box {
        width: 500px;
        margin: 0 auto;
    }

    .btn_content {
        line-height: 40px;
        position: relative;
        font-size: 14px;
        margin: 0 auto;
    }

    .ml20 {
        margin-left: 20px !important;
    }

    .el_button {
        display: inline-block;
        line-height: 1;
        white-space: nowrap;
        cursor: pointer;
        background: #fff;
        border: 1px solid #dcdfe6;
        border-color: #dcdfe6;
        color: #606266;
        -webkit-appearance: none;
        text-align: center;
        box-sizing: border-box;
        outline: none;
        margin: 0;
        transition: .1s;
        font-weight: 500;
        -moz-user-select: none;
        -webkit-user-select: none;
        -ms-user-select: none;
        padding: 12px 20px;
        font-size: 14px;
        border-radius: 4px;
    }

    .el_button_primary {
        color: #fff;
        background-color: #409eff;
        border-color: #409eff;
    }

    .sucText {
        color: #53bc63;
        font-size: 50px;
        text-align: center;
        margin-bottom: 100px;
    }

</style>
<script>
    // @ is an alias to /src
    import {mapState,mapMutations} from 'vuex'
    export default {
        name: 'transRes',
        data() {
            return {
                message: "成功啦"
            }
        },
        methods: {
            returnBack() {
                this.$router.push({path: 'transCom', query: this.$route.query});
            },
            more() {
                this.$router.push({path: 'transPre'});
            }
        },
        computed: {
            ...mapState(['params'])
        }
    }
</script>
