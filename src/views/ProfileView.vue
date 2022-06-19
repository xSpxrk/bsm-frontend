<template>
    <div class="main">
        <customer-nav-bar v-if="this.type == 'customer'"></customer-nav-bar>
                <provider-nav-bar v-else></provider-nav-bar>
        <div class="background">
            <h1 class="title">Ваш профиль</h1>
            <div class="inner">
                <div class="items">
                    <div class="information">
                        <h1 class="text">Наименование</h1>
                        <input-item class="input" v-model="user.name"></input-item>
                        <h1 class="text" >Почта</h1>
                        <input-item class="input" v-model="user.email" readonly></input-item>
                        <h1 class="text">Телефон</h1>
                        <input-item class="input" type='tel' v-mask="'+7 (###) ###-##-##'" v-model="user.phone_number"></input-item>
                        <h1 class="text">Новый пароль</h1>
                        <input-item class="input"  v-model="this.password" type="password"></input-item>
                        <div class="footer">
                             <div class="rating">
                                <div class="img_star"></div>
                                <div class="rating__number">{{ this.rating.rating }}</div>
                            </div>
                            <div class="button">
                            <div class="btn" @click="updateUser">Сохранить</div>
                        </div>
                        </div>
                    </div>
                    <div class="feedback">
                        <h1 class="feedback__title">Отзывы</h1>
                        <div class="scroll" v-if="this.reviews.length > 0">
                            <feedback-item v-for="review in this.reviews" :review="review" :key="review.review_id"></feedback-item>
                        </div>
                        <div class="feedback__title" v-else>Список отзывов пуст</div>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
</template>

<script>
import ProviderNavBar from '@/components/HomeProviderView/ProviderNavBar.vue'
import CustomerNavBar from '@/components/HomeCustomerView/CustomerNavBar.vue'
import FeedbackItem from '@/components/FeedbackView/FeedbackItem.vue'
import Swal from 'sweetalert2'
import axios from 'axios'
import {TheMask} from 'vue-the-mask'
    export default {
        title: 'Мой профиль',
        components: {
            CustomerNavBar,
            ProviderNavBar,
            FeedbackItem,
            TheMask
        },
        data() {
            return {
                type: localStorage.type,
                user: Object,
                password: '',
                rating: 0,
                reviews: []
            }


        },
        methods: {
            async getUser() {
                try {
                    const response = await axios.get('https://backend-bsm.herokuapp.com/users/', {
                    params: {
                        token: localStorage.token,
                    }
                });
                this.user = response.data;
                this.reviews = response.data.reviews.reverse()
                } catch {
                    Swal.fire({
                        icon: 'error',
                        title: 'Не удалось загрузить профиль',
                        showConfirmButton: false,
                        timer: 1000
                    })
                }
                
            },
            async updateUser(){
                try {
                    const response = await axios.put('https://backend-bsm.herokuapp.com/users/', {
                        name:  this.user.name,
                        email:  this.user.email,
                        phone_number:  this.user.phone_number,
                        password: this.password

                    }, {
                        params: {
                            token: localStorage.token,
                        }

                    });
                    Swal.fire({
                            icon: 'success',
                            title: 'Данные успешно изменены',
                            showConfirmButton: false,
                            timer: 1000
                    })
                    this.getUser();
                } catch (error) {
                    const response = error.response;
                    if (response.status == 422) {
                        if (response.data.detail[0].loc[1] == 'phone_number') {
                            Swal.fire({
                                icon: 'error',
                                title: 'Неправильный формат номера телефона',
                                showConfirmButton: false,
                                timer: 1000
                            })
                        } 
                        
                    } else {
                         Swal.fire({
                                icon: 'error',
                                title: 'Неизвестная ошибка',
                                showConfirmButton: false,
                                timer: 1000
                            })
                    }
                }

            },
            async getRating() {
                try {
                    const response = await axios.get('https://backend-bsm.herokuapp.com/reviews/rating/', {
                        params: {
                            token: localStorage.token
                        }
                    });
                    this.rating = response.data;
                } catch {
                    Swal.fire({
                                icon: 'error',
                                title: 'Не удалось загрузить рейтинг',
                                showConfirmButton: false,
                                timer: 1000
                            })
                }
                
            }
        },
        mounted() {
            this.getUser();
            this.getRating();
        },
        
    }
</script>

<style scoped>
.main {
    width: 100%;
    height: 100%;
}
.background {
    padding: 30px;
    background: url("@/resources/images/profile_rectangle.svg") no-repeat;
    height: 100%;
}
.title {
    width: 100%;
    font-family: 'Balsamiq Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 50px;
    line-height: 61px;
    text-align: center;
    color: #FFFFFF;
}
.inner{
    padding: 20px 0;
    margin: 0 auto;
    width: 1440px;
    height: 100%;
    display: flex;
    flex-direction: column;
}
.items {
    display: flex;
    padding: 20px;
}
.information {
    flex: 1
}
.footer {
    flex: 1;
    display: flex;
    justify-content: space-between;
}
.rating {
    display: flex;
    align-items: center;
    justify-content: center;
}
.rating__number {
    font-family: 'Balsamiq Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;

    color: #FFFFFF;
}
.img_star {
    background-image: url('@/resources/images/yellow_star.svg');
    width: 30px;
    background-position: center;
    align-self: center;
    height: 30px;
}
.feedback {
    flex: 1;

}
.scroll {
    max-height: 400px;
    overflow: auto;
    border-radius: 80px;
}
.scroll::-webkit-scrollbar { /* webkit */
    width: 0;
    height: 0;
}
.feedback__title {
    font-family: 'Balsamiq Sans';
    text-align: center;
    color: white;
}
.input {
    background: #FFFFFF;
    font-family: 'Balsamiq Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 25px;
    line-height: 48px;

    color: #3F4155;
}
.text {
    font-family: 'Balsamiq Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 25px;
    color: #FFFFFF;
    }
.button {
    display: flex;
    justify-content: flex-end;
}
.btn {
    cursor: pointer;
    padding: 15px 60px;
    background: #458686;
    border-radius: 10px;

    font-family: 'Balsamiq Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 29px;
    border: none;
    text-align: center;
    transition-duration: 0.2s;
    color: #FFFFFF;
    border-radius: 20px;
}
.btn:active {
    background: #3F4155;
}

@media screen and (max-width: 1440px) {
    .inner {
        width: 100%;
    }
    .background {
        background: #5CB25D;
    }
}
@media screen and (max-width: 768px) {
    .items {
        width: 100%;
    }
    .btn {
        width: 100%;
    }
}
@media screen and (max-width: 788px) {
    .items {
        flex-direction: column;
    }
    .scroll {
        border-radius: 0;
    }
}
@media screen and (max-width: 788px) {
    .footer {
        flex-direction: column;
    }
    .rating {
        align-self: flex-start;
    }
}
@media screen and (max-width: 650px) {
    .feedback {
        width: 100%;
    }
    .scroll {
        border-radius: 0;
    }
    .items {
        padding: 0;
    }
}
</style>