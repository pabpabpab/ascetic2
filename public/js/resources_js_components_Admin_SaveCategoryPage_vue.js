(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Admin_SaveCategoryPage_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/Products/Categories.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/Products/Categories.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _ItemCategoryEditForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ItemCategoryEditForm */ "./resources/js/components/Admin/Products/ItemCategoryEditForm.vue");
/* harmony import */ var _CategoryItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CategoryItem */ "./resources/js/components/Admin/Products/CategoryItem.vue");
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



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Categories",
  components: {
    CategoryItem: _CategoryItem__WEBPACK_IMPORTED_MODULE_1__.default,
    ItemCategoryEditForm: _ItemCategoryEditForm__WEBPACK_IMPORTED_MODULE_0__.default
  },
  props: ['rollChildItems'],
  data: function data() {
    return {
      currentItemComponents: {// id1: 'CategoryItem',
        // id2: 'CategoryItem',
        // id3: 'CategoryItem',
      },
      itemComponentName: 'CategoryItem',
      itemEditFormComponentName: 'ItemCategoryEditForm'
    };
  },
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_2__.mapGetters)('categories', ['categories'])),
  methods: {
    changeItemComponent: function changeItemComponent(itemId) {
      this.$emit('close-adding-component');
      var newComponentName = this.currentItemComponents['id' + itemId] === this.itemComponentName ? this.itemEditFormComponentName : this.itemComponentName;

      var temp = _objectSpread({}, this.currentItemComponents);

      for (var key in temp) {
        temp[key] = this.itemComponentName;
      }

      temp['id' + itemId] = newComponentName;
      this.currentItemComponents = _objectSpread({}, temp);
    }
  },
  watch: {
    categories: function categories(newCategories, oldCategories) {
      var _this = this;

      var temp = {};
      newCategories.forEach(function (item) {
        temp['id' + item.id] = _this.itemComponentName;
      });
      this.currentItemComponents = _objectSpread({}, temp);
    },
    rollChildItems: function rollChildItems(newValue, oldValue) {
      if (newValue === true) {
        var temp = _objectSpread({}, this.currentItemComponents);

        for (var key in temp) {
          temp[key] = this.itemComponentName;
        }

        this.currentItemComponents = _objectSpread({}, temp);
      }
    }
  },
  mounted: function mounted() {
    this.$store.dispatch('categories/loadCategories');
  }
});
/*
components: {
    CategoryItem: () => import('./CategoryItem.vue')
},
*/

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/Products/CategoryForm.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/Products/CategoryForm.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************/
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "CategoryForm",
  props: ['categoryId'],
  data: function data() {
    return {
      localCategory: {
        id: 0,
        name: '' //description: '',

      },
      zeroCategory: {},
      action: 'create',
      // create/edit
      formHeaderCategoryName: '',
      animationClassObject: {
        'category_form__animation_open pd20 mt20': true,
        'category_form__animation_close': false
      }
    };
  },
  methods: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapActions)('categories', ['saveCategory', 'typeinValidation'])), {}, {
    changeAddingComponent: function changeAddingComponent() {
      var _this = this;

      this.animationClassObject = {
        'category_form__animation_open': false,
        'category_form__animation_close': true
      };
      setTimeout(function () {
        _this.$emit('change-adding-component');
      }, 300);
    }
  }),
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapGetters)('categories', ['singleCategoryFromServer', 'isAlarmingInput', 'typeinValidationErrors'])),
  watch: {
    categoryId: function categoryId() {
      // при переключении маршрутов (страниц) сбросить ошибки
      this.$store.dispatch('categories/clearValidationErrors'); // categoryId в props

      if (this.categoryId > 0) {
        this.action = 'edit';
        this.$store.dispatch('categories/loadSingleCategory', this.categoryId);
      } else {
        this.action = 'create';
        this.localCategory = _objectSpread({}, this.zeroCategory);
        this.formHeaderCategoryName = '';
      }
    },
    singleCategoryFromServer: function singleCategoryFromServer(newServerCategory, oldServerCategory) {
      // при редактировании категории
      if (this.action === 'edit') {
        this.localCategory = newServerCategory;
        this.formHeaderCategoryName = newServerCategory.name;
        return;
      } // при создании новой категории (обнулить ввод после save)


      if (this.action === 'create') {
        if (newServerCategory.name.length > 0) {
          this.localCategory = _objectSpread({}, this.zeroCategory);
        }
      }
    }
  },
  mounted: function mounted() {
    // в этом хуке localCategory нулевая
    // скопировать для reset'а в будущем при create
    this.zeroCategory = _objectSpread({}, this.localCategory);
  }
});
/*
 <div class="input__wrapper">
            <label>
                <input type="text" maxlength="50"
                       placeholder="Ведите описание категории"
                       class="input__text"
                       :class="{ 'input_alarm': isAlarmingInput('description') }"
                       @keyup="typeinValidation(localCategory)"
                       v-model="localCategory.description">
            </label>
            <p class="input__validation_message"
               v-html="typeinValidationErrors('description')">
            </p>
        </div>
 */

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/Products/CategoryItem.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/Products/CategoryItem.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _assets_edit_icon_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../../assets/edit_icon.jpg */ "./resources/assets/edit_icon.jpg");
/* harmony import */ var _assets_delete_icon_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../../assets/delete_icon.png */ "./resources/assets/delete_icon.png");
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



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "CategoryItem",
  props: ['category'],
  data: function data() {
    return {
      edit_icon: _assets_edit_icon_jpg__WEBPACK_IMPORTED_MODULE_0__.default,
      delete_icon: _assets_delete_icon_png__WEBPACK_IMPORTED_MODULE_1__.default
    };
  },
  methods: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_2__.mapActions)('categories', ['preDeleteCategory']))
}); // :src="require('./../../../../static/edit_icon.jpg')"
// <img :src="edit_icon" alt="Редактировать" class="category__item__icon">

/*
<router-link class="user__nameLink" :to="'/admin/products_js/category/edit/' + category.id">
            <img :src="edit_icon" alt="Редактировать" title="Редактировать" class="category__item__icon_edit">
        </router-link>
 */

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/Products/ItemCategoryEditForm.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/Products/CategoryItemEditForm.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************************/
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "EditCategoryItemForm",
  props: ['category'],
  data: function data() {
    return {
      localCategory: {
        id: 0,
        name: ''
      },
      formHeaderCategoryName: '',
      animationClassObject: {
        'category_form__animation_open pd20 mt20': true,
        'category_form__animation_close': false
      }
    };
  },
  methods: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapActions)('categories', ['saveCategory', 'typeinValidation'])), {}, {
    changeItemComponent: function changeItemComponent(itemId) {
      var _this = this;

      this.animationClassObject = {
        'category_form__animation_open': false,
        'category_form__animation_close': true
      };
      setTimeout(function () {
        _this.$emit('change-item-component', itemId);
      }, 300);
    }
  }),
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapGetters)('categories', ['singleCategoryFromServer', 'isAlarmingInput', 'typeinValidationErrors'])),
  watch: {
    singleCategoryFromServer: function singleCategoryFromServer(newServerCategory, oldServerCategory) {
      this.localCategory = _objectSpread({}, newServerCategory);
      this.formHeaderCategoryName = newServerCategory.name;
    }
  },
  mounted: function mounted() {
    this.$store.dispatch('categories/clearValidationErrors');

    if (this.category.id) {
      this.$store.dispatch('categories/loadSingleCategory', this.category.id);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/SaveCategoryPage.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/oldSaveCategoryPage.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Products_CategoryForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Products/CategoryForm */ "./resources/js/components/Admin/Products/CategoryForm.vue");
/* harmony import */ var _Products_Categories__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Products/Categories */ "./resources/js/components/Admin/Products/Categories.vue");
//
//
//
//
//
//
//


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "SaveCategoryPage",
  components: {
    CategoryForm: _Products_CategoryForm__WEBPACK_IMPORTED_MODULE_0__.default,
    Categories: _Products_Categories__WEBPACK_IMPORTED_MODULE_1__.default
  },
  data: function data() {
    return {
      categoryId: 0
    };
  },
  watch: {
    $route: function $route(to, from) {
      var categoryId = this.$route.params.id;
      this.categoryId = categoryId > 0 ? categoryId : -1;
    }
  },
  mounted: function mounted() {
    var categoryId = this.$route.params.id;
    this.categoryId = categoryId > 0 ? categoryId : -1; // -1, а не 0, чтобы отработал watch в <category-form> при загрузке
  }
});

/***/ }),

/***/ "./resources/js/components/Admin/Products/Categories.vue":
/*!***************************************************************!*\
  !*** ./resources/js/components/Admin/Products/Categories.vue ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Categories_vue_vue_type_template_id_4620ace8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Categories.vue?vue&type=template&id=4620ace8& */ "./resources/js/components/Admin/Products/Categories.vue?vue&type=template&id=4620ace8&");
/* harmony import */ var _Categories_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Categories.vue?vue&type=script&lang=js& */ "./resources/js/components/Admin/Products/Categories.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Categories_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Categories_vue_vue_type_template_id_4620ace8___WEBPACK_IMPORTED_MODULE_0__.render,
  _Categories_vue_vue_type_template_id_4620ace8___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null

)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Admin/Products/Categories.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Admin/Products/CategoryForm.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/components/Admin/Products/CategoryForm.vue ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CategoryForm_vue_vue_type_template_id_a1006d5c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CategoryForm.vue?vue&type=template&id=a1006d5c& */ "./resources/js/components/Admin/Products/CategoryForm.vue?vue&type=template&id=a1006d5c&");
/* harmony import */ var _CategoryForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CategoryForm.vue?vue&type=script&lang=js& */ "./resources/js/components/Admin/Products/CategoryForm.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _CategoryForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _CategoryForm_vue_vue_type_template_id_a1006d5c___WEBPACK_IMPORTED_MODULE_0__.render,
  _CategoryForm_vue_vue_type_template_id_a1006d5c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null

)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Admin/Products/CategoryForm.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Admin/Products/CategoryItem.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/components/Admin/Products/CategoryItem.vue ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CategoryItem_vue_vue_type_template_id_4d190fbe___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CategoryItem.vue?vue&type=template&id=4d190fbe& */ "./resources/js/components/Admin/Products/CategoryItem.vue?vue&type=template&id=4d190fbe&");
/* harmony import */ var _CategoryItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CategoryItem.vue?vue&type=script&lang=js& */ "./resources/js/components/Admin/Products/CategoryItem.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _CategoryItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _CategoryItem_vue_vue_type_template_id_4d190fbe___WEBPACK_IMPORTED_MODULE_0__.render,
  _CategoryItem_vue_vue_type_template_id_4d190fbe___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null

)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Admin/Products/CategoryItem.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Admin/Products/ItemCategoryEditForm.vue":
/*!*************************************************************************!*\
  !*** ./resources/js/components/Admin/Products/CategoryItemEditForm.vue ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ItemCategoryEditForm_vue_vue_type_template_id_2770422f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CategoryItemEditForm.vue?vue&type=template&id=2770422f& */ "./resources/js/components/Admin/Products/ItemCategoryEditForm.vue?vue&type=template&id=2770422f&");
/* harmony import */ var _ItemCategoryEditForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CategoryItemEditForm.vue?vue&type=script&lang=js& */ "./resources/js/components/Admin/Products/ItemCategoryEditForm.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _ItemCategoryEditForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _ItemCategoryEditForm_vue_vue_type_template_id_2770422f___WEBPACK_IMPORTED_MODULE_0__.render,
  _ItemCategoryEditForm_vue_vue_type_template_id_2770422f___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null

)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Admin/Products/CategoryItemEditForm.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Admin/SaveCategoryPage.vue":
/*!************************************************************!*\
  !*** ./resources/js/components/Admin/oldSaveCategoryPage.vue ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SaveCategoryPage_vue_vue_type_template_id_200814d5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./oldSaveCategoryPage.vue?vue&type=template&id=200814d5& */ "./resources/js/components/Admin/SaveCategoryPage.vue?vue&type=template&id=200814d5&");
/* harmony import */ var _SaveCategoryPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./oldSaveCategoryPage.vue?vue&type=script&lang=js& */ "./resources/js/components/Admin/SaveCategoryPage.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _SaveCategoryPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _SaveCategoryPage_vue_vue_type_template_id_200814d5___WEBPACK_IMPORTED_MODULE_0__.render,
  _SaveCategoryPage_vue_vue_type_template_id_200814d5___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null

)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Admin/oldSaveCategoryPage.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Admin/Products/Categories.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/Admin/Products/Categories.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Categories_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Categories.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/Products/Categories.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Categories_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default);

/***/ }),

/***/ "./resources/js/components/Admin/Products/CategoryForm.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/Admin/Products/CategoryForm.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CategoryForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CategoryForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/Products/CategoryForm.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CategoryForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default);

/***/ }),

/***/ "./resources/js/components/Admin/Products/CategoryItem.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/Admin/Products/CategoryItem.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CategoryItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CategoryItem.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/Products/CategoryItem.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CategoryItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default);

/***/ }),

/***/ "./resources/js/components/Admin/Products/ItemCategoryEditForm.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/Admin/Products/CategoryItemEditForm.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemCategoryEditForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CategoryItemEditForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/Products/ItemCategoryEditForm.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemCategoryEditForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default);

/***/ }),

/***/ "./resources/js/components/Admin/SaveCategoryPage.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/Admin/oldSaveCategoryPage.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SaveCategoryPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./oldSaveCategoryPage.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/SaveCategoryPage.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SaveCategoryPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default);

/***/ }),

/***/ "./resources/js/components/Admin/Products/Categories.vue?vue&type=template&id=4620ace8&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/Admin/Products/Categories.vue?vue&type=template&id=4620ace8& ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Categories_vue_vue_type_template_id_4620ace8___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Categories_vue_vue_type_template_id_4620ace8___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Categories_vue_vue_type_template_id_4620ace8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Categories.vue?vue&type=template&id=4620ace8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/Products/Categories.vue?vue&type=template&id=4620ace8&");


/***/ }),

/***/ "./resources/js/components/Admin/Products/CategoryForm.vue?vue&type=template&id=a1006d5c&":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/Admin/Products/CategoryForm.vue?vue&type=template&id=a1006d5c& ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CategoryForm_vue_vue_type_template_id_a1006d5c___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CategoryForm_vue_vue_type_template_id_a1006d5c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CategoryForm_vue_vue_type_template_id_a1006d5c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CategoryForm.vue?vue&type=template&id=a1006d5c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/Products/CategoryForm.vue?vue&type=template&id=a1006d5c&");


/***/ }),

/***/ "./resources/js/components/Admin/Products/CategoryItem.vue?vue&type=template&id=4d190fbe&":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/Admin/Products/CategoryItem.vue?vue&type=template&id=4d190fbe& ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CategoryItem_vue_vue_type_template_id_4d190fbe___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CategoryItem_vue_vue_type_template_id_4d190fbe___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CategoryItem_vue_vue_type_template_id_4d190fbe___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CategoryItem.vue?vue&type=template&id=4d190fbe& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/Products/CategoryItem.vue?vue&type=template&id=4d190fbe&");


/***/ }),

/***/ "./resources/js/components/Admin/Products/ItemCategoryEditForm.vue?vue&type=template&id=2770422f&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/components/Admin/Products/CategoryItemEditForm.vue?vue&type=template&id=2770422f& ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemCategoryEditForm_vue_vue_type_template_id_2770422f___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemCategoryEditForm_vue_vue_type_template_id_2770422f___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemCategoryEditForm_vue_vue_type_template_id_2770422f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CategoryItemEditForm.vue?vue&type=template&id=2770422f& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/Products/ItemCategoryEditForm.vue?vue&type=template&id=2770422f&");


/***/ }),

/***/ "./resources/js/components/Admin/SaveCategoryPage.vue?vue&type=template&id=200814d5&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/Admin/oldSaveCategoryPage.vue?vue&type=template&id=200814d5& ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SaveCategoryPage_vue_vue_type_template_id_200814d5___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SaveCategoryPage_vue_vue_type_template_id_200814d5___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SaveCategoryPage_vue_vue_type_template_id_200814d5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./oldSaveCategoryPage.vue?vue&type=template&id=200814d5& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/SaveCategoryPage.vue?vue&type=template&id=200814d5&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/Products/Categories.vue?vue&type=template&id=4620ace8&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/Products/Categories.vue?vue&type=template&id=4620ace8& ***!
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
  return _c(
    "div",
    { staticClass: "categories" },
    _vm._l(_vm.categories, function(category) {
      return _c(_vm.currentItemComponents["id" + category.id], {
        key: category.id,
        tag: "component",
        attrs: { category: category },
        on: {
          "change-item-component": function($event) {
            return _vm.changeItemComponent(category.id)
          }
        }
      })
    }),
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/Products/CategoryForm.vue?vue&type=template&id=a1006d5c&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/Products/CategoryForm.vue?vue&type=template&id=a1006d5c& ***!
  \***************************************************************************************************************************************************************************************************************************************/
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
    {
      staticClass: "category_form__div mauto relative",
      class: _vm.animationClassObject
    },
    [
      _vm.action === "edit"
        ? _c("h1", { staticClass: "tal" }, [
            _vm._v("Редактировать категорию "),
            _c("br"),
            _vm._v("«" + _vm._s(_vm.formHeaderCategoryName) + "»")
          ])
        : _c("h1", { staticClass: "tal" }, [
            _vm._v("Создать категорию товаров")
          ]),
      _vm._v(" "),
      _c("div", [
        _c("div", { staticClass: "input__wrapper display-flex" }, [
          _c("p", {
            staticClass: "input__validation_message",
            domProps: { innerHTML: _vm._s(_vm.typeinValidationErrors("name")) }
          }),
          _vm._v(" "),
          _c("label", [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.localCategory.name,
                  expression: "localCategory.name"
                }
              ],
              staticClass: "input__text",
              class: { input_alarm: _vm.isAlarmingInput("name") },
              attrs: {
                type: "text",
                maxlength: "50",
                placeholder: "Ведите название категории"
              },
              domProps: { value: _vm.localCategory.name },
              on: {
                keyup: function($event) {
                  return _vm.typeinValidation(_vm.localCategory)
                },
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.localCategory, "name", $event.target.value)
                }
              }
            })
          ]),
          _vm._v(" "),
          _c(
            "button",
            {
              staticClass: "button__save_category",
              on: {
                click: function($event) {
                  return _vm.saveCategory(_vm.localCategory)
                }
              }
            },
            [_vm._v("\n                Ok\n            ")]
          )
        ])
      ]),
      _vm._v(" "),
      _vm.action === "edit"
        ? _c("div", { staticClass: "icon__collapse_form" }, [
            _vm._v("\n        –\n    ")
          ])
        : _c(
            "div",
            {
              staticClass: "icon__collapse_form",
              on: {
                click: function($event) {
                  return _vm.changeAddingComponent()
                }
              }
            },
            [_vm._v("\n        –\n    ")]
          )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/Products/CategoryItem.vue?vue&type=template&id=4d190fbe&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/Products/CategoryItem.vue?vue&type=template&id=4d190fbe& ***!
  \***************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "category__item" }, [
    _c("img", {
      staticClass: "category__item__icon_edit",
      attrs: {
        src: _vm.edit_icon,
        alt: "Редактировать",
        title: "Редактировать"
      },
      on: {
        click: function($event) {
          return _vm.$emit("change-item-component", _vm.category.id)
        }
      }
    }),
    _vm._v(" "),
    _c("img", {
      staticClass: "category__item__icon_delete",
      attrs: { src: _vm.delete_icon, alt: "Удалить", title: "Удалить" },
      on: {
        click: function($event) {
          return _vm.preDeleteCategory(_vm.category.id)
        }
      }
    }),
    _vm._v(" "),
    _c("span", { staticClass: "category__item__name" }, [
      _vm._v("\n        " + _vm._s(_vm.category.name) + "\n    ")
    ]),
    _vm._v(" "),
    _c("span", { staticClass: "category__item__products_count" }, [
      _vm._v("\n        " + _vm._s(_vm.category.products_count) + "\n    ")
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/Products/ItemCategoryEditForm.vue?vue&type=template&id=2770422f&":
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/Products/CategoryItemEditForm.vue?vue&type=template&id=2770422f& ***!
  \***********************************************************************************************************************************************************************************************************************************************/
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
    {
      staticClass: "category_form__div mauto relative",
      class: _vm.animationClassObject
    },
    [
      _c("h1", { staticClass: "tal" }, [
        _vm._v("Редактировать категорию "),
        _c("br"),
        _vm._v("«" + _vm._s(_vm.formHeaderCategoryName) + "»")
      ]),
      _vm._v(" "),
      _c("div", [
        _c("div", { staticClass: "input__wrapper display-flex" }, [
          _c("p", {
            staticClass: "input__validation_message",
            domProps: { innerHTML: _vm._s(_vm.typeinValidationErrors("name")) }
          }),
          _vm._v(" "),
          _c("label", [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.localCategory.name,
                  expression: "localCategory.name"
                }
              ],
              staticClass: "input__text",
              class: { input_alarm: _vm.isAlarmingInput("name") },
              attrs: {
                type: "text",
                maxlength: "50",
                placeholder: "Ведите название категории"
              },
              domProps: { value: _vm.localCategory.name },
              on: {
                keyup: function($event) {
                  return _vm.typeinValidation(_vm.localCategory)
                },
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.localCategory, "name", $event.target.value)
                }
              }
            })
          ]),
          _vm._v(" "),
          _c(
            "button",
            {
              staticClass: "button__save_category",
              on: {
                click: function($event) {
                  return _vm.saveCategory(_vm.localCategory)
                }
              }
            },
            [_vm._v("\n                Ok\n            ")]
          )
        ])
      ]),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "icon__collapse_form",
          on: {
            click: function($event) {
              return _vm.changeItemComponent(_vm.category.id)
            }
          }
        },
        [_vm._v("\n        –\n    ")]
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/SaveCategoryPage.vue?vue&type=template&id=200814d5&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/oldSaveCategoryPage.vue?vue&type=template&id=200814d5& ***!
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
  return _c(
    "div",
    [
      _c("category-form", { attrs: { "category-id": _vm.categoryId } }),
      _vm._v(" "),
      _c("categories")
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);
