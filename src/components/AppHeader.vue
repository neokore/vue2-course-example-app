<template>
  <header>
    <h1>Look ma, I'm an app</h1>
    <nav>
      <router-link :to="{ name: 'fruits' }"> Fruits </router-link>
      |
      <router-link to="/no-existe">Not Found</router-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'AppHeader'
};
</script>
