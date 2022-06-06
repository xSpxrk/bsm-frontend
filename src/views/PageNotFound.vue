<template>
    <div class="not_found">
        <div class="innder">
            <div class="title">404</div>
            <div class="subtitle">Мы не смогли найти данную страницу</div>
            <div class="button">
                <dialog-button class="btn" @click="goMain">Перейти на главную</dialog-button>
            </div>

        </div>
    </div>
</template>

<script>
import DialogButton from '@/components/UI/DialogButton.vue'
    export default {
  components: { DialogButton },
        methods: {
            goMain() {
                this.$router.push('/')
            }
        },
    }
</script>

<style scoped>
.not_found{
    min-height: 100vh !important;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.title {
    font-family: 'Balsamiq Sans';
    color: #3F4155;
    font-size: 200px;
    text-align: center;
}
.subtitle {
    font-family: 'Balsamiq Sans';
    font-size: 50px;
    color: #6E7080;
}
.button {
    margin: 20px 0;
    display: flex;
    align-items: center;
    justify-content: center;
}
.btn {
    padding: 20px;
}
</style>