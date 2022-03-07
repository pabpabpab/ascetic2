<template>
    <div class="show_block">
        <h1 class="pd0 mb0">Лимит кэширования</h1>
        <div class="content_block settingsPage">
            <settings-input
                header="Лимит кэширования"
                v-model="localSettings.value"
                :settings="localSettings"
                entity="value"
                :disableCmd="disableAllInputsCmd"
                @saveSettings="saveSettings"
                hint="Если товаров на сайте меньше указаной цифры, их данные из БД все будут подгружены в браузер"
                class="mt10">
            </settings-input>
        </div>
    </div>
</template>

<script>
import SettingsInput from "./SettingsInput";
import getJsPartOfComponent from "./jsPartOfComponents/getJsPartOfComponent";
export default {
    name: "CacheLimit",
    components: {SettingsInput},
    data() {
        return {
            subject: 'cache_limit',
            localSettings: {
                value: '',
            },
            disableAllInputsCmd: false,
        };
    },
    ...getJsPartOfComponent,
}
</script>
