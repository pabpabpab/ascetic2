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
            <span v-if="hasEmail">
                {{ user.email }} /
            </span>
            <span v-if="hasSocialId">
                {{ user.social_id }} /
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
        hasEmail() {
            return Boolean(this.user?.email);
        },
        hasSocialId() {
            return Boolean(this.user?.social_id);
        }
    },
    methods: {
        ...mapActions('contextMenu', [
            'showContextMenu',
        ]),
    },
};
</script>
