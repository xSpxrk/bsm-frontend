<template>
    <div class="service" id="service">
        <div class="service__container">
            <div class="service__title">Для кого сервис?</div>
            <div class="service__items">
                <div class="service_items_item__customer">
                    <div class="service_item__content">
                        <div class="service_item__title">
                            Для заказчиков стройматериалов
                        </div>
                        <div class="service_item__subtitle">
                            Строительные компании, стройбазы, магазины стройматериалов, дорожно-ремонтные компании
                        </div>
                        <a class="service_item__button" href="#customers">
                            <div class="service_item_text__more">Узнать подробнее</div>
                            <div class="service_item_text__arrow">➜</div>
                        </a>
                    </div>
                    <div class="service_item_image__customer"></div>
                </div>
                <div class="service_items_item__provider">
                    <div class="service_item__content">
                        <div class="service_item__title">
                            Для поставщиков стройматериалов
                        </div>
                        <div class="service_item__subtitle">
                            Производители металлочерепицы, профнастила, фанеры, ОСБ-плит и т.п.   
                        </div>
                        <a class="service_item__button" href="#providers">
                            <div class="service_item_text__more">Узнать подробнее</div>
                            <div class="service_item_text__arrow">➜</div>
                        </a>
                    </div>
                    <div class="service_item_image__provider"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.service {
    width: 100%;
    height: 500px;
    margin: 0 0 50px 0;
}
.service__container {
    margin: 0 auto;
    width: 1440px;
    height: 100%;
}
.service__title {
    text-align: center;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 60px;
    line-height: 73px;
    margin: 0 0 65px 0;
    text-align: center;

    color: #3F4155;
}
.service__items {
    display: flex;
    justify-content: space-around;
}
.service_items_item__customer {
    width: 490px;
    height: 280px;
    background: #458686;
    border-radius: 20px;
    padding: 30px 25px;
    display: flex;
    transition-duration: .5s;
}
.service_items_item__customer:hover {
    transform: translate(0, -10px);
}
.service_items_item__provider {
    width: 490px;
    height: 280px;
    background: #DF7373;
    border-radius: 20px;
    display: flex;
    padding: 30px 25px;
    transition-duration: .5s;
}
.service_items_item__provider:hover {
    transform: translate(0, -10px);
}
.service_item__content {
    flex: 2;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}
.service_item_image__customer {
    flex: 1;
    background: url('@/resources/images/cart.svg') no-repeat;
    background-size: contain;
    background-position: bottom;
    background-origin: content-box;
    width: 100%;
    height: 100%;
}
.service_item__title {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  line-height: 36px;

  color: #FAF6ED;
}
.service_item__subtitle {
    height: 83px;
    margin: 21px 0 0 0;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;

    color: #FAF6ED;
}
.service_item__text {
    display: flex;

}
.service_item__button {
    align-items: center;
    text-decoration: none;
    color: #FAF6ED;
    margin: 36px 0 0 0;
    display: flex;
  
}
.service_item__button:visited {
    color: #FAF6ED;
}
.service_item_image__provider {
    flex: 1;
    background: url('@/resources/images/materials.svg') no-repeat;
    background-size: contain;
    background-position: bottom;
    background-origin: content-box;
    width: 100%;
    height: 100%;
}
@media screen and (max-width:1440px){
    .service__container {
        width: 100%;
    }

    .service_items_item__customer {
        margin: 0 0 30px 0;
        transition-duration: .5s;
    }
    .service_items_item__customer:hover, .service_items_item__provider:hover {
        transform: translate(20px, 0);
    }
}
@media screen and (max-width: 1100px) {
    .service__items {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .service {
        height: 100%;
    }
}
@media screen and (max-width: 530px) {
    .service_items_item__customer {
        width: 100%;
    }
     .service_items_item__provider {
        width: 100%;
    }
}
@media screen and (max-width: 375px) {
    .service_item_image__customer {
        display: none;
    }
     .service_item_image__provider {
        display: none;
    }
}
</style>