<template>
  <div class="border rounded-md">
    <img :src="image" :alt="title" class="w-full">
    <h2 class="mt-4 font-semibold text-base py-2 px-4">{{ title }}</h2>
    <p class="text-[#8A0E49] font-semibold text-[12px] py-2 px-4">{{ price }}</p>
   
    <div class="flex items-center px-4 py-2 pb-4">
      <CartIcon class="mr-2 bg-[#FDE4EB] px-1 py-1 rounded-md" />
      <button @click="handleBuyNow" class="w-full max-w-[211px] h-[40px] rounded-xl bg-[#7A0D41] text-white font-normal text-[14px]">
        Buy Now
      </button>
    </div>
  </div>
</template>

<script>
import Image from '@/assets/images/1.png';
import CartIcon from './icons/CartIcon.vue'; 

export default {
  name: 'ProductCard',
  components: {
    CartIcon, 
  },
  props: {
    image: {
      type: String,
      default: Image
    },
    title: {
      type: String,
      default: "Women’s Sports Tee, Red"
    },
    price: {
      type: String,
      default: 'KSH 2000'
    }
  },
  methods: {
    handleBuyNow() {
      this.$emit('buy-now');
    }
  }
};
</script>
