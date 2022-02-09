<template>
    <div class="wrapper-divider">
        <div class="divider" :style="{width: this.width}"/>
    </div>
</template>

<script>
export default {
    name: "divider",
    props: {
        width: {
            type: String,
            default: () => "100%"
        }
    }
}
</script>

<style scoped>
    .wrapper-divider {
        display: flex;
        align-items: center;
        justify-content: center;
        background: none;
    }
    .divider {
        margin: 10px 0;
        text-align: center;
        height: 1px;
        background-color: #c4c4c4;
        border-radius: 20px;
    }


    /* M E D I A */

    @media screen and (min-width: 1600px) {
        .divider {
            margin: 15px 0;
        }
    }
</style>