<template>
    <button :style="this.styleButton">
        <slot></slot>
    </button>
</template>


<script>
export default {
    name: "my-button",
    props: {
        styleButton: {
            type: Object,
            required: true
        }
    }
}
</script>