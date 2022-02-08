<template>
    <div class="wrapper">
        <form @submit.prevent="">
            <my-input 
                v-model="email"
                width="100%" 
                padding="15px 15px" 
                margin="10px 0"
                placeholder="Email address or number phone"
            />
            <my-input 
                v-model="password"
                width="100%" 
                padding="15px 15px" 
                margin="10px 0" 
                placeholder="Password"
            />

            <my-button @click="login()" margin="10px 0" >
                Log in
            </my-button>
        </form>
        <span 
            class="forgot"
            >forgotten password?</span>
        <div class="divider"/>
        <my-button
            @click="$emit('setIsShow', true)"
            backgroundColor="#E4B9FE" 
            margin="15px 0" 
        >
            Create new account
        </my-button>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            email: '',
            password: ''
        }
    },

    methods: {
        async login() {
            await axios.post('https://smartbook-1v.herokuapp.com/users/login', {
                email: "qwerty@mail.ru",
                password: 'qwerty'
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
        height: 310px;
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
        margin: 15px 0;
        width: 100%;
        height: 1px;
        background-color: #c4c4c4;
        border-radius: 20px;
    }

    /* M E D I A */

    @media screen and (max-width: 400px) {
        .wrapper {
            background: none;
            box-shadow: none;
        }
    }
</style>