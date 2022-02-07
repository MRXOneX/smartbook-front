<template>
    <div class="authorization">
        <div class="logo-form">
            <logo fontSize="50px" />
            <form-login @setIsShow="setIsModalCreateAccount" />
        </div>
        <my-footer />
        <modal-create-account :isShow="isModalCreateAccount" @setIsShow="setIsModalCreateAccount" />
    </div>
</template>

<script>
import FormLogin from "@/components/FormLogin"
import Logo from "@/components/Logo"
import MyFooter from "@/components/MyFooter"
import ModalCreateAccount from "@/components/ModalCreateAccount"

export default {
    components: { FormLogin, Logo, MyFooter, ModalCreateAccount },

    data() {
        return {
            isModalCreateAccount: false
        }
    },

    methods: {
        setIsModalCreateAccount(bool) {
            this.isModalCreateAccount = bool
        }
    }
}
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Righteous&display=swap');


    .authorization {
        width: 100%;
        height: 100%;

        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;

        /* common style for text */
        
        font-weight: 400;
        font-family: 'Righteous', cursive;
    }

    /* style for block with logo and form */
    .logo-form {
        display: flex;
        align-items: center;
        justify-content: space-between;

        height: 100%;
        width: 940px;
    }



    /* M E D I A */

    @media screen and (max-width: 940px) {
        .logo-form {
            flex-direction: column;
            justify-content: space-evenly;
            width: auto;
        }
    }
 
</style>