<template>
    <div class="dialog" v-if="show" @click="hideDialog">
        <div @click.stop class="dialog__content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'dialog-window',
        props: {
            show: {
                type: Boolean,
                default: false
            }
        },
        methods: {
            hideDialog() {
                this.$emit('update:show', false)
            }
        }
    }
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Balsamiq+Sans:wght@400;700&family=Roboto+Slab:wght@100;400;700&display=swap');
.dialog {
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    display: flex;
    
}

.dialog__content {
    margin: auto;
    background: white;
    border-radius: 70px;
    min-height: 50px;
    max-width: 1000px;
}

@media screen and (max-width: 425px) {
        .dialog__content {
            border-radius: 0;
        }
}
</style>