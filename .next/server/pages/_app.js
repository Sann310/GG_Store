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

/***/ "./styles/NavBar.module.css":
/*!**********************************!*\
  !*** ./styles/NavBar.module.css ***!
  \**********************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"navbar\": \"NavBar_navbar___LVQF\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdHlsZXMvTmF2QmFyLm1vZHVsZS5jc3MiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9nZ19zdG9yZS8uL3N0eWxlcy9OYXZCYXIubW9kdWxlLmNzcz83YjY0Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIm5hdmJhclwiOiBcIk5hdkJhcl9uYXZiYXJfX19MVlFGXCJcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./styles/NavBar.module.css\n");

/***/ }),

/***/ "./components/AdminRoute.js":
/*!**********************************!*\
  !*** ./components/AdminRoute.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _context_AuthContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context/AuthContext */ \"./context/AuthContext.js\");\n\n\n\n\nconst AdminRoute = ({ children })=>{\n    const { user, loading } = (0,_context_AuthContext__WEBPACK_IMPORTED_MODULE_3__.useAuth)();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (!loading && (!user || !user.isAdmin)) {\n            router.push(\"/login\");\n        }\n    }, [\n        user,\n        loading,\n        router\n    ]);\n    if (loading || !user || !user.isAdmin) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\ADMIN\\\\gg_store\\\\components\\\\AdminRoute.js\",\n            lineNumber: 16,\n            columnNumber: 12\n        }, undefined);\n    }\n    return children;\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AdminRoute);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0FkbWluUm91dGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQXlDO0FBQ0Q7QUFDUztBQUVqRCxNQUFNSSxhQUFhLENBQUMsRUFBRUMsUUFBUSxFQUFFO0lBQzlCLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxPQUFPLEVBQUUsR0FBR0osNkRBQU9BO0lBQ2pDLE1BQU1LLFNBQVNOLHNEQUFTQTtJQUV4QkQsZ0RBQVNBLENBQUM7UUFDUixJQUFJLENBQUNNLFdBQVksRUFBQ0QsUUFBUSxDQUFDQSxLQUFLRyxPQUFPLEdBQUc7WUFDeENELE9BQU9FLElBQUksQ0FBQztRQUNkO0lBQ0YsR0FBRztRQUFDSjtRQUFNQztRQUFTQztLQUFPO0lBRTFCLElBQUlELFdBQVcsQ0FBQ0QsUUFBUSxDQUFDQSxLQUFLRyxPQUFPLEVBQUU7UUFDckMscUJBQU8sOERBQUNFO3NCQUFJOzs7Ozs7SUFDZDtJQUVBLE9BQU9OO0FBQ1Q7QUFFQSxpRUFBZUQsVUFBVUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2dnX3N0b3JlLy4vY29tcG9uZW50cy9BZG1pblJvdXRlLmpzPzg0ZTYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgeyB1c2VBdXRoIH0gZnJvbSAnLi4vY29udGV4dC9BdXRoQ29udGV4dCc7XHJcblxyXG5jb25zdCBBZG1pblJvdXRlID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xyXG4gIGNvbnN0IHsgdXNlciwgbG9hZGluZyB9ID0gdXNlQXV0aCgpO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKCFsb2FkaW5nICYmICghdXNlciB8fCAhdXNlci5pc0FkbWluKSkge1xyXG4gICAgICByb3V0ZXIucHVzaCgnL2xvZ2luJyk7XHJcbiAgICB9XHJcbiAgfSwgW3VzZXIsIGxvYWRpbmcsIHJvdXRlcl0pO1xyXG5cclxuICBpZiAobG9hZGluZyB8fCAhdXNlciB8fCAhdXNlci5pc0FkbWluKSB7XHJcbiAgICByZXR1cm4gPGRpdj5Mb2FkaW5nLi4uPC9kaXY+O1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGNoaWxkcmVuO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWRtaW5Sb3V0ZTsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VSb3V0ZXIiLCJ1c2VBdXRoIiwiQWRtaW5Sb3V0ZSIsImNoaWxkcmVuIiwidXNlciIsImxvYWRpbmciLCJyb3V0ZXIiLCJpc0FkbWluIiwicHVzaCIsImRpdiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/AdminRoute.js\n");

/***/ }),

/***/ "./components/NavBar.js":
/*!******************************!*\
  !*** ./components/NavBar.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _context_CartContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context/CartContext */ \"./context/CartContext.js\");\n/* harmony import */ var _styles_NavBar_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/NavBar.module.css */ \"./styles/NavBar.module.css\");\n/* harmony import */ var _styles_NavBar_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_NavBar_module_css__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nconst NavBar = ()=>{\n    const { cart } = (0,_context_CartContext__WEBPACK_IMPORTED_MODULE_3__.useCart)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                href: \"/\",\n                legacyBehavior: true,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    children: \"Home\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\ADMIN\\\\gg_store\\\\components\\\\NavBar.js\",\n                    lineNumber: 12,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ADMIN\\\\gg_store\\\\components\\\\NavBar.js\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                href: \"/cart\",\n                legacyBehavior: true,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    children: [\n                        \"Cart (\",\n                        cart ? cart.length : 0,\n                        \")\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\ADMIN\\\\gg_store\\\\components\\\\NavBar.js\",\n                    lineNumber: 15,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ADMIN\\\\gg_store\\\\components\\\\NavBar.js\",\n                lineNumber: 14,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\ADMIN\\\\gg_store\\\\components\\\\NavBar.js\",\n        lineNumber: 10,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NavBar);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL05hdkJhci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUEwQjtBQUNHO0FBQ29CO0FBQ0E7QUFFakQsTUFBTUksU0FBUztJQUNiLE1BQU0sRUFBRUMsSUFBSSxFQUFFLEdBQUdILDZEQUFPQTtJQUV4QixxQkFDRSw4REFBQ0k7OzBCQUNDLDhEQUFDTCxrREFBSUE7Z0JBQUNNLE1BQUs7Z0JBQUlDLGNBQWM7MEJBQzNCLDRFQUFDQzs4QkFBRTs7Ozs7Ozs7Ozs7MEJBRUwsOERBQUNSLGtEQUFJQTtnQkFBQ00sTUFBSztnQkFBUUMsY0FBYzswQkFDL0IsNEVBQUNDOzt3QkFBRTt3QkFBT0osT0FBT0EsS0FBS0ssTUFBTSxHQUFHO3dCQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJekM7QUFFQSxpRUFBZU4sTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2dnX3N0b3JlLy4vY29tcG9uZW50cy9OYXZCYXIuanM/ZWI5MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgeyB1c2VDYXJ0IH0gZnJvbSAnLi4vY29udGV4dC9DYXJ0Q29udGV4dCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL05hdkJhci5tb2R1bGUuY3NzJztcclxuXHJcbmNvbnN0IE5hdkJhciA9ICgpID0+IHtcclxuICBjb25zdCB7IGNhcnQgfSA9IHVzZUNhcnQoKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxuYXY+XHJcbiAgICAgIDxMaW5rIGhyZWY9XCIvXCIgbGVnYWN5QmVoYXZpb3I+XHJcbiAgICAgICAgPGE+SG9tZTwvYT5cclxuICAgICAgPC9MaW5rPlxyXG4gICAgICA8TGluayBocmVmPVwiL2NhcnRcIiBsZWdhY3lCZWhhdmlvcj5cclxuICAgICAgICA8YT5DYXJ0ICh7Y2FydCA/IGNhcnQubGVuZ3RoIDogMH0pPC9hPlxyXG4gICAgICA8L0xpbms+XHJcbiAgICA8L25hdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2QmFyOyJdLCJuYW1lcyI6WyJSZWFjdCIsIkxpbmsiLCJ1c2VDYXJ0Iiwic3R5bGVzIiwiTmF2QmFyIiwiY2FydCIsIm5hdiIsImhyZWYiLCJsZWdhY3lCZWhhdmlvciIsImEiLCJsZW5ndGgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/NavBar.js\n");

/***/ }),

/***/ "./context/AuthContext.js":
/*!********************************!*\
  !*** ./context/AuthContext.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AuthProvider: () => (/* binding */ AuthProvider),\n/* harmony export */   useAuth: () => (/* binding */ useAuth)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nconst AuthProvider = ({ children })=>{\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // Simulate fetching user data from an API or local storage\n        const fetchUser = async ()=>{\n            setLoading(true);\n            try {\n                // Replace with actual API call\n                const userData = await new Promise((resolve)=>setTimeout(()=>resolve({\n                            id: 1,\n                            name: \"Admin User\",\n                            isAdmin: true\n                        }), 1000));\n                setUser(userData);\n            } catch (error) {\n                console.error(\"Error fetching user:\", error);\n            } finally{\n                setLoading(false);\n            }\n        };\n        fetchUser();\n    }, []);\n    const login = async (email, password)=>{\n        // Replace with actual login logic\n        const userData = {\n            id: 1,\n            name: \"Admin User\",\n            isAdmin: true\n        };\n        setUser(userData);\n        router.push(\"/admin\");\n    };\n    const logout = ()=>{\n        setUser(null);\n        router.push(\"/login\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AuthContext.Provider, {\n        value: {\n            user,\n            loading,\n            login,\n            logout\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\ADMIN\\\\gg_store\\\\context\\\\AuthContext.js\",\n        lineNumber: 44,\n        columnNumber: 5\n    }, undefined);\n};\nconst useAuth = ()=>(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(AuthContext);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0L0F1dGhDb250ZXh0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUE4RTtBQUN0QztBQUV4QyxNQUFNTSw0QkFBY0wsb0RBQWFBO0FBRTFCLE1BQU1NLGVBQWUsQ0FBQyxFQUFFQyxRQUFRLEVBQUU7SUFDdkMsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUdQLCtDQUFRQSxDQUFDO0lBQ2pDLE1BQU0sQ0FBQ1EsU0FBU0MsV0FBVyxHQUFHVCwrQ0FBUUEsQ0FBQztJQUN2QyxNQUFNVSxTQUFTUixzREFBU0E7SUFFeEJELGdEQUFTQSxDQUFDO1FBQ1IsMkRBQTJEO1FBQzNELE1BQU1VLFlBQVk7WUFDaEJGLFdBQVc7WUFDWCxJQUFJO2dCQUNGLCtCQUErQjtnQkFDL0IsTUFBTUcsV0FBVyxNQUFNLElBQUlDLFFBQVEsQ0FBQ0MsVUFDbENDLFdBQVcsSUFBTUQsUUFBUTs0QkFBRUUsSUFBSTs0QkFBR0MsTUFBTTs0QkFBY0MsU0FBUzt3QkFBSyxJQUFJO2dCQUUxRVgsUUFBUUs7WUFDVixFQUFFLE9BQU9PLE9BQU87Z0JBQ2RDLFFBQVFELEtBQUssQ0FBQyx3QkFBd0JBO1lBQ3hDLFNBQVU7Z0JBQ1JWLFdBQVc7WUFDYjtRQUNGO1FBRUFFO0lBQ0YsR0FBRyxFQUFFO0lBRUwsTUFBTVUsUUFBUSxPQUFPQyxPQUFPQztRQUMxQixrQ0FBa0M7UUFDbEMsTUFBTVgsV0FBVztZQUFFSSxJQUFJO1lBQUdDLE1BQU07WUFBY0MsU0FBUztRQUFLO1FBQzVEWCxRQUFRSztRQUNSRixPQUFPYyxJQUFJLENBQUM7SUFDZDtJQUVBLE1BQU1DLFNBQVM7UUFDYmxCLFFBQVE7UUFDUkcsT0FBT2MsSUFBSSxDQUFDO0lBQ2Q7SUFFQSxxQkFDRSw4REFBQ3JCLFlBQVl1QixRQUFRO1FBQUNDLE9BQU87WUFBRXJCO1lBQU1FO1lBQVNhO1lBQU9JO1FBQU87a0JBQ3pEcEI7Ozs7OztBQUdQLEVBQUU7QUFFSyxNQUFNdUIsVUFBVSxJQUFNN0IsaURBQVVBLENBQUNJLGFBQWEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9nZ19zdG9yZS8uL2NvbnRleHQvQXV0aENvbnRleHQuanM/MTM5OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgY3JlYXRlQ29udGV4dCwgdXNlQ29udGV4dCwgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5cclxuY29uc3QgQXV0aENvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XHJcblxyXG5leHBvcnQgY29uc3QgQXV0aFByb3ZpZGVyID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xyXG4gIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgLy8gU2ltdWxhdGUgZmV0Y2hpbmcgdXNlciBkYXRhIGZyb20gYW4gQVBJIG9yIGxvY2FsIHN0b3JhZ2VcclxuICAgIGNvbnN0IGZldGNoVXNlciA9IGFzeW5jICgpID0+IHtcclxuICAgICAgc2V0TG9hZGluZyh0cnVlKTtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICAvLyBSZXBsYWNlIHdpdGggYWN0dWFsIEFQSSBjYWxsXHJcbiAgICAgICAgY29uc3QgdXNlckRhdGEgPSBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT5cclxuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gcmVzb2x2ZSh7IGlkOiAxLCBuYW1lOiAnQWRtaW4gVXNlcicsIGlzQWRtaW46IHRydWUgfSksIDEwMDApXHJcbiAgICAgICAgKTtcclxuICAgICAgICBzZXRVc2VyKHVzZXJEYXRhKTtcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyB1c2VyOicsIGVycm9yKTtcclxuICAgICAgfSBmaW5hbGx5IHtcclxuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBmZXRjaFVzZXIoKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IGxvZ2luID0gYXN5bmMgKGVtYWlsLCBwYXNzd29yZCkgPT4ge1xyXG4gICAgLy8gUmVwbGFjZSB3aXRoIGFjdHVhbCBsb2dpbiBsb2dpY1xyXG4gICAgY29uc3QgdXNlckRhdGEgPSB7IGlkOiAxLCBuYW1lOiAnQWRtaW4gVXNlcicsIGlzQWRtaW46IHRydWUgfTtcclxuICAgIHNldFVzZXIodXNlckRhdGEpO1xyXG4gICAgcm91dGVyLnB1c2goJy9hZG1pbicpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGxvZ291dCA9ICgpID0+IHtcclxuICAgIHNldFVzZXIobnVsbCk7XHJcbiAgICByb3V0ZXIucHVzaCgnL2xvZ2luJyk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxBdXRoQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyB1c2VyLCBsb2FkaW5nLCBsb2dpbiwgbG9nb3V0IH19PlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L0F1dGhDb250ZXh0LlByb3ZpZGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgdXNlQXV0aCA9ICgpID0+IHVzZUNvbnRleHQoQXV0aENvbnRleHQpOyJdLCJuYW1lcyI6WyJSZWFjdCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VSb3V0ZXIiLCJBdXRoQ29udGV4dCIsIkF1dGhQcm92aWRlciIsImNoaWxkcmVuIiwidXNlciIsInNldFVzZXIiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInJvdXRlciIsImZldGNoVXNlciIsInVzZXJEYXRhIiwiUHJvbWlzZSIsInJlc29sdmUiLCJzZXRUaW1lb3V0IiwiaWQiLCJuYW1lIiwiaXNBZG1pbiIsImVycm9yIiwiY29uc29sZSIsImxvZ2luIiwiZW1haWwiLCJwYXNzd29yZCIsInB1c2giLCJsb2dvdXQiLCJQcm92aWRlciIsInZhbHVlIiwidXNlQXV0aCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./context/AuthContext.js\n");

/***/ }),

/***/ "./context/CartContext.js":
/*!********************************!*\
  !*** ./context/CartContext.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CartProvider: () => (/* binding */ CartProvider),\n/* harmony export */   useCart: () => (/* binding */ useCart)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst CartContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nconst CartProvider = ({ children })=>{\n    const [cartItems, setCartItems] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const addToCart = (product)=>{\n        setCartItems([\n            ...cartItems,\n            product\n        ]);\n    };\n    const removeFromCart = (id)=>{\n        setCartItems(cartItems.filter((item)=>item.id !== id));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CartContext.Provider, {\n        value: {\n            cartItems,\n            addToCart,\n            removeFromCart\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\ADMIN\\\\gg_store\\\\context\\\\CartContext.js\",\n        lineNumber: 17,\n        columnNumber: 5\n    }, undefined);\n};\nconst useCart = ()=>(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(CartContext);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0L0NhcnRDb250ZXh0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBbUU7QUFFbkUsTUFBTUksNEJBQWNILG9EQUFhQTtBQUUxQixNQUFNSSxlQUFlLENBQUMsRUFBRUMsUUFBUSxFQUFFO0lBQ3ZDLE1BQU0sQ0FBQ0MsV0FBV0MsYUFBYSxHQUFHTCwrQ0FBUUEsQ0FBQyxFQUFFO0lBRTdDLE1BQU1NLFlBQVksQ0FBQ0M7UUFDakJGLGFBQWE7ZUFBSUQ7WUFBV0c7U0FBUTtJQUN0QztJQUVBLE1BQU1DLGlCQUFpQixDQUFDQztRQUN0QkosYUFBYUQsVUFBVU0sTUFBTSxDQUFDQyxDQUFBQSxPQUFRQSxLQUFLRixFQUFFLEtBQUtBO0lBQ3BEO0lBRUEscUJBQ0UsOERBQUNSLFlBQVlXLFFBQVE7UUFBQ0MsT0FBTztZQUFFVDtZQUFXRTtZQUFXRTtRQUFlO2tCQUNqRUw7Ozs7OztBQUdQLEVBQUU7QUFFSyxNQUFNVyxVQUFVLElBQU1mLGlEQUFVQSxDQUFDRSxhQUFhIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ2dfc3RvcmUvLi9jb250ZXh0L0NhcnRDb250ZXh0LmpzP2MzOTUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IGNyZWF0ZUNvbnRleHQsIHVzZUNvbnRleHQsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgQ2FydENvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XHJcblxyXG5leHBvcnQgY29uc3QgQ2FydFByb3ZpZGVyID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xyXG4gIGNvbnN0IFtjYXJ0SXRlbXMsIHNldENhcnRJdGVtc10gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gIGNvbnN0IGFkZFRvQ2FydCA9IChwcm9kdWN0KSA9PiB7XHJcbiAgICBzZXRDYXJ0SXRlbXMoWy4uLmNhcnRJdGVtcywgcHJvZHVjdF0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJlbW92ZUZyb21DYXJ0ID0gKGlkKSA9PiB7XHJcbiAgICBzZXRDYXJ0SXRlbXMoY2FydEl0ZW1zLmZpbHRlcihpdGVtID0+IGl0ZW0uaWQgIT09IGlkKSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxDYXJ0Q29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyBjYXJ0SXRlbXMsIGFkZFRvQ2FydCwgcmVtb3ZlRnJvbUNhcnQgfX0+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvQ2FydENvbnRleHQuUHJvdmlkZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCB1c2VDYXJ0ID0gKCkgPT4gdXNlQ29udGV4dChDYXJ0Q29udGV4dCk7Il0sIm5hbWVzIjpbIlJlYWN0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJ1c2VTdGF0ZSIsIkNhcnRDb250ZXh0IiwiQ2FydFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJjYXJ0SXRlbXMiLCJzZXRDYXJ0SXRlbXMiLCJhZGRUb0NhcnQiLCJwcm9kdWN0IiwicmVtb3ZlRnJvbUNhcnQiLCJpZCIsImZpbHRlciIsIml0ZW0iLCJQcm92aWRlciIsInZhbHVlIiwidXNlQ2FydCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./context/CartContext.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_CartContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/CartContext */ \"./context/CartContext.js\");\n/* harmony import */ var _context_AuthContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context/AuthContext */ \"./context/AuthContext.js\");\n/* harmony import */ var _components_NavBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/NavBar */ \"./components/NavBar.js\");\n/* harmony import */ var _components_AdminRoute__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/AdminRoute */ \"./components/AdminRoute.js\");\n\n\n\n\n\n\nfunction MyApp({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_AuthContext__WEBPACK_IMPORTED_MODULE_3__.AuthProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_CartContext__WEBPACK_IMPORTED_MODULE_2__.CartProvider, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_NavBar__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\ADMIN\\\\gg_store\\\\pages\\\\_app.js\",\n                    lineNumber: 11,\n                    columnNumber: 9\n                }, this),\n                Component.name === \"AdminDashboard\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_AdminRoute__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                        ...pageProps\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ADMIN\\\\gg_store\\\\pages\\\\_app.js\",\n                        lineNumber: 14,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\ADMIN\\\\gg_store\\\\pages\\\\_app.js\",\n                    lineNumber: 13,\n                    columnNumber: 11\n                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                    ...pageProps\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\ADMIN\\\\gg_store\\\\pages\\\\_app.js\",\n                    lineNumber: 17,\n                    columnNumber: 11\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\ADMIN\\\\gg_store\\\\pages\\\\_app.js\",\n            lineNumber: 10,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\ADMIN\\\\gg_store\\\\pages\\\\_app.js\",\n        lineNumber: 9,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBK0I7QUFDdUI7QUFDQTtBQUNaO0FBQ1E7QUFFbEQsU0FBU0ksTUFBTSxFQUFFQyxTQUFTLEVBQUVDLFNBQVMsRUFBRTtJQUNyQyxxQkFDRSw4REFBQ0wsOERBQVlBO2tCQUNYLDRFQUFDRCw4REFBWUE7OzhCQUNYLDhEQUFDRSwwREFBTUE7Ozs7O2dCQUNORyxVQUFVRSxJQUFJLEtBQUssaUNBQ2xCLDhEQUFDSiw4REFBVUE7OEJBQ1QsNEVBQUNFO3dCQUFXLEdBQUdDLFNBQVM7Ozs7Ozs7Ozs7eUNBRzFCLDhEQUFDRDtvQkFBVyxHQUFHQyxTQUFTOzs7Ozs7Ozs7Ozs7Ozs7OztBQUtsQztBQUVBLGlFQUFlRixLQUFLQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ2dfc3RvcmUvLi9wYWdlcy9fYXBwLmpzP2UwYWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFscy5jc3MnO1xyXG5pbXBvcnQgeyBDYXJ0UHJvdmlkZXIgfSBmcm9tICcuLi9jb250ZXh0L0NhcnRDb250ZXh0JztcclxuaW1wb3J0IHsgQXV0aFByb3ZpZGVyIH0gZnJvbSAnLi4vY29udGV4dC9BdXRoQ29udGV4dCc7XHJcbmltcG9ydCBOYXZCYXIgZnJvbSAnLi4vY29tcG9uZW50cy9OYXZCYXInO1xyXG5pbXBvcnQgQWRtaW5Sb3V0ZSBmcm9tICcuLi9jb21wb25lbnRzL0FkbWluUm91dGUnO1xyXG5cclxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxBdXRoUHJvdmlkZXI+XHJcbiAgICAgIDxDYXJ0UHJvdmlkZXI+XHJcbiAgICAgICAgPE5hdkJhciAvPlxyXG4gICAgICAgIHtDb21wb25lbnQubmFtZSA9PT0gJ0FkbWluRGFzaGJvYXJkJyA/IChcclxuICAgICAgICAgIDxBZG1pblJvdXRlPlxyXG4gICAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICAgICAgICA8L0FkbWluUm91dGU+XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgICAgICApfVxyXG4gICAgICA8L0NhcnRQcm92aWRlcj5cclxuICAgIDwvQXV0aFByb3ZpZGVyPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE15QXBwOyJdLCJuYW1lcyI6WyJDYXJ0UHJvdmlkZXIiLCJBdXRoUHJvdmlkZXIiLCJOYXZCYXIiLCJBZG1pblJvdXRlIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJuYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc"], () => (__webpack_exec__("./pages/_app.js")));
module.exports = __webpack_exports__;

})();