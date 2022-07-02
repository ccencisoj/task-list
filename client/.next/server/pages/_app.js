"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

<<<<<<< HEAD
/***/ "./lib/object-to-form-data.js":
/*!************************************!*\
  !*** ./lib/object-to-form-data.js ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nconst { default: axios  } = __webpack_require__(/*! axios */ \"axios\");\nconst objectToFormData = (object)=>{\n    const formData = new FormData();\n    for(const key in object){\n        formData.append(key, object[key]);\n    }\n    return formData;\n};\nmodule.exports = objectToFormData;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvb2JqZWN0LXRvLWZvcm0tZGF0YS5qcy5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUFBLE1BQU0sRUFBRUEsT0FBTyxFQUFFQyxLQUFLLEdBQUUsR0FBR0MsbUJBQU8sQ0FBQyxvQkFBTyxDQUFDO0FBRTNDLE1BQU1DLGdCQUFnQixHQUFHLENBQUNDLE1BQU0sR0FBSTtJQUNsQyxNQUFNQyxRQUFRLEdBQUcsSUFBSUMsUUFBUSxFQUFFO0lBRS9CLElBQUksTUFBTUMsR0FBRyxJQUFJSCxNQUFNLENBQUU7UUFDdkJDLFFBQVEsQ0FBQ0csTUFBTSxDQUFDRCxHQUFHLEVBQUVILE1BQU0sQ0FBQ0csR0FBRyxDQUFDLENBQUMsQ0FBQztLQUNuQztJQUVELE9BQU9GLFFBQVEsQ0FBQztDQUNqQjtBQUVESSxNQUFNLENBQUNDLE9BQU8sR0FBR1AsZ0JBQWdCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9saWIvb2JqZWN0LXRvLWZvcm0tZGF0YS5qcz8wMDgzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgZGVmYXVsdDogYXhpb3MgfSA9IHJlcXVpcmUoXCJheGlvc1wiKTtcclxuXHJcbmNvbnN0IG9iamVjdFRvRm9ybURhdGEgPSAob2JqZWN0KT0+IHtcclxuICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG5cclxuICBmb3IoY29uc3Qga2V5IGluIG9iamVjdCkge1xyXG4gICAgZm9ybURhdGEuYXBwZW5kKGtleSwgb2JqZWN0W2tleV0pO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGZvcm1EYXRhO1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IG9iamVjdFRvRm9ybURhdGE7Il0sIm5hbWVzIjpbImRlZmF1bHQiLCJheGlvcyIsInJlcXVpcmUiLCJvYmplY3RUb0Zvcm1EYXRhIiwib2JqZWN0IiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsImtleSIsImFwcGVuZCIsIm1vZHVsZSIsImV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/object-to-form-data.js\n");

/***/ }),

/***/ "./src/actions.js":
/*!************************!*\
  !*** ./src/actions.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ADD_TASK\": () => (/* binding */ ADD_TASK),\n/* harmony export */   \"DELETE_TASK\": () => (/* binding */ DELETE_TASK),\n/* harmony export */   \"LOAD_TASK_LIST\": () => (/* binding */ LOAD_TASK_LIST),\n/* harmony export */   \"SELECTED_TASK\": () => (/* binding */ SELECTED_TASK),\n/* harmony export */   \"UPDATE_TASK\": () => (/* binding */ UPDATE_TASK),\n/* harmony export */   \"addTask\": () => (/* binding */ addTask),\n/* harmony export */   \"deleteTask\": () => (/* binding */ deleteTask),\n/* harmony export */   \"loadTaskList\": () => (/* binding */ loadTaskList),\n/* harmony export */   \"selectedTask\": () => (/* binding */ selectedTask),\n/* harmony export */   \"updateTask\": () => (/* binding */ updateTask),\n/* harmony export */   \"updateTaskId\": () => (/* binding */ updateTaskId)\n/* harmony export */ });\n// Actions types\nconst LOAD_TASK_LIST = \"LOAD_TASK_LIST\";\nconst ADD_TASK = \"ADD_TASK\";\nconst UPDATE_TASK = \"UPDATE_TASK\";\nconst DELETE_TASK = \"DELETE_TASK\";\nconst SELECTED_TASK = \"SELECTED_TASK\";\n// Actions creators\nconst loadTaskList = (taskList)=>({\n        type: LOAD_TASK_LIST,\n        payload: {\n            taskList\n        }\n    });\nconst addTask = (task)=>({\n        type: ADD_TASK,\n        payload: {\n            task\n        }\n    });\nconst updateTask = (taskId, values)=>({\n        type: UPDATE_TASK,\n        payload: {\n            taskId,\n            values\n        }\n    });\nconst updateTaskId = (taskId, newId)=>({\n        type: UPDATE_TASK,\n        payload: {\n            taskId,\n            values: {\n                id: newId\n            }\n        }\n    });\nconst deleteTask = (taskId)=>({\n        type: DELETE_TASK,\n        payload: {\n            taskId\n        }\n    });\nconst selectedTask = (taskId)=>({\n        type: SELECTED_TASK,\n        payload: {\n            taskId\n        }\n    });\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYWN0aW9ucy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLGdCQUFnQjtBQUNULE1BQU1BLGNBQWMsR0FBRyxnQkFBZ0IsQ0FBQztBQUN4QyxNQUFNQyxRQUFRLEdBQUcsVUFBVSxDQUFDO0FBQzVCLE1BQU1DLFdBQVcsR0FBRyxhQUFhLENBQUM7QUFDbEMsTUFBTUMsV0FBVyxHQUFHLGFBQWEsQ0FBQztBQUNsQyxNQUFNQyxhQUFhLEdBQUcsZUFBZSxDQUFDO0FBRTdDLG1CQUFtQjtBQUNaLE1BQU1DLFlBQVksR0FBRyxDQUFDQyxRQUFRLEdBQUksQ0FBQztRQUN4Q0MsSUFBSSxFQUFFUCxjQUFjO1FBQ3BCUSxPQUFPLEVBQUU7WUFBQ0YsUUFBUTtTQUFDO0tBQ3BCLENBQUMsQ0FBQztBQUVJLE1BQU1HLE9BQU8sR0FBRyxDQUFDQyxJQUFJLEdBQUksQ0FBQztRQUMvQkgsSUFBSSxFQUFFTixRQUFRO1FBQ2RPLE9BQU8sRUFBRTtZQUFDRSxJQUFJO1NBQUM7S0FDaEIsQ0FBQyxDQUFDO0FBRUksTUFBTUMsVUFBVSxHQUFHLENBQUNDLE1BQU0sRUFBRUMsTUFBTSxHQUFJLENBQUM7UUFDNUNOLElBQUksRUFBRUwsV0FBVztRQUNqQk0sT0FBTyxFQUFFO1lBQUNJLE1BQU07WUFBRUMsTUFBTTtTQUFDO0tBQzFCLENBQUMsQ0FBQztBQUVJLE1BQU1DLFlBQVksR0FBRyxDQUFDRixNQUFNLEVBQUVHLEtBQUssR0FBSSxDQUFDO1FBQzdDUixJQUFJLEVBQUVMLFdBQVc7UUFDakJNLE9BQU8sRUFBRTtZQUFDSSxNQUFNO1lBQUVDLE1BQU0sRUFBRTtnQkFBQ0csRUFBRSxFQUFFRCxLQUFLO2FBQUM7U0FBQztLQUN2QyxDQUFDLENBQUM7QUFFSSxNQUFNRSxVQUFVLEdBQUcsQ0FBQ0wsTUFBTSxHQUFJLENBQUM7UUFDcENMLElBQUksRUFBRUosV0FBVztRQUNqQkssT0FBTyxFQUFFO1lBQUNJLE1BQU07U0FBQztLQUNsQixDQUFDLENBQUM7QUFFSSxNQUFNTSxZQUFZLEdBQUcsQ0FBQ04sTUFBTSxHQUFJLENBQUM7UUFDdENMLElBQUksRUFBRUgsYUFBYTtRQUNuQkksT0FBTyxFQUFFO1lBQUNJLE1BQU07U0FBQztLQUNsQixDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9zcmMvYWN0aW9ucy5qcz8wYWY5Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIEFjdGlvbnMgdHlwZXNcclxuZXhwb3J0IGNvbnN0IExPQURfVEFTS19MSVNUID0gXCJMT0FEX1RBU0tfTElTVFwiO1xyXG5leHBvcnQgY29uc3QgQUREX1RBU0sgPSBcIkFERF9UQVNLXCI7XHJcbmV4cG9ydCBjb25zdCBVUERBVEVfVEFTSyA9IFwiVVBEQVRFX1RBU0tcIjtcclxuZXhwb3J0IGNvbnN0IERFTEVURV9UQVNLID0gXCJERUxFVEVfVEFTS1wiO1xyXG5leHBvcnQgY29uc3QgU0VMRUNURURfVEFTSyA9IFwiU0VMRUNURURfVEFTS1wiO1xyXG5cclxuLy8gQWN0aW9ucyBjcmVhdG9yc1xyXG5leHBvcnQgY29uc3QgbG9hZFRhc2tMaXN0ID0gKHRhc2tMaXN0KT0+ICh7XHJcbiAgdHlwZTogTE9BRF9UQVNLX0xJU1QsXHJcbiAgcGF5bG9hZDoge3Rhc2tMaXN0fVxyXG59KTsgXHJcblxyXG5leHBvcnQgY29uc3QgYWRkVGFzayA9ICh0YXNrKT0+ICh7IFxyXG4gIHR5cGU6IEFERF9UQVNLLFxyXG4gIHBheWxvYWQ6IHt0YXNrfVxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCB1cGRhdGVUYXNrID0gKHRhc2tJZCwgdmFsdWVzKT0+ICh7XHJcbiAgdHlwZTogVVBEQVRFX1RBU0ssXHJcbiAgcGF5bG9hZDoge3Rhc2tJZCwgdmFsdWVzfVxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCB1cGRhdGVUYXNrSWQgPSAodGFza0lkLCBuZXdJZCk9PiAoe1xyXG4gIHR5cGU6IFVQREFURV9UQVNLLFxyXG4gIHBheWxvYWQ6IHt0YXNrSWQsIHZhbHVlczoge2lkOiBuZXdJZH19XHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGRlbGV0ZVRhc2sgPSAodGFza0lkKT0+ICh7XHJcbiAgdHlwZTogREVMRVRFX1RBU0ssXHJcbiAgcGF5bG9hZDoge3Rhc2tJZH1cclxufSk7XHJcblxyXG5leHBvcnQgY29uc3Qgc2VsZWN0ZWRUYXNrID0gKHRhc2tJZCk9PiAoe1xyXG4gIHR5cGU6IFNFTEVDVEVEX1RBU0ssXHJcbiAgcGF5bG9hZDoge3Rhc2tJZH1cclxufSk7Il0sIm5hbWVzIjpbIkxPQURfVEFTS19MSVNUIiwiQUREX1RBU0siLCJVUERBVEVfVEFTSyIsIkRFTEVURV9UQVNLIiwiU0VMRUNURURfVEFTSyIsImxvYWRUYXNrTGlzdCIsInRhc2tMaXN0IiwidHlwZSIsInBheWxvYWQiLCJhZGRUYXNrIiwidGFzayIsInVwZGF0ZVRhc2siLCJ0YXNrSWQiLCJ2YWx1ZXMiLCJ1cGRhdGVUYXNrSWQiLCJuZXdJZCIsImlkIiwiZGVsZXRlVGFzayIsInNlbGVjdGVkVGFzayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/actions.js\n");

/***/ }),

/***/ "./src/agent.js":
/*!**********************!*\
  !*** ./src/agent.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var lib_object_to_form_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lib/object-to-form-data */ \"./lib/object-to-form-data.js\");\n/* harmony import */ var lib_object_to_form_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lib_object_to_form_data__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst axios = axios__WEBPACK_IMPORTED_MODULE_0___default().create({\n    withCredentials: true\n});\nconst API_ROOT = \"http://192.168.100.6:4000\";\nconst requests = {\n    get: (url, config)=>axios.get(`${API_ROOT}${url}`, config),\n    post: (url, data, config)=>axios.post(`${API_ROOT}${url}`, data, config),\n    postFormData: (url, data, config)=>axios.post(`${API_ROOT}${url}`, lib_object_to_form_data__WEBPACK_IMPORTED_MODULE_1___default()(data), {\n            ...config,\n            headers: {\n                \"Content-Type\": \"multipart/form-data\"\n            }\n        }),\n    put: (url, data, config)=>axios.put(`${API_ROOT}${url}`, data, config),\n    delete: (url, config)=>axios.delete(`${API_ROOT}${url}`, config)\n};\nconst User = {\n    signUp: ({ image , username , email , password  })=>requests.post(\"/user/signUp\", {\n            image,\n            username,\n            email,\n            password\n        }),\n    signIn: ({ email , password  })=>requests.post(\"/user/signIn\", {\n            email,\n            password\n        }),\n    signOut: (config)=>requests.get(\"/user/signOut\", config),\n    current: (config)=>requests.get(\"/user/current\", config)\n};\nconst Task = {\n    get: (taskId)=>requests.get(`/task?id=${taskId}`),\n    all: ()=>requests.get(\"/task/all\"),\n    create: ({ title , description , state  })=>requests.post(\"/task/create\", {\n            title,\n            description,\n            state\n        }),\n    update: (taskId, newValues)=>requests.put(`/task?id=${taskId}`, newValues),\n    delete: (taskId)=>requests.delete(`/task?id=${taskId}`)\n};\nconst Temp = {\n    image: (image)=>requests.postFormData(\"/temp/image\", {\n            image\n        })\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n    User,\n    Task,\n    Temp\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBQyxDQUFDLFNBQVMsRUFBRVksTUFBTSxDQUFDLENBQUMsRUFBRU0sU0FBUyxDQUFDO0lBQy9DakIsTUFBTSxFQUFFLENBQUNXLE1BQU0sR0FDYnBCLFFBQVEsQ0FBQ1MsTUFBTSxDQUFDLENBQUMsU0FBUyxFQUFFVyxNQUFNLENBQUMsQ0FBQyxDQUFDO0NBQ3hDO0FBRUQsTUFBTU8sSUFBSSxHQUFHO0lBQ1hmLEtBQUssRUFBRSxDQUFDQSxLQUFLLEdBQ1haLFFBQVEsQ0FBQ00sWUFBWSxDQUFDLGFBQWEsRUFBRTtZQUFDTSxLQUFLO1NBQUMsQ0FBQztDQUNoRDtBQUVELGlFQUFlO0lBQ2JGLElBQUk7SUFDSlMsSUFBSTtJQUNKUSxJQUFJO0NBQ0wsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NsaWVudC8uL3NyYy9hZ2VudC5qcz9lYTY4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBfYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgb2JqZWN0VG9Gb3JtRGF0YSBmcm9tICdsaWIvb2JqZWN0LXRvLWZvcm0tZGF0YSc7XHJcblxyXG5jb25zdCBheGlvcyA9IF9heGlvcy5jcmVhdGUoe1xyXG4gIHdpdGhDcmVkZW50aWFsczogdHJ1ZVxyXG59KTsgXHJcblxyXG5jb25zdCBBUElfUk9PVCA9IFwiaHR0cDovLzE5Mi4xNjguMTAwLjY6NDAwMFwiO1xyXG5cclxuY29uc3QgcmVxdWVzdHMgPSB7XHJcbiAgZ2V0OiAodXJsLCBjb25maWcpPT4gXHJcbiAgICBheGlvcy5nZXQoYCR7QVBJX1JPT1R9JHt1cmx9YCwgY29uZmlnKSxcclxuICBwb3N0OiAodXJsLCBkYXRhLCBjb25maWcpPT5cclxuICAgIGF4aW9zLnBvc3QoYCR7QVBJX1JPT1R9JHt1cmx9YCwgZGF0YSwgY29uZmlnKSxcclxuICBwb3N0Rm9ybURhdGE6ICh1cmwsIGRhdGEsIGNvbmZpZyk9PlxyXG4gICAgYXhpb3MucG9zdChgJHtBUElfUk9PVH0ke3VybH1gLCBvYmplY3RUb0Zvcm1EYXRhKGRhdGEpLCB7XHJcbiAgICAgIC4uLmNvbmZpZywgaGVhZGVyczoge1wiQ29udGVudC1UeXBlXCI6IFwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwifX0pLFxyXG4gIHB1dDogKHVybCwgZGF0YSwgY29uZmlnKT0+XHJcbiAgICBheGlvcy5wdXQoYCR7QVBJX1JPT1R9JHt1cmx9YCwgZGF0YSwgY29uZmlnKSxcclxuICBkZWxldGU6ICh1cmwsIGNvbmZpZyk9PlxyXG4gICAgYXhpb3MuZGVsZXRlKGAke0FQSV9ST09UfSR7dXJsfWAsIGNvbmZpZylcclxufTtcclxuXHJcbmNvbnN0IFVzZXIgPSB7XHJcbiAgc2lnblVwOiAoe2ltYWdlLCB1c2VybmFtZSwgZW1haWwsIHBhc3N3b3JkfSk9PlxyXG4gICAgcmVxdWVzdHMucG9zdChcIi91c2VyL3NpZ25VcFwiLCB7aW1hZ2UsIHVzZXJuYW1lLCBlbWFpbCwgcGFzc3dvcmR9KSxcclxuICBzaWduSW46ICh7ZW1haWwsIHBhc3N3b3JkfSk9PlxyXG4gICAgcmVxdWVzdHMucG9zdChcIi91c2VyL3NpZ25JblwiLCB7ZW1haWwsIHBhc3N3b3JkfSksXHJcbiAgc2lnbk91dDogKGNvbmZpZyk9PiBcclxuICAgIHJlcXVlc3RzLmdldChcIi91c2VyL3NpZ25PdXRcIiwgY29uZmlnKSxcclxuICBjdXJyZW50OiAoY29uZmlnKT0+XHJcbiAgICByZXF1ZXN0cy5nZXQoXCIvdXNlci9jdXJyZW50XCIsIGNvbmZpZylcclxufTtcclxuXHJcbmNvbnN0IFRhc2sgPSB7XHJcbiAgZ2V0OiAodGFza0lkKT0+XHJcbiAgICByZXF1ZXN0cy5nZXQoYC90YXNrP2lkPSR7dGFza0lkfWApLFxyXG4gIGFsbDogKCk9PlxyXG4gICAgcmVxdWVzdHMuZ2V0KFwiL3Rhc2svYWxsXCIpLFxyXG4gIGNyZWF0ZTogKHt0aXRsZSwgZGVzY3JpcHRpb24sIHN0YXRlfSk9PlxyXG4gICAgcmVxdWVzdHMucG9zdChcIi90YXNrL2NyZWF0ZVwiLCB7dGl0bGUsIGRlc2NyaXB0aW9uLCBzdGF0ZX0pLFxyXG4gIHVwZGF0ZTogKHRhc2tJZCwgbmV3VmFsdWVzKT0+XHJcbiAgICByZXF1ZXN0cy5wdXQoYC90YXNrP2lkPSR7dGFza0lkfWAsIG5ld1ZhbHVlcyksXHJcbiAgZGVsZXRlOiAodGFza0lkKT0+XHJcbiAgICByZXF1ZXN0cy5kZWxldGUoYC90YXNrP2lkPSR7dGFza0lkfWApXHJcbn07XHJcblxyXG5jb25zdCBUZW1wID0ge1xyXG4gIGltYWdlOiAoaW1hZ2UpPT5cclxuICAgIHJlcXVlc3RzLnBvc3RGb3JtRGF0YShcIi90ZW1wL2ltYWdlXCIsIHtpbWFnZX0pXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgVXNlcixcclxuICBUYXNrLFxyXG4gIFRlbXBcclxufTsiXSwibmFtZXMiOlsiX2F4aW9zIiwib2JqZWN0VG9Gb3JtRGF0YSIsImF4aW9zIiwiY3JlYXRlIiwid2l0aENyZWRlbnRpYWxzIiwiQVBJX1JPT1QiLCJyZXF1ZXN0cyIsImdldCIsInVybCIsImNvbmZpZyIsInBvc3QiLCJkYXRhIiwicG9zdEZvcm1EYXRhIiwiaGVhZGVycyIsInB1dCIsImRlbGV0ZSIsIlVzZXIiLCJzaWduVXAiLCJpbWFnZSIsInVzZXJuYW1lIiwiZW1haWwiLCJwYXNzd29yZCIsInNpZ25JbiIsInNpZ25PdXQiLCJjdXJyZW50IiwiVGFzayIsInRhc2tJZCIsImFsbCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJzdGF0ZSIsInVwZGF0ZSIsIm5ld1ZhbHVlcyIsIlRlbXAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/agent.js\n");
=======
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


>>>>>>> 071a6edb5e6a2c5952b0c0d5b5117168a4bc2ad2

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

<<<<<<< HEAD
"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"UserProvider\": () => (/* binding */ UserProvider),\n/* harmony export */   \"useUser\": () => (/* binding */ useUser)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var src_agent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/agent */ \"./src/agent.js\");\n\n\n\nconst UserContext = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createContext({\n    email: \"\",\n    image: \"\",\n    username: \"\"\n});\nconst UserProvider = ({ children  })=>{\n    const [state, setState] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(null);\n    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{\n        src_agent__WEBPACK_IMPORTED_MODULE_2__[\"default\"].User.current().then((response)=>{\n            const user = response.data.user;\n            if (user) {\n                setState({\n                    email: user.email,\n                    image: user.image,\n                    username: user.username\n                });\n            }\n        });\n    }, [\n        children\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(UserContext.Provider, {\n        value: state,\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\cristian\\\\Desktop\\\\Code\\\\Web\\\\Projects\\\\task-list\\\\client\\\\src\\\\hooks\\\\UserContext.js\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, undefined);\n};\nconst useUser = ()=>{\n    return react__WEBPACK_IMPORTED_MODULE_1___default().useContext(UserContext);\n};\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaG9va3MvVXNlckNvbnRleHQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQTBCO0FBQ0k7QUFFOUIsTUFBTUUsV0FBVyxpQkFBR0YsMERBQW1CLENBQUM7SUFDdENJLEtBQUssRUFBRSxFQUFFO0lBQ1RDLEtBQUssRUFBRSxFQUFFO0lBQ1RDLFFBQVEsRUFBRSxFQUFFO0NBQ2IsQ0FBQztBQUVGLE1BQU1DLFlBQVksR0FBRyxDQUFDLEVBQUNDLFFBQVEsR0FBQyxHQUFJO0lBQ2xDLE1BQU0sQ0FBQ0MsS0FBSyxFQUFFQyxRQUFRLENBQUMsR0FBR1YscURBQWMsQ0FBQyxJQUFJLENBQUM7SUFFOUNBLHNEQUFlLENBQUMsSUFBSztRQUNuQkMsOERBQWtCLEVBQUUsQ0FBQ2MsSUFBSSxDQUFDLENBQUNDLFFBQVEsR0FBSTtZQUNyQyxNQUFNQyxJQUFJLEdBQUdELFFBQVEsQ0FBQ0UsSUFBSSxDQUFDRCxJQUFJO1lBRS9CLElBQUdBLElBQUksRUFBRTtnQkFDUFAsUUFBUSxDQUFDO29CQUNQTixLQUFLLEVBQUVhLElBQUksQ0FBQ2IsS0FBSztvQkFDakJDLEtBQUssRUFBRVksSUFBSSxDQUFDWixLQUFLO29CQUNqQkMsUUFBUSxFQUFFVyxJQUFJLENBQUNYLFFBQVE7aUJBQ3hCLENBQUMsQ0FBQzthQUNKO1NBQ0YsQ0FBQyxDQUFDO0tBQ0osRUFBRTtRQUFDRSxRQUFRO0tBQUMsQ0FBQyxDQUFDO0lBRWYscUJBQ0UsOERBQUNOLFdBQVcsQ0FBQ2lCLFFBQVE7UUFBQ0MsS0FBSyxFQUFFWCxLQUFLO2tCQUMvQkQsUUFBUTs7Ozs7aUJBQ1ksQ0FDeEI7Q0FDRjtBQUVELE1BQU1hLE9BQU8sR0FBRyxJQUFLO0lBQ25CLE9BQU9yQix1REFBZ0IsQ0FBQ0UsV0FBVyxDQUFDLENBQUM7Q0FDdEM7QUFFZ0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9zcmMvaG9va3MvVXNlckNvbnRleHQuanM/Zjk4MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgYWdlbnQgZnJvbSAnc3JjL2FnZW50JztcclxuXHJcbmNvbnN0IFVzZXJDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dCh7XHJcbiAgZW1haWw6IFwiXCIsXHJcbiAgaW1hZ2U6IFwiXCIsXHJcbiAgdXNlcm5hbWU6IFwiXCJcclxufSk7XHJcblxyXG5jb25zdCBVc2VyUHJvdmlkZXIgPSAoe2NoaWxkcmVufSk9PiB7XHJcbiAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSBSZWFjdC51c2VTdGF0ZShudWxsKTtcclxuXHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpPT4ge1xyXG4gICAgYWdlbnQuVXNlci5jdXJyZW50KCkudGhlbigocmVzcG9uc2UpPT4ge1xyXG4gICAgICBjb25zdCB1c2VyID0gcmVzcG9uc2UuZGF0YS51c2VyO1xyXG4gICAgICBcclxuICAgICAgaWYodXNlcikge1xyXG4gICAgICAgIHNldFN0YXRlKHtcclxuICAgICAgICAgIGVtYWlsOiB1c2VyLmVtYWlsLCBcclxuICAgICAgICAgIGltYWdlOiB1c2VyLmltYWdlLFxyXG4gICAgICAgICAgdXNlcm5hbWU6IHVzZXIudXNlcm5hbWVcclxuICAgICAgICB9KTtcclxuICAgICAgfSBcclxuICAgIH0pO1xyXG4gIH0sIFtjaGlsZHJlbl0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFVzZXJDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtzdGF0ZX0+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvVXNlckNvbnRleHQuUHJvdmlkZXI+XHJcbiAgKVxyXG59XHJcblxyXG5jb25zdCB1c2VVc2VyID0gKCk9PiB7XHJcbiAgcmV0dXJuIFJlYWN0LnVzZUNvbnRleHQoVXNlckNvbnRleHQpO1xyXG59XHJcblxyXG5leHBvcnQgeyBVc2VyUHJvdmlkZXIsIHVzZVVzZXIgfTsiXSwibmFtZXMiOlsiUmVhY3QiLCJhZ2VudCIsIlVzZXJDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsImVtYWlsIiwiaW1hZ2UiLCJ1c2VybmFtZSIsIlVzZXJQcm92aWRlciIsImNoaWxkcmVuIiwic3RhdGUiLCJzZXRTdGF0ZSIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiVXNlciIsImN1cnJlbnQiLCJ0aGVuIiwicmVzcG9uc2UiLCJ1c2VyIiwiZGF0YSIsIlByb3ZpZGVyIiwidmFsdWUiLCJ1c2VVc2VyIiwidXNlQ29udGV4dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/hooks/UserContext.js\n");
=======
>>>>>>> 071a6edb5e6a2c5952b0c0d5b5117168a4bc2ad2

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

<<<<<<< HEAD
"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ViewportProvider\": () => (/* binding */ ViewportProvider),\n/* harmony export */   \"useViewport\": () => (/* binding */ useViewport)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst ViewportContext = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createContext({\n    viewportWidth: null,\n    viewportHeight: null,\n    isDesktop: false,\n    isTablet: false,\n    isMobile: false,\n    windowWidth: null,\n    windowHeight: null,\n    isDesktopWindow: null,\n    isTabletWindow: null,\n    isMobileWindow: null\n});\nconst ViewportProvider = ({ children  })=>{\n    const [value, setValue] = react__WEBPACK_IMPORTED_MODULE_1___default().useState({\n        viewportWidth: null,\n        viewportHeight: null,\n        isDesktop: false,\n        isTablet: false,\n        isMobile: false,\n        windowWidth: null,\n        windowHeight: null,\n        isDesktopWindow: null,\n        isTabletWindow: null,\n        isMobileWindow: null\n    });\n    const wrapperRef = react__WEBPACK_IMPORTED_MODULE_1___default().useRef();\n    const updateViewport = ()=>{\n        const wrapper = wrapperRef.current;\n        const rect = wrapper.getBoundingClientRect();\n        setValue({\n            viewportWidth: rect.width,\n            viewportHeight: rect.height,\n            isMobile: rect.width <= 640,\n            isDesktop: rect.width >= 1024,\n            isTablet: rect.width > 640 && rect.width < 1024,\n            windowWidth: window.innerWidth,\n            windowHeight: window.innerHeight,\n            isMobileWindow: window.innerWidth <= 640,\n            isDesktopWindow: window.innerWidth >= 1024,\n            isTabletWindow: window.innerWidth > 640 && window.innerWidth < 1024\n        });\n    };\n    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{\n        updateViewport();\n        window.addEventListener(\"resize\", updateViewport);\n        return ()=>window.removeEventListener(\"resize\", updateViewport);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ViewportContext.Provider, {\n        value: value,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            ref: wrapperRef,\n            style: {\n                width: \"100%\"\n            },\n            children: children\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\cristian\\\\Desktop\\\\Code\\\\Web\\\\Projects\\\\task-list\\\\client\\\\src\\\\hooks\\\\ViewportContext.js\",\n            lineNumber: 58,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\cristian\\\\Desktop\\\\Code\\\\Web\\\\Projects\\\\task-list\\\\client\\\\src\\\\hooks\\\\ViewportContext.js\",\n        lineNumber: 57,\n        columnNumber: 5\n    }, undefined);\n};\nconst useViewport = ()=>{\n    return react__WEBPACK_IMPORTED_MODULE_1___default().useContext(ViewportContext);\n};\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBQztDQUMxQztBQUV3QyIsInNvdXJjZXMiOlsid2VicGFjazovL2NsaWVudC8uL3NyYy9ob29rcy9WaWV3cG9ydENvbnRleHQuanM/M2E0YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgVmlld3BvcnRDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dCh7XHJcbiAgdmlld3BvcnRXaWR0aDogbnVsbCxcclxuICB2aWV3cG9ydEhlaWdodDogbnVsbCxcclxuICBpc0Rlc2t0b3A6IGZhbHNlLFxyXG4gIGlzVGFibGV0OiBmYWxzZSxcclxuICBpc01vYmlsZTogZmFsc2UsXHJcbiAgd2luZG93V2lkdGg6IG51bGwsXHJcbiAgd2luZG93SGVpZ2h0OiBudWxsLFxyXG4gIGlzRGVza3RvcFdpbmRvdzogbnVsbCxcclxuICBpc1RhYmxldFdpbmRvdzogbnVsbCxcclxuICBpc01vYmlsZVdpbmRvdzogbnVsbFxyXG59KTtcclxuXHJcbmNvbnN0IFZpZXdwb3J0UHJvdmlkZXIgPSAoe2NoaWxkcmVufSk9PiB7XHJcbiAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSBSZWFjdC51c2VTdGF0ZSh7XHJcbiAgICB2aWV3cG9ydFdpZHRoOiBudWxsLFxyXG4gICAgdmlld3BvcnRIZWlnaHQ6IG51bGwsXHJcbiAgICBpc0Rlc2t0b3A6IGZhbHNlLFxyXG4gICAgaXNUYWJsZXQ6IGZhbHNlLFxyXG4gICAgaXNNb2JpbGU6IGZhbHNlLFxyXG4gICAgd2luZG93V2lkdGg6IG51bGwsXHJcbiAgICB3aW5kb3dIZWlnaHQ6IG51bGwsXHJcbiAgICBpc0Rlc2t0b3BXaW5kb3c6IG51bGwsXHJcbiAgICBpc1RhYmxldFdpbmRvdzogbnVsbCxcclxuICAgIGlzTW9iaWxlV2luZG93OiBudWxsXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IHdyYXBwZXJSZWYgPSBSZWFjdC51c2VSZWYoKTtcclxuXHJcbiAgY29uc3QgdXBkYXRlVmlld3BvcnQgPSAoKT0+IHtcclxuICAgIGNvbnN0IHdyYXBwZXIgPSB3cmFwcGVyUmVmLmN1cnJlbnQ7XHJcbiAgICBjb25zdCByZWN0ID0gd3JhcHBlci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuXHJcbiAgICBzZXRWYWx1ZSh7XHJcbiAgICAgIHZpZXdwb3J0V2lkdGg6IHJlY3Qud2lkdGgsXHJcbiAgICAgIHZpZXdwb3J0SGVpZ2h0OiByZWN0LmhlaWdodCxcclxuICAgICAgaXNNb2JpbGU6IHJlY3Qud2lkdGggPD0gNjQwLFxyXG4gICAgICBpc0Rlc2t0b3A6IHJlY3Qud2lkdGggPj0gMTAyNCxcclxuICAgICAgaXNUYWJsZXQ6IHJlY3Qud2lkdGggPiA2NDAgJiYgcmVjdC53aWR0aCA8IDEwMjQsXHJcbiAgICAgIHdpbmRvd1dpZHRoOiB3aW5kb3cuaW5uZXJXaWR0aCxcclxuICAgICAgd2luZG93SGVpZ2h0OiB3aW5kb3cuaW5uZXJIZWlnaHQsXHJcbiAgICAgIGlzTW9iaWxlV2luZG93OiB3aW5kb3cuaW5uZXJXaWR0aCA8PSA2NDAsXHJcbiAgICAgIGlzRGVza3RvcFdpbmRvdzogd2luZG93LmlubmVyV2lkdGggPj0gMTAyNCxcclxuICAgICAgaXNUYWJsZXRXaW5kb3c6IHdpbmRvdy5pbm5lcldpZHRoID4gNjQwICYmIHdpbmRvdy5pbm5lcldpZHRoIDwgMTAyNCxcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpPT4ge1xyXG4gICAgdXBkYXRlVmlld3BvcnQoKTtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHVwZGF0ZVZpZXdwb3J0KTtcclxuICAgIHJldHVybiAoKT0+IHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHVwZGF0ZVZpZXdwb3J0KTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Vmlld3BvcnRDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt2YWx1ZX0+XHJcbiAgICAgIDxkaXYgcmVmPXt3cmFwcGVyUmVmfSBzdHlsZT17e3dpZHRoOiBcIjEwMCVcIn19PntjaGlsZHJlbn08L2Rpdj5cclxuICAgIDwvVmlld3BvcnRDb250ZXh0LlByb3ZpZGVyPlxyXG4gIClcclxufSBcclxuXHJcbmNvbnN0IHVzZVZpZXdwb3J0ID0gKCk9PiB7XHJcbiAgcmV0dXJuIFJlYWN0LnVzZUNvbnRleHQoVmlld3BvcnRDb250ZXh0KTtcclxufVxyXG5cclxuZXhwb3J0IHsgVmlld3BvcnRQcm92aWRlciwgdXNlVmlld3BvcnQgfTsiXSwibmFtZXMiOlsiUmVhY3QiLCJWaWV3cG9ydENvbnRleHQiLCJjcmVhdGVDb250ZXh0Iiwidmlld3BvcnRXaWR0aCIsInZpZXdwb3J0SGVpZ2h0IiwiaXNEZXNrdG9wIiwiaXNUYWJsZXQiLCJpc01vYmlsZSIsIndpbmRvd1dpZHRoIiwid2luZG93SGVpZ2h0IiwiaXNEZXNrdG9wV2luZG93IiwiaXNUYWJsZXRXaW5kb3ciLCJpc01vYmlsZVdpbmRvdyIsIlZpZXdwb3J0UHJvdmlkZXIiLCJjaGlsZHJlbiIsInZhbHVlIiwic2V0VmFsdWUiLCJ1c2VTdGF0ZSIsIndyYXBwZXJSZWYiLCJ1c2VSZWYiLCJ1cGRhdGVWaWV3cG9ydCIsIndyYXBwZXIiLCJjdXJyZW50IiwicmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsIndpZHRoIiwiaGVpZ2h0Iiwid2luZG93IiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0IiwidXNlRWZmZWN0IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJQcm92aWRlciIsImRpdiIsInJlZiIsInN0eWxlIiwidXNlVmlld3BvcnQiLCJ1c2VDb250ZXh0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/hooks/ViewportContext.js\n");
=======
const initialState = {};
/* harmony default export */ const common = ((state = initialState, action)=>{
    switch(action.type){
        default:
            return state;
    }
});
>>>>>>> 071a6edb5e6a2c5952b0c0d5b5117168a4bc2ad2

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



<<<<<<< HEAD
"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var src_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/actions */ \"./src/actions.js\");\n\nconst initialState = {};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((state = initialState, action)=>{\n    switch(action.type){\n        default:\n            return state;\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcmVkdWNlcnMvY29tbW9uLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQStCO0FBRS9CLE1BQU1BLFlBQVksR0FBRyxFQUFFO0FBRXZCLGlFQUFlLENBQUNDLEtBQUssR0FBQ0QsWUFBWSxFQUFFRSxNQUFNLEdBQUk7SUFDNUMsT0FBUUEsTUFBTSxDQUFDQyxJQUFJO1FBQ2pCO1lBQ0UsT0FBT0YsS0FBSyxDQUFDO0tBQ2hCO0NBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9zcmMvcmVkdWNlcnMvY29tbW9uLmpzPzZkOGUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgIH0gZnJvbSAnc3JjL2FjdGlvbnMnO1xyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlID0ge307XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoc3RhdGU9aW5pdGlhbFN0YXRlLCBhY3Rpb24pPT4ge1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiBzdGF0ZTtcclxuICB9XHJcbn0iXSwibmFtZXMiOlsiaW5pdGlhbFN0YXRlIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/reducers/common.js\n");
=======
/* harmony default export */ const reducer = ((0,external_redux_namespaceObject.combineReducers)({
    common: common,
    taskList: taskList
}));
>>>>>>> 071a6edb5e6a2c5952b0c0d5b5117168a4bc2ad2

;// CONCATENATED MODULE: ./src/store.js


<<<<<<< HEAD
"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var src_utils_list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/utils/list */ \"./src/utils/list.js\");\n/* harmony import */ var src_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/actions */ \"./src/actions.js\");\n\n\nconst initialState = {\n    taskList: [],\n    selectedTask: {\n        title: \"\",\n        state: \"\",\n        description: \"\"\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((state = initialState, action)=>{\n    switch(action.type){\n        case src_actions__WEBPACK_IMPORTED_MODULE_1__.LOAD_TASK_LIST:\n            return {\n                ...state,\n                taskList: action.payload.taskList\n            };\n        case src_actions__WEBPACK_IMPORTED_MODULE_1__.ADD_TASK:\n            return {\n                ...state,\n                taskList: (0,src_utils_list__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(state.taskList).add({\n                    ...action.payload.task,\n                    deleted: false\n                })\n            };\n        case src_actions__WEBPACK_IMPORTED_MODULE_1__.DELETE_TASK:\n            return {\n                ...state,\n                taskList: (0,src_utils_list__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(state.taskList).updateById(action.payload.taskId, {\n                    deleted: true\n                })\n            };\n        case src_actions__WEBPACK_IMPORTED_MODULE_1__.UPDATE_TASK:\n            return {\n                ...state,\n                taskList: (0,src_utils_list__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(state.taskList).updateById(action.payload.taskId, action.payload.values)\n            };\n        case src_actions__WEBPACK_IMPORTED_MODULE_1__.SELECTED_TASK:\n            return {\n                ...state,\n                selectedTask: (0,src_utils_list__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(state.taskList).findOneById(action.payload.taskId) || {}\n            };\n        default:\n            return state;\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcmVkdWNlcnMvdGFza0xpc3QuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWtDO0FBT2I7QUFFckIsTUFBTU0sWUFBWSxHQUFHO0lBQ25CQyxRQUFRLEVBQUUsRUFBRTtJQUNaQyxZQUFZLEVBQUU7UUFDWkMsS0FBSyxFQUFFLEVBQUU7UUFDVEMsS0FBSyxFQUFFLEVBQUU7UUFDVEMsV0FBVyxFQUFFLEVBQUU7S0FDaEI7Q0FDRjtBQUVELGlFQUFlLENBQUNELEtBQUssR0FBQ0osWUFBWSxFQUFFTSxNQUFNLEdBQUk7SUFDNUMsT0FBUUEsTUFBTSxDQUFDQyxJQUFJO1FBQ2pCLEtBQUtaLHVEQUFjO1lBQ2pCLE9BQU87Z0JBQ0wsR0FBR1MsS0FBSztnQkFDUkgsUUFBUSxFQUFFSyxNQUFNLENBQUNFLE9BQU8sQ0FBQ1AsUUFBUTthQUNsQyxDQUFDO1FBRUosS0FBS0wsaURBQVE7WUFDWCxPQUFPO2dCQUNMLEdBQUdRLEtBQUs7Z0JBQ1JILFFBQVEsRUFBRVAsMERBQUksQ0FBQ1UsS0FBSyxDQUFDSCxRQUFRLENBQUMsQ0FBQ1EsR0FBRyxDQUFDO29CQUNqQyxHQUFHSCxNQUFNLENBQUNFLE9BQU8sQ0FBQ0UsSUFBSTtvQkFDdEJDLE9BQU8sRUFBRSxLQUFLO2lCQUNmLENBQUM7YUFDSCxDQUFDO1FBRUosS0FBS2Qsb0RBQVc7WUFDZCxPQUFPO2dCQUNMLEdBQUdPLEtBQUs7Z0JBQ1JILFFBQVEsRUFBRVAsMERBQUksQ0FBQ1UsS0FBSyxDQUFDSCxRQUFRLENBQUMsQ0FBQ1csVUFBVSxDQUN2Q04sTUFBTSxDQUFDRSxPQUFPLENBQUNLLE1BQU0sRUFDckI7b0JBQUNGLE9BQU8sRUFBRSxJQUFJO2lCQUFDLENBQ2hCO2FBQ0YsQ0FBQztRQUVKLEtBQUtiLG9EQUFXO1lBQ2QsT0FBTztnQkFDTCxHQUFHTSxLQUFLO2dCQUNSSCxRQUFRLEVBQUVQLDBEQUFJLENBQUNVLEtBQUssQ0FBQ0gsUUFBUSxDQUFDLENBQUNXLFVBQVUsQ0FDdkNOLE1BQU0sQ0FBQ0UsT0FBTyxDQUFDSyxNQUFNLEVBQ3JCUCxNQUFNLENBQUNFLE9BQU8sQ0FBQ00sTUFBTSxDQUN0QjthQUNGLENBQUM7UUFFSixLQUFLZixzREFBYTtZQUNoQixPQUFPO2dCQUNMLEdBQUdLLEtBQUs7Z0JBQ1JGLFlBQVksRUFBRVIsMERBQUksQ0FBQ1UsS0FBSyxDQUFDSCxRQUFRLENBQUMsQ0FBQ2MsV0FBVyxDQUFDVCxNQUFNLENBQUNFLE9BQU8sQ0FBQ0ssTUFBTSxDQUFDLElBQUksRUFBRTthQUM1RSxDQUFDO1FBRUo7WUFDRSxPQUFPVCxLQUFLLENBQUM7S0FDaEI7Q0FDRiIsInNvdXJjZXMiOlsid2VicGFjazovL2NsaWVudC8uL3NyYy9yZWR1Y2Vycy90YXNrTGlzdC5qcz8zNGRhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBsaXN0IGZyb20gJ3NyYy91dGlscy9saXN0JztcclxuaW1wb3J0IHsgXHJcbiAgTE9BRF9UQVNLX0xJU1QsXHJcbiAgQUREX1RBU0ssXHJcbiAgREVMRVRFX1RBU0ssXHJcbiAgVVBEQVRFX1RBU0ssXHJcbiAgU0VMRUNURURfVEFTS1xyXG59IGZyb20gJ3NyYy9hY3Rpb25zJztcclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICB0YXNrTGlzdDogW10sXHJcbiAgc2VsZWN0ZWRUYXNrOiB7XHJcbiAgICB0aXRsZTogXCJcIixcclxuICAgIHN0YXRlOiBcIlwiLFxyXG4gICAgZGVzY3JpcHRpb246IFwiXCJcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoc3RhdGU9aW5pdGlhbFN0YXRlLCBhY3Rpb24pPT4ge1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgIGNhc2UgTE9BRF9UQVNLX0xJU1Q6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgdGFza0xpc3Q6IGFjdGlvbi5wYXlsb2FkLnRhc2tMaXN0XHJcbiAgICAgIH07XHJcblxyXG4gICAgY2FzZSBBRERfVEFTSzpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICB0YXNrTGlzdDogbGlzdChzdGF0ZS50YXNrTGlzdCkuYWRkKHtcclxuICAgICAgICAgIC4uLmFjdGlvbi5wYXlsb2FkLnRhc2ssIFxyXG4gICAgICAgICAgZGVsZXRlZDogZmFsc2VcclxuICAgICAgICB9KVxyXG4gICAgICB9O1xyXG5cclxuICAgIGNhc2UgREVMRVRFX1RBU0s6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgdGFza0xpc3Q6IGxpc3Qoc3RhdGUudGFza0xpc3QpLnVwZGF0ZUJ5SWQoXHJcbiAgICAgICAgICBhY3Rpb24ucGF5bG9hZC50YXNrSWQsIFxyXG4gICAgICAgICAge2RlbGV0ZWQ6IHRydWV9XHJcbiAgICAgICAgKSBcclxuICAgICAgfTtcclxuXHJcbiAgICBjYXNlIFVQREFURV9UQVNLOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIHRhc2tMaXN0OiBsaXN0KHN0YXRlLnRhc2tMaXN0KS51cGRhdGVCeUlkKFxyXG4gICAgICAgICAgYWN0aW9uLnBheWxvYWQudGFza0lkLFxyXG4gICAgICAgICAgYWN0aW9uLnBheWxvYWQudmFsdWVzXHJcbiAgICAgICAgKVxyXG4gICAgICB9O1xyXG5cclxuICAgIGNhc2UgU0VMRUNURURfVEFTSzpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBzZWxlY3RlZFRhc2s6IGxpc3Qoc3RhdGUudGFza0xpc3QpLmZpbmRPbmVCeUlkKGFjdGlvbi5wYXlsb2FkLnRhc2tJZCkgfHwge31cclxuICAgICAgfTtcclxuXHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gc3RhdGU7XHJcbiAgfVxyXG59Il0sIm5hbWVzIjpbImxpc3QiLCJMT0FEX1RBU0tfTElTVCIsIkFERF9UQVNLIiwiREVMRVRFX1RBU0siLCJVUERBVEVfVEFTSyIsIlNFTEVDVEVEX1RBU0siLCJpbml0aWFsU3RhdGUiLCJ0YXNrTGlzdCIsInNlbGVjdGVkVGFzayIsInRpdGxlIiwic3RhdGUiLCJkZXNjcmlwdGlvbiIsImFjdGlvbiIsInR5cGUiLCJwYXlsb2FkIiwiYWRkIiwidGFzayIsImRlbGV0ZWQiLCJ1cGRhdGVCeUlkIiwidGFza0lkIiwidmFsdWVzIiwiZmluZE9uZUJ5SWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/reducers/taskList.js\n");

/***/ }),

/***/ "./src/store.js":
/*!**********************!*\
  !*** ./src/store.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-thunk */ \"redux-thunk\");\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var src_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/reducer */ \"./src/reducer.js\");\n\n\n\nconst store = (0,redux__WEBPACK_IMPORTED_MODULE_0__.createStore)(src_reducer__WEBPACK_IMPORTED_MODULE_2__[\"default\"], (0,redux__WEBPACK_IMPORTED_MODULE_0__.applyMiddleware)((redux_thunk__WEBPACK_IMPORTED_MODULE_1___default())));\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (store);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3RvcmUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQXFEO0FBQ3JCO0FBQ0U7QUFFbEMsTUFBTUksS0FBSyxHQUFHSixrREFBVyxDQUFDRyxtREFBTyxFQUFFRixzREFBZSxDQUFDQyxvREFBSyxDQUFDLENBQUM7QUFFMUQsaUVBQWVFLEtBQUssRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NsaWVudC8uL3NyYy9zdG9yZS5qcz9jZGFlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVN0b3JlLCBhcHBseU1pZGRsZXdhcmUgfSBmcm9tICdyZWR1eCc7XHJcbmltcG9ydCB0aHVuayBmcm9tICdyZWR1eC10aHVuayc7XHJcbmltcG9ydCByZWR1Y2VyIGZyb20gJ3NyYy9yZWR1Y2VyJztcclxuXHJcbmNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUocmVkdWNlciwgYXBwbHlNaWRkbGV3YXJlKHRodW5rKSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzdG9yZTsiXSwibmFtZXMiOlsiY3JlYXRlU3RvcmUiLCJhcHBseU1pZGRsZXdhcmUiLCJ0aHVuayIsInJlZHVjZXIiLCJzdG9yZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/store.js\n");

/***/ }),

/***/ "./src/utils/list.js":
/*!***************************!*\
  !*** ./src/utils/list.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst list = (array)=>{\n    const add = (item)=>{\n        return [\n            item,\n            ...array\n        ];\n    };\n    const deleteById = (itemId)=>{\n        return array.filter((item)=>!(item.id === itemId));\n    };\n    const updateById = (itemId, values)=>{\n        return array.map((item)=>item.id === itemId ? {\n                ...item,\n                ...values\n            } : item);\n    };\n    const findOneById = (itemId)=>{\n        return array.filter((item)=>item.id === itemId)[0];\n    };\n    return {\n        add,\n        deleteById,\n        updateById,\n        findOneById\n    };\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (list);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdXRpbHMvbGlzdC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsTUFBTUEsSUFBSSxHQUFHLENBQUNDLEtBQUssR0FBSTtJQUNyQixNQUFNQyxHQUFHLEdBQUcsQ0FBQ0MsSUFBSSxHQUFJO1FBQ25CLE9BQU87WUFBQ0EsSUFBSTtlQUFLRixLQUFLO1NBQUMsQ0FBQztLQUN6QjtJQUVELE1BQU1HLFVBQVUsR0FBRyxDQUFDQyxNQUFNLEdBQUk7UUFDNUIsT0FBT0osS0FBSyxDQUFDSyxNQUFNLENBQUMsQ0FBQ0gsSUFBSSxHQUFJLENBQUMsQ0FBQ0EsSUFBSSxDQUFDSSxFQUFFLEtBQUtGLE1BQU0sQ0FBQyxDQUFDLENBQUM7S0FDckQ7SUFFRCxNQUFNRyxVQUFVLEdBQUcsQ0FBQ0gsTUFBTSxFQUFFSSxNQUFNLEdBQUk7UUFDcEMsT0FBT1IsS0FBSyxDQUFDUyxHQUFHLENBQUMsQ0FBQ1AsSUFBSSxHQUFJQSxJQUFJLENBQUNJLEVBQUUsS0FBS0YsTUFBTSxHQUFJO2dCQUFDLEdBQUdGLElBQUk7Z0JBQUUsR0FBR00sTUFBTTthQUFDLEdBQUlOLElBQUksQ0FBQyxDQUFDO0tBQy9FO0lBRUQsTUFBTVEsV0FBVyxHQUFHLENBQUNOLE1BQU0sR0FBSTtRQUM3QixPQUFPSixLQUFLLENBQUNLLE1BQU0sQ0FBQyxDQUFDSCxJQUFJLEdBQUlBLElBQUksQ0FBQ0ksRUFBRSxLQUFLRixNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUNyRDtJQUVELE9BQU87UUFBQ0gsR0FBRztRQUFFRSxVQUFVO1FBQUVJLFVBQVU7UUFBRUcsV0FBVztLQUFDLENBQUM7Q0FDbkQ7QUFFRCxpRUFBZVgsSUFBSSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xpZW50Ly4vc3JjL3V0aWxzL2xpc3QuanM/OTA0OSJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBsaXN0ID0gKGFycmF5KT0+IHtcclxuICBjb25zdCBhZGQgPSAoaXRlbSk9PiB7XHJcbiAgICByZXR1cm4gW2l0ZW0sIC4uLmFycmF5XTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGRlbGV0ZUJ5SWQgPSAoaXRlbUlkKT0+IHtcclxuICAgIHJldHVybiBhcnJheS5maWx0ZXIoKGl0ZW0pPT4gIShpdGVtLmlkID09PSBpdGVtSWQpKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IHVwZGF0ZUJ5SWQgPSAoaXRlbUlkLCB2YWx1ZXMpPT4ge1xyXG4gICAgcmV0dXJuIGFycmF5Lm1hcCgoaXRlbSk9PiBpdGVtLmlkID09PSBpdGVtSWQgPyAoey4uLml0ZW0sIC4uLnZhbHVlc30pIDogaXRlbSk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBmaW5kT25lQnlJZCA9IChpdGVtSWQpPT4ge1xyXG4gICAgcmV0dXJuIGFycmF5LmZpbHRlcigoaXRlbSk9PiBpdGVtLmlkID09PSBpdGVtSWQpWzBdO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHthZGQsIGRlbGV0ZUJ5SWQsIHVwZGF0ZUJ5SWQsIGZpbmRPbmVCeUlkfTtcclxufVxyXG4gIFxyXG5leHBvcnQgZGVmYXVsdCBsaXN0OyJdLCJuYW1lcyI6WyJsaXN0IiwiYXJyYXkiLCJhZGQiLCJpdGVtIiwiZGVsZXRlQnlJZCIsIml0ZW1JZCIsImZpbHRlciIsImlkIiwidXBkYXRlQnlJZCIsInZhbHVlcyIsIm1hcCIsImZpbmRPbmVCeUlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/utils/list.js\n");

/***/ }),

/***/ "./public/scss/reset.scss":
/*!********************************!*\
  !*** ./public/scss/reset.scss ***!
  \********************************/
/***/ (() => {
=======
>>>>>>> 071a6edb5e6a2c5952b0c0d5b5117168a4bc2ad2

const store = (0,external_redux_namespaceObject.createStore)(reducer, (0,external_redux_namespaceObject.applyMiddleware)((external_redux_thunk_default())));
/* harmony default export */ const src_store = (store);


/***/ }),

<<<<<<< HEAD
/***/ "./public/scss/variables.scss":
/*!************************************!*\
  !*** ./public/scss/variables.scss ***!
  \************************************/
/***/ (() => {



/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
=======
/***/ 6689:
>>>>>>> 071a6edb5e6a2c5952b0c0d5b5117168a4bc2ad2
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