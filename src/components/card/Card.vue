<template>
    <div class="card-item">
        <!-- <button class="card-item_top">Top e'lon</button>
        <button class="card-item_like">Like</button>
        <button class="card-item_extra">Oila uchun</button> -->
        <div class="card-item_img">
            <img src="../../assets/Picture.png" alt="">
        </div>
        <div class="card-item_info">
            <p class="card-item_info-location">Toshkent shahri, Yunusabot tumani 14-kvartal</p>
            <h4 class="card-item_info-house">4-xonali kvartira ijaraga beriladi //
Oila uchun</h4>
            <div class="card-item-info-facilities d-flex justify-content-between">
                <div><img src="../../assets/Group.png" alt=""><p> 3 xona </p></div>
                <div><img src="../../assets/ruler-2-line.png" alt=""><p> 64.3m² </p></div>
                <div><img src="../../assets/community-line.png" alt=""><p> 4-qavat </p></div>
            </div>
            <div class="card-item_info-price mt-3">
                6 931 836 so'm/oy
            </div>
        </div>
    </div>
</template>
<script>
</script>
<style lang="scss" scoped>
    .card-item{
        width: 300px;
        height: 470px;
        border-radius: 6px;
        background-color: #F2F4F9;
        .card-item_img{
            width: 100%;
            height: 300px;
            img{
                width: 100%;
                height: 100%;
                border-radius: 6px;
            }
        }
        .card-item_info{
            padding: 15px;
            box-sizing: border-box;
            p{
                font-size: 12px;
                color: #ACACAC;

            }
            h4{
                font-size: 16px;
                color: #171717;
                line-height: 20px;
            }
            .card-item-info-facilities{
                p{
                    margin: 0px 0px 0px 5px;
                }
                div{
                    font-size: 14px;
                    color: #ACACAC;
                    display: flex;
                    align-items: center !important;
                }
            }
            .card-item_info-price{
                font-size: 16px;
                line-height: 18px;
                color: #1D9EF9;
                font-weight: 600;
            }
        }
    }
</style>