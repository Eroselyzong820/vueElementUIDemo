<template>
    <el-button type="primary" @click="computeFn()" :disabled="disabledVal">{{msg}}</el-button>
</template>

<script>
    export default {
        props:['countParam'],
        data(){
          return{
              msg:'短信验证码',//初始化啊,
              disabledVal:false
          }
        },
        methods:{
            computeFn(){
                //定时器
                var num=this.countParam;
                this.msg=num+'秒';
                var time= setInterval(()=> {
                    num--;
                    this.msg=num+'秒';
                    this.disabledVal=true;
                    if(num<0){
                        clearInterval(time);
                        this.msg='重新获取';
                        this.disabledVal=false;
                    }

                },1000)
            }
        }
    }
</script>

<style scoped>

</style>