<template>
    <input
        :type="this.type" 
        :placeholder="this.placeholder" 
        :style="styleInput">
</template>

<script>
export default {
    name: "my-input",

    props: {

        type: {
            type: String, 
            default: () => "text" 
        },
        placeholder: {
            type: String,
            default: () => "Enter..."
        },
        outline: {
            type: String,
            default: () => "none"
        },
        borderRadius: {
            type: String,
            default: () => "5px"
        },
        padding: {
            type: String,
            default: () => "5px 10px"
        },
        border: {
            type: String,
            default: () => "1px solid #c4c4c45c"
        },
        background: {
            type: String,
            default: () => "#F7F8FF"
        },
        width: {
            type: String,
            default: () => "100%"
        },
        margin: {
            type: String,
            default: () => "0"
        },
    },
    
    data() {
        return {
            styleInput: {
                outline: this.outline,
                borderRadius: this.borderRadius,
                padding: this.padding,
                border: this.border,
                background: this.background,
                width: this.width,
                margin: this.margin
            }
        }
    }
}
</script>