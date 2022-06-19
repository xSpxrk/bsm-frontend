<template>
    <div class="homePage">
        <provider-nav-bar></provider-nav-bar>
        <div class="background">
            <div class="offers">
                <h1 class="title">Мои последние предложения</h1>
                <div class="items" v-if="this.offers.length > 0">
                    <offer-main v-for="offer in this.offers" :offer="offer" :key="offer.offer_id"></offer-main>
                </div>
                <div class="title" v-else>Последних предложений нет</div>
            </div>
        </div>
    </div>
</template>

<script>
import ProviderNavBar from '@/components/HomeProviderView/ProviderNavBar.vue'
import OfferMain from '@/components/HomeProviderView/OfferMain.vue'
import axios from 'axios'
    export default {
        title: 'Домашняя страница',
        components: {
            ProviderNavBar,
            OfferMain
        },
        data() {
            return {
                offers: []
            }
        },
        methods: {
            async getOffers() {
                try {
                    const response = await axios.get('https://backend-bsm.herokuapp.com/providers/one', {
                        headers: {
                            'Authorization': localStorage.token
                        }
                    }
                );
                    this.offers = response.data.offers;
                    this.offers = this.offers.reverse();
                    this.offers = this.offers.slice(0, 3);
                    console.log(response)
                } catch (error) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Не удалось загрузить последние предложения',
                        showConfirmButton: true,
                        })
                }
            }
        },
        mounted() {
            this.getOffers();
        }
        
    }
</script>

<style scoped>
.main {
    width: 100%;
    height: 100%;
}

.items {
    width: 100%;
    height: 100%;
}
.background {
    background: url("@/resources/images/offers_rectangle.svg") no-repeat;
    height: 100%;
    min-height: 900px;
}
.offers {
    padding: 20px 0;
    margin: 0 auto;
    width: 1440px;
    height: 100%;
}
.title {
    width: 100%;
    font-family: 'Balsamiq Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 50px;
    line-height: 61px;
    text-align: center;
    color: #FFFFFF;
}
@media screen and (max-width: 1440px) {
    .offers {
        width: 100%;
    }
    .background {
        background: #DF7373;
    }
}
</style>