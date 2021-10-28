<template>
    <span>
        <span v-if="index > 0">,  </span>
        <router-link
            :to="{
                name: 'ProductsByCategory',
                params: {
                    categoryEntity: entityName,
                    slug: category.slug,
                }
            }" class="category_item__name__link">
            {{ category.name }}
        </router-link>
    </span>
</template>

<script>
export default {
    name: "SingleProductCategoryItem",
    props: ['category', 'index', 'entityName'],
}
</script>

