<template>
    <div class="show_block">
        <div class="users_header">
            <reload-icon></reload-icon>
            <h1 class="pd0 mb0 mauto">Пользователи</h1>
        </div>
        <div class="content_block content_block__users">
            <search-user-panel></search-user-panel>
            <pagination entity="users" class="pdb10"></pagination>
            <users></users>
            <pagination entity="users" class="pdb10"></pagination>
        </div>
    </div>
</template>

<script>
export default {
    name: 'UsersPage',
    components: {
        SearchUserPanel: () => import('./Users/SearchUserPanel.vue'),
        Users: () => import('./Users/Users.vue'),
        Pagination: () => import('./Blocks/Pagination.vue'),
        ReloadIcon: () => import('./Blocks/ReloadIcon.vue'),
    },
};
</script>
