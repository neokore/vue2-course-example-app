<template>
  <div id="app">
    <h1>Look ma, I'm an app</h1>
    <Fruits />
  </div>
</template>

<script>
import Fruits from './components/Fruits.vue';
export default {
  name: 'App',
  components: {
    Fruits
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
