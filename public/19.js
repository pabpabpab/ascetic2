(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[19],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/admin-js/components/Admin/SingleProductPage.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/admin-js/components/Admin/SingleProductPage.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _Products_SingleProduct_SingleProduct__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Products/SingleProduct/SingleProduct */ "./resources/admin-js/components/Admin/Products/SingleProduct/SingleProduct.vue");
/* harmony import */ var _ContextMenu_ProductsContextMenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ContextMenu/ProductsContextMenu */ "./resources/admin-js/components/Admin/ContextMenu/ProductsContextMenu.vue");
/* harmony import */ var _Products_PhotoManager_PhotoManager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Products/PhotoManager/PhotoManager */ "./resources/admin-js/components/Admin/Products/PhotoManager/PhotoManager.vue");
/* harmony import */ var _SeoManager_SeoManager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SeoManager/SeoManager */ "./resources/admin-js/components/Admin/SeoManager/SeoManager.vue");
/* harmony import */ var _Products_EditManager_ProductEditManager__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Products/EditManager/ProductEditManager */ "./resources/admin-js/components/Admin/Products/EditManager/ProductEditManager.vue");
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






/* harmony default export */ __webpack_exports__["default"] = ({
  name: "SingleProductPage",
  components: {
    SingleProduct: _Products_SingleProduct_SingleProduct__WEBPACK_IMPORTED_MODULE_1__["default"],
    ProductPhotoManager: _Products_PhotoManager_PhotoManager__WEBPACK_IMPORTED_MODULE_3__["default"],
    SeoManager: _SeoManager_SeoManager__WEBPACK_IMPORTED_MODULE_4__["default"],
    ProductEditManager: _Products_EditManager_ProductEditManager__WEBPACK_IMPORTED_MODULE_5__["default"],
    ProductsContextMenu: _ContextMenu_ProductsContextMenu__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  computed: _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('products', ['visibility'])), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])(['imgFolderPrefix'])), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('contextMenu', ['showContextMenu'])), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('seoManager', ['showSeoManager']))
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/admin-js/components/Admin/SingleProductPage.vue?vue&type=template&id=bcecc186&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/admin-js/components/Admin/SingleProductPage.vue?vue&type=template&id=bcecc186& ***!
  \********************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "single_product_page__content_wrapper" },
    [
      _c("single-product", { attrs: { from: "singleProductPage" } }),
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
      ),
      _vm._v(" "),
      _c(
        "transition",
        { attrs: { name: "fade" } },
        [
          _vm.visibility("productPhotoManager")
            ? _c("product-photo-manager")
            : _vm._e()
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "transition",
        { attrs: { name: "fade" } },
        [
          _vm.showSeoManager && !_vm.visibility("productPhotoManager")
            ? _c("seo-manager", { attrs: { entity: "product" } })
            : _vm._e()
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/admin-js/components/Admin/SingleProductPage.vue":
/*!*******************************************************************!*\
  !*** ./resources/admin-js/components/Admin/SingleProductPage.vue ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SingleProductPage_vue_vue_type_template_id_bcecc186___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SingleProductPage.vue?vue&type=template&id=bcecc186& */ "./resources/admin-js/components/Admin/SingleProductPage.vue?vue&type=template&id=bcecc186&");
/* harmony import */ var _SingleProductPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SingleProductPage.vue?vue&type=script&lang=js& */ "./resources/admin-js/components/Admin/SingleProductPage.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SingleProductPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SingleProductPage_vue_vue_type_template_id_bcecc186___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SingleProductPage_vue_vue_type_template_id_bcecc186___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/admin-js/components/Admin/SingleProductPage.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/admin-js/components/Admin/SingleProductPage.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./resources/admin-js/components/Admin/SingleProductPage.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleProductPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./SingleProductPage.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/admin-js/components/Admin/SingleProductPage.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleProductPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/admin-js/components/Admin/SingleProductPage.vue?vue&type=template&id=bcecc186&":
/*!**************************************************************************************************!*\
  !*** ./resources/admin-js/components/Admin/SingleProductPage.vue?vue&type=template&id=bcecc186& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleProductPage_vue_vue_type_template_id_bcecc186___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./SingleProductPage.vue?vue&type=template&id=bcecc186& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/admin-js/components/Admin/SingleProductPage.vue?vue&type=template&id=bcecc186&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleProductPage_vue_vue_type_template_id_bcecc186___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleProductPage_vue_vue_type_template_id_bcecc186___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);