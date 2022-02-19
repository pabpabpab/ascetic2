<template>
    <component :is="currentComponent[$route.params.subject]"></component>
</template>

<script>
import Contacts from "./Contacts";
import MainPageSeo from "./MainPageSeo";
import VisibleCategoriesLimit from "./VisibleCategoriesLimit";
import PerPage from "./PerPage";
import CacheLimit from "./CacheLimit";
import PhotoQuality from "./PhotoQuality";
import AdminEmail from "./AdminEmail";
export default {
    name: "SettingsIndex",
    components: {
        Contacts,
        MainPageSeo,
        VisibleCategoriesLimit,
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
                visibleCategoriesLimit: 'VisibleCategoriesLimit',
                perPage: 'PerPage',
                cacheLimit: 'CacheLimit',
                photoQuality: 'PhotoQuality',
                adminEmail: 'AdminEmail',
            },
        };
    },
}
</script>
