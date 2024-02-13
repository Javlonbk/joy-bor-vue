<template>
  <div class="announceInfo my-5">
    <div class="container">
      <div class="d-flex row">
        <div class="col-5 announceInfo-gallery">
          <div class="d-flex justify-content-between">
            <div class="w-25 pe-5 d-flex flex-column justify-content-end mt-2">
              <img class="img-fluid mt-2" src="../assets/home1.1.png" alt="" />
              <img class="img-fluid mt-2" src="../assets/home1.1.png" alt="" />
              <img class="img-fluid mt-2" src="../assets/home1.1.png" alt="" />
              <img class="img-fluid mt-2" src="../assets/home1.1.png" alt="" />
            </div>
            <div class="w-75">
              <!-- <img  src="../assets/home1.png" alt=""> -->
              <a target="_blank" href="#">
                <img alt="" id="choicedPhoto" src="../assets/home1.png" />
              </a>
            </div>
          </div>

          <div
            class="author-box d-flex justify-content-between align-items-center mt-3"
          >
            <div class="author-contact d-flex align-items-center">
              <img src="../assets/ava.png" class="me-2" alt="avatar" />
              <div>
                <h5>Javlonbek A.</h5>
                <p class="mt-1">+998900444401</p>
              </div>
            </div>
            <div class="btns">
                <MessageBox/>
              <!-- <button class="btn btn-primary">Muallifga yozish</button> -->
              <button class="btn btn-outline-primary mt-2">
                Telefon qilish
              </button>
            </div>
          </div>
        </div>
        <div class="col-1"></div>
        <div class="col-6 announceInfo-main">
          <h3>2-xonali kvartira sotiladi // Barcha sharoitlar mujassam)</h3>
          <div class="price my-3">
            <p class="">Narxi: <font>684 800 000 so'm</font></p>
          </div>
          <div class="d-flex">
            <div class="box">
              <img src="../assets/rooms.png" alt="" />
              Xonlar soni:
            </div>
            <div class="box fw-bold">2 ta</div>
          </div>
          <div class="d-flex">
            <div class="box">
              <img src="../assets/area.png" alt="" />
              Maydoni k/m²:
            </div>
            <div class="box fw-bold">64.3m²</div>
          </div>
          <div class="d-flex">
            <div class="box">
              <img src="../assets/floor.png" alt="" />
              Qavati:
            </div>
            <div class="box fw-bold">4-qavat</div>
          </div>
          <div class="d-flex">
            <div class="box">
              <img src="../assets/repair.png" alt="" />
              Remont:
            </div>
            <div class="box fw-bold">A’lo darajada</div>
          </div>
          <div class="d-flex">
            <div class="box">
              <img src="../assets/material.png" alt="" />
              Qurilishda ishlatilgan:
            </div>
            <div class="box fw-bold">Beton bloklari</div>
          </div>
          <div class="d-flex">
            <div class="box">
              <img src="../assets/address.png" alt="" />
              Manzili:
            </div>
            <div class="box fw-bold">Toshkent shahri, Chilonzor...</div>
          </div>
          <div>
            <div class="box">
              <img src="../assets/information-line.png" alt="" />
              Qo'shimcha ma'lumot:
            </div>
            <div class="box">
              <p>
                Juda ajoyib uy maza qilib yashash mumkin. Evro remont qilinagan
                barcha qulayliklar bor. Uyni maqtamiman suratlari orqali ham
                qanday yaxshi uy ekanligini bilib olasiz.
              </p>
              <p>
                Uyni bo’lib to’lashga ham kelishamiz, oldindan 50% to’lov
                qilingandan keyin bo’lib to’lashga gaplashsak bo’ladi.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Announcement heroText="Shu kabi e'lonlar" />
  </div>
</template>
<script setup>
import Announcement from "../components/announcements/Announcement.vue";
import MessageBox from '../components/message-box/MessageBox.vue'

</script>
<style lang="scss" scoped>
.announceInfo {
  .announceInfo-gallery {
    img {
      width: 100%;
    }
  }
  .author-box {
    width: 100%;
    height: auto;
    padding: 15px;
    background-color: #f2f4f9;
    border-radius: 6px;
    .author-contact {
      h5 {
        margin: 0px;
        font-weight: 600;
        font-size: 18px;
        line-height: 20px;
        color: #272727;
      }
      p {
        margin: 0px;
        font-weight: 400;
        font-size: 16px;
        line-height: 20px;
        color: #acacac;
      }
    }
    .btns {
      width: 245px;
      .btn {
        width: 100%;
        height: 40px;
        box-sizing: border-box;
      }
    }
  }
  .announceInfo-main {
    h3 {
      font-weight: 500;
      font-size: 24px;
      line-height: 22px;
    }
    .price {
      p {
        font-weight: 400;
        line-height: 20px;
        color: #acacac;
        font {
          font-size: 18px;
          font-weight: 600;
          line-height: 20px;
          color: #1d9ef9;
          margin-left: 10px;
        }
      }
    }
    .box {
      width: auto;
      height: auto;
      display: inline-block;
      padding: 8px;
      border-radius: 4px;
      background-color: #f2f4f9;
      margin-right: 5px;
      margin-top: 10px;
      color: #272727;
    }
  }
}
</style>
