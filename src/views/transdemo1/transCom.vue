<template>
    <div class="transCom form-box">
        <h2 @click="coundAdd(1)"> 确认页</h2>
        <el-form :model="comfirmForm" prop="comfirmForm" :rules="comfirmRules" ref="comfirmForm" label-width="100px"
                 class="demo-ruleForm">
                <el-table
                            :data="params.goodsList"
                        style="width: 100%"
                        height="250">
                    <el-table-column
                            prop="payAccNo"
                            label="购买账户"
                            width="120">
                    </el-table-column>
                    <el-table-column
                            prop="goodsName"
                            label="商品名称"
                            width="120">
                    </el-table-column>
                    <el-table-column
                            prop="goodsAmount"
                            label="商品价格"
                            width="120">
                    </el-table-column>
                    <el-table-column
                            prop="goodsNum"
                            label="商品数量"
                            width="120">
                    </el-table-column>
                    <el-table-column
                            prop="goodsTotal"
                            label="商品小计"
                            width="120">
                    </el-table-column>
                </el-table>

            <el-form-item class ="mt20" label="短信验证码" prop="token">
                <el-input class="shotInp" v-model="comfirmForm.token"></el-input>
                <MsgCode :countParam="60"></MsgCode>
            </el-form-item>
        </el-form>

        <div class="btn_content">
            <button class="el_button" @click="returnStep()">上一步</button>
            <button class="el_button el_button_primary" @click="comfirmSub('comfirmForm')">下一步</button>
        </div>
    </div>
</template>
<style scoped>
    .form-box {
        width: 600px;
        margin: 0 auto;
    }

    /*穿透修改模块样式*/
    .el-select >>> {
        display: block;
    }

    .el-checkbox-group >>> {
        display: block;
    }

    .btn_content {
        line-height: 40px;
        position: relative;
        font-size: 14px;
        margin: 0 auto;
    }
.mt20{
    margin-top: 20px;
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
        margin-left: 30px;
    }
    .shotInp{
        width:50%!important;
        margin-right: 20px;
    }
</style>
<script>
    // @ is an alias to /src
    //导入自定义组件
    import MsgCode from '../../components/countNum';
   import {mapState,mapMutations} from 'vuex'
    export default {
        name: 'transCom',
        props: {
            countParam: {
                type: Number,
                default: 30
            },
            goodsParams:[]
        }, components: {
            MsgCode
        },
        data() {
            return {
                // this.$store.state.transFromMute
                // this.$store.state.transFromAction   dispatch
                comfirmForm: {
                    token: ''
                },
                comfirmRules: {
                    token: [
                        {required: true, message: '请输入短信验证码', trigger: 'blur'},
                        {min: 6,max:6, message: '只能输入6位短信验证码', trigger: 'blur'},
                        {pattern: '[0-9]$', message: '短信验证码只能输入数字', trigger: 'blur'}
                    ]
                }
            }
        },
        created(){
          console.log(this.params)
        },
        methods: {
            // ...mapMutations(['transFromMute']),
            returnStep() {
                this.$router.push({path: 'transPre', query: this.$route.query});
                console.log(this.$route.query)//钩子函数接受录入的值
            },
            comfirmSub(name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.$router.push({path: 'transRes', query: this.$route.query});
                    } else {
                        return false;
                    }
                });
            }

        },
        computed:{
            ...mapState(['params'])
        }

    }
    //components 局部组件
</script>
