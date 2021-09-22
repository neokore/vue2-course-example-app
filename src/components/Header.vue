<template>
  <header>
    <h1>Look ma, I'm an app</h1>
    <nav>
      <router-link :to="{ name: 'fruits' }">Frutas</router-link>
      |
      <router-link to="/wrong-name">Not found</router-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header'
};
</script>

<style lang="scss" scoped></style>
