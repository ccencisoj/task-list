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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"StorageProvider\": function() { return /* binding */ StorageProvider; },\n/* harmony export */   \"useStorage\": function() { return /* binding */ useStorage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var nanoid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! nanoid */ \"./node_modules/nanoid/index.browser.js\");\nvar _this = undefined;\n\n\n\nvar _s = $RefreshSig$();\nvar StorageContext = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createContext({\n    loadImage: function(callback) {}\n});\nvar StorageProvider = function(param) {\n    var children = param.children;\n    var loadImage = function(callback) {\n        var input = document.createElement(\"input\");\n        input.type = \"file\";\n        input.multiple = false;\n        input.accept = \".jpg, .png, .svg\";\n        input.addEventListener(\"change\", function(ev) {\n            var file = ev.target.files[0];\n            var image = {\n                id: (0,nanoid__WEBPACK_IMPORTED_MODULE_2__.nanoid)(),\n                blob: file,\n                name: file.name,\n                size: file.size,\n                type: file.type,\n                lastModified: file.lastModified,\n                src: window.URL.createObjectURL(file)\n            };\n            callback(image);\n        });\n        input.click();\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StorageContext.Provider, {\n        value: {\n            loadImage: loadImage\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\cristian\\\\Desktop\\\\Code\\\\Web\\\\Projects\\\\task-list\\\\client\\\\src\\\\hooks\\\\StorageContext.js\",\n        lineNumber: 32,\n        columnNumber: 5\n    }, _this);\n};\n_c = StorageProvider;\nvar useStorage = function() {\n    _s();\n    return react__WEBPACK_IMPORTED_MODULE_1___default().useContext(StorageContext);\n};\n_s(useStorage, \"gDsCjeeItUuvgOWf1v4qoK9RF6k=\");\n\nvar _c;\n$RefreshReg$(_c, \"StorageProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaG9va3MvU3RvcmFnZUNvbnRleHQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOztBQUEwQjtBQUNNOztBQUVoQyxJQUFNRSxjQUFjLGlCQUFHRiwwREFBbUIsQ0FBQztJQUN6Q0ksU0FBUyxFQUFFLFNBQUNDLFFBQVEsRUFBSSxFQUFFO0NBQzNCLENBQUM7QUFFRixJQUFNQyxlQUFlLEdBQUcsZ0JBQWU7UUFBYkMsUUFBUSxTQUFSQSxRQUFRO0lBQ2hDLElBQU1ILFNBQVMsR0FBRyxTQUFDQyxRQUFRLEVBQUk7UUFDN0IsSUFBTUcsS0FBSyxHQUFHQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxPQUFPLENBQUM7UUFDN0NGLEtBQUssQ0FBQ0csSUFBSSxHQUFHLE1BQU0sQ0FBQztRQUNwQkgsS0FBSyxDQUFDSSxRQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ3ZCSixLQUFLLENBQUNLLE1BQU0sR0FBRyxrQkFBa0IsQ0FBQztRQUVsQ0wsS0FBSyxDQUFDTSxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsU0FBQ0MsRUFBRSxFQUFJO1lBQ3RDLElBQU1DLElBQUksR0FBR0QsRUFBRSxDQUFDRSxNQUFNLENBQUNDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDL0IsSUFBTUMsS0FBSyxHQUFHO2dCQUNaQyxFQUFFLEVBQUVuQiw4Q0FBTSxFQUFFO2dCQUNab0IsSUFBSSxFQUFFTCxJQUFJO2dCQUNWTSxJQUFJLEVBQUVOLElBQUksQ0FBQ00sSUFBSTtnQkFDZkMsSUFBSSxFQUFFUCxJQUFJLENBQUNPLElBQUk7Z0JBQ2ZaLElBQUksRUFBRUssSUFBSSxDQUFDTCxJQUFJO2dCQUNmYSxZQUFZLEVBQUVSLElBQUksQ0FBQ1EsWUFBWTtnQkFDL0JDLEdBQUcsRUFBRUMsTUFBTSxDQUFDQyxHQUFHLENBQUNDLGVBQWUsQ0FBQ1osSUFBSSxDQUFDO2FBQ3RDO1lBQ0RYLFFBQVEsQ0FBQ2MsS0FBSyxDQUFDLENBQUM7U0FDakIsQ0FBQyxDQUFDO1FBQ0hYLEtBQUssQ0FBQ3FCLEtBQUssRUFBRSxDQUFDO0tBQ2Y7SUFFRCxxQkFDRSw4REFBQzNCLGNBQWMsQ0FBQzRCLFFBQVE7UUFDdEJDLEtBQUssRUFBRTtZQUFDM0IsU0FBUyxFQUFUQSxTQUFTO1NBQUM7a0JBQ2pCRyxRQUFROzs7OzthQUNlLENBQzNCO0NBQ0Y7QUE3QktELEtBQUFBLGVBQWU7QUErQnJCLElBQU0wQixVQUFVLEdBQUcsV0FBSzs7SUFDdEIsT0FBT2hDLHVEQUFnQixDQUFDRSxjQUFjLENBQUMsQ0FBQztDQUN6QztHQUZLOEIsVUFBVTtBQUl1QiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvaG9va3MvU3RvcmFnZUNvbnRleHQuanM/MzQ3YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBuYW5vaWQgfSBmcm9tICduYW5vaWQnO1xyXG5cclxuY29uc3QgU3RvcmFnZUNvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KHtcclxuICBsb2FkSW1hZ2U6IChjYWxsYmFjayk9PiB7fSxcclxufSk7XHJcblxyXG5jb25zdCBTdG9yYWdlUHJvdmlkZXIgPSAoe2NoaWxkcmVufSk9PiB7XHJcbiAgY29uc3QgbG9hZEltYWdlID0gKGNhbGxiYWNrKT0+IHtcclxuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgaW5wdXQudHlwZSA9IFwiZmlsZVwiO1xyXG4gICAgaW5wdXQubXVsdGlwbGUgPSBmYWxzZTtcclxuICAgIGlucHV0LmFjY2VwdCA9IFwiLmpwZywgLnBuZywgLnN2Z1wiO1xyXG5cclxuICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKGV2KT0+IHtcclxuICAgICAgY29uc3QgZmlsZSA9IGV2LnRhcmdldC5maWxlc1swXTtcclxuICAgICAgY29uc3QgaW1hZ2UgPSB7XHJcbiAgICAgICAgaWQ6IG5hbm9pZCgpLFxyXG4gICAgICAgIGJsb2I6IGZpbGUsXHJcbiAgICAgICAgbmFtZTogZmlsZS5uYW1lLFxyXG4gICAgICAgIHNpemU6IGZpbGUuc2l6ZSxcclxuICAgICAgICB0eXBlOiBmaWxlLnR5cGUsXHJcbiAgICAgICAgbGFzdE1vZGlmaWVkOiBmaWxlLmxhc3RNb2RpZmllZCxcclxuICAgICAgICBzcmM6IHdpbmRvdy5VUkwuY3JlYXRlT2JqZWN0VVJMKGZpbGUpXHJcbiAgICAgIH07XHJcbiAgICAgIGNhbGxiYWNrKGltYWdlKTtcclxuICAgIH0pO1xyXG4gICAgaW5wdXQuY2xpY2soKTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8U3RvcmFnZUNvbnRleHQuUHJvdmlkZXIgXHJcbiAgICAgIHZhbHVlPXt7bG9hZEltYWdlfX0+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvU3RvcmFnZUNvbnRleHQuUHJvdmlkZXI+XHJcbiAgKVxyXG59XHJcblxyXG5jb25zdCB1c2VTdG9yYWdlID0gKCk9PiB7XHJcbiAgcmV0dXJuIFJlYWN0LnVzZUNvbnRleHQoU3RvcmFnZUNvbnRleHQpO1xyXG59XHJcblxyXG5leHBvcnQgeyBTdG9yYWdlUHJvdmlkZXIsIHVzZVN0b3JhZ2UgfTsiXSwibmFtZXMiOlsiUmVhY3QiLCJuYW5vaWQiLCJTdG9yYWdlQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJsb2FkSW1hZ2UiLCJjYWxsYmFjayIsIlN0b3JhZ2VQcm92aWRlciIsImNoaWxkcmVuIiwiaW5wdXQiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJ0eXBlIiwibXVsdGlwbGUiLCJhY2NlcHQiLCJhZGRFdmVudExpc3RlbmVyIiwiZXYiLCJmaWxlIiwidGFyZ2V0IiwiZmlsZXMiLCJpbWFnZSIsImlkIiwiYmxvYiIsIm5hbWUiLCJzaXplIiwibGFzdE1vZGlmaWVkIiwic3JjIiwid2luZG93IiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwiY2xpY2siLCJQcm92aWRlciIsInZhbHVlIiwidXNlU3RvcmFnZSIsInVzZUNvbnRleHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/hooks/StorageContext.js\n"));

/***/ })

});