<template>
    <button
        @click="$emit('change-adding-component')"
        class="category__button_add">
        {{ getButtonText }}
    </button>
</template>

<script>
export default {
    name: "AddCategoryButton",
    data() {
        return {
            buttonText: {
                categories: 'Добавить категорию',
                materials: 'Добавить материал',
                colors: 'Добавить цвет',
            },
        };
    },
    computed: {
        getButtonText() {
            const entity = this.$route.params.entity;
            return this.buttonText[entity];
        },
    },
}
</script>
