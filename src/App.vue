<template>
  <div id="app">
   <!-- <div class="box">
      <div><p>CSS预编译（stylus）测试</p>
      </div>
      <ul>
        <li>items</li>
        <li>items</li>
        <li>items</li>
        <li>items</li>
        <li>items</li>
        <li>items</li>
      </ul>
    </div>-->
    <router-view />
  </div>
</template>

<script>
  export default {
    name: 'App',
  }
</script>

<style scoped lang="stylus">
  add(a,b)
    a + b
  sub(a,b)
    a - b
  compute(a,b,fun)
    fun(a,b)
  .box
    div
      p
        color:red
    ul
      list-style: none
      margin: compute(5,10,add)px
      li
        color: red
  #app
    background-color: black
    font-family: 'Avenir', Helvetica, Arial, sans-serif
    -webkit-font-smoothing: antialiased
    -moz-osx-font-smoothing: grayscale
    text-align: center
    color: #2c3e50
</style>
