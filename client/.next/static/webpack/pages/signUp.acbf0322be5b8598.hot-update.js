"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/signUp",{

/***/ "./src/components/ImageSelector/ImageSelector1.js":
/*!********************************************************!*\
  !*** ./src/components/ImageSelector/ImageSelector1.js ***!
  \********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/src/_sliced_to_array.mjs */ \"./node_modules/@swc/helpers/src/_sliced_to_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-feather */ \"./node_modules/react-feather/dist/index.js\");\n/* harmony import */ var _ImageSelector1_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ImageSelector1.module.scss */ \"./src/components/ImageSelector/ImageSelector1.module.scss\");\n/* harmony import */ var _ImageSelector1_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ImageSelector1_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var src_hooks_StorageContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/hooks/StorageContext */ \"./src/hooks/StorageContext.js\");\n\nvar _this = undefined;\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar ImageSelector1 = function(param) {\n    var onChange = param.onChange;\n    _s();\n    var ref = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(react__WEBPACK_IMPORTED_MODULE_1___default().useState(\"/images/user1.svg\"), 2), image = ref[0], setImage = ref[1];\n    var storage = (0,src_hooks_StorageContext__WEBPACK_IMPORTED_MODULE_2__.useStorage)();\n    var loadImage = function() {\n        storage.loadImage(function(image) {\n            setImage(image);\n            onChange(image.blob);\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_ImageSelector1_module_scss__WEBPACK_IMPORTED_MODULE_4___default().image_selector),\n        onClick: loadImage,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                className: (_ImageSelector1_module_scss__WEBPACK_IMPORTED_MODULE_4___default().image),\n                src: image\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\cristian\\\\Desktop\\\\Code\\\\Web\\\\Projects\\\\task-list\\\\client\\\\src\\\\components\\\\ImageSelector\\\\ImageSelector1.js\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: (_ImageSelector1_module_scss__WEBPACK_IMPORTED_MODULE_4___default().label),\n                children: \"Seleccionar imagen\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\cristian\\\\Desktop\\\\Code\\\\Web\\\\Projects\\\\task-list\\\\client\\\\src\\\\components\\\\ImageSelector\\\\ImageSelector1.js\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_feather__WEBPACK_IMPORTED_MODULE_5__.ChevronRight, {\n                className: (_ImageSelector1_module_scss__WEBPACK_IMPORTED_MODULE_4___default().icon)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\cristian\\\\Desktop\\\\Code\\\\Web\\\\Projects\\\\task-list\\\\client\\\\src\\\\components\\\\ImageSelector\\\\ImageSelector1.js\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\cristian\\\\Desktop\\\\Code\\\\Web\\\\Projects\\\\task-list\\\\client\\\\src\\\\components\\\\ImageSelector\\\\ImageSelector1.js\",\n        lineNumber: 18,\n        columnNumber: 5\n    }, _this);\n};\n_s(ImageSelector1, \"ljd7MLY+Dox8uaYehyzNOETN6mg=\", false, function() {\n    return [\n        src_hooks_StorageContext__WEBPACK_IMPORTED_MODULE_2__.useStorage\n    ];\n});\n_c = ImageSelector1;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ImageSelector1);\nvar _c;\n$RefreshReg$(_c, \"ImageSelector1\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9JbWFnZVNlbGVjdG9yL0ltYWdlU2VsZWN0b3IxLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7O0FBQTBCO0FBQ1k7QUFDWTtBQUNJOztBQUV0RCxJQUFNSSxjQUFjLEdBQUcsZ0JBQWU7UUFBYkMsUUFBUSxTQUFSQSxRQUFROztJQUMvQixJQUEwQkwsR0FBbUMsb0ZBQW5DQSxxREFBYyxDQUFDLG1CQUFtQixDQUFDLE1BQXRETyxLQUFLLEdBQWNQLEdBQW1DLEdBQWpELEVBQUVRLFFBQVEsR0FBSVIsR0FBbUMsR0FBdkM7SUFDdEIsSUFBTVMsT0FBTyxHQUFHTixvRUFBVSxFQUFFO0lBRTVCLElBQU1PLFNBQVMsR0FBRyxXQUFLO1FBQ3JCRCxPQUFPLENBQUNDLFNBQVMsQ0FBQyxTQUFDSCxLQUFLLEVBQUk7WUFDMUJDLFFBQVEsQ0FBQ0QsS0FBSyxDQUFDLENBQUM7WUFDaEJGLFFBQVEsQ0FBQ0UsS0FBSyxDQUFDSSxJQUFJLENBQUMsQ0FBQztTQUN0QixDQUFDLENBQUM7S0FDSjtJQUVELHFCQUNFLDhEQUFDQyxLQUFHO1FBQUNDLFNBQVMsRUFBRVgsbUZBQXFCO1FBQUVhLE9BQU8sRUFBRUwsU0FBUzs7MEJBQ3ZELDhEQUFDTSxLQUFHO2dCQUFDSCxTQUFTLEVBQUVYLDBFQUFZO2dCQUFFZSxHQUFHLEVBQUVWLEtBQUs7Ozs7O3FCQUFHOzBCQUMzQyw4REFBQ1csR0FBQztnQkFBQ0wsU0FBUyxFQUFFWCwwRUFBWTswQkFBRSxvQkFBa0I7Ozs7O3FCQUFJOzBCQUNsRCw4REFBQ0QsdURBQWlCO2dCQUFDWSxTQUFTLEVBQUVYLHlFQUFXOzs7OztxQkFBRzs7Ozs7O2FBQ3hDLENBQ1A7Q0FDRjtHQWxCS0UsY0FBYzs7UUFFRkQsZ0VBQVU7OztBQUZ0QkMsS0FBQUEsY0FBYztBQW9CcEIsK0RBQWVBLGNBQWMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9JbWFnZVNlbGVjdG9yL0ltYWdlU2VsZWN0b3IxLmpzP2I4OWEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0ICogYXMgSWNvbiBmcm9tICdyZWFjdC1mZWF0aGVyJztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0ltYWdlU2VsZWN0b3IxLm1vZHVsZS5zY3NzJztcclxuaW1wb3J0IHsgdXNlU3RvcmFnZSB9IGZyb20gJ3NyYy9ob29rcy9TdG9yYWdlQ29udGV4dCc7XHJcblxyXG5jb25zdCBJbWFnZVNlbGVjdG9yMSA9ICh7b25DaGFuZ2V9KT0+IHtcclxuICBjb25zdCBbaW1hZ2UsIHNldEltYWdlXSA9IFJlYWN0LnVzZVN0YXRlKFwiL2ltYWdlcy91c2VyMS5zdmdcIik7XHJcbiAgY29uc3Qgc3RvcmFnZSA9IHVzZVN0b3JhZ2UoKTtcclxuXHJcbiAgY29uc3QgbG9hZEltYWdlID0gKCk9PiB7XHJcbiAgICBzdG9yYWdlLmxvYWRJbWFnZSgoaW1hZ2UpPT4ge1xyXG4gICAgICBzZXRJbWFnZShpbWFnZSk7XHJcbiAgICAgIG9uQ2hhbmdlKGltYWdlLmJsb2IpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbWFnZV9zZWxlY3Rvcn0gb25DbGljaz17bG9hZEltYWdlfT5cclxuICAgICAgPGltZyBjbGFzc05hbWU9e3N0eWxlcy5pbWFnZX0gc3JjPXtpbWFnZX0vPlxyXG4gICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5sYWJlbH0+U2VsZWNjaW9uYXIgaW1hZ2VuPC9wPlxyXG4gICAgICA8SWNvbi5DaGV2cm9uUmlnaHQgY2xhc3NOYW1lPXtzdHlsZXMuaWNvbn0vPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbWFnZVNlbGVjdG9yMTsiXSwibmFtZXMiOlsiUmVhY3QiLCJJY29uIiwic3R5bGVzIiwidXNlU3RvcmFnZSIsIkltYWdlU2VsZWN0b3IxIiwib25DaGFuZ2UiLCJ1c2VTdGF0ZSIsImltYWdlIiwic2V0SW1hZ2UiLCJzdG9yYWdlIiwibG9hZEltYWdlIiwiYmxvYiIsImRpdiIsImNsYXNzTmFtZSIsImltYWdlX3NlbGVjdG9yIiwib25DbGljayIsImltZyIsInNyYyIsInAiLCJsYWJlbCIsIkNoZXZyb25SaWdodCIsImljb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/ImageSelector/ImageSelector1.js\n"));

/***/ })

});