(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[14],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/admin-js/components/Admin/ContextMenu/UsersContextMenu.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/admin-js/components/Admin/ContextMenu/UsersContextMenu.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************/
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

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "UsersContextMenu",
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('contextMenu', ['coordinates', 'user'])),
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])('users', ['preDeleteUser', 'showUserEditManager']))
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/admin-js/components/Admin/ContextMenu/UsersContextMenu.vue?vue&type=template&id=2f8a6bb0&":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/admin-js/components/Admin/ContextMenu/UsersContextMenu.vue?vue&type=template&id=2f8a6bb0& ***!
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
    "div",
    { staticClass: "context_menu__wrapper", style: _vm.coordinates },
    [
      _c("ul", { staticClass: "context_menu__ul" }, [
        _c("li", { staticClass: "context_menu__li_header" }, [
          _vm._v(
            "\n            «" +
              _vm._s(
                Boolean(_vm.user.email) ? _vm.user.email : _vm.user.social_id
              ) +
              "»\n        "
          )
        ]),
        _vm._v(" "),
        _c(
          "li",
          {
            staticClass: "context_menu__li",
            on: {
              click: function($event) {
                return _vm.showUserEditManager({
                  userId: _vm.user.id,
                  task: "editEmail"
                })
              }
            }
          },
          [_vm._v("\n            E-mail пользователя\n        ")]
        ),
        _vm._v(" "),
        _c(
          "li",
          {
            staticClass: "context_menu__li",
            on: {
              click: function($event) {
                return _vm.showUserEditManager({
                  userId: _vm.user.id,
                  task: "editRole"
                })
              }
            }
          },
          [_vm._v("\n            Права пользователя\n        ")]
        ),
        _vm._v(" "),
        _c(
          "li",
          {
            staticClass: "context_menu__li",
            on: {
              click: function($event) {
                return _vm.showUserEditManager({
                  userId: _vm.user.id,
                  task: "editPassword"
                })
              }
            }
          },
          [_vm._v("\n            Новый пароль\n        ")]
        ),
        _vm._v(" "),
        _c(
          "li",
          {
            staticClass: "context_menu__li",
            staticStyle: { border: "0" },
            on: {
              click: function($event) {
                return _vm.preDeleteUser(_vm.user)
              }
            }
          },
          [_vm._v("\n            Удалить пользователя\n        ")]
        )
      ])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/admin-js/components/Admin/ContextMenu/UsersContextMenu.vue":
/*!******************************************************************************!*\
  !*** ./resources/admin-js/components/Admin/ContextMenu/UsersContextMenu.vue ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UsersContextMenu_vue_vue_type_template_id_2f8a6bb0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UsersContextMenu.vue?vue&type=template&id=2f8a6bb0& */ "./resources/admin-js/components/Admin/ContextMenu/UsersContextMenu.vue?vue&type=template&id=2f8a6bb0&");
/* harmony import */ var _UsersContextMenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UsersContextMenu.vue?vue&type=script&lang=js& */ "./resources/admin-js/components/Admin/ContextMenu/UsersContextMenu.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _UsersContextMenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UsersContextMenu_vue_vue_type_template_id_2f8a6bb0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _UsersContextMenu_vue_vue_type_template_id_2f8a6bb0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/admin-js/components/Admin/ContextMenu/UsersContextMenu.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/admin-js/components/Admin/ContextMenu/UsersContextMenu.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************!*\
  !*** ./resources/admin-js/components/Admin/ContextMenu/UsersContextMenu.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UsersContextMenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./UsersContextMenu.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/admin-js/components/Admin/ContextMenu/UsersContextMenu.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UsersContextMenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/admin-js/components/Admin/ContextMenu/UsersContextMenu.vue?vue&type=template&id=2f8a6bb0&":
/*!*************************************************************************************************************!*\
  !*** ./resources/admin-js/components/Admin/ContextMenu/UsersContextMenu.vue?vue&type=template&id=2f8a6bb0& ***!
  \*************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UsersContextMenu_vue_vue_type_template_id_2f8a6bb0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./UsersContextMenu.vue?vue&type=template&id=2f8a6bb0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/admin-js/components/Admin/ContextMenu/UsersContextMenu.vue?vue&type=template&id=2f8a6bb0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UsersContextMenu_vue_vue_type_template_id_2f8a6bb0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UsersContextMenu_vue_vue_type_template_id_2f8a6bb0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);