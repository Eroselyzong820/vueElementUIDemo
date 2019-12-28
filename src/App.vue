<template>
  <div id="app">
    <div id="nav">
      <router-link to="/transPre">购物车交易</router-link>
      <!--<router-link to="/transCom">确认页</router-link> -->
      <!--<router-link to="/transRes">结果页</router-link> -->
      <!--路由的转换，切换页面  声明式跳转 （<a href=''>）-->
    </div>
    <router-view/>
    <!--router-view 占位符 加载页面其他的信息-->
  </div>
</template>
<style lang="stylus">
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50

#nav
  padding 30px
  a
    font-weight bold
    color #2c3e50
    &.router-link-exact-active
      color #42b983
</style>
