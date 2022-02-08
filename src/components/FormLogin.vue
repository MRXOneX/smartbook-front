<template>
    <div class="wrapper">
        <form @submit.prevent="">

            <input
                class="form-control-input"
                v-model="email" 
                placeholder="Email address or number phone" />
            <input
                class="form-control-input"
                v-model="password" 
                placeholder="Password"/>

            <button @click="login()" class="form-control-button-login">
                Log in
            </button>

        </form>

        <span class="forgot">
            forgotten password?
        </span>

        <div class="divider"/>

        <button 
            @click="$emit('setIsShow', true)"
            class="form-control-button-register"
        >
            Create new account
        </button>
    </div>
</template>

<script>
import axios from 'axios'
//
import { required, minLength, email } from 'vuelidate/lib/validators'


export default {
    data() {
        return {
            email: '',
            password: '',
            isLoading: true
        }
    },

    validators: {
        email: {
            required,
            email,
            minLength: minLength(5)
        }
    },

    methods: {
        async login() {
            await axios.post('https://smartbook-1v.herokuapp.com/users/login', {
                email: this.email,
                password: this.password
            }).then(res => {
                if (res.data.token) {
                    localStorage.setItem('token', res.data.token)
                    this.$router.push('/')
                }
            }).catch(e => console.log(e))
        }
    }
}
</script>

<style scoped>
    .wrapper {
        padding: 10px 15px;
        width: 340px;
        height: auto;
        background-color: white;
        box-shadow: 0px 0px 5px rgba(107, 191, 255, 0.25);
        border-radius: 10px;
    }
    
    form {background: none;}

    .forgot {
        color: #252F8B;
        font-size: 12px;
        background: none;
    }

    .divider {
        margin: 20px 0;
        width: 100%;
        height: 1px;
        background-color: #c4c4c4;
        border-radius: 20px;
    }


    /* S T Y L E   F O R   I N P U T S */

    .form-control-input {
        width: 100%;
        padding: 15px; 
        margin: 10px 0;
        border-radius: 5px;
        outline: none;
        border: 1px solid #c4c4c4;
        background: #FDFDFF;
    }



    /* S T Y L E   F O R   B U T T O N S */
    .form-control-button-login {
        background-color: #A94CE2;
        color: white;
        border: none;
        cursor: pointer;
        padding: 15px;
        border-radius: 5px;
        outline: none;
        width: 100%;
        height: auto;
        font-size: 18px;
        margin: 10px 0;
    }


    .form-control-button-register {
        background-color: #E4B9FE;
        margin: 0 0 10px 0;
        color: white;
        border: none;
        cursor: pointer;
        padding: 15px;
        border-radius: 5px;
        outline: none;
        width: 100%;
        height: auto;
        font-size: 18px;
    }










    /* M E D I A */

    @media screen and (max-width: 400px) {
        .wrapper {
            background: none;
            box-shadow: none;
        }
    }
</style>