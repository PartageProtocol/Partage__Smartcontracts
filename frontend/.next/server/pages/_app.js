/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./styles/Home.module.css":
/*!********************************!*\
  !*** ./styles/Home.module.css ***!
  \********************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"container\": \"Home_container__bCOhY\",\n\t\"main\": \"Home_main__nLjiQ\",\n\t\"footer\": \"Home_footer____T7K\",\n\t\"title\": \"Home_title__T09hD\",\n\t\"description\": \"Home_description__41Owk\",\n\t\"code\": \"Home_code__suPER\",\n\t\"grid\": \"Home_grid__GxQ85\",\n\t\"card\": \"Home_card___LpL1\",\n\t\"alt\": \"Home_alt___jVeU\",\n\t\"logo\": \"Home_logo__27_tb\",\n\t\"components\": \"Home_components__51sAA\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWFjdC1uZXh0anMvLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzPzcxMjciXSwic291cmNlc0NvbnRlbnQiOlsiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwiSG9tZV9jb250YWluZXJfX2JDT2hZXCIsXG5cdFwibWFpblwiOiBcIkhvbWVfbWFpbl9fbkxqaVFcIixcblx0XCJmb290ZXJcIjogXCJIb21lX2Zvb3Rlcl9fX19UN0tcIixcblx0XCJ0aXRsZVwiOiBcIkhvbWVfdGl0bGVfX1QwOWhEXCIsXG5cdFwiZGVzY3JpcHRpb25cIjogXCJIb21lX2Rlc2NyaXB0aW9uX180MU93a1wiLFxuXHRcImNvZGVcIjogXCJIb21lX2NvZGVfX3N1UEVSXCIsXG5cdFwiZ3JpZFwiOiBcIkhvbWVfZ3JpZF9fR3hRODVcIixcblx0XCJjYXJkXCI6IFwiSG9tZV9jYXJkX19fTHBMMVwiLFxuXHRcImFsdFwiOiBcIkhvbWVfYWx0X19falZlVVwiLFxuXHRcImxvZ29cIjogXCJIb21lX2xvZ29fXzI3X3RiXCIsXG5cdFwiY29tcG9uZW50c1wiOiBcIkhvbWVfY29tcG9uZW50c19fNTFzQUFcIlxufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./styles/Home.module.css\n");

/***/ }),

/***/ "./components/ConnectWallet.js":
/*!*************************************!*\
  !*** ./components/ConnectWallet.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"userSession\": () => (/* binding */ userSession)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _stacks_connect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @stacks/connect */ \"@stacks/connect\");\n/* harmony import */ var _stacks_connect__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_stacks_connect__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst appConfig = new _stacks_connect__WEBPACK_IMPORTED_MODULE_2__.AppConfig([\n    \"store_write\",\n    \"publish_data\"\n]);\nconst userSession = new _stacks_connect__WEBPACK_IMPORTED_MODULE_2__.UserSession({\n    appConfig\n});\nfunction authenticate() {\n    (0,_stacks_connect__WEBPACK_IMPORTED_MODULE_2__.showConnect)({\n        appDetails: {\n            name: \"Stacks Next.js Starter\",\n            icon: window.location.origin + \"/logo512.png\"\n        },\n        redirectTo: \"/\",\n        onFinish: ()=>{\n            window.location.reload();\n        },\n        userSession\n    });\n}\nfunction disconnect() {\n    userSession.signUserOut(\"/\");\n}\nconst ConnectWallet = ()=>{\n    const { 0: mounted , 1: setMounted  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>setMounted(true), []);\n    if (mounted && userSession.isUserSignedIn()) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"Connect\",\n                    onClick: disconnect,\n                    children: \"Disconnect Wallet\"\n                }, void 0, false, {\n                    fileName: \"/Users/juliencarbonnell/stacks/partage-v1-1/frontend/components/ConnectWallet.js\",\n                    lineNumber: 33,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: [\n                        \"mainnet: \",\n                        userSession.loadUserData().profile.stxAddress.mainnet\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/juliencarbonnell/stacks/partage-v1-1/frontend/components/ConnectWallet.js\",\n                    lineNumber: 36,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: [\n                        \"testnet: \",\n                        userSession.loadUserData().profile.stxAddress.testnet\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/juliencarbonnell/stacks/partage-v1-1/frontend/components/ConnectWallet.js\",\n                    lineNumber: 37,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/juliencarbonnell/stacks/partage-v1-1/frontend/components/ConnectWallet.js\",\n            lineNumber: 32,\n            columnNumber: 7\n        }, undefined);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        className: \"Connect\",\n        onClick: authenticate,\n        children: \"Connect Wallet\"\n    }, void 0, false, {\n        fileName: \"/Users/juliencarbonnell/stacks/partage-v1-1/frontend/components/ConnectWallet.js\",\n        lineNumber: 43,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ConnectWallet);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0Nvbm5lY3RXYWxsZXQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUFtRDtBQUNtQjtBQUV0RSxNQUFNTSxTQUFTLEdBQUcsSUFBSUgsc0RBQVMsQ0FBQztJQUFDLGFBQWE7SUFBRSxjQUFjO0NBQUMsQ0FBQztBQUV6RCxNQUFNSSxXQUFXLEdBQUcsSUFBSUYsd0RBQVcsQ0FBQztJQUFFQyxTQUFTO0NBQUUsQ0FBQyxDQUFDO0FBRTFELFNBQVNFLFlBQVksR0FBRztJQUN0QkosNERBQVcsQ0FBQztRQUNWSyxVQUFVLEVBQUU7WUFDVkMsSUFBSSxFQUFFLHdCQUF3QjtZQUM5QkMsSUFBSSxFQUFFQyxNQUFNLENBQUNDLFFBQVEsQ0FBQ0MsTUFBTSxHQUFHLGNBQWM7U0FDOUM7UUFDREMsVUFBVSxFQUFFLEdBQUc7UUFDZkMsUUFBUSxFQUFFLElBQU07WUFDZEosTUFBTSxDQUFDQyxRQUFRLENBQUNJLE1BQU0sRUFBRSxDQUFDO1NBQzFCO1FBQ0RWLFdBQVc7S0FDWixDQUFDLENBQUM7Q0FDSjtBQUVELFNBQVNXLFVBQVUsR0FBRztJQUNwQlgsV0FBVyxDQUFDWSxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUM7Q0FDOUI7QUFFRCxNQUFNQyxhQUFhLEdBQUcsSUFBTTtJQUMxQixNQUFNLEtBQUNDLE9BQU8sTUFBRUMsVUFBVSxNQUFJcEIsK0NBQVEsQ0FBQyxLQUFLLENBQUM7SUFDN0NELGdEQUFTLENBQUMsSUFBTXFCLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUV0QyxJQUFJRCxPQUFPLElBQUlkLFdBQVcsQ0FBQ2dCLGNBQWMsRUFBRSxFQUFFO1FBQzNDLHFCQUNFLDhEQUFDQyxLQUFHOzs4QkFDRiw4REFBQ0MsUUFBTTtvQkFBQ0MsU0FBUyxFQUFDLFNBQVM7b0JBQUNDLE9BQU8sRUFBRVQsVUFBVTs4QkFBRSxtQkFFakQ7Ozs7OzZCQUFTOzhCQUNULDhEQUFDVSxHQUFDOzt3QkFBQyxXQUFTO3dCQUFDckIsV0FBVyxDQUFDc0IsWUFBWSxFQUFFLENBQUNDLE9BQU8sQ0FBQ0MsVUFBVSxDQUFDQyxPQUFPOzs7Ozs7NkJBQUs7OEJBQ3ZFLDhEQUFDSixHQUFDOzt3QkFBQyxXQUFTO3dCQUFDckIsV0FBVyxDQUFDc0IsWUFBWSxFQUFFLENBQUNDLE9BQU8sQ0FBQ0MsVUFBVSxDQUFDRSxPQUFPOzs7Ozs7NkJBQUs7Ozs7OztxQkFDbkUsQ0FDTjtLQUNIO0lBRUQscUJBQ0UsOERBQUNSLFFBQU07UUFBQ0MsU0FBUyxFQUFDLFNBQVM7UUFBQ0MsT0FBTyxFQUFFbkIsWUFBWTtrQkFBRSxnQkFFbkQ7Ozs7O2lCQUFTLENBQ1Q7Q0FDSDtBQUVELGlFQUFlWSxhQUFhLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWFjdC1uZXh0anMvLi9jb21wb25lbnRzL0Nvbm5lY3RXYWxsZXQuanM/NzkwNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQXBwQ29uZmlnLCBzaG93Q29ubmVjdCwgVXNlclNlc3Npb24gfSBmcm9tIFwiQHN0YWNrcy9jb25uZWN0XCI7XG5cbmNvbnN0IGFwcENvbmZpZyA9IG5ldyBBcHBDb25maWcoW1wic3RvcmVfd3JpdGVcIiwgXCJwdWJsaXNoX2RhdGFcIl0pO1xuXG5leHBvcnQgY29uc3QgdXNlclNlc3Npb24gPSBuZXcgVXNlclNlc3Npb24oeyBhcHBDb25maWcgfSk7XG5cbmZ1bmN0aW9uIGF1dGhlbnRpY2F0ZSgpIHtcbiAgc2hvd0Nvbm5lY3Qoe1xuICAgIGFwcERldGFpbHM6IHtcbiAgICAgIG5hbWU6IFwiU3RhY2tzIE5leHQuanMgU3RhcnRlclwiLFxuICAgICAgaWNvbjogd2luZG93LmxvY2F0aW9uLm9yaWdpbiArIFwiL2xvZ281MTIucG5nXCIsXG4gICAgfSxcbiAgICByZWRpcmVjdFRvOiBcIi9cIixcbiAgICBvbkZpbmlzaDogKCkgPT4ge1xuICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgIH0sXG4gICAgdXNlclNlc3Npb24sXG4gIH0pO1xufVxuXG5mdW5jdGlvbiBkaXNjb25uZWN0KCkge1xuICB1c2VyU2Vzc2lvbi5zaWduVXNlck91dChcIi9cIik7XG59XG5cbmNvbnN0IENvbm5lY3RXYWxsZXQgPSAoKSA9PiB7XG4gIGNvbnN0IFttb3VudGVkLCBzZXRNb3VudGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgdXNlRWZmZWN0KCgpID0+IHNldE1vdW50ZWQodHJ1ZSksIFtdKTtcblxuICBpZiAobW91bnRlZCAmJiB1c2VyU2Vzc2lvbi5pc1VzZXJTaWduZWRJbigpKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiQ29ubmVjdFwiIG9uQ2xpY2s9e2Rpc2Nvbm5lY3R9PlxuICAgICAgICAgIERpc2Nvbm5lY3QgV2FsbGV0XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8cD5tYWlubmV0OiB7dXNlclNlc3Npb24ubG9hZFVzZXJEYXRhKCkucHJvZmlsZS5zdHhBZGRyZXNzLm1haW5uZXR9PC9wPlxuICAgICAgICA8cD50ZXN0bmV0OiB7dXNlclNlc3Npb24ubG9hZFVzZXJEYXRhKCkucHJvZmlsZS5zdHhBZGRyZXNzLnRlc3RuZXR9PC9wPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJDb25uZWN0XCIgb25DbGljaz17YXV0aGVudGljYXRlfT5cbiAgICAgIENvbm5lY3QgV2FsbGV0XG4gICAgPC9idXR0b24+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb25uZWN0V2FsbGV0O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJBcHBDb25maWciLCJzaG93Q29ubmVjdCIsIlVzZXJTZXNzaW9uIiwiYXBwQ29uZmlnIiwidXNlclNlc3Npb24iLCJhdXRoZW50aWNhdGUiLCJhcHBEZXRhaWxzIiwibmFtZSIsImljb24iLCJ3aW5kb3ciLCJsb2NhdGlvbiIsIm9yaWdpbiIsInJlZGlyZWN0VG8iLCJvbkZpbmlzaCIsInJlbG9hZCIsImRpc2Nvbm5lY3QiLCJzaWduVXNlck91dCIsIkNvbm5lY3RXYWxsZXQiLCJtb3VudGVkIiwic2V0TW91bnRlZCIsImlzVXNlclNpZ25lZEluIiwiZGl2IiwiYnV0dG9uIiwiY2xhc3NOYW1lIiwib25DbGljayIsInAiLCJsb2FkVXNlckRhdGEiLCJwcm9maWxlIiwic3R4QWRkcmVzcyIsIm1haW5uZXQiLCJ0ZXN0bmV0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/ConnectWallet.js\n");

/***/ }),

/***/ "./components/layout/layout.js":
/*!*************************************!*\
  !*** ./components/layout/layout.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _main_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main-navigation */ \"./components/layout/main-navigation.js\");\n\n\n\nfunction Layout() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_main_navigation__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n            fileName: \"/Users/juliencarbonnell/stacks/partage-v1-1/frontend/components/layout/layout.js\",\n            lineNumber: 9,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/juliencarbonnell/stacks/partage-v1-1/frontend/components/layout/layout.js\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2xheW91dC9sYXlvdXQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFBaUM7QUFFYztBQUUvQyxTQUFTRSxNQUFNLEdBQUc7SUFFaEIscUJBQ0UsOERBQUNGLDJDQUFRO2tCQUNQLDRFQUFDQyx3REFBYzs7OztnQkFBRzs7Ozs7WUFDVCxDQUNYO0NBQ0g7QUFFRCxpRUFBZUMsTUFBTSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVhY3QtbmV4dGpzLy4vY29tcG9uZW50cy9sYXlvdXQvbGF5b3V0LmpzP2NiMGEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRnJhZ21lbnQgfSBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IE1haW5OYXZpZ2F0aW9uIGZyb20gXCIuL21haW4tbmF2aWdhdGlvblwiO1xuXG5mdW5jdGlvbiBMYXlvdXQoKSB7XG5cbiAgcmV0dXJuIChcbiAgICA8RnJhZ21lbnQ+XG4gICAgICA8TWFpbk5hdmlnYXRpb24gLz5cbiAgICA8L0ZyYWdtZW50PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7XG4iXSwibmFtZXMiOlsiRnJhZ21lbnQiLCJNYWluTmF2aWdhdGlvbiIsIkxheW91dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/layout/layout.js\n");

/***/ }),

/***/ "./components/layout/main-navigation.js":
/*!**********************************************!*\
  !*** ./components/layout/main-navigation.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ConnectWallet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ConnectWallet */ \"./components/ConnectWallet.js\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2__);\n// main-navigation in layout needs: wallet connect\n\n\n\nfunction Home() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().container),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().main),\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().components),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ConnectWallet__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/juliencarbonnell/stacks/partage-v1-1/frontend/components/layout/main-navigation.js\",\n                    lineNumber: 11,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/juliencarbonnell/stacks/partage-v1-1/frontend/components/layout/main-navigation.js\",\n                lineNumber: 9,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/juliencarbonnell/stacks/partage-v1-1/frontend/components/layout/main-navigation.js\",\n            lineNumber: 8,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/juliencarbonnell/stacks/partage-v1-1/frontend/components/layout/main-navigation.js\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, this);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2xheW91dC9tYWluLW5hdmlnYXRpb24uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsa0RBQWtEO0FBQ2xEO0FBQTZDO0FBQ007QUFFcEMsU0FBU0UsSUFBSSxHQUFHO0lBQzdCLHFCQUNFLDhEQUFDQyxLQUFHO1FBQUNDLFNBQVMsRUFBRUgsMEVBQWlCO2tCQUMvQiw0RUFBQ0ssTUFBSTtZQUFDRixTQUFTLEVBQUVILHFFQUFZO3NCQUMzQiw0RUFBQ0UsS0FBRztnQkFBQ0MsU0FBUyxFQUFFSCwyRUFBa0I7MEJBRWhDLDRFQUFDRCxzREFBYTs7Ozt3QkFBRzs7Ozs7b0JBQ2I7Ozs7O2dCQUNDOzs7OztZQUNMLENBQ047Q0FDSCIsInNvdXJjZXMiOlsid2VicGFjazovL3JlYWN0LW5leHRqcy8uL2NvbXBvbmVudHMvbGF5b3V0L21haW4tbmF2aWdhdGlvbi5qcz82MDIwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIG1haW4tbmF2aWdhdGlvbiBpbiBsYXlvdXQgbmVlZHM6IHdhbGxldCBjb25uZWN0XG5pbXBvcnQgQ29ubmVjdFdhbGxldCBmcm9tIFwiLi4vQ29ubmVjdFdhbGxldFwiO1xuaW1wb3J0IGNsYXNzZXMgZnJvbSBcIi4uLy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3NcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250YWluZXJ9PlxuICAgICAgPG1haW4gY2xhc3NOYW1lPXtjbGFzc2VzLm1haW59PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb21wb25lbnRzfT5cbiAgICAgICAgICB7LyogQ29ubmVjdFdhbGxldCBmaWxlOiBgLi4vY29tcG9uZW50cy9Db25uZWN0V2FsbGV0LmpzYCAqL31cbiAgICAgICAgICA8Q29ubmVjdFdhbGxldCAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9tYWluPlxuICAgIDwvZGl2PlxuICApO1xufSJdLCJuYW1lcyI6WyJDb25uZWN0V2FsbGV0IiwiY2xhc3NlcyIsIkhvbWUiLCJkaXYiLCJjbGFzc05hbWUiLCJjb250YWluZXIiLCJtYWluIiwiY29tcG9uZW50cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/layout/main-navigation.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_layout_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/layout/layout */ \"./components/layout/layout.js\");\n/* harmony import */ var _stacks_connect_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @stacks/connect-react */ \"@stacks/connect-react\");\n/* harmony import */ var _stacks_connect_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_stacks_connect_react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_ConnectWallet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/ConnectWallet */ \"./components/ConnectWallet.js\");\n// this app includes the blockchain interface to merge into the nextJs app\n\n\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    let icon;\n    if (false) {}\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout_layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_stacks_connect_react__WEBPACK_IMPORTED_MODULE_3__.Connect, {\n            authOptions: {\n                appDetails: {\n                    name: \"Partage-v1\",\n                    icon\n                },\n                redirectTo: \"/\",\n                onFinish: ()=>{\n                    window.location.reload();\n                },\n                userSession: _components_ConnectWallet__WEBPACK_IMPORTED_MODULE_4__.userSession\n            },\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"/Users/juliencarbonnell/stacks/partage-v1-1/frontend/pages/_app.js\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/juliencarbonnell/stacks/partage-v1-1/frontend/pages/_app.js\",\n            lineNumber: 18,\n            columnNumber: 5\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/juliencarbonnell/stacks/partage-v1-1/frontend/pages/_app.js\",\n        lineNumber: 17,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLDBFQUEwRTtBQUMxRTtBQUErQjtBQUVrQjtBQUVEO0FBRVU7QUFFMUQsU0FBU0csS0FBSyxDQUFDLEVBQUVDLFNBQVMsR0FBRUMsU0FBUyxHQUFFLEVBQUU7SUFDdkMsSUFBSUMsSUFBSTtJQUNSLElBQUksS0FBNkIsRUFBRSxFQUVsQztJQUVELHFCQUNFLDhEQUFDTixpRUFBTTtrQkFDUCw0RUFBQ0MsMERBQU87WUFDTlMsV0FBVyxFQUFFO2dCQUNYQyxVQUFVLEVBQUU7b0JBQ1ZDLElBQUksRUFBRSxZQUFZO29CQUNsQk4sSUFBSTtpQkFDTDtnQkFDRE8sVUFBVSxFQUFFLEdBQUc7Z0JBQ2ZDLFFBQVEsRUFBRSxJQUFNO29CQUNkUCxNQUFNLENBQUNDLFFBQVEsQ0FBQ08sTUFBTSxFQUFFLENBQUM7aUJBQzFCO2dCQUNEYixXQUFXO2FBQ1o7c0JBRUQsNEVBQUNFLFNBQVM7Z0JBQUUsR0FBR0MsU0FBUzs7Ozs7b0JBQUk7Ozs7O2dCQUNwQjs7Ozs7WUFDRCxDQUNUO0NBQ0g7QUFFRCxpRUFBZUYsS0FBSyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVhY3QtbmV4dGpzLy4vcGFnZXMvX2FwcC5qcz9lMGFkIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHRoaXMgYXBwIGluY2x1ZGVzIHRoZSBibG9ja2NoYWluIGludGVyZmFjZSB0byBtZXJnZSBpbnRvIHRoZSBuZXh0SnMgYXBwXG5pbXBvcnQgXCIuLi9zdHlsZXMvZ2xvYmFscy5jc3NcIjtcblxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9sYXlvdXQvbGF5b3V0XCI7XG5cbmltcG9ydCB7IENvbm5lY3QgfSBmcm9tIFwiQHN0YWNrcy9jb25uZWN0LXJlYWN0XCI7XG5cbmltcG9ydCB7IHVzZXJTZXNzaW9uIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvQ29ubmVjdFdhbGxldFwiO1xuXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgbGV0IGljb247XG4gIGlmICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgaWNvbiA9IHdpbmRvdy5sb2NhdGlvbi5vcmlnaW4gKyBcIi9uZnQtbG9nby5wbmdcIjtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPExheW91dD5cbiAgICA8Q29ubmVjdFxuICAgICAgYXV0aE9wdGlvbnM9e3tcbiAgICAgICAgYXBwRGV0YWlsczoge1xuICAgICAgICAgIG5hbWU6IFwiUGFydGFnZS12MVwiLFxuICAgICAgICAgIGljb24sXG4gICAgICAgIH0sXG4gICAgICAgIHJlZGlyZWN0VG86IFwiL1wiLFxuICAgICAgICBvbkZpbmlzaDogKCkgPT4ge1xuICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgICAgfSxcbiAgICAgICAgdXNlclNlc3Npb24sXG4gICAgICB9fVxuICAgID5cbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICA8L0Nvbm5lY3Q+XG4gICAgPC9MYXlvdXQ+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwO1xuIl0sIm5hbWVzIjpbIkxheW91dCIsIkNvbm5lY3QiLCJ1c2VyU2Vzc2lvbiIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiaWNvbiIsIndpbmRvdyIsImxvY2F0aW9uIiwib3JpZ2luIiwiYXV0aE9wdGlvbnMiLCJhcHBEZXRhaWxzIiwibmFtZSIsInJlZGlyZWN0VG8iLCJvbkZpbmlzaCIsInJlbG9hZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "@stacks/connect":
/*!**********************************!*\
  !*** external "@stacks/connect" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@stacks/connect");

/***/ }),

/***/ "@stacks/connect-react":
/*!****************************************!*\
  !*** external "@stacks/connect-react" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@stacks/connect-react");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();