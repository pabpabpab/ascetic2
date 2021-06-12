(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Admin_Products_ProductForm_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/Products/FilesInput.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/Products/FilesInput.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "FilesInput",
  // пропс value, потому что в родителе v-model, который есть как
  // :value="photos"  @input="photos = $event"
  props: ['value'],
  data: function data() {
    return {
      photos: []
    };
  },
  methods: {
    previewFiles: function previewFiles() {
      this.photos = _toConsumableArray(this.$refs.photos.files);
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
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/Products/ProductForm.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/Products/ProductForm.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _FilesInput__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FilesInput */ "./resources/js/components/Admin/Products/FilesInput.vue");
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "ProductForm",
  components: {
    FilesInput: _FilesInput__WEBPACK_IMPORTED_MODULE_0__.default
  },
  data: function data() {
    return {
      localProduct: {
        id: 0,
        category_id: 0,
        name: '',
        price: '',
        description: '',
        material_ids: [],
        color_ids: []
      },
      photos: [],
      zeroProduct: {},
      action: 'create',
      // create/edit
      formHeaderProductName: '',
      animationClassObject: {
        'product_form__animation_open pd20 mt20': true,
        'product_form__animation_close': false
      }
    };
  },
  methods: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapActions)('products', ['saveProduct', 'typeinValidation'])),
  computed: _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapGetters)('products', ['singleProductFromServer'])), (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapGetters)('categories', ['categories'])), (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapGetters)('materials', ['materials'])), (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapGetters)('colors', ['colors'])), (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapGetters)(['isAlarmingInput', 'typeinErrors'])), {}, {
    localPrice: function localPrice() {
      return this.localProduct.price;
    }
  }),
  watch: {
    localPrice: function localPrice(value) {
      var _this = this;

      this.$store.dispatch('products/formatPrice', value).then(function (data) {
        _this.localProduct.price = data;
      }); //this.localProduct.price = this.$options.filters.priceFormat(value);
    }
  },
  mounted: function mounted() {
    // в этом хуке localProduct нулевая
    // скопировать для reset'а в будущем при create
    this.zeroProduct = _objectSpread({}, this.localProduct);
    this.$store.dispatch('categories/loadCategories');
    this.$store.dispatch('materials/loadMaterials');
    this.$store.dispatch('colors/loadColors');
  }
}); //this.nonGraphicNames = [];
//this.graphicSrc = [];

/*


            <div class="input__wrapper">
                <p class="input__validation_message"
                   v-html="typeinErrors('material_id')">
                </p>
                <label>
                    <select multiple
                        class="input__text__product"
                        :class="{ 'input_alarm': isAlarmingInput('material_id') }"
                        v-model="localProduct.material_id">
                        <option disabled value="">Укажите материал</option>
                        <option
                            v-for="material of materials"
                            :key="material.id"
                            :value="material.id">
                            {{material.name}}
                        </option>
                    </select>
                </label>
            </div>





            <div class="input__wrapper">
                <p class="input__validation_message"
                   v-html="typeinErrors('color_id')">
                </p>
                <label>
                    <select multiple
                        class="input__text__product"
                        :class="{ 'input_alarm': isAlarmingInput('color_id') }"
                        v-model="localProduct.color_id">
                        <option disabled value="">Укажите цвет</option>
                        <option
                            v-for="color of colors"
                            :key="color.id"
                            :value="color.id">
                            {{color.name}}
                        </option>
                    </select>
                </label>
            </div>





let photoCounter = 0;
for (let i = 0; i < this.photos.length; i++) {
    const photo = this.photos[i];

    if (!/\.(jpe?g|png|gif|bmp|webp)$/i.test(photo.name)) {
        this.nonGraphicNames.push({
            name: photo.name,
            index: i
        });
        photoCounter++;
        continue;
    }

    const reader = new FileReader();
    reader.onload = () => {
        this.graphicSrc.push({
            url: reader.result,
            index: i
        });
    }
    reader.readAsDataURL(photo);
    photoCounter++;
}*/

/***/ }),

/***/ "./resources/js/components/Admin/Products/FilesInput.vue":
/*!***************************************************************!*\
  !*** ./resources/js/components/Admin/Products/FilesInput.vue ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _FilesInput_vue_vue_type_template_id_187f6f83___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FilesInput.vue?vue&type=template&id=187f6f83& */ "./resources/js/components/Admin/Products/FilesInput.vue?vue&type=template&id=187f6f83&");
/* harmony import */ var _FilesInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FilesInput.vue?vue&type=script&lang=js& */ "./resources/js/components/Admin/Products/FilesInput.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _FilesInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _FilesInput_vue_vue_type_template_id_187f6f83___WEBPACK_IMPORTED_MODULE_0__.render,
  _FilesInput_vue_vue_type_template_id_187f6f83___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Admin/Products/FilesInput.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Admin/Products/ProductForm.vue":
/*!****************************************************************!*\
  !*** ./resources/js/components/Admin/Products/ProductForm.vue ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ProductForm_vue_vue_type_template_id_59144b93___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProductForm.vue?vue&type=template&id=59144b93& */ "./resources/js/components/Admin/Products/ProductForm.vue?vue&type=template&id=59144b93&");
/* harmony import */ var _ProductForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProductForm.vue?vue&type=script&lang=js& */ "./resources/js/components/Admin/Products/ProductForm.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _ProductForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _ProductForm_vue_vue_type_template_id_59144b93___WEBPACK_IMPORTED_MODULE_0__.render,
  _ProductForm_vue_vue_type_template_id_59144b93___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Admin/Products/ProductForm.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Admin/Products/FilesInput.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/Admin/Products/FilesInput.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FilesInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FilesInput.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/Products/FilesInput.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FilesInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/Admin/Products/ProductForm.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/Admin/Products/ProductForm.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ProductForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/Products/ProductForm.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/Admin/Products/FilesInput.vue?vue&type=template&id=187f6f83&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/Admin/Products/FilesInput.vue?vue&type=template&id=187f6f83& ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FilesInput_vue_vue_type_template_id_187f6f83___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FilesInput_vue_vue_type_template_id_187f6f83___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FilesInput_vue_vue_type_template_id_187f6f83___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FilesInput.vue?vue&type=template&id=187f6f83& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/Products/FilesInput.vue?vue&type=template&id=187f6f83&");


/***/ }),

/***/ "./resources/js/components/Admin/Products/ProductForm.vue?vue&type=template&id=59144b93&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/Admin/Products/ProductForm.vue?vue&type=template&id=59144b93& ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductForm_vue_vue_type_template_id_59144b93___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductForm_vue_vue_type_template_id_59144b93___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductForm_vue_vue_type_template_id_59144b93___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ProductForm.vue?vue&type=template&id=59144b93& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/Products/ProductForm.vue?vue&type=template&id=59144b93&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/Products/FilesInput.vue?vue&type=template&id=187f6f83&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/Products/FilesInput.vue?vue&type=template&id=187f6f83& ***!
  \*************************************************************************************************************************************************************************************************************************************/
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
    _c(
      "div",
      { staticClass: "photo__preview__container" },
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
                  staticClass: "prePhoto__close_icon offset__close_icon",
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
    _c("div", { staticClass: "input__photo__wrapper" }, [
      _c("input", {
        ref: "photos",
        staticClass: "input__photo",
        attrs: { type: "file", accept: "image/*", multiple: "" },
        on: {
          change: function($event) {
            return _vm.previewFiles()
          }
        }
      }),
      _vm._v(" "),
      _c(
        "button",
        {
          staticClass: "button__select_photos mauto",
          on: {
            click: function($event) {
              return _vm.selectFiles()
            }
          }
        },
        [_vm._v("\n            Добавить фото\n        ")]
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/Products/ProductForm.vue?vue&type=template&id=59144b93&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/Products/ProductForm.vue?vue&type=template&id=59144b93& ***!
  \**************************************************************************************************************************************************************************************************************************************/
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
  return _c(
    "div",
    { staticClass: "product_form__div mauto", class: _vm.animationClassObject },
    [
      _vm.action === "edit"
        ? _c("h1", { staticClass: "tal" }, [
            _vm._v("Редактировать товар "),
            _c("br"),
            _vm._v("«" + _vm._s(_vm.formHeaderProductName) + "»")
          ])
        : _c("h1", { staticClass: "tal" }, [_vm._v("Добавить товар")]),
      _vm._v(" "),
      _c(
        "div",
        [
          _c("div", { staticClass: "input__wrapper" }, [
            _c("p", {
              staticClass: "input__validation_message",
              domProps: { innerHTML: _vm._s(_vm.typeinErrors("category_id")) }
            }),
            _vm._v(" "),
            _c("label", [
              _c(
                "select",
                {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.localProduct.category_id,
                      expression: "localProduct.category_id"
                    }
                  ],
                  staticClass: "input__text__product",
                  class: { input_alarm: _vm.isAlarmingInput("category_id") },
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
                          _vm.localProduct,
                          "category_id",
                          $event.target.multiple
                            ? $$selectedVal
                            : $$selectedVal[0]
                        )
                      },
                      function($event) {
                        return _vm.typeinValidation(_vm.localProduct)
                      }
                    ]
                  }
                },
                [
                  _c("option", { attrs: { disabled: "", value: "" } }, [
                    _vm._v("Выберите категорию")
                  ]),
                  _vm._v(" "),
                  _vm._l(_vm.categories, function(category) {
                    return _c(
                      "option",
                      { key: category.id, domProps: { value: category.id } },
                      [
                        _vm._v(
                          "\n                        " +
                            _vm._s(category.name) +
                            "\n                    "
                        )
                      ]
                    )
                  })
                ],
                2
              )
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "input__wrapper" }, [
            _c("p", {
              staticClass: "input__validation_message",
              domProps: { innerHTML: _vm._s(_vm.typeinErrors("name")) }
            }),
            _vm._v(" "),
            _c("label", [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.localProduct.name,
                    expression: "localProduct.name"
                  }
                ],
                staticClass: "input__text__product",
                class: { input_alarm: _vm.isAlarmingInput("name") },
                attrs: {
                  type: "text",
                  maxlength: "50",
                  placeholder: "Ведите название товара"
                },
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
              })
            ])
          ]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "input__wrapper" },
            [
              _c("p", {
                staticClass: "input__validation_message",
                domProps: {
                  innerHTML: _vm._s(_vm.typeinErrors("material_ids"))
                }
              }),
              _vm._v(" "),
              _c("p", { staticClass: "tal" }, [_vm._v("Материал")]),
              _vm._v(" "),
              _vm._l(_vm.materials, function(material) {
                return _c("p", { key: material.id, staticClass: "tal" }, [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.localProduct.material_ids,
                        expression: "localProduct.material_ids"
                      }
                    ],
                    attrs: { type: "checkbox", id: "material" + material.id },
                    domProps: {
                      value: material.id,
                      checked: Array.isArray(_vm.localProduct.material_ids)
                        ? _vm._i(_vm.localProduct.material_ids, material.id) >
                          -1
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
                                  $$a.slice(0, $$i).concat($$a.slice($$i + 1))
                                )
                            }
                          } else {
                            _vm.$set(_vm.localProduct, "material_ids", $$c)
                          }
                        },
                        function($event) {
                          return _vm.typeinValidation(_vm.localProduct)
                        }
                      ]
                    }
                  }),
                  _vm._v(" "),
                  _c("label", { attrs: { for: "material" + material.id } }, [
                    _vm._v(_vm._s(material.name))
                  ])
                ])
              })
            ],
            2
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "input__wrapper" },
            [
              _c("p", {
                staticClass: "input__validation_message",
                domProps: { innerHTML: _vm._s(_vm.typeinErrors("color_ids")) }
              }),
              _vm._v(" "),
              _c("p", { staticClass: "tal" }, [_vm._v("Цвет")]),
              _vm._v(" "),
              _vm._l(_vm.colors, function(color) {
                return _c("p", { key: color.id, staticClass: "tal" }, [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.localProduct.color_ids,
                        expression: "localProduct.color_ids"
                      }
                    ],
                    attrs: { type: "checkbox", id: "color" + color.id },
                    domProps: {
                      value: color.id,
                      checked: Array.isArray(_vm.localProduct.color_ids)
                        ? _vm._i(_vm.localProduct.color_ids, color.id) > -1
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
                                  $$a.slice(0, $$i).concat($$a.slice($$i + 1))
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
                  _c("label", { attrs: { for: "color" + color.id } }, [
                    _vm._v(_vm._s(color.name))
                  ])
                ])
              })
            ],
            2
          ),
          _vm._v(" "),
          _c("div", { staticClass: "input__wrapper" }, [
            _c("p", {
              staticClass: "input__validation_message",
              domProps: { innerHTML: _vm._s(_vm.typeinErrors("description")) }
            }),
            _vm._v(" "),
            _c("label", [
              _c("textarea", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.localProduct.description,
                    expression: "localProduct.description"
                  }
                ],
                staticClass: "input__text__product input__textarea",
                class: { input_alarm: _vm.isAlarmingInput("description") },
                attrs: { placeholder: "Введите описание товара" },
                domProps: { value: _vm.localProduct.description },
                on: {
                  keyup: function($event) {
                    return _vm.typeinValidation(_vm.localProduct)
                  },
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(
                      _vm.localProduct,
                      "description",
                      $event.target.value
                    )
                  }
                }
              })
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "input__wrapper" }, [
            _c("p", {
              staticClass: "input__validation_message",
              domProps: { innerHTML: _vm._s(_vm.typeinErrors("price")) }
            }),
            _vm._v(" "),
            _c("label", [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.localProduct.price,
                    expression: "localProduct.price"
                  }
                ],
                staticClass: "input__text__product",
                class: { input_alarm: _vm.isAlarmingInput("price") },
                attrs: {
                  type: "text",
                  maxlength: "21",
                  placeholder: "Ведите цену товара"
                },
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
              })
            ])
          ]),
          _vm._v(" "),
          _c("files-input", {
            model: {
              value: _vm.photos,
              callback: function($$v) {
                _vm.photos = $$v
              },
              expression: "photos"
            }
          }),
          _vm._v(" "),
          _c(
            "button",
            {
              staticClass: "button__save_product mauto",
              on: {
                click: function($event) {
                  return _vm.saveProduct({
                    localProduct: _vm.localProduct,
                    photos: _vm.photos
                  })
                }
              }
            },
            [_vm._v("\n            Ok\n        ")]
          )
        ],
        1
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);