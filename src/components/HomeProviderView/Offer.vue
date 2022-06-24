<template>
    <div class="offer">
            <div class="header">
                  <div class="name" >Поставщик:</div>
                  <div class="name_provider" @click="$router.push(`/provider/${offer.provider_id}`)">{{ this.provider.name }} ☚</div>
            </div>
          
            <div class="phone">
                <div class="text">Номер телефона:</div>
                <div class="number">{{ this.provider.phone_number }}</div>
            </div>
            <div class="email">
                <div class="text">Электронная почта:</div>
                <div class="address">{{ this.provider.email }}</div>
            </div>
        <div class="info">
             <div class="count">
                <div class="text">Количество:</div>
                <div class="counter">{{ offer.quantity }}</div>
            </div>
             <div class="price">
                    <div class="price__number">{{ offer.price }}</div>
                    <div class="rubles">руб.</div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
    export default {
        props: {
            offer: {
                type: Object
            }
        },
        data() {
            return {
                provider: Object
            }
        },
        methods: {
            async getProvider(provider_id) {
                const response = await axios.get('https://backend-bsm.herokuapp.com/providers/' + provider_id);
                this.provider = response.data;
            }
        },
        mounted() {
            this.getProvider(this.offer.provider_id);
        },
       
    }
</script>

<style scoped>
.offer {
    padding: 32px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin: 16px auto;
    width: calc(100% - 60px);
    background: #DF7373;
    height: 240px;
}
.title {
    display: flex;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    line-height: 36px;

    color: #F5F5F5;;
}
.name_price {
    display: flex;
}
.header {
    flex: 1;
    display: flex;
    align-items: center;
}
.name {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    line-height: 36px;

    color: #CCCCCC;
}
.name_provider {
    cursor: pointer;
    margin: 0 0 0 10px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    line-height: 36px;
    transition: 1s;
    color: #F5F5F5;
}
.name_provider:hover {
    color: #458686;
    transform: translate(0, -10px);
}
.price {
    flex: 1;
    justify-content: flex-end;
    margin: 0 0 0 32px;
    display: flex;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    line-height: 36px;
    text-align: center;

    color: #F5F5F5;
}

.phone {
    flex: 1;
    display: flex;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 25px;
    line-height: 30px;
    text-align: justify;

    color: #CCCCCC;
}
.number {
    margin: 0 0 0 10px;
    color: #F5F5F5;
}
.info {
    display: flex;
    justify-content: flex-start;
}
.price__number {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    line-height: 36px;
    text-align: center;

    color: #F5F5F5;
}
.email {
    display: flex;
    flex: 1;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 25px;
    line-height: 30px;
    text-align: justify;

    color: #CCCCCC;
}
.address {
    margin: 0 0 0 10px;
    color: #F5F5F5;
}
.count {
    flex: 1;
    justify-content: start;
    display: flex;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    line-height: 36px;
    text-align: center;

    color: #F5F5F5;

}
.counter {
    margin: 0 0 0 15px;
}
.arrow_img {
    background: url('@/resources/images/arrow.svg') no-repeat;
    width: 55px;
}
.rubles {
    margin: 0 0 0 8px;
}

@media screen and (max-width: 768px) {
    .info {
        display: flex;
        flex-direction: column;
    }
    .price {
        justify-content: flex-start;
        margin: 0;
    }
    .btn {
        font-size: 15px;
    }
    .offer {
        width: 100%;
        height: 100%;
    }
}
@media screen and (max-width: 425px) {
    .phone {
        flex-direction: column;
    }
    .email {
        flex-flow: column;
    }
    .offer {
        padding: 10px;
    }
    .header {
        flex-direction: column;
    }
    .name {
        align-self: flex-start;
    }
    .name_provider {
        align-self: flex-start;
        margin: 0;
    }
}
</style>