(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[18],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/SettingsMenuPage.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Admin/SettingsMenuPage.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'SettingsPage'
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/SettingsMenuPage.vue?vue&type=template&id=6b03045c&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Admin/SettingsMenuPage.vue?vue&type=template&id=6b03045c& ***!
  \*************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "show_block" }, [
    _c("h1", { staticClass: "pd0 mb0" }, [_vm._v("Настройки сайта")]),
    _vm._v(" "),
    _c("div", { staticClass: "content_block mainPage" }, [
      _c("ul", { staticClass: "mobile_menu__ul" }, [
        _c(
          "li",
          { staticClass: "mobile_menu__li" },
          [
            _c(
              "router-link",
              {
                staticClass: "mobile_menu__link",
                attrs: {
                  to: { name: "Settings", params: { subject: "contacts" } }
                }
              },
              [
                _vm._v(
                  "\n                        Контакты сайта\n                    "
                )
              ]
            )
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c("ul", { staticClass: "mobile_menu__ul" }, [
        _c(
          "li",
          { staticClass: "mobile_menu__li" },
          [
            _c(
              "router-link",
              {
                staticClass: "mobile_menu__link",
                attrs: {
                  to: { name: "Settings", params: { subject: "mainPageSeo" } }
                }
              },
              [
                _vm._v(
                  "\n                        SEO главной страницы сайта\n                    "
                )
              ]
            )
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c("ul", { staticClass: "mobile_menu__ul" }, [
        _c(
          "li",
          { staticClass: "mobile_menu__li" },
          [
            _c(
              "router-link",
              {
                staticClass: "mobile_menu__link",
                attrs: {
                  to: {
                    name: "Settings",
                    params: { subject: "visibleCategoriesLimit" }
                  }
                }
              },
              [
                _vm._v(
                  "\n                        Количество видимых категорий в верхнем меню\n                    "
                )
              ]
            )
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c("ul", { staticClass: "mobile_menu__ul" }, [
        _c(
          "li",
          { staticClass: "mobile_menu__li" },
          [
            _c(
              "router-link",
              {
                staticClass: "mobile_menu__link",
                attrs: {
                  to: { name: "Settings", params: { subject: "perPage" } }
                }
              },
              [
                _vm._v(
                  "\n                        Количество товаров на странице в списке товаров на сайте\n                    "
                )
              ]
            )
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c("ul", { staticClass: "mobile_menu__ul" }, [
        _c(
          "li",
          { staticClass: "mobile_menu__li" },
          [
            _c(
              "router-link",
              {
                staticClass: "mobile_menu__link",
                attrs: {
                  to: { name: "Settings", params: { subject: "cacheLimit" } }
                }
              },
              [
                _vm._v(
                  "\n                        Лимит кэширования\n                    "
                )
              ]
            )
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c("ul", { staticClass: "mobile_menu__ul" }, [
        _c(
          "li",
          { staticClass: "mobile_menu__li" },
          [
            _c(
              "router-link",
              {
                staticClass: "mobile_menu__link",
                attrs: {
                  to: { name: "Settings", params: { subject: "photoQuality" } }
                }
              },
              [
                _vm._v(
                  "\n                        Качество фото\n                    "
                )
              ]
            )
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c("ul", { staticClass: "mobile_menu__ul" }, [
        _c(
          "li",
          { staticClass: "mobile_menu__li" },
          [
            _c(
              "router-link",
              {
                staticClass: "mobile_menu__link",
                attrs: {
                  to: { name: "Settings", params: { subject: "adminEmail" } }
                }
              },
              [
                _vm._v(
                  "\n                        E-mail администратора\n                    "
                )
              ]
            )
          ],
          1
        )
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/Admin/SettingsMenuPage.vue":
/*!************************************************************!*\
  !*** ./resources/js/components/Admin/SettingsMenuPage.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SettingsMenuPage_vue_vue_type_template_id_6b03045c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SettingsMenuPage.vue?vue&type=template&id=6b03045c& */ "./resources/js/components/Admin/SettingsMenuPage.vue?vue&type=template&id=6b03045c&");
/* harmony import */ var _SettingsMenuPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SettingsMenuPage.vue?vue&type=script&lang=js& */ "./resources/js/components/Admin/SettingsMenuPage.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SettingsMenuPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SettingsMenuPage_vue_vue_type_template_id_6b03045c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SettingsMenuPage_vue_vue_type_template_id_6b03045c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Admin/SettingsMenuPage.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Admin/SettingsMenuPage.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/Admin/SettingsMenuPage.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SettingsMenuPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./SettingsMenuPage.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/SettingsMenuPage.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SettingsMenuPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Admin/SettingsMenuPage.vue?vue&type=template&id=6b03045c&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/Admin/SettingsMenuPage.vue?vue&type=template&id=6b03045c& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SettingsMenuPage_vue_vue_type_template_id_6b03045c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./SettingsMenuPage.vue?vue&type=template&id=6b03045c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/SettingsMenuPage.vue?vue&type=template&id=6b03045c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SettingsMenuPage_vue_vue_type_template_id_6b03045c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SettingsMenuPage_vue_vue_type_template_id_6b03045c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);