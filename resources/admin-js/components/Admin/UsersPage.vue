<template>
    <div class="show_block">
        <div class="users_header">
            <reload-icon></reload-icon>
            <h1 class="pd0 mb0 mauto">Пользователи</h1>
        </div>
        <div class="content_block content_block__users">
            <search-user-panel></search-user-panel>

            <pagination-mobile v-if="usersLength > 1" entity="users" class="pdb0 pdt20"></pagination-mobile>
            <pagination v-if="usersLength > 1" entity="users" class="pdb0"></pagination>

            <users></users>

            <pagination v-if="usersLength > 1" entity="users" class="pdb10"></pagination>
            <pagination-mobile v-if="usersLength > 1" entity="users" class="pdb10"></pagination-mobile>
        </div>
    </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
    name: 'UsersPage',
    components: {
        SearchUserPanel: () => import('./Users/SearchUserPanel.vue'),
        Users: () => import('./Users/Users.vue'),
        Pagination: () => import('./Pagination/Pagination.vue'),
        PaginationMobile: () => import('./Pagination/PaginationMobile.vue'),
        ReloadIcon: () => import('./Blocks/ReloadIcon.vue'),
    },
    computed: {
        ...mapGetters('users', [
            'usersLength',
        ]),
    },
};
</script>
