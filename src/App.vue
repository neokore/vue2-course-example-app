<template>
  <div id="app">
    <router-view name="header"></router-view>
    <button @click="goToFrutas()">Go to frutas</button>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    goToFrutas() {
      this.$router.push({
        name: 'fruit',
        params: { id: 'apple' },
        query: { id: 'banana' }
      });
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
}
</style>
