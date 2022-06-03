<template>
    <div class="offerDialog">
        <h1 class="header">Добавить предложение</h1>
        <input-item placeholder="Цена" v-model="offer.price"/>
        <input-item placeholder="Количество" type="email" v-model="offer.quantity"/>
        <div class="button">
            <button-dialog class="btn" @click="register">Добавить</button-dialog>
        </div>

    </div>
</template>

<script>
import InputItem from '@/components/UI/InputItem.vue'
import Swal from 'sweetalert2'
    export default {
        components: { InputItem },
        data() {
            return {
                offer: {
                    price: '',
                    quantity: ''
                }
            }
        },
        methods: {
            register() {
                if (this.offer.price != '' && this.offer.count != '') {
                    this.$emit('offer', this.offer),
                        this.usofferer = {
                            price: '',
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
        
    }
</script>

<style scoped>
.offerDialog {
    padding: 32px 230px;
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
    padding: 8px 40px;
}
.type {
    padding: 8px 16px;
    height: 46px;
    width: 100%;
    background: #D9D9D9;
    border-radius: 10px;
    
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 29px;
    color: #3F4155;
}
@media screen and (max-width: 1024px) {
    .offerDialog {
        padding: 32px 60px;
    }
}
@media screen and (max-width: 425px) {
    .offerDialog {
        padding: 32px 0;
    }
    .btn {
        width: 100%;
    }
}
</style>