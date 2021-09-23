<template>
    <div :class="contextMenuClass" :style="coordinates">
        <ul class="context_menu__ul">
            <li class="context_menu__li_header">
                «{{ user.email }}»
            </li>
            <li class="context_menu__li"
                @click="showUserEditManager(user.id)">
                Редактировать
            </li>

            <li class="context_menu__li" style="border: 0;"
                @click="preDeleteUser(user)">
                Удалить
            </li>
        </ul>
    </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
    name: "UsersContextMenu",
    computed: {
        ...mapGetters('contextMenu', [
            'coordinates',
            'user',
            'enabledFadingCss'
        ]),
        contextMenuClass() {
            return {
                'context_menu__wrapper': true,
                'show_block': !this.enabledFadingCss,
                'hide_block': this.enabledFadingCss,
            };
        },
    },
    methods: {
        ...mapActions('users', [
            'preDeleteUser',
            'showUserEditManager',
        ]),
    },

}
</script>

