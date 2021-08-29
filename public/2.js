(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/ContextMenu/PhotosContextMenu.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Admin/ContextMenu/PhotosContextMenu.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************/
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

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "PhotosContextMenu",
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('contextMenu', ['coordinates', 'enabledFadingCss', 'productId', 'photoName', 'currentListIndex', 'lastListIndex'])), {}, {
    contextMenuClassObject: function contextMenuClassObject() {
      return {
        'context_menu__wrapper context_menu__wrapper_black': true,
        'show_block': !this.enabledFadingCss,
        'hide_block': this.enabledFadingCss
      };
    }
  }),
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])('products', ['deletePhoto', 'rotatePhoto', 'movePhoto']))
});
/*
<template>
    <div :class="contextMenuClassObject" :style="coordinates">
        <ul class="context_menu__ul">
            <li class="context_menu__li_header">
                «{{ product.name }}»
            </li>
            <li @click="editProduct(product.id)" class="context_menu__li">
                Редактировать
            </li>
            <li @click="showProductPhotoManager(product)" class="context_menu__li">
                Фото добавить / удалить
            </li>
            <li class="context_menu__li" style="border: 0;"
                @click="preDeleteProduct(product.id)">
                Удалить товар
            </li>
        </ul>
    </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
    name: "ProductsContextMenu",
    computed: {
        ...mapGetters('contextMenu', [
            'coordinates',
            'enabledFadingCss',
            'product',
        ]),
        contextMenuClassObject() {
            return {
                'context_menu__wrapper': true,
                'show_block': !this.enabledFadingCss,
                'hide_block': this.enabledFadingCss,
            };
        }
    },
    methods: {
        ...mapActions('products', [
            'preDeleteProduct',
            'showProductPhotoManager',
        ]),
        editProduct(id) {
            this.$router.push({ name: 'EditProduct', params: { id: id } });
        },
    },

}

 */

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/ContextMenu/ProductsContextMenu.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Admin/ContextMenu/ProductsContextMenu.vue?vue&type=script&lang=js& ***!
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

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "ProductsContextMenu",
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('contextMenu', ['coordinates', 'enabledFadingCss', 'product'])), {}, {
    contextMenuClassObject: function contextMenuClassObject() {
      return {
        'context_menu__wrapper context_menu__wrapper_black': true,
        'show_block': !this.enabledFadingCss,
        'hide_block': this.enabledFadingCss
      };
    },
    isTrashedProduct: function isTrashedProduct() {
      return Boolean(this.product.deleted_at);
    }
  }),
  methods: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])('products', ['preDeleteProduct', 'restoreProduct', 'showProductPhotoManager'])), {}, {
    editProduct: function editProduct(id) {
      this.$router.push({
        name: 'EditProduct',
        params: {
          id: id
        }
      });
    }
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Products/FilesInput.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Admin/Products/FilesInput.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************/
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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Products/PhotoManagerItem.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Admin/Products/PhotoManagerItem.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************/
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

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "PhotoManagerItem",
  props: ['photoName', 'productId', 'index', 'length'],
  data: function data() {
    return {
      sizeIndex: 3
    };
  },
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])(['imgFolderPrefix'])), {}, {
    photoSrc: function photoSrc() {
      return "".concat(this.folderName, "/").concat(this.fileNamePrefix).concat(this.photoName);
    },
    folderName: function folderName() {
      return "/storage/".concat(this.imgFolderPrefix).concat(this.sizeIndex);
    },
    fileNamePrefix: function fileNamePrefix() {
      return "".concat(this.productId, "s").concat(this.sizeIndex, "-");
    },
    imgClass: function imgClass() {
      return "photo__size".concat(this.sizeIndex);
    },
    lastListIndex: function lastListIndex() {
      return this.length - 1;
    }
  }),
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])('contextMenu', ['showContextMenu']))
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

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "ProductItem",
  props: ['product', 'index'],
  methods: _objectSpread(_objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])('contextMenu', ['showContextMenu'])), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])('dragAndDropByXY', ['myDragStart', 'myDragStop'])), {}, {
    getPrice: function getPrice(parameters) {
      var _parametersArr$price;

      var parametersArr = JSON.parse(parameters);
      var price = (_parametersArr$price = parametersArr.price) !== null && _parametersArr$price !== void 0 ? _parametersArr$price : '';
      return price ? price + ' ₽' : '';
    },
    getCategory: function getCategory(parameters) {
      var _parametersArr$catego;

      var parametersArr = JSON.parse(parameters);
      var category = (_parametersArr$catego = parametersArr.category) !== null && _parametersArr$catego !== void 0 ? _parametersArr$catego : {
        id: 0,
        name: ''
      };
      return category.name;
    },
    getMaterials: function getMaterials(parameters) {
      var parametersArr = JSON.parse(parameters);
      var materialsArr = parametersArr.materials.map(function (item) {
        return "".concat(item.name);
      });
      return materialsArr.join(', ');
    },
    getColors: function getColors(parameters) {
      var parametersArr = JSON.parse(parameters);
      var colorsArr = parametersArr.colors.map(function (item) {
        return "".concat(item.name);
      });
      return colorsArr.join(', ');
    },
    getMainPhoto: function getMainPhoto(productId, photoInfo) {
      var sizeIndex = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 3;
      var photoInfoArr = JSON.parse(photoInfo);
      if (!photoInfoArr) return;
      var folderName = "/storage/".concat(this.imgFolderPrefix).concat(sizeIndex);
      var fileNamePrefix = "".concat(productId, "s").concat(sizeIndex, "-");
      var imgClass = "photo__size".concat(sizeIndex);
      var mainPhotoTimeName = photoInfoArr[0];
      return "<img alt=\"\"\n                    src=\"".concat(folderName, "/").concat(fileNamePrefix).concat(mainPhotoTimeName, "\"\n                    class=\"").concat(imgClass, "\" />");
    },
    getPhotos: function getPhotos(productId, photoInfo, sizeIndex) {
      var photoInfoArr = JSON.parse(photoInfo);
      if (!photoInfoArr) return;
      var folderName = "/storage/".concat(this.imgFolderPrefix).concat(sizeIndex);
      var fileNamePrefix = "".concat(productId, "s").concat(sizeIndex, "-");
      var imgClass = "photo__size".concat(sizeIndex);
      var photoArr = photoInfoArr.map(function (timeName) {
        return "<img alt=\"\" src=\"".concat(folderName, "/").concat(fileNamePrefix).concat(timeName, "\" class=\"").concat(imgClass, "\" />");
      });
      return photoArr.join('');
    }
  }),
  computed: _objectSpread(_objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])(['imgFolderPrefix'])), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('dragAndDropByXY', ['isDragging', 'leftByIndex', 'topByIndex'])), {}, {
    draggableItemClass: function draggableItemClass() {
      return {
        'draggableProduct': this.isDragging(this.index)
      };
    }
  }),
  mounted: function mounted() {
    var _this = this;

    this.$store.dispatch('dragAndDropByXY/resetCoordinates', this.index).then(function () {
      var xy = _this.$refs.product.getBoundingClientRect();

      _this.$store.commit('dragAndDropByXY/addXIntoXCoordinates', xy.x);

      _this.$store.commit('dragAndDropByXY/addYIntoYCoordinates', xy.y);
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Products/ProductListHeader.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Admin/Products/ProductListHeader.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
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
  name: "ProductListHeader"
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Products/ProductPhotoManager.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Admin/Products/ProductPhotoManager.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PhotoManagerItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PhotoManagerItem */ "./resources/js/components/Admin/Products/PhotoManagerItem.vue");
/* harmony import */ var _FilesInput__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FilesInput */ "./resources/js/components/Admin/Products/FilesInput.vue");
/* harmony import */ var _ContextMenu_PhotosContextMenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../ContextMenu/PhotosContextMenu */ "./resources/js/components/Admin/ContextMenu/PhotosContextMenu.vue");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
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




/* harmony default export */ __webpack_exports__["default"] = ({
  name: "ProductsPhotoManagement",
  components: {
    PhotoManagerItem: _PhotoManagerItem__WEBPACK_IMPORTED_MODULE_0__["default"],
    FilesInput: _FilesInput__WEBPACK_IMPORTED_MODULE_1__["default"],
    PhotosContextMenu: _ContextMenu_PhotosContextMenu__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      product: {
        id: 0,
        name: '',
        price: '',
        photo_set: []
      },
      photos: [],
      resetFilesInputKey: 0
    };
  },
  computed: _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_3__["mapGetters"])('products', ['enabledFadingCss', 'singleProductFromServer'])), {}, {
    photoScreenClassObject: function photoScreenClassObject() {
      return {
        'photo_management__screen': true,
        'show_block': !this.enabledFadingCss,
        'hide_block': this.enabledFadingCss
      };
    }
  }, Object(vuex__WEBPACK_IMPORTED_MODULE_3__["mapGetters"])(['imgFolderPrefix'])), Object(vuex__WEBPACK_IMPORTED_MODULE_3__["mapGetters"])('contextMenu', ['showPhotosContextMenu'])), {}, {
    showButtonsPanel: function showButtonsPanel() {
      return this.photos.length > 0;
    }
  }),
  methods: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_3__["mapActions"])('products', ['closeProductPhotoManager', 'addPhotos'])), {}, {
    resetPhotos: function resetPhotos() {
      this.photos = [].concat(); // изменение resetFilesInputKey заставит перерисоваться компонент <files-input>

      this.resetFilesInputKey++;
    },
    sendPhotos: function sendPhotos() {
      var _this = this;

      this.$store.dispatch('products/addPhotos', {
        productId: this.product.id,
        photos: this.photos
      }).then(function () {
        return _this.resetPhotos();
      });
    }
  }),
  watch: {
    singleProductFromServer: function singleProductFromServer(val) {
      if (!val) {
        return;
      } // console.log(val);


      var parameters = JSON.parse(val.product.parameters);
      this.product = {
        id: val.product.id,
        category_id: val.product.category_id,
        name: val.product.name,
        price: parameters.price,
        photo_set: JSON.parse(val.product.photo_set)
      };
    }
  }
  /*
  mounted() {
      this.$store.dispatch('updateCSRF', 5);
  },
  */

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
/* harmony import */ var _ProductItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProductItem */ "./resources/js/components/Admin/Products/ProductItem.vue");
/* harmony import */ var _ContextMenu_ProductsContextMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ContextMenu/ProductsContextMenu */ "./resources/js/components/Admin/ContextMenu/ProductsContextMenu.vue");
/* harmony import */ var _ProductPhotoManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProductPhotoManager */ "./resources/js/components/Admin/Products/ProductPhotoManager.vue");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
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




/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Products",
  props: ['whichProducts'],
  components: {
    ProductItem: _ProductItem__WEBPACK_IMPORTED_MODULE_0__["default"],
    ProductsContextMenu: _ContextMenu_ProductsContextMenu__WEBPACK_IMPORTED_MODULE_1__["default"],
    ProductPhotoManager: _ProductPhotoManager__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_3__["mapGetters"])('products', ['products', 'showProductPhotoManager'])), Object(vuex__WEBPACK_IMPORTED_MODULE_3__["mapGetters"])('contextMenu', ['showProductsContextMenu'])),
  mounted: function mounted() {
    this.$store.dispatch('products/loadProducts', this.$route.params.which);
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



/* harmony default export */ __webpack_exports__["default"] = ({
  name: "ProductsPage",
  components: {
    ProductListHeader: _Products_ProductListHeader__WEBPACK_IMPORTED_MODULE_1__["default"],
    Products: _Products_Products__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_2__["mapActions"])('dragAndDropByXY', ['myDragMove', 'myDragStop']))
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/ContextMenu/PhotosContextMenu.vue?vue&type=template&id=06ceb19e&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Admin/ContextMenu/PhotosContextMenu.vue?vue&type=template&id=06ceb19e& ***!
  \**************************************************************************************************************************************************************************************************************************************/
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
    { class: _vm.contextMenuClassObject, style: _vm.coordinates },
    [
      _c("ul", { staticClass: "context_menu__ul" }, [
        _c("li", { staticClass: "context_menu__li__multiple_black" }, [
          _c(
            "span",
            {
              staticClass: "context_menu__li__multiple__item_black",
              on: {
                click: function($event) {
                  return _vm.rotatePhoto({
                    productId: _vm.productId,
                    photoName: _vm.photoName,
                    angle: 270
                  })
                }
              }
            },
            [_vm._v("\n                    ↻ 90°\n                ")]
          ),
          _vm._v(" "),
          _c(
            "span",
            {
              staticClass: "context_menu__li__multiple__item_black",
              on: {
                click: function($event) {
                  return _vm.rotatePhoto({
                    productId: _vm.productId,
                    photoName: _vm.photoName,
                    angle: 180
                  })
                }
              }
            },
            [_vm._v("\n                    180°\n                ")]
          ),
          _vm._v(" "),
          _c(
            "span",
            {
              staticClass: "context_menu__li__multiple__item_black",
              on: {
                click: function($event) {
                  return _vm.rotatePhoto({
                    productId: _vm.productId,
                    photoName: _vm.photoName,
                    angle: 90
                  })
                }
              }
            },
            [_vm._v("\n                    90°↺\n                ")]
          )
        ]),
        _vm._v(" "),
        _vm.currentListIndex > 0
          ? _c(
              "li",
              {
                staticClass: "context_menu__li context_menu__li_black",
                on: {
                  click: function($event) {
                    return _vm.movePhoto({
                      productId: _vm.productId,
                      photoName: _vm.photoName,
                      to: "first"
                    })
                  }
                }
              },
              [_vm._v("\n            Сделать главным\n        ")]
            )
          : _vm._e(),
        _vm._v(" "),
        _vm.currentListIndex > 0
          ? _c(
              "li",
              {
                staticClass: "context_menu__li context_menu__li_black",
                on: {
                  click: function($event) {
                    return _vm.movePhoto({
                      productId: _vm.productId,
                      photoName: _vm.photoName,
                      to: "up"
                    })
                  }
                }
              },
              [_vm._v("\n            Сдвинуть влево (вверх)\n        ")]
            )
          : _vm._e(),
        _vm._v(" "),
        _vm.currentListIndex < _vm.lastListIndex
          ? _c(
              "li",
              {
                staticClass: "context_menu__li context_menu__li_black",
                on: {
                  click: function($event) {
                    return _vm.movePhoto({
                      productId: _vm.productId,
                      photoName: _vm.photoName,
                      to: "down"
                    })
                  }
                }
              },
              [_vm._v("\n            Сдвинуть вправо (вниз)\n        ")]
            )
          : _vm._e(),
        _vm._v(" "),
        _c(
          "li",
          {
            staticClass: "context_menu__li context_menu__li_black",
            staticStyle: { border: "0" },
            on: {
              click: function($event) {
                return _vm.deletePhoto({
                  productId: _vm.productId,
                  photoName: _vm.photoName
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/ContextMenu/ProductsContextMenu.vue?vue&type=template&id=07f1be24&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Admin/ContextMenu/ProductsContextMenu.vue?vue&type=template&id=07f1be24& ***!
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
  return _c(
    "div",
    { class: _vm.contextMenuClassObject, style: _vm.coordinates },
    [
      _c(
        "ul",
        { staticClass: "context_menu__ul" },
        [
          _c(
            "li",
            {
              staticClass:
                "context_menu__li_header context_menu__li_header_black"
            },
            [
              _vm._v(
                "\n            «" + _vm._s(_vm.product.name) + "»\n        "
              )
            ]
          ),
          _vm._v(" "),
          _vm.isTrashedProduct
            ? [
                _c(
                  "li",
                  {
                    staticClass: "context_menu__li context_menu__li_black",
                    staticStyle: { border: "0" },
                    on: {
                      click: function($event) {
                        return _vm.restoreProduct(_vm.product.id)
                      }
                    }
                  },
                  [_vm._v("\n                Восстановить товар\n            ")]
                ),
                _vm._v(" "),
                _c(
                  "li",
                  {
                    staticClass: "context_menu__li context_menu__li_black",
                    staticStyle: { border: "0" },
                    on: {
                      click: function($event) {
                        return _vm.preDeleteProduct(_vm.product)
                      }
                    }
                  },
                  [
                    _vm._v(
                      "\n                Удалить безвозвратно\n            "
                    )
                  ]
                )
              ]
            : [
                _c(
                  "li",
                  {
                    staticClass: "context_menu__li context_menu__li_black",
                    on: {
                      click: function($event) {
                        return _vm.editProduct(_vm.product.id)
                      }
                    }
                  },
                  [_vm._v("\n                Редактировать\n            ")]
                ),
                _vm._v(" "),
                _c(
                  "li",
                  {
                    staticClass: "context_menu__li context_menu__li_black",
                    on: {
                      click: function($event) {
                        return _vm.showProductPhotoManager(_vm.product)
                      }
                    }
                  },
                  [
                    _vm._v(
                      "\n                Фото изменить / добавить\n            "
                    )
                  ]
                ),
                _vm._v(" "),
                _c(
                  "li",
                  {
                    staticClass: "context_menu__li context_menu__li_black",
                    staticStyle: { border: "0" },
                    on: {
                      click: function($event) {
                        return _vm.preDeleteProduct(_vm.product)
                      }
                    }
                  },
                  [_vm._v("\n                Удалить товар\n            ")]
                )
              ]
        ],
        2
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Products/FilesInput.vue?vue&type=template&id=187f6f83&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Admin/Products/FilesInput.vue?vue&type=template&id=187f6f83& ***!
  \****************************************************************************************************************************************************************************************************************************/
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Products/PhotoManagerItem.vue?vue&type=template&id=27608f3e&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Admin/Products/PhotoManagerItem.vue?vue&type=template&id=27608f3e& ***!
  \**********************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "photo_management__item" }, [
    _c("img", { class: _vm.imgClass, attrs: { alt: "", src: _vm.photoSrc } }),
    _vm._v(" "),
    _c(
      "span",
      {
        staticClass: "context_menu__icon__photo_manager",
        on: {
          mouseover: function($event) {
            return _vm.showContextMenu({
              event: $event,
              target: "Photos",
              data: {
                productId: _vm.productId,
                photoName: _vm.photoName,
                currentListIndex: _vm.index,
                lastListIndex: _vm.lastListIndex
              }
            })
          }
        }
      },
      [_vm._v("\n        ⋮\n    ")]
    )
  ])
}
var staticRenderFns = []
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
      staticClass: "product__item",
      class: _vm.draggableItemClass,
      style: {
        left: _vm.leftByIndex(_vm.index),
        top: _vm.topByIndex(_vm.index)
      },
      on: {
        mousedown: function($event) {
          return _vm.myDragStart({ index: _vm.index, event: $event })
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
      _c("div", [
        _c("span", { staticClass: "product__item__name" }, [
          _vm._v("\n            " + _vm._s(_vm.product.id) + "\n        ")
        ]),
        _vm._v(" "),
        _c("span", { staticClass: "product__item__name" }, [
          _vm._v("\n            " + _vm._s(_vm.product.name) + "\n        ")
        ]),
        _vm._v(" "),
        _c("span", { staticClass: "product__item__price" }, [
          _vm._v(
            "\n            " +
              _vm._s(_vm.getPrice(_vm.product.parameters)) +
              "\n        "
          )
        ])
      ]),
      _vm._v(" "),
      _c("div", [
        _c("p", {
          domProps: {
            innerHTML: _vm._s(
              _vm.getMaterials(_vm.product.parameters) +
                "\n        / " +
                _vm.getColors(_vm.product.parameters) +
                "\n        / " +
                _vm.getCategory(_vm.product.parameters)
            )
          }
        })
      ]),
      _vm._v(" "),
      _c("div", [
        _c("p", {
          domProps: {
            innerHTML: _vm._s(
              _vm.getMainPhoto(_vm.product.id, _vm.product.photo_set)
            )
          }
        }),
        _vm._v(" "),
        _c("p", {
          domProps: {
            innerHTML: _vm._s(
              _vm.getPhotos(_vm.product.id, _vm.product.photo_set, 1)
            )
          }
        })
      ]),
      _vm._v(" "),
      _c(
        "span",
        {
          staticClass: "context_menu__icon__product",
          on: {
            mouseover: function($event) {
              if (
                !$event.type.indexOf("key") &&
                _vm._k(
                  $event.keyCode,
                  "click",
                  undefined,
                  $event.key,
                  undefined
                )
              ) {
                return null
              }
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
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Products/ProductListHeader.vue?vue&type=template&id=32da2eda&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Admin/Products/ProductListHeader.vue?vue&type=template&id=32da2eda& ***!
  \***********************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "products_header mauto" },
    [
      _c("div", { staticClass: "w100px" }),
      _vm._v(" "),
      _vm.$route.params.which === "trashed"
        ? [
            _c("h1", [_vm._v("Удаленные товары")]),
            _vm._v(" "),
            _c(
              "div",
              [
                _c(
                  "router-link",
                  {
                    staticClass: "products_header__link",
                    attrs: {
                      to: { name: "Products", params: { which: "active" } }
                    }
                  },
                  [_vm._v("\n                Активные\n            ")]
                )
              ],
              1
            )
          ]
        : [
            _c("h1", [_vm._v("Список товаров")]),
            _vm._v(" "),
            _c(
              "div",
              [
                _c(
                  "router-link",
                  {
                    staticClass: "products_header__link",
                    attrs: {
                      to: { name: "Products", params: { which: "trashed" } }
                    }
                  },
                  [_vm._v("\n                Удаленные\n            ")]
                )
              ],
              1
            )
          ]
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Products/ProductPhotoManager.vue?vue&type=template&id=0363816a&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Admin/Products/ProductPhotoManager.vue?vue&type=template&id=0363816a& ***!
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
  return _c("div", { class: _vm.photoScreenClassObject }, [
    _c("div", { staticClass: "photo_management__content_wrapper" }, [
      _c("div", { staticClass: "photo_management__content" }, [
        _c("h1", [
          _vm._v(
            "Фото товара «" +
              _vm._s(_vm.product.name) +
              "» " +
              _vm._s(_vm.product.price) +
              " ₽"
          )
        ]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "photo_management__photos" },
          [
            _vm._l(_vm.product.photo_set, function(photoName, index) {
              return _c("photo-manager-item", {
                key: photoName,
                attrs: {
                  photoName: photoName,
                  productId: _vm.product.id,
                  length: _vm.product.photo_set.length,
                  index: index
                }
              })
            }),
            _vm._v(" "),
            _vm.showPhotosContextMenu ? _c("photos-context-menu") : _vm._e()
          ],
          2
        )
      ]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "photo_input__panel" },
        [
          _c("files-input", {
            key: _vm.resetFilesInputKey,
            attrs: { owner: "ProductPhotoManager" },
            model: {
              value: _vm.photos,
              callback: function($$v) {
                _vm.photos = $$v
              },
              expression: "photos"
            }
          }),
          _vm._v(" "),
          _vm.showButtonsPanel
            ? _c("div", { staticClass: "send_cancel_buttons__panel" }, [
                _c(
                  "button",
                  {
                    staticClass: "button__save_product",
                    on: {
                      click: function($event) {
                        $event.stopPropagation()
                        return _vm.sendPhotos()
                      }
                    }
                  },
                  [_vm._v("\n                    Добавить\n                ")]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "photo_management__collapse_icon",
                    on: {
                      click: function($event) {
                        return _vm.resetPhotos()
                      }
                    }
                  },
                  [_vm._v("\n                    ×\n                ")]
                )
              ])
            : _vm._e()
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "photo_management__collapse_icon",
          on: {
            click: function($event) {
              return _vm.closeProductPhotoManager()
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
        _vm._l(_vm.products, function(product, index) {
          return _c("product-item", {
            key: product.id,
            attrs: { product: product, index: index }
          })
        }),
        _vm._v(" "),
        _vm.showProductsContextMenu ? _c("products-context-menu") : _vm._e(),
        _vm._v(" "),
        _vm.showProductPhotoManager ? _c("product-photo-manager") : _vm._e()
      ],
      2
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
            clickedIndex: -1,
            entity: "Product"
          })
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

/***/ "./resources/js/components/Admin/ContextMenu/PhotosContextMenu.vue":
/*!*************************************************************************!*\
  !*** ./resources/js/components/Admin/ContextMenu/PhotosContextMenu.vue ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PhotosContextMenu_vue_vue_type_template_id_06ceb19e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PhotosContextMenu.vue?vue&type=template&id=06ceb19e& */ "./resources/js/components/Admin/ContextMenu/PhotosContextMenu.vue?vue&type=template&id=06ceb19e&");
/* harmony import */ var _PhotosContextMenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PhotosContextMenu.vue?vue&type=script&lang=js& */ "./resources/js/components/Admin/ContextMenu/PhotosContextMenu.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PhotosContextMenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PhotosContextMenu_vue_vue_type_template_id_06ceb19e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PhotosContextMenu_vue_vue_type_template_id_06ceb19e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Admin/ContextMenu/PhotosContextMenu.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Admin/ContextMenu/PhotosContextMenu.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/Admin/ContextMenu/PhotosContextMenu.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PhotosContextMenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./PhotosContextMenu.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/ContextMenu/PhotosContextMenu.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PhotosContextMenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Admin/ContextMenu/PhotosContextMenu.vue?vue&type=template&id=06ceb19e&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/components/Admin/ContextMenu/PhotosContextMenu.vue?vue&type=template&id=06ceb19e& ***!
  \********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PhotosContextMenu_vue_vue_type_template_id_06ceb19e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./PhotosContextMenu.vue?vue&type=template&id=06ceb19e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/ContextMenu/PhotosContextMenu.vue?vue&type=template&id=06ceb19e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PhotosContextMenu_vue_vue_type_template_id_06ceb19e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PhotosContextMenu_vue_vue_type_template_id_06ceb19e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Admin/ContextMenu/ProductsContextMenu.vue":
/*!***************************************************************************!*\
  !*** ./resources/js/components/Admin/ContextMenu/ProductsContextMenu.vue ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ProductsContextMenu_vue_vue_type_template_id_07f1be24___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProductsContextMenu.vue?vue&type=template&id=07f1be24& */ "./resources/js/components/Admin/ContextMenu/ProductsContextMenu.vue?vue&type=template&id=07f1be24&");
/* harmony import */ var _ProductsContextMenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProductsContextMenu.vue?vue&type=script&lang=js& */ "./resources/js/components/Admin/ContextMenu/ProductsContextMenu.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ProductsContextMenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ProductsContextMenu_vue_vue_type_template_id_07f1be24___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ProductsContextMenu_vue_vue_type_template_id_07f1be24___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Admin/ContextMenu/ProductsContextMenu.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Admin/ContextMenu/ProductsContextMenu.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/Admin/ContextMenu/ProductsContextMenu.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductsContextMenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ProductsContextMenu.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/ContextMenu/ProductsContextMenu.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductsContextMenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Admin/ContextMenu/ProductsContextMenu.vue?vue&type=template&id=07f1be24&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/components/Admin/ContextMenu/ProductsContextMenu.vue?vue&type=template&id=07f1be24& ***!
  \**********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductsContextMenu_vue_vue_type_template_id_07f1be24___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ProductsContextMenu.vue?vue&type=template&id=07f1be24& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/ContextMenu/ProductsContextMenu.vue?vue&type=template&id=07f1be24&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductsContextMenu_vue_vue_type_template_id_07f1be24___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductsContextMenu_vue_vue_type_template_id_07f1be24___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Admin/Products/FilesInput.vue":
/*!***************************************************************!*\
  !*** ./resources/js/components/Admin/Products/FilesInput.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FilesInput_vue_vue_type_template_id_187f6f83___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FilesInput.vue?vue&type=template&id=187f6f83& */ "./resources/js/components/Admin/Products/FilesInput.vue?vue&type=template&id=187f6f83&");
/* harmony import */ var _FilesInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FilesInput.vue?vue&type=script&lang=js& */ "./resources/js/components/Admin/Products/FilesInput.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FilesInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FilesInput_vue_vue_type_template_id_187f6f83___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FilesInput_vue_vue_type_template_id_187f6f83___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Admin/Products/FilesInput.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Admin/Products/FilesInput.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/Admin/Products/FilesInput.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FilesInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./FilesInput.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Products/FilesInput.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FilesInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Admin/Products/FilesInput.vue?vue&type=template&id=187f6f83&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/Admin/Products/FilesInput.vue?vue&type=template&id=187f6f83& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FilesInput_vue_vue_type_template_id_187f6f83___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./FilesInput.vue?vue&type=template&id=187f6f83& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Products/FilesInput.vue?vue&type=template&id=187f6f83&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FilesInput_vue_vue_type_template_id_187f6f83___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FilesInput_vue_vue_type_template_id_187f6f83___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Admin/Products/PhotoManagerItem.vue":
/*!*********************************************************************!*\
  !*** ./resources/js/components/Admin/Products/PhotoManagerItem.vue ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PhotoManagerItem_vue_vue_type_template_id_27608f3e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PhotoManagerItem.vue?vue&type=template&id=27608f3e& */ "./resources/js/components/Admin/Products/PhotoManagerItem.vue?vue&type=template&id=27608f3e&");
/* harmony import */ var _PhotoManagerItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PhotoManagerItem.vue?vue&type=script&lang=js& */ "./resources/js/components/Admin/Products/PhotoManagerItem.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PhotoManagerItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PhotoManagerItem_vue_vue_type_template_id_27608f3e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PhotoManagerItem_vue_vue_type_template_id_27608f3e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Admin/Products/PhotoManagerItem.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Admin/Products/PhotoManagerItem.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/Admin/Products/PhotoManagerItem.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PhotoManagerItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./PhotoManagerItem.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Products/PhotoManagerItem.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PhotoManagerItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Admin/Products/PhotoManagerItem.vue?vue&type=template&id=27608f3e&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/Admin/Products/PhotoManagerItem.vue?vue&type=template&id=27608f3e& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PhotoManagerItem_vue_vue_type_template_id_27608f3e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./PhotoManagerItem.vue?vue&type=template&id=27608f3e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Products/PhotoManagerItem.vue?vue&type=template&id=27608f3e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PhotoManagerItem_vue_vue_type_template_id_27608f3e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PhotoManagerItem_vue_vue_type_template_id_27608f3e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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

/***/ "./resources/js/components/Admin/Products/ProductListHeader.vue":
/*!**********************************************************************!*\
  !*** ./resources/js/components/Admin/Products/ProductListHeader.vue ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ProductListHeader_vue_vue_type_template_id_32da2eda___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProductListHeader.vue?vue&type=template&id=32da2eda& */ "./resources/js/components/Admin/Products/ProductListHeader.vue?vue&type=template&id=32da2eda&");
/* harmony import */ var _ProductListHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProductListHeader.vue?vue&type=script&lang=js& */ "./resources/js/components/Admin/Products/ProductListHeader.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ProductListHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ProductListHeader_vue_vue_type_template_id_32da2eda___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ProductListHeader_vue_vue_type_template_id_32da2eda___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Admin/Products/ProductListHeader.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Admin/Products/ProductListHeader.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/Admin/Products/ProductListHeader.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductListHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ProductListHeader.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Products/ProductListHeader.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductListHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Admin/Products/ProductListHeader.vue?vue&type=template&id=32da2eda&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/components/Admin/Products/ProductListHeader.vue?vue&type=template&id=32da2eda& ***!
  \*****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductListHeader_vue_vue_type_template_id_32da2eda___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ProductListHeader.vue?vue&type=template&id=32da2eda& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Products/ProductListHeader.vue?vue&type=template&id=32da2eda&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductListHeader_vue_vue_type_template_id_32da2eda___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductListHeader_vue_vue_type_template_id_32da2eda___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Admin/Products/ProductPhotoManager.vue":
/*!************************************************************************!*\
  !*** ./resources/js/components/Admin/Products/ProductPhotoManager.vue ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ProductPhotoManager_vue_vue_type_template_id_0363816a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProductPhotoManager.vue?vue&type=template&id=0363816a& */ "./resources/js/components/Admin/Products/ProductPhotoManager.vue?vue&type=template&id=0363816a&");
/* harmony import */ var _ProductPhotoManager_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProductPhotoManager.vue?vue&type=script&lang=js& */ "./resources/js/components/Admin/Products/ProductPhotoManager.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ProductPhotoManager_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ProductPhotoManager_vue_vue_type_template_id_0363816a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ProductPhotoManager_vue_vue_type_template_id_0363816a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Admin/Products/ProductPhotoManager.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Admin/Products/ProductPhotoManager.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/Admin/Products/ProductPhotoManager.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductPhotoManager_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ProductPhotoManager.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Products/ProductPhotoManager.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductPhotoManager_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Admin/Products/ProductPhotoManager.vue?vue&type=template&id=0363816a&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/components/Admin/Products/ProductPhotoManager.vue?vue&type=template&id=0363816a& ***!
  \*******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductPhotoManager_vue_vue_type_template_id_0363816a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ProductPhotoManager.vue?vue&type=template&id=0363816a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Products/ProductPhotoManager.vue?vue&type=template&id=0363816a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductPhotoManager_vue_vue_type_template_id_0363816a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductPhotoManager_vue_vue_type_template_id_0363816a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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