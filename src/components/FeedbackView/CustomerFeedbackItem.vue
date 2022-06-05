<template>
    <div class="feedback">
            <div class="header">
                <div class="name">
                    <div class="name__text">Автор:</div>
                    <div class="name__provider">{{ this.author.name }}</div>
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
            }
        },
        data() {
            return {
                author: ''
            }
        },
        methods: {
            async getAuthor() {
                const response = await axios.get('https://backend-bsm.herokuapp.com/providers/' + this.review.provider_id 
                )
                this.author = response.data
            }
        },
        mounted() {
            setTimeout(async () => {
                this.getAuthor();
            }, 500)
        },
    }
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Balsamiq+Sans:wght@400;700&family=Roboto+Slab:wght@100;400;700&display=swap');
.feedback {
    padding: 32px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 16px auto;
    width: 100%;
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
.name__provider {
    font-family: 'Balsamiq Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    line-height: 36px;
    margin: 0 10px;
    text-align: justify;
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
    text-align: justify;

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