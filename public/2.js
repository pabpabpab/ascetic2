(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{19:function(t,e,o){"use strict";o.d(e,"a",(function(){return r}));var i=0;function r(t){if(function(t){return t.target.scrollHeight>t.target.clientHeight}(t)){if(i=t.target.value.length,t.target.clientHeight>500)return;!function(t){t.target.style.height=t.target.scrollHeight+10+"px"}(t)}else(function(t){if(t.target.value.length/i<.85)return i=t.target.value.length,!0;return!1})(t)&&(!function(t){t.target.style=null}(t),setTimeout((function(){r(t)}),10))}},24:function(t,e,o){"use strict";function i(t){return function(t){if(Array.isArray(t))return r(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return r(t,e);var o=Object.prototype.toString.call(t).slice(8,-1);"Object"===o&&t.constructor&&(o=t.constructor.name);if("Map"===o||"Set"===o)return Array.from(t);if("Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return r(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var o=0,i=new Array(e);o<e;o++)i[o]=t[o];return i}var s={name:"FilesInput",props:["value","owner"],data:function(){return{photos:[]}},methods:{previewFiles:function(){if(0!==this.$refs.photos.files.length&&(this.photos=i(this.$refs.photos.files),this.photos.length>5)){this.$store.dispatch("showInformationDialog","Выбрано файлов больше чем 5,\n                это может сильно замедлить загрузку фото. Рекомендуется загружать не более чем по 5 фото.\n                Следущие фото можно будет добавить после.")}},removePreFile:function(t){this.photos.splice(t,1)},selectFiles:function(){this.$refs.photos.click()}},computed:{graphicSrc:function(){for(var t=[],e=0;e<this.photos.length;e++){var o=this.photos[e];/\.(jpe?g|png|gif|bmp|webp)$/i.test(o.name)&&t.push({url:URL.createObjectURL(o),index:e})}return this.$emit("input",this.photos),t},nonGraphicNames:function(){for(var t=[],e=0;e<this.photos.length;e++){var o=this.photos[e];/\.(jpe?g|png|gif|bmp|webp)$/i.test(o.name)||t.push({name:o.name,index:e}),this.$emit("input",this.photos)}return t},buttonHeader:function(){return this.photos.length>0?"Заменить фото":"Добавить фото"},showPhotoButton:function(){return!("ProductPhotoManager"===this.owner&&this.photos.length>0)}}},c=o(2),n=Object(c.a)(s,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",{staticClass:"photo_preview__container",class:{mt20:t.photos.length>0}},[t._l(t.graphicSrc,(function(e){return o("div",{key:e.index,staticClass:"prePhoto__wrapper"},[o("img",{staticClass:"prePhoto",attrs:{alt:"",src:e.url}}),t._v(" "),o("div",{staticClass:"prePhoto__delete_icon",on:{click:function(o){return t.removePreFile(e.index)}}},[t._v("\n                ✖\n            ")])])})),t._v(" "),t._l(t.nonGraphicNames,(function(e){return o("div",{key:e.index,staticClass:"prePhoto__wrapper"},[o("div",{staticClass:"preFile_name",domProps:{innerHTML:t._s(e.name)}}),t._v(" "),o("div",{staticClass:"prePhoto__delete_icon prePhoto__delete_icon_offset",on:{click:function(o){return t.removePreFile(e.index)}}},[t._v("\n                ✖\n            ")])])}))],2),t._v(" "),o("div",{staticClass:"input_photo__wrapper"},[o("input",{ref:"photos",staticClass:"input_photo",attrs:{type:"file",accept:"image/*",multiple:""},on:{change:function(e){return t.previewFiles()}}}),t._v(" "),t.showPhotoButton?o("button",{staticClass:"select_photos_button mauto",on:{click:function(e){return t.selectFiles()}}},[t._v("\n            "+t._s(t.buttonHeader)+"\n        ")]):t._e()])])}),[],!1,null,null,null);e.a=n.exports},55:function(t,e,o){"use strict";o.r(e);var i=o(1);function r(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,i)}return o}function s(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?r(Object(o),!0).forEach((function(e){c(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function c(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}var n={name:"CheckNumberOfCategories",computed:s(s({},Object(i.c)("categories",["categories","categoriesCount"])),{},{catsCount:function(){return this.categoriesCount.categories},materialsCount:function(){return this.categoriesCount.materials},colorsCount:function(){return this.categoriesCount.colors}}),watch:{colorsCount:function(t){if(0===t){this.$store.dispatch("showInformationDialog","Не созданы цвета товаров, сначала добавьте цвета товаров по ссылке «Категории / Цвета» в меню.")}},materialsCount:function(t){if(0===t){this.$store.dispatch("showInformationDialog","Не созданы материалы товаров, сначала добавьте материалы товаров по ссылке «Категории / Материалы» в меню.")}},catsCount:function(t){if(0===t){this.$store.dispatch("showInformationDialog","Не созданы категории товаров, сначала добавьте категории товаров по ссылке «Категории» в меню.")}}},mounted:function(){0===this.categories.categories.length&&this.$store.dispatch("categories/loadCategories","categories"),0===this.categories.materials.length&&this.$store.dispatch("categories/loadCategories","materials"),0===this.categories.colors.length&&this.$store.dispatch("categories/loadCategories","colors")}},a=o(2),l=Object(a.a)(n,(function(){var t=this.$createElement;return(this._self._c||t)("div")}),[],!1,null,null,null).exports,u=o(24);function p(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,i)}return o}function d(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?p(Object(o),!0).forEach((function(e){h(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):p(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function h(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}var _={name:"CheckboxesList",props:["value","localProduct","header","entity","closeListCmd"],data:function(){return{checkboxesVisibility:!1}},computed:d(d(d({},Object(i.c)("categories",["categories"])),Object(i.c)(["typeinErrors"])),{},{localCategories:function(){var t={category:"categories",material:"materials",color:"colors"}[this.entity];return this.categories[t]},checkboxesAreVisible:function(){return this.checkboxesVisibility},selectedCats:function(){var t=this;if(this.localCategories[0])return this.$emit("input",this.localProduct[this.entity+"_ids"]),this.localProduct[this.entity+"_ids"].map((function(e){return{id:e,name:t.localCategories.find((function(t){return t.id===e})).name}}))}}),methods:d(d({},Object(i.b)("products",["typeinValidation"])),{},{changeCheckboxesVisibility:function(){var t=this,e=this.checkboxesVisibility;this.$emit("closeAllCheckboxesLists"),setTimeout((function(){t.checkboxesVisibility=!e}),100)},deleteSelectedItem:function(t){var e=this.localProduct,o=e[this.entity+"_ids"].findIndex((function(e){return e===t}));e[this.entity+"_ids"].splice(o,1)},closeThisCheckboxes:function(){this.checkboxesVisibility=!1}}),watch:{closeListCmd:function(t){t&&this.closeThisCheckboxes()}}},f=Object(a.a)(_,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"selectedCategories__wrapper"},[o("p",{staticClass:"product_form__property_header"},[t._v("\n        "+t._s(t.header)+"\n    ")]),t._v(" "),o("div",{staticClass:"selectedCategories",on:{click:function(e){return e.stopPropagation(),t.changeCheckboxesVisibility()}}},[o("div",{staticClass:"selectedCategories__items"},t._l(t.selectedCats,(function(e){return o("p",{key:e.id,staticClass:"selectedCategories__item show_block",on:{click:function(t){t.stopPropagation()}}},[t._v("\n                "+t._s(e.name)+"\n                "),o("span",{staticClass:"selectedCategories__item__collapse_icon",on:{click:function(o){return o.stopPropagation(),t.deleteSelectedItem(e.id)}}},[t._v("\n                    ×\n                ")])])})),0),t._v(" "),o("div",{staticClass:"selectedCategories__arrow",class:{selectedCategories__arrow_up:t.checkboxesAreVisible}},[t._v("\n            ▼\n        ")])]),t._v(" "),t.checkboxesAreVisible?o("div",{staticClass:"relative_checkboxes_wrapper",on:{click:function(t){t.stopPropagation()}}},[o("div",{staticClass:"absolute_checkboxes_list show_block"},t._l(t.localCategories,(function(e){return o("p",{key:e.id,staticClass:"checkbox_input__item tal"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.localProduct[t.entity+"_ids"],expression:"localProduct[entity + '_ids']"}],staticClass:"checkbox_input",attrs:{type:"checkbox",id:"cat"+e.id},domProps:{value:e.id,checked:Array.isArray(t.localProduct[t.entity+"_ids"])?t._i(t.localProduct[t.entity+"_ids"],e.id)>-1:t.localProduct[t.entity+"_ids"]},on:{change:[function(o){var i=t.localProduct[t.entity+"_ids"],r=o.target,s=!!r.checked;if(Array.isArray(i)){var c=e.id,n=t._i(i,c);r.checked?n<0&&t.$set(t.localProduct,t.entity+"_ids",i.concat([c])):n>-1&&t.$set(t.localProduct,t.entity+"_ids",i.slice(0,n).concat(i.slice(n+1)))}else t.$set(t.localProduct,t.entity+"_ids",s)},function(e){return t.typeinValidation(t.localProduct)}]}}),t._v(" "),o("label",{staticClass:"checkbox_label",attrs:{for:"cat"+e.id}},[t._v("\n                    "+t._s(e.name)+"\n                ")])])})),0)]):t._e(),t._v(" "),o("p",{staticClass:"validation_message_at_input ml_minus3",domProps:{innerHTML:t._s(t.typeinErrors(t.entity+"_ids"))}})])}),[],!1,null,null,null).exports,m=o(19);function b(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,i)}return o}function g(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?b(Object(o),!0).forEach((function(e){v(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):b(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function v(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}var y={name:"ProductForm",components:{CheckNumberOfCategories:l,FilesInput:u.a,CheckboxesList:f},props:["action","saveCmd"],data:function(){return{localProduct:{id:0,name:"",price:"",description:"",category_ids:[],material_ids:[],color_ids:[]},photos:[],closeCheckboxesListsCmd:!1}},computed:g(g(g({},Object(i.c)("products",["singleProductFromServer"])),Object(i.c)(["isAlarmingInput","typeinErrors"])),{},{localPrice:function(){return this.localProduct.price}}),methods:g(g({},Object(i.b)("products",["saveProduct","typeinValidation"])),{},{fitTextareaHeight:function(t){Object(m.a)(t)},setLocalProduct:function(t){var e=JSON.parse(t.parameters);this.localProduct={id:t.id,name:t.name,price:e.price,description:t.description.description,category_ids:e.categories.map((function(t){return t.id})),material_ids:e.materials.map((function(t){return t.id})),color_ids:e.colors.map((function(t){return t.id}))}},closeAllCheckboxesLists:function(){var t=this;this.closeCheckboxesListsCmd=!0,setTimeout((function(){t.closeCheckboxesListsCmd=!1}),100)}}),watch:{localPrice:function(t){this.localProduct.price=function(t){for(var e=t,o="",i=0,r=(e=(e=e.replace(/\s/g,"")).replace(/[^0-9]/g,"")).length-1;r>=0;r--)o=++i%3==0?" "+e[r]+o:e[r]+o;return o.trim()}(t)},singleProductFromServer:function(t){t&&this.setLocalProduct(t.product)},saveCmd:function(t){t&&(this.closeAllCheckboxesLists(),this.$store.dispatch("products/saveProduct",{localProduct:this.localProduct,photos:this.photos}))}},mounted:function(){this.$store.dispatch("resetTypeinErrors")}},P=Object(a.a)(y,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"show_block",on:{click:function(e){return t.closeAllCheckboxesLists()}}},[o("check-number-of-categories"),t._v(" "),"create"===t.action?o("h1",[t._v("Добавить товар")]):t._e(),t._v(" "),o("div",{staticClass:"content_block content_block_of_product_form"},[o("p",{staticClass:"product_form__property_header mt20"},[t._v("Название товара")]),t._v(" "),o("div",{staticClass:"input_text__container"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.localProduct.name,expression:"localProduct.name"}],staticClass:"input_text product_form__input_text",class:{input_alarm:t.isAlarmingInput("name")},attrs:{type:"text",maxlength:"50",placeholder:" "},domProps:{value:t.localProduct.name},on:{keyup:function(e){return t.typeinValidation(t.localProduct)},input:function(e){e.target.composing||t.$set(t.localProduct,"name",e.target.value)}}}),t._v(" "),o("p",{staticClass:"validation_message_at_input",domProps:{innerHTML:t._s(t.typeinErrors("name"))}})]),t._v(" "),o("checkboxes-list",{staticClass:"mt30",attrs:{"close-list-cmd":t.closeCheckboxesListsCmd,"local-product":t.localProduct,entity:"category",header:"Категория"},on:{closeAllCheckboxesLists:function(e){return t.closeAllCheckboxesLists()}},model:{value:t.localProduct.category_ids,callback:function(e){t.$set(t.localProduct,"category_ids",e)},expression:"localProduct.category_ids"}}),t._v(" "),o("checkboxes-list",{staticClass:"mt30",attrs:{"close-list-cmd":t.closeCheckboxesListsCmd,"local-product":t.localProduct,entity:"material",header:"Материал"},on:{closeAllCheckboxesLists:function(e){return t.closeAllCheckboxesLists()}},model:{value:t.localProduct.material_ids,callback:function(e){t.$set(t.localProduct,"material_ids",e)},expression:"localProduct.material_ids"}}),t._v(" "),o("checkboxes-list",{staticClass:"mt30",attrs:{"close-list-cmd":t.closeCheckboxesListsCmd,"local-product":t.localProduct,entity:"color",header:"Цвет"},on:{closeAllCheckboxesLists:function(e){return t.closeAllCheckboxesLists()}},model:{value:t.localProduct.color_ids,callback:function(e){t.$set(t.localProduct,"color_ids",e)},expression:"localProduct.color_ids"}}),t._v(" "),o("p",{staticClass:"product_form__property_header mt40"},[t._v("Описание товара")]),t._v(" "),o("div",{staticClass:"input_text__container"},[o("textarea",{directives:[{name:"model",rawName:"v-model",value:t.localProduct.description,expression:"localProduct.description"}],staticClass:"input_text input_textarea product_form__input_text",class:{input_alarm:t.isAlarmingInput("description")},attrs:{placeholder:" "},domProps:{value:t.localProduct.description},on:{keyup:function(e){return t.typeinValidation(t.localProduct)},click:function(e){return t.fitTextareaHeight(e)},input:[function(e){e.target.composing||t.$set(t.localProduct,"description",e.target.value)},function(e){return t.fitTextareaHeight(e)}]}}),t._v(" "),o("p",{staticClass:"validation_message_at_input",domProps:{innerHTML:t._s(t.typeinErrors("description"))}})]),t._v(" "),o("p",{staticClass:"product_form__property_header mt30"},[t._v("Цена товара")]),t._v(" "),o("div",{staticClass:"input_text__container"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.localProduct.price,expression:"localProduct.price"}],staticClass:"input_text product_form__input_text",class:{input_alarm:t.isAlarmingInput("price")},attrs:{type:"text",maxlength:"21",placeholder:" "},domProps:{value:t.localProduct.price},on:{keyup:function(e){return t.typeinValidation(t.localProduct)},input:function(e){e.target.composing||t.$set(t.localProduct,"price",e.target.value)}}}),t._v(" "),o("label",{staticClass:"input_text__label"},[t._v("в рублях")]),t._v(" "),o("p",{staticClass:"validation_message_at_input",domProps:{innerHTML:t._s(t.typeinErrors("price"))}})]),t._v(" "),"create"===t.action?o("files-input",{staticClass:"mt30",attrs:{owner:"ProductForm"},model:{value:t.photos,callback:function(e){t.photos=e},expression:"photos"}}):t._e(),t._v(" "),"create"===t.action?o("button",{staticClass:"save_product_button mauto mt30",on:{click:function(e){e.stopPropagation(),t.saveProduct({localProduct:t.localProduct,photos:t.photos}),t.closeAllCheckboxesLists()}}},[t._v("\n            Сохранить\n        ")]):t._e()],1)],1)}),[],!1,null,null,null);e.default=P.exports}}]);