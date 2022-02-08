<template>
    <div class="dropdown" v-show="this.isUserMenu">
        <div class="user">
            <img height="50" width="50" src="https://i.imgur.com/eaTPwsU.png" alt="">
            <span>Полещенков Михаил Юрьевич</span>
        </div>
        <div class="divider"/>
        <div class="exit" @click="logout">
            <font-awesome-icon
                :icon="['fas', 'sign-out-alt']" 
                :style="{background: 'none', fontSize: '24px'}" />
            <span>Exit</span>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        isUserMenu: {
            type: Boolean,
            default: () => false
        }
    },

    methods: {
        logout() {
            localStorage.removeItem('token')
            this.$router.push('/login')
            this.$emit('change')
        }
    }
}
</script>

<style scoped>
    .dropdown {
        position: absolute;
        z-index: 1001;
        right: 20px;
        top:65px ;
        border-radius: 5px;

        width: 300px;

        background: white;
        box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
        padding: 10px 10px;
    }

    .user {
        display: flex;
        align-items: center;
        height: 50px;
        width: 100%;
        padding: 30px 10px;
        border-radius: 5px;
        cursor: pointer;

        transition: .5s;
    }

    .exit {
        display: flex;
        align-items: center;
        width: 100%;
        padding: 10px 20px;
        border-radius: 5px;
        cursor: pointer;

        transition: .5s;

        /* style text */
        color: #585858;
        font-size: 20px;
    }
    .exit span {
        margin-left: 15px;
        background: none;
    }

    .user img {
        border-radius: 50%;
        background: none;
    }

    .exit:hover,
    .user:hover {
        background: rgba(151, 158, 222, 0.19);
    }


    .user span {
        margin-left: 10px;
        background: none;
    }
    

    .divider {
        margin: 10px 0;
        width: 100%;
        height: 1px;
        background-color: #c4c4c4;
        border-radius: 20px;
    }



    /* M E D I A*/

    @media screen and (max-width: 325px) {
        .dropdown {
            right: 10px;
        }
    }
</style>