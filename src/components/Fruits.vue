<template>
  <div class="fruits-component">
    <h2>Fruits!</h2>
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
import FruitCard from './FruitCard.vue';

export default {
  name: 'Fruits',
  components: { FruitCard },
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
  created() {
    setTimeout(() => {
      // Simular llamada API
      this.fruitsTemplate = [
        {
          id: 1,
          name: 'Apple',
          image: 'apple.png',
          description:
            'The usually round red, green, or yellow fruit of a small tree of the rose family.',
          link: 'https://www.wikipedia.org/wiki/Apple'
        },
        {
          id: 2,
          name: 'Orange',
          image: 'orange.png',
          description:
            'A rounded, reddish yellow, bitter or sweet citrus fruit that can be eaten.'
        },
        {
          id: 3,
          name: 'Lemon',
          image: 'lemon.png',
          description:
            'The yellowish, acid fruit of a subtropical citrus tree.',
          link: 'https://www.wikipedia.org/wiki/Lemon'
        },
        {
          id: 4,
          name: 'Pear',
          image: 'pear.png',
          description: 'The rounded fruit of a tree of the rose family.'
        },
        {
          id: 5,
          name: 'Strawberry',
          image: 'strawberry.png',
          description:
            'The fleshy red fruit of a stemless plant belonging to the rose family.',
          link: 'https://www.wikipedia.org/wiki/Strawberry'
        },
        {
          id: 6,
          name: 'Pineapple',
          image: 'pineapple.png',
          description:
            'A tropical plant having a short stem and rigid, spiny leaves.'
        },
        {
          id: 7,
          name: 'Watermelon',
          image: 'watermelon.png',
          description:
            'A large melon with a hard, green rind and sweet, juicy, usually red pulp.',
          link: 'https://www.wikipedia.org/wiki/Watermelon'
        },
        {
          id: 8,
          name: 'Grapes',
          image: 'grapes.png',
          description:
            'The smooth-skinned, green or purple fruit that grows in clusters on vines, may be eaten, and is used to make wine.'
        }
      ];
      this.restoreFruits();
    }, 1000);
  }
};
</script>

<style lang="scss" scoped>
.fruits-component {
  max-height: 100%;

  .fruits-container {
    flex: 1 1 auto;
    overflow-y: auto;
  }

  footer {
    position: sticky;
    bottom: 0;
    padding: 16px;
    background: #f99;
  }
}
</style>
