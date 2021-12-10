(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Products/ProductForm/CheckNumberOfCategories.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Admin/Products/ProductForm/CheckNumberOfCategories.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************/
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

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "CheckNumberOfCategories",
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('categories', ['categories', 'categoriesCount'])), {}, {
    catsCount: function catsCount() {
      return this.categoriesCount['categories'];
    },
    materialsCount: function materialsCount() {
      return this.categoriesCount['materials'];
    },
    colorsCount: function colorsCount() {
      return this.categoriesCount['colors'];
    }
  }),
  watch: {
    colorsCount: function colorsCount(value) {
      if (value === 0) {
        var text = 'Не созданы цвета товаров, ' + 'сначала добавьте цвета товаров по ссылке «Категории / Цвета» в меню.';
        this.$store.dispatch('showInformationDialog', text);
      }
    },
    materialsCount: function materialsCount(value) {
      if (value === 0) {
        var text = 'Не созданы материалы товаров, ' + 'сначала добавьте материалы товаров по ссылке «Категории / Материалы» в меню.';
        this.$store.dispatch('showInformationDialog', text);
      }
    },
    catsCount: function catsCount(value) {
      if (value === 0) {
        var text = 'Не созданы категории товаров, ' + 'сначала добавьте категории товаров по ссылке «Категории» в меню.';
        this.$store.dispatch('showInformationDialog', text);
      }
    }
  },
  mounted: function mounted() {
    if (this.categories['categories'].length === 0) {
      this.$store.dispatch('categories/loadCategories', 'categories');
    }

    if (this.categories['materials'].length === 0) {
      this.$store.dispatch('categories/loadCategories', 'materials');
    }

    if (this.categories['colors'].length === 0) {
      this.$store.dispatch('categories/loadCategories', 'colors');
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Products/ProductForm/CheckboxesList.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Admin/Products/ProductForm/CheckboxesList.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************/
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

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "CheckboxesList",
  // пропс value, потому что в родителе v-model
  props: ['value', 'localProduct', 'header', 'entity', 'closeListCmd'],
  data: function data() {
    return {
      checkboxesVisibility: false
    };
  },
  computed: _objectSpread(_objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('categories', ['categories'])), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])(['typeinErrors'])), {}, {
    localCategories: function localCategories() {
      var entityBook = {
        category: 'categories',
        material: 'materials',
        color: 'colors'
      };
      var entities = entityBook[this.entity];
      return this.categories[entities];
    },
    checkboxesAreVisible: function checkboxesAreVisible() {
      return this.checkboxesVisibility;
    },
    selectedCats: function selectedCats() {
      var _this = this;

      if (!this.localCategories[0]) {
        return;
      } // событие input, потому что в родителе v-model


      this.$emit('input', this.localProduct[this.entity + '_ids']);
      return this.localProduct[this.entity + '_ids'].map(function (id) {
        return {
          id: id,
          name: _this.localCategories.find(function (item) {
            return item.id === id;
          }).name
        };
      }); // selected cats array
    }
  }),
  methods: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])('products', ['typeinValidation'])), {}, {
    changeCheckboxesVisibility: function changeCheckboxesVisibility() {
      var _this2 = this;

      var val = this.checkboxesVisibility;
      this.$emit('closeAllCheckboxesLists');
      setTimeout(function () {
        _this2.checkboxesVisibility = !val;
      }, 100);
    },
    deleteSelectedItem: function deleteSelectedItem(val) {
      var product = this.localProduct;
      var index = product[this.entity + '_ids'].findIndex(function (item) {
        return item === val;
      });
      product[this.entity + '_ids'].splice(index, 1); // с позиции index удалить 1 элемент
      //this.localProduct = { ...product };
    },
    closeThisCheckboxes: function closeThisCheckboxes() {
      this.checkboxesVisibility = false;
    }
  }),
  watch: {
    closeListCmd: function closeListCmd(val) {
      if (!val) {
        return;
      }

      this.closeThisCheckboxes();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Products/ProductForm/FilesInput.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Admin/Products/ProductForm/FilesInput.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "FilesInput",
  // пропс value, потому что в родителе v-model, который есть как
  // :value="photos"  @input="photos = $event"
  props: ['value', 'owner'],
  data: function data() {
    return {
      photos: []
    };
  },
  methods: {
    previewFiles: function previewFiles() {
      if (this.$refs.photos.files.length === 0) {
        return;
      }

      this.photos = _toConsumableArray(this.$refs.photos.files);

      if (this.photos.length > 5) {
        var text = "\u0412\u044B\u0431\u0440\u0430\u043D\u043E \u0444\u0430\u0439\u043B\u043E\u0432 \u0431\u043E\u043B\u044C\u0448\u0435 \u0447\u0435\u043C 5,\n                \u044D\u0442\u043E \u043C\u043E\u0436\u0435\u0442 \u0441\u0438\u043B\u044C\u043D\u043E \u0437\u0430\u043C\u0435\u0434\u043B\u0438\u0442\u044C \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0443 \u0444\u043E\u0442\u043E. \u0420\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0443\u0435\u0442\u0441\u044F \u0437\u0430\u0433\u0440\u0443\u0436\u0430\u0442\u044C \u043D\u0435 \u0431\u043E\u043B\u0435\u0435 \u0447\u0435\u043C \u043F\u043E 5 \u0444\u043E\u0442\u043E.\n                \u0421\u043B\u0435\u0434\u0443\u0449\u0438\u0435 \u0444\u043E\u0442\u043E \u043C\u043E\u0436\u043D\u043E \u0431\u0443\u0434\u0435\u0442 \u0434\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043F\u043E\u0441\u043B\u0435.";
        this.$store.dispatch('showInformationDialog', text);
      }
    },
    removePreFile: function removePreFile(index) {
      this.photos.splice(index, 1);
    },
    selectFiles: function selectFiles() {
      this.$refs.photos.click();
    }
  },
  computed: {
    graphicSrc: function graphicSrc() {
      var graphicSrc = [];

      for (var i = 0; i < this.photos.length; i++) {
        var photo = this.photos[i];

        if (!/\.(jpe?g|png|gif|bmp|webp)$/i.test(photo.name)) {
          continue;
        }

        graphicSrc.push({
          url: URL.createObjectURL(photo),
          index: i
        });
      } // событие input, потому что в родителе v-model, который есть как
      // :value="photos"  @input="photos = $event"


      this.$emit('input', this.photos);
      return graphicSrc; // array of objects
    },
    nonGraphicNames: function nonGraphicNames() {
      var nonGraphicNames = [];

      for (var i = 0; i < this.photos.length; i++) {
        var photo = this.photos[i];

        if (!/\.(jpe?g|png|gif|bmp|webp)$/i.test(photo.name)) {
          nonGraphicNames.push({
            name: photo.name,
            index: i
          });
        } // событие input, потому что в родителе v-model, который есть как
        // :value="photos"  @input="photos = $event"


        this.$emit('input', this.photos);
      }

      return nonGraphicNames; // array of objects
    },
    buttonHeader: function buttonHeader() {
      if (this.photos.length > 0) {
        return 'Заменить фото';
      }

      return 'Добавить фото';
    },
    showPhotoButton: function showPhotoButton() {
      // показывать кнопку «Добавить/Заменить фото» всегда, кроме случая ниже
      return !(this.owner === 'ProductPhotoManager' && this.photos.length > 0);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Products/ProductForm/ProductForm.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Admin/Products/ProductForm/ProductForm.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _CheckNumberOfCategories__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CheckNumberOfCategories */ "./resources/js/components/Admin/Products/ProductForm/CheckNumberOfCategories.vue");
/* harmony import */ var _FilesInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FilesInput */ "./resources/js/components/Admin/Products/ProductForm/FilesInput.vue");
/* harmony import */ var _CheckboxesList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CheckboxesList */ "./resources/js/components/Admin/Products/ProductForm/CheckboxesList.vue");
/* harmony import */ var _functions_fitTextareaHeight__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../functions/fitTextareaHeight */ "./resources/js/components/Admin/Products/functions/fitTextareaHeight.js");
/* harmony import */ var _functions_getFormattedPrice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../functions/getFormattedPrice */ "./resources/js/components/Admin/Products/functions/getFormattedPrice.js");
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






/* harmony default export */ __webpack_exports__["default"] = ({
  name: "ProductForm",
  components: {
    CheckNumberOfCategories: _CheckNumberOfCategories__WEBPACK_IMPORTED_MODULE_1__["default"],
    FilesInput: _FilesInput__WEBPACK_IMPORTED_MODULE_2__["default"],
    CheckboxesList: _CheckboxesList__WEBPACK_IMPORTED_MODULE_3__["default"]
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
      closeCheckboxesListsCmd: false
    };
  },
  computed: _objectSpread(_objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('products', ['singleProductFromServer'])), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])(['isAlarmingInput', 'typeinErrors'])), {}, {
    localPrice: function localPrice() {
      return this.localProduct.price;
    }
  }),
  methods: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])('products', ['saveProduct', 'typeinValidation'])), {}, {
    fitTextareaHeight: function fitTextareaHeight(event) {
      Object(_functions_fitTextareaHeight__WEBPACK_IMPORTED_MODULE_4__["default"])(event);
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
    closeAllCheckboxesLists: function closeAllCheckboxesLists() {
      var _this = this;

      this.closeCheckboxesListsCmd = true;
      setTimeout(function () {
        _this.closeCheckboxesListsCmd = false;
      }, 100);
    }
  }),
  watch: {
    localPrice: function localPrice(value) {
      this.localProduct.price = Object(_functions_getFormattedPrice__WEBPACK_IMPORTED_MODULE_5__["default"])(value);
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
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Products/ProductForm/CheckNumberOfCategories.vue?vue&type=template&id=3ede4348&":
/*!*****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Admin/Products/ProductForm/CheckNumberOfCategories.vue?vue&type=template&id=3ede4348& ***!
  \*****************************************************************************************************************************************************************************************************************************************************/
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
  return _c("div")
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Products/ProductForm/CheckboxesList.vue?vue&type=template&id=dc62298a&":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Admin/Products/ProductForm/CheckboxesList.vue?vue&type=template&id=dc62298a& ***!
  \********************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "selectedCategories__wrapper" }, [
    _c("p", { staticClass: "product_form__property_header" }, [
      _vm._v("\n        " + _vm._s(_vm.header) + "\n    ")
    ]),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass: "selectedCategories",
        on: {
          click: function($event) {
            $event.stopPropagation()
            return _vm.changeCheckboxesVisibility()
          }
        }
      },
      [
        _c(
          "div",
          { staticClass: "selectedCategories__items" },
          _vm._l(_vm.selectedCats, function(cat) {
            return _c(
              "p",
              {
                key: cat.id,
                staticClass: "selectedCategories__item show_block",
                on: {
                  click: function($event) {
                    $event.stopPropagation()
                  }
                }
              },
              [
                _vm._v(
                  "\n                " + _vm._s(cat.name) + "\n                "
                ),
                _c(
                  "span",
                  {
                    staticClass: "selectedCategories__item__collapse_icon",
                    on: {
                      click: function($event) {
                        $event.stopPropagation()
                        return _vm.deleteSelectedItem(cat.id)
                      }
                    }
                  },
                  [_vm._v("\n                    ×\n                ")]
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
            class: { selectedCategories__arrow_up: _vm.checkboxesAreVisible }
          },
          [_vm._v("\n            ▼\n        ")]
        )
      ]
    ),
    _vm._v(" "),
    _vm.checkboxesAreVisible
      ? _c(
          "div",
          {
            staticClass: "relative_checkboxes_wrapper",
            on: {
              click: function($event) {
                $event.stopPropagation()
              }
            }
          },
          [
            _c(
              "div",
              { staticClass: "absolute_checkboxes_list show_block" },
              _vm._l(_vm.localCategories, function(cat) {
                return _c(
                  "p",
                  { key: cat.id, staticClass: "checkbox_input__item tal" },
                  [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.localProduct[_vm.entity + "_ids"],
                          expression: "localProduct[entity + '_ids']"
                        }
                      ],
                      staticClass: "checkbox_input",
                      attrs: { type: "checkbox", id: "cat" + cat.id },
                      domProps: {
                        value: cat.id,
                        checked: Array.isArray(
                          _vm.localProduct[_vm.entity + "_ids"]
                        )
                          ? _vm._i(
                              _vm.localProduct[_vm.entity + "_ids"],
                              cat.id
                            ) > -1
                          : _vm.localProduct[_vm.entity + "_ids"]
                      },
                      on: {
                        change: [
                          function($event) {
                            var $$a = _vm.localProduct[_vm.entity + "_ids"],
                              $$el = $event.target,
                              $$c = $$el.checked ? true : false
                            if (Array.isArray($$a)) {
                              var $$v = cat.id,
                                $$i = _vm._i($$a, $$v)
                              if ($$el.checked) {
                                $$i < 0 &&
                                  _vm.$set(
                                    _vm.localProduct,
                                    _vm.entity + "_ids",
                                    $$a.concat([$$v])
                                  )
                              } else {
                                $$i > -1 &&
                                  _vm.$set(
                                    _vm.localProduct,
                                    _vm.entity + "_ids",
                                    $$a.slice(0, $$i).concat($$a.slice($$i + 1))
                                  )
                              }
                            } else {
                              _vm.$set(
                                _vm.localProduct,
                                _vm.entity + "_ids",
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
                        attrs: { for: "cat" + cat.id }
                      },
                      [
                        _vm._v(
                          "\n                    " +
                            _vm._s(cat.name) +
                            "\n                "
                        )
                      ]
                    )
                  ]
                )
              }),
              0
            )
          ]
        )
      : _vm._e(),
    _vm._v(" "),
    _c("p", {
      staticClass: "validation_message_at_input ml_minus3",
      domProps: { innerHTML: _vm._s(_vm.typeinErrors(_vm.entity + "_ids")) }
    })
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Products/ProductForm/FilesInput.vue?vue&type=template&id=6d95aa42&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Admin/Products/ProductForm/FilesInput.vue?vue&type=template&id=6d95aa42& ***!
  \****************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", [
    _c(
      "div",
      {
        staticClass: "photo_preview__container",
        class: { mt20: _vm.photos.length > 0 }
      },
      [
        _vm._l(_vm.graphicSrc, function(item) {
          return _c(
            "div",
            { key: item.index, staticClass: "prePhoto__wrapper" },
            [
              _c("img", {
                staticClass: "prePhoto",
                attrs: { alt: "", src: item.url }
              }),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "prePhoto__close_icon",
                  on: {
                    click: function($event) {
                      return _vm.removePreFile(item.index)
                    }
                  }
                },
                [_vm._v("\n                ✖\n            ")]
              )
            ]
          )
        }),
        _vm._v(" "),
        _vm._l(_vm.nonGraphicNames, function(item) {
          return _c(
            "div",
            { key: item.index, staticClass: "prePhoto__wrapper" },
            [
              _c("div", {
                staticClass: "preFile_name",
                domProps: { innerHTML: _vm._s(item.name) }
              }),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass:
                    "prePhoto__close_icon prePhoto__close_icon_offset",
                  on: {
                    click: function($event) {
                      return _vm.removePreFile(item.index)
                    }
                  }
                },
                [_vm._v("\n                ✖\n            ")]
              )
            ]
          )
        })
      ],
      2
    ),
    _vm._v(" "),
    _c("div", { staticClass: "input_photo__wrapper" }, [
      _c("input", {
        ref: "photos",
        staticClass: "input_photo",
        attrs: { type: "file", accept: "image/*", multiple: "" },
        on: {
          change: function($event) {
            return _vm.previewFiles()
          }
        }
      }),
      _vm._v(" "),
      _vm.showPhotoButton
        ? _c(
            "button",
            {
              staticClass: "button__select_photos mauto",
              on: {
                click: function($event) {
                  return _vm.selectFiles()
                }
              }
            },
            [_vm._v("\n            " + _vm._s(_vm.buttonHeader) + "\n        ")]
          )
        : _vm._e()
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Products/ProductForm/ProductForm.vue?vue&type=template&id=81d40892&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Admin/Products/ProductForm/ProductForm.vue?vue&type=template&id=81d40892& ***!
  \*****************************************************************************************************************************************************************************************************************************************/
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
    {
      staticClass: "show_block",
      on: {
        click: function($event) {
          return _vm.closeAllCheckboxesLists()
        }
      }
    },
    [
      _c("check-number-of-categories"),
      _vm._v(" "),
      _vm.action === "create" ? _c("h1", [_vm._v("Добавить товар")]) : _vm._e(),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "content_block content_block__product_form" },
        [
          _c("p", { staticClass: "product_form__property_header mt20" }, [
            _vm._v("Название товара")
          ]),
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
          _c("checkboxes-list", {
            staticClass: "mt30",
            attrs: {
              "close-list-cmd": _vm.closeCheckboxesListsCmd,
              "local-product": _vm.localProduct,
              entity: "category",
              header: "Категория"
            },
            on: {
              closeAllCheckboxesLists: function($event) {
                return _vm.closeAllCheckboxesLists()
              }
            },
            model: {
              value: _vm.localProduct.category_ids,
              callback: function($$v) {
                _vm.$set(_vm.localProduct, "category_ids", $$v)
              },
              expression: "localProduct.category_ids"
            }
          }),
          _vm._v(" "),
          _c("checkboxes-list", {
            staticClass: "mt30",
            attrs: {
              "close-list-cmd": _vm.closeCheckboxesListsCmd,
              "local-product": _vm.localProduct,
              entity: "material",
              header: "Материал"
            },
            on: {
              closeAllCheckboxesLists: function($event) {
                return _vm.closeAllCheckboxesLists()
              }
            },
            model: {
              value: _vm.localProduct.material_ids,
              callback: function($$v) {
                _vm.$set(_vm.localProduct, "material_ids", $$v)
              },
              expression: "localProduct.material_ids"
            }
          }),
          _vm._v(" "),
          _c("checkboxes-list", {
            staticClass: "mt30",
            attrs: {
              "close-list-cmd": _vm.closeCheckboxesListsCmd,
              "local-product": _vm.localProduct,
              entity: "color",
              header: "Цвет"
            },
            on: {
              closeAllCheckboxesLists: function($event) {
                return _vm.closeAllCheckboxesLists()
              }
            },
            model: {
              value: _vm.localProduct.color_ids,
              callback: function($$v) {
                _vm.$set(_vm.localProduct, "color_ids", $$v)
              },
              expression: "localProduct.color_ids"
            }
          }),
          _vm._v(" "),
          _c("p", { staticClass: "product_form__property_header mt40" }, [
            _vm._v("Описание товара")
          ]),
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
                keyup: function($event) {
                  return _vm.typeinValidation(_vm.localProduct)
                },
                input: [
                  function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(
                      _vm.localProduct,
                      "description",
                      $event.target.value
                    )
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
          _c("p", { staticClass: "product_form__property_header mt30" }, [
            _vm._v("Цена товара")
          ]),
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
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/Admin/Products/ProductForm/CheckNumberOfCategories.vue":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/Admin/Products/ProductForm/CheckNumberOfCategories.vue ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CheckNumberOfCategories_vue_vue_type_template_id_3ede4348___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CheckNumberOfCategories.vue?vue&type=template&id=3ede4348& */ "./resources/js/components/Admin/Products/ProductForm/CheckNumberOfCategories.vue?vue&type=template&id=3ede4348&");
/* harmony import */ var _CheckNumberOfCategories_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CheckNumberOfCategories.vue?vue&type=script&lang=js& */ "./resources/js/components/Admin/Products/ProductForm/CheckNumberOfCategories.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CheckNumberOfCategories_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CheckNumberOfCategories_vue_vue_type_template_id_3ede4348___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CheckNumberOfCategories_vue_vue_type_template_id_3ede4348___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Admin/Products/ProductForm/CheckNumberOfCategories.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Admin/Products/ProductForm/CheckNumberOfCategories.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************!*\
  !*** ./resources/js/components/Admin/Products/ProductForm/CheckNumberOfCategories.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CheckNumberOfCategories_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CheckNumberOfCategories.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Products/ProductForm/CheckNumberOfCategories.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CheckNumberOfCategories_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Admin/Products/ProductForm/CheckNumberOfCategories.vue?vue&type=template&id=3ede4348&":
/*!***********************************************************************************************************************!*\
  !*** ./resources/js/components/Admin/Products/ProductForm/CheckNumberOfCategories.vue?vue&type=template&id=3ede4348& ***!
  \***********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CheckNumberOfCategories_vue_vue_type_template_id_3ede4348___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CheckNumberOfCategories.vue?vue&type=template&id=3ede4348& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Products/ProductForm/CheckNumberOfCategories.vue?vue&type=template&id=3ede4348&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CheckNumberOfCategories_vue_vue_type_template_id_3ede4348___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CheckNumberOfCategories_vue_vue_type_template_id_3ede4348___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Admin/Products/ProductForm/CheckboxesList.vue":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/Admin/Products/ProductForm/CheckboxesList.vue ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CheckboxesList_vue_vue_type_template_id_dc62298a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CheckboxesList.vue?vue&type=template&id=dc62298a& */ "./resources/js/components/Admin/Products/ProductForm/CheckboxesList.vue?vue&type=template&id=dc62298a&");
/* harmony import */ var _CheckboxesList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CheckboxesList.vue?vue&type=script&lang=js& */ "./resources/js/components/Admin/Products/ProductForm/CheckboxesList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CheckboxesList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CheckboxesList_vue_vue_type_template_id_dc62298a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CheckboxesList_vue_vue_type_template_id_dc62298a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Admin/Products/ProductForm/CheckboxesList.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Admin/Products/ProductForm/CheckboxesList.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/components/Admin/Products/ProductForm/CheckboxesList.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CheckboxesList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CheckboxesList.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Products/ProductForm/CheckboxesList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CheckboxesList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Admin/Products/ProductForm/CheckboxesList.vue?vue&type=template&id=dc62298a&":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/components/Admin/Products/ProductForm/CheckboxesList.vue?vue&type=template&id=dc62298a& ***!
  \**************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CheckboxesList_vue_vue_type_template_id_dc62298a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CheckboxesList.vue?vue&type=template&id=dc62298a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Products/ProductForm/CheckboxesList.vue?vue&type=template&id=dc62298a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CheckboxesList_vue_vue_type_template_id_dc62298a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CheckboxesList_vue_vue_type_template_id_dc62298a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Admin/Products/ProductForm/FilesInput.vue":
/*!***************************************************************************!*\
  !*** ./resources/js/components/Admin/Products/ProductForm/FilesInput.vue ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FilesInput_vue_vue_type_template_id_6d95aa42___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FilesInput.vue?vue&type=template&id=6d95aa42& */ "./resources/js/components/Admin/Products/ProductForm/FilesInput.vue?vue&type=template&id=6d95aa42&");
/* harmony import */ var _FilesInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FilesInput.vue?vue&type=script&lang=js& */ "./resources/js/components/Admin/Products/ProductForm/FilesInput.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FilesInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FilesInput_vue_vue_type_template_id_6d95aa42___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FilesInput_vue_vue_type_template_id_6d95aa42___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Admin/Products/ProductForm/FilesInput.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Admin/Products/ProductForm/FilesInput.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/Admin/Products/ProductForm/FilesInput.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FilesInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./FilesInput.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Products/ProductForm/FilesInput.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FilesInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Admin/Products/ProductForm/FilesInput.vue?vue&type=template&id=6d95aa42&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/components/Admin/Products/ProductForm/FilesInput.vue?vue&type=template&id=6d95aa42& ***!
  \**********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FilesInput_vue_vue_type_template_id_6d95aa42___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./FilesInput.vue?vue&type=template&id=6d95aa42& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Products/ProductForm/FilesInput.vue?vue&type=template&id=6d95aa42&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FilesInput_vue_vue_type_template_id_6d95aa42___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FilesInput_vue_vue_type_template_id_6d95aa42___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Admin/Products/ProductForm/ProductForm.vue":
/*!****************************************************************************!*\
  !*** ./resources/js/components/Admin/Products/ProductForm/ProductForm.vue ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ProductForm_vue_vue_type_template_id_81d40892___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProductForm.vue?vue&type=template&id=81d40892& */ "./resources/js/components/Admin/Products/ProductForm/ProductForm.vue?vue&type=template&id=81d40892&");
/* harmony import */ var _ProductForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProductForm.vue?vue&type=script&lang=js& */ "./resources/js/components/Admin/Products/ProductForm/ProductForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ProductForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ProductForm_vue_vue_type_template_id_81d40892___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ProductForm_vue_vue_type_template_id_81d40892___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Admin/Products/ProductForm/ProductForm.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Admin/Products/ProductForm/ProductForm.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/components/Admin/Products/ProductForm/ProductForm.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ProductForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Products/ProductForm/ProductForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Admin/Products/ProductForm/ProductForm.vue?vue&type=template&id=81d40892&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/components/Admin/Products/ProductForm/ProductForm.vue?vue&type=template&id=81d40892& ***!
  \***********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductForm_vue_vue_type_template_id_81d40892___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ProductForm.vue?vue&type=template&id=81d40892& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Products/ProductForm/ProductForm.vue?vue&type=template&id=81d40892&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductForm_vue_vue_type_template_id_81d40892___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductForm_vue_vue_type_template_id_81d40892___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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