<template>
    <div class="entry">
        <h1 class="header">Авторизация</h1>
        <input-item placeholder="Почта" type="email" v-model="user.username"/>
        <input-item placeholder="Пароль" type="password" v-model="user.password"/>
        <div class="button">
            <h1 class="reset_password" @click="reset_password">Восстановить пароль</h1>
            <button-dialog class="btn" @click="enter">Вход</button-dialog>
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
                user: {
                    username: '',
                    password: ''
                }
            }
        },
        
        methods: {
            enter(){
                if (this.user.username != '' && this.user.password != '') {
                    this.$emit('login', this.user),
                    this.user = {
                        username: '',
                        password: '',
                    }
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Заполните все поля',
                        showConfirmButton: false,
                        timer: 1000
                        })
                }
               
            },
            reset_password() {
                this.$emit('reset', true)
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
.reset_password {
    font-family: 'Balsamiq Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 48px;
    color: #3F4155;
    cursor: pointer;
}
.button {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
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