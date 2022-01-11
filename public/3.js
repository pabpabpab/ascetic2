(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Products/PhotoManager/PhotoManager.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Admin/Products/PhotoManager/PhotoManager.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PhotoManagerItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PhotoManagerItem */ "./resources/js/components/Admin/Products/PhotoManager/PhotoManagerItem.vue");
/* harmony import */ var _ProductForm_FilesInput__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ProductForm/FilesInput */ "./resources/js/components/Admin/Products/ProductForm/FilesInput.vue");
/* harmony import */ var _ContextMenu_PhotosContextMenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ContextMenu/PhotosContextMenu */ "./resources/js/components/Admin/ContextMenu/PhotosContextMenu.vue");
/* harmony import */ var _SeoManager_SeoManager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../SeoManager/SeoManager */ "./resources/js/components/Admin/SeoManager/SeoManager.vue");
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
//





/* harmony default export */ __webpack_exports__["default"] = ({
  name: "ProductsPhotoManagement",
  components: {
    PhotoManagerItem: _PhotoManagerItem__WEBPACK_IMPORTED_MODULE_0__["default"],
    FilesInput: _ProductForm_FilesInput__WEBPACK_IMPORTED_MODULE_1__["default"],
    PhotosContextMenu: _ContextMenu_PhotosContextMenu__WEBPACK_IMPORTED_MODULE_2__["default"],
    SeoManager: _SeoManager_SeoManager__WEBPACK_IMPORTED_MODULE_3__["default"]
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
  computed: _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_4__["mapGetters"])('products', ['singleProductFromServer'])), Object(vuex__WEBPACK_IMPORTED_MODULE_4__["mapGetters"])(['imgFolderPrefix'])), Object(vuex__WEBPACK_IMPORTED_MODULE_4__["mapGetters"])('contextMenu', ['showContextMenu'])), Object(vuex__WEBPACK_IMPORTED_MODULE_4__["mapGetters"])('seoManager', ['showSeoManager'])), {}, {
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
      }

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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Products/PhotoManager/PhotoManagerItem.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Admin/Products/PhotoManager/PhotoManagerItem.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************/
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

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "PhotoManagerItem",
  props: ['photoName', 'productId', 'photoIndex', 'numberOfPhotos'],
  data: function data() {
    return {
      sizeIndex: 3
    };
  },
  computed: _objectSpread(_objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])(['imgFolderPrefix'])), {}, {
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
      return this.numberOfPhotos - 1;
    }
  }, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('dragAndDropInAbsDiv', ['entity', 'isDragging', 'leftByIndex', 'topByIndex', 'draggingOccurs'])), {}, {
    draggedEntity: function draggedEntity() {
      return this.entity;
    },
    draggedPhotoClass: function draggedPhotoClass() {
      return {
        'draggedPhoto': this.isDragging(this.photoIndex) && this.draggedEntity === 'Photo' && this.numberOfPhotos > 1
      };
    },
    notDraggedPhotosClass: function notDraggedPhotosClass() {
      return {
        'notDraggedPhotos': this.numberOfPhotos < 2
      };
    },
    beneathDraggedPhotoClass: function beneathDraggedPhotoClass() {
      return {
        'beneathDraggedPhoto': this.draggingOccurs
      };
    }
  }),
  methods: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])('contextMenu', ['showContextMenu'])), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])('dragAndDropInAbsDiv', ['myDragStart', 'myDragStop'])),
  mounted: function mounted() {
    var _this = this;

    if (this.numberOfPhotos < 2) {
      return;
    }

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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Products/SingleProduct/SingleProduct.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Admin/Products/SingleProduct/SingleProduct.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SingleProductCategoryItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SingleProductCategoryItem */ "./resources/js/components/Admin/Products/SingleProduct/SingleProductCategoryItem.vue");
/* harmony import */ var _someComputed_computedForSingleProduct__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../someComputed/computedForSingleProduct */ "./resources/js/components/Admin/Products/someComputed/computedForSingleProduct.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _functions_scrollSmallPhotos__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../functions/scrollSmallPhotos */ "./resources/js/components/Admin/Products/functions/scrollSmallPhotos.js");
/* harmony import */ var _functions_viewLargePhoto__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../functions/viewLargePhoto */ "./resources/js/components/Admin/Products/functions/viewLargePhoto.js");
/* harmony import */ var _functions_scrollBigPhotos__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../functions/scrollBigPhotos */ "./resources/js/components/Admin/Products/functions/scrollBigPhotos.js");
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






/* harmony default export */ __webpack_exports__["default"] = ({
  name: "SingleProduct",
  props: ['from'],
  components: {
    SingleProductCategoryItem: _SingleProductCategoryItem__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      indexOfMainPhoto: 0,
      mainPhotoSizeIndex: 4,
      mainPhotoRatio: 0
    };
  },
  computed: _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_2__["mapGetters"])('products', ['singleProductFromServer'])), Object(vuex__WEBPACK_IMPORTED_MODULE_2__["mapGetters"])(['imgFolderPrefix'])), _someComputed_computedForSingleProduct__WEBPACK_IMPORTED_MODULE_1__["default"]), {}, {
    cssPositionOfContextIcon: function cssPositionOfContextIcon() {
      return this.from === 'quickViewManager' ? 'absolute' : 'fixed';
    },
    showLeftScrollButton: function showLeftScrollButton() {
      return this.indexOfMainPhoto > 0;
    },
    showRightScrollButton: function showRightScrollButton() {
      return this.indexOfMainPhoto < this.numberOfPhotos - 1;
    }
  }),
  methods: _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_2__["mapActions"])('contextMenu', ['showContextMenu'])), _functions_scrollSmallPhotos__WEBPACK_IMPORTED_MODULE_3__["default"]), _functions_viewLargePhoto__WEBPACK_IMPORTED_MODULE_4__["default"]), _functions_scrollBigPhotos__WEBPACK_IMPORTED_MODULE_5__["default"]), {}, {
    changeMainPhotoBySmallPhoto: function changeMainPhotoBySmallPhoto(event) {
      if (event.target.className === 'photo__size2') {
        this.indexOfMainPhoto = Number(event.target.dataset.photoindex);
      }
    },
    showNextBigPhoto: function showNextBigPhoto(offset) {
      this.scrollBigPhotos(offset);
      /*
      this.indexOfMainPhoto += offset;
      if (this.indexOfMainPhoto < 0) {
          this.indexOfMainPhoto = 0;
      }
      if (this.indexOfMainPhoto > this.numberOfPhotos - 1) {
          this.indexOfMainPhoto = this.numberOfPhotos - 1;
      }
      */
    }
  }),
  mounted: function mounted() {
    if (this.from === 'singleProductPage') {
      this.$store.dispatch('products/loadSingleProduct', this.$route.params.id);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Products/SingleProduct/SingleProductCategoryItem.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Admin/Products/SingleProduct/SingleProductCategoryItem.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "SingleProductCategoryItem",
  props: ['category', 'index', 'entityName']
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
        _vm.lastListIndex !== 0
          ? _c("li", { staticClass: "context_menu__li__multiple_black" }, [
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
            ])
          : _vm._e(),
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Products/PhotoManager/PhotoManager.vue?vue&type=template&id=364c82ef&":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Admin/Products/PhotoManager/PhotoManager.vue?vue&type=template&id=364c82ef& ***!
  \*******************************************************************************************************************************************************************************************************************************************/
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
                    numberOfPhotos: _vm.product.photo_set.length,
                    photoIndex: photoIndex
                  }
                })
              }),
              _vm._v(" "),
              _c(
                "transition",
                { attrs: { name: "fade" } },
                [
                  _vm.showContextMenu("Photos")
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Products/PhotoManager/PhotoManagerItem.vue?vue&type=template&id=54dec5bc&":
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Admin/Products/PhotoManager/PhotoManagerItem.vue?vue&type=template&id=54dec5bc& ***!
  \***********************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "photo_manager__item__wrapper" }, [
    _c(
      "div",
      {
        ref: "photo",
        staticClass: "photo_manager__item",
        class: [
          _vm.draggedPhotoClass,
          _vm.beneathDraggedPhotoClass,
          _vm.notDraggedPhotosClass
        ],
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
        _c("div", { staticClass: "photo_manager__item__content" }, [
          _c("img", {
            class: _vm.imgClass,
            staticStyle: { "pointer-events": "none" },
            attrs: { alt: "", src: _vm.photoSrc }
          })
        ]),
        _vm._v(" "),
        _c(
          "span",
          {
            staticClass: "context_menu__icon__photo_manager",
            on: {
              click: function($event) {
                $event.stopPropagation()
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
          [_vm._v("\n            ⋮\n        ")]
        )
      ]
    )
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Products/SingleProduct/SingleProduct.vue?vue&type=template&id=0cba921f&":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Admin/Products/SingleProduct/SingleProduct.vue?vue&type=template&id=0cba921f& ***!
  \*********************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "single_product__content" }, [
    _vm.numberOfPhotos > 0
      ? _c("div", { staticClass: "single_product__all_photo_wrapper" }, [
          _c(
            "div",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.numberOfPhotos > 1,
                  expression: "numberOfPhotos > 1"
                }
              ],
              staticClass: "single_product__small_photos__wrapper"
            },
            [
              _c(
                "div",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value:
                        _vm.notScrolledAllTheWayToTheTop() &&
                        _vm.numberOfPhotos > 5,
                      expression:
                        "notScrolledAllTheWayToTheTop() && numberOfPhotos > 5"
                    }
                  ],
                  staticClass:
                    "single_product__small_photos__scroll_button single_product__small_photos__scroll_button_top",
                  on: {
                    click: function($event) {
                      return _vm.scrollSmallPhoto(300, "down")
                    }
                  }
                },
                [
                  _c("div", {
                    staticClass:
                      "single_product__small_photos__scroll_button_top__content"
                  })
                ]
              ),
              _vm._v(" "),
              _c("div", {
                ref: "smallPhotoDiv",
                staticClass: "single_product__small_photos",
                domProps: { innerHTML: _vm._s(_vm.getSmallPhotos) },
                on: {
                  mouseover: function($event) {
                    return _vm.changeMainPhotoBySmallPhoto($event)
                  }
                }
              }),
              _vm._v(" "),
              _vm.numberOfPhotos > 5 &&
              (_vm.notScrolledAllTheWayToTheBottom() ||
                _vm.indexOfMainPhoto === 0)
                ? _c(
                    "div",
                    {
                      staticClass:
                        "single_product__small_photos__scroll_button single_product__small_photos__scroll_button_bottom",
                      on: {
                        click: function($event) {
                          return _vm.scrollSmallPhoto(300, "up")
                        }
                      }
                    },
                    [
                      _c("div", {
                        staticClass:
                          "single_product__small_photos__scroll_button_bottom__content"
                      })
                    ]
                  )
                : _vm._e()
            ]
          ),
          _vm._v(" "),
          _c("div", { staticClass: "single_product__big_photo__wrapper" }, [
            _c("div", {
              ref: "mainPhotoDiv",
              staticClass: "single_product__big_photo__content",
              attrs: { "data-big-photo-version": "desktop" },
              domProps: { innerHTML: _vm._s(_vm.getMainPhoto) },
              on: {
                mouseover: function($event) {
                  return _vm.startViewLargePhoto()
                },
                mousemove: function($event) {
                  return _vm.viewLargePhoto($event)
                },
                mouseleave: function($event) {
                  return _vm.showInitialPhoto()
                }
              }
            }),
            _vm._v(" "),
            _c("div", {
              ref: "mobileMainPhotoDiv",
              staticClass: "single_product__big_photo__content_mobile",
              attrs: { "data-big-photo-version": "mobile" },
              domProps: { innerHTML: _vm._s(_vm.getAllBigPhotos) }
            }),
            _vm._v(" "),
            _c(
              "div",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.showLeftScrollButton,
                    expression: "showLeftScrollButton"
                  }
                ],
                staticClass:
                  "single_product__big_photo__scroll_button single_product__big_photo__scroll_button_left",
                on: {
                  click: function($event) {
                    return _vm.showNextBigPhoto(-1)
                  }
                }
              },
              [
                _c("div", {
                  staticClass:
                    "single_product__big_photo__scroll_button_left__content"
                })
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.showRightScrollButton,
                    expression: "showRightScrollButton"
                  }
                ],
                staticClass:
                  "single_product__big_photo__scroll_button single_product__big_photo__scroll_button_right",
                on: {
                  click: function($event) {
                    return _vm.showNextBigPhoto(1)
                  }
                }
              },
              [
                _c("div", {
                  staticClass:
                    "single_product__big_photo__scroll_button_right__content"
                })
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.numberOfPhotos > 1,
                    expression: "numberOfPhotos > 1"
                  }
                ],
                staticClass: "single_product__big_photo__photo_number_indicator"
              },
              [
                _vm._v(
                  "\n                " +
                    _vm._s(_vm.indexOfMainPhoto + 1) +
                    "/" +
                    _vm._s(_vm.numberOfPhotos) +
                    "\n            "
                )
              ]
            )
          ])
        ])
      : _vm._e(),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass: "single_product__top_characteristics",
        class: {
          single_product__top_characteristics__margin_left:
            _vm.numberOfPhotos > 0
        }
      },
      [
        _c("h1", { staticClass: "single_product__h1" }, [
          _vm._v("\n            " + _vm._s(_vm.getHeader) + "\n        ")
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "single_product__price" }, [
          _vm._v("\n            " + _vm._s(_vm.getPrice) + "\n        ")
        ]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "single_product__categories" },
          [
            _vm._v("\n            Категория:\n            "),
            _vm._l(_vm.getCategories, function(category, index) {
              return _c("single-product-category-item", {
                key: category.id,
                attrs: {
                  category: category,
                  index: index,
                  "entity-name": "category"
                }
              })
            })
          ],
          2
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "single_product__categories" },
          [
            _vm._v("\n            Материал:\n            "),
            _vm._l(_vm.getMaterials, function(category, index) {
              return _c("single-product-category-item", {
                key: category.id,
                attrs: {
                  category: category,
                  index: index,
                  "entity-name": "material"
                }
              })
            })
          ],
          2
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "single_product__categories" },
          [
            _vm._v("\n            Цвет:\n            "),
            _vm._l(_vm.getColors, function(category, index) {
              return _c("single-product-category-item", {
                key: category.id,
                attrs: {
                  category: category,
                  index: index,
                  "entity-name": "color"
                }
              })
            })
          ],
          2
        ),
        _vm._v(" "),
        _c("div", { staticClass: "single_product__description" }, [
          _vm._v("\n            " + _vm._s(_vm.getDescription) + "\n        ")
        ])
      ]
    ),
    _vm._v(" "),
    _c(
      "span",
      {
        staticClass: "context_menu__icon__single_product",
        style: { position: _vm.cssPositionOfContextIcon },
        on: {
          click: function($event) {
            $event.stopPropagation()
            return _vm.showContextMenu({
              event: $event,
              target: "Products",
              data: {
                product: _vm.singleProductFromServer.product
              }
            })
          }
        }
      },
      [_vm._v("\n        ✎\n    ")]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Products/SingleProduct/SingleProductCategoryItem.vue?vue&type=template&id=700fc070&":
/*!*********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Admin/Products/SingleProduct/SingleProductCategoryItem.vue?vue&type=template&id=700fc070& ***!
  \*********************************************************************************************************************************************************************************************************************************************************/
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
    "span",
    [
      _vm.index > 0 ? _c("span", [_vm._v(",  ")]) : _vm._e(),
      _vm._v(" "),
      _c(
        "router-link",
        {
          staticClass: "single_product__category_item__link",
          attrs: {
            to: {
              name: "ProductsByCategory",
              params: {
                categoryEntity: _vm.entityName,
                slug: _vm.category.slug,
                categoryId: _vm.category.id,
                categoryName: _vm.category.name
              }
            }
          }
        },
        [_vm._v("\n        " + _vm._s(_vm.category.name) + "\n    ")]
      )
    ],
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

/***/ "./resources/js/components/Admin/Products/PhotoManager/PhotoManager.vue":
/*!******************************************************************************!*\
  !*** ./resources/js/components/Admin/Products/PhotoManager/PhotoManager.vue ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PhotoManager_vue_vue_type_template_id_364c82ef___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PhotoManager.vue?vue&type=template&id=364c82ef& */ "./resources/js/components/Admin/Products/PhotoManager/PhotoManager.vue?vue&type=template&id=364c82ef&");
/* harmony import */ var _PhotoManager_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PhotoManager.vue?vue&type=script&lang=js& */ "./resources/js/components/Admin/Products/PhotoManager/PhotoManager.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PhotoManager_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PhotoManager_vue_vue_type_template_id_364c82ef___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PhotoManager_vue_vue_type_template_id_364c82ef___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Admin/Products/PhotoManager/PhotoManager.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Admin/Products/PhotoManager/PhotoManager.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/components/Admin/Products/PhotoManager/PhotoManager.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PhotoManager_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./PhotoManager.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Products/PhotoManager/PhotoManager.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PhotoManager_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Admin/Products/PhotoManager/PhotoManager.vue?vue&type=template&id=364c82ef&":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/components/Admin/Products/PhotoManager/PhotoManager.vue?vue&type=template&id=364c82ef& ***!
  \*************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PhotoManager_vue_vue_type_template_id_364c82ef___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./PhotoManager.vue?vue&type=template&id=364c82ef& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Products/PhotoManager/PhotoManager.vue?vue&type=template&id=364c82ef&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PhotoManager_vue_vue_type_template_id_364c82ef___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PhotoManager_vue_vue_type_template_id_364c82ef___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Admin/Products/PhotoManager/PhotoManagerItem.vue":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/Admin/Products/PhotoManager/PhotoManagerItem.vue ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PhotoManagerItem_vue_vue_type_template_id_54dec5bc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PhotoManagerItem.vue?vue&type=template&id=54dec5bc& */ "./resources/js/components/Admin/Products/PhotoManager/PhotoManagerItem.vue?vue&type=template&id=54dec5bc&");
/* harmony import */ var _PhotoManagerItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PhotoManagerItem.vue?vue&type=script&lang=js& */ "./resources/js/components/Admin/Products/PhotoManager/PhotoManagerItem.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PhotoManagerItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PhotoManagerItem_vue_vue_type_template_id_54dec5bc___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PhotoManagerItem_vue_vue_type_template_id_54dec5bc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Admin/Products/PhotoManager/PhotoManagerItem.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Admin/Products/PhotoManager/PhotoManagerItem.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/components/Admin/Products/PhotoManager/PhotoManagerItem.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PhotoManagerItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./PhotoManagerItem.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Products/PhotoManager/PhotoManagerItem.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PhotoManagerItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Admin/Products/PhotoManager/PhotoManagerItem.vue?vue&type=template&id=54dec5bc&":
/*!*****************************************************************************************************************!*\
  !*** ./resources/js/components/Admin/Products/PhotoManager/PhotoManagerItem.vue?vue&type=template&id=54dec5bc& ***!
  \*****************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PhotoManagerItem_vue_vue_type_template_id_54dec5bc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./PhotoManagerItem.vue?vue&type=template&id=54dec5bc& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Products/PhotoManager/PhotoManagerItem.vue?vue&type=template&id=54dec5bc&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PhotoManagerItem_vue_vue_type_template_id_54dec5bc___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PhotoManagerItem_vue_vue_type_template_id_54dec5bc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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

/***/ "./resources/js/components/Admin/Products/SingleProduct/SingleProduct.vue":
/*!********************************************************************************!*\
  !*** ./resources/js/components/Admin/Products/SingleProduct/SingleProduct.vue ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SingleProduct_vue_vue_type_template_id_0cba921f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SingleProduct.vue?vue&type=template&id=0cba921f& */ "./resources/js/components/Admin/Products/SingleProduct/SingleProduct.vue?vue&type=template&id=0cba921f&");
/* harmony import */ var _SingleProduct_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SingleProduct.vue?vue&type=script&lang=js& */ "./resources/js/components/Admin/Products/SingleProduct/SingleProduct.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SingleProduct_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SingleProduct_vue_vue_type_template_id_0cba921f___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SingleProduct_vue_vue_type_template_id_0cba921f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Admin/Products/SingleProduct/SingleProduct.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Admin/Products/SingleProduct/SingleProduct.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/components/Admin/Products/SingleProduct/SingleProduct.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleProduct_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./SingleProduct.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Products/SingleProduct/SingleProduct.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleProduct_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Admin/Products/SingleProduct/SingleProduct.vue?vue&type=template&id=0cba921f&":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/components/Admin/Products/SingleProduct/SingleProduct.vue?vue&type=template&id=0cba921f& ***!
  \***************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleProduct_vue_vue_type_template_id_0cba921f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./SingleProduct.vue?vue&type=template&id=0cba921f& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Products/SingleProduct/SingleProduct.vue?vue&type=template&id=0cba921f&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleProduct_vue_vue_type_template_id_0cba921f___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleProduct_vue_vue_type_template_id_0cba921f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Admin/Products/SingleProduct/SingleProductCategoryItem.vue":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/Admin/Products/SingleProduct/SingleProductCategoryItem.vue ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SingleProductCategoryItem_vue_vue_type_template_id_700fc070___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SingleProductCategoryItem.vue?vue&type=template&id=700fc070& */ "./resources/js/components/Admin/Products/SingleProduct/SingleProductCategoryItem.vue?vue&type=template&id=700fc070&");
/* harmony import */ var _SingleProductCategoryItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SingleProductCategoryItem.vue?vue&type=script&lang=js& */ "./resources/js/components/Admin/Products/SingleProduct/SingleProductCategoryItem.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SingleProductCategoryItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SingleProductCategoryItem_vue_vue_type_template_id_700fc070___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SingleProductCategoryItem_vue_vue_type_template_id_700fc070___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Admin/Products/SingleProduct/SingleProductCategoryItem.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Admin/Products/SingleProduct/SingleProductCategoryItem.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************!*\
  !*** ./resources/js/components/Admin/Products/SingleProduct/SingleProductCategoryItem.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleProductCategoryItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./SingleProductCategoryItem.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Products/SingleProduct/SingleProductCategoryItem.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleProductCategoryItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Admin/Products/SingleProduct/SingleProductCategoryItem.vue?vue&type=template&id=700fc070&":
/*!***************************************************************************************************************************!*\
  !*** ./resources/js/components/Admin/Products/SingleProduct/SingleProductCategoryItem.vue?vue&type=template&id=700fc070& ***!
  \***************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleProductCategoryItem_vue_vue_type_template_id_700fc070___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./SingleProductCategoryItem.vue?vue&type=template&id=700fc070& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/Products/SingleProduct/SingleProductCategoryItem.vue?vue&type=template&id=700fc070&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleProductCategoryItem_vue_vue_type_template_id_700fc070___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleProductCategoryItem_vue_vue_type_template_id_700fc070___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Admin/Products/functions/scrollBigPhotos.js":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/Admin/Products/functions/scrollBigPhotos.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  scrollBigPhotos: function scrollBigPhotos(offset) {
    var wrapper = this.$refs.mobileMainPhotoDiv.getBoundingClientRect();
    var photoWidth = wrapper.right - wrapper.left;
    this.$refs.mobileMainPhotoDiv.scrollLeft = this.indexOfMainPhoto * photoWidth;
    var startX = this.$refs.mobileMainPhotoDiv.scrollLeft;
    this.indexOfMainPhoto += offset;

    if (offset < 0 && this.indexOfMainPhoto < 0) {
      this.indexOfMainPhoto = 0;
      return;
    }

    if (offset > 0 && this.indexOfMainPhoto >= this.numberOfPhotos) {
      this.indexOfMainPhoto = this.numberOfPhotos - 1;
      return;
    }

    this._scrollBigPhotos(offset, startX, photoWidth);
  },
  _scrollBigPhotos: function _scrollBigPhotos(offset, startX, photoWidth) {
    var _this = this;

    var _coveredDistance = Math.abs(this.$refs.mobileMainPhotoDiv.scrollLeft - startX);

    if (_coveredDistance > photoWidth - 10) {
      // 10 - возможная погрешность
      this.$refs.mobileMainPhotoDiv.scrollLeft = this.indexOfMainPhoto * photoWidth;
      return;
    }

    var step = 10; // px

    this.$refs.mobileMainPhotoDiv.scrollLeft += offset * step;
    setTimeout(function () {
      _this._scrollBigPhotos(offset, startX, photoWidth);
    }, 1);
  }
});

/***/ }),

/***/ "./resources/js/components/Admin/Products/functions/scrollSmallPhotos.js":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/Admin/Products/functions/scrollSmallPhotos.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  notScrolledAllTheWayToTheTop: function notScrolledAllTheWayToTheTop() {
    var _this$$refs;

    if (!(this !== null && this !== void 0 && (_this$$refs = this.$refs) !== null && _this$$refs !== void 0 && _this$$refs.smallPhotoDiv)) {
      return false;
    }

    return this.$refs.smallPhotoDiv.scrollTop > 5;
  },
  notScrolledAllTheWayToTheBottom: function notScrolledAllTheWayToTheBottom() {
    var _this$$refs2;

    if (!(this !== null && this !== void 0 && (_this$$refs2 = this.$refs) !== null && _this$$refs2 !== void 0 && _this$$refs2.smallPhotoDiv)) {
      return false;
    }

    var scrollTop = this.$refs.smallPhotoDiv.scrollTop;
    var clientHeight = this.$refs.smallPhotoDiv.clientHeight;
    var scrollHeight = this.$refs.smallPhotoDiv.scrollHeight;
    return scrollHeight - (scrollTop + clientHeight) > 10;
  },
  scrollSmallPhoto: function scrollSmallPhoto(distance, direction) {
    var coveredDistance = 0; // пройденное расстояние

    this._scrollSmallPhoto(distance, coveredDistance, direction);
  },
  _scrollSmallPhoto: function _scrollSmallPhoto(distance, coveredDistance, direction) {
    var _this = this;

    if (coveredDistance > distance) {
      return;
    }

    var step = 3; // px

    if (direction === 'down') {
      this.$refs.smallPhotoDiv.scrollTop -= step;
    } else {
      this.$refs.smallPhotoDiv.scrollTop += step;
    }

    coveredDistance += step;
    setTimeout(function () {
      _this._scrollSmallPhoto(distance, coveredDistance, direction);
    }, 1);
  }
});

/***/ }),

/***/ "./resources/js/components/Admin/Products/functions/viewLargePhoto.js":
/*!****************************************************************************!*\
  !*** ./resources/js/components/Admin/Products/functions/viewLargePhoto.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  startViewLargePhoto: function startViewLargePhoto() {
    if (!this.$refs.mainPhotoDiv) {
      return;
    }

    var wrapper = this.$refs.mainPhotoDiv.getBoundingClientRect(); //this.$refs.mainPhotoDiv.style.height = (wrapper.bottom - wrapper.top) + 'px';

    this.mainPhotoRatio = 1600 / (wrapper.right - wrapper.left); // 1600px ширина фото под лупой

    this.mainPhotoSizeIndex = 5;
  },
  viewLargePhoto: function viewLargePhoto(event) {
    if (!this.$refs.mainPhotoDiv) {
      return;
    }

    var photo = this.$refs.mainPhotoDiv.getBoundingClientRect();
    var xWay = event.x - photo.left;
    var yWay = event.y - photo.top;
    this.$refs.mainPhotoDiv.scrollLeft = xWay * this.mainPhotoRatio / 1.5;
    this.$refs.mainPhotoDiv.scrollTop = yWay * this.mainPhotoRatio / 1.5; // 1.5 ручной коэффициент, чтобы большое фото под лупой двигалось сразу
  },
  showInitialPhoto: function showInitialPhoto() {
    this.mainPhotoSizeIndex = 4;
    this.$refs.mainPhotoDiv.scrollLeft = 0;
    this.$refs.mainPhotoDiv.scrollTop = 0;
  }
});

/***/ }),

/***/ "./resources/js/components/Admin/Products/someComputed/computedForSingleProduct.js":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/Admin/Products/someComputed/computedForSingleProduct.js ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  noData: function noData() {
    var _this$singleProductFr;

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

    return this.singleProductFromServer.product.name;
  },
  getMainPhoto: function getMainPhoto() {
    if (this.noData) {
      return '';
    }

    var product = this.singleProductFromServer.product;
    var photoInfoArr = JSON.parse(product.photo_set);

    if (!photoInfoArr) {
      return '';
    }

    var folderName = "/storage/".concat(this.imgFolderPrefix, "5");
    var fileNamePrefix = "".concat(product.id, "s5-");
    var cssClass = "photo__size".concat(this.mainPhotoSizeIndex);
    var mainPhotoName = photoInfoArr[this.indexOfMainPhoto];
    return "<img alt=\"\"\n                    src=\"".concat(folderName, "/").concat(fileNamePrefix).concat(mainPhotoName, "\"\n                    class=\"").concat(cssClass, "\" />");
  },
  numberOfPhotos: function numberOfPhotos() {
    if (this.noData) {
      return 0;
    }

    var product = this.singleProductFromServer.product;
    var photoInfoArr = JSON.parse(product.photo_set);

    if (!photoInfoArr) {
      return 0;
    }

    return photoInfoArr.length;
  },
  getSmallPhotos: function getSmallPhotos() {
    if (this.noData) {
      return '';
    }

    var product = this.singleProductFromServer.product;
    var photoInfoArr = JSON.parse(product.photo_set);

    if (!photoInfoArr) {
      return '';
    }

    var folderName = "/storage/".concat(this.imgFolderPrefix, "5");
    var fileNamePrefix = "".concat(product.id, "s5-");
    var photoArr = photoInfoArr.map(function (timeName, index) {
      return "<img data-photoindex=\"".concat(index, "\" alt=\"\" src=\"").concat(folderName, "/").concat(fileNamePrefix).concat(timeName, "\" class=\"photo__size2\" />");
    });
    return photoArr.join('');
  },
  getAllBigPhotos: function getAllBigPhotos() {
    if (this.noData) {
      return '';
    }

    var product = this.singleProductFromServer.product;
    var photoInfoArr = JSON.parse(product.photo_set);

    if (!photoInfoArr) {
      return '';
    }

    var folderName = "/storage/".concat(this.imgFolderPrefix, "5");
    var fileNamePrefix = "".concat(product.id, "s5-");
    var photoArr = photoInfoArr.map(function (timeName, index) {
      return "<img alt=\"\" src=\"".concat(folderName, "/").concat(fileNamePrefix).concat(timeName, "\" class=\"photo__size4\" />");
    });
    return photoArr.join('');
  },
  getPrice: function getPrice() {
    var _parametersArr$price;

    if (this.noData) {
      return '';
    }

    var parametersArr = JSON.parse(this.singleProductFromServer.product.parameters);
    var price = (_parametersArr$price = parametersArr.price) !== null && _parametersArr$price !== void 0 ? _parametersArr$price : '';
    return price ? price + ' ₽' : '';
  },
  getCategories: function getCategories() {
    if (this.noData) {
      return '';
    }

    var parametersArr = JSON.parse(this.singleProductFromServer.product.parameters);
    return parametersArr.categories;
  },
  getMaterials: function getMaterials() {
    if (this.noData) {
      return '';
    }

    var parametersArr = JSON.parse(this.singleProductFromServer.product.parameters);
    return parametersArr.materials;
  },
  getColors: function getColors() {
    if (this.noData) {
      return '';
    }

    var parametersArr = JSON.parse(this.singleProductFromServer.product.parameters);
    return parametersArr.colors;
  },
  getDescription: function getDescription() {
    if (this.noData) {
      return '';
    }

    return this.singleProductFromServer.product.description.description;
  }
});

/***/ })

}]);