<template>
    <container>
        <div class="wrapper-organization">
            <div class="header-organization">
                <div class="cover">
                    <div>
                        <img src="https://i.imgur.com/xtqyOga.jpg"  alt="">
                    </div>
                </div>
            </div>
            <div class="content-organization">
                <div class="navbar-menu-organization">
                    Main
                </div>
                <div class="sidebar-organization">
                    <div class="left-menu">
                        <div>
                            1
                        </div>
                    </div>
                    <div class="up-menu">2</div>
                    <div class="posts">3</div>
                </div>
            </div>
        </div>
    </container>
</template>


<script>
import Container from "@/layouts/Container"
export default {
    components: { Container }
}
</script>



<style scoped>
    .wrapper-organization {
        display: flex;
        flex-direction: column;
    }

    .header-organization {
        width: 100%;
        height: 400px;

        background: white;
        box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.25);
        border-radius: 5px;
        padding: 20px;
    }

    .cover {
        width: 100%;
        height: 300px;
        background: linear-gradient(85.38deg, #A511FF -43.14%, rgba(200, 196, 238, 0.18) 116.17%);
        border-radius: 10px;
        position: relative;
    }

    .cover div{
        background: white;
        border-radius: 10px;
        height: 130px;
        width: 130px;

        display: flex;
        align-items: center;
        justify-content: center;

        position: absolute;
        left: 20px;
        bottom: -60px;
    }
    .cover div img {
        width: 91%;
        height: 91%;

        border-radius: 10px;
    }

    .navbar-menu-organization {
        margin-top: 20px;
        background: white;
        box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.25);
        border-radius: 5px;
        padding: 10px;
    }


    .sidebar-organization {
        margin: 20px 0 0 0;

        display: grid; 
        grid-auto-columns: 1fr; 
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 3fr; 
        grid-template-rows: 1fr 1fr; 
        gap: 21px 21px; 
        grid-template-areas: 
            "left-menu left-menu up-menu up-menu up-menu up-menu up-menu"
            "left-menu left-menu posts posts posts posts posts"; 
    }
    .left-menu { 
        grid-area: left-menu; 
    }
    .left-menu div {
        background: white;
        box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.25);
        border-radius: 5px;
        padding: 10px;
    }
    .up-menu { 
        grid-area: up-menu;

        background: white;
        box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.25);
        border-radius: 5px;
        padding: 10px;
    }
    .posts { 
        grid-area: posts;

        background: white;
        box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.25);
        border-radius: 5px;
        padding: 10px;
    }
    
</style>