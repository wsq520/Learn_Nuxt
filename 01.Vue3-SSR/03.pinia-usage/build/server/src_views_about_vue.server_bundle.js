"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "src_views_about_vue";
exports.ids = ["src_views_about_vue"];
exports.modules = {

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[5].use[0]!./src/views/about.vue?vue&type=script&setup=true&lang=js":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[5].use[0]!./src/views/about.vue?vue&type=script&setup=true&lang=js ***!
  \**********************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var pinia__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pinia */ \"pinia\");\n/* harmony import */ var pinia__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(pinia__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store */ \"./src/store/index.js\");\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  __name: 'about',\n  setup: function setup(__props, _ref) {\n    var expose = _ref.expose;\n    expose();\n    var homeStore = (0,_store__WEBPACK_IMPORTED_MODULE_1__.useHomeStore)();\n    var _storeToRefs = (0,pinia__WEBPACK_IMPORTED_MODULE_0__.storeToRefs)(homeStore),\n      count = _storeToRefs.count;\n    var addCount = function addCount() {\n      count.value++;\n    };\n    var __returned__ = {\n      homeStore: homeStore,\n      count: count,\n      addCount: addCount,\n      get storeToRefs() {\n        return pinia__WEBPACK_IMPORTED_MODULE_0__.storeToRefs;\n      },\n      get useHomeStore() {\n        return _store__WEBPACK_IMPORTED_MODULE_1__.useHomeStore;\n      }\n    };\n    Object.defineProperty(__returned__, '__isScriptSetup', {\n      enumerable: false,\n      value: true\n    });\n    return __returned__;\n  }\n});\n\n//# sourceURL=webpack://01.node-server/./src/views/about.vue?./node_modules/babel-loader/lib/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/index.js??ruleSet%5B1%5D.rules%5B5%5D.use%5B0%5D");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[5].use[0]!./src/views/about.vue?vue&type=template&id=e7ab893a":
/*!***************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[5].use[0]!./src/views/about.vue?vue&type=template&id=e7ab893a ***!
  \***************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ssrRender\": () => (/* binding */ ssrRender)\n/* harmony export */ });\n/* harmony import */ var vue_server_renderer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue/server-renderer */ \"vue/server-renderer\");\n/* harmony import */ var vue_server_renderer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_server_renderer__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {\n  _push(\"<div\".concat((0,vue_server_renderer__WEBPACK_IMPORTED_MODULE_0__.ssrRenderAttrs)(_attrs), \"><h2>About</h2><div>\").concat((0,vue_server_renderer__WEBPACK_IMPORTED_MODULE_0__.ssrInterpolate)($setup.count), \"</div><button>+1</button></div>\"));\n}\n\n//# sourceURL=webpack://01.node-server/./src/views/about.vue?./node_modules/babel-loader/lib/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/templateLoader.js??ruleSet%5B1%5D.rules%5B2%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B1%5D.rules%5B5%5D.use%5B0%5D");

/***/ }),

/***/ "./src/store/index.js":
/*!****************************!*\
  !*** ./src/store/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useHomeStore\": () => (/* binding */ useHomeStore)\n/* harmony export */ });\n/* harmony import */ var pinia__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pinia */ \"pinia\");\n/* harmony import */ var pinia__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(pinia__WEBPACK_IMPORTED_MODULE_0__);\n\nvar useHomeStore = (0,pinia__WEBPACK_IMPORTED_MODULE_0__.defineStore)('home', {\n  state: function state() {\n    return {\n      count: 100\n    };\n  },\n  actions: {\n    increment: function increment() {\n      this.count++;\n    },\n    decrement: function decrement() {\n      this.count--;\n    }\n  }\n});\n\n//# sourceURL=webpack://01.node-server/./src/store/index.js?");

/***/ }),

/***/ "./src/views/about.vue":
/*!*****************************!*\
  !*** ./src/views/about.vue ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _about_vue_vue_type_template_id_e7ab893a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about.vue?vue&type=template&id=e7ab893a */ \"./src/views/about.vue?vue&type=template&id=e7ab893a\");\n/* harmony import */ var _about_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about.vue?vue&type=script&setup=true&lang=js */ \"./src/views/about.vue?vue&type=script&setup=true&lang=js\");\n/* harmony import */ var D_learn_Nuxt_01_Vue3_SSR_03_pinia_usage_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ \"./node_modules/vue-loader/dist/exportHelper.js\");\n\n\n\n\n;\nconst __exports__ = /*#__PURE__*/(0,D_learn_Nuxt_01_Vue3_SSR_03_pinia_usage_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_about_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], [['ssrRender',_about_vue_vue_type_template_id_e7ab893a__WEBPACK_IMPORTED_MODULE_0__.ssrRender],['__file',\"src/views/about.vue\"]])\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);\n\n//# sourceURL=webpack://01.node-server/./src/views/about.vue?");

/***/ }),

/***/ "./src/views/about.vue?vue&type=script&setup=true&lang=js":
/*!****************************************************************!*\
  !*** ./src/views/about.vue?vue&type=script&setup=true&lang=js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_5_use_0_about_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_5_use_0_about_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[5].use[0]!./about.vue?vue&type=script&setup=true&lang=js */ \"./node_modules/babel-loader/lib/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[5].use[0]!./src/views/about.vue?vue&type=script&setup=true&lang=js\");\n \n\n//# sourceURL=webpack://01.node-server/./src/views/about.vue?");

/***/ }),

/***/ "./src/views/about.vue?vue&type=template&id=e7ab893a":
/*!***********************************************************!*\
  !*** ./src/views/about.vue?vue&type=template&id=e7ab893a ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ssrRender\": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_5_use_0_about_vue_vue_type_template_id_e7ab893a__WEBPACK_IMPORTED_MODULE_0__.ssrRender)\n/* harmony export */ });\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_5_use_0_about_vue_vue_type_template_id_e7ab893a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[5].use[0]!./about.vue?vue&type=template&id=e7ab893a */ \"./node_modules/babel-loader/lib/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[5].use[0]!./src/views/about.vue?vue&type=template&id=e7ab893a\");\n\n\n//# sourceURL=webpack://01.node-server/./src/views/about.vue?");

/***/ })

};
;