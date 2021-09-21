<template>
  <div id="app">
    <h1>Look ma, I'm an app</h1>
    <fruit-form />
    <Fruits class="fruits" />
  </div>
</template>

<script>
import FruitForm from './components/FruitForm.vue';
import Fruits from './components/Fruits.vue';
export default {
  name: 'App',
  components: {
    Fruits,
    FruitForm
  }
};
</script>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
}

button {
  padding: 4px 8px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
  display: flex;
  flex-direction: column;

  .fruits {
    flex: 1 1 0;
    max-height: 100%;
  }
}
</style>
