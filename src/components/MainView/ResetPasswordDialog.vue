<template>
    <div class="entry">
        <h1 class="header">Восстановление пароля</h1>
        <input-item placeholder="Почта" type="email" v-model="this.email"/>
        <div class="button">
            <button-dialog class="btn" @click="enter">Отправить</button-dialog>
        </div>

    </div>
</template>

<script>
import InputItem from '@/components/UI/InputItem.vue'
import Swal from 'sweetalert2'
    export default {
        components: {
             InputItem
            },
        data() {
            return {
                email: ''
            }
        },
        
        methods: {
            enter(){
                if (this.email != '') {
                    this.$emit('reset', this.email),
                    this.email = ''
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
@import url('https://fonts.googleapis.com/css2?family=Balsamiq+Sans:wght@400;700&family=Roboto+Slab:wght@100;400;700&display=swap');
.entry {
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
    align-items: center;
    justify-content: flex-end;
}
.btn {
   padding: 8px 100px; 
   margin: 16px 0 0 0;
}
@media screen and (max-width: 425px) {
    .entry{
        padding: 32px 10px;
    }
    .btn {
        width: 100%;
    }
}
</style>