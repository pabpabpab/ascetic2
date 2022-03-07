<template>
    <div class="show_block">
        <h1 class="pd0 mb0">Качество фото</h1>
        <div class="content_block settingsPage">
            <settings-input
                header="Quality (%)"
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
    name: "PhotoQuality",
    components: {SettingsInput},
    data() {
        return {
            subject: 'photo_quality',
            localSettings: {
                value: '',
            },
            disableAllInputsCmd: false,
        };
    },
    ...getJsPartOfComponent,
}
</script>
