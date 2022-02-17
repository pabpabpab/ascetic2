<template>
    <div class="show_block">
        <h1 class="pd0 mb0">Контакты для заказа товара</h1>
        <div class="content_block settingsPage">

            <div class="settings_form__check_address_icon__wrapper">
                <a :href="addressLinkHref" target=_blank
                   class="settings_form__check_address_icon__link">
                    <img :src="checkAddressIcon"
                         alt=""
                         title="Проверить введенный здесь адрес на карте"
                         class="settings_form__check_address_icon__img">
                </a>
            </div>
            <settings-input
                header="Адрес почтовый"
                v-model="localSettings.address"
                :settings="localSettings"
                entity="address"
                :disableCmd="disableAllInputsCmd"
                @saveSettings="saveSettings"
                hint="Пример: Екатеринбург, ул. Азина, 39"
                class="mt10">
            </settings-input>
            <settings-input
                header="Телефон"
                v-model="localSettings.phone"
                :settings="localSettings"
                entity="phone"
                :disableCmd="disableAllInputsCmd"
                @saveSettings="saveSettings"
                hint="Пример: 8 900 000 0000, 8 900 000 0001"
                class="mt30">
            </settings-input>
            <settings-input
                header="Когда можно звонить (рабочие часы)"
                v-model="localSettings.phoneTime"
                :settings="localSettings"
                entity="phoneTime"
                :disableCmd="disableAllInputsCmd"
                @saveSettings="saveSettings"
                hint="Пример: с 10:00 до 20:00"
                class="mt30">
            </settings-input>
            <settings-input
                header="Whatsapp"
                v-model="localSettings.whatsapp"
                :settings="localSettings"
                entity="whatsapp"
                :disableCmd="disableAllInputsCmd"
                @saveSettings="saveSettings"
                hint="Пример: 8 900 000 0000, 8 900 000 0001"
                class="mt30">
            </settings-input>
            <settings-input
                header="Telegram"
                v-model="localSettings.tg"
                :settings="localSettings"
                entity="tg"
                :disableCmd="disableAllInputsCmd"
                @saveSettings="saveSettings"
                hint="Пример: @hugo117"
                class="mt30">
            </settings-input>
            <settings-input
                header="Вконтакте"
                v-model="localSettings.vkontakte"
                :settings="localSettings"
                entity="vkontakte"
                :disableCmd="disableAllInputsCmd"
                @saveSettings="saveSettings"
                hint="Пример: https://vk.com/id29888795"
                class="mt30">
            </settings-input>
            <settings-input
                header="Одноклассники"
                v-model="localSettings.ok"
                :settings="localSettings"
                entity="ok"
                :disableCmd="disableAllInputsCmd"
                @saveSettings="saveSettings"
                hint="Пример: https://ok.ru/profile/518524364583"
                class="mt30">
            </settings-input>
            <settings-input
                header="Meta (Facebook)"
                v-model="localSettings.meta"
                :settings="localSettings"
                entity="meta"
                :disableCmd="disableAllInputsCmd"
                @saveSettings="saveSettings"
                class="mt30">
            </settings-input>
            <settings-input
                header="E-mail"
                v-model="localSettings.email"
                :settings="localSettings"
                entity="email"
                :disableCmd="disableAllInputsCmd"
                @saveSettings="saveSettings"
                hint="Можно несколько через запятую"
                class="mt30">
            </settings-input>
            <settings-input
                header="Web-адрес сайта"
                v-model="localSettings.domain"
                :settings="localSettings"
                entity="domain"
                :disableCmd="disableAllInputsCmd"
                @saveSettings="saveSettings"
                class="mt30">
            </settings-input>
        </div>
    </div>
</template>

<script>
import checkAddressIcon from "../../../../assets/checkAddressIcon.svg"
import {mapActions, mapGetters} from "vuex";
import SettingsInput from "./SettingsInput";
export default {
    name: "Contacts",
    components: {SettingsInput},
    data() {
        return {
            subject: 'contacts',
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
            checkAddressIcon: checkAddressIcon,
            disableAllInputsCmd: false,
        };
    },
    computed: {
        ...mapGetters('settingsManager', [
            'settings',
        ]),
        data() {
            return this.settings(this.subject);
        },
        addressLinkHref() {
            return `https://yandex.ru/maps/?text=${this.localSettings.address}`;
        }
    },
    methods: {
        ...mapActions('settingsManager', [
            'saveSettings',
            'loadSettings'
        ]),
        saveSettings() {
            this.disableAllInputsCmd = true;
            setTimeout(() => {
                this.disableAllInputsCmd = false
            },100);

            this.$store.dispatch('settingsManager/saveSettings', {
                subject: this.subject,
                data: this.localSettings,
            })
        },
    },
    watch:{
        data(value) {
            //console.log(value);
            this.localSettings = { ...value };
        },
    },
    mounted() {
        this.$store.dispatch('settingsManager/loadSettings', {subject: this.subject});
    },
}

</script>
