<template>
    <div>
        <div v-if="showSuccessMessage">
            {{ successMessage }}
        </div>
        <div v-if="showErrorMessage">
            {{ errorMessage }}
        </div>

        <div class="tal">Привет {{ originalUser.name }}</div>
        <select v-model="user.role">
            <option value="admin">Admin</option>
            <option value="user">User</option>
        </select>
        <button @click="send">Send</button>
    </div>
</template>

<script>
export default {
    name: "UserEditComponent.vue",
    props: [
        'originalUser',
    ],
    data: function() {
        return {
            user: {
                role: null,
            },
            updateSuccess: false,
            showSuccessMessage: false,
            successMessage: '',
            showErrorMessage: false,
            errorMessage: '',
        }
    },
    mounted() {
        this.user=this.originalUser;
        console.log('Component mounted');
        console.log(this.originalUser);
    },
    methods: {
        send() {

                   fetch(
                       '/api/admin/user/edit/' + this.user.id,
                       {
                              method: 'POST',
                              headers: {
                                  'Content-Type': 'application/json',
                              },
                              body: JSON.stringify(this.user),
                           }
                   ).then(
                       (result) => result.json()
                   ).then(
                       (result) => {
                           this.showSuccessMessage = result.updateSuccess;
                           this.successMessage = 'Сохранено ' + result.user.role;
                           console.log(result);
                       }
                   );

            /*
            axios.post(
                '/api/admin/user/edit/' + this.user.id,
                this.user
            ).then(
                response => {
                    this.showSuccessMessage = response.data.updateSuccess;
                    this.successMessage = 'Сохранено ' + response.data.user.role;
                    console.log(response.data);
                }
            );*/
        },
    },
}
</script>

<style scoped>

</style>
