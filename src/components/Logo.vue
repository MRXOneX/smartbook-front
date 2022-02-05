<template>
    <div class="logo" :style="logoStyle">
        <span
            class="logo-word-smart">Smart</span>
        <span
            class="logo-word-book">Book</span>
    </div>
</template>


<script>
export default {
    props: {
        logoStyle: {
            type: Object,
            required: true
        }
    }
}
</script>


<style scoped>
    .logo {
        /* style for text */
        font-weight: 400;
        font-family: 'Righteous', cursive;
    }

    .logo-word-smart {
        color: #A511FF;
    }
    .logo-word-book {
        color: #3075FC;
    }
</style>