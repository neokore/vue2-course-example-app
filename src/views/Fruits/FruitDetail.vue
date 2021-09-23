<template>
  <article>
    <router-link :to="{ name: 'fruits' }" href="#">Close</router-link>
    <h2>Detalle de la fruta: {{ name }}</h2>
  </article>
</template>

<script>
export default {
  name: 'FruitDetail',
  props: {
    name: {
      type: String
    }
  }
};
</script>

<style lang="scss" scoped>
article {
  padding: 32px;
}
</style>
