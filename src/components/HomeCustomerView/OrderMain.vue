<template>
    <div class="order">
        <div class="title">
            <div class="name">{{ order.name }}</div>
            <div class="arrow">
                <div class="arrow_img" @click="$router.push(`/order/${order.order_id}`)"></div>
            </div>

        </div>
        <div class="description">{{ order.description }}</div>
        <div class="info">
           <div class="material">
                <div class="material__text">Материал:</div>
                <div class="material__name">{{ order.material.name }}</div>
            </div>
            <div class="count">
                <div class="text">Количество:</div>
                <div class="counter">{{ order.quantity }}</div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
    export default {
        props: {
            order: {
                type: Object,
            }
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
    background: #FAF6ED;
    height: 240px;
    border-radius: 30px;
    transition-duration: 0.5s;
}
.order:hover{
    transform: translate(10px, 0);
}
.title {
    display: flex;
    font-family: 'Balsamiq Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    line-height: 36px;

    color: #3F4155;
}
.name {
    flex: 1;
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

    color: #6E7080;
}
.material {
    display: flex;
    font-family: 'Balsamiq Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    line-height: 36px;

    color: #3F4155;
}
.material__name {
    margin: 0 0 0 10px;
    color: #6E7080;
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

    color: #3F4155;
}
.counter {
    color: #6E7080;
    margin: 0 0 0 15px;
}
.arrow_img {
    cursor: pointer;
    background: url('@/resources/images/arrow.svg') no-repeat;
    width: 55px;
}
@media screen and (max-width: 600px) {
    .info {
        display: flex;
        flex-direction: column;
    }
    .count {
        justify-content: flex-start
    }
    .description {
        margin: 20px 0;

    }
    .order {
        height: 100%;
    }
}
@media screen and (max-width: 375px) {
    .arrow_img {
    background-size: contain;
    background-position: center;
    width: 40px;
    background-origin: content-box;
    }
    .description {
        text-align: left;
        
    }
    .order {
        height: 100%;
        width: 100%;
    }    .count {
        flex-direction: column;
        text-align: start;
    }
}

</style>