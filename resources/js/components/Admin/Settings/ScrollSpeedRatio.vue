<template>
    <div class="show_block">
        <h1 class="pd0 mb0">Коэффициент скорости прокрутки</h1>
        <div class="content_block settingsPage">
            <settings-input
                header="Коэффициент"
                v-model="localSettings.value"
                :settings="localSettings"
                entity="value"
                :disableCmd="disableAllInputsCmd"
                @saveSettings="saveSettings"
                hint="Рекомендуется 75 (меньше цифра - выше скорость прокрутки)"
                class="mt10">
            </settings-input>
        </div>
    </div>
</template>

<script>
import SettingsInput from "./SettingsInput";
import getJsPartOfComponent from "./jsPartOfComponents/getJsPartOfComponent";
export default {
    name: "ScrollSpeedRatio",
    components: {SettingsInput},
    data() {
        return {
            subject: 'scroll_speed_ratio',
            localSettings: {
                value: '',
            },
            disableAllInputsCmd: false,
        };
    },
    ...getJsPartOfComponent,
}
</script>
