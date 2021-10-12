<template>
    <div class="search_user_panel show_block">
        <button @click="showUserSearchInput()" class="search_user_panel__button">
            Поиск по email
        </button>

        <transition name="fade">
            <div v-if="getShowUserSearchInput" class="search_user_panel__input_div">
                <div class="input_text__container">
                    <input class="search_user_panel__input_text"
                           type="text"
                           placeholder=" "
                           v-model="searchString">
                    <label class="input_text__label">Введите Email пользователя</label>
                    <div class="search_user_panel__collapse_icon"
                         @click="closeUserSearchPanel()">
                        &#215;
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
    name: "SearchUserPanel",
    data() {
        return {
            searchString: '',
        }
    },
    computed: {
        ...mapGetters('users', [
            'getShowUserSearchInput',
        ]),
    },
    methods: {
        ...mapActions('users', [
            'showUserSearchInput',
            'closeUserSearchInput',
        ]),
        closeUserSearchPanel() {
            this.searchString = '';
            this.$store.dispatch('users/doSearch', '');
            this.$store.dispatch('users/closeUserSearchInput');
        },
    },
    watch: {
        searchString(val) {
            this.$store.dispatch('users/doSearch', val);
        },
    },
}
</script>
