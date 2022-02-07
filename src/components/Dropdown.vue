<template>
    <div class="dropdown">
        <div class="user">
            <img height="50" width="50" src="https://i.imgur.com/eaTPwsU.png" alt="">
            <span>Полещенков Михаил Юрьевич</span>
        </div>
    </div>
</template>

<script>
export default {
}
</script>

<style scoped>
    .dropdown {
        position: absolute;
        z-index: 1;
        bottom: -80px;
        right: 20px;
        border-radius: 5px;

        width: 300px;

        box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
        padding: 10px;
    }

    .user {
        display: flex;
        align-items: center;
        padding: 0 10px;
        height: 50px;
        width: 100%;
    }

    .user span {
        margin-left: 10px;
    }




    /* M E D I A*/

    @media screen and (max-width: 325px) {
        .dropdown {
            right: 10px;
        }
    }
</style>