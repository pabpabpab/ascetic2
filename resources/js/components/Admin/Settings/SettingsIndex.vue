<template>
    <component :is="currentComponent[$route.params.subject]"></component>
</template>

<script>
import Contacts from "./Contacts";
import MainPageSeo from "./MainPageSeo";
import PerPage from "./PerPage";
import CacheLimit from "./CacheLimit";
import PhotoQuality from "./PhotoQuality";
import AdminEmail from "./AdminEmail";
export default {
    name: "SettingsIndex",
    components: {
        Contacts,
        MainPageSeo,
        PerPage,
        CacheLimit,
        PhotoQuality,
        AdminEmail,
    },
    data() {
        return {
            currentComponent: {
                contacts: 'Contacts',
                mainPageSeo: 'MainPageSeo',
                perPage: 'PerPage',
                cacheLimit: 'CacheLimit',
                photoQuality: 'PhotoQuality',
                adminEmail: 'AdminEmail',
            },
        };
    },



    mounted() {
        //console.log(this.$route.params.subject);
    }
}
</script>
