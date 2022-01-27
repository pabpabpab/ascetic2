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

/***/ "./resources/js2/absoluteFlashMessage.js":
/*!***********************************************!*\
  !*** ./resources/js2/absoluteFlashMessage.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AbsoluteFlashMessage; });
/* harmony import */ var _el__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./el */ "./resources/js2/el.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var AbsoluteFlashMessage = /*#__PURE__*/function () {
  function AbsoluteFlashMessage(text) {
    _classCallCheck(this, AbsoluteFlashMessage);

    this.text = text;
    this.id = "absoluteMessage".concat(new Date().getTime());

    this._render();
  }

  _createClass(AbsoluteFlashMessage, [{
    key: "_render",
    value: function _render() {
      var _this = this;

      var html = "<div id=\"".concat(this.id, "\" class=\"absolute_message__wrapper absolute_message__show_and_hide\">\n                           <div class=\"absolute_message__div arial_sans-serif\">\n                                ").concat(this.text, "\n                           </div>\n                      </div>");
      Object(_el__WEBPACK_IMPORTED_MODULE_0__["default"])('body').insertAdjacentHTML('beforeend', html);
      setTimeout(function () {
        _this._removeHtml();
      }, 3500);
    }
  }, {
    key: "_removeHtml",
    value: function _removeHtml() {
      Object(_el__WEBPACK_IMPORTED_MODULE_0__["default"])("#".concat(this.id)).remove();
    }
  }]);

  return AbsoluteFlashMessage;
}();



/***/ }),

/***/ "./resources/js2/absoluteMessageWithCloseIcon.js":
/*!*******************************************************!*\
  !*** ./resources/js2/absoluteMessageWithCloseIcon.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AbsoluteMessageWithCloseIcon; });
/* harmony import */ var _el__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./el */ "./resources/js2/el.js");
/* harmony import */ var _parentClasses_visibleBlock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parentClasses/visibleBlock */ "./resources/js2/parentClasses/visibleBlock.js");
/* harmony import */ var _html_getAbsoluteMessageWithCloseIconHtml__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./html/getAbsoluteMessageWithCloseIconHtml */ "./resources/js2/html/getAbsoluteMessageWithCloseIconHtml.js");
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
        Object(_el__WEBPACK_IMPORTED_MODULE_0__["default"])(_this2.wrapSelector).remove();
      }, 1000);
    }
  }]);

  return AbsoluteMessageWithCloseIcon;
}(_parentClasses_visibleBlock__WEBPACK_IMPORTED_MODULE_1__["default"]);



/***/ }),

/***/ "./resources/js2/allProductsMustBeCached.js":
/*!**************************************************!*\
  !*** ./resources/js2/allProductsMustBeCached.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return allProductsMustBeCached; });
/* harmony import */ var _el__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./el */ "./resources/js2/el.js");

function allProductsMustBeCached() {
  var limitForCachingOfProductEntireList = 100;
  var totalProductsCount = Number(Object(_el__WEBPACK_IMPORTED_MODULE_0__["default"])('#productList').dataset.totalProductsCount);
  return totalProductsCount < limitForCachingOfProductEntireList;
}

/***/ }),

/***/ "./resources/js2/auth/authAbsoluteMenu.js":
/*!************************************************!*\
  !*** ./resources/js2/auth/authAbsoluteMenu.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AuthAbsoluteMenu; });
/* harmony import */ var _parentClasses_visibleBlockByClick__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../parentClasses/visibleBlockByClick */ "./resources/js2/parentClasses/visibleBlockByClick.js");
/* harmony import */ var _html_auth_getAuthAbsoluteMenuHtml__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../html/auth/getAuthAbsoluteMenuHtml */ "./resources/js2/html/auth/getAuthAbsoluteMenuHtml.js");
/* harmony import */ var _register__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./register */ "./resources/js2/auth/register.js");
/* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login */ "./resources/js2/auth/login.js");
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

/***/ "./resources/js2/auth/forgotPassword.js":
/*!**********************************************!*\
  !*** ./resources/js2/auth/forgotPassword.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ForgotPassword; });
/* harmony import */ var _el__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../el */ "./resources/js2/el.js");
/* harmony import */ var _parentClasses_absoluteForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../parentClasses/absoluteForm */ "./resources/js2/parentClasses/absoluteForm.js");
/* harmony import */ var _validation_forgotPasswordValidation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../validation/forgotPasswordValidation */ "./resources/js2/validation/forgotPasswordValidation.js");
/* harmony import */ var _html_auth_getForgotPasswordFormHtml__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../html/auth/getForgotPasswordFormHtml */ "./resources/js2/html/auth/getForgotPasswordFormHtml.js");
/* harmony import */ var _absoluteMessageWithCloseIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../absoluteMessageWithCloseIcon */ "./resources/js2/absoluteMessageWithCloseIcon.js");
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
      Object(_el__WEBPACK_IMPORTED_MODULE_0__["default"])('#loginForm').className = "".concat(this.basicCss, " ").concat(this.hideCss);
    }
  }, {
    key: "_getHtml",
    value: function _getHtml() {
      return Object(_html_auth_getForgotPasswordFormHtml__WEBPACK_IMPORTED_MODULE_3__["default"])();
    }
  }, {
    key: "_ultimateSuccess",
    value: function _ultimateSuccess() {
      new _absoluteMessageWithCloseIcon__WEBPACK_IMPORTED_MODULE_4__["default"]({
        text: this.reply
      });
      Object(_el__WEBPACK_IMPORTED_MODULE_0__["default"])('#forgotPasswordForm').className = "".concat(this.basicCss, " ").concat(this.hideCss);
    }
  }, {
    key: "_ultimateFail",
    value: function _ultimateFail() {
      new _absoluteMessageWithCloseIcon__WEBPACK_IMPORTED_MODULE_4__["default"]({
        text: this.reply
      });
      Object(_el__WEBPACK_IMPORTED_MODULE_0__["default"])('#forgotPasswordForm').className = "".concat(this.basicCss, " ").concat(this.hideCss);
    }
  }, {
    key: "_getUserData",
    value: function _getUserData() {
      return {
        email: Object(_el__WEBPACK_IMPORTED_MODULE_0__["default"])('#forgotPasswordEmail').value
      };
    }
  }, {
    key: "_showErrors",
    value: function _showErrors(err) {
      if (!err) err = {};
      Object(_el__WEBPACK_IMPORTED_MODULE_0__["default"])('#forgotPasswordEmailErr').innerText = err.email ? err.email[0] : '';
    }
  }]);

  return ForgotPassword;
}(_parentClasses_absoluteForm__WEBPACK_IMPORTED_MODULE_1__["default"]);



/***/ }),

/***/ "./resources/js2/auth/login.js":
/*!*************************************!*\
  !*** ./resources/js2/auth/login.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Login; });
/* harmony import */ var _el__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../el */ "./resources/js2/el.js");
/* harmony import */ var _parentClasses_absoluteForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../parentClasses/absoluteForm */ "./resources/js2/parentClasses/absoluteForm.js");
/* harmony import */ var _html_auth_getLoginFormHtml__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../html/auth/getLoginFormHtml */ "./resources/js2/html/auth/getLoginFormHtml.js");
/* harmony import */ var _html_auth_getFailedLoginHtml__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../html/auth/getFailedLoginHtml */ "./resources/js2/html/auth/getFailedLoginHtml.js");
/* harmony import */ var _html_auth_getAuthenticatedMenuHtml__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../html/auth/getAuthenticatedMenuHtml */ "./resources/js2/html/auth/getAuthenticatedMenuHtml.js");
/* harmony import */ var _validation_loginValidation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../validation/loginValidation */ "./resources/js2/validation/loginValidation.js");
/* harmony import */ var _absoluteFlashMessage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../absoluteFlashMessage */ "./resources/js2/absoluteFlashMessage.js");
/* harmony import */ var _forgotPassword__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./forgotPassword */ "./resources/js2/auth/forgotPassword.js");
/* harmony import */ var _passwordTypeChanger__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./passwordTypeChanger */ "./resources/js2/auth/passwordTypeChanger.js");
/* harmony import */ var _cookie_getCookie__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../cookie/getCookie */ "./resources/js2/cookie/getCookie.js");
/* harmony import */ var _cookie_setCookie__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../cookie/setCookie */ "./resources/js2/cookie/setCookie.js");
/* harmony import */ var _favoriteProducts_favoriteProductsIndicationOnPageLoad__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../favoriteProducts/favoriteProductsIndicationOnPageLoad */ "./resources/js2/favoriteProducts/favoriteProductsIndicationOnPageLoad.js");
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
      if (!Object(_el__WEBPACK_IMPORTED_MODULE_0__["default"])('#authAbsoluteMenu')) return;
      Object(_el__WEBPACK_IMPORTED_MODULE_0__["default"])('#authAbsoluteMenu').className = "auth_absolute_menu__wrapper hide_block";
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

      Object(_el__WEBPACK_IMPORTED_MODULE_0__["default"])('#authMenuContent').remove();
      var html = Object(_html_auth_getAuthenticatedMenuHtml__WEBPACK_IMPORTED_MODULE_4__["default"])(data.userName, data.isAdmin);
      Object(_el__WEBPACK_IMPORTED_MODULE_0__["default"])('#authMenu').insertAdjacentHTML('afterbegin', html);
      Object(_el__WEBPACK_IMPORTED_MODULE_0__["default"])(this.wrapSelector).className = "".concat(this.basicCss, " ").concat(this.hideCss);
      setTimeout(function () {
        Object(_el__WEBPACK_IMPORTED_MODULE_0__["default"])(_this2.wrapSelector).remove();
      }, 3000); // чтобы успел отработать hideCss

      new _absoluteFlashMessage__WEBPACK_IMPORTED_MODULE_6__["default"]("\u0414\u043E\u0431\u0440\u043E \u043F\u043E\u0436\u0430\u043B\u043E\u0432\u0430\u0442\u044C, ".concat(data.userName));
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
        email: Object(_el__WEBPACK_IMPORTED_MODULE_0__["default"])('#loginEmail').value,
        password: Object(_el__WEBPACK_IMPORTED_MODULE_0__["default"])('#loginPassword').value,
        remember: Object(_el__WEBPACK_IMPORTED_MODULE_0__["default"])('#loginRemember').value,
        favoriteIds: Object(_cookie_getCookie__WEBPACK_IMPORTED_MODULE_9__["default"])('favoriteIds') // для слияния фронт (которые могут быть) и бэк favoriteIds

      };
    }
  }, {
    key: "_showErrors",
    value: function _showErrors(err) {
      if (!err) err = {};
      Object(_el__WEBPACK_IMPORTED_MODULE_0__["default"])('#loginEmailErr').innerText = err.email ? err.email[0] : '';
      Object(_el__WEBPACK_IMPORTED_MODULE_0__["default"])('#loginPasswordErr').innerText = err.password ? err.password[0] : '';

      if (Object(_el__WEBPACK_IMPORTED_MODULE_0__["default"])('#failedLoginErrorContent')) {
        Object(_el__WEBPACK_IMPORTED_MODULE_0__["default"])('#failedLoginErrorContent').remove();
      }

      if (err.failedLogin) {
        var html = Object(_html_auth_getFailedLoginHtml__WEBPACK_IMPORTED_MODULE_3__["default"])();
        Object(_el__WEBPACK_IMPORTED_MODULE_0__["default"])('#failedLoginErr').insertAdjacentHTML('afterbegin', html);
      }
    }
  }, {
    key: "_indicateFavoriteProductsAfterLogin",
    value: function _indicateFavoriteProductsAfterLogin() {
      new _favoriteProducts_favoriteProductsIndicationOnPageLoad__WEBPACK_IMPORTED_MODULE_11__["default"]();
      var idsStr = Object(_cookie_getCookie__WEBPACK_IMPORTED_MODULE_9__["default"])('favoriteIds');
      var total = Boolean(idsStr) ? idsStr.split(',').length : 0;
      Object(_el__WEBPACK_IMPORTED_MODULE_0__["default"])('.topMenu-favIcon-total').innerText = total;
    }
  }]);

  return Login;
}(_parentClasses_absoluteForm__WEBPACK_IMPORTED_MODULE_1__["default"]);



/***/ }),

/***/ "./resources/js2/auth/passwordTypeChanger.js":
/*!***************************************************!*\
  !*** ./resources/js2/auth/passwordTypeChanger.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PasswordTypeChanger; });
/* harmony import */ var _el__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../el */ "./resources/js2/el.js");
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

    if (!Object(_el__WEBPACK_IMPORTED_MODULE_0__["default"])(this.closedEyeSelector)) {
      return;
    }

    if (!Object(_el__WEBPACK_IMPORTED_MODULE_0__["default"])(this.openedEyeSelector)) {
      return;
    }

    Object(_el__WEBPACK_IMPORTED_MODULE_0__["default"])(this.closedEyeSelector).addEventListener('click', function (e) {
      e.stopPropagation();

      _this._changePasswordType('toText');
    });
    Object(_el__WEBPACK_IMPORTED_MODULE_0__["default"])(this.openedEyeSelector).addEventListener('click', function (e) {
      e.stopPropagation();

      _this._changePasswordType('toPassword');
    });
  }

  _createClass(PasswordTypeChanger, [{
    key: "_changePasswordType",
    value: function _changePasswordType(direction) {
      if (direction === 'toText') {
        Object(_el__WEBPACK_IMPORTED_MODULE_0__["default"])(this.passwordInputSelector).type = 'text';
        Object(_el__WEBPACK_IMPORTED_MODULE_0__["default"])(this.closedEyeSelector).style.display = 'none';
        Object(_el__WEBPACK_IMPORTED_MODULE_0__["default"])(this.openedEyeSelector).style.display = 'block';
      } else {
        Object(_el__WEBPACK_IMPORTED_MODULE_0__["default"])(this.passwordInputSelector).type = 'password';
        Object(_el__WEBPACK_IMPORTED_MODULE_0__["default"])(this.closedEyeSelector).style.display = 'block';
        Object(_el__WEBPACK_IMPORTED_MODULE_0__["default"])(this.openedEyeSelector).style.display = 'none';
      }
    }
  }]);

  return PasswordTypeChanger;
}();



/***/ }),

/***/ "./resources/js2/auth/register.js":
/*!****************************************!*\
  !*** ./resources/js2/auth/register.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Register; });
/* harmony import */ var _el_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../el.js */ "./resources/js2/el.js");
/* harmony import */ var _parentClasses_absoluteForm_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../parentClasses/absoluteForm.js */ "./resources/js2/parentClasses/absoluteForm.js");
/* harmony import */ var _html_auth_getRegisterFormHtml_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../html/auth/getRegisterFormHtml.js */ "./resources/js2/html/auth/getRegisterFormHtml.js");
/* harmony import */ var _validation_registerValidation_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../validation/registerValidation.js */ "./resources/js2/validation/registerValidation.js");
/* harmony import */ var _absoluteFlashMessage_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../absoluteFlashMessage.js */ "./resources/js2/absoluteFlashMessage.js");
/* harmony import */ var _cookie_getCookie__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../cookie/getCookie */ "./resources/js2/cookie/getCookie.js");
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
      if (!Object(_el_js__WEBPACK_IMPORTED_MODULE_0__["default"])('#authAbsoluteMenu')) return;
      Object(_el_js__WEBPACK_IMPORTED_MODULE_0__["default"])('#authAbsoluteMenu').className = "auth_absolute_menu__wrapper hide_block";
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

      new _absoluteFlashMessage_js__WEBPACK_IMPORTED_MODULE_4__["default"]('Регистрация создана.');
      setTimeout(function () {
        document.location.href = _this2.successUrl;
      }, 2000);
    }
  }, {
    key: "_ultimateFail",
    value: function _ultimateFail() {
      new _absoluteFlashMessage_js__WEBPACK_IMPORTED_MODULE_4__["default"]('Не удалось создать регистрацию.');
    }
  }, {
    key: "_getUserData",
    value: function _getUserData() {
      return {
        name: Object(_el_js__WEBPACK_IMPORTED_MODULE_0__["default"])('#regName').value,
        email: Object(_el_js__WEBPACK_IMPORTED_MODULE_0__["default"])('#regEmail').value,
        password: Object(_el_js__WEBPACK_IMPORTED_MODULE_0__["default"])('#regPassword').value,
        password_confirmation: Object(_el_js__WEBPACK_IMPORTED_MODULE_0__["default"])('#regPassword_confirmation').value,
        favoriteIds: Object(_cookie_getCookie__WEBPACK_IMPORTED_MODULE_5__["default"])('favoriteIds') // для записи фронт (которые могут быть) в бэк favoriteIds

      };
    }
  }, {
    key: "_showErrors",
    value: function _showErrors(err) {
      if (!err) err = {};
      Object(_el_js__WEBPACK_IMPORTED_MODULE_0__["default"])('#regNameErr').innerText = err.name ? err.name[0] : '';
      Object(_el_js__WEBPACK_IMPORTED_MODULE_0__["default"])('#regEmailErr').innerText = err.email ? err.email[0] : '';
      Object(_el_js__WEBPACK_IMPORTED_MODULE_0__["default"])('#regPasswordErr').innerText = err.password ? err.password[0] : '';
      Object(_el_js__WEBPACK_IMPORTED_MODULE_0__["default"])('#regPasswordConfirmationErr').innerText = err.password_confirmation ? err.password_confirmation[0] : '';
    }
  }]);

  return Register;
}(_parentClasses_absoluteForm_js__WEBPACK_IMPORTED_MODULE_1__["default"]);



/***/ }),

/***/ "./resources/js2/cookie/getCookie.js":
/*!*******************************************!*\
  !*** ./resources/js2/cookie/getCookie.js ***!
  \*******************************************/
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

/***/ "./resources/js2/cookie/setCookie.js":
/*!*******************************************!*\
  !*** ./resources/js2/cookie/setCookie.js ***!
  \*******************************************/
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

  for (var optionKey in options) {
    updatedCookie += "; " + optionKey;
    var optionValue = options[optionKey];

    if (optionValue !== true) {
      updatedCookie += "=" + optionValue;
    }
  }

  document.cookie = updatedCookie;
}

/***/ }),

/***/ "./resources/js2/el.js":
/*!*****************************!*\
  !*** ./resources/js2/el.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return el; });
function el(selector) {
  return document.querySelector(selector);
}

/***/ }),

/***/ "./resources/js2/favoriteProducts/favoriteProductsIndicationOnPageLoad.js":
/*!********************************************************************************!*\
  !*** ./resources/js2/favoriteProducts/favoriteProductsIndicationOnPageLoad.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FavoriteProductsIndicationOnPageLoad; });
/* harmony import */ var _el__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../el */ "./resources/js2/el.js");
/* harmony import */ var _cookie_getCookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../cookie/getCookie */ "./resources/js2/cookie/getCookie.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var FavoriteProductsIndicationOnPageLoad = /*#__PURE__*/function () {
  function FavoriteProductsIndicationOnPageLoad() {
    _classCallCheck(this, FavoriteProductsIndicationOnPageLoad);

    this.iconSrc = {
      notInFavorites: '/images/favoriteIcon.svg',
      inFavorites: '/images/filledFavoriteIcon.svg'
    };

    this._displayFavoriteProducts();
  }

  _createClass(FavoriteProductsIndicationOnPageLoad, [{
    key: "_displayFavoriteProducts",
    value: function _displayFavoriteProducts() {
      var _this = this;

      var idsStr = Object(_cookie_getCookie__WEBPACK_IMPORTED_MODULE_1__["default"])('favoriteIds');

      if (!Boolean(idsStr)) {
        return;
      }

      var idsArr = idsStr.split(',');
      idsArr.forEach(function (productId) {
        var imgSelector = _this._getIconImgSelector(productId);

        if (Object(_el__WEBPACK_IMPORTED_MODULE_0__["default"])(imgSelector)) {
          Object(_el__WEBPACK_IMPORTED_MODULE_0__["default"])(imgSelector).src = _this.iconSrc.inFavorites;

          var wrapperSelector = _this._getIconWrapperSelector(productId);

          if (!Object(_el__WEBPACK_IMPORTED_MODULE_0__["default"])(wrapperSelector).classList.contains("set-opacity")) {
            Object(_el__WEBPACK_IMPORTED_MODULE_0__["default"])(wrapperSelector).classList.add("set-opacity");
          }

          var textSelector = _this._getIconTextSelector(productId);

          if (Object(_el__WEBPACK_IMPORTED_MODULE_0__["default"])(textSelector)) {
            Object(_el__WEBPACK_IMPORTED_MODULE_0__["default"])(textSelector).innerText = 'ИЗ ИЗБРАННОГО';
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
}();



/***/ }),

/***/ "./resources/js2/favoriteProducts/favoriteProductsSwitcher.js":
/*!********************************************************************!*\
  !*** ./resources/js2/favoriteProducts/favoriteProductsSwitcher.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FavoriteProductsSwitcher; });
/* harmony import */ var _el__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../el */ "./resources/js2/el.js");
/* harmony import */ var _cookie_setCookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../cookie/setCookie */ "./resources/js2/cookie/setCookie.js");
/* harmony import */ var _cookie_getCookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../cookie/getCookie */ "./resources/js2/cookie/getCookie.js");
/* harmony import */ var _http_postJson__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../http/postJson */ "./resources/js2/http/postJson.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




 // import AbsoluteFlashMessage from "./absoluteFlashMessage";

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
    Object(_el__WEBPACK_IMPORTED_MODULE_0__["default"])('body').addEventListener('click', function (e) {
      // id="favIcon-wrapper-$id" / id="favIcon-img-$id"
      if (!e.target.id) {
        return;
      }

      if (e.target.id.split('-')[0] !== 'favIcon') {
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

      Object(_el__WEBPACK_IMPORTED_MODULE_0__["default"])(imgSelector).src = this.iconSrc.inFavorites;

      if (Object(_el__WEBPACK_IMPORTED_MODULE_0__["default"])(imgSelectorOfQuickProduct)) {
        Object(_el__WEBPACK_IMPORTED_MODULE_0__["default"])(imgSelectorOfQuickProduct).src = this.iconSrc.inFavorites;
      }

      Object(_el__WEBPACK_IMPORTED_MODULE_0__["default"])(wrapperSelector).classList.toggle("set-opacity");

      if (Object(_el__WEBPACK_IMPORTED_MODULE_0__["default"])(textSelector)) {
        Object(_el__WEBPACK_IMPORTED_MODULE_0__["default"])(textSelector).innerText = 'ИЗ ИЗБРАННОГО';
      }
    }
  }, {
    key: "_turnOffIcon",
    value: function _turnOffIcon(productId) {
      var imgSelector = this._getIconImgSelector(productId);

      var imgSelectorOfQuickProduct = this._getIconImgSelectorOfQuickProduct(productId);

      var wrapperSelector = this._getIconWrapperSelector(productId);

      var textSelector = this._getIconTextSelector(productId);

      Object(_el__WEBPACK_IMPORTED_MODULE_0__["default"])(imgSelector).src = this.iconSrc.notInFavorites;

      if (Object(_el__WEBPACK_IMPORTED_MODULE_0__["default"])(imgSelectorOfQuickProduct)) {
        Object(_el__WEBPACK_IMPORTED_MODULE_0__["default"])(imgSelectorOfQuickProduct).src = this.iconSrc.notInFavorites;
      }

      Object(_el__WEBPACK_IMPORTED_MODULE_0__["default"])(wrapperSelector).classList.toggle("set-opacity");

      if (Object(_el__WEBPACK_IMPORTED_MODULE_0__["default"])(textSelector)) {
        Object(_el__WEBPACK_IMPORTED_MODULE_0__["default"])(textSelector).innerText = 'В ИЗБРАННОЕ';
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
      return "#quickProduct-favIcon-img-".concat(productId);
    }
  }, {
    key: "_getIconTextSelector",
    value: function _getIconTextSelector(productId) {
      return "#favIcon-text-".concat(productId);
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

/***/ "./resources/js2/favoriteProducts/favoriteProductsTotalCountIndication.js":
/*!********************************************************************************!*\
  !*** ./resources/js2/favoriteProducts/favoriteProductsTotalCountIndication.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FavoriteProductsTotalCountIndication; });
/* harmony import */ var _el__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../el */ "./resources/js2/el.js");
/* harmony import */ var _cookie_getCookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../cookie/getCookie */ "./resources/js2/cookie/getCookie.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var FavoriteProductsTotalCountIndication = /*#__PURE__*/function () {
  function FavoriteProductsTotalCountIndication() {
    var _this = this;

    _classCallCheck(this, FavoriteProductsTotalCountIndication);

    // рендер при загрузке страницы
    this._renderFavoriteTotal();

    Object(_el__WEBPACK_IMPORTED_MODULE_0__["default"])('body').addEventListener('click', function (e) {
      // и рендер при клике на favIcon товаров
      if (!e.target.id) {
        return;
      }

      if (e.target.id.split('-')[0] !== 'favIcon') {
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
      Object(_el__WEBPACK_IMPORTED_MODULE_0__["default"])('.topMenu-favIcon-total').innerText = totalCount;
    }
  }]);

  return FavoriteProductsTotalCountIndication;
}();



/***/ }),

/***/ "./resources/js2/html/auth/getAuthAbsoluteMenuHtml.js":
/*!************************************************************!*\
  !*** ./resources/js2/html/auth/getAuthAbsoluteMenuHtml.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getAuthAbsoluteMenuHtml; });
function getAuthAbsoluteMenuHtml() {
  return "<div id=\"authAbsoluteMenu\">\n                <div class=\"auth_absolute_menu__header\">\n                    \u041B\u0438\u0447\u043D\u044B\u0439 \u043A\u0430\u0431\u0438\u043D\u0435\u0442\n                </div>\n                <div class=\"auth_absolute_menu__content\">\n                    <a id=\"loginLink\" href=\"/login\" class=\"auth_absolute_menu__link mr7\">\n                        \u0412\u043E\u0439\u0442\u0438\n                    </a>\n                    \u0438\u043B\u0438\n                    <a id=\"registerLink\" href=\"/register\" class=\"auth_absolute_menu__link ml7\">\n                        \u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C\u0441\u044F\n                    </a>\n                </div>\n            <div>";
}

/***/ }),

/***/ "./resources/js2/html/auth/getAuthenticatedMenuHtml.js":
/*!*************************************************************!*\
  !*** ./resources/js2/html/auth/getAuthenticatedMenuHtml.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getAuthenticatedMenuHtml; });
function getAuthenticatedMenuHtml(userName, isAdmin) {
  var userLink = isAdmin ? "<a href=\"/admin\" class=\"top_menu__link\">Admin panel</a>" : "<a href=\"/my\" class=\"top_menu__link\">".concat(userName, "</a>");
  return "<div id=\"authMenuContent\" class=\"display-flex\">\n                ".concat(userLink, "\n                <a href=\"/logout\" title=\"\u0412\u044B\u0439\u0442\u0438 \u0438\u0437 \u0430\u043A\u043A\u0430\u0443\u043D\u0442\u0430\" class=\"top_menu__link top_menu__link_account_exit\">\n                    <img alt=\"\" src=\"images/accountExitIcon.svg\" class=\"account_exit__icon mr15\">\n                </a>\n            </div>");
}

/***/ }),

/***/ "./resources/js2/html/auth/getFailedLoginHtml.js":
/*!*******************************************************!*\
  !*** ./resources/js2/html/auth/getFailedLoginHtml.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getFailedLoginHtml; });
function getFailedLoginHtml() {
  return "<div id=\"failedLoginErrorContent\" class=\"js_reg_form__failed_login_message\">\n                \u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u044B\u0439 \u043B\u043E\u0433\u0438\u043D \u0438\u043B\u0438 \u043F\u0430\u0440\u043E\u043B\u044C.\n            <div>";
}

/***/ }),

/***/ "./resources/js2/html/auth/getForgotPasswordFormHtml.js":
/*!**************************************************************!*\
  !*** ./resources/js2/html/auth/getForgotPasswordFormHtml.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getForgotPasswordFormHtml; });
function getForgotPasswordFormHtml() {
  return "<div id=\"forgotPasswordForm\">\n                <div class=\"js_reg_form__header\">\n                    \u0417\u0430\u0431\u044B\u043B\u0438 \u043F\u0430\u0440\u043E\u043B\u044C?\n                    <div class='js_reg_form__close'>&#215;</div>\n                </div>\n\n                <div id=\"sendResetLinkReply\" class=\"mt10\"></div>\n\n                <label for=\"forgotPasswordEmail\" class=\"js_reg_form__input__label\">\n                    \u0412\u0432\u0435\u0434\u0438\u0442\u0435 e-mail, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u0412\u044B \u0443\u043A\u0430\u0437\u0430\u043B\u0438 \u043F\u0440\u0438 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438,\n                    \u043E\u0442\u043F\u0440\u0430\u0432\u0438\u043C \u0412\u0430\u043C \u0441\u0441\u044B\u043B\u043A\u0443 \u0434\u043B\u044F \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u044F \u043D\u043E\u0432\u043E\u0433\u043E \u043F\u0430\u0440\u043E\u043B\u044F.\n                </label>\n                <input type='email' name='email' id='forgotPasswordEmail' required class=\"js_reg_form__input__text_input\">\n                <div id=\"forgotPasswordEmailErr\" class=\"js_reg_form__input__validation_message\"></div>\n\n                <button type=\"submit\" id='sendResetLinkSubmit' class=\"js_reg_form__submit_button mt18\">\n                    \u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C\n                </button>\n            <div>";
}

/***/ }),

/***/ "./resources/js2/html/auth/getLoginFormHtml.js":
/*!*****************************************************!*\
  !*** ./resources/js2/html/auth/getLoginFormHtml.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getLoginFormHtml; });
/* harmony import */ var _getULoginWidgetHtml_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getULoginWidgetHtml.js */ "./resources/js2/html/auth/getULoginWidgetHtml.js");

function getLoginFormHtml() {
  return "<div id=\"loginForm\">\n                <div class=\"js_reg_form__header\">\n                    \u0412\u0445\u043E\u0434 \u0434\u043B\u044F \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F\n                    <div class='js_reg_form__close'>&#215;</div>\n                </div>\n\n                <div id=\"failedLoginErr\" class=\"mt10\"></div>\n\n                <label for=\"loginEmail\" class=\"js_reg_form__input__label\">E-mail</label>\n                <input type='email' name='email' id='loginEmail' required class=\"js_reg_form__input__text_input\">\n                <div id=\"loginEmailErr\" class=\"js_reg_form__input__validation_message\"></div>\n\n\n                <label for=\"loginPassword\" class=\"js_reg_form__input__label\">\u041F\u0430\u0440\u043E\u043B\u044C</label>\n                <input type='password' name='password' id='loginPassword' required class=\"js_reg_form__input__text_input\">\n                <div class=\"height0 relative\">\n                    <img alt=\"\" src=\"images/closedEye.svg\" id=\"closedEyeImg\" class=\"js_reg_form__closed_eye_img\">\n                    <img alt=\"\" src=\"images/openedEye.svg\" id=\"openedEyeImg\" class=\"js_reg_form__opened_eye_img\">\n                </div>\n                <div id=\"loginPasswordErr\" class=\"js_reg_form__input__validation_message\"></div>\n\n\n\n                <input type=\"checkbox\" name=\"remember\" id=\"loginRemember\" value=\"1\" class=\"js_reg_form__checkbox_input\">\n                <label for=\"loginRemember\" class=\"js_reg_form__checkbox_label\">\u0417\u0430\u043F\u043E\u043C\u043D\u0438\u0442\u044C \u043C\u0435\u043D\u044F</label>\n\n                <div class=\"js_reg_form__submit_and_forgot_flex mt18\">\n                    <button type=\"submit\" id='loginSubmit' class=\"js_reg_form__submit_button\">\n                        \u0412\u043E\u0439\u0442\u0438\n                    </button>\n                    <a href=\"/forgot-password\" id=\"forgotPasswordLink\" class=\"js_reg_form__forgot_password_link\">\n                        \u0417\u0430\u0431\u044B\u043B\u0438 \u043F\u0430\u0440\u043E\u043B\u044C?\n                    </a>\n                </div>\n\n                <div class=\"js_reg_form__header mt30\">\n                    \u0412\u043E\u0439\u0442\u0438 \u0447\u0435\u0440\u0435\u0437\n                </div>\n                ".concat(Object(_getULoginWidgetHtml_js__WEBPACK_IMPORTED_MODULE_0__["default"])(), "\n            <div>");
}

/***/ }),

/***/ "./resources/js2/html/auth/getRegisterFormHtml.js":
/*!********************************************************!*\
  !*** ./resources/js2/html/auth/getRegisterFormHtml.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getRegisterFormHtml; });
/* harmony import */ var _getULoginWidgetHtml_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getULoginWidgetHtml.js */ "./resources/js2/html/auth/getULoginWidgetHtml.js");

function getRegisterFormHtml() {
  return "<div id=\"regForm\">\n                <div class=\"js_reg_form__header\">\n                    \u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F\n                    <div class='js_reg_form__close'>&#215;</div>\n                </div>\n                <label for=\"regName\" class=\"js_reg_form__input__label\">\u0412\u0430\u0448\u0435 \u0438\u043C\u044F</label>\n                <input type='text' name='name' id='regName' required class=\"js_reg_form__input__text_input\">\n                <div id=\"regNameErr\" class=\"js_reg_form__input__validation_message\"></div>\n\n                <label for=\"regEmail\" class=\"js_reg_form__input__label\">E-mail</label>\n                <input type='email' name='email' id='regEmail' required class=\"js_reg_form__input__text_input\">\n                <div id=\"regEmailErr\" class=\"js_reg_form__input__validation_message\"></div>\n\n                <label for=\"regPassword\" class=\"js_reg_form__input__label\">\u041F\u0430\u0440\u043E\u043B\u044C</label>\n                <input type='password' name='password' id='regPassword' required class=\"js_reg_form__input__text_input\">\n                <div id=\"regPasswordErr\" class=\"js_reg_form__input__validation_message\"></div>\n\n                <label for=\"regPassword_confirmation\" class=\"js_reg_form__input__label\">\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u0435 \u043F\u0430\u0440\u043E\u043B\u044C</label>\n                <input type='password' name='password_confirmation' id='regPassword_confirmation' required class=\"js_reg_form__input__text_input\">\n                <div id=\"regPasswordConfirmationErr\" class=\"js_reg_form__input__validation_message\"></div>\n\n                <button type=\"submit\" id='regSubmit' class=\"js_reg_form__submit_button mt18\">\n                   \u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C\u0441\u044F\n                </button>\n\n                <div class=\"js_reg_form__header mt30\">\n                    \u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F \u0447\u0435\u0440\u0435\u0437\n                </div>\n                ".concat(Object(_getULoginWidgetHtml_js__WEBPACK_IMPORTED_MODULE_0__["default"])(), "\n            <div>");
}

/***/ }),

/***/ "./resources/js2/html/auth/getULoginWidgetHtml.js":
/*!********************************************************!*\
  !*** ./resources/js2/html/auth/getULoginWidgetHtml.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getULoginWidgetHtml; });
//import getJson from "../http/getJson";
//import el from "../el";
function getULoginWidgetHtml() {
  /*
      getJson('/u-login/widget').then((data) => {
          console.log(data);
          el('#uLoginWrapper').insertAdjacentHTML('afterbegin', data);
      });
  */
  return '';
  return "<iframe src=\"/u-login/widget\"\n            scrolling=\"no\"\n            align=\"left\"\n            frameborder=\"0\"\n            class=\"js_reg_form__ulogin_iframe\"></iframe>";
  /*
      return `<script src="https://ulogin.ru/js/ulogin.js"></script>
              <div id="uLogin" data-ulogin="display=small;theme=classic;fields=first_name,last_name;
                  providers=vkontakte,odnoklassniki,yandex,facebook;
                  hidden=instagram,google,twitter,mailru,yandex,livejournal,openid,linkedin,youtube,webmoney;
                  redirect_uri=http%3A%2F%2F${document.location.host}%2Fu-login%2Fresponse;mobilebuttons=0;">ddd<div>`;
  
  */
}

/***/ }),

/***/ "./resources/js2/html/getAbsoluteMessageWithCloseIconHtml.js":
/*!*******************************************************************!*\
  !*** ./resources/js2/html/getAbsoluteMessageWithCloseIconHtml.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getAbsoluteMessageWithCloseIconHtml; });
function getAbsoluteMessageWithCloseIconHtml(css, id, text) {
  return "<div id=\"".concat(id, "\" class=\"").concat(css.basicCss, " ").concat(css.showCss, "\">\n                <div class=\"absolute_message__div\">\n                    ").concat(text, "\n                    <div class='absolute_message__close'>&#215;</div>\n                </div>\n            </div>");
}

/***/ }),

/***/ "./resources/js2/html/getDropMenuHtml.js":
/*!***********************************************!*\
  !*** ./resources/js2/html/getDropMenuHtml.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getDropMenuHtml; });
function getDropMenuHtml(innerHtml) {
  return "<div id=\"topMenu-dropMenuWrapper\" class=\"top_menu__drop_menu show_block\">\n                <ul id=\"topMenu-dropMenuContent\" class=\"top_menu__drop_menu__ul\">\n                    ".concat(innerHtml, "\n                </ul>\n            </div>");
}

/***/ }),

/***/ "./resources/js2/html/productList/filterBlock/getFilterBlockHtml.js":
/*!**************************************************************************!*\
  !*** ./resources/js2/html/productList/filterBlock/getFilterBlockHtml.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getFilterBlockHtml; });
function getFilterBlockHtml() {
  return "<div id=\"productFilterWrapper\">\n                <div class=\"product_filter__content\">\n\n                    <p class=\"product_filter__property_header\">\n                        \u0426\u0435\u043D\u0430, \u0440\u0443\u0431.\n                    </p>\n\n                    <div class=\"product_filter__price__text_input__wrapper\">\n                        <input class=\"product_filter__price__text_input\"\n                            type=\"text\" maxlength=\"6\" value=\"\">\n                        <input class=\"product_filter__price__text_input\"\n                            type=\"text\" maxlength=\"6\" value=\"\">\n                    </div>\n\n                    <div class=\"product_filter__price__range_input__wrapper\">\n                        <div class=\"product_filter__price__range_input__kernel\">&nbsp;</div>\n\n                        <input type=\"range\" class=\"product_filter__price__range_input product_filter__price__range_input_min\"\n                            min=\"0\"\n                            step=\"100\"\n                            max=\"9999999\"\n                            value=\"0\"><br>\n                        <input type=\"range\" class=\"product_filter__price__range_input product_filter__price__range_input_max\"\n                            min=\"productsMinPrice\"\n                            step=\"100\"\n                            max=\"1000000\"\n                            value=\"1000000\">\n                    </div>\n\n                    <div class=\"product_filter__selectedCategories__wrapper\">\n                        <p class=\"product_filter__property_header mt50\">\n                            \u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F\n                        </p>\n\n                        <div class=\"product_filter__checkboxes_list\">\n\n                            <p class=\"product_filter__checkbox_input__item\">\n                                <input type=\"checkbox\"\n                                    id=\"cat7\"\n                                    value=\"7\"\n                                    class=\"product_filter__checkbox_input\">\n                                <label for=\"cat7\" class=\"product_filter__checkbox_label\">\n                                    \u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F 7\n                                </label>\n                            </p>\n\n                            <p class=\"product_filter__checkbox_input__item\">\n                                <input type=\"checkbox\"\n                                    id=\"cat8\"\n                                    value=\"8\"\n                                    class=\"product_filter__checkbox_input\">\n                                <label for=\"cat8\" class=\"product_filter__checkbox_label\">\n                                    \u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F 8\n                                </label>\n                            </p>\n\n                        </div>\n                    </div>\n\n                    <button class=\"product_filter__button mauto mt30\">\n                        \u0413\u043E\u0442\u043E\u0432\u043E\n                    </button>\n\n                    <div class='product_filter__collapse_icon'>\n                        &#215;\n                    </div>\n                </div>\n            </div>";
}

/***/ }),

/***/ "./resources/js2/html/productList/productListItem/getFavoriteIconBlockHtml.js":
/*!************************************************************************************!*\
  !*** ./resources/js2/html/productList/productListItem/getFavoriteIconBlockHtml.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getFavoriteIconBlockHtml; });
function getFavoriteIconBlockHtml(productId) {
  return "<div id=\"favIcon-wrapper-".concat(productId, "\" class=\"product_item__favorite_icon__wrapper\">\n                <img id=\"favIcon-img-").concat(productId, "\" alt=\"\"\n                    src=\"/images/favoriteIcon.svg\"\n                    class=\"product_item__favorite_icon__img\">\n            </div>");
}

/***/ }),

/***/ "./resources/js2/html/productList/productListItem/getListOfCategoriesHtml.js":
/*!***********************************************************************************!*\
  !*** ./resources/js2/html/productList/productListItem/getListOfCategoriesHtml.js ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getListOfCategoriesHtml; });
function getListOfCategoriesHtml(categoriesArr) {
  var catsArr = categoriesArr.map(function (item) {
    return "<a href='/products/".concat(item.slug, "' class='product_item__name__link'>").concat(item.name, "</a>");
  });
  return catsArr.join(', ');
}

/***/ }),

/***/ "./resources/js2/html/productList/productListItem/getListOfColorsHtml.js":
/*!*******************************************************************************!*\
  !*** ./resources/js2/html/productList/productListItem/getListOfColorsHtml.js ***!
  \*******************************************************************************/
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

/***/ "./resources/js2/html/productList/productListItem/getListOfMaterialsHtml.js":
/*!**********************************************************************************!*\
  !*** ./resources/js2/html/productList/productListItem/getListOfMaterialsHtml.js ***!
  \**********************************************************************************/
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

/***/ "./resources/js2/html/productList/productListItem/getPhotoBlockHtml.js":
/*!*****************************************************************************!*\
  !*** ./resources/js2/html/productList/productListItem/getPhotoBlockHtml.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getPhotoBlockHtml; });
function getPhotoBlockHtml(product) {
  var photoFolder = "/storage/products-photos-size3/";
  return "<div>\n                <a href='/product/".concat(product.slug, "-").concat(product.id, "'>\n                    <img src='").concat(photoFolder).concat(product.id, "s3-").concat(product.photos[0], "'\n                       alt=\"\"\n                       class=\"photo__size3\"/>\n                </a>\n            </div>");
}

/***/ }),

/***/ "./resources/js2/html/productList/productListItem/index-getProductsItemHtml.js":
/*!*************************************************************************************!*\
  !*** ./resources/js2/html/productList/productListItem/index-getProductsItemHtml.js ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getProductsItemHtml; });
/* harmony import */ var _getFavoriteIconBlockHtml__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getFavoriteIconBlockHtml */ "./resources/js2/html/productList/productListItem/getFavoriteIconBlockHtml.js");
/* harmony import */ var _getPhotoBlockHtml__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getPhotoBlockHtml */ "./resources/js2/html/productList/productListItem/getPhotoBlockHtml.js");
/* harmony import */ var _getListOfCategoriesHtml__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getListOfCategoriesHtml */ "./resources/js2/html/productList/productListItem/getListOfCategoriesHtml.js");
/* harmony import */ var _getListOfMaterialsHtml__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getListOfMaterialsHtml */ "./resources/js2/html/productList/productListItem/getListOfMaterialsHtml.js");
/* harmony import */ var _getListOfColorsHtml__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./getListOfColorsHtml */ "./resources/js2/html/productList/productListItem/getListOfColorsHtml.js");





function getProductsItemHtml(product) {
  //console.log(product);
  return "<div data-product-item=\"".concat(product.id, "\" class=\"product_item__wrapper\">\n               <div class=\"product_item\">\n\n                  <div class=\"product_item__content\">\n\n                      <div class=\"product_item__quick_view_link__wrapper\">\n                         <a data-quick-view=\"").concat(product.id, "\"\n                            href='/product/").concat(product.slug, "-").concat(product.id, "'\n                            class=\"product_item__quick_view_link\">\n                            \u0411\u044B\u0441\u0442\u0440\u044B\u0439 \u043F\u0440\u043E\u0441\u043C\u043E\u0442\u0440\n                         </a>\n                      </div>\n\n                      ").concat(Boolean(product.photos) ? Object(_getPhotoBlockHtml__WEBPACK_IMPORTED_MODULE_1__["default"])(product) : "<div class=\"product_item__no_photo\">\n                                    \u041D\u0415\u0422 \u0424\u041E\u0422\u041E\n                               </div>", "\n\n                      <div>\n                          <div class=\"product_item__name\">\n                              <a href='/product/").concat(product.slug, "-").concat(product.id, "'\n                                  class=\"product_item__name__link\">\n                                  ").concat(product.name, "\n                              </a>\n                          </div>\n                          <div class=\"product_item__price\">\n                              ").concat(product.price, " \u20BD\n                          </div>\n                      </div>\n\n\n                      <div class=\"product_item__bottom_info__relative_wrapper\">\n                          <div class=\"product_item__bottom_info__absolute\">\n                             <p title=\"\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F\" class=\"product_item__bottom_info__text\">\n                                ").concat(Object(_getListOfCategoriesHtml__WEBPACK_IMPORTED_MODULE_2__["default"])(product.categories), "\n                             </p>\n                             <p title=\"\u041C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\" class=\"product_item__bottom_info__text\">\n                                ").concat(Object(_getListOfMaterialsHtml__WEBPACK_IMPORTED_MODULE_3__["default"])(product.materials), "\n                             </p>\n                             <p title=\"\u0426\u0432\u0435\u0442\" class=\"product_item__bottom_info__text\">\n                                ").concat(Object(_getListOfColorsHtml__WEBPACK_IMPORTED_MODULE_4__["default"])(product.colors), "\n                             </p>\n                          </div>\n                      </div>\n\n                  </div>\n\n\n                  ").concat(Object(_getFavoriteIconBlockHtml__WEBPACK_IMPORTED_MODULE_0__["default"])(product.id), "\n\n               </div>\n            </div>");
}

/***/ }),

/***/ "./resources/js2/html/singleProduct/getBigPhotoBlockHtml.js":
/*!******************************************************************!*\
  !*** ./resources/js2/html/singleProduct/getBigPhotoBlockHtml.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getBigPhotoBlockHtml; });
function getBigPhotoBlockHtml(productId, photosArr) {
  var photoCount = photosArr.length;
  return "<div class=\"single_product__big_photo__wrapper\">\n\n                <div id=\"mainPhotoContainer\" class=\"single_product__big_photo__content\">\n                    <img src=\"/storage/products-photos-size5/".concat(productId, "s5-").concat(photosArr[0], "\"\n                        alt=\"\"\n                        id=\"mainPhoto\"\n                        class=\"photo__size4\"/>\n                </div>\n\n                ").concat(photoCount > 1 ? "<div id=\"largePhotoScrollLeftButton\"\n                                class=\"single_product__big_photo__scroll_button single_product__big_photo__scroll_button_left display-none\">\n                                <div class=\"single_product__big_photo__scroll_button_left__content\">\n                                </div>\n                           </div>\n                           <div id=\"largePhotoScrollRightButton\"\n                                class=\"single_product__big_photo__scroll_button single_product__big_photo__scroll_button_right\">\n                                <div class=\"single_product__big_photo__scroll_button_right__content\">\n                                </div>\n                           </div>\n                           <div class=\"single_product__big_photo__photo_number_indicator\">\n                                <span id=\"photoNumberIndicator\">1</span>/".concat(photoCount, "\n                           </div>") : "", "\n\n            </div>");
}

/***/ }),

/***/ "./resources/js2/html/singleProduct/getFavoriteIconBlockHtml.js":
/*!**********************************************************************!*\
  !*** ./resources/js2/html/singleProduct/getFavoriteIconBlockHtml.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getFavoriteIconBlockHtml; });
/* harmony import */ var _cookie_getCookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../cookie/getCookie */ "./resources/js2/cookie/getCookie.js");

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

  return "<div id=\"favIcon-wrapper-".concat(productId, "\" class=\"single_product__favorite_icon__wrapper\">\n                <img id=\"quickProduct-favIcon-img-").concat(productId, "\" alt=\"\"\n                    src=\"/images/").concat(imgName, "\"\n                    class=\"single_product__favorite_icon__img\">\n                <span id=\"favIcon-text-").concat(productId, "\" class=\"single_product__favorite_icon__text\">\n                    ").concat(text, "\n                </span>\n            </div>");
}

/***/ }),

/***/ "./resources/js2/html/singleProduct/getListOfCategoriesHtml.js":
/*!*********************************************************************!*\
  !*** ./resources/js2/html/singleProduct/getListOfCategoriesHtml.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getListOfCategoriesHtml; });
function getListOfCategoriesHtml(categoriesArr) {
  var catsArr = categoriesArr.map(function (item) {
    return "<a href='/products/".concat(item.slug, "' class='single_product__category_item__link'>").concat(item.name, "</a>");
  });
  return catsArr.join(', ');
}

/***/ }),

/***/ "./resources/js2/html/singleProduct/getListOfColorsHtml.js":
/*!*****************************************************************!*\
  !*** ./resources/js2/html/singleProduct/getListOfColorsHtml.js ***!
  \*****************************************************************/
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

/***/ "./resources/js2/html/singleProduct/getListOfMaterialsHtml.js":
/*!********************************************************************!*\
  !*** ./resources/js2/html/singleProduct/getListOfMaterialsHtml.js ***!
  \********************************************************************/
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

/***/ "./resources/js2/html/singleProduct/getPhotoBlockHtml.js":
/*!***************************************************************!*\
  !*** ./resources/js2/html/singleProduct/getPhotoBlockHtml.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getPhotoBlockHtml; });
/* harmony import */ var _getSmallPhotosBlockHtml__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getSmallPhotosBlockHtml */ "./resources/js2/html/singleProduct/getSmallPhotosBlockHtml.js");
/* harmony import */ var _getBigPhotoBlockHtml__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getBigPhotoBlockHtml */ "./resources/js2/html/singleProduct/getBigPhotoBlockHtml.js");


function getPhotoBlockHtml(productId, photosArr) {
  var photoCount = photosArr.length;
  return "<section class=\"single_product__all_photo_wrapper\">\n                ".concat(photoCount > 1 ? Object(_getSmallPhotosBlockHtml__WEBPACK_IMPORTED_MODULE_0__["default"])(productId, photosArr) : "", "\n                ").concat(Object(_getBigPhotoBlockHtml__WEBPACK_IMPORTED_MODULE_1__["default"])(productId, photosArr), "\n            </section>");
}

/***/ }),

/***/ "./resources/js2/html/singleProduct/getSmallPhotosBlockHtml.js":
/*!*********************************************************************!*\
  !*** ./resources/js2/html/singleProduct/getSmallPhotosBlockHtml.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getSmallPhotosBlockHtml; });
function getSmallPhotosBlockHtml(productId, photosArr) {
  var photoCount = photosArr.length;
  return "<div class=\"single_product__small_photos__wrapper\">\n\n                ".concat(photoCount > 5 ? "<div id=\"smallPhotos-scrollButtonUp\"\n                            class=\"single_product__small_photos__scroll_button single_product__small_photos__scroll_button_top display-none\">\n                            <div class=\"single_product__small_photos__scroll_button_top__content\">\n                            </div>\n                          </div>" : "", "\n\n                <div id=\"smallPhotos\" class=\"single_product__small_photos\">\n                    ").concat(_getSmallPhotos(productId, photosArr), "\n                </div>\n\n                ").concat(photoCount > 5 ? "<div id=\"smallPhotos-scrollButtonDown\"\n                            class=\"single_product__small_photos__scroll_button single_product__small_photos__scroll_button_bottom\">\n                            <div class=\"single_product__small_photos__scroll_button_bottom__content\">\n                            </div>\n                          </div>" : "", "\n\n            </div>");
}

function _getSmallPhotos(productId, photosArr) {
  var smallPhotoFolder = "/storage/products-photos-size5/";
  var phArr = photosArr.map(function (item, i) {
    return "<img src='".concat(smallPhotoFolder).concat(productId, "s5-").concat(item, "'\n                    alt=''\n                    data-small-photo=\"").concat(i + 1, "\"\n                    class=\"photo__size2\"/>");
  });
  return phArr.join('');
}

/***/ }),

/***/ "./resources/js2/html/singleProduct/index-getSingleProductHtml.js":
/*!************************************************************************!*\
  !*** ./resources/js2/html/singleProduct/index-getSingleProductHtml.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getSingleProductHtml; });
/* harmony import */ var _getFavoriteIconBlockHtml__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getFavoriteIconBlockHtml */ "./resources/js2/html/singleProduct/getFavoriteIconBlockHtml.js");
/* harmony import */ var _getPhotoBlockHtml__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getPhotoBlockHtml */ "./resources/js2/html/singleProduct/getPhotoBlockHtml.js");
/* harmony import */ var _getListOfCategoriesHtml__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getListOfCategoriesHtml */ "./resources/js2/html/singleProduct/getListOfCategoriesHtml.js");
/* harmony import */ var _getListOfMaterialsHtml__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getListOfMaterialsHtml */ "./resources/js2/html/singleProduct/getListOfMaterialsHtml.js");
/* harmony import */ var _getListOfColorsHtml__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./getListOfColorsHtml */ "./resources/js2/html/singleProduct/getListOfColorsHtml.js");





function getSingleProductHtml(product) {
  //console.log(product);
  return "<div id=\"quickProduct\" class=\"quick_view_manager__screen\">\n                <div class=\"quick_view_manager__content_wrapper\">\n                    <div class=\"quick_view_manager__content\">\n\n\n                    <div id=\"singleProduct\" class=\"single_product_page__content_wrapper\">\n                        <div class=\"single_product__content\">\n\n                            ".concat(product.photos.length > 0 ? Object(_getPhotoBlockHtml__WEBPACK_IMPORTED_MODULE_1__["default"])(product.id, product.photos) : '', "\n\n                            <section class=\"single_product__top_characteristics\n                                ").concat(product.photos.length > 0 ? 'single_product__top_characteristics__margin_left' : '', "\">\n\n                                <h1 class=\"single_product__h1\">\n                                    ").concat(product.name, "\n                                </h1>\n                                <div class=\"single_product__price\">\n                                    ").concat(product.price, " \u20BD\n                                </div>\n                                <div class=\"single_product__categories\">\n                                    \u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F:\n                                    ").concat(Object(_getListOfCategoriesHtml__WEBPACK_IMPORTED_MODULE_2__["default"])(product.categories), "\n                                </div>\n                                <div class=\"single_product__categories\">\n                                    \u041C\u0430\u0442\u0435\u0440\u0438\u0430\u043B:\n                                    ").concat(Object(_getListOfMaterialsHtml__WEBPACK_IMPORTED_MODULE_3__["default"])(product.materials), "\n                                </div>\n                                <div class=\"single_product__categories\">\n                                    \u0426\u0432\u0435\u0442:\n                                    ").concat(Object(_getListOfColorsHtml__WEBPACK_IMPORTED_MODULE_4__["default"])(product.colors), "\n                                </div>\n                                <div id=\"productDescriptionContainer\" class=\"single_product__description\">\n                                    ").concat(product.description, "\n                                </div>\n                                ").concat(Object(_getFavoriteIconBlockHtml__WEBPACK_IMPORTED_MODULE_0__["default"])(product.id), "\n                            </section>\n\n                        </div>\n                    </div>\n\n\n\n                    </div>\n                    <div class='quick_view_manager__collapse_icon'>&#215;</div>\n                </div>\n            </div>");
}

/***/ }),

/***/ "./resources/js2/html/viewedProductsSummary/getViewedProductsHeaderHtml.js":
/*!*********************************************************************************!*\
  !*** ./resources/js2/html/viewedProductsSummary/getViewedProductsHeaderHtml.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getViewedProductHeaderHtml; });
function getViewedProductHeaderHtml(product) {
  return "<div id=\"viewedProductsSummaryHeader\" class=\"viewed_products__aside__header\">\n                <h2 class=\"viewed_products__aside__h2\">\u0412\u044B \u043D\u0435\u0434\u0430\u0432\u043D\u043E \u0441\u043C\u043E\u0442\u0440\u0435\u043B\u0438</h2>\n                <a href=\"/viewed-products\"\n                    data-viewed-products-link=\"1\"\n                    class=\"viewed_products__link\">\n                    \u0421\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u0432\u0441\u0435\n                </a>\n           </div>";
}

/***/ }),

/***/ "./resources/js2/html/viewedProductsSummary/getViewedProductsItemHtml.js":
/*!*******************************************************************************!*\
  !*** ./resources/js2/html/viewedProductsSummary/getViewedProductsItemHtml.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getViewedProductsItemHtml; });
function getViewedProductsItemHtml(product) {
  //console.log(product);
  return "<div class=\"product_item__wrapper\">\n               <div class=\"product_item product_item__in_viewed_summary\">\n\n                  <div class=\"product_item__content\">\n                      <div class=\"product_item__quick_view_link__wrapper product_item__quick_view_link__wrapper__in_viewed_summary\">\n                         <a data-quick-view=\"".concat(product.id, "\"\n                            href='/product/").concat(product.slug, "-").concat(product.id, "'\n                            class=\"product_item__quick_view_link product_item__quick_view_link__in_viewed_summary\">\n                            \u0411\u044B\u0441\u0442\u0440\u044B\u0439 \u043F\u0440\u043E\u0441\u043C\u043E\u0442\u0440\n                         </a>\n                      </div>\n\n                      ").concat(Boolean(product.photos) ? _getPhotoBlockHtml(product) : "<div class=\"product_item__no_photo\">\n                                    \u041D\u0415\u0422 \u0424\u041E\u0422\u041E\n                                 </div>", "\n\n                      <div>\n                          <div class=\"product_item__name\">\n                              <a href='/product/").concat(product.slug, "-").concat(product.id, "'\n                                  class=\"product_item__name__link product_item__name__link__in_viewed_summary\">\n                                  ").concat(product.name, "\n                              </a>\n                          </div>\n                          <div class=\"product_item__price product_item__price__in_viewed_summary\">\n                              ").concat(product.price, " \u20BD\n                          </div>\n                      </div>\n                  </div>\n\n               </div>\n            </div>");
}

function _getPhotoBlockHtml(product) {
  var photoFolder = "/storage/products-photos-size3/";
  return "<div>\n                <a href='/product/".concat(product.slug, "-").concat(product.id, "'>\n                    <img src='").concat(photoFolder).concat(product.id, "s3-").concat(product.photos[0], "'\n                       alt=\"\"\n                       class=\"photo__size3 product_item__photo__in_viewed_summary\"/>\n                </a>\n            </div>");
}

/***/ }),

/***/ "./resources/js2/http/csrfToken.js":
/*!*****************************************!*\
  !*** ./resources/js2/http/csrfToken.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  set: function set(token) {
    //<meta name="csrf-token" content="{{ csrf_token() }}">
    document.querySelector('meta[name="csrf-token"]').content = token;
  },
  get: function get() {
    //console.log(document.querySelector('meta[name="csrf-token"]').content);
    return document.querySelector('meta[name="csrf-token"]').content;
  }
});

/***/ }),

/***/ "./resources/js2/http/csrfUpdater.js":
/*!*******************************************!*\
  !*** ./resources/js2/http/csrfUpdater.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CsrfUpdater; });
/* harmony import */ var _csrfToken_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./csrfToken.js */ "./resources/js2/http/csrfToken.js");
/* harmony import */ var _getJson__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getJson */ "./resources/js2/http/getJson.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var CsrfUpdater = /*#__PURE__*/function () {
  function CsrfUpdater() {
    _classCallCheck(this, CsrfUpdater);

    this.url = '/public-js/csrf';

    this._updater();
  }

  _createClass(CsrfUpdater, [{
    key: "_updater",
    value: function _updater() {
      var _this = this;

      setInterval(function () {
        _this._updaterCore();
      }, 15 * 1000);
    }
  }, {
    key: "_updaterCore",
    value: function _updaterCore() {
      Object(_getJson__WEBPACK_IMPORTED_MODULE_1__["default"])(this.url).then(function (data) {
        _csrfToken_js__WEBPACK_IMPORTED_MODULE_0__["default"].set(data);
      });
    }
  }]);

  return CsrfUpdater;
}();



/***/ }),

/***/ "./resources/js2/http/getJson.js":
/*!***************************************!*\
  !*** ./resources/js2/http/getJson.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getJson; });
/* harmony import */ var _csrfToken_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./csrfToken.js */ "./resources/js2/http/csrfToken.js");

function getJson(url) {
  return fetch(url).then(function (result) {
    //csrfToken.set(result.headers.get('X-CSRF-Token'));
    return result.json();
  })["catch"](function (error) {
    console.log(error);
  });
}

/***/ }),

/***/ "./resources/js2/http/postJson.js":
/*!****************************************!*\
  !*** ./resources/js2/http/postJson.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return postJson; });
/* harmony import */ var _csrfToken_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./csrfToken.js */ "./resources/js2/http/csrfToken.js");

function postJson(url, data) {
  return fetch(url, {
    method: 'POST',
    headers: {
      'X-CSRF-Token': _csrfToken_js__WEBPACK_IMPORTED_MODULE_0__["default"].get(),
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(data)
  }).then(function (result) {
    return result.json();
  })["catch"](function (error) {
    console.log(error);
  });
}

/***/ }),

/***/ "./resources/js2/index.js":
/*!********************************!*\
  !*** ./resources/js2/index.js ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _el__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./el */ "./resources/js2/el.js");
/* harmony import */ var _http_csrfUpdater__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./http/csrfUpdater */ "./resources/js2/http/csrfUpdater.js");
/* harmony import */ var _topDropMenuFiller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./topDropMenuFiller */ "./resources/js2/topDropMenuFiller.js");
/* harmony import */ var _auth_authAbsoluteMenu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth/authAbsoluteMenu */ "./resources/js2/auth/authAbsoluteMenu.js");
/* harmony import */ var _absoluteFlashMessage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./absoluteFlashMessage */ "./resources/js2/absoluteFlashMessage.js");
/* harmony import */ var _auth_passwordTypeChanger__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth/passwordTypeChanger */ "./resources/js2/auth/passwordTypeChanger.js");
/* harmony import */ var _favoriteProducts_favoriteProductsIndicationOnPageLoad__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./favoriteProducts/favoriteProductsIndicationOnPageLoad */ "./resources/js2/favoriteProducts/favoriteProductsIndicationOnPageLoad.js");
/* harmony import */ var _favoriteProducts_favoriteProductsTotalCountIndication__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./favoriteProducts/favoriteProductsTotalCountIndication */ "./resources/js2/favoriteProducts/favoriteProductsTotalCountIndication.js");
/* harmony import */ var _favoriteProducts_favoriteProductsSwitcher__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./favoriteProducts/favoriteProductsSwitcher */ "./resources/js2/favoriteProducts/favoriteProductsSwitcher.js");
/* harmony import */ var _productSource_productCache__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./productSource/productCache */ "./resources/js2/productSource/productCache.js");
/* harmony import */ var _viewedProducts_viewedProductsAppender__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./viewedProducts/viewedProductsAppender */ "./resources/js2/viewedProducts/viewedProductsAppender.js");
/* harmony import */ var _productQuickViewer_singleProductQuickViewer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./productQuickViewer/singleProductQuickViewer */ "./resources/js2/productQuickViewer/singleProductQuickViewer.js");
/* harmony import */ var _productSingle_singleProductKit__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./productSingle/singleProductKit */ "./resources/js2/productSingle/singleProductKit.js");
/* harmony import */ var _viewedProducts_viewedProductsSummaryMaker__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./viewedProducts/viewedProductsSummaryMaker */ "./resources/js2/viewedProducts/viewedProductsSummaryMaker.js");
/* harmony import */ var _productSource_searchSettingsStore__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./productSource/searchSettingsStore */ "./resources/js2/productSource/searchSettingsStore.js");
/* harmony import */ var _urlMaker_searchUrlMaker__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./urlMaker/searchUrlMaker */ "./resources/js2/urlMaker/searchUrlMaker.js");
/* harmony import */ var _urlMaker_publicUrlMaker__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./urlMaker/publicUrlMaker */ "./resources/js2/urlMaker/publicUrlMaker.js");
/* harmony import */ var _productSource_FilterOfCachedProducts__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./productSource/FilterOfCachedProducts */ "./resources/js2/productSource/FilterOfCachedProducts.js");
/* harmony import */ var _productSource_SourceOfFilteredProducts__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./productSource/SourceOfFilteredProducts */ "./resources/js2/productSource/SourceOfFilteredProducts.js");
/* harmony import */ var _menu_menuLinkCssMaker__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./menu/menuLinkCssMaker */ "./resources/js2/menu/menuLinkCssMaker.js");
/* harmony import */ var _productList_rendererByViewMoreButton__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./productList/rendererByViewMoreButton */ "./resources/js2/productList/rendererByViewMoreButton.js");
/* harmony import */ var _productList_rendererByPaginationButton__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./productList/rendererByPaginationButton */ "./resources/js2/productList/rendererByPaginationButton.js");
/* harmony import */ var _productList_rendererByMenuLink__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./productList/rendererByMenuLink */ "./resources/js2/productList/rendererByMenuLink.js");
/* harmony import */ var _productList_rendererOfViewedProductsByLink__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./productList/rendererOfViewedProductsByLink */ "./resources/js2/productList/rendererOfViewedProductsByLink.js");
/* harmony import */ var _productList_rendererOfPaginationBlock__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./productList/rendererOfPaginationBlock */ "./resources/js2/productList/rendererOfPaginationBlock.js");
/* harmony import */ var _productList_productFilter_absoluteProductFilter__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./productList/productFilter/absoluteProductFilter */ "./resources/js2/productList/productFilter/absoluteProductFilter.js");

























new _http_csrfUpdater__WEBPACK_IMPORTED_MODULE_1__["default"]();
new _topDropMenuFiller__WEBPACK_IMPORTED_MODULE_2__["default"](); // const indicatorOfFavoriteProducts = new FavoriteProductsIndicationOnPageLoad();

if (Object(_el__WEBPACK_IMPORTED_MODULE_0__["default"])('#productList') || Object(_el__WEBPACK_IMPORTED_MODULE_0__["default"])('#singleProduct')) {
  new _favoriteProducts_favoriteProductsIndicationOnPageLoad__WEBPACK_IMPORTED_MODULE_6__["default"]();
  new _favoriteProducts_favoriteProductsSwitcher__WEBPACK_IMPORTED_MODULE_8__["default"]();
}

new _favoriteProducts_favoriteProductsTotalCountIndication__WEBPACK_IMPORTED_MODULE_7__["default"](); // не менять порядок

if (Object(_el__WEBPACK_IMPORTED_MODULE_0__["default"])('#singleProduct')) {
  Object(_productSingle_singleProductKit__WEBPACK_IMPORTED_MODULE_12__["default"])();
}

var viewedProductsSummaryMaker = new _viewedProducts_viewedProductsSummaryMaker__WEBPACK_IMPORTED_MODULE_13__["default"]();

if (Object(_el__WEBPACK_IMPORTED_MODULE_0__["default"])('#productList') || Object(_el__WEBPACK_IMPORTED_MODULE_0__["default"])('#viewedProductsSummaryWrapper')) {
  var productCache = new _productSource_productCache__WEBPACK_IMPORTED_MODULE_9__["default"]();
  var viewedProductsAppender = new _viewedProducts_viewedProductsAppender__WEBPACK_IMPORTED_MODULE_10__["default"]();
  new _productQuickViewer_singleProductQuickViewer__WEBPACK_IMPORTED_MODULE_11__["default"]({
    productCache: productCache,
    viewedProductsAppender: viewedProductsAppender,
    viewedProductsSummaryMaker: viewedProductsSummaryMaker
  });

  if (Object(_el__WEBPACK_IMPORTED_MODULE_0__["default"])('#productList')) {
    var searchSettingsStore = new _productSource_searchSettingsStore__WEBPACK_IMPORTED_MODULE_14__["default"]();
    var searchUrlMaker = new _urlMaker_searchUrlMaker__WEBPACK_IMPORTED_MODULE_15__["default"](searchSettingsStore);
    var publicUrlMaker = new _urlMaker_publicUrlMaker__WEBPACK_IMPORTED_MODULE_16__["default"](searchSettingsStore);
    var filterOfCachedProducts = new _productSource_FilterOfCachedProducts__WEBPACK_IMPORTED_MODULE_17__["default"](searchSettingsStore);
    var sourceOfFilteredProducts = new _productSource_SourceOfFilteredProducts__WEBPACK_IMPORTED_MODULE_18__["default"]({
      productCache: productCache,
      searchUrlMaker: searchUrlMaker,
      filterOfCachedProducts: filterOfCachedProducts,
      searchSettingsStore: searchSettingsStore
    });
    new _productList_rendererByViewMoreButton__WEBPACK_IMPORTED_MODULE_20__["default"]({
      searchSettingsStore: searchSettingsStore,
      publicUrlMaker: publicUrlMaker,
      sourceOfFilteredProducts: sourceOfFilteredProducts
    });
    var rendererOfPaginationBlock = new _productList_rendererOfPaginationBlock__WEBPACK_IMPORTED_MODULE_24__["default"]({
      searchSettingsStore: searchSettingsStore,
      publicUrlMaker: publicUrlMaker
    });
    new _productList_rendererByPaginationButton__WEBPACK_IMPORTED_MODULE_21__["default"]({
      searchSettingsStore: searchSettingsStore,
      publicUrlMaker: publicUrlMaker,
      sourceOfFilteredProducts: sourceOfFilteredProducts,
      rendererOfPaginationBlock: rendererOfPaginationBlock
    });
    var menuLinkCssMaker = new _menu_menuLinkCssMaker__WEBPACK_IMPORTED_MODULE_19__["default"]({
      searchSettingsStore: searchSettingsStore
    });
    new _productList_rendererByMenuLink__WEBPACK_IMPORTED_MODULE_22__["default"]({
      sourceOfFilteredProducts: sourceOfFilteredProducts,
      searchSettingsStore: searchSettingsStore,
      publicUrlMaker: publicUrlMaker,
      rendererOfPaginationBlock: rendererOfPaginationBlock,
      menuLinkCssMaker: menuLinkCssMaker
    });
    new _productList_rendererOfViewedProductsByLink__WEBPACK_IMPORTED_MODULE_23__["default"]({
      sourceOfFilteredProducts: sourceOfFilteredProducts,
      searchSettingsStore: searchSettingsStore,
      publicUrlMaker: publicUrlMaker,
      rendererOfPaginationBlock: rendererOfPaginationBlock,
      menuLinkCssMaker: menuLinkCssMaker
    });
  }
}



if (Object(_el__WEBPACK_IMPORTED_MODULE_0__["default"])('.filter_icon__wrapper')) {
  new _productList_productFilter_absoluteProductFilter__WEBPACK_IMPORTED_MODULE_25__["default"]({
    clickSourceSelector: '.filter_icon__wrapper'
  });
}

if (Object(_el__WEBPACK_IMPORTED_MODULE_0__["default"])('.personal_account__icon')) {
  new _auth_authAbsoluteMenu__WEBPACK_IMPORTED_MODULE_3__["default"]({
    clickSourceSelector: '.personal_account__icon'
  });
}

if (Object(_el__WEBPACK_IMPORTED_MODULE_0__["default"])('#flashMessage')) {
  new _absoluteFlashMessage__WEBPACK_IMPORTED_MODULE_4__["default"](Object(_el__WEBPACK_IMPORTED_MODULE_0__["default"])('#flashMessage').innerText);
}

if (Object(_el__WEBPACK_IMPORTED_MODULE_0__["default"])('.auth_page__change_password_type__wrapper')) {
  new _auth_passwordTypeChanger__WEBPACK_IMPORTED_MODULE_5__["default"]({
    closedEyeSelector: ".auth_page__closed_eye_img",
    openedEyeSelector: ".auth_page__opened_eye_img",
    passwordInputSelector: "#password"
  });
}

/***/ }),

/***/ "./resources/js2/menu/menuLinkCssMaker.js":
/*!************************************************!*\
  !*** ./resources/js2/menu/menuLinkCssMaker.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MenuLinkCssMaker; });
/* harmony import */ var _el__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../el */ "./resources/js2/el.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var MenuLinkCssMaker = /*#__PURE__*/function () {
  function MenuLinkCssMaker(data) {
    _classCallCheck(this, MenuLinkCssMaker);

    this.searchSettingsStore = data.searchSettingsStore;
  }

  _createClass(MenuLinkCssMaker, [{
    key: "resetMenuLinksCss",
    value: function resetMenuLinksCss() {
      var nodes = Object(_el__WEBPACK_IMPORTED_MODULE_0__["default"])('.top_menu').querySelectorAll('.top_menu__link');

      var _iterator = _createForOfIteratorHelper(nodes),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var node = _step.value;
          node.classList.remove('top_menu__link_active');
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      nodes = Object(_el__WEBPACK_IMPORTED_MODULE_0__["default"])('.bottom_menu').querySelectorAll('.bottom_menu__link');

      var _iterator2 = _createForOfIteratorHelper(nodes),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var _node = _step2.value;

          _node.classList.remove('bottom_menu__link_active');
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }

      Object(_el__WEBPACK_IMPORTED_MODULE_0__["default"])('.logo__link').classList.remove('logo__link_active');
    }
  }, {
    key: "markActiveMenuLink",
    value: function markActiveMenuLink() {
      var settings = _objectSpread({}, this.searchSettingsStore.getSettings());

      var sectionName = settings.productSectionName;
      var additionalData = settings.additionalDataOfProductSection;

      if (sectionName === 'productCategory') {
        var categorySlug = additionalData.split(';')[1];
        var topLink = Object(_el__WEBPACK_IMPORTED_MODULE_0__["default"])(".top_menu [data-menu-link-category-slug=".concat(categorySlug, "]"));
        var bottomLink = Object(_el__WEBPACK_IMPORTED_MODULE_0__["default"])(".bottom_menu [data-menu-link-category-slug=".concat(categorySlug, "]"));

        if (topLink) {
          topLink.classList.add('top_menu__link_active');
        }

        if (bottomLink) {
          bottomLink.classList.add('bottom_menu__link_active');
        }
      }

      if (sectionName === 'favoriteProducts') {
        var favIconLink = Object(_el__WEBPACK_IMPORTED_MODULE_0__["default"])(".top_menu__link_fav_icon");

        if (favIconLink) {
          favIconLink.classList.add('top_menu__link_active');
        }
      }

      if (sectionName === 'all') {
        var logoLink = Object(_el__WEBPACK_IMPORTED_MODULE_0__["default"])(".logo__link");
        logoLink.classList.add('logo__link_active');
      }
    }
  }]);

  return MenuLinkCssMaker;
}();



/***/ }),

/***/ "./resources/js2/parentClasses/absoluteForm.js":
/*!*****************************************************!*\
  !*** ./resources/js2/parentClasses/absoluteForm.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AbsoluteForm; });
/* harmony import */ var _el__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../el */ "./resources/js2/el.js");
/* harmony import */ var _http_postJson__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http/postJson */ "./resources/js2/http/postJson.js");
/* harmony import */ var _visibleBlockByClick__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./visibleBlockByClick */ "./resources/js2/parentClasses/visibleBlockByClick.js");
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
      Object(_el__WEBPACK_IMPORTED_MODULE_0__["default"])(this.submitSelector).addEventListener('click', function () {
        _this2._submit(_this2._getUserData());
      }); // слушать keyup для запуска type-in валидации

      Object(_el__WEBPACK_IMPORTED_MODULE_0__["default"])(this.wrapSelector).addEventListener('keyup', function () {
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
      } // отправить данные и получить ответ


      Object(_http_postJson__WEBPACK_IMPORTED_MODULE_1__["default"])(this.postUrl, userData).then(function (data) {
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

      // защита от повторного нажатия на 5 сек
      if (this.disabledSubmit) {
        return false;
      }

      this.disabledSubmit = true;
      setTimeout(function () {
        _this4.disabledSubmit = false;
      }, 5000);
      return true;
    }
  }, {
    key: "_turnOnAlarm",
    value: function _turnOnAlarm() {
      Object(_el__WEBPACK_IMPORTED_MODULE_0__["default"])(this.wrapSelector).className = "".concat(this.basicCss, " ").concat(this.alarmCss);
    }
  }, {
    key: "_turnOffAlarm",
    value: function _turnOffAlarm() {
      Object(_el__WEBPACK_IMPORTED_MODULE_0__["default"])(this.wrapSelector).classList.remove(this.alarmCss);
    }
  }]);

  return AbsoluteForm;
}(_visibleBlockByClick__WEBPACK_IMPORTED_MODULE_2__["default"]);



/***/ }),

/***/ "./resources/js2/parentClasses/visibleBlock.js":
/*!*****************************************************!*\
  !*** ./resources/js2/parentClasses/visibleBlock.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return VisibleBlock; });
/* harmony import */ var _el__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../el */ "./resources/js2/el.js");
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

      if (!Object(_el__WEBPACK_IMPORTED_MODULE_0__["default"])(this.wrapSelector)) {
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

      Object(_el__WEBPACK_IMPORTED_MODULE_0__["default"])('body').insertAdjacentHTML('beforeend', html);

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

      Object(_el__WEBPACK_IMPORTED_MODULE_0__["default"])('body').addEventListener('click', function (e) {
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
      if (!Object(_el__WEBPACK_IMPORTED_MODULE_0__["default"])(this.wrapSelector)) {
        return;
      }

      Object(_el__WEBPACK_IMPORTED_MODULE_0__["default"])(this.wrapSelector).className = "".concat(this.basicCss, " ").concat(this.showCss);
    }
  }, {
    key: "_setVisibilityToFalse",
    value: function _setVisibilityToFalse(e) {
      if (!Object(_el__WEBPACK_IMPORTED_MODULE_0__["default"])(this.wrapSelector)) {
        return;
      }

      if (e.target.parentNode === Object(_el__WEBPACK_IMPORTED_MODULE_0__["default"])(this.wrapSelector)) {
        return;
      }

      if (e.target === Object(_el__WEBPACK_IMPORTED_MODULE_0__["default"])(this.wrapSelector)) {
        return;
      }

      Object(_el__WEBPACK_IMPORTED_MODULE_0__["default"])(this.wrapSelector).className = "".concat(this.basicCss, " ").concat(this.hideCss);

      this._additionalHideActions();
    }
  }, {
    key: "_additionalHideActions",
    value: function _additionalHideActions() {}
  }]);

  return VisibleBlock;
}();



/***/ }),

/***/ "./resources/js2/parentClasses/visibleBlockByClick.js":
/*!************************************************************!*\
  !*** ./resources/js2/parentClasses/visibleBlockByClick.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return VisibleBlockByClick; });
/* harmony import */ var _el__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../el */ "./resources/js2/el.js");
/* harmony import */ var _visibleBlock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./visibleBlock */ "./resources/js2/parentClasses/visibleBlock.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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

    if (!Object(_el__WEBPACK_IMPORTED_MODULE_0__["default"])(data.clickSourceSelector)) {
      return _possibleConstructorReturn(_this);
    }

    Object(_el__WEBPACK_IMPORTED_MODULE_0__["default"])(data.clickSourceSelector).addEventListener('click', function (e) {
      e.preventDefault();
      e.stopPropagation();

      _this._render();
    });
    return _this;
  }

  return VisibleBlockByClick;
}(_visibleBlock__WEBPACK_IMPORTED_MODULE_1__["default"]);



/***/ }),

/***/ "./resources/js2/productList/productFilter/absoluteProductFilter.js":
/*!**************************************************************************!*\
  !*** ./resources/js2/productList/productFilter/absoluteProductFilter.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AbsoluteProductFilter; });
/* harmony import */ var _parentClasses_visibleBlockByClick__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../parentClasses/visibleBlockByClick */ "./resources/js2/parentClasses/visibleBlockByClick.js");
/* harmony import */ var _html_productList_filterBlock_getFilterBlockHtml__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../html/productList/filterBlock/getFilterBlockHtml */ "./resources/js2/html/productList/filterBlock/getFilterBlockHtml.js");
/* harmony import */ var _el__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../el */ "./resources/js2/el.js");
/* harmony import */ var _scrollDocument__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../scrollDocument */ "./resources/js2/scrollDocument.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }






var AbsoluteProductFilter = /*#__PURE__*/function () {
  function AbsoluteProductFilter(data) {
    var _this = this;

    _classCallCheck(this, AbsoluteProductFilter);

    this.wrapSelector = "#productFilterWrapper";
    this.basicCss = 'product_filter';
    this.showCss = 'show_product_filter';
    this.hideCss = 'hide_product_filter';
    Object(_el__WEBPACK_IMPORTED_MODULE_2__["default"])(data.clickSourceSelector).addEventListener('click', function (e) {
      e.preventDefault();
      e.stopPropagation();

      _this._render();
    });
  }

  _createClass(AbsoluteProductFilter, [{
    key: "_render",
    value: function _render() {
      if (!Object(_el__WEBPACK_IMPORTED_MODULE_2__["default"])(this.wrapSelector)) {
        this._firstRender();

        this._justSetVisibilityToTrue();

        return;
      }

      this._justSetVisibilityToTrue();
    }
  }, {
    key: "_firstRender",
    value: function _firstRender() {
      var html = Object(_html_productList_filterBlock_getFilterBlockHtml__WEBPACK_IMPORTED_MODULE_1__["default"])();
      Object(_el__WEBPACK_IMPORTED_MODULE_2__["default"])('body').insertAdjacentHTML('beforeend', html);

      this._listenBodyTag();

      this._listenThisBlock();
    }
  }, {
    key: "_listenBodyTag",
    value: function _listenBodyTag() {
      var _this2 = this;

      Object(_el__WEBPACK_IMPORTED_MODULE_2__["default"])('body').addEventListener('click', function (e) {
        _this2._setVisibilityToFalse(e);
      });
    }
  }, {
    key: "_listenThisBlock",
    value: function _listenThisBlock() {
      var _this3 = this;

      Object(_el__WEBPACK_IMPORTED_MODULE_2__["default"])('.product_filter__collapse_icon').addEventListener('click', function () {
        _this3._setVisibilityToFalse2();
      });
    }
  }, {
    key: "_justSetVisibilityToTrue",
    value: function _justSetVisibilityToTrue() {
      if (!Object(_el__WEBPACK_IMPORTED_MODULE_2__["default"])(this.wrapSelector)) {
        return;
      } //const distance = window.pageYOffset;
      //scrollDocument(distance, 'up');


      document.body.style.overflow = 'hidden';
      Object(_el__WEBPACK_IMPORTED_MODULE_2__["default"])(this.wrapSelector).className = "".concat(this.basicCss, " ").concat(this.showCss);
    }
  }, {
    key: "_setVisibilityToFalse",
    value: function _setVisibilityToFalse(e) {
      if (!Object(_el__WEBPACK_IMPORTED_MODULE_2__["default"])(this.wrapSelector)) {
        return;
      }

      if (e.target === Object(_el__WEBPACK_IMPORTED_MODULE_2__["default"])(this.wrapSelector)) {
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
      Object(_el__WEBPACK_IMPORTED_MODULE_2__["default"])(this.wrapSelector).className = "".concat(this.basicCss, " ").concat(this.hideCss);
      document.body.style.overflow = 'auto';
    }
  }]);

  return AbsoluteProductFilter;
}();



/***/ }),

/***/ "./resources/js2/productList/rendererByMenuLink.js":
/*!*********************************************************!*\
  !*** ./resources/js2/productList/rendererByMenuLink.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RendererByMenuLink; });
/* harmony import */ var _el__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../el */ "./resources/js2/el.js");
/* harmony import */ var _productObject_getProductObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../productObject/getProductObject */ "./resources/js2/productObject/getProductObject.js");
/* harmony import */ var _html_productList_productListItem_index_getProductsItemHtml__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../html/productList/productListItem/index-getProductsItemHtml */ "./resources/js2/html/productList/productListItem/index-getProductsItemHtml.js");
/* harmony import */ var _favoriteProducts_favoriteProductsIndicationOnPageLoad__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../favoriteProducts/favoriteProductsIndicationOnPageLoad */ "./resources/js2/favoriteProducts/favoriteProductsIndicationOnPageLoad.js");
/* harmony import */ var _scrollDocument__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../scrollDocument */ "./resources/js2/scrollDocument.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }







var RendererByMenuLink = /*#__PURE__*/function () {
  function RendererByMenuLink(data) {
    var _this = this;

    _classCallCheck(this, RendererByMenuLink);

    this.sourceOfFilteredProducts = data.sourceOfFilteredProducts;
    this.searchSettingsStore = data.searchSettingsStore;
    this.publicUrlMaker = data.publicUrlMaker;
    this.rendererOfPaginationBlock = data.rendererOfPaginationBlock;
    this.menuLinkCssMaker = data.menuLinkCssMaker;
    this.productItemSelector = '[data-product-item]';
    this.wrapper = Object(_el__WEBPACK_IMPORTED_MODULE_0__["default"])('#productList');
    this.header = Object(_el__WEBPACK_IMPORTED_MODULE_0__["default"])('#productsH1');
    this.disabledRequest = false;
    Object(_el__WEBPACK_IMPORTED_MODULE_0__["default"])('body').addEventListener('click', function (e) {
      if (e.target.dataset.menuLinkSectionName) {
        e.preventDefault();

        _this._setDataAttributes(e);

        _this._setSearchSettings(e);

        _this._render();
      }
    });
  }

  _createClass(RendererByMenuLink, [{
    key: "_setDataAttributes",
    value: function _setDataAttributes(e) {
      var sectionName = e.target.dataset.menuLinkSectionName;
      this.wrapper.dataset.productSectionName = sectionName;

      if (sectionName === 'all') {
        var h1Text = e.target.dataset.menuLinkTitleText;
        this.wrapper.dataset.additionalDataOfProductSection = ";;".concat(h1Text);
        return;
      }

      if (sectionName === 'favoriteProducts') {
        var _h1Text = e.target.dataset.menuLinkTitleText;
        this.wrapper.dataset.additionalDataOfProductSection = ";;".concat(_h1Text);
        return;
      }

      if (sectionName === 'productCategory') {
        var categoryId = e.target.dataset.menuLinkCategoryId;
        var categorySlug = e.target.dataset.menuLinkCategorySlug;
        var categoryName = e.target.dataset.menuLinkCategoryName;
        this.wrapper.dataset.additionalDataOfProductSection = "".concat(categoryId, ";").concat(categorySlug, ";").concat(categoryName);
        return;
      }
    }
  }, {
    key: "_setSearchSettings",
    value: function _setSearchSettings(e) {
      this.searchSettingsStore.resetSettings();
      this.searchSettingsStore.setProductSectionData({
        productSectionName: this.wrapper.dataset.productSectionName,
        additionalData: this.wrapper.dataset.additionalDataOfProductSection
      });
      this.searchSettingsStore.setPageNumber(1);
      this.searchSettingsStore.setStartOffset(0);
    }
  }, {
    key: "_render",
    value: function _render() {
      var _this2 = this;

      if (!this._getRequestPermission()) {
        return;
      }

      this.sourceOfFilteredProducts.getFiltered().then(function (_ref) {
        var filteredProducts = _ref.filteredProducts,
            sectionProductsCount = _ref.sectionProductsCount;
        _this2.disabledRequest = false;
        var itemsHtmlArr = filteredProducts.map(function (product) {
          var productObject = Object(_productObject_getProductObject__WEBPACK_IMPORTED_MODULE_1__["default"])(product);
          return Object(_html_productList_productListItem_index_getProductsItemHtml__WEBPACK_IMPORTED_MODULE_2__["default"])(productObject);
        });
        var itemsHtml = "<div id=\"productListContent\">".concat(itemsHtmlArr.join(''), "</div>");

        if (Object(_el__WEBPACK_IMPORTED_MODULE_0__["default"])('#productListContent')) {
          Object(_el__WEBPACK_IMPORTED_MODULE_0__["default"])('#productListContent').remove();
        }

        _this2.wrapper.insertAdjacentHTML('afterbegin', itemsHtml);

        _this2._setSectionProductsCount(sectionProductsCount);

        _this2._finalActions();
      });
    }
  }, {
    key: "_setSectionProductsCount",
    value: function _setSectionProductsCount(sectionProductsCount) {
      this.wrapper.dataset.sectionProductsCount = sectionProductsCount;

      var settings = _objectSpread({}, this.searchSettingsStore.getSettings());

      var sectionPageCount = String(Math.ceil(sectionProductsCount / settings.perPage));
      this.wrapper.dataset.sectionPageCount = sectionPageCount;
      this.searchSettingsStore.setPageCount(sectionPageCount);
    }
  }, {
    key: "_finalActions",
    value: function _finalActions() {
      new _favoriteProducts_favoriteProductsIndicationOnPageLoad__WEBPACK_IMPORTED_MODULE_3__["default"]();
      this.publicUrlMaker.publishUrl();

      this._renderHeader();

      this._switchVisibilityOfViewMoreButton(); // this._makeInvisiblePaginationBlock();


      this.rendererOfPaginationBlock.remake();
      this.menuLinkCssMaker.resetMenuLinksCss();
      this.menuLinkCssMaker.markActiveMenuLink();
      var distance = window.pageYOffset;
      Object(_scrollDocument__WEBPACK_IMPORTED_MODULE_4__["default"])(distance, 'up');
    }
  }, {
    key: "_renderHeader",
    value: function _renderHeader() {
      var headerText = this.wrapper.dataset.additionalDataOfProductSection.split(';')[2];
      this.header.innerText = headerText;
    }
  }, {
    key: "_switchVisibilityOfViewMoreButton",
    value: function _switchVisibilityOfViewMoreButton() {
      var numberOfDisplayedProducts = document.querySelectorAll(this.productItemSelector).length;
      var sectionProductsCountFromServer = Number(this.wrapper.dataset.sectionProductsCount);

      if (numberOfDisplayedProducts >= sectionProductsCountFromServer) {
        this._turnOffViewMoreButton();
      } else {
        this._turnOnViewMoreButton();
      }
    }
  }, {
    key: "_turnOnViewMoreButton",
    value: function _turnOnViewMoreButton() {
      var viewMoreButton = Object(_el__WEBPACK_IMPORTED_MODULE_0__["default"])('#viewMoreButton');

      if (viewMoreButton.classList.contains("display-none")) {
        viewMoreButton.classList.remove("display-none");
      }
    }
  }, {
    key: "_turnOffViewMoreButton",
    value: function _turnOffViewMoreButton() {
      var viewMoreButton = Object(_el__WEBPACK_IMPORTED_MODULE_0__["default"])('#viewMoreButton');

      if (!viewMoreButton.classList.contains("display-none")) {
        viewMoreButton.classList.add("display-none");
      }
    }
    /*
    _makeInvisiblePaginationBlock() {
        const paginationBlock = el('#paginationContent');
        if (paginationBlock && !paginationBlock.classList.contains("display-none")) {
            paginationBlock.classList.add("display-none");
        }
    }
    */

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

  return RendererByMenuLink;
}();



/***/ }),

/***/ "./resources/js2/productList/rendererByPaginationButton.js":
/*!*****************************************************************!*\
  !*** ./resources/js2/productList/rendererByPaginationButton.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RendererByPaginationButton; });
/* harmony import */ var _el__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../el */ "./resources/js2/el.js");
/* harmony import */ var _productObject_getProductObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../productObject/getProductObject */ "./resources/js2/productObject/getProductObject.js");
/* harmony import */ var _html_productList_productListItem_index_getProductsItemHtml__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../html/productList/productListItem/index-getProductsItemHtml */ "./resources/js2/html/productList/productListItem/index-getProductsItemHtml.js");
/* harmony import */ var _favoriteProducts_favoriteProductsIndicationOnPageLoad__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../favoriteProducts/favoriteProductsIndicationOnPageLoad */ "./resources/js2/favoriteProducts/favoriteProductsIndicationOnPageLoad.js");
/* harmony import */ var _scrollDocument__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../scrollDocument */ "./resources/js2/scrollDocument.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }







var RendererByPaginationButton = /*#__PURE__*/function () {
  function RendererByPaginationButton(data) {
    var _this = this;

    _classCallCheck(this, RendererByPaginationButton);

    this.sourceOfFilteredProducts = data.sourceOfFilteredProducts;
    this.searchSettingsStore = data.searchSettingsStore;
    this.publicUrlMaker = data.publicUrlMaker;
    this.rendererOfPaginationBlock = data.rendererOfPaginationBlock;
    this.productItemSelector = '[data-product-item]';
    this.wrapper = Object(_el__WEBPACK_IMPORTED_MODULE_0__["default"])('#productList');
    this.disabledRequest = false;
    this.currentPageNumber = 0;
    Object(_el__WEBPACK_IMPORTED_MODULE_0__["default"])('body').addEventListener('click', function (e) {
      if (e.target.dataset.paginatorPageNumber) {
        e.preventDefault();

        _this._setSearchSettings(e);

        _this._render();
      }
    });
  }

  _createClass(RendererByPaginationButton, [{
    key: "_setSearchSettings",
    value: function _setSearchSettings(e) {
      this.searchSettingsStore.setProductSectionData({
        productSectionName: this.wrapper.dataset.productSectionName,
        additionalData: this.wrapper.dataset.additionalDataOfProductSection
      });

      var settings = _objectSpread({}, this.searchSettingsStore.getSettings());

      var pageNumber = Number(e.target.dataset.paginatorPageNumber);
      this.searchSettingsStore.setPageNumber(pageNumber);
      this.currentPageNumber = pageNumber;
      var offsetOfProductsToLoad = (pageNumber - 1) * settings.perPage;
      this.searchSettingsStore.setStartOffset(offsetOfProductsToLoad);
      var pageCount = Number(this.wrapper.dataset.sectionPageCount);
      this.searchSettingsStore.setPageCount(pageCount);
    }
  }, {
    key: "_render",
    value: function _render() {
      var _this2 = this;

      if (!this._getRequestPermission()) {
        return;
      }

      this.sourceOfFilteredProducts.getFiltered().then(function (_ref) {
        var filteredProducts = _ref.filteredProducts,
            sectionProductsCount = _ref.sectionProductsCount;
        _this2.disabledRequest = false;
        var itemsHtmlArr = filteredProducts.map(function (product) {
          var productObject = Object(_productObject_getProductObject__WEBPACK_IMPORTED_MODULE_1__["default"])(product);
          return Object(_html_productList_productListItem_index_getProductsItemHtml__WEBPACK_IMPORTED_MODULE_2__["default"])(productObject);
        });
        var itemsHtml = "<div id=\"productListContent\">".concat(itemsHtmlArr.join(''), "</div>");

        if (Object(_el__WEBPACK_IMPORTED_MODULE_0__["default"])('#productListContent')) {
          Object(_el__WEBPACK_IMPORTED_MODULE_0__["default"])('#productListContent').remove();
        }

        _this2.wrapper.insertAdjacentHTML('afterbegin', itemsHtml);

        _this2._setSectionProductsCount(sectionProductsCount);

        _this2._finalActions();
      });
    }
  }, {
    key: "_setSectionProductsCount",
    value: function _setSectionProductsCount(sectionProductsCount) {
      this.wrapper.dataset.sectionProductsCount = sectionProductsCount;

      var settings = _objectSpread({}, this.searchSettingsStore.getSettings());

      var sectionPageCount = String(Math.ceil(sectionProductsCount / settings.perPage));
      this.wrapper.dataset.sectionPageCount = sectionPageCount;
      this.searchSettingsStore.setPageCount(sectionPageCount);
    }
  }, {
    key: "_finalActions",
    value: function _finalActions() {
      new _favoriteProducts_favoriteProductsIndicationOnPageLoad__WEBPACK_IMPORTED_MODULE_3__["default"]();
      this.publicUrlMaker.publishUrl();

      if (this.currentPageNumber === 1) {
        this._makeVisibleViewMoreButton();
      } else {
        this._makeInvisibleViewMoreButton();
      }

      this.rendererOfPaginationBlock.remake();
      var distance = window.pageYOffset;
      Object(_scrollDocument__WEBPACK_IMPORTED_MODULE_4__["default"])(distance, 'up');
    }
  }, {
    key: "_makeVisibleViewMoreButton",
    value: function _makeVisibleViewMoreButton() {
      var viewMoreButton = Object(_el__WEBPACK_IMPORTED_MODULE_0__["default"])('#viewMoreButton');

      if (viewMoreButton && viewMoreButton.classList.contains("display-none")) {
        viewMoreButton.classList.remove("display-none");
      }
    }
  }, {
    key: "_makeInvisibleViewMoreButton",
    value: function _makeInvisibleViewMoreButton() {
      var viewMoreButton = Object(_el__WEBPACK_IMPORTED_MODULE_0__["default"])('#viewMoreButton');

      if (viewMoreButton && !viewMoreButton.classList.contains("display-none")) {
        viewMoreButton.classList.add("display-none");
      }
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
}();



/***/ }),

/***/ "./resources/js2/productList/rendererByViewMoreButton.js":
/*!***************************************************************!*\
  !*** ./resources/js2/productList/rendererByViewMoreButton.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RendererByViewMoreButton; });
/* harmony import */ var _el__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../el */ "./resources/js2/el.js");
/* harmony import */ var _productObject_getProductObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../productObject/getProductObject */ "./resources/js2/productObject/getProductObject.js");
/* harmony import */ var _html_productList_productListItem_index_getProductsItemHtml__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../html/productList/productListItem/index-getProductsItemHtml */ "./resources/js2/html/productList/productListItem/index-getProductsItemHtml.js");
/* harmony import */ var _favoriteProducts_favoriteProductsIndicationOnPageLoad__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../favoriteProducts/favoriteProductsIndicationOnPageLoad */ "./resources/js2/favoriteProducts/favoriteProductsIndicationOnPageLoad.js");
/* harmony import */ var _scrollDocument__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../scrollDocument */ "./resources/js2/scrollDocument.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }







var RendererByViewMoreButton = /*#__PURE__*/function () {
  function RendererByViewMoreButton(data) {
    var _this = this;

    _classCallCheck(this, RendererByViewMoreButton);

    this.sourceOfFilteredProducts = data.sourceOfFilteredProducts;
    this.searchSettingsStore = data.searchSettingsStore;
    this.publicUrlMaker = data.publicUrlMaker;
    this.productItemSelector = '[data-product-item]';
    this.wrapper = Object(_el__WEBPACK_IMPORTED_MODULE_0__["default"])('#productList'); //this.container = el('#productListContent'); // не делать указатель

    this.disabledRequest = false;
    Object(_el__WEBPACK_IMPORTED_MODULE_0__["default"])('body').addEventListener('click', function (e) {
      if (e.target.id === 'viewMoreButton') {
        _this._setSearchSettings();

        _this._render();
      }
    });
  }

  _createClass(RendererByViewMoreButton, [{
    key: "_setSearchSettings",
    value: function _setSearchSettings() {
      this.searchSettingsStore.setProductSectionData({
        productSectionName: this.wrapper.dataset.productSectionName,
        additionalData: this.wrapper.dataset.additionalDataOfProductSection
      });
      var offsetOfProductsToLoad = document.querySelectorAll(this.productItemSelector).length;
      this.searchSettingsStore.setStartOffset(offsetOfProductsToLoad);
    }
  }, {
    key: "_render",
    value: function _render() {
      var _this2 = this;

      if (!this._getRequestPermission()) {
        return;
      }

      this.sourceOfFilteredProducts.getFiltered().then(function (_ref) {
        var filteredProducts = _ref.filteredProducts,
            sectionProductsCount = _ref.sectionProductsCount;
        _this2.disabledRequest = false;
        var itemsHtmlArr = filteredProducts.map(function (product) {
          var productObject = Object(_productObject_getProductObject__WEBPACK_IMPORTED_MODULE_1__["default"])(product);
          return Object(_html_productList_productListItem_index_getProductsItemHtml__WEBPACK_IMPORTED_MODULE_2__["default"])(productObject);
        });
        var itemsHtml = itemsHtmlArr.join(''); // получать элемент только без ранее созданного указателя

        Object(_el__WEBPACK_IMPORTED_MODULE_0__["default"])('#productListContent').insertAdjacentHTML('beforeend', itemsHtml);

        _this2._setSectionProductsCount(sectionProductsCount);

        _this2._finalActions();
      });
    }
  }, {
    key: "_setSectionProductsCount",
    value: function _setSectionProductsCount(sectionProductsCount) {
      this.wrapper.dataset.sectionProductsCount = sectionProductsCount;

      var settings = _objectSpread({}, this.searchSettingsStore.getSettings());

      var sectionPageCount = String(Math.ceil(sectionProductsCount / settings.perPage));
      this.wrapper.dataset.sectionPageCount = sectionPageCount;
      this.searchSettingsStore.setPageCount(sectionPageCount);
    }
  }, {
    key: "_finalActions",
    value: function _finalActions() {
      new _favoriteProducts_favoriteProductsIndicationOnPageLoad__WEBPACK_IMPORTED_MODULE_3__["default"]();
      this.publicUrlMaker.publishUrl();

      this._makeInvisiblePaginationBlock();

      this._switchVisibilityOfViewMoreButton();

      Object(_scrollDocument__WEBPACK_IMPORTED_MODULE_4__["default"])(200, 'down');
    }
  }, {
    key: "_switchVisibilityOfViewMoreButton",
    value: function _switchVisibilityOfViewMoreButton() {
      var numberOfDisplayedProducts = document.querySelectorAll(this.productItemSelector).length;
      var sectionProductsCountFromServer = Number(this.wrapper.dataset.sectionProductsCount);

      if (numberOfDisplayedProducts >= sectionProductsCountFromServer) {
        this._turnOffViewMoreButton();
      } else {
        this._turnOnViewMoreButton();
      }
    }
  }, {
    key: "_turnOnViewMoreButton",
    value: function _turnOnViewMoreButton() {
      var viewMoreButton = Object(_el__WEBPACK_IMPORTED_MODULE_0__["default"])('#viewMoreButton');

      if (viewMoreButton.classList.contains("display-none")) {
        viewMoreButton.classList.remove("display-none");
      }
    }
  }, {
    key: "_turnOffViewMoreButton",
    value: function _turnOffViewMoreButton() {
      var viewMoreButton = Object(_el__WEBPACK_IMPORTED_MODULE_0__["default"])('#viewMoreButton');

      if (!viewMoreButton.classList.contains("display-none")) {
        viewMoreButton.classList.add("display-none");
      }
    }
    /*
    _makeInvisibleViewMoreButtonIfNeeded() {
        const numberOfDisplayedProducts = document.querySelectorAll(this.productItemSelector).length;
        const sectionProductsCountFromServer = Number(this.wrapper.dataset.sectionProductsCount);
        if (numberOfDisplayedProducts >= sectionProductsCountFromServer) {
            el('#viewMoreButton').classList.add("display-none");
        }
    }
    */

  }, {
    key: "_makeInvisiblePaginationBlock",
    value: function _makeInvisiblePaginationBlock() {
      if (!Object(_el__WEBPACK_IMPORTED_MODULE_0__["default"])('#paginationContent').classList.contains("display-none")) {
        Object(_el__WEBPACK_IMPORTED_MODULE_0__["default"])('#paginationContent').classList.add("display-none");
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
}();



/***/ }),

/***/ "./resources/js2/productList/rendererOfPaginationBlock.js":
/*!****************************************************************!*\
  !*** ./resources/js2/productList/rendererOfPaginationBlock.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RendererOfPaginationBlock; });
/* harmony import */ var _el__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../el */ "./resources/js2/el.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var RendererOfPaginationBlock = /*#__PURE__*/function () {
  function RendererOfPaginationBlock(_ref) {
    var searchSettingsStore = _ref.searchSettingsStore,
        publicUrlMaker = _ref.publicUrlMaker;

    _classCallCheck(this, RendererOfPaginationBlock);

    this.searchSettingsStore = searchSettingsStore;
    this.publicUrlMaker = publicUrlMaker;
    this.wrapper = Object(_el__WEBPACK_IMPORTED_MODULE_0__["default"])('#paginationWrapper');
  }

  _createClass(RendererOfPaginationBlock, [{
    key: "remake",
    value: function remake() {
      if (Object(_el__WEBPACK_IMPORTED_MODULE_0__["default"])('#paginationContent')) {
        Object(_el__WEBPACK_IMPORTED_MODULE_0__["default"])('#paginationContent').remove();
      }

      var data = this._getPaginationData();

      var contentHtml = data.pageCount > 7 ? this._getComplexPaginationBlockHtml(data) : this._getSimplePaginationBlockHtml(data);
      var totalHtml = "<div id=\"paginationContent\" class=\"pagination_nav__content\">\n                              ".concat(contentHtml, "\n                           </div>");
      this.wrapper.insertAdjacentHTML('afterbegin', totalHtml);
    }
  }, {
    key: "_getPaginationData",
    value: function _getPaginationData() {
      var settings = this.searchSettingsStore.getSettings();
      var pageNumber = settings.pageNumber;
      var pageCount = settings.pageCount;
      var firstPageUrl = this.publicUrlMaker.getFirstPageUrl();
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
    value: function _getComplexPaginationBlockHtml(_ref2) {
      var firstPageUrl = _ref2.firstPageUrl,
          pageUrl = _ref2.pageUrl,
          lastPageUrl = _ref2.lastPageUrl,
          currentPageNumber = _ref2.currentPageNumber,
          pageCount = _ref2.pageCount,
          prevRoute = _ref2.prevRoute,
          prevPageNumber = _ref2.prevPageNumber,
          nextRoute = _ref2.nextRoute,
          nextPageNumber = _ref2.nextPageNumber;
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
    value: function _getSimplePaginationBlockHtml(_ref3) {
      var firstPageUrl = _ref3.firstPageUrl,
          pageUrl = _ref3.pageUrl,
          currentPageNumber = _ref3.currentPageNumber,
          pageCount = _ref3.pageCount;

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

  return RendererOfPaginationBlock;
}();



/***/ }),

/***/ "./resources/js2/productList/rendererOfViewedProductsByLink.js":
/*!*********************************************************************!*\
  !*** ./resources/js2/productList/rendererOfViewedProductsByLink.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RendererOfViewedProductsByLink; });
/* harmony import */ var _el__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../el */ "./resources/js2/el.js");
/* harmony import */ var _productObject_getProductObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../productObject/getProductObject */ "./resources/js2/productObject/getProductObject.js");
/* harmony import */ var _html_productList_productListItem_index_getProductsItemHtml__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../html/productList/productListItem/index-getProductsItemHtml */ "./resources/js2/html/productList/productListItem/index-getProductsItemHtml.js");
/* harmony import */ var _favoriteProducts_favoriteProductsIndicationOnPageLoad__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../favoriteProducts/favoriteProductsIndicationOnPageLoad */ "./resources/js2/favoriteProducts/favoriteProductsIndicationOnPageLoad.js");
/* harmony import */ var _scrollDocument__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../scrollDocument */ "./resources/js2/scrollDocument.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }







var RendererOfViewedProductsByLink = /*#__PURE__*/function () {
  function RendererOfViewedProductsByLink(data) {
    var _this = this;

    _classCallCheck(this, RendererOfViewedProductsByLink);

    this.sourceOfFilteredProducts = data.sourceOfFilteredProducts;
    this.searchSettingsStore = data.searchSettingsStore;
    this.publicUrlMaker = data.publicUrlMaker;
    this.rendererOfPaginationBlock = data.rendererOfPaginationBlock;
    this.menuLinkCssMaker = data.menuLinkCssMaker;
    this.productItemSelector = '[data-product-item]';
    this.wrapper = Object(_el__WEBPACK_IMPORTED_MODULE_0__["default"])('#productList');
    this.header = Object(_el__WEBPACK_IMPORTED_MODULE_0__["default"])('#productsH1');
    this.disabledRequest = false;
    Object(_el__WEBPACK_IMPORTED_MODULE_0__["default"])('body').addEventListener('click', function (e) {
      if (e.target.dataset.viewedProductsLink) {
        e.preventDefault();

        _this._setDataAttributes();

        _this._setSearchSettings();

        _this._render();
      }
    });
  }

  _createClass(RendererOfViewedProductsByLink, [{
    key: "_setDataAttributes",
    value: function _setDataAttributes() {
      this.wrapper.dataset.productSectionName = 'viewedProducts';
    }
  }, {
    key: "_setSearchSettings",
    value: function _setSearchSettings(e) {
      this.searchSettingsStore.resetSettings();
      this.searchSettingsStore.setProductSectionData({
        productSectionName: this.wrapper.dataset.productSectionName,
        additionalData: ''
      });
      this.searchSettingsStore.setPageNumber(1);
      this.searchSettingsStore.setStartOffset(0);
    }
  }, {
    key: "_render",
    value: function _render() {
      var _this2 = this;

      if (!this._getRequestPermission()) {
        return;
      }

      this.sourceOfFilteredProducts.getViewedProductsFromServer().then(function (_ref) {
        var filteredProducts = _ref.filteredProducts,
            sectionProductsCount = _ref.sectionProductsCount,
            allViewedIdsStr = _ref.allViewedIdsStr;
        _this2.disabledRequest = false;
        var itemsHtmlArr = filteredProducts.map(function (product) {
          var productObject = Object(_productObject_getProductObject__WEBPACK_IMPORTED_MODULE_1__["default"])(product);
          return Object(_html_productList_productListItem_index_getProductsItemHtml__WEBPACK_IMPORTED_MODULE_2__["default"])(productObject);
        });
        var itemsHtml = "<div id=\"productListContent\">".concat(itemsHtmlArr.join(''), "</div>");

        if (Object(_el__WEBPACK_IMPORTED_MODULE_0__["default"])('#productListContent')) {
          Object(_el__WEBPACK_IMPORTED_MODULE_0__["default"])('#productListContent').remove();
        }

        _this2.wrapper.insertAdjacentHTML('afterbegin', itemsHtml);

        _this2._setSectionProductsCount(sectionProductsCount);

        _this2._setAllViewedIds(allViewedIdsStr);

        _this2._finalActions();
      });
    }
  }, {
    key: "_setSectionProductsCount",
    value: function _setSectionProductsCount(sectionProductsCount) {
      this.wrapper.dataset.sectionProductsCount = sectionProductsCount;

      var settings = _objectSpread({}, this.searchSettingsStore.getSettings());

      var sectionPageCount = String(Math.ceil(sectionProductsCount / settings.perPage));
      this.wrapper.dataset.sectionPageCount = sectionPageCount;
      this.searchSettingsStore.setPageCount(sectionPageCount);
    }
  }, {
    key: "_setAllViewedIds",
    value: function _setAllViewedIds(allViewedIdsStr) {
      this.wrapper.dataset.additionalDataOfProductSection = allViewedIdsStr;
      this.searchSettingsStore.setProductSectionData({
        productSectionName: this.wrapper.dataset.productSectionName,
        additionalData: allViewedIdsStr
      });
    }
  }, {
    key: "_finalActions",
    value: function _finalActions() {
      new _favoriteProducts_favoriteProductsIndicationOnPageLoad__WEBPACK_IMPORTED_MODULE_3__["default"]();
      this.publicUrlMaker.publishUrl();

      this._renderHeader();

      this._switchVisibilityOfViewMoreButton();

      this.rendererOfPaginationBlock.remake();
      this.menuLinkCssMaker.resetMenuLinksCss();
      var distance = window.pageYOffset;
      Object(_scrollDocument__WEBPACK_IMPORTED_MODULE_4__["default"])(distance, 'up');
    }
  }, {
    key: "_renderHeader",
    value: function _renderHeader() {
      this.header.innerText = 'Вы смотрели';
    }
  }, {
    key: "_switchVisibilityOfViewMoreButton",
    value: function _switchVisibilityOfViewMoreButton() {
      var numberOfDisplayedProducts = document.querySelectorAll(this.productItemSelector).length;
      var sectionProductsCountFromServer = Number(this.wrapper.dataset.sectionProductsCount);

      if (numberOfDisplayedProducts >= sectionProductsCountFromServer) {
        this._turnOffViewMoreButton();
      } else {
        this._turnOnViewMoreButton();
      }
    }
  }, {
    key: "_turnOnViewMoreButton",
    value: function _turnOnViewMoreButton() {
      var viewMoreButton = Object(_el__WEBPACK_IMPORTED_MODULE_0__["default"])('#viewMoreButton');

      if (viewMoreButton.classList.contains("display-none")) {
        viewMoreButton.classList.remove("display-none");
      }
    }
  }, {
    key: "_turnOffViewMoreButton",
    value: function _turnOffViewMoreButton() {
      var viewMoreButton = Object(_el__WEBPACK_IMPORTED_MODULE_0__["default"])('#viewMoreButton');

      if (!viewMoreButton.classList.contains("display-none")) {
        viewMoreButton.classList.add("display-none");
      }
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
}();



/***/ }),

/***/ "./resources/js2/productObject/getProductObject.js":
/*!*********************************************************!*\
  !*** ./resources/js2/productObject/getProductObject.js ***!
  \*********************************************************/
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

/***/ "./resources/js2/productQuickViewer/quickProductDestructor.js":
/*!********************************************************************!*\
  !*** ./resources/js2/productQuickViewer/quickProductDestructor.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return quickProductDestructor; });
/* harmony import */ var _el__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../el */ "./resources/js2/el.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var quickProductDestructor = /*#__PURE__*/function () {
  function quickProductDestructor() {
    var _this = this;

    _classCallCheck(this, quickProductDestructor);

    Object(_el__WEBPACK_IMPORTED_MODULE_0__["default"])('.quick_view_manager__collapse_icon').addEventListener('click', function (e) {
      _this._removeQuickProduct();
    });
  }

  _createClass(quickProductDestructor, [{
    key: "_removeQuickProduct",
    value: function _removeQuickProduct() {
      if (Object(_el__WEBPACK_IMPORTED_MODULE_0__["default"])('#quickProduct')) {
        Object(_el__WEBPACK_IMPORTED_MODULE_0__["default"])('#quickProduct').remove();
      }

      document.body.style.overflow = 'auto';
    }
  }]);

  return quickProductDestructor;
}();



/***/ }),

/***/ "./resources/js2/productQuickViewer/singleProductQuickViewer.js":
/*!**********************************************************************!*\
  !*** ./resources/js2/productQuickViewer/singleProductQuickViewer.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SingleProductQuickViewer; });
/* harmony import */ var _el__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../el */ "./resources/js2/el.js");
/* harmony import */ var _allProductsMustBeCached__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../allProductsMustBeCached */ "./resources/js2/allProductsMustBeCached.js");
/* harmony import */ var _productObject_getProductObject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../productObject/getProductObject */ "./resources/js2/productObject/getProductObject.js");
/* harmony import */ var _html_singleProduct_index_getSingleProductHtml__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../html/singleProduct/index-getSingleProductHtml */ "./resources/js2/html/singleProduct/index-getSingleProductHtml.js");
/* harmony import */ var _productSingle_singleProductKit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../productSingle/singleProductKit */ "./resources/js2/productSingle/singleProductKit.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }







var SingleProductQuickViewer = /*#__PURE__*/function () {
  function SingleProductQuickViewer(data) {
    var _this = this;

    _classCallCheck(this, SingleProductQuickViewer);

    this.productCache = data.productCache;
    this.viewedProductsAppender = data.viewedProductsAppender;
    this.viewedProductsSummaryMaker = data.viewedProductsSummaryMaker;
    Object(_el__WEBPACK_IMPORTED_MODULE_0__["default"])('body').addEventListener('click', function (e) {
      if (e.target.dataset.quickView) {
        e.preventDefault();
        var productId = Number(e.target.dataset.quickView);

        _this._showOneProduct(productId);

        _this.viewedProductsAppender.post(productId);
      }
    });
  }

  _createClass(SingleProductQuickViewer, [{
    key: "_showOneProduct",
    value: function _showOneProduct(productId) {
      // на страницах где нет списка товаров
      if (!Object(_el__WEBPACK_IMPORTED_MODULE_0__["default"])('#productList')) {
        this._showOneFromServer(productId);

        return;
      } // на страницах где есть список товаров


      if (Object(_allProductsMustBeCached__WEBPACK_IMPORTED_MODULE_1__["default"])()) {
        this._showOneFromCache(productId);
      } else {
        this._showOneFromServer(productId);
      }
    }
  }, {
    key: "_showOneFromServer",
    value: function _showOneFromServer(productId) {
      var _this2 = this;

      return this.productCache.getOneFromServer(productId).then(function (product) {
        _this2.viewedProductsSummaryMaker.remakeWith(product);

        var productObject = Object(_productObject_getProductObject__WEBPACK_IMPORTED_MODULE_2__["default"])(product);

        _this2._renderProduct(productObject);
      });
    }
  }, {
    key: "_showOneFromCache",
    value: function _showOneFromCache(productId) {
      var _this3 = this;

      return this.productCache.getEntireList().then(function (data) {
        var list = _toConsumableArray(data);

        var product = list.filter(function (item) {
          return item.id === productId;
        })[0];

        _this3.viewedProductsSummaryMaker.remakeWith(product);

        var productObject = Object(_productObject_getProductObject__WEBPACK_IMPORTED_MODULE_2__["default"])(product);

        _this3._renderProduct(productObject);

        _this3.productCache.getOneDescription(productId).then(function (data) {
          Object(_el__WEBPACK_IMPORTED_MODULE_0__["default"])('#productDescriptionContainer').innerText = data.description;
        });
      });
    }
  }, {
    key: "_renderProduct",
    value: function _renderProduct(product) {
      var productHtml = Object(_html_singleProduct_index_getSingleProductHtml__WEBPACK_IMPORTED_MODULE_3__["default"])(product);

      if (Object(_el__WEBPACK_IMPORTED_MODULE_0__["default"])('#quickProduct')) {
        Object(_el__WEBPACK_IMPORTED_MODULE_0__["default"])('#quickProduct').remove();
      }

      document.body.style.overflow = 'hidden';
      Object(_el__WEBPACK_IMPORTED_MODULE_0__["default"])('body').insertAdjacentHTML('beforeend', productHtml);
      Object(_productSingle_singleProductKit__WEBPACK_IMPORTED_MODULE_4__["default"])();
    }
  }]);

  return SingleProductQuickViewer;
}();



/***/ }),

/***/ "./resources/js2/productSingle/desktop/largePhotoMaker.js":
/*!****************************************************************!*\
  !*** ./resources/js2/productSingle/desktop/largePhotoMaker.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LargePhotoMaker; });
/* harmony import */ var _el__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../el */ "./resources/js2/el.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var LargePhotoMaker = /*#__PURE__*/function () {
  function LargePhotoMaker() {
    var _this = this;

    _classCallCheck(this, LargePhotoMaker);

    this.largePhotosHtmlWasDone = false;
    Object(_el__WEBPACK_IMPORTED_MODULE_0__["default"])('#singleProduct').addEventListener('mouseover', function (e) {
      _this._makeLargePhotos();
    });
  }

  _createClass(LargePhotoMaker, [{
    key: "_makeLargePhotos",
    value: function _makeLargePhotos() {
      if (!Object(_el__WEBPACK_IMPORTED_MODULE_0__["default"])('#smallPhotos')) {
        return;
      }

      if (this.largePhotosHtmlWasDone) {
        return;
      }

      if (Object(_el__WEBPACK_IMPORTED_MODULE_0__["default"])('#largePhotos')) {
        return;
      }

      this.largePhotosHtmlWasDone = true;
      var smallPhotosHtml = Object(_el__WEBPACK_IMPORTED_MODULE_0__["default"])('#smallPhotos').innerHTML;
      var largePhotosHtml = smallPhotosHtml.replaceAll("products-photos-size2", "products-photos-size5");
      largePhotosHtml = largePhotosHtml.replaceAll("s2-", "s5-");
      largePhotosHtml = largePhotosHtml.replaceAll("data-small-photo", "data-large-photo");
      largePhotosHtml = "<div id=\"largePhotos\" class=\"display-none\">".concat(largePhotosHtml, "</div>");
      Object(_el__WEBPACK_IMPORTED_MODULE_0__["default"])('#singleProduct').insertAdjacentHTML('beforeend', largePhotosHtml); //console.log(largePhotosHtml);
    }
  }]);

  return LargePhotoMaker;
}();



/***/ }),

/***/ "./resources/js2/productSingle/desktop/largePhotoViewer.js":
/*!*****************************************************************!*\
  !*** ./resources/js2/productSingle/desktop/largePhotoViewer.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LargePhotoViewer; });
/* harmony import */ var _el__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../el */ "./resources/js2/el.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var LargePhotoViewer = /*#__PURE__*/function () {
  function LargePhotoViewer() {
    var _this = this;

    _classCallCheck(this, LargePhotoViewer);

    this.mainPhotoRatio = 0;
    this.photoContainer = Object(_el__WEBPACK_IMPORTED_MODULE_0__["default"])('#mainPhotoContainer');
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
    this.photoContainer.addEventListener('mouseover', function (e) {
      _this._startViewLargePhoto();
    });
    this.photoContainer.addEventListener('mousemove', function (e) {
      _this._viewLargePhoto(e);
    });
    this.photoContainer.addEventListener('mouseleave', function (e) {
      _this._finishViewLargePhoto();
    });
  }

  _createClass(LargePhotoViewer, [{
    key: "_startViewLargePhoto",
    value: function _startViewLargePhoto() {
      Object(_el__WEBPACK_IMPORTED_MODULE_0__["default"])('#mainPhotoContainer').style.display = 'block';
      Object(_el__WEBPACK_IMPORTED_MODULE_0__["default"])('#mainPhoto').className = 'photo__size5';
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
      Object(_el__WEBPACK_IMPORTED_MODULE_0__["default"])('#mainPhoto').className = 'photo__size4';
      this.photoContainer.scrollLeft = 0;
      this.photoContainer.scrollTop = 0;
    }
  }]);

  return LargePhotoViewer;
}();



/***/ }),

/***/ "./resources/js2/productSingle/desktop/mainPhotoChanger.js":
/*!*****************************************************************!*\
  !*** ./resources/js2/productSingle/desktop/mainPhotoChanger.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MainPhotoChanger; });
/* harmony import */ var _el__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../el */ "./resources/js2/el.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var MainPhotoChanger = /*#__PURE__*/function () {
  function MainPhotoChanger() {
    var _this = this;

    _classCallCheck(this, MainPhotoChanger);

    Object(_el__WEBPACK_IMPORTED_MODULE_0__["default"])('#smallPhotos').addEventListener('mouseover', function (e) {
      if (e.target.dataset.smallPhoto) {
        _this._changeMainPhoto(e.target.dataset.smallPhoto);
      }
    });
  }

  _createClass(MainPhotoChanger, [{
    key: "_changeMainPhoto",
    value: function _changeMainPhoto(photoNumber) {
      var largePhotoSelector = "[data-large-photo=\"".concat(photoNumber, "\"]");
      Object(_el__WEBPACK_IMPORTED_MODULE_0__["default"])('#mainPhoto').src = Object(_el__WEBPACK_IMPORTED_MODULE_0__["default"])(largePhotoSelector).src;

      this._refreshPhotoNumberIndicator(photoNumber);
    }
  }, {
    key: "_refreshPhotoNumberIndicator",
    value: function _refreshPhotoNumberIndicator(photoNumber) {
      if (!Object(_el__WEBPACK_IMPORTED_MODULE_0__["default"])('#photoNumberIndicator')) {
        return;
      }

      Object(_el__WEBPACK_IMPORTED_MODULE_0__["default"])('#photoNumberIndicator').innerText = photoNumber;
    }
  }]);

  return MainPhotoChanger;
}();



/***/ }),

/***/ "./resources/js2/productSingle/desktop/smallPhotoScroller.js":
/*!*******************************************************************!*\
  !*** ./resources/js2/productSingle/desktop/smallPhotoScroller.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SmallPhotoScroller; });
/* harmony import */ var _el__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../el */ "./resources/js2/el.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var SmallPhotoScroller = /*#__PURE__*/function () {
  function SmallPhotoScroller() {
    var _this = this;

    _classCallCheck(this, SmallPhotoScroller);

    this.container = Object(_el__WEBPACK_IMPORTED_MODULE_0__["default"])('#smallPhotos');
    this.buttonDown = Object(_el__WEBPACK_IMPORTED_MODULE_0__["default"])('#smallPhotos-scrollButtonDown');
    this.buttonUp = Object(_el__WEBPACK_IMPORTED_MODULE_0__["default"])('#smallPhotos-scrollButtonUp');
    this.buttonDown.addEventListener('click', function (e) {
      _this.scrollSmallPhoto(300, 'down');
    });
    this.buttonUp.addEventListener('click', function (e) {
      _this.scrollSmallPhoto(300, 'up');
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

/***/ "./resources/js2/productSingle/mobile/mobileLargePhotoMaker.js":
/*!*********************************************************************!*\
  !*** ./resources/js2/productSingle/mobile/mobileLargePhotoMaker.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MobileLargePhotoMaker; });
/* harmony import */ var _el__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../el */ "./resources/js2/el.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var MobileLargePhotoMaker = /*#__PURE__*/function () {
  function MobileLargePhotoMaker() {
    var _this = this;

    _classCallCheck(this, MobileLargePhotoMaker);

    this.largePhotosHtmlWasDone = false;
    Object(_el__WEBPACK_IMPORTED_MODULE_0__["default"])('#singleProduct').addEventListener('touchstart', function (e) {
      e.preventDefault();

      _this._makeLargePhotos();
    });
    Object(_el__WEBPACK_IMPORTED_MODULE_0__["default"])('#singleProduct').addEventListener('mouseover', function (e) {
      _this._makeLargePhotos();
    });
  }

  _createClass(MobileLargePhotoMaker, [{
    key: "_makeLargePhotos",
    value: function _makeLargePhotos() {
      if (!Object(_el__WEBPACK_IMPORTED_MODULE_0__["default"])('#smallPhotos')) {
        return;
      }

      if (this.largePhotosHtmlWasDone) {
        return;
      }

      if (Object(_el__WEBPACK_IMPORTED_MODULE_0__["default"])('#tapeOfLargePhotos')) {
        return;
      }

      this.largePhotosHtmlWasDone = true;
      var nodes = document.querySelectorAll('[data-small-photo]');
      var photoArr = [];

      var _iterator = _createForOfIteratorHelper(nodes),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var node = _step.value;
          var src = node.src;
          src = src.replace("products-photos-size2", "products-photos-size5");
          src = src.replaceAll("s2-", "s5-");
          var photo = "<img alt=\"\" src=\"".concat(src, "\" class=\"photo__size4\" />");
          photoArr.push(photo);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      var largePhotosHtml = "<div id=\"tapeOfLargePhotos\" class=\"display-flex\">\n                                    ".concat(photoArr.join(''), "\n                                 </div>");

      if (Object(_el__WEBPACK_IMPORTED_MODULE_0__["default"])('#mainPhoto')) {
        Object(_el__WEBPACK_IMPORTED_MODULE_0__["default"])('#mainPhoto').remove();
      }

      Object(_el__WEBPACK_IMPORTED_MODULE_0__["default"])('#mainPhotoContainer').insertAdjacentHTML('afterbegin', largePhotosHtml);
    }
  }]);

  return MobileLargePhotoMaker;
}();



/***/ }),

/***/ "./resources/js2/productSingle/mobile/mobileLargePhotoScroller.js":
/*!************************************************************************!*\
  !*** ./resources/js2/productSingle/mobile/mobileLargePhotoScroller.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MobileLargePhotoScroller; });
/* harmony import */ var _el__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../el */ "./resources/js2/el.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var MobileLargePhotoScroller = /*#__PURE__*/function () {
  function MobileLargePhotoScroller() {
    var _this = this;

    _classCallCheck(this, MobileLargePhotoScroller);

    this.container = Object(_el__WEBPACK_IMPORTED_MODULE_0__["default"])('#mainPhotoContainer');
    this.buttonLeft = Object(_el__WEBPACK_IMPORTED_MODULE_0__["default"])('#largePhotoScrollLeftButton');
    this.buttonRight = Object(_el__WEBPACK_IMPORTED_MODULE_0__["default"])('#largePhotoScrollRightButton');
    this.photoNumberIndicator = Object(_el__WEBPACK_IMPORTED_MODULE_0__["default"])('#photoNumberIndicator');
    this.indexOfMainPhoto = 0;
    this.numberOfPhotos = this._getPhotoCount();
    this.buttonLeft.addEventListener('click', function (e) {
      _this._showNextPhoto(-1);
    });
    this.buttonRight.addEventListener('click', function (e) {
      _this._showNextPhoto(1);
    });
  }

  _createClass(MobileLargePhotoScroller, [{
    key: "_getPhotoCount",
    value: function _getPhotoCount() {
      var nodes = document.querySelectorAll('[data-small-photo]');
      return nodes.length;
    }
  }, {
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
      var _this2 = this;

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
        _this2._scrollLargePhotos(offset, startX, photoWidth);
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
  }]);

  return MobileLargePhotoScroller;
}();



/***/ }),

/***/ "./resources/js2/productSingle/singleProductKit.js":
/*!*********************************************************!*\
  !*** ./resources/js2/productSingle/singleProductKit.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return singleProductKit; });
/* harmony import */ var _el__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../el */ "./resources/js2/el.js");
/* harmony import */ var _desktop_largePhotoMaker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./desktop/largePhotoMaker */ "./resources/js2/productSingle/desktop/largePhotoMaker.js");
/* harmony import */ var _desktop_mainPhotoChanger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./desktop/mainPhotoChanger */ "./resources/js2/productSingle/desktop/mainPhotoChanger.js");
/* harmony import */ var _desktop_largePhotoViewer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./desktop/largePhotoViewer */ "./resources/js2/productSingle/desktop/largePhotoViewer.js");
/* harmony import */ var _desktop_smallPhotoScroller__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./desktop/smallPhotoScroller */ "./resources/js2/productSingle/desktop/smallPhotoScroller.js");
/* harmony import */ var _mobile_mobileLargePhotoMaker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mobile/mobileLargePhotoMaker */ "./resources/js2/productSingle/mobile/mobileLargePhotoMaker.js");
/* harmony import */ var _mobile_mobileLargePhotoScroller__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mobile/mobileLargePhotoScroller */ "./resources/js2/productSingle/mobile/mobileLargePhotoScroller.js");
/* harmony import */ var _productQuickViewer_quickProductDestructor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../productQuickViewer/quickProductDestructor */ "./resources/js2/productQuickViewer/quickProductDestructor.js");








function singleProductKit() {
  var largePhotoScrollRightButton = Object(_el__WEBPACK_IMPORTED_MODULE_0__["default"])('#largePhotoScrollRightButton');
  var largePhotoScrollRightButtonVisibility = false;

  if (largePhotoScrollRightButton) {
    largePhotoScrollRightButtonVisibility = largePhotoScrollRightButton.getBoundingClientRect().x > 0;
  }

  if (!largePhotoScrollRightButtonVisibility) {
    if (Object(_el__WEBPACK_IMPORTED_MODULE_0__["default"])('#smallPhotos')) {
      new _desktop_largePhotoMaker__WEBPACK_IMPORTED_MODULE_1__["default"]();
      new _desktop_mainPhotoChanger__WEBPACK_IMPORTED_MODULE_2__["default"](); // change main photo by small photo
    }

    if (Object(_el__WEBPACK_IMPORTED_MODULE_0__["default"])('#mainPhotoContainer')) {
      new _desktop_largePhotoViewer__WEBPACK_IMPORTED_MODULE_3__["default"]();
    }

    if (Object(_el__WEBPACK_IMPORTED_MODULE_0__["default"])('#smallPhotos-scrollButtonDown')) {
      new _desktop_smallPhotoScroller__WEBPACK_IMPORTED_MODULE_4__["default"]();
    }
  }

  if (largePhotoScrollRightButtonVisibility) {
    if (Object(_el__WEBPACK_IMPORTED_MODULE_0__["default"])('#smallPhotos')) {
      new _mobile_mobileLargePhotoMaker__WEBPACK_IMPORTED_MODULE_5__["default"]();
      new _mobile_mobileLargePhotoScroller__WEBPACK_IMPORTED_MODULE_6__["default"]();
    }
  }

  if (Object(_el__WEBPACK_IMPORTED_MODULE_0__["default"])('.quick_view_manager__collapse_icon')) {
    new _productQuickViewer_quickProductDestructor__WEBPACK_IMPORTED_MODULE_7__["default"]();
  }
}

/***/ }),

/***/ "./resources/js2/productSource/FilterOfCachedProducts.js":
/*!***************************************************************!*\
  !*** ./resources/js2/productSource/FilterOfCachedProducts.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FilterOfCachedProducts; });
/* harmony import */ var _cookie_getCookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../cookie/getCookie */ "./resources/js2/cookie/getCookie.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var FilterOfCachedProducts = /*#__PURE__*/function () {
  function FilterOfCachedProducts(searchSettingsStore) {
    _classCallCheck(this, FilterOfCachedProducts);

    this.searchSettingsStore = searchSettingsStore;
  }

  _createClass(FilterOfCachedProducts, [{
    key: "doFilter",
    value: function doFilter(products) {
      var settings = _objectSpread({}, this.searchSettingsStore.getSettings());

      var filtered = _toConsumableArray(products);

      filtered = this._sectionFilter(filtered, settings);

      if (settings.minPrice > 0) {
        filtered = this._minPriceFilter(filtered, settings.minPrice);
      }

      if (settings.maxPrice > 0) {
        filtered = this._maxPriceFilter(filtered, settings.maxPrice);
      }

      if (settings.categoriesIds.length > 0) {
        filtered = this._categoriesFilter(filtered, settings.categoriesIds);
      }

      var sectionProductsCount = filtered.length;
      filtered = this._offsetFilter(filtered, settings.startOffset, settings.perPage);
      return {
        filteredProducts: filtered,
        sectionProductsCount: sectionProductsCount
      };
    }
  }, {
    key: "_sectionFilter",
    value: function _sectionFilter(items, settings) {
      if (['all', ''].indexOf(settings.productSectionName) !== -1) {
        return items;
      }

      var func = {
        favoriteProducts: this._favoriteProductsFilter,
        viewedProducts: this._viewedProductsFilter,
        productCategory: this._singleCategoryFilter
      };
      var additionalFilteringParameters = settings.additionalDataOfProductSection;
      return func[settings.productSectionName](items, additionalFilteringParameters);
    }
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
    }
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
    }
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
    value: function _offsetFilter(items, startOffset, perPage) {
      var startIndex = startOffset;
      var endIndex = startOffset + perPage; // елемент с endIndex не будет включен в рез-тат

      return items.slice(startIndex, endIndex);
    }
  }]);

  return FilterOfCachedProducts;
}();



/***/ }),

/***/ "./resources/js2/productSource/SourceOfFilteredProducts.js":
/*!*****************************************************************!*\
  !*** ./resources/js2/productSource/SourceOfFilteredProducts.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SourceOfFilteredProducts; });
/* harmony import */ var _http_getJson__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../http/getJson */ "./resources/js2/http/getJson.js");
/* harmony import */ var _absoluteFlashMessage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../absoluteFlashMessage */ "./resources/js2/absoluteFlashMessage.js");
/* harmony import */ var _allProductsMustBeCached__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../allProductsMustBeCached */ "./resources/js2/allProductsMustBeCached.js");
/* harmony import */ var _el__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../el */ "./resources/js2/el.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }






var SourceOfFilteredProducts = /*#__PURE__*/function () {
  function SourceOfFilteredProducts(data) {
    _classCallCheck(this, SourceOfFilteredProducts);

    this.productCache = data.productCache;
    this.searchUrlMaker = data.searchUrlMaker;
    this.productsFilter = data.filterOfCachedProducts;
    this.searchSettingsStore = data.searchSettingsStore;
  }

  _createClass(SourceOfFilteredProducts, [{
    key: "getFiltered",
    value: function getFiltered() {
      if (Object(_allProductsMustBeCached__WEBPACK_IMPORTED_MODULE_2__["default"])()) {
        return this._getFilteredProductsFromCache();
      } else {
        return this._getFilteredProductsFromServer();
      }
    }
  }, {
    key: "_getFilteredProductsFromCache",
    value: function _getFilteredProductsFromCache() {
      var _this = this;

      return this.productCache.getEntireList().then(function (data) {
        var products = _toConsumableArray(data);

        var _this$productsFilter$ = _this.productsFilter.doFilter(products),
            filteredProducts = _this$productsFilter$.filteredProducts,
            sectionProductsCount = _this$productsFilter$.sectionProductsCount;

        return {
          filteredProducts: filteredProducts,
          sectionProductsCount: sectionProductsCount
        };
      });
    }
  }, {
    key: "_getFilteredProductsFromServer",
    value: function _getFilteredProductsFromServer() {
      var url = this.searchUrlMaker.getUrl();
      return Object(_http_getJson__WEBPACK_IMPORTED_MODULE_0__["default"])(url).then(function (data) {
        //console.log(data);
        return {
          filteredProducts: data.products,
          sectionProductsCount: data.sectionProductsCount
        };
      })["catch"](function () {
        new _absoluteFlashMessage__WEBPACK_IMPORTED_MODULE_1__["default"]("\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0442\u043E\u0432\u0430\u0440\u044B");
      });
    }
  }, {
    key: "getViewedProductsFromServer",
    value: function getViewedProductsFromServer() {
      var url = this.searchUrlMaker.getUrl();
      return Object(_http_getJson__WEBPACK_IMPORTED_MODULE_0__["default"])(url).then(function (data) {
        //console.log(data);
        return {
          filteredProducts: data.products,
          sectionProductsCount: data.sectionProductsCount,
          allViewedIdsStr: data.allViewedIdsStr
        };
      })["catch"](function () {
        new _absoluteFlashMessage__WEBPACK_IMPORTED_MODULE_1__["default"]("\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0442\u043E\u0432\u0430\u0440\u044B");
      });
    }
  }]);

  return SourceOfFilteredProducts;
}();



/***/ }),

/***/ "./resources/js2/productSource/productCache.js":
/*!*****************************************************!*\
  !*** ./resources/js2/productSource/productCache.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ProductCache; });
/* harmony import */ var _http_getJson__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../http/getJson */ "./resources/js2/http/getJson.js");
/* harmony import */ var _absoluteFlashMessage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../absoluteFlashMessage */ "./resources/js2/absoluteFlashMessage.js");
/* harmony import */ var _el__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../el */ "./resources/js2/el.js");
/* harmony import */ var _allProductsMustBeCached__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../allProductsMustBeCached */ "./resources/js2/allProductsMustBeCached.js");
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






var ProductCache = /*#__PURE__*/function () {
  function ProductCache() {
    var _this = this;

    _classCallCheck(this, ProductCache);

    this.entireList = [];
    this.descriptionsCache = [];
    this.singlesCache = [];
    this.minPrice = 0;
    this.maxPrice = 0;
    this.entireListUrl = '/public-js/entire-product-list';
    this.oneDescriptionUrl = '/public-js/one-product-description/';
    this.oneProductUrl = '/public-js/one-product/';
    this.priceRangeUrl = '/public-js/product-price-range';
    this.productsWereCachedOnPageLoading = false;

    if (Object(_el__WEBPACK_IMPORTED_MODULE_2__["default"])('#productList') && Object(_allProductsMustBeCached__WEBPACK_IMPORTED_MODULE_3__["default"])()) {
      Object(_el__WEBPACK_IMPORTED_MODULE_2__["default"])('body').addEventListener('mouseover', function (e) {
        _this._loadEntireListOnPageLoading();
      });
    }
  }

  _createClass(ProductCache, [{
    key: "getPriceRange",
    value: function getPriceRange() {
      var _this2 = this;

      if (this.maxPrice > 0) {
        return new Promise(function (resolve) {
          return resolve({
            minPrice: _this2.minPrice,
            maxPrice: _this2.maxPrice
          });
        });
      }

      if (this.entireList.length > 0) {
        return new Promise(function (resolve) {
          return resolve(_this2._getPriceRangeFromCachedProducts());
        });
      }

      return Object(_http_getJson__WEBPACK_IMPORTED_MODULE_0__["default"])(this.priceRangeUrl).then(function (data) {
        //console.log(data);
        _this2.minPrice = data.minPrice;
        _this2.maxPrice = data.maxPrice;
        return data;
      });
    }
  }, {
    key: "_getPriceRangeFromCachedProducts",
    value: function _getPriceRangeFromCachedProducts() {
      var minPrice = this.entireList.reduce(function (minPrice, item) {
        return minPrice < item.price ? minPrice : item.price;
      });
      var integerMinPrice = Math.floor(minPrice);
      this.minPrice = integerMinPrice;
      var maxPrice = this.entireList.reduce(function (maxPrice, item) {
        return maxPrice > item.price ? maxPrice : item.price;
      });
      var integerMaxPrice = Math.floor(maxPrice);
      this.maxPrice = integerMaxPrice;
      return {
        minPrice: integerMinPrice,
        maxPrice: integerMaxPrice
      };
    }
  }, {
    key: "getEntireList",
    value: function getEntireList() {
      var _this3 = this;

      if (this.entireList.length > 0) {
        return new Promise(function (resolve) {
          return resolve(_toConsumableArray(_this3.entireList));
        });
      }

      return this._loadEntireList().then(function (data) {
        return _toConsumableArray(data);
      });
    }
  }, {
    key: "_loadEntireList",
    value: function _loadEntireList() {
      var _this4 = this;

      return Object(_http_getJson__WEBPACK_IMPORTED_MODULE_0__["default"])(this.entireListUrl).then(function (data) {
        //console.log(data);
        _this4.entireList = _toConsumableArray(data.products);
        return _toConsumableArray(data.products);
      })["catch"](function () {
        new _absoluteFlashMessage__WEBPACK_IMPORTED_MODULE_1__["default"]("\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0442\u043E\u0432\u0430\u0440\u044B");
      });
    }
  }, {
    key: "_loadEntireListOnPageLoading",
    value: function _loadEntireListOnPageLoading() {
      var _this5 = this;

      if (this.productsWereCachedOnPageLoading) {
        return;
      }

      this.productsWereCachedOnPageLoading = true;
      Object(_http_getJson__WEBPACK_IMPORTED_MODULE_0__["default"])(this.entireListUrl).then(function (data) {
        //console.log(data);
        _this5.entireList = _toConsumableArray(data.products);
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
      var _this6 = this;

      return Object(_http_getJson__WEBPACK_IMPORTED_MODULE_0__["default"])(this.oneDescriptionUrl + productId).then(function (data) {
        //console.log(data);
        _this6.descriptionsCache.push(data.description);

        return _objectSpread({}, data.description);
      })["catch"](function () {
        new _absoluteFlashMessage__WEBPACK_IMPORTED_MODULE_1__["default"]("\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u043E\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u0442\u043E\u0432\u0430\u0440\u0430");
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
      var _this7 = this;

      return Object(_http_getJson__WEBPACK_IMPORTED_MODULE_0__["default"])(this.oneProductUrl + productId).then(function (data) {
        //console.log(data.product);
        _this7.singlesCache.push(data.product);

        return _objectSpread({}, data.product);
      })["catch"](function () {
        new _absoluteFlashMessage__WEBPACK_IMPORTED_MODULE_1__["default"]("\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0442\u043E\u0432\u0430\u0440");
      });
    }
  }]);

  return ProductCache;
}();



/***/ }),

/***/ "./resources/js2/productSource/searchSettingsStore.js":
/*!************************************************************!*\
  !*** ./resources/js2/productSource/searchSettingsStore.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SearchSettingsStore; });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var SearchSettingsStore = /*#__PURE__*/function () {
  function SearchSettingsStore() {
    _classCallCheck(this, SearchSettingsStore);

    this.settings = {
      productSectionName: '',
      additionalDataOfProductSection: '',
      minPrice: 0,
      maxPrice: 0,
      categoriesIds: [],
      categoriesSlugs: [],
      startOffset: 0,
      perPage: 3,
      pageNumber: 0,
      pageCount: 0
    };
    this.initialSettings = _objectSpread({}, this.settings);
  }

  _createClass(SearchSettingsStore, [{
    key: "getSettings",
    value: function getSettings() {
      return _objectSpread({}, this.settings);
    }
  }, {
    key: "setProductSectionData",
    value: function setProductSectionData(_ref) {
      var productSectionName = _ref.productSectionName,
          additionalData = _ref.additionalData;
      this.settings.productSectionName = productSectionName;
      this.settings.additionalDataOfProductSection = additionalData;
    }
  }, {
    key: "setStartOffset",
    value: function setStartOffset(value) {
      this.settings.startOffset = value;
    }
  }, {
    key: "setPageNumber",
    value: function setPageNumber(value) {
      this.settings.pageNumber = value;
    }
  }, {
    key: "setPageCount",
    value: function setPageCount(value) {
      this.settings.pageCount = value;
    }
  }, {
    key: "resetSettings",
    value: function resetSettings() {
      this.settings = _objectSpread({}, this.initialSettings);
    }
  }]);

  return SearchSettingsStore;
}();



/***/ }),

/***/ "./resources/js2/scrollDocument.js":
/*!*****************************************!*\
  !*** ./resources/js2/scrollDocument.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return scrollDocument; });
function scrollDocument(distance, direction) {
  var coveredDistance = 0; // пройденное расстояние

  _scrollDocument(distance, coveredDistance, direction);
}

function _scrollDocument(distance, coveredDistance, direction) {
  if (coveredDistance > distance) {
    return;
  }

  var step = 3; // px

  if (direction === 'down') {
    window.scrollBy(0, step);
  } else {
    window.scrollBy(0, -step);
  }

  coveredDistance += step;
  setTimeout(function () {
    _scrollDocument(distance, coveredDistance, direction);
  }, 1);
}

/***/ }),

/***/ "./resources/js2/topDropMenuFiller.js":
/*!********************************************!*\
  !*** ./resources/js2/topDropMenuFiller.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TopDropMenuFiller; });
/* harmony import */ var _el__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./el */ "./resources/js2/el.js");
/* harmony import */ var _html_getDropMenuHtml_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./html/getDropMenuHtml.js */ "./resources/js2/html/getDropMenuHtml.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var TopDropMenuFiller = /*#__PURE__*/function () {
  function TopDropMenuFiller() {
    var _this = this;

    _classCallCheck(this, TopDropMenuFiller);

    this.initiatorContainer = Object(_el__WEBPACK_IMPORTED_MODULE_0__["default"])('#topMenu-dropMenuInitiatorContainer');
    this.initiatorContainer.addEventListener('mouseover', function (e) {
      _this._fillMenu();
    });
  }

  _createClass(TopDropMenuFiller, [{
    key: "_fillMenu",
    value: function _fillMenu() {
      if (Object(_el__WEBPACK_IMPORTED_MODULE_0__["default"])('#topMenu-dropMenuWrapper')) {
        return;
      }

      var innerHtml = Object(_el__WEBPACK_IMPORTED_MODULE_0__["default"])('#bottomMenu-allCategories').innerHTML;
      var dropMenuHtml = Object(_html_getDropMenuHtml_js__WEBPACK_IMPORTED_MODULE_1__["default"])(innerHtml);
      this.initiatorContainer.insertAdjacentHTML('beforeend', dropMenuHtml);
      var nodes = this.initiatorContainer.querySelectorAll('.bottom_menu__link');

      var _iterator = _createForOfIteratorHelper(nodes),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var node = _step.value;
          node.className = 'top_menu__drop_menu__link';
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }]);

  return TopDropMenuFiller;
}();



/***/ }),

/***/ "./resources/js2/urlMaker/publicUrlMaker.js":
/*!**************************************************!*\
  !*** ./resources/js2/urlMaker/publicUrlMaker.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PublicUrlMaker; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var PublicUrlMaker = /*#__PURE__*/function () {
  function PublicUrlMaker(searchSettingsStore) {
    _classCallCheck(this, PublicUrlMaker);

    this.searchSettingsStore = searchSettingsStore;
    this.startUrl = '/product-search';
  } // /product-search/min-price/{minPrice}/max-price/{maxPrice}/categories/{categories}


  _createClass(PublicUrlMaker, [{
    key: "publishUrl",
    value: function publishUrl() {
      var url = this.getUrl();
      history.replaceState(null, null, url);
    }
  }, {
    key: "getUrl",
    value: function getUrl() {
      var settings = this.searchSettingsStore.getSettings();
      var pageNumber = settings.pageNumber;

      if (this._isUrlOfMainPage()) {
        return pageNumber > 1 ? "/products/".concat(pageNumber) : "/";
      } else {
        return pageNumber > 1 ? "".concat(this.getFirstPageUrl(), "/").concat(pageNumber) : "".concat(this.getFirstPageUrl());
      }
    }
  }, {
    key: "getFirstPageUrl",
    value: function getFirstPageUrl() {
      var settings = this.searchSettingsStore.getSettings();

      if (this._isUrlOfMainPage()) {
        return "/";
      }

      if (this._isSingleCategoryUrlBasedOnSectionName()) {
        // additionalDataOfProductSection - "categoryId;categorySlug"
        var slug = settings.additionalDataOfProductSection.split(';')[1];
        return "/products/".concat(slug);
      }

      if (this._isSingleCategoryUrl()) {
        var _slug = settings.categoriesSlugs[0];
        return "/products/".concat(_slug);
      }

      if (this._isUrlOfFavoriteProducts()) {
        return "/favorite-products";
      }

      if (this._isUrlOfViewedProducts()) {
        return "/viewed-products";
      }

      return this._getComplexSearchUrl(settings);
    }
  }, {
    key: "_getComplexSearchUrl",
    value: function _getComplexSearchUrl(settings) {
      var totalUrl = [this.startUrl, this._getMinPriceUrl(settings), this._getMaxPriceUrl(settings), this._getCategoriesUrl(settings), this._getOffsetUrl(settings)];
      return totalUrl.join(''); // вида /product-search/min-price/{minPrice}/max-price/{maxPrice}/categories/{categories}/page/
    }
  }, {
    key: "_isUrlOfMainPage",
    value: function _isUrlOfMainPage() {
      var settings = this.searchSettingsStore.getSettings();
      var logicalConditions = [['all', ''].indexOf(settings.productSectionName) !== -1, settings.categoriesSlugs.length === 0, settings.minPrice === 0, settings.maxPrice === 0];
      return logicalConditions.every(function (item) {
        return item === true;
      });
    }
  }, {
    key: "_isSingleCategoryUrlBasedOnSectionName",
    value: function _isSingleCategoryUrlBasedOnSectionName() {
      var settings = this.searchSettingsStore.getSettings();
      var logicalConditions = [settings.productSectionName === 'productCategory', settings.categoriesIds.length === 0];
      return logicalConditions.every(function (item) {
        return item === true;
      });
    }
  }, {
    key: "_isSingleCategoryUrl",
    value: function _isSingleCategoryUrl() {
      var settings = this.searchSettingsStore.getSettings();
      var logicalConditions = [settings.categoriesSlugs.length === 1, settings.minPrice === 0, settings.maxPrice === 0];
      return logicalConditions.every(function (item) {
        return item === true;
      });
    }
  }, {
    key: "_isUrlOfFavoriteProducts",
    value: function _isUrlOfFavoriteProducts() {
      var settings = this.searchSettingsStore.getSettings();
      var logicalConditions = [settings.productSectionName === 'favoriteProducts'];
      return logicalConditions.every(function (item) {
        return item === true;
      });
    }
  }, {
    key: "_isUrlOfViewedProducts",
    value: function _isUrlOfViewedProducts() {
      var settings = this.searchSettingsStore.getSettings();
      var logicalConditions = [settings.productSectionName === 'viewedProducts'];
      return logicalConditions.every(function (item) {
        return item === true;
      });
    }
  }, {
    key: "_getMinPriceUrl",
    value: function _getMinPriceUrl(settings) {
      return "/min-price/".concat(settings.minPrice);
    }
  }, {
    key: "_getMaxPriceUrl",
    value: function _getMaxPriceUrl(settings) {
      return "/max-price/".concat(settings.maxPrice);
    }
  }, {
    key: "_getCategoriesUrl",
    value: function _getCategoriesUrl(settings) {
      if (settings.categoriesIds.length === 0) {
        return '/categories/0';
      }

      return "/categories/".concat(settings.categoriesIds.join('-'));
    }
  }, {
    key: "_getOffsetUrl",
    value: function _getOffsetUrl(settings) {
      return "/page"; // return `/page/${settings.pageNumber}`;
    }
  }]);

  return PublicUrlMaker;
}();



/***/ }),

/***/ "./resources/js2/urlMaker/searchUrlMaker.js":
/*!**************************************************!*\
  !*** ./resources/js2/urlMaker/searchUrlMaker.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SearchUrlMaker; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var SearchUrlMaker = /*#__PURE__*/function () {
  function SearchUrlMaker(searchSettingsStore) {
    _classCallCheck(this, SearchUrlMaker);

    this.searchSettingsStore = searchSettingsStore;
    this.startUrl = '/public-js/product-search';
  }

  _createClass(SearchUrlMaker, [{
    key: "getUrl",
    value: function getUrl() {
      var settings = this.searchSettingsStore.getSettings();

      if (this._isUrlOfFavoriteProducts()) {
        return "/public-js/favorite-products/offset/".concat(settings.startOffset);
      }

      if (this._isUrlOfViewedProducts()) {
        return "/public-js/viewed-products/offset/".concat(settings.startOffset);
      }

      var totalUrl = [this.startUrl, this._getMinPriceUrl(settings), this._getMaxPriceUrl(settings), this._getCategoriesUrl(settings), this._getOffsetUrl(settings)];
      return totalUrl.join(''); // вида /public-js/product-search/min-price/{minPrice}/max-price/{maxPrice}/categories/{categories}/offset/{startOffset}
    }
  }, {
    key: "_getMinPriceUrl",
    value: function _getMinPriceUrl(settings) {
      return "/min-price/".concat(settings.minPrice);
    }
  }, {
    key: "_getMaxPriceUrl",
    value: function _getMaxPriceUrl(settings) {
      return "/max-price/".concat(settings.maxPrice);
    }
  }, {
    key: "_getCategoriesUrl",
    value: function _getCategoriesUrl(settings) {
      if (settings.categoriesIds.length > 0) {
        return "/categories/".concat(settings.categoriesIds.join('-'));
      }

      if (settings.productSectionName === 'productCategory') {
        return "/categories/".concat(settings.additionalDataOfProductSection.split(';')[0]);
      }

      return '/categories/0';
    }
  }, {
    key: "_getOffsetUrl",
    value: function _getOffsetUrl(settings) {
      return "/offset/".concat(settings.startOffset);
    }
  }, {
    key: "_isUrlOfFavoriteProducts",
    value: function _isUrlOfFavoriteProducts() {
      var settings = this.searchSettingsStore.getSettings();
      var logicalConditions = [settings.productSectionName === 'favoriteProducts'];
      return logicalConditions.every(function (item) {
        return item === true;
      });
    }
  }, {
    key: "_isUrlOfViewedProducts",
    value: function _isUrlOfViewedProducts() {
      var settings = this.searchSettingsStore.getSettings();
      var logicalConditions = [settings.productSectionName === 'viewedProducts'];
      return logicalConditions.every(function (item) {
        return item === true;
      });
    }
  }]);

  return SearchUrlMaker;
}();



/***/ }),

/***/ "./resources/js2/validation/forgotPasswordValidation.js":
/*!**************************************************************!*\
  !*** ./resources/js2/validation/forgotPasswordValidation.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return forgotPasswordValidation; });
/* harmony import */ var _isEmailValid_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isEmailValid.js */ "./resources/js2/validation/isEmailValid.js");

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

  for (var key in err) {
    if (err.hasOwnProperty(key)) {
      return err;
    }
  }

  return null;
}

/***/ }),

/***/ "./resources/js2/validation/isEmailValid.js":
/*!**************************************************!*\
  !*** ./resources/js2/validation/isEmailValid.js ***!
  \**************************************************/
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

/***/ "./resources/js2/validation/loginValidation.js":
/*!*****************************************************!*\
  !*** ./resources/js2/validation/loginValidation.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return loginValidation; });
/* harmony import */ var _isEmailValid_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isEmailValid.js */ "./resources/js2/validation/isEmailValid.js");

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

  for (var key in err) {
    if (err.hasOwnProperty(key)) {
      return err;
    }
  }

  return null;
}

/***/ }),

/***/ "./resources/js2/validation/registerValidation.js":
/*!********************************************************!*\
  !*** ./resources/js2/validation/registerValidation.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return registerValidation; });
/* harmony import */ var _isEmailValid_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isEmailValid.js */ "./resources/js2/validation/isEmailValid.js");

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

  for (var key in err) {
    if (err.hasOwnProperty(key)) {
      return err;
    }
  }

  return null;
}

/***/ }),

/***/ "./resources/js2/viewedProducts/viewedProductsAppender.js":
/*!****************************************************************!*\
  !*** ./resources/js2/viewedProducts/viewedProductsAppender.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ViewedProductsAppender; });
/* harmony import */ var _http_postJson__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../http/postJson */ "./resources/js2/http/postJson.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var ViewedProductsAppender = /*#__PURE__*/function () {
  function ViewedProductsAppender() {
    _classCallCheck(this, ViewedProductsAppender);

    this.postUrl = '/public-js/viewed-products/post';
    this.disabledSubmit = false;
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
      var _this = this;

      // защита от частых отправок на 3 сек
      if (this.disabledSubmit) {
        return false;
      }

      this.disabledSubmit = true;
      setTimeout(function () {
        _this.disabledSubmit = false;
      }, 3000);
      return true;
    }
  }]);

  return ViewedProductsAppender;
}();



/***/ }),

/***/ "./resources/js2/viewedProducts/viewedProductsSummaryMaker.js":
/*!********************************************************************!*\
  !*** ./resources/js2/viewedProducts/viewedProductsSummaryMaker.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ViewedProductsSummaryMaker; });
/* harmony import */ var _el__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../el */ "./resources/js2/el.js");
/* harmony import */ var _http_getJson__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../http/getJson */ "./resources/js2/http/getJson.js");
/* harmony import */ var _html_viewedProductsSummary_getViewedProductsItemHtml__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../html/viewedProductsSummary/getViewedProductsItemHtml */ "./resources/js2/html/viewedProductsSummary/getViewedProductsItemHtml.js");
/* harmony import */ var _html_viewedProductsSummary_getViewedProductsHeaderHtml__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../html/viewedProductsSummary/getViewedProductsHeaderHtml */ "./resources/js2/html/viewedProductsSummary/getViewedProductsHeaderHtml.js");
/* harmony import */ var _productObject_getProductObject__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../productObject/getProductObject */ "./resources/js2/productObject/getProductObject.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }







var ViewedProductsSummaryMaker = /*#__PURE__*/function () {
  function ViewedProductsSummaryMaker() {
    var _this = this;

    _classCallCheck(this, ViewedProductsSummaryMaker);

    this.wrapperOfSummary = Object(_el__WEBPACK_IMPORTED_MODULE_0__["default"])('#viewedProductsSummaryWrapper');

    if (!this.wrapperOfSummary) {
      return;
    }

    this.idOfContent = 'viewedProductsSummaryContent';
    this.viewedProductsSummaryWasCreated = false;
    this.summaryListUrl = '/public-js/viewed-product-summary-list';
    this.summaryList = [];
    Object(_el__WEBPACK_IMPORTED_MODULE_0__["default"])('body').addEventListener('mouseover', function (e) {
      _this._firstCreation();
    });
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

      this._renderBody(this.summaryList);
    }
  }, {
    key: "_renderHeader",
    value: function _renderHeader() {
      if (Object(_el__WEBPACK_IMPORTED_MODULE_0__["default"])('#viewedProductsSummaryHeader')) {
        return;
      }

      var html = Object(_html_viewedProductsSummary_getViewedProductsHeaderHtml__WEBPACK_IMPORTED_MODULE_3__["default"])();
      this.wrapperOfSummary.insertAdjacentHTML('afterbegin', html);
    }
  }, {
    key: "_renderBody",
    value: function _renderBody(products) {
      if (Object(_el__WEBPACK_IMPORTED_MODULE_0__["default"])("#".concat(this.idOfContent))) {
        Object(_el__WEBPACK_IMPORTED_MODULE_0__["default"])("#".concat(this.idOfContent)).remove();
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
      })["catch"](function () {//
      });
    }
  }]);

  return ViewedProductsSummaryMaker;
}();



/***/ }),

/***/ 1:
/*!**************************************!*\
  !*** multi ./resources/js2/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/vagrant/code/laravel/resources/js2/index.js */"./resources/js2/index.js");


/***/ })

/******/ });