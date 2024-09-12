<template>
  <div class="grid grid-cols-4 gap-8 px-20 mt-4">
    <ProductCard v-for="i in 8" :key="i" @buy-now="$emit('buy-now')" />
  </div>
</template>

<script>
import ProductCard from '@/components/ProductCard.vue'; 

export default {
  name: 'ProductList',
  components: {
    ProductCard 
  }
};
</script>

<style scoped>

</style>
