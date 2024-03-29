/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/public-js/app/productListApp.js":
/*!***************************************************!*\
  !*** ./resources/public-js/app/productListApp.js ***!
  \***************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _productListApp_myState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./productListApp/myState */ "./resources/public-js/app/productListApp/myState.js");
/* harmony import */ var _productListApp_myMutations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./productListApp/myMutations */ "./resources/public-js/app/productListApp/myMutations.js");
/* harmony import */ var _productListApp_myComponents__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./productListApp/myComponents */ "./resources/public-js/app/productListApp/myComponents.js");
/* harmony import */ var _productListApp_mutator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./productListApp/mutator */ "./resources/public-js/app/productListApp/mutator.js");
/* harmony import */ var _menu_menuVisibilityManager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../menu/menuVisibilityManager */ "./resources/public-js/menu/menuVisibilityManager.js");
/* harmony import */ var _menu_topDropMenuFiller__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../menu/topDropMenuFiller */ "./resources/public-js/menu/topDropMenuFiller.js");
/* harmony import */ var _menu_mobileMenu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../menu/mobileMenu */ "./resources/public-js/menu/mobileMenu.js");
/* harmony import */ var _auth_index_authKit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../auth/index-authKit */ "./resources/public-js/auth/index-authKit.js");
/* harmony import */ var _favoriteProducts_favoriteProductsSwitcher__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../favoriteProducts/favoriteProductsSwitcher */ "./resources/public-js/favoriteProducts/favoriteProductsSwitcher.js");
/* harmony import */ var _favoriteProducts_favoriteProductsTotalCountIndication__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../favoriteProducts/favoriteProductsTotalCountIndication */ "./resources/public-js/favoriteProducts/favoriteProductsTotalCountIndication.js");










var app = {
  state: _productListApp_myState__WEBPACK_IMPORTED_MODULE_0__["default"],
  mutations: _productListApp_myMutations__WEBPACK_IMPORTED_MODULE_1__["default"],
  mutator: new _productListApp_mutator__WEBPACK_IMPORTED_MODULE_3__["default"](),
  components: _productListApp_myComponents__WEBPACK_IMPORTED_MODULE_2__["default"]
};
app.mutator.app = app;
Object.keys(app.components).forEach(function (item) {
  app.components[item].setAppRef(app); // в классах будет this.components

  app.components[item].components = app.components; // в классах будет this.state

  app.components[item].state = app.state; // в классах будет this.commit();

  app.components[item].commit = app.mutator.commit;
});
new _favoriteProducts_favoriteProductsSwitcher__WEBPACK_IMPORTED_MODULE_8__["default"]();
new _favoriteProducts_favoriteProductsTotalCountIndication__WEBPACK_IMPORTED_MODULE_9__["default"]();
new _menu_menuVisibilityManager__WEBPACK_IMPORTED_MODULE_4__["default"]();
new _menu_topDropMenuFiller__WEBPACK_IMPORTED_MODULE_5__["default"]();
new _menu_mobileMenu__WEBPACK_IMPORTED_MODULE_6__["default"]();
Object(_auth_index_authKit__WEBPACK_IMPORTED_MODULE_7__["default"])();

/***/ }),

/***/ "./resources/public-js/app/productListApp/mutator.js":
/*!***********************************************************!*\
  !*** ./resources/public-js/app/productListApp/mutator.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Mutator; });
/* harmony import */ var _parentClasses_app_aware__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../parentClasses/app/aware */ "./resources/public-js/parentClasses/app/aware.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var Mutator = /*#__PURE__*/function (_Aware) {
  _inherits(Mutator, _Aware);

  var _super = _createSuper(Mutator);

  function Mutator() {
    _classCallCheck(this, Mutator);

    return _super.call(this);
  }

  _createClass(Mutator, [{
    key: "commit",
    value: function commit(mutationName, data) {
      this.app.mutations[mutationName](this.app.state, data);

      this.app.mutator._notifyObservers(mutationName);
    }
  }, {
    key: "_notifyObservers",
    value: function _notifyObservers(mutationName) {
      var _this = this;

      var checkMethods = {
        setViewMode: ['checkViewSettings'],
        setSortMode: ['checkSortSettings'],
        setSectionData: ['checkSectionSettings'],
        setMinPrice: ['checkSearchSettings'],
        setMaxPrice: ['checkSearchSettings'],
        setCategoriesIds: ['checkSearchSettings'],
        resetSearchSettings: ['checkSearchSettings'],
        setSectionProductsCount: ['checkPaginatorSettings'],
        setStartOffset: ['checkPaginatorSettings'],
        setPageNumber: ['checkPaginatorSettings'],
        setPageCount: ['checkPaginatorSettings'],
        setPerPage: []
      };
      var checkMethodList = checkMethods[mutationName];
      Object.keys(this.app.components).forEach(function (item) {
        checkMethodList.forEach(function (checkMethod) {
          _this.app.components[item][checkMethod]();
        });
      });
    }
  }]);

  return Mutator;
}(_parentClasses_app_aware__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./resources/public-js/app/productListApp/myComponents.js":
/*!****************************************************************!*\
  !*** ./resources/public-js/app/productListApp/myComponents.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _categorySource_categoryCache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../categorySource/categoryCache */ "./resources/public-js/categorySource/categoryCache.js");
/* harmony import */ var _productSource_productCache__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../productSource/productCache */ "./resources/public-js/productSource/productCache.js");
/* harmony import */ var _urlMaker_searchUrlMaker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../urlMaker/searchUrlMaker */ "./resources/public-js/urlMaker/searchUrlMaker.js");
/* harmony import */ var _urlMaker_publicUrlMaker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../urlMaker/publicUrlMaker */ "./resources/public-js/urlMaker/publicUrlMaker.js");
/* harmony import */ var _productSource_sorterOfCachedProducts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../productSource/sorterOfCachedProducts */ "./resources/public-js/productSource/sorterOfCachedProducts.js");
/* harmony import */ var _productSource_filterOfCachedProducts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../productSource/filterOfCachedProducts */ "./resources/public-js/productSource/filterOfCachedProducts.js");
/* harmony import */ var _viewedProducts_viewedProductsSummaryMaker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../viewedProducts/viewedProductsSummaryMaker */ "./resources/public-js/viewedProducts/viewedProductsSummaryMaker.js");
/* harmony import */ var _viewedProducts_viewedProductsAppender__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../viewedProducts/viewedProductsAppender */ "./resources/public-js/viewedProducts/viewedProductsAppender.js");
/* harmony import */ var _productQuickViewer_singleProductQuickViewer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../productQuickViewer/singleProductQuickViewer */ "./resources/public-js/productQuickViewer/singleProductQuickViewer.js");
/* harmony import */ var _productSource_sourceOfFilteredProducts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../productSource/sourceOfFilteredProducts */ "./resources/public-js/productSource/sourceOfFilteredProducts.js");
/* harmony import */ var _productList_listRenderers_rendererByViewMoreButton__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../productList/listRenderers/rendererByViewMoreButton */ "./resources/public-js/productList/listRenderers/rendererByViewMoreButton.js");
/* harmony import */ var _productList_paginationRenderer_paginationBlockRenderer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../productList/paginationRenderer/paginationBlockRenderer */ "./resources/public-js/productList/paginationRenderer/paginationBlockRenderer.js");
/* harmony import */ var _productList_listRenderers_rendererByPaginationButton__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../productList/listRenderers/rendererByPaginationButton */ "./resources/public-js/productList/listRenderers/rendererByPaginationButton.js");
/* harmony import */ var _productList_listRenderers_rendererBySectionLink__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../productList/listRenderers/rendererBySectionLink */ "./resources/public-js/productList/listRenderers/rendererBySectionLink.js");
/* harmony import */ var _productList_listRenderers_rendererOfViewedProductsByLink__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../productList/listRenderers/rendererOfViewedProductsByLink */ "./resources/public-js/productList/listRenderers/rendererOfViewedProductsByLink.js");
/* harmony import */ var _productList_listRenderers_rendererBySearchSettings__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../productList/listRenderers/rendererBySearchSettings */ "./resources/public-js/productList/listRenderers/rendererBySearchSettings.js");
/* harmony import */ var _productList_listRenderers_rendererBySortSettings__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../productList/listRenderers/rendererBySortSettings */ "./resources/public-js/productList/listRenderers/rendererBySortSettings.js");
/* harmony import */ var _productList_listRenderers_rendererByLinkOfOneProductItem__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../productList/listRenderers/rendererByLinkOfOneProductItem */ "./resources/public-js/productList/listRenderers/rendererByLinkOfOneProductItem.js");
/* harmony import */ var _h1Renderer_h1Renderer__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../h1Renderer/h1Renderer */ "./resources/public-js/h1Renderer/h1Renderer.js");
/* harmony import */ var _cssManager_cssManager__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../cssManager/cssManager */ "./resources/public-js/cssManager/cssManager.js");
/* harmony import */ var _menu_menuLinkCssMaker__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../menu/menuLinkCssMaker */ "./resources/public-js/menu/menuLinkCssMaker.js");
/* harmony import */ var _productList_viewMoreButton_viewMoreButtonManager__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../productList/viewMoreButton/viewMoreButtonManager */ "./resources/public-js/productList/viewMoreButton/viewMoreButtonManager.js");
/* harmony import */ var _productList_headerManager_headerVisibilityManager__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../productList/headerManager/headerVisibilityManager */ "./resources/public-js/productList/headerManager/headerVisibilityManager.js");
/* harmony import */ var _productList_productView_productViewSwitcher__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../productList/productView/productViewSwitcher */ "./resources/public-js/productList/productView/productViewSwitcher.js");
/* harmony import */ var _productList_productSorter_productSortMenuRenderer__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../productList/productSorter/productSortMenuRenderer */ "./resources/public-js/productList/productSorter/productSortMenuRenderer.js");
/* harmony import */ var _productList_productSorter_sortMenuVisibilityManager__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../productList/productSorter/sortMenuVisibilityManager */ "./resources/public-js/productList/productSorter/sortMenuVisibilityManager.js");
/* harmony import */ var _productList_productFilter_productFilterRenderer__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../productList/productFilter/productFilterRenderer */ "./resources/public-js/productList/productFilter/productFilterRenderer.js");
/* harmony import */ var _productList_productFilter_productFilterHandler__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../productList/productFilter/productFilterHandler */ "./resources/public-js/productList/productFilter/productFilterHandler.js");
/* harmony import */ var _productList_productFilter_searchSettingsObserverForProductFilterRenderer__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../../productList/productFilter/searchSettingsObserverForProductFilterRenderer */ "./resources/public-js/productList/productFilter/searchSettingsObserverForProductFilterRenderer.js");
/* harmony import */ var _productList_productFilter_totalIndicatorOfFilterParameters__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../../productList/productFilter/totalIndicatorOfFilterParameters */ "./resources/public-js/productList/productFilter/totalIndicatorOfFilterParameters.js");
/* harmony import */ var _productList_productFilter_topTotalSearchParametersRenderer__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../../productList/productFilter/topTotalSearchParametersRenderer */ "./resources/public-js/productList/productFilter/topTotalSearchParametersRenderer.js");
/* harmony import */ var _settings_settingsSetterOnPageLoad__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../../settings/settingsSetterOnPageLoad */ "./resources/public-js/settings/settingsSetterOnPageLoad.js");
/* harmony import */ var _favoriteProducts_favoriteProductsIndicationOnPageLoad__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../../favoriteProducts/favoriteProductsIndicationOnPageLoad */ "./resources/public-js/favoriteProducts/favoriteProductsIndicationOnPageLoad.js");
/* harmony import */ var _orderWindow_orderWindow__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ../../orderWindow/orderWindow */ "./resources/public-js/orderWindow/orderWindow.js");
/* harmony import */ var _waitingScreen__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ../../waitingScreen */ "./resources/public-js/waitingScreen.js");



































/* harmony default export */ __webpack_exports__["default"] = ({
  categoryCache: new _categorySource_categoryCache__WEBPACK_IMPORTED_MODULE_0__["default"](),
  productCache: new _productSource_productCache__WEBPACK_IMPORTED_MODULE_1__["default"](),
  sorterOfCachedProducts: new _productSource_sorterOfCachedProducts__WEBPACK_IMPORTED_MODULE_4__["default"](),
  filterOfCachedProducts: new _productSource_filterOfCachedProducts__WEBPACK_IMPORTED_MODULE_5__["default"](),
  sourceOfFilteredProducts: new _productSource_sourceOfFilteredProducts__WEBPACK_IMPORTED_MODULE_9__["default"](),
  // -------------------------------------------------------
  viewedProductsSummaryMaker: new _viewedProducts_viewedProductsSummaryMaker__WEBPACK_IMPORTED_MODULE_6__["default"](),
  viewedProductsAppender: new _viewedProducts_viewedProductsAppender__WEBPACK_IMPORTED_MODULE_7__["default"](),
  singleProductQuickViewer: new _productQuickViewer_singleProductQuickViewer__WEBPACK_IMPORTED_MODULE_8__["default"](),
  // -------------------------------------------------------
  rendererOfProductsByViewMoreButton: new _productList_listRenderers_rendererByViewMoreButton__WEBPACK_IMPORTED_MODULE_10__["default"](),
  rendererOfPaginationBlock: new _productList_paginationRenderer_paginationBlockRenderer__WEBPACK_IMPORTED_MODULE_11__["default"](),
  rendererOfProductsByPaginationButton: new _productList_listRenderers_rendererByPaginationButton__WEBPACK_IMPORTED_MODULE_12__["default"](),
  rendererOfProductsBySectionLink: new _productList_listRenderers_rendererBySectionLink__WEBPACK_IMPORTED_MODULE_13__["default"](),
  rendererOfViewedProductsByLink: new _productList_listRenderers_rendererOfViewedProductsByLink__WEBPACK_IMPORTED_MODULE_14__["default"](),
  rendererBySearchSettings: new _productList_listRenderers_rendererBySearchSettings__WEBPACK_IMPORTED_MODULE_15__["default"](),
  rendererBySortSettings: new _productList_listRenderers_rendererBySortSettings__WEBPACK_IMPORTED_MODULE_16__["default"](),
  rendererByLinkOfOneProductItem: new _productList_listRenderers_rendererByLinkOfOneProductItem__WEBPACK_IMPORTED_MODULE_17__["default"](),
  // -----------------------------------------
  searchUrlMaker: new _urlMaker_searchUrlMaker__WEBPACK_IMPORTED_MODULE_2__["default"](),
  publicUrlMaker: new _urlMaker_publicUrlMaker__WEBPACK_IMPORTED_MODULE_3__["default"](),
  // -----------------------------------------
  h1Renderer: new _h1Renderer_h1Renderer__WEBPACK_IMPORTED_MODULE_18__["default"](),
  cssManager: new _cssManager_cssManager__WEBPACK_IMPORTED_MODULE_19__["default"](),
  menuLinkCssMaker: new _menu_menuLinkCssMaker__WEBPACK_IMPORTED_MODULE_20__["default"](),
  viewMoreButtonManager: new _productList_viewMoreButton_viewMoreButtonManager__WEBPACK_IMPORTED_MODULE_21__["default"](),
  headerVisibilityManager: new _productList_headerManager_headerVisibilityManager__WEBPACK_IMPORTED_MODULE_22__["default"](),
  sortMenuVisibilityManager: new _productList_productSorter_sortMenuVisibilityManager__WEBPACK_IMPORTED_MODULE_25__["default"](),
  // -----------------------------------------
  sortMenuRenderer: new _productList_productSorter_productSortMenuRenderer__WEBPACK_IMPORTED_MODULE_24__["default"](),
  // -----------------------------------------
  viewSwitcher: new _productList_productView_productViewSwitcher__WEBPACK_IMPORTED_MODULE_23__["default"](),
  // -----------------------------------------
  productFilterRenderer: new _productList_productFilter_productFilterRenderer__WEBPACK_IMPORTED_MODULE_26__["default"](),
  productFilterHandler: new _productList_productFilter_productFilterHandler__WEBPACK_IMPORTED_MODULE_27__["default"](),
  searchSettingsObserverForFilterRenderer: new _productList_productFilter_searchSettingsObserverForProductFilterRenderer__WEBPACK_IMPORTED_MODULE_28__["default"](),
  totalIndicatorOfFilterParameters: new _productList_productFilter_totalIndicatorOfFilterParameters__WEBPACK_IMPORTED_MODULE_29__["default"](),
  topTotalSearchParametersRenderer: new _productList_productFilter_topTotalSearchParametersRenderer__WEBPACK_IMPORTED_MODULE_30__["default"](),
  // -----------------------------------------
  orderWindow: new _orderWindow_orderWindow__WEBPACK_IMPORTED_MODULE_33__["default"](),
  // -----------------------------------------
  // при загрузке страницы с сервера с поисковыми параметрами в url
  settingsSetterOnPageLoad: new _settings_settingsSetterOnPageLoad__WEBPACK_IMPORTED_MODULE_31__["default"](),
  favoriteProductsIndicationOnPageLoad: new _favoriteProducts_favoriteProductsIndicationOnPageLoad__WEBPACK_IMPORTED_MODULE_32__["default"](),
  waitingScreen: new _waitingScreen__WEBPACK_IMPORTED_MODULE_34__["default"]()
});

/***/ }),

/***/ "./resources/public-js/app/productListApp/myMutations.js":
/*!***************************************************************!*\
  !*** ./resources/public-js/app/productListApp/myMutations.js ***!
  \***************************************************************/
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

/* harmony default export */ __webpack_exports__["default"] = ({
  setViewMode: function setViewMode(state, value) {
    state.viewSettings.mode = value;
  },
  setSortMode: function setSortMode(state, value) {
    state.sortSettings.mode = value;
  },
  setSectionData: function setSectionData(state, data) {
    state.sectionSettings.productSectionName = data.sectionName;
    state.sectionSettings.additionalData = data.additionalData;
    state.sectionSettings.h1Text = data.h1Text;
  },
  setMinPrice: function setMinPrice(state, value) {
    state.searchSettings.minPrice = value;
  },
  setMaxPrice: function setMaxPrice(state, value) {
    state.searchSettings.maxPrice = value;
  },
  setCategoriesIds: function setCategoriesIds(state, value) {
    state.searchSettings.categoriesIds = _toConsumableArray(value);
  },
  resetSearchSettings: function resetSearchSettings(state) {
    state.searchSettings.minPrice = 0;
    state.searchSettings.maxPrice = 0;
    state.searchSettings.categoriesIds = [].concat();
  },
  setSectionProductsCount: function setSectionProductsCount(state, value) {
    state.paginatorSettings.sectionProductsCount = value;
  },
  setStartOffset: function setStartOffset(state, value) {
    state.paginatorSettings.startOffset = value;
  },
  setPageNumber: function setPageNumber(state, value) {
    state.paginatorSettings.pageNumber = value;
  },
  setPageCount: function setPageCount(state, value) {
    state.paginatorSettings.pageCount = value;
  },
  setPerPage: function setPerPage(state, value) {
    state.paginatorSettings.perPage = value;
  }
});

/***/ }),

/***/ "./resources/public-js/app/productListApp/myState.js":
/*!***********************************************************!*\
  !*** ./resources/public-js/app/productListApp/myState.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  viewSettings: {
    mode: 'smallView'
  },
  sortSettings: {
    mode: 'default'
  },
  sectionSettings: {
    productSectionName: '',
    additionalData: '',
    h1Text: ''
  },
  searchSettings: {
    minPrice: 0,
    maxPrice: 0,
    categoriesIds: []
  },
  paginatorSettings: {
    sectionProductsCount: 0,
    perPage: 3,
    pageCount: 0,
    pageNumber: 0,
    startOffset: 0
  }
});

/***/ }),

/***/ "./resources/public-js/auth/authAbsoluteMenu.js":
/*!******************************************************!*\
  !*** ./resources/public-js/auth/authAbsoluteMenu.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AuthAbsoluteMenu; });
/* harmony import */ var _parentClasses_visibleBlockByClick__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../parentClasses/visibleBlockByClick */ "./resources/public-js/parentClasses/visibleBlockByClick.js");
/* harmony import */ var _html_auth_getAuthAbsoluteMenuHtml__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../html/auth/getAuthAbsoluteMenuHtml */ "./resources/public-js/html/auth/getAuthAbsoluteMenuHtml.js");
/* harmony import */ var _register__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./register */ "./resources/public-js/auth/register.js");
/* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login */ "./resources/public-js/auth/login.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }






var AuthAbsoluteMenu = /*#__PURE__*/function (_VisibleBlockByClick) {
  _inherits(AuthAbsoluteMenu, _VisibleBlockByClick);

  var _super = _createSuper(AuthAbsoluteMenu);

  function AuthAbsoluteMenu(data) {
    var _this;

    _classCallCheck(this, AuthAbsoluteMenu);

    _this = _super.call(this, data);
    _this.wrapSelector = "#authAbsoluteMenu";
    _this.basicCss = 'auth_absolute_menu__wrapper';
    _this.showCss = 'show_block';
    _this.hideCss = 'hide_block';
    return _this;
  }

  _createClass(AuthAbsoluteMenu, [{
    key: "_getHtml",
    value: function _getHtml() {
      return Object(_html_auth_getAuthAbsoluteMenuHtml__WEBPACK_IMPORTED_MODULE_1__["default"])();
    }
  }, {
    key: "_additionalFirstRenderActions",
    value: function _additionalFirstRenderActions() {
      new _login__WEBPACK_IMPORTED_MODULE_3__["default"]({
        clickSourceSelector: '#loginLink'
      });
      new _register__WEBPACK_IMPORTED_MODULE_2__["default"]({
        clickSourceSelector: '#registerLink'
      });
    }
  }]);

  return AuthAbsoluteMenu;
}(_parentClasses_visibleBlockByClick__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./resources/public-js/auth/forgotPassword.js":
/*!****************************************************!*\
  !*** ./resources/public-js/auth/forgotPassword.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ForgotPassword; });
/* harmony import */ var _auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../auxiliaryFunctions/el */ "./resources/public-js/auxiliaryFunctions/el.js");
/* harmony import */ var _parentClasses_absoluteForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../parentClasses/absoluteForm */ "./resources/public-js/parentClasses/absoluteForm.js");
/* harmony import */ var _validation_forgotPasswordValidation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./validation/forgotPasswordValidation */ "./resources/public-js/auth/validation/forgotPasswordValidation.js");
/* harmony import */ var _html_auth_getForgotPasswordFormHtml__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../html/auth/getForgotPasswordFormHtml */ "./resources/public-js/html/auth/getForgotPasswordFormHtml.js");
/* harmony import */ var _message_absoluteMessageWithCloseIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../message/absoluteMessageWithCloseIcon */ "./resources/public-js/message/absoluteMessageWithCloseIcon.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }







var ForgotPassword = /*#__PURE__*/function (_AbsoluteForm) {
  _inherits(ForgotPassword, _AbsoluteForm);

  var _super = _createSuper(ForgotPassword);

  function ForgotPassword(data) {
    var _this;

    var postUrl = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '/forgot-password/send-reset-link';
    var successUrl = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

    _classCallCheck(this, ForgotPassword);

    _this = _super.call(this, data);
    _this.postUrl = postUrl;
    _this.successUrl = successUrl;
    _this.wrapSelector = '#forgotPasswordForm';
    _this.submitSelector = '#sendResetLinkSubmit';
    _this.reply = "\u0415\u0441\u043B\u0438 \u0412\u044B \u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u043E \u0443\u043A\u0430\u0437\u0430\u043B\u0438 \u0432\u0430\u0448\u0443 \u043F\u043E\u0447\u0442\u0443, \u0441\u0441\u044B\u043B\u043A\u0430 \u0431\u044B\u043B\u0430 \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0430. \u041F\u0440\u043E\u0432\u0435\u0440\u044C\u0442\u0435 \u043F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430 \u0412\u0430\u0448\u0443 \u043F\u043E\u0447\u0442\u0443.";
    _this.validationFunction = _validation_forgotPasswordValidation__WEBPACK_IMPORTED_MODULE_2__["default"];
    return _this;
  }

  _createClass(ForgotPassword, [{
    key: "_preRenderActions",
    value: function _preRenderActions() {
      Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])('#loginForm').className = "".concat(this.basicCss, " ").concat(this.hideCss);
    }
  }, {
    key: "_getHtml",
    value: function _getHtml() {
      return Object(_html_auth_getForgotPasswordFormHtml__WEBPACK_IMPORTED_MODULE_3__["default"])();
    }
  }, {
    key: "_ultimateSuccess",
    value: function _ultimateSuccess() {
      new _message_absoluteMessageWithCloseIcon__WEBPACK_IMPORTED_MODULE_4__["default"]({
        text: this.reply
      });
      Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])('#forgotPasswordForm').className = "".concat(this.basicCss, " ").concat(this.hideCss);
    }
  }, {
    key: "_ultimateFail",
    value: function _ultimateFail() {
      new _message_absoluteMessageWithCloseIcon__WEBPACK_IMPORTED_MODULE_4__["default"]({
        text: this.reply
      });
      Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])('#forgotPasswordForm').className = "".concat(this.basicCss, " ").concat(this.hideCss);
    }
  }, {
    key: "_getUserData",
    value: function _getUserData() {
      return {
        email: Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])('#forgotPasswordEmail').value
      };
    }
  }, {
    key: "_showErrors",
    value: function _showErrors(err) {
      if (!err) err = {};
      Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])('#forgotPasswordEmailErr').innerText = err.email ? err.email[0] : '';
    }
  }]);

  return ForgotPassword;
}(_parentClasses_absoluteForm__WEBPACK_IMPORTED_MODULE_1__["default"]);



/***/ }),

/***/ "./resources/public-js/auth/index-authKit.js":
/*!***************************************************!*\
  !*** ./resources/public-js/auth/index-authKit.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return authKit; });
/* harmony import */ var _auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../auxiliaryFunctions/el */ "./resources/public-js/auxiliaryFunctions/el.js");
/* harmony import */ var _authAbsoluteMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./authAbsoluteMenu */ "./resources/public-js/auth/authAbsoluteMenu.js");
/* harmony import */ var _passwordTypeChanger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./passwordTypeChanger */ "./resources/public-js/auth/passwordTypeChanger.js");
/* harmony import */ var _message_absoluteFlashMessage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../message/absoluteFlashMessage */ "./resources/public-js/message/absoluteFlashMessage.js");




function authKit() {
  // Register() и Login() инициализируются в AuthAbsoluteMenu()
  if (Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])('.personal_account__icon')) {
    new _authAbsoluteMenu__WEBPACK_IMPORTED_MODULE_1__["default"]({
      clickSourceSelector: '.personal_account__icon'
    });
  }

  if (Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])('.auth_page__change_password_type__wrapper')) {
    new _passwordTypeChanger__WEBPACK_IMPORTED_MODULE_2__["default"]({
      closedEyeSelector: ".auth_page__closed_eye_img",
      openedEyeSelector: ".auth_page__opened_eye_img",
      passwordInputSelector: "#password"
    });
  }

  if (Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])('#flashMessage')) {
    new _message_absoluteFlashMessage__WEBPACK_IMPORTED_MODULE_3__["default"]({
      text: Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])('#flashMessage').innerText,
      duration: 3500
    });
  }
}

/***/ }),

/***/ "./resources/public-js/auth/login.js":
/*!*******************************************!*\
  !*** ./resources/public-js/auth/login.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Login; });
/* harmony import */ var _auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../auxiliaryFunctions/el */ "./resources/public-js/auxiliaryFunctions/el.js");
/* harmony import */ var _parentClasses_absoluteForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../parentClasses/absoluteForm */ "./resources/public-js/parentClasses/absoluteForm.js");
/* harmony import */ var _html_auth_getLoginFormHtml__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../html/auth/getLoginFormHtml */ "./resources/public-js/html/auth/getLoginFormHtml.js");
/* harmony import */ var _html_auth_getFailedLoginHtml__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../html/auth/getFailedLoginHtml */ "./resources/public-js/html/auth/getFailedLoginHtml.js");
/* harmony import */ var _html_auth_getAuthenticatedMenuHtml__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../html/auth/getAuthenticatedMenuHtml */ "./resources/public-js/html/auth/getAuthenticatedMenuHtml.js");
/* harmony import */ var _validation_loginValidation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./validation/loginValidation */ "./resources/public-js/auth/validation/loginValidation.js");
/* harmony import */ var _message_absoluteFlashMessage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../message/absoluteFlashMessage */ "./resources/public-js/message/absoluteFlashMessage.js");
/* harmony import */ var _forgotPassword__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./forgotPassword */ "./resources/public-js/auth/forgotPassword.js");
/* harmony import */ var _passwordTypeChanger__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./passwordTypeChanger */ "./resources/public-js/auth/passwordTypeChanger.js");
/* harmony import */ var _cookie_getCookie__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../cookie/getCookie */ "./resources/public-js/cookie/getCookie.js");
/* harmony import */ var _cookie_setCookie__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../cookie/setCookie */ "./resources/public-js/cookie/setCookie.js");
/* harmony import */ var _favoriteProducts_favoriteProductsIndicationOnPageLoad__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../favoriteProducts/favoriteProductsIndicationOnPageLoad */ "./resources/public-js/favoriteProducts/favoriteProductsIndicationOnPageLoad.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }














var Login = /*#__PURE__*/function (_AbsoluteForm) {
  _inherits(Login, _AbsoluteForm);

  var _super = _createSuper(Login);

  function Login(data) {
    var _this;

    var postUrl = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '/login/do';
    var successUrl = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '/my';

    _classCallCheck(this, Login);

    _this = _super.call(this, data);
    _this.cookieLifetime = 8640000; // 100 дней

    _this.postUrl = postUrl;
    _this.successUrl = successUrl;
    _this.wrapSelector = '#loginForm';
    _this.submitSelector = '#loginSubmit';
    _this.validationFunction = _validation_loginValidation__WEBPACK_IMPORTED_MODULE_5__["default"];
    return _this;
  }

  _createClass(Login, [{
    key: "_preRenderActions",
    value: function _preRenderActions() {
      if (!Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])('#authAbsoluteMenu')) return;
      Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])('#authAbsoluteMenu').className = "auth_absolute_menu__wrapper hide_block";
    }
  }, {
    key: "_additionalFirstRenderActions",
    value: function _additionalFirstRenderActions() {
      new _forgotPassword__WEBPACK_IMPORTED_MODULE_7__["default"]({
        clickSourceSelector: '#forgotPasswordLink'
      });
      new _passwordTypeChanger__WEBPACK_IMPORTED_MODULE_8__["default"]({
        closedEyeSelector: "#closedEyeImg",
        openedEyeSelector: "#openedEyeImg",
        passwordInputSelector: "#loginPassword"
      });
    }
  }, {
    key: "_getHtml",
    value: function _getHtml() {
      return Object(_html_auth_getLoginFormHtml__WEBPACK_IMPORTED_MODULE_2__["default"])();
    }
  }, {
    key: "_ultimateSuccess",
    value: function _ultimateSuccess(data) {
      var _this2 = this;

      Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])('#authMenuContent').remove();
      var html = Object(_html_auth_getAuthenticatedMenuHtml__WEBPACK_IMPORTED_MODULE_4__["default"])(data.userName, data.isAdmin);
      Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])('#authMenu').insertAdjacentHTML('afterbegin', html);
      Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])(this.wrapSelector).className = "".concat(this.basicCss, " ").concat(this.hideCss);
      setTimeout(function () {
        Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])(_this2.wrapSelector).remove();
      }, 3000); // чтобы успел отработать hideCss

      new _message_absoluteFlashMessage__WEBPACK_IMPORTED_MODULE_6__["default"]({
        text: "\u0414\u043E\u0431\u0440\u043E \u043F\u043E\u0436\u0430\u043B\u043E\u0432\u0430\u0442\u044C, ".concat(data.userName),
        duration: 3500
      });
      Object(_cookie_setCookie__WEBPACK_IMPORTED_MODULE_10__["default"])('favoriteIds', String(data.mixedFavoriteIds), {
        'max-age': this.cookieLifetime
      });

      this._indicateFavoriteProductsAfterLogin();
    }
  }, {
    key: "_ultimateFail",
    value: function _ultimateFail() {
      this._turnOffAlarm();

      setTimeout(this._turnOnAlarm.bind(this), 1);

      this._showErrors({
        failedLogin: true
      });

      this.enabledTypeinValidation = true;
    }
  }, {
    key: "_getUserData",
    value: function _getUserData() {
      return {
        email: Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])('#loginEmail').value,
        password: Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])('#loginPassword').value,
        remember: Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])('#loginRemember').value,
        favoriteIds: Object(_cookie_getCookie__WEBPACK_IMPORTED_MODULE_9__["default"])('favoriteIds') // для слияния фронт (которые могут быть) и бэк favoriteIds

      };
    }
  }, {
    key: "_showErrors",
    value: function _showErrors(err) {
      if (!err) err = {};
      Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])('#loginEmailErr').innerText = err.email ? err.email[0] : '';
      Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])('#loginPasswordErr').innerText = err.password ? err.password[0] : '';

      if (Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])('#failedLoginErrorContent')) {
        Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])('#failedLoginErrorContent').remove();
      }

      if (err.failedLogin) {
        var html = Object(_html_auth_getFailedLoginHtml__WEBPACK_IMPORTED_MODULE_3__["default"])();
        Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])('#failedLoginErr').insertAdjacentHTML('afterbegin', html);
      }
    }
  }, {
    key: "_indicateFavoriteProductsAfterLogin",
    value: function _indicateFavoriteProductsAfterLogin() {
      new _favoriteProducts_favoriteProductsIndicationOnPageLoad__WEBPACK_IMPORTED_MODULE_11__["default"]();
      var idsStr = Object(_cookie_getCookie__WEBPACK_IMPORTED_MODULE_9__["default"])('favoriteIds');
      var total = Boolean(idsStr) ? idsStr.split(',').length : 0;
      Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])('.topMenu-favIcon-total').innerText = total;
    }
  }]);

  return Login;
}(_parentClasses_absoluteForm__WEBPACK_IMPORTED_MODULE_1__["default"]);



/***/ }),

/***/ "./resources/public-js/auth/passwordTypeChanger.js":
/*!*********************************************************!*\
  !*** ./resources/public-js/auth/passwordTypeChanger.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PasswordTypeChanger; });
/* harmony import */ var _auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../auxiliaryFunctions/el */ "./resources/public-js/auxiliaryFunctions/el.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var PasswordTypeChanger = /*#__PURE__*/function () {
  function PasswordTypeChanger(data) {
    var _this = this;

    _classCallCheck(this, PasswordTypeChanger);

    this.closedEyeSelector = data.closedEyeSelector;
    this.openedEyeSelector = data.openedEyeSelector;
    this.passwordInputSelector = data.passwordInputSelector;

    if (!Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])(this.closedEyeSelector)) {
      return;
    }

    if (!Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])(this.openedEyeSelector)) {
      return;
    }

    Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])(this.closedEyeSelector).addEventListener('click', function (e) {
      e.stopPropagation();

      _this._changePasswordType('toText');
    });
    Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])(this.openedEyeSelector).addEventListener('click', function (e) {
      e.stopPropagation();

      _this._changePasswordType('toPassword');
    });
  }

  _createClass(PasswordTypeChanger, [{
    key: "_changePasswordType",
    value: function _changePasswordType(direction) {
      if (direction === 'toText') {
        Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])(this.passwordInputSelector).type = 'text';
        Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])(this.closedEyeSelector).style.display = 'none';
        Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])(this.openedEyeSelector).style.display = 'block';
      } else {
        Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])(this.passwordInputSelector).type = 'password';
        Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])(this.closedEyeSelector).style.display = 'block';
        Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])(this.openedEyeSelector).style.display = 'none';
      }
    }
  }]);

  return PasswordTypeChanger;
}();



/***/ }),

/***/ "./resources/public-js/auth/register.js":
/*!**********************************************!*\
  !*** ./resources/public-js/auth/register.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Register; });
/* harmony import */ var _auxiliaryFunctions_el_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../auxiliaryFunctions/el.js */ "./resources/public-js/auxiliaryFunctions/el.js");
/* harmony import */ var _parentClasses_absoluteForm_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../parentClasses/absoluteForm.js */ "./resources/public-js/parentClasses/absoluteForm.js");
/* harmony import */ var _html_auth_getRegisterFormHtml_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../html/auth/getRegisterFormHtml.js */ "./resources/public-js/html/auth/getRegisterFormHtml.js");
/* harmony import */ var _validation_registerValidation_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./validation/registerValidation.js */ "./resources/public-js/auth/validation/registerValidation.js");
/* harmony import */ var _message_absoluteFlashMessage_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../message/absoluteFlashMessage.js */ "./resources/public-js/message/absoluteFlashMessage.js");
/* harmony import */ var _cookie_getCookie__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../cookie/getCookie */ "./resources/public-js/cookie/getCookie.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }








var Register = /*#__PURE__*/function (_AbsoluteForm) {
  _inherits(Register, _AbsoluteForm);

  var _super = _createSuper(Register);

  function Register(data) {
    var _this;

    var postUrl = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '/register';
    var successUrl = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '/my';

    _classCallCheck(this, Register);

    _this = _super.call(this, data);
    _this.postUrl = postUrl;
    _this.successUrl = successUrl;
    _this.wrapSelector = '#regForm';
    _this.submitSelector = '#regSubmit';
    _this.validationFunction = _validation_registerValidation_js__WEBPACK_IMPORTED_MODULE_3__["default"];
    return _this;
  }

  _createClass(Register, [{
    key: "_preRenderActions",
    value: function _preRenderActions() {
      if (!Object(_auxiliaryFunctions_el_js__WEBPACK_IMPORTED_MODULE_0__["default"])('#authAbsoluteMenu')) return;
      Object(_auxiliaryFunctions_el_js__WEBPACK_IMPORTED_MODULE_0__["default"])('#authAbsoluteMenu').className = "auth_absolute_menu__wrapper hide_block";
    }
  }, {
    key: "_getHtml",
    value: function _getHtml(data) {
      return Object(_html_auth_getRegisterFormHtml_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
    }
  }, {
    key: "_ultimateSuccess",
    value: function _ultimateSuccess() {
      var _this2 = this;

      new _message_absoluteFlashMessage_js__WEBPACK_IMPORTED_MODULE_4__["default"]({
        text: 'Регистрация создана',
        duration: 3500
      });
      setTimeout(function () {
        document.location.href = _this2.successUrl;
      }, 2000);
    }
  }, {
    key: "_ultimateFail",
    value: function _ultimateFail() {
      new _message_absoluteFlashMessage_js__WEBPACK_IMPORTED_MODULE_4__["default"]({
        text: 'Не удалось создать регистрацию',
        duration: 3500
      });
    }
  }, {
    key: "_getUserData",
    value: function _getUserData() {
      return {
        name: Object(_auxiliaryFunctions_el_js__WEBPACK_IMPORTED_MODULE_0__["default"])('#regName').value,
        email: Object(_auxiliaryFunctions_el_js__WEBPACK_IMPORTED_MODULE_0__["default"])('#regEmail').value,
        password: Object(_auxiliaryFunctions_el_js__WEBPACK_IMPORTED_MODULE_0__["default"])('#regPassword').value,
        password_confirmation: Object(_auxiliaryFunctions_el_js__WEBPACK_IMPORTED_MODULE_0__["default"])('#regPassword_confirmation').value,
        favoriteIds: Object(_cookie_getCookie__WEBPACK_IMPORTED_MODULE_5__["default"])('favoriteIds') // для записи фронт (которые могут быть) в бэк favoriteIds

      };
    }
  }, {
    key: "_showErrors",
    value: function _showErrors(err) {
      if (!err) err = {};
      Object(_auxiliaryFunctions_el_js__WEBPACK_IMPORTED_MODULE_0__["default"])('#regNameErr').innerText = err.name ? err.name[0] : '';
      Object(_auxiliaryFunctions_el_js__WEBPACK_IMPORTED_MODULE_0__["default"])('#regEmailErr').innerText = err.email ? err.email[0] : '';
      Object(_auxiliaryFunctions_el_js__WEBPACK_IMPORTED_MODULE_0__["default"])('#regPasswordErr').innerText = err.password ? err.password[0] : '';
      Object(_auxiliaryFunctions_el_js__WEBPACK_IMPORTED_MODULE_0__["default"])('#regPasswordConfirmationErr').innerText = err.password_confirmation ? err.password_confirmation[0] : '';
    }
  }]);

  return Register;
}(_parentClasses_absoluteForm_js__WEBPACK_IMPORTED_MODULE_1__["default"]);



/***/ }),

/***/ "./resources/public-js/auth/validation/forgotPasswordValidation.js":
/*!*************************************************************************!*\
  !*** ./resources/public-js/auth/validation/forgotPasswordValidation.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return forgotPasswordValidation; });
/* harmony import */ var _isEmailValid_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isEmailValid.js */ "./resources/public-js/auth/validation/isEmailValid.js");

function forgotPasswordValidation(data) {
  var err = {};

  if (data.email.length === 0) {
    if (!err.hasOwnProperty('email')) err.email = [];
    err.email.push('Пожалуйста заполните');
  }

  if (!Object(_isEmailValid_js__WEBPACK_IMPORTED_MODULE_0__["default"])(data.email)) {
    if (!err.hasOwnProperty('email')) err.email = [];
    err.email.push('Некорректный email');
  }

  if (Object.keys(err).length > 0) {
    return err;
  }

  return null;
}

/***/ }),

/***/ "./resources/public-js/auth/validation/isEmailValid.js":
/*!*************************************************************!*\
  !*** ./resources/public-js/auth/validation/isEmailValid.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isEmailValid; });
function isEmailValid(email) {
  var re = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;
  return re.test(email);
}

/***/ }),

/***/ "./resources/public-js/auth/validation/loginValidation.js":
/*!****************************************************************!*\
  !*** ./resources/public-js/auth/validation/loginValidation.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return loginValidation; });
/* harmony import */ var _isEmailValid_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isEmailValid.js */ "./resources/public-js/auth/validation/isEmailValid.js");

function loginValidation(user) {
  var err = {};

  if (user.email.length === 0) {
    if (!err.hasOwnProperty('email')) err.email = [];
    err.email.push('Пожалуйста заполните');
  }

  if (user.password.length === 0) {
    if (!err.hasOwnProperty('password')) err.password = [];
    err.password.push('Пожалуйста заполните');
  }

  if (!Object(_isEmailValid_js__WEBPACK_IMPORTED_MODULE_0__["default"])(user.email)) {
    if (!err.hasOwnProperty('email')) err.email = [];
    err.email.push('Некорректный email');
  }

  if (Object.keys(err).length > 0) {
    return err;
  }

  return null;
}

/***/ }),

/***/ "./resources/public-js/auth/validation/registerValidation.js":
/*!*******************************************************************!*\
  !*** ./resources/public-js/auth/validation/registerValidation.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return registerValidation; });
/* harmony import */ var _isEmailValid_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isEmailValid.js */ "./resources/public-js/auth/validation/isEmailValid.js");

function registerValidation(user) {
  var err = {};

  if (user.name.length === 0) {
    if (!err.hasOwnProperty('name')) err.name = [];
    err.name.push('Пожалуйста заполните');
  }

  if (user.email.length === 0) {
    if (!err.hasOwnProperty('email')) err.email = [];
    err.email.push('Пожалуйста заполните');
  }

  if (user.password.length === 0) {
    if (!err.hasOwnProperty('password')) err.password = [];
    err.password.push('Пожалуйста заполните');
  }

  if (user.password_confirmation.length === 0) {
    if (!err.hasOwnProperty('password_confirmation')) err.password_confirmation = [];
    err.password_confirmation.push('Пожалуйста заполните');
  }

  if (!Object(_isEmailValid_js__WEBPACK_IMPORTED_MODULE_0__["default"])(user.email)) {
    if (!err.hasOwnProperty('email')) err.email = [];
    err.email.push('Некорректный email');
  }

  if (user.password.length > 0 && user.password.length < 6) {
    if (!err.hasOwnProperty('password')) err.password = [];
    err.password.push('Не менее 6 символов');
  }

  if (user.password_confirmation.length > 0 && user.password.length > 0) {
    if (user.password_confirmation !== user.password) {
      if (!err.hasOwnProperty('password_confirmation')) err.password_confirmation = [];
      err.password_confirmation.push('Подтвержден неверно');
    }
  }

  if (Object.keys(err).length > 0) {
    return err;
  }

  return null;
}

/***/ }),

/***/ "./resources/public-js/auxiliaryFunctions/allProductsMustBeCached.js":
/*!***************************************************************************!*\
  !*** ./resources/public-js/auxiliaryFunctions/allProductsMustBeCached.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return allProductsMustBeCached; });
/* harmony import */ var _el__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./el */ "./resources/public-js/auxiliaryFunctions/el.js");

function allProductsMustBeCached() {
  if (!Object(_el__WEBPACK_IMPORTED_MODULE_0__["default"])('#productList')) {
    return false;
  }

  if (!Object(_el__WEBPACK_IMPORTED_MODULE_0__["default"])('#productList').dataset) {
    return false;
  }

  if (!Object(_el__WEBPACK_IMPORTED_MODULE_0__["default"])('#productList').dataset.cacheLimit) {
    return false;
  }

  if (!Object(_el__WEBPACK_IMPORTED_MODULE_0__["default"])('#productList').dataset.totalProductsCount) {
    return false;
  }

  var limitForCachingOfProductEntireList = Number(Object(_el__WEBPACK_IMPORTED_MODULE_0__["default"])('#productList').dataset.cacheLimit);
  var totalProductsCount = Number(Object(_el__WEBPACK_IMPORTED_MODULE_0__["default"])('#productList').dataset.totalProductsCount);
  return totalProductsCount < limitForCachingOfProductEntireList;
}

/***/ }),

/***/ "./resources/public-js/auxiliaryFunctions/el.js":
/*!******************************************************!*\
  !*** ./resources/public-js/auxiliaryFunctions/el.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return el; });
function el(selector) {
  return document.querySelector(selector);
}

/***/ }),

/***/ "./resources/public-js/auxiliaryFunctions/scrollDocument.js":
/*!******************************************************************!*\
  !*** ./resources/public-js/auxiliaryFunctions/scrollDocument.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return scrollDocument; });
/* harmony import */ var _el__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./el */ "./resources/public-js/auxiliaryFunctions/el.js");

function scrollDocument(distance, direction) {
  var coveredDistance = 0; // пройденное расстояние

  var scrollSpeedRatio = Number(Object(_el__WEBPACK_IMPORTED_MODULE_0__["default"])('#productList').dataset.scrollSpeedRatio); // коэф., установленный в админ-панели, определенный опытным путем (75),
  // чтобы скорость скролинга была приемлемой

  var step = Math.ceil(distance / scrollSpeedRatio);

  _scrollDocument(distance, coveredDistance, direction, step);
}

function _scrollDocument(distance, coveredDistance, direction, step) {
  if (coveredDistance > distance) {
    return;
  }

  if (direction === 'down') {
    window.scrollBy(0, step);
  } else {
    window.scrollBy(0, -step);
  }

  coveredDistance += step;
  setTimeout(function () {
    _scrollDocument(distance, coveredDistance, direction, step);
  }, 1);
}

/***/ }),

/***/ "./resources/public-js/categorySource/categoryCache.js":
/*!*************************************************************!*\
  !*** ./resources/public-js/categorySource/categoryCache.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CategoryCache; });
/* harmony import */ var _parentClasses_app_aware__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../parentClasses/app/aware */ "./resources/public-js/parentClasses/app/aware.js");
/* harmony import */ var _http_getJson__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http/getJson */ "./resources/public-js/http/getJson.js");
/* harmony import */ var _message_absoluteFlashMessage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../message/absoluteFlashMessage */ "./resources/public-js/message/absoluteFlashMessage.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }





var CategoryCache = /*#__PURE__*/function (_Aware) {
  _inherits(CategoryCache, _Aware);

  var _super = _createSuper(CategoryCache);

  function CategoryCache() {
    var _this;

    _classCallCheck(this, CategoryCache);

    _this = _super.call(this);
    _this.entireList = [];
    _this.entireListUrl = '/public-js/entire-category-list';
    return _this;
  }

  _createClass(CategoryCache, [{
    key: "getEntireList",
    value: function getEntireList() {
      var _this2 = this;

      if (this.entireList.length > 0) {
        return new Promise(function (resolve) {
          return resolve(_toConsumableArray(_this2.entireList));
        });
      }

      return this._loadEntireList().then(function (data) {
        return _toConsumableArray(data);
      });
    }
  }, {
    key: "_loadEntireList",
    value: function _loadEntireList() {
      var _this3 = this;

      return Object(_http_getJson__WEBPACK_IMPORTED_MODULE_1__["default"])(this.entireListUrl).then(function (data) {
        //console.log(data);
        _this3.entireList = _toConsumableArray(data.categories);
        return _toConsumableArray(data.categories);
      })["catch"](function () {
        new _message_absoluteFlashMessage__WEBPACK_IMPORTED_MODULE_2__["default"]({
          text: 'Не удалось загрузить категории',
          duration: 3500
        });
      });
    }
  }, {
    key: "getCachedCategories",
    value: function getCachedCategories() {
      return _toConsumableArray(this.entireList);
    }
  }]);

  return CategoryCache;
}(_parentClasses_app_aware__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./resources/public-js/cookie/getCookie.js":
/*!*************************************************!*\
  !*** ./resources/public-js/cookie/getCookie.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getCookie; });
function getCookie(name) {
  var matches = document.cookie.match(new RegExp("(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

/***/ }),

/***/ "./resources/public-js/cookie/setCookie.js":
/*!*************************************************!*\
  !*** ./resources/public-js/cookie/setCookie.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return setCookie; });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function setCookie(name, value) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  options = _objectSpread({
    path: '/'
  }, options);

  if (options.expires instanceof Date) {
    options.expires = options.expires.toUTCString();
  }

  var updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);
  Object.keys(options).forEach(function (optionKey) {
    updatedCookie += "; " + optionKey;
    var optionValue = options[optionKey];

    if (optionValue !== true) {
      updatedCookie += "=" + optionValue;
    }
  });
  document.cookie = updatedCookie;
}

/***/ }),

/***/ "./resources/public-js/cssManager/cssManager.js":
/*!******************************************************!*\
  !*** ./resources/public-js/cssManager/cssManager.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return headerVisibilityManager; });
/* harmony import */ var _auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../auxiliaryFunctions/el */ "./resources/public-js/auxiliaryFunctions/el.js");
/* harmony import */ var _parentClasses_app_aware__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../parentClasses/app/aware */ "./resources/public-js/parentClasses/app/aware.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var headerVisibilityManager = /*#__PURE__*/function (_Aware) {
  _inherits(headerVisibilityManager, _Aware);

  var _super = _createSuper(headerVisibilityManager);

  function headerVisibilityManager() {
    _classCallCheck(this, headerVisibilityManager);

    return _super.call(this);
  }

  _createClass(headerVisibilityManager, [{
    key: "checkSectionSettings",
    value: function checkSectionSettings() {
      var sectionName = this.state.sectionSettings.productSectionName;

      if (['singleProduct'].includes(sectionName)) {
        Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])('.content_wrapper').classList.add('content_wrapper_of_single_product');
      } else {
        Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])('.content_wrapper').classList.remove('content_wrapper_of_single_product');
      }
    }
  }]);

  return headerVisibilityManager;
}(_parentClasses_app_aware__WEBPACK_IMPORTED_MODULE_1__["default"]);



/***/ }),

/***/ "./resources/public-js/favoriteProducts/favoriteProductsIndicationOnPageLoad.js":
/*!**************************************************************************************!*\
  !*** ./resources/public-js/favoriteProducts/favoriteProductsIndicationOnPageLoad.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FavoriteProductsIndicationOnPageLoad; });
/* harmony import */ var _auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../auxiliaryFunctions/el */ "./resources/public-js/auxiliaryFunctions/el.js");
/* harmony import */ var _cookie_getCookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../cookie/getCookie */ "./resources/public-js/cookie/getCookie.js");
/* harmony import */ var _parentClasses_app_aware__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../parentClasses/app/aware */ "./resources/public-js/parentClasses/app/aware.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }





var FavoriteProductsIndicationOnPageLoad = /*#__PURE__*/function (_Aware) {
  _inherits(FavoriteProductsIndicationOnPageLoad, _Aware);

  var _super = _createSuper(FavoriteProductsIndicationOnPageLoad);

  function FavoriteProductsIndicationOnPageLoad() {
    var _this;

    _classCallCheck(this, FavoriteProductsIndicationOnPageLoad);

    _this = _super.call(this);
    _this.iconSrc = {
      notInFavorites: '/images/favoriteIcon.svg',
      inFavorites: '/images/filledFavoriteIcon.svg'
    };

    _this.displayFavoriteProducts();

    return _this;
  }

  _createClass(FavoriteProductsIndicationOnPageLoad, [{
    key: "displayFavoriteProducts",
    value: function displayFavoriteProducts() {
      var _this2 = this;

      var idsStr = Object(_cookie_getCookie__WEBPACK_IMPORTED_MODULE_1__["default"])('favoriteIds');

      if (!Boolean(idsStr)) {
        return;
      }

      var idsArr = idsStr.split(',');
      idsArr.forEach(function (productId) {
        var imgSelector = _this2._getIconImgSelector(productId);

        if (Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])(imgSelector)) {
          Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])(imgSelector).src = _this2.iconSrc.inFavorites;

          var wrapperSelector = _this2._getIconWrapperSelector(productId);

          if (!Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])(wrapperSelector).classList.contains("set_opacity")) {
            Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])(wrapperSelector).classList.add("set_opacity");
          }

          var textSelector = _this2._getIconTextSelector(productId);

          if (Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])(textSelector)) {
            Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])(textSelector).innerText = 'ИЗ ИЗБРАННОГО';
          }
        }
      });
    }
  }, {
    key: "_getIconWrapperSelector",
    value: function _getIconWrapperSelector(productId) {
      return "#favIcon-wrapper-".concat(productId);
    }
  }, {
    key: "_getIconImgSelector",
    value: function _getIconImgSelector(productId) {
      return "#favIcon-img-".concat(productId);
    }
  }, {
    key: "_getIconTextSelector",
    value: function _getIconTextSelector(productId) {
      return "#favIcon-text-".concat(productId);
    }
  }]);

  return FavoriteProductsIndicationOnPageLoad;
}(_parentClasses_app_aware__WEBPACK_IMPORTED_MODULE_2__["default"]);



/***/ }),

/***/ "./resources/public-js/favoriteProducts/favoriteProductsSwitcher.js":
/*!**************************************************************************!*\
  !*** ./resources/public-js/favoriteProducts/favoriteProductsSwitcher.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FavoriteProductsSwitcher; });
/* harmony import */ var _auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../auxiliaryFunctions/el */ "./resources/public-js/auxiliaryFunctions/el.js");
/* harmony import */ var _cookie_setCookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../cookie/setCookie */ "./resources/public-js/cookie/setCookie.js");
/* harmony import */ var _cookie_getCookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../cookie/getCookie */ "./resources/public-js/cookie/getCookie.js");
/* harmony import */ var _http_postJson__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../http/postJson */ "./resources/public-js/http/postJson.js");
/* harmony import */ var _parentClasses_app_aware__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../parentClasses/app/aware */ "./resources/public-js/parentClasses/app/aware.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }







var FavoriteProductsSwitcher = /*#__PURE__*/function () {
  function FavoriteProductsSwitcher() {
    var _this = this;

    _classCallCheck(this, FavoriteProductsSwitcher);

    this.cookieLifetime = 8640000; // 100 дней

    this.postUrl = '/public-js/favorite-products/post';
    this.disabledSubmit = false;
    this.iconSrc = {
      notInFavorites: '/images/favoriteIcon.svg',
      inFavorites: '/images/filledFavoriteIcon.svg'
    };
    Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])('body').addEventListener('click', function (e) {
      // id="favIcon-wrapper-$id" / id="favIcon-img-$id"
      if (!e.target.id) {
        return;
      }

      if (!['favIcon', 'quickProductFavIcon'].includes(e.target.id.split('-')[0])) {
        return;
      }

      var productId = parseInt(e.target.id.split('-')[2]);

      if (productId > 0) {
        _this._switch(productId);
      }
    });
  }

  _createClass(FavoriteProductsSwitcher, [{
    key: "_switch",
    value: function _switch(productId) {
      var idsStr = Object(_cookie_getCookie__WEBPACK_IMPORTED_MODULE_2__["default"])('favoriteIds');
      var idsArr = Boolean(idsStr) ? idsStr.split(',') : [];
      var index = idsArr.indexOf(String(productId));

      if (index === -1) {
        idsArr.push(String(productId));

        this._turnOnIcon(productId);
      } else {
        idsArr.splice(index, 1);

        this._turnOffIcon(productId);
      }

      var favoriteIds = idsArr.join(',');
      Object(_cookie_setCookie__WEBPACK_IMPORTED_MODULE_1__["default"])('favoriteIds', favoriteIds, {
        'max-age': this.cookieLifetime
      }); //console.log(favoriteIds);

      this._submit({
        productIds: favoriteIds
      });
    }
  }, {
    key: "_turnOnIcon",
    value: function _turnOnIcon(productId) {
      var imgSelector = this._getIconImgSelector(productId);

      var imgSelectorOfQuickProduct = this._getIconImgSelectorOfQuickProduct(productId);

      var wrapperSelector = this._getIconWrapperSelector(productId);

      var textSelector = this._getIconTextSelector(productId);

      var textSelectorOfQuickProduct = this._getIconTextSelectorOfQuickProduct(productId);

      if (Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])(imgSelector)) {
        Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])(imgSelector).src = this.iconSrc.inFavorites;
      }

      if (Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])(imgSelectorOfQuickProduct)) {
        Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])(imgSelectorOfQuickProduct).src = this.iconSrc.inFavorites;
      }

      if (Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])(wrapperSelector)) {
        Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])(wrapperSelector).classList.toggle("set_opacity");
      }

      if (Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])(textSelector)) {
        Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])(textSelector).innerText = 'ИЗ ИЗБРАННОГО';
      }

      if (Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])(textSelectorOfQuickProduct)) {
        Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])(textSelectorOfQuickProduct).innerText = 'ИЗ ИЗБРАННОГО';
      }
    }
  }, {
    key: "_turnOffIcon",
    value: function _turnOffIcon(productId) {
      var imgSelector = this._getIconImgSelector(productId);

      var imgSelectorOfQuickProduct = this._getIconImgSelectorOfQuickProduct(productId);

      var wrapperSelector = this._getIconWrapperSelector(productId);

      var textSelector = this._getIconTextSelector(productId);

      var textSelectorOfQuickProduct = this._getIconTextSelectorOfQuickProduct(productId);

      if (Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])(imgSelector)) {
        Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])(imgSelector).src = this.iconSrc.notInFavorites;
      }

      if (Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])(imgSelectorOfQuickProduct)) {
        Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])(imgSelectorOfQuickProduct).src = this.iconSrc.notInFavorites;
      }

      if (Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])(wrapperSelector)) {
        Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])(wrapperSelector).classList.toggle("set_opacity");
      }

      if (Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])(textSelector)) {
        Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])(textSelector).innerText = 'В ИЗБРАННОЕ';
      }

      if (Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])(textSelectorOfQuickProduct)) {
        Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])(textSelectorOfQuickProduct).innerText = 'В ИЗБРАННОЕ';
      }
    }
  }, {
    key: "_getIconWrapperSelector",
    value: function _getIconWrapperSelector(productId) {
      return "#favIcon-wrapper-".concat(productId);
    }
  }, {
    key: "_getIconImgSelector",
    value: function _getIconImgSelector(productId) {
      return "#favIcon-img-".concat(productId);
    }
  }, {
    key: "_getIconImgSelectorOfQuickProduct",
    value: function _getIconImgSelectorOfQuickProduct(productId) {
      return "#quickProductFavIcon-img-".concat(productId);
    }
  }, {
    key: "_getIconTextSelector",
    value: function _getIconTextSelector(productId) {
      return "#favIcon-text-".concat(productId);
    }
  }, {
    key: "_getIconTextSelectorOfQuickProduct",
    value: function _getIconTextSelectorOfQuickProduct(productId) {
      return "#quickProductFavIcon-text-".concat(productId);
    }
  }, {
    key: "_submit",
    value: function _submit(dataObject) {
      var _this2 = this;

      if (!this._getSubmitPermission()) {
        return;
      }

      Object(_http_postJson__WEBPACK_IMPORTED_MODULE_3__["default"])(this.postUrl, dataObject).then(function (data) {
        if (data.success === true) {
          Object(_cookie_setCookie__WEBPACK_IMPORTED_MODULE_1__["default"])('favoriteIds', data.finalIds, {
            'max-age': _this2.cookieLifetime
          });
        }
      });
    }
  }, {
    key: "_getSubmitPermission",
    value: function _getSubmitPermission() {
      var _this3 = this;

      // защита от частых отправок на 5 сек
      if (this.disabledSubmit) {
        return false;
      }

      this.disabledSubmit = true;
      setTimeout(function () {
        _this3.disabledSubmit = false;
      }, 5000);
      return true;
    }
  }]);

  return FavoriteProductsSwitcher;
}();



/***/ }),

/***/ "./resources/public-js/favoriteProducts/favoriteProductsTotalCountIndication.js":
/*!**************************************************************************************!*\
  !*** ./resources/public-js/favoriteProducts/favoriteProductsTotalCountIndication.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FavoriteProductsTotalCountIndication; });
/* harmony import */ var _auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../auxiliaryFunctions/el */ "./resources/public-js/auxiliaryFunctions/el.js");
/* harmony import */ var _cookie_getCookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../cookie/getCookie */ "./resources/public-js/cookie/getCookie.js");
/* harmony import */ var _parentClasses_app_aware__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../parentClasses/app/aware */ "./resources/public-js/parentClasses/app/aware.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





var FavoriteProductsTotalCountIndication = /*#__PURE__*/function () {
  function FavoriteProductsTotalCountIndication() {
    var _this = this;

    _classCallCheck(this, FavoriteProductsTotalCountIndication);

    // рендер при загрузке страницы
    this._renderFavoriteTotal();

    Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])('body').addEventListener('click', function (e) {
      // и рендер при клике на favIcon товаров
      if (!e.target.id) {
        return;
      }

      if (!['favIcon', 'quickProductFavIcon'].includes(e.target.id.split('-')[0])) {
        return;
      }

      _this._renderFavoriteTotal();
    });
  }

  _createClass(FavoriteProductsTotalCountIndication, [{
    key: "_renderFavoriteTotal",
    value: function _renderFavoriteTotal() {
      var idsStr = Object(_cookie_getCookie__WEBPACK_IMPORTED_MODULE_1__["default"])('favoriteIds');
      var totalCount = Boolean(idsStr) ? idsStr.split(',').length : 0;
      Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])('.topMenu-favIcon-total').innerText = totalCount;
    }
  }]);

  return FavoriteProductsTotalCountIndication;
}();



/***/ }),

/***/ "./resources/public-js/h1Renderer/h1Renderer.js":
/*!******************************************************!*\
  !*** ./resources/public-js/h1Renderer/h1Renderer.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return H1Renderer; });
/* harmony import */ var _auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../auxiliaryFunctions/el */ "./resources/public-js/auxiliaryFunctions/el.js");
/* harmony import */ var _parentClasses_app_aware__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../parentClasses/app/aware */ "./resources/public-js/parentClasses/app/aware.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var H1Renderer = /*#__PURE__*/function (_Aware) {
  _inherits(H1Renderer, _Aware);

  var _super = _createSuper(H1Renderer);

  function H1Renderer() {
    var _this;

    _classCallCheck(this, H1Renderer);

    _this = _super.call(this);
    _this.header = Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])('#productsH1');
    return _this;
  }

  _createClass(H1Renderer, [{
    key: "checkSectionSettings",
    value: function checkSectionSettings() {
      var h1Text = this.state.sectionSettings.h1Text;

      if (!h1Text) {
        h1Text = Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])('[data-logo="link"]').dataset.menuLinkTitleText;
      }

      this.header.innerText = h1Text;
    }
  }]);

  return H1Renderer;
}(_parentClasses_app_aware__WEBPACK_IMPORTED_MODULE_1__["default"]);



/***/ }),

/***/ "./resources/public-js/html/auth/getAuthAbsoluteMenuHtml.js":
/*!******************************************************************!*\
  !*** ./resources/public-js/html/auth/getAuthAbsoluteMenuHtml.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getAuthAbsoluteMenuHtml; });
function getAuthAbsoluteMenuHtml() {
  return "<div id=\"authAbsoluteMenu\">\n                <div class=\"auth_absolute_menu__header\">\n                    \u041B\u0438\u0447\u043D\u044B\u0439 \u043A\u0430\u0431\u0438\u043D\u0435\u0442\n                </div>\n                <div class=\"auth_absolute_menu__content\">\n                    <a id=\"loginLink\" href=\"/login\" class=\"auth_absolute_menu__link mr7\">\n                        \u0412\u043E\u0439\u0442\u0438\n                    </a>\n                    \u0438\u043B\u0438\n                    <a id=\"registerLink\" href=\"/register\" class=\"auth_absolute_menu__link ml7\">\n                        \u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C\u0441\u044F\n                    </a>\n                </div>\n            <div>";
}

/***/ }),

/***/ "./resources/public-js/html/auth/getAuthenticatedMenuHtml.js":
/*!*******************************************************************!*\
  !*** ./resources/public-js/html/auth/getAuthenticatedMenuHtml.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getAuthenticatedMenuHtml; });
function getAuthenticatedMenuHtml(userName, isAdmin) {
  var ellipsis = userName.length > 12 ? '...' : '';
  var userLink = isAdmin ? "<a href=\"/admin\" class=\"top_menu__link top_menu__link_auth nowrap\">Admin panel</a>" : "<a href=\"/my\" class=\"top_menu__link top_menu__link_auth nowrap\">".concat(userName.slice(0, 12)).concat(ellipsis, "</a>");
  return "<div id=\"authMenuContent\" class=\"display_flex\">\n                ".concat(userLink, "\n                <a href=\"/logout\" title=\"\u0412\u044B\u0439\u0442\u0438 \u0438\u0437 \u0430\u043A\u043A\u0430\u0443\u043D\u0442\u0430\" class=\"top_menu__link top_menu__link_account_exit\">\n                    <img alt=\"\" src=\"/images/accountExitIcon.svg\" class=\"account_exit__icon\">\n                </a>\n            </div>");
}

/***/ }),

/***/ "./resources/public-js/html/auth/getFailedLoginHtml.js":
/*!*************************************************************!*\
  !*** ./resources/public-js/html/auth/getFailedLoginHtml.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getFailedLoginHtml; });
function getFailedLoginHtml() {
  return "<div id=\"failedLoginErrorContent\" class=\"js_reg_form__failed_login_message\">\n                \u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u044B\u0439 \u043B\u043E\u0433\u0438\u043D \u0438\u043B\u0438 \u043F\u0430\u0440\u043E\u043B\u044C.\n            <div>";
}

/***/ }),

/***/ "./resources/public-js/html/auth/getForgotPasswordFormHtml.js":
/*!********************************************************************!*\
  !*** ./resources/public-js/html/auth/getForgotPasswordFormHtml.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getForgotPasswordFormHtml; });
function getForgotPasswordFormHtml() {
  return "<div id=\"forgotPasswordForm\">\n                <div class=\"js_reg_form__header\">\n                    \u0417\u0430\u0431\u044B\u043B\u0438 \u043F\u0430\u0440\u043E\u043B\u044C?\n                    <div class='js_reg_form__close'>&#215;</div>\n                </div>\n\n                <div id=\"sendResetLinkReply\" class=\"mt10\"></div>\n\n                <label for=\"forgotPasswordEmail\" class=\"js_reg_form__input__label\">\n                    \u0412\u0432\u0435\u0434\u0438\u0442\u0435 e-mail, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u0412\u044B \u0443\u043A\u0430\u0437\u0430\u043B\u0438 \u043F\u0440\u0438 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438,\n                    \u043E\u0442\u043F\u0440\u0430\u0432\u0438\u043C \u0412\u0430\u043C \u0441\u0441\u044B\u043B\u043A\u0443 \u0434\u043B\u044F \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u044F \u043D\u043E\u0432\u043E\u0433\u043E \u043F\u0430\u0440\u043E\u043B\u044F.\n                </label>\n                <input type='email' name='email' id='forgotPasswordEmail' required class=\"js_reg_form__input__text_input\">\n                <div id=\"forgotPasswordEmailErr\" class=\"js_reg_form__input__validation_message\"></div>\n\n                <button type=\"submit\" id='sendResetLinkSubmit' class=\"js_reg_form__submit_button mt18\">\n                    \u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C\n                </button>\n            <div>";
}

/***/ }),

/***/ "./resources/public-js/html/auth/getLoginFormHtml.js":
/*!***********************************************************!*\
  !*** ./resources/public-js/html/auth/getLoginFormHtml.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getLoginFormHtml; });
/* harmony import */ var _getULoginWidgetHtml_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getULoginWidgetHtml.js */ "./resources/public-js/html/auth/getULoginWidgetHtml.js");

function getLoginFormHtml() {
  return "<div id=\"loginForm\">\n                <div class=\"js_reg_form__header\">\n                    \u0412\u0445\u043E\u0434 \u0434\u043B\u044F \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F\n                    <div class='js_reg_form__close'>&#215;</div>\n                </div>\n\n                <div id=\"failedLoginErr\" class=\"mt10\"></div>\n\n                <label for=\"loginEmail\" class=\"js_reg_form__input__label\">E-mail</label>\n                <input type='email' name='email' id='loginEmail' required class=\"js_reg_form__input__text_input\">\n                <div id=\"loginEmailErr\" class=\"js_reg_form__input__validation_message\"></div>\n\n\n                <label for=\"loginPassword\" class=\"js_reg_form__input__label\">\u041F\u0430\u0440\u043E\u043B\u044C</label>\n                <input type='password' name='password' id='loginPassword' required class=\"js_reg_form__input__text_input\">\n                <div class=\"height0 relative\">\n                    <img alt=\"\" src=\"/images/closedEye.svg\" id=\"closedEyeImg\" class=\"js_reg_form__closed_eye_img\">\n                    <img alt=\"\" src=\"/images/openedEye.svg\" id=\"openedEyeImg\" class=\"js_reg_form__opened_eye_img\">\n                </div>\n                <div id=\"loginPasswordErr\" class=\"js_reg_form__input__validation_message\"></div>\n\n\n\n                <input type=\"checkbox\" name=\"remember\" id=\"loginRemember\" value=\"1\" class=\"js_reg_form__checkbox_input\">\n                <label for=\"loginRemember\" class=\"js_reg_form__checkbox_label\">\u0417\u0430\u043F\u043E\u043C\u043D\u0438\u0442\u044C \u043C\u0435\u043D\u044F</label>\n\n                <div class=\"js_reg_form__submit_and_forgot_flex mt18\">\n                    <button type=\"submit\" id='loginSubmit' class=\"js_reg_form__submit_button\">\n                        \u0412\u043E\u0439\u0442\u0438\n                    </button>\n                    <a href=\"/forgot-password\" id=\"forgotPasswordLink\" class=\"js_reg_form__forgot_password_link\">\n                        \u0417\u0430\u0431\u044B\u043B\u0438 \u043F\u0430\u0440\u043E\u043B\u044C?\n                    </a>\n                </div>\n\n                <div class=\"js_reg_form__header mt20\">\n                    <a href=\"/uLoginWidget\" class=\"js_reg_form__social_login_link\">\n                        \u0412\u043E\u0439\u0442\u0438 \u0447\u0435\u0440\u0435\u0437 \u0441\u043E\u0446\u0441\u0435\u0442\u0438\n                    </a>\n                </div>\n                ".concat(Object(_getULoginWidgetHtml_js__WEBPACK_IMPORTED_MODULE_0__["default"])(), "\n            <div>");
}

/***/ }),

/***/ "./resources/public-js/html/auth/getRegisterFormHtml.js":
/*!**************************************************************!*\
  !*** ./resources/public-js/html/auth/getRegisterFormHtml.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getRegisterFormHtml; });
/* harmony import */ var _getULoginWidgetHtml_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getULoginWidgetHtml.js */ "./resources/public-js/html/auth/getULoginWidgetHtml.js");

function getRegisterFormHtml() {
  return "<div id=\"regForm\">\n                <div class=\"js_reg_form__header\">\n                    \u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F\n                    <div class='js_reg_form__close'>&#215;</div>\n                </div>\n                <label for=\"regName\" class=\"js_reg_form__input__label\">\u0412\u0430\u0448\u0435 \u0438\u043C\u044F</label>\n                <input type='text' name='name' id='regName' required class=\"js_reg_form__input__text_input\">\n                <div id=\"regNameErr\" class=\"js_reg_form__input__validation_message\"></div>\n\n                <label for=\"regEmail\" class=\"js_reg_form__input__label\">E-mail</label>\n                <input type='email' name='email' id='regEmail' required class=\"js_reg_form__input__text_input\">\n                <div id=\"regEmailErr\" class=\"js_reg_form__input__validation_message\"></div>\n\n                <label for=\"regPassword\" class=\"js_reg_form__input__label\">\u041F\u0430\u0440\u043E\u043B\u044C</label>\n                <input type='password' name='password' id='regPassword' required class=\"js_reg_form__input__text_input\">\n                <div id=\"regPasswordErr\" class=\"js_reg_form__input__validation_message\"></div>\n\n                <label for=\"regPassword_confirmation\" class=\"js_reg_form__input__label\">\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u0435 \u043F\u0430\u0440\u043E\u043B\u044C</label>\n                <input type='password' name='password_confirmation' id='regPassword_confirmation' required class=\"js_reg_form__input__text_input\">\n                <div id=\"regPasswordConfirmationErr\" class=\"js_reg_form__input__validation_message\"></div>\n\n                <button type=\"submit\" id='regSubmit' class=\"js_reg_form__submit_button mt18\">\n                   \u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C\u0441\u044F\n                </button>\n\n                <div class=\"js_reg_form__header mt20\">\n                    <a href=\"/uLoginWidget\" class=\"js_reg_form__social_login_link\">\n                        \u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F \u0447\u0435\u0440\u0435\u0437 \u0441\u043E\u0446\u0441\u0435\u0442\u0438\n                    </a>\n                </div>\n\n                ".concat(Object(_getULoginWidgetHtml_js__WEBPACK_IMPORTED_MODULE_0__["default"])(), "\n            <div>");
}

/***/ }),

/***/ "./resources/public-js/html/auth/getULoginWidgetHtml.js":
/*!**************************************************************!*\
  !*** ./resources/public-js/html/auth/getULoginWidgetHtml.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getULoginWidgetHtml; });
function getULoginWidgetHtml() {
  return '';
  /*
      return `<div class="js_reg_form__header mt30">
                      Регистрация через
              </div>`;
      return `<iframe src="/u-login/widget"
              scrolling="no"
              align="left"
              frameborder="0"
              class="js_reg_form__ulogin_iframe"></iframe>`;
  
      return `<script src="//ulogin.ru/js/ulogin.js"></script>
              <div id="uLogin" data-ulogin="display=panel;theme=flat;fields=first_name,last_name;
                  providers=vkontakte,odnoklassniki,yandex,mailru,google;
                  hidden=;
                  redirect_uri=http://${document.location.host}/u-login/response;mobilebuttons=0;"><div>`;
  */
}

/***/ }),

/***/ "./resources/public-js/html/getAbsoluteMessageWithCloseIconHtml.js":
/*!*************************************************************************!*\
  !*** ./resources/public-js/html/getAbsoluteMessageWithCloseIconHtml.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getAbsoluteMessageWithCloseIconHtml; });
function getAbsoluteMessageWithCloseIconHtml(css, id, text) {
  return "<div id=\"".concat(id, "\" class=\"").concat(css.basicCss, " ").concat(css.showCss, "\">\n                <div class=\"absolute_message__content\">\n                    ").concat(text, "\n                    <div class='absolute_message__close'>&#215;</div>\n                </div>\n            </div>");
}

/***/ }),

/***/ "./resources/public-js/html/menu/getDropMenuHtml.js":
/*!**********************************************************!*\
  !*** ./resources/public-js/html/menu/getDropMenuHtml.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getDropMenuHtml; });
function getDropMenuHtml(innerHtml) {
  return "<div id=\"topMenu-dropMenuWrapper\" class=\"top_menu__drop_menu show_block\">\n                <ul id=\"topMenu-dropMenuContent\" class=\"top_menu__drop_menu__ul\">\n                    ".concat(innerHtml, "\n                </ul>\n            </div>");
}

/***/ }),

/***/ "./resources/public-js/html/menu/getMobileMenuCollapseIconHtml.js":
/*!************************************************************************!*\
  !*** ./resources/public-js/html/menu/getMobileMenuCollapseIconHtml.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getMobileMenuCollapseIconHtml; });
function getMobileMenuCollapseIconHtml() {
  return "<p id=\"mobileMenuCollapseIconContent\" class=\"top_menu__mobile_menu_icon__content\">\n                <img alt=\"\"\n                     src=\"/images/collapseIcon.svg\"\n                     class=\"top_menu__mobile_menu_collapse_icon__img\">\n            </p>";
}

/***/ }),

/***/ "./resources/public-js/html/menu/getMobileMenuHtml.js":
/*!************************************************************!*\
  !*** ./resources/public-js/html/menu/getMobileMenuHtml.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getMobileMenuHtml; });
function getMobileMenuHtml(innerHtml) {
  return "<div id=\"mobileMenuWrapper\">\n                <ul id=\"mobileMenuContent\" class=\"mobile_menu__ul\">\n                    ".concat(innerHtml, "\n                </ul>\n            </div>");
}

/***/ }),

/***/ "./resources/public-js/html/orderWindow/getAddressHtml.js":
/*!****************************************************************!*\
  !*** ./resources/public-js/html/orderWindow/getAddressHtml.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getAddressHtml; });
function getAddressHtml(propValue) {
  if (propValue.length === 0) {
    return '';
  }

  return "<div class=\"order_window__contact_item\">\n                <div title=\"\u0410\u0434\u0440\u0435\u0441\" class=\"order_window__contact_item__title\">\n                    <img alt=\"\" src=\"/images/contactIcons/address.svg\"\n                        class=\"order_window__contact_item__icon\" />\n                </div>\n                <div class=\"order_window__contact_item__content\">\n                    <a href=\"https://yandex.ru/maps/?text=".concat(propValue, "\" target=_blank class=\"order_window__contact_item__link\">\n                        ").concat(propValue, "\n                    </a>\n                </div>\n            </div>");
}

/***/ }),

/***/ "./resources/public-js/html/orderWindow/getEmailHtml.js":
/*!**************************************************************!*\
  !*** ./resources/public-js/html/orderWindow/getEmailHtml.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getEmailHtml; });
/* harmony import */ var _getPurePhoneNumber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getPurePhoneNumber */ "./resources/public-js/html/orderWindow/getPurePhoneNumber.js");

function getEmailHtml(propValue, product) {
  if (propValue.length === 0) {
    return '';
  }

  var text = product ? "\u041B\u043E\u0442 \u043D\u043E\u043C\u0435\u0440 ".concat(product.id, " (").concat(product.name, ")") : '';
  var values = propValue.replaceAll(' ', '');
  var emailLinksArr = values.split(',').map(function (item) {
    return "<a href=\"mailto:".concat(item, "?subject=").concat(text, "&body=").concat(text, "\" class=\"order_window__contact_item__link\">\n                    ").concat(item, "\n                </a>");
  });
  return "<div class=\"order_window__contact_item\">\n                <div title=\"E-mail\" class=\"order_window__contact_item__title\">\n                    <img alt=\"\" src=\"/images/contactIcons/email.svg\"\n                        class=\"order_window__contact_item__icon\" />\n                </div>\n                <div class=\"order_window__contact_item__content\">\n                    ".concat(emailLinksArr.join(', '), "\n                </div>\n            </p>");
}

/***/ }),

/***/ "./resources/public-js/html/orderWindow/getFacebookHtml.js":
/*!*****************************************************************!*\
  !*** ./resources/public-js/html/orderWindow/getFacebookHtml.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getFacebookHtml; });
function getFacebookHtml(propValue) {
  if (propValue.length === 0) {
    return '';
  }

  var values = propValue.replaceAll(' ', '');
  var linksArr = values.split(',').map(function (item) {
    return "<a href=\"".concat(item, "\" target=_blank class=\"order_window__contact_item__link\">\n                        ").concat(item, "\n                </a>");
  });
  return "<div class=\"order_window__contact_item\">\n                <div title=\"Meta\" class=\"order_window__contact_item__title\">\n                    <img alt=\"\" src=\"/images/contactIcons/facebook.svg\"\n                        class=\"order_window__contact_item__icon\" />\n                </div>\n                <div class=\"order_window__contact_item__content\">\n                    ".concat(linksArr.join(', '), "\n                </div>\n            </div>");
}

/***/ }),

/***/ "./resources/public-js/html/orderWindow/getHeaderHtml.js":
/*!***************************************************************!*\
  !*** ./resources/public-js/html/orderWindow/getHeaderHtml.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getHeaderHtml; });
function getHeaderHtml(product) {
  if (!product) {
    return "<div class=\"order_window__header\">\n                    \u0421\u0432\u044F\u0437\u0430\u0442\u044C\u0441\u044F \u043F\u043E \u043F\u043E\u0432\u043E\u0434\u0443 \u0438\u0437\u0433\u043E\u0442\u043E\u0432\u043B\u0435\u043D\u0438\u044F \u0442\u043E\u0432\u0430\u0440\u0430 \u0438\u0437 \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u043D\u044B\u0445 \u043D\u0430 \u0441\u0430\u0439\u0442\u0435 \u0438\u043B\u0438 \u043F\u043E\u0445\u043E\u0436\u0435\u0433\u043E\n                </div>";
  }

  return "<div class=\"order_window__header\">\n                <span class=\"order_window__header__do_order\">\n                    \u0417\u0430\u043A\u0430\u0437\u0430\u0442\u044C\n                </span>\n                \u0422\u043E\u0432\u0430\u0440 \u2116 ".concat(product.id, "\n            </div>");
}

/***/ }),

/***/ "./resources/public-js/html/orderWindow/getOKHtml.js":
/*!***********************************************************!*\
  !*** ./resources/public-js/html/orderWindow/getOKHtml.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getOKHtml; });
function getOKHtml(propValue) {
  if (propValue.length === 0) {
    return '';
  }

  var values = propValue.replaceAll(' ', '');
  var linksArr = values.split(',').map(function (item) {
    return "<a href=\"".concat(item, "\" target=_blank class=\"order_window__contact_item__link\">\n                        ").concat(item, "\n                </a>");
  });
  return "<div class=\"order_window__contact_item\">\n                <div title=\"\u041E\u0434\u043D\u043E\u043A\u043B\u0430\u0441\u0441\u043D\u0438\u043A\u0438\" class=\"order_window__contact_item__title\">\n                    <img alt=\"\" src=\"/images/contactIcons/ok.png\"\n                        class=\"order_window__contact_item__icon\" />\n                </div>\n                <div class=\"order_window__contact_item__content\">\n                    ".concat(linksArr.join(', '), "\n                </div>\n            </div>");
}

/***/ }),

/***/ "./resources/public-js/html/orderWindow/getPhoneHtml.js":
/*!**************************************************************!*\
  !*** ./resources/public-js/html/orderWindow/getPhoneHtml.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getPhoneHtml; });
/* harmony import */ var _getPurePhoneNumber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getPurePhoneNumber */ "./resources/public-js/html/orderWindow/getPurePhoneNumber.js");

function getPhoneHtml(propValue) {
  if (propValue.length === 0) {
    return '';
  }

  var values = propValue.replaceAll(' ', '');
  var phoneLinksArr = values.split(',').map(function (item) {
    return "<a href=\"tel:".concat(Object(_getPurePhoneNumber__WEBPACK_IMPORTED_MODULE_0__["default"])(item), "\" class=\"order_window__contact_item__link\">\n                    ").concat(item, "\n                </a>");
  });
  return "<div class=\"order_window__contact_item\">\n                <div title=\"\u0422\u0435\u043B\u0435\u0444\u043E\u043D\" class=\"order_window__contact_item__title\">\n                    <img alt=\"\" src=\"/images/contactIcons/telephone.svg\"\n                        class=\"order_window__contact_item__icon\" />\n                </div>\n                <div class=\"order_window__contact_item__content\">\n                    ".concat(phoneLinksArr.join(', '), "\n                </div>\n            </div>");
}

/***/ }),

/***/ "./resources/public-js/html/orderWindow/getProductInfoHtml.js":
/*!********************************************************************!*\
  !*** ./resources/public-js/html/orderWindow/getProductInfoHtml.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getProductInfoHtml; });
function getProductInfoHtml(product) {
  if (!product) {
    return '';
  }

  return "<div class=\"order_window__photo_wrapper\">\n                ".concat(_getPhotoBlockHtml(product), "\n                <div class=\"order_window__product_name\">\n                    ").concat(product.name, "\n                </div>\n            </div>");
}

function _getPhotoBlockHtml(product) {
  if (!product.photos[0]) {
    return '';
  }

  var photoFolder = "/storage/products-photos-size3/";
  return "<div class=\"order_window__photo\">\n                <img src='".concat(photoFolder).concat(product.id, "s3-").concat(product.photos[0], "'\n                    alt=\"\"\n                    class=\"order_window__photo_img\"/>\n            </div>");
}

/***/ }),

/***/ "./resources/public-js/html/orderWindow/getPurePhoneNumber.js":
/*!********************************************************************!*\
  !*** ./resources/public-js/html/orderWindow/getPurePhoneNumber.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getPurePhoneNumber; });
function getPurePhoneNumber(value) {
  var allowed = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  var filtered = value.split('').filter(function (item) {
    return allowed.includes(item);
  });
  return "+7".concat(filtered.slice(1).join(''));
}

/***/ }),

/***/ "./resources/public-js/html/orderWindow/getTelegramHtml.js":
/*!*****************************************************************!*\
  !*** ./resources/public-js/html/orderWindow/getTelegramHtml.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getTelegramHtml; });
/* harmony import */ var _getPurePhoneNumber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getPurePhoneNumber */ "./resources/public-js/html/orderWindow/getPurePhoneNumber.js");

function getTelegramHtml(propValue) {
  if (propValue.length === 0) {
    return '';
  }

  var values = propValue.replaceAll(' ', '');
  var linksArr = values.split(',').map(function (value) {
    var domain = value[0] === '@' ? value.slice(1) : value;
    var nikName = value[0] === '@' ? value : "@".concat(value);
    return "<a href=\"tg://resolve?domain=".concat(domain, "\" class=\"order_window__contact_item__link\">\n                        ").concat(nikName, "\n                </a>");
  });
  return "<div class=\"order_window__contact_item\">\n                <div title=\"Telegram\" class=\"order_window__contact_item__title\">\n                    <img alt=\"\" src=\"/images/contactIcons/telegram.png\"\n                        class=\"order_window__contact_item__icon\" />\n                </div>\n                <div class=\"order_window__contact_item__content\">\n                    ".concat(linksArr.join(', '), "\n                </div>\n            </div>");
}

/***/ }),

/***/ "./resources/public-js/html/orderWindow/getVkontakeHtml.js":
/*!*****************************************************************!*\
  !*** ./resources/public-js/html/orderWindow/getVkontakeHtml.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getVkontakteHtml; });
function getVkontakteHtml(propValue) {
  if (propValue.length === 0) {
    return '';
  }

  var values = propValue.replaceAll(' ', '');
  var linksArr = values.split(',').map(function (item) {
    return "<a href=\"".concat(item, "\" target=_blank class=\"order_window__contact_item__link\">\n                        ").concat(item, "\n                </a>");
  });
  return "<div class=\"order_window__contact_item\">\n                <div title=\"\u0412\u043A\u043E\u043D\u0442\u0430\u043A\u0442\u0435\" class=\"order_window__contact_item__title\">\n                    <img alt=\"\" src=\"/images/contactIcons/vkontakte.svg\"\n                        class=\"order_window__contact_item__icon\" />\n                </div>\n                <div class=\"order_window__contact_item__content\">\n                    ".concat(linksArr.join(', '), "\n                </div>\n            </div>");
}

/***/ }),

/***/ "./resources/public-js/html/orderWindow/getWhatsappHtml.js":
/*!*****************************************************************!*\
  !*** ./resources/public-js/html/orderWindow/getWhatsappHtml.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getWhatsappHtml; });
/* harmony import */ var _getPurePhoneNumber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getPurePhoneNumber */ "./resources/public-js/html/orderWindow/getPurePhoneNumber.js");

function getWhatsappHtml(propValue, product) {
  if (propValue.length === 0) {
    return '';
  }

  var text = product ? "\u041B\u043E\u0442 \u043D\u043E\u043C\u0435\u0440 ".concat(product.id, " (").concat(product.name, ")") : '';
  var values = propValue.replaceAll(' ', '');
  var phoneLinksArr = values.split(',').map(function (item) {
    return "<a href=\"https://wa.me/".concat(Object(_getPurePhoneNumber__WEBPACK_IMPORTED_MODULE_0__["default"])(item), "?text=").concat(text, "\" class=\"order_window__contact_item__link\">\n                    ").concat(item, "\n                </a>");
  });
  return "<div class=\"order_window__contact_item\">\n                <div title=\"Whatsapp\" class=\"order_window__contact_item__title\">\n                    <img alt=\"\" src=\"/images/contactIcons/whatsapp.png\"\n                        class=\"order_window__contact_item__icon\" />\n                </div>\n                <div class=\"order_window__contact_item__content\">\n                    ".concat(phoneLinksArr.join(', '), "\n                </div>\n            </div>");
}

/***/ }),

/***/ "./resources/public-js/html/orderWindow/index-getOrderWindowHtml.js":
/*!**************************************************************************!*\
  !*** ./resources/public-js/html/orderWindow/index-getOrderWindowHtml.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getOrderWindowHtml; });
/* harmony import */ var _getHeaderHtml__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getHeaderHtml */ "./resources/public-js/html/orderWindow/getHeaderHtml.js");
/* harmony import */ var _getProductInfoHtml__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getProductInfoHtml */ "./resources/public-js/html/orderWindow/getProductInfoHtml.js");
/* harmony import */ var _getVkontakeHtml__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getVkontakeHtml */ "./resources/public-js/html/orderWindow/getVkontakeHtml.js");
/* harmony import */ var _getOKHtml__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getOKHtml */ "./resources/public-js/html/orderWindow/getOKHtml.js");
/* harmony import */ var _getFacebookHtml__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./getFacebookHtml */ "./resources/public-js/html/orderWindow/getFacebookHtml.js");
/* harmony import */ var _getEmailHtml__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./getEmailHtml */ "./resources/public-js/html/orderWindow/getEmailHtml.js");
/* harmony import */ var _getWhatsappHtml__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./getWhatsappHtml */ "./resources/public-js/html/orderWindow/getWhatsappHtml.js");
/* harmony import */ var _getTelegramHtml__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./getTelegramHtml */ "./resources/public-js/html/orderWindow/getTelegramHtml.js");
/* harmony import */ var _getPhoneHtml__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./getPhoneHtml */ "./resources/public-js/html/orderWindow/getPhoneHtml.js");
/* harmony import */ var _getAddressHtml__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./getAddressHtml */ "./resources/public-js/html/orderWindow/getAddressHtml.js");










function getOrderWindowHtml(product, contacts) {
  return "<div id=\"orderWindow\" class=\"order_window__wrapper show_block\">\n                <div class=\"order_window\">\n                    ".concat(Object(_getHeaderHtml__WEBPACK_IMPORTED_MODULE_0__["default"])(product), "\n                    ").concat(Object(_getProductInfoHtml__WEBPACK_IMPORTED_MODULE_1__["default"])(product), "\n                    ").concat(Object(_getAddressHtml__WEBPACK_IMPORTED_MODULE_9__["default"])(contacts.address), "\n                    ").concat(Object(_getPhoneHtml__WEBPACK_IMPORTED_MODULE_8__["default"])(contacts.phone), "\n                    ").concat(_getItem(contacts.phoneTime, 'Время для звонка', 'phoneTime.svg'), "\n                    ").concat(Object(_getWhatsappHtml__WEBPACK_IMPORTED_MODULE_6__["default"])(contacts.whatsapp, product), "\n                    ").concat(Object(_getTelegramHtml__WEBPACK_IMPORTED_MODULE_7__["default"])(contacts.tg), "\n                    ").concat(Object(_getVkontakeHtml__WEBPACK_IMPORTED_MODULE_2__["default"])(contacts.vkontakte), "\n                    ").concat(Object(_getOKHtml__WEBPACK_IMPORTED_MODULE_3__["default"])(contacts.ok), "\n                    ").concat(Object(_getFacebookHtml__WEBPACK_IMPORTED_MODULE_4__["default"])(contacts.meta), "\n                    ").concat(Object(_getEmailHtml__WEBPACK_IMPORTED_MODULE_5__["default"])(contacts.email, product), "\n\n                    <div class='order_window__collapse_icon'>&#215;</div>\n                </div>\n            </div>");
}

function _getItem(propValue, title, iconSrc) {
  if (propValue.length === 0) {
    return '';
  }

  return "<div class=\"order_window__contact_item\">\n                <div title=\"".concat(title, "\" class=\"order_window__contact_item__title\">\n                    <img alt=\"\" src=\"/images/contactIcons/").concat(iconSrc, "\"\n                        class=\"order_window__contact_item__icon\" />\n                </div>\n                <div class=\"order_window__contact_item__content\">\n                    ").concat(propValue, "\n                </div>\n            </div>");
}

/***/ }),

/***/ "./resources/public-js/html/productList/filterBlock/getCategoriesBlockHtmlForFilter.js":
/*!*********************************************************************************************!*\
  !*** ./resources/public-js/html/productList/filterBlock/getCategoriesBlockHtmlForFilter.js ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getCategoriesBlockHtmlForFilter; });
function getCategoriesBlockHtmlForFilter(categories) {
  var items = categories.map(function (item) {
    return _getCategoryItemHTML(item);
  });
  return items.join('');
}

function _getCategoryItemHTML(category) {
  return "<p class=\"product_filter__checkbox_input__item\">\n                <input type=\"checkbox\"\n                    data-product-filter-category-checkbox-input\n                    id=\"filterCategory".concat(category.id, "\"\n                    value=\"").concat(category.id, "\"\n                    class=\"product_filter__checkbox_input\">\n            <label for=\"filterCategory").concat(category.id, "\" class=\"product_filter__checkbox_label\">\n                ").concat(category.name, "\n            </label>\n    </p>");
}

/***/ }),

/***/ "./resources/public-js/html/productList/filterBlock/getFilterBlockHtml.js":
/*!********************************************************************************!*\
  !*** ./resources/public-js/html/productList/filterBlock/getFilterBlockHtml.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getFilterBlockHtml; });
function getFilterBlockHtml() {
  return "<div id=\"productFilterWrapper\">\n                <div class=\"product_filter__content\">\n\n                    <p class=\"product_filter__property_header\">\n                        \u0426\u0435\u043D\u0430, \u0440\u0443\u0431.\n                    </p>\n                    <div id=\"productFilterPriceSectionWrapper\" class=\"product_filter__price_section\">\n                        <div id=\"productFilterPriceSectionSpinner\" class=\"product_filter__spinner\">\n                            <img alt=\"\"\n                                src=\"/images/spinner.gif\"\n                                class=\"product_filter__spinner__img\">\n                        </div>\n                    </div>\n\n                    <p class=\"product_filter__property_header mt50\">\n                        \u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F\n                    </p>\n                    <div id=\"productFilterCategoriesWrapper\" class=\"product_filter__checkboxes_list\">\n                        <div id=\"productFilterCategoriesSpinner\" class=\"product_filter__spinner\">\n                            <img alt=\"\"\n                                src=\"/images/spinner.gif\"\n                                class=\"product_filter__spinner__img\">\n                        </div>\n                    </div>\n\n                    <button class=\"product_filter__ready_button mauto mt30\">\n                        \u0413\u043E\u0442\u043E\u0432\u043E\n                    </button>\n\n                    <div class='product_filter__collapse_icon'>\n                        &#215;\n                    </div>\n                </div>\n            </div>";
}

/***/ }),

/***/ "./resources/public-js/html/productList/filterBlock/getPriceBlockHtmlForFilter.js":
/*!****************************************************************************************!*\
  !*** ./resources/public-js/html/productList/filterBlock/getPriceBlockHtmlForFilter.js ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getPriceBlockHtmlForFilter; });
function getPriceBlockHtmlForFilter() {
  return "<div class=\"product_filter__price__text_input__wrapper\">\n                <input id=\"minPriceTextInput\" class=\"product_filter__price__text_input\"\n                    type=\"text\" maxlength=\"6\" value=\"\">\n                <input id=\"maxPriceTextInput\" class=\"product_filter__price__text_input\"\n                    type=\"text\" maxlength=\"6\" value=\"\">\n            </div>\n\n            <div class=\"product_filter__price__range_input__wrapper\">\n                <div class=\"product_filter__price__range_input__kernel\">&nbsp;</div>\n\n                <input id=\"minPriceRangeInput\"\n                    type=\"range\"\n                    class=\"product_filter__price__range_input product_filter__price__range_input_min\"\n                    min=\"\"\n                    step=\"100\"\n                    max=\"\"\n                    value=\"\"><br>\n                <input id=\"maxPriceRangeInput\"\n                    type=\"range\"\n                    class=\"product_filter__price__range_input product_filter__price__range_input_max\"\n                    min=\"\"\n                    step=\"100\"\n                    max=\"\"\n                    value=\"\">\n            </div>";
}

/***/ }),

/***/ "./resources/public-js/html/productList/productListItem/getFavoriteIconBlockHtml.js":
/*!******************************************************************************************!*\
  !*** ./resources/public-js/html/productList/productListItem/getFavoriteIconBlockHtml.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getFavoriteIconBlockHtml; });
function getFavoriteIconBlockHtml(productId) {
  return "<div id=\"favIcon-wrapper-".concat(productId, "\" class=\"product_item__favorite_icon__wrapper\">\n                <img id=\"favIcon-img-").concat(productId, "\" alt=\"\"\n                    src=\"/images/favoriteIcon.svg\"\n                    class=\"product_item__favorite_icon__img\">\n            </div>");
}

/***/ }),

/***/ "./resources/public-js/html/productList/productListItem/getListOfCategoriesHtml.js":
/*!*****************************************************************************************!*\
  !*** ./resources/public-js/html/productList/productListItem/getListOfCategoriesHtml.js ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getListOfCategoriesHtml; });
function getListOfCategoriesHtml(categoriesArr) {
  var catsArr = categoriesArr.map(function (item) {
    return "<a href='/products/".concat(item.slug, "'\n                   data-link-section-name='productCategory'\n                   data-link-category-id='").concat(item.id, "'\n                   data-link-category-slug='").concat(item.slug, "'\n                   data-link-category-name='").concat(item.name, "'\n                   class='product_item__category_link'>\n                      ").concat(item.name, "\n                </a>");
  });
  return catsArr.join(', ');
}

/***/ }),

/***/ "./resources/public-js/html/productList/productListItem/getListOfColorsHtml.js":
/*!*************************************************************************************!*\
  !*** ./resources/public-js/html/productList/productListItem/getListOfColorsHtml.js ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getListOfColorsHtml; });
function getListOfColorsHtml(colorsArr) {
  var catsArr = colorsArr.map(function (item) {
    return item.name;
  });
  return catsArr.join(', ');
}

/***/ }),

/***/ "./resources/public-js/html/productList/productListItem/getListOfMaterialsHtml.js":
/*!****************************************************************************************!*\
  !*** ./resources/public-js/html/productList/productListItem/getListOfMaterialsHtml.js ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getListOfMaterialsHtml; });
function getListOfMaterialsHtml(materialsArr) {
  var catsArr = materialsArr.map(function (item) {
    return item.name;
  });
  return catsArr.join(', ');
}

/***/ }),

/***/ "./resources/public-js/html/productList/productListItem/getNoPhotoBlockHtml.js":
/*!*************************************************************************************!*\
  !*** ./resources/public-js/html/productList/productListItem/getNoPhotoBlockHtml.js ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getNoPhotoBlockHtml; });
function getNoPhotoBlockHtml(product) {
  return "<a href='/product/".concat(product.slug, "-").concat(product.id, "'>\n                <img src='/images/nophoto.png'\n                    alt=\"\"\n                    data-product-item-link=\"").concat(product.id, "\"\n                    class=\"product_item__photo__img\"/>\n            </a>");
}

/***/ }),

/***/ "./resources/public-js/html/productList/productListItem/getPhotoBlockHtml.js":
/*!***********************************************************************************!*\
  !*** ./resources/public-js/html/productList/productListItem/getPhotoBlockHtml.js ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getPhotoBlockHtml; });
function getPhotoBlockHtml(product) {
  var photoFolder = "/storage/products-photos-size3/";
  return "<a href='/product/".concat(product.slug, "-").concat(product.id, "'>\n                <img src='").concat(photoFolder).concat(product.id, "s3-").concat(product.photos[0], "'\n                    alt=\"\"\n                    data-product-item-link=\"").concat(product.id, "\"\n                    class=\"product_item__photo__img\"/>\n            </a>");
}

/***/ }),

/***/ "./resources/public-js/html/productList/productListItem/index-getProductsItemHtml.js":
/*!*******************************************************************************************!*\
  !*** ./resources/public-js/html/productList/productListItem/index-getProductsItemHtml.js ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getProductsItemHtml; });
/* harmony import */ var _getFavoriteIconBlockHtml__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getFavoriteIconBlockHtml */ "./resources/public-js/html/productList/productListItem/getFavoriteIconBlockHtml.js");
/* harmony import */ var _getPhotoBlockHtml__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getPhotoBlockHtml */ "./resources/public-js/html/productList/productListItem/getPhotoBlockHtml.js");
/* harmony import */ var _getNoPhotoBlockHtml__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getNoPhotoBlockHtml */ "./resources/public-js/html/productList/productListItem/getNoPhotoBlockHtml.js");
/* harmony import */ var _getListOfCategoriesHtml__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getListOfCategoriesHtml */ "./resources/public-js/html/productList/productListItem/getListOfCategoriesHtml.js");
/* harmony import */ var _getListOfMaterialsHtml__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./getListOfMaterialsHtml */ "./resources/public-js/html/productList/productListItem/getListOfMaterialsHtml.js");
/* harmony import */ var _getListOfColorsHtml__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./getListOfColorsHtml */ "./resources/public-js/html/productList/productListItem/getListOfColorsHtml.js");






function getProductsItemHtml(product, viewMode) {
  var bigView = viewMode === 'bigView' ? 'big_view' : '';
  return "<div data-product-item=\"".concat(product.id, "\" class=\"product_item__wrapper ").concat(bigView, "\">\n               <div class=\"product_item\">\n\n                  <div class=\"product_item__content\">\n\n                      <div class=\"product_item__photo_wrapper\">\n                         <div class=\"product_item__quick_view_link__wrapper\">\n                            <a data-quick-view=\"").concat(product.id, "\"\n                               href='/product/").concat(product.slug, "-").concat(product.id, "'\n                               class=\"product_item__quick_view_link\">\n                                  \u0411\u044B\u0441\u0442\u0440\u044B\u0439 \u043F\u0440\u043E\u0441\u043C\u043E\u0442\u0440\n                            </a>\n                         </div>\n\n                         ").concat(product.photos.length > 0 ? Object(_getPhotoBlockHtml__WEBPACK_IMPORTED_MODULE_1__["default"])(product) : Object(_getNoPhotoBlockHtml__WEBPACK_IMPORTED_MODULE_2__["default"])(product), "\n                      </div>\n\n                      <div>\n                          <div class=\"product_item__price_and_order\">\n                              <div class=\"product_item__price\">\n                                 ").concat(product.price, " \u20BD\n                              </div>\n                              <div data-order-button=\"").concat(product.id, "\"\n                                 class=\"product_item__order_icon__wrapper\">\n                                 <img data-order-button=\"").concat(product.id, "\"\n                                    alt=\"\"\n                                    src=\"/images/orderIcon.svg\"\n                                    class=\"product_item__order_icon__img\">\n                              </div>\n                          </div>\n                          <div class=\"product_item__name\">\n                              <a href='/product/").concat(product.slug, "-").concat(product.id, "'\n                                  data-product-item-link=\"").concat(product.id, "\"\n                                  class=\"product_item__name__link\">\n                                  ").concat(product.name, "\n                              </a>\n                          </div>\n                      </div>\n\n\n                      <div class=\"product_item__bottom_info__relative_wrapper\">\n                          <div class=\"product_item__bottom_info__absolute\">\n                             <p title=\"\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F\" class=\"product_item__bottom_info__text\">\n                                ").concat(Object(_getListOfCategoriesHtml__WEBPACK_IMPORTED_MODULE_3__["default"])(product.categories), "\n                             </p>\n                             <p title=\"\u041C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\" class=\"product_item__bottom_info__text\">\n                                ").concat(Object(_getListOfMaterialsHtml__WEBPACK_IMPORTED_MODULE_4__["default"])(product.materials), "\n                             </p>\n                             <p title=\"\u0426\u0432\u0435\u0442\" class=\"product_item__bottom_info__text\">\n                                ").concat(Object(_getListOfColorsHtml__WEBPACK_IMPORTED_MODULE_5__["default"])(product.colors), "\n                             </p>\n                          </div>\n                      </div>\n\n                  </div>\n\n\n                  ").concat(Object(_getFavoriteIconBlockHtml__WEBPACK_IMPORTED_MODULE_0__["default"])(product.id), "\n\n               </div>\n            </div>");
}

/***/ }),

/***/ "./resources/public-js/html/productList/sorterBlock/getSorterBlockHtml.js":
/*!********************************************************************************!*\
  !*** ./resources/public-js/html/productList/sorterBlock/getSorterBlockHtml.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getSorterBlockHtml; });
function getSorterBlockHtml() {
  return "<div id=\"relativeWrapperOfSortingValues\" class=\"sorting_modes__relative_wrapper_for_drop_menu\">\n                <div id=\"absoluteListOfSortingValues\" class=\"sorting_modes__absolute_list\">\n                    <p data-sort-value=\"default\" class=\"sorting_modes__absolute_list__item\">\n                        \u041F\u043E \u043F\u043E\u043F\u0443\u043B\u044F\u0440\u043D\u043E\u0441\u0442\u0438\n                    </p>\n                    <p data-sort-value=\"priceUp\" class=\"sorting_modes__absolute_list__item\">\n                        \u0421\u043D\u0430\u0447\u0430\u043B\u0430 \u043D\u0435\u0434\u043E\u0440\u043E\u0433\u0438\u0435\n                    </p>\n                    <p data-sort-value=\"priceDown\" class=\"sorting_modes__absolute_list__item\">\n                        \u0421\u043D\u0430\u0447\u0430\u043B\u0430 \u0434\u043E\u0440\u043E\u0433\u0438\u0435\n                    </p>\n                </div>\n            </div>";
}

/***/ }),

/***/ "./resources/public-js/html/singleProduct/getBigPhotoBlockHtml.js":
/*!************************************************************************!*\
  !*** ./resources/public-js/html/singleProduct/getBigPhotoBlockHtml.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getBigPhotoBlockHtml; });
function getBigPhotoBlockHtml(productId, photosArr) {
  var photoCount = photosArr.length;
  return "<div class=\"single_product__big_photo__wrapper\">\n\n                <div id=\"mainPhotoContainer\" class=\"single_product__big_photo__content\">\n                    <img src=\"/storage/products-photos-size5/".concat(productId, "s5-").concat(photosArr[0], "\"\n                        alt=\"\"\n                        id=\"mainPhoto\"\n                        class=\"photo_size4\"/>\n                </div>\n\n                ").concat(photoCount > 1 ? "<div id=\"largePhotoScrollLeftButton\"\n                                class=\"single_product__big_photo__scroll_button single_product__big_photo__scroll_button_left display_none\">\n                                <div class=\"single_product__big_photo__scroll_button_left__content\">\n                                </div>\n                           </div>\n                           <div id=\"largePhotoScrollRightButton\"\n                                class=\"single_product__big_photo__scroll_button single_product__big_photo__scroll_button_right\">\n                                <div class=\"single_product__big_photo__scroll_button_right__content\">\n                                </div>\n                           </div>\n                           <div class=\"single_product__big_photo__photo_number_indicator\">\n                                <span id=\"photoNumberIndicator\">1</span>/".concat(photoCount, "\n                           </div>") : "", "\n\n            </div>");
}

/***/ }),

/***/ "./resources/public-js/html/singleProduct/getFavoriteIconBlockHtml.js":
/*!****************************************************************************!*\
  !*** ./resources/public-js/html/singleProduct/getFavoriteIconBlockHtml.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getFavoriteIconBlockHtml; });
/* harmony import */ var _cookie_getCookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../cookie/getCookie */ "./resources/public-js/cookie/getCookie.js");

function getFavoriteIconBlockHtml(productId) {
  var idsStr = Object(_cookie_getCookie__WEBPACK_IMPORTED_MODULE_0__["default"])('favoriteIds');
  var idsArr = Boolean(idsStr) ? idsStr.split(',') : [];
  var text, imgName;

  if (idsArr.includes(String(productId))) {
    text = 'ИЗ ИЗБРАННОГО';
    imgName = 'filledFavoriteIcon.svg';
  } else {
    text = 'В ИЗБРАННОЕ';
    imgName = 'favoriteIcon.svg';
  }

  return "<div id=\"quickProductFavIcon-wrapper-".concat(productId, "\" class=\"single_product__favorite_icon__wrapper\">\n                <img id=\"quickProductFavIcon-img-").concat(productId, "\" alt=\"\"\n                    src=\"/images/").concat(imgName, "\"\n                    class=\"single_product__favorite_icon__img\">\n                <span id=\"quickProductFavIcon-text-").concat(productId, "\" class=\"single_product__favorite_icon__text\">\n                    ").concat(text, "\n                </span>\n            </div>");
}

/***/ }),

/***/ "./resources/public-js/html/singleProduct/getListOfCategoriesHtml.js":
/*!***************************************************************************!*\
  !*** ./resources/public-js/html/singleProduct/getListOfCategoriesHtml.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getListOfCategoriesHtml; });
function getListOfCategoriesHtml(categoriesArr) {
  var catsArr = categoriesArr.map(function (item) {
    return "<a href='/products/".concat(item.slug, "'\n                   data-link-section-name='productCategory'\n                   data-link-category-id='").concat(item.id, "'\n                   data-link-category-slug='").concat(item.slug, "'\n                   data-link-category-name='").concat(item.name, "'\n                   class='single_product__category_item__link'>\n                      ").concat(item.name, "\n                </a>");
  });
  return catsArr.join(', ');
}

/***/ }),

/***/ "./resources/public-js/html/singleProduct/getListOfColorsHtml.js":
/*!***********************************************************************!*\
  !*** ./resources/public-js/html/singleProduct/getListOfColorsHtml.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getListOfColorsHtml; });
function getListOfColorsHtml(colorsArr) {
  var catsArr = colorsArr.map(function (item) {
    return item.name;
  });
  return catsArr.join(', ');
}

/***/ }),

/***/ "./resources/public-js/html/singleProduct/getListOfMaterialsHtml.js":
/*!**************************************************************************!*\
  !*** ./resources/public-js/html/singleProduct/getListOfMaterialsHtml.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getListOfMaterialsHtml; });
function getListOfMaterialsHtml(materialsArr) {
  var catsArr = materialsArr.map(function (item) {
    return item.name;
  });
  return catsArr.join(', ');
}

/***/ }),

/***/ "./resources/public-js/html/singleProduct/getOrderIconBlockHtml.js":
/*!*************************************************************************!*\
  !*** ./resources/public-js/html/singleProduct/getOrderIconBlockHtml.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getOrderIconBlockHtml; });
function getOrderIconBlockHtml(productId) {
  return "<div data-order-button=\"".concat(productId, "\" class=\"single_product__favorite_icon__wrapper\">\n               <img data-order-button=\"").concat(productId, "\" alt=\"\"\n                  src=\"/images/orderIcon.svg\"\n                  class=\"single_product__order_icon__img\">\n               <span data-order-button=\"").concat(productId, "\" class=\"single_product__favorite_icon__text\">\n                  \u0417\u0410\u041A\u0410\u0417\u0410\u0422\u042C\n               </span>\n            </div>");
}

/***/ }),

/***/ "./resources/public-js/html/singleProduct/getPhotoBlockHtml.js":
/*!*********************************************************************!*\
  !*** ./resources/public-js/html/singleProduct/getPhotoBlockHtml.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getPhotoBlockHtml; });
/* harmony import */ var _getSmallPhotosBlockHtml__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getSmallPhotosBlockHtml */ "./resources/public-js/html/singleProduct/getSmallPhotosBlockHtml.js");
/* harmony import */ var _getBigPhotoBlockHtml__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getBigPhotoBlockHtml */ "./resources/public-js/html/singleProduct/getBigPhotoBlockHtml.js");


function getPhotoBlockHtml(productId, photosArr) {
  var photoCount = photosArr.length;
  return "<section class=\"single_product__all_photo_wrapper\">\n                ".concat(photoCount > 1 ? Object(_getSmallPhotosBlockHtml__WEBPACK_IMPORTED_MODULE_0__["default"])(productId, photosArr) : "", "\n                ").concat(Object(_getBigPhotoBlockHtml__WEBPACK_IMPORTED_MODULE_1__["default"])(productId, photosArr), "\n            </section>");
}

/***/ }),

/***/ "./resources/public-js/html/singleProduct/getSmallPhotosBlockHtml.js":
/*!***************************************************************************!*\
  !*** ./resources/public-js/html/singleProduct/getSmallPhotosBlockHtml.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getSmallPhotosBlockHtml; });
function getSmallPhotosBlockHtml(productId, photosArr) {
  var photoCount = photosArr.length;
  return "<div class=\"single_product__small_photos__wrapper\">\n\n                ".concat(photoCount > 5 ? "<div id=\"smallPhotos-scrollButtonUp\"\n                            class=\"single_product__small_photos__scroll_button single_product__small_photos__scroll_button_top display_none\">\n                            <div class=\"single_product__small_photos__scroll_button_top__content\">\n                            </div>\n                          </div>" : "", "\n\n                <div id=\"smallPhotos\" class=\"single_product__small_photos\">\n                    ").concat(_getSmallPhotos(productId, photosArr), "\n                </div>\n\n                ").concat(photoCount > 5 ? "<div id=\"smallPhotos-scrollButtonDown\"\n                            class=\"single_product__small_photos__scroll_button single_product__small_photos__scroll_button_bottom\">\n                            <div class=\"single_product__small_photos__scroll_button_bottom__content\">\n                            </div>\n                          </div>" : "", "\n\n            </div>");
}

function _getSmallPhotos(productId, photosArr) {
  var smallPhotoFolder = "/storage/products-photos-size5/";
  var phArr = photosArr.map(function (item, i) {
    return "<img src='".concat(smallPhotoFolder).concat(productId, "s5-").concat(item, "'\n                    alt=''\n                    data-small-photo=\"").concat(i + 1, "\"\n                    class=\"photo_size2\"/>");
  });
  return phArr.join('');
}

/***/ }),

/***/ "./resources/public-js/html/singleProduct/index-getSingleProductHtml.js":
/*!******************************************************************************!*\
  !*** ./resources/public-js/html/singleProduct/index-getSingleProductHtml.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getSingleProductHtml; });
/* harmony import */ var _getOrderIconBlockHtml__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getOrderIconBlockHtml */ "./resources/public-js/html/singleProduct/getOrderIconBlockHtml.js");
/* harmony import */ var _getFavoriteIconBlockHtml__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getFavoriteIconBlockHtml */ "./resources/public-js/html/singleProduct/getFavoriteIconBlockHtml.js");
/* harmony import */ var _getPhotoBlockHtml__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getPhotoBlockHtml */ "./resources/public-js/html/singleProduct/getPhotoBlockHtml.js");
/* harmony import */ var _getListOfCategoriesHtml__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getListOfCategoriesHtml */ "./resources/public-js/html/singleProduct/getListOfCategoriesHtml.js");
/* harmony import */ var _getListOfMaterialsHtml__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./getListOfMaterialsHtml */ "./resources/public-js/html/singleProduct/getListOfMaterialsHtml.js");
/* harmony import */ var _getListOfColorsHtml__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./getListOfColorsHtml */ "./resources/public-js/html/singleProduct/getListOfColorsHtml.js");






function getSingleProductHtml(product) {
  //console.log(product);
  return "<div id=\"singleProduct\" class=\"single_product_page__content_wrapper\">\n                        <div class=\"single_product__content\">\n\n                            ".concat(product.photos.length > 0 ? Object(_getPhotoBlockHtml__WEBPACK_IMPORTED_MODULE_2__["default"])(product.id, product.photos) : '', "\n\n                            <section class=\"single_product__top_characteristics\n                                ").concat(product.photos.length > 0 ? 'single_product__top_characteristics__margin_left' : '', "\">\n\n                                <h1 class=\"single_product__h1\">\n                                    ").concat(product.name, "\n                                </h1>\n                                <div class=\"single_product__price\">\n                                    ").concat(product.price, " \u20BD\n                                </div>\n                                <div class=\"single_product__categories\">\n                                    \u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F:\n                                    ").concat(Object(_getListOfCategoriesHtml__WEBPACK_IMPORTED_MODULE_3__["default"])(product.categories), "\n                                </div>\n                                <div class=\"single_product__categories\">\n                                    \u041C\u0430\u0442\u0435\u0440\u0438\u0430\u043B:\n                                    ").concat(Object(_getListOfMaterialsHtml__WEBPACK_IMPORTED_MODULE_4__["default"])(product.materials), "\n                                </div>\n                                <div class=\"single_product__categories\">\n                                    \u0426\u0432\u0435\u0442:\n                                    ").concat(Object(_getListOfColorsHtml__WEBPACK_IMPORTED_MODULE_5__["default"])(product.colors), "\n                                </div>\n                                <div id=\"productDescriptionContainer\" class=\"single_product__description\">\n                                    ").concat(product.description, "\n                                </div>\n                                ").concat(Object(_getFavoriteIconBlockHtml__WEBPACK_IMPORTED_MODULE_1__["default"])(product.id), "\n                                ").concat(Object(_getOrderIconBlockHtml__WEBPACK_IMPORTED_MODULE_0__["default"])(product.id), "\n                            </section>\n\n                        </div>\n                    </div>");
}

/***/ }),

/***/ "./resources/public-js/html/viewedProductsSummary/getViewedProductsHeaderHtml.js":
/*!***************************************************************************************!*\
  !*** ./resources/public-js/html/viewedProductsSummary/getViewedProductsHeaderHtml.js ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getViewedProductHeaderHtml; });
function getViewedProductHeaderHtml(mobileVersion) {
  if (mobileVersion) {
    return "<div id=\"viewedProductsSummaryHeader\" class=\"viewed_products__wrapper__header\">\n                    <a href=\"/viewed-products\"\n                        data-viewed-products-link=\"1\"\n                        class=\"viewed_products__link\">\n                        \u0412\u044B \u043D\u0435\u0434\u0430\u0432\u043D\u043E \u0441\u043C\u043E\u0442\u0440\u0435\u043B\u0438 \u044D\u0442\u0438 \u0442\u043E\u0432\u0430\u0440\u044B\n                    </a>\n                    <span id=\"viewedTotalCount\" class=\"viewed_products__totalCount\"></span>\n                </div>";
  }

  return "<div id=\"viewedProductsSummaryHeader\" class=\"viewed_products__wrapper__header\">\n                <h2 class=\"viewed_products__wrapper__h2\">\u0412\u044B \u043D\u0435\u0434\u0430\u0432\u043D\u043E \u0441\u043C\u043E\u0442\u0440\u0435\u043B\u0438</h2>\n                <a href=\"/viewed-products\"\n                    data-viewed-products-link=\"1\"\n                    class=\"viewed_products__link\">\n                    \u0421\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u0432\u0441\u0435\n                </a>\n                <span id=\"viewedTotalCount\" class=\"viewed_products__totalCount\"></span>\n           </div>";
}

/***/ }),

/***/ "./resources/public-js/html/viewedProductsSummary/getViewedProductsItemHtml.js":
/*!*************************************************************************************!*\
  !*** ./resources/public-js/html/viewedProductsSummary/getViewedProductsItemHtml.js ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getViewedProductsItemHtml; });
function getViewedProductsItemHtml(product) {
  return "<div class=\"product_item__wrapper\">\n               <div class=\"product_item product_item__in_viewed_summary\">\n\n                  <div class=\"product_item__content\">\n                      <div class=\"product_item__photo_wrapper\">\n                          <div class=\"product_item__quick_view_link__wrapper product_item__quick_view_link__wrapper__in_viewed_summary\">\n                             <a data-quick-view=\"".concat(product.id, "\"\n                                href='/product/").concat(product.slug, "-").concat(product.id, "'\n                                class=\"product_item__quick_view_link product_item__quick_view_link__in_viewed_summary\">\n                                   \u0411\u044B\u0441\u0442\u0440\u044B\u0439 \u043F\u0440\u043E\u0441\u043C\u043E\u0442\u0440\n                             </a>\n                          </div>\n\n                         ").concat(product.photos.length > 0 ? _getPhotoBlockHtml(product) : _getNoPhotoBlockHtml(), "\n                      </div>\n\n\n                       <div>\n                          <div class=\"product_item__price_and_order\">\n                              <div class=\"product_item__price product_item__price__in_viewed_summary\">\n                                 ").concat(product.price, " \u20BD\n                              </div>\n                          </div>\n                          <div class=\"product_item__name\">\n                              <a href='/product/").concat(product.slug, "-").concat(product.id, "'\n                                  data-product-item-link=\"").concat(product.id, "\"\n                                  class=\"product_item__name__link product_item__name__link__in_viewed_summary\">\n                                  ").concat(product.name, "\n                              </a>\n                          </div>\n                      </div>\n                  </div>\n\n               </div>\n            </div>");
}

function _getPhotoBlockHtml(product) {
  var photoFolder = "/storage/products-photos-size3/";
  return "<a href='/product/".concat(product.slug, "-").concat(product.id, "'>\n                <img src='").concat(photoFolder).concat(product.id, "s3-").concat(product.photos[0], "'\n                    alt=\"\"\n                    data-product-item-link=\"").concat(product.id, "\"\n                    class=\"photo_size3 product_item__photo__in_viewed_summary\"/>\n           </a>");
}

function _getNoPhotoBlockHtml() {
  return "<div class=\"product_item__no_photo__in_viewed_summary\">\n                \u041D\u0415\u0422 \u0424\u041E\u0422\u041E\n            </div>";
}

/***/ }),

/***/ "./resources/public-js/http/getJson.js":
/*!*********************************************!*\
  !*** ./resources/public-js/http/getJson.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getJson; });
function getJson(url) {
  return fetch(url).then(function (result) {
    return result.json();
  })["catch"](function (error) {
    console.log(error);
  });
}

/***/ }),

/***/ "./resources/public-js/http/postJson.js":
/*!**********************************************!*\
  !*** ./resources/public-js/http/postJson.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return postJson; });
/* harmony import */ var _getJson__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getJson */ "./resources/public-js/http/getJson.js");

function postJson(url, data) {
  var csrfUrl = '/public-js/csrf';
  return Object(_getJson__WEBPACK_IMPORTED_MODULE_0__["default"])(csrfUrl).then(function (token) {
    return fetch(url, {
      method: 'POST',
      headers: {
        'X-CSRF-Token': token,
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(data)
    }).then(function (result) {
      return result.json();
    })["catch"](function (error) {
      console.log(error);
    });
  });
}

/***/ }),

/***/ "./resources/public-js/menu/menuLinkCssMaker.js":
/*!******************************************************!*\
  !*** ./resources/public-js/menu/menuLinkCssMaker.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MenuLinkCssMaker; });
/* harmony import */ var _auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../auxiliaryFunctions/el */ "./resources/public-js/auxiliaryFunctions/el.js");
/* harmony import */ var _parentClasses_app_aware__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../parentClasses/app/aware */ "./resources/public-js/parentClasses/app/aware.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var MenuLinkCssMaker = /*#__PURE__*/function (_Aware) {
  _inherits(MenuLinkCssMaker, _Aware);

  var _super = _createSuper(MenuLinkCssMaker);

  function MenuLinkCssMaker() {
    _classCallCheck(this, MenuLinkCssMaker);

    return _super.call(this);
  }

  _createClass(MenuLinkCssMaker, [{
    key: "checkSectionSettings",
    value: function checkSectionSettings() {
      this.resetMenuLinksCss();
      this.markActiveMenuLink();
    }
  }, {
    key: "resetMenuLinksCss",
    value: function resetMenuLinksCss() {
      var nodes = Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])('.top_menu').querySelectorAll('.top_menu__link');
      Object.values(nodes).forEach(function (node) {
        node.classList.remove('top_menu__link_active');
      });
      nodes = Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])('.bottom_menu').querySelectorAll('.bottom_menu__link');
      Object.values(nodes).forEach(function (node) {
        node.classList.remove('bottom_menu__link_active');
      });
      Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])('.logo__link').classList.remove('logo__link_active');
    }
  }, {
    key: "markActiveMenuLink",
    value: function markActiveMenuLink() {
      var settings = this.state.sectionSettings;
      var sectionName = settings.productSectionName;
      var additionalData = settings.additionalData;

      if (sectionName === 'productCategory') {
        var categorySlug = additionalData.split(';')[1];
        var topLink = Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])(".top_menu [data-menu-link-category-slug=".concat(categorySlug, "]"));
        var bottomLink = Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])(".bottom_menu [data-menu-link-category-slug=".concat(categorySlug, "]"));

        if (topLink) {
          topLink.classList.add('top_menu__link_active');
        }

        if (bottomLink) {
          bottomLink.classList.add('bottom_menu__link_active');
        }
      }

      if (sectionName === 'favoriteProducts') {
        var favIconLink = Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])(".top_menu__link_fav_icon");

        if (favIconLink) {
          favIconLink.classList.add('top_menu__link_active');
        }
      }

      if (sectionName === 'allProducts') {
        var logoLink = Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])(".logo__link");
        logoLink.classList.add('logo__link_active');
      }
    }
  }]);

  return MenuLinkCssMaker;
}(_parentClasses_app_aware__WEBPACK_IMPORTED_MODULE_1__["default"]);



/***/ }),

/***/ "./resources/public-js/menu/menuVisibilityManager.js":
/*!***********************************************************!*\
  !*** ./resources/public-js/menu/menuVisibilityManager.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MenuVisibilityManager; });
/* harmony import */ var _auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../auxiliaryFunctions/el */ "./resources/public-js/auxiliaryFunctions/el.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var MenuVisibilityManager = /*#__PURE__*/function () {
  function MenuVisibilityManager() {
    var _this = this;

    _classCallCheck(this, MenuVisibilityManager);

    this.menu = Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])('#topMainMenu');
    this.startYControl = 0;
    this.lastScrollY = 0;

    this._start();

    window.addEventListener('scroll', function () {
      _this._manage();
    });
  }

  _createClass(MenuVisibilityManager, [{
    key: "_start",
    value: function _start() {
      this.startYControl = this.menu.getBoundingClientRect().height + 10; //console.log(this.menu.getBoundingClientRect());
    }
  }, {
    key: "_manage",
    value: function _manage() {
      // если скролла нет
      if (Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])('body').scrollHeight <= window.innerHeight) {
        this._show();

        return;
      }

      var currentY = window.pageYOffset;

      if (this.menu && currentY < this.startYControl) {
        return;
      }

      var lastY = this.lastScrollY;
      this.lastScrollY = currentY;
      var direction = currentY > lastY ? 'down' : 'up';

      if (currentY < this.startYControl) {
        this._show();

        return;
      }

      if (direction === 'up') {
        this._show();
      } else {
        this._hide();
      }
    }
  }, {
    key: "_show",
    value: function _show() {
      //el('#topMainMenu').style.display = 'flex';
      this.menu.classList.remove('hide_menu');
      this.menu.classList.add('show_menu');
    }
  }, {
    key: "_hide",
    value: function _hide() {
      //el('#topMainMenu').style.display = 'none';
      this.menu.classList.remove('show_menu');
      this.menu.classList.add('hide_menu');
    }
  }]);

  return MenuVisibilityManager;
}();



/***/ }),

/***/ "./resources/public-js/menu/mobileMenu.js":
/*!************************************************!*\
  !*** ./resources/public-js/menu/mobileMenu.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MobileMenu; });
/* harmony import */ var _auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../auxiliaryFunctions/el */ "./resources/public-js/auxiliaryFunctions/el.js");
/* harmony import */ var _html_menu_getMobileMenuHtml_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../html/menu/getMobileMenuHtml.js */ "./resources/public-js/html/menu/getMobileMenuHtml.js");
/* harmony import */ var _html_menu_getMobileMenuCollapseIconHtml__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../html/menu/getMobileMenuCollapseIconHtml */ "./resources/public-js/html/menu/getMobileMenuCollapseIconHtml.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





var MobileMenu = /*#__PURE__*/function () {
  function MobileMenu() {
    var _this = this;

    _classCallCheck(this, MobileMenu);

    this.wrapSelector = '#mobileMenuWrapper';
    this.basicCss = 'mobile_menu__wrapper';
    this.showCss = 'show_block';
    this.hideCss = 'hide_block';
    this.menuIconSelector = '#mobileMenuIconContent';
    this.collapseIconSelector = '#mobileMenuCollapseIconContent';
    this.authMenuSelector = '.top_menu__li_auth';
    this.initiator = Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])('#mobileMenuIconWrapper');

    if (!this.initiator) {
      return;
    }

    this.initiator.addEventListener('click', function () {
      _this._render();
    });
  }

  _createClass(MobileMenu, [{
    key: "_render",
    value: function _render() {
      if (!Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])(this.wrapSelector)) {
        this._firstRender();

        this._setVisibilityToTrue();

        return;
      }

      if (Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])(this.wrapSelector).classList.contains(this.hideCss)) {
        this._setVisibilityToTrue();
      } else {
        this._setVisibilityToFalse();
      }
    }
  }, {
    key: "_firstRender",
    value: function _firstRender() {
      var innerHtml = Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])('#bottomMenu-allCategories').innerHTML;
      innerHtml = innerHtml.replaceAll("bottom_menu", "mobile_menu");
      var html = Object(_html_menu_getMobileMenuHtml_js__WEBPACK_IMPORTED_MODULE_1__["default"])(innerHtml);
      Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])('body').insertAdjacentHTML('beforeend', html);

      this._listenBodyTag();
    }
  }, {
    key: "_listenBodyTag",
    value: function _listenBodyTag() {
      var _this2 = this;

      Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])('body').addEventListener('click', function (e) {
        if (e.target.dataset.menuLinkSectionName) {
          // линки категорий содержат такой датасет
          _this2._setVisibilityToFalse();
        }
      });
    }
  }, {
    key: "_setVisibilityToTrue",
    value: function _setVisibilityToTrue() {
      if (!Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])(this.wrapSelector)) {
        return;
      }

      document.body.style.overflow = 'hidden';
      Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])(this.wrapSelector).className = "".concat(this.basicCss, " ").concat(this.showCss);

      this._switchMenuIcon();

      this._turnOnAuthMenu();
    }
  }, {
    key: "_setVisibilityToFalse",
    value: function _setVisibilityToFalse() {
      // только если блок видимый влиять на свойство overflow
      if (!Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])(this.wrapSelector).classList.contains(this.hideCss)) {
        document.body.style.overflow = 'auto';
      }

      Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])(this.wrapSelector).className = "".concat(this.basicCss, " ").concat(this.hideCss);

      this._switchMenuIcon();

      this._turnOffAuthMenu();
    }
  }, {
    key: "_switchMenuIcon",
    value: function _switchMenuIcon() {
      if (!Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])(this.collapseIconSelector)) {
        var html = Object(_html_menu_getMobileMenuCollapseIconHtml__WEBPACK_IMPORTED_MODULE_2__["default"])();
        Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])('#mobileMenuIconWrapper').insertAdjacentHTML('beforeend', html);
      }

      if (Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])(this.wrapSelector).classList.contains(this.showCss)) {
        this._turnOffMenuIcon();

        this._turnOnCollapseIcon();
      } else {
        this._turnOffCollapseIcon();

        this._turnOnMenuIcon();
      }
    }
  }, {
    key: "_turnOnMenuIcon",
    value: function _turnOnMenuIcon() {
      Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])(this.menuIconSelector).classList.remove('display_none');
    }
  }, {
    key: "_turnOffMenuIcon",
    value: function _turnOffMenuIcon() {
      Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])(this.menuIconSelector).classList.add('display_none');
    }
  }, {
    key: "_turnOnCollapseIcon",
    value: function _turnOnCollapseIcon() {
      Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])(this.collapseIconSelector).classList.remove('display_none');
    }
  }, {
    key: "_turnOffCollapseIcon",
    value: function _turnOffCollapseIcon() {
      Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])(this.collapseIconSelector).classList.add('display_none');
    }
  }, {
    key: "_turnOnAuthMenu",
    value: function _turnOnAuthMenu() {
      Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])(this.authMenuSelector).classList.remove('hide_block_forwards');
      Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])(this.authMenuSelector).classList.add('show_block_forwards');
    }
  }, {
    key: "_turnOffAuthMenu",
    value: function _turnOffAuthMenu() {
      Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])(this.authMenuSelector).classList.remove('show_block_forwards');
      Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])(this.authMenuSelector).classList.add('hide_block_forwards');
    }
  }]);

  return MobileMenu;
}();



/***/ }),

/***/ "./resources/public-js/menu/topDropMenuFiller.js":
/*!*******************************************************!*\
  !*** ./resources/public-js/menu/topDropMenuFiller.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TopDropMenuFiller; });
/* harmony import */ var _auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../auxiliaryFunctions/el */ "./resources/public-js/auxiliaryFunctions/el.js");
/* harmony import */ var _html_menu_getDropMenuHtml_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../html/menu/getDropMenuHtml.js */ "./resources/public-js/html/menu/getDropMenuHtml.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var TopDropMenuFiller = /*#__PURE__*/function () {
  function TopDropMenuFiller() {
    var _this = this;

    _classCallCheck(this, TopDropMenuFiller);

    this.initiatorContainer = Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])('#topMenu-dropMenuInitiator');

    if (!this.initiatorContainer) {
      return;
    }

    this.initiatorContainer.addEventListener('mouseover', function (e) {
      _this._fillMenu();
    });
  }

  _createClass(TopDropMenuFiller, [{
    key: "_fillMenu",
    value: function _fillMenu() {
      if (Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])('#topMenu-dropMenuWrapper')) {
        return;
      }

      var innerHtml = Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])('#bottomMenu-allCategories').innerHTML;
      var dropMenuHtml = Object(_html_menu_getDropMenuHtml_js__WEBPACK_IMPORTED_MODULE_1__["default"])(innerHtml);
      this.initiatorContainer.insertAdjacentHTML('beforeend', dropMenuHtml);
      var nodes = this.initiatorContainer.querySelectorAll('.bottom_menu__link');
      Object.values(nodes).forEach(function (node) {
        node.className = 'top_menu__drop_menu__link';
      });
    }
  }]);

  return TopDropMenuFiller;
}();



/***/ }),

/***/ "./resources/public-js/message/absoluteFlashMessage.js":
/*!*************************************************************!*\
  !*** ./resources/public-js/message/absoluteFlashMessage.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AbsoluteFlashMessage; });
/* harmony import */ var _auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../auxiliaryFunctions/el */ "./resources/public-js/auxiliaryFunctions/el.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var AbsoluteFlashMessage = /*#__PURE__*/function () {
  function AbsoluteFlashMessage(data) {
    _classCallCheck(this, AbsoluteFlashMessage);

    this.text = data.text;
    this.duration = data.duration;
    this.id = "absoluteMessage";
    this.selector = "#absoluteMessage";
    this.fadingTime = 700;

    this._render();
  }

  _createClass(AbsoluteFlashMessage, [{
    key: "_render",
    value: function _render() {
      var _this = this;

      this._removeHtml();

      var html = "<div id=\"".concat(this.id, "\" class=\"absolute_message__wrapper show_block\">\n                           <div class=\"absolute_message__content arial_sans-serif\">\n                                ").concat(this.text, "\n                           </div>\n                      </div>");
      Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])('body').insertAdjacentHTML('beforeend', html);
      setTimeout(function () {
        _this._hideHtml();
      }, this.duration - this.fadingTime);
    }
  }, {
    key: "_hideHtml",
    value: function _hideHtml() {
      var _this2 = this;

      if (Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])(this.selector)) {
        Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])(this.selector).classList.remove('show_block');
        Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])(this.selector).classList.add('hide_block');
      }

      setTimeout(function () {
        _this2._removeHtml();
      }, this.fadingTime);
    }
  }, {
    key: "_removeHtml",
    value: function _removeHtml() {
      if (Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])(this.selector)) {
        Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])(this.selector).remove();
      }
    }
  }]);

  return AbsoluteFlashMessage;
}();



/***/ }),

/***/ "./resources/public-js/message/absoluteMessageWithCloseIcon.js":
/*!*********************************************************************!*\
  !*** ./resources/public-js/message/absoluteMessageWithCloseIcon.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AbsoluteMessageWithCloseIcon; });
/* harmony import */ var _auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../auxiliaryFunctions/el */ "./resources/public-js/auxiliaryFunctions/el.js");
/* harmony import */ var _parentClasses_visibleBlock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../parentClasses/visibleBlock */ "./resources/public-js/parentClasses/visibleBlock.js");
/* harmony import */ var _html_getAbsoluteMessageWithCloseIconHtml__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../html/getAbsoluteMessageWithCloseIconHtml */ "./resources/public-js/html/getAbsoluteMessageWithCloseIconHtml.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }





var AbsoluteMessageWithCloseIcon = /*#__PURE__*/function (_VisibleBlock) {
  _inherits(AbsoluteMessageWithCloseIcon, _VisibleBlock);

  var _super = _createSuper(AbsoluteMessageWithCloseIcon);

  function AbsoluteMessageWithCloseIcon(data) {
    var _this;

    _classCallCheck(this, AbsoluteMessageWithCloseIcon);

    _this = _super.call(this, data);
    _this.text = data.text;
    _this.id = "absoluteMessageWithCloseIcon".concat(new Date().getTime());
    _this.wrapSelector = "#".concat(_this.id);
    _this.basicCss = 'absolute_message__wrapper';
    _this.showCss = 'show_block';
    _this.hideCss = 'hide_block';

    _this._render();

    return _this;
  }

  _createClass(AbsoluteMessageWithCloseIcon, [{
    key: "_getHtml",
    value: function _getHtml() {
      var css = {
        basicCss: this.basicCss,
        showCss: this.showCss
      };
      return Object(_html_getAbsoluteMessageWithCloseIconHtml__WEBPACK_IMPORTED_MODULE_2__["default"])(css, this.id, this.text);
    }
  }, {
    key: "_additionalHideActions",
    value: function _additionalHideActions() {
      var _this2 = this;

      setTimeout(function () {
        Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])(_this2.wrapSelector).remove();
      }, 1000);
    }
  }]);

  return AbsoluteMessageWithCloseIcon;
}(_parentClasses_visibleBlock__WEBPACK_IMPORTED_MODULE_1__["default"]);



/***/ }),

/***/ "./resources/public-js/message/frequentAbsoluteFlashMessage.js":
/*!*********************************************************************!*\
  !*** ./resources/public-js/message/frequentAbsoluteFlashMessage.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FrequentAbsoluteFlashMessage; });
/* harmony import */ var _auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../auxiliaryFunctions/el */ "./resources/public-js/auxiliaryFunctions/el.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var FrequentAbsoluteFlashMessage = /*#__PURE__*/function () {
  function FrequentAbsoluteFlashMessage() {
    _classCallCheck(this, FrequentAbsoluteFlashMessage);

    this.text = '';
    this.duration = 0;
    this.id = "frequentAbsoluteMessage";
    this.selector = "#frequentAbsoluteMessage";
    this.fadingTime = 700;
    this.deleteTimerId = 0;
    this.fadeTimerId = 0;
  }

  _createClass(FrequentAbsoluteFlashMessage, [{
    key: "render",
    value: function render(data) {
      var _this = this;

      this.text = data.text;
      this.duration = data.duration;
      clearTimeout(this.fadeTimerId);
      clearTimeout(this.deleteTimerId);

      this._removeMessage();

      var html = "<div id=\"".concat(this.id, "\" class=\"absolute_message__wrapper show_block\">\n                           <div class=\"absolute_message__content arial_sans-serif\">\n                                ").concat(this.text, "\n                           </div>\n                      </div>");
      Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])('body').insertAdjacentHTML('beforeend', html);
      this.fadeTimerId = setTimeout(function () {
        _this.hideMessage();
      }, this.duration - this.fadingTime); // 3500
    }
  }, {
    key: "hideMessage",
    value: function hideMessage() {
      var _this2 = this;

      if (!Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])(this.selector)) {
        return;
      }

      Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])(this.selector).classList.remove('show_block');
      Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])(this.selector).classList.add('hide_block');
      this.deleteTimerId = setTimeout(function () {
        _this2._removeMessage();
      }, this.fadingTime);
    }
  }, {
    key: "_removeMessage",
    value: function _removeMessage() {
      if (!Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])(this.selector)) {
        return;
      }

      Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])(this.selector).remove();
    }
  }]);

  return FrequentAbsoluteFlashMessage;
}();



/***/ }),

/***/ "./resources/public-js/orderWindow/orderWindow.js":
/*!********************************************************!*\
  !*** ./resources/public-js/orderWindow/orderWindow.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return OrderWindow; });
/* harmony import */ var _auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../auxiliaryFunctions/el */ "./resources/public-js/auxiliaryFunctions/el.js");
/* harmony import */ var _parentClasses_app_aware__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../parentClasses/app/aware */ "./resources/public-js/parentClasses/app/aware.js");
/* harmony import */ var _html_orderWindow_index_getOrderWindowHtml__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../html/orderWindow/index-getOrderWindowHtml */ "./resources/public-js/html/orderWindow/index-getOrderWindowHtml.js");
/* harmony import */ var _auxiliaryFunctions_allProductsMustBeCached__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auxiliaryFunctions/allProductsMustBeCached */ "./resources/public-js/auxiliaryFunctions/allProductsMustBeCached.js");
/* harmony import */ var _productObject_getProductObject__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../productObject/getProductObject */ "./resources/public-js/productObject/getProductObject.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }







var OrderWindow = /*#__PURE__*/function (_Aware) {
  _inherits(OrderWindow, _Aware);

  var _super = _createSuper(OrderWindow);

  function OrderWindow() {
    var _this;

    _classCallCheck(this, OrderWindow);

    _this = _super.call(this);
    _this.wrapId = 'orderWindow';
    _this.wrapSelector = '#orderWindow';
    _this.collapseIconSelector = '.order_window__collapse_icon';
    _this.basicCss = 'order_window__wrapper';
    _this.showCss = 'show_block';
    _this.hideCss = 'hide_block';
    _this.css = '';
    _this.contacts = {};
    Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])('body').addEventListener('click', function (e) {
      if (!e.target.dataset || !e.target.dataset.orderButton) {
        return;
      }

      var productId = e.target.dataset.orderButton;

      if (productId === '0') {
        _this._renderCommonWindow();

        return;
      }

      _this._render(Number(productId));
    });
    return _this;
  }

  _createClass(OrderWindow, [{
    key: "_renderCommonWindow",
    value: function _renderCommonWindow() {
      this._prepareData();

      var html = Object(_html_orderWindow_index_getOrderWindowHtml__WEBPACK_IMPORTED_MODULE_2__["default"])(null, this.contacts);
      Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])('body').insertAdjacentHTML('beforeend', html);

      this._listenThisBlock();
    }
  }, {
    key: "_render",
    value: function _render(productId) {
      var _this2 = this;

      this._prepareData();

      this._getOneProduct(productId).then(function (product) {
        var productObject = Object(_productObject_getProductObject__WEBPACK_IMPORTED_MODULE_4__["default"])(product);
        var html = Object(_html_orderWindow_index_getOrderWindowHtml__WEBPACK_IMPORTED_MODULE_2__["default"])(productObject, _this2.contacts);
        Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])('body').insertAdjacentHTML('beforeend', html);

        _this2._listenThisBlock();
      });
    }
  }, {
    key: "_getOneProduct",
    value: function _getOneProduct(productId) {
      if (Object(_auxiliaryFunctions_allProductsMustBeCached__WEBPACK_IMPORTED_MODULE_3__["default"])()) {
        return this.components.productCache.getEntireList().then(function (data) {
          var list = _toConsumableArray(data);

          return list.filter(function (item) {
            return item.id === productId;
          })[0];
        });
      } else {
        return this.components.productCache.getOneFromServer(productId).then(function (product) {
          return product;
        });
      }
    }
  }, {
    key: "_listenThisBlock",
    value: function _listenThisBlock() {
      var _this3 = this;

      Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])(this.collapseIconSelector).addEventListener('click', function (e) {
        _this3._collapseWindow(e);
      });
      Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])(this.wrapSelector).addEventListener('click', function (e) {
        if (e.target.id === _this3.wrapId) {
          _this3._collapseWindow(e);
        }
      });
    }
  }, {
    key: "_prepareData",
    value: function _prepareData() {
      var dataset = Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])('#siteFooter').dataset;
      this.contacts = {
        domain: dataset.siteDomain,
        address: dataset.siteAddress,
        phone: dataset.sitePhone,
        phoneTime: dataset.sitePhoneTime,
        whatsapp: dataset.siteWhatsapp,
        tg: dataset.siteTg,
        vkontakte: dataset.siteVkontakte,
        ok: dataset.siteOk,
        meta: dataset.siteMeta,
        email: dataset.siteEmail
      };
    }
  }, {
    key: "_collapseWindow",
    value: function _collapseWindow() {
      var _this4 = this;

      Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])(this.wrapSelector).className = "".concat(this.basicCss, " ").concat(this.hideCss);
      setTimeout(function () {
        Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])(_this4.wrapSelector).remove();
      }, 700);
    }
  }]);

  return OrderWindow;
}(_parentClasses_app_aware__WEBPACK_IMPORTED_MODULE_1__["default"]);



/***/ }),

/***/ "./resources/public-js/parentClasses/absoluteForm.js":
/*!***********************************************************!*\
  !*** ./resources/public-js/parentClasses/absoluteForm.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AbsoluteForm; });
/* harmony import */ var _auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../auxiliaryFunctions/el */ "./resources/public-js/auxiliaryFunctions/el.js");
/* harmony import */ var _http_postJson__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http/postJson */ "./resources/public-js/http/postJson.js");
/* harmony import */ var _visibleBlockByClick__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./visibleBlockByClick */ "./resources/public-js/parentClasses/visibleBlockByClick.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }





var AbsoluteForm = /*#__PURE__*/function (_VisibleBlockByClick) {
  _inherits(AbsoluteForm, _VisibleBlockByClick);

  var _super = _createSuper(AbsoluteForm);

  function AbsoluteForm(clickSourceSelector) {
    var _this;

    _classCallCheck(this, AbsoluteForm);

    _this = _super.call(this, clickSourceSelector);
    _this.postUrl = '';
    _this.successUrl = '';
    _this.disabledSubmit = false;
    _this.enabledTypeinValidation = false;
    _this.wrapSelector = '';
    _this.submitSelector = '';
    _this.submitButtonText = '';
    _this.basicCss = 'js_reg_form';
    _this.showCss = 'show_block';
    _this.hideCss = 'hide_block';
    _this.alarmCss = 'js_reg_form__alarm';
    _this.validationFunction = null;
    return _this;
  }

  _createClass(AbsoluteForm, [{
    key: "_listenThisBlock",
    value: function _listenThisBlock() {
      var _this2 = this;

      // submit
      Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])(this.submitSelector).addEventListener('click', function () {
        _this2._submit(_this2._getUserData());
      }); // слушать keyup для запуска type-in валидации

      Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])(this.wrapSelector).addEventListener('keyup', function () {
        _this2._doTypeInValidation(_this2._getUserData());
      });
    }
  }, {
    key: "_getUserData",
    value: function _getUserData() {}
  }, {
    key: "_doTypeInValidation",
    value: function _doTypeInValidation(userData) {
      if (!this.enabledTypeinValidation) {
        return;
      }

      var errors = this.validationFunction(userData);

      this._showErrors(errors);
    }
  }, {
    key: "_submit",
    value: function _submit(userData) {
      var _this3 = this;

      this._turnOffAlarm(); // фронт-валидация введенных данных


      var errors = this.validationFunction(userData);

      if (errors) {
        this._weHaveErrors(errors);

        return;
      } // если не получено разрешение на submit


      if (!this._getSubmitPermission()) {
        return;
      }

      this.submitButtonText = Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])(this.submitSelector).innerText;
      Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])(this.submitSelector).innerText = 'Ждите...'; // отправить данные и получить ответ

      Object(_http_postJson__WEBPACK_IMPORTED_MODULE_1__["default"])(this.postUrl, userData).then(function (data) {
        Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])(_this3.submitSelector).innerText = _this3.submitButtonText;

        if (data.backValidatorErrors) {
          _this3._weHaveErrors(data.backValidatorErrors);

          return;
        }

        if (data.success === true) {
          _this3._ultimateSuccess(data);
        } else {
          _this3._ultimateFail();
        }
      });
    }
  }, {
    key: "_weHaveErrors",
    value: function _weHaveErrors(errors) {
      setTimeout(this._turnOnAlarm.bind(this), 1);

      this._showErrors(errors);

      this.enabledTypeinValidation = true;
    }
  }, {
    key: "_showErrors",
    value: function _showErrors(errors) {}
  }, {
    key: "_ultimateSuccess",
    value: function _ultimateSuccess() {}
  }, {
    key: "_ultimateFail",
    value: function _ultimateFail() {}
  }, {
    key: "_getSubmitPermission",
    value: function _getSubmitPermission() {
      var _this4 = this;

      // защита от повторного нажатия на 9 сек
      if (this.disabledSubmit) {
        return false;
      }

      this.disabledSubmit = true;
      setTimeout(function () {
        _this4.disabledSubmit = false;
      }, 9000);
      return true;
    }
  }, {
    key: "_turnOnAlarm",
    value: function _turnOnAlarm() {
      Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])(this.wrapSelector).className = "".concat(this.basicCss, " ").concat(this.alarmCss);
    }
  }, {
    key: "_turnOffAlarm",
    value: function _turnOffAlarm() {
      Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])(this.wrapSelector).classList.remove(this.alarmCss);
    }
  }]);

  return AbsoluteForm;
}(_visibleBlockByClick__WEBPACK_IMPORTED_MODULE_2__["default"]);



/***/ }),

/***/ "./resources/public-js/parentClasses/app/aware.js":
/*!********************************************************!*\
  !*** ./resources/public-js/parentClasses/app/aware.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Aware; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Aware = /*#__PURE__*/function () {
  function Aware() {
    _classCallCheck(this, Aware);

    this.app = null;
    this.locked = false;
  }

  _createClass(Aware, [{
    key: "setAppRef",
    value: function setAppRef(ref) {
      this.app = ref;
    } // блокировать экземпляры (наследники) класса в settingsSetterOnPageLoad
    // на время установки settings при загрузке страницы с сервера

  }, {
    key: "lock",
    value: function lock() {
      this.locked = true;
    }
  }, {
    key: "unlock",
    value: function unlock() {
      this.locked = false;
    } // метода наблюдения вызываемые из коммитера

  }, {
    key: "checkViewSettings",
    value: function checkViewSettings() {}
  }, {
    key: "checkSortSettings",
    value: function checkSortSettings() {}
  }, {
    key: "checkSectionSettings",
    value: function checkSectionSettings() {}
  }, {
    key: "checkSearchSettings",
    value: function checkSearchSettings() {}
  }, {
    key: "checkPaginatorSettings",
    value: function checkPaginatorSettings() {}
  }]);

  return Aware;
}();



/***/ }),

/***/ "./resources/public-js/parentClasses/visibleBlock.js":
/*!***********************************************************!*\
  !*** ./resources/public-js/parentClasses/visibleBlock.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return VisibleBlock; });
/* harmony import */ var _auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../auxiliaryFunctions/el */ "./resources/public-js/auxiliaryFunctions/el.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var VisibleBlock = /*#__PURE__*/function () {
  function VisibleBlock(data) {
    _classCallCheck(this, VisibleBlock);

    this.wrapSelector = '';
    this.basicCss = '';
    this.showCss = '';
    this.hideCss = ''; // this._render(); // не снимать комментарий
  }

  _createClass(VisibleBlock, [{
    key: "_render",
    value: function _render() {
      this._preRenderActions();

      if (!Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])(this.wrapSelector)) {
        this._firstRender();

        this._justSetVisibilityToTrue();

        return;
      }

      this._justSetVisibilityToTrue();
    }
  }, {
    key: "_preRenderActions",
    value: function _preRenderActions() {}
  }, {
    key: "_firstRender",
    value: function _firstRender() {
      var html = this._getHtml();

      Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])('body').insertAdjacentHTML('beforeend', html);

      this._listenBodyTag();

      this._listenThisBlock();

      this._additionalFirstRenderActions();
    }
  }, {
    key: "_getHtml",
    value: function _getHtml() {}
  }, {
    key: "_additionalFirstRenderActions",
    value: function _additionalFirstRenderActions() {}
  }, {
    key: "_listenBodyTag",
    value: function _listenBodyTag() {
      var _this = this;

      Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])('body').addEventListener('click', function (e) {
        // скрыть блок при клике мимо
        _this._setVisibilityToFalse(e);
      });
    }
  }, {
    key: "_listenThisBlock",
    value: function _listenThisBlock() {}
  }, {
    key: "_justSetVisibilityToTrue",
    value: function _justSetVisibilityToTrue() {
      if (!Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])(this.wrapSelector)) {
        return;
      }

      Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])(this.wrapSelector).className = "".concat(this.basicCss, " ").concat(this.showCss);
    }
  }, {
    key: "_setVisibilityToFalse",
    value: function _setVisibilityToFalse(e) {
      if (!Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])(this.wrapSelector)) {
        return;
      }

      if (e.target.parentNode === Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])(this.wrapSelector)) {
        return;
      }

      if (e.target === Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])(this.wrapSelector)) {
        return;
      }

      Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])(this.wrapSelector).className = "".concat(this.basicCss, " ").concat(this.hideCss);

      this._additionalHideActions();
    }
  }, {
    key: "_additionalHideActions",
    value: function _additionalHideActions() {}
  }]);

  return VisibleBlock;
}();



/***/ }),

/***/ "./resources/public-js/parentClasses/visibleBlockByClick.js":
/*!******************************************************************!*\
  !*** ./resources/public-js/parentClasses/visibleBlockByClick.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return VisibleBlockByClick; });
/* harmony import */ var _auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../auxiliaryFunctions/el */ "./resources/public-js/auxiliaryFunctions/el.js");
/* harmony import */ var _visibleBlock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./visibleBlock */ "./resources/public-js/parentClasses/visibleBlock.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var VisibleBlockByClick = /*#__PURE__*/function (_VisibleBlock) {
  _inherits(VisibleBlockByClick, _VisibleBlock);

  var _super = _createSuper(VisibleBlockByClick);

  function VisibleBlockByClick(data) {
    var _this;

    _classCallCheck(this, VisibleBlockByClick);

    _this = _super.call(this, data);

    if (!Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])(data.clickSourceSelector)) {
      return _possibleConstructorReturn(_this);
    }

    Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])(data.clickSourceSelector).addEventListener('click', function (e) {
      e.preventDefault(); //e.stopPropagation();

      setTimeout(function () {
        _this._render(e);
      }, 100);
    });
    return _this;
  }

  _createClass(VisibleBlockByClick, [{
    key: "_render",
    value: function _render(e) {
      this._preRenderActions();

      if (!Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])(this.wrapSelector)) {
        this._firstRender();

        this._justSetVisibilityToTrue();

        return;
      }

      if (!Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])(this.wrapSelector).classList.contains(this.showCss)) {
        this._justSetVisibilityToTrue();
      } else {
        this._setVisibilityToFalse(e);
      }
    }
  }]);

  return VisibleBlockByClick;
}(_visibleBlock__WEBPACK_IMPORTED_MODULE_1__["default"]);



/***/ }),

/***/ "./resources/public-js/productList/headerManager/headerVisibilityManager.js":
/*!**********************************************************************************!*\
  !*** ./resources/public-js/productList/headerManager/headerVisibilityManager.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return headerVisibilityManager; });
/* harmony import */ var _auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../auxiliaryFunctions/el */ "./resources/public-js/auxiliaryFunctions/el.js");
/* harmony import */ var _parentClasses_app_aware__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../parentClasses/app/aware */ "./resources/public-js/parentClasses/app/aware.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var headerVisibilityManager = /*#__PURE__*/function (_Aware) {
  _inherits(headerVisibilityManager, _Aware);

  var _super = _createSuper(headerVisibilityManager);

  function headerVisibilityManager() {
    _classCallCheck(this, headerVisibilityManager);

    return _super.call(this);
  }

  _createClass(headerVisibilityManager, [{
    key: "checkSectionSettings",
    value: function checkSectionSettings() {
      var sectionName = this.state.sectionSettings.productSectionName;

      if (['singleProduct'].includes(sectionName)) {
        this._turnOffVisibility();
      } else {
        this._turnOnVisibility();
      }
    }
  }, {
    key: "_turnOffVisibility",
    value: function _turnOffVisibility() {
      var wrapper = Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])('.h1_viewing_sorting_filtering_container');

      if (wrapper && !wrapper.classList.contains('display_none')) {
        wrapper.classList.add('display_none');
      }
    }
  }, {
    key: "_turnOnVisibility",
    value: function _turnOnVisibility() {
      var wrapper = Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])('.h1_viewing_sorting_filtering_container');

      if (wrapper && wrapper.classList.contains('display_none')) {
        wrapper.classList.remove('display_none');
      }
    }
  }]);

  return headerVisibilityManager;
}(_parentClasses_app_aware__WEBPACK_IMPORTED_MODULE_1__["default"]);



/***/ }),

/***/ "./resources/public-js/productList/listRenderers/rendererByLinkOfOneProductItem.js":
/*!*****************************************************************************************!*\
  !*** ./resources/public-js/productList/listRenderers/rendererByLinkOfOneProductItem.js ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RendererByLinkOfOneProductItem; });
/* harmony import */ var _parentClasses_app_aware__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../parentClasses/app/aware */ "./resources/public-js/parentClasses/app/aware.js");
/* harmony import */ var _auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../auxiliaryFunctions/el */ "./resources/public-js/auxiliaryFunctions/el.js");
/* harmony import */ var _message_frequentAbsoluteFlashMessage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../message/frequentAbsoluteFlashMessage */ "./resources/public-js/message/frequentAbsoluteFlashMessage.js");
/* harmony import */ var _auxiliaryFunctions_allProductsMustBeCached__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../auxiliaryFunctions/allProductsMustBeCached */ "./resources/public-js/auxiliaryFunctions/allProductsMustBeCached.js");
/* harmony import */ var _productObject_getProductObject__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../productObject/getProductObject */ "./resources/public-js/productObject/getProductObject.js");
/* harmony import */ var _html_productList_productListItem_index_getProductsItemHtml__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../html/productList/productListItem/index-getProductsItemHtml */ "./resources/public-js/html/productList/productListItem/index-getProductsItemHtml.js");
/* harmony import */ var _auxiliaryFunctions_scrollDocument__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../auxiliaryFunctions/scrollDocument */ "./resources/public-js/auxiliaryFunctions/scrollDocument.js");
/* harmony import */ var _html_singleProduct_index_getSingleProductHtml__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../html/singleProduct/index-getSingleProductHtml */ "./resources/public-js/html/singleProduct/index-getSingleProductHtml.js");
/* harmony import */ var _productSingle_singleProductKit__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../productSingle/singleProductKit */ "./resources/public-js/productSingle/singleProductKit.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }











var RendererByLinkOfOneProductItem = /*#__PURE__*/function (_Aware) {
  _inherits(RendererByLinkOfOneProductItem, _Aware);

  var _super = _createSuper(RendererByLinkOfOneProductItem);

  function RendererByLinkOfOneProductItem() {
    var _this;

    _classCallCheck(this, RendererByLinkOfOneProductItem);

    _this = _super.call(this);
    _this.wrapper = Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_1__["default"])('#productList');
    _this.messenger = new _message_frequentAbsoluteFlashMessage__WEBPACK_IMPORTED_MODULE_2__["default"]();
    Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_1__["default"])('body').addEventListener('click', function (e) {
      if (e.target.dataset.productItemLink) {
        e.preventDefault();
        e.stopPropagation();

        _this.components.rendererBySearchSettings.lock();

        _this.commit('resetSearchSettings');

        _this.components.rendererBySearchSettings.unlock();

        var productId = Number(e.target.dataset.productItemLink);

        _this._setSectionSettings(productId);

        _this._setPaginatorSettings();

        _this._showSingleProductPage(productId);

        _this.components.viewedProductsAppender.post(productId);
      }
    });
    return _this;
  }

  _createClass(RendererByLinkOfOneProductItem, [{
    key: "_setSectionSettings",
    value: function _setSectionSettings(productId) {
      this.commit('setSectionData', {
        sectionName: 'singleProduct',
        additionalData: productId,
        h1Text: ''
      });
    }
  }, {
    key: "_setPaginatorSettings",
    value: function _setPaginatorSettings() {
      this.commit('setSectionProductsCount', 0);
      this.commit('setStartOffset', 0);
      this.commit('setPageNumber', 1);
      this.commit('setPageCount', 0);
    }
  }, {
    key: "_showSingleProductPage",
    value: function _showSingleProductPage(productId) {
      // на страницах где есть список товаров
      this.components.waitingScreen.show();

      if (Object(_auxiliaryFunctions_allProductsMustBeCached__WEBPACK_IMPORTED_MODULE_3__["default"])()) {
        this._showOneFromCache(productId);
      } else {
        this._showLoadingMessage();

        this._showOneFromServer(productId);
      }
    }
  }, {
    key: "_showOneFromCache",
    value: function _showOneFromCache(productId) {
      var _this2 = this;

      return this.components.productCache.getEntireList().then(function (data) {
        var list = _toConsumableArray(data);

        var product = list.filter(function (item) {
          return item.id === productId;
        })[0];

        _this2.components.viewedProductsSummaryMaker.remakeWith(product);

        var productObject = Object(_productObject_getProductObject__WEBPACK_IMPORTED_MODULE_4__["default"])(product);

        _this2._renderProduct(productObject);

        _this2._storeSlug(productObject);

        _this2._finalActions();

        Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_1__["default"])('#productDescriptionContainer').innerText = 'Загрузка...';

        _this2.components.productCache.getOneDescription(productId).then(function (data) {
          Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_1__["default"])('#productDescriptionContainer').innerText = data.description;
        });
      });
    }
  }, {
    key: "_showOneFromServer",
    value: function _showOneFromServer(productId) {
      var _this3 = this;

      return this.components.productCache.getOneFromServer(productId).then(function (product) {
        _this3.messenger.hideMessage();

        _this3.components.viewedProductsSummaryMaker.remakeWith(product);

        var productObject = Object(_productObject_getProductObject__WEBPACK_IMPORTED_MODULE_4__["default"])(product);

        _this3._renderProduct(productObject);

        _this3._storeSlug(productObject);

        _this3._finalActions();
      });
    }
  }, {
    key: "_renderProduct",
    value: function _renderProduct(product) {
      var singleProductHtml = Object(_html_singleProduct_index_getSingleProductHtml__WEBPACK_IMPORTED_MODULE_7__["default"])(product);
      singleProductHtml = singleProductHtml.replaceAll("quickProductFavIcon", "favIcon");
      singleProductHtml = "<div id=\"productListContent\" class=\"show_block\">".concat(singleProductHtml, "</div>");

      if (Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_1__["default"])('#productListContent')) {
        Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_1__["default"])('#productListContent').remove();
      }

      this.wrapper.insertAdjacentHTML('afterbegin', singleProductHtml);

      this._listenPhotoLoading();

      Object(_productSingle_singleProductKit__WEBPACK_IMPORTED_MODULE_8__["default"])();
    }
  }, {
    key: "_listenPhotoLoading",
    value: function _listenPhotoLoading() {
      Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_1__["default"])('#mainPhoto').onload = this.components.waitingScreen.hide();
    }
  }, {
    key: "_storeSlug",
    value: function _storeSlug(product) {
      this.commit('setSectionData', {
        sectionName: 'singleProduct',
        additionalData: "".concat(product.id, ";").concat(product.slug),
        h1Text: ''
      });
    }
  }, {
    key: "_finalActions",
    value: function _finalActions() {
      this.components.favoriteProductsIndicationOnPageLoad.displayFavoriteProducts();
      this.components.publicUrlMaker.publishUrl();

      this._makeInvisiblePaginationBlock();

      var distance = window.pageYOffset + window.innerHeight / 2;
      Object(_auxiliaryFunctions_scrollDocument__WEBPACK_IMPORTED_MODULE_6__["default"])(distance, 'up');
    }
  }, {
    key: "_makeInvisiblePaginationBlock",
    value: function _makeInvisiblePaginationBlock() {
      var paginationBlock = Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_1__["default"])('#paginationContent');

      if (!paginationBlock) {
        return;
      }

      if (!paginationBlock.classList.contains("display_none")) {
        paginationBlock.classList.add("display_none");
      }
    }
  }, {
    key: "_showLoadingMessage",
    value: function _showLoadingMessage() {
      this.messenger.render({
        text: 'Загрузка...',
        duration: 9500
      });
    }
  }]);

  return RendererByLinkOfOneProductItem;
}(_parentClasses_app_aware__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./resources/public-js/productList/listRenderers/rendererByPaginationButton.js":
/*!*************************************************************************************!*\
  !*** ./resources/public-js/productList/listRenderers/rendererByPaginationButton.js ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RendererByPaginationButton; });
/* harmony import */ var _auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../auxiliaryFunctions/el */ "./resources/public-js/auxiliaryFunctions/el.js");
/* harmony import */ var _productObject_getProductObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../productObject/getProductObject */ "./resources/public-js/productObject/getProductObject.js");
/* harmony import */ var _html_productList_productListItem_index_getProductsItemHtml__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../html/productList/productListItem/index-getProductsItemHtml */ "./resources/public-js/html/productList/productListItem/index-getProductsItemHtml.js");
/* harmony import */ var _auxiliaryFunctions_scrollDocument__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../auxiliaryFunctions/scrollDocument */ "./resources/public-js/auxiliaryFunctions/scrollDocument.js");
/* harmony import */ var _message_frequentAbsoluteFlashMessage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../message/frequentAbsoluteFlashMessage */ "./resources/public-js/message/frequentAbsoluteFlashMessage.js");
/* harmony import */ var _auxiliaryFunctions_allProductsMustBeCached__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../auxiliaryFunctions/allProductsMustBeCached */ "./resources/public-js/auxiliaryFunctions/allProductsMustBeCached.js");
/* harmony import */ var _parentClasses_app_aware__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../parentClasses/app/aware */ "./resources/public-js/parentClasses/app/aware.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }









var RendererByPaginationButton = /*#__PURE__*/function (_Aware) {
  _inherits(RendererByPaginationButton, _Aware);

  var _super = _createSuper(RendererByPaginationButton);

  function RendererByPaginationButton() {
    var _this;

    _classCallCheck(this, RendererByPaginationButton);

    _this = _super.call(this);
    _this.messenger = new _message_frequentAbsoluteFlashMessage__WEBPACK_IMPORTED_MODULE_4__["default"]();
    _this.productItemSelector = '[data-product-item]';
    _this.wrapper = Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])('#productList');
    _this.disabledRequest = false;
    _this.currentPageNumber = 0;
    Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])('body').addEventListener('click', function (e) {
      if (e.target.dataset.paginatorPageNumber) {
        e.preventDefault();

        _this.components.waitingScreen.show();

        _this._setPaginatorSettings(e);

        _this._showLoadingMessage();

        _this._render();
      }
    });
    return _this;
  }

  _createClass(RendererByPaginationButton, [{
    key: "_setPaginatorSettings",
    value: function _setPaginatorSettings(e) {
      var settings = this.state.paginatorSettings;
      var pageNumber = Number(e.target.dataset.paginatorPageNumber);
      this.commit('setPageNumber', pageNumber);
      this.currentPageNumber = pageNumber;
      var offsetOfProductsToLoad = (pageNumber - 1) * settings.perPage;
      this.commit('setStartOffset', offsetOfProductsToLoad);
    }
  }, {
    key: "_showLoadingMessage",
    value: function _showLoadingMessage() {
      if (Object(_auxiliaryFunctions_allProductsMustBeCached__WEBPACK_IMPORTED_MODULE_5__["default"])()) {
        return;
      }

      this.messenger.render({
        text: 'Загрузка...',
        duration: 9500
      });
    }
  }, {
    key: "_render",
    value: function _render() {
      var _this2 = this;

      if (!this._getRequestPermission()) {
        return;
      }

      this.components.sourceOfFilteredProducts.getFiltered().then(function (_ref) {
        var filteredProducts = _ref.filteredProducts,
            sectionProductsCount = _ref.sectionProductsCount;
        _this2.disabledRequest = false;

        _this2.messenger.hideMessage();

        var viewMode = _this2.state.viewSettings.mode;
        var itemsHtmlArr = filteredProducts.map(function (product) {
          var productObject = Object(_productObject_getProductObject__WEBPACK_IMPORTED_MODULE_1__["default"])(product);
          return Object(_html_productList_productListItem_index_getProductsItemHtml__WEBPACK_IMPORTED_MODULE_2__["default"])(productObject, viewMode);
        });
        var itemsHtml = "<div id=\"productListContent\" class=\"show_block\">".concat(itemsHtmlArr.join(''), "</div>");

        if (Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])('#productListContent')) {
          Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])('#productListContent').remove();
        }

        _this2.wrapper.insertAdjacentHTML('afterbegin', itemsHtml);

        _this2._listenLastItemLoading();

        _this2._setProductsCount(sectionProductsCount);

        _this2._finalActions();
      });
    }
  }, {
    key: "_listenLastItemLoading",
    value: function _listenLastItemLoading() {
      var nodes = Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])('#productListContent').querySelectorAll('.product_item__photo__img');
      var lastNode = nodes[nodes.length - 1];
      lastNode.onload = this.components.waitingScreen.hide();
    }
  }, {
    key: "_setProductsCount",
    value: function _setProductsCount(sectionProductsCount) {
      this.commit('setSectionProductsCount', sectionProductsCount);
      var settings = this.state.paginatorSettings;
      var sectionPageCount = String(Math.ceil(sectionProductsCount / settings.perPage));
      this.commit('setPageCount', sectionPageCount);
    }
  }, {
    key: "_finalActions",
    value: function _finalActions() {
      this.components.favoriteProductsIndicationOnPageLoad.displayFavoriteProducts();
      this.components.publicUrlMaker.publishUrl();
      this.components.rendererOfPaginationBlock.remake();
      var distance = window.pageYOffset + window.innerHeight / 2;
      Object(_auxiliaryFunctions_scrollDocument__WEBPACK_IMPORTED_MODULE_3__["default"])(distance, 'up');
    }
  }, {
    key: "_getRequestPermission",
    value: function _getRequestPermission() {
      var _this3 = this;

      // защита от частых отправок на 10 сек (от двойного нажатия)
      if (this.disabledRequest) {
        return false;
      }

      this.disabledRequest = true;
      setTimeout(function () {
        _this3.disabledRequest = false;
      }, 10000);
      return true;
    }
  }]);

  return RendererByPaginationButton;
}(_parentClasses_app_aware__WEBPACK_IMPORTED_MODULE_6__["default"]);



/***/ }),

/***/ "./resources/public-js/productList/listRenderers/rendererBySearchSettings.js":
/*!***********************************************************************************!*\
  !*** ./resources/public-js/productList/listRenderers/rendererBySearchSettings.js ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RendererBySearchSettings; });
/* harmony import */ var _auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../auxiliaryFunctions/el */ "./resources/public-js/auxiliaryFunctions/el.js");
/* harmony import */ var _productObject_getProductObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../productObject/getProductObject */ "./resources/public-js/productObject/getProductObject.js");
/* harmony import */ var _html_productList_productListItem_index_getProductsItemHtml__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../html/productList/productListItem/index-getProductsItemHtml */ "./resources/public-js/html/productList/productListItem/index-getProductsItemHtml.js");
/* harmony import */ var _auxiliaryFunctions_scrollDocument__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../auxiliaryFunctions/scrollDocument */ "./resources/public-js/auxiliaryFunctions/scrollDocument.js");
/* harmony import */ var _auxiliaryFunctions_allProductsMustBeCached__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../auxiliaryFunctions/allProductsMustBeCached */ "./resources/public-js/auxiliaryFunctions/allProductsMustBeCached.js");
/* harmony import */ var _message_frequentAbsoluteFlashMessage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../message/frequentAbsoluteFlashMessage */ "./resources/public-js/message/frequentAbsoluteFlashMessage.js");
/* harmony import */ var _parentClasses_app_aware__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../parentClasses/app/aware */ "./resources/public-js/parentClasses/app/aware.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }









var RendererBySearchSettings = /*#__PURE__*/function (_Aware) {
  _inherits(RendererBySearchSettings, _Aware);

  var _super = _createSuper(RendererBySearchSettings);

  function RendererBySearchSettings() {
    var _this;

    _classCallCheck(this, RendererBySearchSettings);

    _this = _super.call(this);
    _this.productItemSelector = '[data-product-item]';
    _this.wrapper = Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])('#productList');
    _this.timeWhenSearchSettingsWereLastChanged = 0;
    _this.timeWhenLastRequestWasSent = 0;
    _this.timerId = 0;
    _this.messenger = new _message_frequentAbsoluteFlashMessage__WEBPACK_IMPORTED_MODULE_5__["default"]();
    return _this;
  }

  _createClass(RendererBySearchSettings, [{
    key: "checkSearchSettings",
    value: function checkSearchSettings() {
      if (this.locked) {
        return;
      }

      var settings = this.state.sectionSettings;

      if (settings.productSectionName !== 'search') {
        return;
      }

      this._setPaginatorSettings();

      if (Object(_auxiliaryFunctions_allProductsMustBeCached__WEBPACK_IMPORTED_MODULE_4__["default"])()) {
        this._render();
      } else {
        this.timeWhenSearchSettingsWereLastChanged = new Date().getTime();

        this._renderWithDelay();
      }
    }
  }, {
    key: "_setPaginatorSettings",
    value: function _setPaginatorSettings() {
      this.commit('setStartOffset', 0);
      this.commit('setPageNumber', 1);
    }
  }, {
    key: "_renderWithDelay",
    value: function _renderWithDelay() {
      var _this2 = this;

      var currentTime = new Date().getTime();
      var settingsWereLastChangedAgo = currentTime - this.timeWhenSearchSettingsWereLastChanged;
      var requestWasSentAgo = currentTime - this.timeWhenLastRequestWasSent;

      if (settingsWereLastChangedAgo < 700 || requestWasSentAgo < 2000) {
        clearTimeout(this.timerId);
        this.timerId = setTimeout(function () {
          _this2._renderWithDelay();
        }, 700);
        return;
      }

      this._showLoadingMessage();

      this.timeWhenLastRequestWasSent = new Date().getTime(); //setTimeout(() => {this._render();}, 2000);

      this._render();
    }
  }, {
    key: "_showLoadingMessage",
    value: function _showLoadingMessage() {
      this.messenger.render({
        text: 'Загрузка...',
        duration: 9500
      });
    }
  }, {
    key: "_render",
    value: function _render() {
      var _this3 = this;

      this.components.waitingScreen.show();
      this.components.sourceOfFilteredProducts.getFiltered().then(function (_ref) {
        var filteredProducts = _ref.filteredProducts,
            sectionProductsCount = _ref.sectionProductsCount;

        _this3.messenger.hideMessage();

        var viewMode = _this3.state.viewSettings.mode;
        var itemsHtmlArr = filteredProducts.map(function (product) {
          var productObject = Object(_productObject_getProductObject__WEBPACK_IMPORTED_MODULE_1__["default"])(product);
          return Object(_html_productList_productListItem_index_getProductsItemHtml__WEBPACK_IMPORTED_MODULE_2__["default"])(productObject, viewMode);
        });
        var itemsHtml = "<div id=\"productListContent\">".concat(itemsHtmlArr.join(''), "</div>");

        if (Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])('#productListContent')) {
          Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])('#productListContent').remove();
        }

        _this3.wrapper.insertAdjacentHTML('afterbegin', itemsHtml);

        _this3._listenLastItemLoading();

        _this3._setProductsCount(sectionProductsCount);

        _this3._finalActions();

        _this3._showFinalMessage(sectionProductsCount);
      });
    }
  }, {
    key: "_listenLastItemLoading",
    value: function _listenLastItemLoading() {
      var nodes = Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])('#productListContent').querySelectorAll('.product_item__photo__img');
      var lastNode = nodes[nodes.length - 1];
      lastNode.onload = this.components.waitingScreen.hide();
    }
  }, {
    key: "_setProductsCount",
    value: function _setProductsCount(sectionProductsCount) {
      this.commit('setSectionProductsCount', sectionProductsCount);
      var settings = this.state.paginatorSettings;
      var sectionPageCount = String(Math.ceil(sectionProductsCount / settings.perPage));
      this.commit('setPageCount', sectionPageCount);
    }
  }, {
    key: "_finalActions",
    value: function _finalActions() {
      this.components.favoriteProductsIndicationOnPageLoad.displayFavoriteProducts();
      this.components.publicUrlMaker.publishUrl();

      this._makeInvisiblePaginationBlock(); //this.components.rendererOfPaginationBlock.remake();


      var distance = window.pageYOffset + window.innerHeight / 2;
      Object(_auxiliaryFunctions_scrollDocument__WEBPACK_IMPORTED_MODULE_3__["default"])(distance, 'up');
    }
  }, {
    key: "_makeInvisiblePaginationBlock",
    value: function _makeInvisiblePaginationBlock() {
      var paginationBlock = Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])('#paginationContent');

      if (paginationBlock && !paginationBlock.classList.contains("display_none")) {
        paginationBlock.classList.add("display_none");
      }
    }
  }, {
    key: "_showFinalMessage",
    value: function _showFinalMessage() {
      var sectionProductsCount = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

      if (!Object(_auxiliaryFunctions_allProductsMustBeCached__WEBPACK_IMPORTED_MODULE_4__["default"])()) {
        return;
      }

      this.messenger.render({
        text: "\u041F\u043E\u043A\u0430\u0437\u0430\u043D\u043E ".concat(sectionProductsCount),
        duration: 2000
      });
    }
  }]);

  return RendererBySearchSettings;
}(_parentClasses_app_aware__WEBPACK_IMPORTED_MODULE_6__["default"]);



/***/ }),

/***/ "./resources/public-js/productList/listRenderers/rendererBySectionLink.js":
/*!********************************************************************************!*\
  !*** ./resources/public-js/productList/listRenderers/rendererBySectionLink.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RendererBySectionLink; });
/* harmony import */ var _auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../auxiliaryFunctions/el */ "./resources/public-js/auxiliaryFunctions/el.js");
/* harmony import */ var _productObject_getProductObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../productObject/getProductObject */ "./resources/public-js/productObject/getProductObject.js");
/* harmony import */ var _html_productList_productListItem_index_getProductsItemHtml__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../html/productList/productListItem/index-getProductsItemHtml */ "./resources/public-js/html/productList/productListItem/index-getProductsItemHtml.js");
/* harmony import */ var _auxiliaryFunctions_scrollDocument__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../auxiliaryFunctions/scrollDocument */ "./resources/public-js/auxiliaryFunctions/scrollDocument.js");
/* harmony import */ var _auxiliaryFunctions_allProductsMustBeCached__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../auxiliaryFunctions/allProductsMustBeCached */ "./resources/public-js/auxiliaryFunctions/allProductsMustBeCached.js");
/* harmony import */ var _message_frequentAbsoluteFlashMessage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../message/frequentAbsoluteFlashMessage */ "./resources/public-js/message/frequentAbsoluteFlashMessage.js");
/* harmony import */ var _parentClasses_app_aware__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../parentClasses/app/aware */ "./resources/public-js/parentClasses/app/aware.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }









var RendererBySectionLink = /*#__PURE__*/function (_Aware) {
  _inherits(RendererBySectionLink, _Aware);

  var _super = _createSuper(RendererBySectionLink);

  function RendererBySectionLink() {
    var _this;

    _classCallCheck(this, RendererBySectionLink);

    _this = _super.call(this);
    _this.productItemSelector = '[data-product-item]';
    _this.wrapper = Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])('#productList');
    _this.messenger = new _message_frequentAbsoluteFlashMessage__WEBPACK_IMPORTED_MODULE_5__["default"]();
    _this.disabledRequest = false;
    Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])('body').addEventListener('click', function (e) {
      var dataset = e.target.dataset;

      if (dataset.menuLinkSectionName || dataset.linkSectionName) {
        e.preventDefault();

        _this.components.waitingScreen.show();

        _this.components.rendererBySearchSettings.lock();

        _this.components.rendererBySortSettings.lock();

        _this.commit('resetSearchSettings');

        _this.commit('setSortMode', 'default');

        _this.components.rendererBySearchSettings.unlock();

        _this.components.rendererBySortSettings.unlock();

        _this._setSectionSettings(e);

        _this._setPaginatorSettings();

        _this._showLoadingMessage();

        _this._render();
      }
    });
    return _this;
  }

  _createClass(RendererBySectionLink, [{
    key: "_setSectionSettings",
    value: function _setSectionSettings(e) {
      var _dataset$menuLinkSect;

      var dataset = e.target.dataset;
      var sectionName = (_dataset$menuLinkSect = dataset.menuLinkSectionName) !== null && _dataset$menuLinkSect !== void 0 ? _dataset$menuLinkSect : dataset.linkSectionName;

      if (sectionName === 'allProducts') {
        this.commit('setSectionData', {
          sectionName: sectionName,
          additionalData: '',
          h1Text: dataset.menuLinkTitleText
        });
        return;
      }

      if (sectionName === 'favoriteProducts') {
        this.commit('setSectionData', {
          sectionName: sectionName,
          additionalData: '',
          h1Text: dataset.menuLinkTitleText
        });
        return;
      }

      if (sectionName === 'productCategory') {
        var _dataset$menuLinkCate, _dataset$menuLinkCate2, _dataset$menuLinkCate3;

        var categoryId = (_dataset$menuLinkCate = dataset.menuLinkCategoryId) !== null && _dataset$menuLinkCate !== void 0 ? _dataset$menuLinkCate : dataset.linkCategoryId;
        var categorySlug = (_dataset$menuLinkCate2 = dataset.menuLinkCategorySlug) !== null && _dataset$menuLinkCate2 !== void 0 ? _dataset$menuLinkCate2 : dataset.linkCategorySlug;
        var categoryName = (_dataset$menuLinkCate3 = dataset.menuLinkCategoryName) !== null && _dataset$menuLinkCate3 !== void 0 ? _dataset$menuLinkCate3 : dataset.linkCategoryName;
        this.commit('setSectionData', {
          sectionName: sectionName,
          additionalData: "".concat(categoryId, ";").concat(categorySlug, ";").concat(categoryName),
          h1Text: categoryName
        });
        return;
      }
    }
  }, {
    key: "_setPaginatorSettings",
    value: function _setPaginatorSettings() {
      this.commit('setStartOffset', 0);
      this.commit('setPageNumber', 1);
    }
  }, {
    key: "_showLoadingMessage",
    value: function _showLoadingMessage() {
      if (Object(_auxiliaryFunctions_allProductsMustBeCached__WEBPACK_IMPORTED_MODULE_4__["default"])()) {
        return;
      }

      this.messenger.render({
        text: 'Загрузка...',
        duration: 9500
      });
    }
  }, {
    key: "_render",
    value: function _render() {
      var _this2 = this;

      if (!this._getRequestPermission()) {
        return;
      }

      this.components.sourceOfFilteredProducts.getFiltered().then(function (_ref) {
        var filteredProducts = _ref.filteredProducts,
            sectionProductsCount = _ref.sectionProductsCount;
        _this2.disabledRequest = false;

        _this2.messenger.hideMessage();

        var viewMode = _this2.state.viewSettings.mode;
        var itemsHtmlArr = filteredProducts.map(function (product) {
          var productObject = Object(_productObject_getProductObject__WEBPACK_IMPORTED_MODULE_1__["default"])(product);
          return Object(_html_productList_productListItem_index_getProductsItemHtml__WEBPACK_IMPORTED_MODULE_2__["default"])(productObject, viewMode);
        });
        var itemsHtml = "<div id=\"productListContent\" class=\"show_block\">".concat(itemsHtmlArr.join(''), "</div>");

        if (Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])('#productListContent')) {
          Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])('#productListContent').remove();
        }

        _this2.wrapper.insertAdjacentHTML('afterbegin', itemsHtml);

        _this2._listenLastItemLoading();

        _this2._setProductsCount(sectionProductsCount);

        _this2._finalActions();
      });
    }
  }, {
    key: "_listenLastItemLoading",
    value: function _listenLastItemLoading() {
      var nodes = Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])('#productListContent').querySelectorAll('.product_item__photo__img');
      var lastNode = nodes[nodes.length - 1];
      lastNode.onload = this.components.waitingScreen.hide();
    }
  }, {
    key: "_setProductsCount",
    value: function _setProductsCount(sectionProductsCount) {
      this.commit('setSectionProductsCount', sectionProductsCount);
      var settings = this.state.paginatorSettings;
      var sectionPageCount = String(Math.ceil(sectionProductsCount / settings.perPage));
      this.commit('setPageCount', sectionPageCount);
    }
  }, {
    key: "_finalActions",
    value: function _finalActions() {
      this.components.favoriteProductsIndicationOnPageLoad.displayFavoriteProducts();
      this.components.publicUrlMaker.publishUrl();
      this.components.rendererOfPaginationBlock.remake();
      var distance = window.pageYOffset + window.innerHeight / 2;
      Object(_auxiliaryFunctions_scrollDocument__WEBPACK_IMPORTED_MODULE_3__["default"])(distance, 'up');
    }
  }, {
    key: "_getRequestPermission",
    value: function _getRequestPermission() {
      var _this3 = this;

      // защита от частых отправок на 10 сек (от двойного нажатия)
      if (this.disabledRequest) {
        return false;
      }

      this.disabledRequest = true;
      setTimeout(function () {
        _this3.disabledRequest = false;
      }, 10000);
      return true;
    }
  }]);

  return RendererBySectionLink;
}(_parentClasses_app_aware__WEBPACK_IMPORTED_MODULE_6__["default"]);



/***/ }),

/***/ "./resources/public-js/productList/listRenderers/rendererBySortSettings.js":
/*!*********************************************************************************!*\
  !*** ./resources/public-js/productList/listRenderers/rendererBySortSettings.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RendererBySortSettings; });
/* harmony import */ var _auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../auxiliaryFunctions/el */ "./resources/public-js/auxiliaryFunctions/el.js");
/* harmony import */ var _productObject_getProductObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../productObject/getProductObject */ "./resources/public-js/productObject/getProductObject.js");
/* harmony import */ var _html_productList_productListItem_index_getProductsItemHtml__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../html/productList/productListItem/index-getProductsItemHtml */ "./resources/public-js/html/productList/productListItem/index-getProductsItemHtml.js");
/* harmony import */ var _auxiliaryFunctions_allProductsMustBeCached__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../auxiliaryFunctions/allProductsMustBeCached */ "./resources/public-js/auxiliaryFunctions/allProductsMustBeCached.js");
/* harmony import */ var _message_frequentAbsoluteFlashMessage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../message/frequentAbsoluteFlashMessage */ "./resources/public-js/message/frequentAbsoluteFlashMessage.js");
/* harmony import */ var _parentClasses_app_aware__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../parentClasses/app/aware */ "./resources/public-js/parentClasses/app/aware.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }








var RendererBySortSettings = /*#__PURE__*/function (_Aware) {
  _inherits(RendererBySortSettings, _Aware);

  var _super = _createSuper(RendererBySortSettings);

  function RendererBySortSettings() {
    var _this;

    _classCallCheck(this, RendererBySortSettings);

    _this = _super.call(this);
    _this.productItemSelector = '[data-product-item]';
    _this.wrapper = Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])('#productList');
    _this.timeWhenSearchSettingsWereLastChanged = 0;
    _this.timeWhenLastRequestWasSent = 0;
    _this.timerId = 0;
    _this.messenger = new _message_frequentAbsoluteFlashMessage__WEBPACK_IMPORTED_MODULE_4__["default"]();
    return _this;
  }

  _createClass(RendererBySortSettings, [{
    key: "checkSortSettings",
    value: function checkSortSettings() {
      if (this.locked) {
        return;
      }

      this._setPaginatorSettings();

      if (Object(_auxiliaryFunctions_allProductsMustBeCached__WEBPACK_IMPORTED_MODULE_3__["default"])()) {
        this._render();
      } else {
        this.timeWhenSearchSettingsWereLastChanged = new Date().getTime();

        this._showLoadingMessage();

        this._renderWithDelay();
      }
    }
  }, {
    key: "_setPaginatorSettings",
    value: function _setPaginatorSettings() {
      this.commit('setStartOffset', 0);
      this.commit('setPageNumber', 1);
    }
  }, {
    key: "_renderWithDelay",
    value: function _renderWithDelay() {
      var _this2 = this;

      var currentTime = new Date().getTime();
      var settingsWereLastChangedAgo = currentTime - this.timeWhenSearchSettingsWereLastChanged;
      var requestWasSentAgo = currentTime - this.timeWhenLastRequestWasSent;

      if (settingsWereLastChangedAgo < 500 || requestWasSentAgo < 2000) {
        clearTimeout(this.timerId);
        this.timerId = setTimeout(function () {
          _this2._renderWithDelay();
        }, 500);
        return;
      } //this._showLoadingMessage();


      this.timeWhenLastRequestWasSent = new Date().getTime(); //setTimeout(() => {this._render();}, 2000);

      this._render();
    }
  }, {
    key: "_showLoadingMessage",
    value: function _showLoadingMessage() {
      this.messenger.render({
        text: 'Загрузка...',
        duration: 9500
      });
    }
  }, {
    key: "_render",
    value: function _render() {
      var _this3 = this;

      this.components.waitingScreen.show();
      this.components.sourceOfFilteredProducts.getFiltered().then(function (_ref) {
        var filteredProducts = _ref.filteredProducts,
            sectionProductsCount = _ref.sectionProductsCount;

        _this3.messenger.hideMessage();

        var viewMode = _this3.state.viewSettings.mode;
        var itemsHtmlArr = filteredProducts.map(function (product) {
          var productObject = Object(_productObject_getProductObject__WEBPACK_IMPORTED_MODULE_1__["default"])(product);
          return Object(_html_productList_productListItem_index_getProductsItemHtml__WEBPACK_IMPORTED_MODULE_2__["default"])(productObject, viewMode);
        });
        var itemsHtml = "<div id=\"productListContent\">".concat(itemsHtmlArr.join(''), "</div>");

        if (Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])('#productListContent')) {
          Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])('#productListContent').remove();
        }

        _this3.wrapper.insertAdjacentHTML('afterbegin', itemsHtml);

        _this3._listenLastItemLoading();

        _this3._setProductsCount(sectionProductsCount);

        _this3._finalActions();

        _this3._showFinalMessage();
      });
    }
  }, {
    key: "_listenLastItemLoading",
    value: function _listenLastItemLoading() {
      var nodes = Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])('#productListContent').querySelectorAll('.product_item__photo__img');
      var lastNode = nodes[nodes.length - 1];
      lastNode.onload = this.components.waitingScreen.hide();
    }
  }, {
    key: "_setProductsCount",
    value: function _setProductsCount(sectionProductsCount) {
      this.commit('setSectionProductsCount', sectionProductsCount);
      var settings = this.state.paginatorSettings;
      var sectionPageCount = String(Math.ceil(sectionProductsCount / settings.perPage));
      this.commit('setPageCount', sectionPageCount);
    }
  }, {
    key: "_finalActions",
    value: function _finalActions() {
      this.components.favoriteProductsIndicationOnPageLoad.displayFavoriteProducts();
      this.components.publicUrlMaker.publishUrl();

      this._makeInvisiblePaginationBlock(); //this.components.rendererOfPaginationBlock.remake();

    }
  }, {
    key: "_makeInvisiblePaginationBlock",
    value: function _makeInvisiblePaginationBlock() {
      var paginationBlock = Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])('#paginationContent');

      if (paginationBlock && !paginationBlock.classList.contains("display_none")) {
        paginationBlock.classList.add("display_none");
      }
    }
  }, {
    key: "_showFinalMessage",
    value: function _showFinalMessage() {
      if (!Object(_auxiliaryFunctions_allProductsMustBeCached__WEBPACK_IMPORTED_MODULE_3__["default"])()) {
        return;
      }

      this.messenger.render({
        text: "\u041E\u0442\u0441\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u043E",
        duration: 1500
      });
    }
  }]);

  return RendererBySortSettings;
}(_parentClasses_app_aware__WEBPACK_IMPORTED_MODULE_5__["default"]);



/***/ }),

/***/ "./resources/public-js/productList/listRenderers/rendererByViewMoreButton.js":
/*!***********************************************************************************!*\
  !*** ./resources/public-js/productList/listRenderers/rendererByViewMoreButton.js ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RendererByViewMoreButton; });
/* harmony import */ var _auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../auxiliaryFunctions/el */ "./resources/public-js/auxiliaryFunctions/el.js");
/* harmony import */ var _productObject_getProductObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../productObject/getProductObject */ "./resources/public-js/productObject/getProductObject.js");
/* harmony import */ var _html_productList_productListItem_index_getProductsItemHtml__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../html/productList/productListItem/index-getProductsItemHtml */ "./resources/public-js/html/productList/productListItem/index-getProductsItemHtml.js");
/* harmony import */ var _auxiliaryFunctions_scrollDocument__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../auxiliaryFunctions/scrollDocument */ "./resources/public-js/auxiliaryFunctions/scrollDocument.js");
/* harmony import */ var _message_frequentAbsoluteFlashMessage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../message/frequentAbsoluteFlashMessage */ "./resources/public-js/message/frequentAbsoluteFlashMessage.js");
/* harmony import */ var _auxiliaryFunctions_allProductsMustBeCached__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../auxiliaryFunctions/allProductsMustBeCached */ "./resources/public-js/auxiliaryFunctions/allProductsMustBeCached.js");
/* harmony import */ var _parentClasses_app_aware__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../parentClasses/app/aware */ "./resources/public-js/parentClasses/app/aware.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }









var RendererByViewMoreButton = /*#__PURE__*/function (_Aware) {
  _inherits(RendererByViewMoreButton, _Aware);

  var _super = _createSuper(RendererByViewMoreButton);

  function RendererByViewMoreButton() {
    var _this;

    _classCallCheck(this, RendererByViewMoreButton);

    _this = _super.call(this);
    _this.messenger = new _message_frequentAbsoluteFlashMessage__WEBPACK_IMPORTED_MODULE_4__["default"]();
    _this.productItemSelector = '[data-product-item]';
    _this.wrapper = Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])('#productList'); //this.container = el('#productListContent'); // не делать указатель

    _this.disabledRequest = false;
    Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])('body').addEventListener('click', function (e) {
      if (e.target.id === 'viewMoreButton') {
        _this.components.waitingScreen.show();

        _this._setPaginatorSettings();

        _this._showLoadingMessage();

        _this._render();
      }
    });
    return _this;
  }

  _createClass(RendererByViewMoreButton, [{
    key: "_setPaginatorSettings",
    value: function _setPaginatorSettings() {
      var offsetOfProductsToLoad = document.querySelectorAll(this.productItemSelector).length;
      this.commit('setStartOffset', offsetOfProductsToLoad);
    }
  }, {
    key: "_showLoadingMessage",
    value: function _showLoadingMessage() {
      if (Object(_auxiliaryFunctions_allProductsMustBeCached__WEBPACK_IMPORTED_MODULE_5__["default"])()) {
        return;
      }

      this.messenger.render({
        text: 'Загрузка...',
        duration: 9500
      });
    }
  }, {
    key: "_render",
    value: function _render() {
      var _this2 = this;

      if (!this._getRequestPermission()) {
        return;
      }

      this.components.sourceOfFilteredProducts.getFiltered().then(function (_ref) {
        var filteredProducts = _ref.filteredProducts,
            sectionProductsCount = _ref.sectionProductsCount;
        _this2.disabledRequest = false;

        _this2.messenger.hideMessage();

        var viewMode = _this2.state.viewSettings.mode;
        var itemsHtmlArr = filteredProducts.map(function (product) {
          var productObject = Object(_productObject_getProductObject__WEBPACK_IMPORTED_MODULE_1__["default"])(product);
          return Object(_html_productList_productListItem_index_getProductsItemHtml__WEBPACK_IMPORTED_MODULE_2__["default"])(productObject, viewMode);
        });
        var itemsHtml = itemsHtmlArr.join(''); //const itemsHtml = `<div class="product_list__content show_block">${ itemsHtmlArr.join('') }</div>`;
        // получать элемент только без ранее созданного указателя

        Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])('#productListContent').insertAdjacentHTML('beforeend', itemsHtml);

        _this2._listenLastItemLoading();

        _this2._setProductsCount(sectionProductsCount);

        _this2._finalActions();
      });
    }
  }, {
    key: "_listenLastItemLoading",
    value: function _listenLastItemLoading() {
      var nodes = Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])('#productListContent').querySelectorAll('.product_item__photo__img');
      var lastNode = nodes[nodes.length - 1];
      lastNode.onload = this.components.waitingScreen.hide();
    }
  }, {
    key: "_setProductsCount",
    value: function _setProductsCount(sectionProductsCount) {
      this.commit('setSectionProductsCount', sectionProductsCount);
      var settings = this.state.paginatorSettings;
      var sectionPageCount = String(Math.ceil(sectionProductsCount / settings.perPage));
      this.commit('setPageCount', sectionPageCount);
    }
  }, {
    key: "_finalActions",
    value: function _finalActions() {
      this.components.favoriteProductsIndicationOnPageLoad.displayFavoriteProducts();

      this._makeInvisiblePaginationBlock();

      Object(_auxiliaryFunctions_scrollDocument__WEBPACK_IMPORTED_MODULE_3__["default"])(200, 'down');
    }
  }, {
    key: "_makeInvisiblePaginationBlock",
    value: function _makeInvisiblePaginationBlock() {
      var paginationBlock = Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])('#paginationContent');

      if (!paginationBlock) {
        return;
      }

      if (!paginationBlock.classList.contains("display_none")) {
        paginationBlock.classList.add("display_none");
      }
    }
  }, {
    key: "_getRequestPermission",
    value: function _getRequestPermission() {
      var _this3 = this;

      // защита от частых отправок на 15 сек (от двойного нажатия)
      if (this.disabledRequest) {
        return false;
      }

      this.disabledRequest = true;
      setTimeout(function () {
        _this3.disabledRequest = false;
      }, 15000);
      return true;
    }
  }]);

  return RendererByViewMoreButton;
}(_parentClasses_app_aware__WEBPACK_IMPORTED_MODULE_6__["default"]);



/***/ }),

/***/ "./resources/public-js/productList/listRenderers/rendererOfViewedProductsByLink.js":
/*!*****************************************************************************************!*\
  !*** ./resources/public-js/productList/listRenderers/rendererOfViewedProductsByLink.js ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RendererOfViewedProductsByLink; });
/* harmony import */ var _auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../auxiliaryFunctions/el */ "./resources/public-js/auxiliaryFunctions/el.js");
/* harmony import */ var _productObject_getProductObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../productObject/getProductObject */ "./resources/public-js/productObject/getProductObject.js");
/* harmony import */ var _html_productList_productListItem_index_getProductsItemHtml__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../html/productList/productListItem/index-getProductsItemHtml */ "./resources/public-js/html/productList/productListItem/index-getProductsItemHtml.js");
/* harmony import */ var _auxiliaryFunctions_scrollDocument__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../auxiliaryFunctions/scrollDocument */ "./resources/public-js/auxiliaryFunctions/scrollDocument.js");
/* harmony import */ var _message_frequentAbsoluteFlashMessage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../message/frequentAbsoluteFlashMessage */ "./resources/public-js/message/frequentAbsoluteFlashMessage.js");
/* harmony import */ var _auxiliaryFunctions_allProductsMustBeCached__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../auxiliaryFunctions/allProductsMustBeCached */ "./resources/public-js/auxiliaryFunctions/allProductsMustBeCached.js");
/* harmony import */ var _parentClasses_app_aware__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../parentClasses/app/aware */ "./resources/public-js/parentClasses/app/aware.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }









var RendererOfViewedProductsByLink = /*#__PURE__*/function (_Aware) {
  _inherits(RendererOfViewedProductsByLink, _Aware);

  var _super = _createSuper(RendererOfViewedProductsByLink);

  function RendererOfViewedProductsByLink() {
    var _this;

    _classCallCheck(this, RendererOfViewedProductsByLink);

    _this = _super.call(this);
    _this.productItemSelector = '[data-product-item]';
    _this.wrapper = Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])('#productList');
    _this.messenger = new _message_frequentAbsoluteFlashMessage__WEBPACK_IMPORTED_MODULE_4__["default"]();
    _this.disabledRequest = false;
    Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])('body').addEventListener('click', function (e) {
      if (e.target.dataset.viewedProductsLink) {
        e.preventDefault();

        _this.components.waitingScreen.show();

        _this.commit('resetSearchSettings');

        _this._setSectionSettings();

        _this._setPaginatorSettings();

        _this._showLoadingMessage();

        _this._render();
      }
    });
    return _this;
  }

  _createClass(RendererOfViewedProductsByLink, [{
    key: "_setSectionSettings",
    value: function _setSectionSettings() {
      this.commit('setSectionData', {
        sectionName: 'viewedProducts',
        additionalData: '',
        h1Text: 'Вы смотрели'
      });
    }
  }, {
    key: "_setPaginatorSettings",
    value: function _setPaginatorSettings() {
      this.commit('setStartOffset', 0);
      this.commit('setPageNumber', 1);
    }
  }, {
    key: "_showLoadingMessage",
    value: function _showLoadingMessage() {
      if (Object(_auxiliaryFunctions_allProductsMustBeCached__WEBPACK_IMPORTED_MODULE_5__["default"])()) {
        return;
      }

      this.messenger.render({
        text: 'Загрузка...',
        duration: 9500
      });
    }
  }, {
    key: "_render",
    value: function _render() {
      var _this2 = this;

      if (!this._getRequestPermission()) {
        return;
      }

      this.components.sourceOfFilteredProducts.getViewedProductsFromServer().then(function (_ref) {
        var filteredProducts = _ref.filteredProducts,
            sectionProductsCount = _ref.sectionProductsCount,
            allViewedIdsStr = _ref.allViewedIdsStr;
        _this2.disabledRequest = false;

        _this2.messenger.hideMessage();

        var viewMode = _this2.state.viewSettings.mode;
        var itemsHtmlArr = filteredProducts.map(function (product) {
          var productObject = Object(_productObject_getProductObject__WEBPACK_IMPORTED_MODULE_1__["default"])(product);
          return Object(_html_productList_productListItem_index_getProductsItemHtml__WEBPACK_IMPORTED_MODULE_2__["default"])(productObject, viewMode);
        });
        var itemsHtml = "<div id=\"productListContent\" class=\"show_block\">".concat(itemsHtmlArr.join(''), "</div>");

        if (Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])('#productListContent')) {
          Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])('#productListContent').remove();
        }

        _this2.wrapper.insertAdjacentHTML('afterbegin', itemsHtml);

        _this2._listenLastItemLoading();

        _this2._setProductsCount(sectionProductsCount);

        _this2._setAllViewedIds(allViewedIdsStr);

        _this2._finalActions();
      });
    }
  }, {
    key: "_listenLastItemLoading",
    value: function _listenLastItemLoading() {
      var nodes = Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])('#productListContent').querySelectorAll('.product_item__photo__img');
      var lastNode = nodes[nodes.length - 1];
      lastNode.onload = this.components.waitingScreen.hide();
    }
  }, {
    key: "_setProductsCount",
    value: function _setProductsCount(sectionProductsCount) {
      this.commit('setSectionProductsCount', sectionProductsCount);
      var settings = this.state.paginatorSettings;
      var sectionPageCount = String(Math.ceil(sectionProductsCount / settings.perPage));
      this.commit('setPageCount', sectionPageCount);
    }
  }, {
    key: "_setAllViewedIds",
    value: function _setAllViewedIds(allViewedIdsStr) {
      this.commit('setSectionData', {
        sectionName: 'viewedProducts',
        additionalData: allViewedIdsStr,
        h1Text: 'Вы смотрели'
      });
    }
  }, {
    key: "_finalActions",
    value: function _finalActions() {
      this.components.favoriteProductsIndicationOnPageLoad.displayFavoriteProducts();
      this.components.publicUrlMaker.publishUrl();
      this.components.rendererOfPaginationBlock.remake();
      var distance = window.pageYOffset + window.innerHeight / 2;
      Object(_auxiliaryFunctions_scrollDocument__WEBPACK_IMPORTED_MODULE_3__["default"])(distance, 'up');
    }
  }, {
    key: "_getRequestPermission",
    value: function _getRequestPermission() {
      var _this3 = this;

      // защита от частых отправок на 10 сек (от двойного нажатия)
      if (this.disabledRequest) {
        return false;
      }

      this.disabledRequest = true;
      setTimeout(function () {
        _this3.disabledRequest = false;
      }, 10000);
      return true;
    }
  }]);

  return RendererOfViewedProductsByLink;
}(_parentClasses_app_aware__WEBPACK_IMPORTED_MODULE_6__["default"]);



/***/ }),

/***/ "./resources/public-js/productList/paginationRenderer/paginationBlockRenderer.js":
/*!***************************************************************************************!*\
  !*** ./resources/public-js/productList/paginationRenderer/paginationBlockRenderer.js ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PaginationBlockRenderer; });
/* harmony import */ var _auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../auxiliaryFunctions/el */ "./resources/public-js/auxiliaryFunctions/el.js");
/* harmony import */ var _parentClasses_app_aware__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../parentClasses/app/aware */ "./resources/public-js/parentClasses/app/aware.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var PaginationBlockRenderer = /*#__PURE__*/function (_Aware) {
  _inherits(PaginationBlockRenderer, _Aware);

  var _super = _createSuper(PaginationBlockRenderer);

  function PaginationBlockRenderer() {
    var _this;

    _classCallCheck(this, PaginationBlockRenderer);

    _this = _super.call(this);
    _this.wrapper = Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])('#paginationWrapper');
    return _this;
  }

  _createClass(PaginationBlockRenderer, [{
    key: "remake",
    value: function remake() {
      if (Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])('#paginationContent')) {
        Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])('#paginationContent').remove();
      }

      var data = this._getPaginationData();

      var contentHtml = data.pageCount > 7 ? this._getComplexPaginationBlockHtml(data) : this._getSimplePaginationBlockHtml(data);
      var totalHtml = "<div id=\"paginationContent\" class=\"pagination_nav__content\">\n                              ".concat(contentHtml, "\n                           </div>");
      this.wrapper.insertAdjacentHTML('afterbegin', totalHtml);
    }
  }, {
    key: "_getPaginationData",
    value: function _getPaginationData() {
      var settings = this.state.paginatorSettings;
      var pageNumber = settings.pageNumber;
      var pageCount = settings.pageCount;
      var firstPageUrl = this.components.publicUrlMaker.getFirstPageUrl();
      var pageUrl = firstPageUrl === '/' ? "/products" : firstPageUrl;
      var lastPageUrl = "".concat(pageUrl, "/").concat(pageCount);
      var prevPageNumber = pageNumber - 1;
      var nextPageNumber = pageNumber + 1;
      var prevRoute = '';

      if (prevPageNumber === 1) {
        prevRoute = firstPageUrl;
      } else if (prevPageNumber > 1) {
        prevRoute = "".concat(pageUrl, "/").concat(prevPageNumber);
      }

      var nextRoute = '';

      if (nextPageNumber <= pageCount) {
        nextRoute = "".concat(pageUrl, "/").concat(nextPageNumber);
      }

      return {
        firstPageUrl: firstPageUrl,
        pageUrl: pageUrl,
        lastPageUrl: lastPageUrl,
        currentPageNumber: pageNumber,
        pageCount: pageCount,
        prevRoute: prevRoute,
        prevPageNumber: prevPageNumber,
        nextRoute: nextRoute,
        nextPageNumber: nextPageNumber
      };
    }
  }, {
    key: "_getComplexPaginationBlockHtml",
    value: function _getComplexPaginationBlockHtml(_ref) {
      var firstPageUrl = _ref.firstPageUrl,
          pageUrl = _ref.pageUrl,
          lastPageUrl = _ref.lastPageUrl,
          currentPageNumber = _ref.currentPageNumber,
          pageCount = _ref.pageCount,
          prevRoute = _ref.prevRoute,
          prevPageNumber = _ref.prevPageNumber,
          nextRoute = _ref.nextRoute,
          nextPageNumber = _ref.nextPageNumber;
      var items = [];

      if (prevRoute) {
        items.push("<a href=\"".concat(prevRoute, "\" data-paginator-page-number=\"").concat(prevPageNumber, "\" class=\"pagination__link pagination__link__arrow_left\"></a>"));
      }

      if (currentPageNumber > 1) {
        items.push("<a href=\"".concat(firstPageUrl, "\" data-paginator-page-number=\"1\" class=\"pagination__link\">\n                    1\n                </a>"));
      }

      items.push("<span data-paginator-page-number=\"".concat(currentPageNumber, "\" class=\"pagination__link_active\">\n                ").concat(currentPageNumber, "\n            </span>"));

      if (currentPageNumber < pageCount) {
        items.push("<a href=\"".concat(lastPageUrl, "\" data-paginator-page-number=\"").concat(pageCount, "\" class=\"pagination__link\">\n                    ").concat(pageCount, "\n                </a>"));
      }

      if (nextRoute) {
        items.push("<a href=\"".concat(nextRoute, "\" data-paginator-page-number=\"").concat(nextPageNumber, "\" class=\"pagination__link pagination__link__arrow_right\"></a>"));
      }

      return items.join('');
    }
  }, {
    key: "_getSimplePaginationBlockHtml",
    value: function _getSimplePaginationBlockHtml(_ref2) {
      var firstPageUrl = _ref2.firstPageUrl,
          pageUrl = _ref2.pageUrl,
          currentPageNumber = _ref2.currentPageNumber,
          pageCount = _ref2.pageCount;

      if (pageCount < 2) {
        return '';
      }

      var items = [];

      for (var i = 1; i <= pageCount; i++) {
        if (currentPageNumber === i) {
          items.push("<span data-paginator-page-number=\"".concat(i, "\" class=\"pagination__link_active\">").concat(i, "</span>"));
        } else if (i === 1) {
          items.push("<a href=\"".concat(firstPageUrl, "\" data-paginator-page-number=\"1\" class=\"pagination__link\">1</a>"));
        } else {
          items.push("<a href=\"".concat(pageUrl, "/").concat(i, "\" data-paginator-page-number=\"").concat(i, "\" class=\"pagination__link\">").concat(i, "</a>"));
        }
      }

      return items.join('');
    }
  }]);

  return PaginationBlockRenderer;
}(_parentClasses_app_aware__WEBPACK_IMPORTED_MODULE_1__["default"]);



/***/ }),

/***/ "./resources/public-js/productList/productFilter/productFilterHandler.js":
/*!*******************************************************************************!*\
  !*** ./resources/public-js/productList/productFilter/productFilterHandler.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ProductFilterHandler; });
/* harmony import */ var _auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../auxiliaryFunctions/el */ "./resources/public-js/auxiliaryFunctions/el.js");
/* harmony import */ var _parentClasses_app_aware__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../parentClasses/app/aware */ "./resources/public-js/parentClasses/app/aware.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var ProductFilterHandler = /*#__PURE__*/function (_Aware) {
  _inherits(ProductFilterHandler, _Aware);

  var _super = _createSuper(ProductFilterHandler);

  function ProductFilterHandler() {
    var _this;

    _classCallCheck(this, ProductFilterHandler);

    _this = _super.call(this);
    _this.currentMinPrice = null;
    _this.currentMaxPrice = null;
    Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])('body').addEventListener('input', function (e) {
      if (!Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])('#productFilterWrapper')) {
        return;
      }

      if (!e.target.id) {
        return;
      }

      var initiator = e.target.id;

      if (initiator.includes('filterCategory')) {
        initiator = 'filterCategory';
      }

      var handlers = {
        minPriceTextInput: _this._minPriceHandler.bind(_assertThisInitialized(_this)),
        maxPriceTextInput: _this._maxPriceHandler.bind(_assertThisInitialized(_this)),
        minPriceRangeInput: _this._minPriceHandler.bind(_assertThisInitialized(_this)),
        maxPriceRangeInput: _this._maxPriceHandler.bind(_assertThisInitialized(_this)),
        filterCategory: _this._categoriesHandler.bind(_assertThisInitialized(_this))
      };

      if (initiator && handlers[initiator]) {
        _this._setSectionSettings();

        handlers[initiator](Number(e.target.value));
      }
    });
    return _this;
  }

  _createClass(ProductFilterHandler, [{
    key: "_setSectionSettings",
    value: function _setSectionSettings() {
      this.commit('setSectionData', {
        sectionName: 'search',
        additionalData: '',
        h1Text: 'Поиск'
      });
    }
  }, {
    key: "_minPriceHandler",
    value: function _minPriceHandler(value) {
      this._checkCurrentMinMaxPrice();

      var filterBlock = this.components.productFilterRenderer;
      var validValue = value < filterBlock.minPriceLimit ? filterBlock.minPriceLimit : value;
      validValue = validValue >= this.currentMaxPrice ? this.currentMaxPrice - 100 : validValue;
      Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])('#minPriceTextInput').value = validValue;
      Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])('#minPriceRangeInput').value = validValue;
      this.currentMinPrice = validValue;

      if (validValue <= filterBlock.minPriceLimit) {
        validValue = 0;
      }

      this.commit('setMinPrice', validValue);
    }
  }, {
    key: "_maxPriceHandler",
    value: function _maxPriceHandler(value) {
      this._checkCurrentMinMaxPrice();

      var filterBlock = this.components.productFilterRenderer;
      var validValue = value > filterBlock.maxPriceLimit ? filterBlock.maxPriceLimit : value;
      validValue = validValue <= this.currentMinPrice ? this.currentMinPrice + 100 : validValue;
      Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])('#maxPriceTextInput').value = validValue;
      Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])('#maxPriceRangeInput').value = validValue;
      this.currentMaxPrice = validValue;

      if (validValue >= filterBlock.maxPriceLimit) {
        validValue = 0;
      }

      this.commit('setMaxPrice', validValue);
    }
  }, {
    key: "_checkCurrentMinMaxPrice",
    value: function _checkCurrentMinMaxPrice() {
      var _this$currentMinPrice, _this$currentMaxPrice;

      var filterBlock = this.components.productFilterRenderer;
      this.currentMinPrice = (_this$currentMinPrice = this.currentMinPrice) !== null && _this$currentMinPrice !== void 0 ? _this$currentMinPrice : filterBlock.minPriceLimit;
      this.currentMaxPrice = (_this$currentMaxPrice = this.currentMaxPrice) !== null && _this$currentMaxPrice !== void 0 ? _this$currentMaxPrice : filterBlock.maxPriceLimit;
    }
  }, {
    key: "_categoriesHandler",
    value: function _categoriesHandler(value) {
      var settings = this.state.searchSettings;
      var idsArr = settings.categoriesIds;
      var index = idsArr.indexOf(value);

      if (index === -1) {
        idsArr.push(value);
      } else {
        idsArr.splice(index, 1);
      }

      this.commit('setCategoriesIds', idsArr);
    }
  }]);

  return ProductFilterHandler;
}(_parentClasses_app_aware__WEBPACK_IMPORTED_MODULE_1__["default"]);



/***/ }),

/***/ "./resources/public-js/productList/productFilter/productFilterRenderer.js":
/*!********************************************************************************!*\
  !*** ./resources/public-js/productList/productFilter/productFilterRenderer.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ProductFilterRenderer; });
/* harmony import */ var _html_productList_filterBlock_getFilterBlockHtml__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../html/productList/filterBlock/getFilterBlockHtml */ "./resources/public-js/html/productList/filterBlock/getFilterBlockHtml.js");
/* harmony import */ var _html_productList_filterBlock_getPriceBlockHtmlForFilter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../html/productList/filterBlock/getPriceBlockHtmlForFilter */ "./resources/public-js/html/productList/filterBlock/getPriceBlockHtmlForFilter.js");
/* harmony import */ var _html_productList_filterBlock_getCategoriesBlockHtmlForFilter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../html/productList/filterBlock/getCategoriesBlockHtmlForFilter */ "./resources/public-js/html/productList/filterBlock/getCategoriesBlockHtmlForFilter.js");
/* harmony import */ var _auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../auxiliaryFunctions/el */ "./resources/public-js/auxiliaryFunctions/el.js");
/* harmony import */ var _http_getJson__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../http/getJson */ "./resources/public-js/http/getJson.js");
/* harmony import */ var _parentClasses_app_aware__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../parentClasses/app/aware */ "./resources/public-js/parentClasses/app/aware.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }








var ProductFilterRenderer = /*#__PURE__*/function (_Aware) {
  _inherits(ProductFilterRenderer, _Aware);

  var _super = _createSuper(ProductFilterRenderer);

  function ProductFilterRenderer() {
    var _this;

    _classCallCheck(this, ProductFilterRenderer);

    _this = _super.call(this);
    _this.priceRangeUrl = '/public-js/product-price-range';
    _this.minPriceLimit = 0;
    _this.maxPriceLimit = 0;
    _this.wrapSelector = "#productFilterWrapper";
    _this.basicCss = 'product_filter';
    _this.showCss = 'show_product_filter';
    _this.hideCss = 'hide_product_filter';

    if (!Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_3__["default"])('.filter_icon__wrapper')) {
      return _possibleConstructorReturn(_this);
    }

    Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_3__["default"])('.filter_icon__wrapper').addEventListener('click', function (e) {
      e.stopPropagation();

      _this._render();
    });
    return _this;
  }

  _createClass(ProductFilterRenderer, [{
    key: "_render",
    value: function _render() {
      if (!Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_3__["default"])(this.wrapSelector)) {
        this._firstRender();

        this._justSetVisibilityToTrue();

        return;
      }

      this._justSetVisibilityToTrue();
    }
  }, {
    key: "_firstRender",
    value: function _firstRender() {
      var html = Object(_html_productList_filterBlock_getFilterBlockHtml__WEBPACK_IMPORTED_MODULE_0__["default"])();
      Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_3__["default"])('body').insertAdjacentHTML('beforeend', html);

      this._setInitialDataForFilter();

      this._listenBodyTag();

      this._listenThisBlock();
    }
  }, {
    key: "_listenBodyTag",
    value: function _listenBodyTag() {
      var _this2 = this;

      Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_3__["default"])('body').addEventListener('click', function (e) {
        _this2._setVisibilityToFalse(e);
      });
    }
  }, {
    key: "_listenThisBlock",
    value: function _listenThisBlock() {
      var _this3 = this;

      Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_3__["default"])('.product_filter__collapse_icon').addEventListener('click', function () {
        _this3._setVisibilityToFalse2();
      });
      Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_3__["default"])('.product_filter__ready_button').addEventListener('click', function () {
        _this3._setVisibilityToFalse2();
      });
    }
  }, {
    key: "_justSetVisibilityToTrue",
    value: function _justSetVisibilityToTrue() {
      if (!Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_3__["default"])(this.wrapSelector)) {
        return;
      }

      document.body.style.overflow = 'hidden';
      Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_3__["default"])(this.wrapSelector).className = "".concat(this.basicCss, " ").concat(this.showCss);
    }
  }, {
    key: "_setVisibilityToFalse",
    value: function _setVisibilityToFalse(e) {
      if (!Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_3__["default"])(this.wrapSelector)) {
        return;
      }

      if (e.target === Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_3__["default"])(this.wrapSelector)) {
        return;
      }

      if (e.target.className.includes('product_filter')) {
        return;
      }

      this._setVisibilityToFalse2();
    }
  }, {
    key: "_setVisibilityToFalse2",
    value: function _setVisibilityToFalse2() {
      // только если блок видимый влиять на свойство overflow
      if (!Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_3__["default"])(this.wrapSelector).classList.contains(this.hideCss)) {
        document.body.style.overflow = 'auto';
      }

      Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_3__["default"])(this.wrapSelector).className = "".concat(this.basicCss, " ").concat(this.hideCss);
    }
  }, {
    key: "_setInitialDataForFilter",
    value: function _setInitialDataForFilter() {
      var _this4 = this;

      this._getPriceRange().then(function (_ref) {
        var minPrice = _ref.minPrice,
            maxPrice = _ref.maxPrice;
        var spinner = Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_3__["default"])('#productFilterPriceSectionSpinner');

        if (spinner) {
          spinner.remove();
        }

        var html = Object(_html_productList_filterBlock_getPriceBlockHtmlForFilter__WEBPACK_IMPORTED_MODULE_1__["default"])();
        Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_3__["default"])('#productFilterPriceSectionWrapper').insertAdjacentHTML('afterbegin', html);
        Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_3__["default"])('#minPriceTextInput').value = minPrice;
        Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_3__["default"])('#maxPriceTextInput').value = maxPrice;
        Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_3__["default"])('#minPriceRangeInput').min = minPrice;
        Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_3__["default"])('#minPriceRangeInput').max = maxPrice;
        Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_3__["default"])('#minPriceRangeInput').value = minPrice;
        Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_3__["default"])('#maxPriceRangeInput').min = minPrice;
        Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_3__["default"])('#maxPriceRangeInput').max = maxPrice;
        Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_3__["default"])('#maxPriceRangeInput').value = maxPrice; // при загрузке страницы с сервера с поисковыми параметрами

        _this4.components.searchSettingsObserverForFilterRenderer.renderPriceOnLoad();
      });

      this.components.categoryCache.getEntireList().then(function (categories) {
        var spinner = Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_3__["default"])('#productFilterCategoriesSpinner');

        if (spinner) {
          spinner.remove();
        }

        var html = Object(_html_productList_filterBlock_getCategoriesBlockHtmlForFilter__WEBPACK_IMPORTED_MODULE_2__["default"])(categories);
        Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_3__["default"])('#productFilterCategoriesWrapper').insertAdjacentHTML('afterbegin', html); // при загрузке страницы с сервера с поисковыми параметрами

        _this4.components.searchSettingsObserverForFilterRenderer.renderCategoryCheckboxes();
      });
    }
  }, {
    key: "_getPriceRange",
    value: function _getPriceRange() {
      var _this5 = this;

      if (this.components.productCache.entireList.length > 0) {
        return new Promise(function (resolve) {
          return resolve(_this5._getPriceRangeFromCachedProducts());
        });
      }

      return Object(_http_getJson__WEBPACK_IMPORTED_MODULE_4__["default"])(this.priceRangeUrl).then(function (data) {
        _this5.minPriceLimit = Number(data.minPrice);
        _this5.maxPriceLimit = Number(data.maxPrice);
        return data;
      });
    }
  }, {
    key: "_getPriceRangeFromCachedProducts",
    value: function _getPriceRangeFromCachedProducts() {
      var products = _toConsumableArray(this.components.productCache.entireList);

      var minPrice = products.reduce(function (previousValue, item) {
        return Number(item.price) < previousValue ? Number(item.price) : previousValue;
      }, 1000000);
      var integerMinPrice = Math.floor(minPrice);
      this.minPriceLimit = integerMinPrice;
      var maxPrice = products.reduce(function (previousValue, item) {
        return Number(item.price) > previousValue ? Number(item.price) : previousValue;
      }, 0);
      var integerMaxPrice = Math.ceil(maxPrice);
      this.maxPriceLimit = integerMaxPrice;
      return {
        minPrice: integerMinPrice,
        maxPrice: integerMaxPrice
      };
    }
  }]);

  return ProductFilterRenderer;
}(_parentClasses_app_aware__WEBPACK_IMPORTED_MODULE_5__["default"]);



/***/ }),

/***/ "./resources/public-js/productList/productFilter/searchSettingsObserverForProductFilterRenderer.js":
/*!*********************************************************************************************************!*\
  !*** ./resources/public-js/productList/productFilter/searchSettingsObserverForProductFilterRenderer.js ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SearchSettingsObserverForProductFilterRenderer; });
/* harmony import */ var _auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../auxiliaryFunctions/el */ "./resources/public-js/auxiliaryFunctions/el.js");
/* harmony import */ var _parentClasses_app_aware__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../parentClasses/app/aware */ "./resources/public-js/parentClasses/app/aware.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var SearchSettingsObserverForProductFilterRenderer = /*#__PURE__*/function (_Aware) {
  _inherits(SearchSettingsObserverForProductFilterRenderer, _Aware);

  var _super = _createSuper(SearchSettingsObserverForProductFilterRenderer);

  function SearchSettingsObserverForProductFilterRenderer() {
    _classCallCheck(this, SearchSettingsObserverForProductFilterRenderer);

    return _super.call(this);
  }

  _createClass(SearchSettingsObserverForProductFilterRenderer, [{
    key: "checkSearchSettings",
    value: function checkSearchSettings() {
      this._renderMinPrice();

      this._renderMaxPrice();

      this.renderCategoryCheckboxes();
    }
  }, {
    key: "_renderMinPrice",
    value: function _renderMinPrice() {
      if (!Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])('#minPriceTextInput')) {
        return;
      }

      var settings = this.state.searchSettings;

      if (settings.minPrice === 0) {
        Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])('#minPriceTextInput').value = Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])('#minPriceRangeInput').min;
        Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])('#minPriceRangeInput').value = Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])('#minPriceRangeInput').min;
      }
    }
  }, {
    key: "_renderMaxPrice",
    value: function _renderMaxPrice() {
      if (!Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])('#maxPriceTextInput')) {
        return;
      }

      var settings = this.state.searchSettings;

      if (settings.maxPrice === 0) {
        Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])('#maxPriceTextInput').value = Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])('#maxPriceRangeInput').max;
        Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])('#maxPriceRangeInput').value = Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])('#maxPriceRangeInput').max;
      }
    } // при загрузке страницы с сервера с поисковыми параметрами

  }, {
    key: "renderPriceOnLoad",
    value: function renderPriceOnLoad() {
      if (!Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])('#minPriceTextInput')) {
        return;
      }

      var settings = this.state.searchSettings;

      if (settings.minPrice > 0) {
        Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])('#minPriceTextInput').value = settings.minPrice;
        Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])('#minPriceRangeInput').value = settings.minPrice;
      }

      if (settings.maxPrice > 0) {
        Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])('#maxPriceTextInput').value = settings.maxPrice;
        Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])('#maxPriceRangeInput').value = settings.maxPrice;
      }
    }
  }, {
    key: "renderCategoryCheckboxes",
    value: function renderCategoryCheckboxes() {
      if (!Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])('#productFilterCategoriesWrapper')) {
        return;
      }

      var settings = this.state.searchSettings;
      var wrapper = Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])('#productFilterCategoriesWrapper');
      var nodes = wrapper.querySelectorAll('[data-product-filter-category-checkbox-input]');
      Object.values(nodes).forEach(function (node) {
        node.checked = false;
      });
      settings.categoriesIds.forEach(function (categoryId) {
        if (Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])("#filterCategory".concat(categoryId))) {
          Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])("#filterCategory".concat(categoryId)).checked = true;
        }
      });
    }
  }]);

  return SearchSettingsObserverForProductFilterRenderer;
}(_parentClasses_app_aware__WEBPACK_IMPORTED_MODULE_1__["default"]);



/***/ }),

/***/ "./resources/public-js/productList/productFilter/topTotalSearchParametersRenderer.js":
/*!*******************************************************************************************!*\
  !*** ./resources/public-js/productList/productFilter/topTotalSearchParametersRenderer.js ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TopTotalSearchParametersRenderer; });
/* harmony import */ var _auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../auxiliaryFunctions/el */ "./resources/public-js/auxiliaryFunctions/el.js");
/* harmony import */ var _parentClasses_app_aware__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../parentClasses/app/aware */ "./resources/public-js/parentClasses/app/aware.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var TopTotalSearchParametersRenderer = /*#__PURE__*/function (_Aware) {
  _inherits(TopTotalSearchParametersRenderer, _Aware);

  var _super = _createSuper(TopTotalSearchParametersRenderer);

  function TopTotalSearchParametersRenderer() {
    var _this;

    _classCallCheck(this, TopTotalSearchParametersRenderer);

    _this = _super.call(this);

    _this._render();

    return _this;
  }

  _createClass(TopTotalSearchParametersRenderer, [{
    key: "_render",
    value: function _render() {
      var _this2 = this;

      var h1Wrapper = Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])('.h1_viewing_sorting_filtering_container');

      if (!h1Wrapper) {
        return;
      }

      var html = "<div class=\"top_total_parameters_of_search\"></div>";
      h1Wrapper.insertAdjacentHTML('afterend', html);
      Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])('.top_total_parameters_of_search').addEventListener('click', function (e) {
        _this2._collapseIconHandler(e);
      });
    }
  }, {
    key: "_collapseIconHandler",
    value: function _collapseIconHandler(e) {
      if (!e.target.dataset) {
        return;
      }

      var entity = e.target.dataset.topSearchParameterEntity;
      var entityValue = e.target.dataset.topSearchParameterValue;

      if (entity === 'minPrice') {
        this.commit('setMinPrice', 0);
      }

      if (entity === 'maxPrice') {
        this.commit('setMaxPrice', 0);
      }

      if (entity === 'category') {
        var categoryId = Number(entityValue);
        var categoryIds = this.state.searchSettings.categoriesIds;
        var index = categoryIds.indexOf(categoryId);

        if (index > -1) {
          categoryIds.splice(index, 1);
        }

        this.commit('setCategoriesIds', categoryIds);
      }
    }
  }, {
    key: "checkSearchSettings",
    value: function checkSearchSettings() {
      this._removeAllItems();

      var totalCount = this._getTotalCountOfSetFilterParameters();

      if (totalCount > 0) {
        this._renderItems();
      }
    }
  }, {
    key: "_renderItems",
    value: function _renderItems() {
      var _this3 = this;

      var settings = this.state.searchSettings;
      var container = Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])('.top_total_parameters_of_search');

      if (settings.minPrice > 0) {
        var minPrice = settings.minPrice;
        var text = "\u043E\u0442 ".concat(minPrice, " \u0440\u0443\u0431.");
        container.insertAdjacentHTML('beforeend', this._getItemHtml('minPrice', minPrice, text));
      }

      if (settings.maxPrice > 0) {
        var maxPrice = settings.maxPrice;

        var _text = "\u0434\u043E ".concat(maxPrice, " \u0440\u0443\u0431.");

        container.insertAdjacentHTML('beforeend', this._getItemHtml('maxPrice', maxPrice, _text));
      }

      var cachedCategories = this.components.categoryCache.getCachedCategories();
      var categoryItems = settings.categoriesIds.map(function (categoryId) {
        var found = cachedCategories.find(function (item) {
          return item.id === categoryId;
        });

        if (!found) {
          return '';
        }

        return _this3._getItemHtml('category', categoryId, found.name);
      });
      var categoryItemsHtml = categoryItems.join('');
      container.insertAdjacentHTML('beforeend', categoryItemsHtml);
    }
  }, {
    key: "_getItemHtml",
    value: function _getItemHtml(entity, value, text) {
      return "<p class=\"top_total_parameters_of_search__item\">\n                    ".concat(text, "\n                    <span\n                        data-top-search-parameter-entity=\"").concat(entity, "\"\n                        data-top-search-parameter-value=\"").concat(value, "\"\n                        class=\"top_total_parameters_of_search__item__collapse_icon\">\n                        &#215;\n                    </span>\n                </p>");
    }
  }, {
    key: "_removeAllItems",
    value: function _removeAllItems() {
      var container = Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])('.top_total_parameters_of_search');

      while (container.firstChild) {
        container.removeChild(container.lastChild);
      }
    }
  }, {
    key: "_getTotalCountOfSetFilterParameters",
    value: function _getTotalCountOfSetFilterParameters() {
      var settings = this.state.searchSettings;
      var totalCount = settings.categoriesIds.length;

      if (settings.minPrice > 0) {
        totalCount += 1;
      }

      if (settings.maxPrice > 0) {
        totalCount += 1;
      }

      return totalCount;
    }
  }]);

  return TopTotalSearchParametersRenderer;
}(_parentClasses_app_aware__WEBPACK_IMPORTED_MODULE_1__["default"]);



/***/ }),

/***/ "./resources/public-js/productList/productFilter/totalIndicatorOfFilterParameters.js":
/*!*******************************************************************************************!*\
  !*** ./resources/public-js/productList/productFilter/totalIndicatorOfFilterParameters.js ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TotalIndicatorOfFilterParameters; });
/* harmony import */ var _auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../auxiliaryFunctions/el */ "./resources/public-js/auxiliaryFunctions/el.js");
/* harmony import */ var _parentClasses_app_aware__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../parentClasses/app/aware */ "./resources/public-js/parentClasses/app/aware.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var TotalIndicatorOfFilterParameters = /*#__PURE__*/function (_Aware) {
  _inherits(TotalIndicatorOfFilterParameters, _Aware);

  var _super = _createSuper(TotalIndicatorOfFilterParameters);

  function TotalIndicatorOfFilterParameters() {
    var _this;

    _classCallCheck(this, TotalIndicatorOfFilterParameters);

    _this = _super.call(this);

    if (!Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])('.filter_icon__wrapper')) {
      return _possibleConstructorReturn(_this);
    }

    _this._render();

    return _this;
  }

  _createClass(TotalIndicatorOfFilterParameters, [{
    key: "_render",
    value: function _render() {
      var html = "<div class=\"filter_icon__total_indicator display_none\"></div>";
      Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])('.filter_icon__wrapper').insertAdjacentHTML('beforeend', html);
    }
  }, {
    key: "checkSearchSettings",
    value: function checkSearchSettings() {
      var totalCount = this._getTotalCountOfSetFilterParameters();

      if (totalCount > 0) {
        this._setVisibilityToTrue();

        Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])('.filter_icon__total_indicator').innerText = totalCount;
      } else {
        this._setVisibilityToFalse();

        Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])('.filter_icon__total_indicator').innerText = '0';
      }
    }
  }, {
    key: "_getTotalCountOfSetFilterParameters",
    value: function _getTotalCountOfSetFilterParameters() {
      var settings = this.state.searchSettings;
      var totalCount = settings.categoriesIds.length;

      if (settings.minPrice > 0) {
        totalCount += 1;
      }

      if (settings.maxPrice > 0) {
        totalCount += 1;
      }

      return totalCount;
    }
  }, {
    key: "_setVisibilityToTrue",
    value: function _setVisibilityToTrue() {
      var indicator = Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])('.filter_icon__total_indicator');

      if (indicator.classList.contains('display_none')) {
        indicator.classList.remove('display_none');
      }
    }
  }, {
    key: "_setVisibilityToFalse",
    value: function _setVisibilityToFalse() {
      var indicator = Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])('.filter_icon__total_indicator');

      if (!indicator.classList.contains('display_none')) {
        indicator.classList.add('display_none');
      }
    }
  }]);

  return TotalIndicatorOfFilterParameters;
}(_parentClasses_app_aware__WEBPACK_IMPORTED_MODULE_1__["default"]);



/***/ }),

/***/ "./resources/public-js/productList/productSorter/productSortMenuRenderer.js":
/*!**********************************************************************************!*\
  !*** ./resources/public-js/productList/productSorter/productSortMenuRenderer.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ProductSortMenuRenderer; });
/* harmony import */ var _auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../auxiliaryFunctions/el */ "./resources/public-js/auxiliaryFunctions/el.js");
/* harmony import */ var _html_productList_sorterBlock_getSorterBlockHtml__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../html/productList/sorterBlock/getSorterBlockHtml */ "./resources/public-js/html/productList/sorterBlock/getSorterBlockHtml.js");
/* harmony import */ var _parentClasses_app_aware__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../parentClasses/app/aware */ "./resources/public-js/parentClasses/app/aware.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }





var ProductSortMenuRenderer = /*#__PURE__*/function (_Aware) {
  _inherits(ProductSortMenuRenderer, _Aware);

  var _super = _createSuper(ProductSortMenuRenderer);

  function ProductSortMenuRenderer() {
    var _this;

    _classCallCheck(this, ProductSortMenuRenderer);

    _this = _super.call(this);
    _this.wrapSelector = "#absoluteListOfSortingValues";
    _this.showCss = 'show_sorting_block';
    _this.hideCss = 'hide_sorting_block';
    _this.arrowSelector = '.sorting_modes__arrow';
    _this.arrowUpCss = 'sorting_modes__arrow_up';

    if (!Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])('.sorting_modes__wrapper')) {
      return _possibleConstructorReturn(_this);
    }

    Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])('.sorting_modes__wrapper').addEventListener('click', function (e) {
      _this._render();
    });
    return _this;
  }

  _createClass(ProductSortMenuRenderer, [{
    key: "checkSortSettings",
    value: function checkSortSettings() {
      var mode = this.state.sortSettings.mode;
      var book = {
        "default": 'По популярности',
        priceUp: 'Сначала недорогие',
        priceDown: 'Сначала дорогие'
      };
      Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])('#sortingModeValueContainer').innerText = book[mode];
    }
  }, {
    key: "_render",
    value: function _render() {
      if (!Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])(this.wrapSelector)) {
        this._firstRender();

        this._justSetVisibilityToTrue();

        return;
      }

      this._switchVisibility();
    }
  }, {
    key: "_firstRender",
    value: function _firstRender() {
      var html = Object(_html_productList_sorterBlock_getSorterBlockHtml__WEBPACK_IMPORTED_MODULE_1__["default"])();
      Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])('.sorting_modes__wrapper').insertAdjacentHTML('beforeend', html);

      this._listenBodyTag();

      this._listenThisBlock();
    }
  }, {
    key: "_listenBodyTag",
    value: function _listenBodyTag() {
      var _this2 = this;

      Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])('body').addEventListener('click', function (e) {
        _this2._setVisibilityToFalse(e);
      });
    }
  }, {
    key: "_listenThisBlock",
    value: function _listenThisBlock() {
      var _this3 = this;

      Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])(this.wrapSelector).addEventListener('click', function (e) {
        e.stopPropagation();

        if (!e.target.dataset.sortValue) {
          return;
        }

        Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])('#sortingModeValueContainer').innerText = e.target.innerText;

        _this3.commit('setSortMode', e.target.dataset.sortValue);

        _this3._setVisibilityToFalse2();
      });
    }
  }, {
    key: "_switchVisibility",
    value: function _switchVisibility() {
      if (Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])(this.wrapSelector).classList.contains(this.hideCss)) {
        this._justSetVisibilityToTrue();
      } else {
        this._setVisibilityToFalse2();
      }
    }
  }, {
    key: "_justSetVisibilityToTrue",
    value: function _justSetVisibilityToTrue() {
      if (!Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])(this.wrapSelector)) {
        return;
      }

      Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])(this.wrapSelector).classList.remove(this.hideCss);
      Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])(this.wrapSelector).classList.add(this.showCss);

      if (!Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])(this.arrowSelector).classList.contains(this.arrowUpCss)) {
        Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])(this.arrowSelector).classList.add(this.arrowUpCss);
      }
    }
  }, {
    key: "_setVisibilityToFalse",
    value: function _setVisibilityToFalse(e) {
      if (!Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])(this.wrapSelector)) {
        return;
      }

      if (e.target === Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])(this.wrapSelector)) {
        return;
      }

      if (e.target.className.includes('sorting_modes')) {
        return;
      }

      this._setVisibilityToFalse2();
    }
  }, {
    key: "_setVisibilityToFalse2",
    value: function _setVisibilityToFalse2() {
      Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])(this.wrapSelector).classList.remove(this.showCss);
      Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])(this.wrapSelector).classList.add(this.hideCss);

      if (Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])(this.arrowSelector).classList.contains(this.arrowUpCss)) {
        Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])(this.arrowSelector).classList.remove(this.arrowUpCss);
      }
    }
  }]);

  return ProductSortMenuRenderer;
}(_parentClasses_app_aware__WEBPACK_IMPORTED_MODULE_2__["default"]);



/***/ }),

/***/ "./resources/public-js/productList/productSorter/sortMenuVisibilityManager.js":
/*!************************************************************************************!*\
  !*** ./resources/public-js/productList/productSorter/sortMenuVisibilityManager.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SortMenuVisibilityManager; });
/* harmony import */ var _auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../auxiliaryFunctions/el */ "./resources/public-js/auxiliaryFunctions/el.js");
/* harmony import */ var _parentClasses_app_aware__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../parentClasses/app/aware */ "./resources/public-js/parentClasses/app/aware.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var SortMenuVisibilityManager = /*#__PURE__*/function (_Aware) {
  _inherits(SortMenuVisibilityManager, _Aware);

  var _super = _createSuper(SortMenuVisibilityManager);

  function SortMenuVisibilityManager() {
    _classCallCheck(this, SortMenuVisibilityManager);

    return _super.call(this);
  }

  _createClass(SortMenuVisibilityManager, [{
    key: "checkSectionSettings",
    value: function checkSectionSettings() {
      var sectionName = this.state.sectionSettings.productSectionName;

      if (['viewedProducts', 'singleProduct'].includes(sectionName)) {
        this._turnOffVisibility();
      } else {
        this._turnOnVisibility();
      }
    }
  }, {
    key: "_turnOffVisibility",
    value: function _turnOffVisibility() {
      var wrapper = Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])('.sorting_modes__wrapper');

      if (wrapper && !wrapper.classList.contains('display_none')) {
        wrapper.classList.add('display_none');
      }

      if (Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])('#relativeWrapperOfSortingValues')) {
        Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])('#relativeWrapperOfSortingValues').remove();
      }
    }
  }, {
    key: "_turnOnVisibility",
    value: function _turnOnVisibility() {
      var wrapper = Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])('.sorting_modes__wrapper');

      if (wrapper && wrapper.classList.contains('display_none')) {
        wrapper.classList.remove('display_none');
      }
    }
  }]);

  return SortMenuVisibilityManager;
}(_parentClasses_app_aware__WEBPACK_IMPORTED_MODULE_1__["default"]);



/***/ }),

/***/ "./resources/public-js/productList/productView/productViewSwitcher.js":
/*!****************************************************************************!*\
  !*** ./resources/public-js/productList/productView/productViewSwitcher.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ProductViewSwitcher; });
/* harmony import */ var _parentClasses_app_aware__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../parentClasses/app/aware */ "./resources/public-js/parentClasses/app/aware.js");
/* harmony import */ var _auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../auxiliaryFunctions/el */ "./resources/public-js/auxiliaryFunctions/el.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var ProductViewSwitcher = /*#__PURE__*/function (_Aware) {
  _inherits(ProductViewSwitcher, _Aware);

  var _super = _createSuper(ProductViewSwitcher);

  function ProductViewSwitcher() {
    var _this;

    _classCallCheck(this, ProductViewSwitcher);

    _this = _super.call(this);
    _this.itemSelector = '.product_item__wrapper';
    _this.iconSrc = {
      bigView: '/images/viewingIconOfBigItems.svg',
      smallView: '/images/viewingIconOfSmallItems.svg'
    };
    Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_1__["default"])('.viewing_icon__wrapper').addEventListener('click', function (e) {
      _this._switch();
    });
    return _this;
  }

  _createClass(ProductViewSwitcher, [{
    key: "_switch",
    value: function _switch() {
      var icon = Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_1__["default"])('#productViewIcon');

      if (icon.src.includes('BigItems')) {
        icon.src = this.iconSrc.smallView;
        icon.classList.toggle('viewing_icon__img_minimized');
        this.commit('setViewMode', 'bigView');

        this._switchToBigView();
      } else {
        icon.src = this.iconSrc.bigView;
        icon.classList.toggle('viewing_icon__img_minimized');
        this.commit('setViewMode', 'smallView');

        this._switchToSmallView();
      }
    }
  }, {
    key: "_switchToBigView",
    value: function _switchToBigView() {
      var nodes = Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_1__["default"])('#productList').querySelectorAll(this.itemSelector);
      Object.values(nodes).forEach(function (node) {
        node.classList.add('big_view');
      });
    }
  }, {
    key: "_switchToSmallView",
    value: function _switchToSmallView() {
      var nodes = Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_1__["default"])('#productList').querySelectorAll(this.itemSelector);
      Object.values(nodes).forEach(function (node) {
        node.classList.remove('big_view');
      });
    }
  }]);

  return ProductViewSwitcher;
}(_parentClasses_app_aware__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./resources/public-js/productList/viewMoreButton/viewMoreButtonManager.js":
/*!*********************************************************************************!*\
  !*** ./resources/public-js/productList/viewMoreButton/viewMoreButtonManager.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ViewMoreButtonManager; });
/* harmony import */ var _auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../auxiliaryFunctions/el */ "./resources/public-js/auxiliaryFunctions/el.js");
/* harmony import */ var _parentClasses_app_aware__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../parentClasses/app/aware */ "./resources/public-js/parentClasses/app/aware.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var ViewMoreButtonManager = /*#__PURE__*/function (_Aware) {
  _inherits(ViewMoreButtonManager, _Aware);

  var _super = _createSuper(ViewMoreButtonManager);

  function ViewMoreButtonManager() {
    var _this;

    _classCallCheck(this, ViewMoreButtonManager);

    _this = _super.call(this);
    _this.productItemSelector = '[data-product-item]';
    return _this;
  }

  _createClass(ViewMoreButtonManager, [{
    key: "checkSectionSettings",
    value: function checkSectionSettings() {
      var sectionName = this.state.sectionSettings.productSectionName;

      if (['singleProduct'].includes(sectionName)) {
        this._turnOffVisibility();
      }
    }
  }, {
    key: "checkPaginatorSettings",
    value: function checkPaginatorSettings() {
      var sectionName = this.state.sectionSettings.productSectionName;

      if (['singleProduct'].includes(sectionName)) {
        this._turnOffVisibility();

        return;
      }

      var numberOfDisplayedProducts = document.querySelectorAll(this.productItemSelector).length;

      if (numberOfDisplayedProducts === 0) {
        this._turnOffVisibility();

        return;
      }

      var settings = this.state.paginatorSettings;

      if (settings.pageNumber > 1) {
        this._turnOffVisibility();

        return;
      }

      if (numberOfDisplayedProducts >= settings.sectionProductsCount) {
        this._turnOffVisibility();
      } else {
        this._turnOnVisibility();
      }
    }
  }, {
    key: "_turnOnVisibility",
    value: function _turnOnVisibility() {
      var viewMoreButton = Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])('#viewMoreButton');

      if (viewMoreButton && viewMoreButton.classList.contains("display_none")) {
        viewMoreButton.classList.remove("display_none");
      }
    }
  }, {
    key: "_turnOffVisibility",
    value: function _turnOffVisibility() {
      var viewMoreButton = Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])('#viewMoreButton');

      if (viewMoreButton && !viewMoreButton.classList.contains("display_none")) {
        viewMoreButton.classList.add("display_none");
      }
    }
  }]);

  return ViewMoreButtonManager;
}(_parentClasses_app_aware__WEBPACK_IMPORTED_MODULE_1__["default"]);



/***/ }),

/***/ "./resources/public-js/productObject/getProductObject.js":
/*!***************************************************************!*\
  !*** ./resources/public-js/productObject/getProductObject.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getProductObject; });
function getProductObject(product) {
  var _product$description;

  var obj = {};
  obj.id = product.id;
  obj.name = product.name;
  obj.slug = product.slug;
  var params = JSON.parse(product.parameters);
  obj.price = params.price;
  obj.categories = params.categories;
  obj.colors = params.colors;
  obj.materials = params.materials;
  obj.photos = JSON.parse(product.photo_set);
  obj.descripton = '';

  if (product !== null && product !== void 0 && (_product$description = product.description) !== null && _product$description !== void 0 && _product$description.description) {
    obj.description = product.description.description;
  }

  return obj;
}

/***/ }),

/***/ "./resources/public-js/productQuickViewer/quickProductDestructor.js":
/*!**************************************************************************!*\
  !*** ./resources/public-js/productQuickViewer/quickProductDestructor.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return quickProductDestructor; });
/* harmony import */ var _auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../auxiliaryFunctions/el */ "./resources/public-js/auxiliaryFunctions/el.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var quickProductDestructor = /*#__PURE__*/function () {
  function quickProductDestructor() {
    var _this = this;

    _classCallCheck(this, quickProductDestructor);

    if (!Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])('.quick_view_manager__collapse_icon')) {
      return;
    }

    Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])('.quick_view_manager__collapse_icon').addEventListener('click', function () {
      _this._removeQuickProduct();
    });
    Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])('.single_product__top_characteristics').addEventListener('click', function (e) {
      // так как линков может быть больше одного
      if (e.target.classList.contains('single_product__category_item__link')) {
        e.preventDefault();

        _this._removeQuickProduct();
      }
    });
  }

  _createClass(quickProductDestructor, [{
    key: "_removeQuickProduct",
    value: function _removeQuickProduct() {
      if (Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])('#quickProduct')) {
        Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])('#quickProduct').remove();
      }

      document.body.style.overflow = 'auto';
    }
  }]);

  return quickProductDestructor;
}();



/***/ }),

/***/ "./resources/public-js/productQuickViewer/singleProductQuickViewer.js":
/*!****************************************************************************!*\
  !*** ./resources/public-js/productQuickViewer/singleProductQuickViewer.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SingleProductQuickViewer; });
/* harmony import */ var _auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../auxiliaryFunctions/el */ "./resources/public-js/auxiliaryFunctions/el.js");
/* harmony import */ var _auxiliaryFunctions_allProductsMustBeCached__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auxiliaryFunctions/allProductsMustBeCached */ "./resources/public-js/auxiliaryFunctions/allProductsMustBeCached.js");
/* harmony import */ var _productObject_getProductObject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../productObject/getProductObject */ "./resources/public-js/productObject/getProductObject.js");
/* harmony import */ var _html_singleProduct_index_getSingleProductHtml__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../html/singleProduct/index-getSingleProductHtml */ "./resources/public-js/html/singleProduct/index-getSingleProductHtml.js");
/* harmony import */ var _productSingle_singleProductKit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../productSingle/singleProductKit */ "./resources/public-js/productSingle/singleProductKit.js");
/* harmony import */ var _parentClasses_app_aware__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../parentClasses/app/aware */ "./resources/public-js/parentClasses/app/aware.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }








var SingleProductQuickViewer = /*#__PURE__*/function (_Aware) {
  _inherits(SingleProductQuickViewer, _Aware);

  var _super = _createSuper(SingleProductQuickViewer);

  function SingleProductQuickViewer() {
    var _this;

    _classCallCheck(this, SingleProductQuickViewer);

    _this = _super.call(this);
    Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])('body').addEventListener('click', function (e) {
      if (e.target.dataset.quickView) {
        e.preventDefault();
        var productId = Number(e.target.dataset.quickView);

        _this._showOneProduct(productId);

        _this.components.viewedProductsAppender.post(productId);
      }
    });
    return _this;
  }

  _createClass(SingleProductQuickViewer, [{
    key: "_showOneProduct",
    value: function _showOneProduct(productId) {
      // на страницах где нет списка товаров
      if (!Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])('#productList')) {
        this._showOneFromServer(productId);

        return;
      } // на страницах где есть список товаров


      if (Object(_auxiliaryFunctions_allProductsMustBeCached__WEBPACK_IMPORTED_MODULE_1__["default"])()) {
        this._showOneFromCache(productId);
      } else {
        this._showOneFromServer(productId);
      }
    }
  }, {
    key: "_showOneFromServer",
    value: function _showOneFromServer(productId) {
      var _this2 = this;

      return this.components.productCache.getOneFromServer(productId).then(function (product) {
        _this2.components.viewedProductsSummaryMaker.remakeWith(product);

        var productObject = Object(_productObject_getProductObject__WEBPACK_IMPORTED_MODULE_2__["default"])(product);

        _this2._renderProduct(productObject);
      });
    }
  }, {
    key: "_showOneFromCache",
    value: function _showOneFromCache(productId) {
      var _this3 = this;

      return this.components.productCache.getEntireList().then(function (data) {
        var list = _toConsumableArray(data);

        var product = list.filter(function (item) {
          return item.id === productId;
        })[0];

        _this3.components.viewedProductsSummaryMaker.remakeWith(product);

        var productObject = Object(_productObject_getProductObject__WEBPACK_IMPORTED_MODULE_2__["default"])(product);

        _this3._renderProduct(productObject);

        Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])('#productDescriptionContainer').innerText = 'Загрузка...';

        _this3.components.productCache.getOneDescription(productId).then(function (data) {
          Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])('#productDescriptionContainer').innerText = data.description;
        });
      });
    }
  }, {
    key: "_renderProduct",
    value: function _renderProduct(product) {
      var singleProductHtml = Object(_html_singleProduct_index_getSingleProductHtml__WEBPACK_IMPORTED_MODULE_3__["default"])(product);
      var quickProductHtml = "<div id=\"quickProduct\" class=\"quick_view_manager__screen\">\n                                      <div class=\"quick_view_manager__content_wrapper\">\n                                          <div class=\"quick_view_manager__content\">\n                                              ".concat(singleProductHtml, "\n                                          </div>\n                                          <div class='quick_view_manager__collapse_icon'>&#215;</div>\n                                      </div>\n                                  </div>");

      if (Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])('#quickProduct')) {
        Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])('#quickProduct').remove();
      } // задержка, чтобы сработало после остальных уловителей кликов на сайте


      setTimeout(function () {
        document.body.style.overflow = 'hidden';
      }, 5);
      Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])('body').insertAdjacentHTML('beforeend', quickProductHtml);
      Object(_productSingle_singleProductKit__WEBPACK_IMPORTED_MODULE_4__["default"])();
    }
  }]);

  return SingleProductQuickViewer;
}(_parentClasses_app_aware__WEBPACK_IMPORTED_MODULE_5__["default"]);



/***/ }),

/***/ "./resources/public-js/productSingle/desktop/largePhotoMaker.js":
/*!**********************************************************************!*\
  !*** ./resources/public-js/productSingle/desktop/largePhotoMaker.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LargePhotoMaker; });
/* harmony import */ var _auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../auxiliaryFunctions/el */ "./resources/public-js/auxiliaryFunctions/el.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var LargePhotoMaker = /*#__PURE__*/function () {
  function LargePhotoMaker() {
    var _this = this;

    _classCallCheck(this, LargePhotoMaker);

    this.largePhotosHtmlWasDone = false;

    if (!Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])('#singleProduct')) {
      return;
    }

    if (!Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])('#smallPhotos')) {
      return;
    }

    Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])('#singleProduct').addEventListener('mouseover', function (e) {
      _this._makeLargePhotos();
    });
  }

  _createClass(LargePhotoMaker, [{
    key: "_makeLargePhotos",
    value: function _makeLargePhotos() {
      if (this.largePhotosHtmlWasDone) {
        return;
      }

      if (Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])('#largePhotos')) {
        return;
      }

      this.largePhotosHtmlWasDone = true;
      var smallPhotosHtml = Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])('#smallPhotos').innerHTML;
      var largePhotosHtml = smallPhotosHtml.replaceAll("products-photos-size2", "products-photos-size5");
      largePhotosHtml = largePhotosHtml.replaceAll("s2-", "s5-");
      largePhotosHtml = largePhotosHtml.replaceAll("data-small-photo", "data-large-photo");
      largePhotosHtml = "<div id=\"largePhotos\" class=\"display_none\">".concat(largePhotosHtml, "</div>");
      Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])('#singleProduct').insertAdjacentHTML('beforeend', largePhotosHtml); //console.log(largePhotosHtml);
    }
  }]);

  return LargePhotoMaker;
}();
/*
export default class DesktopLargePhotoMaker {
    constructor() {
        this.largePhotosHtmlWasDone = false;
        el('body').addEventListener('mouseover', (e) => {
            if (!el('#singleProduct')) {
                return;
            }
            if (!el('#smallPhotos')) {
                return;
            }
            if (needMobileVersion()) {
                return;
            }
            if (el('#largePhotos')) {
                return;
            } else {
                this.largePhotosHtmlWasDone = false;
            }
            this._makeLargePhotos();
        });
    }
*/




/***/ }),

/***/ "./resources/public-js/productSingle/desktop/largePhotoViewer.js":
/*!***********************************************************************!*\
  !*** ./resources/public-js/productSingle/desktop/largePhotoViewer.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DesktopLargePhotoViewer; });
/* harmony import */ var _auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../auxiliaryFunctions/el */ "./resources/public-js/auxiliaryFunctions/el.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var DesktopLargePhotoViewer = /*#__PURE__*/function () {
  function DesktopLargePhotoViewer() {
    var _this = this;

    _classCallCheck(this, DesktopLargePhotoViewer);

    if (!Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])('#mainPhotoContainer')) {
      return;
    }

    this.viewingLargePhotoWasStarted = false;
    this.mainPhotoRatio = 0;
    this.photoContainer = Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])('#mainPhotoContainer');
    this.photoContainer.addEventListener('touchstart', function (e) {
      e.preventDefault();
      e.stopPropagation();
    });
    this.photoContainer.addEventListener('touchmove', function (e) {
      e.preventDefault();
      e.stopPropagation();
    });
    this.photoContainer.addEventListener('touchend', function (e) {
      e.preventDefault();
      e.stopPropagation();
    });
    this.photoContainer.addEventListener('mousemove', function (e) {
      if (!_this.viewingLargePhotoWasStarted) {
        _this._startViewLargePhoto();
      }

      _this._viewLargePhoto(e);
    });
    this.photoContainer.addEventListener('mouseleave', function (e) {
      _this._finishViewLargePhoto();
    });
  }

  _createClass(DesktopLargePhotoViewer, [{
    key: "_startViewLargePhoto",
    value: function _startViewLargePhoto() {
      this.viewingLargePhotoWasStarted = true;
      Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])('#mainPhotoContainer').style.display = 'block';
      Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])('#mainPhoto').className = 'photo_size5';
      var wrapper = this.photoContainer.getBoundingClientRect();
      this.mainPhotoRatio = 1600 / (wrapper.right - wrapper.left); // 1600px ширина фото под лупой
    }
  }, {
    key: "_viewLargePhoto",
    value: function _viewLargePhoto(e) {
      var wrapper = this.photoContainer.getBoundingClientRect();
      var xWay = e.x - wrapper.left;
      var yWay = e.y - wrapper.top;
      this.photoContainer.scrollLeft = xWay * this.mainPhotoRatio / 1.5;
      this.photoContainer.scrollTop = yWay * this.mainPhotoRatio / 1.5; // 1.5 ручной коэффициент, чтобы большое фото под лупой двигалось сразу
    }
  }, {
    key: "_finishViewLargePhoto",
    value: function _finishViewLargePhoto() {
      this.viewingLargePhotoWasStarted = false;
      Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])('#mainPhoto').className = 'photo_size4';
      this.photoContainer.scrollLeft = 0;
      this.photoContainer.scrollTop = 0;
    }
  }]);

  return DesktopLargePhotoViewer;
}();



/***/ }),

/***/ "./resources/public-js/productSingle/desktop/mainPhotoChanger.js":
/*!***********************************************************************!*\
  !*** ./resources/public-js/productSingle/desktop/mainPhotoChanger.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MainPhotoChanger; });
/* harmony import */ var _auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../auxiliaryFunctions/el */ "./resources/public-js/auxiliaryFunctions/el.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var MainPhotoChanger = /*#__PURE__*/function () {
  function MainPhotoChanger() {
    var _this = this;

    _classCallCheck(this, MainPhotoChanger);

    if (!Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])('#singleProduct')) {
      return;
    }

    if (!Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])('#smallPhotos')) {
      return;
    }

    Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])('#smallPhotos').addEventListener('mouseover', function (e) {
      if (e.target.dataset.smallPhoto) {
        _this._changeMainPhoto(e.target.dataset.smallPhoto);
      }
    });
  }

  _createClass(MainPhotoChanger, [{
    key: "_changeMainPhoto",
    value: function _changeMainPhoto(photoNumber) {
      var largePhotoSelector = "[data-large-photo=\"".concat(photoNumber, "\"]");

      if (!Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])(largePhotoSelector)) {
        return;
      }

      Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])('#mainPhoto').src = Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])(largePhotoSelector).src;

      this._refreshPhotoNumberIndicator(photoNumber);
    }
  }, {
    key: "_refreshPhotoNumberIndicator",
    value: function _refreshPhotoNumberIndicator(photoNumber) {
      if (!Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])('#photoNumberIndicator')) {
        return;
      }

      Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])('#photoNumberIndicator').innerText = photoNumber;
    }
  }]);

  return MainPhotoChanger;
}();
/*
export default class DesktopMainPhotoChanger {
    constructor() {
        el('body').addEventListener('mouseover', (e) => {
            if (!el('#singleProduct')) {
                return;
            }
            if (!el('#smallPhotos')) {
                return;
            }
            if (needMobileVersion()) {
                return;
            }
            if (!e.target.dataset) {
                return
            }
            if (!e.target.dataset.smallPhoto) {
                return;
            }
            this._changeMainPhoto(e.target.dataset.smallPhoto);
        });
    }
}
*/




/***/ }),

/***/ "./resources/public-js/productSingle/desktop/smallPhotoScroller.js":
/*!*************************************************************************!*\
  !*** ./resources/public-js/productSingle/desktop/smallPhotoScroller.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SmallPhotoScroller; });
/* harmony import */ var _auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../auxiliaryFunctions/el */ "./resources/public-js/auxiliaryFunctions/el.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var SmallPhotoScroller = /*#__PURE__*/function () {
  function SmallPhotoScroller() {
    var _this = this;

    _classCallCheck(this, SmallPhotoScroller);

    if (!Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])('#smallPhotos-scrollButtonDown')) {
      return;
    }

    this.container = Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])('#smallPhotos');
    this.buttonDown = Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])('#smallPhotos-scrollButtonDown');
    this.buttonUp = Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])('#smallPhotos-scrollButtonUp');
    this.buttonDown.addEventListener('click', function (e) {
      _this.scrollSmallPhoto(350, 'down');
    });
    this.buttonUp.addEventListener('click', function (e) {
      _this.scrollSmallPhoto(350, 'up');
    });
  }

  _createClass(SmallPhotoScroller, [{
    key: "scrollSmallPhoto",
    value: function scrollSmallPhoto(distance, direction) {
      this._changeButtonsVisibilityWhenScrollClick(direction);

      var coveredDistance = 0; // пройденное расстояние

      this._scrollSmallPhoto(distance, coveredDistance, direction);
    }
  }, {
    key: "_scrollSmallPhoto",
    value: function _scrollSmallPhoto(distance, coveredDistance, direction) {
      var _this2 = this;

      if (coveredDistance > distance) {
        this._changeButtonsVisibilityWhenScrollFinish();

        return;
      }

      var step = 3; // px

      if (direction === 'down') {
        this.container.scrollTop += step;
      } else {
        this.container.scrollTop -= step;
      }

      coveredDistance += step;
      setTimeout(function () {
        _this2._scrollSmallPhoto(distance, coveredDistance, direction);
      }, 1);
    }
  }, {
    key: "_changeButtonsVisibilityWhenScrollClick",
    value: function _changeButtonsVisibilityWhenScrollClick(direction) {
      if (direction === 'down') {
        this.buttonUp.style.display = 'block';
      } else {
        this.buttonDown.style.display = 'block';
      }
    }
  }, {
    key: "_changeButtonsVisibilityWhenScrollFinish",
    value: function _changeButtonsVisibilityWhenScrollFinish() {
      if (this.container.scrollTop < 5) {
        this.buttonUp.style.display = 'none';
        return;
      }

      var scrollTop = this.container.scrollTop;
      var clientHeight = this.container.clientHeight;
      var scrollHeight = this.container.scrollHeight;

      if (scrollHeight - (scrollTop + clientHeight) < 10) {
        this.buttonDown.style.display = 'none';
      }
    }
  }]);

  return SmallPhotoScroller;
}();



/***/ }),

/***/ "./resources/public-js/productSingle/mobile/mobileLargePhotoMaker.js":
/*!***************************************************************************!*\
  !*** ./resources/public-js/productSingle/mobile/mobileLargePhotoMaker.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MobileLargePhotoMaker; });
/* harmony import */ var _auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../auxiliaryFunctions/el */ "./resources/public-js/auxiliaryFunctions/el.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var MobileLargePhotoMaker = /*#__PURE__*/function () {
  function MobileLargePhotoMaker() {
    var _this = this;

    _classCallCheck(this, MobileLargePhotoMaker);

    if (!Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])('#smallPhotos')) {
      return;
    }

    this.largePhotosHtmlWasDone = false;
    /*
    el('#singleProduct').addEventListener('touchstart', (e) => {
        e.preventDefault();
        this._makeLargePhotos();
    });
    el('#singleProduct').addEventListener('mouseover', (e) => {
        this._makeLargePhotos();
    });*/
    // задержка чтобы главное фото загрузилось сначала

    setTimeout(function () {
      _this._makeLargePhotos();
    }, 1000);
  }

  _createClass(MobileLargePhotoMaker, [{
    key: "_makeLargePhotos",
    value: function _makeLargePhotos() {
      if (this.largePhotosHtmlWasDone) {
        return;
      }

      if (Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])('#tapeOfLargePhotos')) {
        return;
      }

      this.largePhotosHtmlWasDone = true;
      var nodes = document.querySelectorAll('[data-small-photo]');
      var photoArr = [];
      Object.values(nodes).forEach(function (node) {
        var src = node.src;
        src = src.replace("products-photos-size2", "products-photos-size5");
        src = src.replaceAll("s2-", "s5-");
        var photo = "<img alt=\"\" src=\"".concat(src, "\" class=\"photo_size4\" />");
        photoArr.push(photo);
      });
      var largePhotosHtml = "<div id=\"tapeOfLargePhotos\" class=\"display_flex\">\n                                    ".concat(photoArr.join(''), "\n                                 </div>");

      if (Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])('#mainPhoto')) {
        Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])('#mainPhoto').remove();
      }

      Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])('#mainPhotoContainer').insertAdjacentHTML('afterbegin', largePhotosHtml);
    }
  }]);

  return MobileLargePhotoMaker;
}();



/***/ }),

/***/ "./resources/public-js/productSingle/mobile/mobileLargePhotoScroller.js":
/*!******************************************************************************!*\
  !*** ./resources/public-js/productSingle/mobile/mobileLargePhotoScroller.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MobileLargePhotosScroller; });
/* harmony import */ var _auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../auxiliaryFunctions/el */ "./resources/public-js/auxiliaryFunctions/el.js");
/* harmony import */ var _parentClass_mobileLargePhotoScrollerExecutor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parentClass/mobileLargePhotoScrollerExecutor */ "./resources/public-js/productSingle/mobile/parentClass/mobileLargePhotoScrollerExecutor.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var MobileLargePhotosScroller = /*#__PURE__*/function (_MobileLargePhotosScr) {
  _inherits(MobileLargePhotosScroller, _MobileLargePhotosScr);

  var _super = _createSuper(MobileLargePhotosScroller);

  function MobileLargePhotosScroller() {
    var _this;

    _classCallCheck(this, MobileLargePhotosScroller);

    _this = _super.call(this);

    _this.buttonLeft.addEventListener('click', function (e) {
      e.stopPropagation();

      _this._showNextPhoto(-1);
    });

    _this.buttonRight.addEventListener('click', function (e) {
      e.stopPropagation();

      _this._showNextPhoto(1);
    });

    _this.startTouchX = 0;
    _this.startTouchY = 0;
    _this.startTouchTime = 0;
    Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])('#mainPhotoContainer').addEventListener('touchstart', function (e) {
      _this._startTouchHandler(e);
    });
    Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])('#mainPhotoContainer').addEventListener('touchend', function (e) {
      _this._endTouchHandler(e);
    });
    return _this;
  }

  _createClass(MobileLargePhotosScroller, [{
    key: "_startTouchHandler",
    value: function _startTouchHandler(e) {
      var touchObj = e.changedTouches[0];
      this.startTouchX = touchObj.pageX;
      this.startTouchY = touchObj.pageY;
      this.startTouchTime = new Date().getTime();
    }
  }, {
    key: "_endTouchHandler",
    value: function _endTouchHandler(e) {
      var touchObj = e.changedTouches[0];
      var distanceX = touchObj.pageX - this.startTouchX;
      var distanceY = touchObj.pageY - this.startTouchY;
      var elapsedTime = new Date().getTime() - this.startTouchTime;

      if (elapsedTime < 1000 && distanceX > 30 && Math.abs(distanceY) < 120) {
        this._showNextPhoto(-1);
      }

      if (elapsedTime < 1000 && distanceX < -30 && Math.abs(distanceY) < 120) {
        this._showNextPhoto(1);
      }
    }
  }]);

  return MobileLargePhotosScroller;
}(_parentClass_mobileLargePhotoScrollerExecutor__WEBPACK_IMPORTED_MODULE_1__["default"]);



/***/ }),

/***/ "./resources/public-js/productSingle/mobile/parentClass/mobileLargePhotoScrollerExecutor.js":
/*!**************************************************************************************************!*\
  !*** ./resources/public-js/productSingle/mobile/parentClass/mobileLargePhotoScrollerExecutor.js ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MobileLargePhotoScrollerExecutor; });
/* harmony import */ var _auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../auxiliaryFunctions/el */ "./resources/public-js/auxiliaryFunctions/el.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

 // родительский класс для MobileLargePhotoScroller

var MobileLargePhotoScrollerExecutor = /*#__PURE__*/function () {
  function MobileLargePhotoScrollerExecutor() {
    _classCallCheck(this, MobileLargePhotoScrollerExecutor);

    if (!Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])('#smallPhotos')) {
      return;
    }

    this.container = Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])('#mainPhotoContainer');
    this.buttonLeft = Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])('#largePhotoScrollLeftButton');
    this.buttonRight = Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])('#largePhotoScrollRightButton');
    this.photoNumberIndicator = Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])('#photoNumberIndicator');
    this.indexOfMainPhoto = 0;
    this.numberOfPhotos = this._getPhotoCount();
  }

  _createClass(MobileLargePhotoScrollerExecutor, [{
    key: "_showNextPhoto",
    value: function _showNextPhoto(offset) {
      this._changeButtonsVisibilityWhenScrollClick(offset);

      var wrapper = this.container.getBoundingClientRect();
      var photoWidth = wrapper.right - wrapper.left;
      this.container.scrollLeft = this.indexOfMainPhoto * photoWidth;
      var startX = this.container.scrollLeft;
      this.indexOfMainPhoto += offset;

      if (offset < 0 && this.indexOfMainPhoto < 0) {
        this.indexOfMainPhoto = 0;
        return;
      }

      if (offset > 0 && this.indexOfMainPhoto >= this.numberOfPhotos) {
        this.indexOfMainPhoto = this.numberOfPhotos - 1;
        return;
      }

      this._scrollLargePhotos(offset, startX, photoWidth);
    }
  }, {
    key: "_scrollLargePhotos",
    value: function _scrollLargePhotos(offset, startX, photoWidth) {
      var _this = this;

      var _coveredDistance = Math.abs(this.container.scrollLeft - startX);

      if (_coveredDistance > photoWidth - 10) {
        // 10 - возможная погрешность
        this.container.scrollLeft = this.indexOfMainPhoto * photoWidth;

        this._changeButtonsVisibilityWhenScrollFinish();

        this._refreshPhotoNumberIndicator(this.indexOfMainPhoto + 1);

        return;
      }

      var step = 10; // px

      this.container.scrollLeft += offset * step;
      setTimeout(function () {
        _this._scrollLargePhotos(offset, startX, photoWidth);
      }, 1);
    }
  }, {
    key: "_changeButtonsVisibilityWhenScrollClick",
    value: function _changeButtonsVisibilityWhenScrollClick(offset) {
      if (offset > 0) {
        this.buttonLeft.style.display = 'block';
      } else {
        this.buttonRight.style.display = 'block';
      }
    }
  }, {
    key: "_changeButtonsVisibilityWhenScrollFinish",
    value: function _changeButtonsVisibilityWhenScrollFinish() {
      if (this.container.scrollLeft < 10) {
        this.buttonLeft.style.display = 'none';
        this.buttonRight.style.display = 'block';
        return;
      }

      var scrollLeft = this.container.scrollLeft;
      var clientWidth = this.container.clientWidth;
      var scrollWidth = this.container.scrollWidth;

      if (scrollWidth - (scrollLeft + clientWidth) < 10) {
        this.buttonRight.style.display = 'none';
        this.buttonLeft.style.display = 'block';
      }
    }
  }, {
    key: "_refreshPhotoNumberIndicator",
    value: function _refreshPhotoNumberIndicator(photoNumber) {
      if (!this.photoNumberIndicator) {
        return;
      }

      this.photoNumberIndicator.innerText = photoNumber;
    }
  }, {
    key: "_getPhotoCount",
    value: function _getPhotoCount() {
      var nodes = document.querySelectorAll('[data-small-photo]');
      return nodes.length;
    }
  }]);

  return MobileLargePhotoScrollerExecutor;
}();



/***/ }),

/***/ "./resources/public-js/productSingle/needMobileVersionOfSingleProductKit.js":
/*!**********************************************************************************!*\
  !*** ./resources/public-js/productSingle/needMobileVersionOfSingleProductKit.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return needMobileVersionOfSingleProductKit; });
/* harmony import */ var _auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../auxiliaryFunctions/el */ "./resources/public-js/auxiliaryFunctions/el.js");

function needMobileVersionOfSingleProductKit() {
  var largePhotoScrollRightButton = Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])('#largePhotoScrollRightButton');
  var largePhotoScrollLeftButton = Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])('#largePhotoScrollLeftButton');

  if (!largePhotoScrollRightButton && !largePhotoScrollLeftButton) {
    return false;
  }

  var rightButtonVisibility = largePhotoScrollRightButton.getBoundingClientRect().x > 0;
  var leftButtonVisibility = largePhotoScrollLeftButton.getBoundingClientRect().x > 0;
  return rightButtonVisibility || leftButtonVisibility;
}

/***/ }),

/***/ "./resources/public-js/productSingle/singleProductKit.js":
/*!***************************************************************!*\
  !*** ./resources/public-js/productSingle/singleProductKit.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return singleProductKit; });
/* harmony import */ var _desktop_largePhotoMaker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./desktop/largePhotoMaker */ "./resources/public-js/productSingle/desktop/largePhotoMaker.js");
/* harmony import */ var _desktop_mainPhotoChanger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./desktop/mainPhotoChanger */ "./resources/public-js/productSingle/desktop/mainPhotoChanger.js");
/* harmony import */ var _desktop_largePhotoViewer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./desktop/largePhotoViewer */ "./resources/public-js/productSingle/desktop/largePhotoViewer.js");
/* harmony import */ var _desktop_smallPhotoScroller__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./desktop/smallPhotoScroller */ "./resources/public-js/productSingle/desktop/smallPhotoScroller.js");
/* harmony import */ var _mobile_mobileLargePhotoMaker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mobile/mobileLargePhotoMaker */ "./resources/public-js/productSingle/mobile/mobileLargePhotoMaker.js");
/* harmony import */ var _mobile_mobileLargePhotoScroller__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mobile/mobileLargePhotoScroller */ "./resources/public-js/productSingle/mobile/mobileLargePhotoScroller.js");
/* harmony import */ var _productQuickViewer_quickProductDestructor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../productQuickViewer/quickProductDestructor */ "./resources/public-js/productQuickViewer/quickProductDestructor.js");
/* harmony import */ var _needMobileVersionOfSingleProductKit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./needMobileVersionOfSingleProductKit */ "./resources/public-js/productSingle/needMobileVersionOfSingleProductKit.js");








function singleProductKit() {
  if (!Object(_needMobileVersionOfSingleProductKit__WEBPACK_IMPORTED_MODULE_7__["default"])()) {
    new _desktop_largePhotoMaker__WEBPACK_IMPORTED_MODULE_0__["default"]();
    new _desktop_mainPhotoChanger__WEBPACK_IMPORTED_MODULE_1__["default"]();
    new _desktop_largePhotoViewer__WEBPACK_IMPORTED_MODULE_2__["default"]();
    new _desktop_smallPhotoScroller__WEBPACK_IMPORTED_MODULE_3__["default"]();
  }

  if (Object(_needMobileVersionOfSingleProductKit__WEBPACK_IMPORTED_MODULE_7__["default"])()) {
    new _mobile_mobileLargePhotoMaker__WEBPACK_IMPORTED_MODULE_4__["default"]();
    new _mobile_mobileLargePhotoScroller__WEBPACK_IMPORTED_MODULE_5__["default"]();
  }

  new _productQuickViewer_quickProductDestructor__WEBPACK_IMPORTED_MODULE_6__["default"]();
}

/***/ }),

/***/ "./resources/public-js/productSource/filterOfCachedProducts.js":
/*!*********************************************************************!*\
  !*** ./resources/public-js/productSource/filterOfCachedProducts.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FilterOfCachedProducts; });
/* harmony import */ var _cookie_getCookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../cookie/getCookie */ "./resources/public-js/cookie/getCookie.js");
/* harmony import */ var _parentClasses_app_aware__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../parentClasses/app/aware */ "./resources/public-js/parentClasses/app/aware.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var FilterOfCachedProducts = /*#__PURE__*/function (_Aware) {
  _inherits(FilterOfCachedProducts, _Aware);

  var _super = _createSuper(FilterOfCachedProducts);

  function FilterOfCachedProducts() {
    _classCallCheck(this, FilterOfCachedProducts);

    return _super.call(this);
  }

  _createClass(FilterOfCachedProducts, [{
    key: "doFilter",
    value: function doFilter(products) {
      var filtered = _toConsumableArray(products);

      filtered = this._sectionFilter(filtered);
      var minPrice = this.state.searchSettings.minPrice;

      if (minPrice > 0) {
        filtered = this._minPriceFilter(filtered, minPrice);
      }

      var maxPrice = this.state.searchSettings.maxPrice;

      if (maxPrice > 0) {
        filtered = this._maxPriceFilter(filtered, maxPrice);
      }

      var categoriesIds = this.state.searchSettings.categoriesIds;

      if (categoriesIds.length > 0) {
        filtered = this._categoriesFilter(filtered, categoriesIds);
      }

      var sectionProductsCount = filtered.length;
      filtered = this._offsetFilter(filtered);
      return {
        filteredProducts: filtered,
        sectionProductsCount: sectionProductsCount
      };
    }
  }, {
    key: "_sectionFilter",
    value: function _sectionFilter(items) {
      var settings = this.state.sectionSettings;

      if (['allProducts', 'search', ''].indexOf(settings.productSectionName) !== -1) {
        return items;
      }

      var func = {
        favoriteProducts: this._favoriteProductsFilter,
        viewedProducts: this._viewedProductsFilter,
        productCategory: this._singleCategoryFilter
      };
      var additionalFilteringParameters = settings.additionalData;
      return func[settings.productSectionName](items, additionalFilteringParameters);
    } // section filter

  }, {
    key: "_favoriteProductsFilter",
    value: function _favoriteProductsFilter(items, params) {
      var favoriteIdsStr = Object(_cookie_getCookie__WEBPACK_IMPORTED_MODULE_0__["default"])('favoriteIds');

      if (!Boolean(favoriteIdsStr)) {
        return [];
      }

      var favoriteIdsArr = favoriteIdsStr.split(',').map(function (item) {
        return Number(item);
      });
      return items.filter(function (item) {
        return favoriteIdsArr.includes(item.id);
      });
    } // section filter

  }, {
    key: "_viewedProductsFilter",
    value: function _viewedProductsFilter(items, viewedIdsStr) {
      if (!Boolean(viewedIdsStr)) {
        return [];
      }

      var viewedIdsArr = viewedIdsStr.split(',').map(function (item) {
        return Number(item);
      }); // товары в массиве будут в том порядке в каком и в строке

      var viewed = [];
      viewedIdsArr.forEach(function (id) {
        var found = items.find(function (item) {
          return item.id === id;
        });

        if (found) {
          viewed.push(found);
        }
      });
      return viewed;
    } // section filter

  }, {
    key: "_singleCategoryFilter",
    value: function _singleCategoryFilter(items, params) {
      // params - "categoryId;categorySlug"
      var categoryId = Number(params.split(';')[0]);
      return items.filter(function (item) {
        var parametersArr = JSON.parse(item.parameters);
        var catIdsOfItem = parametersArr.categories.map(function (el) {
          return el.id;
        });
        return catIdsOfItem.includes(categoryId);
      });
    }
  }, {
    key: "_minPriceFilter",
    value: function _minPriceFilter(items, minPrice) {
      return items.filter(function (item) {
        return Number(item.price) >= minPrice;
      });
    }
  }, {
    key: "_maxPriceFilter",
    value: function _maxPriceFilter(items, maxPrice) {
      return items.filter(function (item) {
        return Number(item.price) <= maxPrice;
      });
    }
  }, {
    key: "_categoriesFilter",
    value: function _categoriesFilter(items, searchedIds) {
      return items.filter(function (item) {
        var parametersArr = JSON.parse(item.parameters);
        var catIdsOfItem = parametersArr.categories.map(function (el) {
          return el.id;
        });
        return searchedIds.some(function (el) {
          return catIdsOfItem.includes(el);
        });
      });
    }
  }, {
    key: "_offsetFilter",
    value: function _offsetFilter(items) {
      var startIndex = this.state.paginatorSettings.startOffset;
      var perPage = this.state.paginatorSettings.perPage;
      var endIndex = startIndex + perPage; // елемент с endIndex не будет включен в рез-тат

      return items.slice(startIndex, endIndex);
    }
  }]);

  return FilterOfCachedProducts;
}(_parentClasses_app_aware__WEBPACK_IMPORTED_MODULE_1__["default"]);



/***/ }),

/***/ "./resources/public-js/productSource/productCache.js":
/*!***********************************************************!*\
  !*** ./resources/public-js/productSource/productCache.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ProductCache; });
/* harmony import */ var _http_getJson__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../http/getJson */ "./resources/public-js/http/getJson.js");
/* harmony import */ var _message_absoluteFlashMessage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../message/absoluteFlashMessage */ "./resources/public-js/message/absoluteFlashMessage.js");
/* harmony import */ var _auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auxiliaryFunctions/el */ "./resources/public-js/auxiliaryFunctions/el.js");
/* harmony import */ var _auxiliaryFunctions_allProductsMustBeCached__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auxiliaryFunctions/allProductsMustBeCached */ "./resources/public-js/auxiliaryFunctions/allProductsMustBeCached.js");
/* harmony import */ var _parentClasses_app_aware__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../parentClasses/app/aware */ "./resources/public-js/parentClasses/app/aware.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }







var ProductCache = /*#__PURE__*/function (_Aware) {
  _inherits(ProductCache, _Aware);

  var _super = _createSuper(ProductCache);

  function ProductCache() {
    var _this;

    _classCallCheck(this, ProductCache);

    _this = _super.call(this);
    var productListWrapper = Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_2__["default"])('#productList');
    var viewedProductsSummaryWrapper = Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_2__["default"])('#viewedProductsSummaryWrapper');

    if (!productListWrapper && !viewedProductsSummaryWrapper) {
      return _possibleConstructorReturn(_this);
    }

    _this.entireList = [];
    _this.descriptionsCache = [];
    _this.singlesCache = [];
    _this.entireListUrl = '/public-js/entire-product-list';
    _this.oneDescriptionUrl = '/public-js/one-product-description/';
    _this.oneProductUrl = '/public-js/one-product/';
    _this.productsWereCachedOnPageLoading = false;

    if (productListWrapper && Object(_auxiliaryFunctions_allProductsMustBeCached__WEBPACK_IMPORTED_MODULE_3__["default"])()) {
      _this._loadEntireListOnPageLoading();
      /*
      el('body').addEventListener('mouseover', (e) => {
          this._loadEntireListOnPageLoading();
      });
      */

    }

    return _this;
  }

  _createClass(ProductCache, [{
    key: "getEntireList",
    value: function getEntireList() {
      var _this2 = this;

      if (this.entireList.length > 0) {
        return new Promise(function (resolve) {
          return resolve(_toConsumableArray(_this2.entireList));
        });
      }

      return this._loadEntireList().then(function (data) {
        return _toConsumableArray(data);
      });
    }
  }, {
    key: "_loadEntireList",
    value: function _loadEntireList() {
      var _this3 = this;

      return Object(_http_getJson__WEBPACK_IMPORTED_MODULE_0__["default"])(this.entireListUrl).then(function (data) {
        //console.log(data);
        _this3.entireList = _toConsumableArray(data.products);
        return _toConsumableArray(data.products);
      })["catch"](function () {
        new _message_absoluteFlashMessage__WEBPACK_IMPORTED_MODULE_1__["default"]({
          text: 'Не удалось загрузить товары',
          duration: 3500
        });
      });
    }
  }, {
    key: "_loadEntireListOnPageLoading",
    value: function _loadEntireListOnPageLoading() {
      var _this4 = this;

      if (this.productsWereCachedOnPageLoading) {
        return;
      }

      this.productsWereCachedOnPageLoading = true;
      Object(_http_getJson__WEBPACK_IMPORTED_MODULE_0__["default"])(this.entireListUrl).then(function (data) {
        //console.log(data);
        _this4.entireList = _toConsumableArray(data.products);
      });
    }
  }, {
    key: "getOneDescription",
    value: function getOneDescription(productId) {
      if (this.descriptionsCache.length > 0) {
        var filtered = this.descriptionsCache.filter(function (item) {
          return item.product_id === productId;
        });

        if (filtered.length > 0) {
          return new Promise(function (resolve) {
            return resolve(filtered[0]);
          });
        }
      }

      return this._loadOneDescription(productId).then(function (data) {
        return _objectSpread({}, data);
      });
    }
  }, {
    key: "_loadOneDescription",
    value: function _loadOneDescription(productId) {
      var _this5 = this;

      return Object(_http_getJson__WEBPACK_IMPORTED_MODULE_0__["default"])(this.oneDescriptionUrl + productId).then(function (data) {
        //console.log(data);
        _this5.descriptionsCache.push(data.description);

        return _objectSpread({}, data.description);
      })["catch"](function () {
        new _message_absoluteFlashMessage__WEBPACK_IMPORTED_MODULE_1__["default"]({
          text: 'Не удалось загрузить описание товара',
          duration: 3500
        });
      });
    }
  }, {
    key: "getOneFromServer",
    value: function getOneFromServer(productId) {
      if (this.singlesCache.length > 0) {
        var filtered = this.singlesCache.filter(function (item) {
          return item.id === productId;
        });

        if (filtered.length > 0) {
          return new Promise(function (resolve) {
            return resolve(filtered[0]);
          });
        }
      }

      return this._loadOneProduct(productId).then(function (data) {
        return _objectSpread({}, data);
      });
    }
  }, {
    key: "_loadOneProduct",
    value: function _loadOneProduct(productId) {
      var _this6 = this;

      return Object(_http_getJson__WEBPACK_IMPORTED_MODULE_0__["default"])(this.oneProductUrl + productId).then(function (data) {
        //console.log(data.product);
        _this6.singlesCache.push(data.product);

        return _objectSpread({}, data.product);
      })["catch"](function () {
        new _message_absoluteFlashMessage__WEBPACK_IMPORTED_MODULE_1__["default"]({
          text: 'Не удалось загрузить товар',
          duration: 3500
        });
      });
    }
  }]);

  return ProductCache;
}(_parentClasses_app_aware__WEBPACK_IMPORTED_MODULE_4__["default"]);



/***/ }),

/***/ "./resources/public-js/productSource/sorterOfCachedProducts.js":
/*!*********************************************************************!*\
  !*** ./resources/public-js/productSource/sorterOfCachedProducts.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SorterOfCachedProducts; });
/* harmony import */ var _parentClasses_app_aware__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../parentClasses/app/aware */ "./resources/public-js/parentClasses/app/aware.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var SorterOfCachedProducts = /*#__PURE__*/function (_Aware) {
  _inherits(SorterOfCachedProducts, _Aware);

  var _super = _createSuper(SorterOfCachedProducts);

  function SorterOfCachedProducts() {
    _classCallCheck(this, SorterOfCachedProducts);

    return _super.call(this);
  }

  _createClass(SorterOfCachedProducts, [{
    key: "doSort",
    value: function doSort(products) {
      var sortingMode = this.state.sortSettings.mode;
      var func = {
        "default": this._sortByPosition,
        priceUp: this._sortByPriceUp,
        priceDown: this._sortByPriceDown
      };
      return func[sortingMode](products);
    }
  }, {
    key: "_sortByPosition",
    value: function _sortByPosition(items) {
      return items.sort(function (prev, next) {
        return next.position - prev.position;
      });
    }
  }, {
    key: "_sortByPriceUp",
    value: function _sortByPriceUp(items) {
      return items.sort(function (prev, next) {
        return prev.price - next.price;
      });
    }
  }, {
    key: "_sortByPriceDown",
    value: function _sortByPriceDown(items) {
      return items.sort(function (prev, next) {
        return next.price - prev.price;
      });
    }
  }]);

  return SorterOfCachedProducts;
}(_parentClasses_app_aware__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./resources/public-js/productSource/sourceOfFilteredProducts.js":
/*!***********************************************************************!*\
  !*** ./resources/public-js/productSource/sourceOfFilteredProducts.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SourceOfFilteredProducts; });
/* harmony import */ var _http_getJson__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../http/getJson */ "./resources/public-js/http/getJson.js");
/* harmony import */ var _message_absoluteFlashMessage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../message/absoluteFlashMessage */ "./resources/public-js/message/absoluteFlashMessage.js");
/* harmony import */ var _auxiliaryFunctions_allProductsMustBeCached__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auxiliaryFunctions/allProductsMustBeCached */ "./resources/public-js/auxiliaryFunctions/allProductsMustBeCached.js");
/* harmony import */ var _parentClasses_app_aware__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../parentClasses/app/aware */ "./resources/public-js/parentClasses/app/aware.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }






var SourceOfFilteredProducts = /*#__PURE__*/function (_Aware) {
  _inherits(SourceOfFilteredProducts, _Aware);

  var _super = _createSuper(SourceOfFilteredProducts);

  function SourceOfFilteredProducts() {
    _classCallCheck(this, SourceOfFilteredProducts);

    return _super.call(this);
  }

  _createClass(SourceOfFilteredProducts, [{
    key: "getFiltered",
    value: function getFiltered() {
      if (Object(_auxiliaryFunctions_allProductsMustBeCached__WEBPACK_IMPORTED_MODULE_2__["default"])()) {
        return this._getFilteredProductsFromCache();
      } else {
        return this._getFilteredProductsFromServer();
      }
    }
  }, {
    key: "_getFilteredProductsFromCache",
    value: function _getFilteredProductsFromCache() {
      var _this = this;

      return this.components.productCache.getEntireList().then(function (data) {
        var products = _toConsumableArray(data);

        var sorted = _this.components.sorterOfCachedProducts.doSort(products);

        var _this$components$filt = _this.components.filterOfCachedProducts.doFilter(sorted),
            filteredProducts = _this$components$filt.filteredProducts,
            sectionProductsCount = _this$components$filt.sectionProductsCount;

        return {
          filteredProducts: filteredProducts,
          sectionProductsCount: sectionProductsCount
        };
      });
    }
  }, {
    key: "_getFilteredProductsFromServer",
    value: function _getFilteredProductsFromServer() {
      var url = this.components.searchUrlMaker.getUrl(); //console.log(url);

      return Object(_http_getJson__WEBPACK_IMPORTED_MODULE_0__["default"])(url).then(function (data) {
        // console.log(data);
        return {
          filteredProducts: data.products,
          sectionProductsCount: data.sectionProductsCount
        };
      })["catch"](function () {
        new _message_absoluteFlashMessage__WEBPACK_IMPORTED_MODULE_1__["default"]({
          text: "\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0442\u043E\u0432\u0430\u0440\u044B",
          duration: 3500
        });
      });
    }
  }, {
    key: "getViewedProductsFromServer",
    value: function getViewedProductsFromServer() {
      var url = this.components.searchUrlMaker.getUrl();
      return Object(_http_getJson__WEBPACK_IMPORTED_MODULE_0__["default"])(url).then(function (data) {
        //console.log(data);
        return {
          filteredProducts: data.products,
          sectionProductsCount: data.sectionProductsCount,
          allViewedIdsStr: data.allViewedIdsStr
        };
      })["catch"](function () {
        new _message_absoluteFlashMessage__WEBPACK_IMPORTED_MODULE_1__["default"]({
          text: "\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0442\u043E\u0432\u0430\u0440\u044B",
          duration: 3500
        });
      });
    }
  }]);

  return SourceOfFilteredProducts;
}(_parentClasses_app_aware__WEBPACK_IMPORTED_MODULE_3__["default"]);



/***/ }),

/***/ "./resources/public-js/settings/settingsSetterOnPageLoad.js":
/*!******************************************************************!*\
  !*** ./resources/public-js/settings/settingsSetterOnPageLoad.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SettingsSetterOnPageLoad; });
/* harmony import */ var _auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../auxiliaryFunctions/el */ "./resources/public-js/auxiliaryFunctions/el.js");
/* harmony import */ var _parentClasses_app_aware__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../parentClasses/app/aware */ "./resources/public-js/parentClasses/app/aware.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


 // запускается при загрузке страницы с сервера с поисковыми параметрами в url

var SettingsSetterOnPageLoad = /*#__PURE__*/function (_Aware) {
  _inherits(SettingsSetterOnPageLoad, _Aware);

  var _super = _createSuper(SettingsSetterOnPageLoad);

  function SettingsSetterOnPageLoad() {
    var _this;

    _classCallCheck(this, SettingsSetterOnPageLoad);

    _this = _super.call(this);
    _this.wrapper = Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])('#productList'); // задержка для дать время установить указатель на app при загрузке

    setTimeout(function () {
      _this._setPerPage();

      _this._initSettings();
    }, 100);
    return _this;
  }

  _createClass(SettingsSetterOnPageLoad, [{
    key: "_setPerPage",
    value: function _setPerPage() {
      this.commit('setPerPage', Number(this.wrapper.dataset.perPage));
    }
  }, {
    key: "_initSettings",
    value: function _initSettings() {
      var sectionName = this._ucFirst(Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])('#productList').dataset.productSectionName);

      if (!sectionName) {
        return;
      }

      var setter = "_setterBy".concat(sectionName);

      if (this[setter]) {
        this[setter]();
      }
    }
  }, {
    key: "_setterByAllProducts",
    value: function _setterByAllProducts() {
      this._setSectionSettings();

      this._setPaginatorSettings();

      this._resetDataAttributes();
    }
  }, {
    key: "_setterByProductCategory",
    value: function _setterByProductCategory() {
      this._setSectionSettings();

      this._setPaginatorSettings();

      this._resetDataAttributes();
    }
  }, {
    key: "_setterByFavoriteProducts",
    value: function _setterByFavoriteProducts() {
      this._setSectionSettings();

      this._setPaginatorSettings();

      this._resetDataAttributes();
    }
  }, {
    key: "_setterByViewedProducts",
    value: function _setterByViewedProducts() {
      this._setSectionSettings();

      this._setPaginatorSettings();

      this._resetDataAttributes();
    }
  }, {
    key: "_setterByProductSearchOnServer",
    value: function _setterByProductSearchOnServer() {
      var _this2 = this;

      this.components.categoryCache.getEntireList().then(function () {
        var _paramsArr$;

        // заблокировать на время установки settings
        _this2.components.rendererBySearchSettings.lock();

        _this2.components.rendererBySortSettings.lock();

        var paramsArr = _this2.wrapper.dataset.additionalSectionData.split(';');

        _this2.commit('setMinPrice', Number(paramsArr[0]));

        _this2.commit('setMaxPrice', Number(paramsArr[1]));

        var categoriesIdsStr = paramsArr[2];
        var categoriesIdsArr = categoriesIdsStr.split('-').map(function (id) {
          return Number(id);
        });

        if (categoriesIdsStr === '0' || categoriesIdsStr === '') {
          _this2.commit('setCategoriesIds', []);
        } else {
          _this2.commit('setCategoriesIds', categoriesIdsArr);
        }

        var sortValue = (_paramsArr$ = paramsArr[3]) !== null && _paramsArr$ !== void 0 ? _paramsArr$ : 'default';

        _this2.commit('setSortMode', sortValue);

        var book = {
          "default": 'По популярности',
          priceUp: 'Сначала недорогие',
          priceDown: 'Сначала дорогие'
        };

        if (Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])('#sortingModeValueContainer')) {
          Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])('#sortingModeValueContainer').innerText = book[sortValue];
        } // разблокировать после установки settings


        _this2.components.rendererBySearchSettings.unlock();

        _this2.components.rendererBySortSettings.unlock();

        _this2.commit('setSectionData', {
          sectionName: 'search',
          additionalData: '',
          h1Text: _this2.wrapper.dataset.h1Text
        });

        _this2._setPaginatorSettings();

        _this2._resetDataAttributes();
      });
    }
  }, {
    key: "_setSectionSettings",
    value: function _setSectionSettings() {
      this.commit('setSectionData', {
        sectionName: this.wrapper.dataset.productSectionName,
        additionalData: this.wrapper.dataset.additionalSectionData,
        h1Text: this.wrapper.dataset.h1Text
      });
    }
  }, {
    key: "_setPaginatorSettings",
    value: function _setPaginatorSettings() {
      var currentPage = Number(this.wrapper.dataset.currentPage);
      var startOffset = (currentPage - 1) * this.state.paginatorSettings.perPage;
      this.commit('setSectionProductsCount', Number(this.wrapper.dataset.sectionProductsCount));
      this.commit('setStartOffset', startOffset);
      this.commit('setPageCount', Number(this.wrapper.dataset.sectionPageCount));
      this.commit('setPageNumber', currentPage);
    }
  }, {
    key: "_resetDataAttributes",
    value: function _resetDataAttributes() {
      this.wrapper.dataset.productSectionName = '';
      this.wrapper.dataset.additionalSectionData = '';
      this.wrapper.dataset.h1Text = '';
      this.wrapper.dataset.sectionProductsCount = '0';
      this.wrapper.dataset.sectionPageCount = '0';
      this.wrapper.dataset.currentPage = '0';
    }
  }, {
    key: "_ucFirst",
    value: function _ucFirst(str) {
      if (!str) return str;
      return str[0].toUpperCase() + str.slice(1);
    }
  }]);

  return SettingsSetterOnPageLoad;
}(_parentClasses_app_aware__WEBPACK_IMPORTED_MODULE_1__["default"]);



/***/ }),

/***/ "./resources/public-js/urlMaker/publicUrlMaker.js":
/*!********************************************************!*\
  !*** ./resources/public-js/urlMaker/publicUrlMaker.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PublicUrlMaker; });
/* harmony import */ var _parentClasses_app_aware__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../parentClasses/app/aware */ "./resources/public-js/parentClasses/app/aware.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var PublicUrlMaker = /*#__PURE__*/function (_Aware) {
  _inherits(PublicUrlMaker, _Aware);

  var _super = _createSuper(PublicUrlMaker);

  function PublicUrlMaker() {
    var _this;

    _classCallCheck(this, PublicUrlMaker);

    _this = _super.call(this);
    _this.startUrl = '/product-search';
    return _this;
  } // вида /product-search/price/{minPrice}-{maxPrice}/categories/{categories}/sort/{sortValue}/{pageNumber}


  _createClass(PublicUrlMaker, [{
    key: "publishUrl",
    value: function publishUrl() {
      var url = this.getUrl();
      history.replaceState(null, null, url); //history.pushState(null,null, url);
    }
  }, {
    key: "getUrl",
    value: function getUrl() {
      var pageNumber = this.state.paginatorSettings.pageNumber;

      if (this._isUrlOfMainPage()) {
        return pageNumber > 1 ? "/products/".concat(pageNumber) : "/";
      }

      if (this._isUrlOfSingleProduct()) {
        return this._getSingleProductUrl();
      }

      return pageNumber > 1 ? "".concat(this.getFirstPageUrl(), "/").concat(pageNumber) : "".concat(this.getFirstPageUrl());
    }
  }, {
    key: "getFirstPageUrl",
    value: function getFirstPageUrl() {
      if (this._isUrlOfMainPage()) {
        return "/";
      }

      if (this._isSingleCategoryUrlBasedOnSectionName()) {
        // additionalSectionData - "categoryId;categorySlug"
        var slug = this.state.sectionSettings.additionalData.split(';')[1];
        return "/products/".concat(slug);
      }

      if (this._isUrlOfFavoriteProducts()) {
        return "/favorite-products";
      }

      if (this._isUrlOfViewedProducts()) {
        return "/viewed-products";
      }

      return this._getComplexSearchUrl();
    }
  }, {
    key: "_isUrlOfMainPage",
    value: function _isUrlOfMainPage() {
      var sectionName = this.state.sectionSettings.productSectionName;
      var sortMode = this.state.sortSettings.mode;
      var categoriesIds = this.state.searchSettings.categoriesIds;

      if (categoriesIds.length === 1 && categoriesIds[0] === '0') {
        categoriesIds = [];
      }

      var logicalConditions = [['allProducts', 'search', ''].includes(sectionName), ['default'].includes(sortMode), categoriesIds.length === 0, this.state.searchSettings.minPrice === 0, this.state.searchSettings.maxPrice === 0];
      return logicalConditions.every(function (item) {
        return item === true;
      });
    }
  }, {
    key: "_isSingleCategoryUrlBasedOnSectionName",
    value: function _isSingleCategoryUrlBasedOnSectionName() {
      var sectionName = this.state.sectionSettings.productSectionName;
      var sortMode = this.state.sortSettings.mode;
      var categoriesIds = this.state.searchSettings.categoriesIds;

      if (categoriesIds.length === 1 && categoriesIds[0] === '0') {
        categoriesIds = [];
      }

      var logicalConditions = [['productCategory'].includes(sectionName), ['default'].includes(sortMode), categoriesIds.length === 0];
      return logicalConditions.every(function (item) {
        return item === true;
      });
    }
  }, {
    key: "_isUrlOfFavoriteProducts",
    value: function _isUrlOfFavoriteProducts() {
      var sectionName = this.state.sectionSettings.productSectionName;
      var logicalConditions = [sectionName === 'favoriteProducts'];
      return logicalConditions.every(function (item) {
        return item === true;
      });
    }
  }, {
    key: "_isUrlOfViewedProducts",
    value: function _isUrlOfViewedProducts() {
      var sectionName = this.state.sectionSettings.productSectionName;
      var logicalConditions = [sectionName === 'viewedProducts'];
      return logicalConditions.every(function (item) {
        return item === true;
      });
    }
  }, {
    key: "_isUrlOfSingleProduct",
    value: function _isUrlOfSingleProduct() {
      var sectionName = this.state.sectionSettings.productSectionName;
      var logicalConditions = [sectionName === 'singleProduct'];
      return logicalConditions.every(function (item) {
        return item === true;
      });
    }
  }, {
    key: "_getComplexSearchUrl",
    value: function _getComplexSearchUrl() {
      var totalUrl = [this.startUrl, this._getMinPriceUrl(), this._getMaxPriceUrl(), this._getCategoriesUrl(), this._getSortUrl(), this._getOffsetUrl()];
      return totalUrl.join(''); // вида /product-search/price/{minPrice}-{maxPrice}/categories/{categories}/sort/{sortValue}/page/{pageNumber}
    }
  }, {
    key: "_getMinPriceUrl",
    value: function _getMinPriceUrl() {
      return "/price/".concat(this.state.searchSettings.minPrice, "-");
    }
  }, {
    key: "_getMaxPriceUrl",
    value: function _getMaxPriceUrl() {
      return "".concat(this.state.searchSettings.maxPrice);
    }
  }, {
    key: "_getCategoriesUrl",
    value: function _getCategoriesUrl() {
      var categoriesIds = this.state.searchSettings.categoriesIds;
      var singleCategoryId = Number(this.state.sectionSettings.additionalData.split(';')[0]);

      if (categoriesIds.length === 0 && singleCategoryId === 0) {
        return '/categories/0';
      } else if (categoriesIds.length > 0) {
        return "/categories/".concat(this.state.searchSettings.categoriesIds.join('-'));
      } else if (singleCategoryId > 0) {
        return "/categories/".concat(singleCategoryId);
      }

      return '/categories/0';
    }
  }, {
    key: "_getSortUrl",
    value: function _getSortUrl() {
      var sortMode = this.state.sortSettings.mode;
      return "/sort/".concat(sortMode);
    }
  }, {
    key: "_getOffsetUrl",
    value: function _getOffsetUrl() {
      // return `/page/${this.state.paginatorSettings.pageNumber}`;
      return '';
    }
  }, {
    key: "_getSingleProductUrl",
    value: function _getSingleProductUrl() {
      var settings = this.state.sectionSettings;

      if (settings.productSectionName !== 'singleProduct') {
        return '';
      }

      var data = settings.additionalData.split(';');
      var productId = data[0];
      var productSlug = data[1];
      return "/product/".concat(productSlug, "-").concat(productId);
    }
  }]);

  return PublicUrlMaker;
}(_parentClasses_app_aware__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./resources/public-js/urlMaker/searchUrlMaker.js":
/*!********************************************************!*\
  !*** ./resources/public-js/urlMaker/searchUrlMaker.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SearchUrlMaker; });
/* harmony import */ var _parentClasses_app_aware__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../parentClasses/app/aware */ "./resources/public-js/parentClasses/app/aware.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var SearchUrlMaker = /*#__PURE__*/function (_Aware) {
  _inherits(SearchUrlMaker, _Aware);

  var _super = _createSuper(SearchUrlMaker);

  function SearchUrlMaker() {
    var _this;

    _classCallCheck(this, SearchUrlMaker);

    _this = _super.call(this);
    _this.startUrl = '/public-js/product-search';
    return _this;
  }

  _createClass(SearchUrlMaker, [{
    key: "getUrl",
    value: function getUrl() {
      if (this._isUrlOfFavoriteProducts()) {
        var startOffset = this.state.paginatorSettings.startOffset;
        var sortMode = this.state.sortSettings.mode;
        return "/public-js/favorite-products/sort/".concat(sortMode, "/offset/").concat(startOffset);
      }

      if (this._isUrlOfViewedProducts()) {
        var _startOffset = this.state.paginatorSettings.startOffset;
        return "/public-js/viewed-products/offset/".concat(_startOffset);
      }

      var totalUrl = [this.startUrl, this._getMinPriceUrl(), this._getMaxPriceUrl(), this._getCategoriesUrl(), this._getSortUrl(), this._getOffsetUrl()]; //console.log(totalUrl.join(''));

      return totalUrl.join(''); // вида /product-search/price/{minPrice}-{maxPrice}/categories/{categories}/sort/{sortValue}/offset/{startOffset}
    }
  }, {
    key: "_getMinPriceUrl",
    value: function _getMinPriceUrl() {
      return "/price/".concat(this.state.searchSettings.minPrice, "-");
    }
  }, {
    key: "_getMaxPriceUrl",
    value: function _getMaxPriceUrl() {
      return "".concat(this.state.searchSettings.maxPrice);
    }
  }, {
    key: "_getCategoriesUrl",
    value: function _getCategoriesUrl() {
      if (this.state.searchSettings.categoriesIds.length > 0) {
        return "/categories/".concat(this.state.searchSettings.categoriesIds.join('-'));
      }

      if (this.state.sectionSettings.productSectionName === 'productCategory') {
        return "/categories/".concat(this.state.sectionSettings.additionalData.split(';')[0]);
      }

      return '/categories/0';
    }
  }, {
    key: "_getSortUrl",
    value: function _getSortUrl() {
      return "/sort/".concat(this.state.sortSettings.mode);
    }
  }, {
    key: "_getOffsetUrl",
    value: function _getOffsetUrl() {
      return "/offset/".concat(this.state.paginatorSettings.startOffset);
    }
  }, {
    key: "_isUrlOfFavoriteProducts",
    value: function _isUrlOfFavoriteProducts() {
      var logicalConditions = [this.state.sectionSettings.productSectionName === 'favoriteProducts'];
      return logicalConditions.every(function (item) {
        return item === true;
      });
    }
  }, {
    key: "_isUrlOfViewedProducts",
    value: function _isUrlOfViewedProducts() {
      var logicalConditions = [this.state.sectionSettings.productSectionName === 'viewedProducts'];
      return logicalConditions.every(function (item) {
        return item === true;
      });
    }
  }]);

  return SearchUrlMaker;
}(_parentClasses_app_aware__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./resources/public-js/viewedProducts/viewedProductsAppender.js":
/*!**********************************************************************!*\
  !*** ./resources/public-js/viewedProducts/viewedProductsAppender.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ViewedProductsAppender; });
/* harmony import */ var _http_postJson__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../http/postJson */ "./resources/public-js/http/postJson.js");
/* harmony import */ var _parentClasses_app_aware__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../parentClasses/app/aware */ "./resources/public-js/parentClasses/app/aware.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var ViewedProductsAppender = /*#__PURE__*/function (_Aware) {
  _inherits(ViewedProductsAppender, _Aware);

  var _super = _createSuper(ViewedProductsAppender);

  function ViewedProductsAppender() {
    var _this;

    _classCallCheck(this, ViewedProductsAppender);

    _this = _super.call(this);
    _this.postUrl = '/public-js/viewed-products/post';
    _this.disabledSubmit = false;
    return _this;
  }

  _createClass(ViewedProductsAppender, [{
    key: "post",
    value: function post(productId) {
      if (!this._getSubmitPermission()) {
        return;
      }

      Object(_http_postJson__WEBPACK_IMPORTED_MODULE_0__["default"])(this.postUrl, {
        productId: productId
      }).then(function (data) {
        if (data.success === true) {//
        }
      });
    }
  }, {
    key: "_getSubmitPermission",
    value: function _getSubmitPermission() {
      var _this2 = this;

      // защита от частых отправок на 3 сек
      if (this.disabledSubmit) {
        return false;
      }

      this.disabledSubmit = true;
      setTimeout(function () {
        _this2.disabledSubmit = false;
      }, 3000);
      return true;
    }
  }]);

  return ViewedProductsAppender;
}(_parentClasses_app_aware__WEBPACK_IMPORTED_MODULE_1__["default"]);



/***/ }),

/***/ "./resources/public-js/viewedProducts/viewedProductsSummaryMaker.js":
/*!**************************************************************************!*\
  !*** ./resources/public-js/viewedProducts/viewedProductsSummaryMaker.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ViewedProductsSummaryMaker; });
/* harmony import */ var _auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../auxiliaryFunctions/el */ "./resources/public-js/auxiliaryFunctions/el.js");
/* harmony import */ var _http_getJson__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../http/getJson */ "./resources/public-js/http/getJson.js");
/* harmony import */ var _html_viewedProductsSummary_getViewedProductsItemHtml__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../html/viewedProductsSummary/getViewedProductsItemHtml */ "./resources/public-js/html/viewedProductsSummary/getViewedProductsItemHtml.js");
/* harmony import */ var _html_viewedProductsSummary_getViewedProductsHeaderHtml__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../html/viewedProductsSummary/getViewedProductsHeaderHtml */ "./resources/public-js/html/viewedProductsSummary/getViewedProductsHeaderHtml.js");
/* harmony import */ var _productObject_getProductObject__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../productObject/getProductObject */ "./resources/public-js/productObject/getProductObject.js");
/* harmony import */ var _parentClasses_app_aware__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../parentClasses/app/aware */ "./resources/public-js/parentClasses/app/aware.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }








var ViewedProductsSummaryMaker = /*#__PURE__*/function (_Aware) {
  _inherits(ViewedProductsSummaryMaker, _Aware);

  var _super = _createSuper(ViewedProductsSummaryMaker);

  function ViewedProductsSummaryMaker() {
    var _this;

    _classCallCheck(this, ViewedProductsSummaryMaker);

    _this = _super.call(this);
    _this.wrapperOfSummary = Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])('#viewedProductsSummaryWrapper');

    if (!_this.wrapperOfSummary) {
      return _possibleConstructorReturn(_this);
    }

    _this.idOfContent = 'viewedProductsSummaryContent';
    _this.viewedProductsSummaryWasCreated = false;
    _this.summaryListUrl = '/public-js/viewed-product-summary-list';
    _this.viewedCountUrl = '/public-js/viewed-product-total-count';
    _this.summaryList = []; //this.viewedCount = 0;

    _this.mobileVersion = window.innerWidth <= 900; //px

    Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])('body').addEventListener('mouseover', function (e) {
      _this._firstCreation();
    });
    return _this;
  }

  _createClass(ViewedProductsSummaryMaker, [{
    key: "_firstCreation",
    value: function _firstCreation() {
      var _this2 = this;

      if (this.viewedProductsSummaryWasCreated) {
        return;
      }

      this.viewedProductsSummaryWasCreated = true;

      this._loadSummaryList().then(function (data) {
        var products = _toConsumableArray(data); //console.log(products);


        if (products.length > 0) {
          _this2._renderHeader();

          _this2._renderTotalCount();

          _this2._renderBody(products);
        }
      });
    }
  }, {
    key: "remakeWith",
    value: function remakeWith(product) {
      if (!this.wrapperOfSummary) {
        return;
      }

      var index = this.summaryList.findIndex(function (item) {
        return item.id === product.id;
      });

      if (index > -1) {
        this.summaryList.splice(index, 1);
      }

      this.summaryList = [product].concat(_toConsumableArray(this.summaryList));

      this._renderHeader();

      this._renderTotalCount();

      this._renderBody(this.summaryList);
    }
  }, {
    key: "_renderHeader",
    value: function _renderHeader() {
      if (Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])('#viewedProductsSummaryHeader')) {
        return;
      }

      var html = Object(_html_viewedProductsSummary_getViewedProductsHeaderHtml__WEBPACK_IMPORTED_MODULE_3__["default"])(this.mobileVersion);
      this.wrapperOfSummary.insertAdjacentHTML('afterbegin', html);
    }
  }, {
    key: "_renderTotalCount",
    value: function _renderTotalCount() {
      this._loadViewedCount().then(function (value) {
        Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])('#viewedTotalCount').innerText = value;
      });
    }
  }, {
    key: "_renderBody",
    value: function _renderBody(products) {
      if (this.mobileVersion) {
        return;
      }

      if (Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])("#".concat(this.idOfContent))) {
        Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])("#".concat(this.idOfContent)).remove();
      }

      var itemsHtmlArr = products.map(function (product) {
        var productObject = Object(_productObject_getProductObject__WEBPACK_IMPORTED_MODULE_4__["default"])(product);
        return Object(_html_viewedProductsSummary_getViewedProductsItemHtml__WEBPACK_IMPORTED_MODULE_2__["default"])(productObject);
      });
      var itemsHtml = itemsHtmlArr.join('');
      var totalHtml = "<div id=\"".concat(this.idOfContent, "\">").concat(itemsHtml, "</div>");
      this.wrapperOfSummary.insertAdjacentHTML('beforeend', totalHtml);
    }
  }, {
    key: "_loadSummaryList",
    value: function _loadSummaryList() {
      var _this3 = this;

      return Object(_http_getJson__WEBPACK_IMPORTED_MODULE_1__["default"])(this.summaryListUrl).then(function (data) {
        //console.log(data);
        _this3.summaryList = _toConsumableArray(data.products);
        return _toConsumableArray(data.products);
      });
    }
  }, {
    key: "_loadViewedCount",
    value: function _loadViewedCount() {
      return Object(_http_getJson__WEBPACK_IMPORTED_MODULE_1__["default"])(this.viewedCountUrl).then(function (data) {
        //this.viewedCount = data.value;
        return data.value;
      });
    }
  }]);

  return ViewedProductsSummaryMaker;
}(_parentClasses_app_aware__WEBPACK_IMPORTED_MODULE_5__["default"]);



/***/ }),

/***/ "./resources/public-js/waitingScreen.js":
/*!**********************************************!*\
  !*** ./resources/public-js/waitingScreen.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return WaitingScreen; });
/* harmony import */ var _auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auxiliaryFunctions/el */ "./resources/public-js/auxiliaryFunctions/el.js");
/* harmony import */ var _parentClasses_app_aware__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parentClasses/app/aware */ "./resources/public-js/parentClasses/app/aware.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var WaitingScreen = /*#__PURE__*/function (_Aware) {
  _inherits(WaitingScreen, _Aware);

  var _super = _createSuper(WaitingScreen);

  function WaitingScreen() {
    var _this;

    _classCallCheck(this, WaitingScreen);

    _this = _super.call(this);
    window.onload = _this.hide;
    return _this;
  }

  _createClass(WaitingScreen, [{
    key: "hide",
    value: function hide() {
      if (Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])('#loadingScreen').classList.contains('show_block')) {
        Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])('#loadingScreen').classList.remove('show_block');
      }

      Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])('#loadingScreen').classList.add('hide_block');
    }
  }, {
    key: "show",
    value: function show() {
      if (Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])('#loadingScreen').classList.contains('hide_block')) {
        Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])('#loadingScreen').classList.remove('hide_block');
      } //el('#loadingScreen').classList.add('show_block');

    }
  }]);

  return WaitingScreen;
}(_parentClasses_app_aware__WEBPACK_IMPORTED_MODULE_1__["default"]);



/***/ }),

/***/ 1:
/*!*********************************************************!*\
  !*** multi ./resources/public-js/app/productListApp.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/vagrant/code/laravel/resources/public-js/app/productListApp.js */"./resources/public-js/app/productListApp.js");


/***/ })

/******/ });