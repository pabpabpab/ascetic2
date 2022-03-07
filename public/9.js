(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{40:function(t,e){t.exports="/images/checkAddressIcon.svg?e80802cfeb41b149e37189b2344337b9"},41:function(t,e){t.exports="/images/pencil.svg?00730309400fee823b14bd745a68d219"},42:function(t,e){t.exports="/images/tick.svg?9749d3d14d7ace47aaae004945a7cab5"},53:function(t,e,n){"use strict";n.r(e);var s=n(40),i=n.n(s),a=n(41),l=n.n(a),r=n(42),o=n.n(r),c=0;function u(t){if(function(t){return t.scrollHeight>t.clientHeight}(t)){if(c=t.value.length,t.clientHeight>500)return;!function(t){t.style.height=t.scrollHeight+10+"px"}(t)}else(function(t){if(t.value.length/c<.85)return c=t.value.length,!0;return!1})(t)&&(!function(t){t.style=null}(t),setTimeout((function(){u(t)}),10))}var g=n(1);function p(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,s)}return n}function b(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?p(Object(n),!0).forEach((function(e){d(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function d(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var m={name:"SettingsInput",props:["value","settings","entity","header","hint","disableCmd"],data:function(){return{pencilIcon:l.a,tickIcon:o.a,isEditing:!1,disabledInput:!0,inputNode:null}},methods:b(b({},Object(g.b)("settingsManager",["saveSettings","loadSettings"])),{},{fitTextareaHeight:function(){this.inputNode.style=null,u(this.inputNode)},changeValue:function(){this.$emit("input",this.settings[this.entity])},edit:function(){var t=this;this.isEditing=!0,this.disabledInput=!1,setTimeout((function(){t.focusInput()}),100)},focusInput:function(){this.$refs.settingInput.focus(),this.inputNode.style=null,u(this.inputNode)},save:function(){this.isEditing=!1,this.disabledInput=!0,this.$emit("saveSettings")}}),watch:{disableCmd:function(t){t&&(this.isEditing=!1,this.disabledInput=!0)},value:function(t){var e=this;t&&setTimeout((function(){e.inputNode.style=null,u(e.inputNode)}),100)}},mounted:function(){this.inputNode=this.$refs.settingInput}},f=n(2),v=Object(f.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("p",{staticClass:"settings_form__property_header"},[t._v(t._s(t.header))]),t._v(" "),n("div",{staticClass:"settings_form__input__container",on:{click:function(e){return t.edit()}}},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.settings[t.entity],expression:"settings[entity]"}],ref:"settingInput",staticClass:"settings_form__input_textarea",attrs:{placeholder:"",disabled:t.disabledInput},domProps:{value:t.settings[t.entity]},on:{input:[function(e){e.target.composing||t.$set(t.settings,t.entity,e.target.value)},function(e){return t.fitTextareaHeight()}]}}),t._v(" "),n("p",{staticClass:"settings_form__submit_icon__wrapper",class:{display_none:!t.isEditing},attrs:{title:"Сохранить"},on:{click:function(e){return e.stopPropagation(),t.save()}}},[n("img",{staticClass:"settings_form__submit_icon__img",attrs:{src:t.tickIcon,alt:""}})]),t._v(" "),n("p",{staticClass:"settings_form__submit_icon__wrapper",class:{display_none:t.isEditing},attrs:{title:"Редактировать"}},[n("img",{staticClass:"settings_form__submit_icon__img",attrs:{src:t.pencilIcon,alt:""}})])]),t._v(" "),n("div",{staticClass:"settings_form__input__bottom_hint"},[t._v("\n        "+t._s(t.hint)+"\n    ")])])}),[],!1,null,null,null).exports;function h(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,s)}return n}function O(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?h(Object(n),!0).forEach((function(e){S(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function S(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var y={computed:O(O({},Object(g.c)("settingsManager",["settings"])),{},{data:function(){return this.settings(this.subject)}}),methods:O(O({},Object(g.b)("settingsManager",["saveSettings","loadSettings"])),{},{saveSettings:function(){var t=this;this.disableAllInputsCmd=!0,setTimeout((function(){t.disableAllInputsCmd=!1}),100),this.$store.dispatch("settingsManager/saveSettings",{subject:this.subject,data:this.localSettings})}}),watch:{data:function(t){this.localSettings=O({},t)}},mounted:function(){this.$store.dispatch("settingsManager/loadSettings",{subject:this.subject})}};function j(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,s)}return n}function _(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var P=function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?j(Object(n),!0).forEach((function(e){_(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):j(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({name:"Contacts",components:{SettingsInput:v},data:function(){return{subject:"contacts",localSettings:{domain:"",address:"",phone:"",phoneTime:"",whatsapp:"",tg:"",vkontakte:"",ok:"",meta:"",email:""},checkAddressIcon:i.a,disableAllInputsCmd:!1}}},y),C=Object(f.a)(P,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"show_block"},[n("h1",{staticClass:"pd0 mb0"},[t._v("Контакты для заказа товара")]),t._v(" "),n("div",{staticClass:"content_block settingsPage"},[n("div",{staticClass:"settings_form__check_address_icon__wrapper"},[n("a",{staticClass:"settings_form__check_address_icon__link",attrs:{href:"https://yandex.ru/maps/?text="+t.localSettings.address,target:"_blank"}},[n("img",{staticClass:"settings_form__check_address_icon__img",attrs:{src:t.checkAddressIcon,alt:"",title:"Проверить введенный здесь адрес на карте"}})])]),t._v(" "),n("settings-input",{staticClass:"mt10",attrs:{header:"Адрес почтовый",settings:t.localSettings,entity:"address",disableCmd:t.disableAllInputsCmd,hint:"Пример: Екатеринбург, ул. Азина, 39"},on:{saveSettings:t.saveSettings},model:{value:t.localSettings.address,callback:function(e){t.$set(t.localSettings,"address",e)},expression:"localSettings.address"}}),t._v(" "),n("settings-input",{staticClass:"mt30",attrs:{header:"Телефон",settings:t.localSettings,entity:"phone",disableCmd:t.disableAllInputsCmd,hint:"Пример: 8 900 000 0000, 8 900 000 0001"},on:{saveSettings:t.saveSettings},model:{value:t.localSettings.phone,callback:function(e){t.$set(t.localSettings,"phone",e)},expression:"localSettings.phone"}}),t._v(" "),n("settings-input",{staticClass:"mt30",attrs:{header:"Когда можно звонить (рабочие часы)",settings:t.localSettings,entity:"phoneTime",disableCmd:t.disableAllInputsCmd,hint:"Пример: с 10:00 до 20:00"},on:{saveSettings:t.saveSettings},model:{value:t.localSettings.phoneTime,callback:function(e){t.$set(t.localSettings,"phoneTime",e)},expression:"localSettings.phoneTime"}}),t._v(" "),n("settings-input",{staticClass:"mt30",attrs:{header:"Whatsapp",settings:t.localSettings,entity:"whatsapp",disableCmd:t.disableAllInputsCmd,hint:"Пример: 8 900 000 0000, 8 900 000 0001"},on:{saveSettings:t.saveSettings},model:{value:t.localSettings.whatsapp,callback:function(e){t.$set(t.localSettings,"whatsapp",e)},expression:"localSettings.whatsapp"}}),t._v(" "),n("settings-input",{staticClass:"mt30",attrs:{header:"Telegram",settings:t.localSettings,entity:"tg",disableCmd:t.disableAllInputsCmd,hint:"Пример: @hugo117"},on:{saveSettings:t.saveSettings},model:{value:t.localSettings.tg,callback:function(e){t.$set(t.localSettings,"tg",e)},expression:"localSettings.tg"}}),t._v(" "),n("settings-input",{staticClass:"mt30",attrs:{header:"Вконтакте",settings:t.localSettings,entity:"vkontakte",disableCmd:t.disableAllInputsCmd,hint:"Пример: https://vk.com/id29888795"},on:{saveSettings:t.saveSettings},model:{value:t.localSettings.vkontakte,callback:function(e){t.$set(t.localSettings,"vkontakte",e)},expression:"localSettings.vkontakte"}}),t._v(" "),n("settings-input",{staticClass:"mt30",attrs:{header:"Одноклассники",settings:t.localSettings,entity:"ok",disableCmd:t.disableAllInputsCmd,hint:"Пример: https://ok.ru/profile/518524364583"},on:{saveSettings:t.saveSettings},model:{value:t.localSettings.ok,callback:function(e){t.$set(t.localSettings,"ok",e)},expression:"localSettings.ok"}}),t._v(" "),n("settings-input",{staticClass:"mt30",attrs:{header:"Meta (Facebook)",settings:t.localSettings,entity:"meta",disableCmd:t.disableAllInputsCmd},on:{saveSettings:t.saveSettings},model:{value:t.localSettings.meta,callback:function(e){t.$set(t.localSettings,"meta",e)},expression:"localSettings.meta"}}),t._v(" "),n("settings-input",{staticClass:"mt30",attrs:{header:"E-mail",settings:t.localSettings,entity:"email",disableCmd:t.disableAllInputsCmd,hint:"Можно несколько через запятую"},on:{saveSettings:t.saveSettings},model:{value:t.localSettings.email,callback:function(e){t.$set(t.localSettings,"email",e)},expression:"localSettings.email"}}),t._v(" "),n("settings-input",{staticClass:"mt30",attrs:{header:"Web-адрес сайта",settings:t.localSettings,entity:"domain",disableCmd:t.disableAllInputsCmd},on:{saveSettings:t.saveSettings},model:{value:t.localSettings.domain,callback:function(e){t.$set(t.localSettings,"domain",e)},expression:"localSettings.domain"}})],1)])}),[],!1,null,null,null).exports;function w(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,s)}return n}function k(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var I=function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?w(Object(n),!0).forEach((function(e){k(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):w(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({name:"MainPageSeo",components:{SettingsInput:v},data:function(){return{subject:"main_page_seo",localSettings:{mainPageTitle:"",mainPageDescription:""},disableAllInputsCmd:!1}}},y),D=Object(f.a)(I,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"show_block"},[n("h1",{staticClass:"pd0 mb0"},[t._v("SEO главной страницы сайта")]),t._v(" "),n("div",{staticClass:"content_block settingsPage"},[n("settings-input",{staticClass:"mt10",attrs:{header:"Title главной страницы",settings:t.localSettings,entity:"mainPageTitle",disableCmd:t.disableAllInputsCmd,hint:""},on:{saveSettings:t.saveSettings},model:{value:t.localSettings.mainPageTitle,callback:function(e){t.$set(t.localSettings,"mainPageTitle",e)},expression:"localSettings.mainPageTitle"}}),t._v(" "),n("settings-input",{staticClass:"mt40",attrs:{header:"Description главной страницы",settings:t.localSettings,entity:"mainPageDescription",disableCmd:t.disableAllInputsCmd,hint:""},on:{saveSettings:t.saveSettings},model:{value:t.localSettings.mainPageDescription,callback:function(e){t.$set(t.localSettings,"mainPageDescription",e)},expression:"localSettings.mainPageDescription"}})],1)])}),[],!1,null,null,null).exports;function E(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,s)}return n}function x(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var $=function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?E(Object(n),!0).forEach((function(e){x(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):E(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({name:"VisibleCategoriesLimit",components:{SettingsInput:v},data:function(){return{subject:"visible_categories_limit",localSettings:{value:""},disableAllInputsCmd:!1}}},y),A=Object(f.a)($,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"show_block"},[n("h1",{staticClass:"pd0 mb0"},[t._v("Количество видимых категорий в верхнем меню")]),t._v(" "),n("div",{staticClass:"content_block settingsPage"},[n("settings-input",{staticClass:"mt10",attrs:{header:"Количество",settings:t.localSettings,entity:"value",disableCmd:t.disableAllInputsCmd,hint:""},on:{saveSettings:t.saveSettings},model:{value:t.localSettings.value,callback:function(e){t.$set(t.localSettings,"value",e)},expression:"localSettings.value"}})],1)])}),[],!1,null,null,null).exports;function T(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,s)}return n}function M(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var N=function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?T(Object(n),!0).forEach((function(e){M(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):T(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({name:"PerPage",components:{SettingsInput:v},data:function(){return{subject:"pagination",localSettings:{perPage:""},disableAllInputsCmd:!1}}},y),L=Object(f.a)(N,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"show_block"},[n("h1",{staticClass:"pd0 mb0"},[t._v("Количество товаров на странице")]),t._v(" "),n("div",{staticClass:"content_block settingsPage"},[n("settings-input",{staticClass:"mt10",attrs:{header:"PerPage",settings:t.localSettings,entity:"perPage",disableCmd:t.disableAllInputsCmd,hint:"Количество товаров на странице в списке товаров на сайте"},on:{saveSettings:t.saveSettings},model:{value:t.localSettings.perPage,callback:function(e){t.$set(t.localSettings,"perPage",e)},expression:"localSettings.perPage"}})],1)])}),[],!1,null,null,null).exports;function H(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,s)}return n}function Q(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var R=function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?H(Object(n),!0).forEach((function(e){Q(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):H(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({name:"CacheLimit",components:{SettingsInput:v},data:function(){return{subject:"cache_limit",localSettings:{value:""},disableAllInputsCmd:!1}}},y),V=Object(f.a)(R,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"show_block"},[n("h1",{staticClass:"pd0 mb0"},[t._v("Лимит кэширования")]),t._v(" "),n("div",{staticClass:"content_block settingsPage"},[n("settings-input",{staticClass:"mt10",attrs:{header:"Лимит кэширования",settings:t.localSettings,entity:"value",disableCmd:t.disableAllInputsCmd,hint:"Если товаров на сайте меньше указаной цифры, их данные из БД все будут подгружены в браузер"},on:{saveSettings:t.saveSettings},model:{value:t.localSettings.value,callback:function(e){t.$set(t.localSettings,"value",e)},expression:"localSettings.value"}})],1)])}),[],!1,null,null,null).exports;function J(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,s)}return n}function W(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var q=function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?J(Object(n),!0).forEach((function(e){W(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):J(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({name:"ScrollSpeedRatio",components:{SettingsInput:v},data:function(){return{subject:"scroll_speed_ratio",localSettings:{value:""},disableAllInputsCmd:!1}}},y),F=Object(f.a)(q,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"show_block"},[n("h1",{staticClass:"pd0 mb0"},[t._v("Коэффициент скорости прокрутки")]),t._v(" "),n("div",{staticClass:"content_block settingsPage"},[n("settings-input",{staticClass:"mt10",attrs:{header:"Коэффициент",settings:t.localSettings,entity:"value",disableCmd:t.disableAllInputsCmd,hint:"Рекомендуется 75 (меньше цифра - выше скорость прокрутки)"},on:{saveSettings:t.saveSettings},model:{value:t.localSettings.value,callback:function(e){t.$set(t.localSettings,"value",e)},expression:"localSettings.value"}})],1)])}),[],!1,null,null,null).exports;function z(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,s)}return n}function B(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var G=function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?z(Object(n),!0).forEach((function(e){B(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):z(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({name:"PhotoQuality",components:{SettingsInput:v},data:function(){return{subject:"photo_quality",localSettings:{value:""},disableAllInputsCmd:!1}}},y),K=Object(f.a)(G,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"show_block"},[n("h1",{staticClass:"pd0 mb0"},[t._v("Качество фото")]),t._v(" "),n("div",{staticClass:"content_block settingsPage"},[n("settings-input",{staticClass:"mt10",attrs:{header:"Quality (%)",settings:t.localSettings,entity:"value",disableCmd:t.disableAllInputsCmd,hint:""},on:{saveSettings:t.saveSettings},model:{value:t.localSettings.value,callback:function(e){t.$set(t.localSettings,"value",e)},expression:"localSettings.value"}})],1)])}),[],!1,null,null,null).exports;function U(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,s)}return n}function X(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var Y=function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?U(Object(n),!0).forEach((function(e){X(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):U(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({name:"AdminEmail",components:{SettingsInput:v},data:function(){return{subject:"admin_email",localSettings:{value:""},disableAllInputsCmd:!1}}},y),Z={name:"SettingsIndex",components:{Contacts:C,MainPageSeo:D,VisibleCategoriesLimit:A,PerPage:L,CacheLimit:V,ScrollSpeedRatio:F,PhotoQuality:K,AdminEmail:Object(f.a)(Y,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"show_block"},[n("h1",{staticClass:"pd0 mb0"},[t._v("E-mail администратора")]),t._v(" "),n("div",{staticClass:"content_block settingsPage"},[n("settings-input",{staticClass:"mt10",attrs:{header:"E-mail администратора",settings:t.localSettings,entity:"value",disableCmd:t.disableAllInputsCmd,hint:"E-mail еще одного или нового администратора (если несколько, то через запятую)"},on:{saveSettings:t.saveSettings},model:{value:t.localSettings.value,callback:function(e){t.$set(t.localSettings,"value",e)},expression:"localSettings.value"}})],1)])}),[],!1,null,null,null).exports},data:function(){return{currentComponent:{contacts:"Contacts",mainPageSeo:"MainPageSeo",visibleCategoriesLimit:"VisibleCategoriesLimit",perPage:"PerPage",cacheLimit:"CacheLimit",scrollSpeedRatio:"ScrollSpeedRatio",photoQuality:"PhotoQuality",adminEmail:"AdminEmail"}}}},tt=Object(f.a)(Z,(function(){var t=this.$createElement;return(this._self._c||t)(this.currentComponent[this.$route.params.subject],{tag:"component"})}),[],!1,null,null,null);e.default=tt.exports}}]);