<template>
  <article>
    <router-link :to="{ name: 'fruits' }" href="#">Close</router-link>
    <h2>Detalle de la fruta: {{ selectedFruit.name }}</h2>
  </article>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: 'FruitDetail',
  props: {
    id: {
      type: Number
    }
  },
  data: () => ({
    selectedFruit: {}
  }),
  computed: {
    ...mapGetters('fruits', {
      getFruitDetail: 'getFruitById'
    })
  },
  created() {
    this.selectedFruit = this.getFruitDetail(this.id);
  },
  async beforeRouteUpdate(to, _, next) {
    this.selectedFruit = this.getFruitDetail(to.params.id);
    next();
  }
};
</script>

<style lang="scss" scoped>
article {
  padding: 32px;
}
</style>
