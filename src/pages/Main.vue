<template>
    <container>
        <div class="wrapper-organization">
            <div class="header-organization">
                <div class="cover">
                    <div>
                        <img src="https://i.imgur.com/eaTPwsU.png"  alt="">
                    </div>
                </div>
            </div>
            <div class="content-organization">
                <div class="main-menu-organization">
                    Main
                </div>
                <div class="left-menu-down">2</div>
                <div class="right-menu-down">3</div>
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
        height: 300px;

        background: white;
        box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.25);
        border-radius: 5px;
        padding: 20px;
    }

    .cover {
        width: 100%;
        height: 200px;
        background: linear-gradient(85.38deg, #A511FF -43.14%, rgba(200, 196, 238, 0.18) 116.17%);
        border-radius: 10px;
        position: relative;
    }

    .cover div{
        background: white;
        border-radius: 50%;
        height: 130px;
        width: 130px;

        display: flex;
        align-items: center;
        justify-content: center;

        position: absolute;
        bottom: -25%;
        left: 20px
    }
    .cover div img {
        width: 95%;
        height: 95%;
    }

    .main-menu-organization {
        margin-top: 20px;
        background: white;
        box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.25);
        border-radius: 5px;
        padding: 10px;
    }

    
</style>