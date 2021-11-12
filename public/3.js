(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Products/FiltersIcon.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Admin/Products/FiltersIcon.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _assets_filter_icon5_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../../assets/filter_icon5.png */ "./resources/assets/filter_icon5.png");
/* harmony import */ var _assets_filter_icon5_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_filter_icon5_png__WEBPACK_IMPORTED_MODULE_1__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "ProductListHeader",
  data: function data() {
    return {
      filter_icon5: _assets_filter_icon5_png__WEBPACK_IMPORTED_MODULE_1___default.a
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('products', ['visibility'])),
  methods: {
    showOrCloseProductsFilters: function showOrCloseProductsFilters() {
      if (this.visibility('productsFilters')) {
        this.$store.dispatch('products/closeProductsFilters');
      } else {
        this.$store.dispatch('products/showProductsFilters');
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Products/ProductListHeader.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Admin/Products/ProductListHeader.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _FiltersIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FiltersIcon */ "./resources/js/components/Admin/Products/FiltersIcon.vue");
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


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "ProductListHeader",
  components: {
    FiltersIcon: _FiltersIcon__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('products', ['listHeader']))
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Products/FiltersIcon.vue?vue&type=template&id=8a64b858&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Admin/Products/FiltersIcon.vue?vue&type=template&id=8a64b858& ***!
  \*****************************************************************************************************************************************************************************************************************************/
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
  return _c("img", {
    attrs: { src: _vm.filter_icon5, alt: "" },
    on: {
      click: function($event) {
        $event.stopPropagation()
        return _vm.showOrCloseProductsFilters()
      }
    }
  })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Products/ProductListHeader.vue?vue&type=template&id=32da2eda&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Admin/Products/ProductListHeader.vue?vue&type=template&id=32da2eda& ***!
  \***********************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "products_header" },
    [
      _vm.$route.name === "Products"
        ? _c("filters-icon", { staticClass: "filter_icon__img" })
        : _vm._e(),
      _vm._v(" "),
      _c("h1", { staticClass: "pd0 mb0 mauto" }, [
        _vm._v(" " + _vm._s(_vm.listHeader))
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/assets/filter_icon5.png":
/*!*******************************************!*\
  !*** ./resources/assets/filter_icon5.png ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/filter_icon5.png?2def7abe12834c968c5bedd74977aa76";

/***/ }),

/***/ "./resources/js/components/Admin/Products/FiltersIcon.vue":
/*!****************************************************************!*\
  !*** ./resources/js/components/Admin/Products/FiltersIcon.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FiltersIcon_vue_vue_type_template_id_8a64b858___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FiltersIcon.vue?vue&type=template&id=8a64b858& */ "./resources/js/components/Admin/Products/FiltersIcon.vue?vue&type=template&id=8a64b858&");
/* harmony import */ var _FiltersIcon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FiltersIcon.vue?vue&type=script&lang=js& */ "./resources/js/components/Admin/Products/FiltersIcon.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FiltersIcon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FiltersIcon_vue_vue_type_template_id_8a64b858___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FiltersIcon_vue_vue_type_template_id_8a64b858___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Admin/Products/FiltersIcon.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Admin/Products/FiltersIcon.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/Admin/Products/FiltersIcon.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FiltersIcon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./FiltersIcon.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Products/FiltersIcon.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FiltersIcon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Admin/Products/FiltersIcon.vue?vue&type=template&id=8a64b858&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/Admin/Products/FiltersIcon.vue?vue&type=template&id=8a64b858& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FiltersIcon_vue_vue_type_template_id_8a64b858___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./FiltersIcon.vue?vue&type=template&id=8a64b858& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Products/FiltersIcon.vue?vue&type=template&id=8a64b858&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FiltersIcon_vue_vue_type_template_id_8a64b858___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FiltersIcon_vue_vue_type_template_id_8a64b858___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Admin/Products/ProductListHeader.vue":
/*!**********************************************************************!*\
  !*** ./resources/js/components/Admin/Products/ProductListHeader.vue ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ProductListHeader_vue_vue_type_template_id_32da2eda___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProductListHeader.vue?vue&type=template&id=32da2eda& */ "./resources/js/components/Admin/Products/ProductListHeader.vue?vue&type=template&id=32da2eda&");
/* harmony import */ var _ProductListHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProductListHeader.vue?vue&type=script&lang=js& */ "./resources/js/components/Admin/Products/ProductListHeader.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ProductListHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ProductListHeader_vue_vue_type_template_id_32da2eda___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ProductListHeader_vue_vue_type_template_id_32da2eda___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Admin/Products/ProductListHeader.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Admin/Products/ProductListHeader.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/Admin/Products/ProductListHeader.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductListHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ProductListHeader.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Products/ProductListHeader.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductListHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Admin/Products/ProductListHeader.vue?vue&type=template&id=32da2eda&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/components/Admin/Products/ProductListHeader.vue?vue&type=template&id=32da2eda& ***!
  \*****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductListHeader_vue_vue_type_template_id_32da2eda___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ProductListHeader.vue?vue&type=template&id=32da2eda& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Products/ProductListHeader.vue?vue&type=template&id=32da2eda&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductListHeader_vue_vue_type_template_id_32da2eda___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductListHeader_vue_vue_type_template_id_32da2eda___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Admin/Products/functions/changeMainPhotoOfItemInList.js":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/Admin/Products/functions/changeMainPhotoOfItemInList.js ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  changeMainPhoto: function changeMainPhoto(event) {
    if (this.numberOfPhotos < 2) {
      return;
    }

    if (this.xPerPhoto === 0) {
      return;
    }

    var xy = this.$refs.mainPhotoDiv.getBoundingClientRect();
    var xWay = event.x - xy.x;

    if (xWay < 0) {
      return;
    }

    this.indexOfMainPhoto = Math.ceil(xWay / this.xPerPhoto) - 1;
  },
  changeMainPhotoBySmallPhoto: function changeMainPhotoBySmallPhoto(event) {
    if (this.numberOfPhotos < 2) {
      return;
    }

    if (event.target.className === 'photo__size1') {
      this.indexOfMainPhoto = Number(event.target.dataset.photoindex);
    }
  },
  setFirstMainPhoto: function setFirstMainPhoto() {
    this.indexOfMainPhoto = 0;
  }
});

/***/ }),

/***/ "./resources/js/components/Admin/Products/someComputed/computedForProductItem.js":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/Admin/Products/someComputed/computedForProductItem.js ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  xPerPhoto: function xPerPhoto() {
    if (this.numberOfPhotos < 2) {
      return 0;
    }

    return 250 / this.numberOfPhotos; // 250px ширина фото
  },
  getMainPhoto: function getMainPhoto() {
    if (!this.product.photo_set) {
      return '';
    }

    var photoInfoArr = JSON.parse(this.product.photo_set);

    if (!photoInfoArr) {
      return '';
    }

    var folderName = "/storage/".concat(this.imgFolderPrefix, "3");
    var fileNamePrefix = "".concat(this.product.id, "s3-");
    var imgClass = "photo__size3";
    var mainPhotoName = photoInfoArr[this.indexOfMainPhoto];
    return "<img alt=\"\"\n                    src=\"".concat(folderName, "/").concat(fileNamePrefix).concat(mainPhotoName, "\"\n                    class=\"").concat(imgClass, "\" />");
  },
  getPhotos: function getPhotos() {
    if (!this.product.photo_set) {
      return '';
    }

    var photoInfoArr = JSON.parse(this.product.photo_set);

    if (!photoInfoArr) {
      return '';
    }

    var folderName = "/storage/".concat(this.imgFolderPrefix, "3");
    var fileNamePrefix = "".concat(this.product.id, "s3-");
    var photoArr = photoInfoArr.map(function (timeName, index) {
      return "<img data-photoindex=\"".concat(index, "\" alt=\"\" src=\"").concat(folderName, "/").concat(fileNamePrefix).concat(timeName, "\" class=\"photo__size1\" />");
    });
    return photoArr.join('');
  },
  numberOfPhotos: function numberOfPhotos() {
    if (!this.product.photo_set) {
      return 0;
    }

    var photoInfoArr = JSON.parse(this.product.photo_set);

    if (!photoInfoArr) {
      return 0;
    }

    return photoInfoArr.length;
  },
  getPrice: function getPrice() {
    var _parametersArr$price;

    var parametersArr = JSON.parse(this.product.parameters);
    var price = (_parametersArr$price = parametersArr.price) !== null && _parametersArr$price !== void 0 ? _parametersArr$price : '';
    return price ? price + ' ₽' : '';
  },
  getCategories: function getCategories() {
    var parametersArr = JSON.parse(this.product.parameters);
    var categoriesArr = parametersArr.categories.map(function (item) {
      return "".concat(item.name);
    });
    return categoriesArr.join(', ');
  },
  getMaterials: function getMaterials() {
    var parametersArr = JSON.parse(this.product.parameters);
    var materialsArr = parametersArr.materials.map(function (item) {
      return "".concat(item.name);
    });
    return materialsArr.join(', ');
  },
  getColors: function getColors() {
    var parametersArr = JSON.parse(this.product.parameters);
    var colorsArr = parametersArr.colors.map(function (item) {
      return "".concat(item.name);
    });
    return colorsArr.join(', ');
  }
});

/***/ })

}]);