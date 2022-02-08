<template>
    <div class="logo">
        <span
            class="logo-word-smart">Smart</span>
        <span
            class="logo-word-book">Book</span>
    </div>
</template>


<script>
export default {


    data() {
        return {
            logoStyle: {
                fontSize: this.fontSize,
            }
        }
    }
}
</script>


<style scoped>
    .logo {
        /* style for text */
        font-weight: 400;
        font-family: 'Righteous', cursive;

        font-size: 50px;
    }

    .logo-word-smart {
        color: #A511FF;
    }
    .logo-word-book {
        color: #3075FC;
    }


    /* M E D I A */

    @media screen and (min-width: 1600px) {
        .logo {
            font-size: 70px;
        }
    }
</style>