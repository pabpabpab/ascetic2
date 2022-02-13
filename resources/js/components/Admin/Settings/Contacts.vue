<template>
    <div class="show_block">
        <h1 class="pd0 mb0">Контакты для заказа товара</h1>
        <div class="content_block settingsPage">

            <p class="settings_form__property_header mt40">Адрес почтовый</p>
            <div class="settings_form__input__container">
                <textarea class="settings_form__input_textarea"
                          placeholder=" "
                          :disabled="disabledInput"
                          @input="fitTextareaHeight($event);"
                          v-model="localSettings.address">
                </textarea>
                <p @click="save()"
                   title="Сохранить"
                   class="settings_form__submit_icon__wrapper" :class="{display_none: !isEditing}">
                    <img :src="tickIcon" alt="" class="settings_form__submit_icon__img">
                </p>
                <p @click="edit($event)"
                     title="Редактировать"
                     class="settings_form__submit_icon__wrapper" :class="{display_none: isEditing}">
                    <img :src="pencilIcon" alt="" class="settings_form__submit_icon__img">
                </p>
            </div>



            <router-link :to="{ name: 'SettingsMenu' }">
                <button class="button__save_product mauto mt30">
                    Назад
                </button>
            </router-link>
        </div>
    </div>
</template>

<script>
import pencilIcon from "../../../../assets/pencil.svg"
import tickIcon from "../../../../assets/tick.svg"
import _fitTextareaHeight from './../Products/functions/fitTextareaHeight';
import {mapActions} from "vuex";
export default {
    name: "Contacts",
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
            pencilIcon: pencilIcon,
            tickIcon: tickIcon,
            isEditing: false,
            disabledInput: true,
        };
    },
    methods: {
        ...mapActions('settingsManager', [
            'saveSettings',
            'loadSettings'
        ]),
        fitTextareaHeight(event) {
            _fitTextareaHeight(event);
        },
        edit(event) {
            this.isEditing = true;
            this.disabledInput = false;
            const theEvent = event;
            // без задержки не работает так как на инпуте есть disabled
            setTimeout(() => {
                this.focusInput(theEvent)
            },100);
        },

        focusInput(event) {
            const node1 = event.target.parentNode.parentNode.firstElementChild;
            const node2 = event.target.parentNode.firstElementChild;
            if (node1.tagName === 'TEXTAREA') {
                node1.focus();
                return;
            }
            if (node2.tagName === 'TEXTAREA') {
                node2.focus();
            }
        },


        save() {
            this.isEditing = false;
            this.disabledInput = true;

        },

    },
}
</script>
