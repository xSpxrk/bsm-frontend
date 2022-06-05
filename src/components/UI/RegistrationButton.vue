<template>
    <button class="btn">
        <slot></slot>
    </button>
</template>

<script>
    export default {
        name: 'registration-button'
    }
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Balsamiq+Sans:wght@400;700&family=Roboto+Slab:wght@100;400;700&display=swap');
.btn {
    padding: 10px 15px;
    border: 1px solid #5cb25d;
    border-radius: 12px;
    background-color: #faf6ed;
    transition-duration: 0.5s;
    font-family: 'Balsamiq Sans';
    font-weight: 400;

}
.btn:hover {
    background-color: #5cb25d;
    color: #faf6ed;
}
</style>