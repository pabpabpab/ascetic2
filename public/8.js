(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Categories/AddCategoryButton.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Admin/Categories/AddCategoryButton.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************/
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
  name: "AddCategoryButton",
  data: function data() {
    return {
      buttonText: {
        categories: 'Добавить категорию',
        materials: 'Добавить материал',
        colors: 'Добавить цвет'
      }
    };
  },
  computed: {
    getButtonText: function getButtonText() {
      var entity = this.$route.params.entity;
      return this.buttonText[entity];
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Categories/Categories.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Admin/Categories/Categories.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _CategoryItemEditForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CategoryItemEditForm */ "./resources/js/components/Admin/Categories/CategoryItemEditForm.vue");
/* harmony import */ var _CategoryItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CategoryItem */ "./resources/js/components/Admin/Categories/CategoryItem.vue");
/* harmony import */ var _ContextMenu_CategoriesContextMenu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ContextMenu/CategoriesContextMenu */ "./resources/js/components/Admin/ContextMenu/CategoriesContextMenu.vue");
/* harmony import */ var _someMethods_categoriesItemsMethods__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./someMethods/categoriesItemsMethods */ "./resources/js/components/Admin/Categories/someMethods/categoriesItemsMethods.js");
/* harmony import */ var _Blocks_SeoManager__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../Blocks/SeoManager */ "./resources/js/components/Admin/Blocks/SeoManager.vue");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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






/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Categories",
  components: {
    CategoryItem: _CategoryItem__WEBPACK_IMPORTED_MODULE_2__["default"],
    CategoryItemEditForm: _CategoryItemEditForm__WEBPACK_IMPORTED_MODULE_1__["default"],
    CategoriesContextMenu: _ContextMenu_CategoriesContextMenu__WEBPACK_IMPORTED_MODULE_3__["default"],
    SeoManager: _Blocks_SeoManager__WEBPACK_IMPORTED_MODULE_5__["default"]
  },
  props: ['collapseItemsCommand'],
  data: function data() {
    return {
      currentComponentsNames: {// id1: 'CategoryItem',
        // id2: 'CategoryItem',
        // id3: 'CategoryItem',
      },
      simpleListItemComponentName: 'CategoryItem',
      editionComponentName: 'CategoryItemEditForm'
    };
  },
  computed: _objectSpread(_objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('categories', ['categories'])), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('seoManager', ['showSeoManager'])), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('contextMenu', ['showContextMenu'])),
  methods: _objectSpread(_objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])(['closeContextMenu'])), _someMethods_categoriesItemsMethods__WEBPACK_IMPORTED_MODULE_4__["default"]), {}, {
    _initComponentsNames: function _initComponentsNames(categories) {
      var _this = this;

      var temp = {};
      categories.forEach(function (item) {
        temp['id' + item.id] = _this.simpleListItemComponentName;
      });
      this.currentComponentsNames = _objectSpread({}, temp);
    }
  }),
  watch: {
    categories: function categories(newCategories) {
      var categories = _toConsumableArray(newCategories[this.$route.params.entity]);

      this._initComponentsNames(categories);
    },
    collapseItemsCommand: function collapseItemsCommand(newValue) {
      if (newValue === true) {
        this._collapseItems();
      }
    }
  },
  mounted: function mounted() {
    this.$store.dispatch('categories/showCategories', this.$route.params.entity);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Categories/CategoryForm.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Admin/Categories/CategoryForm.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************/
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

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "CategoryForm",
  data: function data() {
    return {
      creationHeader: {
        categories: 'Создать категорию товаров',
        materials: 'Добавить материал',
        colors: 'Добавить цвет'
      },
      labelText: {
        categories: 'Название категории',
        materials: 'Название материала',
        colors: 'Название цвета'
      },
      localCategory: {
        id: 0,
        name: ''
      },
      zeroCategory: {},
      animationClass: {
        'category_form__animation_open pd20 mt20': true,
        'category_form__animation_close': false
      }
    };
  },
  computed: _objectSpread(_objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('categories', ['singleCategoryFromServer'])), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])(['typeinErrors', 'isAlarmingInput'])), {}, {
    getCreationHeader: function getCreationHeader() {
      return this.creationHeader[this.$route.params.entity];
    },
    getLabelText: function getLabelText() {
      return this.labelText[this.$route.params.entity];
    }
  }),
  methods: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])('categories', ['saveCategory', 'typeinValidation'])), {}, {
    changeAddingComponent: function changeAddingComponent() {
      var _this = this;

      this.animationClass = {
        'category_form__animation_open': false,
        'category_form__animation_close': true
      };
      setTimeout(function () {
        _this.$emit('change-adding-component');
      }, 300);
    }
  }),
  watch: {
    singleCategoryFromServer: function singleCategoryFromServer(newServerCategory, oldServerCategory) {
      if (newServerCategory.name.length > 0) {
        this.localCategory = _objectSpread({}, this.zeroCategory);
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
<h1 class="tal" v-if="action==='edit'">Редактировать наименование <br>«{{categoryNameHeader}}»</h1>
        <h1 class="tal" v-else>{{ getCreationHeader }}</h1>
 */

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Categories/CategoryItem.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Admin/Categories/CategoryItem.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************/
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

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "CategoryItem",
  props: ['category', 'index'],
  computed: _objectSpread(_objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('categories', ['categories'])), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('dragAndDropByY', ['isDragging', 'draggingOccurs', 'topByIndex'])), {}, {
    singularEntityName: function singularEntityName() {
      var singularEntityName = {
        categories: 'category',
        materials: 'material',
        colors: 'color'
      };
      return singularEntityName[this.$route.params.entity];
    },
    lastListIndex: function lastListIndex() {
      return this.categories[this.$route.params.entity].length - 1;
    },
    draggedItemClass: function draggedItemClass() {
      return {
        'draggedCategory': this.isDragging(this.index)
      };
    },
    beneathDraggedItemClass: function beneathDraggedItemClass() {
      return {
        'beneathDraggedCategory': this.draggingOccurs
      };
    }
  }),
  methods: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])('contextMenu', ['showContextMenu'])), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])('dragAndDropByY', ['myDragStart'])),
  mounted: function mounted() {
    var _this = this;

    this.$store.dispatch('dragAndDropByY/resetYCoordinates', this.index).then(function () {
      var y = _this.$refs.cat.getBoundingClientRect().y;

      _this.$store.commit('dragAndDropByY/addYIntoYCoordinates', y);
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Categories/CategoryItemEditForm.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Admin/Categories/CategoryItemEditForm.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************/
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

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "CategoryItemEditForm",
  props: ['category'],
  data: function data() {
    return {
      localCategory: {
        id: 0,
        name: ''
      },
      categoryNameHeader: '',
      animationClass: {
        'category_form__animation_open pd20 mt20': true,
        'category_form__animation_close': false
      }
    };
  },
  methods: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])('categories', ['saveCategory', 'typeinValidation'])), {}, {
    changeItemComponent: function changeItemComponent(itemId) {
      var _this = this;

      this.animationClass = {
        'category_form__animation_open': false,
        'category_form__animation_close': true
      };
      setTimeout(function () {
        _this.$emit('change-item-component', itemId);
      }, 300);
    }
  }),
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('categories', ['singleCategoryFromServer'])), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])(['isAlarmingInput', 'typeinErrors'])),
  watch: {
    singleCategoryFromServer: function singleCategoryFromServer(newServerCategory) {
      this.localCategory = _objectSpread({}, newServerCategory);
      this.categoryNameHeader = newServerCategory.name;
    }
  },
  mounted: function mounted() {
    this.$store.dispatch('categories/cleanValidationErrors');

    if (this.category.id) {
      this.$store.dispatch('categories/loadSingleCategory', {
        entity: this.$route.params.entity,
        categoryId: this.category.id
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/CategoriesPage.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Admin/CategoriesPage.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Categories_AddCategoryButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Categories/AddCategoryButton */ "./resources/js/components/Admin/Categories/AddCategoryButton.vue");
/* harmony import */ var _Categories_CategoryForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Categories/CategoryForm */ "./resources/js/components/Admin/Categories/CategoryForm.vue");
/* harmony import */ var _Categories_Categories__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Categories/Categories */ "./resources/js/components/Admin/Categories/Categories.vue");
/* harmony import */ var _Blocks_ReloadIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Blocks/ReloadIcon */ "./resources/js/components/Admin/Blocks/ReloadIcon.vue");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
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





/* harmony default export */ __webpack_exports__["default"] = ({
  name: "CategoriesPage",
  components: {
    AddCategoryButton: _Categories_AddCategoryButton__WEBPACK_IMPORTED_MODULE_0__["default"],
    CategoryForm: _Categories_CategoryForm__WEBPACK_IMPORTED_MODULE_1__["default"],
    Categories: _Categories_Categories__WEBPACK_IMPORTED_MODULE_2__["default"],
    ReloadIcon: _Blocks_ReloadIcon__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  data: function data() {
    return {
      currentAddingComponent: 'AddCategoryButton',
      collapseItemsCommand: false,
      header: {
        categories: 'Категории товаров',
        materials: 'Материалы',
        colors: 'Цвета'
      }
    };
  },
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_4__["mapGetters"])('dragAndDropByY', ['currentIndex', 'draggingOccurs'])), {}, {
    getHeader: function getHeader() {
      var entity = this.$route.params.entity;
      return this.header[entity];
    }
  }),
  methods: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_4__["mapActions"])('dragAndDropByY', ['myDragMove', 'myDragStop'])), {}, {
    changeAddingComponent: function changeAddingComponent() {
      if (this.currentAddingComponent === 'AddCategoryButton') {
        this.currentAddingComponent = 'CategoryForm';
        this.collapseItemsCommand = true;
        this.$store.dispatch('categories/cleanValidationErrors');
      } else {
        this.currentAddingComponent = 'AddCategoryButton';
        this.collapseItemsCommand = false;
      }
    },
    closeAddingComponent: function closeAddingComponent() {
      this.currentAddingComponent = 'AddCategoryButton';
      this.collapseItemsCommand = false;
    },
    collapseAll: function collapseAll() {
      var _this = this;

      this.closeAddingComponent();
      this.collapseItemsCommand = false;
      setTimeout(function () {
        _this.collapseItemsCommand = true;
      }, 100);
    }
  }),
  watch: {
    draggingOccurs: function draggingOccurs(value) {
      if (!value) {
        return;
      }

      this.collapseAll();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/ContextMenu/CategoriesContextMenu.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Admin/ContextMenu/CategoriesContextMenu.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************/
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

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "CategoriesContextMenu",
  props: ['entity'],
  computed: _objectSpread(_objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('contextMenu', ['coordinates', 'currentListIndex', 'lastListIndex', 'category'])), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('categories', ['seoData'])), {}, {
    hasSeoData: function hasSeoData() {
      var _this = this;

      var item = this.seoData.find(function (item) {
        return item.category_id === _this.category.id;
      });

      if (!item) {
        return false;
      }

      return Boolean(item.page_title) || Boolean(item.page_description);
    }
  }),
  methods: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])('categories', ['preDeleteCategory', 'changePosition'])), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])('seoManager', ['showSeoManager']))
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Categories/AddCategoryButton.vue?vue&type=template&id=677bcb09&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Admin/Categories/AddCategoryButton.vue?vue&type=template&id=677bcb09& ***!
  \*************************************************************************************************************************************************************************************************************************************/
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
    "button",
    {
      staticClass: "category__button_add",
      on: {
        click: function($event) {
          return _vm.$emit("change-adding-component")
        }
      }
    },
    [_vm._v("\n    " + _vm._s(_vm.getButtonText) + "\n")]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Categories/Categories.vue?vue&type=template&id=93ab92d8&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Admin/Categories/Categories.vue?vue&type=template&id=93ab92d8& ***!
  \******************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "categories__list" },
    [
      _vm._l(_vm.categories[_vm.$route.params.entity], function(
        category,
        index
      ) {
        return _c(_vm.currentComponentsNames["id" + category.id], {
          key: category.id,
          tag: "component",
          attrs: { category: category, index: index },
          on: { "change-item-component": _vm.changeItemComponent }
        })
      }),
      _vm._v(" "),
      _c(
        "transition",
        { attrs: { name: "fade" } },
        [
          _vm.showContextMenu("Categories")
            ? _c("categories-context-menu", {
                attrs: { entity: _vm.$route.params.entity },
                on: { "change-item-component": _vm.changeItemComponent }
              })
            : _vm._e()
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "transition",
        { attrs: { name: "fade" } },
        [
          _vm.showSeoManager && _vm.$route.params.entity === "categories"
            ? _c("seo-manager", { attrs: { entity: "category" } })
            : _vm._e()
        ],
        1
      )
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Categories/CategoryForm.vue?vue&type=template&id=244b345a&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Admin/Categories/CategoryForm.vue?vue&type=template&id=244b345a& ***!
  \********************************************************************************************************************************************************************************************************************************/
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
      staticClass: "category_form__wrapper mauto relative",
      class: _vm.animationClass
    },
    [
      _c("h1", { staticClass: "tal" }, [_vm._v(_vm._s(_vm.getCreationHeader))]),
      _vm._v(" "),
      _c("div", [
        _c("div", { staticClass: "input_text__container display_flex" }, [
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.localCategory.name,
                expression: "localCategory.name"
              }
            ],
            staticClass: "input_text input_text__category_form",
            class: { input_alarm: _vm.isAlarmingInput("name") },
            attrs: { type: "text", maxlength: "50", placeholder: " " },
            domProps: { value: _vm.localCategory.name },
            on: {
              keyup: function($event) {
                return _vm.typeinValidation({
                  entity: _vm.$route.params.entity,
                  category: _vm.localCategory
                })
              },
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.localCategory, "name", $event.target.value)
              }
            }
          }),
          _vm._v(" "),
          _c("label", { staticClass: "input_text__label" }, [
            _vm._v(_vm._s(_vm.getLabelText))
          ]),
          _vm._v(" "),
          _c(
            "button",
            {
              staticClass: "button__save_category",
              on: {
                click: function($event) {
                  $event.stopPropagation()
                  return _vm.saveCategory({
                    entity: _vm.$route.params.entity,
                    category: _vm.localCategory
                  })
                }
              }
            },
            [_vm._v("\n                Ok\n            ")]
          )
        ]),
        _vm._v(" "),
        _c("p", {
          staticClass: "validation_message_at_input",
          domProps: { innerHTML: _vm._s(_vm.typeinErrors("name")) }
        })
      ]),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "icon__collapse_category_form",
          on: {
            click: function($event) {
              return _vm.changeAddingComponent()
            }
          }
        },
        [_vm._v("\n        ×\n    ")]
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Categories/CategoryItem.vue?vue&type=template&id=4e3ee329&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Admin/Categories/CategoryItem.vue?vue&type=template&id=4e3ee329& ***!
  \********************************************************************************************************************************************************************************************************************************/
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
      ref: "cat",
      staticClass: "category_item",
      class: [_vm.draggedItemClass, _vm.beneathDraggedItemClass],
      style: {
        top: _vm.topByIndex(_vm.index)
      },
      on: {
        mousedown: function($event) {
          return _vm.myDragStart({ index: _vm.index, event: $event })
        }
      }
    },
    [
      _c(
        "div",
        { staticClass: "category_item__content" },
        [
          _c(
            "span",
            {
              staticClass: "context_menu__icon__category",
              on: {
                click: function($event) {
                  $event.stopPropagation()
                  return _vm.showContextMenu({
                    event: $event,
                    target: "Categories",
                    data: {
                      category: _vm.category,
                      currentListIndex: _vm.index,
                      lastListIndex: _vm.lastListIndex
                    }
                  })
                }
              }
            },
            [_vm._v("\n            ⋮\n        ")]
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "category_item__name" },
            [
              _c(
                "router-link",
                {
                  staticClass: "category_item__name__link",
                  attrs: {
                    to: {
                      name: "ProductsByCategory",
                      params: {
                        categoryEntity: _vm.singularEntityName,
                        slug: _vm.category.slug,
                        categoryId: _vm.category.id,
                        categoryName: _vm.category.name
                      }
                    }
                  }
                },
                [
                  _vm._v(
                    "\n                " +
                      _vm._s(_vm.category.name) +
                      "\n            "
                  )
                ]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "router-link",
            {
              staticClass: "category_item__products_count__link",
              attrs: {
                to: {
                  name: "ProductsByCategory",
                  params: {
                    categoryEntity: _vm.singularEntityName,
                    slug: _vm.category.slug,
                    categoryId: _vm.category.id,
                    categoryName: _vm.category.name
                  }
                }
              }
            },
            [
              _vm._v(
                "\n            " +
                  _vm._s(_vm.category.products_count) +
                  "\n        "
              )
            ]
          )
        ],
        1
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Categories/CategoryItemEditForm.vue?vue&type=template&id=33194937&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Admin/Categories/CategoryItemEditForm.vue?vue&type=template&id=33194937& ***!
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
  return _c("div", { staticClass: "category_edit_form_item__border_top" }, [
    _c(
      "div",
      {
        staticClass: "category_form__wrapper m20px_auto relative",
        class: _vm.animationClass
      },
      [
        _c("h1", { staticClass: "tal" }, [
          _vm._v("Редактировать «" + _vm._s(_vm.categoryNameHeader) + "»")
        ]),
        _vm._v(" "),
        _c("div", [
          _c("div", { staticClass: "display_flex" }, [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.localCategory.name,
                  expression: "localCategory.name"
                }
              ],
              staticClass: "input_text input_text__category_form",
              class: { input_alarm: _vm.isAlarmingInput("name") },
              attrs: {
                type: "text",
                maxlength: "50",
                placeholder: "Введите название"
              },
              domProps: { value: _vm.localCategory.name },
              on: {
                keyup: function($event) {
                  return _vm.typeinValidation({
                    entity: _vm.$route.params.entity,
                    category: _vm.localCategory
                  })
                },
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.localCategory, "name", $event.target.value)
                }
              }
            }),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass: "button__save_category",
                on: {
                  click: function($event) {
                    $event.stopPropagation()
                    return _vm.saveCategory({
                      entity: _vm.$route.params.entity,
                      category: _vm.localCategory
                    })
                  }
                }
              },
              [_vm._v("\n                    Ok\n                ")]
            )
          ]),
          _vm._v(" "),
          _c("p", {
            staticClass: "validation_message_at_input",
            domProps: { innerHTML: _vm._s(_vm.typeinErrors("name")) }
          })
        ]),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "icon__collapse_category_form",
            on: {
              click: function($event) {
                return _vm.changeItemComponent(_vm.category.id)
              }
            }
          },
          [_vm._v("\n            ×\n        ")]
        )
      ]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/CategoriesPage.vue?vue&type=template&id=5516b516&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Admin/CategoriesPage.vue?vue&type=template&id=5516b516& ***!
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
  return _c(
    "div",
    {
      staticClass: "show_block",
      on: {
        mousemove: function($event) {
          return _vm.myDragMove($event)
        },
        mouseup: function($event) {
          return _vm.myDragStop({
            event: $event,
            entity: _vm.$route.params.entity
          })
        }
      }
    },
    [
      _c(
        "div",
        { staticClass: "categories_header" },
        [
          _c("reload-icon"),
          _vm._v(" "),
          _c("h1", { staticClass: "pd0 mb0 mauto" }, [
            _vm._v(_vm._s(_vm.getHeader))
          ])
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "content_block content_block__categories" },
        [
          _c(_vm.currentAddingComponent, {
            tag: "component",
            on: {
              "change-adding-component": function($event) {
                return _vm.changeAddingComponent()
              }
            }
          }),
          _vm._v(" "),
          _c("categories", {
            attrs: { collapseItemsCommand: _vm.collapseItemsCommand },
            on: {
              "close-adding-component": function($event) {
                return _vm.closeAddingComponent()
              }
            }
          })
        ],
        1
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/ContextMenu/CategoriesContextMenu.vue?vue&type=template&id=38ee6a36&":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Admin/ContextMenu/CategoriesContextMenu.vue?vue&type=template&id=38ee6a36& ***!
  \******************************************************************************************************************************************************************************************************************************************/
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
          _vm._v("\n            «" + _vm._s(_vm.category.name) + "»\n        ")
        ]),
        _vm._v(" "),
        _vm.lastListIndex !== 0
          ? _c("li", { staticClass: "context_menu__li__multiple" }, [
              _vm._v("\n            Сдвинуть\n            "),
              _vm.currentListIndex > 0
                ? _c(
                    "span",
                    {
                      staticClass: "context_menu__li__multiple__item",
                      attrs: { title: "вверх" },
                      on: {
                        click: function($event) {
                          return _vm.changePosition({
                            entity: _vm.$route.params.entity,
                            categoryId: _vm.category.id,
                            direction: "up"
                          })
                        }
                      }
                    },
                    [_vm._v("\n                 ↑\n            ")]
                  )
                : _vm._e(),
              _vm._v(" "),
              _vm.currentListIndex < _vm.lastListIndex
                ? _c(
                    "span",
                    {
                      staticClass: "context_menu__li__multiple__item",
                      attrs: { title: "вниз" },
                      on: {
                        click: function($event) {
                          return _vm.changePosition({
                            entity: _vm.$route.params.entity,
                            categoryId: _vm.category.id,
                            direction: "down"
                          })
                        }
                      }
                    },
                    [_vm._v("\n                ↓\n            ")]
                  )
                : _vm._e()
            ])
          : _vm._e(),
        _vm._v(" "),
        _c(
          "li",
          {
            staticClass: "context_menu__li",
            on: {
              click: function($event) {
                return _vm.$emit("change-item-component", _vm.category.id)
              }
            }
          },
          [_vm._v("\n            Редактировать\n        ")]
        ),
        _vm._v(" "),
        _vm.entity === "categories"
          ? _c(
              "li",
              {
                staticClass: "context_menu__li",
                on: {
                  click: function($event) {
                    return _vm.showSeoManager({
                      entity: "category",
                      data: { id: _vm.category.id }
                    })
                  }
                }
              },
              [
                _vm.hasSeoData
                  ? _c(
                      "span",
                      {
                        staticClass: "has_data_blue",
                        attrs: { title: "уже есть данные" }
                      },
                      [_vm._v("✔")]
                    )
                  : _vm._e(),
                _vm._v("\n            SEO\n        ")
              ]
            )
          : _vm._e(),
        _vm._v(" "),
        _c(
          "li",
          {
            staticClass: "context_menu__li",
            staticStyle: { border: "0" },
            on: {
              click: function($event) {
                return _vm.preDeleteCategory({
                  entity: _vm.$route.params.entity,
                  categoryId: _vm.category.id
                })
              }
            }
          },
          [_vm._v("\n            Удалить\n        ")]
        )
      ])
    ]
  )
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



/***/ }),

/***/ "./resources/js/components/Admin/Categories/AddCategoryButton.vue":
/*!************************************************************************!*\
  !*** ./resources/js/components/Admin/Categories/AddCategoryButton.vue ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AddCategoryButton_vue_vue_type_template_id_677bcb09___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AddCategoryButton.vue?vue&type=template&id=677bcb09& */ "./resources/js/components/Admin/Categories/AddCategoryButton.vue?vue&type=template&id=677bcb09&");
/* harmony import */ var _AddCategoryButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AddCategoryButton.vue?vue&type=script&lang=js& */ "./resources/js/components/Admin/Categories/AddCategoryButton.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AddCategoryButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AddCategoryButton_vue_vue_type_template_id_677bcb09___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AddCategoryButton_vue_vue_type_template_id_677bcb09___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Admin/Categories/AddCategoryButton.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Admin/Categories/AddCategoryButton.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/Admin/Categories/AddCategoryButton.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddCategoryButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./AddCategoryButton.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Categories/AddCategoryButton.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddCategoryButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Admin/Categories/AddCategoryButton.vue?vue&type=template&id=677bcb09&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/components/Admin/Categories/AddCategoryButton.vue?vue&type=template&id=677bcb09& ***!
  \*******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddCategoryButton_vue_vue_type_template_id_677bcb09___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./AddCategoryButton.vue?vue&type=template&id=677bcb09& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Categories/AddCategoryButton.vue?vue&type=template&id=677bcb09&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddCategoryButton_vue_vue_type_template_id_677bcb09___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddCategoryButton_vue_vue_type_template_id_677bcb09___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Admin/Categories/Categories.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/components/Admin/Categories/Categories.vue ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Categories_vue_vue_type_template_id_93ab92d8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Categories.vue?vue&type=template&id=93ab92d8& */ "./resources/js/components/Admin/Categories/Categories.vue?vue&type=template&id=93ab92d8&");
/* harmony import */ var _Categories_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Categories.vue?vue&type=script&lang=js& */ "./resources/js/components/Admin/Categories/Categories.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Categories_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Categories_vue_vue_type_template_id_93ab92d8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Categories_vue_vue_type_template_id_93ab92d8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Admin/Categories/Categories.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Admin/Categories/Categories.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/Admin/Categories/Categories.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Categories_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Categories.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Categories/Categories.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Categories_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Admin/Categories/Categories.vue?vue&type=template&id=93ab92d8&":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/Admin/Categories/Categories.vue?vue&type=template&id=93ab92d8& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Categories_vue_vue_type_template_id_93ab92d8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Categories.vue?vue&type=template&id=93ab92d8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Categories/Categories.vue?vue&type=template&id=93ab92d8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Categories_vue_vue_type_template_id_93ab92d8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Categories_vue_vue_type_template_id_93ab92d8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Admin/Categories/CategoryForm.vue":
/*!*******************************************************************!*\
  !*** ./resources/js/components/Admin/Categories/CategoryForm.vue ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CategoryForm_vue_vue_type_template_id_244b345a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CategoryForm.vue?vue&type=template&id=244b345a& */ "./resources/js/components/Admin/Categories/CategoryForm.vue?vue&type=template&id=244b345a&");
/* harmony import */ var _CategoryForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CategoryForm.vue?vue&type=script&lang=js& */ "./resources/js/components/Admin/Categories/CategoryForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CategoryForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CategoryForm_vue_vue_type_template_id_244b345a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CategoryForm_vue_vue_type_template_id_244b345a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Admin/Categories/CategoryForm.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Admin/Categories/CategoryForm.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/Admin/Categories/CategoryForm.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CategoryForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./CategoryForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Categories/CategoryForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CategoryForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Admin/Categories/CategoryForm.vue?vue&type=template&id=244b345a&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/Admin/Categories/CategoryForm.vue?vue&type=template&id=244b345a& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CategoryForm_vue_vue_type_template_id_244b345a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./CategoryForm.vue?vue&type=template&id=244b345a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Categories/CategoryForm.vue?vue&type=template&id=244b345a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CategoryForm_vue_vue_type_template_id_244b345a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CategoryForm_vue_vue_type_template_id_244b345a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Admin/Categories/CategoryItem.vue":
/*!*******************************************************************!*\
  !*** ./resources/js/components/Admin/Categories/CategoryItem.vue ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CategoryItem_vue_vue_type_template_id_4e3ee329___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CategoryItem.vue?vue&type=template&id=4e3ee329& */ "./resources/js/components/Admin/Categories/CategoryItem.vue?vue&type=template&id=4e3ee329&");
/* harmony import */ var _CategoryItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CategoryItem.vue?vue&type=script&lang=js& */ "./resources/js/components/Admin/Categories/CategoryItem.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CategoryItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CategoryItem_vue_vue_type_template_id_4e3ee329___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CategoryItem_vue_vue_type_template_id_4e3ee329___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Admin/Categories/CategoryItem.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Admin/Categories/CategoryItem.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/Admin/Categories/CategoryItem.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CategoryItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./CategoryItem.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Categories/CategoryItem.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CategoryItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Admin/Categories/CategoryItem.vue?vue&type=template&id=4e3ee329&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/Admin/Categories/CategoryItem.vue?vue&type=template&id=4e3ee329& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CategoryItem_vue_vue_type_template_id_4e3ee329___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./CategoryItem.vue?vue&type=template&id=4e3ee329& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Categories/CategoryItem.vue?vue&type=template&id=4e3ee329&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CategoryItem_vue_vue_type_template_id_4e3ee329___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CategoryItem_vue_vue_type_template_id_4e3ee329___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Admin/Categories/CategoryItemEditForm.vue":
/*!***************************************************************************!*\
  !*** ./resources/js/components/Admin/Categories/CategoryItemEditForm.vue ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CategoryItemEditForm_vue_vue_type_template_id_33194937___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CategoryItemEditForm.vue?vue&type=template&id=33194937& */ "./resources/js/components/Admin/Categories/CategoryItemEditForm.vue?vue&type=template&id=33194937&");
/* harmony import */ var _CategoryItemEditForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CategoryItemEditForm.vue?vue&type=script&lang=js& */ "./resources/js/components/Admin/Categories/CategoryItemEditForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CategoryItemEditForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CategoryItemEditForm_vue_vue_type_template_id_33194937___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CategoryItemEditForm_vue_vue_type_template_id_33194937___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Admin/Categories/CategoryItemEditForm.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Admin/Categories/CategoryItemEditForm.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/Admin/Categories/CategoryItemEditForm.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CategoryItemEditForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./CategoryItemEditForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Categories/CategoryItemEditForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CategoryItemEditForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Admin/Categories/CategoryItemEditForm.vue?vue&type=template&id=33194937&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/components/Admin/Categories/CategoryItemEditForm.vue?vue&type=template&id=33194937& ***!
  \**********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CategoryItemEditForm_vue_vue_type_template_id_33194937___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./CategoryItemEditForm.vue?vue&type=template&id=33194937& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Categories/CategoryItemEditForm.vue?vue&type=template&id=33194937&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CategoryItemEditForm_vue_vue_type_template_id_33194937___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CategoryItemEditForm_vue_vue_type_template_id_33194937___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Admin/Categories/someMethods/categoriesItemsMethods.js":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/Admin/Categories/someMethods/categoriesItemsMethods.js ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* harmony default export */ __webpack_exports__["default"] = ({
  changeItemComponent: function changeItemComponent(itemId) {
    var _this = this;

    this.closeContextMenu();
    this.$emit('close-adding-component');

    this._getNewComponentName(itemId).then(function (newName) {
      _this._collapseItems();

      var temp = _objectSpread({}, _this.currentComponentsNames);

      temp['id' + itemId] = newName;
      _this.currentComponentsNames = _objectSpread({}, temp);
    });
  },
  _getNewComponentName: function _getNewComponentName(itemId) {
    var _this2 = this;

    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!(_this2.currentComponentsNames['id' + itemId] === _this2.simpleListItemComponentName)) {
                _context.next = 2;
                break;
              }

              return _context.abrupt("return", _this2.editionComponentName);

            case 2:
              return _context.abrupt("return", _this2.simpleListItemComponentName);

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  _collapseItems: function _collapseItems() {
    var temp = _objectSpread({}, this.currentComponentsNames);

    for (var key in temp) {
      temp[key] = this.simpleListItemComponentName;
    }

    this.currentComponentsNames = _objectSpread({}, temp);
  }
});

/***/ }),

/***/ "./resources/js/components/Admin/CategoriesPage.vue":
/*!**********************************************************!*\
  !*** ./resources/js/components/Admin/CategoriesPage.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CategoriesPage_vue_vue_type_template_id_5516b516___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CategoriesPage.vue?vue&type=template&id=5516b516& */ "./resources/js/components/Admin/CategoriesPage.vue?vue&type=template&id=5516b516&");
/* harmony import */ var _CategoriesPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CategoriesPage.vue?vue&type=script&lang=js& */ "./resources/js/components/Admin/CategoriesPage.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CategoriesPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CategoriesPage_vue_vue_type_template_id_5516b516___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CategoriesPage_vue_vue_type_template_id_5516b516___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Admin/CategoriesPage.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Admin/CategoriesPage.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/Admin/CategoriesPage.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CategoriesPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./CategoriesPage.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/CategoriesPage.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CategoriesPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Admin/CategoriesPage.vue?vue&type=template&id=5516b516&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/Admin/CategoriesPage.vue?vue&type=template&id=5516b516& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CategoriesPage_vue_vue_type_template_id_5516b516___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./CategoriesPage.vue?vue&type=template&id=5516b516& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/CategoriesPage.vue?vue&type=template&id=5516b516&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CategoriesPage_vue_vue_type_template_id_5516b516___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CategoriesPage_vue_vue_type_template_id_5516b516___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Admin/ContextMenu/CategoriesContextMenu.vue":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/Admin/ContextMenu/CategoriesContextMenu.vue ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CategoriesContextMenu_vue_vue_type_template_id_38ee6a36___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CategoriesContextMenu.vue?vue&type=template&id=38ee6a36& */ "./resources/js/components/Admin/ContextMenu/CategoriesContextMenu.vue?vue&type=template&id=38ee6a36&");
/* harmony import */ var _CategoriesContextMenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CategoriesContextMenu.vue?vue&type=script&lang=js& */ "./resources/js/components/Admin/ContextMenu/CategoriesContextMenu.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CategoriesContextMenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CategoriesContextMenu_vue_vue_type_template_id_38ee6a36___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CategoriesContextMenu_vue_vue_type_template_id_38ee6a36___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Admin/ContextMenu/CategoriesContextMenu.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Admin/ContextMenu/CategoriesContextMenu.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/components/Admin/ContextMenu/CategoriesContextMenu.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CategoriesContextMenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./CategoriesContextMenu.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/ContextMenu/CategoriesContextMenu.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CategoriesContextMenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Admin/ContextMenu/CategoriesContextMenu.vue?vue&type=template&id=38ee6a36&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/components/Admin/ContextMenu/CategoriesContextMenu.vue?vue&type=template&id=38ee6a36& ***!
  \************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CategoriesContextMenu_vue_vue_type_template_id_38ee6a36___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./CategoriesContextMenu.vue?vue&type=template&id=38ee6a36& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/ContextMenu/CategoriesContextMenu.vue?vue&type=template&id=38ee6a36&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CategoriesContextMenu_vue_vue_type_template_id_38ee6a36___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CategoriesContextMenu_vue_vue_type_template_id_38ee6a36___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Admin/Products/functions/fitTextareaHeight.js":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/Admin/Products/functions/fitTextareaHeight.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return fitTextareaHeight; });
var prevLength = 0;
function fitTextareaHeight(event) {
  if (_hasIncreaseInTextareaLength(event)) {
    prevLength = event.target.value.length;

    if (event.target.clientHeight > 500) {
      return;
    }

    _increaseTextareaHeight(event);

    return;
  }

  if (!_hasDecreaseInTextareaLength(event)) {
    return;
  }

  _resetTextareaHeight(event);

  setTimeout(function () {
    fitTextareaHeight(event);
  }, 10);
}

function _hasIncreaseInTextareaLength(event) {
  return event.target.scrollHeight > event.target.clientHeight;
}

function _increaseTextareaHeight(event) {
  event.target.style.height = event.target.scrollHeight + 20 + 'px';
}

function _hasDecreaseInTextareaLength(event) {
  if (event.target.value.length / prevLength < 0.85) {
    prevLength = event.target.value.length;
    return true;
  }

  return false;
}

function _resetTextareaHeight(event) {
  event.target.style = null;
}

/***/ })

}]);