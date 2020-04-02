/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../share/config/index.ts":
/*!********************************!*\
  !*** ../share/config/index.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var localohst = 'http://localhost';
exports.default = {
    PORT: "80",
    SOCKETIO_SERVER_PORT: "4000",
    host: localohst + ":" + "80",
    APP_INDOOR_PORT: Object({"NODE_ENV":"development","PORT":"80","SOCKETIO_SERVER_PORT":"4000","APP_INDOOR_STATIC_FILE":"E:\\Workspaces\\Repository\\nixstack\\packages\\client\\app-indoor\\dist"}).APP_INDOOR_PORT,
    appIndoorHost: localohst + ":" + Object({"NODE_ENV":"development","PORT":"80","SOCKETIO_SERVER_PORT":"4000","APP_INDOOR_STATIC_FILE":"E:\\Workspaces\\Repository\\nixstack\\packages\\client\\app-indoor\\dist"}).APP_INDOOR_PORT,
    sockeIOUrl: localohst + ":" + "4000" + "/socke.io/",
    APP_INDOOR_STATIC_FILE: "E:\\Workspaces\\Repository\\nixstack\\packages\\client\\app-indoor\\dist"
};


/***/ }),

/***/ "./src/config/index.ts":
/*!*****************************!*\
  !*** ./src/config/index.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = __importDefault(__webpack_require__(/*! @share/config */ "../share/config/index.ts"));
exports.default = {
    proxyRules: {
        rules: {
            '[^?]*/solr/': config_1.default.sockeIOUrl
        }
        // default: config.appIndoorHost
    }
};


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = __importDefault(__webpack_require__(/*! http */ "http"));
var util_1 = __importDefault(__webpack_require__(/*! util */ "util"));
var http_proxy_1 = __importDefault(__webpack_require__(/*! http-proxy */ "http-proxy"));
var http_proxy_rules_1 = __importDefault(__webpack_require__(/*! http-proxy-rules */ "http-proxy-rules"));
var body_1 = __importDefault(__webpack_require__(/*! body */ "body"));
var forwarded_for_1 = __importDefault(__webpack_require__(/*! forwarded-for */ "forwarded-for"));
var serve_static_1 = __importDefault(__webpack_require__(/*! serve-static */ "serve-static"));
var finalhandler_1 = __importDefault(__webpack_require__(/*! finalhandler */ "finalhandler"));
var config_1 = __importDefault(__webpack_require__(/*! ./config */ "./src/config/index.ts"));
var proxy = http_proxy_1.default.createProxy();
var proxyRules = new http_proxy_rules_1.default(config_1.default.proxyRules);
// const serve = serveStatic(shareConfig.appIndoorHost)
var serve = serve_static_1.default("E:\\Workspaces\\Repository\\nixstack\\packages\\client\\app-indoor\\dist");
http_1.default
    .createServer(function (req, res) {
    // webpacke-dev-server
    if (req.url.indexOf('/sockjs-node') !== -1) {
        // http.request(
        //   {
        //     method: req.method,
        //     path: req.url,
        //     host: '0.0.0.0',
        //     protocol: 'http:',
        //     port: shareConfig.APP_INDOOR_PORT
        //   },
        //   r => {
        //     r.pipe(res)
        //   }
        // )
        // proxy.ws(req, 'ws://localhost:3000', req.headers)
        return;
    }
    ;
    req.hasSocketIO = req.url.indexOf('/socket.io/') !== -1;
    if (req.hasSocketIO) {
        body_1.default(req, function (err, bodyInfo) {
            console.info("[SOCKETIO] { url: " + req.url + ", body: " + bodyInfo + " }");
        });
    }
    var target = proxyRules.match(req);
    if (target) {
        return proxy.web(req, res, {
            changeOrigin: true,
            followRedirects: true,
            target: target
        });
    }
    serve(req, res, finalhandler_1.default(req, res));
    // res.writeHead(500, {
    //   'Content-Type': 'text/plain; charset=utf-8'
    // })
    // res.end('请求url或路径不匹配任何规则！')
})
    .listen("80", function () {
    console.log("\u53CD\u5411\u4EE3\u7406\u670D\u52A1\u5668\u5DF2\u542F\u52A8\uFF0C\u7AEF\u53E3\uFF1A" + "80" + "\uFF01");
});
proxy.on('proxyRes', function (proxyRes, req, res) {
    var address = forwarded_for_1.default(req, req.headers);
    console.info(util_1.default.format('[proxyRes] %s %s %s %s', req.method, proxyRes.statusCode, address.ip, req.url));
});
proxy.on('error', function (err, req, res) {
    var address = forwarded_for_1.default(req, req.headers);
    var json;
    if (err.code) {
        console.error(util_1.default.format('[proxy error] %s | %s %s %s', address.ip, req.method, req.url, err.message));
    }
    if (!res.headersSent) {
        res.writeHead(500, {
            'content-type': 'application/json'
        });
    }
    json = {
        error: 'proxy_error',
        reason: err.message
    };
    console.error(util_1.default.format('[proxy error] %s %s %s %s', req.method, res.statusCode, address.ip, req.url));
    res.end(JSON.stringify(json));
});


/***/ }),

/***/ "body":
/*!***********************!*\
  !*** external "body" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("body");

/***/ }),

/***/ "finalhandler":
/*!*******************************!*\
  !*** external "finalhandler" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("finalhandler");

/***/ }),

/***/ "forwarded-for":
/*!********************************!*\
  !*** external "forwarded-for" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("forwarded-for");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("http");

/***/ }),

/***/ "http-proxy":
/*!*****************************!*\
  !*** external "http-proxy" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("http-proxy");

/***/ }),

/***/ "http-proxy-rules":
/*!***********************************!*\
  !*** external "http-proxy-rules" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("http-proxy-rules");

/***/ }),

/***/ "serve-static":
/*!*******************************!*\
  !*** external "serve-static" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("serve-static");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("util");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vLi4vc2hhcmUvY29uZmlnL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9jb25maWcvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcImJvZHlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmaW5hbGhhbmRsZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmb3J3YXJkZWQtZm9yXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaHR0cFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImh0dHAtcHJveHlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJodHRwLXByb3h5LXJ1bGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic2VydmUtc3RhdGljXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidXRpbFwiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFD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SSxDQUFDLENBQUM7QUFDL0IsQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7QUN0SEYsaUM7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsMEM7Ozs7Ozs7Ozs7O0FDQUEsaUM7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsNkM7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsaUMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXgudHNcIik7XG4iLCJjb25zdCBsb2NhbG9oc3QgPSAnaHR0cDovL2xvY2FsaG9zdCdcclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIFBPUlQ6IHByb2Nlc3MuZW52LlBPUlQsXHJcbiAgU09DS0VUSU9fU0VSVkVSX1BPUlQ6IHByb2Nlc3MuZW52LlNPQ0tFVElPX1NFUlZFUl9QT1JULFxyXG4gIGhvc3Q6IGAke2xvY2Fsb2hzdH06JHtwcm9jZXNzLmVudi5QT1JUfWAsXHJcbiAgQVBQX0lORE9PUl9QT1JUOiBwcm9jZXNzLmVudi5BUFBfSU5ET09SX1BPUlQsXHJcbiAgYXBwSW5kb29ySG9zdDogYCR7bG9jYWxvaHN0fToke3Byb2Nlc3MuZW52LkFQUF9JTkRPT1JfUE9SVH1gLFxyXG4gIHNvY2tlSU9Vcmw6IGAke2xvY2Fsb2hzdH06JHtwcm9jZXNzLmVudi5TT0NLRVRJT19TRVJWRVJfUE9SVH0vc29ja2UuaW8vYCxcclxuICBBUFBfSU5ET09SX1NUQVRJQ19GSUxFOiBwcm9jZXNzLmVudi5BUFBfSU5ET09SX1NUQVRJQ19GSUxFXHJcbn1cclxuIiwiaW1wb3J0IGNvbmZpZyBmcm9tICdAc2hhcmUvY29uZmlnJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIHByb3h5UnVsZXM6IHtcclxuICAgIHJ1bGVzOiB7XHJcbiAgICAgICdbXj9dKi9zb2xyLyc6IGNvbmZpZy5zb2NrZUlPVXJsXHJcbiAgICB9XHJcbiAgICAvLyBkZWZhdWx0OiBjb25maWcuYXBwSW5kb29ySG9zdFxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgaHR0cCBmcm9tICdodHRwJ1xyXG5pbXBvcnQgdXRpbCBmcm9tICd1dGlsJ1xyXG5pbXBvcnQgaHR0cFByb3h5IGZyb20gJ2h0dHAtcHJveHknXHJcbmltcG9ydCBIdHRwUHJveHlSdWxlcyBmcm9tICdodHRwLXByb3h5LXJ1bGVzJ1xyXG5pbXBvcnQgYm9keSBmcm9tICdib2R5J1xyXG5pbXBvcnQgZm9yd2FyZGVkIGZyb20gJ2ZvcndhcmRlZC1mb3InXHJcbmltcG9ydCBzZXJ2ZVN0YXRpYyBmcm9tICdzZXJ2ZS1zdGF0aWMnXHJcbmltcG9ydCBmaW5hbGhhbmRsZXIgZnJvbSAnZmluYWxoYW5kbGVyJ1xyXG5pbXBvcnQgY29uZmlnIGZyb20gJy4vY29uZmlnJ1xyXG5pbXBvcnQgc2hhcmVDb25maWcgZnJvbSAnQHNoYXJlL2NvbmZpZydcclxuXHJcbmNvbnN0IHByb3h5ID0gaHR0cFByb3h5LmNyZWF0ZVByb3h5KClcclxuXHJcbmNvbnN0IHByb3h5UnVsZXMgPSBuZXcgSHR0cFByb3h5UnVsZXMoY29uZmlnLnByb3h5UnVsZXMpXHJcblxyXG4vLyBjb25zdCBzZXJ2ZSA9IHNlcnZlU3RhdGljKHNoYXJlQ29uZmlnLmFwcEluZG9vckhvc3QpXHJcbmNvbnN0IHNlcnZlID0gc2VydmVTdGF0aWMocHJvY2Vzcy5lbnYuQVBQX0lORE9PUl9TVEFUSUNfRklMRSBhcyBzdHJpbmcpXHJcblxyXG5odHRwXHJcbiAgLmNyZWF0ZVNlcnZlcigocmVxLCByZXMpID0+IHtcclxuICAgIC8vIHdlYnBhY2tlLWRldi1zZXJ2ZXJcclxuICAgIGlmIChyZXEudXJsIS5pbmRleE9mKCcvc29ja2pzLW5vZGUnKSAhPT0gLTEpIHtcclxuICAgICAgLy8gaHR0cC5yZXF1ZXN0KFxyXG4gICAgICAvLyAgIHtcclxuICAgICAgLy8gICAgIG1ldGhvZDogcmVxLm1ldGhvZCxcclxuICAgICAgLy8gICAgIHBhdGg6IHJlcS51cmwsXHJcbiAgICAgIC8vICAgICBob3N0OiAnMC4wLjAuMCcsXHJcbiAgICAgIC8vICAgICBwcm90b2NvbDogJ2h0dHA6JyxcclxuICAgICAgLy8gICAgIHBvcnQ6IHNoYXJlQ29uZmlnLkFQUF9JTkRPT1JfUE9SVFxyXG4gICAgICAvLyAgIH0sXHJcbiAgICAgIC8vICAgciA9PiB7XHJcbiAgICAgIC8vICAgICByLnBpcGUocmVzKVxyXG4gICAgICAvLyAgIH1cclxuICAgICAgLy8gKVxyXG5cclxuICAgICAgLy8gcHJveHkud3MocmVxLCAnd3M6Ly9sb2NhbGhvc3Q6MzAwMCcsIHJlcS5oZWFkZXJzKVxyXG5cclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcblxyXG4gICAgOyhyZXEgYXMgYW55KS5oYXNTb2NrZXRJTyA9IHJlcS51cmwhLmluZGV4T2YoJy9zb2NrZXQuaW8vJykgIT09IC0xXHJcbiAgICBpZiAoKHJlcSBhcyBhbnkpLmhhc1NvY2tldElPKSB7XHJcbiAgICAgIGJvZHkocmVxLCAoZXJyOiBhbnksIGJvZHlJbmZvOiBhbnkpID0+IHtcclxuICAgICAgICBjb25zb2xlLmluZm8oYFtTT0NLRVRJT10geyB1cmw6ICR7cmVxLnVybH0sIGJvZHk6ICR7Ym9keUluZm99IH1gKVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHRhcmdldCA9IHByb3h5UnVsZXMubWF0Y2gocmVxKVxyXG4gICAgaWYgKHRhcmdldCkge1xyXG4gICAgICByZXR1cm4gcHJveHkud2ViKHJlcSwgcmVzLCB7XHJcbiAgICAgICAgY2hhbmdlT3JpZ2luOiB0cnVlLFxyXG4gICAgICAgIGZvbGxvd1JlZGlyZWN0czogdHJ1ZSxcclxuICAgICAgICB0YXJnZXRcclxuICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBzZXJ2ZShyZXEgYXMgYW55LCByZXMgYXMgYW55LCBmaW5hbGhhbmRsZXIocmVxLCByZXMpKVxyXG5cclxuICAgIC8vIHJlcy53cml0ZUhlYWQoNTAwLCB7XHJcbiAgICAvLyAgICdDb250ZW50LVR5cGUnOiAndGV4dC9wbGFpbjsgY2hhcnNldD11dGYtOCdcclxuICAgIC8vIH0pXHJcbiAgICAvLyByZXMuZW5kKCfor7fmsYJ1cmzmiJbot6/lvoTkuI3ljLnphY3ku7vkvZXop4TliJnvvIEnKVxyXG4gIH0pXHJcbiAgLmxpc3Rlbihwcm9jZXNzLmVudi5QT1JULCAoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhg5Y+N5ZCR5Luj55CG5pyN5Yqh5Zmo5bey5ZCv5Yqo77yM56uv5Y+j77yaJHtwcm9jZXNzLmVudi5QT1JUfe+8gWApXHJcbiAgfSlcclxuXHJcbnByb3h5Lm9uKCdwcm94eVJlcycsIChwcm94eVJlcywgcmVxLCByZXMpID0+IHtcclxuICBjb25zdCBhZGRyZXNzID0gZm9yd2FyZGVkKHJlcSwgcmVxLmhlYWRlcnMpXHJcblxyXG4gIGNvbnNvbGUuaW5mbyhcclxuICAgIHV0aWwuZm9ybWF0KFxyXG4gICAgICAnW3Byb3h5UmVzXSAlcyAlcyAlcyAlcycsXHJcbiAgICAgIHJlcS5tZXRob2QsXHJcbiAgICAgIHByb3h5UmVzLnN0YXR1c0NvZGUsXHJcbiAgICAgIGFkZHJlc3MuaXAsXHJcbiAgICAgIHJlcS51cmxcclxuICAgIClcclxuICApXHJcbn0pXHJcblxyXG5wcm94eS5vbignZXJyb3InLCAoZXJyOiBhbnksIHJlcSwgcmVzKSA9PiB7XHJcbiAgY29uc3QgYWRkcmVzcyA9IGZvcndhcmRlZChyZXEsIHJlcS5oZWFkZXJzKVxyXG4gIGxldCBqc29uXHJcblxyXG4gIGlmIChlcnIuY29kZSkge1xyXG4gICAgY29uc29sZS5lcnJvcihcclxuICAgICAgdXRpbC5mb3JtYXQoXHJcbiAgICAgICAgJ1twcm94eSBlcnJvcl0gJXMgfCAlcyAlcyAlcycsXHJcbiAgICAgICAgYWRkcmVzcy5pcCxcclxuICAgICAgICByZXEubWV0aG9kLFxyXG4gICAgICAgIHJlcS51cmwsXHJcbiAgICAgICAgZXJyLm1lc3NhZ2VcclxuICAgICAgKVxyXG4gICAgKVxyXG4gIH1cclxuXHJcbiAgaWYgKCFyZXMuaGVhZGVyc1NlbnQpIHtcclxuICAgIHJlcy53cml0ZUhlYWQoNTAwLCB7XHJcbiAgICAgICdjb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBqc29uID0ge1xyXG4gICAgZXJyb3I6ICdwcm94eV9lcnJvcicsXHJcbiAgICByZWFzb246IGVyci5tZXNzYWdlXHJcbiAgfVxyXG5cclxuICBjb25zb2xlLmVycm9yKFxyXG4gICAgdXRpbC5mb3JtYXQoXHJcbiAgICAgICdbcHJveHkgZXJyb3JdICVzICVzICVzICVzJyxcclxuICAgICAgcmVxLm1ldGhvZCxcclxuICAgICAgcmVzLnN0YXR1c0NvZGUsXHJcbiAgICAgIGFkZHJlc3MuaXAsXHJcbiAgICAgIHJlcS51cmxcclxuICAgIClcclxuICApXHJcbiAgcmVzLmVuZChKU09OLnN0cmluZ2lmeShqc29uKSlcclxufSlcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYm9keVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmaW5hbGhhbmRsZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZm9yd2FyZGVkLWZvclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJodHRwXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImh0dHAtcHJveHlcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaHR0cC1wcm94eS1ydWxlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzZXJ2ZS1zdGF0aWNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidXRpbFwiKTsiXSwic291cmNlUm9vdCI6IiJ9