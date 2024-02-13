<template>
  <div class="top-navbar">
    <div class="container h-100">
      <div class="d-flex justify-content-between align-items-center h-100">
        <select name="" id="">
          <Select_Option option="O'zbek tili" />
          <Select_Option option="Русский" />
        </select>
        <ul class="d-flex align-items-center">
          <li>E'lonlarim</li>
          <li>Saqlanganlar</li>
          <li>Xabarlar</li>
          <li>Profil</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script setup>
import Select_Option from "../../ui-components/Select_Option.vue";
</script>
<style lang="scss" scoped>
.top-navbar {
  width: 100%;
  height: 36px;
  line-height: 100%;
  font-size: 14px;
  color: #acacac;
 
  ul {
    padding: 0px;
    margin: 0px;
    li {
      padding: 0px 7px;
      box-sizing: border-box;
    }
  }
}
</style>
