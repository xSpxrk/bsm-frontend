<template>
    <div class="advantages">
        <div class="advantages__inner" id="customers">
            <div class="advantages_inner__title">Заказчикам</div>
            <div class="advantages_inner__element">
              <div class="advantages_inner_element__content">
                <img class="advantages_inner_element_content__icon" src="@/resources/images/leather_customers.svg"/>
                <div class="advantages_inner_element_content__title">Просто</div>
                <div class="advantages_inner_element_content__subtitle">Легкий способ найти нужного поставщика!</div>
              </div>
               <div class="advantages_inner_element__content">
                <img class="advantages_inner_element_content__icon" src="@/resources/images/price.svg"/>
                <div class="advantages_inner_element_content__title">Лучшие цены</div>
                <div class="advantages_inner_element_content__subtitle">За вашу заявку борятся десятки поставщиков, обеспечив минимальную цену!</div>
              </div>
               <div class="advantages_inner_element__content">
                <img class="advantages_inner_element_content__icon" src="@/resources/images/star.svg"/>
                <div class="advantages_inner_element_content__title">Лучшие партнеры</div>
                <div class="advantages_inner_element_content__subtitle">Рейтинг поставщика - выбирайте надежного партнера!</div>
              </div>
            </div>
        </div>
            <div class="advantages__inner" id="providers">
            <div class="advantages_inner__title" id="hide_title">Поставщикам</div>
            <div class="advantages_inner__element">
              <div class="advantages_inner_element__content">
                <img class="advantages_inner_element_content__icon" src="@/resources/images/leather_providers.svg"/>
                <div class="advantages_inner_element_content__title">Просто</div>
                <div class="advantages_inner_element_content__subtitle">Легкий способ предложить свой товар заказчикам</div>
              </div>
               <div class="advantages_inner_element__content">
                <img class="advantages_inner_element_content__icon" src="@/resources/images/contacts.svg"/>
                <div class="advantages_inner_element_content__title">База заказчиков</div>
                <div class="advantages_inner_element_content__subtitle">Тысяча заказчиков вашей продукции</div>
              </div>
               <div class="advantages_inner_element__content" id="anytime">
                <img class="advantages_inner_element_content__icon" src="@/resources/images/clock.svg"/>
                <div class="advantages_inner_element_content__title">Работа в любое время</div>
                <div class="advantages_inner_element_content__subtitle">Работа с заявками в любой момент</div>
              </div>
            </div>
            <div class="advantages_inner__title" id="title_provider">Поставщикам</div>
          </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Balsamiq+Sans:wght@400;700&family=Roboto+Slab:wght@100;400;700&display=swap');
.advantages {
  display: block;
  height: 1000px;
  background: url("@/resources/images/info_triangles.svg") no-repeat;
  margin: 0 0 50px 0;
}
.advantages__inner{
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  padding: 0 20px;
  width: 1440px;
  margin: 0 auto;
  height: 500px;
}
#hide_title {
    display: none;
}
.advantages_inner__title {
  width: 25%;
  align-self: center;
  font-family: 'Balsamiq Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 55px;
  line-height: 67px;
  text-align: left;
  color: #FAF6ED;
}

.advantages_inner__element {
  width: 75%;
  margin: 40px 0 0 0;
  display: flex;
  justify-content: space-between;

}
#anytime {
  margin: 0 20px 0 0
}
.advantages_inner_element__content {
  width: 30%;
}
.advantages_inner_element_content__icon {
  height: 93px;
  width: 100px;
  margin: 0 0 24px 0;
  
}
.advantages_inner_element_content__title {
  font-family: 'Balsamiq Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  line-height: 48px;

  color: #FAF6ED;
}
.advantages_inner_element_content__subtitle {
  margin: 10px 0 0 0;
  font-family: 'Balsamiq Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  line-height: 36px;

  color: #FAF6ED;
}
@media screen and (max-width: 1440px) {
    .advantages__inner {
        width: 100%;
    }
}
@media screen and (min-width: 1140px) and (max-width: 1400px) {
    .advantages_inner__title {
        font-size: 40px;
    }
}
@media screen and (max-width: 1140px) {
    .advantages__inner{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .advantages_inner__element {
        width: 100%;
    }
    .advantages_inner_element_content__subtitle {
        font-size: 20px;

    }
    .advantages_inner__title {
        width: 100%;
        text-align: center;
    }
    #title_provider {
        display: none;
    }
    #hide_title {
        display: block;
    }
}
@media screen and (max-width: 768px) {
    .advantages {
        background: none;
    }
    #customers {
        background: #458686;
    }
    #providers {
        background: #DF7373;
    }
}
@media screen and (max-width: 650px) {
    .advantages_inner__element {
        display: flex;
        flex-direction: column;
    }
     .advantages__inner {
        height: 100%;
    }
    .advantages_inner_element__content {
        width: 100%;
        margin: 10px 0;
    }
    .advantages {
        height: 100%;
    }
    .advantages_inner__title {
        margin: 30px 0 0;
    }
}
@media screen and (max-width: 320px) {
    .advantages_inner__title {
        font-size: 40px;
    }
    .advantages_inner_element_content__title {
        font-size: 30px;
    }
}
@media screen and (max-width: 350px) {
    #hide_title {
      font-size: 35px;
    }
}
</style>