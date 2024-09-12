<template>
  <div class="py-10">
    <NavBar />
    <div class="mt-6 px-20">
      <a href="#" class="text-sm text-[#667085]">← Back to shop</a>
    </div>
    <div class="flex flex-row mt-10 px-20">
      <ProductDetails :product="product" :quantity="quantity" @update:quantity="updateQuantity" @add-to-cart="addToCart" />
    </div>
    <div>
      <h1 class="text-[#111827] text-base font-semibold px-20 mt-10">Similar products/Customers also buys</h1>
      <ProductList />
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import ProductDetails from '@/components/ProductDetails.vue';  
import ProductList from '@/components/ProductList.vue';
import Image from '@/assets/images/1.png';

export default {
  name: "ProductView",
  components: {
    NavBar,
    ProductDetails,
    ProductList,
  },
  data() {
    return {
      product: {
        image: Image,
        title: "Women’s Sports Tee, Red",
        description: "Active Noise Cancellation blocks outside noise, so you can immerse yourself in music. Transparency mode for hearing and interacting with the world around you. Spatial audio with dynamic head tracking places sound all around you. Adaptive EQ automatically tunes music to the shape of your ear.",
        price: "KSH 2000"
      },
      quantity: 1
    };
  },
  methods: {
    updateQuantity(newQuantity) {
      this.quantity = newQuantity;
    },
    addToCart() {
      this.$store.dispatch('addToCart', this.quantity);
    }
  }
}
</script>


