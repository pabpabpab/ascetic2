(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[15],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Products/ProductForm.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Admin/Products/ProductForm.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _FilesInput__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FilesInput */ "./resources/js/components/Admin/Products/FilesInput.vue");
/* harmony import */ var _functions_fitTextareaHeight__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./functions/fitTextareaHeight */ "./resources/js/components/Admin/Products/functions/fitTextareaHeight.js");
/* harmony import */ var _functions_getFormattedPrice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./functions/getFormattedPrice */ "./resources/js/components/Admin/Products/functions/getFormattedPrice.js");
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "ProductForm",
  components: {
    FilesInput: _FilesInput__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  props: ['action', 'saveCmd'],
  data: function data() {
    return {
      localProduct: {
        id: 0,
        name: '',
        price: '',
        description: '',
        category_ids: [],
        material_ids: [],
        color_ids: []
      },
      photos: [],
      checkboxesDivVisibility: {
        categories: false,
        materials: false,
        colors: false
      }
    };
  },
  computed: _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('products', ['singleProductFromServer'])), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('categories', ['categories'])), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])(['isAlarmingInput', 'typeinErrors'])), {}, {
    localPrice: function localPrice() {
      return this.localProduct.price;
    }
  }),
  methods: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])('products', ['saveProduct', 'typeinValidation'])), {}, {
    fitTextareaHeight: function fitTextareaHeight(event) {
      Object(_functions_fitTextareaHeight__WEBPACK_IMPORTED_MODULE_2__["default"])(event);
    },
    setLocalProduct: function setLocalProduct(product) {
      var parameters = JSON.parse(product.parameters);
      this.localProduct = {
        id: product.id,
        name: product.name,
        price: parameters.price,
        description: product.description.description,
        category_ids: parameters.categories.map(function (item) {
          return item.id;
        }),
        material_ids: parameters.materials.map(function (item) {
          return item.id;
        }),
        color_ids: parameters.colors.map(function (item) {
          return item.id;
        })
      };
    },
    selectedCats: function selectedCats(prop) {
      var propsBook = {
        category: 'categories',
        material: 'materials',
        color: 'colors'
      };
      var property = propsBook[prop];
      var catsBook = this.categories[property];

      if (!catsBook[0]) {
        return;
      }

      return this.localProduct[prop + '_ids'].map(function (id) {
        var bookItem = catsBook.find(function (item) {
          return item.id === id;
        });
        return {
          id: id,
          name: bookItem.name
        };
      }); // selected cats array
    },
    deleteSelectedItem: function deleteSelectedItem(prop, val) {
      var product = this.localProduct;
      var index = product[prop].findIndex(function (item) {
        return item === val;
      });
      product[prop].splice(index, 1); // с позиции index удалить 1 элемент

      this.localProduct = product;
    },
    getCheckboxesVisibility: function getCheckboxesVisibility(entity) {
      return this.checkboxesDivVisibility[entity];
    },
    changeCheckboxesVisibility: function changeCheckboxesVisibility(entity) {
      var val = this.checkboxesDivVisibility[entity];
      this.closeAllCheckboxesLists();
      this.checkboxesDivVisibility[entity] = !val;
    },
    closeAllCheckboxesLists: function closeAllCheckboxesLists() {
      var temp = _objectSpread({}, this.checkboxesDivVisibility);

      for (var key in temp) {
        temp[key] = false;
      }

      this.checkboxesDivVisibility = _objectSpread({}, temp);
    }
  }),
  watch: {
    localPrice: function localPrice(value) {
      this.localProduct.price = Object(_functions_getFormattedPrice__WEBPACK_IMPORTED_MODULE_3__["default"])(value);
    },
    singleProductFromServer: function singleProductFromServer(val) {
      if (!val) {
        return;
      }

      this.setLocalProduct(val.product);
    },
    saveCmd: function saveCmd(val) {
      if (!val) {
        return;
      }

      this.closeAllCheckboxesLists();
      this.$store.dispatch('products/saveProduct', {
        localProduct: this.localProduct,
        photos: this.photos
      });
    }
  },
  mounted: function mounted() {
    this.$store.dispatch('resetTypeinErrors');
    this.$store.dispatch('categories/loadCategories', 'categories');
    this.$store.dispatch('categories/loadCategories', 'materials');
    this.$store.dispatch('categories/loadCategories', 'colors');
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Products/ProductForm.vue?vue&type=template&id=59144b93&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Admin/Products/ProductForm.vue?vue&type=template&id=59144b93& ***!
  \*****************************************************************************************************************************************************************************************************************************/
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
    _vm.action === "create" ? _c("h1", [_vm._v("Добавить товар")]) : _vm._e(),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass: "content_block content_block__product_form",
        on: {
          click: function($event) {
            if ($event.target !== $event.currentTarget) {
              return null
            }
            return _vm.closeAllCheckboxesLists()
          }
        }
      },
      [
        _c(
          "p",
          {
            staticClass: "product_form__property_header mt20",
            on: {
              click: function($event) {
                return _vm.closeAllCheckboxesLists()
              }
            }
          },
          [_vm._v("Название товара")]
        ),
        _vm._v(" "),
        _c("div", { staticClass: "input_text__container" }, [
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.localProduct.name,
                expression: "localProduct.name"
              }
            ],
            staticClass: "input_text input_text__product_form",
            class: { input_alarm: _vm.isAlarmingInput("name") },
            attrs: { type: "text", maxlength: "50", placeholder: " " },
            domProps: { value: _vm.localProduct.name },
            on: {
              click: function($event) {
                return _vm.closeAllCheckboxesLists()
              },
              keyup: function($event) {
                return _vm.typeinValidation(_vm.localProduct)
              },
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.localProduct, "name", $event.target.value)
              }
            }
          }),
          _vm._v(" "),
          _c("p", {
            staticClass: "validation_message_at_input",
            domProps: { innerHTML: _vm._s(_vm.typeinErrors("name")) }
          })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "selectedCategories__wrapper mt30" }, [
          _c(
            "p",
            {
              staticClass: "product_form__property_header",
              on: {
                click: function($event) {
                  return _vm.closeAllCheckboxesLists()
                }
              }
            },
            [_vm._v("Категория")]
          ),
          _vm._v(" "),
          _c("div", { staticClass: "selectedCategories" }, [
            _c(
              "div",
              {
                staticClass: "selectedCategories__items",
                on: {
                  click: function($event) {
                    if ($event.target !== $event.currentTarget) {
                      return null
                    }
                    return _vm.changeCheckboxesVisibility("categories")
                  }
                }
              },
              _vm._l(_vm.selectedCats("category"), function(cat) {
                return _c(
                  "p",
                  {
                    key: cat.id,
                    staticClass: "selectedCategories__item show_block"
                  },
                  [
                    _vm._v(
                      "\n                        " +
                        _vm._s(cat.name) +
                        "\n                        "
                    ),
                    _c(
                      "span",
                      {
                        staticClass: "selectedCategories__item__collapse_icon",
                        on: {
                          click: function($event) {
                            $event.stopPropagation()
                            return _vm.deleteSelectedItem(
                              "category_ids",
                              cat.id
                            )
                          }
                        }
                      },
                      [
                        _vm._v(
                          "\n                            ×\n                        "
                        )
                      ]
                    )
                  ]
                )
              }),
              0
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "selectedCategories__arrow",
                on: {
                  click: function($event) {
                    return _vm.changeCheckboxesVisibility("categories")
                  }
                }
              },
              [_vm._v("\n                    ˅\n                ")]
            )
          ]),
          _vm._v(" "),
          _vm.getCheckboxesVisibility("categories")
            ? _c("div", { staticClass: "relative_checkboxes_wrapper" }, [
                _c(
                  "div",
                  { staticClass: "absolute_checkboxes_list show_block" },
                  _vm._l(_vm.categories["categories"], function(category) {
                    return _c(
                      "p",
                      {
                        key: category.id,
                        staticClass: "checkbox_input__item tal"
                      },
                      [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.localProduct.category_ids,
                              expression: "localProduct.category_ids"
                            }
                          ],
                          staticClass: "checkbox_input",
                          attrs: {
                            type: "checkbox",
                            id: "category" + category.id
                          },
                          domProps: {
                            value: category.id,
                            checked: Array.isArray(
                              _vm.localProduct.category_ids
                            )
                              ? _vm._i(
                                  _vm.localProduct.category_ids,
                                  category.id
                                ) > -1
                              : _vm.localProduct.category_ids
                          },
                          on: {
                            change: [
                              function($event) {
                                var $$a = _vm.localProduct.category_ids,
                                  $$el = $event.target,
                                  $$c = $$el.checked ? true : false
                                if (Array.isArray($$a)) {
                                  var $$v = category.id,
                                    $$i = _vm._i($$a, $$v)
                                  if ($$el.checked) {
                                    $$i < 0 &&
                                      _vm.$set(
                                        _vm.localProduct,
                                        "category_ids",
                                        $$a.concat([$$v])
                                      )
                                  } else {
                                    $$i > -1 &&
                                      _vm.$set(
                                        _vm.localProduct,
                                        "category_ids",
                                        $$a
                                          .slice(0, $$i)
                                          .concat($$a.slice($$i + 1))
                                      )
                                  }
                                } else {
                                  _vm.$set(
                                    _vm.localProduct,
                                    "category_ids",
                                    $$c
                                  )
                                }
                              },
                              function($event) {
                                return _vm.typeinValidation(_vm.localProduct)
                              }
                            ]
                          }
                        }),
                        _vm._v(" "),
                        _c(
                          "label",
                          {
                            staticClass: "checkbox_label",
                            attrs: { for: "category" + category.id }
                          },
                          [
                            _vm._v(
                              "\n                            " +
                                _vm._s(category.name) +
                                "\n                        "
                            )
                          ]
                        )
                      ]
                    )
                  }),
                  0
                )
              ])
            : _vm._e(),
          _vm._v(" "),
          _c("p", {
            staticClass: "validation_message_at_input ml_minus3",
            domProps: { innerHTML: _vm._s(_vm.typeinErrors("category_ids")) }
          })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "selectedCategories__wrapper mt30" }, [
          _c(
            "p",
            {
              staticClass: "product_form__property_header",
              on: {
                click: function($event) {
                  return _vm.closeAllCheckboxesLists()
                }
              }
            },
            [_vm._v("Материал")]
          ),
          _vm._v(" "),
          _c("div", { staticClass: "selectedCategories" }, [
            _c(
              "div",
              {
                staticClass: "selectedCategories__items",
                on: {
                  click: function($event) {
                    if ($event.target !== $event.currentTarget) {
                      return null
                    }
                    return _vm.changeCheckboxesVisibility("materials")
                  }
                }
              },
              _vm._l(_vm.selectedCats("material"), function(cat) {
                return _c(
                  "p",
                  { key: cat.id, staticClass: "selectedCategories__item" },
                  [
                    _vm._v(
                      "\n                            " +
                        _vm._s(cat.name) +
                        "\n                            "
                    ),
                    _c(
                      "span",
                      {
                        staticClass: "selectedCategories__item__collapse_icon",
                        on: {
                          click: function($event) {
                            $event.stopPropagation()
                            return _vm.deleteSelectedItem(
                              "material_ids",
                              cat.id
                            )
                          }
                        }
                      },
                      [
                        _vm._v(
                          "\n                                ×\n                            "
                        )
                      ]
                    )
                  ]
                )
              }),
              0
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "selectedCategories__arrow",
                on: {
                  click: function($event) {
                    return _vm.changeCheckboxesVisibility("materials")
                  }
                }
              },
              [_vm._v("\n                        ˅\n                    ")]
            )
          ]),
          _vm._v(" "),
          _vm.getCheckboxesVisibility("materials")
            ? _c("div", { staticClass: "relative_checkboxes_wrapper" }, [
                _c(
                  "div",
                  { staticClass: "absolute_checkboxes_list show_block" },
                  _vm._l(_vm.categories["materials"], function(material) {
                    return _c(
                      "p",
                      {
                        key: material.id,
                        staticClass: "checkbox_input__item tal"
                      },
                      [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.localProduct.material_ids,
                              expression: "localProduct.material_ids"
                            }
                          ],
                          staticClass: "checkbox_input",
                          attrs: {
                            type: "checkbox",
                            id: "material" + material.id
                          },
                          domProps: {
                            value: material.id,
                            checked: Array.isArray(
                              _vm.localProduct.material_ids
                            )
                              ? _vm._i(
                                  _vm.localProduct.material_ids,
                                  material.id
                                ) > -1
                              : _vm.localProduct.material_ids
                          },
                          on: {
                            change: [
                              function($event) {
                                var $$a = _vm.localProduct.material_ids,
                                  $$el = $event.target,
                                  $$c = $$el.checked ? true : false
                                if (Array.isArray($$a)) {
                                  var $$v = material.id,
                                    $$i = _vm._i($$a, $$v)
                                  if ($$el.checked) {
                                    $$i < 0 &&
                                      _vm.$set(
                                        _vm.localProduct,
                                        "material_ids",
                                        $$a.concat([$$v])
                                      )
                                  } else {
                                    $$i > -1 &&
                                      _vm.$set(
                                        _vm.localProduct,
                                        "material_ids",
                                        $$a
                                          .slice(0, $$i)
                                          .concat($$a.slice($$i + 1))
                                      )
                                  }
                                } else {
                                  _vm.$set(
                                    _vm.localProduct,
                                    "material_ids",
                                    $$c
                                  )
                                }
                              },
                              function($event) {
                                return _vm.typeinValidation(_vm.localProduct)
                              }
                            ]
                          }
                        }),
                        _vm._v(" "),
                        _c(
                          "label",
                          {
                            staticClass: "checkbox_label",
                            attrs: { for: "material" + material.id }
                          },
                          [
                            _vm._v(
                              "\n                                " +
                                _vm._s(material.name) +
                                "\n                            "
                            )
                          ]
                        )
                      ]
                    )
                  }),
                  0
                )
              ])
            : _vm._e(),
          _vm._v(" "),
          _c("p", {
            staticClass: "validation_message_at_input ml_minus3",
            domProps: { innerHTML: _vm._s(_vm.typeinErrors("material_ids")) }
          })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "selectedCategories__wrapper mt30" }, [
          _c(
            "p",
            {
              staticClass: "product_form__property_header",
              on: {
                click: function($event) {
                  return _vm.closeAllCheckboxesLists()
                }
              }
            },
            [_vm._v("Цвет")]
          ),
          _vm._v(" "),
          _c("div", { staticClass: "selectedCategories" }, [
            _c(
              "div",
              {
                staticClass: "selectedCategories__items",
                on: {
                  click: function($event) {
                    if ($event.target !== $event.currentTarget) {
                      return null
                    }
                    return _vm.changeCheckboxesVisibility("colors")
                  }
                }
              },
              _vm._l(_vm.selectedCats("color"), function(cat) {
                return _c(
                  "p",
                  { key: cat.id, staticClass: "selectedCategories__item" },
                  [
                    _vm._v(
                      "\n                            " +
                        _vm._s(cat.name) +
                        "\n                            "
                    ),
                    _c(
                      "span",
                      {
                        staticClass: "selectedCategories__item__collapse_icon",
                        on: {
                          click: function($event) {
                            $event.stopPropagation()
                            return _vm.deleteSelectedItem("color_ids", cat.id)
                          }
                        }
                      },
                      [
                        _vm._v(
                          "\n                                ×\n                            "
                        )
                      ]
                    )
                  ]
                )
              }),
              0
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "selectedCategories__arrow",
                on: {
                  click: function($event) {
                    return _vm.changeCheckboxesVisibility("colors")
                  }
                }
              },
              [_vm._v("\n                        ˅\n                    ")]
            )
          ]),
          _vm._v(" "),
          _vm.getCheckboxesVisibility("colors")
            ? _c("div", { staticClass: "relative_checkboxes_wrapper" }, [
                _c(
                  "div",
                  { staticClass: "absolute_checkboxes_list show_block" },
                  _vm._l(_vm.categories["colors"], function(color) {
                    return _c(
                      "p",
                      {
                        key: color.id,
                        staticClass: "checkbox_input__item tal"
                      },
                      [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.localProduct.color_ids,
                              expression: "localProduct.color_ids"
                            }
                          ],
                          staticClass: "checkbox_input",
                          attrs: { type: "checkbox", id: "color" + color.id },
                          domProps: {
                            value: color.id,
                            checked: Array.isArray(_vm.localProduct.color_ids)
                              ? _vm._i(_vm.localProduct.color_ids, color.id) >
                                -1
                              : _vm.localProduct.color_ids
                          },
                          on: {
                            change: [
                              function($event) {
                                var $$a = _vm.localProduct.color_ids,
                                  $$el = $event.target,
                                  $$c = $$el.checked ? true : false
                                if (Array.isArray($$a)) {
                                  var $$v = color.id,
                                    $$i = _vm._i($$a, $$v)
                                  if ($$el.checked) {
                                    $$i < 0 &&
                                      _vm.$set(
                                        _vm.localProduct,
                                        "color_ids",
                                        $$a.concat([$$v])
                                      )
                                  } else {
                                    $$i > -1 &&
                                      _vm.$set(
                                        _vm.localProduct,
                                        "color_ids",
                                        $$a
                                          .slice(0, $$i)
                                          .concat($$a.slice($$i + 1))
                                      )
                                  }
                                } else {
                                  _vm.$set(_vm.localProduct, "color_ids", $$c)
                                }
                              },
                              function($event) {
                                return _vm.typeinValidation(_vm.localProduct)
                              }
                            ]
                          }
                        }),
                        _vm._v(" "),
                        _c(
                          "label",
                          {
                            staticClass: "checkbox_label",
                            attrs: { for: "color" + color.id }
                          },
                          [
                            _vm._v(
                              "\n                                " +
                                _vm._s(color.name) +
                                "\n                            "
                            )
                          ]
                        )
                      ]
                    )
                  }),
                  0
                )
              ])
            : _vm._e(),
          _vm._v(" "),
          _c("p", {
            staticClass: "validation_message_at_input ml_minus3",
            domProps: { innerHTML: _vm._s(_vm.typeinErrors("color_ids")) }
          })
        ]),
        _vm._v(" "),
        _c(
          "p",
          {
            staticClass: "product_form__property_header mt40",
            on: {
              click: function($event) {
                return _vm.closeAllCheckboxesLists()
              }
            }
          },
          [_vm._v("Описание товара")]
        ),
        _vm._v(" "),
        _c("div", { staticClass: "input_text__container" }, [
          _c("textarea", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.localProduct.description,
                expression: "localProduct.description"
              }
            ],
            staticClass: "input_text input_textarea input_text__product_form",
            class: { input_alarm: _vm.isAlarmingInput("description") },
            attrs: { placeholder: " " },
            domProps: { value: _vm.localProduct.description },
            on: {
              click: function($event) {
                return _vm.closeAllCheckboxesLists()
              },
              keyup: function($event) {
                return _vm.typeinValidation(_vm.localProduct)
              },
              input: [
                function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.localProduct, "description", $event.target.value)
                },
                function($event) {
                  return _vm.fitTextareaHeight($event)
                }
              ]
            }
          }),
          _vm._v(" "),
          _c("p", {
            staticClass: "validation_message_at_input",
            domProps: { innerHTML: _vm._s(_vm.typeinErrors("description")) }
          })
        ]),
        _vm._v(" "),
        _c(
          "p",
          {
            staticClass: "product_form__property_header mt30",
            on: {
              click: function($event) {
                return _vm.closeAllCheckboxesLists()
              }
            }
          },
          [_vm._v("Цена товара")]
        ),
        _vm._v(" "),
        _c("div", { staticClass: "input_text__container" }, [
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.localProduct.price,
                expression: "localProduct.price"
              }
            ],
            staticClass: "input_text input_text__product_form",
            class: { input_alarm: _vm.isAlarmingInput("price") },
            attrs: { type: "text", maxlength: "21", placeholder: " " },
            domProps: { value: _vm.localProduct.price },
            on: {
              click: function($event) {
                return _vm.closeAllCheckboxesLists()
              },
              keyup: function($event) {
                return _vm.typeinValidation(_vm.localProduct)
              },
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.localProduct, "price", $event.target.value)
              }
            }
          }),
          _vm._v(" "),
          _c("label", { staticClass: "input_text__label" }, [
            _vm._v("в рублях")
          ]),
          _vm._v(" "),
          _c("p", {
            staticClass: "validation_message_at_input",
            domProps: { innerHTML: _vm._s(_vm.typeinErrors("price")) }
          })
        ]),
        _vm._v(" "),
        _vm.action === "create"
          ? _c("files-input", {
              staticClass: "mt30",
              attrs: { owner: "ProductForm" },
              on: {
                closeAllCheckboxesLists: function($event) {
                  return _vm.closeAllCheckboxesLists()
                }
              },
              model: {
                value: _vm.photos,
                callback: function($$v) {
                  _vm.photos = $$v
                },
                expression: "photos"
              }
            })
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
                    _vm.saveProduct({
                      localProduct: _vm.localProduct,
                      photos: _vm.photos
                    })
                    _vm.closeAllCheckboxesLists()
                  }
                }
              },
              [_vm._v("\n            Сохранить\n        ")]
            )
          : _vm._e()
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/Admin/Products/ProductForm.vue":
/*!****************************************************************!*\
  !*** ./resources/js/components/Admin/Products/ProductForm.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ProductForm_vue_vue_type_template_id_59144b93___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProductForm.vue?vue&type=template&id=59144b93& */ "./resources/js/components/Admin/Products/ProductForm.vue?vue&type=template&id=59144b93&");
/* harmony import */ var _ProductForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProductForm.vue?vue&type=script&lang=js& */ "./resources/js/components/Admin/Products/ProductForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ProductForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ProductForm_vue_vue_type_template_id_59144b93___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ProductForm_vue_vue_type_template_id_59144b93___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Admin/Products/ProductForm.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Admin/Products/ProductForm.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/Admin/Products/ProductForm.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ProductForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Products/ProductForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Admin/Products/ProductForm.vue?vue&type=template&id=59144b93&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/Admin/Products/ProductForm.vue?vue&type=template&id=59144b93& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductForm_vue_vue_type_template_id_59144b93___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ProductForm.vue?vue&type=template&id=59144b93& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Products/ProductForm.vue?vue&type=template&id=59144b93&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductForm_vue_vue_type_template_id_59144b93___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductForm_vue_vue_type_template_id_59144b93___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Admin/Products/functions/getFormattedPrice.js":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/Admin/Products/functions/getFormattedPrice.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getFormattedPrice; });
function getFormattedPrice(price) {
  var priceStr = price;
  priceStr = priceStr.replace(/\s/g, ''); // удалить пробелы и внутри и снаружи

  priceStr = priceStr.replace(/[^0-9]/g, ''); // удалить все символы кроме цифр

  var len = priceStr.length - 1;
  var spacedPrice = '';
  var counter = 0;

  for (var k = len; k >= 0; k--) {
    counter++;
    if (counter % 3 === 0) spacedPrice = ' ' + priceStr[k] + spacedPrice;else spacedPrice = priceStr[k] + spacedPrice;
  }

  return spacedPrice.trim();
}

/***/ })

}]);