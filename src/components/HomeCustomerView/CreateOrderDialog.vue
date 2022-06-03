<template>
    <div class="createOrder">
        <h1 class="header">Создание заказа</h1>
        <input-item placeholder="Название" v-model="order.name"/>
        <input-item placeholder="Описание" v-model="order.description"/>
        <input-item placeholder="Материал" v-model="order.materials"/>
        <input-item placeholder="Количество" v-model="order.quantity"/>
        <div class="button">
            <button-dialog class="btn" @click="createOrder">Создать</button-dialog>
        </div>

    </div>
</template>

<script>
import InputItem from '@/components/UI/InputItem.vue'
    export default {
        components: {
             InputItem,
             
            },
        data() {
            return {
                order: {
                    name: '',
                    description: '',
                    materials: '',
                    quantity: ''
                }
            }
        },
        methods: {
           createOrder() {
               if (this.order.name != '' && this.order.name != '' && this.order.materials != '' && this.order.quantity != '') {
                    this.$emit('order', this.order);
                    this.order = {
                        name: '',
                        description: '',
                        material: '',
                        quantity: ''
                    }
               } else {
                   this.$swal.fire({
                        icon: 'error',
                        title: 'Заполните все поля',
                        showConfirmButton: false,
                        timer: 1000
                        })
               }
               
           }
        },
    }
</script>

<style scoped>
.createOrder {
    padding: 32px 100px;
}
.header {
    text-align: center;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 40px;
    line-height: 48px;
    margin: 0 0 18px 0;
    color: #3F4155;
}
.button {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: end;
}
.btn {
   padding: 8px 100px;
}
@media screen and (max-width: 425px){
    .createOrder {
    padding: 32px 10px;
    }
    .button {
        justify-content: center;
    }
}
</style>