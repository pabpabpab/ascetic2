(window.webpackJsonp=window.webpackJsonp||[]).push([[5,8,11,12],[,,,,function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=0;function o(t){if(function(t){return t.target.scrollHeight>t.target.clientHeight}(t)){if(r=t.target.value.length,t.target.clientHeight>500)return;!function(t){t.target.style.height=t.target.scrollHeight+20+"px"}(t)}else(function(t){if(t.target.value.length/r<.85)return r=t.target.value.length,!0;return!1})(t)&&(!function(t){t.target.style=null}(t),setTimeout((function(){o(t)}),10))}},function(t,e,n){"use strict";var r=n(0);function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var s={name:"ProductsContextMenu",computed:i(i(i({},Object(r.c)("contextMenu",["coordinates","product"])),Object(r.c)("products",["seoData","singleProductFromServer"])),{},{isTrashedProduct:function(){return Boolean(this.product.deleted_at)},hasSeoData:function(){return this.hasSeoData1||this.hasSeoData2},hasSeoData1:function(){var t=this,e=this.seoData.find((function(e){return e.product_id===t.product.id}));return!!e&&(Boolean(e.page_title)||Boolean(e.page_description))},hasSeoData2:function(){if("SingleProduct"!==this.$route.name)return!1;var t=this.singleProductFromServer.product.seo_text;return!!t&&(t.product_id===this.product.id&&(Boolean(t.page_title)||Boolean(t.page_description)))}}),methods:i(i({},Object(r.b)("products",["preDeleteProduct","restoreProduct","showProductEditManager","showProductPhotoManager"])),Object(r.b)("seoManager",["showSeoManager"]))},c=n(1),u=Object(c.a)(s,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"context_menu__wrapper context_menu__wrapper_black",style:t.coordinates},[n("ul",{staticClass:"context_menu__ul"},[n("li",{staticClass:"context_menu__li_header context_menu__li_header_black"},[t._v("\n            «"+t._s(t.product.name)+"»\n        ")]),t._v(" "),t.isTrashedProduct?[n("li",{staticClass:"context_menu__li context_menu__li_black",on:{click:function(e){return t.showProductEditManager(t.product.id)}}},[t._v("\n                Редактировать\n            ")]),t._v(" "),n("li",{staticClass:"context_menu__li context_menu__li_black",staticStyle:{border:"0"},on:{click:function(e){return t.restoreProduct(t.product.id)}}},[t._v("\n                Восстановить товар\n            ")]),t._v(" "),n("li",{staticClass:"context_menu__li context_menu__li_black",staticStyle:{border:"0"},on:{click:function(e){return t.preDeleteProduct(t.product)}}},[t._v("\n                Удалить безвозвратно\n            ")])]:[n("li",{staticClass:"context_menu__li context_menu__li_black",on:{click:function(e){return t.showProductEditManager(t.product.id)}}},[t._v("\n                Редактировать\n            ")]),t._v(" "),n("li",{staticClass:"context_menu__li context_menu__li_black",on:{click:function(e){return t.showProductPhotoManager(t.product)}}},[t._v("\n                Фото-менеджер\n            ")]),t._v(" "),n("li",{staticClass:"context_menu__li context_menu__li_black",on:{click:function(e){return t.showSeoManager({entity:"product",data:{id:t.product.id}})}}},[t.hasSeoData?n("span",{staticClass:"has_data_green",attrs:{title:"уже есть данные"}},[t._v("✔")]):t._e(),t._v("\n                SEO для товара\n            ")]),t._v(" "),n("li",{staticClass:"context_menu__li context_menu__li_black",staticStyle:{border:"0"},on:{click:function(e){return t.preDeleteProduct(t.product)}}},[t._v("\n                Удалить товар\n            ")])]],2)])}),[],!1,null,null,null);e.a=u.exports},function(t,e,n){"use strict";var r=n(0),o=n(4);function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){s(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var c={name:"ProductEditManager",components:{ProductForm:function(){return n.e(2).then(n.bind(null,27))}},data:function(){return{photoSizeIndex:2,saveCmd:!1}},computed:a(a(a({},Object(r.c)("products",["singleProductFromServer"])),Object(r.c)(["imgFolderPrefix"])),{},{noData:function(){var t;return!(null===(t=this.singleProductFromServer)||void 0===t?void 0:t.product)},getHeader:function(){if(this.noData)return"";var t=this.singleProductFromServer.product.name,e=this.singleProductFromServer.product.price;return"Товар «".concat(t,"» ").concat(e," ₽")},getHeaderPhoto:function(){if(this.noData)return"";if(!this.singleProductFromServer.product.photo_set)return"";var t=JSON.parse(this.singleProductFromServer.product.photo_set);if(!t)return"";var e=t[0],n="/storage/".concat(this.imgFolderPrefix).concat(this.photoSizeIndex),r="".concat(this.singleProductFromServer.product.id,"s").concat(this.photoSizeIndex,"-");return'<img alt=""\n                        src="'.concat(n,"/").concat(r).concat(e,'"\n                        class="photo__size').concat(this.photoSizeIndex,' edit_manager__header__photo" />')}}),methods:a(a({},Object(r.b)("products",["closeProductEditManager"])),{},{fitTextareaHeight:function(t){Object(o.a)(t)},save:function(){var t=this;this.saveCmd=!0,setTimeout((function(){t.saveCmd=!1}),100)}})},u=n(1),l=Object(u.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"edit_manager__screen"},[n("div",{staticClass:"edit_manager__content_wrapper"},[n("div",{staticClass:"edit_manager__header"},[n("p",{domProps:{innerHTML:t._s(t.getHeaderPhoto)}}),t._v(" "),n("h1",[t._v(t._s(t.getHeader))])]),t._v(" "),n("div",{staticClass:"edit_manager__content pdt20 pdb20"},[n("product-form",{attrs:{action:"edit",saveCmd:t.saveCmd}})],1),t._v(" "),n("div",{staticClass:"edit_manager__button_panel"},[n("button",{staticClass:"edit_manager__save_button",on:{click:function(e){return e.stopPropagation(),t.save()}}},[t._v("\n                Сохранить\n            ")])]),t._v(" "),n("div",{staticClass:"edit_manager__collapse_icon",on:{click:function(e){return t.closeProductEditManager()}}},[t._v("\n            ×\n        ")])])])}),[],!1,null,null,null);e.a=l.exports},,function(t,e,n){"use strict";var r=n(0);function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var s={name:"QuantityPerPageOfPagination",props:["entity"],data:function(){return{customQuantityPerPage:0}},methods:i({},Object(r.b)(["divideIntoPages"])),computed:i({},Object(r.c)("pagination",["quantityPerPage"])),watch:{quantityPerPage:function(){this.customQuantityPerPage=this.quantityPerPage(this.entity)}},mounted:function(){this.customQuantityPerPage=this.quantityPerPage(this.entity)}},c=n(1),u=Object(c.a)(s,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"quantity_per_page__wrapper"},[n("p",{staticClass:"quantity_per_page__label"},[t._v("Показывать по")]),t._v(" "),n("select",{directives:[{name:"model",rawName:"v-model",value:t.customQuantityPerPage,expression:"customQuantityPerPage"}],staticClass:"quantity_per_page__select_input",attrs:{id:"qpp"},on:{change:[function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.customQuantityPerPage=e.target.multiple?n:n[0]},function(e){return t.divideIntoPages({entity:t.entity,customQuantityPerPage:t.customQuantityPerPage})}]}},[n("option",{attrs:{value:"1"}},[t._v("1")]),t._v(" "),n("option",{attrs:{value:"2"}},[t._v("2")]),t._v(" "),n("option",{attrs:{value:"3"}},[t._v("3")]),t._v(" "),n("option",{attrs:{value:"4"}},[t._v("4")]),t._v(" "),n("option",{attrs:{value:"5"}},[t._v("5")]),t._v(" "),n("option",{attrs:{value:"6"}},[t._v("6")]),t._v(" "),n("option",{attrs:{value:"8"}},[t._v("8")]),t._v(" "),n("option",{attrs:{value:"9"}},[t._v("9")]),t._v(" "),n("option",{attrs:{value:"10"}},[t._v("10")]),t._v(" "),n("option",{attrs:{value:"15"}},[t._v("15")]),t._v(" "),n("option",{attrs:{value:"30"}},[t._v("30")]),t._v(" "),n("option",{attrs:{value:"50"}},[t._v("50")]),t._v(" "),n("option",{attrs:{value:"100"}},[t._v("100")]),t._v(" "),n("option",{attrs:{value:"300"}},[t._v("300")]),t._v(" "),n("option",{attrs:{value:"1000000"}},[t._v("Все")])])])}),[],!1,null,null,null);e.a=u.exports},function(t,e,n){"use strict";n.r(e);var r={name:"ReloadIcon",computed:{title:function(){return"Обновить ".concat({Products:"товары",TrashedProducts:"удаленные товары",Users:"пользователей",Categories:"категории"}[this.$route.name]," с сервера")},showReloadIcon:function(){return["Products","TrashedProducts","Users","Categories"].includes(this.$route.name)}},methods:{reload:function(){var t={Products:"products/showProductsWithReload",TrashedProducts:"products/showTrashedProductsWithReload",Users:"users/showUsersWithReload",Categories:"categories/showCategoriesWithReload"}[this.$route.name];t&&this.$store.dispatch(t,this.$route)}}},o=n(1),i=Object(o.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return this.showReloadIcon?e("span",{staticClass:"reload_icon",on:{click:this.reload}},[e("span",{staticClass:"icon_with_hint icon_with_right_hint reload_icon__content",attrs:{"data-title":this.title}},[this._v("\n        ↻\n    ")])]):this._e()}),[],!1,null,null,null);e.default=i.exports},function(t,e,n){"use strict";n.r(e);var r=n(0);function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var s={name:"Pagination",components:{QuantityPerPageOfPagination:n(8).a},props:["entity"],data:function(){return{customQuantityPerPage:0}},methods:i(i({},Object(r.b)("pagination",["showPageByClick"])),Object(r.b)(["divideIntoPages"])),computed:i(i({},Object(r.c)("pagination",["currentPageIndex","currentPageNumber","customized","customizedLength","paginationLinksShot","paginationLinkCssArr","quantityPerPage","wing","minimumPagesForComplexPagination"])),{},{aLotOfPages:function(){return!(this.customizedLength(this.entity)<this.minimumPagesForComplexPagination(this.entity))&&this.customizedLength(this.entity)>3*this.wing},showFirstPageWithDots:function(){return this.aLotOfPages&&this.currentPageNumber(this.entity)>this.wing+2},showLastPageWithDots:function(){return this.aLotOfPages&&this.currentPageNumber(this.entity)+(this.wing+1)<this.customizedLength(this.entity)},containerClass:function(){return this.aLotOfPages?"pagination_table pagination_width_outer":"pagination_table"},innerContainerClass:function(){return this.aLotOfPages?"pagination_numbers_container pagination_width_inner":"pagination_numbers_container"}})},c=n(1),u=Object(c.a)(s,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{staticClass:"pagination_nav",attrs:{"data-pagination":"desktop"}},[n("quantity-per-page-of-pagination",{key:Number(t.quantityPerPage),attrs:{entity:t.entity}}),t._v(" "),t.customizedLength(t.entity)>1?n("table",{class:t.containerClass},[n("tr",[n("td",[n("a",{staticClass:"pagination_link pagination_link__arrow_left",attrs:{href:"#"},on:{click:function(e){e.preventDefault(),t.showPageByClick({entity:t.entity,pageIndex:t.currentPageIndex(t.entity)-1})}}})]),t._v(" "),n("td",{class:t.innerContainerClass},[t.showFirstPageWithDots?n("div",{staticClass:"pagination_left"},[n("a",{staticClass:"pagination_link",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.showPageByClick({entity:t.entity,pageIndex:0})}}},[t._v("\n                    1\n                ")]),t._v(" "),n("span",{staticClass:"pagination_dots"},[t._v("\n                    ...\n                ")])]):t._e(),t._v(" "),n("div",{staticClass:"pagination_middle"},t._l(t.paginationLinksShot(t.entity),(function(e){return n("a",{key:e,class:t.paginationLinkCssArr(t.entity)[e-1],attrs:{href:"#"},on:{click:function(n){return n.preventDefault(),t.showPageByClick({entity:t.entity,pageIndex:e-1})}}},[t._v("\n                    "+t._s(e)+"\n                ")])})),0),t._v(" "),t.showLastPageWithDots?n("div",{staticClass:"pagination_right"},[n("span",{staticClass:"pagination_dots"},[t._v("\n                    ...\n                ")]),t._v(" "),t.showLastPageWithDots?n("a",{staticClass:"pagination_link",attrs:{href:"#"},on:{click:function(e){e.preventDefault(),t.showPageByClick({entity:t.entity,pageIndex:t.customizedLength(t.entity)-1})}}},[t._v("\n                    "+t._s(t.customizedLength(t.entity))+"\n                ")]):t._e()]):t._e()]),t._v(" "),n("td",[n("a",{staticClass:"pagination_link pagination_link__arrow_right",attrs:{href:"#"},on:{click:function(e){e.preventDefault(),t.showPageByClick({entity:t.entity,pageIndex:t.currentPageIndex(t.entity)+1})}}})])])]):t._e()],1)}),[],!1,null,null,null);e.default=u.exports},function(t,e,n){"use strict";e.a={xPerPhoto:function(){return this.numberOfPhotos<2?0:250/this.numberOfPhotos},getMainPhoto:function(){if(!this.product.photo_set)return"";var t=JSON.parse(this.product.photo_set);if(!t)return"";var e="/storage/".concat(this.imgFolderPrefix,"3"),n="".concat(this.product.id,"s3-"),r=t[this.indexOfMainPhoto];return'<img alt=""\n                    src="'.concat(e,"/").concat(n).concat(r,'"\n                    class="').concat("photo__size3",'" />')},getPhotos:function(){if(!this.product.photo_set)return"";var t=JSON.parse(this.product.photo_set);if(!t)return"";var e="/storage/".concat(this.imgFolderPrefix,"3"),n="".concat(this.product.id,"s3-");return t.map((function(t,r){return'<img data-photoindex="'.concat(r,'" alt="" src="').concat(e,"/").concat(n).concat(t,'" class="photo__size1" />')})).join("")},numberOfPhotos:function(){if(!this.product.photo_set)return 0;var t=JSON.parse(this.product.photo_set);return t?t.length:0},getPrice:function(){var t,e=null!==(t=JSON.parse(this.product.parameters).price)&&void 0!==t?t:"";return e?e+" ₽":""},getCategories:function(){return JSON.parse(this.product.parameters).categories.map((function(t){return"".concat(t.name)})).join(", ")},getMaterials:function(){return JSON.parse(this.product.parameters).materials.map((function(t){return"".concat(t.name)})).join(", ")},getColors:function(){return JSON.parse(this.product.parameters).colors.map((function(t){return"".concat(t.name)})).join(", ")}}},function(t,e,n){"use strict";e.a={changeMainPhoto:function(t){if(!(this.draggingOccurs||this.numberOfPhotos<2||0===this.xPerPhoto)){var e=this.$refs.mainPhotoDiv.getBoundingClientRect(),n=t.x-e.x;n<0||(this.indexOfMainPhoto=Math.ceil(n/this.xPerPhoto)-1)}},changeMainPhotoBySmallPhoto:function(t){this.draggingOccurs||this.numberOfPhotos<2||"photo__size1"===t.target.className&&(this.indexOfMainPhoto=Number(t.target.dataset.photoindex))},setFirstMainPhoto:function(){this.indexOfMainPhoto=0}}},function(t,e,n){"use strict";var r=n(0);function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var a={name:"ProductListHeader",components:{ReloadIcon:n(9).default},computed:function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({},Object(r.c)("products",["listHeader"]))},s=n(1),c=Object(s.a)(a,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"products_header"},[e("reload-icon"),this._v(" "),e("h1",{staticClass:"pd0 mb0 mauto"},[this._v(" "+this._s(this.listHeader))])],1)}),[],!1,null,null,null);e.a=c.exports},,,,,,,,,,,,,,,function(t,e,n){"use strict";n.r(e);var r=n(13),o=n(0),i=n(11),a=n(12);function s(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?s(Object(n),!0).forEach((function(e){u(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var l={name:"TrashedProductItem",props:["product","index"],data:function(){return{indexOfMainPhoto:0}},computed:c(c({},Object(o.c)(["imgFolderPrefix"])),i.a),methods:c(c({},Object(o.b)("contextMenu",["showContextMenu"])),a.a)},d=n(1),p=Object(d.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"product_item"},[n("div",{staticClass:"product_item__content"},[t.numberOfPhotos>0?[n("div",{ref:"mainPhotoDiv",domProps:{innerHTML:t._s(t.getMainPhoto)},on:{mousemove:function(e){return t.changeMainPhoto(e)},mouseout:function(e){return t.setFirstMainPhoto()}}})]:[n("div",{ref:"mainPhotoDiv",staticClass:"product_item__no_photo"},[t._v("\n                НЕТ ФОТО\n            ")])],t._v(" "),t.numberOfPhotos>1?n("div",{staticClass:"product_item__photo_indicator"},t._l(t.numberOfPhotos,(function(e){return n("span",{key:e,staticClass:"product_item__photo_indicator_item",class:{product_item__photo_indicator_inactive:t.indexOfMainPhoto+1!==e,product_item__photo_indicator_active:t.indexOfMainPhoto+1===e}})})),0):t._e(),t._v(" "),n("div",{staticClass:"product_item__name"},[t._v("\n            "+t._s(t.product.name)+"\n        ")]),t._v(" "),n("div",{staticClass:"product_item__price"},[t._v("\n            "+t._s(t.getPrice)+"\n        ")]),t._v(" "),n("div",{staticClass:"product_item__small_photos",domProps:{innerHTML:t._s(t.getPhotos)},on:{mouseover:function(e){return t.changeMainPhotoBySmallPhoto(e)},mouseout:function(e){return t.setFirstMainPhoto()}}}),t._v(" "),n("div",{staticClass:"product_item__bottom_info__relative_wrapper"},[n("div",{staticClass:"product_item__bottom_info__absolute"},[n("p",{staticClass:"product_item__bottom_info__text",attrs:{title:"Категория"},domProps:{innerHTML:t._s(t.getCategories)}}),t._v(" "),n("p",{staticClass:"product_item__bottom_info__text",attrs:{title:"Материал"},domProps:{innerHTML:t._s(t.getMaterials)}}),t._v(" "),n("p",{staticClass:"product_item__bottom_info__text",attrs:{title:"Цвет"},domProps:{innerHTML:t._s(t.getColors)}})])])],2),t._v(" "),n("span",{staticClass:"context_menu__icon__product",on:{click:function(e){return e.stopPropagation(),t.showContextMenu({event:e,target:"Products",data:{product:t.product}})}}},[t._v("\n        ⋮\n    ")])])}),[],!1,null,null,null).exports,_=n(10),h=n(5),f=n(6);function g(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function v(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?g(Object(n),!0).forEach((function(e){P(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function P(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var m={name:"ProductsTrashed",components:{TrashedProductItem:p,Pagination:_.default,ProductsContextMenu:h.a,ProductEditManager:f.a},computed:v(v(v(v({},Object(o.c)("products",["trashedProductsLength","visibility"])),Object(o.c)("contextMenu",["showContextMenu"])),Object(o.c)("pagination",["currentPageIndex","customized"])),{},{items:function(){return this.customized("trashedProducts")[this.currentPageIndex("trashedProducts")]}}),mounted:function(){this.$store.dispatch("products/showTrashedProducts")}},b=Object(d.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content_block content_block__products"},[n("div",{staticClass:"products"},[t.trashedProductsLength>1?n("pagination",{staticClass:"pdb0",attrs:{entity:"trashedProducts"}}):t._e(),t._v(" "),t._l(t.items,(function(t,e){return n("trashed-product-item",{key:t.id,attrs:{product:t,index:e}})})),t._v(" "),t.trashedProductsLength>1?n("pagination",{staticClass:"pdt10",attrs:{entity:"trashedProducts"}}):t._e(),t._v(" "),n("transition",{attrs:{name:"fade"}},[t.showContextMenu("Products")?n("products-context-menu"):t._e()],1),t._v(" "),n("transition",{attrs:{name:"fade"}},[t.visibility("productEditManager")?n("product-edit-manager"):t._e()],1)],2)])}),[],!1,null,null,null).exports,O={name:"TrashedProductsPage",components:{ProductListHeader:r.a,TrashedProducts:b}},y=Object(d.a)(O,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"show_block"},[e("product-list-header"),this._v(" "),e("trashed-products")],1)}),[],!1,null,null,null);e.default=y.exports}]]);