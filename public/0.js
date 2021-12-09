(window.webpackJsonp=window.webpackJsonp||[]).push([[0,11],[,,,function(t,e,o){"use strict";var n=o(0),r=o(4);function i(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,n)}return o}function a(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?i(Object(o),!0).forEach((function(e){s(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function s(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}var c={name:"SeoManager",props:["entity"],data:function(){return{serverData:{},photoSizeIndex:2,localData:{entityId:0,pageTitle:"",pageDescription:"",imgAlt:"",photoName:""}}},computed:a(a(a({},Object(n.c)("seoManager",["seoData"])),{},{contentWrapperClass:function(){return"photo"===this.entity?"seo_manager__content_wrapper seo_manager__content_wrapper__from_photo_manager":"seo_manager__content_wrapper"}},Object(n.c)(["imgFolderPrefix"])),{},{serverSeoDataValue:function(){return this.seoData(this.entity)},noData:function(){return 0===Object.keys(this.serverData).length},getHeader:function(){var t,e,o;if(this.noData)return"";var n=null===(t=this.serverData.category)||void 0===t?void 0:t.name,r=null===(e=this.serverData.product)||void 0===e?void 0:e.name,i=null===(o=this.serverData.product)||void 0===o?void 0:o.price;return{category:"Категория «".concat(n,"»"),product:"Товар «".concat(r,"» ").concat(i," ₽"),photo:"Фото товара «".concat(r,"» ").concat(i," ₽")}[this.entity]},getHeaderHint:function(){var t,e;if(this.noData)return"";var o=null===(t=this.serverData.product)||void 0===t||null===(e=t.description)||void 0===e?void 0:e.description;return{category:"".concat(""),product:"".concat(o),photo:"".concat(o)}[this.entity]},getDescriptionInputLabel:function(){return{category:"Description страницы этой категории товаров",product:"Description страницы этого товара",photo:"Description страницы этого фото"}[this.entity]},getTitleInputLabel:function(){return{category:"Title страницы этой категории товаров",product:"Title страницы этого товара",photo:"Title страницы этого фото"}[this.entity]},getAltInputLabel:function(){return{category:"",product:"",photo:"Alt-атрибут этого фото"}[this.entity]},getHeaderPhoto:function(){var t;if(this.noData)return"";var e={category:"",product:JSON.parse(this.serverData.product.photo_set)?JSON.parse(this.serverData.product.photo_set)[0]:"",photo:null!==(t=this.localData.photoName)&&void 0!==t?t:""}[this.entity];if(!e)return"";var o="/storage/".concat(this.imgFolderPrefix).concat(this.photoSizeIndex),n="".concat(this.serverData.product.id,"s").concat(this.photoSizeIndex,"-");return'<img alt=""\n                        src="'.concat(o,"/").concat(n).concat(e,'"\n                        class="photo__size').concat(this.photoSizeIndex,' seo_manager__header__photo" />')}}),methods:a(a({},Object(n.b)("seoManager",["closeSeoManager","saveSeoData"])),{},{fitTextareaHeight:function(t){Object(r.a)(t)}}),watch:{serverSeoDataValue:function(t){var e,o,n,r,i,s;if(0!==Object.keys(t).length){this.serverData=a({},t);var c={category:null===(e=t.category)||void 0===e?void 0:e.id,product:null===(o=t.product)||void 0===o?void 0:o.id,photo:null===(n=t.product)||void 0===n?void 0:n.id};this.localData.entityId=c[this.entity],this.localData.pageTitle=null==t||null===(r=t.seo)||void 0===r?void 0:r.page_title,this.localData.pageDescription=null==t||null===(i=t.seo)||void 0===i?void 0:i.page_description,this.localData.imgAlt=null==t||null===(s=t.seo)||void 0===s?void 0:s.alt_text,this.localData.photoName=null==t?void 0:t.photoName}}}},l=o(1),u=Object(l.a)(c,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"seo_manager__screen"},[o("div",{class:t.contentWrapperClass},[o("div",{staticClass:"seo_manager__header",attrs:{title:t.getHeaderHint}},["category"!==t.entity?o("p",{domProps:{innerHTML:t._s(t.getHeaderPhoto)}}):t._e(),t._v(" "),o("h1",[t._v(t._s(t.getHeader))])]),t._v(" "),o("div",{staticClass:"seo_manager__content"},["photo"===t.entity?o("div",[o("label",{staticClass:"seo_manager__input_label"},[t._v(t._s(t.getAltInputLabel))]),t._v(" "),o("textarea",{directives:[{name:"model",rawName:"v-model",value:t.localData.imgAlt,expression:"localData.imgAlt"}],staticClass:"seo_manager__input_textarea seo_manager__input_textarea_alt",attrs:{placeholder:" "},domProps:{value:t.localData.imgAlt},on:{input:[function(e){e.target.composing||t.$set(t.localData,"imgAlt",e.target.value)},function(e){return t.fitTextareaHeight(e)}]}})]):t._e(),t._v(" "),o("label",{staticClass:"seo_manager__input_label"},[t._v(t._s(t.getTitleInputLabel))]),t._v(" "),o("textarea",{directives:[{name:"model",rawName:"v-model",value:t.localData.pageTitle,expression:"localData.pageTitle"}],staticClass:"seo_manager__input_textarea seo_manager__input_textarea_title",attrs:{placeholder:" "},domProps:{value:t.localData.pageTitle},on:{input:[function(e){e.target.composing||t.$set(t.localData,"pageTitle",e.target.value)},function(e){return t.fitTextareaHeight(e)}]}}),t._v(" "),o("label",{staticClass:"seo_manager__input_label"},[t._v(t._s(t.getDescriptionInputLabel))]),t._v(" "),o("textarea",{directives:[{name:"model",rawName:"v-model",value:t.localData.pageDescription,expression:"localData.pageDescription"}],staticClass:"seo_manager__input_textarea seo_manager__input_textarea_description",attrs:{placeholder:" "},domProps:{value:t.localData.pageDescription},on:{input:[function(e){e.target.composing||t.$set(t.localData,"pageDescription",e.target.value)},function(e){return t.fitTextareaHeight(e)}]}})]),t._v(" "),o("div",{staticClass:"seo_manager__button_panel"},[o("button",{staticClass:"seo_manager__save_button",on:{click:function(e){return e.stopPropagation(),t.saveSeoData({entity:t.entity,data:t.localData})}}},[t._v("\n                    Сохранить\n            ")])]),t._v(" "),o("div",{staticClass:"seo_manager__collapse_icon",on:{click:function(e){return t.closeSeoManager()}}},[t._v("\n            ×\n        ")])])])}),[],!1,null,null,null);e.a=u.exports},function(t,e,o){"use strict";o.d(e,"a",(function(){return r}));var n=0;function r(t){if(function(t){return t.target.scrollHeight>t.target.clientHeight}(t)){if(n=t.target.value.length,t.target.clientHeight>500)return;!function(t){t.target.style.height=t.target.scrollHeight+20+"px"}(t)}else(function(t){if(t.target.value.length/n<.85)return n=t.target.value.length,!0;return!1})(t)&&(!function(t){t.target.style=null}(t),setTimeout((function(){r(t)}),10))}},function(t,e,o){"use strict";var n=o(0);function r(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,n)}return o}function i(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?r(Object(o),!0).forEach((function(e){a(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function a(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}var s={name:"ProductsContextMenu",computed:i(i(i({},Object(n.c)("contextMenu",["coordinates","product"])),Object(n.c)("products",["seoData","singleProductFromServer"])),{},{isTrashedProduct:function(){return Boolean(this.product.deleted_at)},hasSeoData:function(){return this.hasSeoData1||this.hasSeoData2},hasSeoData1:function(){var t=this,e=this.seoData.find((function(e){return e.product_id===t.product.id}));return!!e&&(Boolean(e.page_title)||Boolean(e.page_description))},hasSeoData2:function(){if("SingleProduct"!==this.$route.name)return!1;var t=this.singleProductFromServer.product.seo_text;return!!t&&(t.product_id===this.product.id&&(Boolean(t.page_title)||Boolean(t.page_description)))}}),methods:i(i({},Object(n.b)("products",["preDeleteProduct","restoreProduct","showProductEditManager","showProductPhotoManager"])),Object(n.b)("seoManager",["showSeoManager"]))},c=o(1),l=Object(c.a)(s,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"context_menu__wrapper context_menu__wrapper_black",style:t.coordinates},[o("ul",{staticClass:"context_menu__ul"},[o("li",{staticClass:"context_menu__li_header context_menu__li_header_black"},[t._v("\n            «"+t._s(t.product.name)+"»\n        ")]),t._v(" "),t.isTrashedProduct?[o("li",{staticClass:"context_menu__li context_menu__li_black",on:{click:function(e){return t.showProductEditManager(t.product.id)}}},[t._v("\n                Редактировать\n            ")]),t._v(" "),o("li",{staticClass:"context_menu__li context_menu__li_black",staticStyle:{border:"0"},on:{click:function(e){return t.restoreProduct(t.product.id)}}},[t._v("\n                Восстановить товар\n            ")]),t._v(" "),o("li",{staticClass:"context_menu__li context_menu__li_black",staticStyle:{border:"0"},on:{click:function(e){return t.preDeleteProduct(t.product)}}},[t._v("\n                Удалить безвозвратно\n            ")])]:[o("li",{staticClass:"context_menu__li context_menu__li_black",on:{click:function(e){return t.showProductEditManager(t.product.id)}}},[t._v("\n                Редактировать\n            ")]),t._v(" "),o("li",{staticClass:"context_menu__li context_menu__li_black",on:{click:function(e){return t.showProductPhotoManager(t.product)}}},[t._v("\n                Фото-менеджер\n            ")]),t._v(" "),o("li",{staticClass:"context_menu__li context_menu__li_black",on:{click:function(e){return t.showSeoManager({entity:"product",data:{id:t.product.id}})}}},[t.hasSeoData?o("span",{staticClass:"has_data_green",attrs:{title:"уже есть данные"}},[t._v("✔")]):t._e(),t._v("\n                SEO для товара\n            ")]),t._v(" "),o("li",{staticClass:"context_menu__li context_menu__li_black",staticStyle:{border:"0"},on:{click:function(e){return t.preDeleteProduct(t.product)}}},[t._v("\n                Удалить товар\n            ")])]],2)])}),[],!1,null,null,null);e.a=l.exports},function(t,e,o){"use strict";var n=o(0),r=o(4);function i(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,n)}return o}function a(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?i(Object(o),!0).forEach((function(e){s(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function s(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}var c={name:"ProductEditManager",components:{ProductForm:function(){return o.e(2).then(o.bind(null,27))}},data:function(){return{photoSizeIndex:2,saveCmd:!1}},computed:a(a(a({},Object(n.c)("products",["singleProductFromServer"])),Object(n.c)(["imgFolderPrefix"])),{},{noData:function(){var t;return!(null===(t=this.singleProductFromServer)||void 0===t?void 0:t.product)},getHeader:function(){if(this.noData)return"";var t=this.singleProductFromServer.product.name,e=this.singleProductFromServer.product.price;return"Товар «".concat(t,"» ").concat(e," ₽")},getHeaderPhoto:function(){if(this.noData)return"";if(!this.singleProductFromServer.product.photo_set)return"";var t=JSON.parse(this.singleProductFromServer.product.photo_set);if(!t)return"";var e=t[0],o="/storage/".concat(this.imgFolderPrefix).concat(this.photoSizeIndex),n="".concat(this.singleProductFromServer.product.id,"s").concat(this.photoSizeIndex,"-");return'<img alt=""\n                        src="'.concat(o,"/").concat(n).concat(e,'"\n                        class="photo__size').concat(this.photoSizeIndex,' edit_manager__header__photo" />')}}),methods:a(a({},Object(n.b)("products",["closeProductEditManager"])),{},{fitTextareaHeight:function(t){Object(r.a)(t)},save:function(){var t=this;this.saveCmd=!0,setTimeout((function(){t.saveCmd=!1}),100)}})},l=o(1),u=Object(l.a)(c,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"edit_manager__screen"},[o("div",{staticClass:"edit_manager__content_wrapper"},[o("div",{staticClass:"edit_manager__header"},[o("p",{domProps:{innerHTML:t._s(t.getHeaderPhoto)}}),t._v(" "),o("h1",[t._v(t._s(t.getHeader))])]),t._v(" "),o("div",{staticClass:"edit_manager__content pdt20 pdb20"},[o("product-form",{attrs:{action:"edit",saveCmd:t.saveCmd}})],1),t._v(" "),o("div",{staticClass:"edit_manager__button_panel"},[o("button",{staticClass:"edit_manager__save_button",on:{click:function(e){return e.stopPropagation(),t.save()}}},[t._v("\n                Сохранить\n            ")])]),t._v(" "),o("div",{staticClass:"edit_manager__collapse_icon",on:{click:function(e){return t.closeProductEditManager()}}},[t._v("\n            ×\n        ")])])])}),[],!1,null,null,null);e.a=u.exports},,,,,,,,function(t,e,o){"use strict";function n(t){return function(t){if(Array.isArray(t))return r(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return r(t,e);var o=Object.prototype.toString.call(t).slice(8,-1);"Object"===o&&t.constructor&&(o=t.constructor.name);if("Map"===o||"Set"===o)return Array.from(t);if("Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return r(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var o=0,n=new Array(e);o<e;o++)n[o]=t[o];return n}var i={name:"FilesInput",props:["value","owner"],data:function(){return{photos:[]}},methods:{previewFiles:function(){if(0!==this.$refs.photos.files.length&&(this.photos=n(this.$refs.photos.files),this.photos.length>5)){this.$store.dispatch("showInformationDialog","Выбрано файлов больше чем 5,\n                это может сильно замедлить загрузку фото. Рекомендуется загружать не более чем по 5 фото.\n                Следущие фото можно будет добавить после.")}},removePreFile:function(t){this.photos.splice(t,1)},selectFiles:function(){this.$refs.photos.click()}},computed:{graphicSrc:function(){for(var t=[],e=0;e<this.photos.length;e++){var o=this.photos[e];/\.(jpe?g|png|gif|bmp|webp)$/i.test(o.name)&&t.push({url:URL.createObjectURL(o),index:e})}return this.$emit("input",this.photos),t},nonGraphicNames:function(){for(var t=[],e=0;e<this.photos.length;e++){var o=this.photos[e];/\.(jpe?g|png|gif|bmp|webp)$/i.test(o.name)||t.push({name:o.name,index:e}),this.$emit("input",this.photos)}return t},buttonHeader:function(){return this.photos.length>0?"Заменить фото":"Добавить фото"},showPhotoButton:function(){return!("ProductPhotoManager"===this.owner&&this.photos.length>0)}}},a=o(1),s=Object(a.a)(i,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",{staticClass:"photo_preview__container",class:{mt20:t.photos.length>0}},[t._l(t.graphicSrc,(function(e){return o("div",{key:e.index,staticClass:"prePhoto__wrapper"},[o("img",{staticClass:"prePhoto",attrs:{alt:"",src:e.url}}),t._v(" "),o("div",{staticClass:"prePhoto__close_icon",on:{click:function(o){return t.removePreFile(e.index)}}},[t._v("\n                ✖\n            ")])])})),t._v(" "),t._l(t.nonGraphicNames,(function(e){return o("div",{key:e.index,staticClass:"prePhoto__wrapper"},[o("div",{staticClass:"preFile_name",domProps:{innerHTML:t._s(e.name)}}),t._v(" "),o("div",{staticClass:"prePhoto__close_icon prePhoto__close_icon_offset",on:{click:function(o){return t.removePreFile(e.index)}}},[t._v("\n                ✖\n            ")])])}))],2),t._v(" "),o("div",{staticClass:"input_photo__wrapper"},[o("input",{ref:"photos",staticClass:"input_photo",attrs:{type:"file",accept:"image/*",multiple:""},on:{change:function(e){return t.previewFiles()}}}),t._v(" "),t.showPhotoButton?o("button",{staticClass:"button__select_photos mauto",on:{click:function(e){return t.selectFiles()}}},[t._v("\n            "+t._s(t.buttonHeader)+"\n        ")]):t._e()])])}),[],!1,null,null,null);e.a=s.exports},function(t,e,o){"use strict";var n=o(0);function r(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,n)}return o}function i(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?r(Object(o),!0).forEach((function(e){a(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function a(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}var s={name:"PhotoManagerItem",props:["photoName","productId","photoIndex","numberOfPhotos"],data:function(){return{sizeIndex:3}},computed:i(i(i({},Object(n.c)(["imgFolderPrefix"])),{},{photoSrc:function(){return"".concat(this.folderName,"/").concat(this.fileNamePrefix).concat(this.photoName)},folderName:function(){return"/storage/".concat(this.imgFolderPrefix).concat(this.sizeIndex)},fileNamePrefix:function(){return"".concat(this.productId,"s").concat(this.sizeIndex,"-")},imgClass:function(){return"photo__size".concat(this.sizeIndex)},lastPhotoListIndex:function(){return this.numberOfPhotos-1}},Object(n.c)("dragAndDropInAbsDiv",["entity","isDragging","leftByIndex","topByIndex","draggingOccurs"])),{},{draggedEntity:function(){return this.entity},draggedPhotoClass:function(){return{draggedPhoto:this.isDragging(this.photoIndex)&&"Photo"===this.draggedEntity&&this.numberOfPhotos>1}},notDraggedPhotosClass:function(){return{notDraggedPhotos:this.numberOfPhotos<2}},beneathDraggedPhotoClass:function(){return{beneathDraggedPhoto:this.draggingOccurs}}}),methods:i(i({},Object(n.b)("contextMenu",["showContextMenu"])),Object(n.b)("dragAndDropInAbsDiv",["myDragStart","myDragStop"])),mounted:function(){var t=this;this.numberOfPhotos<2||this.$store.dispatch("dragAndDropInAbsDiv/resetCoordinates",{cycleNumber:this.photoIndex,entity:"Photo"}).then((function(){var e=t.$refs.photo.getBoundingClientRect();t.$store.commit("dragAndDropInAbsDiv/addXIntoXCoordinates",{x:e.x,entity:"Photo"}),t.$store.commit("dragAndDropInAbsDiv/addYIntoYCoordinates",{y:e.y,entity:"Photo"})}))}},c=o(1),l=Object(c.a)(s,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"photo_manager__item__wrapper"},[o("div",{ref:"photo",staticClass:"photo_manager__item",class:[t.draggedPhotoClass,t.beneathDraggedPhotoClass,t.notDraggedPhotosClass],style:{left:t.leftByIndex(t.photoIndex),top:t.topByIndex(t.photoIndex)},on:{mousedown:function(e){return e.stopPropagation(),t.myDragStart({index:t.photoIndex,event:e,entity:"Photo"})},mouseup:function(e){return e.stopPropagation(),t.myDragStop({event:e,clickedIndex:t.photoIndex,entity:"Photo"})}}},[o("div",{staticClass:"photo_manager__item__content"},[o("img",{class:t.imgClass,staticStyle:{"pointer-events":"none"},attrs:{alt:"",src:t.photoSrc}})]),t._v(" "),o("span",{staticClass:"context_menu__icon__photo_manager",on:{click:function(e){return e.stopPropagation(),t.showContextMenu({event:e,target:"Photos",data:{productId:t.productId,photoName:t.photoName,currentListIndex:t.photoIndex,lastListIndex:t.lastPhotoListIndex}})}}},[t._v("\n            ⋮\n        ")])])])}),[],!1,null,null,null).exports,u=o(14);function _(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,n)}return o}function p(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?_(Object(o),!0).forEach((function(e){h(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):_(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function h(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}var d={name:"PhotosContextMenu",computed:p(p(p({},Object(n.c)("contextMenu",["coordinates","productId","photoName","currentListIndex","lastListIndex"])),Object(n.c)("products",["photoSeoData"])),{},{hasSeoData:function(){var t=this,e=this.photoSeoData.find((function(e){return e.filename===t.photoName}));return!!e&&(Boolean(e.alt_text)||Boolean(e.page_title)||Boolean(e.page_description))}}),methods:p(p({},Object(n.b)("products",["deletePhoto","rotatePhoto","movePhoto"])),Object(n.b)("seoManager",["showSeoManager"]))},g=Object(c.a)(d,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"context_menu__wrapper context_menu__wrapper_black",style:t.coordinates},[o("ul",{staticClass:"context_menu__ul"},[o("li",{staticClass:"context_menu__li__multiple_black"},[o("span",{staticClass:"context_menu__li__multiple__item_black",on:{click:function(e){return t.rotatePhoto({productId:t.productId,photoName:t.photoName,angle:270})}}},[t._v("\n                    ↻ 90°\n                ")]),t._v(" "),o("span",{staticClass:"context_menu__li__multiple__item_black",on:{click:function(e){return t.rotatePhoto({productId:t.productId,photoName:t.photoName,angle:180})}}},[t._v("\n                    180°\n                ")]),t._v(" "),o("span",{staticClass:"context_menu__li__multiple__item_black",on:{click:function(e){return t.rotatePhoto({productId:t.productId,photoName:t.photoName,angle:90})}}},[t._v("\n                    90°↺\n                ")])]),t._v(" "),t.currentListIndex>0?o("li",{staticClass:"context_menu__li context_menu__li_black",on:{click:function(e){return t.movePhoto({productId:t.productId,photoName:t.photoName,to:"first"})}}},[t._v("\n            Сделать главным\n        ")]):t._e(),t._v(" "),0!==t.lastListIndex?o("li",{staticClass:"context_menu__li__multiple_black"},[t._v("\n            Сдвинуть\n            "),t.currentListIndex>0?o("span",{staticClass:"context_menu__li__multiple__item_black",attrs:{title:"влево (вверх)"},on:{click:function(e){return t.movePhoto({productId:t.productId,photoName:t.photoName,to:"up"})}}},[t._v("\n                ← ↑\n            ")]):t._e(),t._v(" "),t.currentListIndex<t.lastListIndex?o("span",{staticClass:"context_menu__li__multiple__item_black",attrs:{title:"вправо (вниз)"},on:{click:function(e){return t.movePhoto({productId:t.productId,photoName:t.photoName,to:"down"})}}},[t._v("\n                ↓ →\n            ")]):t._e()]):t._e(),t._v(" "),o("li",{staticClass:"context_menu__li context_menu__li_black",on:{click:function(e){return t.showSeoManager({entity:"photo",data:{productId:t.productId,photoName:t.photoName}})}}},[t.hasSeoData?o("span",{staticClass:"has_data_green",attrs:{title:"уже есть данные"}},[t._v("✔")]):t._e(),t._v("\n            SEO для фото\n        ")]),t._v(" "),o("li",{staticClass:"context_menu__li context_menu__li_black",staticStyle:{border:"0"},on:{click:function(e){return t.deletePhoto({productId:t.productId,photoName:t.photoName})}}},[t._v("\n            Удалить фото\n        ")])])])}),[],!1,null,null,null).exports,m=o(3);function f(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,n)}return o}function v(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?f(Object(o),!0).forEach((function(e){P(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):f(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function P(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}var b={name:"ProductsPhotoManagement",components:{PhotoManagerItem:l,FilesInput:u.a,PhotosContextMenu:g,SeoManager:m.a},data:function(){return{product:{id:0,name:"",price:"",photo_set:[]},photos:[],resetFilesInputKey:0}},computed:v(v(v(v(v({},Object(n.c)("products",["singleProductFromServer"])),Object(n.c)(["imgFolderPrefix"])),Object(n.c)("contextMenu",["showContextMenu"])),Object(n.c)("seoManager",["showSeoManager"])),{},{showButtonsPanel:function(){return this.photos.length>0}}),methods:v(v({},Object(n.b)("products",["closeProductPhotoManager","addPhotos"])),{},{resetPhotos:function(){this.photos=[].concat(),this.resetFilesInputKey++},sendPhotos:function(){var t=this;this.$store.dispatch("products/addPhotos",{productId:this.product.id,photos:this.photos}).then((function(){return t.resetPhotos()}))}},Object(n.b)("dragAndDropInAbsDiv",["myDragMove","myDragStop"])),watch:{singleProductFromServer:function(t){if(t){var e=JSON.parse(t.product.parameters);this.product={id:t.product.id,category_id:t.product.category_id,name:t.product.name,price:e.price,photo_set:JSON.parse(t.product.photo_set)}}}}},O=Object(c.a)(b,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"photo_manager__screen",on:{mousemove:function(e){return e.stopPropagation(),t.myDragMove({event:e,entity:"Product"})},mouseup:function(e){return e.stopPropagation(),t.myDragStop({event:e,clickedIndex:-1,entity:"Photo"})}}},[o("div",{staticClass:"photo_manager__content_wrapper"},[o("div",{staticClass:"photo_manager__top_row_container_for_collapse_icon"},[o("div",{staticClass:"photo_manager__collapse_icon photo_manager__collapse_icon_main",on:{click:function(e){return t.closeProductPhotoManager()}}},[t._v("\n                ×\n            ")])]),t._v(" "),o("div",{staticClass:"photo_manager__content"},[o("h1",[t._v("Фото товара «"+t._s(t.product.name)+"» "+t._s(t.product.price)+" ₽")]),t._v(" "),o("div",{staticClass:"photo_manager__photos"},[t._l(t.product.photo_set,(function(e,n){return o("photo-manager-item",{key:e,attrs:{photoName:e,productId:t.product.id,numberOfPhotos:t.product.photo_set.length,photoIndex:n}})})),t._v(" "),o("transition",{attrs:{name:"fade"}},[t.showContextMenu("Photos")?o("photos-context-menu"):t._e()],1),t._v(" "),o("transition",{attrs:{name:"fade"}},[t.showSeoManager?o("seo-manager",{attrs:{entity:"photo"}}):t._e()],1)],2)]),t._v(" "),o("div",{staticClass:"photo_input__panel"},[o("files-input",{key:t.resetFilesInputKey,attrs:{owner:"ProductPhotoManager"},model:{value:t.photos,callback:function(e){t.photos=e},expression:"photos"}}),t._v(" "),t.showButtonsPanel?o("div",{staticClass:"send_cancel_buttons__panel"},[o("button",{staticClass:"button__save_product",on:{click:function(e){return e.stopPropagation(),t.sendPhotos()}}},[t._v("\n                    Добавить\n                ")]),t._v(" "),o("div",{staticClass:"photo_manager__collapse_icon photo_manager__collapse_icon_for_photo_input_panel",on:{click:function(e){return t.resetPhotos()}}},[t._v("\n                    ×\n                ")])]):t._e()],1)])])}),[],!1,null,null,null);e.a=O.exports},function(t,e,o){"use strict";var n={name:"SingleProductCategoryItem",props:["category","index","entityName"]},r=o(1),i=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("span",[t.index>0?o("span",[t._v(",  ")]):t._e(),t._v(" "),o("router-link",{staticClass:"single_product__category_item__link",attrs:{to:{name:"ProductsByCategory",params:{categoryEntity:t.entityName,slug:t.category.slug,categoryId:t.category.id,categoryName:t.category.name}}}},[t._v("\n        "+t._s(t.category.name)+"\n    ")])],1)}),[],!1,null,null,null).exports,a={noData:function(){var t;return!(null===(t=this.singleProductFromServer)||void 0===t?void 0:t.product)},getHeader:function(){return this.noData?"":this.singleProductFromServer.product.name},getMainPhoto:function(){if(this.noData)return"";var t=this.singleProductFromServer.product,e=JSON.parse(t.photo_set);if(!e)return"";var o="/storage/".concat(this.imgFolderPrefix,"5"),n="".concat(t.id,"s5-"),r="photo__size".concat(this.mainPhotoSizeIndex),i=e[this.indexOfMainPhoto];return'<img alt=""\n                    src="'.concat(o,"/").concat(n).concat(i,'"\n                    class="').concat(r,'" />')},numberOfPhotos:function(){if(this.noData)return 0;var t=this.singleProductFromServer.product,e=JSON.parse(t.photo_set);return e?e.length:0},getSmallPhotos:function(){if(this.noData)return"";var t=this.singleProductFromServer.product,e=JSON.parse(t.photo_set);if(!e)return"";var o="/storage/".concat(this.imgFolderPrefix,"2"),n="".concat(t.id,"s2-");return e.map((function(t,e){return'<img data-photoindex="'.concat(e,'" alt="" src="').concat(o,"/").concat(n).concat(t,'" class="photo__size2" />')})).join("")},getAllBigPhotos:function(){if(this.noData)return"";var t=this.singleProductFromServer.product,e=JSON.parse(t.photo_set);if(!e)return"";var o="/storage/".concat(this.imgFolderPrefix,"5"),n="".concat(t.id,"s5-");return e.map((function(t,e){return'<img alt="" src="'.concat(o,"/").concat(n).concat(t,'" class="photo__size4" />')})).join("")},getPrice:function(){var t;if(this.noData)return"";var e=null!==(t=JSON.parse(this.singleProductFromServer.product.parameters).price)&&void 0!==t?t:"";return e?e+" ₽":""},getCategories:function(){return this.noData?"":JSON.parse(this.singleProductFromServer.product.parameters).categories},getMaterials:function(){return this.noData?"":JSON.parse(this.singleProductFromServer.product.parameters).materials},getColors:function(){return this.noData?"":JSON.parse(this.singleProductFromServer.product.parameters).colors},getDescription:function(){return this.noData?"":this.singleProductFromServer.product.description.description}},s=o(0),c={notScrolledAllTheWayToTheTop:function(){var t;return!(null==this||null===(t=this.$refs)||void 0===t||!t.smallPhotoDiv)&&this.$refs.smallPhotoDiv.scrollTop>5},notScrolledAllTheWayToTheBottom:function(){var t;if(null==this||null===(t=this.$refs)||void 0===t||!t.smallPhotoDiv)return!1;var e=this.$refs.smallPhotoDiv.scrollTop,o=this.$refs.smallPhotoDiv.clientHeight;return this.$refs.smallPhotoDiv.scrollHeight-(e+o)>10},scrollSmallPhoto:function(t,e){this._scrollSmallPhoto(t,0,e)},_scrollSmallPhoto:function(t,e,o){var n=this;if(!(e>t)){"down"===o?this.$refs.smallPhotoDiv.scrollTop-=3:this.$refs.smallPhotoDiv.scrollTop+=3,e+=3,setTimeout((function(){n._scrollSmallPhoto(t,e,o)}),1)}}},l={scrollBigPhotos:function(t){var e=this.$refs.mobileMainPhotoDiv.getBoundingClientRect(),o=e.right-e.left;this.$refs.mobileMainPhotoDiv.scrollLeft=this.indexOfMainPhoto*o;var n=this.$refs.mobileMainPhotoDiv.scrollLeft;this.indexOfMainPhoto+=t,t<0&&this.indexOfMainPhoto<0?this.indexOfMainPhoto=0:t>0&&this.indexOfMainPhoto>=this.numberOfPhotos?this.indexOfMainPhoto=this.numberOfPhotos-1:this._scrollBigPhotos(t,n,o)},_scrollBigPhotos:function(t,e,o){var n=this;if(Math.abs(this.$refs.mobileMainPhotoDiv.scrollLeft-e)>o-10)this.$refs.mobileMainPhotoDiv.scrollLeft=this.indexOfMainPhoto*o;else{this.$refs.mobileMainPhotoDiv.scrollLeft+=10*t,setTimeout((function(){n._scrollBigPhotos(t,e,o)}),1)}}};function u(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,n)}return o}function _(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?u(Object(o),!0).forEach((function(e){p(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):u(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function p(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}var h={name:"SingleProduct",props:["from"],components:{SingleProductCategoryItem:i},data:function(){return{indexOfMainPhoto:0,mainPhotoSizeIndex:4,mainPhotoRatio:0}},computed:_(_(_(_({},Object(s.c)("products",["singleProductFromServer"])),Object(s.c)(["imgFolderPrefix"])),a),{},{cssPositionOfContextIcon:function(){return"quickViewManager"===this.from?"absolute":"fixed"},showLeftScrollButton:function(){return this.indexOfMainPhoto>0},showRightScrollButton:function(){return this.indexOfMainPhoto<this.numberOfPhotos-1}}),methods:_(_(_(_(_({},Object(s.b)("contextMenu",["showContextMenu"])),c),{startViewLargePhoto:function(){if(this.$refs.mainPhotoDiv){var t=this.$refs.mainPhotoDiv.getBoundingClientRect();this.mainPhotoRatio=1600/(t.right-t.left),this.mainPhotoSizeIndex=5}},viewLargePhoto:function(t){if(this.$refs.mainPhotoDiv){var e=this.$refs.mainPhotoDiv.getBoundingClientRect(),o=t.x-e.left,n=t.y-e.top;this.$refs.mainPhotoDiv.scrollLeft=o*this.mainPhotoRatio/1.5,this.$refs.mainPhotoDiv.scrollTop=n*this.mainPhotoRatio/1.5}},showInitialPhoto:function(){this.mainPhotoSizeIndex=4,this.$refs.mainPhotoDiv.scrollLeft=0,this.$refs.mainPhotoDiv.scrollTop=0}}),l),{},{changeMainPhotoBySmallPhoto:function(t){"photo__size2"===t.target.className&&(this.indexOfMainPhoto=Number(t.target.dataset.photoindex))},showNextBigPhoto:function(t){this.scrollBigPhotos(t)}}),mounted:function(){"singleProductPage"===this.from&&this.$store.dispatch("products/loadSingleProduct",this.$route.params.id)}},d=Object(r.a)(h,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"single_product__content"},[t.numberOfPhotos>0?o("div",{staticClass:"single_product__all_photo_wrapper"},[o("div",{staticClass:"single_product__small_photos__wrapper"},[o("div",{directives:[{name:"show",rawName:"v-show",value:t.notScrolledAllTheWayToTheTop()&&t.numberOfPhotos>5,expression:"notScrolledAllTheWayToTheTop() && numberOfPhotos > 5"}],staticClass:"single_product__small_photos__scroll_button single_product__small_photos__scroll_button_top",on:{click:function(e){return t.scrollSmallPhoto(300,"down")}}},[o("div",{staticClass:"single_product__small_photos__scroll_button_top__content"})]),t._v(" "),o("div",{ref:"smallPhotoDiv",staticClass:"single_product__small_photos",domProps:{innerHTML:t._s(t.getSmallPhotos)},on:{mouseover:function(e){return t.changeMainPhotoBySmallPhoto(e)}}}),t._v(" "),t.numberOfPhotos>5&&(t.notScrolledAllTheWayToTheBottom()||0===t.indexOfMainPhoto)?o("div",{staticClass:"single_product__small_photos__scroll_button single_product__small_photos__scroll_button_bottom",on:{click:function(e){return t.scrollSmallPhoto(300,"up")}}},[o("div",{staticClass:"single_product__small_photos__scroll_button_bottom__content"})]):t._e()]),t._v(" "),o("div",{staticClass:"single_product__big_photo__wrapper"},[o("div",{ref:"mainPhotoDiv",staticClass:"single_product__big_photo__content",attrs:{"data-big-photo-version":"desktop"},domProps:{innerHTML:t._s(t.getMainPhoto)},on:{mouseover:function(e){return t.startViewLargePhoto()},mousemove:function(e){return t.viewLargePhoto(e)},mouseleave:function(e){return t.showInitialPhoto()}}}),t._v(" "),o("div",{ref:"mobileMainPhotoDiv",staticClass:"single_product__big_photo__content_mobile",attrs:{"data-big-photo-version":"mobile"},domProps:{innerHTML:t._s(t.getAllBigPhotos)}}),t._v(" "),o("div",{directives:[{name:"show",rawName:"v-show",value:t.showLeftScrollButton,expression:"showLeftScrollButton"}],staticClass:"single_product__big_photo__scroll_button single_product__big_photo__scroll_button_left",on:{click:function(e){return t.showNextBigPhoto(-1)}}},[o("div",{staticClass:"single_product__big_photo__scroll_button_left__content"})]),t._v(" "),o("div",{directives:[{name:"show",rawName:"v-show",value:t.showRightScrollButton,expression:"showRightScrollButton"}],staticClass:"single_product__big_photo__scroll_button single_product__big_photo__scroll_button_right",on:{click:function(e){return t.showNextBigPhoto(1)}}},[o("div",{staticClass:"single_product__big_photo__scroll_button_right__content"})]),t._v(" "),o("div",{directives:[{name:"show",rawName:"v-show",value:t.numberOfPhotos>1,expression:"numberOfPhotos > 1"}],staticClass:"single_product__big_photo__photo_number_indicator"},[t._v("\n                "+t._s(t.indexOfMainPhoto+1)+"/"+t._s(t.numberOfPhotos)+"\n            ")])])]):t._e(),t._v(" "),o("div",{staticClass:"single_product__top_characteristics",class:{single_product__top_characteristics__margin_left:t.numberOfPhotos>0}},[o("h1",{staticClass:"single_product__h1"},[t._v("\n            "+t._s(t.getHeader)+"\n        ")]),t._v(" "),o("div",{staticClass:"single_product__price"},[t._v("\n            "+t._s(t.getPrice)+"\n        ")]),t._v(" "),o("div",{staticClass:"single_product__categories"},[t._v("\n            Категория:\n            "),t._l(t.getCategories,(function(t,e){return o("single-product-category-item",{key:t.id,attrs:{category:t,index:e,"entity-name":"category"}})}))],2),t._v(" "),o("div",{staticClass:"single_product__categories"},[t._v("\n            Материал:\n            "),t._l(t.getMaterials,(function(t,e){return o("single-product-category-item",{key:t.id,attrs:{category:t,index:e,"entity-name":"material"}})}))],2),t._v(" "),o("div",{staticClass:"single_product__categories"},[t._v("\n            Цвет:\n            "),t._l(t.getColors,(function(t,e){return o("single-product-category-item",{key:t.id,attrs:{category:t,index:e,"entity-name":"color"}})}))],2),t._v(" "),o("div",{staticClass:"single_product__description"},[t._v("\n            "+t._s(t.getDescription)+"\n        ")])]),t._v(" "),o("span",{staticClass:"context_menu__icon__single_product",style:{position:t.cssPositionOfContextIcon},on:{click:function(e){return e.stopPropagation(),t.showContextMenu({event:e,target:"Products",data:{product:t.singleProductFromServer.product}})}}},[t._v("\n        ✎\n    ")])])}),[],!1,null,null,null);e.a=d.exports}]]);