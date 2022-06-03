<template>
    <div class="about" id="about">
        <div class="about__container">
            <div class="about__image"></div>
            <div class="about__title">О нас</div>
            <div class="about__content">
                <div class="about_content__information">Мы организуем систему взаимодействия покупателей и производителей материалов</div>
                <div class="about_content__btns">
                    <button class="about_content_btn" @click="showRegister">Зарегистрироваться в системе</button>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        methods: {
            showRegister() {
                this.$emit('register', true)
            }
        },
    }
</script>

<style scoped>
.about {
    margin: 50px 0;
    width: 100%;
    height: 500px;
    background: url("@/resources/images/green_rectangle.svg") no-repeat;
}
.about__container{
    margin: 0 auto;
    width: 1440px;
    height: 100%;
    flex-direction: row;
    display:flex;
    justify-content:space-between;
}
.about__image{
    margin: auto;
    flex: 1;
    background: url("@/resources/images/info_materials.svg") no-repeat;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    background-origin: content-box;
    height: 100%;
}
.about__title {
    flex: 1;
    margin: 52.5px 0;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 60px;
    line-height: 73px;
    text-align: center;
    color: #FAF6ED;
}
.about__content {
    flex: 1;
    width: 100%;
    display: block;
    justify-content: center;
    margin: auto 0;
    align-items: center;
}
.about_content__information {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    line-height: 36px;
    text-align: center;

  color: #FFFFFF;
}
.about_content__btns {
  width: 100%;
  margin-top: 33px;
  display: flex;
  align-items: center;

}
.about_content_btn {
    margin: 0 auto;
    padding: 14px 20px;
    background: #FAF6ED;
    border-radius: 12px;
    border: 0;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 18px;
    text-align: center;
    color: #3F4155;
    transition-duration: 0.5s;
    
}
.about_content_btn:hover {
  color: #ffffff;
  background: #458686;
}
@media screen and (max-width: 1440px){
    .about__container {
        width: 100%;
    }
}
@media screen and (max-width: 768px) {
    .about__image {
        display: none;
    }
    .about__container {
        display: block;
    }
    .about__title {
        margin: 40px 0;
    }
    .about_content__btns {
        margin: 100px 0;
    }
}
@media screen and (max-width: 1075px) {
    .about_content__btns {
        margin: 33px 0;
    }
}
</style>