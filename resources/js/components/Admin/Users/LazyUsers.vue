<template>
    <div class="container">
        <user-item
            v-for="item of lazyUsers"
            :key="item.id" :user="item">
        </user-item>

        <div class="viewAll" v-if="showLoadMoreButton">
            <a href="#" class="pagination_link"
               @click.prevent="loadMoreLazyUsers()">
                Load more
            </a>
        </div>
    </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex';

export default {
    name: 'LazyUsers',

    components: {
        UserItem: () => import('./UserItem.vue')
    },

    computed: {
        ...mapGetters([
            'lazyUsers',
            'showLoadMoreButton',
        ]),
    },

    methods: {
        ...mapActions([
            'loadMoreLazyUsers',
        ]),
    },

    mounted() {
        this.$store.dispatch('loadLazyUsers');
    },
};
</script>



