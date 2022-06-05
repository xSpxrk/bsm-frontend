<template>
    <div class="main_navbar">
        <div class="items">
            <h1 class="icon"><span>Биржа строительных материалов</span></h1>
                <ul class="navbar__btns">
                <a class="nav__link" href="#about">О нас</a>
                <a class="nav__link" href="#service">Для кого</a>
                <a class="nav__link" href="#customers">Заказчикам</a>
                <a class="nav__link" href="#providers">Поставщикам</a>
                <a class="nav__link" @click="loginUser">Вход</a>
                <registration-button class="nav__link" @click="openRegistration">Регистрация</registration-button>
            </ul>
            <input id="menu__toggle" type="checkbox" />
            <label class="menu__btn" for="menu__toggle" ref="menu__btn">
                <span></span>
            </label>
            <ul class="menu__box" id="menu__box">
                    <li><a class="menu__link" href="#about" @click="hideBurger">О нас</a></li>
                    <li><a class="menu__link" href="#service" @click="hideBurger">Для кого</a></li>
                    <li><a class="menu__link" href="#customers" @click="hideBurger">Заказчикам</a></li>
                    <li><a class="menu__link" href="#providers" @click="hideBurger">Поставщикам</a></li>
                    <li><a class="menu__link" @click="loginUserBurger">Вход</a></li>
                    <li><registration-button @click="openRegistrationBurger">Регистрация</registration-button></li>
            </ul>
        </div>
       
        <div class="divider"></div>
    </div>
</template>

<script>
    export default {
        methods: {
            hideBurger() {
                this.$refs.menu__btn.click()
            },
            loginUser() {
                this.$emit('login', true)
            },
            openRegistration() {
                this.$emit('registration', true)
            },
            openRegistrationBurger() {
                this.$emit('registration', true)
                this.$refs.menu__btn.click()
            },
            loginUserBurger() {
                this.$emit('login', true)
                this.$refs.menu__btn.click()
            },
        },
    }
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Balsamiq+Sans:wght@400;700&family=Roboto+Slab:wght@100;400;700&display=swap');
li{
    padding: 5px 0;
}
.main_navbar {
    margin: 0 auto;
    padding-top: 28px;
    width: 100%;
    background-color: #faf6ed;
    align-items: center;
    height: 86px;
}
.icon {
    color: #5cb25d;
    font-size: 40px;
    font-family: 'Balsamiq Sans', serif;
    font-weight: 400;
    cursor: default;
}
.divider {
    margin-top: 2px;
    height: 1px;
    background: gray;
}
.navbar__btns {
    margin-left: auto;
    font-size: 15px;
    font-family: 'Balsamiq Sans', serif;
    font-weight: 400;
    color: #3F4155;
}
.nav__link {
    text-decoration: none;
    margin-right: 15px;
    cursor: pointer;
    transition-duration: 0.2s;
}
.nav__link:visited {
    color: #3F4155;
}

.nav__link:hover {
    color: #5cb25d;
}
.items {
    background-color: #faf6ed;
    display: flex;
    align-items: center;
}
.menu__link {
    text-decoration: none;
    cursor: default;
    transition-duration: 0.2s;
    
}
.menu__link:visited {
    color: black;
}
.menu__link:visited ~ .menu__box {
    opacity: 0;
}
.menu__link:hover {
    color: #5cb25d;
}
.menu__btn {
    visibility: hidden;
}

@media screen and (min-width: 1440px)  {
    .main_navbar {
        width: 1440px;
    }
}

@media screen and (max-width: 1250px){
    .icon span {
        display: none;
    }
    .icon::after {
        content: 'БСМ'
    }
}
@media screen and (max-width: 768px){
    
    .navbar__btns {
        display: none;
    }

    .menu__box {
    display: block;
    position: fixed;
    visibility: hidden;
    top: 0;
    right: -100%;
    width: 300px;
    height: 100%;
    margin: 0;
    padding: 80px 0;
    list-style: none;
    text-align: center;
    background-color: #00000029;
    }
    .menu__btn {
        visibility: visible;
    }

}
 #menu__toggle:checked ~ .menu__btn > span {
  transform: rotate(45deg);
}
#menu__toggle:checked ~ .menu__btn > span::before {
  top: 0;
  transform: rotate(0);
}
#menu__toggle:checked ~ .menu__btn > span::after {
  top: 0;
  transform: rotate(90deg);
}
#menu__toggle:checked ~ .menu__box {
  visibility: visible;
  right: 0;
}
/* скрываем чекбокс */
#menu__toggle {
  opacity: 0;
  display: none;
}
/* стилизуем кнопку */
.menu__btn {
  display: flex; /* используем flex для центрирования содержимого */
  align-items: center;  /* центрируем содержимое кнопки */
  position: fixed;
  right: 20px;
  width: 30px;
  cursor: pointer;
  z-index: 1;
}
/* добавляем "гамбургер" */
.menu__btn > span,
.menu__btn > span::before,
.menu__btn > span::after {
  display: block;
  position: absolute;
  width: 100%;
  height: 2px;
  background-color: #616161;
}
.menu__btn > span::before {
  content: '';
  top: -8px;
}
.menu__btn > span::after {
  content: '';
  top: 8px;
}
.menu__box {
    visibility: hidden;
}
.menu__box {
  display: block;
  position: fixed;
  visibility: hidden;
  top: 0;
  right: -100%;
  width: 300px;
  height: 100%;
  margin: 0;
  padding: 80px 0;
  list-style: none;
  text-align: center;
  background-color: #faf6ed;
  box-shadow: 1px 0px 6px rgba(0, 0, 0, .2);
}

</style>