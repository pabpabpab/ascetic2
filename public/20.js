(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{62:function(e,t,r){"use strict";r.r(t);var n=r(1),o=r(26),a=r(13),c=r(25),i=r(10),s=r(14);function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){d(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var l={name:"SingleProductPage",components:{SingleProduct:o.a,ProductPhotoManager:c.a,SeoManager:i.a,ProductEditManager:s.a,ProductsContextMenu:a.a},computed:p(p(p(p({},Object(n.c)("products",["visibility"])),Object(n.c)(["imgFolderPrefix"])),Object(n.c)("contextMenu",["showContextMenu"])),Object(n.c)("seoManager",["showSeoManager"]))},b=r(2),g=Object(b.a)(l,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"single_product_page__content_wrapper"},[r("single-product",{attrs:{from:"singleProductPage"}}),e._v(" "),r("transition",{attrs:{name:"fade"}},[e.showContextMenu("Products")?r("products-context-menu"):e._e()],1),e._v(" "),r("transition",{attrs:{name:"fade"}},[e.visibility("productEditManager")?r("product-edit-manager"):e._e()],1),e._v(" "),r("transition",{attrs:{name:"fade"}},[e.visibility("productPhotoManager")?r("product-photo-manager"):e._e()],1),e._v(" "),r("transition",{attrs:{name:"fade"}},[e.showSeoManager&&!e.visibility("productPhotoManager")?r("seo-manager",{attrs:{entity:"product"}}):e._e()],1)],1)}),[],!1,null,null,null);t.default=g.exports}}]);