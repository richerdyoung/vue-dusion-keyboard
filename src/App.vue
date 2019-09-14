<template>
  <div id="app">
    拼音：
    <input type="text" data-mode="cn" />
    手写：
    <input type="text" data-mode="hand" />
    英文：
    <input type="text" data-mode="en" />
    数字：
    <input type="text" data-mode="num" />
    空：
    <input type="text"/>
    <vue-dusion-keyboard hand float HandWriteApi="http://localhost/HandWriteApi/words"></vue-dusion-keyboard>
    <!-- <vue-dusion-keyboard hand float :blurHide="false"></vue-dusion-keyboard> -->
    <!-- :blurHide="false" -->
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>

<style lang="scss">
#app {
  height: 1500px;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
