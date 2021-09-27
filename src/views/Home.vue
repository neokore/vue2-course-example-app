<template>
  <section class="home">
    <h1>{{ $t('home.greetings', { username: 'Pepe' }) }}</h1>
    <p>{{ $tc('home.fruit', 0) }}</p>

    <router-link :to="{ name: 'fruits' }" class="button image-button">
      <img :src="require('@/assets/fruits/apple.png')" />
      Go to fruits
    </router-link>
  </section>
</template>

<style lang="scss" scoped>
.home {
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    padding: 8px 0 4px;
    margin-bottom: 32px;
  }

  .image-button {
    border: 1px solid #0002;

    img {
      max-height: 64px;
      margin-bottom: 8px;
    }

    &:hover {
      box-shadow: 0 4px 16px 0 #aaa;
    }
  }
}
</style>
