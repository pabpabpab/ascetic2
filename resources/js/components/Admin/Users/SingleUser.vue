<template>
    <div>
        <div v-if="successUserMessage" class="user__message"
            v-html="successUserMessage">
        </div>

        <div class="tal">Привет {{ singleUser.name }}</div>
        <select v-model="singleUser.role">
            <option value="admin">Admin</option>
            <option value="user">User</option>
        </select>
        <button @click="saveUserRole(singleUser)">Save</button>

    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
    name: "SingleUser.vue",

    /*
        data: function() {
            return {
                user: {},
            }
        },


        methods: {
            saveRole() {
                this.$store.dispatch('uploadUserData', this.user);
                // this.$router.push({ name: 'Users' });
            },
        },
    */

    methods: {
        ...mapActions([
            'saveUserRole',
        ]),
    },

    computed: {
        ...mapGetters([
            'singleUser',
            'successUserMessage',
        ]),
    },




    mounted() {
        // загрузить один user с сервера по его id
        this.$store.dispatch('loadSingleUser', this.$route.params.id);

        //console.log(this.$store.getters.filtered);

        /*
        const singleUserUrl = this.$store.getters.singleUserUrl + this.$route.params.id;
        this.$store.dispatch('getJson', singleUserUrl)
            .then((data) => {
                this.user = { ...data };
            });
       */
    },
}
</script>
