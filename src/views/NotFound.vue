<template>
  <section class="home">
    <h1>404: Not Found</h1>
    <router-link to="/" class="button"> Back to home </router-link>
  </section>
</template>

<script>
export default {
  name: 'NotFound'
};
</script>

<style lang="scss" scoped>
.home {
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    padding: 8px 0 4px;
    margin-bottom: 32px;
  }
}
</style>
