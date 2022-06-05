<template>
    <input :value="modelValue" @input="updateInput" class="input" type="text"/>
</template>

<script>
    export default {
        name: 'input-item',
        props: {
            modelValue: [String, Number]
        },
        methods: {
            updateInput(event) {
                this.$emit('update:modelValue', event.target.value)
            }
        },
    }
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Balsamiq+Sans:wght@400;700&family=Roboto+Slab:wght@100;400;700&display=swap');
.input {
    height: 46px;
    width: 100%;
    background: #3F4155;
    border-radius: 10px;
    margin: 16px 0;
    padding: 10px 16px;
    color: #FAF6ED;
    font-size: 24px;

}
.input::placeholder {
    font-family: 'Balsamiq Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 29px;

    color: #FAF6ED;
}

</style>