<template>
    <user-form action="create"></user-form>
</template>

<script>
export default {
    name: "SaveUserPage",
    components: {
        UserForm: () => import('./Users/UserForm.vue'),
    },
}
</script>
