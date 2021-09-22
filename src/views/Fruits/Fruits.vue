<template>
  <div class="fruits-component">
    <h2>Fruits!</h2>
    <fruit-form
      @create="addFruit"
      class="form"
      :class="{ hidden: !showForm }"
    />
    <button @click="showForm = !showForm">
      {{ showForm ? 'Hide form' : 'Show form' }}
    </button>
    <div class="detail">
      <router-view></router-view>
    </div>
    <ul class="fruits-container">
      <li
        v-for="(fruit, index) in fruits"
        :is="getFruitComponent(fruit)"
        :key="fruit.id"
        :fruit="fruit"
        @delete="deleteFruit(index)"
      ></li>
    </ul>
    <footer v-if="!fruitsHasChanged">
      <button @click="restoreFruits()">Restore</button>
    </footer>
  </div>
</template>

<script>
import FruitCard from './components/FruitCard.vue';
import FruitForm from './components/FruitForm.vue';
import { getFruits } from '@/services/fruitsService';

export default {
  name: 'Fruits',
  components: { FruitCard, FruitForm },
  props: {
    id: {
      type: String
    }
  },
  data: () => ({
    fruits: [],
    fruitsTemplate: [],
    showForm: false
  }),
  computed: {
    fruitsHasChanged() {
      return this.fruits.length === this.fruitsTemplate.length;
    }
  },
  methods: {
    addFruit(fruit) {
      this.fruits.push(fruit);
    },
    deleteFruit(index) {
      this.fruits = [
        ...this.fruits.slice(0, index),
        ...this.fruits.slice(index + 1)
      ];
    },
    restoreFruits() {
      this.fruits = [...this.fruitsTemplate];
    },
    getFruitComponent(fruit) {
      return fruit.id % 2 === 1 ? 'fruit-card' : 'p';
    }
  },
  async created() {
    this.fruitsTemplate = await getFruits();
    this.restoreFruits();
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

  .form {
    max-width: 60%;
  }

  .fruits-container {
    flex: 1 1 auto;
  }

  footer {
    position: sticky;
    bottom: 0;
    align-self: stretch;
    padding: 16px;
    background: #f99;
  }
}
</style>
