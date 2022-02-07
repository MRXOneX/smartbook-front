<template>
    <button :style="styleButton">
        <slot></slot>
    </button>
</template>


<script>
export default {
    name: "my-button",
    props: {
        backgroundColor: {
            type: String,
            default: () => "#A94CE2"
        },
        color: {
            type: String,
            default: () => "white"
        },
        border: {
            type: String,
            default: () => "none"
        },
        cursor: {
            type: String,
            default: () => "pointer"
        },
        padding: {
            type: String,
            default: () => "10px"
        },
        borderRadius: {
            type: String,
            default: () => "5px"
        },
        outline: {
            type: String,
            default: () => "none"
        },
        width: {
            type: String,
            default: () => "100%"
        },
        height: {
            type: String,
            default: () => "auto"
        },
        fontSize: {
            type: String,
            default: () => "16px"
        },
        margin: {
            type: String,
            default: () => "0"
        },
        display: {
            type: String,
            default: () => "block"
        },
        justifyContent: {
            type: String,
            default: () => ""
        },
        alignItems: {
            type: String,
            default: () => ""
        },
        position: {
            type: String,
            default: () => "none"
        }
    },
    data() {
        return {
            // object with style
            styleButton: {
                backgroundColor: this.backgroundColor,
                color: this.color,
                border: this.border,
                cursor: this.cursor,
                padding: this.padding,
                borderRadius: this.borderRadius,
                outline: this.outline,
                width: this.width,
                height: this.height,
                fontSize: this.fontSize,
                margin: this.margin,
                display: this.display,
                justifyContent: this.justifyContent,
                alignItems: this.alignItems,
                position: this.position,
            }
        }
    }
}
</script>

<style scoped>
</style>