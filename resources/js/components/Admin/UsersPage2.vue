<template>
    <DIV @click="incW(3)">
      qqq  {{minimumPagesForComplexPagination}}
    </DIV>
</template>

<script>
import {mapGetters, mapActions} from "vuex";

export default {
    name: 'UsersPage2',
    computed: {
        ...mapGetters('users/nested_pagination', [
            'minimumPagesForComplexPagination',
        ]),
    },
    methods: {
        ...mapActions('users/nested_pagination', [
            'incW',
        ]),
    },
};
</script>

