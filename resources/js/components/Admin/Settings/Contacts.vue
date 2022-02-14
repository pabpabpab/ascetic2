<template>
    <div class="show_block">
        <h1 class="pd0 mb0">Контакты для заказа товара</h1>
        <div class="content_block settingsPage">

            <settings-input
                header="Адрес почтовый"
                v-model="localSettings.address"
                :settings="localSettings"
                entity="address"
                @saveSettings="saveSettings"
                hint="Пример: Екатеринбург, ул. Азина, 39"
                class="mt10">
            </settings-input>
            <settings-input
                header="Телефон"
                v-model="localSettings.phone"
                :settings="localSettings"
                entity="phone"
                @saveSettings="saveSettings"
                hint="Пример: 8 900 000 0000, 8 900 000 0001"
                class="mt30">
            </settings-input>
            <settings-input
                header="Когда можно звонить (рабочие часы)"
                v-model="localSettings.phoneTime"
                :settings="localSettings"
                entity="phoneTime"
                @saveSettings="saveSettings"
                hint="Пример: с 10:00 до 20:00"
                class="mt30">
            </settings-input>
            <settings-input
                header="Whatsapp"
                v-model="localSettings.whatsapp"
                :settings="localSettings"
                entity="whatsapp"
                @saveSettings="saveSettings"
                hint="Пример: 8 900 000 0001"
                class="mt30">
            </settings-input>
            <settings-input
                header="Telegram"
                v-model="localSettings.tg"
                :settings="localSettings"
                entity="tg"
                @saveSettings="saveSettings"
                hint="Пример: @hugo117"
                class="mt30">
            </settings-input>
            <settings-input
                header="Вконтакте"
                v-model="localSettings.vkontakte"
                :settings="localSettings"
                entity="vkontakte"
                @saveSettings="saveSettings"
                hint="Пример: https://vk.com/id29888795"
                class="mt30">
            </settings-input>
            <settings-input
                header="Одноклассники"
                v-model="localSettings.ok"
                :settings="localSettings"
                entity="ok"
                @saveSettings="saveSettings"
                hint="Пример: https://ok.ru/profile/518524364583"
                class="mt30">
            </settings-input>
            <settings-input
                header="Meta (Facebook)"
                v-model="localSettings.meta"
                :settings="localSettings"
                entity="meta"
                @saveSettings="saveSettings"
                class="mt30">
            </settings-input>
            <settings-input
                header="E-mail"
                v-model="localSettings.email"
                :settings="localSettings"
                entity="email"
                @saveSettings="saveSettings"
                class="mt30">
            </settings-input>
        </div>
    </div>
</template>

<script>

import {mapActions} from "vuex";
import SettingsInput from "./SettingsInput";
export default {
    name: "Contacts",
    components: {SettingsInput},
    data() {
        return {
            localSettings: {
                domain: '',
                address: '',
                phone: '',
                phoneTime: '',
                whatsapp: '',
                tg: '',
                vkontakte: '',
                ok: '',
                meta: '',
                email: '',
            },
        };
    },
    methods: {
        ...mapActions('settingsManager', [
            'saveSettings',
            'loadSettings'
        ]),
        saveSettings() {
            console.log(this.localSettings);
        },
    },
}


/*

            <router-link :to="{ name: 'SettingsMenu' }">
                <button class="button__save_product mauto mt30">
                    Назад
                </button>
            </router-link>
 */
</script>
