<template>
    <div class="feedback">
            <div class="header">
                <div class="name">
                    <div class="name__text">Автор:</div>
                    <div class="name__author">{{ this.author.name }}</div>
                </div>
                <div class="rating">
                    <div class="img_star"></div>
                    <div class="rating__number">{{ this.review.rating }}</div>
                </div>
            </div>
            
             <div class="description">
                <div class="description__text">Описание:</div>
                <div class="description__review">{{ this.review.description }}</div>
            </div>
          
    </div>
</template>

<script>
import axios from 'axios'
    export default {
        props: {
            review: {
                type: Object
            },
            type: {
                type: String
            }
        },
        data() {
            return {
                author: ''
            }
        },
        methods: {
            async getAuthor() {
                if (localStorage.type == 'customer') {
                     const response = await axios.get('https://backend-bsm.herokuapp.com/providers/' + this.review.provider_id 
                        )
                    this.author = response.data
                } else {
                    const response = await axios.get('https://backend-bsm.herokuapp.com/customers/' + this.review.customer_id 
                        )
                    this.author = response.data
                }
            },
            
        },
        mounted() {
            setTimeout(async () => {
                this.getAuthor();
            }, 500)
        },
    }
</script>

<style scoped>
.feedback {
    padding: 32px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 16px auto;
    width: calc(100% - 10%);
    background: #faf6ed;
    border-radius: 30px;
    transition-duration: 0.5s;
}
.header {
    display: flex;
    justify-content: space-between;
}
.name {
    display: flex;
    align-items: center;
}
.name__text {
    font-family: 'Balsamiq Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    line-height: 36px;

    color: #6E7080;
}
.name__author {
    font-family: 'Balsamiq Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    line-height: 36px;
    margin: 0 10px;

    color: #3F4155;
}
.rating {
    display: flex;
    align-items: center;
    justify-content: center;
}
.rating__number {
    font-family: 'Balsamiq Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;

    color: #3F4155;
}
.img_star {
    background-image: url('@/resources/images/yellow_star.svg');
    width: 30px;
    background-position: center;
    align-self: center;
    height: 30px;
}
.description__text {
    font-family: 'Balsamiq Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    line-height: 36px;


    color: #6E7080;
}
.description__review {
    font-family: 'Balsamiq Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 36px;

    color: #3F4155;
}
@media screen and (max-width: 788px) {
    .items {
        flex-direction: column;
    }
    .feedback {
        width: 100%;
    }
}
@media screen and (max-width: 650px) {
    .header {
        flex-direction: column;
    }
    .rating {
        align-self: flex-start;
    }
    .name {
        flex-direction: column;
    }
    .feedback {
        width: 100%;
    }
}

</style>