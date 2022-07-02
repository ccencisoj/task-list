(() => {
var exports = {};
exports.id = 438;
exports.ids = [438];
exports.modules = {

/***/ 4708:
/***/ ((module) => {

// Exports
module.exports = {
	"sign_in_form": "SignUpForm_sign_in_form__lUhiI",
	"header": "SignUpForm_header__MVvnU",
	"title": "SignUpForm_title__gXx_F",
	"main": "SignUpForm_main__9twj9",
	"footer": "SignUpForm_footer__vdEUB",
	"error": "SignUpForm_error__6lVEC"
};


/***/ }),

/***/ 2144:
/***/ ((module) => {

// Exports
module.exports = {
	"image_selector": "ImageSelector1_image_selector__xybWu",
	"image": "ImageSelector1_image__5Fr8w",
	"label": "ImageSelector1_label__mIjF5",
	"icon": "ImageSelector1_icon__9jgCL"
};


/***/ }),

/***/ 1867:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var src_agent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9106);

const serverSideSignOut = async (ctx)=>{
    try {
        await src_agent__WEBPACK_IMPORTED_MODULE_0__/* ["default"].User.signOut */ .Z.User.signOut({
            headers: {
                "Cookie": ctx.req.headers.cookie
            }
        });
        return {
            props: {}
        };
    } catch (error) {
        return {
            props: {}
        };
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (serverSideSignOut);


/***/ }),

/***/ 1391:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5609);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2296);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_agent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9106);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _SignUpForm_module_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4708);
/* harmony import */ var _SignUpForm_module_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_SignUpForm_module_scss__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var src_components_Field_Field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(654);
/* harmony import */ var src_components_Button_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7695);
/* harmony import */ var src_components_Container_Container__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9396);
/* harmony import */ var src_components_ImageSelector_ImageSelector1__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7773);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([src_components_ImageSelector_ImageSelector1__WEBPACK_IMPORTED_MODULE_9__]);
src_components_ImageSelector_ImageSelector1__WEBPACK_IMPORTED_MODULE_9__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];











const SignUpSchema = yup__WEBPACK_IMPORTED_MODULE_2__.object().shape({
    username: yup__WEBPACK_IMPORTED_MODULE_2__.string().required("Este campo es requerido"),
    email: yup__WEBPACK_IMPORTED_MODULE_2__.string().required("Este campo es requerido"),
    password: yup__WEBPACK_IMPORTED_MODULE_2__.string().required("Este campo es requerido")
});
const SignUpForm = ()=>{
    const [error, setError] = react__WEBPACK_IMPORTED_MODULE_1___default().useState("");
    const [image, setImage] = react__WEBPACK_IMPORTED_MODULE_1___default().useState("");
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();
    const handleSubmit = async ({ username , email , password  })=>{
        src_agent__WEBPACK_IMPORTED_MODULE_4__/* ["default"].User.signUp */ .Z.User.signUp({
            image,
            username,
            email,
            password
        }).then((response)=>{
            router.push("/taskList");
        }).catch((error)=>{
            setError(error?.response?.data?.message);
        });
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(formik__WEBPACK_IMPORTED_MODULE_3__.Formik, {
        initialValues: {
            username: "",
            email: "",
            password: ""
        },
        validationSchema: SignUpSchema,
        onSubmit: handleSubmit,
        children: ({ errors , values , touched , handleSubmit , handleBlur , handleChange , isSubmitting  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                className: (_SignUpForm_module_scss__WEBPACK_IMPORTED_MODULE_10___default().sign_in_form),
                onSubmit: handleSubmit,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_SignUpForm_module_scss__WEBPACK_IMPORTED_MODULE_10___default().header),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: (_SignUpForm_module_scss__WEBPACK_IMPORTED_MODULE_10___default().title),
                            children: "Crear cuenta"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_SignUpForm_module_scss__WEBPACK_IMPORTED_MODULE_10___default().main),
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(src_components_Container_Container__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                            columnDirection: true,
                            mediumSeparation: true,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_ImageSelector_ImageSelector1__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                    onChange: (image)=>setImage(image)
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_Field_Field__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                    type: "text",
                                    name: "username",
                                    placeholder: "Nombre de usuario",
                                    value: values.username,
                                    error: touched.username ? errors.username : null,
                                    onBlur: handleBlur,
                                    onChange: handleChange
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_Field_Field__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                    type: "text",
                                    name: "email",
                                    placeholder: "Correo",
                                    value: values.email,
                                    error: touched.email ? errors.email : null,
                                    onBlur: handleBlur,
                                    onChange: handleChange
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_Field_Field__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                    type: "password",
                                    name: "password",
                                    placeholder: "Contrase\xf1a",
                                    value: values.password,
                                    error: touched.password ? errors.password : false,
                                    onBlur: handleBlur,
                                    onChange: handleChange
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_SignUpForm_module_scss__WEBPACK_IMPORTED_MODULE_10___default().footer),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_Container_Container__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                            rowDirection: true,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_Button_Button__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                type: "submit",
                                label: "Crear cuenta",
                                expand: true,
                                primary: true,
                                loading: isSubmitting,
                                onHover: ()=>router.prefetch("/services")
                            })
                        })
                    }),
                    error && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: (_SignUpForm_module_scss__WEBPACK_IMPORTED_MODULE_10___default().error),
                        children: error
                    })
                ]
            })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SignUpForm);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7773:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9101);
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_feather__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ImageSelector1_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2144);
/* harmony import */ var _ImageSelector1_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ImageSelector1_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var src_hooks_StorageContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9999);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([src_hooks_StorageContext__WEBPACK_IMPORTED_MODULE_3__]);
src_hooks_StorageContext__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const ImageSelector1 = ({ onChange  })=>{
    const [image, setImage] = react__WEBPACK_IMPORTED_MODULE_1___default().useState("/images/user1.svg");
    const storage = (0,src_hooks_StorageContext__WEBPACK_IMPORTED_MODULE_3__/* .useStorage */ .y)();
    const loadImage = ()=>{
        storage.loadImage((image)=>{
            setImage(image.src);
            onChange(image.dataURL);
        });
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_ImageSelector1_module_scss__WEBPACK_IMPORTED_MODULE_4___default().image_selector),
        onClick: loadImage,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                className: (_ImageSelector1_module_scss__WEBPACK_IMPORTED_MODULE_4___default().image),
                src: image
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: (_ImageSelector1_module_scss__WEBPACK_IMPORTED_MODULE_4___default().label),
                children: "Seleccionar imagen"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_feather__WEBPACK_IMPORTED_MODULE_2__.ChevronRight, {
                className: (_ImageSelector1_module_scss__WEBPACK_IMPORTED_MODULE_4___default().icon)
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ImageSelector1);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8968:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_components_Page_Page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4472);
/* harmony import */ var lib_server_side_sign_out__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1867);
/* harmony import */ var src_components_Form_SignUpForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1391);
/* harmony import */ var src_constants_color__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4859);
/* harmony import */ var src_components_CenteredColumn_CenteredColumn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7795);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([src_components_Form_SignUpForm__WEBPACK_IMPORTED_MODULE_4__]);
src_components_Form_SignUpForm__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







const SignUp = ()=>{
    const style = {
        paddingBottom: "10vh",
        backgroundColor: src_constants_color__WEBPACK_IMPORTED_MODULE_6__/* .PRIMARY_BACKGROUND */ .V
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_Page_Page__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        style: style,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_CenteredColumn_CenteredColumn__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_Form_SignUpForm__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {})
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SignUp);
const getServerSideProps = lib_server_side_sign_out__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z;

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2167:
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ 8103:
/***/ ((module) => {

"use strict";
module.exports = require("clsx");

/***/ }),

/***/ 2296:
/***/ ((module) => {

"use strict";
module.exports = require("formik");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 9101:
/***/ ((module) => {

"use strict";
module.exports = require("react-feather");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 5609:
/***/ ((module) => {

"use strict";
module.exports = require("yup");

/***/ }),

/***/ 5611:
/***/ ((module) => {

"use strict";
module.exports = import("nanoid");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [14,22,999], () => (__webpack_exec__(8968)));
module.exports = __webpack_exports__;

})();