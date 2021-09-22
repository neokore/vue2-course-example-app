<template>
  <li>
    <img :src="require(`@/assets/fruits/${fruit.image}`)" />
    <div class="content">
      <h3>
        <router-link
          :to="{ name: 'fruit-detail', params: { name: fruit.name } }"
        >
          {{ fruit.name }}
        </router-link>
      </h3>
      <p>
        {{ fruit.description }}
        <a v-if="fruit.link" :href="fruit.link">More info</a>
      </p>
      <button @click="$emit('delete')">Delete</button>
    </div>
  </li>
</template>

<script>
export default {
  name: 'FruitCard',
  props: {
    fruit: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
$IMAGE_SIZE: 120px;

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

    button {
      margin-top: 4px;
    }
  }
}
</style>
