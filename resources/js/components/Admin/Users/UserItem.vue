<template>
    <div :class="oneUserClass">
        <router-link class="user__nameLink" :to="'/admin/user/' + user.id">
            {{user.name}}
        </router-link>
        <i style="margin: 0 10px;">{{user.role}}</i>
        <p>{{user.email}}</p>
    </div>
</template>

<script>
export default {
    name: 'UserItem',
    props: ['user'],

    data() {
        return {
            oneUserClass: 'user__item',
        };
    },
};
</script>
