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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js2/absoluteMessage.js":
/*!******************************************!*\
  !*** ./resources/js2/absoluteMessage.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AbsoluteMessage; });
/* harmony import */ var _el_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./el.js */ "./resources/js2/el.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var AbsoluteMessage = /*#__PURE__*/function () {
  function AbsoluteMessage(text) {
    _classCallCheck(this, AbsoluteMessage);

    this.text = text;
    this.id = "absoluteMessage".concat(new Date().getTime());

    this._render();
  }

  _createClass(AbsoluteMessage, [{
    key: "_render",
    value: function _render() {
      var _this = this;

      var html = "<div id=\"".concat(this.id, "\" class=\"absolute_message__wrapper\">\n                           <div class=\"absolute_message__div\">\n                                ").concat(this.text, "\n                           </div>\n                      </div>");
      Object(_el_js__WEBPACK_IMPORTED_MODULE_0__["default"])('body').insertAdjacentHTML('beforeend', html);
      setTimeout(function () {
        _this._removeHtml();
      }, 2500);
    }
  }, {
    key: "_removeHtml",
    value: function _removeHtml() {
      Object(_el_js__WEBPACK_IMPORTED_MODULE_0__["default"])("#".concat(this.id)).remove();
    }
  }]);

  return AbsoluteMessage;
}();



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
/* harmony import */ var _register__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register */ "./resources/js2/register.js");



if (Object(_el__WEBPACK_IMPORTED_MODULE_0__["default"])('#registerLink')) {
  new _register__WEBPACK_IMPORTED_MODULE_1__["default"]();
} //import onBodyClickListener from './onBodyClickListener.js';
// import "../sass2/common.sass";
//onBodyClickListener();

/***/ }),

/***/ "./resources/js2/register.js":
/*!***********************************!*\
  !*** ./resources/js2/register.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Register; });
/* harmony import */ var _el_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./el.js */ "./resources/js2/el.js");
/* harmony import */ var _http_postJson_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./http/postJson.js */ "./resources/js2/http/postJson.js");
/* harmony import */ var _validation_registerValidation_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./validation/registerValidation.js */ "./resources/js2/validation/registerValidation.js");
/* harmony import */ var _absoluteMessage_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./absoluteMessage.js */ "./resources/js2/absoluteMessage.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }






var Register = /*#__PURE__*/function () {
  function Register() {
    var _this = this;

    var postUrl = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '/register';
    var successUrl = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '/home';

    _classCallCheck(this, Register);

    if (!Object(_el_js__WEBPACK_IMPORTED_MODULE_0__["default"])('#registerLink')) {
      return;
    }

    this.postUrl = postUrl;
    this.successUrl = successUrl;
    this.disabledSubmit = false;
    this.enabledTypeinValidation = false;
    this.basicCss = 'register_form__wrapper';
    this.showCss = 'register_form__show';
    this.hideCss = 'register_form__hide';
    this.alarmCss = 'register_form__alarm';
    Object(_el_js__WEBPACK_IMPORTED_MODULE_0__["default"])('#registerLink').addEventListener('click', function (e) {
      e.preventDefault();
      e.stopPropagation();

      _this._render();
    });
  }

  _createClass(Register, [{
    key: "_render",
    value: function _render() {
      if (!Object(_el_js__WEBPACK_IMPORTED_MODULE_0__["default"])('#regForm')) {
        this._firstRender();

        return;
      }

      this._show();
    }
  }, {
    key: "_firstRender",
    value: function _firstRender() {
      var _this2 = this;

      var html = "<div id=\"regForm\" class=\"".concat(this.basicCss, " ").concat(this.showCss, "\">\n                        <div class=\"register_form__header\">\n                            \u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F\n                            <div class='register_form__close'>&#215;</div>\n                        </div>\n                        <label for=\"regName\" class=\"register_input__label\">\u0412\u0430\u0448\u0435 \u0438\u043C\u044F</label>\n                        <input type='text' name='name' id='regName' required class=\"register_input__text\">\n                        <div id=\"regNameErr\" class=\"register_input__validation_message\"></div>\n\n                        <label for=\"regEmail\" class=\"register_input__label\">E-mail</label>\n                        <input type='email' name='email' id='regEmail' required class=\"register_input__text\">\n                        <div id=\"regEmailErr\" class=\"register_input__validation_message\"></div>\n\n                        <label for=\"regPassword\" class=\"register_input__label\">\u041F\u0430\u0440\u043E\u043B\u044C</label>\n                        <input type='password' name='password' id='regPassword' required class=\"register_input__text\">\n                        <div id=\"regPasswordErr\" class=\"register_input__validation_message\"></div>\n\n                        <label for=\"regPassword_confirmation\" class=\"register_input__label\">\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u0435 \u043F\u0430\u0440\u043E\u043B\u044C</label>\n                        <input type='password' name='password_confirmation' id='regPassword_confirmation' required class=\"register_input__text\">\n                        <div id=\"regPasswordConfirmationErr\" class=\"register_input__validation_message\"></div>\n\n                        <button type=\"submit\" id='regSubmit' class=\"register_form__submit_button\">\n                           \u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C\u0441\u044F\n                        </button>\n                      </div>");
      Object(_el_js__WEBPACK_IMPORTED_MODULE_0__["default"])('body').insertAdjacentHTML('beforeend', html);
      Object(_el_js__WEBPACK_IMPORTED_MODULE_0__["default"])('#regSubmit').addEventListener('click', function () {
        _this2._submit(_this2._getUserData());
      });
      Object(_el_js__WEBPACK_IMPORTED_MODULE_0__["default"])('#regForm').addEventListener('keyup', function () {
        if (!_this2.enabledTypeinValidation) return;

        var _registerValidation = Object(_validation_registerValidation_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_this2._getUserData()),
            popupErrors = _registerValidation.popupErrors,
            typeinErrors = _registerValidation.typeinErrors;

        _this2._showErrors(typeinErrors);
      });
      Object(_el_js__WEBPACK_IMPORTED_MODULE_0__["default"])('body').addEventListener('click', function (e) {
        _this2._hide(e);
      });
    }
  }, {
    key: "_submit",
    value: function _submit(userData) {
      var _this3 = this;

      this._turnOffAlarm();

      var _registerValidation2 = Object(_validation_registerValidation_js__WEBPACK_IMPORTED_MODULE_2__["default"])(userData),
          popupErrors = _registerValidation2.popupErrors,
          typeinErrors = _registerValidation2.typeinErrors;

      if (popupErrors) {
        // console.log(popupErrors);
        setTimeout(this._turnOnAlarm.bind(this), 1);

        this._showErrors(typeinErrors);

        this.enabledTypeinValidation = true;
        return;
      } // защита от повторного нажатия на 5 сек


      if (this.disabledSubmit) {
        return;
      }

      this.disabledSubmit = true;
      setTimeout(function () {
        _this3.disabledSubmit = false;
      }, 5000); // отправить данные и получить ответ

      Object(_http_postJson_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this.postUrl, userData).then(function (data) {
        console.log(data);

        if (data.backValidatorErrors) {
          setTimeout(_this3._turnOnAlarm.bind(_this3), 1);

          _this3._showErrors(data.backValidatorErrors);

          _this3.enabledTypeinValidation = true;
          return;
        }

        if (data.saveSuccess === true) {
          document.location.href = _this3.successUrl;
        } else {
          new _absoluteMessage_js__WEBPACK_IMPORTED_MODULE_3__["default"]('Не удалось создать регистрацию.');
        }
      });
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
  }, {
    key: "_getUserData",
    value: function _getUserData() {
      return {
        name: Object(_el_js__WEBPACK_IMPORTED_MODULE_0__["default"])('#regName').value,
        email: Object(_el_js__WEBPACK_IMPORTED_MODULE_0__["default"])('#regEmail').value,
        password: Object(_el_js__WEBPACK_IMPORTED_MODULE_0__["default"])('#regPassword').value,
        password_confirmation: Object(_el_js__WEBPACK_IMPORTED_MODULE_0__["default"])('#regPassword_confirmation').value
      };
    }
  }, {
    key: "_turnOnAlarm",
    value: function _turnOnAlarm() {
      Object(_el_js__WEBPACK_IMPORTED_MODULE_0__["default"])('#regForm').className = "".concat(this.basicCss, " ").concat(this.alarmCss);
    }
  }, {
    key: "_turnOffAlarm",
    value: function _turnOffAlarm() {
      Object(_el_js__WEBPACK_IMPORTED_MODULE_0__["default"])('#regForm').classList.remove(this.alarmCss);
    }
  }, {
    key: "_hide",
    value: function _hide(e) {
      if (!Object(_el_js__WEBPACK_IMPORTED_MODULE_0__["default"])('#regForm')) {
        return;
      }

      if (e.target.parentNode === Object(_el_js__WEBPACK_IMPORTED_MODULE_0__["default"])('#regForm')) {
        return;
      }

      if (e.target === Object(_el_js__WEBPACK_IMPORTED_MODULE_0__["default"])('#regForm')) {
        return;
      }

      Object(_el_js__WEBPACK_IMPORTED_MODULE_0__["default"])('#regForm').className = "".concat(this.basicCss, " ").concat(this.hideCss);
    }
  }, {
    key: "_show",
    value: function _show(e) {
      if (!Object(_el_js__WEBPACK_IMPORTED_MODULE_0__["default"])('#regForm')) {
        return;
      }

      Object(_el_js__WEBPACK_IMPORTED_MODULE_0__["default"])('#regForm').className = "".concat(this.basicCss, " ").concat(this.showCss);
    }
  }]);

  return Register;
}();



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
  // для длинных сообщений в pop-up блоке
  var err = {}; // для коротких type-in сообщений под input-полями

  var err2 = {};

  if (user.name.length === 0) {
    if (!err.hasOwnProperty('name')) {
      err.name = [];
      err2.name = [];
    }

    err.name.push('заполните «Ваше имя».');
    err2.name.push('Пожалуйста заполните');
  }

  if (user.email.length === 0) {
    if (!err.hasOwnProperty('email')) {
      err.email = [];
      err2.email = [];
    }

    err.email.push('заполните «Ваш email».');
    err2.email.push('Пожалуйста заполните');
  }

  if (user.password.length === 0) {
    if (!err.hasOwnProperty('password')) {
      err.password = [];
      err2.password = [];
    }

    err.password.push('заполните «Пароль».');
    err2.password.push('Пожалуйста заполните');
  }

  if (user.password_confirmation.length === 0) {
    if (!err.hasOwnProperty('password_confirmation')) {
      err.password_confirmation = [];
      err2.password_confirmation = [];
    }

    err.password_confirmation.push('заполните «Подтверждение пароля».');
    err2.password_confirmation.push('Пожалуйста заполните');
  }

  if (!Object(_isEmailValid_js__WEBPACK_IMPORTED_MODULE_0__["default"])(user.email)) {
    if (!err.hasOwnProperty('email')) {
      err.email = [];
      err2.email = [];
    }

    err.email.push('некорректный Ваш email.');
    err2.email.push('Некорректный email');
  }

  if (user.password.length > 0 && user.password.length < 6) {
    if (!err.hasOwnProperty('password')) {
      err.password = [];
      err2.password = [];
    }

    err.password.push('«Пароль» не менее 6 символов.');
    err2.password.push('Не менее 6 символов');
  }

  if (user.password_confirmation.length > 0 && user.password.length > 0) {
    if (user.password_confirmation !== user.password) {
      if (!err.hasOwnProperty('password_confirmation')) {
        err.password_confirmation = [];
        err2.password_confirmation = [];
      }

      err.password_confirmation.push('пароль подтвержден неверно.');
      err2.password_confirmation.push('Подтвержден неверно');
    }
  }

  for (var key in err) {
    if (err.hasOwnProperty(key)) return {
      popupErrors: err,
      typeinErrors: err2
    };
  }

  return {
    popupErrors: null,
    typeinErrors: null
  };
}

/***/ }),

/***/ "./resources/sass2/index.sass":
/*!************************************!*\
  !*** ./resources/sass2/index.sass ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!*******************************************************************!*\
  !*** multi ./resources/js2/index.js ./resources/sass2/index.sass ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /home/vagrant/code/laravel/resources/js2/index.js */"./resources/js2/index.js");
module.exports = __webpack_require__(/*! /home/vagrant/code/laravel/resources/sass2/index.sass */"./resources/sass2/index.sass");


/***/ })

/******/ });