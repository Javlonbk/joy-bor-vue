<template>
    <div class="mobile-app">
        <div class="container d-flex justify-content-between">
            <div class="mobile-phone col-3">
                <img  src="../../assets/phone.png" alt="mobile app">
            </div>
            <div class="mobile-app_text col-6">
                <h3>Bizni mobil ilovamiz orqali ko’prog’iga ega bo’ling!</h3>
                <p>joy bor ilovasi orqali uy-joy toping va qulay takliflar haqida hammadan tezroq bilib oling)</p>
                <div class="d-flex">
                    <img src="../../assets/app-store-icon 1.png" alt="">
                    <img class="mx-4" src="../../assets/play-market-icon 1.png" alt="">
                </div>
            </div>
            <div class="mobile-app_qrcode col-3">
                <img src="../../assets/QR Code.png" alt="">
                <p>Yuklab olish uchun kamerangizni QR kodga qarating</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
    .mobile-app{
        background-color: #F2F4F9;
        height: 340px;
        position: relative;
        padding: 25px;
        box-sizing: border-box;
        margin-top: 150px;
        .mobile-app_text{
            h3{
                font-size: 32px;
                font-weight: 500;
                line-height: 34px;
                color: #171717;

            }
            p{
                font-size: 20px;
                line-height: 28px;
                color: #171717;
                margin: 20px 0px;
            }
        }
        .mobile-phone{
            position: relative;
                    min-width: 302px;
            img{
                top: -80px;
                position: absolute;
            }
        }
        .mobile-app_qrcode{
            color: #ACACAC;
            font-size: 14px;
            line-height: 22px;
            text-align: center;
            p{
                width: 175px;
                margin: 0 auto;
                margin-top: 15px;
            }
        }
    }
</style>