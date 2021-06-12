(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Admin_User_UserEditComponent_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/User/UserEditComponent.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/Users/OldUserEditComponent.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
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
  name: "OldUserEditComponent.vue",
  props: ['originalUser'],
  data: function data() {
    return {
      user: {
        role: null
      },
      updateSuccess: false,
      showSuccessMessage: false,
      successMessage: '',
      showErrorMessage: false,
      errorMessage: ''
    };
  },
  mounted: function mounted() {
    this.user = this.originalUser;
    console.log('Component mounted');
    console.log(this.originalUser);
  },
  methods: {
    send: function send() {
      var _this = this;

      fetch('/api/admin/user/edit/' + this.user.id, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(this.user)
      }).then(function (result) {
        return result.json();
      }).then(function (result) {
        _this.showSuccessMessage = result.updateSuccess;
        _this.successMessage = 'Сохранено ' + result.user.role;
        console.log(result);
      });
      /*
      axios.post(
          '/api/admin/user/edit/' + this.user.id,
          this.user
      ).then(
          response => {
              this.showSuccessMessage = response.data.updateSuccess;
              this.successMessage = 'Сохранено ' + response.data.user.role;
              console.log(response.data);
          }
      );*/
    }
  }
});

/***/ }),

/***/ "./resources/js/components/Admin/User/UserEditComponent.vue":
/*!******************************************************************!*\
  !*** ./resources/js/components/Admin/Users/OldUserEditComponent.vue ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _UserEditComponent_vue_vue_type_template_id_1fcf016f_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./OldUserEditComponent.vue?vue&type=template&id=1fcf016f&scoped=true& */ "./resources/js/components/Admin/User/UserEditComponent.vue?vue&type=template&id=1fcf016f&scoped=true&");
/* harmony import */ var _UserEditComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OldUserEditComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/Admin/User/UserEditComponent.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _UserEditComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _UserEditComponent_vue_vue_type_template_id_1fcf016f_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _UserEditComponent_vue_vue_type_template_id_1fcf016f_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "1fcf016f",
  null

)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Admin/Users/OldUserEditComponent.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Admin/User/UserEditComponent.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/Admin/Users/OldUserEditComponent.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserEditComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./OldUserEditComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/User/UserEditComponent.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserEditComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default);

/***/ }),

/***/ "./resources/js/components/Admin/User/UserEditComponent.vue?vue&type=template&id=1fcf016f&scoped=true&":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/components/Admin/Users/OldUserEditComponent.vue?vue&type=template&id=1fcf016f&scoped=true& ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserEditComponent_vue_vue_type_template_id_1fcf016f_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserEditComponent_vue_vue_type_template_id_1fcf016f_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserEditComponent_vue_vue_type_template_id_1fcf016f_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./OldUserEditComponent.vue?vue&type=template&id=1fcf016f&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/User/UserEditComponent.vue?vue&type=template&id=1fcf016f&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/User/UserEditComponent.vue?vue&type=template&id=1fcf016f&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/Users/OldUserEditComponent.vue?vue&type=template&id=1fcf016f&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", [
    _vm.showSuccessMessage
      ? _c("div", [
          _vm._v("\n        " + _vm._s(_vm.successMessage) + "\n    ")
        ])
      : _vm._e(),
    _vm._v(" "),
    _vm.showErrorMessage
      ? _c("div", [_vm._v("\n        " + _vm._s(_vm.errorMessage) + "\n    ")])
      : _vm._e(),
    _vm._v(" "),
    _c("div", { staticClass: "tal" }, [
      _vm._v("Привет " + _vm._s(_vm.originalUser.name))
    ]),
    _vm._v(" "),
    _c(
      "select",
      {
        directives: [
          {
            name: "model",
            rawName: "v-model",
            value: _vm.user.role,
            expression: "user.role"
          }
        ],
        on: {
          change: function($event) {
            var $$selectedVal = Array.prototype.filter
              .call($event.target.options, function(o) {
                return o.selected
              })
              .map(function(o) {
                var val = "_value" in o ? o._value : o.value
                return val
              })
            _vm.$set(
              _vm.user,
              "role",
              $event.target.multiple ? $$selectedVal : $$selectedVal[0]
            )
          }
        }
      },
      [
        _c("option", { attrs: { value: "admin" } }, [_vm._v("Admin")]),
        _vm._v(" "),
        _c("option", { attrs: { value: "user" } }, [_vm._v("Users")])
      ]
    ),
    _vm._v(" "),
    _c("button", { on: { click: _vm.send } }, [_vm._v("Send")])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);
