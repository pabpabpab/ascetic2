(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Products/SingleProductCategoryItem.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Admin/Products/SingleProductCategoryItem.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
  name: "SingleProductCategoryItem",
  props: ['category', 'index', 'entityName']
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/SingleProductPage.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Admin/SingleProductPage.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _Products_SingleProductCategoryItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Products/SingleProductCategoryItem */ "./resources/js/components/Admin/Products/SingleProductCategoryItem.vue");
/* harmony import */ var _Products_someComputed_computedForSingleProduct__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Products/someComputed/computedForSingleProduct */ "./resources/js/components/Admin/Products/someComputed/computedForSingleProduct.js");
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



/* harmony default export */ __webpack_exports__["default"] = ({
  name: "SingleProductPage",
  components: {
    SingleProductCategoryItem: _Products_SingleProductCategoryItem__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      indexOfMainPhoto: 0,
      mainPhotoSizeIndex: 4,
      mainPhotoWrapperHeight: 0,
      mainPhotoRatio: 0
    };
  },
  computed: _objectSpread(_objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('products', ['singleProductFromServer'])), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])(['imgFolderPrefix'])), _Products_someComputed_computedForSingleProduct__WEBPACK_IMPORTED_MODULE_2__["default"]),
  methods: {
    changeMainPhotoBySmallPhoto: function changeMainPhotoBySmallPhoto(event) {
      if (event.target.className === 'photo__size2') {
        this.indexOfMainPhoto = Number(event.target.dataset.photoindex);
      }
    },
    startViewLargePhoto: function startViewLargePhoto() {
      var wrapper = this.$refs.mainPhotoDiv.getBoundingClientRect();
      this.mainPhotoWrapperHeight = wrapper.bottom - wrapper.top;
      this.$refs.mainPhotoDiv.style.height = this.mainPhotoWrapperHeight + 'px';
      this.mainPhotoRatio = 1600 / (wrapper.right - wrapper.left); // 1600px ширина фото под лупой
      //console.log(wrapper);

      this.mainPhotoSizeIndex = 5;
    },
    viewLargePhoto: function viewLargePhoto(event) {
      var photo = this.$refs.mainPhotoDiv.getBoundingClientRect();
      var xWay = event.x - photo.left;
      var yWay = event.y - photo.top;
      this.$refs.mainPhotoDiv.scrollLeft = xWay * this.mainPhotoRatio / 1.6;
      this.$refs.mainPhotoDiv.scrollTop = yWay * this.mainPhotoRatio / 1.6; // 1.6 ручной коэффициент, чтобы большое фото под лупой двигалось сразу
      //console.log(event);
    },
    showInitialPhoto: function showInitialPhoto() {
      this.mainPhotoSizeIndex = 4;
    }
  },
  mounted: function mounted() {
    this.$store.dispatch('products/loadSingleProduct', this.$route.params.id);
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Products/SingleProductCategoryItem.vue?vue&type=template&id=389f5b18&":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Admin/Products/SingleProductCategoryItem.vue?vue&type=template&id=389f5b18& ***!
  \*******************************************************************************************************************************************************************************************************************************************/
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
    "span",
    [
      _vm.index > 0 ? _c("span", [_vm._v(",  ")]) : _vm._e(),
      _vm._v(" "),
      _c(
        "router-link",
        {
          staticClass: "category_item__name__link",
          attrs: {
            to: {
              name: "ProductsByCategory",
              params: {
                categoryEntity: _vm.entityName,
                slug: _vm.category.slug
              }
            }
          }
        },
        [_vm._v("\n        " + _vm._s(_vm.category.name) + "\n    ")]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



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
    { staticClass: "content_block single_product__content_block" },
    [
      _c("div", { staticClass: "single_product__first_wrapper" }, [
        _c("div", {
          staticClass: "single_product__small_photos",
          domProps: { innerHTML: _vm._s(_vm.getPhotos) },
          on: {
            mouseover: function($event) {
              return _vm.changeMainPhotoBySmallPhoto($event)
            }
          }
        }),
        _vm._v(" "),
        _c("div", {
          ref: "mainPhotoDiv",
          staticClass: "single_product__big_photo_wrapper",
          domProps: { innerHTML: _vm._s(_vm.getMainPhoto) },
          on: {
            mouseover: function($event) {
              return _vm.startViewLargePhoto()
            },
            mousemove: function($event) {
              $event.stopPropagation()
              return _vm.viewLargePhoto($event)
            },
            mouseleave: function($event) {
              return _vm.showInitialPhoto()
            }
          }
        }),
        _vm._v(" "),
        _c("div", { staticClass: "single_product__top_characteristics" }, [
          _c("h1", { staticClass: "single_product__h1" }, [
            _vm._v(
              "\n                " + _vm._s(_vm.getHeader) + "\n            "
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "single_product__price" }, [
            _vm._v(
              "\n                " + _vm._s(_vm.getPrice) + "\n            "
            )
          ]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "single_product__categories" },
            [
              _vm._v("\n                Категория:\n                "),
              _vm._l(_vm.getCategories, function(category, index) {
                return _c("single-product-category-item", {
                  key: category.id,
                  attrs: {
                    category: category,
                    index: index,
                    "entity-name": "category"
                  }
                })
              })
            ],
            2
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "single_product__categories" },
            [
              _vm._v("\n                Материал:\n                "),
              _vm._l(_vm.getMaterials, function(category, index) {
                return _c("single-product-category-item", {
                  key: category.id,
                  attrs: {
                    category: category,
                    index: index,
                    "entity-name": "material"
                  }
                })
              })
            ],
            2
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "single_product__categories" },
            [
              _vm._v("\n                Цвет:\n                "),
              _vm._l(_vm.getColors, function(category, index) {
                return _c("single-product-category-item", {
                  key: category.id,
                  attrs: {
                    category: category,
                    index: index,
                    "entity-name": "color"
                  }
                })
              })
            ],
            2
          ),
          _vm._v(" "),
          _c("div", { staticClass: "single_product__description" }, [
            _vm._v(
              "\n                " +
                _vm._s(_vm.getDescription) +
                "\n            "
            )
          ])
        ])
      ])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/Admin/Products/SingleProductCategoryItem.vue":
/*!******************************************************************************!*\
  !*** ./resources/js/components/Admin/Products/SingleProductCategoryItem.vue ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SingleProductCategoryItem_vue_vue_type_template_id_389f5b18___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SingleProductCategoryItem.vue?vue&type=template&id=389f5b18& */ "./resources/js/components/Admin/Products/SingleProductCategoryItem.vue?vue&type=template&id=389f5b18&");
/* harmony import */ var _SingleProductCategoryItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SingleProductCategoryItem.vue?vue&type=script&lang=js& */ "./resources/js/components/Admin/Products/SingleProductCategoryItem.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SingleProductCategoryItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SingleProductCategoryItem_vue_vue_type_template_id_389f5b18___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SingleProductCategoryItem_vue_vue_type_template_id_389f5b18___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Admin/Products/SingleProductCategoryItem.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Admin/Products/SingleProductCategoryItem.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/components/Admin/Products/SingleProductCategoryItem.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleProductCategoryItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./SingleProductCategoryItem.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Products/SingleProductCategoryItem.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleProductCategoryItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Admin/Products/SingleProductCategoryItem.vue?vue&type=template&id=389f5b18&":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/components/Admin/Products/SingleProductCategoryItem.vue?vue&type=template&id=389f5b18& ***!
  \*************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleProductCategoryItem_vue_vue_type_template_id_389f5b18___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./SingleProductCategoryItem.vue?vue&type=template&id=389f5b18& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Products/SingleProductCategoryItem.vue?vue&type=template&id=389f5b18&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleProductCategoryItem_vue_vue_type_template_id_389f5b18___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleProductCategoryItem_vue_vue_type_template_id_389f5b18___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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
    var folderName = "/storage/".concat(this.imgFolderPrefix, "5");
    var fileNamePrefix = "".concat(product.id, "s5-");
    var cssClass = "photo__size".concat(this.mainPhotoSizeIndex);
    var mainPhotoName = photoInfoArr[this.indexOfMainPhoto];
    return "<img alt=\"\"\n                    src=\"".concat(folderName, "/").concat(fileNamePrefix).concat(mainPhotoName, "\"\n                    class=\"").concat(cssClass, "\" />");
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
  },
  getPrice: function getPrice() {
    var _parametersArr$price;

    if (this.noData) {
      return '';
    }

    var parametersArr = JSON.parse(this.singleProductFromServer.product.parameters);
    var price = (_parametersArr$price = parametersArr.price) !== null && _parametersArr$price !== void 0 ? _parametersArr$price : '';
    return price ? price + ' ₽' : '';
  },
  getCategories: function getCategories() {
    if (this.noData) {
      return '';
    }

    var parametersArr = JSON.parse(this.singleProductFromServer.product.parameters);
    return parametersArr.categories;
  },
  getMaterials: function getMaterials() {
    if (this.noData) {
      return '';
    }

    var parametersArr = JSON.parse(this.singleProductFromServer.product.parameters);
    return parametersArr.materials;
  },
  getColors: function getColors() {
    if (this.noData) {
      return '';
    }

    var parametersArr = JSON.parse(this.singleProductFromServer.product.parameters);
    return parametersArr.colors;
  },

  /*
  getCategories() {
      if (this.noData) {
          return '';
      }
      const parametersArr = JSON.parse(this.singleProductFromServer.product.parameters);
      //console.log(parametersArr.categories);
      const categoriesArr = parametersArr.categories.map(function(item) {
          return `${item.id} ${item.name}`;
      });
      return categoriesArr.join(', ');
  },
   getMaterials() {
      if (this.noData) {
          return '';
      }
      const parametersArr = JSON.parse(this.singleProductFromServer.product.parameters);
      const materialsArr = parametersArr.materials.map(function(item) {
          return `${item.id} ${item.name}`;
      });
      return materialsArr.join(', ');
  },
   getColors() {
      if (this.noData) {
          return '';
      }
      const parametersArr = JSON.parse(this.singleProductFromServer.product.parameters);
      const colorsArr = parametersArr.colors.map(function(item) {
          return `${item.id} ${item.name}`;
      });
      return colorsArr.join(', ');
  },
  */
  getDescription: function getDescription() {
    if (this.noData) {
      return '';
    }

    return this.singleProductFromServer.description.description;
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