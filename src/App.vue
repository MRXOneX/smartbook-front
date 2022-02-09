<template>
  <router-view></router-view>
</template>

<script>


export default {


  mounted() {
    if(this.$store.state.isAuth) {
      this.$router.push('/')
    } else {
      this.$router.push('/login')
    }
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
  }

  html {
    height: 100%;
  }
  body {
    height: 100%;
    background-color: #F0F2F5;
  }

  #app {height: 100%;}
</style>
