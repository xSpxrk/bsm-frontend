<template>
    <div class="main">
        <customer-nav-bar></customer-nav-bar>
        <div class="background">
            <div class="offers">
                <h1 class="title">Мои заказы</h1>
                <div class="items">
                    <order-main v-for="order in this.orders" :order="order" :key="order.order_id"></order-main>
            </div>
            </div>
        </div>
        <div ref="observer" class="observer"></div>
    </div>
</template>

<script>
import OrderMain from '@/components/HomeCustomerView/OrderMain.vue'
import CustomerNavBar from '@/components/HomeCustomerView/CustomerNavBar.vue'
import Swal from 'sweetalert2'
import axios from 'axios'
    export default {
        title: 'Мои заказы',
        components: {
            OrderMain,
            CustomerNavBar
        },
        data() {
            return {
                type: localStorage.type,
                customer: Object,
                orders: []
            }
        },
        methods: {
            async getCustomer() {
                try {
                    const response = await axios.get('https://backend-bsm.herokuapp.com/users',
                {
                    params: {
                        token: localStorage.token,
                    }
                })
                this.customer = response.data;
                this.orders = this.customer.orders;
				this.orders = this.orders.reverse();
                } catch (error) {
                     Swal.fire({
                        icon: 'error',
                        title: 'Не удалось загрузить ваши заказы',
                        showConfirmButton: true,
                        })
                }
                
            }
        },
        mounted() {
            this.getCustomer();
        },
        
    }
</script>

<style scoped>
.main {
    width: 100%;
    height: 100%;
}
.offers {
    padding: 20px 0;
    margin: 0 auto;
    width: 1440px;
    height: 100%;
    min-height: 800px;
}
.items {
    width: 100%;
    height: 100%;
}
.background {
    background: #458686;
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
@media screen and (max-width: 1440px) {
    .offers {
        width: 100%;
    }
}
</style>