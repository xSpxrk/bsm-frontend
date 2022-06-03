<template>
    <div class="homePage">
        <customer-nav-bar @refresh="updateOrders"></customer-nav-bar>
        <div class="background">
            <div class="orders">
                <h1 class="title">Последние заказы</h1>
                <div class="items">
                    <order-main v-for="order in this.orders" :order="order" :key="order.order_id"></order-main>
            </div>
            </div>
           
        </div>
    </div>
</template>

<script>
import CustomerNavBar from '@/components/HomeCustomerView/CustomerNavBar.vue'
import OrderMain from '@/components/HomeCustomerView/OrderMain.vue'
import axios from 'axios'
    export default {
        components: {
            CustomerNavBar,
            OrderMain,
        },
        data() {
            return {
                orders: [],
            }
        },
        methods: {
            async getOrders() {
                try {
                    const response = await axios.get('https://backend-bsm.herokuapp.com/customers/one', {
                        headers: {
                            'Authorization': localStorage.token
                        }
                    });
                    this.orders = response.data.orders;
                    this.orders = this.orders.reverse();
                    this.orders = this.orders.slice(0, 3);
                    console.log(response);
                } catch(error) {
                    this.$swal.fire({
                        icon: 'error',
                        title: 'Не удалось загрузить последние заказы',
                        showConfirmButton: true,
                        })
                }
                
            },
            async updateOrders(refresh) {
                this.getOrders();
            },
    
        },
        mounted() {
            this.getOrders();
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
    min-height: 900px;
}
.title {
    width: 100%;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 50px;
    line-height: 61px;
    text-align: center;
    color: #FFFFFF;
}
.orders {
    padding: 20px 0;
    margin: 0 auto;
    width: 1440px;
    height: 100%;
}
.items {
    width: 100%;
    height: 100%;
}
@media screen and (max-width: 1440px) {
    .orders {
        width: 100%;
    }
    .background {
        background: #458686;
    }
}
</style>