<template>
  <div id="app">
    <router-view name="header"></router-view>
    <button @click="goToFruits()">Go to Fruits</button>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    goToFruits() {
      this.$router.push({ name: 'fruits' });
    }
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
  align-items: center;

  .fruits {
    flex: 1 1 0;
    max-height: 100%;
  }
}
</style>
