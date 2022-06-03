<template>
    <div class="my_offers">
        <provider-nav-bar></provider-nav-bar>
        <div class="background">
            <div class="offers">
                <h1 class="title">Мои предложения</h1>
                <div class="items">
                    <offer-main v-for="offer in this.offers" :offer="offer" :key="offer.offer_id"></offer-main>
            </div>
            </div>
        </div>
        <div ref="observer" class="observer"></div>
    </div>
</template>

<script>
import ProviderNavBar from '@/components/HomeProviderView/ProviderNavBar.vue'
import OfferMain from '@/components/HomeProviderView/OfferMain.vue'
import axios from 'axios'
    export default {
        components: {
            ProviderNavBar,
            OfferMain
        },
        data() {
            return {
                type: localStorage.type,
                provider: Object,
                offers: []
            }
        },
        methods: {
            async getProvider() {
                const response = await axios.get('https://backend-bsm.herokuapp.com/users',
                {
                    params: {
                        token: localStorage.token,
                    }
                })
                this.provider = response.data
                this.offers = this.provider.offers;
				this.offers = this.offers.reverse();
            }
        },
        mounted() {
            this.getProvider();
        },
        
    }
</script>

<style scoped>
.my_offers {
    width: 100%;
    height: 100%;
}
.offers {
    padding: 20px 0;
    margin: 0 auto;
    width: 1440px;
    height: 100%;
    min-height: 800px;
}
.items {
    width: 100%;
    height: 100%;
}
.background {
    background: #DF7373;
    height: 100%;
}
.title {
    width: 100%;
    font-family: 'Inter';
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
}
</style>