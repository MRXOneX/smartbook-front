<template>
    <div class="navbar">
        <div class="logo">
            <my-button padding="0" backgroundColor="white">
                <div class="logo">
                    <span
                        class="logo-word-smart">Smart</span>
                    <span
                        class="logo-word-book">Book</span>
                </div>
            </my-button>
        </div>
        <div>
            menu
        </div>
        <div class="btn-user-menu">
            <div>
                <button @click="changeIsUserMenu" class="user-button-open-menu">
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
                </button>

                <dropdown
                    @change="changeIsUserMenu"
                    :isUserMenu="isUserMenu"/>
            </div>
        </div>
    </div>
</template>


<script>
import Dropdown from "@/components/Dropdown"


export default {
    components: { Dropdown },

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

        padding: 10px 20px;

        background: white;

        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .logo {
        /* style for text */
        font-weight: 400;
        font-family: 'Righteous', cursive;

        font-size: 26px;
    }

    .logo-word-smart {
        color: #A511FF;
    }
    .logo-word-book {
        color: #3075FC;
    }



    .user-button-open-menu {
        background-color: rgba(151, 158, 222, 0.19);
        border-radius: 50px;
        color: rgba(56, 88, 152, 0.81);
        padding: 6px 10px;
        outline: none;
        border: none;
        display: flex;
        align-items: center;
        position: relative;
        cursor: pointer;
    }
    

    .user-logo {
        border-radius: 50%;
        height: 29px;
        width: 29px;
    }


    .user-name {
        margin: 0 6px;
    }


    /* M E D I A*/

    /* 450 */
    @media screen and (max-width: 450px) {
        .logo {
            display: none;
        }
    }



    @media screen and (min-width: 1600px) {
        .navbar {
            height: 65px;
        }

        .logo {
            /* style for text */
            font-weight: 400;
            font-family: 'Righteous', cursive;

            font-size: 32px;
        }

        .user-button-open-menu {
            padding: 8px 12px;

            font-size: 18px;
        }

        .user-logo {
            height: 34px;
            width: 34px;
        }
        

        .user-name {
            margin: 0 8px;
        }

    }

</style>