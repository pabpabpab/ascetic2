<template>
    <div class="users__list">
        <user-item
            v-for="item of items"
            :key="item.id" :user="item">
        </user-item>

        <transition name="fade">
            <users-context-menu v-if="showUsersContextMenu"></users-context-menu>
        </transition>

        <transition name="fade">
            <user-edit-manager v-if="visibility('userEditManager')"></user-edit-manager>
        </transition>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name: 'Users',
    components: {
        UserItem: () => import('./UserItem.vue'),
        UserEditManager: () => import('./UserEditManager.vue'),
        UsersContextMenu: () => import('./../ContextMenu/UsersContextMenu.vue'),
    },

    computed: {
        ...mapGetters('pagination', [
            'currentPageIndex',
            'customized',
        ]),
        items() {
            return this.customized('users')[this.currentPageIndex('users')];
        },
        ...mapGetters('contextMenu', [
            'showUsersContextMenu',
        ]),
        ...mapGetters('users', [
            'usersLength',
            'visibility',
        ]),
    },

    mounted() {
        /*
        if (!this.$route.params.withoutReload) {
            this.$store.dispatch('users/loadUsers');
        }
        */

        if (this.usersLength < 2 || this.$route.params.withReload) {
            this.$store.dispatch('users/loadUsers');
        }
    },
};
</script>



