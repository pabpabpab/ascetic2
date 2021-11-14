<template>
    <span v-if="showReloadIcon" @click="reload" class="reload_icon">
        <span :data-title="title" class="reload_icon__content">
            &#8635;
        </span>
    </span>
</template>

<script>
import {mapGetters} from "vuex";

export default {
    name: "ReloadIcon",
    computed: {
        title() {
            const titleBook = {
                Products: 'товары',
                TrashedProducts: 'удаленные товары',
                Users: 'пользователей',
            }
            return `Обновить ${titleBook[this.$route.name]} с сервера`;
        },
        showReloadIcon() {
            return ['Products', 'TrashedProducts', 'Users'].includes(this.$route.name);
        }
    },
    methods: {
        reload() {
            const actionBook = {
                Products: 'products/showProductsWithReload',
                TrashedProducts: 'products/showTrashedProductsWithReload',
                Users: 'users/showUsersWithReload',
            }
            const actionName = actionBook[this.$route.name];
            if (actionName) {
                this.$store.dispatch(actionName, this.$route);
            }
        }
    },
}
</script>
