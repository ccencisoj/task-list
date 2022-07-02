"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 5269:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AP": () => (/* binding */ DELETE_TASK),
/* harmony export */   "N_": () => (/* binding */ LOAD_TASK_LIST),
/* harmony export */   "go": () => (/* binding */ UPDATE_TASK),
/* harmony export */   "tP": () => (/* binding */ ADD_TASK)
/* harmony export */ });
const LOAD_TASK_LIST = "LOAD_TASK_LIST";
const ADD_TASK = "ADD_TASK";
const DELETE_TASK = "DELETE_TASK";
const UPDATE_TASK = "UPDATE_TASK";


/***/ }),

/***/ 3730:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ useUser),
/* harmony export */   "d": () => (/* binding */ UserProvider)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const UserContext = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createContext({
    email: "",
    username: "",
    profile: {
        image: ""
    }
});
const UserProvider = ({ children  })=>{
    const [state, setState] = react__WEBPACK_IMPORTED_MODULE_1___default().useState({
        email: "bizapro123@gmail.com",
        username: "ccencisoj",
        profile: {
            image: "/images/user1.svg"
        }
    });
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(UserContext.Provider, {
        value: state,
        children: children
    });
};
const useUser = ()=>{
    return react__WEBPACK_IMPORTED_MODULE_1___default().useContext(UserContext);
};



/***/ }),

/***/ 2654:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5935);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_hooks_UserContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3730);
/* harmony import */ var src_hooks_StorageContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9999);
/* harmony import */ var src_hooks_ViewportContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4014);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([src_hooks_StorageContext__WEBPACK_IMPORTED_MODULE_5__]);
src_hooks_StorageContext__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];









const App = ({ Component , pageProps  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_redux__WEBPACK_IMPORTED_MODULE_3__.Provider, {
        store: src_store__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_hooks_ViewportContext__WEBPACK_IMPORTED_MODULE_6__/* .ViewportProvider */ .j, {
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_hooks_StorageContext__WEBPACK_IMPORTED_MODULE_5__/* .StorageProvider */ .X, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_hooks_UserContext__WEBPACK_IMPORTED_MODULE_4__/* .UserProvider */ .d, {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                        ...pageProps
                    })
                })
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5935:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ src_store)
});

;// CONCATENATED MODULE: external "redux"
const external_redux_namespaceObject = require("redux");
;// CONCATENATED MODULE: external "redux-thunk"
const external_redux_thunk_namespaceObject = require("redux-thunk");
var external_redux_thunk_default = /*#__PURE__*/__webpack_require__.n(external_redux_thunk_namespaceObject);
;// CONCATENATED MODULE: ./src/reducers/common.js

const initialState = {};
/* harmony default export */ const common = ((state = initialState, action)=>{
    switch(action.type){
        default:
            return state;
    }
});

;// CONCATENATED MODULE: ./src/utils/list.js
const list = (array)=>{
    const add = (item)=>{
        return [
            ...array,
            item
        ];
    };
    const deleteById = (itemId)=>{
        return array.filter((item)=>!(item.id === itemId));
    };
    const updateById = (itemId, values)=>{
        return array.map((item)=>item.id === itemId ? {
                ...item,
                ...values
            } : item);
    };
    return {
        add,
        deleteById,
        updateById
    };
};
/* harmony default export */ const utils_list = (list);

// EXTERNAL MODULE: ./src/constants/actionTypes.js
var actionTypes = __webpack_require__(5269);
;// CONCATENATED MODULE: ./src/reducers/taskList.js



const taskList_initialState = {
    taskList: [],
    selectedTask: {}
};
/* harmony default export */ const taskList = ((state = taskList_initialState, action)=>{
    switch(action.type){
        case actionTypes/* LOAD_TASK_LIST */.N_:
            return {
                ...state,
                taskList: action.payload.taskList
            };
        case actionTypes/* ADD_TASK */.tP:
            return {
                ...state,
                taskList: utils_list(state.taskList).add(action.payload.task)
            };
        case actionTypes/* DELETE_TASK */.AP:
            return {
                ...state,
                taskList: utils_list(state.taskList).deleteById(action.payload.taskId)
            };
        case actionTypes/* UPDATE_TASK */.go:
            return {
                taskList: utils_list(state.taskList).updateById(action.payload.taskId, action.payload.values)
            };
        default:
            return state;
    }
});

;// CONCATENATED MODULE: ./src/reducer.js



/* harmony default export */ const reducer = ((0,external_redux_namespaceObject.combineReducers)({
    common: common,
    taskList: taskList
}));

;// CONCATENATED MODULE: ./src/store.js



const store = (0,external_redux_namespaceObject.createStore)(reducer, (0,external_redux_namespaceObject.applyMiddleware)((external_redux_thunk_default())));
/* harmony default export */ const src_store = (store);


/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6022:
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 5611:
/***/ ((module) => {

module.exports = import("nanoid");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [14,999], () => (__webpack_exec__(2654)));
module.exports = __webpack_exports__;

})();