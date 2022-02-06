<template>
    <navbar />
    <div class="container">
        <slot></slot>
    </div>
</template>


<script>
// components
import Navbar from "@/components/Navbar"
import MyFooter from "@/components/MyFooter"


export default {
    components: { Navbar, MyFooter }    
}
</script>


<style scoped>
    .container {
        width: 1200px;
        margin: 0 auto;
        padding: 70px 10px 20px;
    }

    /* M E D I A */

    @media screen and (max-width: 1200px) {
        .container {
            width: auto;
        }
    }
</style>