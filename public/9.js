(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Products/TrashedProducts/TrashedProductItem.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Admin/Products/TrashedProducts/TrashedProductItem.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _someComputed_computedForProductItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../someComputed/computedForProductItem */ "./resources/js/components/Admin/Products/someComputed/computedForProductItem.js");
/* harmony import */ var _functions_changeMainPhotoOfItemInList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../functions/changeMainPhotoOfItemInList */ "./resources/js/components/Admin/Products/functions/changeMainPhotoOfItemInList.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  name: "TrashedProductItem",
  props: ['product', 'index'],
  data: function data() {
    return {
      indexOfMainPhoto: 0
    };
  },
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])(['imgFolderPrefix'])), _someComputed_computedForProductItem__WEBPACK_IMPORTED_MODULE_1__["default"]),
  methods: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])('contextMenu', ['showContextMenu'])), _functions_changeMainPhotoOfItemInList__WEBPACK_IMPORTED_MODULE_2__["default"])
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Products/TrashedProducts/TrashedProducts.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Admin/Products/TrashedProducts/TrashedProducts.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _TrashedProductItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TrashedProductItem */ "./resources/js/components/Admin/Products/TrashedProducts/TrashedProductItem.vue");
/* harmony import */ var _Pagination_Pagination__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Pagination/Pagination */ "./resources/js/components/Admin/Pagination/Pagination.vue");
/* harmony import */ var _ContextMenu_ProductsContextMenu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ContextMenu/ProductsContextMenu */ "./resources/js/components/Admin/ContextMenu/ProductsContextMenu.vue");
/* harmony import */ var _EditManager_ProductEditManager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../EditManager/ProductEditManager */ "./resources/js/components/Admin/Products/EditManager/ProductEditManager.vue");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["default"] = ({
  name: "ProductsTrashed",
  components: {
    TrashedProductItem: _TrashedProductItem__WEBPACK_IMPORTED_MODULE_1__["default"],
    Pagination: _Pagination_Pagination__WEBPACK_IMPORTED_MODULE_2__["default"],
    ProductsContextMenu: _ContextMenu_ProductsContextMenu__WEBPACK_IMPORTED_MODULE_3__["default"],
    ProductEditManager: _EditManager_ProductEditManager__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  computed: _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('products', ['trashedProductsLength', 'visibility'])), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('contextMenu', ['showContextMenu'])), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('pagination', ['currentPageIndex', 'customized'])), {}, {
    items: function items() {
      return this.customized('trashedProducts')[this.currentPageIndex('trashedProducts')];
    }
  }),
  mounted: function mounted() {
    this.$store.dispatch('products/showTrashedProducts');
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/TrashedProductsPage.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Admin/TrashedProductsPage.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Products_ListOfProducts_ProductListHeader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Products/ListOfProducts/ProductListHeader */ "./resources/js/components/Admin/Products/ListOfProducts/ProductListHeader.vue");
/* harmony import */ var _Products_TrashedProducts_TrashedProducts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Products/TrashedProducts/TrashedProducts */ "./resources/js/components/Admin/Products/TrashedProducts/TrashedProducts.vue");
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "TrashedProductsPage",
  components: {
    ProductListHeader: _Products_ListOfProducts_ProductListHeader__WEBPACK_IMPORTED_MODULE_0__["default"],
    TrashedProducts: _Products_TrashedProducts_TrashedProducts__WEBPACK_IMPORTED_MODULE_1__["default"]
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Products/TrashedProducts/TrashedProductItem.vue?vue&type=template&id=96fb6ae2&":
/*!****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Admin/Products/TrashedProducts/TrashedProductItem.vue?vue&type=template&id=96fb6ae2& ***!
  \****************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "product_item" }, [
    _c(
      "div",
      { staticClass: "product_item__content" },
      [
        _vm.numberOfPhotos > 0
          ? [
              _c("div", {
                ref: "mainPhotoDiv",
                domProps: { innerHTML: _vm._s(_vm.getMainPhoto) },
                on: {
                  mousemove: function($event) {
                    return _vm.changeMainPhoto($event)
                  },
                  mouseout: function($event) {
                    return _vm.setFirstMainPhoto()
                  }
                }
              })
            ]
          : [
              _c(
                "div",
                { ref: "mainPhotoDiv", staticClass: "product_item__no_photo" },
                [_vm._v("\n                НЕТ ФОТО\n            ")]
              )
            ],
        _vm._v(" "),
        _vm.numberOfPhotos > 1
          ? _c(
              "div",
              { staticClass: "product_item__photo_indicator" },
              _vm._l(_vm.numberOfPhotos, function(n) {
                return _c("span", {
                  key: n,
                  staticClass: "product_item__photo_indicator_item",
                  class: {
                    product_item__photo_indicator_inactive:
                      _vm.indexOfMainPhoto + 1 !== n,
                    product_item__photo_indicator_active:
                      _vm.indexOfMainPhoto + 1 === n
                  }
                })
              }),
              0
            )
          : _vm._e(),
        _vm._v(" "),
        _c("div", { staticClass: "product_item__name" }, [
          _vm._v("\n            " + _vm._s(_vm.product.name) + "\n        ")
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "product_item__price" }, [
          _vm._v("\n            " + _vm._s(_vm.getPrice) + "\n        ")
        ]),
        _vm._v(" "),
        _c("div", {
          staticClass: "product_item__small_photos",
          domProps: { innerHTML: _vm._s(_vm.getPhotos) },
          on: {
            mouseover: function($event) {
              return _vm.changeMainPhotoBySmallPhoto($event)
            },
            mouseout: function($event) {
              return _vm.setFirstMainPhoto()
            }
          }
        }),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "product_item__bottom_info__relative_wrapper" },
          [
            _c("div", { staticClass: "product_item__bottom_info__absolute" }, [
              _c("p", {
                staticClass: "product_item__bottom_info__text",
                attrs: { title: "Категория" },
                domProps: { innerHTML: _vm._s(_vm.getCategories) }
              }),
              _vm._v(" "),
              _c("p", {
                staticClass: "product_item__bottom_info__text",
                attrs: { title: "Материал" },
                domProps: { innerHTML: _vm._s(_vm.getMaterials) }
              }),
              _vm._v(" "),
              _c("p", {
                staticClass: "product_item__bottom_info__text",
                attrs: { title: "Цвет" },
                domProps: { innerHTML: _vm._s(_vm.getColors) }
              })
            ])
          ]
        )
      ],
      2
    ),
    _vm._v(" "),
    _c(
      "span",
      {
        staticClass: "context_menu__icon__product",
        on: {
          click: function($event) {
            $event.stopPropagation()
            return _vm.showContextMenu({
              event: $event,
              target: "Products",
              data: {
                product: _vm.product
              }
            })
          }
        }
      },
      [_vm._v("\n        ⋮\n    ")]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Products/TrashedProducts/TrashedProducts.vue?vue&type=template&id=cc6ce472&":
/*!*************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Admin/Products/TrashedProducts/TrashedProducts.vue?vue&type=template&id=cc6ce472& ***!
  \*************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "content_block content_block__products" }, [
    _c(
      "div",
      { staticClass: "products" },
      [
        _vm.trashedProductsLength > 1
          ? _c("pagination", {
              staticClass: "pdb0",
              attrs: { entity: "trashedProducts" }
            })
          : _vm._e(),
        _vm._v(" "),
        _vm._l(_vm.items, function(item, index) {
          return _c("trashed-product-item", {
            key: item.id,
            attrs: { product: item, index: index }
          })
        }),
        _vm._v(" "),
        _vm.trashedProductsLength > 1
          ? _c("pagination", {
              staticClass: "pdt10",
              attrs: { entity: "trashedProducts" }
            })
          : _vm._e(),
        _vm._v(" "),
        _c(
          "transition",
          { attrs: { name: "fade" } },
          [
            _vm.showContextMenu("Products")
              ? _c("products-context-menu")
              : _vm._e()
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "transition",
          { attrs: { name: "fade" } },
          [
            _vm.visibility("productEditManager")
              ? _c("product-edit-manager")
              : _vm._e()
          ],
          1
        )
      ],
      2
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/TrashedProductsPage.vue?vue&type=template&id=6615a5cf&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Admin/TrashedProductsPage.vue?vue&type=template&id=6615a5cf& ***!
  \****************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "show_block" },
    [_c("product-list-header"), _vm._v(" "), _c("trashed-products")],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/Admin/Products/TrashedProducts/TrashedProductItem.vue":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/Admin/Products/TrashedProducts/TrashedProductItem.vue ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TrashedProductItem_vue_vue_type_template_id_96fb6ae2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TrashedProductItem.vue?vue&type=template&id=96fb6ae2& */ "./resources/js/components/Admin/Products/TrashedProducts/TrashedProductItem.vue?vue&type=template&id=96fb6ae2&");
/* harmony import */ var _TrashedProductItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TrashedProductItem.vue?vue&type=script&lang=js& */ "./resources/js/components/Admin/Products/TrashedProducts/TrashedProductItem.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TrashedProductItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TrashedProductItem_vue_vue_type_template_id_96fb6ae2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TrashedProductItem_vue_vue_type_template_id_96fb6ae2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Admin/Products/TrashedProducts/TrashedProductItem.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Admin/Products/TrashedProducts/TrashedProductItem.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************!*\
  !*** ./resources/js/components/Admin/Products/TrashedProducts/TrashedProductItem.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TrashedProductItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TrashedProductItem.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Products/TrashedProducts/TrashedProductItem.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TrashedProductItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Admin/Products/TrashedProducts/TrashedProductItem.vue?vue&type=template&id=96fb6ae2&":
/*!**********************************************************************************************************************!*\
  !*** ./resources/js/components/Admin/Products/TrashedProducts/TrashedProductItem.vue?vue&type=template&id=96fb6ae2& ***!
  \**********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TrashedProductItem_vue_vue_type_template_id_96fb6ae2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TrashedProductItem.vue?vue&type=template&id=96fb6ae2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Products/TrashedProducts/TrashedProductItem.vue?vue&type=template&id=96fb6ae2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TrashedProductItem_vue_vue_type_template_id_96fb6ae2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TrashedProductItem_vue_vue_type_template_id_96fb6ae2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Admin/Products/TrashedProducts/TrashedProducts.vue":
/*!************************************************************************************!*\
  !*** ./resources/js/components/Admin/Products/TrashedProducts/TrashedProducts.vue ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TrashedProducts_vue_vue_type_template_id_cc6ce472___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TrashedProducts.vue?vue&type=template&id=cc6ce472& */ "./resources/js/components/Admin/Products/TrashedProducts/TrashedProducts.vue?vue&type=template&id=cc6ce472&");
/* harmony import */ var _TrashedProducts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TrashedProducts.vue?vue&type=script&lang=js& */ "./resources/js/components/Admin/Products/TrashedProducts/TrashedProducts.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TrashedProducts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TrashedProducts_vue_vue_type_template_id_cc6ce472___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TrashedProducts_vue_vue_type_template_id_cc6ce472___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Admin/Products/TrashedProducts/TrashedProducts.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Admin/Products/TrashedProducts/TrashedProducts.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/components/Admin/Products/TrashedProducts/TrashedProducts.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TrashedProducts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TrashedProducts.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Products/TrashedProducts/TrashedProducts.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TrashedProducts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Admin/Products/TrashedProducts/TrashedProducts.vue?vue&type=template&id=cc6ce472&":
/*!*******************************************************************************************************************!*\
  !*** ./resources/js/components/Admin/Products/TrashedProducts/TrashedProducts.vue?vue&type=template&id=cc6ce472& ***!
  \*******************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TrashedProducts_vue_vue_type_template_id_cc6ce472___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TrashedProducts.vue?vue&type=template&id=cc6ce472& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Products/TrashedProducts/TrashedProducts.vue?vue&type=template&id=cc6ce472&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TrashedProducts_vue_vue_type_template_id_cc6ce472___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TrashedProducts_vue_vue_type_template_id_cc6ce472___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Admin/TrashedProductsPage.vue":
/*!***************************************************************!*\
  !*** ./resources/js/components/Admin/TrashedProductsPage.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TrashedProductsPage_vue_vue_type_template_id_6615a5cf___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TrashedProductsPage.vue?vue&type=template&id=6615a5cf& */ "./resources/js/components/Admin/TrashedProductsPage.vue?vue&type=template&id=6615a5cf&");
/* harmony import */ var _TrashedProductsPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TrashedProductsPage.vue?vue&type=script&lang=js& */ "./resources/js/components/Admin/TrashedProductsPage.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TrashedProductsPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TrashedProductsPage_vue_vue_type_template_id_6615a5cf___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TrashedProductsPage_vue_vue_type_template_id_6615a5cf___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Admin/TrashedProductsPage.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Admin/TrashedProductsPage.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/Admin/TrashedProductsPage.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TrashedProductsPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./TrashedProductsPage.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/TrashedProductsPage.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TrashedProductsPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Admin/TrashedProductsPage.vue?vue&type=template&id=6615a5cf&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/Admin/TrashedProductsPage.vue?vue&type=template&id=6615a5cf& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TrashedProductsPage_vue_vue_type_template_id_6615a5cf___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./TrashedProductsPage.vue?vue&type=template&id=6615a5cf& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/TrashedProductsPage.vue?vue&type=template&id=6615a5cf&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TrashedProductsPage_vue_vue_type_template_id_6615a5cf___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TrashedProductsPage_vue_vue_type_template_id_6615a5cf___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);