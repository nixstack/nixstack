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
/*!***************************************************!*\
  !*** /app/packages/share/constant/EActionType.ts ***!
  \***************************************************/
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
exports.EActionType = __assign({}, EUserActionType, EProjectActionType);


/***/ }),

/***/ "../../share/constant/EBaseConstant.ts":
/*!*****************************************************!*\
  !*** /app/packages/share/constant/EBaseConstant.ts ***!
  \*****************************************************/
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
/*!*********************************************!*\
  !*** /app/packages/share/constant/index.ts ***!
  \*********************************************/
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
logger.level = process.env.LOGGER_LEVEL || 'off';
var userList = [];
// let ngnix know we want to start serving from the proxy
fs_1.default.openSync('/tmp/app-initialized', 'w');
var server = http_1.default.createServer(function (req, res) {
    res.writeHead(200);
    res.end('hello world');
});
// https://stackoverflow.com/questions/28306740/socket-io-connect-to-unix-socket
// socket.io setup
var io = socket_io_1.default.listen(server);
io.set('transports', ['websocket']);
var unixSocket = '/tmp/nginx.socket';
// FIX: address in used
if (unixSocket && fs_1.default.existsSync(unixSocket))
    fs_1.default.unlinkSync(unixSocket);
var logPath = '/app/logs/socket.io';
// listen to ngnix socket
server.listen(unixSocket, function () {
    // FIX: Permission denied
    if (unixSocket)
        fs_1.default.chmodSync(unixSocket, 755);
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
            payload: { user: currentUser },
        });
    });
    // socket.on(EActionType.ADD_PROJECT, (action: ActionType<typeof addProject>) => {
    // })
});
function readJson(path, callback) {
    fs_1.default.readFile(path, "utf8", function (err, data) {
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
        fs_1.default.writeFile(constant_2.USER_FILE_PATH, json, "utf8", function (err) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy9hcHAvcGFja2FnZXMvc2hhcmUvY29uc3RhbnQvRUFjdGlvblR5cGUudHMiLCJ3ZWJwYWNrOi8vLy9hcHAvcGFja2FnZXMvc2hhcmUvY29uc3RhbnQvRUJhc2VDb25zdGFudC50cyIsIndlYnBhY2s6Ly8vL2FwcC9wYWNrYWdlcy9zaGFyZS9jb25zdGFudC9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uc3RhbnQvRmlsZVBhdGgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnN0YW50L2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImh0dHBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJsb2c0anNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzb2NrZXQuaW9cIiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtR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QUNqQixPQUFNO2FBQ1A7WUFDRCxNQUFNLENBQUMsS0FBSyxDQUFDLGNBQVkseUJBQWdCLENBQUM7WUFDMUMsT0FBTztRQUNULENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQyxDQUNGLENBQUM7QUFDSixDQUFDLENBQUM7Ozs7Ozs7Ozs7OztBQzFIRiwrQjs7Ozs7Ozs7Ozs7QUNBQSxpQzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxzQyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC50c1wiKTtcbiIsImV4cG9ydCBlbnVtIEVVc2VyQWN0aW9uVHlwZSB7XG4gIFNJTkdfVVAgPSAnU0lOR19VUCcsXG4gIExPR19JTiA9ICdMT0dfSU4nLFxuICBMT0dfT1VUID0gJ0xPR19PVVQnLFxuICBMR0dfU1VDQ0VTUyA9ICdMR0dfU1VDQ0VTJ1xufVxuXG5leHBvcnQgZW51bSBFUHJvamVjdEFjdGlvblR5cGUge1xuICBBRERfUFJPSkVDVCA9ICdBRERfUFJPSkVDVCcsXG4gIExJU1RfUFJPSkVDVCA9ICdMSVNUX1BST0pFQ1QnLFxuICBVUERBVEVfUFJPSkVDVCA9ICdVUERBVEVfUFJPSkVDVCcsXG4gIERFTF9QUk9KRUNUID0gJ0RFTF9QUk9KRUNUJ1xufVxuXG5leHBvcnQgY29uc3QgRUFjdGlvblR5cGUgPSB7IC4uLkVVc2VyQWN0aW9uVHlwZSwgLi4uRVByb2plY3RBY3Rpb25UeXBlIH0iLCJleHBvcnQgZW51bSBFVXNlclN0YXR1cyB7XG4gIFNJR05fVVAgPSAxLFxuICBMT0dfSU4gPSAyLFxuICBMT0dfT1VUID0gM1xufVxuXG5leHBvcnQgZW51bSBFUHJvamVjdFN0YXR1cyB7XG4gIFBST0pFQ1RfTkVXID0gMSxcbiAgUFJPSkVDVF9MSVNUID0gMixcbiAgUFJPSkVDVF9FRElUID0gMyxcbiAgUFJPSkVDVF9ERUwgPSA0XG59XG4iLCJleHBvcnQgKiBmcm9tICcuL0VCYXNlQ29uc3RhbnQnXG5leHBvcnQgKiBmcm9tICcuL0VBY3Rpb25UeXBlJyIsImV4cG9ydCBjb25zdCBVU0VSX0ZJTEVfUEFUSDogc3RyaW5nID0gJy4vdXNlci5qc29uJyIsImV4cG9ydCAqIGZyb20gJy4vRmlsZVBhdGgnIiwiaW1wb3J0IGZzIGZyb20gJ2ZzJ1xuaW1wb3J0IHNvY2tldElvIGZyb20gJ3NvY2tldC5pbydcbmltcG9ydCBodHRwIGZyb20gJ2h0dHAnXG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJ1xuaW1wb3J0IHsgQWN0aW9uVHlwZSB9IGZyb20gXCJ0eXBlc2FmZS1hY3Rpb25zXCI7XG5pbXBvcnQgeyBFQWN0aW9uVHlwZSB9IGZyb20gJ0BzaGFyZS9jb25zdGFudCdcbmltcG9ydCB7IGFkZFByb2plY3QgfSBmcm9tICdAc2hhcmUvYWN0aW9uL1Byb2plY3RBY3Rpb24nXG5pbXBvcnQgeyBJVXNlckR0byB9IGZyb20gJy4vZHRvJztcbmltcG9ydCB7IFVTRVJfRklMRV9QQVRIIH0gZnJvbSAnLi9jb25zdGFudCdcbmltcG9ydCB7IGxvZ0luIH0gZnJvbSAnQHNoYXJlL2FjdGlvbi9Vc2VyQWN0aW9uJ1xuXG5cbmltcG9ydCB7IGNvbmZpZ3VyZSwgZ2V0TG9nZ2VyIH0gZnJvbSAnbG9nNGpzJztcbmNvbmZpZ3VyZSgnLi9jb25maWcvbG9nNGpzLmpzb24nKTtcbmNvbnN0IGxvZ2dlciA9IGdldExvZ2dlcigpO1xubG9nZ2VyLmxldmVsID0gcHJvY2Vzcy5lbnYuTE9HR0VSX0xFVkVMIHx8ICdvZmYnO1xuXG5jb25zdCB1c2VyTGlzdDogSVVzZXJEdG9bXSA9IFtdXG5cbi8vIGxldCBuZ25peCBrbm93IHdlIHdhbnQgdG8gc3RhcnQgc2VydmluZyBmcm9tIHRoZSBwcm94eVxuZnMub3BlblN5bmMoJy90bXAvYXBwLWluaXRpYWxpemVkJywgJ3cnKTtcblxuY29uc3Qgc2VydmVyID0gaHR0cC5jcmVhdGVTZXJ2ZXIoZnVuY3Rpb24gKHJlcTogYW55LCByZXM6IGFueSkge1xuICByZXMud3JpdGVIZWFkKDIwMCk7XG4gIHJlcy5lbmQoJ2hlbGxvIHdvcmxkJyk7XG59KTtcblxuLy8gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMjgzMDY3NDAvc29ja2V0LWlvLWNvbm5lY3QtdG8tdW5peC1zb2NrZXRcbi8vIHNvY2tldC5pbyBzZXR1cFxuY29uc3QgaW8gPSBzb2NrZXRJby5saXN0ZW4oc2VydmVyKSBhcyBhbnk7XG5pby5zZXQoJ3RyYW5zcG9ydHMnLCBbJ3dlYnNvY2tldCddKTtcblxuY29uc3QgdW5peFNvY2tldCA9ICcvdG1wL25naW54LnNvY2tldCdcbi8vIEZJWDogYWRkcmVzcyBpbiB1c2VkXG5pZiAodW5peFNvY2tldCAmJiBmcy5leGlzdHNTeW5jKHVuaXhTb2NrZXQpKSBmcy51bmxpbmtTeW5jKHVuaXhTb2NrZXQpXG5cbmNvbnN0IGxvZ1BhdGggPSAnL2FwcC9sb2dzL3NvY2tldC5pbydcblxuLy8gbGlzdGVuIHRvIG5nbml4IHNvY2tldFxuc2VydmVyLmxpc3Rlbih1bml4U29ja2V0LCBmdW5jdGlvbiAoKSB7XG4gIC8vIEZJWDogUGVybWlzc2lvbiBkZW5pZWRcbiAgaWYgKHVuaXhTb2NrZXQpIGZzLmNobW9kU3luYyh1bml4U29ja2V0LCA3NTUpXG4gIGxvZ2dlci5kZWJ1Zyhgc2VydmVyIHVwYClcbn0pO1xuXG5pby5vbignY29ubmVjdF9lcnJvcicsIGZ1bmN0aW9uIChlcnI6IGFueSkge1xuICBsb2dnZXIuZGVidWcoZXJyKVxufSk7XG5cbmlvLm9uKCdjb25uZWN0X3RpbWVvdXQnLCBmdW5jdGlvbiAoZXJyOiBhbnkpIHtcbiAgbG9nZ2VyLmRlYnVnKGVycilcbn0pO1xuXG5pby5vbignY29ubmVjdGlvbicsIGZ1bmN0aW9uIChzb2NrZXQ6IGFueSkge1xuICBsb2dnZXIuZGVidWcoYHNvY2tldDogJHtzb2NrZXQuaWR9IGNvbm5lY3RlZGApXG4gIGxldCBjdXJyZW50VXNlcjogSVVzZXJEdG9cbiAgLy8gc29ja2V0LmVtaXQoJ2Nvbm5lY3Rpb24nLCBzb2NrZXQuaWQpXG5cblxuICBzb2NrZXQub24oJ2Rpc2Nvbm5lY3QnLCBmdW5jdGlvbiAoKSB7XG4gICAgbG9nZ2VyLmRlYnVnKGBkaXNjb25uZWN0ZWRgKVxuICB9KTtcblxuICBzb2NrZXQub24oRUFjdGlvblR5cGUuTE9HX0lOLCAoYWN0aW9uOiBBY3Rpb25UeXBlPHR5cGVvZiBsb2dJbj4pID0+IHtcbiAgICBsb2dnZXIuZGVidWcoYCR7RUFjdGlvblR5cGUuTE9HX0lOfS0tJHtKU09OLnN0cmluZ2lmeShhY3Rpb24pfWApXG4gICAgY3VycmVudFVzZXIgPSBhY3Rpb24ucGF5bG9hZC51c2VyO1xuICAgIGNvbnN0IGV4aXN0aW5nVXNlciA9IHVzZXJMaXN0LmZpbmQoKHVzZXI6IElVc2VyRHRvKSA9PiB1c2VyLm5hbWUgPT09IGN1cnJlbnRVc2VyLm5hbWUpO1xuICAgIGxvZ2dlci5kZWJ1ZyhgZXhpc3RpbmdVc2VyOiR7ZXhpc3RpbmdVc2VyfWApXG4gICAgaWYgKGV4aXN0aW5nVXNlcikge1xuICAgICAgY3VycmVudFVzZXIgPSBleGlzdGluZ1VzZXI7XG4gICAgfSBlbHNlIHtcbiAgICAgIG5ld1VzZXIoY3VycmVudFVzZXIpO1xuICAgIH1cbiAgICBsb2dnZXIuZGVidWcoYCR7SlNPTi5zdHJpbmdpZnkoY3VycmVudFVzZXIpfWApXG4gICAgLy8gc29ja2V0LmVtaXQoRUFjdGlvblR5cGUuTEdHX1NVQ0NFU1MsIHsgbXNnOiAnTG9nIGluIHN1Y2Nlc3MuLi4nIH0pXG4gICAgc29ja2V0LmVtaXQoRUFjdGlvblR5cGUuTE9HX0lOLCB7XG4gICAgICB0eXBlOiBFQWN0aW9uVHlwZS5MT0dfSU4sXG4gICAgICBwYXlsb2FkOiB7IHVzZXI6IGN1cnJlbnRVc2VyIH0sXG4gICAgfSk7XG4gIH0pXG5cbiAgLy8gc29ja2V0Lm9uKEVBY3Rpb25UeXBlLkFERF9QUk9KRUNULCAoYWN0aW9uOiBBY3Rpb25UeXBlPHR5cGVvZiBhZGRQcm9qZWN0PikgPT4ge1xuXG4gIC8vIH0pXG59KTtcblxuZnVuY3Rpb24gcmVhZEpzb24ocGF0aDogc3RyaW5nLCBjYWxsYmFjazogKG9iamVjdDogYW55KSA9PiBhbnkpOiB2b2lkIHtcbiAgZnMucmVhZEZpbGUoXG4gICAgcGF0aCxcbiAgICBcInV0ZjhcIixcbiAgICAoZXJyLCBkYXRhOiBzdHJpbmcpOiB2b2lkID0+IHtcbiAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgbG9nZ2VyLmVycm9yKGVycik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjYWxsYmFjayhKU09OLnBhcnNlKGRhdGEpKTtcbiAgICAgIH1cbiAgICB9LFxuICApO1xufVxuXG5cbmNvbnN0IG5ld1VzZXIgPSAodXNlcjogSVVzZXJEdG8pOiB2b2lkID0+IHtcbiAgbG9nZ2VyLmRlYnVnKGBuZXcgdXNlcjogJHt1c2VyLm5hbWV9YCk7XG4gIHVzZXIubmFtZSA9IHVzZXIubmFtZVxuICB1c2VyTGlzdC5wdXNoKHVzZXIpO1xuICAvLyBTYXZlIHRvIGZpbGVcbiAgcmVhZEpzb24oXG4gICAgVVNFUl9GSUxFX1BBVEgsXG4gICAgKHVzZXJEYXRhOiBJVXNlckR0b1tdKTogdm9pZCA9PiB7XG4gICAgICB1c2VyRGF0YS5wdXNoKHVzZXIpO1xuICAgICAgY29uc3QganNvbjogc3RyaW5nID0gSlNPTi5zdHJpbmdpZnkodXNlckRhdGEpO1xuICAgICAgbG9nZ2VyLmRlYnVnKGpzb24pXG4gICAgICBmcy53cml0ZUZpbGUoVVNFUl9GSUxFX1BBVEgsIGpzb24sIFwidXRmOFwiLCAoZXJyKSA9PiB7XG4gICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICBsb2dnZXIuZGVidWcoZXJyKVxuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIGxvZ2dlci5kZWJ1ZyhgV3JpdGUgdG8gJHtVU0VSX0ZJTEVfUEFUSH1gKVxuICAgICAgICByZXR1cm47XG4gICAgICB9KTtcbiAgICB9LFxuICApO1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJodHRwXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImxvZzRqc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzb2NrZXQuaW9cIik7Il0sInNvdXJjZVJvb3QiOiIifQ==