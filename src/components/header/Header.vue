<template>
    <div class="header py-3">
        <div class="container">
            <div class="header-top d-flex justify-content-between align-items-center">
                <div class="logo">
                    <img src="../../assets/Joy-Bor-logo.png" alt="">
                </div>
                <div class="header-search w-75 h-100 position-relative">
                    <input type="text" class="w-100 h-100 position-absolute form-control">
                    <div class="position-absolute">    
                        <select class="mx-3">
                            <Select_Option option="Toshkent shahri " />
                        </select>
                        <PrimaryButton  text="Izlash" class="" />
                    </div>
                </div>
                <Modal/>
            </div>
            <ul class="header-navigations d-flex justify-content-around align-items-center mt-4">
                <p>Kategoriya:</p>
                    <li v-for="(navi, index) in navigations" :key="index"  class="nav-item">
                        <router-link :to="{name: navi.to}">{{ navi.name }}</router-link>
                    </li>

            </ul>
        </div>

        
    </div>
</template>
<script setup>
import PrimaryButton from '../../ui-components/PrimaryButton.vue';
import Select_Option from '../../ui-components/Select_Option.vue';
import Modal from '../modal/Modal.vue'


const navigations = [ 
    {
        name:'Barchasi',
        to: 'all'
    },
    {
        name:'Talabalar uchun',
        to: 'students'
    },
    {
        name:'O’g’il bolalar uchun',
        to:'guys'
    },
    {
        name:'Qiz bolalar uchun',
        to: 'girls'
    },
    {
        name:'Oila uchun',
        to:'family'
    },
    {
        name:'Sotuvdagi xonadon',
        to:'forSale'
    },
    {
        name:'Barcha bo’limlar',
        to:'allSections'
    },
    {
        name:'Filtrlash',
        to:'filter'
    }
    ]
</script>
<style lang="scss" scoped>
    .header{
        border-bottom: 1px solid #dbdbdb !important;
        .header-top{
            width: 100%;
            height: 52px;
            .header-search{
                input{
                    border: 1px solid #1D9EF9;
                    border-radius: 9px;
                    z-index: 1;
                    height: 100%;
                    text-indent: 20px;
                }
                div{
                    z-index: 3;
                    right: 4px;
                    top: 4px;

                }
            }
            .logo img{
                width: 52px;
            }
        }
        .header-navigations{
                li{
                    &:hover{
                        cursor: pointer;
                    }
                    cursor: pointer;
                    a{
                        font-size: 14px;
                        text-decoration: none;
                        color: #272727;
                        &:hover{
                        color: #1D9EF9;
                        border-bottom:1px solid #1D9EF9;
                    } 
                    }
                }
                p{
                    font-size: 14px;
                    color: #ACACAC !important;
                    margin: 0px;
                }
        }
    }
</style>