<template>
    <div class="footer">
        <div class="footer__title">БСМ</div>
        <div class="footer__divider"></div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Balsamiq+Sans:wght@400;700&family=Roboto+Slab:wght@100;400;700&display=swap');
.footer {
    height: 100%;
    width: 1440px;
    margin: 10px auto;
    position: relative;
}
.footer__title {
    font-family: 'Balsamiq Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 100px;
    color: #5CB25D;
}

.footer__divider {
    position: absolute;
    width: 100%;
    height: 3px;
    border-bottom: 1px solid gray;
}
@media screen and (max-width: 1440px) {
    .footer {
        width: 100%;
    }
}
</style>