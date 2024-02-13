<template>
    <button :class="white ? 'btn-outline-primary': 'btn-primary'" class="btn">{{ text }}</button>
</template>
<script setup>
const props = defineProps({
    text:{
        type:String,
        default:'No text'
    },
    white:{
        type:Object,
        default:''
    }
})
</script>
<style lang="scss" scoped>
    button{
        padding: 10px 32px;
        height: 44px;
        box-sizing: border-box;
        font-size: 14px;
        font-weight: 400;
        box-sizing: border-box;
    }
</style>