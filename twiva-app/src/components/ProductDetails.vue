<template>
  <div class="flex">
    <div class="w-1/2">
      <img :src="product.image" alt="Product Image" class="w-[560px] h-[700px] rounded-md">
    </div>
    <div class="flex flex-col w-1/2 pl-10">
      <h1 class="font-bold text-4xl leading-tight mb-4">{{ product.title }}</h1>
      <p class="text-[#8A0E49] font-bold text-2xl mb-4">{{ product.price }}</p>
      <div class="mb-4">
        <label for="quantity" class="text-sm font-semibold">Qty</label>
        <QuantitySelector :quantity="quantity" @update:quantity="handleQuantityUpdate" />
      </div>
      <h2 class="font-bold text-lg mb-2">Details</h2>
      <p class="text-sm mb-4">{{ product.description }}</p>
      <h3 class="font-bold text-base mb-2">Specification</h3>
      <p class="font-normal text-base leading-5 mb-4">Size: S, M, L</p>
      <div class="flex space-x-4 justify-items-start">
        <button @click="handleBuyNowClick" :class="buttonClass" class="py-2 px-6 rounded-md font-semibold text-lg leading-7 flex items-center space-x-2">
          <component :is="cartIconComponent" :color="iconColor" />
          <span>{{ buttonText }}</span>
        </button>
        <button class="bg-[#D92058] text-white py-2 px-6 rounded-md font-semibold text-lg leading-7">
          Buy Now
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import QuantitySelector from '@/components/QuantitySelector.vue';
import CartIcon from '@/components/icons/CartIcon.vue';
import CheckAdding from '@/components/icons/CheckAdding.vue';

export default {
  name: 'ProductDetails',
  props: {
    product: {
      type: Object,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    }
  },
  components: {
    QuantitySelector,
    CartIcon,
    CheckAdding
  },
  data() {
    return {
      isAddedToCart: false,
    };
  },
  computed: {
    buttonText() {
      return this.isAddedToCart ? 'Added to Cart' : 'Add to Cart';
    },
    cartIconComponent() {
      return this.isAddedToCart ? 'CheckAdding' : 'CartIcon';
    },
    buttonClass() {
      return this.isAddedToCart ? 'bg-white text-[#667085] border border-[#667085]' : 'bg-[#FDE4EB] text-[#C21B54]';
    },
    iconColor() {
      return this.isAddedToCart ? '#667085' : '#D92058';
    }
  },
  methods: {
    handleQuantityUpdate(newQuantity) {
      this.$emit('update:quantity', newQuantity);
    },
    handleBuyNowClick() {
      this.addToCart();
      this.isAddedToCart = true;
    },
    addToCart() {
      this.$emit('add-to-cart');
    }
  }
}
</script>
