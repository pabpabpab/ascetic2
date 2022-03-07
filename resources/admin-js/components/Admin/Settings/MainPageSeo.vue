<template>
    <div class="show_block">
        <h1 class="pd0 mb0">SEO главной страницы сайта</h1>
        <div class="content_block settingsPage">
            <settings-input
                header="Title главной страницы"
                v-model="localSettings.mainPageTitle"
                :settings="localSettings"
                entity="mainPageTitle"
                :disableCmd="disableAllInputsCmd"
                @saveSettings="saveSettings"
                hint=""
                class="mt10">
            </settings-input>
            <settings-input
                header="Description главной страницы"
                v-model="localSettings.mainPageDescription"
                :settings="localSettings"
                entity="mainPageDescription"
                :disableCmd="disableAllInputsCmd"
                @saveSettings="saveSettings"
                hint=""
                class="mt40">
            </settings-input>
        </div>
    </div>
</template>

<script>
import SettingsInput from "./SettingsInput";
import getJsPartOfComponent from "./jsPartOfComponents/getJsPartOfComponent";
export default {
    name: "MainPageSeo",
    components: {SettingsInput},
    data() {
        return {
            subject: 'main_page_seo',
            localSettings: {
                mainPageTitle: '',
                mainPageDescription: '',
            },
            disableAllInputsCmd: false,
        };
    },
    ...getJsPartOfComponent,
}
</script>
