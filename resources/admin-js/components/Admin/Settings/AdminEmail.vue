<template>
    <div class="show_block">
        <h1 class="pd0 mb0">E-mail администратора</h1>
        <div class="content_block settingsPage">
            <settings-input
                header="E-mail администратора"
                v-model="localSettings.value"
                :settings="localSettings"
                entity="value"
                :disableCmd="disableAllInputsCmd"
                @saveSettings="saveSettings"
                hint="E-mail еще одного или нового администратора (если несколько, то через запятую)"
                class="mt10">
            </settings-input>
        </div>
    </div>
</template>

<script>
import SettingsInput from "./SettingsInput";
import getJsPartOfComponent from "./jsPartOfComponents/getJsPartOfComponent";
export default {
    name: "AdminEmail",
    components: {SettingsInput},
    data() {
        return {
            subject: 'admin_email',
            localSettings: {
                value: '',
            },
            disableAllInputsCmd: false,
        };
    },
    ...getJsPartOfComponent,
}
</script>

