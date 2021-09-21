<template>
  <form @submit.prevent="createFruit">
    <label>
      Name:
      <input type="text" v-model="name" />
      <pre v-if="isNameInvalid">{{ isNameInvalid }}</pre>
    </label>
    <button type="button" @click="fillForm()">Fill</button>
    <button type="submit">Create</button>
  </form>
</template>

<script>
export default {
  name: 'FruitForm',
  data: () => ({
    name: ''
  }),
  computed: {
    isNameInvalid() {
      return this.name === 'Plátano de Canarias'
        ? false
        : 'Tu prefieres plátano de Canarias';
    },
    isFormValid() {
      return this.isNameInvalid;
    }
  },
  methods: {
    createFruit() {
      if (this.isFormValid) {
        console.log(this.name);
      }
    },
    fillForm() {
      this.name = 'Plátano de Canarias';
    }
  }
};
</script>

<style lang="scss" scoped>
pre {
  color: red;
}
</style>
