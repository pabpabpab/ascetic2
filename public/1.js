(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

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
//
//
//
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
  computed: _objectSpread(_objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('contextMenu', ['coordinates', 'productId', 'photoName', 'currentListIndex', 'lastListIndex'])), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('products', ['photoSeoData'])), {}, {
    hasSeoData: function hasSeoData() {
      var _this = this;

      var item = this.photoSeoData.find(function (item) {
        return item.filename === _this.photoName;
      });

      if (!item) {
        return false;
      }

      return Boolean(item.alt_text) || Boolean(item.page_title) || Boolean(item.page_description);
    }
  }),
  methods: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])('products', ['deletePhoto', 'rotatePhoto', 'movePhoto'])), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])('seoManager', ['showSeoManager']))
});

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
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "ProductsContextMenu",
  computed: _objectSpread(_objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('contextMenu', ['coordinates', 'product'])), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('products', ['seoData'])), {}, {
    isTrashedProduct: function isTrashedProduct() {
      return Boolean(this.product.deleted_at);
    },
    hasSeoData: function hasSeoData() {
      var _this = this;

      var item = this.seoData.find(function (item) {
        return item.product_id === _this.product.id;
      });

      if (!item) {
        return false;
      }

      return Boolean(item.page_title) || Boolean(item.page_description);
    }
  }),
  methods: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])('products', ['preDeleteProduct', 'restoreProduct', 'showProductEditManager', 'showProductPhotoManager'])), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])('seoManager', ['showSeoManager']))
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
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "PhotoManagerItem",
  props: ['photoName', 'productId', 'photoIndex', 'length'],
  data: function data() {
    return {
      sizeIndex: 3
    };
  },
  computed: _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])(['imgFolderPrefix'])), {}, {
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
    lastPhotoListIndex: function lastPhotoListIndex() {
      return this.length - 1;
    }
  }, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('dragAndDropInAbsDiv', ['entity', 'isDragging', 'leftByIndex', 'topByIndex'])), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('products', ['showProductPhotoManager'])), {}, {
    draggablePhotoItemClass: function draggablePhotoItemClass() {
      return {
        'draggablePhoto': this.isDragging(this.photoIndex) && this.entity === 'Photo'
      };
    },
    underDraggablePhotoItemClass: function underDraggablePhotoItemClass() {
      return {
        'underDraggablePhoto': !this.isDragging(this.photoIndex) && this.entity === 'Photo'
      };
    }
  }),
  methods: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])('contextMenu', ['showContextMenu'])), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])('dragAndDropInAbsDiv', ['myDragStart', 'myDragStop'])),
  mounted: function mounted() {
    var _this = this;

    this.$store.dispatch('dragAndDropInAbsDiv/resetCoordinates', {
      cycleNumber: this.photoIndex,
      entity: 'Photo'
    }).then(function () {
      var xy = _this.$refs.photo.getBoundingClientRect();

      _this.$store.commit('dragAndDropInAbsDiv/addXIntoXCoordinates', {
        x: xy.x,
        entity: 'Photo'
      });

      _this.$store.commit('dragAndDropInAbsDiv/addYIntoYCoordinates', {
        y: xy.y,
        entity: 'Photo'
      });
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Products/ProductEditManager.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Admin/Products/ProductEditManager.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _functions_fitTextareaHeight__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./functions/fitTextareaHeight */ "./resources/js/components/Admin/Products/functions/fitTextareaHeight.js");
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


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "ProductEditManager",
  components: {
    ProductForm: function ProductForm() {
      return __webpack_require__.e(/*! import() */ 3).then(__webpack_require__.bind(null, /*! ./ProductForm.vue */ "./resources/js/components/Admin/Products/ProductForm.vue"));
    }
  },
  data: function data() {
    return {
      photoSizeIndex: 2,
      saveCmd: false
    };
  },
  computed: _objectSpread(_objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('products', ['singleProductFromServer'])), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])(['imgFolderPrefix'])), {}, {
    noData: function noData() {
      var _this$singleProductFr;

      // js-оператор ?.
      var product = (_this$singleProductFr = this.singleProductFromServer) === null || _this$singleProductFr === void 0 ? void 0 : _this$singleProductFr.product;

      if (!product) {
        return true;
      }

      return false;
    },
    getHeader: function getHeader() {
      if (this.noData) {
        return '';
      }

      var productName = this.singleProductFromServer.product.name;
      var productPrice = this.singleProductFromServer.product.price;
      return "\u0422\u043E\u0432\u0430\u0440 \xAB".concat(productName, "\xBB ").concat(productPrice, " \u20BD");
    },
    photoSrc: function photoSrc() {
      if (this.noData) {
        return '';
      }

      var folderName = "/storage/".concat(this.imgFolderPrefix).concat(this.photoSizeIndex);
      var fileNamePrefix = "".concat(this.singleProductFromServer.product.id, "s").concat(this.photoSizeIndex, "-");
      var photoName = JSON.parse(this.singleProductFromServer.product.photo_set)[0];
      return "".concat(folderName, "/").concat(fileNamePrefix).concat(photoName);
    },
    imgClass: function imgClass() {
      return "photo__size".concat(this.photoSizeIndex);
    }
  }),
  methods: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])('products', ['closeProductEditManager'])), {}, {
    fitTextareaHeight: function fitTextareaHeight(event) {
      Object(_functions_fitTextareaHeight__WEBPACK_IMPORTED_MODULE_1__["default"])(event);
    },
    save: function save() {
      var _this = this;

      this.saveCmd = true;
      setTimeout(function () {
        _this.saveCmd = false;
      }, 100);
    }
  })
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
/* harmony import */ var _Blocks_SeoManager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../Blocks/SeoManager */ "./resources/js/components/Admin/Blocks/SeoManager.vue");
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    PhotosContextMenu: _ContextMenu_PhotosContextMenu__WEBPACK_IMPORTED_MODULE_2__["default"],
    SeoManager: _Blocks_SeoManager__WEBPACK_IMPORTED_MODULE_3__["default"]
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
  computed: _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_4__["mapGetters"])('products', ['singleProductFromServer'])), Object(vuex__WEBPACK_IMPORTED_MODULE_4__["mapGetters"])(['imgFolderPrefix'])), Object(vuex__WEBPACK_IMPORTED_MODULE_4__["mapGetters"])('contextMenu', ['showPhotosContextMenu'])), Object(vuex__WEBPACK_IMPORTED_MODULE_4__["mapGetters"])('seoManager', ['showSeoManager'])), {}, {
    showButtonsPanel: function showButtonsPanel() {
      return this.photos.length > 0;
    }
  }),
  methods: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_4__["mapActions"])('products', ['closeProductPhotoManager', 'addPhotos'])), {}, {
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
  }, Object(vuex__WEBPACK_IMPORTED_MODULE_4__["mapActions"])('dragAndDropInAbsDiv', ['myDragMove', 'myDragStop'])),
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
    {
      staticClass: "context_menu__wrapper context_menu__wrapper_black",
      style: _vm.coordinates
    },
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
        _c("li", { staticClass: "context_menu__li__multiple_black" }, [
          _vm._v("\n            Сдвинуть\n            "),
          _vm.currentListIndex > 0
            ? _c(
                "span",
                {
                  staticClass: "context_menu__li__multiple__item_black",
                  attrs: { title: "влево (вверх)" },
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
                [_vm._v("\n                ← ↑\n            ")]
              )
            : _vm._e(),
          _vm._v(" "),
          _vm.currentListIndex < _vm.lastListIndex
            ? _c(
                "span",
                {
                  staticClass: "context_menu__li__multiple__item_black",
                  attrs: { title: "вправо (вниз)" },
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
                [_vm._v("\n                ↓ →\n            ")]
              )
            : _vm._e()
        ]),
        _vm._v(" "),
        _c(
          "li",
          {
            staticClass: "context_menu__li context_menu__li_black",
            on: {
              click: function($event) {
                return _vm.showSeoManager({
                  entity: "photo",
                  data: { productId: _vm.productId, photoName: _vm.photoName }
                })
              }
            }
          },
          [
            _vm.hasSeoData
              ? _c(
                  "span",
                  {
                    staticClass: "has_data_green",
                    attrs: { title: "уже есть данные" }
                  },
                  [_vm._v("✔")]
                )
              : _vm._e(),
            _vm._v("\n            SEO для фото\n        ")
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
                return _vm.deletePhoto({
                  productId: _vm.productId,
                  photoName: _vm.photoName
                })
              }
            }
          },
          [_vm._v("\n            Удалить фото\n        ")]
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
    {
      staticClass: "context_menu__wrapper context_menu__wrapper_black",
      style: _vm.coordinates
    },
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
                        return _vm.showProductEditManager(_vm.product.id)
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
                  [_vm._v("\n                Фото-менеджер\n            ")]
                ),
                _vm._v(" "),
                _c(
                  "li",
                  {
                    staticClass: "context_menu__li context_menu__li_black",
                    on: {
                      click: function($event) {
                        return _vm.showSeoManager({
                          entity: "product",
                          data: { id: _vm.product.id }
                        })
                      }
                    }
                  },
                  [
                    _vm.hasSeoData
                      ? _c(
                          "span",
                          {
                            staticClass: "has_data_green",
                            attrs: { title: "уже есть данные" }
                          },
                          [_vm._v("✔")]
                        )
                      : _vm._e(),
                    _vm._v("\n                SEO для товара\n            ")
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
  return _c(
    "div",
    {
      ref: "photo",
      staticClass: "photo_manager__item",
      class: [_vm.draggablePhotoItemClass, _vm.underDraggablePhotoItemClass],
      style: {
        left: _vm.leftByIndex(_vm.photoIndex),
        top: _vm.topByIndex(_vm.photoIndex)
      },
      on: {
        mousedown: function($event) {
          $event.stopPropagation()
          return _vm.myDragStart({
            index: _vm.photoIndex,
            event: $event,
            entity: "Photo"
          })
        },
        mouseup: function($event) {
          $event.stopPropagation()
          return _vm.myDragStop({
            event: $event,
            clickedIndex: _vm.photoIndex,
            entity: "Photo"
          })
        }
      }
    },
    [
      _c("img", {
        class: _vm.imgClass,
        staticStyle: { "pointer-events": "none" },
        attrs: { alt: "", src: _vm.photoSrc }
      }),
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
                  currentListIndex: _vm.photoIndex,
                  lastListIndex: _vm.lastPhotoListIndex
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Products/ProductEditManager.vue?vue&type=template&id=91492d78&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Admin/Products/ProductEditManager.vue?vue&type=template&id=91492d78& ***!
  \************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "edit_manager__screen" }, [
    _c("div", { staticClass: "edit_manager__content_wrapper" }, [
      _c("div", { staticClass: "edit_manager__header" }, [
        _c("img", {
          staticClass: "edit_manager__header__photo",
          class: _vm.imgClass,
          attrs: { alt: "", src: _vm.photoSrc }
        }),
        _vm._v(" "),
        _c("h1", [_vm._v(_vm._s(_vm.getHeader))])
      ]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "edit_manager__content pdt20 pdb20" },
        [
          _c("product-form", {
            attrs: { action: "edit", saveCmd: _vm.saveCmd }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c("div", { staticClass: "edit_manager__button_panel" }, [
        _c(
          "button",
          {
            staticClass: "edit_manager__save_button",
            on: {
              click: function($event) {
                $event.stopPropagation()
                return _vm.save()
              }
            }
          },
          [_vm._v("\n                Сохранить\n            ")]
        )
      ]),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "edit_manager__collapse_icon",
          on: {
            click: function($event) {
              return _vm.closeProductEditManager()
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
  return _c(
    "div",
    {
      staticClass: "photo_manager__screen",
      on: {
        mousemove: function($event) {
          $event.stopPropagation()
          return _vm.myDragMove({ event: $event, entity: "Product" })
        },
        mouseup: function($event) {
          $event.stopPropagation()
          return _vm.myDragStop({
            event: $event,
            clickedIndex: -1,
            entity: "Photo"
          })
        }
      }
    },
    [
      _c("div", { staticClass: "photo_manager__content_wrapper" }, [
        _c(
          "div",
          { staticClass: "photo_manager__top_row_container_for_collapse_icon" },
          [
            _c(
              "div",
              {
                staticClass:
                  "photo_manager__collapse_icon photo_manager__collapse_icon_main",
                on: {
                  click: function($event) {
                    return _vm.closeProductPhotoManager()
                  }
                }
              },
              [_vm._v("\n                ×\n            ")]
            )
          ]
        ),
        _vm._v(" "),
        _c("div", { staticClass: "photo_manager__content" }, [
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
            { staticClass: "photo_manager__photos" },
            [
              _vm._l(_vm.product.photo_set, function(photoName, photoIndex) {
                return _c("photo-manager-item", {
                  key: photoName,
                  attrs: {
                    photoName: photoName,
                    productId: _vm.product.id,
                    length: _vm.product.photo_set.length,
                    photoIndex: photoIndex
                  }
                })
              }),
              _vm._v(" "),
              _c(
                "transition",
                { attrs: { name: "fade" } },
                [
                  _vm.showPhotosContextMenu
                    ? _c("photos-context-menu")
                    : _vm._e()
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "transition",
                { attrs: { name: "fade" } },
                [
                  _vm.showSeoManager
                    ? _c("seo-manager", { attrs: { entity: "photo" } })
                    : _vm._e()
                ],
                1
              )
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
                      staticClass:
                        "photo_manager__collapse_icon photo_manager__collapse_icon_for_photo_input_panel",
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
        )
      ])
    ]
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

/***/ "./resources/js/components/Admin/Products/ProductEditManager.vue":
/*!***********************************************************************!*\
  !*** ./resources/js/components/Admin/Products/ProductEditManager.vue ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ProductEditManager_vue_vue_type_template_id_91492d78___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProductEditManager.vue?vue&type=template&id=91492d78& */ "./resources/js/components/Admin/Products/ProductEditManager.vue?vue&type=template&id=91492d78&");
/* harmony import */ var _ProductEditManager_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProductEditManager.vue?vue&type=script&lang=js& */ "./resources/js/components/Admin/Products/ProductEditManager.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ProductEditManager_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ProductEditManager_vue_vue_type_template_id_91492d78___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ProductEditManager_vue_vue_type_template_id_91492d78___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Admin/Products/ProductEditManager.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Admin/Products/ProductEditManager.vue?vue&type=script&lang=js&":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/Admin/Products/ProductEditManager.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductEditManager_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ProductEditManager.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Products/ProductEditManager.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductEditManager_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Admin/Products/ProductEditManager.vue?vue&type=template&id=91492d78&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/components/Admin/Products/ProductEditManager.vue?vue&type=template&id=91492d78& ***!
  \******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductEditManager_vue_vue_type_template_id_91492d78___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ProductEditManager.vue?vue&type=template&id=91492d78& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Products/ProductEditManager.vue?vue&type=template&id=91492d78&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductEditManager_vue_vue_type_template_id_91492d78___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductEditManager_vue_vue_type_template_id_91492d78___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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



/***/ })

}]);