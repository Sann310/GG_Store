"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/apparel",{

/***/ "./utils/api.js":
/*!**********************!*\
  !*** ./utils/api.js ***!
  \**********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   fetchAdmins: function() { return /* binding */ fetchAdmins; },\n/* harmony export */   fetchCategories: function() { return /* binding */ fetchCategories; },\n/* harmony export */   fetchProduct: function() { return /* binding */ fetchProduct; },\n/* harmony export */   fetchProducts: function() { return /* binding */ fetchProducts; },\n/* harmony export */   fetchProductsByCategory: function() { return /* binding */ fetchProductsByCategory; },\n/* harmony export */   fetchUsers: function() { return /* binding */ fetchUsers; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/_/_async_to_generator */ \"./node_modules/@swc/helpers/esm/_async_to_generator.js\");\n/* harmony import */ var _swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @swc/helpers/_/_ts_generator */ \"./node_modules/@swc/helpers/esm/_ts_generator.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\n\n\nvar fetchCategories = function() {\n    var _ref = (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_0__._)(function() {\n        var response, error;\n        return (0,_swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_1__._)(this, function(_state) {\n            switch(_state.label){\n                case 0:\n                    _state.trys.push([\n                        0,\n                        2,\n                        ,\n                        3\n                    ]);\n                    return [\n                        4,\n                        axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(\"/api/categories\")\n                    ];\n                case 1:\n                    response = _state.sent();\n                    return [\n                        2,\n                        response.data\n                    ];\n                case 2:\n                    error = _state.sent();\n                    console.error(\"Error fetching categories:\", error);\n                    throw error;\n                case 3:\n                    return [\n                        2\n                    ];\n            }\n        });\n    });\n    return function fetchCategories() {\n        return _ref.apply(this, arguments);\n    };\n}();\nvar fetchProducts = function() {\n    var _ref = (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_0__._)(function() {\n        var response, error;\n        return (0,_swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_1__._)(this, function(_state) {\n            switch(_state.label){\n                case 0:\n                    _state.trys.push([\n                        0,\n                        2,\n                        ,\n                        3\n                    ]);\n                    return [\n                        4,\n                        axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(\"/api/products\")\n                    ];\n                case 1:\n                    response = _state.sent();\n                    return [\n                        2,\n                        response.data\n                    ];\n                case 2:\n                    error = _state.sent();\n                    console.error(\"Error fetching products:\", error);\n                    throw error;\n                case 3:\n                    return [\n                        2\n                    ];\n            }\n        });\n    });\n    return function fetchProducts() {\n        return _ref.apply(this, arguments);\n    };\n}();\nvar fetchProduct = function() {\n    var _ref = (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_0__._)(function(id) {\n        var response, error;\n        return (0,_swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_1__._)(this, function(_state) {\n            switch(_state.label){\n                case 0:\n                    _state.trys.push([\n                        0,\n                        2,\n                        ,\n                        3\n                    ]);\n                    return [\n                        4,\n                        axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(\"/api/products/\".concat(id))\n                    ];\n                case 1:\n                    response = _state.sent();\n                    return [\n                        2,\n                        response.data\n                    ];\n                case 2:\n                    error = _state.sent();\n                    console.error(\"Error fetching product:\", error);\n                    throw error;\n                case 3:\n                    return [\n                        2\n                    ];\n            }\n        });\n    });\n    return function fetchProduct(id) {\n        return _ref.apply(this, arguments);\n    };\n}();\nvar fetchProductsByCategory = function() {\n    var _ref = (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_0__._)(function(category) {\n        var response, error;\n        return (0,_swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_1__._)(this, function(_state) {\n            switch(_state.label){\n                case 0:\n                    _state.trys.push([\n                        0,\n                        2,\n                        ,\n                        3\n                    ]);\n                    return [\n                        4,\n                        axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(\"/api/products?category=\".concat(category))\n                    ];\n                case 1:\n                    response = _state.sent();\n                    return [\n                        2,\n                        response.data\n                    ];\n                case 2:\n                    error = _state.sent();\n                    console.error(\"Error fetching products by category:\", error);\n                    throw error;\n                case 3:\n                    return [\n                        2\n                    ];\n            }\n        });\n    });\n    return function fetchProductsByCategory(category) {\n        return _ref.apply(this, arguments);\n    };\n}();\nvar fetchUsers = function() {\n    var _ref = (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_0__._)(function() {\n        var response, error;\n        return (0,_swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_1__._)(this, function(_state) {\n            switch(_state.label){\n                case 0:\n                    _state.trys.push([\n                        0,\n                        2,\n                        ,\n                        3\n                    ]);\n                    return [\n                        4,\n                        axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(\"/api/users\")\n                    ];\n                case 1:\n                    response = _state.sent();\n                    return [\n                        2,\n                        response.data\n                    ];\n                case 2:\n                    error = _state.sent();\n                    console.error(\"Error fetching users:\", error);\n                    throw error;\n                case 3:\n                    return [\n                        2\n                    ];\n            }\n        });\n    });\n    return function fetchUsers() {\n        return _ref.apply(this, arguments);\n    };\n}();\nvar fetchAdmins = function() {\n    var _ref = (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_0__._)(function() {\n        var response, error;\n        return (0,_swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_1__._)(this, function(_state) {\n            switch(_state.label){\n                case 0:\n                    _state.trys.push([\n                        0,\n                        2,\n                        ,\n                        3\n                    ]);\n                    return [\n                        4,\n                        axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(\"/api/admins\")\n                    ];\n                case 1:\n                    response = _state.sent();\n                    return [\n                        2,\n                        response.data\n                    ];\n                case 2:\n                    error = _state.sent();\n                    console.error(\"Error fetching admins:\", error);\n                    throw error;\n                case 3:\n                    return [\n                        2\n                    ];\n            }\n        });\n    });\n    return function fetchAdmins() {\n        return _ref.apply(this, arguments);\n    };\n}();\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91dGlscy9hcGkuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBMEI7QUFFbkIsSUFBTUM7ZUFBa0I7WUFFckJDLFVBRUNDOzs7Ozs7Ozs7O29CQUZVOzt3QkFBTUgsaURBQVMsQ0FBQzs7O29CQUEzQkUsV0FBVztvQkFDakI7O3dCQUFPQSxTQUFTRyxJQUFJOzs7b0JBQ2JGO29CQUNQRyxRQUFRSCxLQUFLLENBQUMsOEJBQThCQTtvQkFDNUMsTUFBTUE7Ozs7Ozs7SUFFVjtvQkFSYUY7OztJQVFYO0FBRUssSUFBTU07ZUFBZ0I7WUFFbkJMLFVBRUNDOzs7Ozs7Ozs7O29CQUZVOzt3QkFBTUgsaURBQVMsQ0FBQzs7O29CQUEzQkUsV0FBVztvQkFDakI7O3dCQUFPQSxTQUFTRyxJQUFJOzs7b0JBQ2JGO29CQUNQRyxRQUFRSCxLQUFLLENBQUMsNEJBQTRCQTtvQkFDMUMsTUFBTUE7Ozs7Ozs7SUFFVjtvQkFSYUk7OztJQVFYO0FBRUssSUFBTUM7ZUFBZSw0RUFBT0M7WUFFekJQLFVBRUNDOzs7Ozs7Ozs7O29CQUZVOzt3QkFBTUgsaURBQVMsQ0FBQyxpQkFBb0IsT0FBSFM7OztvQkFBNUNQLFdBQVc7b0JBQ2pCOzt3QkFBT0EsU0FBU0csSUFBSTs7O29CQUNiRjtvQkFDUEcsUUFBUUgsS0FBSyxDQUFDLDJCQUEyQkE7b0JBQ3pDLE1BQU1BOzs7Ozs7O0lBRVY7b0JBUmFLLGFBQXNCQzs7O0lBUWpDO0FBRUssSUFBTUM7ZUFBMEIsNEVBQU9DO1lBRXBDVCxVQUVDQzs7Ozs7Ozs7OztvQkFGVTs7d0JBQU1ILGlEQUFTLENBQUMsMEJBQW1DLE9BQVRXOzs7b0JBQXJEVCxXQUFXO29CQUNqQjs7d0JBQU9BLFNBQVNHLElBQUk7OztvQkFDYkY7b0JBQ1BHLFFBQVFILEtBQUssQ0FBQyx3Q0FBd0NBO29CQUN0RCxNQUFNQTs7Ozs7OztJQUVWO29CQVJhTyx3QkFBaUNDOzs7SUFRNUM7QUFFSyxJQUFNQztlQUFhO1lBRWhCVixVQUVDQzs7Ozs7Ozs7OztvQkFGVTs7d0JBQU1ILGlEQUFTLENBQUM7OztvQkFBM0JFLFdBQVc7b0JBQ2pCOzt3QkFBT0EsU0FBU0csSUFBSTs7O29CQUNiRjtvQkFDUEcsUUFBUUgsS0FBSyxDQUFDLHlCQUF5QkE7b0JBQ3ZDLE1BQU1BOzs7Ozs7O0lBRVY7b0JBUmFTOzs7SUFRWDtBQUVLLElBQU1DO2VBQWM7WUFFakJYLFVBRUNDOzs7Ozs7Ozs7O29CQUZVOzt3QkFBTUgsaURBQVMsQ0FBQzs7O29CQUEzQkUsV0FBVztvQkFDakI7O3dCQUFPQSxTQUFTRyxJQUFJOzs7b0JBQ2JGO29CQUNQRyxRQUFRSCxLQUFLLENBQUMsMEJBQTBCQTtvQkFDeEMsTUFBTUE7Ozs7Ozs7SUFFVjtvQkFSYVU7OztJQVFYIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3V0aWxzL2FwaS5qcz9jMTEzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5leHBvcnQgY29uc3QgZmV0Y2hDYXRlZ29yaWVzID0gYXN5bmMgKCkgPT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldCgnL2FwaS9jYXRlZ29yaWVzJyk7XHJcbiAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgY2F0ZWdvcmllczonLCBlcnJvcik7XHJcbiAgICB0aHJvdyBlcnJvcjtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZmV0Y2hQcm9kdWN0cyA9IGFzeW5jICgpID0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoJy9hcGkvcHJvZHVjdHMnKTtcclxuICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBwcm9kdWN0czonLCBlcnJvcik7XHJcbiAgICB0aHJvdyBlcnJvcjtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZmV0Y2hQcm9kdWN0ID0gYXN5bmMgKGlkKSA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KGAvYXBpL3Byb2R1Y3RzLyR7aWR9YCk7XHJcbiAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgcHJvZHVjdDonLCBlcnJvcik7XHJcbiAgICB0aHJvdyBlcnJvcjtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZmV0Y2hQcm9kdWN0c0J5Q2F0ZWdvcnkgPSBhc3luYyAoY2F0ZWdvcnkpID0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoYC9hcGkvcHJvZHVjdHM/Y2F0ZWdvcnk9JHtjYXRlZ29yeX1gKTtcclxuICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBwcm9kdWN0cyBieSBjYXRlZ29yeTonLCBlcnJvcik7XHJcbiAgICB0aHJvdyBlcnJvcjtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZmV0Y2hVc2VycyA9IGFzeW5jICgpID0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoJy9hcGkvdXNlcnMnKTtcclxuICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyB1c2VyczonLCBlcnJvcik7XHJcbiAgICB0aHJvdyBlcnJvcjtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZmV0Y2hBZG1pbnMgPSBhc3luYyAoKSA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KCcvYXBpL2FkbWlucycpO1xyXG4gICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGFkbWluczonLCBlcnJvcik7XHJcbiAgICB0aHJvdyBlcnJvcjtcclxuICB9XHJcbn07Il0sIm5hbWVzIjpbImF4aW9zIiwiZmV0Y2hDYXRlZ29yaWVzIiwicmVzcG9uc2UiLCJlcnJvciIsImdldCIsImRhdGEiLCJjb25zb2xlIiwiZmV0Y2hQcm9kdWN0cyIsImZldGNoUHJvZHVjdCIsImlkIiwiZmV0Y2hQcm9kdWN0c0J5Q2F0ZWdvcnkiLCJjYXRlZ29yeSIsImZldGNoVXNlcnMiLCJmZXRjaEFkbWlucyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./utils/api.js\n"));

/***/ })

});