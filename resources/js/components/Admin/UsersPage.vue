<template>
    <div class="show_block">
        <h1>Пользователи</h1>
        <div class="content_block content_block__users">
            <pagination entity="users"></pagination>
            <users></users>
            <pagination entity="users"></pagination>
        </div>
    </div>
</template>

<script>

//import {mapGetters} from "vuex";

export default {
    name: 'UsersPage',
    components: {
        Users: () => import('./Users/Users.vue'),
        Pagination: () => import('./Blocks/Pagination.vue'),
        // LazyUsers: () => import('./Users/LazyUsers.vue'),
    },
    /*
    mounted() {
        this.$store.dispatch('users/getUsersCount');
    },
    */
};
</script>
