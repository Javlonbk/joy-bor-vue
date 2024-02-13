<template>
    <div class="announcement my-5">
        <div class="container">
            <div class="d-flex justify-content-between">
                <h2>{{ heroText }}</h2>
                <button>Barchasi <img src="../../assets/arrow-right-s-line.png" alt=""></button>
            </div>
            <div class="cards mt-2 d-flex justify-content-between flex-wrap">
                <router-link to="/announceInfo">
                    <Card class="mt-3"/>
                </router-link>
                <router-link to="/announceInfo">
                    <Card class="mt-3"/>
                </router-link>
                <router-link to="/announceInfo">
                    <Card class="mt-3"/>
                </router-link>
                <router-link to="/announceInfo">
                    <Card class="mt-3"/>
                </router-link>
            </div>
        </div>
    </div>
</template>
<script setup>
import Card from '../card/Card.vue'
const props = defineProps({
    heroText:{
        type:String,
        default:'No text'
    },
})

</script>
<style lang="scss" scoped>
a{
    text-decoration: none;
}
    .announcement{
        h2{
            font-size: 32px;
            line-height: 34px;
            color: #171717;
        }
        button{
            width: 135px;
            box-sizing: border-box;
            border-radius: 6px;
            background-color: #F2F4F9;
            font-size: 16px;
            color: #1D9EF9;
            border: none;
        }
    }
</style>