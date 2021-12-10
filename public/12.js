(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[12],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Blocks/ReloadIcon.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Admin/Blocks/ReloadIcon.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "ReloadIcon",
  computed: {
    title: function title() {
      var titleBook = {
        Products: 'товары',
        TrashedProducts: 'удаленные товары',
        Users: 'пользователей',
        Categories: 'категории'
      };
      return "\u041E\u0431\u043D\u043E\u0432\u0438\u0442\u044C ".concat(titleBook[this.$route.name], " \u0441 \u0441\u0435\u0440\u0432\u0435\u0440\u0430");
    },
    showReloadIcon: function showReloadIcon() {
      return ['Products', 'TrashedProducts', 'Users', 'Categories'].includes(this.$route.name);
    }
  },
  methods: {
    reload: function reload() {
      var actionBook = {
        Products: 'products/showProductsWithReload',
        TrashedProducts: 'products/showTrashedProductsWithReload',
        Users: 'users/showUsersWithReload',
        Categories: 'categories/showCategoriesWithReload'
      };
      var actionName = actionBook[this.$route.name];

      if (actionName) {
        this.$store.dispatch(actionName, this.$route);
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Blocks/ReloadIcon.vue?vue&type=template&id=5ecbae00&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Admin/Blocks/ReloadIcon.vue?vue&type=template&id=5ecbae00& ***!
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
  return _vm.showReloadIcon
    ? _c("span", { staticClass: "reload_icon", on: { click: _vm.reload } }, [
        _c(
          "span",
          {
            staticClass:
              "icon_with_hint icon_with_right_hint reload_icon__content",
            attrs: { "data-title": _vm.title }
          },
          [_vm._v("\n        ↻\n    ")]
        )
      ])
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/Admin/Blocks/ReloadIcon.vue":
/*!*************************************************************!*\
  !*** ./resources/js/components/Admin/Blocks/ReloadIcon.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ReloadIcon_vue_vue_type_template_id_5ecbae00___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ReloadIcon.vue?vue&type=template&id=5ecbae00& */ "./resources/js/components/Admin/Blocks/ReloadIcon.vue?vue&type=template&id=5ecbae00&");
/* harmony import */ var _ReloadIcon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ReloadIcon.vue?vue&type=script&lang=js& */ "./resources/js/components/Admin/Blocks/ReloadIcon.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ReloadIcon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ReloadIcon_vue_vue_type_template_id_5ecbae00___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ReloadIcon_vue_vue_type_template_id_5ecbae00___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Admin/Blocks/ReloadIcon.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Admin/Blocks/ReloadIcon.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/Admin/Blocks/ReloadIcon.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ReloadIcon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ReloadIcon.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Blocks/ReloadIcon.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ReloadIcon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Admin/Blocks/ReloadIcon.vue?vue&type=template&id=5ecbae00&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/Admin/Blocks/ReloadIcon.vue?vue&type=template&id=5ecbae00& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ReloadIcon_vue_vue_type_template_id_5ecbae00___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ReloadIcon.vue?vue&type=template&id=5ecbae00& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Blocks/ReloadIcon.vue?vue&type=template&id=5ecbae00&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ReloadIcon_vue_vue_type_template_id_5ecbae00___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ReloadIcon_vue_vue_type_template_id_5ecbae00___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);