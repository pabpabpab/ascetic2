<template>
    <span>
        <span v-if="index > 0">,  </span>
        <router-link
            :to="{
                name: 'ProductsByCategory',
                params: {
                    categoryEntity: entityName,
                    slug: category.slug,
                    categoryId: category.id,
                    categoryName: category.name,
                }
            }" class="single_product__category_item__link">
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

