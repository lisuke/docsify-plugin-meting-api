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

/***/ "./src/aplayer-meting-api-loader.js":
/*!******************************************!*\
  !*** ./src/aplayer-meting-api-loader.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"APlayerMettingAPILoader\": () => (/* binding */ APlayerMettingAPILoader)\n/* harmony export */ });\nclass APlayerMettingAPILoader {\n    constructor(options) {\n        APlayerMettingAPILoader.instances = {};\n\n        this.options = options;\n        this.init();\n    }\n\n    instances() {\n        return APlayerMettingAPILoader.instances;\n    }\n\n    init() {\n        const _this = this;\n        this.getPlaylist(_this.options.playlists[0], function (data) {\n            if (_this.options['audio'] === undefined) {\n                _this.options['audio'] = [];\n            }\n            _this.options.audio = _this.options.audio.concat(data);\n\n            if (_this.options['elementId'] === undefined) {\n                _this.options['elementId'] = 'aplayer';\n            }\n\n            if (_this.options['api'] === undefined) {\n                _this.options['api'] = 'https://api.i-meto.com/meting/api';\n            }\n\n            _this.options.element = document.getElementById(\n                _this.options.elementId\n            );\n\n            _this.aplayer = new APlayer(_this.options);\n            _this.lazyLoading();\n        });\n    }\n\n    lazyLoading() {\n        const _this = this;\n        for (var i = 1; i < this.options.playlists.length; i++) {\n            this.getPlaylist(this.options.playlists[i], function (data) {\n                _this.aplayer.list.add(data);\n                console.log('lazyLoaded: playlist +1');\n            });\n        }\n    }\n\n    getPlaylist(playlist, success) {\n        const _this = this;\n        axios\n            .get(_this.options['api'], {\n                params: playlist,\n            })\n            .then(function (response) {\n                if (response.status == 200) {\n                    success(response.data);\n                }\n            })\n            .catch(function (error) {\n                console.log(error);\n            });\n    }\n}\n\n\n//# sourceURL=webpack://docsify-plugin-meting-api/./src/aplayer-meting-api-loader.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _aplayer_meting_api_loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./aplayer-meting-api-loader */ \"./src/aplayer-meting-api-loader.js\");\n/**\n * docsify-plugin-meting-api\n * lisuke <1657787678@qq.com>\n */\n\n\n\nconst MetingAPIOptions = {\n    elementId: 'aplayer',\n    api: 'https://api.i-meto.com/meting/api',\n    fixed: true,\n    autoplay: true,\n    lrcType: 3,\n    order: 'random',\n    loop: 'all',\n    mutex: true,\n    theme: '#b7daff',\n    playlists: [],\n};\n\nfunction plugin(hook, vm) {\n    let dom = Docsify.dom;\n\n    if (!window.$docsify.MetingAPI) {\n        return;\n    }\n\n    hook.mounted(function () {\n        let aplayer = dom.create('div');\n        aplayer.id = window.$docsify.MetingAPI.elementId;\n        dom.appendTo(dom.body, aplayer);\n    });\n\n    hook.ready(function () {\n        let apml = new _aplayer_meting_api_loader__WEBPACK_IMPORTED_MODULE_0__.APlayerMettingAPILoader(window.$docsify.MetingAPI);\n    });\n}\n\nwindow.$docsify = window.$docsify || {};\n\nwindow.$docsify.MetingAPI = Object.assign(\n    MetingAPIOptions,\n    window.$docsify.MetingAPI\n);\n\nwindow.$docsify.plugins = (window.$docsify.plugins || []).concat(plugin);\n\n\n//# sourceURL=webpack://docsify-plugin-meting-api/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;