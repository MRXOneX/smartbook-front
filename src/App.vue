<template>
  <div class="App">
    <navbar />
    
    <container>
      <router-view></router-view>
    </container>
  </div>
</template>

<script>
// pages
import Authorization from "@/pages/Authorization"
// components
import MyFooter from "@/components/MyFooter"
import Navbar from "@/components/Navbar"
// layouts
import Container from "@/layouts/Container"


export default {
  components: { Authorization, MyFooter, Navbar, Container },



  mounted() {


    let vh = window.innerHeight * 0.01;
    // Then we set the value in the --vh custom property to the root of the document
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  },
  
}
</script>

<style>
  /* connected fonts */
  @import url('https://fonts.googleapis.com/css2?family=Righteous&display=swap');
  /* =============== */

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: #F0F2F5;
  }

  html, body {
    height: 100%;
  }

  .App {
    position: relative;

    height: 100vh; 
    /* Use vh as a fallback for browsers that do not support Custom Properties */
    height: calc(var(--vh, 1vh) * 100);
  }
</style>
