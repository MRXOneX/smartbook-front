<template>
    <div class="authorization">
        <div class="logo-form">
            <logo fontSize="50px" />
            <form-login />
        </div>
    </div>    
</template>

<script>
import FormLogin from "@/components/FormLogin"
import Logo from "@/components/Logo"

export default {
    components: { FormLogin, Logo }
}
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Righteous&display=swap');

    .authorization {
        width: 100%;
        height: 100%;

        display: flex;
        justify-content: center;
        /* common style for text */
        
        font-weight: 400;
        font-family: 'Righteous', cursive;
    }

    /* Style for block with logo and form */
    .logo-form {
        display: flex;
        align-items: center;
        justify-content: space-between;

        width: 840px;
        height: 100%;
    }



    /* M E D I A */

    @media screen and (max-width: 850px) {
        .logo-form {
            flex-direction: column;
            justify-content: space-evenly;
        }
    }
 
</style>