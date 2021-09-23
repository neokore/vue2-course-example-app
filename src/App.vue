<template>
  <div id="app">
    <router-view name="header"></router-view>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

button,
.button {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8px 16px;
  border: 1px solid #0004;
  border-radius: 4px;
  color: inherit;
  text-decoration: none;
  box-shadow: 0 0 0 #0005;
  transition: box-shadow 0.15s ease-out;
  cursor: pointer;

  &:hover {
    box-shadow: 0 4px 8px 0 #0003;
  }
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
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
