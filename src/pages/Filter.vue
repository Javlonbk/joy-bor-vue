<template>
  <div class="filter my-5">
    <div class="container">
      <div class="row">
        <div class="filter-advanced col-2">
          <h3>E’lonlarlarni filtrlash</h3>
          <div class="price-from-to my-5">
            <p  class="filter_head-text">Narx</p>
            <input type="number" class="form-control" placeholder="dan" />
            <input
              type="number"
              class="form-control mt-2"
              placeholder="gacha"
            />
          </div>
          <div class="fiter-byPrice">
            <p class="filter_head-text">Narx bo'yicha saralash</p>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label class="form-check-label" for="flexCheckDefault">
                Hammasi
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label class="form-check-label" for="flexCheckDefault">
                Birinchi arzon
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label class="form-check-label" for="flexCheckDefault">
                Birinchi qimmatidan
              </label>
            </div>
          </div>
          <div class="fiter-byCategory my-4">
            <p class="filter_head-text">Kategoriya</p>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label class="form-check-label" for="flexCheckDefault">
                Barchasi
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label class="form-check-label" for="flexCheckDefault">
                Oila uchun
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label class="form-check-label" for="flexCheckDefault">
                Talabalarga
              </label>
            </div>
          </div>
        </div>
        <div class="col-1"></div>
        <div class=" col-9">
          <Announcement hero-text="Saralanganlar" />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import Announcement from "../components/announcements/Announcement.vue";
</script>
<style lang="scss" scoped>
.filter {
  .filter-advanced {
    h3 {
      font-size: 20px;
      font-weight: 500;
      line-height: 22px;
    }
    .filter_head-text{font-weight: 600;
        font-size: 16px;
        line-height: 18px;
    }
    .form-check-label{
        font-weight: 400;
        font-size: 14px;
        line-height: 22px;
        color: #272727
    }
    .price-from-to {
      input {
        width: 300px;
        height: 44px;
        border-radius: 6px;
        background-color: #f2f4f9;
        padding: 5px 20px;
        box-sizing: border-box;
        &::placeholder {
          text-align: right;
        }
      }
    }
    .filter-byPrice, .filter-byCategor{
    }
  }
}
</style>
