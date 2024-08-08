<template>
    <nav class="flex justify-between items-center bg-[#FCFCFD] h-20 px-5">
      <div class="flex items-center">
        <img src="../assets/images/Logo-red.png" alt="Logo" class="w-[154.44px] h-12" />
      </div>
  
      <div class="flex items-center gap-5">
        <div class="flex items-center gap-2.5">
          <div class="flex items-center gap-1.25">
            <img src="../assets/images/whatsapp.svg" alt="WhatsApp" class="w-6 h-6" />
            <span>Need to help?</span>
          </div>    
          <img src="../assets/images/cart-Button.svg" alt="cart-Button" class="w-6 h-6">
        </div>
        <div class="flex items-center gap-2.5">
          <button id="register-but" class="bg-[#FDE4EB] text-[#C21B54] px-3.5 py-2 border border-transparent rounded-lg w-[109px] h-9 text-sm font-normal leading-5 cursor-pointer">Register</button>
          <button id="login-but" class="bg-[#D92058] text-white px-3.5 py-2 border border-transparent rounded-lg w-[109px] h-9 text-sm font-normal leading-5 cursor-pointer">Login</button>
        </div>
      </div>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'NavBar',
  }
  </script>