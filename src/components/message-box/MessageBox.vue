<template>

  <div class="modal-container">
    <!-- Button trigger modal -->
    <button
      type="button"
      class="btn button btn-primary"
      data-bs-toggle="modal"
      data-bs-target="#messageModal"
    >
      Muallifga yozish
    </button>
    <!-- Modal -->
    <div
      class="modal fade"
      id="messageModal"
      tabindex="-1"
      aria-labelledby="messageModalLabel"
      aria-hidden="true"
    >
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="message-box">
    <div class="message-box_header d-flex justify-content-between align-items-center">
      <div class="author-contact d-flex align-items-center">
        <img src="../../assets/ava.png" class="me-3" alt="avatar" />
        <div>
          <h5>Javlonbek Abdurasulov</h5>
          <p class="mt-1">Oxirgi faollik: kecha 18:28</p>
        </div>
      </div>
      <div>
        <img type="button" src="../../assets/verline.png" alt="">
        <img
         class="ms-5" src="../../assets/cancel.png"
        alt=""
        type="button"
        data-bs-dismiss="modal"
        aria-label="Close"
        />
      </div>
    </div>
    <div class="message-box_body">
        <div class="d-flex justify-content-end mt-5">
            <div class="send-mess">
            <p>Assalomu alaykum, yaxshimisiz oxirgi narxini nechi qilib berasiz aka?</p>
            <div class="d-flex justify-content-between align-items-center">
                <span>14:23</span>
                <img src="../../assets/check-double-fill.svg" alt="">
            </div>
        </div>
        </div>
        <div class="d-flex justify-content-start mt-5">
            <div class="accept-mess">
            <p>Va alaykum assalom, oxirgi narxi shu manzil bo’yicha kelsangiz yoki telefon qilsangiz ma’lumot beraman.</p>
            <div class="d-flex justify-content-between align-items-center">
                <span>14:23</span>
                <img src="../../assets/check-fill.svg" alt="">
            </div>
        </div>
        </div>
    </div>
    <div class="message-box_footer">
        <input type="text" placeholder="Xabaringizni kiriting!">
        <button class="btn btn-primary">
            <img src="../../assets/send.svg" alt="">
        </button>
    </div>
  </div>
        </div>
      </div>
    
    </div>


  </div>

  
</template>
<script setup></script>
<style lang="scss" scoped>
 .btn {
        width: 250px;
        height: 40px;
        box-sizing: border-box;
      }
.modal-content{
  margin: 50px auto;
  width: 630px;
  height: 630px;
  border-radius: 6px;
  border: 0.5px solid #acacac;
}
.message-box {

  .message-box_header {
    height: 76px;
    padding: 14px 24px;
    box-sizing: border-box;
    background-color: #F2F4F9;
    .author-contact {
        img{
            width: 48px;
            height: 48px;
        }
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
        font-size: 14px;
        line-height: 22px;
        color: #acacac;
      }
    }
  }
  .message-box_body{
    height: calc(100% - 132px);
    padding: 50px 24px;
    .send-mess, .accept-mess{
        padding: 14px;
        padding-right: 24px;
        box-sizing: border-box;
        width: 45%;
        border-radius: 6px;
    }
    .send-mess{
        background-color: #1D9EF9;
        color: #fff;
    }
    .accept-mess{
        background-color: #F2F4F9;
        color: #272727;
    }
  }
  .message-box_footer{
    height: 56px;
    padding: 14px 40px;
    background-color: #F2F4F9;
    position: relative;
    input{
        border: none;
        background-color: transparent;
        outline: none;
    }
    button{
        position: absolute;
        width: 56px;
        height: 100%;
        top: 0px;
        right: 0px;
    }
  }
}
</style>
