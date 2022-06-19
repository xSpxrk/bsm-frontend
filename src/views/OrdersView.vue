<template>
    <div class="main">
        <provider-nav-bar></provider-nav-bar>
        <div class="background">
            <div class="orders">
                <h1 class="title__customer">Заказы</h1>
                <div class="search">
                <input-item v-model="queryOrder" placeholder="Поиск по материалам" class="input"></input-item>
                </div>
                
                <div class="items">
                    <order-main v-for="order in sortedAndSearchedPosts" :order="order" :key="order.order_id"></order-main>
                </div>
            </div>
		<div ref="observer" class="observer"></div>
        </div>
    </div>
</template>

<script>
import ProviderNavBar from '@/components/HomeProviderView/ProviderNavBar.vue'
import OrderMain from '@/components/HomeCustomerView/OrderMain.vue'
import axios from 'axios'
import Swal from 'sweetalert2'
import InputItem from '@/components/UI/InputItem.vue'
    export default {
        title: 'Заказы',
        components: {
            ProviderNavBar,
            OrderMain,
                InputItem
        },
        data() {
            return {
                type: localStorage.type,
                orders: [],
                skip: 0,
                limit: 3,
                maxOrders: 0,
                queryOrder: ''
            }
        },
        methods: {
            async getOrders() {
                try {
                    const response = await axios.get('https://backend-bsm.herokuapp.com/orders', {
                    params: {
                    skip: this.skip,
                    limit: this.limit,
                    }

                });
                console.log(response.data)
                this.orders = [...this.orders, ...response.data];
                
                this.skip = this.limit;
                this.limit += 1;
                } catch {
                     Swal.fire({
                            icon: 'error',
                            title: 'Не получилось загрузить заказы',
                            showConfirmButton: false,
                            timer: 1000
                            })
                }
                
				
            },
            async getMax() {
                try {
                    const max = await axios.get('https://backend-bsm.herokuapp.com/orders/max/');
                    this.maxOrders = max.data;
                } catch {
                    
                }
                
            }
            
        },
        mounted() {
            this.getOrders();
            this.getMax();
			const options = {
            rootMargin: '0px',
            threshold: 1.0
            }
            const callback = (entries, observer) => {
                if (entries[0].isIntersecting && this.orders.length < this.maxOrders) {
                    this.getOrders();
                }
            };
            const observer = new IntersectionObserver(callback, options);
            observer.observe(this.$refs.observer);
        },
        computed: {
            sortedPosts() {
                return [...this.orders];
            },
            sortedAndSearchedPosts() {
                return this.sortedPosts.filter(order => order.material.name.toLowerCase().includes(this.queryOrder.toLowerCase().trim()))
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
    background: #458686 no-repeat;
    height: 100%;
}
.title__customer {
    width: 100%;
    font-family: 'Balsamiq Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 50px;
    line-height: 61px;
    text-align: center;
    color: #FFFFFF;
}
.search {
    display: flex;
    align-items: center;
    justify-content: end;
}
.input {
    width: 30%;
    align-self: flex-end;
    margin: 0 15px;
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
.observer {
    height: 10px;
}
@media screen and (max-width: 1440px) {
    .orders {
        width: 100%;
    }
}
@media screen and (max-width: 900px) {
    .search {
        justify-content: flex-start;
    }
    .input {
        width: 50%;
    }
}
@media screen and (max-width: 524px) {
    .search {
        justify-content: flex-start;
    }
    .input {
        width: 90%;
    }
}
</style>