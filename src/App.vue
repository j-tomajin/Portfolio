<script>
  import { RouterView } from 'vue-router'
  import Header from './components/Header.vue';
  export default {
    name: 'App',
    components: { Header }
  }
</script>

<template>
  <Header></Header>
  <main>
    <h1>HELLO WORLD</h1>
  </main>
  
<!-- 
  <section id="about">about</section>
  <section id="projects">projects</section>
  <section id="contact">contact</section> -->
</template>

<style lang="scss" scoped>
  @use './assets/scss/utilities/' as *;
</style>