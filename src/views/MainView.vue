<template>
    <div class="main">
        <main-nav-bar @login="showLogin" @registration="showRegistration"></main-nav-bar>
        <about @register="showRegistration"></about>
        <service></service>
        <advantages></advantages>
        <footer-main></footer-main>
        <dialog-window v-model:show="visibleLogin">
            <login-dialog @login="loginUser"></login-dialog>
        </dialog-window>
        <dialog-window v-model:show="visibleRegistration">
            <register-dialog @register="registerUser"></register-dialog>
        </dialog-window>
    </div>
</template>

<script>
import MainNavBar from '@/components/MainView/MainNavBar.vue'
import About from '@/components/MainView/About.vue'
import Service from '@/components/MainView/Service.vue'
import Advantages from '@/components/MainView/Advantages.vue'
import FooterMain from '@/components/MainView/FooterMain.vue'
import LoginDialog from '@/components/MainView/LoginDialog.vue'

import axios from 'axios'
import RegisterDialog from '@/components/MainView/RegisterDialog.vue'
    export default {
        components: {
            MainNavBar,
            About,
            Service,
            Advantages,
            FooterMain,
            LoginDialog,
            RegisterDialog
        },
        data() {
            return {
                visibleLogin: false,
                visibleRegistration: false
            }
        },
            methods: {
                showLogin() {
                    this.visibleLogin = true;
                },
                showRegistration() {
                     this.visibleRegistration = true;
                },
                async loginUser(user) {
                    try {
                    const response = await axios.post('https://backend-bsm.herokuapp.com/token',
                        {  
                        username: user.username,
                        password: user.password,
                        }
                    );
                    console.log(response.data)
                    localStorage.token = response.data.access_token
                    localStorage.type = response.data.type
                    if (response.data.type == 'customer') {
                        this.$router.push('/home_customer')
                    } else {
                        this.$router.push('/home_provider')
                    }

                    } catch(error) {
                        if (error.response.status == 400) {
                            this.$swal.fire({
                            icon: 'error',
                            title: 'Неправильная почта или пароль',
                            })
                        }
                        else {
                            this.$swal.fire({
                            icon: 'error',
                            title: error.response.data.detail,
                            showConfirmButton: false,
                            timer: 1500
                            })
                        }
                        
                    }
                },
          
                async registerUser(user) {
                    if (user.type == 'Заказчик') {
                    try{
                        const response = await axios.post('https://backend-bsm.herokuapp.com/customers', {
                        name: user.name,
                        email: user.email,
                        phone_number: user.phone,
                        password: user.password
                        })
                        if (response){
                             this.$swal.fire({
                                    icon: 'success',
                                    title: 'Вы успешно зарегистрировались',
                                })
                        }
                    } catch (error){
                        if (error.response.status == 422) {
                            if (error.response.data.detail[0].loc[1] == 'phone_number') {
                                this.$swal.fire({
                                icon: 'error',
                                title: 'Неверный формат номера телефона, введите по формату 80000000000',
                            })
                            } else {
                                 this.$swal.fire({
                                    icon: 'error',
                                    title: 'Неверный формат электронной почты, введите корректную почту',
                                })
                            }
                        }
                    }
              
                    }
                    else {
                        try{
                            const response = await axios.post('https://backend-bsm.herokuapp.com/providers', {
                            name: user.name,
                            email: user.email,
                            phone_number: user.phone,
                            password: user.password
                        })
                        if (response){
                             this.$swal.fire({
                                    icon: 'success',
                                    title: 'Вы успешно зарегистрировались',
                                })
                        }
                        } catch (error){
                        if (error.response.status == 422) {
                            if (error.response.data.detail[0].loc[1] == 'phone_number') {
                                this.$swal.fire({
                                icon: 'error',
                                title: 'Неверный формат номера телефона, введите по формату 80000000000',
                            })
                            } else {
                                 this.$swal.fire({
                                    icon: 'error',
                                    title: 'Неверный формат электронной почты, введите корректную почту',
                                })
                            }
                        }
                    }
                    }
          }
        },
        mounted() {
            if (localStorage.token != '') {
                 if (localStorage.type == 'customer') {
                        this.$router.push('/home_customer')
                    } else {
                        this.$router.push('/home_provider')
                    }
            }
        },
    }
</script>

<style scoped>
.main {
    width: 100%;
    display: flex;
    flex-direction: column;
}

</style>