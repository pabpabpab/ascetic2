(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/ContextMenu/ProductsContextMenu.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Admin/ContextMenu/ProductsContextMenu.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
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

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "ProductsContextMenu",
  computed: _objectSpread(_objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('contextMenu', ['coordinates', 'product'])), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('products', ['seoData', 'singleProductFromServer'])), {}, {
    isTrashedProduct: function isTrashedProduct() {
      return Boolean(this.product.deleted_at);
    },
    hasSeoData: function hasSeoData() {
      return this.hasSeoData1 || this.hasSeoData2;
    },
    hasSeoData1: function hasSeoData1() {
      var _this = this;

      var item = this.seoData.find(function (item) {
        return item.product_id === _this.product.id;
      });

      if (!item) {
        return false;
      }

      return Boolean(item.page_title) || Boolean(item.page_description);
    },
    hasSeoData2: function hasSeoData2() {
      if (this.$route.name !== 'SingleProduct') {
        return false;
      }

      var singleProductSeo = this.singleProductFromServer.product.seo_text;

      if (!singleProductSeo) {
        return false;
      }

      if (singleProductSeo.product_id !== this.product.id) {
        return false;
      }

      return Boolean(singleProductSeo.page_title) || Boolean(singleProductSeo.page_description);
    }
  }),
  methods: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])('products', ['preDeleteProduct', 'restoreProduct', 'showProductEditManager', 'showProductPhotoManager'])), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])('seoManager', ['showSeoManager']))
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Products/EditManager/ProductEditManager.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Admin/Products/EditManager/ProductEditManager.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _functions_fitTextareaHeight__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../functions/fitTextareaHeight */ "./resources/js/components/Admin/Products/functions/fitTextareaHeight.js");
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


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "ProductEditManager",
  components: {
    ProductForm: function ProductForm() {
      return __webpack_require__.e(/*! import() */ 6).then(__webpack_require__.bind(null, /*! ../ProductForm/ProductForm.vue */ "./resources/js/components/Admin/Products/ProductForm/ProductForm.vue"));
    }
  },
  data: function data() {
    return {
      photoSizeIndex: 2,
      saveCmd: false
    };
  },
  computed: _objectSpread(_objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('products', ['singleProductFromServer'])), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])(['imgFolderPrefix'])), {}, {
    noData: function noData() {
      var _this$singleProductFr;

      // js-оператор ?.
      var product = (_this$singleProductFr = this.singleProductFromServer) === null || _this$singleProductFr === void 0 ? void 0 : _this$singleProductFr.product;

      if (!product) {
        return true;
      }

      return false;
    },
    getHeader: function getHeader() {
      if (this.noData) {
        return '';
      }

      var productName = this.singleProductFromServer.product.name;
      var productPrice = this.singleProductFromServer.product.price;
      return "\u0422\u043E\u0432\u0430\u0440 \xAB".concat(productName, "\xBB ").concat(productPrice, " \u20BD");
    },
    getHeaderPhoto: function getHeaderPhoto() {
      if (this.noData) {
        return '';
      }

      if (!this.singleProductFromServer.product.photo_set) {
        return '';
      }

      var photoInfoArr = JSON.parse(this.singleProductFromServer.product.photo_set);

      if (!photoInfoArr) {
        return '';
      }

      var photoName = photoInfoArr[0];
      var folderName = "/storage/".concat(this.imgFolderPrefix).concat(this.photoSizeIndex);
      var fileNamePrefix = "".concat(this.singleProductFromServer.product.id, "s").concat(this.photoSizeIndex, "-");
      return "<img alt=\"\"\n                        src=\"".concat(folderName, "/").concat(fileNamePrefix).concat(photoName, "\"\n                        class=\"photo__size").concat(this.photoSizeIndex, " edit_manager__header__photo\" />");
    }
  }),
  methods: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])('products', ['closeProductEditManager'])), {}, {
    fitTextareaHeight: function fitTextareaHeight(event) {
      Object(_functions_fitTextareaHeight__WEBPACK_IMPORTED_MODULE_1__["default"])(event);
    },
    save: function save() {
      var _this = this;

      this.saveCmd = true;
      setTimeout(function () {
        _this.saveCmd = false;
      }, 100);
    }
  })
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/ContextMenu/ProductsContextMenu.vue?vue&type=template&id=07f1be24&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Admin/ContextMenu/ProductsContextMenu.vue?vue&type=template&id=07f1be24& ***!
  \****************************************************************************************************************************************************************************************************************************************/
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
    {
      staticClass: "context_menu__wrapper context_menu__wrapper_black",
      style: _vm.coordinates
    },
    [
      _c(
        "ul",
        { staticClass: "context_menu__ul" },
        [
          _c(
            "li",
            {
              staticClass:
                "context_menu__li_header context_menu__li_header_black"
            },
            [
              _vm._v(
                "\n            «" + _vm._s(_vm.product.name) + "»\n        "
              )
            ]
          ),
          _vm._v(" "),
          _vm.isTrashedProduct
            ? [
                _c(
                  "li",
                  {
                    staticClass: "context_menu__li context_menu__li_black",
                    on: {
                      click: function($event) {
                        return _vm.showProductEditManager(_vm.product.id)
                      }
                    }
                  },
                  [_vm._v("\n                Редактировать\n            ")]
                ),
                _vm._v(" "),
                _c(
                  "li",
                  {
                    staticClass: "context_menu__li context_menu__li_black",
                    staticStyle: { border: "0" },
                    on: {
                      click: function($event) {
                        return _vm.restoreProduct(_vm.product.id)
                      }
                    }
                  },
                  [_vm._v("\n                Восстановить товар\n            ")]
                ),
                _vm._v(" "),
                _c(
                  "li",
                  {
                    staticClass: "context_menu__li context_menu__li_black",
                    staticStyle: { border: "0" },
                    on: {
                      click: function($event) {
                        return _vm.preDeleteProduct(_vm.product)
                      }
                    }
                  },
                  [
                    _vm._v(
                      "\n                Удалить безвозвратно\n            "
                    )
                  ]
                )
              ]
            : [
                _c(
                  "li",
                  {
                    staticClass: "context_menu__li context_menu__li_black",
                    on: {
                      click: function($event) {
                        return _vm.showProductEditManager(_vm.product.id)
                      }
                    }
                  },
                  [_vm._v("\n                Редактировать\n            ")]
                ),
                _vm._v(" "),
                _c(
                  "li",
                  {
                    staticClass: "context_menu__li context_menu__li_black",
                    on: {
                      click: function($event) {
                        return _vm.showProductPhotoManager(_vm.product)
                      }
                    }
                  },
                  [_vm._v("\n                Фото-менеджер\n            ")]
                ),
                _vm._v(" "),
                _c(
                  "li",
                  {
                    staticClass: "context_menu__li context_menu__li_black",
                    on: {
                      click: function($event) {
                        return _vm.showSeoManager({
                          entity: "product",
                          data: { id: _vm.product.id }
                        })
                      }
                    }
                  },
                  [
                    _vm.hasSeoData
                      ? _c(
                          "span",
                          {
                            staticClass: "has_data_green",
                            attrs: { title: "уже есть данные" }
                          },
                          [_vm._v("✔")]
                        )
                      : _vm._e(),
                    _vm._v("\n                SEO для товара\n            ")
                  ]
                ),
                _vm._v(" "),
                _c(
                  "li",
                  {
                    staticClass: "context_menu__li context_menu__li_black",
                    staticStyle: { border: "0" },
                    on: {
                      click: function($event) {
                        return _vm.preDeleteProduct(_vm.product)
                      }
                    }
                  },
                  [_vm._v("\n                Удалить товар\n            ")]
                )
              ]
        ],
        2
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Products/EditManager/ProductEditManager.vue?vue&type=template&id=3856c2a0&":
/*!************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Admin/Products/EditManager/ProductEditManager.vue?vue&type=template&id=3856c2a0& ***!
  \************************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "edit_manager__screen" }, [
    _c("div", { staticClass: "edit_manager__content_wrapper" }, [
      _c("div", { staticClass: "edit_manager__header" }, [
        _c("p", { domProps: { innerHTML: _vm._s(_vm.getHeaderPhoto) } }),
        _vm._v(" "),
        _c("h1", [_vm._v(_vm._s(_vm.getHeader))])
      ]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "edit_manager__content pdt20 pdb20" },
        [
          _c("product-form", {
            attrs: { action: "edit", saveCmd: _vm.saveCmd }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c("div", { staticClass: "edit_manager__button_panel" }, [
        _c(
          "button",
          {
            staticClass: "edit_manager__save_button",
            on: {
              click: function($event) {
                $event.stopPropagation()
                return _vm.save()
              }
            }
          },
          [_vm._v("\n                Сохранить\n            ")]
        )
      ]),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "edit_manager__collapse_icon",
          on: {
            click: function($event) {
              return _vm.closeProductEditManager()
            }
          }
        },
        [_vm._v("\n            ×\n        ")]
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/Admin/ContextMenu/ProductsContextMenu.vue":
/*!***************************************************************************!*\
  !*** ./resources/js/components/Admin/ContextMenu/ProductsContextMenu.vue ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ProductsContextMenu_vue_vue_type_template_id_07f1be24___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProductsContextMenu.vue?vue&type=template&id=07f1be24& */ "./resources/js/components/Admin/ContextMenu/ProductsContextMenu.vue?vue&type=template&id=07f1be24&");
/* harmony import */ var _ProductsContextMenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProductsContextMenu.vue?vue&type=script&lang=js& */ "./resources/js/components/Admin/ContextMenu/ProductsContextMenu.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ProductsContextMenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ProductsContextMenu_vue_vue_type_template_id_07f1be24___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ProductsContextMenu_vue_vue_type_template_id_07f1be24___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Admin/ContextMenu/ProductsContextMenu.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Admin/ContextMenu/ProductsContextMenu.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/Admin/ContextMenu/ProductsContextMenu.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductsContextMenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ProductsContextMenu.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/ContextMenu/ProductsContextMenu.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductsContextMenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Admin/ContextMenu/ProductsContextMenu.vue?vue&type=template&id=07f1be24&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/components/Admin/ContextMenu/ProductsContextMenu.vue?vue&type=template&id=07f1be24& ***!
  \**********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductsContextMenu_vue_vue_type_template_id_07f1be24___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ProductsContextMenu.vue?vue&type=template&id=07f1be24& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/ContextMenu/ProductsContextMenu.vue?vue&type=template&id=07f1be24&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductsContextMenu_vue_vue_type_template_id_07f1be24___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductsContextMenu_vue_vue_type_template_id_07f1be24___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Admin/Products/EditManager/ProductEditManager.vue":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/Admin/Products/EditManager/ProductEditManager.vue ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ProductEditManager_vue_vue_type_template_id_3856c2a0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProductEditManager.vue?vue&type=template&id=3856c2a0& */ "./resources/js/components/Admin/Products/EditManager/ProductEditManager.vue?vue&type=template&id=3856c2a0&");
/* harmony import */ var _ProductEditManager_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProductEditManager.vue?vue&type=script&lang=js& */ "./resources/js/components/Admin/Products/EditManager/ProductEditManager.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ProductEditManager_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ProductEditManager_vue_vue_type_template_id_3856c2a0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ProductEditManager_vue_vue_type_template_id_3856c2a0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Admin/Products/EditManager/ProductEditManager.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Admin/Products/EditManager/ProductEditManager.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/components/Admin/Products/EditManager/ProductEditManager.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductEditManager_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ProductEditManager.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Products/EditManager/ProductEditManager.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductEditManager_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Admin/Products/EditManager/ProductEditManager.vue?vue&type=template&id=3856c2a0&":
/*!******************************************************************************************************************!*\
  !*** ./resources/js/components/Admin/Products/EditManager/ProductEditManager.vue?vue&type=template&id=3856c2a0& ***!
  \******************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductEditManager_vue_vue_type_template_id_3856c2a0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ProductEditManager.vue?vue&type=template&id=3856c2a0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Products/EditManager/ProductEditManager.vue?vue&type=template&id=3856c2a0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductEditManager_vue_vue_type_template_id_3856c2a0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductEditManager_vue_vue_type_template_id_3856c2a0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Admin/Products/functions/fitTextareaHeight.js":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/Admin/Products/functions/fitTextareaHeight.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return fitTextareaHeight; });
var prevLength = 0;
function fitTextareaHeight(event) {
  if (_hasIncreaseInTextareaLength(event)) {
    prevLength = event.target.value.length;

    if (event.target.clientHeight > 500) {
      return;
    }

    _increaseTextareaHeight(event);

    return;
  }

  if (!_hasDecreaseInTextareaLength(event)) {
    return;
  }

  _resetTextareaHeight(event);

  setTimeout(function () {
    fitTextareaHeight(event);
  }, 10);
}

function _hasIncreaseInTextareaLength(event) {
  return event.target.scrollHeight > event.target.clientHeight;
}

function _increaseTextareaHeight(event) {
  event.target.style.height = event.target.scrollHeight + 20 + 'px';
}

function _hasDecreaseInTextareaLength(event) {
  if (event.target.value.length / prevLength < 0.85) {
    prevLength = event.target.value.length;
    return true;
  }

  return false;
}

function _resetTextareaHeight(event) {
  event.target.style = null;
}

/***/ })

}]);