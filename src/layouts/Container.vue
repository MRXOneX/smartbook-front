<template>
    <div class="container">
        <slot></slot>
    </div>
</template>


<script>
export default {
    
}
</script>


<style scoped>
    .container {
        width: 1200px;
        margin: 0 auto;
        padding: 70px 10px 0;
    }

    /* M E D I A */

    @media screen and (max-width: 400px) {
        .container {
            width: 380px;
        }
    }
</style>