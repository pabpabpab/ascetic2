<template>
    <div class="show_block">
        <h1 class="pd0 mb0">Количество видимых категорий в верхнем меню</h1>
        <div class="content_block settingsPage">
            <settings-input
                header="Количество"
                v-model="localSettings.value"
                :settings="localSettings"
                entity="value"
                :disableCmd="disableAllInputsCmd"
                @saveSettings="saveSettings"
                hint=""
                class="mt10">
            </settings-input>
        </div>
    </div>
</template>

<script>
import SettingsInput from "./SettingsInput";
import getJsPartOfComponent from "./jsPartOfComponents/getJsPartOfComponent";
export default {
    name: "VisibleCategoriesLimit",
    components: {SettingsInput},
    data() {
        return {
            subject: 'visible_categories_limit',
            localSettings: {
                value: '',
            },
            disableAllInputsCmd: false,
        };
    },
    ...getJsPartOfComponent,
}
</script>
