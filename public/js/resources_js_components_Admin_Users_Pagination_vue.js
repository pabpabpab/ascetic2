(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Admin_Users_Pagination_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/Users/Pagination.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/Users/old_users_Pagination.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'Pagination',
  props: ['cartItem'],
  methods: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapActions)(['showUsersPage', 'divideUsersIntoPages'])),
  computed: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapGetters)(['currentUsersPage', 'currentUsersPageNumber', 'customizedUsers', 'customizedUsersLength', 'usersPaginationLinksShot', 'usersPaginationLinkCssArr', 'usersQuantityPerPage', 'copyOfUsersQuantityPerPage', 'usersWing', 'usersMinimumPagesForComplexPagination'])), {}, {
    aLotOfPages: function aLotOfPages() {
      if (this.customizedUsersLength < this.usersMinimumPagesForComplexPagination) {
        return false;
      }

      return this.customizedUsersLength > this.usersWing * 3;
    },
    showFirstPageWithDots: function showFirstPageWithDots() {
      return this.aLotOfPages && this.currentUsersPageNumber > this.usersWing + 2;
    },
    showLastPageWithDots: function showLastPageWithDots() {
      /* eslint max-len: ["error", { "code": 130 }] */
      return this.aLotOfPages && this.currentUsersPageNumber + (this.usersWing + 1) < this.customizedUsersLength;
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

/***/ "./resources/js/components/Admin/Users/Pagination.vue":
/*!************************************************************!*\
  !*** ./resources/js/components/Admin/Users/old_users_Pagination.vue ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Pagination_vue_vue_type_template_id_64e2a6a8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./old_users_Pagination.vue?vue&type=template&id=64e2a6a8& */ "./resources/js/components/Admin/Users/Pagination.vue?vue&type=template&id=64e2a6a8&");
/* harmony import */ var _Pagination_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./old_users_Pagination.vue?vue&type=script&lang=js& */ "./resources/js/components/Admin/Users/Pagination.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Pagination_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Pagination_vue_vue_type_template_id_64e2a6a8___WEBPACK_IMPORTED_MODULE_0__.render,
  _Pagination_vue_vue_type_template_id_64e2a6a8___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null

)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Admin/Users/old_users_Pagination.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Admin/Users/Pagination.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/Admin/Users/old_users_Pagination.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Pagination_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./old_users_Pagination.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/Users/Pagination.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Pagination_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default);

/***/ }),

/***/ "./resources/js/components/Admin/Users/Pagination.vue?vue&type=template&id=64e2a6a8&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/Admin/Users/old_users_Pagination.vue?vue&type=template&id=64e2a6a8& ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Pagination_vue_vue_type_template_id_64e2a6a8___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Pagination_vue_vue_type_template_id_64e2a6a8___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Pagination_vue_vue_type_template_id_64e2a6a8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./old_users_Pagination.vue?vue&type=template&id=64e2a6a8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/Users/Pagination.vue?vue&type=template&id=64e2a6a8&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/Users/Pagination.vue?vue&type=template&id=64e2a6a8&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/Users/old_users_Pagination.vue?vue&type=template&id=64e2a6a8& ***!
  \**********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("nav", { staticClass: "pagination_nav" }, [
    _vm.customizedUsersLength > 1
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
                      return _vm.showUsersPage(_vm.currentUsersPage - 1)
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
                            return _vm.showUsersPage(0)
                          }
                        }
                      },
                      [_vm._v("\n                1\n            ")]
                    ),
                    _vm._v(" "),
                    _c("span", { staticClass: "pagination_dots" }, [
                      _vm._v("\n                ...\n            ")
                    ])
                  ])
                : _vm._e(),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "pagination_middle" },
                _vm._l(_vm.usersPaginationLinksShot, function(item) {
                  return _c(
                    "a",
                    {
                      key: item,
                      class: _vm.usersPaginationLinkCssArr[item - 1],
                      attrs: { href: "#" },
                      on: {
                        click: function($event) {
                          $event.preventDefault()
                          return _vm.showUsersPage(item - 1)
                        }
                      }
                    },
                    [
                      _vm._v(
                        "\n                " + _vm._s(item) + "\n            "
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
                      _vm._v("\n                ...\n            ")
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
                                return _vm.showUsersPage(
                                  _vm.customizedUsersLength - 1
                                )
                              }
                            }
                          },
                          [
                            _vm._v(
                              "\n                " +
                                _vm._s(_vm.customizedUsersLength) +
                                "\n            "
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
                      return _vm.showUsersPage(_vm.currentUsersPage + 1)
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
    _vm.customizedUsersLength > 1
      ? _c("div", { staticClass: "viewAll" }, [
          _c(
            "a",
            {
              staticClass: "pagination_link",
              attrs: { href: "#" },
              on: {
                click: function($event) {
                  $event.preventDefault()
                  return _vm.divideUsersIntoPages(1000000)
                }
              }
            },
            [_vm._v("\n        View all\n      ")]
          )
        ])
      : _vm._e(),
    _vm._v(" "),
    _vm.usersQuantityPerPage === 1000000
      ? _c("div", { staticClass: "viewAll" }, [
          _c(
            "a",
            {
              staticClass: "pagination_link",
              attrs: { href: "#" },
              on: {
                click: function($event) {
                  $event.preventDefault()
                  return _vm.divideUsersIntoPages(
                    _vm.copyOfUsersQuantityPerPage
                  )
                }
              }
            },
            [_vm._v("\n        Split into pages\n    ")]
          )
        ])
      : _vm._e()
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);
