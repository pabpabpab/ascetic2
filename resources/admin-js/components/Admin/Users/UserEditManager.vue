<template>
    <div class="edit_manager__screen">

        <div class="edit_manager__content_wrapper">

            <div class="edit_manager__header">
                <h1>{{ getHeader }}</h1>
            </div>

            <div class="edit_manager__content pdt20 pdb20">
                <user-form
                    action="edit"
                    :saveCmd="saveCmd">
                </user-form>
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
import UserForm from "./UserForm";

export default {
    name: "UserEditManager",
    components: {
        UserForm,
    },
    data() {
        return {
            saveCmd: false,
        };
    },
    computed: {
        ...mapGetters('users', [
            'singleUserFromServer',
        ]),

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
            const userSocialId = this.singleUserFromServer.social_id;
            return `${role} ${ Boolean(userEmail) ? userEmail : userSocialId }`;
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
