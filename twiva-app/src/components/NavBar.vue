<template>
  <nav class="navbar flex justify-between items-center bg-[#FCFCFD] h-20 px-20">
    <div class="flex items-center">
      <img src="../assets/images/Logo-red.png" alt="Logo" />
    </div>
    <div class="flex items-center gap-5 font-sans">
      <div class="flex items-center gap-2.5">
        <div class="flex items-center gap-1.25 text-xs mr-4">
          <img src="../assets/images/whatsapp.svg" alt="WhatsApp" class="mr-2" />
          <span>Need to help?</span>
        </div>    
        <div class="relative flex items-center">
          <CartIcon class="mr-2" />
          <span class="bg-[#8A0E49] text-white rounded-full text-xs px-2 py-1 absolute -top-2 -right-1 flex justify-center">
            {{ cartCount }}
          </span>
        </div>
      </div>
      <div class="flex items-center gap-2.5">
        <button id="register-but" class="bg-[#FDE4EB] text-[#C21B54] px-3.5 py-2 border border-transparent rounded-lg w-[109px] h-9 text-sm font-normal leading-5 cursor-pointer">Register</button>
        <button id="login-but" class="bg-[#D92058] text-white px-3.5 py-2 border border-transparent rounded-lg w-[109px] h-9 text-sm font-normal leading-5 cursor-pointer">Login</button>
      </div>
    </div>
  </nav>
</template>

<script>
import CartIcon from './icons/CartIcon.vue';
import { mapGetters } from 'vuex';

export default {
  name: 'NavBar',
  components: {
    CartIcon
  },
  computed: {
    ...mapGetters(['cartCount'])
  }
};
</script>

<style scoped>
.navbar{
  box-shadow:0 1px  rgba(16, 24, 40, 0.1);
}
</style>
