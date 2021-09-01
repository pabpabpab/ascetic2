<template>
    <DIV v-if="showLazyUsers">
        <lazy-users></lazy-users>
    </DIV>
    <DIV v-else>
        <users></users>
        <pagination entity="users"></pagination>
    </DIV>
</template>

<script>

import {mapGetters} from "vuex";

export default {
    name: 'UsersPage',
    components: {
        Users: () => import('./Users/Users.vue'),
        Pagination: () => import('./Blocks/Pagination.vue'),
        LazyUsers: () => import('./Users/LazyUsers.vue'),
    },
    computed: {
        ...mapGetters('users', [
            'showLazyUsers',
        ]),
    },
    mounted() {
        this.$store.dispatch('users/getUsersCount');
    },
};
</script>
