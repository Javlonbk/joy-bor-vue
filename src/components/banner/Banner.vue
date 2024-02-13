<template>
  <div class="banner my-3">
    <div class="container">
      <div
        id="karusel"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#karusel"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#karusel"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#karusel"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#karusel"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
          <button
            type="button"
            data-bs-target="#karusel"
            data-bs-slide-to="4"
            aria-label="Slide 5"
          ></button>
        </div>

        <div class="carousel-inner">
          <!-- 1-element -->
          <div class="carousel-item active">
            <div class="banner-box row" data-interval="1000">
              <div class="banner_text col-8">
                <h2>Uyingizni biz orqali soting va sotib oling</h2>
                <p class="mt-3">
                  Biz bilan ortiqcha ovoragarchilikdan vos keching!
                </p>
              </div>
              <div class="banner_img col-4">
                <img src="../../assets/banner.png" alt="" />
              </div>
            </div>
          </div>
          <!-- 2-element -->
          <div class="carousel-item">
            <div class="banner-box row" data-interval="1000">
              <div class="banner_text col-8">
                <h2>Uyingizni biz orqali soting va sotib oling</h2>
                <p class="mt-3">
                  Biz bilan ortiqcha ovoragarchilikdan vos keching!
                </p>
              </div>
              <div class="banner_img col-4">
                <img src="../../assets/banner.png" alt="" />
              </div>
            </div>
          </div>

        </div>  
      </div>
    </div>
  </div>
</template>
<script setup></script>
<style lang="scss" scoped>
.banner-box {
  width: 100%;
  height: 320px;
  color: #fff;
  border-radius: 9px;
  background-color: #1d9ef9;
  .banner_text {
    padding: 50px;
    box-sizing: border-box;
    h2 {
      width: 80%;
      font-size: 42px;
      line-height: 50.4px;
    }
    p {
      width: 80%;
      font-size: 26px;
      line-height: 34px;
    }
  }
  .banner_img {
    padding: 0px !important;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
