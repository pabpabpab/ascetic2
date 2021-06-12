<template>
    <button
        @click="$emit('change-adding-component')"
        class="category__button_add">
        Добавить категорию
    </button>
</template>

<script>
export default {
    name: "AddCategoryButton"
}
</script>
