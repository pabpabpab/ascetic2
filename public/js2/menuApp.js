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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

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
/* harmony import */ var _auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../auxiliaryFunctions/el */ "./resources/js2/auxiliaryFunctions/el.js");
/* harmony import */ var _parentClasses_absoluteForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../parentClasses/absoluteForm */ "./resources/js2/parentClasses/absoluteForm.js");
/* harmony import */ var _validation_forgotPasswordValidation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./validation/forgotPasswordValidation */ "./resources/js2/auth/validation/forgotPasswordValidation.js");
/* harmony import */ var _html_auth_getForgotPasswordFormHtml__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../html/auth/getForgotPasswordFormHtml */ "./resources/js2/html/auth/getForgotPasswordFormHtml.js");
/* harmony import */ var _message_absoluteMessageWithCloseIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../message/absoluteMessageWithCloseIcon */ "./resources/js2/message/absoluteMessageWithCloseIcon.js");
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

/***/ "./resources/js2/auth/index-authKit.js":
/*!*********************************************!*\
  !*** ./resources/js2/auth/index-authKit.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return authKit; });
/* harmony import */ var _auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../auxiliaryFunctions/el */ "./resources/js2/auxiliaryFunctions/el.js");
/* harmony import */ var _authAbsoluteMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./authAbsoluteMenu */ "./resources/js2/auth/authAbsoluteMenu.js");
/* harmony import */ var _passwordTypeChanger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./passwordTypeChanger */ "./resources/js2/auth/passwordTypeChanger.js");
/* harmony import */ var _message_absoluteFlashMessage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../message/absoluteFlashMessage */ "./resources/js2/message/absoluteFlashMessage.js");




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

/***/ "./resources/js2/auth/login.js":
/*!*************************************!*\
  !*** ./resources/js2/auth/login.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Login; });
/* harmony import */ var _auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../auxiliaryFunctions/el */ "./resources/js2/auxiliaryFunctions/el.js");
/* harmony import */ var _parentClasses_absoluteForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../parentClasses/absoluteForm */ "./resources/js2/parentClasses/absoluteForm.js");
/* harmony import */ var _html_auth_getLoginFormHtml__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../html/auth/getLoginFormHtml */ "./resources/js2/html/auth/getLoginFormHtml.js");
/* harmony import */ var _html_auth_getFailedLoginHtml__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../html/auth/getFailedLoginHtml */ "./resources/js2/html/auth/getFailedLoginHtml.js");
/* harmony import */ var _html_auth_getAuthenticatedMenuHtml__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../html/auth/getAuthenticatedMenuHtml */ "./resources/js2/html/auth/getAuthenticatedMenuHtml.js");
/* harmony import */ var _validation_loginValidation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./validation/loginValidation */ "./resources/js2/auth/validation/loginValidation.js");
/* harmony import */ var _message_absoluteFlashMessage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../message/absoluteFlashMessage */ "./resources/js2/message/absoluteFlashMessage.js");
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

/***/ "./resources/js2/auth/passwordTypeChanger.js":
/*!***************************************************!*\
  !*** ./resources/js2/auth/passwordTypeChanger.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PasswordTypeChanger; });
/* harmony import */ var _auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../auxiliaryFunctions/el */ "./resources/js2/auxiliaryFunctions/el.js");
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

/***/ "./resources/js2/auth/register.js":
/*!****************************************!*\
  !*** ./resources/js2/auth/register.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Register; });
/* harmony import */ var _auxiliaryFunctions_el_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../auxiliaryFunctions/el.js */ "./resources/js2/auxiliaryFunctions/el.js");
/* harmony import */ var _parentClasses_absoluteForm_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../parentClasses/absoluteForm.js */ "./resources/js2/parentClasses/absoluteForm.js");
/* harmony import */ var _html_auth_getRegisterFormHtml_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../html/auth/getRegisterFormHtml.js */ "./resources/js2/html/auth/getRegisterFormHtml.js");
/* harmony import */ var _validation_registerValidation_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./validation/registerValidation.js */ "./resources/js2/auth/validation/registerValidation.js");
/* harmony import */ var _message_absoluteFlashMessage_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../message/absoluteFlashMessage.js */ "./resources/js2/message/absoluteFlashMessage.js");
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

/***/ "./resources/js2/auth/validation/forgotPasswordValidation.js":
/*!*******************************************************************!*\
  !*** ./resources/js2/auth/validation/forgotPasswordValidation.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return forgotPasswordValidation; });
/* harmony import */ var _isEmailValid_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isEmailValid.js */ "./resources/js2/auth/validation/isEmailValid.js");

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

/***/ "./resources/js2/auth/validation/isEmailValid.js":
/*!*******************************************************!*\
  !*** ./resources/js2/auth/validation/isEmailValid.js ***!
  \*******************************************************/
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

/***/ "./resources/js2/auth/validation/loginValidation.js":
/*!**********************************************************!*\
  !*** ./resources/js2/auth/validation/loginValidation.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return loginValidation; });
/* harmony import */ var _isEmailValid_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isEmailValid.js */ "./resources/js2/auth/validation/isEmailValid.js");

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

/***/ "./resources/js2/auth/validation/registerValidation.js":
/*!*************************************************************!*\
  !*** ./resources/js2/auth/validation/registerValidation.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return registerValidation; });
/* harmony import */ var _isEmailValid_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isEmailValid.js */ "./resources/js2/auth/validation/isEmailValid.js");

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

/***/ "./resources/js2/auxiliaryFunctions/el.js":
/*!************************************************!*\
  !*** ./resources/js2/auxiliaryFunctions/el.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return el; });
function el(selector) {
  return document.querySelector(selector);
}

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

/***/ "./resources/js2/favoriteProducts/favoriteProductsIndicationOnPageLoad.js":
/*!********************************************************************************!*\
  !*** ./resources/js2/favoriteProducts/favoriteProductsIndicationOnPageLoad.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FavoriteProductsIndicationOnPageLoad; });
/* harmony import */ var _auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../auxiliaryFunctions/el */ "./resources/js2/auxiliaryFunctions/el.js");
/* harmony import */ var _cookie_getCookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../cookie/getCookie */ "./resources/js2/cookie/getCookie.js");
/* harmony import */ var _parentClasses_app_aware__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../parentClasses/app/aware */ "./resources/js2/parentClasses/app/aware.js");
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

          if (!Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])(wrapperSelector).classList.contains("set-opacity")) {
            Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])(wrapperSelector).classList.add("set-opacity");
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

/***/ "./resources/js2/favoriteProducts/favoriteProductsTotalCountIndication.js":
/*!********************************************************************************!*\
  !*** ./resources/js2/favoriteProducts/favoriteProductsTotalCountIndication.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FavoriteProductsTotalCountIndication; });
/* harmony import */ var _auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../auxiliaryFunctions/el */ "./resources/js2/auxiliaryFunctions/el.js");
/* harmony import */ var _cookie_getCookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../cookie/getCookie */ "./resources/js2/cookie/getCookie.js");
/* harmony import */ var _parentClasses_app_aware__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../parentClasses/app/aware */ "./resources/js2/parentClasses/app/aware.js");
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
  return "<div id=\"authMenuContent\" class=\"display-flex\">\n                ".concat(userLink, "\n                <a href=\"/logout\" title=\"\u0412\u044B\u0439\u0442\u0438 \u0438\u0437 \u0430\u043A\u043A\u0430\u0443\u043D\u0442\u0430\" class=\"top_menu__link top_menu__link_account_exit\">\n                    <img alt=\"\" src=\"/images/accountExitIcon.svg\" class=\"account_exit__icon mr15\">\n                </a>\n            </div>");
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
  return "<div id=\"loginForm\">\n                <div class=\"js_reg_form__header\">\n                    \u0412\u0445\u043E\u0434 \u0434\u043B\u044F \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F\n                    <div class='js_reg_form__close'>&#215;</div>\n                </div>\n\n                <div id=\"failedLoginErr\" class=\"mt10\"></div>\n\n                <label for=\"loginEmail\" class=\"js_reg_form__input__label\">E-mail</label>\n                <input type='email' name='email' id='loginEmail' required class=\"js_reg_form__input__text_input\">\n                <div id=\"loginEmailErr\" class=\"js_reg_form__input__validation_message\"></div>\n\n\n                <label for=\"loginPassword\" class=\"js_reg_form__input__label\">\u041F\u0430\u0440\u043E\u043B\u044C</label>\n                <input type='password' name='password' id='loginPassword' required class=\"js_reg_form__input__text_input\">\n                <div class=\"height0 relative\">\n                    <img alt=\"\" src=\"/images/closedEye.svg\" id=\"closedEyeImg\" class=\"js_reg_form__closed_eye_img\">\n                    <img alt=\"\" src=\"/images/openedEye.svg\" id=\"openedEyeImg\" class=\"js_reg_form__opened_eye_img\">\n                </div>\n                <div id=\"loginPasswordErr\" class=\"js_reg_form__input__validation_message\"></div>\n\n\n\n                <input type=\"checkbox\" name=\"remember\" id=\"loginRemember\" value=\"1\" class=\"js_reg_form__checkbox_input\">\n                <label for=\"loginRemember\" class=\"js_reg_form__checkbox_label\">\u0417\u0430\u043F\u043E\u043C\u043D\u0438\u0442\u044C \u043C\u0435\u043D\u044F</label>\n\n                <div class=\"js_reg_form__submit_and_forgot_flex mt18\">\n                    <button type=\"submit\" id='loginSubmit' class=\"js_reg_form__submit_button\">\n                        \u0412\u043E\u0439\u0442\u0438\n                    </button>\n                    <a href=\"/forgot-password\" id=\"forgotPasswordLink\" class=\"js_reg_form__forgot_password_link\">\n                        \u0417\u0430\u0431\u044B\u043B\u0438 \u043F\u0430\u0440\u043E\u043B\u044C?\n                    </a>\n                </div>\n\n                <div class=\"js_reg_form__header mt30\">\n                    \u0412\u043E\u0439\u0442\u0438 \u0447\u0435\u0440\u0435\u0437\n                </div>\n                ".concat(Object(_getULoginWidgetHtml_js__WEBPACK_IMPORTED_MODULE_0__["default"])(), "\n            <div>");
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

/***/ "./resources/js2/menu/menuVisibilityManager.js":
/*!*****************************************************!*\
  !*** ./resources/js2/menu/menuVisibilityManager.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MenuVisibilityManager; });
/* harmony import */ var _auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../auxiliaryFunctions/el */ "./resources/js2/auxiliaryFunctions/el.js");
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

/***/ "./resources/js2/menu/topDropMenuFiller.js":
/*!*************************************************!*\
  !*** ./resources/js2/menu/topDropMenuFiller.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TopDropMenuFiller; });
/* harmony import */ var _auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../auxiliaryFunctions/el */ "./resources/js2/auxiliaryFunctions/el.js");
/* harmony import */ var _html_getDropMenuHtml_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../html/getDropMenuHtml.js */ "./resources/js2/html/getDropMenuHtml.js");
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

    this.initiatorContainer = Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])('#topMenu-dropMenuInitiatorContainer');
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

/***/ "./resources/js2/menuApp.js":
/*!**********************************!*\
  !*** ./resources/js2/menuApp.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _menu_menuVisibilityManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu/menuVisibilityManager */ "./resources/js2/menu/menuVisibilityManager.js");
/* harmony import */ var _menu_topDropMenuFiller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu/topDropMenuFiller */ "./resources/js2/menu/topDropMenuFiller.js");
/* harmony import */ var _http_csrfUpdater__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./http/csrfUpdater */ "./resources/js2/http/csrfUpdater.js");
/* harmony import */ var _auth_index_authKit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth/index-authKit */ "./resources/js2/auth/index-authKit.js");
/* harmony import */ var _favoriteProducts_favoriteProductsTotalCountIndication__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./favoriteProducts/favoriteProductsTotalCountIndication */ "./resources/js2/favoriteProducts/favoriteProductsTotalCountIndication.js");





new _favoriteProducts_favoriteProductsTotalCountIndication__WEBPACK_IMPORTED_MODULE_4__["default"]();
new _menu_menuVisibilityManager__WEBPACK_IMPORTED_MODULE_0__["default"]();
new _menu_topDropMenuFiller__WEBPACK_IMPORTED_MODULE_1__["default"]();
new _http_csrfUpdater__WEBPACK_IMPORTED_MODULE_2__["default"]();
Object(_auth_index_authKit__WEBPACK_IMPORTED_MODULE_3__["default"])();

/***/ }),

/***/ "./resources/js2/message/absoluteFlashMessage.js":
/*!*******************************************************!*\
  !*** ./resources/js2/message/absoluteFlashMessage.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AbsoluteFlashMessage; });
/* harmony import */ var _auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../auxiliaryFunctions/el */ "./resources/js2/auxiliaryFunctions/el.js");
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

      var html = "<div id=\"".concat(this.id, "\" class=\"absolute_message__wrapper show_block\">\n                           <div class=\"absolute_message__div arial_sans-serif\">\n                                ").concat(this.text, "\n                           </div>\n                      </div>");
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

/***/ "./resources/js2/message/absoluteMessageWithCloseIcon.js":
/*!***************************************************************!*\
  !*** ./resources/js2/message/absoluteMessageWithCloseIcon.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AbsoluteMessageWithCloseIcon; });
/* harmony import */ var _auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../auxiliaryFunctions/el */ "./resources/js2/auxiliaryFunctions/el.js");
/* harmony import */ var _parentClasses_visibleBlock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../parentClasses/visibleBlock */ "./resources/js2/parentClasses/visibleBlock.js");
/* harmony import */ var _html_getAbsoluteMessageWithCloseIconHtml__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../html/getAbsoluteMessageWithCloseIconHtml */ "./resources/js2/html/getAbsoluteMessageWithCloseIconHtml.js");
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

/***/ "./resources/js2/parentClasses/absoluteForm.js":
/*!*****************************************************!*\
  !*** ./resources/js2/parentClasses/absoluteForm.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AbsoluteForm; });
/* harmony import */ var _auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../auxiliaryFunctions/el */ "./resources/js2/auxiliaryFunctions/el.js");
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

/***/ "./resources/js2/parentClasses/app/aware.js":
/*!**************************************************!*\
  !*** ./resources/js2/parentClasses/app/aware.js ***!
  \**************************************************/
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

/***/ "./resources/js2/parentClasses/visibleBlock.js":
/*!*****************************************************!*\
  !*** ./resources/js2/parentClasses/visibleBlock.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return VisibleBlock; });
/* harmony import */ var _auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../auxiliaryFunctions/el */ "./resources/js2/auxiliaryFunctions/el.js");
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

/***/ "./resources/js2/parentClasses/visibleBlockByClick.js":
/*!************************************************************!*\
  !*** ./resources/js2/parentClasses/visibleBlockByClick.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return VisibleBlockByClick; });
/* harmony import */ var _auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../auxiliaryFunctions/el */ "./resources/js2/auxiliaryFunctions/el.js");
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

    if (!Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])(data.clickSourceSelector)) {
      return _possibleConstructorReturn(_this);
    }

    Object(_auxiliaryFunctions_el__WEBPACK_IMPORTED_MODULE_0__["default"])(data.clickSourceSelector).addEventListener('click', function (e) {
      e.preventDefault();
      e.stopPropagation();

      _this._render();
    });
    return _this;
  }

  return VisibleBlockByClick;
}(_visibleBlock__WEBPACK_IMPORTED_MODULE_1__["default"]);



/***/ }),

/***/ 3:
/*!****************************************!*\
  !*** multi ./resources/js2/menuApp.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/vagrant/code/laravel/resources/js2/menuApp.js */"./resources/js2/menuApp.js");


/***/ })

/******/ });