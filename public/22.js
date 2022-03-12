(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{39:function(e,t,s){"use strict";s.r(t);var a=s(1);function r(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,a)}return s}function i(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?r(Object(s),!0).forEach((function(t){n(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):r(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}function n(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}var o={name:"UserForm",props:["action","saveCmd"],data:function(){return{localUser:{id:0,email:"",name:"",role:"",password:"",email_verified:!1,send_confirm_registration:!1,send_reset_password:!1},userNameWasEdited:!1}},computed:i(i(i({},Object(a.c)("users",["singleUserFromServer","taskOfUserEditManager"])),Object(a.c)(["isAlarmingInput","typeinErrors"])),{},{showEmailSection:function(){return"create"===this.action||"editEmail"===this.taskOfUserEditManager},showRoleSection:function(){return"create"===this.action||"editRole"===this.taskOfUserEditManager},showPasswordSection:function(){return"create"===this.action||"editPassword"===this.taskOfUserEditManager}}),methods:i(i({},Object(a.b)("users",["saveUser","typeinValidation"])),{},{setLocalUser:function(e){this.localUser={id:e.id,email:e.email,name:e.name,role:e.role,email_verified:Boolean(e.email_verified_at),password:""}},setUserName:function(){"edit"===this.action||this.userNameWasEdited||(this.localUser.name=this.localUser.email.split("@")[0])},setNameWasEditedFlag:function(){this.userNameWasEdited=!0},checkConfirmRegistrationMark:function(){this.localUser.email_verified||(this.localUser.send_confirm_registration=!1)},checkEmailVerifiedMark:function(){this.localUser.send_confirm_registration||(this.localUser.email_verified=!1)}}),watch:{singleUserFromServer:function(e){e&&this.setLocalUser(e)},saveCmd:function(e){e&&this.$store.dispatch("users/saveUser",this.localUser)}},mounted:function(){this.$store.dispatch("resetTypeinErrors")}},l=s(2),c=Object(l.a)(o,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"show_block"},["create"===e.action?s("h1",[e._v("Создать пользователя")]):e._e(),e._v(" "),s("div",{staticClass:"content_block content_block_of_product_form"},[e.showEmailSection?[s("div",{staticClass:"input_text__container mt20"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.localUser.email,expression:"localUser.email"}],staticClass:"input_text product_form__input_text",class:{input_alarm:e.isAlarmingInput("email")},attrs:{type:"text",maxlength:"50",placeholder:" "},domProps:{value:e.localUser.email},on:{change:function(t){return e.setUserName()},keyup:function(t){e.typeinValidation(e.localUser),e.setUserName()},input:function(t){t.target.composing||e.$set(e.localUser,"email",t.target.value)}}}),e._v(" "),s("label",{staticClass:"input_text__label"},[e._v("E-mail пользователя")]),e._v(" "),s("p",{staticClass:"validation_message_at_input",domProps:{innerHTML:e._s(e.typeinErrors("email"))}})]),e._v(" "),s("div",{staticClass:"pdt20"},[s("p",{staticClass:"checkbox_input__item tal"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.localUser.email_verified,expression:"localUser.email_verified"}],staticClass:"checkbox_input",attrs:{id:"email_verified_mark",type:"checkbox",value:"true"},domProps:{checked:Array.isArray(e.localUser.email_verified)?e._i(e.localUser.email_verified,"true")>-1:e.localUser.email_verified},on:{click:function(t){return e.checkConfirmRegistrationMark()},change:function(t){var s=e.localUser.email_verified,a=t.target,r=!!a.checked;if(Array.isArray(s)){var i=e._i(s,"true");a.checked?i<0&&e.$set(e.localUser,"email_verified",s.concat(["true"])):i>-1&&e.$set(e.localUser,"email_verified",s.slice(0,i).concat(s.slice(i+1)))}else e.$set(e.localUser,"email_verified",r)}}}),e._v(" "),s("label",{staticClass:"checkbox_label display_table",attrs:{for:"email_verified_mark"}},[e._v("\n                        E-mail существует\n                    ")])])]),e._v(" "),s("div",{staticClass:"pdt20 pdb20"},[s("p",{staticClass:"checkbox_input__item tal"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.localUser.send_confirm_registration,expression:"localUser.send_confirm_registration"}],staticClass:"checkbox_input",attrs:{id:"send_confirm_registration_mark",type:"checkbox",value:"true"},domProps:{checked:Array.isArray(e.localUser.send_confirm_registration)?e._i(e.localUser.send_confirm_registration,"true")>-1:e.localUser.send_confirm_registration},on:{click:function(t){return e.checkEmailVerifiedMark()},change:function(t){var s=e.localUser.send_confirm_registration,a=t.target,r=!!a.checked;if(Array.isArray(s)){var i=e._i(s,"true");a.checked?i<0&&e.$set(e.localUser,"send_confirm_registration",s.concat(["true"])):i>-1&&e.$set(e.localUser,"send_confirm_registration",s.slice(0,i).concat(s.slice(i+1)))}else e.$set(e.localUser,"send_confirm_registration",r)}}}),e._v(" "),s("label",{staticClass:"checkbox_label display_table",attrs:{for:"send_confirm_registration_mark"}},[e._v("\n                        Отправить письмо пользователю для проверки E-mail\n                    ")])])]),e._v(" "),s("div",{staticClass:"input_text__container mt20"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.localUser.name,expression:"localUser.name"}],staticClass:"input_text product_form__input_text",class:{input_alarm:e.isAlarmingInput("name")},attrs:{type:"text",maxlength:"50",placeholder:" "},domProps:{value:e.localUser.name},on:{keyup:function(t){e.typeinValidation(e.localUser),e.setNameWasEditedFlag()},input:function(t){t.target.composing||e.$set(e.localUser,"name",t.target.value)}}}),e._v(" "),s("label",{staticClass:"input_text__label"},[e._v("Имя пользователя")]),e._v(" "),s("p",{staticClass:"validation_message_at_input",domProps:{innerHTML:e._s(e.typeinErrors("name"))}})])]:e._e(),e._v(" "),e.showRoleSection?[s("div",{staticClass:"input_text__container mt30"},[s("select",{directives:[{name:"model",rawName:"v-model",value:e.localUser.role,expression:"localUser.role"}],staticClass:"input_select product_form__input_text",class:{input_alarm:e.isAlarmingInput("role")},attrs:{required:""},on:{change:[function(t){var s=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.$set(e.localUser,"role",t.target.multiple?s:s[0])},function(t){return e.typeinValidation(e.localUser)}]}},[s("option",{attrs:{disabled:""}}),e._v(" "),s("option",{attrs:{value:"user"}},[e._v("Обычный пользователь")]),e._v(" "),s("option",{attrs:{value:"admin"}},[e._v("Администратор")])]),e._v(" "),s("label",{staticClass:"input_select__label"},[e._v("Права пользователя")]),e._v(" "),s("p",{staticClass:"validation_message_at_input",domProps:{innerHTML:e._s(e.typeinErrors("role"))}})])]:e._e(),e._v(" "),"edit"===e.action?s("div",{staticClass:"pdb20"}):e._e(),e._v(" "),e.showPasswordSection?[s("div",{staticClass:"input_text__container mt30"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.localUser.password,expression:"localUser.password"}],staticClass:"input_text product_form__input_text",class:{input_alarm:e.isAlarmingInput("password")},attrs:{type:"text",maxlength:"50",placeholder:" "},domProps:{value:e.localUser.password},on:{keyup:function(t){return e.typeinValidation(e.localUser)},input:function(t){t.target.composing||e.$set(e.localUser,"password",t.target.value)}}}),e._v(" "),s("label",{staticClass:"input_text__label"},[e._v("Пароль пользователя для входа")]),e._v(" "),s("p",{staticClass:"validation_message_at_input",domProps:{innerHTML:e._s(e.typeinErrors("password"))}})]),e._v(" "),s("div",{staticClass:"pdt20 pdb20"},[s("p",{staticClass:"checkbox_input__item tal"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.localUser.send_reset_password,expression:"localUser.send_reset_password"}],staticClass:"checkbox_input",attrs:{id:"send_reset_password_mark",type:"checkbox",value:"true"},domProps:{checked:Array.isArray(e.localUser.send_reset_password)?e._i(e.localUser.send_reset_password,"true")>-1:e.localUser.send_reset_password},on:{change:function(t){var s=e.localUser.send_reset_password,a=t.target,r=!!a.checked;if(Array.isArray(s)){var i=e._i(s,"true");a.checked?i<0&&e.$set(e.localUser,"send_reset_password",s.concat(["true"])):i>-1&&e.$set(e.localUser,"send_reset_password",s.slice(0,i).concat(s.slice(i+1)))}else e.$set(e.localUser,"send_reset_password",r)}}}),e._v(" "),s("label",{staticClass:"checkbox_label",attrs:{for:"send_reset_password_mark"}},[e._v("\n                        Отправить письмо пользователю для сброса этого пароля и создания нового\n                    ")])])])]:e._e(),e._v(" "),"create"===e.action?s("button",{staticClass:"save_product_button mauto mt30",on:{click:function(t){return t.stopPropagation(),e.saveUser(e.localUser)}}},[e._v("\n            Создать\n        ")]):e._e()],2)])}),[],!1,null,null,null);t.default=c.exports}}]);