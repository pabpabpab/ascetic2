(window.webpackJsonp=window.webpackJsonp||[]).push([[8,14],{10:function(t,e,n){"use strict";var r=n(1),a=n(19);function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){c(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var s={name:"SeoManager",props:["entity"],data:function(){return{serverData:{},photoSizeIndex:2,localData:{entityId:0,pageTitle:"",pageDescription:"",imgAlt:"",photoName:""}}},computed:i(i(i({},Object(r.c)("seoManager",["seoData"])),{},{contentWrapperClass:function(){return"photo"===this.entity?"seo_manager__content_wrapper seo_manager__content_wrapper__from_photo_manager":"seo_manager__content_wrapper"}},Object(r.c)(["imgFolderPrefix"])),{},{serverSeoDataValue:function(){return this.seoData(this.entity)},noData:function(){return 0===Object.keys(this.serverData).length},getHeader:function(){var t,e,n;if(this.noData)return"";var r=null===(t=this.serverData.category)||void 0===t?void 0:t.name,a=null===(e=this.serverData.product)||void 0===e?void 0:e.name,o=null===(n=this.serverData.product)||void 0===n?void 0:n.price;return{category:"Категория «".concat(r,"»"),product:"Товар «".concat(a,"» ").concat(o," ₽"),photo:"Фото товара «".concat(a,"» ").concat(o," ₽")}[this.entity]},getHeaderHint:function(){var t,e;if(this.noData)return"";var n=null===(t=this.serverData.product)||void 0===t||null===(e=t.description)||void 0===e?void 0:e.description;return{category:"".concat(""),product:"".concat(n),photo:"".concat(n)}[this.entity]},getDescriptionInputLabel:function(){return{category:"Description страницы этой категории товаров",product:"Description страницы этого товара",photo:"Description страницы этого фото"}[this.entity]},getTitleInputLabel:function(){return{category:"Title страницы этой категории товаров",product:"Title страницы этого товара",photo:"Title страницы этого фото"}[this.entity]},getAltInputLabel:function(){return{category:"",product:"",photo:"Alt-атрибут этого фото"}[this.entity]},getHeaderPhoto:function(){var t;if(this.noData)return"";var e={category:"",product:JSON.parse(this.serverData.product.photo_set)?JSON.parse(this.serverData.product.photo_set)[0]:"",photo:null!==(t=this.localData.photoName)&&void 0!==t?t:""}[this.entity];if(!e)return"";var n="/storage/".concat(this.imgFolderPrefix).concat(this.photoSizeIndex),r="".concat(this.serverData.product.id,"s").concat(this.photoSizeIndex,"-");return'<img alt=""\n                        src="'.concat(n,"/").concat(r).concat(e,'"\n                        class="photo_size').concat(this.photoSizeIndex,' seo_manager__header__photo" />')}}),methods:i(i({},Object(r.b)("seoManager",["closeSeoManager","saveSeoData"])),{},{fitTextareaHeight:function(t){Object(a.a)(t)}}),watch:{serverSeoDataValue:function(t){var e,n,r,a,o,c;if(0!==Object.keys(t).length){this.serverData=i({},t);var s={category:null===(e=t.category)||void 0===e?void 0:e.id,product:null===(n=t.product)||void 0===n?void 0:n.id,photo:null===(r=t.product)||void 0===r?void 0:r.id};this.localData.entityId=s[this.entity],this.localData.pageTitle=null==t||null===(a=t.seo)||void 0===a?void 0:a.page_title,this.localData.pageDescription=null==t||null===(o=t.seo)||void 0===o?void 0:o.page_description,this.localData.imgAlt=null==t||null===(c=t.seo)||void 0===c?void 0:c.alt_text,this.localData.photoName=null==t?void 0:t.photoName}}}},l=n(2),u=Object(l.a)(s,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"seo_manager__screen"},[n("div",{class:t.contentWrapperClass},[n("div",{staticClass:"seo_manager__header",attrs:{title:t.getHeaderHint}},["category"!==t.entity?n("p",{domProps:{innerHTML:t._s(t.getHeaderPhoto)}}):t._e(),t._v(" "),n("h1",[t._v(t._s(t.getHeader))])]),t._v(" "),n("div",{staticClass:"seo_manager__content"},["photo"===t.entity?n("div",[n("label",{staticClass:"seo_manager__input_label"},[t._v(t._s(t.getAltInputLabel))]),t._v(" "),n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.localData.imgAlt,expression:"localData.imgAlt"}],staticClass:"seo_manager__input_textarea seo_manager__input_textarea_alt",attrs:{placeholder:" "},domProps:{value:t.localData.imgAlt},on:{click:function(e){return t.fitTextareaHeight(e)},input:[function(e){e.target.composing||t.$set(t.localData,"imgAlt",e.target.value)},function(e){return t.fitTextareaHeight(e)}]}})]):t._e(),t._v(" "),n("label",{staticClass:"seo_manager__input_label"},[t._v(t._s(t.getTitleInputLabel))]),t._v(" "),n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.localData.pageTitle,expression:"localData.pageTitle"}],staticClass:"seo_manager__input_textarea seo_manager__input_textarea_title",attrs:{placeholder:" "},domProps:{value:t.localData.pageTitle},on:{click:function(e){return t.fitTextareaHeight(e)},input:[function(e){e.target.composing||t.$set(t.localData,"pageTitle",e.target.value)},function(e){return t.fitTextareaHeight(e)}]}}),t._v(" "),n("label",{staticClass:"seo_manager__input_label"},[t._v(t._s(t.getDescriptionInputLabel))]),t._v(" "),n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.localData.pageDescription,expression:"localData.pageDescription"}],staticClass:"seo_manager__input_textarea seo_manager__input_textarea_description",attrs:{placeholder:" "},domProps:{value:t.localData.pageDescription},on:{click:function(e){return t.fitTextareaHeight(e)},input:[function(e){e.target.composing||t.$set(t.localData,"pageDescription",e.target.value)},function(e){return t.fitTextareaHeight(e)}]}})]),t._v(" "),n("div",{staticClass:"seo_manager__button_panel"},[n("button",{staticClass:"seo_manager__save_button",on:{click:function(e){return e.stopPropagation(),t.saveSeoData({entity:t.entity,data:t.localData})}}},[t._v("\n                    Сохранить\n            ")])]),t._v(" "),n("div",{staticClass:"seo_manager__collapse_icon",on:{click:function(e){return t.closeSeoManager()}}},[t._v("\n            ×\n        ")])])])}),[],!1,null,null,null);e.a=u.exports},18:function(t,e,n){"use strict";n.r(e);var r={name:"ReloadIcon",computed:{title:function(){return"Обновить ".concat({Products:"товары",TrashedProducts:"удаленные товары",Users:"пользователей",Categories:"категории"}[this.$route.name]," с сервера")},showReloadIcon:function(){return["Products","TrashedProducts","Users","Categories"].includes(this.$route.name)}},methods:{reload:function(){var t={Products:"products/showProductsWithReload",TrashedProducts:"products/showTrashedProductsWithReload",Users:"users/showUsersWithReload",Categories:"categories/showCategoriesWithReload"}[this.$route.name];t&&this.$store.dispatch(t,this.$route)}}},a=n(2),o=Object(a.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return this.showReloadIcon?e("span",{staticClass:"reload_icon",on:{click:this.reload}},[e("span",{staticClass:"icon_with_hint icon_with_right_hint reload_icon__content",attrs:{"data-title":this.title}},[this._v("\n        ↻\n    ")])]):this._e()}),[],!1,null,null,null);e.default=o.exports},19:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var r=0;function a(t){if(function(t){return t.target.scrollHeight>t.target.clientHeight}(t)){if(r=t.target.value.length,t.target.clientHeight>500)return;!function(t){t.target.style.height=t.target.scrollHeight+10+"px"}(t)}else(function(t){if(t.target.value.length/r<.85)return r=t.target.value.length,!0;return!1})(t)&&(!function(t){t.target.style=null}(t),setTimeout((function(){a(t)}),10))}},54:function(t,e,n){"use strict";n.r(e);var r={name:"AddCategoryButton",data:function(){return{buttonText:{categories:"Добавить категорию",materials:"Добавить материал",colors:"Добавить цвет"}}},computed:{getButtonText:function(){var t=this.$route.params.entity;return this.buttonText[t]}}},a=n(2),o=Object(a.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("button",{staticClass:"categories_add_button",on:{click:function(e){return t.$emit("change-adding-component")}}},[t._v("\n    "+t._s(t.getButtonText)+"\n")])}),[],!1,null,null,null).exports,i=n(1);function c(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?c(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var u={name:"CategoryForm",data:function(){return{creationHeader:{categories:"Создать категорию товаров",materials:"Добавить материал",colors:"Добавить цвет"},labelText:{categories:"Название категории",materials:"Название материала",colors:"Название цвета"},localCategory:{id:0,name:""},zeroCategory:{},animationClass:{"category_form__animation_open pd20 mt20":!0,category_form__animation_collapse:!1}}},computed:s(s(s({},Object(i.c)("categories",["singleCategoryFromServer"])),Object(i.c)(["typeinErrors","isAlarmingInput"])),{},{getCreationHeader:function(){return this.creationHeader[this.$route.params.entity]},getLabelText:function(){return this.labelText[this.$route.params.entity]}}),methods:s(s({},Object(i.b)("categories",["saveCategory","typeinValidation"])),{},{changeAddingComponent:function(){var t=this;this.animationClass={category_form__animation_open:!1,category_form__animation_collapse:!0},setTimeout((function(){t.$emit("change-adding-component")}),300)}}),watch:{singleCategoryFromServer:function(t,e){t.name.length>0&&(this.localCategory=s({},this.zeroCategory))}},mounted:function(){this.zeroCategory=s({},this.localCategory)}},p=Object(a.a)(u,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"category_form__wrapper mauto relative",class:t.animationClass},[n("h1",{staticClass:"tal"},[t._v(t._s(t.getCreationHeader))]),t._v(" "),n("div",[n("div",{staticClass:"input_text__container display_flex"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.localCategory.name,expression:"localCategory.name"}],staticClass:"input_text category_form__input_text",class:{input_alarm:t.isAlarmingInput("name")},attrs:{type:"text",maxlength:"50",placeholder:" "},domProps:{value:t.localCategory.name},on:{keyup:function(e){return t.typeinValidation({entity:t.$route.params.entity,category:t.localCategory})},input:function(e){e.target.composing||t.$set(t.localCategory,"name",e.target.value)}}}),t._v(" "),n("label",{staticClass:"input_text__label"},[t._v(t._s(t.getLabelText))]),t._v(" "),n("button",{staticClass:"category_save_button",on:{click:function(e){return e.stopPropagation(),t.saveCategory({entity:t.$route.params.entity,category:t.localCategory})}}},[t._v("\n                Ok\n            ")])]),t._v(" "),n("p",{staticClass:"validation_message_at_input",domProps:{innerHTML:t._s(t.typeinErrors("name"))}})]),t._v(" "),n("div",{staticClass:"collapse_category_form__icon",on:{click:function(e){return t.changeAddingComponent()}}},[t._v("\n        ×\n    ")])])}),[],!1,null,null,null).exports;function g(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function m(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?g(Object(n),!0).forEach((function(e){d(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function d(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var _={name:"CategoryItemEditForm",props:["category"],data:function(){return{localCategory:{id:0,name:""},categoryNameHeader:"",animationClass:{"category_form__animation_open pd20 mt20":!0,category_form__animation_collapse:!1}}},methods:m(m({},Object(i.b)("categories",["saveCategory","typeinValidation"])),{},{changeItemComponent:function(t){var e=this;this.animationClass={category_form__animation_open:!1,category_form__animation_collapse:!0},setTimeout((function(){e.$emit("change-item-component",t)}),300)}}),computed:m(m({},Object(i.c)("categories",["singleCategoryFromServer"])),Object(i.c)(["isAlarmingInput","typeinErrors"])),watch:{singleCategoryFromServer:function(t){this.localCategory=m({},t),this.categoryNameHeader=t.name}},mounted:function(){this.$store.dispatch("categories/cleanValidationErrors"),this.category.id&&this.$store.dispatch("categories/loadSingleCategory",{entity:this.$route.params.entity,categoryId:this.category.id})}},y=Object(a.a)(_,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"category_edit_form_item__border_top"},[n("div",{staticClass:"category_form__wrapper m20px_auto relative",class:t.animationClass},[n("h1",{staticClass:"tal"},[t._v("Редактировать «"+t._s(t.categoryNameHeader)+"»")]),t._v(" "),n("div",[n("div",{staticClass:"display_flex"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.localCategory.name,expression:"localCategory.name"}],staticClass:"input_text category_form__input_text",class:{input_alarm:t.isAlarmingInput("name")},attrs:{type:"text",maxlength:"50",placeholder:"Введите название"},domProps:{value:t.localCategory.name},on:{keyup:function(e){return t.typeinValidation({entity:t.$route.params.entity,category:t.localCategory})},input:function(e){e.target.composing||t.$set(t.localCategory,"name",e.target.value)}}}),t._v(" "),n("button",{staticClass:"category_save_button",on:{click:function(e){return e.stopPropagation(),t.saveCategory({entity:t.$route.params.entity,category:t.localCategory})}}},[t._v("\n                    Ok\n                ")])]),t._v(" "),n("p",{staticClass:"validation_message_at_input",domProps:{innerHTML:t._s(t.typeinErrors("name"))}})]),t._v(" "),n("div",{staticClass:"collapse_category_form__icon",on:{click:function(e){return t.changeItemComponent(t.category.id)}}},[t._v("\n            ×\n        ")])])])}),[],!1,null,null,null).exports;function f(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function h(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?f(Object(n),!0).forEach((function(e){v(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function v(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var b={name:"CategoryItem",props:["category","index"],computed:h(h(h({},Object(i.c)("categories",["categories"])),Object(i.c)("dragAndDropByY",["isDragging","draggingOccurs","topByIndex"])),{},{singularEntityName:function(){return{categories:"category",materials:"material",colors:"color"}[this.$route.params.entity]},lastListIndex:function(){return this.categories[this.$route.params.entity].length-1},draggedItemClass:function(){return{draggedCategory:this.isDragging(this.index)}},beneathDraggedItemClass:function(){return{beneathDraggedCategory:this.draggingOccurs}}}),methods:h(h({},Object(i.b)("contextMenu",["showContextMenu"])),Object(i.b)("dragAndDropByY",["myDragStart"])),mounted:function(){var t=this;this.$store.dispatch("dragAndDropByY/resetYCoordinates",this.index).then((function(){var e=t.$refs.cat.getBoundingClientRect().y;t.$store.commit("dragAndDropByY/addYIntoYCoordinates",e)}))}},O=Object(a.a)(b,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"cat",staticClass:"category_item",class:[t.draggedItemClass,t.beneathDraggedItemClass],style:{top:t.topByIndex(t.index)},on:{mousedown:function(e){return t.myDragStart({index:t.index,event:e})}}},[n("div",{staticClass:"category_item__content"},[n("span",{staticClass:"context_menu__icon_category",on:{click:function(e){return e.stopPropagation(),t.showContextMenu({event:e,target:"Categories",data:{category:t.category,currentListIndex:t.index,lastListIndex:t.lastListIndex}})}}},[t._v("\n            ⋮\n        ")]),t._v(" "),n("div",{staticClass:"category_item__name"},[n("router-link",{staticClass:"category_item__name__link",attrs:{to:{name:"ProductsByCategory",params:{categoryEntity:t.singularEntityName,slug:t.category.slug,categoryId:t.category.id,categoryName:t.category.name}}}},[t._v("\n                "+t._s(t.category.name)+"\n            ")])],1),t._v(" "),n("router-link",{staticClass:"category_item__products_count_link",attrs:{to:{name:"ProductsByCategory",params:{categoryEntity:t.singularEntityName,slug:t.category.slug,categoryId:t.category.id,categoryName:t.category.name}}}},[t._v("\n            "+t._s(t.category.products_count)+"\n        ")])],1)])}),[],!1,null,null,null).exports;function C(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function j(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?C(Object(n),!0).forEach((function(e){w(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):C(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function w(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var D={name:"CategoriesContextMenu",props:["entity"],computed:j(j(j({},Object(i.c)("contextMenu",["coordinates","currentListIndex","lastListIndex","category"])),Object(i.c)("categories",["seoData"])),{},{hasSeoData:function(){var t=this,e=this.seoData.find((function(e){return e.category_id===t.category.id}));return!!e&&(Boolean(e.page_title)||Boolean(e.page_description))}}),methods:j(j({},Object(i.b)("categories",["preDeleteCategory","changePosition"])),Object(i.b)("seoManager",["showSeoManager"]))},x=Object(a.a)(D,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"context_menu__wrapper",style:t.coordinates},[n("ul",{staticClass:"context_menu__ul"},[n("li",{staticClass:"context_menu__li_header"},[t._v("\n            «"+t._s(t.category.name)+"»\n        ")]),t._v(" "),0!==t.lastListIndex?n("li",{staticClass:"context_menu__li_multiple"},[t._v("\n            Сдвинуть\n            "),t.currentListIndex>0?n("span",{staticClass:"context_menu__li_multiple__item",attrs:{title:"вверх"},on:{click:function(e){return t.changePosition({entity:t.$route.params.entity,categoryId:t.category.id,direction:"up"})}}},[t._v("\n                 ↑\n            ")]):t._e(),t._v(" "),t.currentListIndex<t.lastListIndex?n("span",{staticClass:"context_menu__li_multiple__item",attrs:{title:"вниз"},on:{click:function(e){return t.changePosition({entity:t.$route.params.entity,categoryId:t.category.id,direction:"down"})}}},[t._v("\n                ↓\n            ")]):t._e()]):t._e(),t._v(" "),n("li",{staticClass:"context_menu__li",on:{click:function(e){return t.$emit("change-item-component",t.category.id)}}},[t._v("\n            Редактировать\n        ")]),t._v(" "),"categories"===t.entity?n("li",{staticClass:"context_menu__li",on:{click:function(e){return t.showSeoManager({entity:"category",data:{id:t.category.id}})}}},[t.hasSeoData?n("span",{staticClass:"has_data_blue",attrs:{title:"уже есть данные"}},[t._v("✔")]):t._e(),t._v("\n            SEO\n        ")]):t._e(),t._v(" "),n("li",{staticClass:"context_menu__li",staticStyle:{border:"0"},on:{click:function(e){return t.preDeleteCategory({entity:t.$route.params.entity,categoryId:t.category.id})}}},[t._v("\n            Удалить\n        ")])])])}),[],!1,null,null,null).exports,P=n(4),I=n.n(P);function S(t,e,n,r,a,o,i){try{var c=t[o](i),s=c.value}catch(t){return void n(t)}c.done?e(s):Promise.resolve(s).then(r,a)}function $(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function A(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?$(Object(n),!0).forEach((function(e){k(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):$(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function k(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var E={changeItemComponent:function(t){var e=this;this.closeContextMenu(),this.$emit("close-adding-component"),this._getNewComponentName(t).then((function(n){e._collapseItems();var r=A({},e.currentComponentsNames);r["id"+t]=n,e.currentComponentsNames=A({},r)}))},_getNewComponentName:function(t){var e,n=this;return(e=I.a.mark((function e(){return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.currentComponentsNames["id"+t]!==n.simpleListItemComponentName){e.next=2;break}return e.abrupt("return",n.editionComponentName);case 2:return e.abrupt("return",n.simpleListItemComponentName);case 3:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(r,a){var o=e.apply(t,n);function i(t){S(o,r,a,i,c,"next",t)}function c(t){S(o,r,a,i,c,"throw",t)}i(void 0)}))})()},_collapseItems:function(){var t=A({},this.currentComponentsNames);for(var e in t)t[e]=this.simpleListItemComponentName;this.currentComponentsNames=A({},t)}};function N(t){return function(t){if(Array.isArray(t))return T(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return T(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return T(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function T(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function H(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function M(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?H(Object(n),!0).forEach((function(e){L(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):H(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function L(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var B={name:"Categories",components:{CategoryItem:O,CategoryItemEditForm:y,CategoriesContextMenu:x,SeoManager:n(10).a},props:["collapseItemsCommand"],data:function(){return{currentComponentsNames:{},simpleListItemComponentName:"CategoryItem",editionComponentName:"CategoryItemEditForm"}},computed:M(M(M({},Object(i.c)("categories",["categories"])),Object(i.c)("seoManager",["showSeoManager"])),Object(i.c)("contextMenu",["showContextMenu"])),methods:M(M(M({},Object(i.b)(["closeContextMenu"])),E),{},{_initComponentsNames:function(t){var e=this,n={};t.forEach((function(t){n["id"+t.id]=e.simpleListItemComponentName})),this.currentComponentsNames=M({},n)}}),watch:{categories:function(t){var e=N(t[this.$route.params.entity]);this._initComponentsNames(e)},collapseItemsCommand:function(t){!0===t&&this._collapseItems()}},mounted:function(){this.$store.dispatch("categories/showCategories",this.$route.params.entity)}};function F(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function R(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?F(Object(n),!0).forEach((function(e){Y(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):F(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function Y(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var z={name:"CategoriesPage",components:{AddCategoryButton:o,CategoryForm:p,Categories:Object(a.a)(B,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"categories_list"},[t._l(t.categories[t.$route.params.entity],(function(e,r){return n(t.currentComponentsNames["id"+e.id],{key:e.id,tag:"component",attrs:{category:e,index:r},on:{"change-item-component":t.changeItemComponent}})})),t._v(" "),n("transition",{attrs:{name:"fade"}},[t.showContextMenu("Categories")?n("categories-context-menu",{attrs:{entity:t.$route.params.entity},on:{"change-item-component":t.changeItemComponent}}):t._e()],1),t._v(" "),n("transition",{attrs:{name:"fade"}},[t.showSeoManager&&"categories"===t.$route.params.entity?n("seo-manager",{attrs:{entity:"category"}}):t._e()],1)],2)}),[],!1,null,null,null).exports,ReloadIcon:n(18).default},data:function(){return{currentAddingComponent:"AddCategoryButton",collapseItemsCommand:!1,header:{categories:"Категории товаров",materials:"Материалы",colors:"Цвета"}}},computed:R(R({},Object(i.c)("dragAndDropByY",["currentIndex","draggingOccurs"])),{},{getHeader:function(){var t=this.$route.params.entity;return this.header[t]}}),methods:R(R({},Object(i.b)("dragAndDropByY",["myDragMove","myDragStop"])),{},{changeAddingComponent:function(){"AddCategoryButton"===this.currentAddingComponent?(this.currentAddingComponent="CategoryForm",this.collapseItemsCommand=!0,this.$store.dispatch("categories/cleanValidationErrors")):(this.currentAddingComponent="AddCategoryButton",this.collapseItemsCommand=!1)},closeAddingComponent:function(){this.currentAddingComponent="AddCategoryButton",this.collapseItemsCommand=!1},collapseAll:function(){var t=this;this.closeAddingComponent(),this.collapseItemsCommand=!1,setTimeout((function(){t.collapseItemsCommand=!0}),100)}}),watch:{draggingOccurs:function(t){t&&this.collapseAll()}}},V=Object(a.a)(z,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"show_block",on:{mousemove:function(e){return t.myDragMove(e)},mouseup:function(e){return t.myDragStop({event:e,entity:t.$route.params.entity})}}},[n("div",{staticClass:"categories_header"},[n("reload-icon"),t._v(" "),n("h1",{staticClass:"pd0 mb0 mauto"},[t._v(t._s(t.getHeader))])],1),t._v(" "),n("div",{staticClass:"content_block content_block_of_categories"},[n(t.currentAddingComponent,{tag:"component",on:{"change-adding-component":function(e){return t.changeAddingComponent()}}}),t._v(" "),n("categories",{attrs:{collapseItemsCommand:t.collapseItemsCommand},on:{"close-adding-component":function(e){return t.closeAddingComponent()}}})],1)])}),[],!1,null,null,null);e.default=V.exports}}]);