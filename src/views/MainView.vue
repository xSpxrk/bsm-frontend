<template>
    <div class="main">
        <main-nav-bar @login="showLogin" @registration="showRegistration"></main-nav-bar>
        <about @register="showRegistration"></about>
        <service></service>
        <advantages></advantages>
        <footer-main></footer-main>
        <dialog-window v-model:show="visibleLogin">
            <login-dialog @login="loginUser" @reset="showResetPassword"></login-dialog>
        </dialog-window>
        <dialog-window v-model:show="visibleRegistration">
            <register-dialog @register="registerUser"></register-dialog>
        </dialog-window>
        <dialog-window v-model:show="visibleReset">
            <reset-password-dialog @reset="resetPassword"></reset-password-dialog>
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
import Swal from 'sweetalert2'
import RegisterDialog from '@/components/MainView/RegisterDialog.vue'
import ResetPasswordDialog from '@/components/MainView/ResetPasswordDialog.vue'
    export default {
        title: 'Биржа строительных материалов',
        components: {
            MainNavBar,
            About,
            Service,
            Advantages,
            FooterMain,
            LoginDialog,
            RegisterDialog,
            ResetPasswordDialog
        },
        data() {
            return {
                visibleLogin: false,
                visibleRegistration: false,
                visibleReset: false
            }
        },
            methods: {
                showLogin() {
                    this.visibleLogin = true;
                },
                showRegistration() {
                     this.visibleRegistration = true;
                },
                showResetPassword() {
                    this.visibleLogin = false;
                    this.visibleReset = true;
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
                            Swal.fire({
                            icon: 'error',
                            title: 'Неправильная почта или пароль',
                            })
                        }
                        else {
                            Swal.fire({
                            icon: 'error',
                            title: 'Неизвестная ошибка',
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
                             Swal.fire({
                                    icon: 'success',
                                    title: 'Вы успешно зарегистрировались',
                                })
                        }
                        this.showRegistration = false;
                    } catch (error){
                        if (error.response.status == 422) {
                            if (error.response.data.detail[0].loc[1] == 'phone_number') {
                                Swal.fire({
                                icon: 'error',
                                title: 'Неверный формат номера телефона, введите по формату 80000000000',
                            })
                            } else {
                                 Swal.fire({
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
                        this.showRegistration = false;
                        }
                        } catch (error){
                        if (error.response.status == 422) {
                            if (error.response.data.detail[0].loc[1] == 'phone_number') {
                                Swal.fire({
                                icon: 'error',
                                title: 'Неверный формат номера телефона, введите по формату 80000000000',
                            })
                            } else {
                                 Swal.fire({
                                    icon: 'error',
                                    title: 'Неверный формат электронной почты, введите корректную почту',
                                })
                            }
                        }
                    }
                    }
          },
                async resetPassword(email) {
                    try{
                        const response = await axios.post('https://backend-bsm.herokuapp.com/reset-password', {
                            email: email
                        })
                        Swal.fire({
                                icon: 'success',
                                title: 'Новый пароль успешно отправлен к вам на почту',
                            })
                        this.visibleReset = false;
                    }catch (error) {
                        if (error.response.status == 400) {
                            Swal.fire({
                                icon: 'error',
                                title: 'Данного пользователя не существует',
                            })
                        }
                        else {
                            Swal.fire({
                                icon: 'error',
                                title: 'Не удалось отправить новый пароль на почту',
                            })
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