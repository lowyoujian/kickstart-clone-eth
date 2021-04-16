webpackHotUpdate_N_E("pages/index",{

/***/ "./eth/factory.js":
/*!************************!*\
  !*** ./eth/factory.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! web3 */ "./node_modules/web3/lib/index.js");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _build_CampaignFactory_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./build/CampaignFactory.json */ "./eth/build/CampaignFactory.json");
var _build_CampaignFactory_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./build/CampaignFactory.json */ "./eth/build/CampaignFactory.json", 1);


var ethers = __webpack_require__(/*! ethers */ "./node_modules/ethers/lib.esm/index.js");


console.log(web3__WEBPACK_IMPORTED_MODULE_0___default.a, 'asdf');
var instance = new ethers.Contract('0x6d6E8D64ED5b409E589d273Fd7f7fBC19964271f', _build_CampaignFactory_json__WEBPACK_IMPORTED_MODULE_1__.abi, web3__WEBPACK_IMPORTED_MODULE_0___default.a);
/* harmony default export */ __webpack_exports__["default"] = (instance);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vZXRoL2ZhY3RvcnkuanMiXSwibmFtZXMiOlsiZXRoZXJzIiwicmVxdWlyZSIsImNvbnNvbGUiLCJsb2ciLCJwcm92aWRlciIsImluc3RhbmNlIiwiQ29udHJhY3QiLCJDYW1wYWlnbkZhY3RvcnkiLCJhYmkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQ0EsSUFBTUEsTUFBTSxHQUFHQyxtQkFBTyxDQUFDLHNEQUFELENBQXRCOztBQUNBO0FBRUFDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQywyQ0FBWixFQUFxQixNQUFyQjtBQUNBLElBQU1DLFFBQVEsR0FBRyxJQUFJTCxNQUFNLENBQUNNLFFBQVgsQ0FBb0IsNENBQXBCLEVBQWlFQyx3REFBZSxDQUFDQyxHQUFqRixFQUFzRkosMkNBQXRGLENBQWpCO0FBRWVDLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmUxZDE2NTdlODUxZjljZWQ0YmUyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcHJvdmlkZXIgZnJvbSAnd2ViMyc7XHJcbmNvbnN0IGV0aGVycyA9IHJlcXVpcmUoJ2V0aGVycycpXHJcbmltcG9ydCBDYW1wYWlnbkZhY3RvcnkgZnJvbSAnLi9idWlsZC9DYW1wYWlnbkZhY3RvcnkuanNvbic7XHJcblxyXG5jb25zb2xlLmxvZyhwcm92aWRlciwnYXNkZicpO1xyXG5jb25zdCBpbnN0YW5jZSA9IG5ldyBldGhlcnMuQ29udHJhY3QoJzB4NmQ2RThENjRFRDViNDA5RTU4OWQyNzNGZDdmN2ZCQzE5OTY0MjcxZicsQ2FtcGFpZ25GYWN0b3J5LmFiaSwgcHJvdmlkZXIpXHJcblxyXG5leHBvcnQgZGVmYXVsdCBpbnN0YW5jZTsiXSwic291cmNlUm9vdCI6IiJ9