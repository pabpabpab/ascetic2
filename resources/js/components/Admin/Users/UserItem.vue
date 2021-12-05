<template>
    <div class="user_item">

        <span
            @click.stop="showContextMenu({
                event: $event,
                target: 'Users',
                data: { user }
            })"
            class="context_menu__icon__user">
            &#8942;
        </span>

        <div class="user_item__content">
            <span v-html="role">
            </span>
            <span>
                {{ user.name }} /
            </span>
            <span>
                {{ user.email }} /
            </span>
            <span>
                {{ emailVerified }}
            </span>
        </div>

    </div>
</template>

<script>
import {mapActions} from "vuex";

export default {
    name: 'UserItem',
    props: ['user'],
    computed: {
        role() {
            const roleBook = {
                user: '',
                admin: '<b>Администратор</b>',
            }
            return roleBook[this.user.role];
        },
        emailVerified() {
            return Boolean(this.user.email_verified_at) ? 'Подтвержден' : 'Не подтвержден';
        },
    },
    methods: {
        ...mapActions('contextMenu', [
            'showContextMenu',
        ]),
    },
};
</script>
