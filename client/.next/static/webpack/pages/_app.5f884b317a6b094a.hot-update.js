"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/hooks/StorageContext.js":
/*!*************************************!*\
  !*** ./src/hooks/StorageContext.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"StorageProvider\": function() { return /* binding */ StorageProvider; },\n/* harmony export */   \"useStorage\": function() { return /* binding */ useStorage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var nanoid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! nanoid */ \"./node_modules/nanoid/index.browser.js\");\nvar _this = undefined;\n\n\n\nvar _s = $RefreshSig$();\nvar StorageContext = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createContext({});\nvar StorageProvider = function(param) {\n    var children = param.children;\n    var loadImage = function(callback) {\n        var input = document.createElement(\"input\");\n        input.type = \"file\";\n        input.multiple = false;\n        input.accept = \".jpg, .png, .svg\";\n        input.addEventListener(\"change\", function(ev) {\n            var file = ev.target.files[0];\n            var image = {\n                id: (0,nanoid__WEBPACK_IMPORTED_MODULE_2__.nanoid)(),\n                name: file.name,\n                size: file.size,\n                type: file.type,\n                lastModified: file.lastModified,\n                src: window.URL.createObjectURL(file)\n            };\n            callback(image);\n        });\n        input.click();\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StorageContext.Provider, {\n        value: {\n            loadImage: loadImage\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\cristian\\\\Desktop\\\\Code\\\\Web\\\\Projects\\\\task-list\\\\client\\\\src\\\\hooks\\\\StorageContext.js\",\n        lineNumber: 29,\n        columnNumber: 5\n    }, _this);\n};\n_c = StorageProvider;\nvar useStorage = function() {\n    _s();\n    return react__WEBPACK_IMPORTED_MODULE_1___default().useContext(StorageContext);\n};\n_s(useStorage, \"gDsCjeeItUuvgOWf1v4qoK9RF6k=\");\n\nvar _c;\n$RefreshReg$(_c, \"StorageProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaG9va3MvU3RvcmFnZUNvbnRleHQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOztBQUEwQjtBQUNNOztBQUVoQyxJQUFNRSxjQUFjLGlCQUFHRiwwREFBbUIsQ0FBQyxFQUFFLENBQUM7QUFFOUMsSUFBTUksZUFBZSxHQUFHLGdCQUFlO1FBQWJDLFFBQVEsU0FBUkEsUUFBUTtJQUNoQyxJQUFNQyxTQUFTLEdBQUcsU0FBQ0MsUUFBUSxFQUFJO1FBQzdCLElBQU1DLEtBQUssR0FBR0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsT0FBTyxDQUFDO1FBQzdDRixLQUFLLENBQUNHLElBQUksR0FBRyxNQUFNLENBQUM7UUFDcEJILEtBQUssQ0FBQ0ksUUFBUSxHQUFHLEtBQUssQ0FBQztRQUN2QkosS0FBSyxDQUFDSyxNQUFNLEdBQUcsa0JBQWtCLENBQUM7UUFFbENMLEtBQUssQ0FBQ00sZ0JBQWdCLENBQUMsUUFBUSxFQUFFLFNBQUNDLEVBQUUsRUFBSTtZQUN0QyxJQUFNQyxJQUFJLEdBQUdELEVBQUUsQ0FBQ0UsTUFBTSxDQUFDQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQy9CLElBQU1DLEtBQUssR0FBRztnQkFDWkMsRUFBRSxFQUFFbkIsOENBQU0sRUFBRTtnQkFDWm9CLElBQUksRUFBRUwsSUFBSSxDQUFDSyxJQUFJO2dCQUNmQyxJQUFJLEVBQUVOLElBQUksQ0FBQ00sSUFBSTtnQkFDZlgsSUFBSSxFQUFFSyxJQUFJLENBQUNMLElBQUk7Z0JBQ2ZZLFlBQVksRUFBRVAsSUFBSSxDQUFDTyxZQUFZO2dCQUMvQkMsR0FBRyxFQUFFQyxNQUFNLENBQUNDLEdBQUcsQ0FBQ0MsZUFBZSxDQUFDWCxJQUFJLENBQUM7YUFDdEM7WUFDRFQsUUFBUSxDQUFDWSxLQUFLLENBQUMsQ0FBQztTQUNqQixDQUFDLENBQUM7UUFDSFgsS0FBSyxDQUFDb0IsS0FBSyxFQUFFLENBQUM7S0FDZjtJQUVELHFCQUNFLDhEQUFDMUIsY0FBYyxDQUFDMkIsUUFBUTtRQUN0QkMsS0FBSyxFQUFFO1lBQUN4QixTQUFTLEVBQVRBLFNBQVM7U0FBQztrQkFDakJELFFBQVE7Ozs7O2FBQ2UsQ0FDM0I7Q0FDRjtBQTVCS0QsS0FBQUEsZUFBZTtBQThCckIsSUFBTTJCLFVBQVUsR0FBRyxXQUFLOztJQUN0QixPQUFPL0IsdURBQWdCLENBQUNFLGNBQWMsQ0FBQyxDQUFDO0NBQ3pDO0dBRks2QixVQUFVO0FBSXVCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9ob29rcy9TdG9yYWdlQ29udGV4dC5qcz8zNDdiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IG5hbm9pZCB9IGZyb20gJ25hbm9pZCc7XHJcblxyXG5jb25zdCBTdG9yYWdlQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoe30pO1xyXG5cclxuY29uc3QgU3RvcmFnZVByb3ZpZGVyID0gKHtjaGlsZHJlbn0pPT4ge1xyXG4gIGNvbnN0IGxvYWRJbWFnZSA9IChjYWxsYmFjayk9PiB7XHJcbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgIGlucHV0LnR5cGUgPSBcImZpbGVcIjtcclxuICAgIGlucHV0Lm11bHRpcGxlID0gZmFsc2U7XHJcbiAgICBpbnB1dC5hY2NlcHQgPSBcIi5qcGcsIC5wbmcsIC5zdmdcIjtcclxuXHJcbiAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIChldik9PiB7XHJcbiAgICAgIGNvbnN0IGZpbGUgPSBldi50YXJnZXQuZmlsZXNbMF07XHJcbiAgICAgIGNvbnN0IGltYWdlID0ge1xyXG4gICAgICAgIGlkOiBuYW5vaWQoKSxcclxuICAgICAgICBuYW1lOiBmaWxlLm5hbWUsXHJcbiAgICAgICAgc2l6ZTogZmlsZS5zaXplLFxyXG4gICAgICAgIHR5cGU6IGZpbGUudHlwZSxcclxuICAgICAgICBsYXN0TW9kaWZpZWQ6IGZpbGUubGFzdE1vZGlmaWVkLFxyXG4gICAgICAgIHNyYzogd2luZG93LlVSTC5jcmVhdGVPYmplY3RVUkwoZmlsZSlcclxuICAgICAgfTtcclxuICAgICAgY2FsbGJhY2soaW1hZ2UpO1xyXG4gICAgfSk7XHJcbiAgICBpbnB1dC5jbGljaygpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxTdG9yYWdlQ29udGV4dC5Qcm92aWRlciBcclxuICAgICAgdmFsdWU9e3tsb2FkSW1hZ2V9fT5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9TdG9yYWdlQ29udGV4dC5Qcm92aWRlcj5cclxuICApXHJcbn1cclxuXHJcbmNvbnN0IHVzZVN0b3JhZ2UgPSAoKT0+IHtcclxuICByZXR1cm4gUmVhY3QudXNlQ29udGV4dChTdG9yYWdlQ29udGV4dCk7XHJcbn1cclxuXHJcbmV4cG9ydCB7IFN0b3JhZ2VQcm92aWRlciwgdXNlU3RvcmFnZSB9OyJdLCJuYW1lcyI6WyJSZWFjdCIsIm5hbm9pZCIsIlN0b3JhZ2VDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsIlN0b3JhZ2VQcm92aWRlciIsImNoaWxkcmVuIiwibG9hZEltYWdlIiwiY2FsbGJhY2siLCJpbnB1dCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInR5cGUiLCJtdWx0aXBsZSIsImFjY2VwdCIsImFkZEV2ZW50TGlzdGVuZXIiLCJldiIsImZpbGUiLCJ0YXJnZXQiLCJmaWxlcyIsImltYWdlIiwiaWQiLCJuYW1lIiwic2l6ZSIsImxhc3RNb2RpZmllZCIsInNyYyIsIndpbmRvdyIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsImNsaWNrIiwiUHJvdmlkZXIiLCJ2YWx1ZSIsInVzZVN0b3JhZ2UiLCJ1c2VDb250ZXh0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/hooks/StorageContext.js\n"));

/***/ }),

/***/ "./src/pages/_app.js":
/*!***************************!*\
  !*** ./src/pages/_app.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var src_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/store */ \"./src/store.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var src_hooks_UserContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/hooks/UserContext */ \"./src/hooks/UserContext.js\");\n/* harmony import */ var src_hooks_StorageContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/hooks/StorageContext */ \"./src/hooks/StorageContext.js\");\n/* harmony import */ var src_hooks_ViewportContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/hooks/ViewportContext */ \"./src/hooks/ViewportContext.js\");\n/* harmony import */ var public_scss_reset_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! public/scss/reset.scss */ \"./public/scss/reset.scss\");\n/* harmony import */ var public_scss_reset_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(public_scss_reset_scss__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var public_scss_variables_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! public/scss/variables.scss */ \"./public/scss/variables.scss\");\n/* harmony import */ var public_scss_variables_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(public_scss_variables_scss__WEBPACK_IMPORTED_MODULE_8__);\n\nvar _this = undefined;\n\n\n\n\n\n\n\n\n\nvar App = function(param) {\n    var Component = param.Component, pageProps = param.pageProps;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_redux__WEBPACK_IMPORTED_MODULE_3__.Provider, {\n        store: src_store__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(src_hooks_ViewportContext__WEBPACK_IMPORTED_MODULE_6__.ViewportProvider, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(src_hooks_StorageContext__WEBPACK_IMPORTED_MODULE_5__.StorageProvider, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(src_hooks_UserContext__WEBPACK_IMPORTED_MODULE_4__.UserProvider, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, (0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_9__[\"default\"])({}, pageProps), void 0, false, {\n                        fileName: \"C:\\\\Users\\\\cristian\\\\Desktop\\\\Code\\\\Web\\\\Projects\\\\task-list\\\\client\\\\src\\\\pages\\\\_app.js\",\n                        lineNumber: 17,\n                        columnNumber: 13\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\cristian\\\\Desktop\\\\Code\\\\Web\\\\Projects\\\\task-list\\\\client\\\\src\\\\pages\\\\_app.js\",\n                    lineNumber: 16,\n                    columnNumber: 11\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\cristian\\\\Desktop\\\\Code\\\\Web\\\\Projects\\\\task-list\\\\client\\\\src\\\\pages\\\\_app.js\",\n                lineNumber: 15,\n                columnNumber: 9\n            }, _this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\cristian\\\\Desktop\\\\Code\\\\Web\\\\Projects\\\\task-list\\\\client\\\\src\\\\pages\\\\_app.js\",\n            lineNumber: 14,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\cristian\\\\Desktop\\\\Code\\\\Web\\\\Projects\\\\task-list\\\\client\\\\src\\\\pages\\\\_app.js\",\n        lineNumber: 13,\n        columnNumber: 5\n    }, _this);\n};\n_c = App;\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\nvar _c;\n$RefreshReg$(_c, \"App\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7O0FBQTBCO0FBQ0k7QUFDUztBQUNjO0FBQ007QUFDRTtBQUU3QjtBQUNJO0FBRXBDLElBQU1NLEdBQUcsR0FBRyxnQkFBMkI7UUFBekJDLFNBQVMsU0FBVEEsU0FBUyxFQUFFQyxTQUFTLFNBQVRBLFNBQVM7SUFDaEMscUJBQ0UsOERBQUNOLGlEQUFRO1FBQUNELEtBQUssRUFBRUEsaURBQUs7a0JBQ3BCLDRFQUFDSSx1RUFBZ0I7c0JBQ2YsNEVBQUNELHFFQUFlOzBCQUNkLDRFQUFDRCwrREFBWTs4QkFDWCw0RUFBQ0ksU0FBUyxxRkFBS0MsU0FBUzs7Ozs2QkFBRzs7Ozs7eUJBQ2Q7Ozs7O3FCQUNDOzs7OztpQkFDRDs7Ozs7YUFDVixDQUNaO0NBQ0Y7QUFaS0YsS0FBQUEsR0FBRztBQWNULCtEQUFlQSxHQUFHLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL19hcHAuanM/OGZkYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3RvcmUgZnJvbSAnc3JjL3N0b3JlJztcclxuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IFVzZXJQcm92aWRlciB9IGZyb20gJ3NyYy9ob29rcy9Vc2VyQ29udGV4dCc7XHJcbmltcG9ydCB7IFN0b3JhZ2VQcm92aWRlciB9IGZyb20gJ3NyYy9ob29rcy9TdG9yYWdlQ29udGV4dCc7XHJcbmltcG9ydCB7IFZpZXdwb3J0UHJvdmlkZXIgfSBmcm9tICdzcmMvaG9va3MvVmlld3BvcnRDb250ZXh0JztcclxuXHJcbmltcG9ydCBcInB1YmxpYy9zY3NzL3Jlc2V0LnNjc3NcIjtcclxuaW1wb3J0IFwicHVibGljL3Njc3MvdmFyaWFibGVzLnNjc3NcIjtcclxuXHJcbmNvbnN0IEFwcCA9ICh7Q29tcG9uZW50LCBwYWdlUHJvcHN9KT0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XHJcbiAgICAgIDxWaWV3cG9ydFByb3ZpZGVyPlxyXG4gICAgICAgIDxTdG9yYWdlUHJvdmlkZXI+XHJcbiAgICAgICAgICA8VXNlclByb3ZpZGVyPlxyXG4gICAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9Lz4gICAgICBcclxuICAgICAgICAgIDwvVXNlclByb3ZpZGVyPlxyXG4gICAgICAgIDwvU3RvcmFnZVByb3ZpZGVyPlxyXG4gICAgICA8L1ZpZXdwb3J0UHJvdmlkZXI+XHJcbiAgICA8L1Byb3ZpZGVyPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJzdG9yZSIsIlByb3ZpZGVyIiwiVXNlclByb3ZpZGVyIiwiU3RvcmFnZVByb3ZpZGVyIiwiVmlld3BvcnRQcm92aWRlciIsIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/_app.js\n"));

/***/ }),

/***/ "./node_modules/nanoid/index.browser.js":
/*!**********************************************!*\
  !*** ./node_modules/nanoid/index.browser.js ***!
  \**********************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"customAlphabet\": function() { return /* binding */ customAlphabet; },\n/* harmony export */   \"customRandom\": function() { return /* binding */ customRandom; },\n/* harmony export */   \"nanoid\": function() { return /* binding */ nanoid; },\n/* harmony export */   \"random\": function() { return /* binding */ random; },\n/* harmony export */   \"urlAlphabet\": function() { return /* reexport safe */ _url_alphabet_index_js__WEBPACK_IMPORTED_MODULE_0__.urlAlphabet; }\n/* harmony export */ });\n/* harmony import */ var _url_alphabet_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./url-alphabet/index.js */ \"./node_modules/nanoid/url-alphabet/index.js\");\n\nlet random = bytes => crypto.getRandomValues(new Uint8Array(bytes))\nlet customRandom = (alphabet, defaultSize, getRandom) => {\n  let mask = (2 << (Math.log(alphabet.length - 1) / Math.LN2)) - 1\n  let step = -~((1.6 * mask * defaultSize) / alphabet.length)\n  return (size = defaultSize) => {\n    let id = ''\n    while (true) {\n      let bytes = getRandom(step)\n      let j = step\n      while (j--) {\n        id += alphabet[bytes[j] & mask] || ''\n        if (id.length === size) return id\n      }\n    }\n  }\n}\nlet customAlphabet = (alphabet, size = 21) =>\n  customRandom(alphabet, size, random)\nlet nanoid = (size = 21) =>\n  crypto.getRandomValues(new Uint8Array(size)).reduce((id, byte) => {\n    byte &= 63\n    if (byte < 36) {\n      id += byte.toString(36)\n    } else if (byte < 62) {\n      id += (byte - 26).toString(36).toUpperCase()\n    } else if (byte > 62) {\n      id += '-'\n    } else {\n      id += '_'\n    }\n    return id\n  }, '')\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmFub2lkL2luZGV4LmJyb3dzZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQXFEO0FBQzlDO0FBQ0E7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsR0FBRyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmFub2lkL2luZGV4LmJyb3dzZXIuanM/NzA0NiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgeyB1cmxBbHBoYWJldCB9IGZyb20gJy4vdXJsLWFscGhhYmV0L2luZGV4LmpzJ1xuZXhwb3J0IGxldCByYW5kb20gPSBieXRlcyA9PiBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKG5ldyBVaW50OEFycmF5KGJ5dGVzKSlcbmV4cG9ydCBsZXQgY3VzdG9tUmFuZG9tID0gKGFscGhhYmV0LCBkZWZhdWx0U2l6ZSwgZ2V0UmFuZG9tKSA9PiB7XG4gIGxldCBtYXNrID0gKDIgPDwgKE1hdGgubG9nKGFscGhhYmV0Lmxlbmd0aCAtIDEpIC8gTWF0aC5MTjIpKSAtIDFcbiAgbGV0IHN0ZXAgPSAtfigoMS42ICogbWFzayAqIGRlZmF1bHRTaXplKSAvIGFscGhhYmV0Lmxlbmd0aClcbiAgcmV0dXJuIChzaXplID0gZGVmYXVsdFNpemUpID0+IHtcbiAgICBsZXQgaWQgPSAnJ1xuICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICBsZXQgYnl0ZXMgPSBnZXRSYW5kb20oc3RlcClcbiAgICAgIGxldCBqID0gc3RlcFxuICAgICAgd2hpbGUgKGotLSkge1xuICAgICAgICBpZCArPSBhbHBoYWJldFtieXRlc1tqXSAmIG1hc2tdIHx8ICcnXG4gICAgICAgIGlmIChpZC5sZW5ndGggPT09IHNpemUpIHJldHVybiBpZFxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuZXhwb3J0IGxldCBjdXN0b21BbHBoYWJldCA9IChhbHBoYWJldCwgc2l6ZSA9IDIxKSA9PlxuICBjdXN0b21SYW5kb20oYWxwaGFiZXQsIHNpemUsIHJhbmRvbSlcbmV4cG9ydCBsZXQgbmFub2lkID0gKHNpemUgPSAyMSkgPT5cbiAgY3J5cHRvLmdldFJhbmRvbVZhbHVlcyhuZXcgVWludDhBcnJheShzaXplKSkucmVkdWNlKChpZCwgYnl0ZSkgPT4ge1xuICAgIGJ5dGUgJj0gNjNcbiAgICBpZiAoYnl0ZSA8IDM2KSB7XG4gICAgICBpZCArPSBieXRlLnRvU3RyaW5nKDM2KVxuICAgIH0gZWxzZSBpZiAoYnl0ZSA8IDYyKSB7XG4gICAgICBpZCArPSAoYnl0ZSAtIDI2KS50b1N0cmluZygzNikudG9VcHBlckNhc2UoKVxuICAgIH0gZWxzZSBpZiAoYnl0ZSA+IDYyKSB7XG4gICAgICBpZCArPSAnLSdcbiAgICB9IGVsc2Uge1xuICAgICAgaWQgKz0gJ18nXG4gICAgfVxuICAgIHJldHVybiBpZFxuICB9LCAnJylcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/nanoid/index.browser.js\n"));

/***/ }),

/***/ "./node_modules/nanoid/url-alphabet/index.js":
/*!***************************************************!*\
  !*** ./node_modules/nanoid/url-alphabet/index.js ***!
  \***************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"urlAlphabet\": function() { return /* binding */ urlAlphabet; }\n/* harmony export */ });\nconst urlAlphabet =\n  'useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict'\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmFub2lkL3VybC1hbHBoYWJldC9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQU87QUFDUCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmFub2lkL3VybC1hbHBoYWJldC9pbmRleC5qcz9iYjJiIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCB1cmxBbHBoYWJldCA9XG4gICd1c2VhbmRvbS0yNlQxOTgzNDBQWDc1cHhKQUNLVkVSWU1JTkRCVVNIV09MRl9HUVpiZmdoamtscXZ3eXpyaWN0J1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/nanoid/url-alphabet/index.js\n"));

/***/ })

});