<template>
  <header class="app-header">
    <h1>Look ma, I'm an app</h1>
    <nav>
      <router-link :to="{ name: 'fruits' }"> Fruits </router-link>
      |
      <router-link to="/no-existe">Not Found</router-link>
    </nav>
    <div class="lang-selector">
      <button @click="setLang('en')">EN</button>
      <button @click="setLang('es')">ES</button>
    </div>
  </header>
</template>

<script>
import { loadLanguageAsync } from '../setup/i18n-setup';
export default {
  name: 'AppHeader',
  methods: {
    setLang(lang) {
      loadLanguageAsync(lang);
    }
  }
};
</script>

<style lang="scss" scoped>
.app-header {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  padding: 16px;

  h1 {
    flex: 1 1 auto;
  }

  nav {
    flex: 0 0 auto;
  }
}
</style>
