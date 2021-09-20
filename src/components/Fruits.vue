<template>
  <div>
    <h2>Fruits!</h2>
    <ul class="fruits-container">
      <li v-for="{ id, name, description, link, image } in fruits" :key="id">
        <img :src="require(`../assets/fruits/${image}`)" />
        <div class="content">
          <h3>{{ name }}</h3>
          <p>
            {{ description }}
            <a v-if="link" :href="link">More info</a>
          </p>
          <button @click="deleteFruit(id)">Delete</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Fruits',
  data: () => ({
    fruits: []
  }),
  methods: {
    deleteFruit(fruitId) {
      console.log(`Borraré la fruta ${fruitId}`);
    }
  },
  created() {
    setTimeout(() => {
      // Simular llamada API
      this.fruits = [
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
    }, 0);
  }
};
</script>

<style lang="scss" scoped>
$IMAGE_SIZE: 120px;

.fruits-container {
  li {
    display: flex;
    flex-direction: row;
    align-content: flex-start;
    justify-items: center;
    list-style: none;
    padding: 16px 8px;

    img {
      flex: 0 0 $IMAGE_SIZE;
      width: $IMAGE_SIZE;
      height: $IMAGE_SIZE;
      padding-right: 16px;
    }

    .content {
      flex: 1 0 0;
      text-align: left;
    }
  }
}
</style>
