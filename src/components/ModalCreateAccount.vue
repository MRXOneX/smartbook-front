<template>
   
</template>

<script>
export default {
    
}
</script>

<style scoped>
    .container {
        width: 100%;
        height: 100%;
        background: rgba(255, 255, 255, 0.64);
        position: absolute;
        z-index: 1;
        
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .wrapper {
        width: 400px;
        height: 500px;
        background: #FFFFFF;
        box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.25);
        border-radius: 10px;
    }

    /* M E D I A*/

    @media screen and (max-width: 360px) {
        .wrapper {
            width: 300px;
        }
    }
</style>