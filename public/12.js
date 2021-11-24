(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[12],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/MainPage.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Admin/MainPage.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
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
//
//
//
//
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
  name: 'MainPage'
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/MainPage.vue?vue&type=template&id=892dac1a&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Admin/MainPage.vue?vue&type=template&id=892dac1a& ***!
  \*****************************************************************************************************************************************************************************************************************/
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
    _c("div", { staticClass: "content_block mainPage" }, [
      _c("ul", { staticClass: "mainPage__ul" }, [
        _c(
          "li",
          { staticClass: "mainPage__li" },
          [
            _c(
              "router-link",
              {
                staticClass: "mainPage__link",
                attrs: { to: { name: "SaveProduct" } }
              },
              [_vm._v("\n                    Добавить товар\n                ")]
            )
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "li",
          { staticClass: "mainPage__li" },
          [
            _c(
              "router-link",
              {
                staticClass: "mainPage__link",
                attrs: { to: { name: "Products" } }
              },
              [_vm._v("\n                    Товары\n                ")]
            )
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "li",
          { staticClass: "mainPage__li" },
          [
            _c(
              "router-link",
              {
                staticClass: "mainPage__link mainPage__link_with_left_offset",
                attrs: { to: { name: "TrashedProducts" } }
              },
              [
                _vm._v(
                  "\n                    Удаленные товары\n                "
                )
              ]
            )
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "li",
          { staticClass: "mainPage__li mainPage__li_with_border" },
          [
            _c(
              "router-link",
              {
                staticClass: "mainPage__link",
                attrs: {
                  to: { name: "Categories", params: { entity: "categories" } }
                }
              },
              [_vm._v("\n                    Категории\n                ")]
            )
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "li",
          { staticClass: "mainPage__li" },
          [
            _c(
              "router-link",
              {
                staticClass: "mainPage__link",
                attrs: {
                  to: { name: "Categories", params: { entity: "materials" } }
                }
              },
              [_vm._v("\n                    Материалы\n                ")]
            )
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "li",
          { staticClass: "mainPage__li" },
          [
            _c(
              "router-link",
              {
                staticClass: "mainPage__link",
                attrs: {
                  to: { name: "Categories", params: { entity: "colors" } }
                }
              },
              [_vm._v("\n                    Цвета\n                ")]
            )
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "li",
          { staticClass: "mainPage__li mainPage__li_with_border" },
          [
            _c(
              "router-link",
              {
                staticClass: "mainPage__link",
                attrs: { to: { name: "Users" } }
              },
              [_vm._v("\n                    Пользователи\n                ")]
            )
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "li",
          { staticClass: "mainPage__li" },
          [
            _c(
              "router-link",
              {
                staticClass: "mainPage__link mainPage__link_with_left_offset",
                attrs: { to: { name: "SaveUser" } }
              },
              [
                _vm._v(
                  "\n                    Создать пользователя\n                "
                )
              ]
            )
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "li",
          { staticClass: "mainPage__li mainPage__li_with_border" },
          [
            _c(
              "router-link",
              {
                staticClass: "mainPage__link",
                attrs: { to: { name: "Help" } }
              },
              [_vm._v("\n                    Помощь\n                ")]
            )
          ],
          1
        ),
        _vm._v(" "),
        _vm._m(0)
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", { staticClass: "mainPage__li mainPage__li_with_border" }, [
      _c(
        "a",
        {
          staticClass: "mainPage__link mainPage__link_with_top_offset",
          attrs: { href: "http://asceticshop.ru" }
        },
        [_vm._v("\n                    AsceticShop.ru\n                ")]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/Admin/MainPage.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/Admin/MainPage.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MainPage_vue_vue_type_template_id_892dac1a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MainPage.vue?vue&type=template&id=892dac1a& */ "./resources/js/components/Admin/MainPage.vue?vue&type=template&id=892dac1a&");
/* harmony import */ var _MainPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MainPage.vue?vue&type=script&lang=js& */ "./resources/js/components/Admin/MainPage.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _MainPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MainPage_vue_vue_type_template_id_892dac1a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _MainPage_vue_vue_type_template_id_892dac1a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Admin/MainPage.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Admin/MainPage.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/Admin/MainPage.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MainPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./MainPage.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/MainPage.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MainPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Admin/MainPage.vue?vue&type=template&id=892dac1a&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/Admin/MainPage.vue?vue&type=template&id=892dac1a& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MainPage_vue_vue_type_template_id_892dac1a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./MainPage.vue?vue&type=template&id=892dac1a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/MainPage.vue?vue&type=template&id=892dac1a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MainPage_vue_vue_type_template_id_892dac1a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MainPage_vue_vue_type_template_id_892dac1a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);