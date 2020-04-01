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

/***/ "./src/constant/Types.ts":
/*!*******************************!*\
  !*** ./src/constant/Types.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var TYPES = {
    IUserService: Symbol.for('IUserService'),
    IProjectService: Symbol.for('IProjectService')
};
exports.TYPES = TYPES;


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
__export(__webpack_require__(/*! ./Types */ "./src/constant/Types.ts"));


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
var inversify_config_1 = __webpack_require__(/*! ./inversify.config */ "./src/inversify.config.ts");
var Types_1 = __webpack_require__(/*! ./constant/Types */ "./src/constant/Types.ts");
var userServiceInst = inversify_config_1.appContainer.get(Types_1.TYPES.IUserService);
console.log(userServiceInst);
console.log(userServiceInst.sayHello());
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

/***/ "./src/inversify.config.ts":
/*!*********************************!*\
  !*** ./src/inversify.config.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = __webpack_require__(/*! inversify */ "inversify");
__webpack_require__(/*! reflect-metadata */ "reflect-metadata");
var Types_1 = __webpack_require__(/*! ./constant/Types */ "./src/constant/Types.ts");
var impl_1 = __webpack_require__(/*! ./service/impl */ "./src/service/impl/index.ts");
var appContainer = new inversify_1.Container();
exports.appContainer = appContainer;
appContainer.bind(Types_1.TYPES.IUserService).to(impl_1.UserServiceImpl);
appContainer.bind(Types_1.TYPES.IProjectService).to(impl_1.ProjectServiceImpl);


/***/ }),

/***/ "./src/service/impl/ProjectServiceImpl.ts":
/*!************************************************!*\
  !*** ./src/service/impl/ProjectServiceImpl.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = __webpack_require__(/*! inversify */ "inversify");
var ProjectServiceImpl = /** @class */ (function () {
    function ProjectServiceImpl() {
    }
    ProjectServiceImpl.prototype.getAll = function () {
        return [
            {
                id: 1,
                name: 'test'
            }
        ];
    };
    ProjectServiceImpl = __decorate([
        inversify_1.injectable()
    ], ProjectServiceImpl);
    return ProjectServiceImpl;
}());
exports.ProjectServiceImpl = ProjectServiceImpl;


/***/ }),

/***/ "./src/service/impl/UserServiceImpl.ts":
/*!*********************************************!*\
  !*** ./src/service/impl/UserServiceImpl.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = __webpack_require__(/*! inversify */ "inversify");
var constant_1 = __webpack_require__(/*! ../../constant */ "./src/constant/index.ts");
var UserServiceImpl = /** @class */ (function () {
    function UserServiceImpl() {
    }
    // public constructor(@inject(TYPES.IProjectService) project: IProjectService) {
    //   this._project = project
    // }
    UserServiceImpl.prototype.sayHello = function () {
        return 'Hello World!' + JSON.stringify(this._project.getAll());
    };
    __decorate([
        inversify_1.inject(constant_1.TYPES.IProjectService),
        __metadata("design:type", Object)
    ], UserServiceImpl.prototype, "_project", void 0);
    UserServiceImpl = __decorate([
        inversify_1.injectable()
    ], UserServiceImpl);
    return UserServiceImpl;
}());
exports.UserServiceImpl = UserServiceImpl;


/***/ }),

/***/ "./src/service/impl/index.ts":
/*!***********************************!*\
  !*** ./src/service/impl/index.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./ProjectServiceImpl */ "./src/service/impl/ProjectServiceImpl.ts"));
__export(__webpack_require__(/*! ./UserServiceImpl */ "./src/service/impl/UserServiceImpl.ts"));


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

/***/ "inversify":
/*!****************************!*\
  !*** external "inversify" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("inversify");

/***/ }),

/***/ "log4js":
/*!*************************!*\
  !*** external "log4js" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("log4js");

/***/ }),

/***/ "reflect-metadata":
/*!***********************************!*\
  !*** external "reflect-metadata" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("reflect-metadata");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vLi4vLi4vc2hhcmUvY29uc3RhbnQvRUFjdGlvblR5cGUudHMiLCJ3ZWJwYWNrOi8vLy4vLi4vLi4vc2hhcmUvY29uc3RhbnQvRUJhc2VDb25zdGFudC50cyIsIndlYnBhY2s6Ly8vLi8uLi8uLi9zaGFyZS9jb25zdGFudC9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uc3RhbnQvRmlsZVBhdGgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnN0YW50L1R5cGVzLnRzIiwid2VicGFjazovLy8uL3NyYy9jb25zdGFudC9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ludmVyc2lmeS5jb25maWcudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2UvaW1wbC9Qcm9qZWN0U2VydmljZUltcGwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2UvaW1wbC9Vc2VyU2VydmljZUltcGwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2UvaW1wbC9pbmRleC50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImh0dHBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJpbnZlcnNpZnlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJsb2c0anNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWZsZWN0LW1ldGFkYXRhXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic29ja2V0LmlvXCIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FB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SUFBSSxDQUFrQixhQUFLLENBQUMsZUFBZSxDQUFDLENBQUMsRUFBRSxDQUFDLHlCQUFrQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNUaEYsb0VBQThDO0FBSTlDO0lBQUE7SUFTQSxDQUFDO0lBUkMsbUNBQU0sR0FBTjtRQUNFLE9BQU87WUFDTDtnQkFDRSxFQUFFLEVBQUUsQ0FBQztnQkFDTCxJQUFJLEVBQUUsTUFBTTthQUNiO1NBQ0Y7SUFDSCxDQUFDO0lBUlUsa0JBQWtCO1FBRDlCLHNCQUFVLEVBQUU7T0FDQSxrQkFBa0IsQ0FTOUI7SUFBRCx5QkFBQztDQUFBO0FBVFksZ0RBQWtCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIL0Isb0VBQThDO0FBRTlDLHNGQUFzQztBQUd0QztJQUFBO0lBWUEsQ0FBQztJQU5DLGdGQUFnRjtJQUNoRiw0QkFBNEI7SUFDNUIsSUFBSTtJQUNKLGtDQUFRLEdBQVI7UUFDRSxPQUFPLGNBQWMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDaEUsQ0FBQztJQVBEO1FBREMsa0JBQU0sQ0FBQyxnQkFBSyxDQUFDLGVBQWUsQ0FBQzs7cURBQ0k7SUFKdkIsZUFBZTtRQUQzQixzQkFBVSxFQUFFO09BQ0EsZUFBZSxDQVkzQjtJQUFELHNCQUFDO0NBQUE7QUFaWSwwQ0FBZTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTjVCLHNHQUFvQztBQUNwQyxnR0FBaUM7Ozs7Ozs7Ozs7OztBQ0RqQywrQjs7Ozs7Ozs7Ozs7QUNBQSxpQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSw2Qzs7Ozs7Ozs7Ozs7QUNBQSxzQyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC50c1wiKTtcbiIsImV4cG9ydCBlbnVtIEVVc2VyQWN0aW9uVHlwZSB7XHJcbiAgU0lOR19VUCA9ICdTSU5HX1VQJyxcclxuICBMT0dfSU4gPSAnTE9HX0lOJyxcclxuICBMT0dfT1VUID0gJ0xPR19PVVQnLFxyXG4gIExHR19TVUNDRVNTID0gJ0xHR19TVUNDRVMnXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIEVQcm9qZWN0QWN0aW9uVHlwZSB7XHJcbiAgQUREX1BST0pFQ1QgPSAnQUREX1BST0pFQ1QnLFxyXG4gIExJU1RfUFJPSkVDVCA9ICdMSVNUX1BST0pFQ1QnLFxyXG4gIFVQREFURV9QUk9KRUNUID0gJ1VQREFURV9QUk9KRUNUJyxcclxuICBERUxfUFJPSkVDVCA9ICdERUxfUFJPSkVDVCdcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEVBY3Rpb25UeXBlID0geyAuLi5FVXNlckFjdGlvblR5cGUsIC4uLkVQcm9qZWN0QWN0aW9uVHlwZSB9IiwiZXhwb3J0IGVudW0gRVVzZXJTdGF0dXMge1xyXG4gIFNJR05fVVAgPSAxLFxyXG4gIExPR19JTiA9IDIsXHJcbiAgTE9HX09VVCA9IDNcclxufVxyXG5cclxuZXhwb3J0IGVudW0gRVByb2plY3RTdGF0dXMge1xyXG4gIFBST0pFQ1RfTkVXID0gMSxcclxuICBQUk9KRUNUX0xJU1QgPSAyLFxyXG4gIFBST0pFQ1RfRURJVCA9IDMsXHJcbiAgUFJPSkVDVF9ERUwgPSA0XHJcbn1cclxuIiwiZXhwb3J0ICogZnJvbSAnLi9FQmFzZUNvbnN0YW50J1xyXG5leHBvcnQgKiBmcm9tICcuL0VBY3Rpb25UeXBlJyIsImV4cG9ydCBjb25zdCBVU0VSX0ZJTEVfUEFUSDogc3RyaW5nID0gJy4vdXNlci5qc29uJyIsImNvbnN0IFRZUEVTID0ge1xyXG4gIElVc2VyU2VydmljZTogU3ltYm9sLmZvcignSVVzZXJTZXJ2aWNlJyksXHJcbiAgSVByb2plY3RTZXJ2aWNlOiBTeW1ib2wuZm9yKCdJUHJvamVjdFNlcnZpY2UnKVxyXG59XHJcblxyXG5leHBvcnQgeyBUWVBFUyB9XHJcbiIsImV4cG9ydCAqIGZyb20gJy4vRmlsZVBhdGgnXHJcbmV4cG9ydCAqIGZyb20gJy4vVHlwZXMnXHJcbiIsImltcG9ydCBmcyBmcm9tICdmcydcclxuaW1wb3J0IHNvY2tldElvIGZyb20gJ3NvY2tldC5pbydcclxuaW1wb3J0IGh0dHAgZnJvbSAnaHR0cCdcclxuaW1wb3J0IHBhdGggZnJvbSAncGF0aCdcclxuaW1wb3J0IHsgQWN0aW9uVHlwZSB9IGZyb20gJ3R5cGVzYWZlLWFjdGlvbnMnXHJcbmltcG9ydCB7IEVBY3Rpb25UeXBlIH0gZnJvbSAnQHNoYXJlL2NvbnN0YW50J1xyXG5pbXBvcnQgeyBhZGRQcm9qZWN0IH0gZnJvbSAnQHNoYXJlL2FjdGlvbi9Qcm9qZWN0QWN0aW9uJ1xyXG5pbXBvcnQgeyBJVXNlckR0byB9IGZyb20gJy4vZHRvJ1xyXG5pbXBvcnQgeyBVU0VSX0ZJTEVfUEFUSCB9IGZyb20gJy4vY29uc3RhbnQnXHJcbmltcG9ydCB7IGxvZ0luIH0gZnJvbSAnQHNoYXJlL2FjdGlvbi9Vc2VyQWN0aW9uJ1xyXG5pbXBvcnQgeyBjb25maWd1cmUsIGdldExvZ2dlciB9IGZyb20gJ2xvZzRqcydcclxuY29uZmlndXJlKCcuL2NvbmZpZy9sb2c0anMuanNvbicpXHJcbmNvbnN0IGxvZ2dlciA9IGdldExvZ2dlcigpXHJcbmxvZ2dlci5sZXZlbCA9IHByb2Nlc3MuZW52LkxPR0dFUl9MRVZFTCB8fCAnb2ZmJ1xyXG5cclxuaW1wb3J0IHsgYXBwQ29udGFpbmVyIH0gZnJvbSAnLi9pbnZlcnNpZnkuY29uZmlnJ1xyXG5pbXBvcnQgeyBUWVBFUyB9IGZyb20gJy4vY29uc3RhbnQvVHlwZXMnXHJcbmltcG9ydCB7IElVc2VyU2VydmljZSB9IGZyb20gJy4vc2VydmljZSdcclxuY29uc3QgdXNlclNlcnZpY2VJbnN0ID0gYXBwQ29udGFpbmVyLmdldDxJVXNlclNlcnZpY2U+KFRZUEVTLklVc2VyU2VydmljZSlcclxuY29uc29sZS5sb2codXNlclNlcnZpY2VJbnN0KVxyXG5jb25zb2xlLmxvZyh1c2VyU2VydmljZUluc3Quc2F5SGVsbG8oKSlcclxuXHJcbmNvbnN0IHVzZXJMaXN0OiBJVXNlckR0b1tdID0gW11cclxuXHJcbmNvbnN0IHNlcnZlciA9IGh0dHAuY3JlYXRlU2VydmVyKGZ1bmN0aW9uKHJlcTogYW55LCByZXM6IGFueSkge1xyXG4gIHJlcy53cml0ZUhlYWQoMjAwKVxyXG4gIHJlcy5lbmQoJ2hlbGxvIHdvcmxkJylcclxufSlcclxuXHJcbi8vIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzI4MzA2NzQwL3NvY2tldC1pby1jb25uZWN0LXRvLXVuaXgtc29ja2V0XHJcbi8vIHNvY2tldC5pbyBzZXR1cFxyXG5jb25zdCBpbyA9IHNvY2tldElvLmxpc3RlbihzZXJ2ZXIpIGFzIGFueVxyXG5pby5zZXQoJ3RyYW5zcG9ydHMnLCBbJ3dlYnNvY2tldCddKVxyXG5cclxubGV0IHByb3RvY29sID0gJydcclxuY29uc3QgaXNEZXYgPSBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50J1xyXG5pZiAoIWlzRGV2KSB7XHJcbiAgLy8gbGV0IG5nbml4IGtub3cgd2Ugd2FudCB0byBzdGFydCBzZXJ2aW5nIGZyb20gdGhlIHByb3h5XHJcbiAgZnMub3BlblN5bmMoJy90bXAvYXBwLWluaXRpYWxpemVkJywgJ3cnKVxyXG4gIHByb3RvY29sID0gJy90bXAvbmdpbnguc29ja2V0J1xyXG4gIC8vIEZJWDogYWRkcmVzcyBpbiB1c2VkXHJcbiAgaWYgKGZzLmV4aXN0c1N5bmMocHJvdG9jb2wpKSBmcy51bmxpbmtTeW5jKHByb3RvY29sKVxyXG59IGVsc2Uge1xyXG4gIHByb3RvY29sID0gcHJvY2Vzcy5lbnYuU09DS0VUSU9fU0VSVkVSX1BPUlQgYXMgc3RyaW5nXHJcbn1cclxuXHJcbi8vIGxpc3RlbiB0byBuZ25peCBzb2NrZXRcclxuc2VydmVyLmxpc3Rlbihwcm90b2NvbCwgZnVuY3Rpb24oKSB7XHJcbiAgLy8gRklYOiBQZXJtaXNzaW9uIGRlbmllZFxyXG4gIGlmIChwcm90b2NvbCAmJiBmcy5leGlzdHNTeW5jKHByb3RvY29sKSkgZnMuY2htb2RTeW5jKHByb3RvY29sLCA3NTUpXHJcbiAgbG9nZ2VyLmRlYnVnKGBzZXJ2ZXIgdXBgKVxyXG59KVxyXG5cclxuaW8ub24oJ2Nvbm5lY3RfZXJyb3InLCBmdW5jdGlvbihlcnI6IGFueSkge1xyXG4gIGxvZ2dlci5kZWJ1ZyhlcnIpXHJcbn0pXHJcblxyXG5pby5vbignY29ubmVjdF90aW1lb3V0JywgZnVuY3Rpb24oZXJyOiBhbnkpIHtcclxuICBsb2dnZXIuZGVidWcoZXJyKVxyXG59KVxyXG5cclxuaW8ub24oJ2Nvbm5lY3Rpb24nLCBmdW5jdGlvbihzb2NrZXQ6IGFueSkge1xyXG4gIGxvZ2dlci5kZWJ1Zyhgc29ja2V0OiAke3NvY2tldC5pZH0gY29ubmVjdGVkYClcclxuICBsZXQgY3VycmVudFVzZXI6IElVc2VyRHRvXHJcbiAgLy8gc29ja2V0LmVtaXQoJ2Nvbm5lY3Rpb24nLCBzb2NrZXQuaWQpXHJcblxyXG4gIHNvY2tldC5vbignZGlzY29ubmVjdCcsIGZ1bmN0aW9uKCkge1xyXG4gICAgbG9nZ2VyLmRlYnVnKGBkaXNjb25uZWN0ZWRgKVxyXG4gIH0pXHJcblxyXG4gIHNvY2tldC5vbihFQWN0aW9uVHlwZS5MT0dfSU4sIChhY3Rpb246IEFjdGlvblR5cGU8dHlwZW9mIGxvZ0luPikgPT4ge1xyXG4gICAgbG9nZ2VyLmRlYnVnKGAke0VBY3Rpb25UeXBlLkxPR19JTn0tLSR7SlNPTi5zdHJpbmdpZnkoYWN0aW9uKX1gKVxyXG4gICAgY3VycmVudFVzZXIgPSBhY3Rpb24ucGF5bG9hZC51c2VyXHJcbiAgICBjb25zdCBleGlzdGluZ1VzZXIgPSB1c2VyTGlzdC5maW5kKFxyXG4gICAgICAodXNlcjogSVVzZXJEdG8pID0+IHVzZXIubmFtZSA9PT0gY3VycmVudFVzZXIubmFtZVxyXG4gICAgKVxyXG4gICAgbG9nZ2VyLmRlYnVnKGBleGlzdGluZ1VzZXI6JHtleGlzdGluZ1VzZXJ9YClcclxuICAgIGlmIChleGlzdGluZ1VzZXIpIHtcclxuICAgICAgY3VycmVudFVzZXIgPSBleGlzdGluZ1VzZXJcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIG5ld1VzZXIoY3VycmVudFVzZXIpXHJcbiAgICB9XHJcbiAgICBsb2dnZXIuZGVidWcoYCR7SlNPTi5zdHJpbmdpZnkoY3VycmVudFVzZXIpfWApXHJcbiAgICAvLyBzb2NrZXQuZW1pdChFQWN0aW9uVHlwZS5MR0dfU1VDQ0VTUywgeyBtc2c6ICdMb2cgaW4gc3VjY2Vzcy4uLicgfSlcclxuICAgIHNvY2tldC5lbWl0KEVBY3Rpb25UeXBlLkxPR19JTiwge1xyXG4gICAgICB0eXBlOiBFQWN0aW9uVHlwZS5MT0dfSU4sXHJcbiAgICAgIHBheWxvYWQ6IHsgdXNlcjogY3VycmVudFVzZXIgfVxyXG4gICAgfSlcclxuICB9KVxyXG5cclxuICAvLyBzb2NrZXQub24oRUFjdGlvblR5cGUuQUREX1BST0pFQ1QsIChhY3Rpb246IEFjdGlvblR5cGU8dHlwZW9mIGFkZFByb2plY3Q+KSA9PiB7XHJcblxyXG4gIC8vIH0pXHJcbn0pXHJcblxyXG5mdW5jdGlvbiByZWFkSnNvbihwYXRoOiBzdHJpbmcsIGNhbGxiYWNrOiAob2JqZWN0OiBhbnkpID0+IGFueSk6IHZvaWQge1xyXG4gIGZzLnJlYWRGaWxlKHBhdGgsICd1dGY4JywgKGVyciwgZGF0YTogc3RyaW5nKTogdm9pZCA9PiB7XHJcbiAgICBpZiAoZXJyKSB7XHJcbiAgICAgIGxvZ2dlci5lcnJvcihlcnIpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjYWxsYmFjayhKU09OLnBhcnNlKGRhdGEpKVxyXG4gICAgfVxyXG4gIH0pXHJcbn1cclxuXHJcbmNvbnN0IG5ld1VzZXIgPSAodXNlcjogSVVzZXJEdG8pOiB2b2lkID0+IHtcclxuICBsb2dnZXIuZGVidWcoYG5ldyB1c2VyOiAke3VzZXIubmFtZX1gKVxyXG4gIHVzZXIubmFtZSA9IHVzZXIubmFtZVxyXG4gIHVzZXJMaXN0LnB1c2godXNlcilcclxuICAvLyBTYXZlIHRvIGZpbGVcclxuICByZWFkSnNvbihVU0VSX0ZJTEVfUEFUSCwgKHVzZXJEYXRhOiBJVXNlckR0b1tdKTogdm9pZCA9PiB7XHJcbiAgICB1c2VyRGF0YS5wdXNoKHVzZXIpXHJcbiAgICBjb25zdCBqc29uOiBzdHJpbmcgPSBKU09OLnN0cmluZ2lmeSh1c2VyRGF0YSlcclxuICAgIGxvZ2dlci5kZWJ1Zyhqc29uKVxyXG4gICAgZnMud3JpdGVGaWxlKFVTRVJfRklMRV9QQVRILCBqc29uLCAndXRmOCcsIGVyciA9PiB7XHJcbiAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICBsb2dnZXIuZGVidWcoZXJyKVxyXG4gICAgICAgIHJldHVyblxyXG4gICAgICB9XHJcbiAgICAgIGxvZ2dlci5kZWJ1ZyhgV3JpdGUgdG8gJHtVU0VSX0ZJTEVfUEFUSH1gKVxyXG4gICAgICByZXR1cm5cclxuICAgIH0pXHJcbiAgfSlcclxufVxyXG4iLCJpbXBvcnQgeyBDb250YWluZXIgfSBmcm9tICdpbnZlcnNpZnknXHJcbmltcG9ydCAncmVmbGVjdC1tZXRhZGF0YSdcclxuaW1wb3J0IHsgVFlQRVMgfSBmcm9tICcuL2NvbnN0YW50L1R5cGVzJ1xyXG5pbXBvcnQgeyBJUHJvamVjdFNlcnZpY2UsIElVc2VyU2VydmljZSB9IGZyb20gJy4vc2VydmljZSdcclxuaW1wb3J0IHsgVXNlclNlcnZpY2VJbXBsLCBQcm9qZWN0U2VydmljZUltcGwgfSBmcm9tICcuL3NlcnZpY2UvaW1wbCdcclxuXHJcbmNvbnN0IGFwcENvbnRhaW5lciA9IG5ldyBDb250YWluZXIoKVxyXG5cclxuYXBwQ29udGFpbmVyLmJpbmQ8SVVzZXJTZXJ2aWNlPihUWVBFUy5JVXNlclNlcnZpY2UpLnRvKFVzZXJTZXJ2aWNlSW1wbClcclxuYXBwQ29udGFpbmVyLmJpbmQ8SVByb2plY3RTZXJ2aWNlPihUWVBFUy5JUHJvamVjdFNlcnZpY2UpLnRvKFByb2plY3RTZXJ2aWNlSW1wbClcclxuXHJcbmV4cG9ydCB7IGFwcENvbnRhaW5lciB9XHJcbiIsImltcG9ydCB7IGluamVjdGFibGUsIGluamVjdCB9IGZyb20gJ2ludmVyc2lmeSdcclxuaW1wb3J0IHsgSVByb2plY3RTZXJ2aWNlIH0gZnJvbSAnLi8uLi9JUHJvamVjdFNlcnZpY2UnXHJcblxyXG5AaW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBQcm9qZWN0U2VydmljZUltcGwgaW1wbGVtZW50cyBJUHJvamVjdFNlcnZpY2Uge1xyXG4gIGdldEFsbCgpOiBhbnlbXSB7XHJcbiAgICByZXR1cm4gW1xyXG4gICAgICB7XHJcbiAgICAgICAgaWQ6IDEsXHJcbiAgICAgICAgbmFtZTogJ3Rlc3QnXHJcbiAgICAgIH1cclxuICAgIF1cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgSVByb2plY3RTZXJ2aWNlIH0gZnJvbSAnLi8uLi9JUHJvamVjdFNlcnZpY2UnXHJcbmltcG9ydCB7IGluamVjdGFibGUsIGluamVjdCB9IGZyb20gJ2ludmVyc2lmeSdcclxuaW1wb3J0IHsgSVVzZXJTZXJ2aWNlIH0gZnJvbSAnLi4vSVVzZXJTZXJ2aWNlJ1xyXG5pbXBvcnQgeyBUWVBFUyB9IGZyb20gJy4uLy4uL2NvbnN0YW50J1xyXG5cclxuQGluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgVXNlclNlcnZpY2VJbXBsIGltcGxlbWVudHMgSVVzZXJTZXJ2aWNlIHtcclxuICAvLyBwcml2YXRlIF9wcm9qZWN0OiBJUHJvamVjdFNlcnZpY2VcclxuXHJcbiAgQGluamVjdChUWVBFUy5JUHJvamVjdFNlcnZpY2UpXHJcbiAgcHJpdmF0ZSBfcHJvamVjdCE6IElQcm9qZWN0U2VydmljZVxyXG5cclxuICAvLyBwdWJsaWMgY29uc3RydWN0b3IoQGluamVjdChUWVBFUy5JUHJvamVjdFNlcnZpY2UpIHByb2plY3Q6IElQcm9qZWN0U2VydmljZSkge1xyXG4gIC8vICAgdGhpcy5fcHJvamVjdCA9IHByb2plY3RcclxuICAvLyB9XHJcbiAgc2F5SGVsbG8oKTogc3RyaW5nIHtcclxuICAgIHJldHVybiAnSGVsbG8gV29ybGQhJyArIEpTT04uc3RyaW5naWZ5KHRoaXMuX3Byb2plY3QuZ2V0QWxsKCkpXHJcbiAgfVxyXG59XHJcbiIsImV4cG9ydCAqIGZyb20gJy4vUHJvamVjdFNlcnZpY2VJbXBsJ1xyXG5leHBvcnQgKiBmcm9tICcuL1VzZXJTZXJ2aWNlSW1wbCdcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaHR0cFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJpbnZlcnNpZnlcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibG9nNGpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZmxlY3QtbWV0YWRhdGFcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic29ja2V0LmlvXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=