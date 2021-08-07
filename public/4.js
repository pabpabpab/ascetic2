(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Blocks/Pagination.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Admin/Blocks/Pagination.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************/
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
  name: 'Pagination',
  props: ['moduleName'],
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])(['showPage', 'divideIntoPages'])),
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])(['currentPageIndex', 'currentPageNumber', 'customized', 'customizedLength', 'paginationLinksShot', 'paginationLinkCssArr', 'quantityPerPage', 'copyOfQuantityPerPage', 'wing', 'minimumPagesForComplexPagination'])), {}, {
    aLotOfPages: function aLotOfPages() {
      if (this.customizedLength < this.minimumPagesForComplexPagination(this.moduleName)) {
        return false;
      }

      return this.customizedLength > this.wing(this.moduleName) * 3;
    },
    showFirstPageWithDots: function showFirstPageWithDots() {
      return this.aLotOfPages && this.currentPageNumber > this.wing(this.moduleName) + 2;
    },
    showLastPageWithDots: function showLastPageWithDots() {
      /* eslint max-len: ["error", { "code": 130 }] */
      return this.aLotOfPages && this.currentPageNumber + (this.wing(this.moduleName) + 1) < this.customizedLength;
    },
    containerClass: function containerClass() {
      if (this.aLotOfPages) {
        return 'pagination_table pagination_width_outer mauto';
      }

      return 'pagination_table mauto';
    },
    innerContainerClass: function innerContainerClass() {
      if (this.aLotOfPages) {
        return 'pagination_numbers_container pagination_width_inner';
      }

      return 'pagination_numbers_container';
    }
  })
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Blocks/Pagination.vue?vue&type=template&id=0a236ee8&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Admin/Blocks/Pagination.vue?vue&type=template&id=0a236ee8& ***!
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
  return _c("nav", { staticClass: "pagination_nav" }, [
    _vm.customizedLength > 1
      ? _c("table", { class: _vm.containerClass }, [
          _c("tr", [
            _c("td", [
              _c(
                "a",
                {
                  staticClass: "pagination_link",
                  attrs: { href: "#" },
                  on: {
                    click: function($event) {
                      $event.preventDefault()
                      return _vm.showPage({
                        moduleName: _vm.moduleName,
                        page: _vm.currentPageIndex - 1
                      })
                    }
                  }
                },
                [_c("i", { staticClass: "fas fa-angle-left" })]
              )
            ]),
            _vm._v(" "),
            _c("td", { class: _vm.innerContainerClass }, [
              _vm.showFirstPageWithDots
                ? _c("div", { staticClass: "pagination_left" }, [
                    _c(
                      "a",
                      {
                        staticClass: "pagination_link",
                        attrs: { href: "#" },
                        on: {
                          click: function($event) {
                            $event.preventDefault()
                            return _vm.showPage({
                              moduleName: _vm.moduleName,
                              page: 0
                            })
                          }
                        }
                      },
                      [_vm._v("\n                    1\n                ")]
                    ),
                    _vm._v(" "),
                    _c("span", { staticClass: "pagination_dots" }, [
                      _vm._v("\n                    ...\n                ")
                    ])
                  ])
                : _vm._e(),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "pagination_middle" },
                _vm._l(_vm.paginationLinksShot, function(item) {
                  return _c(
                    "a",
                    {
                      key: item,
                      class: _vm.paginationLinkCssArr[item - 1],
                      attrs: { href: "#" },
                      on: {
                        click: function($event) {
                          $event.preventDefault()
                          return _vm.showPage({
                            moduleName: _vm.moduleName,
                            page: item - 1
                          })
                        }
                      }
                    },
                    [
                      _vm._v(
                        "\n                    " +
                          _vm._s(item) +
                          "\n                "
                      )
                    ]
                  )
                }),
                0
              ),
              _vm._v(" "),
              _vm.showLastPageWithDots
                ? _c("div", { staticClass: "pagination_right" }, [
                    _c("span", { staticClass: "pagination_dots" }, [
                      _vm._v("\n                    ...\n                ")
                    ]),
                    _vm._v(" "),
                    _vm.showLastPageWithDots
                      ? _c(
                          "a",
                          {
                            staticClass: "pagination_link",
                            attrs: { href: "#" },
                            on: {
                              click: function($event) {
                                $event.preventDefault()
                                return _vm.showPage({
                                  moduleName: _vm.moduleName,
                                  page: _vm.customizedLength - 1
                                })
                              }
                            }
                          },
                          [
                            _vm._v(
                              "\n                    " +
                                _vm._s(_vm.customizedLength) +
                                "\n                "
                            )
                          ]
                        )
                      : _vm._e()
                  ])
                : _vm._e()
            ]),
            _vm._v(" "),
            _c("td", [
              _c(
                "a",
                {
                  staticClass: "pagination_link",
                  attrs: { href: "#" },
                  on: {
                    click: function($event) {
                      $event.preventDefault()
                      return _vm.showPage({
                        moduleName: _vm.moduleName,
                        page: _vm.currentPageIndex + 1
                      })
                    }
                  }
                },
                [_c("i", { staticClass: "fas fa-angle-right" })]
              )
            ])
          ])
        ])
      : _vm._e(),
    _vm._v(" "),
    _vm.customizedLength > 1
      ? _c("div", { staticClass: "viewAll" }, [
          _c(
            "a",
            {
              staticClass: "pagination_link",
              attrs: { href: "#" },
              on: {
                click: function($event) {
                  $event.preventDefault()
                  return _vm.divideIntoPages({
                    moduleName: _vm.moduleName,
                    customQuantityPerPage: 1000000
                  })
                }
              }
            },
            [_vm._v("\n            View all\n        ")]
          )
        ])
      : _vm._e(),
    _vm._v(" "),
    _vm.quantityPerPage(_vm.moduleName) === 1000000
      ? _c("div", { staticClass: "viewAll" }, [
          _c(
            "a",
            {
              staticClass: "pagination_link",
              attrs: { href: "#" },
              on: {
                click: function($event) {
                  $event.preventDefault()
                  _vm.divideIntoPages({
                    moduleName: _vm.moduleName,
                    customQuantityPerPage: _vm.copyOfQuantityPerPage(
                      _vm.moduleName
                    )
                  })
                }
              }
            },
            [_vm._v("\n            Split into pages\n        ")]
          )
        ])
      : _vm._e()
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/Admin/Blocks/Pagination.vue":
/*!*************************************************************!*\
  !*** ./resources/js/components/Admin/Blocks/Pagination.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Pagination_vue_vue_type_template_id_0a236ee8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Pagination.vue?vue&type=template&id=0a236ee8& */ "./resources/js/components/Admin/Blocks/Pagination.vue?vue&type=template&id=0a236ee8&");
/* harmony import */ var _Pagination_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Pagination.vue?vue&type=script&lang=js& */ "./resources/js/components/Admin/Blocks/Pagination.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Pagination_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Pagination_vue_vue_type_template_id_0a236ee8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Pagination_vue_vue_type_template_id_0a236ee8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Admin/Blocks/Pagination.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Admin/Blocks/Pagination.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/Admin/Blocks/Pagination.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Pagination_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Pagination.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Blocks/Pagination.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Pagination_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Admin/Blocks/Pagination.vue?vue&type=template&id=0a236ee8&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/Admin/Blocks/Pagination.vue?vue&type=template&id=0a236ee8& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Pagination_vue_vue_type_template_id_0a236ee8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Pagination.vue?vue&type=template&id=0a236ee8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Blocks/Pagination.vue?vue&type=template&id=0a236ee8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Pagination_vue_vue_type_template_id_0a236ee8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Pagination_vue_vue_type_template_id_0a236ee8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);