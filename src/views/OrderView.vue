<template>
    <div class="main" >
        <customer-nav-bar v-if="this.type == 'customer'"></customer-nav-bar>
        <provider-nav-bar v-else></provider-nav-bar>
        <dialog-window v-model:show="offerVisible">
          <create-offer @offer="createOffer"></create-offer>
        </dialog-window>
             <div class="order_main">
                <h1 class="title">Заказ</h1>
                <div class="items">
                    <order :order="this.order" @openDialog="openDialog" :material="this.material"></order>
                    <div class="utils">
                        <div class="offers__title">Предложения:</div>
                            <select class="type" v-model="selectedSort">
                                <option disabled value="" class="option">Сортировка</option>
                                <option class="option">Дата↑</option>
                                <option class="option">Дата↓</option>
                                <option class="option">Цена↑</option>
                                <option class="option">Цена↓</option>
                            </select>
                    </div>
                    <div class="offers">
                        <offer v-for="offer in offers" :offer="offer" :key="offer.offer_id"></offer>
                    </div>
                    
                </div>
        </div>
    </div>

</template>

<script>
import ProviderNavBar from '@/components/HomeProviderView/ProviderNavBar.vue'
import CustomerNavBar from '@/components/HomeCustomerView/CustomerNavBar.vue'
import Order from '@/components/HomeCustomerView/Order.vue'
import Offer from '@/components/HomeProviderView/Offer.vue'
import CreateOffer from '@/components/HomeProviderView/CreateOffer.vue'
import axios from 'axios'
    export default {
        title: 'Заказ',
        components: {
            CustomerNavBar,
            ProviderNavBar,
            Order,
            Offer,
            CreateOffer
        },
        data() {
            return {
                type: localStorage.type,
                id: 0,
                order: Object,
                offers: [],
                offerVisible: false,
                selectedSort: '',
                material: ''
            }
        },
        methods: {
            getId() {
                return parseInt(this.$route.params.id);
            },
            async getOrder(id) {
                const response = await axios.get('https://backend-bsm.herokuapp.com/orders/' + id );
                this.order = response.data;
                this.offers = this.order.offers;
                this.material = response.data.material.name;
				this.offers = this.offers.reverse();
            },
            async createOffer(offer) {
                const response = await axios.post('https://backend-bsm.herokuapp.com/offers/', {
                    quantity: offer.quantity,
                    price: offer.price,
                    order_id: this.order.order_id,
                    provider_id: null
                },
                {
                    params: {
                        token: localStorage.token
                    },
                });
                this.getOrder(this.$route.params.id);
                this.offerVisible = false;
        
            },
            openDialog(show) {
                this.offerVisible = show;
            },
            sortOffersByPriceDown() {
                this.offers.sort((a, b) => b.price - a.price)
            },
            sortOffersByPriceUp() {
                this.offers.sort((a, b) => a.price - b.price)
            },
            sortOffersByDateDown() {
                this.offers.sort((a, b) => b.offer_id - a.offer_id)
            },
            sortOffersByDateUp() {
                this.offers.sort((a, b) => a.offer_id - b.offer_id)
            }
        },
        mounted() {
            this.getId();
            setTimeout(async () => {
                 this.getOrder(this.getId());
            }, 500)
           
        },
        watch: {
            selectedSort(newValue) {
                if (newValue == 'Дата↑') {
                    this.sortOffersByDateUp();
                } else if (newValue == 'Дата↓') {
                    this.sortOffersByDateDown();
                } else if (newValue == 'Цена↑') {
                    this.sortOffersByPriceUp();
                } else {
                    this.sortOffersByPriceDown();

                }

            }
        }
        
    }
</script>

<style scoped>
.main {
    width: 100%;
    height: 100%;
}
.background {
    background: url("@/resources/images/orders_rectangle.svg") no-repeat;
    height: 100%;
}
.order_main {
    padding: 20px 0;
    margin: 0 auto;
    width: 1440px;
    height: 100%;
}
.title {
    width: 100%;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 50px;
    line-height: 61px;
    text-align: center;

    color: #3F4155;
}
.items {
    width: 100%;
    height: 100%;
}
.offers {
    max-height: 400px;
    overflow: auto;
}
.offers::-webkit-scrollbar {
    width: 0;
    height: 0;
}
.utils {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 40px;
}
.offers__title {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 50px;
    line-height: 61px;

    color: #3F4155;
}
.type {
    padding: 8px 16px;
    height: 46px;
    background: #D9D9D9;
    border-radius: 10px;
    
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 29px;
    color: #3F4155;
}
@media screen and (max-width: 1440px) {
    .order_main {
        width: 100%;
    }
}
@media screen and (max-width: 600px) {
    .utils {
        display: block;
        padding: 20px 0;
    }
    .offers__title {
        margin: 0 0 15px 0;
    }
    .title {
        align-items: center;
    }
}
</style>