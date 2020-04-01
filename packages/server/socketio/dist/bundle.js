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

/***/ "../../share/constant/EActionType.ts":
/*!********************************************************************************!*\
  !*** E:/Workspaces/Repository/nixstack/packages/share/constant/EActionType.ts ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var EUserActionType;
(function (EUserActionType) {
    EUserActionType["SING_UP"] = "SING_UP";
    EUserActionType["LOG_IN"] = "LOG_IN";
    EUserActionType["LOG_OUT"] = "LOG_OUT";
    EUserActionType["LGG_SUCCESS"] = "LGG_SUCCES";
})(EUserActionType = exports.EUserActionType || (exports.EUserActionType = {}));
var EProjectActionType;
(function (EProjectActionType) {
    EProjectActionType["ADD_PROJECT"] = "ADD_PROJECT";
    EProjectActionType["LIST_PROJECT"] = "LIST_PROJECT";
    EProjectActionType["UPDATE_PROJECT"] = "UPDATE_PROJECT";
    EProjectActionType["DEL_PROJECT"] = "DEL_PROJECT";
})(EProjectActionType = exports.EProjectActionType || (exports.EProjectActionType = {}));
exports.EActionType = __assign(__assign({}, EUserActionType), EProjectActionType);


/***/ }),

/***/ "../../share/constant/EBaseConstant.ts":
/*!**********************************************************************************!*\
  !*** E:/Workspaces/Repository/nixstack/packages/share/constant/EBaseConstant.ts ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var EUserStatus;
(function (EUserStatus) {
    EUserStatus[EUserStatus["SIGN_UP"] = 1] = "SIGN_UP";
    EUserStatus[EUserStatus["LOG_IN"] = 2] = "LOG_IN";
    EUserStatus[EUserStatus["LOG_OUT"] = 3] = "LOG_OUT";
})(EUserStatus = exports.EUserStatus || (exports.EUserStatus = {}));
var EProjectStatus;
(function (EProjectStatus) {
    EProjectStatus[EProjectStatus["PROJECT_NEW"] = 1] = "PROJECT_NEW";
    EProjectStatus[EProjectStatus["PROJECT_LIST"] = 2] = "PROJECT_LIST";
    EProjectStatus[EProjectStatus["PROJECT_EDIT"] = 3] = "PROJECT_EDIT";
    EProjectStatus[EProjectStatus["PROJECT_DEL"] = 4] = "PROJECT_DEL";
})(EProjectStatus = exports.EProjectStatus || (exports.EProjectStatus = {}));


/***/ }),

/***/ "../../share/constant/index.ts":
/*!**************************************************************************!*\
  !*** E:/Workspaces/Repository/nixstack/packages/share/constant/index.ts ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./EBaseConstant */ "../../share/constant/EBaseConstant.ts"));
__export(__webpack_require__(/*! ./EActionType */ "../../share/constant/EActionType.ts"));


/***/ }),

/***/ "./src/constant/FilePath.ts":
/*!**********************************!*\
  !*** ./src/constant/FilePath.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.USER_FILE_PATH = './user.json';


/***/ }),

/***/ "./src/constant/index.ts":
/*!*******************************!*\
  !*** ./src/constant/index.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./FilePath */ "./src/constant/FilePath.ts"));


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
var fs_1 = __importDefault(__webpack_require__(/*! fs */ "fs"));
var socket_io_1 = __importDefault(__webpack_require__(/*! socket.io */ "socket.io"));
var http_1 = __importDefault(__webpack_require__(/*! http */ "http"));
var constant_1 = __webpack_require__(/*! @share/constant */ "../../share/constant/index.ts");
var constant_2 = __webpack_require__(/*! ./constant */ "./src/constant/index.ts");
var log4js_1 = __webpack_require__(/*! log4js */ "log4js");
log4js_1.configure('./config/log4js.json');
var logger = log4js_1.getLogger();
logger.level = Object({"NODE_ENV":"development","SOCKETIO_SERVER_PORT":"4000"}).LOGGER_LEVEL || 'off';
var userList = [];
var server = http_1.default.createServer(function (req, res) {
    res.writeHead(200);
    res.end('hello world');
});
// https://stackoverflow.com/questions/28306740/socket-io-connect-to-unix-socket
// socket.io setup
var io = socket_io_1.default.listen(server);
io.set('transports', ['websocket']);
var protocol = '';
var isDev = "development" === 'development';
if (!isDev) {
    // let ngnix know we want to start serving from the proxy
    fs_1.default.openSync('/tmp/app-initialized', 'w');
    protocol = '/tmp/nginx.socket';
    // FIX: address in used
    if (fs_1.default.existsSync(protocol))
        fs_1.default.unlinkSync(protocol);
}
else {
    protocol = "4000";
}
// listen to ngnix socket
server.listen(protocol, function () {
    // FIX: Permission denied
    if (protocol && fs_1.default.existsSync(protocol))
        fs_1.default.chmodSync(protocol, 755);
    logger.debug("server up");
});
io.on('connect_error', function (err) {
    logger.debug(err);
});
io.on('connect_timeout', function (err) {
    logger.debug(err);
});
io.on('connection', function (socket) {
    logger.debug("socket: " + socket.id + " connected");
    var currentUser;
    // socket.emit('connection', socket.id)
    socket.on('disconnect', function () {
        logger.debug("disconnected");
    });
    socket.on(constant_1.EActionType.LOG_IN, function (action) {
        logger.debug(constant_1.EActionType.LOG_IN + "--" + JSON.stringify(action));
        currentUser = action.payload.user;
        var existingUser = userList.find(function (user) { return user.name === currentUser.name; });
        logger.debug("existingUser:" + existingUser);
        if (existingUser) {
            currentUser = existingUser;
        }
        else {
            newUser(currentUser);
        }
        logger.debug("" + JSON.stringify(currentUser));
        // socket.emit(EActionType.LGG_SUCCESS, { msg: 'Log in success...' })
        socket.emit(constant_1.EActionType.LOG_IN, {
            type: constant_1.EActionType.LOG_IN,
            payload: { user: currentUser }
        });
    });
    // socket.on(EActionType.ADD_PROJECT, (action: ActionType<typeof addProject>) => {
    // })
});
function readJson(path, callback) {
    fs_1.default.readFile(path, 'utf8', function (err, data) {
        if (err) {
            logger.error(err);
        }
        else {
            callback(JSON.parse(data));
        }
    });
}
var newUser = function (user) {
    logger.debug("new user: " + user.name);
    user.name = user.name;
    userList.push(user);
    // Save to file
    readJson(constant_2.USER_FILE_PATH, function (userData) {
        userData.push(user);
        var json = JSON.stringify(userData);
        logger.debug(json);
        fs_1.default.writeFile(constant_2.USER_FILE_PATH, json, 'utf8', function (err) {
            if (err) {
                logger.debug(err);
                return;
            }
            logger.debug("Write to " + constant_2.USER_FILE_PATH);
            return;
        });
    });
};


/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("http");

/***/ }),

/***/ "log4js":
/*!*************************!*\
  !*** external "log4js" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("log4js");

/***/ }),

/***/ "socket.io":
/*!****************************!*\
  !*** external "socket.io" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("socket.io");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vLi4vLi4vc2hhcmUvY29uc3RhbnQvRUFjdGlvblR5cGUudHMiLCJ3ZWJwYWNrOi8vLy4vLi4vLi4vc2hhcmUvY29uc3RhbnQvRUJhc2VDb25zdGFudC50cyIsIndlYnBhY2s6Ly8vLi8uLi8uLi9zaGFyZS9jb25zdGFudC9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uc3RhbnQvRmlsZVBhdGgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnN0YW50L2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImh0dHBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJsb2c0anNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzb2NrZXQuaW9cIiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFD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LHlCQUFnQixDQUFDO1lBQzFDLE9BQU07UUFDUixDQUFDLENBQUM7SUFDSixDQUFDLENBQUM7QUFDSixDQUFDOzs7Ozs7Ozs7Ozs7QUNySEQsK0I7Ozs7Ozs7Ozs7O0FDQUEsaUM7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsc0MiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXgudHNcIik7XG4iLCJleHBvcnQgZW51bSBFVXNlckFjdGlvblR5cGUge1xyXG4gIFNJTkdfVVAgPSAnU0lOR19VUCcsXHJcbiAgTE9HX0lOID0gJ0xPR19JTicsXHJcbiAgTE9HX09VVCA9ICdMT0dfT1VUJyxcclxuICBMR0dfU1VDQ0VTUyA9ICdMR0dfU1VDQ0VTJ1xyXG59XHJcblxyXG5leHBvcnQgZW51bSBFUHJvamVjdEFjdGlvblR5cGUge1xyXG4gIEFERF9QUk9KRUNUID0gJ0FERF9QUk9KRUNUJyxcclxuICBMSVNUX1BST0pFQ1QgPSAnTElTVF9QUk9KRUNUJyxcclxuICBVUERBVEVfUFJPSkVDVCA9ICdVUERBVEVfUFJPSkVDVCcsXHJcbiAgREVMX1BST0pFQ1QgPSAnREVMX1BST0pFQ1QnXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBFQWN0aW9uVHlwZSA9IHsgLi4uRVVzZXJBY3Rpb25UeXBlLCAuLi5FUHJvamVjdEFjdGlvblR5cGUgfSIsImV4cG9ydCBlbnVtIEVVc2VyU3RhdHVzIHtcclxuICBTSUdOX1VQID0gMSxcclxuICBMT0dfSU4gPSAyLFxyXG4gIExPR19PVVQgPSAzXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIEVQcm9qZWN0U3RhdHVzIHtcclxuICBQUk9KRUNUX05FVyA9IDEsXHJcbiAgUFJPSkVDVF9MSVNUID0gMixcclxuICBQUk9KRUNUX0VESVQgPSAzLFxyXG4gIFBST0pFQ1RfREVMID0gNFxyXG59XHJcbiIsImV4cG9ydCAqIGZyb20gJy4vRUJhc2VDb25zdGFudCdcclxuZXhwb3J0ICogZnJvbSAnLi9FQWN0aW9uVHlwZSciLCJleHBvcnQgY29uc3QgVVNFUl9GSUxFX1BBVEg6IHN0cmluZyA9ICcuL3VzZXIuanNvbiciLCJleHBvcnQgKiBmcm9tICcuL0ZpbGVQYXRoJyIsImltcG9ydCBmcyBmcm9tICdmcydcclxuaW1wb3J0IHNvY2tldElvIGZyb20gJ3NvY2tldC5pbydcclxuaW1wb3J0IGh0dHAgZnJvbSAnaHR0cCdcclxuaW1wb3J0IHBhdGggZnJvbSAncGF0aCdcclxuaW1wb3J0IHsgQWN0aW9uVHlwZSB9IGZyb20gJ3R5cGVzYWZlLWFjdGlvbnMnXHJcbmltcG9ydCB7IEVBY3Rpb25UeXBlIH0gZnJvbSAnQHNoYXJlL2NvbnN0YW50J1xyXG5pbXBvcnQgeyBhZGRQcm9qZWN0IH0gZnJvbSAnQHNoYXJlL2FjdGlvbi9Qcm9qZWN0QWN0aW9uJ1xyXG5pbXBvcnQgeyBJVXNlckR0byB9IGZyb20gJy4vZHRvJ1xyXG5pbXBvcnQgeyBVU0VSX0ZJTEVfUEFUSCB9IGZyb20gJy4vY29uc3RhbnQnXHJcbmltcG9ydCB7IGxvZ0luIH0gZnJvbSAnQHNoYXJlL2FjdGlvbi9Vc2VyQWN0aW9uJ1xyXG5cclxuaW1wb3J0IHsgY29uZmlndXJlLCBnZXRMb2dnZXIgfSBmcm9tICdsb2c0anMnXHJcbmNvbmZpZ3VyZSgnLi9jb25maWcvbG9nNGpzLmpzb24nKVxyXG5jb25zdCBsb2dnZXIgPSBnZXRMb2dnZXIoKVxyXG5sb2dnZXIubGV2ZWwgPSBwcm9jZXNzLmVudi5MT0dHRVJfTEVWRUwgfHwgJ29mZidcclxuXHJcbmNvbnN0IHVzZXJMaXN0OiBJVXNlckR0b1tdID0gW11cclxuXHJcbmNvbnN0IHNlcnZlciA9IGh0dHAuY3JlYXRlU2VydmVyKGZ1bmN0aW9uKHJlcTogYW55LCByZXM6IGFueSkge1xyXG4gIHJlcy53cml0ZUhlYWQoMjAwKVxyXG4gIHJlcy5lbmQoJ2hlbGxvIHdvcmxkJylcclxufSlcclxuXHJcbi8vIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzI4MzA2NzQwL3NvY2tldC1pby1jb25uZWN0LXRvLXVuaXgtc29ja2V0XHJcbi8vIHNvY2tldC5pbyBzZXR1cFxyXG5jb25zdCBpbyA9IHNvY2tldElvLmxpc3RlbihzZXJ2ZXIpIGFzIGFueVxyXG5pby5zZXQoJ3RyYW5zcG9ydHMnLCBbJ3dlYnNvY2tldCddKVxyXG5cclxubGV0IHByb3RvY29sID0gJydcclxuY29uc3QgaXNEZXYgPSBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50J1xyXG5pZiAoIWlzRGV2KSB7XHJcbiAgLy8gbGV0IG5nbml4IGtub3cgd2Ugd2FudCB0byBzdGFydCBzZXJ2aW5nIGZyb20gdGhlIHByb3h5XHJcbiAgZnMub3BlblN5bmMoJy90bXAvYXBwLWluaXRpYWxpemVkJywgJ3cnKVxyXG4gIHByb3RvY29sID0gJy90bXAvbmdpbnguc29ja2V0J1xyXG4gIC8vIEZJWDogYWRkcmVzcyBpbiB1c2VkXHJcbiAgaWYgKGZzLmV4aXN0c1N5bmMocHJvdG9jb2wpKSBmcy51bmxpbmtTeW5jKHByb3RvY29sKVxyXG59IGVsc2Uge1xyXG4gIHByb3RvY29sID0gcHJvY2Vzcy5lbnYuU09DS0VUSU9fU0VSVkVSX1BPUlQgYXMgc3RyaW5nXHJcbn1cclxuXHJcbi8vIGxpc3RlbiB0byBuZ25peCBzb2NrZXRcclxuc2VydmVyLmxpc3Rlbihwcm90b2NvbCwgZnVuY3Rpb24oKSB7XHJcbiAgLy8gRklYOiBQZXJtaXNzaW9uIGRlbmllZFxyXG4gIGlmIChwcm90b2NvbCAmJiBmcy5leGlzdHNTeW5jKHByb3RvY29sKSkgZnMuY2htb2RTeW5jKHByb3RvY29sLCA3NTUpXHJcbiAgbG9nZ2VyLmRlYnVnKGBzZXJ2ZXIgdXBgKVxyXG59KVxyXG5cclxuaW8ub24oJ2Nvbm5lY3RfZXJyb3InLCBmdW5jdGlvbihlcnI6IGFueSkge1xyXG4gIGxvZ2dlci5kZWJ1ZyhlcnIpXHJcbn0pXHJcblxyXG5pby5vbignY29ubmVjdF90aW1lb3V0JywgZnVuY3Rpb24oZXJyOiBhbnkpIHtcclxuICBsb2dnZXIuZGVidWcoZXJyKVxyXG59KVxyXG5cclxuaW8ub24oJ2Nvbm5lY3Rpb24nLCBmdW5jdGlvbihzb2NrZXQ6IGFueSkge1xyXG4gIGxvZ2dlci5kZWJ1Zyhgc29ja2V0OiAke3NvY2tldC5pZH0gY29ubmVjdGVkYClcclxuICBsZXQgY3VycmVudFVzZXI6IElVc2VyRHRvXHJcbiAgLy8gc29ja2V0LmVtaXQoJ2Nvbm5lY3Rpb24nLCBzb2NrZXQuaWQpXHJcblxyXG4gIHNvY2tldC5vbignZGlzY29ubmVjdCcsIGZ1bmN0aW9uKCkge1xyXG4gICAgbG9nZ2VyLmRlYnVnKGBkaXNjb25uZWN0ZWRgKVxyXG4gIH0pXHJcblxyXG4gIHNvY2tldC5vbihFQWN0aW9uVHlwZS5MT0dfSU4sIChhY3Rpb246IEFjdGlvblR5cGU8dHlwZW9mIGxvZ0luPikgPT4ge1xyXG4gICAgbG9nZ2VyLmRlYnVnKGAke0VBY3Rpb25UeXBlLkxPR19JTn0tLSR7SlNPTi5zdHJpbmdpZnkoYWN0aW9uKX1gKVxyXG4gICAgY3VycmVudFVzZXIgPSBhY3Rpb24ucGF5bG9hZC51c2VyXHJcbiAgICBjb25zdCBleGlzdGluZ1VzZXIgPSB1c2VyTGlzdC5maW5kKFxyXG4gICAgICAodXNlcjogSVVzZXJEdG8pID0+IHVzZXIubmFtZSA9PT0gY3VycmVudFVzZXIubmFtZVxyXG4gICAgKVxyXG4gICAgbG9nZ2VyLmRlYnVnKGBleGlzdGluZ1VzZXI6JHtleGlzdGluZ1VzZXJ9YClcclxuICAgIGlmIChleGlzdGluZ1VzZXIpIHtcclxuICAgICAgY3VycmVudFVzZXIgPSBleGlzdGluZ1VzZXJcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIG5ld1VzZXIoY3VycmVudFVzZXIpXHJcbiAgICB9XHJcbiAgICBsb2dnZXIuZGVidWcoYCR7SlNPTi5zdHJpbmdpZnkoY3VycmVudFVzZXIpfWApXHJcbiAgICAvLyBzb2NrZXQuZW1pdChFQWN0aW9uVHlwZS5MR0dfU1VDQ0VTUywgeyBtc2c6ICdMb2cgaW4gc3VjY2Vzcy4uLicgfSlcclxuICAgIHNvY2tldC5lbWl0KEVBY3Rpb25UeXBlLkxPR19JTiwge1xyXG4gICAgICB0eXBlOiBFQWN0aW9uVHlwZS5MT0dfSU4sXHJcbiAgICAgIHBheWxvYWQ6IHsgdXNlcjogY3VycmVudFVzZXIgfVxyXG4gICAgfSlcclxuICB9KVxyXG5cclxuICAvLyBzb2NrZXQub24oRUFjdGlvblR5cGUuQUREX1BST0pFQ1QsIChhY3Rpb246IEFjdGlvblR5cGU8dHlwZW9mIGFkZFByb2plY3Q+KSA9PiB7XHJcblxyXG4gIC8vIH0pXHJcbn0pXHJcblxyXG5mdW5jdGlvbiByZWFkSnNvbihwYXRoOiBzdHJpbmcsIGNhbGxiYWNrOiAob2JqZWN0OiBhbnkpID0+IGFueSk6IHZvaWQge1xyXG4gIGZzLnJlYWRGaWxlKHBhdGgsICd1dGY4JywgKGVyciwgZGF0YTogc3RyaW5nKTogdm9pZCA9PiB7XHJcbiAgICBpZiAoZXJyKSB7XHJcbiAgICAgIGxvZ2dlci5lcnJvcihlcnIpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjYWxsYmFjayhKU09OLnBhcnNlKGRhdGEpKVxyXG4gICAgfVxyXG4gIH0pXHJcbn1cclxuXHJcbmNvbnN0IG5ld1VzZXIgPSAodXNlcjogSVVzZXJEdG8pOiB2b2lkID0+IHtcclxuICBsb2dnZXIuZGVidWcoYG5ldyB1c2VyOiAke3VzZXIubmFtZX1gKVxyXG4gIHVzZXIubmFtZSA9IHVzZXIubmFtZVxyXG4gIHVzZXJMaXN0LnB1c2godXNlcilcclxuICAvLyBTYXZlIHRvIGZpbGVcclxuICByZWFkSnNvbihVU0VSX0ZJTEVfUEFUSCwgKHVzZXJEYXRhOiBJVXNlckR0b1tdKTogdm9pZCA9PiB7XHJcbiAgICB1c2VyRGF0YS5wdXNoKHVzZXIpXHJcbiAgICBjb25zdCBqc29uOiBzdHJpbmcgPSBKU09OLnN0cmluZ2lmeSh1c2VyRGF0YSlcclxuICAgIGxvZ2dlci5kZWJ1Zyhqc29uKVxyXG4gICAgZnMud3JpdGVGaWxlKFVTRVJfRklMRV9QQVRILCBqc29uLCAndXRmOCcsIGVyciA9PiB7XHJcbiAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICBsb2dnZXIuZGVidWcoZXJyKVxyXG4gICAgICAgIHJldHVyblxyXG4gICAgICB9XHJcbiAgICAgIGxvZ2dlci5kZWJ1ZyhgV3JpdGUgdG8gJHtVU0VSX0ZJTEVfUEFUSH1gKVxyXG4gICAgICByZXR1cm5cclxuICAgIH0pXHJcbiAgfSlcclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJodHRwXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImxvZzRqc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzb2NrZXQuaW9cIik7Il0sInNvdXJjZVJvb3QiOiIifQ==