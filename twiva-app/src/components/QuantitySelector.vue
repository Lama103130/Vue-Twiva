<template>
  <div class="flex items-center mt-2 border border-[#D0D5DD] rounded-md w-fit">
    <button @click="decreaseQuantity" class="px-3 py-2">-</button>
    <span class="text-center w-12 py-2 border-l border-r border-[#D0D5DD]">{{ quantity }}</span>
    <button @click="increaseQuantity" class="px-3 py-2">+</button>
  </div>
</template>

<script>
export default {
  name: 'QuantitySelector',
  props: {
    quantity: {
      type: Number,
      required: true
    }
  },
  methods: {
    increaseQuantity() {
      this.$emit('update:quantity', this.quantity + 1);
    },
    decreaseQuantity() {
      if (this.quantity > 1) {
        this.$emit('update:quantity', this.quantity - 1);
      }
    }
  }
}
</script>
