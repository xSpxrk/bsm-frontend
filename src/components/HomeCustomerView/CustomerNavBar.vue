<template>
    <div class="customer_navbar">
        <div class="items">
            <dialog-window v-model:show="show">
                <create-order-dialog @order="createOrder"></create-order-dialog>
            </dialog-window>
            <router-link class="icon" to="/home_customer"><span>Биржа строительных материалов</span></router-link>
                <ul class="navbar__btns">
                <router-link class="nav__link" to="/my_orders">Мои заказы</router-link>
                <router-link class="nav__link" to="/profile">Профиль</router-link>
                <a class="nav__link" @click="exit">Выход</a>
                <registration-button @click="openWindow">Создать заказ</registration-button>
            </ul>
            <input id="menu__toggle" type="checkbox" />
            <label class="menu__btn" for="menu__toggle" ref="menu__btn">
                <span></span>
            </label>
            <ul class="menu__box" id="menu__box">
                <li><registration-button class="nav__link" @click="openWindowBurger">Создать заказ</registration-button></li>
                <li><router-link class="nav__link" to="/my_orders">Мои заказы</router-link></li>
                <li><router-link class="nav__link" to="/profile">Профиль</router-link></li>
                <li><a class="nav__link" @click="exit">Выход</a></li>
               
            </ul>
        </div>
       
        <div class="divider"></div>
    </div>
</template>

<script>
import CreateOrderDialog from '@/components/HomeCustomerView/CreateOrderDialog.vue'
import axios from 'axios'
import Swal from 'sweetalert2'
    export default {
        components: {
            CreateOrderDialog
        },

        data() {
            return {
                show: false
            }
        },
        methods: {
            hideBurger() {
                this.$refs.menu__btn.click()
            },
            exit() {
                localStorage.token = ''
                localStorage.type = ''
                this.$router.push('/')
            },
            openWindow() {
                this.show = true;
            },
            openWindowBurger() {
                this.show = true;
                this.$refs.menu__btn.click()
            },
            async createOrder(order) {
                try {
                    const response = await axios.post('https://backend-bsm.herokuapp.com/orders/', {
                    name: order.name,
                    description: order.description,
                    material_id: order.material_id,
                    quantity: parseInt(order.quantity)
                },
                {
                    params: {
                        token: localStorage.token
                    }
                });
                this.order = response.data;
                this.show = false;
                Swal.fire({
                    icon: 'success',
                    title: 'Заказ успешно создан',
                })
                this.$emit('refresh', true)
                } catch (error){
                    if (error.response.status == 422){
                        Swal.fire({
                        icon: 'error',
                        title: 'Введены неправильно данные',
                    })
                    } else {
                        Swal.fire({
                        icon: 'error',
                        title: 'Неизвестная ошибка',
                        timer: 1500
                        })
                    }
                }
            },
            
        },
    }
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Balsamiq+Sans:wght@400;700&family=Roboto+Slab:wght@100;400;700&display=swap');
li{
    padding: 5px 0;
    width: 100%;
    margin: 0 auto;
}
.customer_navbar {
    margin: 0 auto;
    padding-top: 28px;
    width: 100%;
    background-color: #faf6ed;
    align-items: center;
    height: 86px;
    margin-bottom: 20px;
}
.icon {
    color: #5cb25d;
    font-size: 40px;
    font-family: 'Balsamiq Sans', serif;
    font-weight: 400;
    text-decoration: none;
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
    color: black;
}
.nav__link {
    text-decoration: none;
    margin-right: 15px;
    cursor: default;
    transition-duration: 0.2s;
}
.nav__link:visited {
    color: black;
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
    .customer_navbar {
        width: 1440px;
    }
}

@media screen and (max-width: 1100px){
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