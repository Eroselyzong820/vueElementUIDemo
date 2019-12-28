<template>
    <div class="transPre">
        <h1 class="title">购物车录入页</h1>
        <div class="form-box">
            <el-form :model="ruleForm" prop="ruleForm" :rules="rules" ref="ruleForm" label-width="100px"
                     class="demo-ruleForm">
                <el-form-item label="购买账户" prop="payAccNo" @click="selectAccno()">
                    <el-select v-model="ruleForm.payAccNo" placeholder="请选择付款账号">
                        <el-option
                                v-for="(item,key) in AccList"
                                :label="item.accNo"
                                :value="item.accName"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="商品名称" prop="goodsName">
                    <el-input v-model="ruleForm.goodsName"></el-input>
                </el-form-item>
                <el-form-item label="商品价格" prop="goodsAmount">
                    <el-input v-model="ruleForm.goodsAmount"></el-input>
                </el-form-item>
                <el-form-item label="商品数量" prop="goodsNum">
                    <el-input-number v-model="ruleForm.goodsNum" @change="goodsNumChange" :min="1" :max="10"
                                     label="描述文字"></el-input-number>
                </el-form-item>
                <el-form-item label="商品小计" prop="goodsTotal">
                    <div v-model="ruleForm.goodsTotal">{{goodsTotalcom}}</div>
                </el-form-item>
                <el-form-item prop="ruleForm">
                    <el-button type="primary" @click="submitForm('ruleForm')">添加到购物车</el-button>
                    <el-button @click="resetForm('ruleForm')">重置</el-button>
                </el-form-item>
                <el-table
                        :data="goodsList"
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
                <div class="rltxt">总计：{{allTotalPrice}}</div>
                <el-form-item v-if="goodsList.length>0">
                    <el-button type="primary" @click="nextSubmit('ruleForm')">下一步</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>
<!--scoped  :私有样式-->
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

    .el-table >>> {
        margin-top: 40px;
    }

    .rltxt {
        float: right;
        height: 20px;
        font-size: 20px;
        color: #333333;
        margin-top: 20px;
        margin-bottom: 30px;
    }

    .p0 {
        padding: 0;
    }

    .m0 {
        margin: 0;
    }
</style>
<script>
    export default {
        name: 'transPre',
        created() {
            this.selectAccno();
        },
        data() {
            return {
                ruleForm: {
                    payAccNo: '',
                    goodsName: '',
                    goodsAmount: '',
                    goodsNum: '1',
                    goodsTotal:''
                },
                goodsList: [],
                rules: {
                    payAccNo: [
                        {required: true, message: '请选择购买账户', trigger: 'blur'}
                    ],
                    goodsName: [
                        {required: true, message: '请输入商品名称', trigger: 'blur'}
                    ],
                    goodsAmount: [
                        {required: true, message: '请输入金额', trigger: 'blur'},
                        {
                            pattern: '^(([0-9]|([1-9][0-9]{0,9}))((/.[0-9]{1,2})?))$',
                            message: '金额格式输入错误，请检查重输',
                            trigger: 'blur'
                        }
                    ]
                },
                AccList: this.AccList

            }
        },
        methods: {
            goodsNumChange(value) {
                console.log(value);
            },
            submitForm(name) {
                // var self=this;
                //es6箭头函数避免this指向问题
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.goodsList.push({
                            "payAccNo": this[name].payAccNo,
                            "goodsName": this[name].goodsName,
                            "goodsAmount": this[name].goodsAmount,
                            "goodsNum": this[name].goodsNum,
                            "goodsTotal": this[name].goodsAmount * this[name].goodsNum
                        });
                        this[name].payAccNo = "";
                        this[name].goodsName = "";
                        this[name].goodsAmount = "";
                        this[name].goodsNum = "";
                        this[name].goodsTotal = "";
                    } else {
                        alert('请完善输入信息');
                        return false;
                    }
                });
            }, 
            nextSubmit(name) {
                this.$store.commit('transFromMute',this.goodsList);
                this.$router.push({path: 'transCom', query: {ruleForm: this.ruleForm}});
            },
            resetForm(name) {
                this.$refs[name].resetFields();
            },
            selectAccno() {
                // this.axios.get('/getAccNo.json')
                //     .then(function (response) {
                //         this.AccList=response.data.accInfo;
                //         console.log(response);
                //     })
                //     .catch(function (error) {
                //         console.log(error);
                //     });

                this.axios.post('/api/getAccno')
                    .then(res => {
                        this.AccList = res.data.List;
                        console.log(res);
                    })
                    .catch(err => {
                        console.log(err);
                    });
            }
        },
        computed: {
            goodsTotalcom: function () {
                return this.ruleForm.goodsAmount * this.ruleForm.goodsNum;
            },
            allTotalPrice: function () {
                var TotalPrice = 0;
                for(var i=0;i<this.goodsList.length;i++){
                    TotalPrice=this.goodsList[i].goodsTotal;
                    TotalPrice+=TotalPrice;
                }
                return TotalPrice;

            }
        }


    }
</script>
