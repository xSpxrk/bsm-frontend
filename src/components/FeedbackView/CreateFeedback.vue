<template>
    <div class="createFeedback">
        <h1 class="header">Создание отзыва</h1>
        <textarea placeholder="Отзыв" v-model="this.feedback.description" class="input"/>
        <div class="rating">
            <div class="rating__text">Оценка</div>
            <div class="rate">
                <input type="radio" id="star5" name="rate" v-bind:value="5" v-model="feedback.rating"/>
                <label for="star5" title="text">5 stars</label>
                <input type="radio" id="star4" name="rate" v-bind:value="4" v-model="feedback.rating" />
                <label for="star4" title="text">4 stars</label>
                <input type="radio" id="star3" name="rate" v-bind:value="3" v-model="feedback.rating" />
                <label for="star3" title="text">3 stars</label>
                <input type="radio" id="star2" name="rate" v-bind:value="2" v-model="feedback.rating" />
                <label for="star2" title="text">2 stars</label>
                <input type="radio" id="star1" name="rate" v-bind:value="1" v-model="feedback.rating" />
                <label for="star1" title="text">1 star</label>
            </div>
        </div>
        
        <div class="button">
            <button-dialog class="btn" @click="letFeedback">Оставить отзыв</button-dialog>
        </div>

    </div>
</template>

<script>
import TextArea from '@/components/UI/TextArea.vue'
import Swal from 'sweetalert2'
    export default {
        components: {
             TextArea
            },
        props: {
            user_id: {
                type: Object
            }
        },
        data() {
            return {
                feedback: {
                    description: '',
                    rating: 0
                }
                
            }
        },
        
        methods: {
            letFeedback(){
                if (this.feedback.description != '' && this.feedback.rating != 0) {
                    this.$emit('feedback', this.feedback),
                    this.feedback = {
                        description: '',
                        rating: 0,
                    }
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Заполните все поля',
                        showConfirmButton: false,
                        timer: 1000
                        })
                }
               
            }
        },
    }
</script>

<style scoped>
.createFeedback {
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
.input {
    height: 100px;
    width: 100%;
    background: #3F4155;
    border-radius: 10px;
    margin: 16px 0;
    padding: 10px 16px;
    color: #FAF6ED;
    font-size: 24px;
}
.button {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: end;
}
.btn {
   padding: 8px 60px; 
}
.rate {
    float: left;
    height: 46px;
}
.rating__text {
    font-family: 'Balsamiq Sans';
}
.rate:not(:checked) > input {
    position:absolute;
    top:-9999px;
}

.rate:not(:checked) > label {
    float:right;
    width:1em;
    overflow:hidden;
    white-space:nowrap;
    cursor:pointer;
    font-size:30px;
    color:#ccc;
}
.rate:not(:checked) > label:before {
    content: '★ ';
}
.rate > input:checked ~ label {
    color: #ffc700;    
}
.rate:not(:checked) > label:hover,
.rate:not(:checked) > label:hover ~ label {
    color: #deb217;  
}
.rate > input:checked + label:hover,
.rate > input:checked + label:hover ~ label,
.rate > input:checked ~ label:hover,
.rate > input:checked ~ label:hover ~ label,
.rate > label:hover ~ input:checked ~ label {
    color: #c59b08;
}
@media screen and (max-width: 425px) {
    .createFeedback{
        padding: 32px 10px;
    }
    .btn {
        width: 100%;
    }
}

</style>