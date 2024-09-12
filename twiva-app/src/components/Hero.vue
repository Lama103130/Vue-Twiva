<template>
    <div>
      <!-- Cover Photo -->
      <div class="relative h-80">
        <img src="../assets/images/image 12.png" alt="Cover Photo">
      </div>
  
      <!-- Business details-->
      <div class="flex items-start px-20">
       
        <img src="../assets/images/Avatar.png" alt="Business Image" class="mr-8">
        <div class="mr-20">
          <h1 class="text-2xl font-bold mb-4">Business Name</h1>
          <p class="mb-4 text-lg">Impedit beatae voluptatem minus cupiditate dolorem quisquam. 
            Nemo et consequatur recusandae nesciunt est harum saepe debitis. Laborum beatae et quasi eos doloremque facilis.
            Dolor quo sed asperiores quidem id. Consequuntur ipsam cumque deleniti enim. Est eveniet placeat illo.</p>
          <button class="text-[#AD1650] font-bold">Show More</button>
        </div>
  
      
        <div>
          <!-- Bar -->
          <div class="flex flex-col mb-4">
            <div class="flex items-center mb-6">
                <div class="flex-grow border p-2">
                  <input type="text" placeholder="business-name.twiva.com" class="text-lg">
                </div>
                <div class="bg-[#EFEEF0] rounded-sm py-2 px-2 ">
                  <img src="../assets/images/copy.svg" alt="Copy" class="w-6 h-6">
                </div>
              </div>
              <div class="flex justify-end items-center mb-6" id="social-icons">
                <img src="../assets/images/Social icon.svg" alt="Facebook" >
                <img src="../assets/images/youtube.svg" alt="YouTube" class="ml-4">
              </div>
              
          </div>
          <!-- Category -->
          <div class="flex flex-row">
            <a href="#" class=" mr-2 bg-[#F2F4F7] px-4 py-1 rounded-2xl text-xs">Beauty</a>
            <a href="#" class=" mr-2 bg-[#F2F4F7] px-4 py-1 rounded-2xl text-xs">Fashion</a>
            <a href="#" class=" mr-2 bg-[#F2F4F7] px-4 py-1 rounded-2xl text-xs">Lifestyle</a>
            <a href="#" class="  bg-[#F2F4F7] px-4 py-1 rounded-2xl text-xs">Health</a>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'HeroSection',
  }
  </script>
  
  <style scoped>
  #social-icons {
    justify-content: flex-end;
  }
  </style>
  