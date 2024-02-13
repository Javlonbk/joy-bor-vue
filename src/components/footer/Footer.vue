<template>
  <div class="footer py-5">
    <div class="container">
      <div class="footer_top mb-5">
        <ul class="d-flex">
          <li>
            <h5>Hujjatlar</h5>
            <a href="#">Foydalanish shartlari</a>
            <a href="#">Sotish uchun umumiy shartlar</a>
            <a href="#">Oferta</a>
          </li>
          <li>
            <h5>Bo’limlar</h5>
            <a href="#">Ijaraga uy-joylar</a>
            <a href="#">Oila uchun uy-joylar</a>
            <a href="#">Talabalar uchun</a>
          </li>
          <li>
            <h5>Tarmoqlardagi sahifalarimiz</h5>
            <img src="../../assets/telegram.png" alt="" />
            <img src="../../assets/instagram.png" alt="" />
            <img src="../../assets/facebook.png" alt="" />
          </li>
        </ul>
      </div>
      <div class="footer_bottom d-flex justify-content-between">
        <p>© 2023 joy-bor.uz</p>
        <p>created by A.J></p>
      </div>
    </div>
  </div>
</template>
<script></script>
<style lang="scss" scoped>
.footer {
    background-color: #F2F4F9;
  .footer_top {
    ul {
      li {
        margin-right: 50px;
        h5 {
          font-weight: 400;
          font-size: 14px;
          color: #acacac;
          margin-bottom: 10px;
        }
        a {
          font-weight: 600;
          font-size: 18px;
          line-height: 20px;
          color: #272727;
          margin-top: 15px;
          display: block;
          text-decoration: none;
        }
        img{
            margin-top: 10px;
            margin-right: 10px;
        }
      }
    }
  }
  .footer_bottom{
    border-top: 1px solid #ACACAC;
    padding-top: 20px;
    p{
        font-weight: 500;
        color: #d6d6d6;
        
    }
  }
}
</style>
