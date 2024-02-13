<template>
    salomla
    <option value="uzbek">{{ option }}</option>
    <!-- <option value="rus">Pусский язык</option> -->
</template>
<script setup>
const props = defineProps({
    option:{
        type:String,
        default: 'No text'
    }
})
console.log(props.option)
</script>
<style lang="scss" scoped>
    option {
    font-size: 14px;
    color: #acacac;
    }
</style>