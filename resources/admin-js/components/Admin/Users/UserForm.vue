<template>
    <div class="show_block">

        <h1 v-if="action==='create'">Создать пользователя</h1>

        <div class="content_block content_block_of_product_form">

            <template v-if="showEmailSection">

                <div class="input_text__container mt20">
                    <input class="input_text product_form__input_text"
                           :class="{ 'input_alarm': isAlarmingInput('email') }"
                           type="text" maxlength="50"
                           placeholder=" "
                           @change="setUserName()"
                           @keyup="typeinValidation(localUser);setUserName();"
                           v-model="localUser.email">

                    <label class="input_text__label">E-mail пользователя</label>

                    <p class="validation_message_at_input"
                       v-html="typeinErrors('email')">
                    </p>
                </div>


                <div class="pdt20">
                    <p class="checkbox_input__item tal">

                        <input class="checkbox_input"
                               id="email_verified_mark"
                               type="checkbox"
                               value="true"
                               @click="checkConfirmRegistrationMark()"
                               v-model="localUser.email_verified">

                        <label class="checkbox_label display_table" for="email_verified_mark">
                            E-mail существует
                        </label>
                    </p>
                </div>

                <div class="pdt20 pdb20">
                    <p class="checkbox_input__item tal">

                        <input class="checkbox_input"
                               id="send_confirm_registration_mark"
                               type="checkbox"
                               value="true"
                               @click="checkEmailVerifiedMark()"
                               v-model="localUser.send_confirm_registration">

                        <label class="checkbox_label display_table" for="send_confirm_registration_mark">
                            Отправить письмо пользователю для проверки E-mail
                        </label>
                    </p>
                </div>


                <div class="input_text__container mt20">
                    <input class="input_text product_form__input_text"
                           :class="{ 'input_alarm': isAlarmingInput('name') }"
                           type="text" maxlength="50"
                           placeholder=" "
                           @keyup="typeinValidation(localUser);setNameWasEditedFlag();"
                           v-model="localUser.name">

                    <label class="input_text__label">Имя пользователя</label>

                    <p class="validation_message_at_input"
                       v-html="typeinErrors('name')">
                    </p>
                </div>

            </template>




            <template v-if="showRoleSection">

                <div class="input_text__container mt30">
                    <select required
                            class="input_select product_form__input_text"
                            :class="{ 'input_alarm': isAlarmingInput('role') }"
                            @change="typeinValidation(localUser)"
                            v-model="localUser.role">

                        <option disabled></option>
                        <option value="user">Обычный пользователь</option>
                        <option value="admin">Администратор</option>
                    </select>

                    <label class="input_select__label">Права пользователя</label>

                    <p class="validation_message_at_input"
                       v-html="typeinErrors('role')">
                    </p>
                </div>

            </template>



            <div v-if="action === 'edit'" class="pdb20"></div>



            <template v-if="showPasswordSection">

                <div class="input_text__container mt30">
                    <input class="input_text product_form__input_text"
                           :class="{ 'input_alarm': isAlarmingInput('password') }"
                           type="text" maxlength="50"
                           placeholder=" "
                           @keyup="typeinValidation(localUser)"
                           v-model="localUser.password">

                    <label class="input_text__label">Пароль пользователя для входа</label>

                    <p class="validation_message_at_input"
                       v-html="typeinErrors('password')">
                    </p>
                </div>


                <div class="pdt20 pdb20">
                    <p class="checkbox_input__item tal">

                        <input class="checkbox_input"
                               id="send_reset_password_mark"
                               type="checkbox"
                               value="true"
                               v-model="localUser.send_reset_password">

                        <label class="checkbox_label" for="send_reset_password_mark">
                            Отправить письмо пользователю для сброса этого пароля и создания нового
                        </label>
                    </p>
                </div>

            </template>


            <button v-if="action==='create'" class="save_product_button mauto mt30"
                    @click.stop="saveUser(localUser)">
                Создать
            </button>


        </div>
    </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
    name: "UserForm",
    props: ['action', 'saveCmd'],
    data() {
        return {
            localUser: {
                id: 0,
                email: '',
                name: '',
                role: '',
                password: '',
                email_verified: false,
                send_confirm_registration: false,
                send_reset_password: false,
            },
            userNameWasEdited: false,
        };
    },

    computed: {
        ...mapGetters('users', [
            'singleUserFromServer',
            'taskOfUserEditManager',
        ]),
        ...mapGetters([
            'isAlarmingInput',
            'typeinErrors',
        ]),
        showEmailSection() {
            return this.action === 'create' || this.taskOfUserEditManager === 'editEmail';
        },
        showRoleSection() {
            return this.action === 'create' || this.taskOfUserEditManager === 'editRole';
        },
        showPasswordSection() {
            return this.action === 'create' || this.taskOfUserEditManager === 'editPassword';
        },
    },

    methods: {
        ...mapActions('users', [
            'saveUser',
            'typeinValidation'
        ]),
        setLocalUser(user) {
            this.localUser = {
                id: user.id,
                email: user.email,
                name: user.name,
                role: user.role,
                email_verified: Boolean(user.email_verified_at),
                password: '',
            }
        },
        setUserName() {
            if (this.action === 'edit' || this.userNameWasEdited) {
                return;
            }
            this.localUser.name = this.localUser.email.split('@')[0];
        },
        setNameWasEditedFlag() {
            this.userNameWasEdited = true;
        },
        checkConfirmRegistrationMark() {
            if (!this.localUser.email_verified) {
                this.localUser.send_confirm_registration = false;
            }
        },
        checkEmailVerifiedMark() {
            if (!this.localUser.send_confirm_registration) {
                this.localUser.email_verified = false;
            }
        },
    },

    watch: {
        singleUserFromServer(val) {
            if (!val) {
                return;
            }
            this.setLocalUser(val);
        },
        saveCmd(val) {
            if (!val) {
                return;
            }
            this.$store.dispatch('users/saveUser', this.localUser);
        },
    },

    mounted() {
        this.$store.dispatch('resetTypeinErrors');
    },
}
</script>
