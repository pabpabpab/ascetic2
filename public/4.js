(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Products/FiltersCheckboxesList.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Admin/Products/FiltersCheckboxesList.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************/
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

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "FiltersCheckboxesList",
  // пропс value, потому что в родителе v-model
  props: ['value', 'search', 'header', 'entity', 'closeListCmd'],
  data: function data() {
    return {
      checkboxesVisibility: false
    };
  },
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('categories', ['categories'])), {}, {
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


      this.$emit('input', this.search[this.entity + '_ids']);
      return this.search[this.entity + '_ids'].map(function (id) {
        return {
          id: id,
          name: _this.localCategories.find(function (item) {
            return item.id === id;
          }).name
        };
      }); // selected cats array
    }
  }),
  methods: {
    changeCheckboxesVisibility: function changeCheckboxesVisibility() {
      var _this2 = this;

      var val = this.checkboxesVisibility;
      this.$emit('closeAllCheckboxesLists');
      setTimeout(function () {
        _this2.checkboxesVisibility = !val;
      }, 100);
    },
    deleteSelectedItem: function deleteSelectedItem(val) {
      var search = this.search;
      var index = search[this.entity + '_ids'].findIndex(function (item) {
        return item === val;
      });
      search[this.entity + '_ids'].splice(index, 1); // с позиции index удалить 1 элемент
      //this.search = { ...search };
    },
    closeThisCheckboxes: function closeThisCheckboxes() {
      this.checkboxesVisibility = false;
    }
  },
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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Products/FiltersIcon.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Admin/Products/FiltersIcon.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************/
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
 //import filter_icon5 from "./../../../../assets/filter_icon5.png"
//<img @click.stop="showOrCloseProductsFilters()" :src="filter_icon5" alt="">

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "ProductListHeader",

  /*
  data() {
      return {
          filter_icon5: filter_icon5,
      };
  },*/
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('products', ['visibility'])),
  methods: {
    showOrCloseProductsFilters: function showOrCloseProductsFilters() {
      if (this.visibility('productsFilters')) {
        this.$store.dispatch('products/closeProductsFilters');
      } else {
        this.$store.dispatch('products/showProductsFilters');
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Products/ProductItem.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Admin/Products/ProductItem.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _someComputed_computedForProductItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./someComputed/computedForProductItem */ "./resources/js/components/Admin/Products/someComputed/computedForProductItem.js");
/* harmony import */ var _functions_changeMainPhotoOfItemInList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./functions/changeMainPhotoOfItemInList */ "./resources/js/components/Admin/Products/functions/changeMainPhotoOfItemInList.js");
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



/* harmony default export */ __webpack_exports__["default"] = ({
  name: "ProductItem",
  props: ['product', 'index'],
  data: function data() {
    return {
      indexOfMainPhoto: 0
    };
  },
  computed: _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])(['imgFolderPrefix'])), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('dragAndDropByXY', ['entity', 'isDragging', 'leftByIndex', 'topByIndex'])), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('products', ['sortingMode'])), _someComputed_computedForProductItem__WEBPACK_IMPORTED_MODULE_1__["default"]), {}, {
    draggedEntity: function draggedEntity() {
      return this.entity;
    },
    draggableProductItemClass: function draggableProductItemClass() {
      return {
        'draggableProduct': this.isDragging(this.index) && this.draggedEntity === 'Product'
      };
    },
    defaultSorting: function defaultSorting() {
      return this.sortingMode === 'position';
    },
    cursorType: function cursorType() {
      return this.defaultSorting ? 'move' : 'default';
    }
  }),
  methods: _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])('contextMenu', ['showContextMenu'])), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])('dragAndDropByXY', ['myDragStart', 'myDragStop'])), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])('products', ['showProductQuickViewManager'])), _functions_changeMainPhotoOfItemInList__WEBPACK_IMPORTED_MODULE_2__["default"]),
  mounted: function mounted() {
    var _this = this;

    this.$store.dispatch('dragAndDropByXY/resetCoordinates', {
      cycleNumber: this.index,
      entity: 'Product'
    }).then(function () {
      var xy = _this.$refs.product.getBoundingClientRect();

      _this.$store.commit('dragAndDropByXY/addXIntoXCoordinates', {
        x: xy.x,
        entity: 'Product'
      });

      _this.$store.commit('dragAndDropByXY/addYIntoYCoordinates', {
        y: xy.y,
        entity: 'Product'
      });
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Products/ProductQuickViewManager.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Admin/Products/ProductQuickViewManager.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SingleProduct__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SingleProduct */ "./resources/js/components/Admin/Products/SingleProduct.vue");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
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


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "ProductQuickViewManager",
  components: {
    SingleProduct: _SingleProduct__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapActions"])('products', ['closeProductQuickViewManager']))
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Products/Products.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Admin/Products/Products.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _ProductItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProductItem */ "./resources/js/components/Admin/Products/ProductItem.vue");
/* harmony import */ var _ProductsFilters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProductsFilters */ "./resources/js/components/Admin/Products/ProductsFilters.vue");
/* harmony import */ var _SearchTotalParameters__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SearchTotalParameters */ "./resources/js/components/Admin/Products/SearchTotalParameters.vue");
/* harmony import */ var _Blocks_Pagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../Blocks/Pagination */ "./resources/js/components/Admin/Blocks/Pagination.vue");
/* harmony import */ var _ContextMenu_ProductsContextMenu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ContextMenu/ProductsContextMenu */ "./resources/js/components/Admin/ContextMenu/ProductsContextMenu.vue");
/* harmony import */ var _ProductPhotoManager__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ProductPhotoManager */ "./resources/js/components/Admin/Products/ProductPhotoManager.vue");
/* harmony import */ var _Blocks_SeoManager__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../Blocks/SeoManager */ "./resources/js/components/Admin/Blocks/SeoManager.vue");
/* harmony import */ var _ProductEditManager__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ProductEditManager */ "./resources/js/components/Admin/Products/ProductEditManager.vue");
/* harmony import */ var _SortingModes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./SortingModes */ "./resources/js/components/Admin/Products/SortingModes.vue");
/* harmony import */ var _ProductQuickViewManager__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ProductQuickViewManager */ "./resources/js/components/Admin/Products/ProductQuickViewManager.vue");
/* harmony import */ var _FiltersIcon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./FiltersIcon */ "./resources/js/components/Admin/Products/FiltersIcon.vue");
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












/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Products",
  props: ['whichProducts'],
  components: {
    ProductItem: _ProductItem__WEBPACK_IMPORTED_MODULE_1__["default"],
    SortingModes: _SortingModes__WEBPACK_IMPORTED_MODULE_9__["default"],
    ProductsFilters: _ProductsFilters__WEBPACK_IMPORTED_MODULE_2__["default"],
    SearchTotalParameters: _SearchTotalParameters__WEBPACK_IMPORTED_MODULE_3__["default"],
    Pagination: _Blocks_Pagination__WEBPACK_IMPORTED_MODULE_4__["default"],
    ProductsContextMenu: _ContextMenu_ProductsContextMenu__WEBPACK_IMPORTED_MODULE_5__["default"],
    ProductPhotoManager: _ProductPhotoManager__WEBPACK_IMPORTED_MODULE_6__["default"],
    SeoManager: _Blocks_SeoManager__WEBPACK_IMPORTED_MODULE_7__["default"],
    ProductEditManager: _ProductEditManager__WEBPACK_IMPORTED_MODULE_8__["default"],
    ProductQuickViewManager: _ProductQuickViewManager__WEBPACK_IMPORTED_MODULE_10__["default"],
    FiltersIcon: _FiltersIcon__WEBPACK_IMPORTED_MODULE_11__["default"]
  },
  computed: _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('products', ['productsLength', 'visibility'])), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('seoManager', ['showSeoManager'])), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('contextMenu', ['showProductsContextMenu'])), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('pagination', ['currentPageIndex', 'customized'])), {}, {
    items: function items() {
      return this.customized('products')[this.currentPageIndex('products')];
    }
  }),
  mounted: function mounted() {
    this.$store.dispatch('products/setProductsFiltersVisibility', false);
    this.$store.dispatch('products/showProducts', this.$route);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Products/ProductsFilters.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Admin/Products/ProductsFilters.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _FiltersCheckboxesList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FiltersCheckboxesList */ "./resources/js/components/Admin/Products/FiltersCheckboxesList.vue");
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


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "ProductsFilters",
  components: {
    FiltersCheckboxesList: _FiltersCheckboxesList__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      search: {
        minPrice: 1000000,
        maxPrice: 0,
        category_ids: [],
        material_ids: [],
        color_ids: []
      },
      searchHasNotBeenChanged: true,
      closeCheckboxesListsCmd: false
    };
  },
  computed: _objectSpread(_objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('products', ['productsMaxPrice', 'productsMinPrice', 'searchTotalParameters', 'visibility'])), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('categories', ['categories'])), {}, {
    localMinPrice: function localMinPrice() {
      return this.search.minPrice;
    },
    localMaxPrice: function localMaxPrice() {
      return this.search.maxPrice;
    },
    localSearchObject: function localSearchObject() {
      return _objectSpread({}, this.search);
    },
    emptySearch: function emptySearch() {
      if (this.search.minPrice > this.productsMinPrice) {
        return false;
      }

      if (this.search.maxPrice < this.productsMaxPrice) {
        return false;
      }

      if (this.search.category_ids.length > 0) {
        return false;
      }

      if (this.search.material_ids.length > 0) {
        return false;
      }

      if (this.search.color_ids.length > 0) {
        return false;
      }

      return true;
    }
  }),
  methods: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])('products', ['closeProductsFilters'])), {}, {
    closeAllCheckboxesLists: function closeAllCheckboxesLists() {
      var _this = this;

      this.closeCheckboxesListsCmd = true;
      setTimeout(function () {
        _this.closeCheckboxesListsCmd = false;
      }, 100);
    }
  }),
  watch: {
    localSearchObject: function localSearchObject() {
      if (!this.visibility('productsFilters')) {
        return;
      }

      if (this.emptySearch && this.searchHasNotBeenChanged) {
        return;
      }

      this.searchHasNotBeenChanged = false;
      this.$store.dispatch('products/setSearchObject', this.search);
      this.$store.dispatch('products/makeSearch', this.search);
    },
    searchTotalParameters: function searchTotalParameters(val) {
      this.search = _objectSpread({}, val);
    },
    productsMinPrice: function productsMinPrice(val) {
      this.search.minPrice = Number(val);
    },
    productsMaxPrice: function productsMaxPrice(val) {
      this.search.maxPrice = Number(val);
    },
    localMinPrice: function localMinPrice(val) {
      // заплатка
      if (this.$route.params.which !== 'active') {
        return;
      }

      var minPrice = Number(this.search.minPrice);
      var maxPrice = Number(this.search.maxPrice);

      if (minPrice >= maxPrice) {
        this.search.minPrice = maxPrice - 500;
      }

      var productsMinPrice = Number(this.productsMinPrice);

      if (minPrice < productsMinPrice) {
        this.search.minPrice = productsMinPrice;
      }
    },
    localMaxPrice: function localMaxPrice(val) {
      // заплатка
      if (this.$route.params.which !== 'active') {
        return;
      }

      var minPrice = Number(this.search.minPrice);
      var maxPrice = Number(this.search.maxPrice);

      if (maxPrice <= minPrice) {
        this.search.maxPrice = minPrice + 500;
      }

      var productsMaxPrice = Number(this.productsMaxPrice);

      if (maxPrice > productsMaxPrice) {
        this.search.maxPrice = productsMaxPrice;
      }
    }
  },
  mounted: function mounted() {
    var _this2 = this;

    setTimeout(function () {
      if (_this2.categories['categories'].length === 0) {
        _this2.$store.dispatch('categories/loadCategories', 'categories');
      }

      if (_this2.categories['materials'].length === 0) {
        _this2.$store.dispatch('categories/loadCategories', 'materials');
      }

      if (_this2.categories['colors'].length === 0) {
        _this2.$store.dispatch('categories/loadCategories', 'colors');
      }
    }, 100);
    setTimeout(function () {
      _this2.search.minPrice = Number(_this2.productsMinPrice);
      _this2.search.maxPrice = Number(_this2.productsMaxPrice);
    }, 500);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Products/SearchTotalParameters.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Admin/Products/SearchTotalParameters.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************/
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

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "ProductsFiltersTotalParameters",
  data: function data() {
    return {
      search: {}
    };
  },
  computed: _objectSpread(_objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('products', ['stateSearchObject', 'productsMaxPrice', 'productsMinPrice', 'visibility'])), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('categories', ['categories'])), {}, {
    searchMinPrice: function searchMinPrice() {
      return this.stateSearchObject.minPrice > this.productsMinPrice;
    },
    searchMaxPrice: function searchMaxPrice() {
      return this.stateSearchObject.maxPrice > 0 && this.stateSearchObject.maxPrice < this.productsMaxPrice;
    },
    searchCategories: function searchCategories() {
      return this.stateSearchObject.category_ids.length > 0;
    },
    searchMaterials: function searchMaterials() {
      return this.stateSearchObject.material_ids.length > 0;
    },
    searchColors: function searchColors() {
      return this.stateSearchObject.color_ids.length > 0;
    },
    notEmptyStateSearch: function notEmptyStateSearch() {
      if (this.searchMinPrice) {
        return true;
      }

      if (this.searchMaxPrice) {
        return true;
      }

      if (this.searchCategories) {
        return true;
      }

      if (this.searchMaterials) {
        return true;
      }

      if (this.searchColors) {
        return true;
      }

      return false;
    },
    selectedCategories: function selectedCategories() {
      var _this = this;

      return this.stateSearchObject.category_ids.map(function (id) {
        return {
          id: id,
          name: _this.categories['categories'].find(function (item) {
            return item.id === id;
          }).name
        };
      });
    },
    selectedMaterials: function selectedMaterials() {
      var _this2 = this;

      return this.stateSearchObject.material_ids.map(function (id) {
        return {
          id: id,
          name: _this2.categories['materials'].find(function (item) {
            return item.id === id;
          }).name
        };
      });
    },
    selectedColors: function selectedColors() {
      var _this3 = this;

      return this.stateSearchObject.color_ids.map(function (id) {
        return {
          id: id,
          name: _this3.categories['colors'].find(function (item) {
            return item.id === id;
          }).name
        };
      });
    }
  }),
  methods: {
    clearMinPrice: function clearMinPrice() {
      var search = this.search;
      search.minPrice = 0;
      this.search = _objectSpread({}, search);
      this.redoSearch();
    },
    clearMaxPrice: function clearMaxPrice() {
      var search = this.search;
      search.maxPrice = this.productsMaxPrice;
      this.search = _objectSpread({}, search);
      this.redoSearch();
    },
    deleteSelectedItem: function deleteSelectedItem(entity, id) {
      var search = this.search;
      var index = search[entity + '_ids'].findIndex(function (item) {
        return item === id;
      });
      search[entity + '_ids'].splice(index, 1);
      this.search = _objectSpread({}, search);
      this.redoSearch();
    },
    redoSearch: function redoSearch() {
      this.$store.dispatch('products/setSearchObject', this.search);
      this.$store.dispatch('products/setSearchTotalParameters', this.search);
      this.$store.dispatch('products/makeSearch', this.search);
    }
  },
  watch: {
    stateSearchObject: function stateSearchObject(val) {
      this.search = _objectSpread({}, val);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Products/SortingModes.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Admin/Products/SortingModes.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************/
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

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "SortingModes",
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('products', ['sortingMode'])), {}, {
    defaultSortingLinkClass: function defaultSortingLinkClass() {
      return {
        'products_sorting_modes__link_inactive': this.sortingMode !== 'position',
        'products_sorting_modes__link_active': this.sortingMode === 'position'
      };
    },
    priceSortingLinkClass: function priceSortingLinkClass() {
      return {
        'products_sorting_modes__link_inactive': this.sortingMode !== 'priceUp',
        'products_sorting_modes__link_active': this.sortingMode === 'priceUp'
      };
    }
  }),
  methods: {
    doSort: function doSort(mode) {
      this.$store.dispatch('products/setSortingMode', mode);
      this.$store.dispatch('products/doSort', {
        mode: mode,
        data: [],
        initiator: ''
      }); // data для совместимости
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/ProductsPage.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Admin/ProductsPage.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Products_Products__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Products/Products */ "./resources/js/components/Admin/Products/Products.vue");
/* harmony import */ var _Products_ProductListHeader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Products/ProductListHeader */ "./resources/js/components/Admin/Products/ProductListHeader.vue");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
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



/* harmony default export */ __webpack_exports__["default"] = ({
  name: "ProductsPage",
  components: {
    ProductListHeader: _Products_ProductListHeader__WEBPACK_IMPORTED_MODULE_1__["default"],
    Products: _Products_Products__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_2__["mapGetters"])('products', ['sortingMode'])), {}, {
    defaultSorting: function defaultSorting() {
      return this.sortingMode === 'position';
    }
  }),
  methods: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_2__["mapActions"])('dragAndDropByXY', ['myDragMove', 'myDragStop'])), Object(vuex__WEBPACK_IMPORTED_MODULE_2__["mapActions"])('products', ['closeProductsFilters']))
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Products/FiltersCheckboxesList.vue?vue&type=template&id=18ad26ec&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Admin/Products/FiltersCheckboxesList.vue?vue&type=template&id=18ad26ec& ***!
  \***************************************************************************************************************************************************************************************************************************************/
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
      staticClass:
        "selectedCategories__wrapper product_filters__selectedCategories__wrapper"
    },
    [
      _c("p", { staticClass: "product_form__property_header" }, [
        _vm._v("\n        " + _vm._s(_vm.header) + "\n    ")
      ]),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "selectedCategories bgWhite",
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
                    "\n                " +
                      _vm._s(cat.name) +
                      "\n                "
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
            [_vm._v("\n            ˅\n        ")]
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
                    {
                      key: cat.id,
                      staticClass:
                        "checkbox_input__item product_filters__checkbox_input__item tal"
                    },
                    [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.search[_vm.entity + "_ids"],
                            expression: "search[entity + '_ids']"
                          }
                        ],
                        staticClass: "checkbox_input",
                        attrs: { type: "checkbox", id: "cat" + cat.id },
                        domProps: {
                          value: cat.id,
                          checked: Array.isArray(
                            _vm.search[_vm.entity + "_ids"]
                          )
                            ? _vm._i(_vm.search[_vm.entity + "_ids"], cat.id) >
                              -1
                            : _vm.search[_vm.entity + "_ids"]
                        },
                        on: {
                          change: function($event) {
                            var $$a = _vm.search[_vm.entity + "_ids"],
                              $$el = $event.target,
                              $$c = $$el.checked ? true : false
                            if (Array.isArray($$a)) {
                              var $$v = cat.id,
                                $$i = _vm._i($$a, $$v)
                              if ($$el.checked) {
                                $$i < 0 &&
                                  _vm.$set(
                                    _vm.search,
                                    _vm.entity + "_ids",
                                    $$a.concat([$$v])
                                  )
                              } else {
                                $$i > -1 &&
                                  _vm.$set(
                                    _vm.search,
                                    _vm.entity + "_ids",
                                    $$a.slice(0, $$i).concat($$a.slice($$i + 1))
                                  )
                              }
                            } else {
                              _vm.$set(_vm.search, _vm.entity + "_ids", $$c)
                            }
                          }
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
        : _vm._e()
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Products/FiltersIcon.vue?vue&type=template&id=8a64b858&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Admin/Products/FiltersIcon.vue?vue&type=template&id=8a64b858& ***!
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
  return _c(
    "div",
    {
      staticClass: "product_filters__icon",
      on: {
        click: function($event) {
          $event.stopPropagation()
          return _vm.showOrCloseProductsFilters()
        }
      }
    },
    [_vm._m(0)]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "product_filters__icon__content" }, [
      _vm._v("\n        ☰\n        "),
      _c("span", {
        staticClass:
          "product_filters__icon__knob product_filters__icon__knob__1"
      }),
      _vm._v(" "),
      _c("span", {
        staticClass:
          "product_filters__icon__knob product_filters__icon__knob__2"
      }),
      _vm._v(" "),
      _c("span", {
        staticClass:
          "product_filters__icon__knob product_filters__icon__knob__3"
      })
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Products/ProductItem.vue?vue&type=template&id=f9f00b3c&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Admin/Products/ProductItem.vue?vue&type=template&id=f9f00b3c& ***!
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
  return _c(
    "div",
    {
      ref: "product",
      staticClass: "product_item",
      class: _vm.draggableProductItemClass,
      style: {
        left: _vm.draggedEntity === "Product" ? _vm.leftByIndex(_vm.index) : 0,
        top: _vm.draggedEntity === "Product" ? _vm.topByIndex(_vm.index) : 0
      },
      on: {
        mousedown: function($event) {
          return _vm.myDragStart({
            index: _vm.index,
            event: $event,
            entity: "Product"
          })
        },
        mouseup: function($event) {
          $event.stopPropagation()
          return _vm.myDragStop({
            event: $event,
            clickedIndex: _vm.index,
            entity: "Product"
          })
        }
      }
    },
    [
      _c(
        "span",
        {
          staticClass: "context_menu__icon__product",
          on: {
            mouseover: function($event) {
              return _vm.showContextMenu({
                event: $event,
                target: "Products",
                data: {
                  product: _vm.product
                }
              })
            }
          }
        },
        [_vm._v("\n        ⋮\n    ")]
      ),
      _vm._v(" "),
      _c(
        "a",
        {
          staticClass: "product_item__quick_view_link",
          attrs: { href: "#" },
          on: {
            click: function($event) {
              $event.preventDefault()
              return _vm.showProductQuickViewManager(_vm.product.id)
            }
          }
        },
        [_vm._v("\n        Быстрый просмотр\n    ")]
      ),
      _vm._v(" "),
      _vm.numberOfPhotos > 0
        ? [
            _c(
              "router-link",
              {
                attrs: {
                  to: {
                    name: "SingleProduct",
                    params: { slug: _vm.product.slug, id: _vm.product.id }
                  }
                }
              },
              [
                _c("div", {
                  ref: "mainPhotoDiv",
                  domProps: { innerHTML: _vm._s(_vm.getMainPhoto) },
                  on: {
                    mousemove: function($event) {
                      return _vm.changeMainPhoto($event)
                    },
                    mouseout: function($event) {
                      return _vm.setFirstMainPhoto()
                    }
                  }
                })
              ]
            )
          ]
        : [
            _c(
              "div",
              { ref: "mainPhotoDiv", staticClass: "product_item__no_photo" },
              [_vm._v("\n            НЕТ ФОТО\n        ")]
            )
          ],
      _vm._v(" "),
      _vm.numberOfPhotos > 1
        ? _c(
            "div",
            { staticClass: "product_item__photo_indicator" },
            _vm._l(_vm.numberOfPhotos, function(n) {
              return _c("span", {
                key: n,
                staticClass: "product_item__photo_indicator_item",
                class: {
                  product_item__photo_indicator_inactive:
                    _vm.indexOfMainPhoto + 1 !== n,
                  product_item__photo_indicator_active:
                    _vm.indexOfMainPhoto + 1 === n
                }
              })
            }),
            0
          )
        : _vm._e(),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "product_item__name",
          style: { cursor: _vm.cursorType }
        },
        [
          _c(
            "router-link",
            {
              staticClass: "product_item__name__link",
              attrs: {
                to: {
                  name: "SingleProduct",
                  params: { slug: _vm.product.slug, id: _vm.product.id }
                }
              }
            },
            [_vm._v("\n            " + _vm._s(_vm.product.name) + "\n        ")]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "product_item__price",
          style: { cursor: _vm.cursorType }
        },
        [_vm._v("\n        " + _vm._s(_vm.getPrice) + "\n    ")]
      ),
      _vm._v(" "),
      _c("div", {
        staticClass: "product_item__small_photos",
        domProps: { innerHTML: _vm._s(_vm.getPhotos) },
        on: {
          mouseover: function($event) {
            return _vm.changeMainPhotoBySmallPhoto($event)
          },
          mouseout: function($event) {
            return _vm.setFirstMainPhoto()
          }
        }
      }),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "product_item__bottom_info__relative_wrapper" },
        [
          _c("div", { staticClass: "product_item__bottom_info__absolute" }, [
            _c("p", {
              staticClass: "product_item__bottom_info__text",
              attrs: { title: "Категория" },
              domProps: { innerHTML: _vm._s(_vm.getCategories) }
            }),
            _vm._v(" "),
            _c("p", {
              staticClass: "product_item__bottom_info__text",
              attrs: { title: "Материал" },
              domProps: { innerHTML: _vm._s(_vm.getMaterials) }
            }),
            _vm._v(" "),
            _c("p", {
              staticClass: "product_item__bottom_info__text",
              attrs: { title: "Цвет" },
              domProps: { innerHTML: _vm._s(_vm.getColors) }
            })
          ])
        ]
      )
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Products/ProductQuickViewManager.vue?vue&type=template&id=509a35ea&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Admin/Products/ProductQuickViewManager.vue?vue&type=template&id=509a35ea& ***!
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
  return _c("div", { staticClass: "quick_view_manager__screen" }, [
    _c("div", { staticClass: "quick_view_manager__content_wrapper" }, [
      _c(
        "div",
        { staticClass: "quick_view_manager__content" },
        [_c("single-product", { attrs: { from: "quickViewManager" } })],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "quick_view_manager__collapse_icon",
          on: {
            click: function($event) {
              return _vm.closeProductQuickViewManager()
            }
          }
        },
        [_vm._v("\n            ×\n        ")]
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Products/Products.vue?vue&type=template&id=2491b258&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Admin/Products/Products.vue?vue&type=template&id=2491b258& ***!
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
  return _c("div", { staticClass: "content_block content_block__products" }, [
    _c(
      "div",
      { staticClass: "products" },
      [
        _vm.productsLength > 1
          ? _c("pagination", {
              staticClass: "pdb0",
              attrs: { entity: "products" }
            })
          : _vm._e(),
        _vm._v(" "),
        _c("sorting-modes"),
        _vm._v(" "),
        _c("search-total-parameters"),
        _vm._v(" "),
        _vm._l(_vm.items, function(item, index) {
          return _c("product-item", {
            key: item.id,
            attrs: { product: item, index: index }
          })
        }),
        _vm._v(" "),
        _vm.productsLength > 1
          ? _c("pagination", {
              staticClass: "pdt10",
              attrs: { entity: "products" }
            })
          : _vm._e(),
        _vm._v(" "),
        _c(
          "transition",
          { attrs: { name: "product_filters" } },
          [
            _c("products-filters", {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value:
                    _vm.$route.name === "Products" &&
                    _vm.visibility("productsFilters"),
                  expression:
                    "$route.name === 'Products' && visibility('productsFilters')"
                }
              ]
            })
          ],
          1
        ),
        _vm._v(" "),
        _vm.$route.name === "Products" ? _c("filters-icon") : _vm._e(),
        _vm._v(" "),
        _c(
          "transition",
          { attrs: { name: "fade" } },
          [
            _vm.showProductsContextMenu ? _c("products-context-menu") : _vm._e()
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "transition",
          { attrs: { name: "fade" } },
          [
            _vm.visibility("productEditManager")
              ? _c("product-edit-manager")
              : _vm._e()
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "transition",
          { attrs: { name: "fade" } },
          [
            _vm.visibility("productPhotoManager")
              ? _c("product-photo-manager")
              : _vm._e()
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "transition",
          { attrs: { name: "fade" } },
          [
            _vm.showSeoManager && !_vm.visibility("productPhotoManager")
              ? _c("seo-manager", { attrs: { entity: "product" } })
              : _vm._e()
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "transition",
          { attrs: { name: "fade" } },
          [
            _vm.visibility("productQuickViewManager")
              ? _c("product-quick-view-manager")
              : _vm._e()
          ],
          1
        )
      ],
      2
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Products/ProductsFilters.vue?vue&type=template&id=0ed41937&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Admin/Products/ProductsFilters.vue?vue&type=template&id=0ed41937& ***!
  \*********************************************************************************************************************************************************************************************************************************/
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
      staticClass: "product_filters",
      on: {
        click: function($event) {
          $event.stopPropagation()
        }
      }
    },
    [
      _c(
        "div",
        {
          staticClass: "product_filters__content",
          on: {
            click: function($event) {
              return _vm.closeAllCheckboxesLists()
            }
          }
        },
        [
          _c("p", { staticClass: "product_form__property_header mt30 mb20" }, [
            _vm._v("\n            Цена, руб.\n        ")
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "filter_price__text_input__wrapper" }, [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.search.minPrice,
                  expression: "search.minPrice"
                }
              ],
              staticClass: "input_text filter_price__text_input",
              attrs: { type: "text", maxlength: "6" },
              domProps: { value: _vm.search.minPrice },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.search, "minPrice", $event.target.value)
                }
              }
            }),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.search.maxPrice,
                  expression: "search.maxPrice"
                }
              ],
              staticClass: "input_text filter_price__text_input",
              attrs: { type: "text", maxlength: "6" },
              domProps: { value: _vm.search.maxPrice },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.search, "maxPrice", $event.target.value)
                }
              }
            })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "filter_price__range_input__wrapper" }, [
            _c("div", { staticClass: "filter_price__range_input__kernel" }, [
              _vm._v(" ")
            ]),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.search.minPrice,
                  expression: "search.minPrice"
                }
              ],
              staticClass:
                "filter_price__range_input filter_price__range_input_min",
              attrs: {
                type: "range",
                min: _vm.productsMinPrice,
                step: "100",
                max: _vm.productsMaxPrice
              },
              domProps: { value: _vm.search.minPrice },
              on: {
                __r: function($event) {
                  return _vm.$set(_vm.search, "minPrice", $event.target.value)
                }
              }
            }),
            _c("br"),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.search.maxPrice,
                  expression: "search.maxPrice"
                }
              ],
              staticClass:
                "filter_price__range_input filter_price__range_input_max",
              attrs: {
                type: "range",
                min: _vm.productsMinPrice,
                step: "100",
                max: _vm.productsMaxPrice
              },
              domProps: { value: _vm.search.maxPrice },
              on: {
                __r: function($event) {
                  return _vm.$set(_vm.search, "maxPrice", $event.target.value)
                }
              }
            })
          ]),
          _vm._v(" "),
          _c("filters-checkboxes-list", {
            staticClass: "mt30",
            attrs: {
              "close-list-cmd": _vm.closeCheckboxesListsCmd,
              search: _vm.search,
              entity: "category",
              header: "Категория"
            },
            on: {
              closeAllCheckboxesLists: function($event) {
                return _vm.closeAllCheckboxesLists()
              }
            },
            model: {
              value: _vm.search.category_ids,
              callback: function($$v) {
                _vm.$set(_vm.search, "category_ids", $$v)
              },
              expression: "search.category_ids"
            }
          }),
          _vm._v(" "),
          _c("filters-checkboxes-list", {
            staticClass: "mt30",
            attrs: {
              "close-list-cmd": _vm.closeCheckboxesListsCmd,
              search: _vm.search,
              entity: "material",
              header: "Материал"
            },
            on: {
              closeAllCheckboxesLists: function($event) {
                return _vm.closeAllCheckboxesLists()
              }
            },
            model: {
              value: _vm.search.material_ids,
              callback: function($$v) {
                _vm.$set(_vm.search, "material_ids", $$v)
              },
              expression: "search.material_ids"
            }
          }),
          _vm._v(" "),
          _c("filters-checkboxes-list", {
            staticClass: "mt30",
            attrs: {
              "close-list-cmd": _vm.closeCheckboxesListsCmd,
              search: _vm.search,
              entity: "color",
              header: "Цвет"
            },
            on: {
              closeAllCheckboxesLists: function($event) {
                return _vm.closeAllCheckboxesLists()
              }
            },
            model: {
              value: _vm.search.color_ids,
              callback: function($$v) {
                _vm.$set(_vm.search, "color_ids", $$v)
              },
              expression: "search.color_ids"
            }
          }),
          _vm._v(" "),
          _c(
            "button",
            {
              staticClass: "button__save_product mauto mt30",
              on: {
                click: function($event) {
                  return _vm.closeProductsFilters()
                }
              }
            },
            [_vm._v("\n            Готово\n        ")]
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "product_filters__collapse_icon",
              on: {
                click: function($event) {
                  $event.stopPropagation()
                  return _vm.closeProductsFilters()
                }
              }
            },
            [_vm._v("\n            ×\n        ")]
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Products/SearchTotalParameters.vue?vue&type=template&id=f582a974&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Admin/Products/SearchTotalParameters.vue?vue&type=template&id=f582a974& ***!
  \***************************************************************************************************************************************************************************************************************************************/
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
  return _vm.notEmptyStateSearch
    ? _c(
        "div",
        { staticClass: "products_filters_top_total_parameters show_block" },
        [
          _vm.searchMinPrice
            ? _c("p", { staticClass: "selectedCategories__item show_block" }, [
                _vm._v(
                  "\n        от " +
                    _vm._s(_vm.stateSearchObject.minPrice) +
                    " руб.\n        "
                ),
                _c(
                  "span",
                  {
                    staticClass: "selectedCategories__item__collapse_icon",
                    on: { click: _vm.clearMinPrice }
                  },
                  [_vm._v("\n            ×\n        ")]
                )
              ])
            : _vm._e(),
          _vm._v(" "),
          _vm.searchMaxPrice
            ? _c("p", { staticClass: "selectedCategories__item show_block" }, [
                _vm._v(
                  "\n        до " +
                    _vm._s(_vm.stateSearchObject.maxPrice) +
                    " руб.\n        "
                ),
                _c(
                  "span",
                  {
                    staticClass: "selectedCategories__item__collapse_icon",
                    on: { click: _vm.clearMaxPrice }
                  },
                  [_vm._v("\n            ×\n        ")]
                )
              ])
            : _vm._e(),
          _vm._v(" "),
          _vm._l(_vm.selectedCategories, function(cat) {
            return _c(
              "p",
              {
                key: cat.id,
                staticClass: "selectedCategories__item show_block"
              },
              [
                _vm._v("\n        " + _vm._s(cat.name) + "\n        "),
                _c(
                  "span",
                  {
                    staticClass: "selectedCategories__item__collapse_icon",
                    on: {
                      click: function($event) {
                        return _vm.deleteSelectedItem("category", cat.id)
                      }
                    }
                  },
                  [_vm._v("\n            ×\n        ")]
                )
              ]
            )
          }),
          _vm._v(" "),
          _vm._l(_vm.selectedMaterials, function(cat) {
            return _c(
              "p",
              {
                key: cat.id,
                staticClass: "selectedCategories__item show_block"
              },
              [
                _vm._v("\n        " + _vm._s(cat.name) + "\n        "),
                _c(
                  "span",
                  {
                    staticClass: "selectedCategories__item__collapse_icon",
                    on: {
                      click: function($event) {
                        return _vm.deleteSelectedItem("material", cat.id)
                      }
                    }
                  },
                  [_vm._v("\n            ×\n        ")]
                )
              ]
            )
          }),
          _vm._v(" "),
          _vm._l(_vm.selectedColors, function(cat) {
            return _c(
              "p",
              {
                key: cat.id,
                staticClass: "selectedCategories__item show_block"
              },
              [
                _vm._v("\n        " + _vm._s(cat.name) + "\n        "),
                _c(
                  "span",
                  {
                    staticClass: "selectedCategories__item__collapse_icon",
                    on: {
                      click: function($event) {
                        return _vm.deleteSelectedItem("color", cat.id)
                      }
                    }
                  },
                  [_vm._v("\n            ×\n        ")]
                )
              ]
            )
          })
        ],
        2
      )
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Products/SortingModes.vue?vue&type=template&id=a117c508&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Admin/Products/SortingModes.vue?vue&type=template&id=a117c508& ***!
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
  return _c("div", { staticClass: "products_sorting_modes" }, [
    _vm._v("\n    Сортировать по:\n    "),
    _c(
      "a",
      {
        class: _vm.defaultSortingLinkClass,
        attrs: { href: "#" },
        on: {
          click: function($event) {
            $event.preventDefault()
            return _vm.doSort("position")
          }
        }
      },
      [_vm._v("\n        По умолчанию\n    ")]
    ),
    _vm._v(" "),
    _c(
      "a",
      {
        class: _vm.priceSortingLinkClass,
        attrs: { href: "#" },
        on: {
          click: function($event) {
            $event.preventDefault()
            return _vm.doSort("priceUp")
          }
        }
      },
      [_vm._v("\n        По цене\n    ")]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/ProductsPage.vue?vue&type=template&id=28dfadc4&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Admin/ProductsPage.vue?vue&type=template&id=28dfadc4& ***!
  \*********************************************************************************************************************************************************************************************************************/
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
  return _vm.defaultSorting
    ? _c(
        "div",
        {
          staticClass: "show_block",
          on: {
            click: function($event) {
              return _vm.closeProductsFilters()
            },
            mousemove: function($event) {
              return _vm.myDragMove({ event: $event, entity: "Product" })
            },
            mouseup: function($event) {
              return _vm.myDragStop({
                event: $event,
                clickedIndex: -1,
                entity: "Product"
              })
            }
          }
        },
        [_c("product-list-header"), _vm._v(" "), _c("products")],
        1
      )
    : _c(
        "div",
        {
          staticClass: "show_block",
          on: {
            click: function($event) {
              return _vm.closeProductsFilters()
            }
          }
        },
        [_c("product-list-header"), _vm._v(" "), _c("products")],
        1
      )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/Admin/Products/FiltersCheckboxesList.vue":
/*!**************************************************************************!*\
  !*** ./resources/js/components/Admin/Products/FiltersCheckboxesList.vue ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FiltersCheckboxesList_vue_vue_type_template_id_18ad26ec___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FiltersCheckboxesList.vue?vue&type=template&id=18ad26ec& */ "./resources/js/components/Admin/Products/FiltersCheckboxesList.vue?vue&type=template&id=18ad26ec&");
/* harmony import */ var _FiltersCheckboxesList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FiltersCheckboxesList.vue?vue&type=script&lang=js& */ "./resources/js/components/Admin/Products/FiltersCheckboxesList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FiltersCheckboxesList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FiltersCheckboxesList_vue_vue_type_template_id_18ad26ec___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FiltersCheckboxesList_vue_vue_type_template_id_18ad26ec___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Admin/Products/FiltersCheckboxesList.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Admin/Products/FiltersCheckboxesList.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/components/Admin/Products/FiltersCheckboxesList.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FiltersCheckboxesList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./FiltersCheckboxesList.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Products/FiltersCheckboxesList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FiltersCheckboxesList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Admin/Products/FiltersCheckboxesList.vue?vue&type=template&id=18ad26ec&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/components/Admin/Products/FiltersCheckboxesList.vue?vue&type=template&id=18ad26ec& ***!
  \*********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FiltersCheckboxesList_vue_vue_type_template_id_18ad26ec___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./FiltersCheckboxesList.vue?vue&type=template&id=18ad26ec& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Products/FiltersCheckboxesList.vue?vue&type=template&id=18ad26ec&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FiltersCheckboxesList_vue_vue_type_template_id_18ad26ec___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FiltersCheckboxesList_vue_vue_type_template_id_18ad26ec___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Admin/Products/FiltersIcon.vue":
/*!****************************************************************!*\
  !*** ./resources/js/components/Admin/Products/FiltersIcon.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FiltersIcon_vue_vue_type_template_id_8a64b858___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FiltersIcon.vue?vue&type=template&id=8a64b858& */ "./resources/js/components/Admin/Products/FiltersIcon.vue?vue&type=template&id=8a64b858&");
/* harmony import */ var _FiltersIcon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FiltersIcon.vue?vue&type=script&lang=js& */ "./resources/js/components/Admin/Products/FiltersIcon.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FiltersIcon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FiltersIcon_vue_vue_type_template_id_8a64b858___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FiltersIcon_vue_vue_type_template_id_8a64b858___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Admin/Products/FiltersIcon.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Admin/Products/FiltersIcon.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/Admin/Products/FiltersIcon.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FiltersIcon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./FiltersIcon.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Products/FiltersIcon.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FiltersIcon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Admin/Products/FiltersIcon.vue?vue&type=template&id=8a64b858&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/Admin/Products/FiltersIcon.vue?vue&type=template&id=8a64b858& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FiltersIcon_vue_vue_type_template_id_8a64b858___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./FiltersIcon.vue?vue&type=template&id=8a64b858& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Products/FiltersIcon.vue?vue&type=template&id=8a64b858&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FiltersIcon_vue_vue_type_template_id_8a64b858___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FiltersIcon_vue_vue_type_template_id_8a64b858___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Admin/Products/ProductItem.vue":
/*!****************************************************************!*\
  !*** ./resources/js/components/Admin/Products/ProductItem.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ProductItem_vue_vue_type_template_id_f9f00b3c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProductItem.vue?vue&type=template&id=f9f00b3c& */ "./resources/js/components/Admin/Products/ProductItem.vue?vue&type=template&id=f9f00b3c&");
/* harmony import */ var _ProductItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProductItem.vue?vue&type=script&lang=js& */ "./resources/js/components/Admin/Products/ProductItem.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ProductItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ProductItem_vue_vue_type_template_id_f9f00b3c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ProductItem_vue_vue_type_template_id_f9f00b3c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Admin/Products/ProductItem.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Admin/Products/ProductItem.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/Admin/Products/ProductItem.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ProductItem.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Products/ProductItem.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Admin/Products/ProductItem.vue?vue&type=template&id=f9f00b3c&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/Admin/Products/ProductItem.vue?vue&type=template&id=f9f00b3c& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductItem_vue_vue_type_template_id_f9f00b3c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ProductItem.vue?vue&type=template&id=f9f00b3c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Products/ProductItem.vue?vue&type=template&id=f9f00b3c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductItem_vue_vue_type_template_id_f9f00b3c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductItem_vue_vue_type_template_id_f9f00b3c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Admin/Products/ProductQuickViewManager.vue":
/*!****************************************************************************!*\
  !*** ./resources/js/components/Admin/Products/ProductQuickViewManager.vue ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ProductQuickViewManager_vue_vue_type_template_id_509a35ea___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProductQuickViewManager.vue?vue&type=template&id=509a35ea& */ "./resources/js/components/Admin/Products/ProductQuickViewManager.vue?vue&type=template&id=509a35ea&");
/* harmony import */ var _ProductQuickViewManager_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProductQuickViewManager.vue?vue&type=script&lang=js& */ "./resources/js/components/Admin/Products/ProductQuickViewManager.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ProductQuickViewManager_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ProductQuickViewManager_vue_vue_type_template_id_509a35ea___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ProductQuickViewManager_vue_vue_type_template_id_509a35ea___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Admin/Products/ProductQuickViewManager.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Admin/Products/ProductQuickViewManager.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/components/Admin/Products/ProductQuickViewManager.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductQuickViewManager_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ProductQuickViewManager.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Products/ProductQuickViewManager.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductQuickViewManager_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Admin/Products/ProductQuickViewManager.vue?vue&type=template&id=509a35ea&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/components/Admin/Products/ProductQuickViewManager.vue?vue&type=template&id=509a35ea& ***!
  \***********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductQuickViewManager_vue_vue_type_template_id_509a35ea___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ProductQuickViewManager.vue?vue&type=template&id=509a35ea& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Products/ProductQuickViewManager.vue?vue&type=template&id=509a35ea&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductQuickViewManager_vue_vue_type_template_id_509a35ea___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductQuickViewManager_vue_vue_type_template_id_509a35ea___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Admin/Products/Products.vue":
/*!*************************************************************!*\
  !*** ./resources/js/components/Admin/Products/Products.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Products_vue_vue_type_template_id_2491b258___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Products.vue?vue&type=template&id=2491b258& */ "./resources/js/components/Admin/Products/Products.vue?vue&type=template&id=2491b258&");
/* harmony import */ var _Products_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Products.vue?vue&type=script&lang=js& */ "./resources/js/components/Admin/Products/Products.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Products_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Products_vue_vue_type_template_id_2491b258___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Products_vue_vue_type_template_id_2491b258___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Admin/Products/Products.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Admin/Products/Products.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/Admin/Products/Products.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Products_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Products.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Products/Products.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Products_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Admin/Products/Products.vue?vue&type=template&id=2491b258&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/Admin/Products/Products.vue?vue&type=template&id=2491b258& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Products_vue_vue_type_template_id_2491b258___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Products.vue?vue&type=template&id=2491b258& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Products/Products.vue?vue&type=template&id=2491b258&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Products_vue_vue_type_template_id_2491b258___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Products_vue_vue_type_template_id_2491b258___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Admin/Products/ProductsFilters.vue":
/*!********************************************************************!*\
  !*** ./resources/js/components/Admin/Products/ProductsFilters.vue ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ProductsFilters_vue_vue_type_template_id_0ed41937___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProductsFilters.vue?vue&type=template&id=0ed41937& */ "./resources/js/components/Admin/Products/ProductsFilters.vue?vue&type=template&id=0ed41937&");
/* harmony import */ var _ProductsFilters_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProductsFilters.vue?vue&type=script&lang=js& */ "./resources/js/components/Admin/Products/ProductsFilters.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ProductsFilters_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ProductsFilters_vue_vue_type_template_id_0ed41937___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ProductsFilters_vue_vue_type_template_id_0ed41937___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Admin/Products/ProductsFilters.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Admin/Products/ProductsFilters.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/Admin/Products/ProductsFilters.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductsFilters_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ProductsFilters.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Products/ProductsFilters.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductsFilters_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Admin/Products/ProductsFilters.vue?vue&type=template&id=0ed41937&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/components/Admin/Products/ProductsFilters.vue?vue&type=template&id=0ed41937& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductsFilters_vue_vue_type_template_id_0ed41937___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ProductsFilters.vue?vue&type=template&id=0ed41937& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Products/ProductsFilters.vue?vue&type=template&id=0ed41937&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductsFilters_vue_vue_type_template_id_0ed41937___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductsFilters_vue_vue_type_template_id_0ed41937___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Admin/Products/SearchTotalParameters.vue":
/*!**************************************************************************!*\
  !*** ./resources/js/components/Admin/Products/SearchTotalParameters.vue ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SearchTotalParameters_vue_vue_type_template_id_f582a974___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SearchTotalParameters.vue?vue&type=template&id=f582a974& */ "./resources/js/components/Admin/Products/SearchTotalParameters.vue?vue&type=template&id=f582a974&");
/* harmony import */ var _SearchTotalParameters_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SearchTotalParameters.vue?vue&type=script&lang=js& */ "./resources/js/components/Admin/Products/SearchTotalParameters.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SearchTotalParameters_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SearchTotalParameters_vue_vue_type_template_id_f582a974___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SearchTotalParameters_vue_vue_type_template_id_f582a974___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Admin/Products/SearchTotalParameters.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Admin/Products/SearchTotalParameters.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/components/Admin/Products/SearchTotalParameters.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchTotalParameters_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./SearchTotalParameters.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Products/SearchTotalParameters.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchTotalParameters_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Admin/Products/SearchTotalParameters.vue?vue&type=template&id=f582a974&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/components/Admin/Products/SearchTotalParameters.vue?vue&type=template&id=f582a974& ***!
  \*********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchTotalParameters_vue_vue_type_template_id_f582a974___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./SearchTotalParameters.vue?vue&type=template&id=f582a974& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Products/SearchTotalParameters.vue?vue&type=template&id=f582a974&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchTotalParameters_vue_vue_type_template_id_f582a974___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchTotalParameters_vue_vue_type_template_id_f582a974___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Admin/Products/SortingModes.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/components/Admin/Products/SortingModes.vue ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SortingModes_vue_vue_type_template_id_a117c508___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SortingModes.vue?vue&type=template&id=a117c508& */ "./resources/js/components/Admin/Products/SortingModes.vue?vue&type=template&id=a117c508&");
/* harmony import */ var _SortingModes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SortingModes.vue?vue&type=script&lang=js& */ "./resources/js/components/Admin/Products/SortingModes.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SortingModes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SortingModes_vue_vue_type_template_id_a117c508___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SortingModes_vue_vue_type_template_id_a117c508___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Admin/Products/SortingModes.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Admin/Products/SortingModes.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/Admin/Products/SortingModes.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SortingModes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./SortingModes.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Products/SortingModes.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SortingModes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Admin/Products/SortingModes.vue?vue&type=template&id=a117c508&":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/Admin/Products/SortingModes.vue?vue&type=template&id=a117c508& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SortingModes_vue_vue_type_template_id_a117c508___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./SortingModes.vue?vue&type=template&id=a117c508& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Products/SortingModes.vue?vue&type=template&id=a117c508&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SortingModes_vue_vue_type_template_id_a117c508___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SortingModes_vue_vue_type_template_id_a117c508___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Admin/ProductsPage.vue":
/*!********************************************************!*\
  !*** ./resources/js/components/Admin/ProductsPage.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ProductsPage_vue_vue_type_template_id_28dfadc4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProductsPage.vue?vue&type=template&id=28dfadc4& */ "./resources/js/components/Admin/ProductsPage.vue?vue&type=template&id=28dfadc4&");
/* harmony import */ var _ProductsPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProductsPage.vue?vue&type=script&lang=js& */ "./resources/js/components/Admin/ProductsPage.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ProductsPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ProductsPage_vue_vue_type_template_id_28dfadc4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ProductsPage_vue_vue_type_template_id_28dfadc4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Admin/ProductsPage.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Admin/ProductsPage.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/Admin/ProductsPage.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductsPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ProductsPage.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/ProductsPage.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductsPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Admin/ProductsPage.vue?vue&type=template&id=28dfadc4&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/Admin/ProductsPage.vue?vue&type=template&id=28dfadc4& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductsPage_vue_vue_type_template_id_28dfadc4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ProductsPage.vue?vue&type=template&id=28dfadc4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/ProductsPage.vue?vue&type=template&id=28dfadc4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductsPage_vue_vue_type_template_id_28dfadc4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductsPage_vue_vue_type_template_id_28dfadc4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);