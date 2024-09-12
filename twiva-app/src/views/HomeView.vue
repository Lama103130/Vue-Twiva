<template>
  <div>
    <NavBar />
    <div class="main-container">
      <Hero />
      <div class="px-20 py-4 flex justify-between items-center flex-grow mt-6">
        <div class="relative flex items-center">
          <img src="../assets/images/search.svg" alt="Icon" class="absolute px-4"/>
          <input type="text" placeholder="Search for a product" class="w-[590px] p-2 border-2 rounded-lg px-12 text-[#667085] "/>
        </div>
        <div class="flex ">
          <img src="../assets/images/Icon (Stroke) (1).svg" alt="Icon" class="pr-4"/>
          <option value="newest">Newest</option>
        </div>
      </div>
      <ProductList @buy-now="navigateToProductView" />
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import Hero from '@/components/Hero.vue';
import ProductList from '@/components/ProductList.vue'; 
import { useRouter } from 'vue-router';

export default {
  name: "HomeView",
  components: {
    NavBar,
    Hero,
    ProductList, 
  },
  setup() {
    const router = useRouter();
    
    const navigateToProductView = () => {
      router.push({ name: 'product' });
    };

    return {
      navigateToProductView
    };
  }
}
</script>

<style scoped>

</style>
