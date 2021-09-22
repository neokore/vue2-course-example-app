<template>
  <h2>Detalle de la fruta: {{ name }}</h2>
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

<style lang="scss" scoped></style>
