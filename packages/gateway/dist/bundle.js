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
    host: localohst + ":" + "80",
    APP_INDOOR_PORT: Object({"NODE_ENV":"development","PORT":"80","SOCKETIO_SERVER_PORT":"4000","APP_INDOOR_STATIC_FILE":"E:\\Workspaces\\Repository\\nixstack\\packages\\client\\app-indoor\\dist"}).APP_INDOOR_PORT,
    appIndoorHost: localohst + ":" + Object({"NODE_ENV":"development","PORT":"80","SOCKETIO_SERVER_PORT":"4000","APP_INDOOR_STATIC_FILE":"E:\\Workspaces\\Repository\\nixstack\\packages\\client\\app-indoor\\dist"}).APP_INDOOR_PORT,
    sockeIOUrl: localohst + ":" + "4000" + "/socke.io/"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vLi4vc2hhcmUvY29uZmlnL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9jb25maWcvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcImJvZHlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmaW5hbGhhbmRsZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmb3J3YXJkZWQtZm9yXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaHR0cFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImh0dHAtcHJveHlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJodHRwLXByb3h5LXJ1bGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic2VydmUtc3RhdGljXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidXRpbFwiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFD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Ozs7OztBQ0FBLDBDOzs7Ozs7Ozs7OztBQ0FBLGlDOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLDZDOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLGlDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LnRzXCIpO1xuIiwiY29uc3QgbG9jYWxvaHN0ID0gJ2h0dHA6Ly9sb2NhbGhvc3QnXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBob3N0OiBgJHtsb2NhbG9oc3R9OiR7cHJvY2Vzcy5lbnYuUE9SVH1gLFxyXG4gIEFQUF9JTkRPT1JfUE9SVDogcHJvY2Vzcy5lbnYuQVBQX0lORE9PUl9QT1JULFxyXG4gIGFwcEluZG9vckhvc3Q6IGAke2xvY2Fsb2hzdH06JHtwcm9jZXNzLmVudi5BUFBfSU5ET09SX1BPUlR9YCxcclxuICBzb2NrZUlPVXJsOiBgJHtsb2NhbG9oc3R9OiR7cHJvY2Vzcy5lbnYuU09DS0VUSU9fU0VSVkVSX1BPUlR9L3NvY2tlLmlvL2BcclxufVxyXG4iLCJpbXBvcnQgY29uZmlnIGZyb20gJ0BzaGFyZS9jb25maWcnXHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgcHJveHlSdWxlczoge1xyXG4gICAgcnVsZXM6IHtcclxuICAgICAgJ1teP10qL3NvbHIvJzogY29uZmlnLnNvY2tlSU9VcmxcclxuICAgIH1cclxuICAgIC8vIGRlZmF1bHQ6IGNvbmZpZy5hcHBJbmRvb3JIb3N0XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBodHRwIGZyb20gJ2h0dHAnXHJcbmltcG9ydCB1dGlsIGZyb20gJ3V0aWwnXHJcbmltcG9ydCBodHRwUHJveHkgZnJvbSAnaHR0cC1wcm94eSdcclxuaW1wb3J0IEh0dHBQcm94eVJ1bGVzIGZyb20gJ2h0dHAtcHJveHktcnVsZXMnXHJcbmltcG9ydCBib2R5IGZyb20gJ2JvZHknXHJcbmltcG9ydCBmb3J3YXJkZWQgZnJvbSAnZm9yd2FyZGVkLWZvcidcclxuaW1wb3J0IHNlcnZlU3RhdGljIGZyb20gJ3NlcnZlLXN0YXRpYydcclxuaW1wb3J0IGZpbmFsaGFuZGxlciBmcm9tICdmaW5hbGhhbmRsZXInXHJcbmltcG9ydCBjb25maWcgZnJvbSAnLi9jb25maWcnXHJcbmltcG9ydCBzaGFyZUNvbmZpZyBmcm9tICdAc2hhcmUvY29uZmlnJ1xyXG5cclxuY29uc3QgcHJveHkgPSBodHRwUHJveHkuY3JlYXRlUHJveHkoKVxyXG5cclxuY29uc3QgcHJveHlSdWxlcyA9IG5ldyBIdHRwUHJveHlSdWxlcyhjb25maWcucHJveHlSdWxlcylcclxuXHJcbi8vIGNvbnN0IHNlcnZlID0gc2VydmVTdGF0aWMoc2hhcmVDb25maWcuYXBwSW5kb29ySG9zdClcclxuY29uc3Qgc2VydmUgPSBzZXJ2ZVN0YXRpYyhwcm9jZXNzLmVudi5BUFBfSU5ET09SX1NUQVRJQ19GSUxFIGFzIHN0cmluZylcclxuXHJcbmh0dHBcclxuICAuY3JlYXRlU2VydmVyKChyZXEsIHJlcykgPT4ge1xyXG4gICAgLy8gd2VicGFja2UtZGV2LXNlcnZlclxyXG4gICAgaWYgKHJlcS51cmwhLmluZGV4T2YoJy9zb2NranMtbm9kZScpICE9PSAtMSkge1xyXG4gICAgICAvLyBodHRwLnJlcXVlc3QoXHJcbiAgICAgIC8vICAge1xyXG4gICAgICAvLyAgICAgbWV0aG9kOiByZXEubWV0aG9kLFxyXG4gICAgICAvLyAgICAgcGF0aDogcmVxLnVybCxcclxuICAgICAgLy8gICAgIGhvc3Q6ICcwLjAuMC4wJyxcclxuICAgICAgLy8gICAgIHByb3RvY29sOiAnaHR0cDonLFxyXG4gICAgICAvLyAgICAgcG9ydDogc2hhcmVDb25maWcuQVBQX0lORE9PUl9QT1JUXHJcbiAgICAgIC8vICAgfSxcclxuICAgICAgLy8gICByID0+IHtcclxuICAgICAgLy8gICAgIHIucGlwZShyZXMpXHJcbiAgICAgIC8vICAgfVxyXG4gICAgICAvLyApXHJcblxyXG4gICAgICAvLyBwcm94eS53cyhyZXEsICd3czovL2xvY2FsaG9zdDozMDAwJywgcmVxLmhlYWRlcnMpXHJcblxyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuXHJcbiAgICA7KHJlcSBhcyBhbnkpLmhhc1NvY2tldElPID0gcmVxLnVybCEuaW5kZXhPZignL3NvY2tldC5pby8nKSAhPT0gLTFcclxuICAgIGlmICgocmVxIGFzIGFueSkuaGFzU29ja2V0SU8pIHtcclxuICAgICAgYm9keShyZXEsIChlcnI6IGFueSwgYm9keUluZm86IGFueSkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUuaW5mbyhgW1NPQ0tFVElPXSB7IHVybDogJHtyZXEudXJsfSwgYm9keTogJHtib2R5SW5mb30gfWApXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgdGFyZ2V0ID0gcHJveHlSdWxlcy5tYXRjaChyZXEpXHJcbiAgICBpZiAodGFyZ2V0KSB7XHJcbiAgICAgIHJldHVybiBwcm94eS53ZWIocmVxLCByZXMsIHtcclxuICAgICAgICBjaGFuZ2VPcmlnaW46IHRydWUsXHJcbiAgICAgICAgZm9sbG93UmVkaXJlY3RzOiB0cnVlLFxyXG4gICAgICAgIHRhcmdldFxyXG4gICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHNlcnZlKHJlcSBhcyBhbnksIHJlcyBhcyBhbnksIGZpbmFsaGFuZGxlcihyZXEsIHJlcykpXHJcblxyXG4gICAgLy8gcmVzLndyaXRlSGVhZCg1MDAsIHtcclxuICAgIC8vICAgJ0NvbnRlbnQtVHlwZSc6ICd0ZXh0L3BsYWluOyBjaGFyc2V0PXV0Zi04J1xyXG4gICAgLy8gfSlcclxuICAgIC8vIHJlcy5lbmQoJ+ivt+axgnVybOaIlui3r+W+hOS4jeWMuemFjeS7u+S9leinhOWIme+8gScpXHJcbiAgfSlcclxuICAubGlzdGVuKHByb2Nlc3MuZW52LlBPUlQsICgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKGDlj43lkJHku6PnkIbmnI3liqHlmajlt7LlkK/liqjvvIznq6/lj6PvvJoke3Byb2Nlc3MuZW52LlBPUlR977yBYClcclxuICB9KVxyXG5cclxucHJveHkub24oJ3Byb3h5UmVzJywgKHByb3h5UmVzLCByZXEsIHJlcykgPT4ge1xyXG4gIGNvbnN0IGFkZHJlc3MgPSBmb3J3YXJkZWQocmVxLCByZXEuaGVhZGVycylcclxuXHJcbiAgY29uc29sZS5pbmZvKFxyXG4gICAgdXRpbC5mb3JtYXQoXHJcbiAgICAgICdbcHJveHlSZXNdICVzICVzICVzICVzJyxcclxuICAgICAgcmVxLm1ldGhvZCxcclxuICAgICAgcHJveHlSZXMuc3RhdHVzQ29kZSxcclxuICAgICAgYWRkcmVzcy5pcCxcclxuICAgICAgcmVxLnVybFxyXG4gICAgKVxyXG4gIClcclxufSlcclxuXHJcbnByb3h5Lm9uKCdlcnJvcicsIChlcnI6IGFueSwgcmVxLCByZXMpID0+IHtcclxuICBjb25zdCBhZGRyZXNzID0gZm9yd2FyZGVkKHJlcSwgcmVxLmhlYWRlcnMpXHJcbiAgbGV0IGpzb25cclxuXHJcbiAgaWYgKGVyci5jb2RlKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFxyXG4gICAgICB1dGlsLmZvcm1hdChcclxuICAgICAgICAnW3Byb3h5IGVycm9yXSAlcyB8ICVzICVzICVzJyxcclxuICAgICAgICBhZGRyZXNzLmlwLFxyXG4gICAgICAgIHJlcS5tZXRob2QsXHJcbiAgICAgICAgcmVxLnVybCxcclxuICAgICAgICBlcnIubWVzc2FnZVxyXG4gICAgICApXHJcbiAgICApXHJcbiAgfVxyXG5cclxuICBpZiAoIXJlcy5oZWFkZXJzU2VudCkge1xyXG4gICAgcmVzLndyaXRlSGVhZCg1MDAsIHtcclxuICAgICAgJ2NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIGpzb24gPSB7XHJcbiAgICBlcnJvcjogJ3Byb3h5X2Vycm9yJyxcclxuICAgIHJlYXNvbjogZXJyLm1lc3NhZ2VcclxuICB9XHJcblxyXG4gIGNvbnNvbGUuZXJyb3IoXHJcbiAgICB1dGlsLmZvcm1hdChcclxuICAgICAgJ1twcm94eSBlcnJvcl0gJXMgJXMgJXMgJXMnLFxyXG4gICAgICByZXEubWV0aG9kLFxyXG4gICAgICByZXMuc3RhdHVzQ29kZSxcclxuICAgICAgYWRkcmVzcy5pcCxcclxuICAgICAgcmVxLnVybFxyXG4gICAgKVxyXG4gIClcclxuICByZXMuZW5kKEpTT04uc3RyaW5naWZ5KGpzb24pKVxyXG59KVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJib2R5XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZpbmFsaGFuZGxlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmb3J3YXJkZWQtZm9yXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImh0dHBcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaHR0cC1wcm94eVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJodHRwLXByb3h5LXJ1bGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInNlcnZlLXN0YXRpY1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ1dGlsXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=