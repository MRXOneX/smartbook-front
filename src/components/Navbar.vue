<template>
    <div class="navbar">
        <logo :styleLogo="styleLogo" />
        <div>
            menu
        </div>
        <div class="btn-user-menu">
            <my-button :styleButton="styleButtonUser">
                <img 
                    class="user-logo" 
                    height="29" 
                    width="29" 
                    src="https://i.imgur.com/eaTPwsU.png" 
                    alt=""
                >
                <span class="user-name">name</span>
            </my-button>
        </div>
    </div>
</template>


<script>
import Logo from "@/components/Logo"


export default {
    components: { Logo },



    data() {
        return {
            styleButtonUser: {
                backgroundColor: "rgba(151, 158, 222, 0.19)",
                borderRadius: "50px",
                color: "rgba(56, 88, 152, 0.81)",
                padding: "6px 10px",
                outline: "none",
                border: "none",
                display: "flex",
                alignItems: "center"
            },
            styleLogo: {
                fontSize: "24px",
                cursor: "pointer"
            }
        }
    }
}
</script>


<style scoped>
    .navbar {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 55px;
        box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.25);

        padding: 0 20px;

        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    

    .user-logo {
        border-radius: 50%;
    }

    .user-name {
        background: none;
        margin-left: 6px;
    }

</style>