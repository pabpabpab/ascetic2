<template>
    <div>
        <p class="settings_form__property_header">{{ header }}</p>
        <div @click="edit()" class="settings_form__input__container">
            <textarea ref="settingInput" placeholder=""
                :disabled="disabledInput"
                v-model="settings[entity]"
                @input="fitTextareaHeight();"
                class="settings_form__input_textarea">
            </textarea>
            <p @click.stop="save()"
               title="Сохранить"
               class="settings_form__submit_icon__wrapper" :class="{display_none: !isEditing}">
                <img :src="tickIcon" alt="" class="settings_form__submit_icon__img">
            </p>
            <p title="Редактировать"
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
import _fitTextareaHeight from './functions/fitTextareaHeight';
import {mapActions} from "vuex";
export default {
    name: "SettingsInput",
    // пропс value, потому что в родителе v-model
    props: ['value', 'settings', 'entity', 'header', 'hint', 'disableCmd'],
    data() {
        return {
            pencilIcon: pencilIcon,
            tickIcon: tickIcon,
            isEditing: false,
            disabledInput: true,
            inputNode: null,
        };
    },
    methods: {
        ...mapActions('settingsManager', [
            'saveSettings',
            'loadSettings'
        ]),
        fitTextareaHeight() {
            this.inputNode.style = null;
            _fitTextareaHeight(this.inputNode);
        },
        changeValue() {
            // emit события input, потому что в родителе v-model
            // через промежуточное значение, в данном случае тоже пропс (копию исходного объекта localSettings)
            this.$emit('input', this.settings[this.entity]);
        },
        edit() {
            this.isEditing = true;
            this.disabledInput = false;
            // без задержки не работает так как на инпуте есть disabled
            setTimeout(() => {
                this.focusInput()
            },100);
        },
        focusInput() {
            this.$refs.settingInput.focus();
            this.inputNode.style = null;
            _fitTextareaHeight(this.inputNode);
        },
        save() {
            this.isEditing = false;
            this.disabledInput = true;
            this.$emit('saveSettings');
        },
    },
    watch :{
        disableCmd(value) {
            if (value) {
                this.isEditing = false;
                this.disabledInput = true;
            }
        },
        value(val) {
            if (!val) {
                return;
            }
            setTimeout(() => {
                this.inputNode.style = null;
                _fitTextareaHeight(this.inputNode);
            },100);
        }
    },
    mounted() {
        this.inputNode = this.$refs.settingInput;
    },
}
</script>
