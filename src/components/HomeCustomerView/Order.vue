<template>
    <div class="order">
        <div class="title">
            <div class="name">
                <div class="name__text" @click="$router.push(`/customer/${order.customer_id}`)"><span>{{ this.customer.name }} ☚</span></div>
            </div>
            <div class="btn">
                <div @click="letOffer" v-show="this.type == 'provider'">Оставить предложение</div>
                <div @click="deleteOrder" v-show="this.type == 'customer'">Удалить заказ</div>
            </div>

        </div>
        <div class="description">{{ order.description }}</div>
        <div class="info">
            <div class="material">Материал: {{ this.material }}</div>
            <div class="count">
                <div class="text">Количество:</div>
                <div class="counter">{{ order.quantity }}</div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import Swal from 'sweetalert2'
    export default {
        props: {
            order: {
                type: Object,
            },
            material: {
                type: String
            }
        },
        data() {
            return {
                customer: '',
                type: localStorage.type,
            }
        },
        methods: {
            async getCustomer(customer_id) {
                try {
                    const response = await axios.get('https://backend-bsm.herokuapp.com/customers/' + customer_id);
                    this.customer = response.data;
                } catch (error) {
                    Swal.fire({
                                icon: 'error',
                                title: 'Не получилось загрузить данные о заказчике',
                                showConfirmButton: false,
                                timer: 1000
                            })
                }
                
            },
            letOffer() {
                this.$emit('openDialog', true)
            },
            async deleteOrder() {
                try {
                    const response = await axios.delete('https://backend-bsm.herokuapp.com/orders/'+ this.order.order_id);
                } catch (error) {
                    Swal.fire({
                                icon: 'error',
                                title: 'Не получилось удалить заказ',
                                showConfirmButton: false,
                                timer: 1000
                            })
                }
                this.$router.back();
                
            }
        },
        mounted() {
            setTimeout( async () => {
            this.getCustomer(this.order.customer_id);
            }, 1000);

        },
        
    }
</script>

<style scoped>
.order {
    padding: 32px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin: 16px auto;
    width: calc(100% - 30px);
    background: #458686;
    height: 240px;
    border-radius: 30px;
    transition-duration: 0.5s;
}
.title {
    display: flex;
    font-family: 'Balsamiq Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    line-height: 36px;

    color: #F5F5F5;;
}
.name {
    flex: 1;
    display: flex;
    justify-content: flex-start;

}
.name__text {
    cursor: pointer;
    transition: 0.5s;   
}
.name__text:hover {
    color:#DF7373;
    transform: translate(0, -10px);
}

.arrow {
    display: flex;
    justify-content: end;
    flex: 1;
}
.info {
    display: flex;
    justify-content: flex-start;
}
.description {
    word-wrap: break-word;
    font-family: 'Balsamiq Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 25px;
    line-height: 30px;
    text-align: justify;

    color: #CCCCCC;
}
.material {
    flex: 1;
    font-family: 'Balsamiq Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    line-height: 36px;


    color: #F5F5F5;;
}
.count {
    flex: 1;
    justify-content: end;
    display: flex;
    font-family: 'Balsamiq Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    line-height: 36px;
    text-align: center;

    color: #F5F5F5;;
}
.counter {
    margin: 0 0 0 15px;
}
.arrow_img {
    background: url('@/resources/images/arrow.svg') no-repeat;
    width: 55px;
}
.btn {
    background:#DF7373;
    padding: 10px;
    border-radius: 12px;
    cursor: default;
    transition-duration: 0.5s;
    cursor: pointer;
}
.btn:active {
    background: #F5F5F5;
    color: #DF7373;
}
@media screen and (max-width: 768px) {
    .info {
        display: flex;
        flex-direction: column;
    }
    .count {
        justify-content: flex-start;
    }
    .btn {
        font-size: 15px;
    }
    .order {
        width: 100%;
        height: 100%;
    }
    .description {
        text-justify: auto;
    }
    
}
@media screen and (max-width: 425px) {
    .phone {
        flex-direction: column;
    }
    .email {
        flex-flow: column;
    }
    .order {
        border-radius: 4px;
        padding: 10px;
    }
    .title {
        flex-direction: column;
    }
    .btn {
        text-align: center;
    }
}
@media screen and (max-width: 330px) {
    .btn {
        font-size: 20px;
    }
}

</style>