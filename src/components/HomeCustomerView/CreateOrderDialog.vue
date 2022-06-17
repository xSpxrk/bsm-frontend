<template>
    <div class="createOrder">
        <h1 class="header">Создание заказа</h1>
        <input-item placeholder="Название" v-model="order.name"/>
        <input-item placeholder="Описание" v-model="order.description"/>
        <select class="select" v-model="order.material_id">
        <option disabled value="" class="select">Материал</option>
        <option v-for="option in this.materials" :key="option.material_id" :value="option.material_id">{{ option.name }}</option>
        </select>
        <input-item placeholder="Количество" v-model="order.quantity"/>
        <div class="button">
            <button-dialog class="btn" @click="createOrder">Создать</button-dialog>
        </div>

    </div>
</template>

<script>
import "vue-select/dist/vue-select.css";
import InputItem from '@/components/UI/InputItem.vue'
import Swal from 'sweetalert2'
import axios from 'axios'
    export default {
        components: {
             InputItem,
             
            },
        data() {
            return {
                order: {
                    name: '',
                    description: '',
                    material_id: '',
                    quantity: ''
                },
                materials: [],
                material: ''
            }
        },
        methods: {
            async getMaterials() {
                const response = await axios.get('https://backend-bsm.herokuapp.com/materials/');
                this.materials = response.data;
            },
            createOrder() {
               if (this.order.name != '' && this.order.name != '' && this.order.materials != '' && this.order.quantity != '') {
                    this.$emit('order', this.order);
                    this.order = {
                        name: '',
                        description: '',
                        material_id: '',
                        quantity: ''
                    }
               } else {
                   Swal.fire({
                        icon: 'error',
                        title: 'Заполните все поля',
                        showConfirmButton: false,
                        timer: 1000
                        })
               }
               
           }
        },
        mounted() {
            this.getMaterials();
        },
    }
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Balsamiq+Sans:wght@400;700&family=Roboto+Slab:wght@100;400;700&display=swap');
.select {
    background: #3F4155;
    color: #FAF6ED;
    padding: 0 16px;
    margin: 16px 0;
    font-family: 'Balsamiq Sans';
    text-rendering: optimizelegibility;
    -moz-osx-font-smoothing: grayscale;
    -moz-text-size-adjust: none;
    font-size: 24px;
    height: 46px;
    border-radius: 10px;
    width: 100%;
}
.createOrder {
    padding: 32px 100px;
}
.header {
    text-align: center;
    font-family: 'Balsamiq Sans';
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