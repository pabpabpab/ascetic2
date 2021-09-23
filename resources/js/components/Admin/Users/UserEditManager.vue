<template>
    <div :class="editScreenClass">

        <div class="edit_manager__content_wrapper">

            <div class="edit_manager__header">
                <h1>{{ getHeader }}</h1>
            </div>

            <div class="edit_manager__content pdt20 pdb20">
                <user-form action="edit" :saveCmd="saveCmd"></user-form>
            </div>


            <div class="edit_manager__button_panel">
                <button class="edit_manager__save_button"
                        @click.stop="save()">
                    Сохранить
                </button>
            </div>

            <div class='edit_manager__collapse_icon'
                 @click="closeUserEditManager()">
                &#215;
            </div>

        </div>
    </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
    name: "UserEditManager",
    components: {
        UserForm: () => import('./UserForm.vue'),
    },
    data() {
        return {
            saveCmd: false,
        };
    },
    computed: {
        ...mapGetters('users', [
            'singleUserFromServer',
            'enabledFadingCss',
        ]),

        editScreenClass() {
            return {
                'edit_manager__screen': true,
                'show_block': !this.enabledFadingCss,
                'hide_block': this.enabledFadingCss,
            };
        },
/*
        noData() {
            return Boolean(this.singleUserFromServer);
        },
*/
        getHeader() {
            if (!this.singleUserFromServer) {
                return '';
            }

            const roleBook = {
                user: 'Пользователь',
                admin: 'Администратор',
            }
            const role = roleBook[this.singleUserFromServer.role];

            const userEmail = this.singleUserFromServer.email;
            return `${role} ${userEmail}`;
        },

    },
    methods: {
        ...mapActions('users', [
            'closeUserEditManager',
        ]),
        save() {
            this.saveCmd = true;

            setTimeout(() => {
                this.saveCmd = false;
            }, 100);
        },
    },

}
</script>
