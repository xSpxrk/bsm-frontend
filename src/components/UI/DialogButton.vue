<template>
    <button class="btn">
        <slot></slot>
    </button>
</template>

<script>
    export default {
        name: 'button-dialog'
    }
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Balsamiq+Sans:wght@400;700&family=Roboto+Slab:wght@100;400;700&display=swap');
.btn {
    background: #DF7373;
    border-radius: 10px;

    font-family: 'Balsamiq Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 29px;
    border: none;
    text-align: center;
    transition-duration: 0.2s;
    color: #FFFFFF;
}
.btn:active {
    background: #3F4155;
}

</style>