(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[15],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/SingleProductPage.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Admin/SingleProductPage.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _Products_someComputed_computedForSingleProduct__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Products/someComputed/computedForSingleProduct */ "./resources/js/components/Admin/Products/someComputed/computedForSingleProduct.js");
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


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "SingleProductPage",
  data: function data() {
    return {
      indexOfMainPhoto: 0
    };
  },
  computed: _objectSpread(_objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('products', ['singleProductFromServer'])), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])(['imgFolderPrefix'])), _Products_someComputed_computedForSingleProduct__WEBPACK_IMPORTED_MODULE_1__["default"]),
  mounted: function mounted() {
    this.$store.dispatch('products/loadSingleProduct', this.$route.params.id);
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/SingleProductPage.vue?vue&type=template&id=1d29003b&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Admin/SingleProductPage.vue?vue&type=template&id=1d29003b& ***!
  \**************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "content_block content_block__single_product" },
    [
      _c("h1", { staticClass: "tal" }, [_vm._v(_vm._s(_vm.getHeader))]),
      _vm._v(" "),
      _c("div", { staticClass: "single_product__first_block" }, [
        _c("div", {
          staticClass: "single_product__first_block__small_photos",
          domProps: { innerHTML: _vm._s(_vm.getPhotos) }
        }),
        _vm._v(" "),
        _c("div", {
          staticClass: "single_product__first_block__big_photo_wrapper",
          domProps: { innerHTML: _vm._s(_vm.getMainPhoto) }
        }),
        _vm._v(" "),
        _c("div", {
          staticClass: "single_product__first_block__top_characteristics"
        })
      ])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/Admin/Products/someComputed/computedForSingleProduct.js":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/Admin/Products/someComputed/computedForSingleProduct.js ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  noData: function noData() {
    var _this$singleProductFr;

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

    return this.singleProductFromServer.product.name;
  },
  getMainPhoto: function getMainPhoto() {
    if (this.noData) {
      return '';
    }

    var product = this.singleProductFromServer.product;
    var photoInfoArr = JSON.parse(product.photo_set);
    if (!photoInfoArr) return;
    var folderName = "/storage/".concat(this.imgFolderPrefix, "4");
    var fileNamePrefix = "".concat(product.id, "s4-");
    var mainPhotoName = photoInfoArr[this.indexOfMainPhoto];
    return "<img alt=\"\"\n                    src=\"".concat(folderName, "/").concat(fileNamePrefix).concat(mainPhotoName, "\"\n                    class=\"photo__size4\" />");
  },
  getPhotos: function getPhotos() {
    if (this.noData) {
      return '';
    }

    var product = this.singleProductFromServer.product;
    var photoInfoArr = JSON.parse(product.photo_set);
    if (!photoInfoArr) return;
    var folderName = "/storage/".concat(this.imgFolderPrefix, "2");
    var fileNamePrefix = "".concat(product.id, "s2-");
    var photoArr = photoInfoArr.map(function (timeName, index) {
      return "<img data-photoindex=\"".concat(index, "\" alt=\"\" src=\"").concat(folderName, "/").concat(fileNamePrefix).concat(timeName, "\" class=\"photo__size2\" />");
    });
    return photoArr.join('');
  }
});

/***/ }),

/***/ "./resources/js/components/Admin/SingleProductPage.vue":
/*!*************************************************************!*\
  !*** ./resources/js/components/Admin/SingleProductPage.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SingleProductPage_vue_vue_type_template_id_1d29003b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SingleProductPage.vue?vue&type=template&id=1d29003b& */ "./resources/js/components/Admin/SingleProductPage.vue?vue&type=template&id=1d29003b&");
/* harmony import */ var _SingleProductPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SingleProductPage.vue?vue&type=script&lang=js& */ "./resources/js/components/Admin/SingleProductPage.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SingleProductPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SingleProductPage_vue_vue_type_template_id_1d29003b___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SingleProductPage_vue_vue_type_template_id_1d29003b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Admin/SingleProductPage.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Admin/SingleProductPage.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/Admin/SingleProductPage.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleProductPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./SingleProductPage.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/SingleProductPage.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleProductPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Admin/SingleProductPage.vue?vue&type=template&id=1d29003b&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/Admin/SingleProductPage.vue?vue&type=template&id=1d29003b& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleProductPage_vue_vue_type_template_id_1d29003b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./SingleProductPage.vue?vue&type=template&id=1d29003b& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/SingleProductPage.vue?vue&type=template&id=1d29003b&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleProductPage_vue_vue_type_template_id_1d29003b___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleProductPage_vue_vue_type_template_id_1d29003b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);