"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\nvar _this = undefined;\n\n\n\nvar _s = $RefreshSig$();\nvar DynamicComponent = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(function() {\n    return __webpack_require__.e(/*! import() */ \"node_modules_react-media-recorder_index_js\").then(__webpack_require__.t.bind(__webpack_require__, /*! react-media-recorder */ \"./node_modules/react-media-recorder/index.js\", 23)).then(function(mod) {\n        return mod.ReactMediaRecorder;\n    });\n}, {\n    loadableGenerated: {\n        modules: [\n            \"index.tsx -> \" + \"react-media-recorder\"\n        ]\n    },\n    ssr: false\n});\n_c = DynamicComponent;\nvar Home = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(second), selectedMedia = ref[0], setSelectedMedia = ref[1];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n            className: \"container\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(DynamicComponent, {\n                        audio: true,\n                        render: function(param) {\n                            var status = param.status, startRecording = param.startRecording, stopRecording = param.stopRecording, mediaBlobUrl = param.mediaBlobUrl;\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: [\n                                            \"Audio Recording Status:- \",\n                                            status\n                                        ]\n                                    }, void 0, true, void 0, void 0),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        onClick: startRecording,\n                                        children: \"Start Audio Recording\"\n                                    }, void 0, false, void 0, void 0),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        onClick: stopRecording,\n                                        children: \"Stop Audio Recording\"\n                                    }, void 0, false, void 0, void 0),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"video\", {\n                                        src: mediaBlobUrl,\n                                        controls: true,\n                                        autoPlay: true\n                                    }, void 0, false, void 0, void 0)\n                                ]\n                            }, void 0, true, void 0, void 0);\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Users/abhinavbansal/Documents/Projects/React Media Recorder/Media-Recoder-POC/src/pages/index.tsx\",\n                        lineNumber: 18,\n                        columnNumber: 6\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(DynamicComponent, {\n                        video: true,\n                        render: function(param) {\n                            var status = param.status, startRecording = param.startRecording, stopRecording = param.stopRecording, mediaBlobUrl = param.mediaBlobUrl;\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: [\n                                            \"Video Recording Status:- \",\n                                            status\n                                        ]\n                                    }, void 0, true, void 0, void 0),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        onClick: startRecording,\n                                        children: \"Start Video Recording\"\n                                    }, void 0, false, void 0, void 0),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        onClick: stopRecording,\n                                        children: \"Stop Video Recording\"\n                                    }, void 0, false, void 0, void 0),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"video\", {\n                                        src: mediaBlobUrl,\n                                        controls: true,\n                                        autoPlay: true\n                                    }, void 0, false, void 0, void 0)\n                                ]\n                            }, void 0, true, void 0, void 0);\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Users/abhinavbansal/Documents/Projects/React Media Recorder/Media-Recoder-POC/src/pages/index.tsx\",\n                        lineNumber: 29,\n                        columnNumber: 6\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(DynamicComponent, {\n                        screen: true,\n                        render: function(param) {\n                            var status = param.status, startRecording = param.startRecording, stopRecording = param.stopRecording, mediaBlobUrl = param.mediaBlobUrl;\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: [\n                                            \"Screen Recording Status:- \",\n                                            status\n                                        ]\n                                    }, void 0, true, void 0, void 0),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        onClick: startRecording,\n                                        children: \"Start Screen Recording\"\n                                    }, void 0, false, void 0, void 0),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        onClick: stopRecording,\n                                        children: \"Stop Screen Recording\"\n                                    }, void 0, false, void 0, void 0),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"video\", {\n                                        src: mediaBlobUrl,\n                                        controls: true,\n                                        autoPlay: true\n                                    }, void 0, false, void 0, void 0)\n                                ]\n                            }, void 0, true, void 0, void 0);\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Users/abhinavbansal/Documents/Projects/React Media Recorder/Media-Recoder-POC/src/pages/index.tsx\",\n                        lineNumber: 40,\n                        columnNumber: 6\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/abhinavbansal/Documents/Projects/React Media Recorder/Media-Recoder-POC/src/pages/index.tsx\",\n                lineNumber: 17,\n                columnNumber: 5\n            }, _this)\n        }, void 0, false, {\n            fileName: \"/Users/abhinavbansal/Documents/Projects/React Media Recorder/Media-Recoder-POC/src/pages/index.tsx\",\n            lineNumber: 16,\n            columnNumber: 4\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/abhinavbansal/Documents/Projects/React Media Recorder/Media-Recoder-POC/src/pages/index.tsx\",\n        lineNumber: 15,\n        columnNumber: 3\n    }, _this);\n};\n_s(Home, \"EMI+4yHC71sOT0bW0X0slwO5hjg=\");\n_c1 = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c, _c1;\n$RefreshReg$(_c, \"DynamicComponent\");\n$RefreshReg$(_c1, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7Ozs7O2FBQ0YsQ0FDTDtDQUNGO0dBNUNLbkIsSUFBSTtBQUFKQSxNQUFBQSxJQUFJO0FBOENWLCtEQUFlQSxJQUFJLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LnRzeD8xOWEwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TmV4dFBhZ2V9IGZyb20gJ25leHQnO1xuaW1wb3J0IGR5bmFtaWMgZnJvbSAnbmV4dC9keW5hbWljJztcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuY29uc3QgRHluYW1pY0NvbXBvbmVudCA9IGR5bmFtaWMoXG5cdCgpID0+IGltcG9ydCgncmVhY3QtbWVkaWEtcmVjb3JkZXInKS50aGVuKG1vZCA9PiBtb2QuUmVhY3RNZWRpYVJlY29yZGVyKSxcblx0e1xuXHRcdHNzcjogZmFsc2UsXG5cdH0sXG4pO1xuXG5jb25zdCBIb21lOiBOZXh0UGFnZSA9ICgpID0+IHtcblxuXHRjb25zdCBbc2VsZWN0ZWRNZWRpYSwgc2V0U2VsZWN0ZWRNZWRpYV0gPSB1c2VTdGF0ZShzZWNvbmQpXG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cblx0XHRcdDxtYWluIGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuXHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdDxEeW5hbWljQ29tcG9uZW50XG5cdFx0XHRcdFx0XHRhdWRpb1xuXHRcdFx0XHRcdFx0cmVuZGVyPXsoe3N0YXR1cywgc3RhcnRSZWNvcmRpbmcsIHN0b3BSZWNvcmRpbmcsIG1lZGlhQmxvYlVybH0pID0+IChcblx0XHRcdFx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHRcdFx0XHQ8cD5BdWRpbyBSZWNvcmRpbmcgU3RhdHVzOi0ge3N0YXR1c308L3A+XG5cdFx0XHRcdFx0XHRcdFx0PGJ1dHRvbiBvbkNsaWNrPXtzdGFydFJlY29yZGluZ30+U3RhcnQgQXVkaW8gUmVjb3JkaW5nPC9idXR0b24+XG5cdFx0XHRcdFx0XHRcdFx0PGJ1dHRvbiBvbkNsaWNrPXtzdG9wUmVjb3JkaW5nfT5TdG9wIEF1ZGlvIFJlY29yZGluZzwvYnV0dG9uPlxuXHRcdFx0XHRcdFx0XHRcdDx2aWRlbyBzcmM9e21lZGlhQmxvYlVybH0gY29udHJvbHMgYXV0b1BsYXkgLz5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQpfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PER5bmFtaWNDb21wb25lbnRcblx0XHRcdFx0XHRcdHZpZGVvXG5cdFx0XHRcdFx0XHRyZW5kZXI9eyh7c3RhdHVzLCBzdGFydFJlY29yZGluZywgc3RvcFJlY29yZGluZywgbWVkaWFCbG9iVXJsfSkgPT4gKFxuXHRcdFx0XHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDxwPlZpZGVvIFJlY29yZGluZyBTdGF0dXM6LSB7c3RhdHVzfTwvcD5cblx0XHRcdFx0XHRcdFx0XHQ8YnV0dG9uIG9uQ2xpY2s9e3N0YXJ0UmVjb3JkaW5nfT5TdGFydCBWaWRlbyBSZWNvcmRpbmc8L2J1dHRvbj5cblx0XHRcdFx0XHRcdFx0XHQ8YnV0dG9uIG9uQ2xpY2s9e3N0b3BSZWNvcmRpbmd9PlN0b3AgVmlkZW8gUmVjb3JkaW5nPC9idXR0b24+XG5cdFx0XHRcdFx0XHRcdFx0PHZpZGVvIHNyYz17bWVkaWFCbG9iVXJsfSBjb250cm9scyBhdXRvUGxheSAvPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdCl9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8RHluYW1pY0NvbXBvbmVudFxuXHRcdFx0XHRcdFx0c2NyZWVuXG5cdFx0XHRcdFx0XHRyZW5kZXI9eyh7c3RhdHVzLCBzdGFydFJlY29yZGluZywgc3RvcFJlY29yZGluZywgbWVkaWFCbG9iVXJsfSkgPT4gKFxuXHRcdFx0XHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDxwPlNjcmVlbiBSZWNvcmRpbmcgU3RhdHVzOi0ge3N0YXR1c308L3A+XG5cdFx0XHRcdFx0XHRcdFx0PGJ1dHRvbiBvbkNsaWNrPXtzdGFydFJlY29yZGluZ30+U3RhcnQgU2NyZWVuIFJlY29yZGluZzwvYnV0dG9uPlxuXHRcdFx0XHRcdFx0XHRcdDxidXR0b24gb25DbGljaz17c3RvcFJlY29yZGluZ30+U3RvcCBTY3JlZW4gUmVjb3JkaW5nPC9idXR0b24+XG5cdFx0XHRcdFx0XHRcdFx0PHZpZGVvIHNyYz17bWVkaWFCbG9iVXJsfSBjb250cm9scyBhdXRvUGxheSAvPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdCl9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L21haW4+XG5cdFx0PC9kaXY+XG5cdCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIb21lO1xuIl0sIm5hbWVzIjpbImR5bmFtaWMiLCJ1c2VTdGF0ZSIsIkR5bmFtaWNDb21wb25lbnQiLCJ0aGVuIiwibW9kIiwiUmVhY3RNZWRpYVJlY29yZGVyIiwic3NyIiwiSG9tZSIsInNlY29uZCIsInNlbGVjdGVkTWVkaWEiLCJzZXRTZWxlY3RlZE1lZGlhIiwiZGl2IiwiY2xhc3NOYW1lIiwibWFpbiIsImF1ZGlvIiwicmVuZGVyIiwic3RhdHVzIiwic3RhcnRSZWNvcmRpbmciLCJzdG9wUmVjb3JkaW5nIiwibWVkaWFCbG9iVXJsIiwicCIsImJ1dHRvbiIsIm9uQ2xpY2siLCJ2aWRlbyIsInNyYyIsImNvbnRyb2xzIiwiYXV0b1BsYXkiLCJzY3JlZW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n");

/***/ })

});