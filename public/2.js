(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Blocks/SeoManager.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Admin/Blocks/SeoManager.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _Products_functions_fitTextareaHeight__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../Products/functions/fitTextareaHeight */ "./resources/js/components/Admin/Products/functions/fitTextareaHeight.js");
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


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "SeoManager",
  props: ['entity'],
  data: function data() {
    return {
      serverData: {},
      photoSizeIndex: 2,
      localData: {
        entityId: 0,
        pageTitle: '',
        pageDescription: '',
        imgAlt: '',
        photoName: ''
      }
    };
  },
  computed: _objectSpread(_objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('seoManager', ['seoData'])), {}, {
    contentWrapperClass: function contentWrapperClass() {
      return this.entity === 'photo' ? 'seo_manager__content_wrapper seo_manager__content_wrapper__from_photo_manager' : 'seo_manager__content_wrapper';
    }
  }, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])(['imgFolderPrefix'])), {}, {
    serverSeoDataValue: function serverSeoDataValue() {
      return this.seoData(this.entity);
    },
    noData: function noData() {
      return Object.keys(this.serverData).length === 0;
    },
    getHeader: function getHeader() {
      var _this$serverData$cate, _this$serverData$prod, _this$serverData$prod2;

      if (this.noData) {
        return '';
      } // js-оператор ?.


      var categoryName = (_this$serverData$cate = this.serverData.category) === null || _this$serverData$cate === void 0 ? void 0 : _this$serverData$cate.name;
      var productName = (_this$serverData$prod = this.serverData.product) === null || _this$serverData$prod === void 0 ? void 0 : _this$serverData$prod.name;
      var productPrice = (_this$serverData$prod2 = this.serverData.product) === null || _this$serverData$prod2 === void 0 ? void 0 : _this$serverData$prod2.price;
      var header = {
        category: "\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F \xAB".concat(categoryName, "\xBB"),
        product: "\u0422\u043E\u0432\u0430\u0440 \xAB".concat(productName, "\xBB ").concat(productPrice, " \u20BD"),
        photo: "\u042D\u0442\u043E \u0444\u043E\u0442\u043E \u0442\u043E\u0432\u0430\u0440\u0430 \xAB".concat(productName, "\xBB ").concat(productPrice, " \u20BD")
      };
      return header[this.entity];
    },
    getHeaderHint: function getHeaderHint() {
      var _this$serverData$prod3, _this$serverData$prod4;

      if (this.noData) {
        return '';
      } // js-оператор ?.


      var categoryDescription = '';
      var productDescription = (_this$serverData$prod3 = this.serverData.product) === null || _this$serverData$prod3 === void 0 ? void 0 : (_this$serverData$prod4 = _this$serverData$prod3.description) === null || _this$serverData$prod4 === void 0 ? void 0 : _this$serverData$prod4.description;
      var headerHint = {
        category: "".concat(categoryDescription),
        product: "".concat(productDescription),
        photo: "".concat(productDescription)
      };
      return headerHint[this.entity];
    },
    getDescriptionInputLabel: function getDescriptionInputLabel() {
      var labelText = {
        category: "Description \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B \u044D\u0442\u043E\u0439 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0438 \u0442\u043E\u0432\u0430\u0440\u043E\u0432",
        product: "Description \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B \u044D\u0442\u043E\u0433\u043E \u0442\u043E\u0432\u0430\u0440\u0430",
        photo: "Description \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B \u044D\u0442\u043E\u0433\u043E \u0444\u043E\u0442\u043E"
      };
      return labelText[this.entity];
    },
    getTitleInputLabel: function getTitleInputLabel() {
      var labelText = {
        category: "Title \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B \u044D\u0442\u043E\u0439 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0438 \u0442\u043E\u0432\u0430\u0440\u043E\u0432",
        product: "Title \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B \u044D\u0442\u043E\u0433\u043E \u0442\u043E\u0432\u0430\u0440\u0430",
        photo: "Title \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B \u044D\u0442\u043E\u0433\u043E \u0444\u043E\u0442\u043E"
      };
      return labelText[this.entity];
    },
    getAltInputLabel: function getAltInputLabel() {
      var labelText = {
        category: "",
        product: "",
        photo: "Alt-\u0430\u0442\u0440\u0438\u0431\u0443\u0442 \u044D\u0442\u043E\u0433\u043E \u0444\u043E\u0442\u043E"
      };
      return labelText[this.entity];
    },
    getHeaderPhoto: function getHeaderPhoto() {
      var _this$localData$photo;

      if (this.noData) {
        return '';
      }

      var photoNameBook = {
        category: '',
        product: JSON.parse(this.serverData.product.photo_set) ? JSON.parse(this.serverData.product.photo_set)[0] : '',
        photo: (_this$localData$photo = this.localData.photoName) !== null && _this$localData$photo !== void 0 ? _this$localData$photo : ''
      };
      var photoName = photoNameBook[this.entity];

      if (!photoName) {
        return '';
      }

      var folderName = "/storage/".concat(this.imgFolderPrefix).concat(this.photoSizeIndex);
      var fileNamePrefix = "".concat(this.serverData.product.id, "s").concat(this.photoSizeIndex, "-");
      return "<img alt=\"\"\n                        src=\"".concat(folderName, "/").concat(fileNamePrefix).concat(photoName, "\"\n                        class=\"photo__size").concat(this.photoSizeIndex, " seo_manager__header__photo\" />");
    }
  }),
  methods: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])('seoManager', ['closeSeoManager', 'saveSeoData'])), {}, {
    fitTextareaHeight: function fitTextareaHeight(event) {
      Object(_Products_functions_fitTextareaHeight__WEBPACK_IMPORTED_MODULE_1__["default"])(event);
    }
  }),
  watch: {
    serverSeoDataValue: function serverSeoDataValue(val) {
      var _val$category, _val$product, _val$product2, _val$seo, _val$seo2, _val$seo3;

      if (Object.keys(val).length === 0) {
        return;
      }

      this.serverData = _objectSpread({}, val);
      var entityId = {
        category: (_val$category = val.category) === null || _val$category === void 0 ? void 0 : _val$category.id,
        product: (_val$product = val.product) === null || _val$product === void 0 ? void 0 : _val$product.id,
        photo: (_val$product2 = val.product) === null || _val$product2 === void 0 ? void 0 : _val$product2.id
      };
      this.localData.entityId = entityId[this.entity];
      this.localData.pageTitle = val === null || val === void 0 ? void 0 : (_val$seo = val.seo) === null || _val$seo === void 0 ? void 0 : _val$seo.page_title;
      this.localData.pageDescription = val === null || val === void 0 ? void 0 : (_val$seo2 = val.seo) === null || _val$seo2 === void 0 ? void 0 : _val$seo2.page_description;
      this.localData.imgAlt = val === null || val === void 0 ? void 0 : (_val$seo3 = val.seo) === null || _val$seo3 === void 0 ? void 0 : _val$seo3.alt_text;
      this.localData.photoName = val === null || val === void 0 ? void 0 : val.photoName;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Blocks/SeoManager.vue?vue&type=template&id=4db684de&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Admin/Blocks/SeoManager.vue?vue&type=template&id=4db684de& ***!
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
  return _c("div", { staticClass: "seo_manager__screen" }, [
    _c("div", { class: _vm.contentWrapperClass }, [
      _c(
        "div",
        {
          staticClass: "seo_manager__header",
          attrs: { title: _vm.getHeaderHint }
        },
        [
          _vm.entity !== "category"
            ? _c("p", { domProps: { innerHTML: _vm._s(_vm.getHeaderPhoto) } })
            : _vm._e(),
          _vm._v(" "),
          _c("h1", [_vm._v(_vm._s(_vm.getHeader))])
        ]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "seo_manager__content" }, [
        _vm.entity === "photo"
          ? _c("div", [
              _c("label", { staticClass: "seo_manager__input_label" }, [
                _vm._v(_vm._s(_vm.getAltInputLabel))
              ]),
              _vm._v(" "),
              _c("textarea", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.localData.imgAlt,
                    expression: "localData.imgAlt"
                  }
                ],
                staticClass:
                  "seo_manager__input_textarea seo_manager__input_textarea_alt",
                attrs: { placeholder: " " },
                domProps: { value: _vm.localData.imgAlt },
                on: {
                  input: [
                    function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.localData, "imgAlt", $event.target.value)
                    },
                    function($event) {
                      return _vm.fitTextareaHeight($event)
                    }
                  ]
                }
              })
            ])
          : _vm._e(),
        _vm._v(" "),
        _c("label", { staticClass: "seo_manager__input_label" }, [
          _vm._v(_vm._s(_vm.getTitleInputLabel))
        ]),
        _vm._v(" "),
        _c("textarea", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.localData.pageTitle,
              expression: "localData.pageTitle"
            }
          ],
          staticClass:
            "seo_manager__input_textarea seo_manager__input_textarea_title",
          attrs: { placeholder: " " },
          domProps: { value: _vm.localData.pageTitle },
          on: {
            input: [
              function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.localData, "pageTitle", $event.target.value)
              },
              function($event) {
                return _vm.fitTextareaHeight($event)
              }
            ]
          }
        }),
        _vm._v(" "),
        _c("label", { staticClass: "seo_manager__input_label" }, [
          _vm._v(_vm._s(_vm.getDescriptionInputLabel))
        ]),
        _vm._v(" "),
        _c("textarea", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.localData.pageDescription,
              expression: "localData.pageDescription"
            }
          ],
          staticClass:
            "seo_manager__input_textarea seo_manager__input_textarea_description",
          attrs: { placeholder: " " },
          domProps: { value: _vm.localData.pageDescription },
          on: {
            input: [
              function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.localData, "pageDescription", $event.target.value)
              },
              function($event) {
                return _vm.fitTextareaHeight($event)
              }
            ]
          }
        })
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "seo_manager__button_panel" }, [
        _c(
          "button",
          {
            staticClass: "seo_manager__save_button",
            on: {
              click: function($event) {
                $event.stopPropagation()
                return _vm.saveSeoData({
                  entity: _vm.entity,
                  data: _vm.localData
                })
              }
            }
          },
          [_vm._v("\n                    Сохранить\n            ")]
        )
      ]),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "seo_manager__collapse_icon",
          on: {
            click: function($event) {
              return _vm.closeSeoManager()
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

/***/ "./resources/js/components/Admin/Blocks/SeoManager.vue":
/*!*************************************************************!*\
  !*** ./resources/js/components/Admin/Blocks/SeoManager.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SeoManager_vue_vue_type_template_id_4db684de___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SeoManager.vue?vue&type=template&id=4db684de& */ "./resources/js/components/Admin/Blocks/SeoManager.vue?vue&type=template&id=4db684de&");
/* harmony import */ var _SeoManager_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SeoManager.vue?vue&type=script&lang=js& */ "./resources/js/components/Admin/Blocks/SeoManager.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SeoManager_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SeoManager_vue_vue_type_template_id_4db684de___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SeoManager_vue_vue_type_template_id_4db684de___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Admin/Blocks/SeoManager.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Admin/Blocks/SeoManager.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/Admin/Blocks/SeoManager.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SeoManager_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./SeoManager.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Blocks/SeoManager.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SeoManager_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Admin/Blocks/SeoManager.vue?vue&type=template&id=4db684de&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/Admin/Blocks/SeoManager.vue?vue&type=template&id=4db684de& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SeoManager_vue_vue_type_template_id_4db684de___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./SeoManager.vue?vue&type=template&id=4db684de& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Blocks/SeoManager.vue?vue&type=template&id=4db684de&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SeoManager_vue_vue_type_template_id_4db684de___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SeoManager_vue_vue_type_template_id_4db684de___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);