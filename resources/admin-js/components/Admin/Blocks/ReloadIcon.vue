<template>
    <span v-if="showReloadIcon" @click="reload" class="reload_icon">
        <span :data-title="title" class="icon_with_hint icon_with_right_hint reload_icon__content">
            &#8635;
        </span>
    </span>
</template>

<script>
export default {
    name: "ReloadIcon",
    computed: {
        title() {
            const titleBook = {
                Products: 'товары',
                TrashedProducts: 'удаленные товары',
                Users: 'пользователей',
                Categories: 'категории',
            }
            return `Обновить ${titleBook[this.$route.name]} с сервера`;
        },
        showReloadIcon() {
            return ['Products', 'TrashedProducts', 'Users', 'Categories'].includes(this.$route.name);
        }
    },
    methods: {
        reload() {
            const actionBook = {
                Products: 'products/showProductsWithReload',
                TrashedProducts: 'products/showTrashedProductsWithReload',
                Users: 'users/showUsersWithReload',
                Categories: 'categories/showCategoriesWithReload',
            }
            const actionName = actionBook[this.$route.name];
            if (actionName) {
                this.$store.dispatch(actionName, this.$route);
            }
        }
    },
}
</script>
