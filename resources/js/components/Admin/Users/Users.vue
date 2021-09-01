<template>
    <div :class="containerClass">
        <user-item
            v-for="item of items"
            :key="item.id" :user="item">
        </user-item>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
// import UserItem from '@/components/Admin/Users/UserItem.vue';

export default {
    name: 'Users',
    // props: ['moduleName'],
    components: {
        UserItem: () => import('./UserItem.vue')
    },
    data() {
        return {
            containerClass: 'container',
        };
    },
    computed: {
        ...mapGetters([
            'currentPageIndex',
            'customized',
        ]),
        items() {
            return this.customized('users')[this.currentPageIndex('users')];
        },
    },
    mounted() {
        this.$store.dispatch('users/loadUsers');
    },
};
</script>



