<template>
    <div>
      <div class="px-20 py-4 flex justify-between items-center flex-grow">
        <div class="relative flex items-center">
            <img src="../assets/images/search.svg" alt="Icon" class="absolute px-4"/>
            <input type="text" placeholder="Search for a product" class="w-[590px] p-2 border-2 rounded-lg px-12 text-[#667085]"/>
          </div>
  
          <div class="flex ">
            <img src="../assets/images/Icon (Stroke) (1).svg" alt="Icon" class="pr-4"/>
            <option value="newest">Newest</option>
           
          </div>
      </div>
  
      <!-- Produktgrid som bruker ProductCard -->
      <div class="grid grid-cols-4 gap-8 px-20">
        <ProductCard v-for="i in 8" :key="i"/>
      </div>
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
  