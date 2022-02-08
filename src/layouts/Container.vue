<template>
    <div class="wrapper-container">
        <navbar />
        <div class="container">
            <slot></slot>
        </div>
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

    .wrapper-container {
        height: 100%;
        width: 100%;
    }

    .container {
        width: 1000px;
        height: 100%;
        margin: 0 auto;
        padding: 70px 10px 20px;
    }

    /* M E D I A */

    @media screen and (max-width: 1000px) {
        .container {
            width: auto;
        }
    }

    @media screen and (min-width: 1600px) {
        .container {
            width: 1200px
        }
    }
</style>