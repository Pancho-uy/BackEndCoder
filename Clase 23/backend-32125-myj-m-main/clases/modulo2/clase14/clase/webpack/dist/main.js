/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./a1.js":
/*!***************!*\
  !*** ./a1.js ***!
  \***************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\nconst saludar1 = (nombre) => {\r\n    setTimeout(() => {\r\n        console.log(`Hola 1 ${nombre}`)\r\n    }, 1000)        \r\n}\r\n\r\nsaludar1('fede')\n\n//# sourceURL=webpack://clase14/./a1.js?");

/***/ }),

/***/ "./a2.js":
/*!***************!*\
  !*** ./a2.js ***!
  \***************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"saludar2\": () => (/* binding */ saludar2)\n/* harmony export */ });\nconst saludar2 = (nombre) => {\r\n    setTimeout(() => {\r\n        console.log(`Hola 2 ${nombre}`)\r\n    }, 2000)        \r\n}\r\n\r\nsaludar2('fede')\n\n//# sourceURL=webpack://clase14/./a2.js?");

/***/ }),

/***/ "./a3.js":
/*!***************!*\
  !*** ./a3.js ***!
  \***************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"saludar3\": () => (/* binding */ saludar3)\n/* harmony export */ });\nconst saludar3 = (nombre) => {\r\n    setTimeout(() => {\r\n        console.log(`Hola 3 ${nombre}`)\r\n    }, 3000)        \r\n}\r\n\r\nsaludar3('fede')\n\n//# sourceURL=webpack://clase14/./a3.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_modules__["./a1.js"](0, {}, __webpack_require__);
/******/ 	__webpack_modules__["./a2.js"](0, {}, __webpack_require__);
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./a3.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;