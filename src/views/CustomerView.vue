<template>
    <div class="provider_page">
        <customer-nav-bar v-if="this.type == 'customer'"></customer-nav-bar>
        <provider-nav-bar v-else-if="this.type == 'provider'"></provider-nav-bar>
        <dialog-window class = "dialog" v-model:show="show">
            <create-feedback @feedback="createFeedback"></create-feedback>
        </dialog-window>
        <div class="background">
            <div class="inner">
                <div class="items">
                    <div class="information">
                        <div class="header">
                            <div class="title_rating">
                                <h1 class="title">{{ this.user.name }}</h1>
                                <div class="rating">
                                    <div class="img_star"></div>
                                    <div class="rating__number">{{ this.user_rating.rating}}</div>
                                </div>
                            </div>
                            
                            <div class="button">
                                <button class="btn_createFeedback" v-if="this.type === 'provider'" @click="openCreateFeedback">Оставить отзыв</button>
                            </div>
                        </div>
                        <div class="additional_info">
                        <h1 class="info">{{ this.user.email }}</h1>
                        <h1 class="info">{{ this.user.phone_number }}</h1>
                        </div>
                    </div>
                    <div class="feedback">
                        <h1 class="feedback__title">Отзывы</h1>
                        <div class="scroll" v-if="this.reviews.length > 0">
                            <customer-feedback-item v-for="review in this.reviews" :review="review" :key="review.review_id"></customer-feedback-item>
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
import CustomerFeedbackItem from '@/components/FeedbackView/CustomerFeedbackItem.vue'
import CreateFeedback from '@/components/FeedbackView/CreateFeedback.vue'
import Swal from 'sweetalert2'
import axios from 'axios'
    export default {
        title: 'Страница заказчика',
        components: {
            CustomerNavBar,
            ProviderNavBar,
            CustomerFeedbackItem,
            CreateFeedback
        },
        data() {
            return {
                type: localStorage.type,
                user: '',
                password: '',
                rating: 0,
                user_rating: 0,
                user_id: parseInt(this.$route.params.id),
                show: false,
                reviews: []
            }


        },
        methods: {
            async getCustomer() {
                const response = await axios.get('https://backend-bsm.herokuapp.com/customers/' + this.user_id);
                this.user = response.data;
                this.reviews = response.data.reviews.reverse()
            },
            openCreateFeedback() {
                this.show = true;
            },
            async createFeedback(feedback) {
                const response = await axios.post('https://backend-bsm.herokuapp.com/reviews', {
                    description: feedback.description,
                    rating: feedback.rating,
                }, {
                    params: {
                        token: localStorage.token,
                        user_id: this.user_id
                    }
                });
                this.show = false;
                this.getCustomer();
            },
            async getRating() {
                const response = await axios.get('https://backend-bsm.herokuapp.com/reviews/customer_rating/', {
                    params: {
                        customer_id: this.user_id
                    }
                });
                this.user_rating = response.data;
            }
        },
        mounted() {
            setTimeout(async () => {
                this.getCustomer();
                this.getRating();
            }, 500)
            
        }
        
    }
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Balsamiq+Sans:wght@400;700&family=Roboto+Slab:wght@100;400;700&display=swap');
.provider_page {
    width: 100%;
    height: 100%;
    overflow: auto;
}
.provider_page::-webkit-scrollbar {
  width: 0;
  height: 0;
}

.background {
    background: url("@/resources/images/orders_rectangle.svg") no-repeat;
    height: 100%;
    min-height: 800px;
}
.title {
    font-family: 'Balsamiq Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 50px;
    line-height: 61px;
    color: #FFFFFF;
}
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.title_rating {
    display: flex;
}
.inner{
    padding: 40px 0;
    margin: 0 auto;
    width: 1440px;
    height: 100%;
    display: flex;
    flex-direction: column;
}
.items {
    display: block;
}
.information {
    margin: 0 0 40px 0;
    flex: 1;
    justify-content: space-between;
    align-items: center;
}
.additional_info {
    align-items: center;
    display: flex;
    width: 50%;
    justify-content: space-around;
}
.info {
    margin: 0 15px 0 0;
    font-family: 'Balsamiq Sans';
    color: #FAF6ED;
}
.rating {
    margin: 0 0 0 10px;
    height: 100%;
    display: flex;
    align-self: flex-start;
}
.rating__number {
    font-family: 'Balsamiq Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    color: #FAF6ED;
}
.img_star {
    background: url('@/resources/images/yellow_star.svg') no-repeat;
    width: 30px;
    height: 30px;
}
.feedback {
    flex: 1;
}
.scroll {
    max-height: 600px;
    overflow: scroll;
}
.scroll::-webkit-scrollbar {
  width: 20px;
}
.scroll::-webkit-scrollbar-track {
  background-color: transparent;
}
.scroll::-webkit-scrollbar-thumb {
  background-color: #FAF6ED;
  border-radius: 20px;
  border: 6px solid transparent;
  background-clip: content-box;
}

.feedback__title {
    text-align: center;
    color: white;
    font-family: 'Balsamiq Sans';
}

.button {
    display: flex;
    justify-content: flex-end;
}
.btn_createFeedback {
    padding: 15px 60px;
    background: #DF7373;
    border-radius: 10px;
    font-family: 'Balsamiq Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 29px;
    border: none;
    text-align: center;
    transition: 1s;
    color: #FFFFFF;
    border-radius: 20px;
}
.btn_createFeedback:hover {
     color: #DF7373;
     background: #FFFFFF;
}
.btn:active {
    background: #3F4155;
}

@media screen and (max-width: 1440px) {
    .inner {
        width: 100%;
    }
    .background {
        background: #458686;
    }
}
@media screen and (max-width: 1024px) {
    .additional_info {
        flex-direction: column;
        align-items: flex-start;
    }
    .items {
        padding: 10px;
    }
}
@media screen and (max-width: 768px) {
    .items {
        width: 100%;
    }
    .btn {
        width: 100%;
    }
    .header {
        flex-direction: column;
        align-items: flex-start;
    }
    .additional_info {
        width: 100%;
    }
}
@media screen and (max-width: 425px) {
    .title_rating {
        flex-direction: column;
    }
    .rating{
        margin: 0;
    }
}

</style>