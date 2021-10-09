<template>
    <div class="context_menu__wrapper" :style="coordinates">
        <ul class="context_menu__ul">
            <li class="context_menu__li_header">
                «{{ user.email }}»
            </li>
            <li class="context_menu__li"
                @click="showUserEditManager({userId: user.id, task: 'editEmail'})">
                E-mail пользователя
            </li>

            <li class="context_menu__li"
                @click="showUserEditManager({userId: user.id, task: 'editRole'})">
                Права пользователя
            </li>

            <li class="context_menu__li"
                @click="showUserEditManager({userId: user.id, task: 'editPassword'})">
                Новый пароль
            </li>

            <li class="context_menu__li" style="border: 0;"
                @click="preDeleteUser(user)">
                Удалить пользователя
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
        ]),
    },
    methods: {
        ...mapActions('users', [
            'preDeleteUser',
            'showUserEditManager',
        ]),
    },

}
</script>

