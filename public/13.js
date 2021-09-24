(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[13],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Users/UserForm.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Admin/Users/UserForm.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "UserForm",
  props: ['action', 'saveCmd'],
  data: function data() {
    return {
      localUser: {
        id: 0,
        email: '',
        name: '',
        role: '',
        password: '',
        email_verified: false,
        send_confirm_registration: false,
        send_reset_password: false
      },
      userNameWasEdited: false
    };
  },
  computed: _objectSpread(_objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('users', ['singleUserFromServer', 'taskOfUserEditManager'])), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])(['isAlarmingInput', 'typeinErrors'])), {}, {
    showEmailSection: function showEmailSection() {
      return this.action === 'create' || this.taskOfUserEditManager === 'editEmail';
    },
    showRoleSection: function showRoleSection() {
      return this.action === 'create' || this.taskOfUserEditManager === 'editRole';
    },
    showPasswordSection: function showPasswordSection() {
      return this.action === 'create' || this.taskOfUserEditManager === 'editPassword';
    }
  }),
  methods: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])('users', ['saveUser', 'typeinValidation'])), {}, {
    setLocalUser: function setLocalUser(user) {
      this.localUser = {
        id: user.id,
        email: user.email,
        name: user.name,
        role: user.role,
        email_verified: Boolean(user.email_verified_at),
        password: ''
      };
    },
    setUserName: function setUserName() {
      if (this.action === 'edit' || this.userNameWasEdited) {
        return;
      }

      this.localUser.name = this.localUser.email.split('@')[0];
    },
    setNameWasEditedFlag: function setNameWasEditedFlag() {
      this.userNameWasEdited = true;
    },
    checkConfirmRegistrationMark: function checkConfirmRegistrationMark() {
      if (!this.localUser.email_verified) {
        this.localUser.send_confirm_registration = false;
      }
    },
    checkEmailVerifiedMark: function checkEmailVerifiedMark() {
      if (!this.localUser.send_confirm_registration) {
        this.localUser.email_verified = false;
      }
    }
  }),
  watch: {
    singleUserFromServer: function singleUserFromServer(val) {
      if (!val) {
        return;
      }

      this.setLocalUser(val);
    },
    saveCmd: function saveCmd(val) {
      if (!val) {
        return;
      }

      this.$store.dispatch('users/saveUser', this.localUser);
    }
  },
  mounted: function mounted() {
    this.$store.dispatch('resetTypeinErrors');
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Users/UserForm.vue?vue&type=template&id=6812c841&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Admin/Users/UserForm.vue?vue&type=template&id=6812c841& ***!
  \***********************************************************************************************************************************************************************************************************************/
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
    _vm.action === "create"
      ? _c("h1", [_vm._v("Создать пользователя")])
      : _vm._e(),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "content_block content_block__product_form" },
      [
        _vm.showEmailSection
          ? [
              _c("div", { staticClass: "input_text__container mt20" }, [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.localUser.email,
                      expression: "localUser.email"
                    }
                  ],
                  staticClass: "input_text input_text__product_form",
                  class: { input_alarm: _vm.isAlarmingInput("email") },
                  attrs: { type: "text", maxlength: "50", placeholder: " " },
                  domProps: { value: _vm.localUser.email },
                  on: {
                    change: function($event) {
                      return _vm.setUserName()
                    },
                    keyup: function($event) {
                      _vm.typeinValidation(_vm.localUser)
                      _vm.setUserName()
                    },
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.localUser, "email", $event.target.value)
                    }
                  }
                }),
                _vm._v(" "),
                _c("label", { staticClass: "input_text__label" }, [
                  _vm._v("E-mail пользователя")
                ]),
                _vm._v(" "),
                _c("p", {
                  staticClass: "validation_message_at_input",
                  domProps: { innerHTML: _vm._s(_vm.typeinErrors("email")) }
                })
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "pdt20" }, [
                _c("p", { staticClass: "checkbox_input__item tal" }, [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.localUser.email_verified,
                        expression: "localUser.email_verified"
                      }
                    ],
                    staticClass: "checkbox_input",
                    attrs: {
                      id: "email_verified_mark",
                      type: "checkbox",
                      value: "true"
                    },
                    domProps: {
                      checked: Array.isArray(_vm.localUser.email_verified)
                        ? _vm._i(_vm.localUser.email_verified, "true") > -1
                        : _vm.localUser.email_verified
                    },
                    on: {
                      click: function($event) {
                        return _vm.checkConfirmRegistrationMark()
                      },
                      change: function($event) {
                        var $$a = _vm.localUser.email_verified,
                          $$el = $event.target,
                          $$c = $$el.checked ? true : false
                        if (Array.isArray($$a)) {
                          var $$v = "true",
                            $$i = _vm._i($$a, $$v)
                          if ($$el.checked) {
                            $$i < 0 &&
                              _vm.$set(
                                _vm.localUser,
                                "email_verified",
                                $$a.concat([$$v])
                              )
                          } else {
                            $$i > -1 &&
                              _vm.$set(
                                _vm.localUser,
                                "email_verified",
                                $$a.slice(0, $$i).concat($$a.slice($$i + 1))
                              )
                          }
                        } else {
                          _vm.$set(_vm.localUser, "email_verified", $$c)
                        }
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "label",
                    {
                      staticClass: "checkbox_label display-table",
                      attrs: { for: "email_verified_mark" }
                    },
                    [
                      _vm._v(
                        "\n                        E-mail существует\n                    "
                      )
                    ]
                  )
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "pdt20 pdb20" }, [
                _c("p", { staticClass: "checkbox_input__item tal" }, [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.localUser.send_confirm_registration,
                        expression: "localUser.send_confirm_registration"
                      }
                    ],
                    staticClass: "checkbox_input",
                    attrs: {
                      id: "send_confirm_registration_mark",
                      type: "checkbox",
                      value: "true"
                    },
                    domProps: {
                      checked: Array.isArray(
                        _vm.localUser.send_confirm_registration
                      )
                        ? _vm._i(
                            _vm.localUser.send_confirm_registration,
                            "true"
                          ) > -1
                        : _vm.localUser.send_confirm_registration
                    },
                    on: {
                      click: function($event) {
                        return _vm.checkEmailVerifiedMark()
                      },
                      change: function($event) {
                        var $$a = _vm.localUser.send_confirm_registration,
                          $$el = $event.target,
                          $$c = $$el.checked ? true : false
                        if (Array.isArray($$a)) {
                          var $$v = "true",
                            $$i = _vm._i($$a, $$v)
                          if ($$el.checked) {
                            $$i < 0 &&
                              _vm.$set(
                                _vm.localUser,
                                "send_confirm_registration",
                                $$a.concat([$$v])
                              )
                          } else {
                            $$i > -1 &&
                              _vm.$set(
                                _vm.localUser,
                                "send_confirm_registration",
                                $$a.slice(0, $$i).concat($$a.slice($$i + 1))
                              )
                          }
                        } else {
                          _vm.$set(
                            _vm.localUser,
                            "send_confirm_registration",
                            $$c
                          )
                        }
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "label",
                    {
                      staticClass: "checkbox_label display-table",
                      attrs: { for: "send_confirm_registration_mark" }
                    },
                    [
                      _vm._v(
                        "\n                        Отправить письмо пользователю для проверки E-mail\n                    "
                      )
                    ]
                  )
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "input_text__container mt20" }, [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.localUser.name,
                      expression: "localUser.name"
                    }
                  ],
                  staticClass: "input_text input_text__product_form",
                  class: { input_alarm: _vm.isAlarmingInput("name") },
                  attrs: { type: "text", maxlength: "50", placeholder: " " },
                  domProps: { value: _vm.localUser.name },
                  on: {
                    keyup: function($event) {
                      _vm.typeinValidation(_vm.localUser)
                      _vm.setNameWasEditedFlag()
                    },
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.localUser, "name", $event.target.value)
                    }
                  }
                }),
                _vm._v(" "),
                _c("label", { staticClass: "input_text__label" }, [
                  _vm._v("Имя пользователя")
                ]),
                _vm._v(" "),
                _c("p", {
                  staticClass: "validation_message_at_input",
                  domProps: { innerHTML: _vm._s(_vm.typeinErrors("name")) }
                })
              ])
            ]
          : _vm._e(),
        _vm._v(" "),
        _vm.showRoleSection
          ? [
              _c("div", { staticClass: "input_text__container mt30" }, [
                _c(
                  "select",
                  {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.localUser.role,
                        expression: "localUser.role"
                      }
                    ],
                    staticClass: "input_select input_text__product_form",
                    class: { input_alarm: _vm.isAlarmingInput("role") },
                    attrs: { required: "" },
                    on: {
                      change: [
                        function($event) {
                          var $$selectedVal = Array.prototype.filter
                            .call($event.target.options, function(o) {
                              return o.selected
                            })
                            .map(function(o) {
                              var val = "_value" in o ? o._value : o.value
                              return val
                            })
                          _vm.$set(
                            _vm.localUser,
                            "role",
                            $event.target.multiple
                              ? $$selectedVal
                              : $$selectedVal[0]
                          )
                        },
                        function($event) {
                          return _vm.typeinValidation(_vm.localUser)
                        }
                      ]
                    }
                  },
                  [
                    _c("option", { attrs: { disabled: "" } }),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "user" } }, [
                      _vm._v("Обычный пользователь")
                    ]),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "admin" } }, [
                      _vm._v("Администратор")
                    ])
                  ]
                ),
                _vm._v(" "),
                _c("label", { staticClass: "input_select__label" }, [
                  _vm._v("Права пользователя")
                ]),
                _vm._v(" "),
                _c("p", {
                  staticClass: "validation_message_at_input",
                  domProps: { innerHTML: _vm._s(_vm.typeinErrors("role")) }
                })
              ])
            ]
          : _vm._e(),
        _vm._v(" "),
        _vm.action === "edit" ? _c("div", { staticClass: "pdb20" }) : _vm._e(),
        _vm._v(" "),
        _vm.showPasswordSection
          ? [
              _c("div", { staticClass: "input_text__container mt30" }, [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.localUser.password,
                      expression: "localUser.password"
                    }
                  ],
                  staticClass: "input_text input_text__product_form",
                  class: { input_alarm: _vm.isAlarmingInput("password") },
                  attrs: { type: "text", maxlength: "50", placeholder: " " },
                  domProps: { value: _vm.localUser.password },
                  on: {
                    keyup: function($event) {
                      return _vm.typeinValidation(_vm.localUser)
                    },
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.localUser, "password", $event.target.value)
                    }
                  }
                }),
                _vm._v(" "),
                _c("label", { staticClass: "input_text__label" }, [
                  _vm._v("Пароль пользователя для входа")
                ]),
                _vm._v(" "),
                _c("p", {
                  staticClass: "validation_message_at_input",
                  domProps: { innerHTML: _vm._s(_vm.typeinErrors("password")) }
                })
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "pdt20 pdb20" }, [
                _c("p", { staticClass: "checkbox_input__item tal" }, [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.localUser.send_reset_password,
                        expression: "localUser.send_reset_password"
                      }
                    ],
                    staticClass: "checkbox_input",
                    attrs: {
                      id: "send_reset_password_mark",
                      type: "checkbox",
                      value: "true"
                    },
                    domProps: {
                      checked: Array.isArray(_vm.localUser.send_reset_password)
                        ? _vm._i(_vm.localUser.send_reset_password, "true") > -1
                        : _vm.localUser.send_reset_password
                    },
                    on: {
                      change: function($event) {
                        var $$a = _vm.localUser.send_reset_password,
                          $$el = $event.target,
                          $$c = $$el.checked ? true : false
                        if (Array.isArray($$a)) {
                          var $$v = "true",
                            $$i = _vm._i($$a, $$v)
                          if ($$el.checked) {
                            $$i < 0 &&
                              _vm.$set(
                                _vm.localUser,
                                "send_reset_password",
                                $$a.concat([$$v])
                              )
                          } else {
                            $$i > -1 &&
                              _vm.$set(
                                _vm.localUser,
                                "send_reset_password",
                                $$a.slice(0, $$i).concat($$a.slice($$i + 1))
                              )
                          }
                        } else {
                          _vm.$set(_vm.localUser, "send_reset_password", $$c)
                        }
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "label",
                    {
                      staticClass: "checkbox_label",
                      attrs: { for: "send_reset_password_mark" }
                    },
                    [
                      _vm._v(
                        "\n                        Отправить письмо пользователю для сброса этого пароля и создания нового\n                    "
                      )
                    ]
                  )
                ])
              ])
            ]
          : _vm._e(),
        _vm._v(" "),
        _vm.action === "create"
          ? _c(
              "button",
              {
                staticClass: "button__save_product mauto mt30",
                on: {
                  click: function($event) {
                    $event.stopPropagation()
                    return _vm.saveUser(_vm.localUser)
                  }
                }
              },
              [_vm._v("\n            Создать\n        ")]
            )
          : _vm._e()
      ],
      2
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/Admin/Users/UserForm.vue":
/*!**********************************************************!*\
  !*** ./resources/js/components/Admin/Users/UserForm.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UserForm_vue_vue_type_template_id_6812c841___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserForm.vue?vue&type=template&id=6812c841& */ "./resources/js/components/Admin/Users/UserForm.vue?vue&type=template&id=6812c841&");
/* harmony import */ var _UserForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserForm.vue?vue&type=script&lang=js& */ "./resources/js/components/Admin/Users/UserForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _UserForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UserForm_vue_vue_type_template_id_6812c841___WEBPACK_IMPORTED_MODULE_0__["render"],
  _UserForm_vue_vue_type_template_id_6812c841___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Admin/Users/UserForm.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Admin/Users/UserForm.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/Admin/Users/UserForm.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./UserForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Users/UserForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Admin/Users/UserForm.vue?vue&type=template&id=6812c841&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/Admin/Users/UserForm.vue?vue&type=template&id=6812c841& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserForm_vue_vue_type_template_id_6812c841___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./UserForm.vue?vue&type=template&id=6812c841& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Users/UserForm.vue?vue&type=template&id=6812c841&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserForm_vue_vue_type_template_id_6812c841___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserForm_vue_vue_type_template_id_6812c841___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);