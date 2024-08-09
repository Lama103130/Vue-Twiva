<template>
  <nav class="flex justify-between items-center bg-[#FCFCFD] h-20 px-20">
    <div class="flex items-center">
      <img src="../assets/images/Logo-red.png" alt="Logo" />
    </div>

    <div class="flex items-center gap-5 font-sans">
      <div class="flex items-center gap-2.5">
        <div class="flex items-center gap-1.25 text-xs mr-4">
          <img src="../assets/images/whatsapp.svg" alt="WhatsApp" class="mr-2" />
          <span>Need to help?</span>
        </div>    
        <CartIcon class="mr-2" />
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

export default {
  name: 'NavBar',
  components: {
    CartIcon,
  }
};
</script>

<style scoped>

</style>
