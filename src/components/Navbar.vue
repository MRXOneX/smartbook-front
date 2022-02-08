<template>
    <div class="navbar">
        <div class="logo">
            <my-button padding="0" backgroundColor="white">
                <logo />
            </my-button>
        </div>
        <div>
            menu
        </div>
        <div class="btn-user-menu">
            <div>
                <my-button 
                    backgroundColor="rgba(151, 158, 222, 0.19)"
                    borderRadius="50px"
                    color="rgba(56, 88, 152, 0.81)"
                    padding="6px 10px"
                    outline="none"
                    border="none"
                    display="flex"
                    alignItems="center"
                    position="relative"
                    @click="changeIsUserMenu"
            >
                <img 
                    class="user-logo" 
                    height="29" 
                    width="29" 
                    src="https://i.imgur.com/eaTPwsU.png" 
                    alt=""
                >
                <span class="user-name">name</span>

                <font-awesome-icon
                    v-if="isUserMenu"
                    :icon="['fas', 'sort-up']" 
                    :style="{background: 'none'}" />
                <font-awesome-icon
                    v-else
                    :icon="['fas', 'sort-down']" 
                    :style="{background: 'none'}" />

                </my-button>
                <dropdown
                    @change="changeIsUserMenu"
                    :isUserMenu="isUserMenu"/>
            </div>
        </div>
    </div>
</template>


<script>
import Logo from "@/components/Logo"
import Dropdown from "@/components/Dropdown"


export default {
    components: { Logo, Dropdown },

    data() {
        return {
            isUserMenu: false
        }
    },

    methods: {
        changeIsUserMenu() {
            this.isUserMenu = !this.isUserMenu
        }
    }
}
</script>


<style scoped>
    .navbar {
        position: fixed;
        z-index: 1;
        top: 0;
        left: 0;
        width: 100%;
        height: 55px;
        box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.25);

        padding: 0 20px;

        background: white;

        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    

    .user-logo {
        border-radius: 50%;
        background: none;
    }

    .user-name {
        background: none;
        margin: 0 6px;
    }


    /* M E D I A*/

    @media screen and (max-width: 450px) {
        .logo {
            display: none;
        }
    }

</style>