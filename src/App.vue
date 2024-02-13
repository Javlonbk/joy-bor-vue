<script setup>
import TopNavbar from './components/top-navbar/TopNavbar.vue';
import Header from './components/header/Header.vue';
import Footer from './components/footer/Footer.vue'

</script>

<template>
  <div class="app">
      <TopNavbar class="bg-light" />
      <Header/>
      <router-view />
      <Footer/>
  </div>
   
</template>

<style scoped lang="scss">

</style>
