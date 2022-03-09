<template>
    <button
        @click="$emit('change-adding-component')"
        class="categories_add_button">
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
