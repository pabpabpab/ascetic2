<template>
    <div class="show_block">
        <h1>Пользователи</h1>
        <div class="content_block content_block__users">
            <search-user-panel></search-user-panel>
            <pagination entity="users" class="pdb10"></pagination>
            <users></users>
            <pagination entity="users" class="pdb10"></pagination>
        </div>
    </div>
</template>

<script>
import SearchUserPanel from "./Users/SearchUserPanel";

export default {
    name: 'UsersPage',
    components: {
        SearchUserPanel: () => import('./Users/SearchUserPanel.vue'),
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
