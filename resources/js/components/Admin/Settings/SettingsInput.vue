<template>
    <div>
        <p class="settings_form__property_header">{{ header }}</p>
        <div class="settings_form__input__container">
                <textarea class="settings_form__input_textarea"
                          placeholder=""
                          :disabled="disabledInput"
                          v-model="settings[entity]"
                          @input="fitTextareaHeight($event);">
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
        <div class="settings_form__input__bottom_hint">
            {{ hint }}
        </div>
    </div>
</template>

<script>
import pencilIcon from "../../../../assets/pencil.svg"
import tickIcon from "../../../../assets/tick.svg"
import _fitTextareaHeight from './../Products/functions/fitTextareaHeight';
import {mapActions} from "vuex";
export default {
    name: "SettingsInput",
    // пропс value, потому что в родителе v-model
    props: ['value', 'settings', 'entity', 'header', 'hint'],
    data() {
        return {
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
        changeValue() {
            // emit события input, потому что в родителе v-model
            // через промежуточное значение, в данном случае тоже пропс (копию исходного объекта localSettings)
            this.$emit('input', this.settings[this.entity]);
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
            this.$emit('saveSettings');
        },
    },
}
</script>
