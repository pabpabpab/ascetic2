<template>
    <div class="show_block">
        <h1 class="pd0 mb0">Количество товаров на странице</h1>
        <div class="content_block settingsPage">
            <settings-input
                header="PerPage"
                v-model="localSettings.perPage"
                :settings="localSettings"
                entity="perPage"
                :disableCmd="disableAllInputsCmd"
                @saveSettings="saveSettings"
                hint="Количество товаров на странице в списке товаров на сайте"
                class="mt10">
            </settings-input>
        </div>
    </div>
</template>

<script>
import getJsPartOfComponent from "./jsPartOfComponents/getJsPartOfComponent";
import SettingsInput from "./SettingsInput";
export default {
    name: 'PerPage',
    components: {SettingsInput},
    data() {
        return {
            subject: 'pagination',
            localSettings: {
                perPage: '',
            },
            disableAllInputsCmd: false,
        };
    },
    ...getJsPartOfComponent,
}
</script>
