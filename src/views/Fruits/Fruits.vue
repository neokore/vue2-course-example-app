<template>
  <div class="fruits-component">
    <h2>Fruits!</h2>
    <section class="fruits-container">
      <ul class="fruits-list">
        <fruit-card
          v-for="(fruit, index) in fruits"
          :key="fruit.id"
          :fruit="fruit"
          @delete="deleteFruit(index)"
        />
      </ul>
      <aside class="fruits-detail">
        <router-view></router-view>
      </aside>
    </section>
    <footer>
      <router-link :to="{ name: 'fruit-create' }" tag="button">
        Create
      </router-link>
      <button v-if="!fruitsHasChanged" @click="restoreFruits()">Restore</button>
    </footer>
    <dialog :open="$route.matched.some(({ name }) => name === 'fruit-create')">
      <router-view @create="addFruit" name="dialog"></router-view>
    </dialog>
  </div>
</template>

<script>
import FruitCard from './components/FruitCard.vue';
import { getFruits } from '@/services/fruitService';

export default {
  name: 'Fruits',
  components: { FruitCard },
  props: {
    filter: {
      name: '',
      description: ''
    }
  },
  data: () => ({
    fruits: [],
    fruitsTemplate: []
  }),
  computed: {
    fruitsHasChanged() {
      return this.fruits.length === this.fruitsTemplate.length;
    }
  },
  methods: {
    addFruit(fruit) {
      this.fruits.push(fruit);
      this.$router.push({ name: 'fruit-detail', params: { name: fruit.name } });
    },
    filterFruits() {
      if (this.filter.name?.length || this.filter.description?.length) {
        this.fruits = this.fruits.filter(
          (elem) =>
            (this.filter.name?.length &&
              elem.name.includes(this.filter.name)) ||
            (this.filter.description?.length &&
              elem.description.includes(this.filter.description))
        );
      }
    },
    deleteFruit(index) {
      this.fruits = [
        ...this.fruits.slice(0, index),
        ...this.fruits.slice(index + 1)
      ];
    },
    restoreFruits() {
      this.fruits = [...this.fruitsTemplate];
    }
  },
  async created() {
    this.fruitsTemplate = await getFruits();
    this.restoreFruits();
    this.filterFruits();
  }
};
</script>

<style lang="scss" scoped>
.hidden {
  display: none;
}

.fruits-component {
  max-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  .fruits-container {
    display: flex;
    flex-direction: row;

    .fruits-detail {
      flex: 0 0 auto;
    }

    .fruits-list {
      flex: 1 1 auto;
    }
  }

  footer {
    position: sticky;
    bottom: 0;
    display: flex;
    flex-direction: row-reverse;
    gap: 12px;
    align-self: stretch;
    padding: 16px;
    border-top: 1px solid rgba(237, 251, 255, 0.667);
    background: rgba(223, 230, 255, 0.4);
    backdrop-filter: blur(4px);

    button,
    .button {
      background-color: #fffa;
    }
  }

  dialog {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>
