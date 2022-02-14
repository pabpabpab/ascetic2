(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[12],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/HelpPage.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Admin/HelpPage.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_viewingIconOfSmallItems_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../assets/viewingIconOfSmallItems.svg */ "./resources/assets/viewingIconOfSmallItems.svg");
/* harmony import */ var _assets_viewingIconOfSmallItems_svg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_assets_viewingIconOfSmallItems_svg__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "HelpPage",
  data: function data() {
    return {
      smallViewingIcon: _assets_viewingIconOfSmallItems_svg__WEBPACK_IMPORTED_MODULE_0___default.a
    };
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/HelpPage.vue?vue&type=template&id=242e290a&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Admin/HelpPage.vue?vue&type=template&id=242e290a& ***!
  \*****************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "show_block" }, [
    _c("div", { staticClass: "content_block helpPage" }, [
      _c("b", [_vm._v("Добавление категорий.")]),
      _c("br"),
      _c("br"),
      _vm._v(
        "\n        - Чтобы добавить первый товар, создайте категории товаров, материалы и цвета\n        через соответствующие пункты меню в главном меню.\n        Категории можно редактировать, удалять, добавлять новые\n        (через наведение мыши или клик по иконке меню\n        "
      ),
      _c("span", { staticClass: "helpPage__context_menu_icon1" }, [
        _vm._v("⋮")
      ]),
      _vm._v(" на каждой категории).\n        "),
      _c("br"),
      _c("br"),
      _c("br"),
      _vm._v(" "),
      _c("b", [_vm._v("Добавление товаров.")]),
      _c("br"),
      _c("br"),
      _vm._v(
        "\n        - Добавьте товары через пункт меню «Добавить товар» в главном меню.\n        Добавленные товары можно редактировать, удалять, добавлять в них новые фото\n        (через наведение мыши или клик по иконке меню\n        "
      ),
      _c("span", { staticClass: "helpPage__context_menu_icon2" }, [
        _vm._v("⋮")
      ]),
      _vm._v(" на каждом товаре).\n        "),
      _c("br"),
      _c("br"),
      _c("br"),
      _vm._v(" "),
      _c("b", [_vm._v("Удаленные товары.")]),
      _c("br"),
      _c("br"),
      _vm._v(
        "\n        - Удаленные товары попадают в раздел «Удаленные товары» доступный через соответствующий пункт меню\n        в главном меню, в этом разделе удаленный товар можно восстановить, или удалить безвозвратно.\n        Восстановить товар - то есть вернуть его в действующие товары, которые видно на сайте для\n        всех пользователей.\n        "
      ),
      _c("br"),
      _c("br"),
      _c("br"),
      _vm._v(" "),
      _c("b", [_vm._v("Добавление и изменение фото в товарах.")]),
      _c("br"),
      _c("br"),
      _vm._v("\n        - Через иконку "),
      _c("span", { staticClass: "helpPage__context_menu_icon2" }, [
        _vm._v("⋮")
      ]),
      _vm._v(
        " на каждом товаре\n        можно перейти в фото-менеджер, где можно добавить новые фото товара, отредактировать фото\n        (повернуть фото), или удалить фото.\n        "
      ),
      _c("br"),
      _c("br"),
      _c("br"),
      _vm._v(" "),
      _c("b", [_vm._v("Перемещение мышью категорий и товаров.")]),
      _c("br"),
      _c("br"),
      _vm._v(
        "\n        - Категории и товары на сайте по умолчанию располагаются в том порядке, в каком они находятся\n        в вашем разделе администратора. Поменять порядок можно мышью, кликнув левую кнопку мыши\n        на нужной категории или товаре и перетащив категорию или товар в нужную позицию.\n        Режим перетаскивания доступен в момент когда курсор мыши обретает вид\n        "
      ),
      _c("span", { staticClass: "helpPage__cursor_move__span" }, [
        _vm._v("четырехсторонней стрелки")
      ]),
      _vm._v(
        ".\n        Перетаскивание товаров удобнее в режиме мелких элементов, доступном по значку\n        "
      ),
      _c("img", {
        staticClass: "helpPage__smallViewingIcon",
        attrs: { src: _vm.smallViewingIcon, alt: "" }
      }),
      _vm._v(".\n        "),
      _c("br"),
      _c("br"),
      _c("br"),
      _vm._v(" "),
      _c("b", [_vm._v("Перемещение фото в отдельном товаре.")]),
      _c("br"),
      _c("br"),
      _vm._v(
        "\n        - Поменять порядок расположения фото в каждом отдельном товаре можно мышью в фото-менеджере,\n        кликнув левую кнопку мыши на нужном фото и перетащив фото в нужную позицию.\n        Режим перетаскивания доступен в момент когда курсор мыши обретает вид\n        "
      ),
      _c("span", { staticClass: "helpPage__cursor_move__span" }, [
        _vm._v("четырехсторонней стрелки")
      ]),
      _vm._v(".\n        "),
      _c("br"),
      _c("br"),
      _c("br"),
      _vm._v(" "),
      _c("b", [_vm._v("SEO.")]),
      _c("br"),
      _c("br"),
      _vm._v(
        "\n        - У каждой категории и товара, а также у каждого отдельного фото можно добавить\n        title и description их отдельной веб-страницы через пункт контекстного меню с названием SEO.\n        (Создавать title и description страниц необязательно,\n        они будут назначены сайтом автоматически, применяя принципы SEO).\n        "
      ),
      _c("br"),
      _c("br"),
      _c("br"),
      _vm._v(" "),
      _c("b", [_vm._v("Пользователи.")]),
      _c("br"),
      _c("br"),
      _vm._v(
        "\n        - Вы сможете видеть зарегистрированных на вашем сайте пользователей\n        через пункт меню «Пользователи» в главном меню, редактировать их настройки или удалять\n        (через наведение мыши или клик по иконке меню\n        "
      ),
      _c("span", { staticClass: "helpPage__context_menu_icon1" }, [
        _vm._v("⋮")
      ]),
      _vm._v(
        " на каждом пользователе).\n        Также можно создать пользователя через пункт «Создать пользователя» в главном меню,\n        если это потребуется. Все что касается действий с пользователями, нужно понимать что вы делаете.\n    "
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/assets/viewingIconOfSmallItems.svg":
/*!******************************************************!*\
  !*** ./resources/assets/viewingIconOfSmallItems.svg ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/viewingIconOfSmallItems.svg?6b5fb0d92a29873f530c76e4f454ed99";

/***/ }),

/***/ "./resources/js/components/Admin/HelpPage.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/Admin/HelpPage.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HelpPage_vue_vue_type_template_id_242e290a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HelpPage.vue?vue&type=template&id=242e290a& */ "./resources/js/components/Admin/HelpPage.vue?vue&type=template&id=242e290a&");
/* harmony import */ var _HelpPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HelpPage.vue?vue&type=script&lang=js& */ "./resources/js/components/Admin/HelpPage.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _HelpPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _HelpPage_vue_vue_type_template_id_242e290a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _HelpPage_vue_vue_type_template_id_242e290a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Admin/HelpPage.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Admin/HelpPage.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/Admin/HelpPage.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HelpPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./HelpPage.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/HelpPage.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HelpPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Admin/HelpPage.vue?vue&type=template&id=242e290a&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/Admin/HelpPage.vue?vue&type=template&id=242e290a& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HelpPage_vue_vue_type_template_id_242e290a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./HelpPage.vue?vue&type=template&id=242e290a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Admin/HelpPage.vue?vue&type=template&id=242e290a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HelpPage_vue_vue_type_template_id_242e290a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HelpPage_vue_vue_type_template_id_242e290a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);