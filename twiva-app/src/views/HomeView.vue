<template>
  <div>
    <NavBar />
    <div class="main-container">
      <Hero />
      <ProductList /> <!-- Ny komponent inkludert her -->
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import Hero from '@/components/Hero.vue';
import ProductList from '@/components/ProductList.vue'; 

export default {
  name: "HomeView",
  components: {
    NavBar,
    Hero,
    ProductList, 
  }
}
</script>

<style scoped>
/* Tilpasset styling */
</style>
