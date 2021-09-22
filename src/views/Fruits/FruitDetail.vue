<template>
  <h2>Fruta #{{ id }}</h2>
</template>

<script>
export default {
  name: 'FruitDetail',
  props: {
    id: {
      type: String
    }
  }
};
</script>

<style lang="scss" scoped></style>
