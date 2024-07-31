<template>
    <nav>
      <div class="nav-left">
        <img src="../assets/images/Logo-red.png" alt="Logo" class="logo" />
      </div>
  
      <div class="nav-right">
        <div id="services">
          <div class="whatsapp">
            <img src="../assets/images/whatsapp.svg" alt="WhatsApp" class="whatsapp-icon" />
            <span>Need to help?</span>
          </div>    
          <img src="../assets/images/cart-Button.svg" alt="cart-Button" class="Cart-button">
        </div>
        <div id="buts">
          <button id="register-but" @click="register">Register</button>
          <button id="login-but" @click="login">Login</button>
        </div>
      </div>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'NavBar',
    methods: {
      login() {
        // Logikk
      },
      register() {
        // Logikk
      }
    }
  }
  </script>
  
  <style scoped>
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #FCFCFD;
    height: 80px;
    padding: 0 20px;
  }
  .nav-left {
    display: flex;
    align-items: center;
  }
  .logo {
    width: 154.44px;
    height: 50px;
  }
  .nav-right {
    display: flex;
    align-items: center;
    gap: 20px;
  }
  #services {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .whatsapp {
    display: flex;
    align-items: center;
    gap: 5px;
  }
  .whatsapp-icon {
    width: 24px;
    height: 24px;
  }
  .Cart-button {
    width: 24px;
    height: 24px;
  }
  #buts {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .nav-right button {
    padding: 8px 14px;
    border: 1px solid transparent;
    border-radius: 8px;
    width: 109px;
    height: 36px;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    cursor: pointer;
  }
  #register-but {
    background-color: #FDE4EB;
    color: #C21B54;
  }
  #login-but {
    background-color: #D92058;
    color: #FFFFFF;
  }
  </style>
  