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

/***/ "../../share/config/index.ts":
/*!************************************************************************!*\
  !*** E:/Workspaces/Repository/nixstack/packages/share/config/index.ts ***!
  \************************************************************************/
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

/***/ "../../share/constant/Events.ts":
/*!***************************************************************************!*\
  !*** E:/Workspaces/Repository/nixstack/packages/share/constant/Events.ts ***!
  \***************************************************************************/
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
exports.EVENT_TYPES = {
    domain: 'DOMAIN.EVENT',
    socket: 'SOCKET.EVENT'
};
var EUserEvent;
(function (EUserEvent) {
    EUserEvent["SING_UP"] = "SING_UP.SOCKET.EVENT";
    EUserEvent["LOG_IN"] = "LOG_IN.SOCKET.EVENT";
    EUserEvent["LOG_OUT"] = "LOG_OUT.SOCKET.EVENT";
    EUserEvent["LGG_SUCCESS"] = "LGG_SUCCES.SOCKET.EVENT";
})(EUserEvent = exports.EUserEvent || (exports.EUserEvent = {}));
var EProjectEvent;
(function (EProjectEvent) {
    EProjectEvent["ADD_PROJECT"] = "ADD_PROJECT.SOCKET.EVENT";
    EProjectEvent["LIST_PROJECT"] = "LIST_PROJECT.SOCKET.EVENT";
    EProjectEvent["UPDATE_PROJECT"] = "UPDATE_PROJECT.SOCKET.EVENT";
    EProjectEvent["DEL_PROJECT"] = "DEL_PROJECT.SOCKET.EVENT";
})(EProjectEvent = exports.EProjectEvent || (exports.EProjectEvent = {}));
exports.EVENTS = __assign(__assign({}, EUserEvent), EProjectEvent);


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
__export(__webpack_require__(/*! ./Events */ "../../share/constant/Events.ts"));


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
    Application: Symbol('Application'),
    SocketIO: Symbol('SocketIO.Server'),
    PreBuildInitializer: Symbol('PreBuildInitializer'),
    PostInstantiateInitializer: Symbol('PostInstantiateInitializer'),
    IEventManager: Symbol('IEventManager'),
    IEventListener: Symbol('IEventListener'),
    IEventManagerProvider: Symbol('IEventManagerProvider'),
    UserService: Symbol('UserService'),
    ProjectService: Symbol('ProjectService')
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

/***/ "./src/controller/UserController.ts":
/*!******************************************!*\
  !*** ./src/controller/UserController.ts ***!
  \******************************************/
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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var UserServiceImpl_1 = __webpack_require__(/*! ./../service/impl/UserServiceImpl */ "./src/service/impl/UserServiceImpl.ts");
var ioc_1 = __webpack_require__(/*! ../core/ioc */ "./src/core/ioc/index.ts");
var constant_1 = __webpack_require__(/*! ../constant */ "./src/constant/index.ts");
var inversify_express_utils_1 = __webpack_require__(/*! inversify-express-utils */ "inversify-express-utils");
// @provide(TYPES.IUserService, true)
// @provideNamed(TYPE.Controller, 'UserController')
var UserController = /** @class */ (function () {
    // @inject(TYPES.UserService)
    // private _userService!: IUserService
    function UserController(_userService) {
        this._userService = _userService;
    }
    UserController.prototype.get = function () {
        return this._userService.sayHello();
    };
    __decorate([
        inversify_express_utils_1.httpGet('/'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", String)
    ], UserController.prototype, "get", null);
    UserController = __decorate([
        inversify_express_utils_1.controller('/user'),
        __param(0, ioc_1.inject(constant_1.TYPES.UserService)),
        __metadata("design:paramtypes", [UserServiceImpl_1.UserServiceImpl])
    ], UserController);
    return UserController;
}());
exports.UserController = UserController;


/***/ }),

/***/ "./src/controller/index.ts":
/*!*********************************!*\
  !*** ./src/controller/index.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./UserController */ "./src/controller/UserController.ts"));


/***/ }),

/***/ "./src/core/Application.ts":
/*!*********************************!*\
  !*** ./src/core/Application.ts ***!
  \*********************************/
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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var constant_1 = __webpack_require__(/*! ../constant */ "./src/constant/index.ts");
var inversify_1 = __webpack_require__(/*! inversify */ "inversify");
var config_1 = __importDefault(__webpack_require__(/*! @share/config */ "../../share/config/index.ts"));
var socket_io_1 = __importDefault(__webpack_require__(/*! socket.io */ "socket.io"));
var ioc_1 = __webpack_require__(/*! ./ioc */ "./src/core/ioc/index.ts");
var Application = /** @class */ (function () {
    function Application(preBuildInitializers) {
        this._preBuildInitializers = preBuildInitializers;
    }
    Application.prototype.setExpress = function (express) {
        this._express = express;
    };
    Application.prototype.getHttpServer = function () {
        return this._httpServer;
    };
    Application.prototype.run = function (container) {
        var _this = this;
        this.preBuildInit(this._express)
            .then(function () { return _this.instantiate(container); })
            .then(function () {
            _this._postInstantiateInitializers = container.getAll(constant_1.TYPES.PostInstantiateInitializer);
        })
            .then(function () {
            _this.postInitialized();
        })
            .catch(function (err) { return console.log(err); });
    };
    Application.prototype.instantiate = function (container) {
        var _this = this;
        return new Promise(function (resolve) {
            _this._app = _this._express.build();
            var port = config_1.default.SOCKETIO_SERVER_PORT;
            _this._httpServer = _this._app.listen(port, function () {
                return console.log("Server started at port: " + port);
            });
            var socketIO = socket_io_1.default(_this.getHttpServer());
            container.bind(constant_1.TYPES.SocketIO).toConstantValue(socketIO);
            resolve();
        });
    };
    Application.prototype.preBuildInit = function (express) {
        return Promise.all(this._preBuildInitializers.map(function (initializer) {
            return initializer.applyTo(express);
        }));
    };
    Application.prototype.postInitialized = function () {
        var _this = this;
        return Promise.all(this._postInstantiateInitializers.map(function (initializer) {
            return initializer.applyTo(_this._httpServer);
        }));
    };
    Application = __decorate([
        ioc_1.provideSingleton(constant_1.TYPES.Application),
        __param(0, inversify_1.multiInject(constant_1.TYPES.PreBuildInitializer)),
        __metadata("design:paramtypes", [Array])
    ], Application);
    return Application;
}());
exports.Application = Application;


/***/ }),

/***/ "./src/core/event/listener/socket/OnSocketUserLoginEvent.ts":
/*!******************************************************************!*\
  !*** ./src/core/event/listener/socket/OnSocketUserLoginEvent.ts ***!
  \******************************************************************/
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
var ioc_1 = __webpack_require__(/*! ../../../../core/ioc */ "./src/core/ioc/index.ts");
var constant_1 = __webpack_require__(/*! ../../../../constant */ "./src/constant/index.ts");
var constant_2 = __webpack_require__(/*! @share/constant */ "../../share/constant/index.ts");
// @provideNamed(TYPES.IEventListener, EVENT_NAME_MAP.onSocketUserLogin)
var OnSocketUserLoginEvent = /** @class */ (function () {
    function OnSocketUserLoginEvent() {
    }
    OnSocketUserLoginEvent.prototype.type = function () {
        return constant_2.EVENT_TYPES.socket;
    };
    OnSocketUserLoginEvent.prototype.name = function () {
        return constant_2.EUserEvent.LOG_IN;
    };
    OnSocketUserLoginEvent.prototype.handlers = function () {
        return [
            function (action) {
                console.log(action);
            }
        ];
    };
    OnSocketUserLoginEvent = __decorate([
        ioc_1.provide(constant_1.TYPES.IEventListener)
    ], OnSocketUserLoginEvent);
    return OnSocketUserLoginEvent;
}());
exports.OnSocketUserLoginEvent = OnSocketUserLoginEvent;


/***/ }),

/***/ "./src/core/event/manger/provider/SocketIOEventManager.ts":
/*!****************************************************************!*\
  !*** ./src/core/event/manger/provider/SocketIOEventManager.ts ***!
  \****************************************************************/
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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var constant_1 = __webpack_require__(/*! @share/constant */ "../../share/constant/index.ts");
var constant_2 = __webpack_require__(/*! ../../../../constant */ "./src/constant/index.ts");
var ioc_1 = __webpack_require__(/*! ../../../../core/ioc */ "./src/core/ioc/index.ts");
// @provideNamedSingleton(
//   TYPES.IEventManagerProvider,
//   TAGS.SocketEventManagerProvider
// )
var SocketIOEventManager = /** @class */ (function () {
    function SocketIOEventManager(socketServer) {
        this._socketServer = socketServer;
    }
    Object.defineProperty(SocketIOEventManager.prototype, "socket", {
        set: function (socket) {
            this._socket = socket;
        },
        enumerable: true,
        configurable: true
    });
    SocketIOEventManager.prototype.type = function () {
        return constant_1.EVENT_TYPES.socket;
    };
    SocketIOEventManager.prototype.emit = function (event) {
        this._socketServer.emit(event.name(), event.data());
    };
    SocketIOEventManager.prototype.on = function (eventName, callback) {
        // this._socketServer.on(eventName, callback)
    };
    SocketIOEventManager.prototype.initSocketListener = function (socket, eventListeners) {
        var _this = this;
        eventListeners
            .filter(function (eventListener) { return eventListener.type() === _this.type(); })
            .forEach(function (eventListener) {
            return eventListener.handlers().forEach(function (eventHander) {
                return (function (hander) {
                    socket.on(eventListener.name(), function (action) {
                        // hander.apply(null, payload)
                        hander(action);
                    });
                })(eventHander);
            });
        });
    };
    SocketIOEventManager = __decorate([
        ioc_1.provideSingleton(constant_2.TYPES.IEventManagerProvider),
        __param(0, ioc_1.inject(constant_2.TYPES.SocketIO)),
        __metadata("design:paramtypes", [Object])
    ], SocketIOEventManager);
    return SocketIOEventManager;
}());
exports.SocketIOEventManager = SocketIOEventManager;


/***/ }),

/***/ "./src/core/initializer/impl/ConfigPreBuildInitializer.ts":
/*!****************************************************************!*\
  !*** ./src/core/initializer/impl/ConfigPreBuildInitializer.ts ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var ioc_1 = __webpack_require__(/*! ../../ioc */ "./src/core/ioc/index.ts");
var body_parser_1 = __importDefault(__webpack_require__(/*! body-parser */ "body-parser"));
var constant_1 = __webpack_require__(/*! ../../../constant */ "./src/constant/index.ts");
var ConfigPreBuildInitializer = /** @class */ (function () {
    function ConfigPreBuildInitializer() {
    }
    ConfigPreBuildInitializer.prototype.applyTo = function (expressServer) {
        return new Promise(function (resolve) {
            expressServer.setConfig(function (app) {
                app.use(body_parser_1.default.urlencoded({ extended: true }));
                app.use(body_parser_1.default.json());
                // Webpack-Dev-Server
                // app.use(
                //   '/',
                //   express.static(shareConfig.APP_INDOOR_STATIC_FILE as string)
                // )
            });
            resolve();
        });
    };
    ConfigPreBuildInitializer = __decorate([
        ioc_1.provideSingleton(constant_1.TYPES.PreBuildInitializer)
    ], ConfigPreBuildInitializer);
    return ConfigPreBuildInitializer;
}());
exports.ConfigPreBuildInitializer = ConfigPreBuildInitializer;


/***/ }),

/***/ "./src/core/initializer/impl/EvenManagerInitializer.ts":
/*!*************************************************************!*\
  !*** ./src/core/initializer/impl/EvenManagerInitializer.ts ***!
  \*************************************************************/
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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var constant_1 = __webpack_require__(/*! @share/constant */ "../../share/constant/index.ts");
var inversify_1 = __webpack_require__(/*! inversify */ "inversify");
var constant_2 = __webpack_require__(/*! ../../../constant */ "./src/constant/index.ts");
var ioc_1 = __webpack_require__(/*! ../../ioc */ "./src/core/ioc/index.ts");
var EvenManagerInitializer = /** @class */ (function () {
    function EvenManagerInitializer(eventManager, 
    // single inject
    // @inject(TYPES.IEventManagerProvider)
    // @named(TAGS.SocketEventManagerProvider)
    // eventProviders: IEventManagerProvider[],
    // inversify-inject-decorators
    // https://github.com/inversify/InversifyJS/issues/342
    eventProviders, eventListeners, socketIO) {
        this._eventManager = eventManager;
        this._eventProviders = eventProviders;
        this._eventListeners = eventListeners;
        this._socketIO = socketIO;
    }
    EvenManagerInitializer.prototype.applyTo = function (server) {
        var _this = this;
        return new Promise(function (resolve) {
            _this._eventManager.initProviders(_this._eventProviders);
            _this._eventManager.initListeners(_this._eventListeners);
            _this._socketIO.on('connect', function (socket) {
                console.log('Socket connected...');
                (_this._eventManager.getRegisteredEventProvider(constant_1.EVENT_TYPES.socket)).initSocketListener(socket, _this._eventListeners);
            });
            resolve();
        });
    };
    EvenManagerInitializer = __decorate([
        ioc_1.provideSingleton(constant_2.TYPES.PostInstantiateInitializer),
        __param(0, inversify_1.inject(constant_2.TYPES.IEventManager)),
        __param(1, ioc_1.multiInject(constant_2.TYPES.IEventManagerProvider)),
        __param(2, ioc_1.multiInject(constant_2.TYPES.IEventListener)),
        __param(3, inversify_1.inject(constant_2.TYPES.SocketIO)),
        __metadata("design:paramtypes", [Object, Array, Array, Object])
    ], EvenManagerInitializer);
    return EvenManagerInitializer;
}());
exports.EvenManagerInitializer = EvenManagerInitializer;


/***/ }),

/***/ "./src/core/initializer/impl/MultipleProvidersEventManager.ts":
/*!********************************************************************!*\
  !*** ./src/core/initializer/impl/MultipleProvidersEventManager.ts ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import { EventHandler } from '../../../core/event/manger/IEventListener'
var foreach_1 = __importDefault(__webpack_require__(/*! lodash/foreach */ "lodash/foreach"));
var ioc_1 = __webpack_require__(/*! ../../../core/ioc */ "./src/core/ioc/index.ts");
var constant_1 = __webpack_require__(/*! ../../../constant */ "./src/constant/index.ts");
var MultipleProvidersEventManager = /** @class */ (function () {
    function MultipleProvidersEventManager() {
        this.providers = {};
    }
    MultipleProvidersEventManager.prototype.initProviders = function (providers) {
        foreach_1.default(providers, this.registerProvider.bind(this));
        return this;
    };
    MultipleProvidersEventManager.prototype.initListeners = function (eventListeners) {
        var _this = this;
        eventListeners.forEach(function (eventListener) {
            return eventListener
                .handlers()
                .forEach(function (eventHandler) {
                return _this.getRegisteredEventProvider(eventListener.type()).on(eventListener.name(), eventHandler);
            });
        });
        return this;
    };
    MultipleProvidersEventManager.prototype.registerProvider = function (provider) {
        if (this.providers[provider.type()]) {
            throw new Error('Event Manager provider already registered!');
        }
        this.providers[provider.type()] = provider;
    };
    MultipleProvidersEventManager.prototype.getRegisteredEventProvider = function (eventType) {
        if (!this.providers[eventType]) {
            throw new Error('Unknown event provider requested.');
        }
        return this.providers[eventType];
    };
    MultipleProvidersEventManager.prototype.emit = function (event) {
        if (!this.providers.hasOwnProperty(event.type())) {
            throw new Error('Invalid event type!');
        }
        this.providers[event.type()].emit(event);
    };
    MultipleProvidersEventManager = __decorate([
        ioc_1.provideSingleton(constant_1.TYPES.IEventManager)
    ], MultipleProvidersEventManager);
    return MultipleProvidersEventManager;
}());
exports.MultipleProvidersEventManager = MultipleProvidersEventManager;


/***/ }),

/***/ "./src/core/ioc/IOC.ts":
/*!*****************************!*\
  !*** ./src/core/ioc/IOC.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(/*! reflect-metadata */ "reflect-metadata");
var inversify_1 = __webpack_require__(/*! inversify */ "inversify");
exports.inject = inversify_1.inject;
exports.multiInject = inversify_1.multiInject;
exports.named = inversify_1.named;
var inversify_binding_decorators_1 = __webpack_require__(/*! inversify-binding-decorators */ "inversify-binding-decorators");
exports.autoProvide = inversify_binding_decorators_1.autoProvide;
exports.buildProviderModule = inversify_binding_decorators_1.buildProviderModule;
exports.provide = inversify_binding_decorators_1.provide;
var inversify_logger_middleware_1 = __webpack_require__(/*! inversify-logger-middleware */ "inversify-logger-middleware");
var inversify_inject_decorators_1 = __importDefault(__webpack_require__(/*! inversify-inject-decorators */ "inversify-inject-decorators"));
var container = new inversify_1.Container();
exports.container = container;
if (true) {
    var logger = inversify_logger_middleware_1.makeLoggerMiddleware(undefined, function (out) {
        return console.log(inversify_logger_middleware_1.textSerializer(out));
    });
    container.applyMiddleware(logger);
}
var provideThrowable = function (identifier, isThrowable) {
    return inversify_binding_decorators_1.fluentProvide(identifier)
        .whenTargetTagged('throwable', isThrowable)
        .done();
};
exports.provideThrowable = provideThrowable;
var provideNamed = function (identifier, name) {
    return inversify_binding_decorators_1.fluentProvide(identifier)
        .whenTargetNamed(name)
        .done();
};
exports.provideNamed = provideNamed;
var provideSingleton = function (identifier) {
    return inversify_binding_decorators_1.fluentProvide(identifier)
        .inSingletonScope()
        .done();
};
exports.provideSingleton = provideSingleton;
var provideNamedSingleton = function (identifier, name) {
    return inversify_binding_decorators_1.fluentProvide(identifier)
        .inSingletonScope()
        .whenTargetNamed(name)
        .done();
};
exports.provideNamedSingleton = provideNamedSingleton;
var provideTaggedSingleton = function (identifier, tag, value) {
    return inversify_binding_decorators_1.fluentProvide(identifier)
        .inSingletonScope()
        .whenTargetTagged(tag, value)
        .done();
};
exports.provideTaggedSingleton = provideTaggedSingleton;
var _a = inversify_inject_decorators_1.default(container), lazyInject = _a.lazyInject, lazyMultiInject = _a.lazyMultiInject;
exports.lazyInject = lazyInject;
exports.lazyMultiInject = lazyMultiInject;


/***/ }),

/***/ "./src/core/ioc/Loader.ts":
/*!********************************!*\
  !*** ./src/core/ioc/Loader.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// sort is import
__webpack_require__(/*! ../Application */ "./src/core/Application.ts");
// controller
__webpack_require__(/*! ../../controller */ "./src/controller/index.ts");
// service
// import '../service'
__webpack_require__(/*! ../../service/impl */ "./src/service/impl/index.ts");
// import '../initializer'
__webpack_require__(/*! ../initializer/impl/ConfigPreBuildInitializer */ "./src/core/initializer/impl/ConfigPreBuildInitializer.ts");
__webpack_require__(/*! ../initializer/impl/EvenManagerInitializer */ "./src/core/initializer/impl/EvenManagerInitializer.ts");
// event
__webpack_require__(/*! ../../core/initializer/impl/MultipleProvidersEventManager */ "./src/core/initializer/impl/MultipleProvidersEventManager.ts");
__webpack_require__(/*! ../../core/event/manger/provider/SocketIOEventManager */ "./src/core/event/manger/provider/SocketIOEventManager.ts");
// event listener
__webpack_require__(/*! ../event/listener/socket/OnSocketUserLoginEvent */ "./src/core/event/listener/socket/OnSocketUserLoginEvent.ts");


/***/ }),

/***/ "./src/core/ioc/index.ts":
/*!*******************************!*\
  !*** ./src/core/ioc/index.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./IOC */ "./src/core/ioc/IOC.ts"));


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var constant_1 = __webpack_require__(/*! ./constant */ "./src/constant/index.ts");
var log4js_1 = __webpack_require__(/*! log4js */ "log4js");
var ioc_1 = __webpack_require__(/*! ./core/ioc */ "./src/core/ioc/index.ts");
__webpack_require__(/*! ./core/ioc/Loader */ "./src/core/ioc/Loader.ts");
var inversify_express_utils_1 = __webpack_require__(/*! inversify-express-utils */ "inversify-express-utils");
log4js_1.configure('./config/log4js.json');
var logger = log4js_1.getLogger();
logger.level = Object({"NODE_ENV":"development","PORT":"80","SOCKETIO_SERVER_PORT":"4000","APP_INDOOR_STATIC_FILE":"E:\\Workspaces\\Repository\\nixstack\\packages\\client\\app-indoor\\dist"}).LOGGER_LEVEL || 'off';
// import { appContainer } from './inversify.config'
// import { TYPES } from './constant/Types'
// import { IUserService } from './service'
// const userServiceInst = appContainer.get<IUserService>(TYPES.IUserService)
// console.log(userServiceInst)
// console.log(userServiceInst.sayHello())
// container.bind<ProjectServiceImpl>(TYPES.ProjectService).to(ProjectServiceImpl)
// container.bind<UserServiceImpl>(TYPES.UserService).to(UserServiceImpl)
// autoProvide(container, service)
// 必须放在Loader之后
// container.load(buildProviderModule())
// const server = new InversifyExpressServer(container)
// server.setConfig(app => {
//   // add body parser
//   app.use(
//     bodyParser.urlencoded({
//       extended: true
//     })
//   )
//   app.use(bodyParser.json())
// })
// let app = server.build()
// app.listen(3002)
ioc_1.container.load(ioc_1.buildProviderModule());
var express = new inversify_express_utils_1.InversifyExpressServer(ioc_1.container, null, {
    rootPath: '/api'
});
var application = ioc_1.container.get(constant_1.TYPES.Application);
application.setExpress(express);
application.run(ioc_1.container);
// const socketIO: SocketIO.Server = container.get<SocketIO.Server>(TYPES.SocketIO)
// socketIO.on('connect', () => {
//   console.log('SocketIO connected...')
// })
// const userList: IUserDto[] = []
// const server = http.createServer(function(req: any, res: any) {
//   res.writeHead(200)
//   res.end('hello world')
// })
// https://stackoverflow.com/questions/28306740/socket-io-connect-to-unix-socket
// socket.io setup
// const io = socketIo.listen(server) as any
// io.set('transports', ['websocket'])
// let protocol = ''
// const isDev = process.env.NODE_ENV === 'development'
// if (!isDev) {
//   // let ngnix know we want to start serving from the proxy
//   fs.openSync('/tmp/app-initialized', 'w')
//   protocol = '/tmp/nginx.socket'
//   // FIX: address in used
//   if (fs.existsSync(protocol)) fs.unlinkSync(protocol)
// } else {
//   protocol = process.env.SOCKETIO_SERVER_PORT as string
// }
// // listen to ngnix socket
// server.listen(protocol, function() {
//   // FIX: Permission denied
//   if (protocol && fs.existsSync(protocol)) fs.chmodSync(protocol, 755)
//   logger.debug(`server up`)
// })
// io.on('connect_error', function(err: any) {
//   logger.debug(err)
// })
// io.on('connect_timeout', function(err: any) {
//   logger.debug(err)
// })
// io.on('connection', function(socket: any) {
//   logger.debug(`socket: ${socket.id} connected`)
//   let currentUser: IUserDto
//   // socket.emit('connection', socket.id)
//   socket.on('disconnect', function() {
//     logger.debug(`disconnected`)
//   })
//   socket.on(EActionType.LOG_IN, (action: ActionType<typeof logIn>) => {
//     logger.debug(`${EActionType.LOG_IN}--${JSON.stringify(action)}`)
//     currentUser = action.payload.user
//     const existingUser = userList.find(
//       (user: IUserDto) => user.name === currentUser.name
//     )
//     logger.debug(`existingUser:${existingUser}`)
//     if (existingUser) {
//       currentUser = existingUser
//     } else {
//       newUser(currentUser)
//     }
//     logger.debug(`${JSON.stringify(currentUser)}`)
//     // socket.emit(EActionType.LGG_SUCCESS, { msg: 'Log in success...' })
//     socket.emit(EActionType.LOG_IN, {
//       type: EActionType.LOG_IN,
//       payload: { user: currentUser }
//     })
//   })
//   // socket.on(EActionType.ADD_PROJECT, (action: ActionType<typeof addProject>) => {
//   // })
// })
// function readJson(path: string, callback: (object: any) => any): void {
//   fs.readFile(path, 'utf8', (err, data: string): void => {
//     if (err) {
//       logger.error(err)
//     } else {
//       callback(JSON.parse(data))
//     }
//   })
// }
// const newUser = (user: IUserDto): void => {
//   logger.debug(`new user: ${user.name}`)
//   user.name = user.name
//   userList.push(user)
//   // Save to file
//   readJson(USER_FILE_PATH, (userData: IUserDto[]): void => {
//     userData.push(user)
//     const json: string = JSON.stringify(userData)
//     logger.debug(json)
//     fs.writeFile(USER_FILE_PATH, json, 'utf8', err => {
//       if (err) {
//         logger.debug(err)
//         return
//       }
//       logger.debug(`Write to ${USER_FILE_PATH}`)
//       return
//     })
//   })
// }


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
var constant_1 = __webpack_require__(/*! ../../constant */ "./src/constant/index.ts");
var inversify_binding_decorators_1 = __webpack_require__(/*! inversify-binding-decorators */ "inversify-binding-decorators");
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
        inversify_binding_decorators_1.provide(constant_1.TYPES.ProjectService)
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
var ioc_1 = __webpack_require__(/*! ../../core/ioc */ "./src/core/ioc/index.ts");
// @injectable()
// @provideSingleton(TYPES.IUserService)
var UserServiceImpl = /** @class */ (function () {
    // @injectable()
    function UserServiceImpl() {
    }
    // public constructor(@inject(TYPES.IProjectService) project: IProjectService) {
    //   this._project = project
    // }
    UserServiceImpl.prototype.sayHello = function () {
        return 'Hello World!' + JSON.stringify(this._project.getAll());
    };
    __decorate([
        inversify_1.inject(constant_1.TYPES.ProjectService),
        __metadata("design:type", Object)
    ], UserServiceImpl.prototype, "_project", void 0);
    UserServiceImpl = __decorate([
        ioc_1.provide(constant_1.TYPES.UserService)
        // @injectable()
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

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),

/***/ "inversify":
/*!****************************!*\
  !*** external "inversify" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("inversify");

/***/ }),

/***/ "inversify-binding-decorators":
/*!***********************************************!*\
  !*** external "inversify-binding-decorators" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("inversify-binding-decorators");

/***/ }),

/***/ "inversify-express-utils":
/*!******************************************!*\
  !*** external "inversify-express-utils" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("inversify-express-utils");

/***/ }),

/***/ "inversify-inject-decorators":
/*!**********************************************!*\
  !*** external "inversify-inject-decorators" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("inversify-inject-decorators");

/***/ }),

/***/ "inversify-logger-middleware":
/*!**********************************************!*\
  !*** external "inversify-logger-middleware" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("inversify-logger-middleware");

/***/ }),

/***/ "lodash/foreach":
/*!*********************************!*\
  !*** external "lodash/foreach" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash/foreach");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vLi4vLi4vc2hhcmUvY29uZmlnL2luZGV4LnRzIiwid2VicGFjazovLy8uLy4uLy4uL3NoYXJlL2NvbnN0YW50L0VCYXNlQ29uc3RhbnQudHMiLCJ3ZWJwYWNrOi8vLy4vLi4vLi4vc2hhcmUvY29uc3RhbnQvRXZlbnRzLnRzIiwid2VicGFjazovLy8uLy4uLy4uL3NoYXJlL2NvbnN0YW50L2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9jb25zdGFudC9GaWxlUGF0aC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uc3RhbnQvVHlwZXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnN0YW50L2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9jb250cm9sbGVyL1VzZXJDb250cm9sbGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9jb250cm9sbGVyL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL0FwcGxpY2F0aW9uLnRzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL2V2ZW50L2xpc3RlbmVyL3NvY2tldC9PblNvY2tldFVzZXJMb2dpbkV2ZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL2V2ZW50L21hbmdlci9wcm92aWRlci9Tb2NrZXRJT0V2ZW50TWFuYWdlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9pbml0aWFsaXplci9pbXBsL0NvbmZpZ1ByZUJ1aWxkSW5pdGlhbGl6ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvaW5pdGlhbGl6ZXIvaW1wbC9FdmVuTWFuYWdlckluaXRpYWxpemVyLnRzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL2luaXRpYWxpemVyL2ltcGwvTXVsdGlwbGVQcm92aWRlcnNFdmVudE1hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvaW9jL0lPQy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9pb2MvTG9hZGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL2lvYy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2UvaW1wbC9Qcm9qZWN0U2VydmljZUltcGwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2UvaW1wbC9Vc2VyU2VydmljZUltcGwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2UvaW1wbC9pbmRleC50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJib2R5LXBhcnNlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImludmVyc2lmeVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImludmVyc2lmeS1iaW5kaW5nLWRlY29yYXRvcnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJpbnZlcnNpZnktZXhwcmVzcy11dGlsc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImludmVyc2lmeS1pbmplY3QtZGVjb3JhdG9yc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImludmVyc2lmeS1sb2dnZXItbWlkZGxld2FyZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImxvZGFzaC9mb3JlYWNoXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibG9nNGpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVmbGVjdC1tZXRhZGF0YVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInNvY2tldC5pb1wiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2xGQSxJQUFNLFNBQVMsR0FBRyxrQkFBa0I7QUFDcEMsa0JBQWU7SUFDYixJQUFJLEVBQUUsSUFBZ0I7SUFDdEIsb0JBQW9CLEVBQUUsTUFBZ0M7SUFDdEQsSUFBSSxFQUFLLFNBQVMsU0FBSSxJQUFrQjtJQUN4QyxlQUFlLEVBQUUsZ0xBQVcsQ0FBQyxlQUFlO0lBQzVDLGFBQWEsRUFBSyxTQUFTLFNBQUksZ0xBQVcsQ0FBQyxlQUFpQjtJQUM1RCxVQUFVLEVBQUssU0FBUyxTQUFJLE1BQWdDLGVBQVk7SUFDeEUsc0JBQXNCLEVBQUUsMEVBQWtDO0NBQzNEOzs7Ozs7Ozs7Ozs7Ozs7QUNURCxJQUFZLFdBSVg7QUFKRCxXQUFZLFdBQVc7SUFDckIsbURBQVc7SUFDWCxpREFBVTtJQUNWLG1EQUFXO0FBQ2IsQ0FBQyxFQUpXLFdBQVcsR0FBWCxtQkFBVyxLQUFYLG1CQUFXLFFBSXRCO0FBRUQsSUFBWSxjQUtYO0FBTEQsV0FBWSxjQUFjO0lBQ3hCLGlFQUFlO0lBQ2YsbUVBQWdCO0lBQ2hCLG1FQUFnQjtJQUNoQixpRUFBZTtBQUNqQixDQUFDLEVBTFcsY0FBYyxHQUFkLHNCQUFjLEtBQWQsc0JBQWMsUUFLekI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWFksbUJBQVcsR0FBRztJQUN6QixNQUFNLEVBQUUsY0FBYztJQUN0QixNQUFNLEVBQUUsY0FBYztDQUN2QjtBQUVELElBQVksVUFLWDtBQUxELFdBQVksVUFBVTtJQUNwQiw4Q0FBZ0M7SUFDaEMsNENBQThCO0lBQzlCLDhDQUFnQztJQUNoQyxxREFBdUM7QUFDekMsQ0FBQyxFQUxXLFVBQVUsR0FBVixrQkFBVSxLQUFWLGtCQUFVLFFBS3JCO0FBRUQsSUFBWSxhQUtYO0FBTEQsV0FBWSxhQUFhO0lBQ3ZCLHlEQUF3QztJQUN4QywyREFBMEM7SUFDMUMsK0RBQThDO0lBQzlDLHlEQUF3QztBQUMxQyxDQUFDLEVBTFcsYUFBYSxHQUFiLHFCQUFhLEtBQWIscUJBQWEsUUFLeEI7QUFFWSxjQUFNLHlCQUFRLFVBQVUsR0FBSyxhQUFhLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25CekQsOEZBQStCO0FBQy9CLGdGQUF3Qjs7Ozs7Ozs7Ozs7Ozs7O0FDRFgsc0JBQWMsR0FBVyxhQUFhOzs7Ozs7Ozs7Ozs7Ozs7QUNBbkQsSUFBSSxLQUFLLEdBQUc7SUFDVixXQUFXLEVBQUUsTUFBTSxDQUFDLGFBQWEsQ0FBQztJQUNsQyxRQUFRLEVBQUUsTUFBTSxDQUFDLGlCQUFpQixDQUFDO0lBQ25DLG1CQUFtQixFQUFFLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQztJQUNsRCwwQkFBMEIsRUFBRSxNQUFNLENBQUMsNEJBQTRCLENBQUM7SUFDaEUsYUFBYSxFQUFFLE1BQU0sQ0FBQyxlQUFlLENBQUM7SUFDdEMsY0FBYyxFQUFFLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQztJQUN4QyxxQkFBcUIsRUFBRSxNQUFNLENBQUMsdUJBQXVCLENBQUM7SUFDdEQsV0FBVyxFQUFFLE1BQU0sQ0FBQyxhQUFhLENBQUM7SUFDbEMsY0FBYyxFQUFFLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQztDQUN6QztBQUVRLHNCQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNaZCw4RUFBMEI7QUFDMUIsd0VBQXVCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNEdkIsOEhBQW1FO0FBQ25FLDhFQUEyRDtBQUMzRCxtRkFBbUM7QUFDbkMsOEdBQStFO0FBRy9FLHFDQUFxQztBQUNyQyxtREFBbUQ7QUFFbkQ7SUFDRSw2QkFBNkI7SUFDN0Isc0NBQXNDO0lBQ3RDLHdCQUNxQyxZQUE2QjtRQUE3QixpQkFBWSxHQUFaLFlBQVksQ0FBaUI7SUFDL0QsQ0FBQztJQUdHLDRCQUFHLEdBQVY7UUFDRSxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFO0lBQ3JDLENBQUM7SUFGRDtRQURDLGlDQUFPLENBQUMsR0FBRyxDQUFDOzs7OzZDQUdaO0lBVlUsY0FBYztRQUQxQixvQ0FBVSxDQUFDLE9BQU8sQ0FBQztRQUtmLHVCQUFNLENBQUMsZ0JBQUssQ0FBQyxXQUFXLENBQUM7eUNBQXVCLGlDQUFlO09BSnZELGNBQWMsQ0FXMUI7SUFBRCxxQkFBQztDQUFBO0FBWFksd0NBQWM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1QzQiw0RkFBZ0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0VoQyxtRkFBbUM7QUFJbkMsb0VBQTBFO0FBQzFFLHdHQUF1QztBQUV2QyxxRkFBMEI7QUFDMUIsd0VBQXdDO0FBR3hDO0lBT0UscUJBRUUsb0JBQTRDO1FBRTVDLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxvQkFBb0I7SUFDbkQsQ0FBQztJQUVNLGdDQUFVLEdBQWpCLFVBQWtCLE9BQStCO1FBQy9DLElBQUksQ0FBQyxRQUFRLEdBQUcsT0FBTztJQUN6QixDQUFDO0lBRU0sbUNBQWEsR0FBcEI7UUFDRSxPQUFPLElBQUksQ0FBQyxXQUFXO0lBQ3pCLENBQUM7SUFFTSx5QkFBRyxHQUFWLFVBQVcsU0FBd0M7UUFBbkQsaUJBWUM7UUFYQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7YUFDN0IsSUFBSSxDQUFDLGNBQU0sWUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsRUFBM0IsQ0FBMkIsQ0FBQzthQUN2QyxJQUFJLENBQUM7WUFDSixLQUFJLENBQUMsNEJBQTRCLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FFbEQsZ0JBQUssQ0FBQywwQkFBMEIsQ0FBQztRQUNyQyxDQUFDLENBQUM7YUFDRCxJQUFJLENBQUM7WUFDSixLQUFJLENBQUMsZUFBZSxFQUFFO1FBQ3hCLENBQUMsQ0FBQzthQUNELEtBQUssQ0FBQyxVQUFDLEdBQVUsSUFBSyxjQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFoQixDQUFnQixDQUFDO0lBQzVDLENBQUM7SUFFUyxpQ0FBVyxHQUFyQixVQUNFLFNBQXdDO1FBRDFDLGlCQWVDO1FBWkMsT0FBTyxJQUFJLE9BQU8sQ0FBTyxpQkFBTztZQUM5QixLQUFJLENBQUMsSUFBSSxHQUFHLEtBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFO1lBQ2pDLElBQU0sSUFBSSxHQUFHLGdCQUFXLENBQUMsb0JBQW9CO1lBRTdDLEtBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFO2dCQUN4QyxjQUFPLENBQUMsR0FBRyxDQUFDLDZCQUEyQixJQUFNLENBQUM7WUFBOUMsQ0FBOEMsQ0FDL0M7WUFFRCxJQUFNLFFBQVEsR0FBb0IsbUJBQUUsQ0FBQyxLQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7WUFDMUQsU0FBUyxDQUFDLElBQUksQ0FBa0IsZ0JBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDO1lBQ3pFLE9BQU8sRUFBRTtRQUNYLENBQUMsQ0FBQztJQUNKLENBQUM7SUFFUyxrQ0FBWSxHQUF0QixVQUF1QixPQUErQjtRQUNwRCxPQUFPLE9BQU8sQ0FBQyxHQUFHLENBQ2hCLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxHQUFHLENBQUMsVUFBQyxXQUFpQztZQUMvRCxrQkFBVyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUM7UUFBNUIsQ0FBNEIsQ0FDN0IsQ0FDRjtJQUNILENBQUM7SUFFUyxxQ0FBZSxHQUF6QjtRQUFBLGlCQU9DO1FBTkMsT0FBTyxPQUFPLENBQUMsR0FBRyxDQUNoQixJQUFJLENBQUMsNEJBQTRCLENBQUMsR0FBRyxDQUNuQyxVQUFDLFdBQXdDO1lBQ3ZDLGtCQUFXLENBQUMsT0FBTyxDQUFDLEtBQUksQ0FBQyxXQUFXLENBQUM7UUFBckMsQ0FBcUMsQ0FDeEMsQ0FDRjtJQUNILENBQUM7SUFwRVUsV0FBVztRQUR2QixzQkFBZ0IsQ0FBQyxnQkFBSyxDQUFDLFdBQVcsQ0FBQztRQVMvQixrQ0FBVyxDQUFDLGdCQUFLLENBQUMsbUJBQW1CLENBQUM7O09BUjlCLFdBQVcsQ0FxRXZCO0lBQUQsa0JBQUM7Q0FBQTtBQXJFWSxrQ0FBVzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWHhCLHVGQUE0RDtBQUM1RCw0RkFBNEM7QUFFNUMsNkZBQXlEO0FBRXpELHdFQUF3RTtBQUV4RTtJQUFBO0lBY0EsQ0FBQztJQWJDLHFDQUFJLEdBQUo7UUFDRSxPQUFPLHNCQUFXLENBQUMsTUFBTTtJQUMzQixDQUFDO0lBQ0QscUNBQUksR0FBSjtRQUNFLE9BQU8scUJBQVUsQ0FBQyxNQUFNO0lBQzFCLENBQUM7SUFDRCx5Q0FBUSxHQUFSO1FBQ0UsT0FBTztZQUNMLFVBQUMsTUFBZTtnQkFDZCxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQztZQUNyQixDQUFDO1NBQ0Y7SUFDSCxDQUFDO0lBYlUsc0JBQXNCO1FBRGxDLGFBQU8sQ0FBQyxnQkFBSyxDQUFDLGNBQWMsQ0FBQztPQUNqQixzQkFBc0IsQ0FjbEM7SUFBRCw2QkFBQztDQUFBO0FBZFksd0RBQXNCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQbkMsNkZBQTZDO0FBRTdDLDRGQUE0QztBQUM1Qyx1RkFJNkI7QUFFN0IsMEJBQTBCO0FBQzFCLGlDQUFpQztBQUNqQyxvQ0FBb0M7QUFDcEMsSUFBSTtBQUVKO0lBSUUsOEJBQTJDLFlBQTZCO1FBQ3RFLElBQUksQ0FBQyxhQUFhLEdBQUcsWUFBWTtJQUNuQyxDQUFDO0lBRUQsc0JBQVcsd0NBQU07YUFBakIsVUFBa0IsTUFBdUI7WUFDdkMsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNO1FBQ3ZCLENBQUM7OztPQUFBO0lBQ0QsbUNBQUksR0FBSjtRQUNFLE9BQU8sc0JBQVcsQ0FBQyxNQUFNO0lBQzNCLENBQUM7SUFDRCxtQ0FBSSxHQUFKLFVBQUssS0FBaUM7UUFDcEMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxFQUFFLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNyRCxDQUFDO0lBQ0QsaUNBQUUsR0FBRixVQUFHLFNBQWlCLEVBQUUsUUFBa0I7UUFDdEMsNkNBQTZDO0lBQy9DLENBQUM7SUFFTSxpREFBa0IsR0FBekIsVUFDRSxNQUF1QixFQUN2QixjQUFnQztRQUZsQyxpQkFrQkM7UUFkQyxjQUFjO2FBQ1gsTUFBTSxDQUNMLFVBQUMsYUFBNkIsSUFBSyxvQkFBYSxDQUFDLElBQUksRUFBRSxLQUFLLEtBQUksQ0FBQyxJQUFJLEVBQUUsRUFBcEMsQ0FBb0MsQ0FDeEU7YUFDQSxPQUFPLENBQUMsVUFBQyxhQUE2QjtZQUNyQyxvQkFBYSxDQUFDLFFBQVEsRUFBRSxDQUFDLE9BQU8sQ0FBQyxVQUFDLFdBQXFCO2dCQUNyRCxRQUFDLFVBQUMsTUFBZ0I7b0JBQ2hCLE1BQU0sQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxFQUFFLFVBQUMsTUFBVzt3QkFDMUMsOEJBQThCO3dCQUM5QixNQUFNLENBQUMsTUFBTSxDQUFDO29CQUNoQixDQUFDLENBQUM7Z0JBQ0osQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDO1lBTGYsQ0FLZSxDQUNoQjtRQVBELENBT0MsQ0FDRjtJQUNMLENBQUM7SUF2Q1Usb0JBQW9CO1FBRGhDLHNCQUFnQixDQUFDLGdCQUFLLENBQUMscUJBQXFCLENBQUM7UUFLeEIsdUJBQU0sQ0FBQyxnQkFBSyxDQUFDLFFBQVEsQ0FBQzs7T0FKL0Isb0JBQW9CLENBd0NoQztJQUFELDJCQUFDO0NBQUE7QUF4Q1ksb0RBQW9COzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQmpDLDRFQUE0QztBQUk1QywyRkFBb0M7QUFDcEMseUZBQXlDO0FBSXpDO0lBQUE7SUFlQSxDQUFDO0lBZEMsMkNBQU8sR0FBUCxVQUFRLGFBQXFDO1FBQzNDLE9BQU8sSUFBSSxPQUFPLENBQU8saUJBQU87WUFDOUIsYUFBYSxDQUFDLFNBQVMsQ0FBQyxVQUFDLEdBQXdCO2dCQUMvQyxHQUFHLENBQUMsR0FBRyxDQUFDLHFCQUFVLENBQUMsVUFBVSxDQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7Z0JBQ2xELEdBQUcsQ0FBQyxHQUFHLENBQUMscUJBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFDMUIscUJBQXFCO2dCQUNyQixXQUFXO2dCQUNYLFNBQVM7Z0JBQ1QsaUVBQWlFO2dCQUNqRSxJQUFJO1lBQ04sQ0FBQyxDQUFDO1lBQ0YsT0FBTyxFQUFFO1FBQ1gsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQWRVLHlCQUF5QjtRQURyQyxzQkFBZ0IsQ0FBQyxnQkFBSyxDQUFDLG1CQUFtQixDQUFDO09BQy9CLHlCQUF5QixDQWVyQztJQUFELGdDQUFDO0NBQUE7QUFmWSw4REFBeUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1B0Qyw2RkFBNkM7QUFPN0Msb0VBQWtDO0FBQ2xDLHlGQUF5QztBQUN6Qyw0RUFLa0I7QUFHbEI7SUFTRSxnQ0FDK0IsWUFBMkI7SUFDeEQsZ0JBQWdCO0lBQ2hCLHVDQUF1QztJQUN2QywwQ0FBMEM7SUFDMUMsMkNBQTJDO0lBQzNDLDhCQUE4QjtJQUM5QixzREFBc0Q7SUFFdEQsY0FBdUMsRUFDSixjQUFnQyxFQUMzQyxRQUF5QjtRQUVqRCxJQUFJLENBQUMsYUFBYSxHQUFHLFlBQVk7UUFDakMsSUFBSSxDQUFDLGVBQWUsR0FBRyxjQUFjO1FBQ3JDLElBQUksQ0FBQyxlQUFlLEdBQUcsY0FBYztRQUNyQyxJQUFJLENBQUMsU0FBUyxHQUFHLFFBQVE7SUFDM0IsQ0FBQztJQUNELHdDQUFPLEdBQVAsVUFBUSxNQUE2QjtRQUFyQyxpQkFhQztRQVpDLE9BQU8sSUFBSSxPQUFPLENBQU8saUJBQU87WUFDOUIsS0FBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsS0FBSSxDQUFDLGVBQWUsQ0FBQztZQUN0RCxLQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxLQUFJLENBQUMsZUFBZSxDQUFDO1lBQ3RELEtBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLFNBQVMsRUFBRSxVQUFDLE1BQXVCO2dCQUNuRCxPQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFxQixDQUFDLENBQ2pDO2dCQUF1QixDQUN0QixLQUFJLENBQUMsYUFBYSxDQUFDLDBCQUEwQixDQUFDLHNCQUFXLENBQUMsTUFBTSxDQUFDLENBQ2pFLENBQUMsa0JBQWtCLENBQUMsTUFBTSxFQUFFLEtBQUksQ0FBQyxlQUFlLENBQUM7WUFDckQsQ0FBQyxDQUFDO1lBRUYsT0FBTyxFQUFFO1FBQ1gsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQXhDVSxzQkFBc0I7UUFEbEMsc0JBQWdCLENBQUMsZ0JBQUssQ0FBQywwQkFBMEIsQ0FBQztRQVc5Qyw2QkFBTSxDQUFDLGdCQUFLLENBQUMsYUFBYSxDQUFDO1FBTzNCLDRCQUFXLENBQUMsZ0JBQUssQ0FBQyxxQkFBcUIsQ0FBQztRQUV4Qyw0QkFBVyxDQUFDLGdCQUFLLENBQUMsY0FBYyxDQUFDO1FBQ2pDLDZCQUFNLENBQUMsZ0JBQUssQ0FBQyxRQUFRLENBQUM7O09BcEJkLHNCQUFzQixDQXlDbEM7SUFBRCw2QkFBQztDQUFBO0FBekNZLHdEQUFzQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEJuQywyRUFBMkU7QUFDM0UsNkZBQW9DO0FBS3BDLG9GQUFvRDtBQUNwRCx5RkFBeUM7QUFHekM7SUFBQTtRQUNZLGNBQVMsR0FBOEMsRUFBRTtJQTZDckUsQ0FBQztJQTVDQyxxREFBYSxHQUFiLFVBQ0UsU0FBNkU7UUFFN0UsaUJBQU8sQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNwRCxPQUFPLElBQUk7SUFDYixDQUFDO0lBQ0QscURBQWEsR0FBYixVQUNFLGNBQTRFO1FBRDlFLGlCQWNDO1FBWEMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxVQUFDLGFBQTZCO1lBQ25ELG9CQUFhO2lCQUNWLFFBQVEsRUFBRTtpQkFDVixPQUFPLENBQUMsVUFBQyxZQUFpQjtnQkFDekIsWUFBSSxDQUFDLDBCQUEwQixDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FDdEQsYUFBYSxDQUFDLElBQUksRUFBRSxFQUNwQixZQUFZLENBQ2I7WUFIRCxDQUdDLENBQ0Y7UUFQSCxDQU9HLENBQ0o7UUFDRCxPQUFPLElBQUk7SUFDYixDQUFDO0lBQ0Qsd0RBQWdCLEdBQWhCLFVBQ0UsUUFBMEU7UUFFMUUsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFO1lBQ25DLE1BQU0sSUFBSSxLQUFLLENBQUMsNENBQTRDLENBQUM7U0FDOUQ7UUFFRCxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLFFBQVE7SUFDNUMsQ0FBQztJQUNELGtFQUEwQixHQUExQixVQUNFLFNBQWlCO1FBRWpCLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxFQUFFO1lBQzlCLE1BQU0sSUFBSSxLQUFLLENBQUMsbUNBQW1DLENBQUM7U0FDckQ7UUFDRCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDO0lBQ2xDLENBQUM7SUFDRCw0Q0FBSSxHQUFKLFVBQUssS0FBaUQ7UUFDcEQsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFO1lBQ2hELE1BQU0sSUFBSSxLQUFLLENBQUMscUJBQXFCLENBQUM7U0FDdkM7UUFDRCxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDMUMsQ0FBQztJQTdDVSw2QkFBNkI7UUFEekMsc0JBQWdCLENBQUMsZ0JBQUssQ0FBQyxhQUFhLENBQUM7T0FDekIsNkJBQTZCLENBOEN6QztJQUFELG9DQUFDO0NBQUE7QUE5Q1ksc0VBQTZCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNYMUMsZ0VBQXlCO0FBQ3pCLG9FQUE2RTtBQWlFM0UsaUJBakVrQixrQkFBTSxDQWlFbEI7QUFDTixzQkFsRXNDLHVCQUFXLENBa0V0QztBQUdYLGdCQXJFbUQsaUJBQUssQ0FxRW5EO0FBcEVQLDZIQUtxQztBQXVEbkMsc0JBM0RBLDBDQUFXLENBMkRBO0FBWVgsOEJBdEVBLGtEQUFtQixDQXNFQTtBQVhuQixrQkF6REEsc0NBQU8sQ0F5REE7QUF2RFQsMEhBR29DO0FBQ3BDLDJJQUF1RDtBQUV2RCxJQUFNLFNBQVMsR0FBeUIsSUFBSSxxQkFBUyxFQUFFO0FBK0NyRCw4QkFBUztBQTdDWCxJQUFJLElBQXNDLEVBQUU7SUFDMUMsSUFBSSxNQUFNLEdBQUcsa0RBQW9CLENBQUMsU0FBUyxFQUFFLGFBQUc7UUFDOUMsY0FBTyxDQUFDLEdBQUcsQ0FBQyw0Q0FBYyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQWhDLENBQWdDLENBQ2pDO0lBQ0QsU0FBUyxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUM7Q0FDbEM7QUFFRCxJQUFNLGdCQUFnQixHQUFHLFVBQVMsVUFBZSxFQUFFLFdBQW9CO0lBQ3JFLE9BQU8sNENBQWEsQ0FBQyxVQUFVLENBQUM7U0FDN0IsZ0JBQWdCLENBQUMsV0FBVyxFQUFFLFdBQVcsQ0FBQztTQUMxQyxJQUFJLEVBQUU7QUFDWCxDQUFDO0FBcUNDLDRDQUFnQjtBQW5DbEIsSUFBTSxZQUFZLEdBQUcsVUFBUyxVQUFlLEVBQUUsSUFBWTtJQUN6RCxPQUFPLDRDQUFhLENBQUMsVUFBVSxDQUFDO1NBQzdCLGVBQWUsQ0FBQyxJQUFJLENBQUM7U0FDckIsSUFBSSxFQUFFO0FBQ1gsQ0FBQztBQWdDQyxvQ0FBWTtBQS9CZCxJQUFNLGdCQUFnQixHQUFHLFVBQVMsVUFBZTtJQUMvQyxPQUFPLDRDQUFhLENBQUMsVUFBVSxDQUFDO1NBQzdCLGdCQUFnQixFQUFFO1NBQ2xCLElBQUksRUFBRTtBQUNYLENBQUM7QUFpQ0MsNENBQWdCO0FBL0JsQixJQUFNLHFCQUFxQixHQUFHLFVBQVMsVUFBZSxFQUFFLElBQVk7SUFDbEUsT0FBTyw0Q0FBYSxDQUFDLFVBQVUsQ0FBQztTQUM3QixnQkFBZ0IsRUFBRTtTQUNsQixlQUFlLENBQUMsSUFBSSxDQUFDO1NBQ3JCLElBQUksRUFBRTtBQUNYLENBQUM7QUEyQkMsc0RBQXFCO0FBekJ2QixJQUFNLHNCQUFzQixHQUFHLFVBQzdCLFVBQWUsRUFDZixHQUFXLEVBQ1gsS0FBVTtJQUVWLE9BQU8sNENBQWEsQ0FBQyxVQUFVLENBQUM7U0FDN0IsZ0JBQWdCLEVBQUU7U0FDbEIsZ0JBQWdCLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQztTQUM1QixJQUFJLEVBQUU7QUFDWCxDQUFDO0FBaUJDLHdEQUFzQjtBQWZwQix5REFBMEQsRUFBeEQsMEJBQVUsRUFBRSxvQ0FBNEM7QUFVNUQsZ0NBQVU7QUFDViwwQ0FBZTs7Ozs7Ozs7Ozs7Ozs7O0FDckVqQixpQkFBaUI7QUFDakIsdUVBQXVCO0FBRXZCLGFBQWE7QUFDYix5RUFBeUI7QUFFekIsVUFBVTtBQUNWLHNCQUFzQjtBQUN0Qiw2RUFBMkI7QUFFM0IsMEJBQTBCO0FBQzFCLHFJQUFzRDtBQUN0RCwrSEFBbUQ7QUFFbkQsUUFBUTtBQUNSLHFKQUFrRTtBQUNsRSw2SUFBOEQ7QUFFOUQsaUJBQWlCO0FBQ2pCLHlJQUF3RDs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkJ4RCxvRUFBcUI7Ozs7Ozs7Ozs7Ozs7OztBQ0VyQixrRkFBa0M7QUFVbEMsMkRBQTZDO0FBQzdDLDZFQUF3RTtBQUN4RSx5RUFBMEI7QUFDMUIsOEdBQWdFO0FBT2hFLGtCQUFTLENBQUMsc0JBQXNCLENBQUM7QUFDakMsSUFBTSxNQUFNLEdBQUcsa0JBQVMsRUFBRTtBQUMxQixNQUFNLENBQUMsS0FBSyxHQUFHLGdMQUFXLENBQUMsWUFBWSxJQUFJLEtBQUs7QUFFaEQsb0RBQW9EO0FBQ3BELDJDQUEyQztBQUMzQywyQ0FBMkM7QUFDM0MsNkVBQTZFO0FBQzdFLCtCQUErQjtBQUMvQiwwQ0FBMEM7QUFFMUMsa0ZBQWtGO0FBQ2xGLHlFQUF5RTtBQUN6RSxrQ0FBa0M7QUFFbEMsZUFBZTtBQUNmLHdDQUF3QztBQUV4Qyx1REFBdUQ7QUFDdkQsNEJBQTRCO0FBQzVCLHVCQUF1QjtBQUN2QixhQUFhO0FBQ2IsOEJBQThCO0FBQzlCLHVCQUF1QjtBQUN2QixTQUFTO0FBQ1QsTUFBTTtBQUNOLCtCQUErQjtBQUMvQixLQUFLO0FBQ0wsMkJBQTJCO0FBQzNCLG1CQUFtQjtBQUVuQixlQUFTLENBQUMsSUFBSSxDQUFDLHlCQUFtQixFQUFFLENBQUM7QUFDckMsSUFBTSxPQUFPLEdBQUcsSUFBSSxnREFBc0IsQ0FBQyxlQUFTLEVBQUUsSUFBSSxFQUFFO0lBQzFELFFBQVEsRUFBRSxNQUFNO0NBQ2pCLENBQUM7QUFDRixJQUFNLFdBQVcsR0FBZ0IsZUFBUyxDQUFDLEdBQUcsQ0FBYyxnQkFBSyxDQUFDLFdBQVcsQ0FBQztBQUM5RSxXQUFXLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQztBQUMvQixXQUFXLENBQUMsR0FBRyxDQUFDLGVBQVMsQ0FBQztBQUUxQixtRkFBbUY7QUFDbkYsaUNBQWlDO0FBQ2pDLHlDQUF5QztBQUN6QyxLQUFLO0FBRUwsa0NBQWtDO0FBRWxDLGtFQUFrRTtBQUNsRSx1QkFBdUI7QUFDdkIsMkJBQTJCO0FBQzNCLEtBQUs7QUFFTCxnRkFBZ0Y7QUFDaEYsa0JBQWtCO0FBQ2xCLDRDQUE0QztBQUM1QyxzQ0FBc0M7QUFFdEMsb0JBQW9CO0FBQ3BCLHVEQUF1RDtBQUN2RCxnQkFBZ0I7QUFDaEIsOERBQThEO0FBQzlELDZDQUE2QztBQUM3QyxtQ0FBbUM7QUFDbkMsNEJBQTRCO0FBQzVCLHlEQUF5RDtBQUN6RCxXQUFXO0FBQ1gsMERBQTBEO0FBQzFELElBQUk7QUFFSiw0QkFBNEI7QUFDNUIsdUNBQXVDO0FBQ3ZDLDhCQUE4QjtBQUM5Qix5RUFBeUU7QUFDekUsOEJBQThCO0FBQzlCLEtBQUs7QUFFTCw4Q0FBOEM7QUFDOUMsc0JBQXNCO0FBQ3RCLEtBQUs7QUFFTCxnREFBZ0Q7QUFDaEQsc0JBQXNCO0FBQ3RCLEtBQUs7QUFFTCw4Q0FBOEM7QUFDOUMsbURBQW1EO0FBQ25ELDhCQUE4QjtBQUM5Qiw0Q0FBNEM7QUFFNUMseUNBQXlDO0FBQ3pDLG1DQUFtQztBQUNuQyxPQUFPO0FBRVAsMEVBQTBFO0FBQzFFLHVFQUF1RTtBQUN2RSx3Q0FBd0M7QUFDeEMsMENBQTBDO0FBQzFDLDJEQUEyRDtBQUMzRCxRQUFRO0FBQ1IsbURBQW1EO0FBQ25ELDBCQUEwQjtBQUMxQixtQ0FBbUM7QUFDbkMsZUFBZTtBQUNmLDZCQUE2QjtBQUM3QixRQUFRO0FBQ1IscURBQXFEO0FBQ3JELDRFQUE0RTtBQUM1RSx3Q0FBd0M7QUFDeEMsa0NBQWtDO0FBQ2xDLHVDQUF1QztBQUN2QyxTQUFTO0FBQ1QsT0FBTztBQUVQLHVGQUF1RjtBQUV2RixVQUFVO0FBQ1YsS0FBSztBQUVMLDBFQUEwRTtBQUMxRSw2REFBNkQ7QUFDN0QsaUJBQWlCO0FBQ2pCLDBCQUEwQjtBQUMxQixlQUFlO0FBQ2YsbUNBQW1DO0FBQ25DLFFBQVE7QUFDUixPQUFPO0FBQ1AsSUFBSTtBQUVKLDhDQUE4QztBQUM5QywyQ0FBMkM7QUFDM0MsMEJBQTBCO0FBQzFCLHdCQUF3QjtBQUN4QixvQkFBb0I7QUFDcEIsK0RBQStEO0FBQy9ELDBCQUEwQjtBQUMxQixvREFBb0Q7QUFDcEQseUJBQXlCO0FBQ3pCLDBEQUEwRDtBQUMxRCxtQkFBbUI7QUFDbkIsNEJBQTRCO0FBQzVCLGlCQUFpQjtBQUNqQixVQUFVO0FBQ1YsbURBQW1EO0FBQ25ELGVBQWU7QUFDZixTQUFTO0FBQ1QsT0FBTztBQUNQLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZLSixzRkFBc0M7QUFHdEMsNkhBQXNEO0FBR3REO0lBQUE7SUFTQSxDQUFDO0lBUkMsbUNBQU0sR0FBTjtRQUNFLE9BQU87WUFDTDtnQkFDRSxFQUFFLEVBQUUsQ0FBQztnQkFDTCxJQUFJLEVBQUUsTUFBTTthQUNiO1NBQ0Y7SUFDSCxDQUFDO0lBUlUsa0JBQWtCO1FBRDlCLHNDQUFPLENBQUMsZ0JBQUssQ0FBQyxjQUFjLENBQUM7T0FDakIsa0JBQWtCLENBUzlCO0lBQUQseUJBQUM7Q0FBQTtBQVRZLGdEQUFrQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTC9CLG9FQUE4QztBQUU5QyxzRkFBc0M7QUFDdEMsaUZBQTBEO0FBRTFELGdCQUFnQjtBQUNoQix3Q0FBd0M7QUFHeEM7SUFEQSxnQkFBZ0I7SUFDaEI7SUFZQSxDQUFDO0lBTkMsZ0ZBQWdGO0lBQ2hGLDRCQUE0QjtJQUM1QixJQUFJO0lBQ0osa0NBQVEsR0FBUjtRQUNFLE9BQU8sY0FBYyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNoRSxDQUFDO0lBUEQ7UUFEQyxrQkFBTSxDQUFDLGdCQUFLLENBQUMsY0FBYyxDQUFDOztxREFDSztJQUp2QixlQUFlO1FBRjNCLGFBQU8sQ0FBQyxnQkFBSyxDQUFDLFdBQVcsQ0FBQztRQUMzQixnQkFBZ0I7T0FDSCxlQUFlLENBWTNCO0lBQUQsc0JBQUM7Q0FBQTtBQVpZLDBDQUFlOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNWNUIsc0dBQW9DO0FBQ3BDLGdHQUFpQzs7Ozs7Ozs7Ozs7O0FDRGpDLHdDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLHlEOzs7Ozs7Ozs7OztBQ0FBLG9EOzs7Ozs7Ozs7OztBQ0FBLHdEOzs7Ozs7Ozs7OztBQ0FBLHdEOzs7Ozs7Ozs7OztBQ0FBLDJDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLDZDOzs7Ozs7Ozs7OztBQ0FBLHNDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LnRzXCIpO1xuIiwiY29uc3QgbG9jYWxvaHN0ID0gJ2h0dHA6Ly9sb2NhbGhvc3QnXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBQT1JUOiBwcm9jZXNzLmVudi5QT1JULFxyXG4gIFNPQ0tFVElPX1NFUlZFUl9QT1JUOiBwcm9jZXNzLmVudi5TT0NLRVRJT19TRVJWRVJfUE9SVCxcclxuICBob3N0OiBgJHtsb2NhbG9oc3R9OiR7cHJvY2Vzcy5lbnYuUE9SVH1gLFxyXG4gIEFQUF9JTkRPT1JfUE9SVDogcHJvY2Vzcy5lbnYuQVBQX0lORE9PUl9QT1JULFxyXG4gIGFwcEluZG9vckhvc3Q6IGAke2xvY2Fsb2hzdH06JHtwcm9jZXNzLmVudi5BUFBfSU5ET09SX1BPUlR9YCxcclxuICBzb2NrZUlPVXJsOiBgJHtsb2NhbG9oc3R9OiR7cHJvY2Vzcy5lbnYuU09DS0VUSU9fU0VSVkVSX1BPUlR9L3NvY2tlLmlvL2AsXHJcbiAgQVBQX0lORE9PUl9TVEFUSUNfRklMRTogcHJvY2Vzcy5lbnYuQVBQX0lORE9PUl9TVEFUSUNfRklMRVxyXG59XHJcbiIsImV4cG9ydCBlbnVtIEVVc2VyU3RhdHVzIHtcclxuICBTSUdOX1VQID0gMSxcclxuICBMT0dfSU4gPSAyLFxyXG4gIExPR19PVVQgPSAzXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIEVQcm9qZWN0U3RhdHVzIHtcclxuICBQUk9KRUNUX05FVyA9IDEsXHJcbiAgUFJPSkVDVF9MSVNUID0gMixcclxuICBQUk9KRUNUX0VESVQgPSAzLFxyXG4gIFBST0pFQ1RfREVMID0gNFxyXG59XHJcbiIsImV4cG9ydCBjb25zdCBFVkVOVF9UWVBFUyA9IHtcclxuICBkb21haW46ICdET01BSU4uRVZFTlQnLFxyXG4gIHNvY2tldDogJ1NPQ0tFVC5FVkVOVCdcclxufVxyXG5cclxuZXhwb3J0IGVudW0gRVVzZXJFdmVudCB7XHJcbiAgU0lOR19VUCA9ICdTSU5HX1VQLlNPQ0tFVC5FVkVOVCcsXHJcbiAgTE9HX0lOID0gJ0xPR19JTi5TT0NLRVQuRVZFTlQnLFxyXG4gIExPR19PVVQgPSAnTE9HX09VVC5TT0NLRVQuRVZFTlQnLFxyXG4gIExHR19TVUNDRVNTID0gJ0xHR19TVUNDRVMuU09DS0VULkVWRU5UJ1xyXG59XHJcblxyXG5leHBvcnQgZW51bSBFUHJvamVjdEV2ZW50IHtcclxuICBBRERfUFJPSkVDVCA9ICdBRERfUFJPSkVDVC5TT0NLRVQuRVZFTlQnLFxyXG4gIExJU1RfUFJPSkVDVCA9ICdMSVNUX1BST0pFQ1QuU09DS0VULkVWRU5UJyxcclxuICBVUERBVEVfUFJPSkVDVCA9ICdVUERBVEVfUFJPSkVDVC5TT0NLRVQuRVZFTlQnLFxyXG4gIERFTF9QUk9KRUNUID0gJ0RFTF9QUk9KRUNULlNPQ0tFVC5FVkVOVCdcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEVWRU5UUyA9IHsgLi4uRVVzZXJFdmVudCwgLi4uRVByb2plY3RFdmVudCB9XHJcbiIsImV4cG9ydCAqIGZyb20gJy4vRUJhc2VDb25zdGFudCdcclxuZXhwb3J0ICogZnJvbSAnLi9FdmVudHMnXHJcbiIsImV4cG9ydCBjb25zdCBVU0VSX0ZJTEVfUEFUSDogc3RyaW5nID0gJy4vdXNlci5qc29uJyIsImxldCBUWVBFUyA9IHtcclxuICBBcHBsaWNhdGlvbjogU3ltYm9sKCdBcHBsaWNhdGlvbicpLFxyXG4gIFNvY2tldElPOiBTeW1ib2woJ1NvY2tldElPLlNlcnZlcicpLFxyXG4gIFByZUJ1aWxkSW5pdGlhbGl6ZXI6IFN5bWJvbCgnUHJlQnVpbGRJbml0aWFsaXplcicpLFxyXG4gIFBvc3RJbnN0YW50aWF0ZUluaXRpYWxpemVyOiBTeW1ib2woJ1Bvc3RJbnN0YW50aWF0ZUluaXRpYWxpemVyJyksXHJcbiAgSUV2ZW50TWFuYWdlcjogU3ltYm9sKCdJRXZlbnRNYW5hZ2VyJyksXHJcbiAgSUV2ZW50TGlzdGVuZXI6IFN5bWJvbCgnSUV2ZW50TGlzdGVuZXInKSxcclxuICBJRXZlbnRNYW5hZ2VyUHJvdmlkZXI6IFN5bWJvbCgnSUV2ZW50TWFuYWdlclByb3ZpZGVyJyksXHJcbiAgVXNlclNlcnZpY2U6IFN5bWJvbCgnVXNlclNlcnZpY2UnKSxcclxuICBQcm9qZWN0U2VydmljZTogU3ltYm9sKCdQcm9qZWN0U2VydmljZScpXHJcbn1cclxuXHJcbmV4cG9ydCB7IFRZUEVTIH1cclxuIiwiZXhwb3J0ICogZnJvbSAnLi9GaWxlUGF0aCdcclxuZXhwb3J0ICogZnJvbSAnLi9UeXBlcydcclxuIiwiaW1wb3J0IHsgVXNlclNlcnZpY2VJbXBsIH0gZnJvbSAnLi8uLi9zZXJ2aWNlL2ltcGwvVXNlclNlcnZpY2VJbXBsJ1xyXG5pbXBvcnQgeyBwcm92aWRlLCBpbmplY3QsIHByb3ZpZGVOYW1lZCB9IGZyb20gJy4uL2NvcmUvaW9jJ1xyXG5pbXBvcnQgeyBUWVBFUyB9IGZyb20gJy4uL2NvbnN0YW50J1xyXG5pbXBvcnQgeyBjb250cm9sbGVyLCBodHRwR2V0LCBpbnRlcmZhY2VzLCBUWVBFIH0gZnJvbSAnaW52ZXJzaWZ5LWV4cHJlc3MtdXRpbHMnXHJcbmltcG9ydCB7IElVc2VyU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2UnXHJcblxyXG4vLyBAcHJvdmlkZShUWVBFUy5JVXNlclNlcnZpY2UsIHRydWUpXHJcbi8vIEBwcm92aWRlTmFtZWQoVFlQRS5Db250cm9sbGVyLCAnVXNlckNvbnRyb2xsZXInKVxyXG5AY29udHJvbGxlcignL3VzZXInKVxyXG5leHBvcnQgY2xhc3MgVXNlckNvbnRyb2xsZXIgaW1wbGVtZW50cyBpbnRlcmZhY2VzLkNvbnRyb2xsZXIge1xyXG4gIC8vIEBpbmplY3QoVFlQRVMuVXNlclNlcnZpY2UpXHJcbiAgLy8gcHJpdmF0ZSBfdXNlclNlcnZpY2UhOiBJVXNlclNlcnZpY2VcclxuICBjb25zdHJ1Y3RvcihcclxuICAgIEBpbmplY3QoVFlQRVMuVXNlclNlcnZpY2UpIHByaXZhdGUgX3VzZXJTZXJ2aWNlOiBVc2VyU2VydmljZUltcGxcclxuICApIHt9XHJcblxyXG4gIEBodHRwR2V0KCcvJylcclxuICBwdWJsaWMgZ2V0KCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5fdXNlclNlcnZpY2Uuc2F5SGVsbG8oKVxyXG4gIH1cclxufVxyXG4iLCJleHBvcnQgKiBmcm9tICcuL1VzZXJDb250cm9sbGVyJ1xyXG4iLCJpbXBvcnQgeyBwcm92aWRlIH0gZnJvbSAnaW52ZXJzaWZ5LWJpbmRpbmctZGVjb3JhdG9ycydcclxuaW1wb3J0IHsgSVBvc3RJbnN0YW50aWF0ZUluaXRpYWxpemVyIH0gZnJvbSAnLi9pbml0aWFsaXplci9JUG9zdEluc3RhbnRpYXRlSW5pdGlhbGl6ZXInXHJcbmltcG9ydCB7IFRZUEVTIH0gZnJvbSAnLi4vY29uc3RhbnQnXHJcbmltcG9ydCB7IElQcmVCdWlsZEluaXRpYWxpemVyIH0gZnJvbSAnLi9pbml0aWFsaXplci9JUHJlQnVpbGRJbml0aWFsaXplcidcclxuaW1wb3J0IGh0dHAgZnJvbSAnaHR0cCdcclxuaW1wb3J0IHsgSW52ZXJzaWZ5RXhwcmVzc1NlcnZlciB9IGZyb20gJ2ludmVyc2lmeS1leHByZXNzLXV0aWxzJ1xyXG5pbXBvcnQgeyBtdWx0aUluamVjdCwgaW50ZXJmYWNlcyBhcyBpbnZlcnNpZnlJbnRlcmZhY2VzIH0gZnJvbSAnaW52ZXJzaWZ5J1xyXG5pbXBvcnQgc2hhcmVDb25maWcgZnJvbSAnQHNoYXJlL2NvbmZpZydcclxuaW1wb3J0IGV4cHJlc3MgZnJvbSAnZXhwcmVzcydcclxuaW1wb3J0IGlvIGZyb20gJ3NvY2tldC5pbydcclxuaW1wb3J0IHsgcHJvdmlkZVNpbmdsZXRvbiB9IGZyb20gJy4vaW9jJ1xyXG5cclxuQHByb3ZpZGVTaW5nbGV0b24oVFlQRVMuQXBwbGljYXRpb24pXHJcbmV4cG9ydCBjbGFzcyBBcHBsaWNhdGlvbiB7XHJcbiAgcHJpdmF0ZSBfZXhwcmVzcyE6IEludmVyc2lmeUV4cHJlc3NTZXJ2ZXJcclxuICBwcml2YXRlIF9odHRwU2VydmVyITogaHR0cC5TZXJ2ZXJcclxuICBwcml2YXRlIF9wcmVCdWlsZEluaXRpYWxpemVyczogSVByZUJ1aWxkSW5pdGlhbGl6ZXJbXVxyXG4gIHByaXZhdGUgX3Bvc3RJbnN0YW50aWF0ZUluaXRpYWxpemVycyE6IElQb3N0SW5zdGFudGlhdGVJbml0aWFsaXplcltdXHJcbiAgcHJpdmF0ZSBfYXBwITogZXhwcmVzcy5BcHBsaWNhdGlvblxyXG5cclxuICBwdWJsaWMgY29uc3RydWN0b3IoXHJcbiAgICBAbXVsdGlJbmplY3QoVFlQRVMuUHJlQnVpbGRJbml0aWFsaXplcilcclxuICAgIHByZUJ1aWxkSW5pdGlhbGl6ZXJzOiBJUHJlQnVpbGRJbml0aWFsaXplcltdXHJcbiAgKSB7XHJcbiAgICB0aGlzLl9wcmVCdWlsZEluaXRpYWxpemVycyA9IHByZUJ1aWxkSW5pdGlhbGl6ZXJzXHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2V0RXhwcmVzcyhleHByZXNzOiBJbnZlcnNpZnlFeHByZXNzU2VydmVyKSB7XHJcbiAgICB0aGlzLl9leHByZXNzID0gZXhwcmVzc1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldEh0dHBTZXJ2ZXIoKTogaHR0cC5TZXJ2ZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuX2h0dHBTZXJ2ZXJcclxuICB9XHJcblxyXG4gIHB1YmxpYyBydW4oY29udGFpbmVyOiBpbnZlcnNpZnlJbnRlcmZhY2VzLkNvbnRhaW5lcik6IHZvaWQge1xyXG4gICAgdGhpcy5wcmVCdWlsZEluaXQodGhpcy5fZXhwcmVzcylcclxuICAgICAgLnRoZW4oKCkgPT4gdGhpcy5pbnN0YW50aWF0ZShjb250YWluZXIpKVxyXG4gICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5fcG9zdEluc3RhbnRpYXRlSW5pdGlhbGl6ZXJzID0gY29udGFpbmVyLmdldEFsbDxcclxuICAgICAgICAgIElQb3N0SW5zdGFudGlhdGVJbml0aWFsaXplclxyXG4gICAgICAgID4oVFlQRVMuUG9zdEluc3RhbnRpYXRlSW5pdGlhbGl6ZXIpXHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICB0aGlzLnBvc3RJbml0aWFsaXplZCgpXHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyOiBFcnJvcikgPT4gY29uc29sZS5sb2coZXJyKSlcclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCBpbnN0YW50aWF0ZShcclxuICAgIGNvbnRhaW5lcjogaW52ZXJzaWZ5SW50ZXJmYWNlcy5Db250YWluZXJcclxuICApOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZTx2b2lkPihyZXNvbHZlID0+IHtcclxuICAgICAgdGhpcy5fYXBwID0gdGhpcy5fZXhwcmVzcy5idWlsZCgpXHJcbiAgICAgIGNvbnN0IHBvcnQgPSBzaGFyZUNvbmZpZy5TT0NLRVRJT19TRVJWRVJfUE9SVFxyXG5cclxuICAgICAgdGhpcy5faHR0cFNlcnZlciA9IHRoaXMuX2FwcC5saXN0ZW4ocG9ydCwgKCkgPT5cclxuICAgICAgICBjb25zb2xlLmxvZyhgU2VydmVyIHN0YXJ0ZWQgYXQgcG9ydDogJHtwb3J0fWApXHJcbiAgICAgIClcclxuXHJcbiAgICAgIGNvbnN0IHNvY2tldElPOiBTb2NrZXRJTy5TZXJ2ZXIgPSBpbyh0aGlzLmdldEh0dHBTZXJ2ZXIoKSlcclxuICAgICAgY29udGFpbmVyLmJpbmQ8U29ja2V0SU8uU2VydmVyPihUWVBFUy5Tb2NrZXRJTykudG9Db25zdGFudFZhbHVlKHNvY2tldElPKVxyXG4gICAgICByZXNvbHZlKClcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgcHJlQnVpbGRJbml0KGV4cHJlc3M6IEludmVyc2lmeUV4cHJlc3NTZXJ2ZXIpOiBQcm9taXNlPHZvaWRbXT4ge1xyXG4gICAgcmV0dXJuIFByb21pc2UuYWxsKFxyXG4gICAgICB0aGlzLl9wcmVCdWlsZEluaXRpYWxpemVycy5tYXAoKGluaXRpYWxpemVyOiBJUHJlQnVpbGRJbml0aWFsaXplcikgPT5cclxuICAgICAgICBpbml0aWFsaXplci5hcHBseVRvKGV4cHJlc3MpXHJcbiAgICAgIClcclxuICAgIClcclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCBwb3N0SW5pdGlhbGl6ZWQoKTogUHJvbWlzZTx2b2lkW10+IHtcclxuICAgIHJldHVybiBQcm9taXNlLmFsbChcclxuICAgICAgdGhpcy5fcG9zdEluc3RhbnRpYXRlSW5pdGlhbGl6ZXJzLm1hcChcclxuICAgICAgICAoaW5pdGlhbGl6ZXI6IElQb3N0SW5zdGFudGlhdGVJbml0aWFsaXplcikgPT5cclxuICAgICAgICAgIGluaXRpYWxpemVyLmFwcGx5VG8odGhpcy5faHR0cFNlcnZlcilcclxuICAgICAgKVxyXG4gICAgKVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBhY3Rpb24gfSBmcm9tICd0eXBlc2FmZS1hY3Rpb25zJ1xyXG5pbXBvcnQgeyBJRXZlbnRMaXN0ZW5lciB9IGZyb20gJy4uLy4uL21hbmdlci9JRXZlbnRMaXN0ZW5lcidcclxuaW1wb3J0IHsgcHJvdmlkZU5hbWVkLCBwcm92aWRlIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9pb2MnXHJcbmltcG9ydCB7IFRZUEVTIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29uc3RhbnQnXHJcbmltcG9ydCB7IEFjdGlvbnMgfSBmcm9tICdAc2hhcmUvYWN0aW9uJ1xyXG5pbXBvcnQgeyBFVXNlckV2ZW50LCBFVkVOVF9UWVBFUyB9IGZyb20gJ0BzaGFyZS9jb25zdGFudCdcclxuXHJcbi8vIEBwcm92aWRlTmFtZWQoVFlQRVMuSUV2ZW50TGlzdGVuZXIsIEVWRU5UX05BTUVfTUFQLm9uU29ja2V0VXNlckxvZ2luKVxyXG5AcHJvdmlkZShUWVBFUy5JRXZlbnRMaXN0ZW5lcilcclxuZXhwb3J0IGNsYXNzIE9uU29ja2V0VXNlckxvZ2luRXZlbnQgaW1wbGVtZW50cyBJRXZlbnRMaXN0ZW5lciB7XHJcbiAgdHlwZSgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIEVWRU5UX1RZUEVTLnNvY2tldFxyXG4gIH1cclxuICBuYW1lKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gRVVzZXJFdmVudC5MT0dfSU5cclxuICB9XHJcbiAgaGFuZGxlcnMoKTogRnVuY3Rpb25bXSB7XHJcbiAgICByZXR1cm4gW1xyXG4gICAgICAoYWN0aW9uOiBBY3Rpb25zKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coYWN0aW9uKVxyXG4gICAgICB9XHJcbiAgICBdXHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IFRBR1MgfSBmcm9tICcuLy4uLy4uLy4uLy4uL2NvbnN0YW50L1RhZ3MnXHJcbmltcG9ydCB7IElFdmVudExpc3RlbmVyIH0gZnJvbSAnLi4vSUV2ZW50TGlzdGVuZXInXHJcbmltcG9ydCB7IEVWRU5UX1RZUEVTIH0gZnJvbSAnQHNoYXJlL2NvbnN0YW50J1xyXG5pbXBvcnQgeyBJRXZlbnRNYW5hZ2VyUHJvdmlkZXIgfSBmcm9tICcuLi9JRXZlbnRNYW5hZ2VyJ1xyXG5pbXBvcnQgeyBUWVBFUyB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbnN0YW50J1xyXG5pbXBvcnQge1xyXG4gIHByb3ZpZGVOYW1lZFNpbmdsZXRvbixcclxuICBpbmplY3QsXHJcbiAgcHJvdmlkZVNpbmdsZXRvblxyXG59IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvaW9jJ1xyXG5cclxuLy8gQHByb3ZpZGVOYW1lZFNpbmdsZXRvbihcclxuLy8gICBUWVBFUy5JRXZlbnRNYW5hZ2VyUHJvdmlkZXIsXHJcbi8vICAgVEFHUy5Tb2NrZXRFdmVudE1hbmFnZXJQcm92aWRlclxyXG4vLyApXHJcbkBwcm92aWRlU2luZ2xldG9uKFRZUEVTLklFdmVudE1hbmFnZXJQcm92aWRlcilcclxuZXhwb3J0IGNsYXNzIFNvY2tldElPRXZlbnRNYW5hZ2VyIGltcGxlbWVudHMgSUV2ZW50TWFuYWdlclByb3ZpZGVyIHtcclxuICBwcm90ZWN0ZWQgX3NvY2tldFNlcnZlcjogU29ja2V0SU8uU2VydmVyXHJcbiAgcHJvdGVjdGVkIF9zb2NrZXQhOiBTb2NrZXRJTy5Tb2NrZXRcclxuXHJcbiAgcHVibGljIGNvbnN0cnVjdG9yKEBpbmplY3QoVFlQRVMuU29ja2V0SU8pIHNvY2tldFNlcnZlcjogU29ja2V0SU8uU2VydmVyKSB7XHJcbiAgICB0aGlzLl9zb2NrZXRTZXJ2ZXIgPSBzb2NrZXRTZXJ2ZXJcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZXQgc29ja2V0KHNvY2tldDogU29ja2V0SU8uU29ja2V0KSB7XHJcbiAgICB0aGlzLl9zb2NrZXQgPSBzb2NrZXRcclxuICB9XHJcbiAgdHlwZSgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIEVWRU5UX1RZUEVTLnNvY2tldFxyXG4gIH1cclxuICBlbWl0KGV2ZW50OiBpbXBvcnQoJy4uL0lFdmVudCcpLklFdmVudCk6IHZvaWQge1xyXG4gICAgdGhpcy5fc29ja2V0U2VydmVyLmVtaXQoZXZlbnQubmFtZSgpLCBldmVudC5kYXRhKCkpXHJcbiAgfVxyXG4gIG9uKGV2ZW50TmFtZTogc3RyaW5nLCBjYWxsYmFjazogRnVuY3Rpb24pOiB2b2lkIHtcclxuICAgIC8vIHRoaXMuX3NvY2tldFNlcnZlci5vbihldmVudE5hbWUsIGNhbGxiYWNrKVxyXG4gIH1cclxuXHJcbiAgcHVibGljIGluaXRTb2NrZXRMaXN0ZW5lcihcclxuICAgIHNvY2tldDogU29ja2V0SU8uU29ja2V0LFxyXG4gICAgZXZlbnRMaXN0ZW5lcnM6IElFdmVudExpc3RlbmVyW11cclxuICApOiB2b2lkIHtcclxuICAgIGV2ZW50TGlzdGVuZXJzXHJcbiAgICAgIC5maWx0ZXIoXHJcbiAgICAgICAgKGV2ZW50TGlzdGVuZXI6IElFdmVudExpc3RlbmVyKSA9PiBldmVudExpc3RlbmVyLnR5cGUoKSA9PT0gdGhpcy50eXBlKClcclxuICAgICAgKVxyXG4gICAgICAuZm9yRWFjaCgoZXZlbnRMaXN0ZW5lcjogSUV2ZW50TGlzdGVuZXIpID0+XHJcbiAgICAgICAgZXZlbnRMaXN0ZW5lci5oYW5kbGVycygpLmZvckVhY2goKGV2ZW50SGFuZGVyOiBGdW5jdGlvbikgPT5cclxuICAgICAgICAgICgoaGFuZGVyOiBGdW5jdGlvbikgPT4ge1xyXG4gICAgICAgICAgICBzb2NrZXQub24oZXZlbnRMaXN0ZW5lci5uYW1lKCksIChhY3Rpb246IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgIC8vIGhhbmRlci5hcHBseShudWxsLCBwYXlsb2FkKVxyXG4gICAgICAgICAgICAgIGhhbmRlcihhY3Rpb24pXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICB9KShldmVudEhhbmRlcilcclxuICAgICAgICApXHJcbiAgICAgIClcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgcHJvdmlkZVNpbmdsZXRvbiB9IGZyb20gJy4uLy4uL2lvYydcclxuaW1wb3J0IHsgSVByZUJ1aWxkSW5pdGlhbGl6ZXIgfSBmcm9tICcuLi9JUHJlQnVpbGRJbml0aWFsaXplcidcclxuaW1wb3J0IHsgSW52ZXJzaWZ5RXhwcmVzc1NlcnZlciB9IGZyb20gJ2ludmVyc2lmeS1leHByZXNzLXV0aWxzJ1xyXG5pbXBvcnQgZXhwcmVzcyBmcm9tICdleHByZXNzJ1xyXG5pbXBvcnQgYm9keVBhcnNlciBmcm9tICdib2R5LXBhcnNlcidcclxuaW1wb3J0IHsgVFlQRVMgfSBmcm9tICcuLi8uLi8uLi9jb25zdGFudCdcclxuaW1wb3J0IHNoYXJlQ29uZmlnIGZyb20gJ0BzaGFyZS9jb25maWcnXHJcblxyXG5AcHJvdmlkZVNpbmdsZXRvbihUWVBFUy5QcmVCdWlsZEluaXRpYWxpemVyKVxyXG5leHBvcnQgY2xhc3MgQ29uZmlnUHJlQnVpbGRJbml0aWFsaXplciBpbXBsZW1lbnRzIElQcmVCdWlsZEluaXRpYWxpemVyIHtcclxuICBhcHBseVRvKGV4cHJlc3NTZXJ2ZXI6IEludmVyc2lmeUV4cHJlc3NTZXJ2ZXIpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZTx2b2lkPihyZXNvbHZlID0+IHtcclxuICAgICAgZXhwcmVzc1NlcnZlci5zZXRDb25maWcoKGFwcDogZXhwcmVzcy5BcHBsaWNhdGlvbikgPT4ge1xyXG4gICAgICAgIGFwcC51c2UoYm9keVBhcnNlci51cmxlbmNvZGVkKHsgZXh0ZW5kZWQ6IHRydWUgfSkpXHJcbiAgICAgICAgYXBwLnVzZShib2R5UGFyc2VyLmpzb24oKSlcclxuICAgICAgICAvLyBXZWJwYWNrLURldi1TZXJ2ZXJcclxuICAgICAgICAvLyBhcHAudXNlKFxyXG4gICAgICAgIC8vICAgJy8nLFxyXG4gICAgICAgIC8vICAgZXhwcmVzcy5zdGF0aWMoc2hhcmVDb25maWcuQVBQX0lORE9PUl9TVEFUSUNfRklMRSBhcyBzdHJpbmcpXHJcbiAgICAgICAgLy8gKVxyXG4gICAgICB9KVxyXG4gICAgICByZXNvbHZlKClcclxuICAgIH0pXHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IFRBR1MgfSBmcm9tICcuLy4uLy4uLy4uL2NvbnN0YW50L1RhZ3MnXHJcbmltcG9ydCB7IFNvY2tldElPRXZlbnRNYW5hZ2VyIH0gZnJvbSAnLi8uLi8uLi9ldmVudC9tYW5nZXIvcHJvdmlkZXIvU29ja2V0SU9FdmVudE1hbmFnZXInXHJcbmltcG9ydCB7IEVWRU5UX1RZUEVTIH0gZnJvbSAnQHNoYXJlL2NvbnN0YW50J1xyXG5pbXBvcnQgeyBJRXZlbnRMaXN0ZW5lciB9IGZyb20gJy4vLi4vLi4vZXZlbnQvbWFuZ2VyL0lFdmVudExpc3RlbmVyJ1xyXG5pbXBvcnQge1xyXG4gIElFdmVudE1hbmFnZXIsXHJcbiAgSUV2ZW50TWFuYWdlclByb3ZpZGVyXHJcbn0gZnJvbSAnLi8uLi8uLi9ldmVudC9tYW5nZXIvSUV2ZW50TWFuYWdlcidcclxuaW1wb3J0IHsgSVBvc3RJbnN0YW50aWF0ZUluaXRpYWxpemVyIH0gZnJvbSAnLi4vSVBvc3RJbnN0YW50aWF0ZUluaXRpYWxpemVyJ1xyXG5pbXBvcnQgeyBpbmplY3QgfSBmcm9tICdpbnZlcnNpZnknXHJcbmltcG9ydCB7IFRZUEVTIH0gZnJvbSAnLi4vLi4vLi4vY29uc3RhbnQnXHJcbmltcG9ydCB7XHJcbiAgcHJvdmlkZVNpbmdsZXRvbixcclxuICBtdWx0aUluamVjdCxcclxuICBuYW1lZCxcclxuICBsYXp5TXVsdGlJbmplY3RcclxufSBmcm9tICcuLi8uLi9pb2MnXHJcblxyXG5AcHJvdmlkZVNpbmdsZXRvbihUWVBFUy5Qb3N0SW5zdGFudGlhdGVJbml0aWFsaXplcilcclxuZXhwb3J0IGNsYXNzIEV2ZW5NYW5hZ2VySW5pdGlhbGl6ZXIgaW1wbGVtZW50cyBJUG9zdEluc3RhbnRpYXRlSW5pdGlhbGl6ZXIge1xyXG4gIC8vIEBtdWx0aUluamVjdChUWVBFUy5JRXZlbnRNYW5hZ2VyUHJvdmlkZXIpIHB1YmxpYyBfZXZlbnRNYW5hZ2VyOiBJRXZlbnRNYW5hZ2VyXHJcbiAgLy8gQGxhenlNdWx0aUluamVjdChUWVBFUy5JRXZlbnRNYW5hZ2VyUHJvdmlkZXIpXHJcbiAgLy8gcHJpdmF0ZSBfZXZlbnRNYW5hZ2VyOiBJRXZlbnRNYW5hZ2VyXHJcbiAgcHJpdmF0ZSBfZXZlbnRNYW5hZ2VyOiBJRXZlbnRNYW5hZ2VyXHJcbiAgcHJpdmF0ZSBfZXZlbnRQcm92aWRlcnMhOiBJRXZlbnRNYW5hZ2VyUHJvdmlkZXJbXVxyXG4gIHByaXZhdGUgX2V2ZW50TGlzdGVuZXJzOiBJRXZlbnRMaXN0ZW5lcltdXHJcbiAgcHJpdmF0ZSBfc29ja2V0SU86IFNvY2tldElPLlNlcnZlclxyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIEBpbmplY3QoVFlQRVMuSUV2ZW50TWFuYWdlcikgZXZlbnRNYW5hZ2VyOiBJRXZlbnRNYW5hZ2VyLFxyXG4gICAgLy8gc2luZ2xlIGluamVjdFxyXG4gICAgLy8gQGluamVjdChUWVBFUy5JRXZlbnRNYW5hZ2VyUHJvdmlkZXIpXHJcbiAgICAvLyBAbmFtZWQoVEFHUy5Tb2NrZXRFdmVudE1hbmFnZXJQcm92aWRlcilcclxuICAgIC8vIGV2ZW50UHJvdmlkZXJzOiBJRXZlbnRNYW5hZ2VyUHJvdmlkZXJbXSxcclxuICAgIC8vIGludmVyc2lmeS1pbmplY3QtZGVjb3JhdG9yc1xyXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2ludmVyc2lmeS9JbnZlcnNpZnlKUy9pc3N1ZXMvMzQyXHJcbiAgICBAbXVsdGlJbmplY3QoVFlQRVMuSUV2ZW50TWFuYWdlclByb3ZpZGVyKVxyXG4gICAgZXZlbnRQcm92aWRlcnM6IElFdmVudE1hbmFnZXJQcm92aWRlcltdLFxyXG4gICAgQG11bHRpSW5qZWN0KFRZUEVTLklFdmVudExpc3RlbmVyKSBldmVudExpc3RlbmVyczogSUV2ZW50TGlzdGVuZXJbXSxcclxuICAgIEBpbmplY3QoVFlQRVMuU29ja2V0SU8pIHNvY2tldElPOiBTb2NrZXRJTy5TZXJ2ZXJcclxuICApIHtcclxuICAgIHRoaXMuX2V2ZW50TWFuYWdlciA9IGV2ZW50TWFuYWdlclxyXG4gICAgdGhpcy5fZXZlbnRQcm92aWRlcnMgPSBldmVudFByb3ZpZGVyc1xyXG4gICAgdGhpcy5fZXZlbnRMaXN0ZW5lcnMgPSBldmVudExpc3RlbmVyc1xyXG4gICAgdGhpcy5fc29ja2V0SU8gPSBzb2NrZXRJT1xyXG4gIH1cclxuICBhcHBseVRvKHNlcnZlcjogaW1wb3J0KCdodHRwJykuU2VydmVyKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2U8dm9pZD4ocmVzb2x2ZSA9PiB7XHJcbiAgICAgIHRoaXMuX2V2ZW50TWFuYWdlci5pbml0UHJvdmlkZXJzKHRoaXMuX2V2ZW50UHJvdmlkZXJzKVxyXG4gICAgICB0aGlzLl9ldmVudE1hbmFnZXIuaW5pdExpc3RlbmVycyh0aGlzLl9ldmVudExpc3RlbmVycylcclxuICAgICAgdGhpcy5fc29ja2V0SU8ub24oJ2Nvbm5lY3QnLCAoc29ja2V0OiBTb2NrZXRJTy5Tb2NrZXQpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZygnU29ja2V0IGNvbm5lY3RlZC4uLicpXHJcbiAgICAgICAgOyg8U29ja2V0SU9FdmVudE1hbmFnZXI+KFxyXG4gICAgICAgICAgdGhpcy5fZXZlbnRNYW5hZ2VyLmdldFJlZ2lzdGVyZWRFdmVudFByb3ZpZGVyKEVWRU5UX1RZUEVTLnNvY2tldClcclxuICAgICAgICApKS5pbml0U29ja2V0TGlzdGVuZXIoc29ja2V0LCB0aGlzLl9ldmVudExpc3RlbmVycylcclxuICAgICAgfSlcclxuXHJcbiAgICAgIHJlc29sdmUoKVxyXG4gICAgfSlcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgSUV2ZW50TGlzdGVuZXIgfSBmcm9tICcuLy4uLy4uL2V2ZW50L21hbmdlci9JRXZlbnRMaXN0ZW5lcidcclxuLy8gaW1wb3J0IHsgRXZlbnRIYW5kbGVyIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9ldmVudC9tYW5nZXIvSUV2ZW50TGlzdGVuZXInXHJcbmltcG9ydCBmb3JFYWNoIGZyb20gJ2xvZGFzaC9mb3JlYWNoJ1xyXG5pbXBvcnQge1xyXG4gIElFdmVudE1hbmFnZXIsXHJcbiAgSUV2ZW50TWFuYWdlclByb3ZpZGVyXHJcbn0gZnJvbSAnLi8uLi8uLi9ldmVudC9tYW5nZXIvSUV2ZW50TWFuYWdlcidcclxuaW1wb3J0IHsgcHJvdmlkZVNpbmdsZXRvbiB9IGZyb20gJy4uLy4uLy4uL2NvcmUvaW9jJ1xyXG5pbXBvcnQgeyBUWVBFUyB9IGZyb20gJy4uLy4uLy4uL2NvbnN0YW50J1xyXG5cclxuQHByb3ZpZGVTaW5nbGV0b24oVFlQRVMuSUV2ZW50TWFuYWdlcilcclxuZXhwb3J0IGNsYXNzIE11bHRpcGxlUHJvdmlkZXJzRXZlbnRNYW5hZ2VyIGltcGxlbWVudHMgSUV2ZW50TWFuYWdlciB7XHJcbiAgcHJvdGVjdGVkIHByb3ZpZGVyczogeyBbdHlwZTogc3RyaW5nXTogSUV2ZW50TWFuYWdlclByb3ZpZGVyIH0gPSB7fVxyXG4gIGluaXRQcm92aWRlcnMoXHJcbiAgICBwcm92aWRlcnM6IGltcG9ydCgnLi4vLi4vZXZlbnQvbWFuZ2VyL0lFdmVudE1hbmFnZXInKS5JRXZlbnRNYW5hZ2VyUHJvdmlkZXJbXVxyXG4gICk6IHRoaXMge1xyXG4gICAgZm9yRWFjaChwcm92aWRlcnMsIHRoaXMucmVnaXN0ZXJQcm92aWRlci5iaW5kKHRoaXMpKVxyXG4gICAgcmV0dXJuIHRoaXNcclxuICB9XHJcbiAgaW5pdExpc3RlbmVycyhcclxuICAgIGV2ZW50TGlzdGVuZXJzOiBpbXBvcnQoJy4uLy4uL2V2ZW50L21hbmdlci9JRXZlbnRMaXN0ZW5lcicpLklFdmVudExpc3RlbmVyW11cclxuICApOiB0aGlzIHtcclxuICAgIGV2ZW50TGlzdGVuZXJzLmZvckVhY2goKGV2ZW50TGlzdGVuZXI6IElFdmVudExpc3RlbmVyKSA9PlxyXG4gICAgICBldmVudExpc3RlbmVyXHJcbiAgICAgICAgLmhhbmRsZXJzKClcclxuICAgICAgICAuZm9yRWFjaCgoZXZlbnRIYW5kbGVyOiBhbnkpID0+XHJcbiAgICAgICAgICB0aGlzLmdldFJlZ2lzdGVyZWRFdmVudFByb3ZpZGVyKGV2ZW50TGlzdGVuZXIudHlwZSgpKS5vbihcclxuICAgICAgICAgICAgZXZlbnRMaXN0ZW5lci5uYW1lKCksXHJcbiAgICAgICAgICAgIGV2ZW50SGFuZGxlclxyXG4gICAgICAgICAgKVxyXG4gICAgICAgIClcclxuICAgIClcclxuICAgIHJldHVybiB0aGlzXHJcbiAgfVxyXG4gIHJlZ2lzdGVyUHJvdmlkZXIoXHJcbiAgICBwcm92aWRlcjogaW1wb3J0KCcuLi8uLi9ldmVudC9tYW5nZXIvSUV2ZW50TWFuYWdlcicpLklFdmVudE1hbmFnZXJQcm92aWRlclxyXG4gICk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMucHJvdmlkZXJzW3Byb3ZpZGVyLnR5cGUoKV0pIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdFdmVudCBNYW5hZ2VyIHByb3ZpZGVyIGFscmVhZHkgcmVnaXN0ZXJlZCEnKVxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMucHJvdmlkZXJzW3Byb3ZpZGVyLnR5cGUoKV0gPSBwcm92aWRlclxyXG4gIH1cclxuICBnZXRSZWdpc3RlcmVkRXZlbnRQcm92aWRlcihcclxuICAgIGV2ZW50VHlwZTogc3RyaW5nXHJcbiAgKTogaW1wb3J0KCcuLi8uLi9ldmVudC9tYW5nZXIvSUV2ZW50TWFuYWdlcicpLklFdmVudE1hbmFnZXJQcm92aWRlciB7XHJcbiAgICBpZiAoIXRoaXMucHJvdmlkZXJzW2V2ZW50VHlwZV0pIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbmtub3duIGV2ZW50IHByb3ZpZGVyIHJlcXVlc3RlZC4nKVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMucHJvdmlkZXJzW2V2ZW50VHlwZV1cclxuICB9XHJcbiAgZW1pdChldmVudDogaW1wb3J0KCcuLi8uLi9ldmVudC9tYW5nZXIvSUV2ZW50JykuSUV2ZW50KTogdm9pZCB7XHJcbiAgICBpZiAoIXRoaXMucHJvdmlkZXJzLmhhc093blByb3BlcnR5KGV2ZW50LnR5cGUoKSkpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIGV2ZW50IHR5cGUhJylcclxuICAgIH1cclxuICAgIHRoaXMucHJvdmlkZXJzW2V2ZW50LnR5cGUoKV0uZW1pdChldmVudClcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0ICdyZWZsZWN0LW1ldGFkYXRhJ1xyXG5pbXBvcnQgeyBDb250YWluZXIsIGluamVjdCwgaW50ZXJmYWNlcywgbXVsdGlJbmplY3QsIG5hbWVkIH0gZnJvbSAnaW52ZXJzaWZ5J1xyXG5pbXBvcnQge1xyXG4gIGF1dG9Qcm92aWRlLFxyXG4gIGJ1aWxkUHJvdmlkZXJNb2R1bGUsXHJcbiAgZmx1ZW50UHJvdmlkZSxcclxuICBwcm92aWRlXHJcbn0gZnJvbSAnaW52ZXJzaWZ5LWJpbmRpbmctZGVjb3JhdG9ycydcclxuaW1wb3J0IHtcclxuICBtYWtlTG9nZ2VyTWlkZGxld2FyZSxcclxuICB0ZXh0U2VyaWFsaXplclxyXG59IGZyb20gJ2ludmVyc2lmeS1sb2dnZXItbWlkZGxld2FyZSdcclxuaW1wb3J0IGdldERlY29yYXRvcnMgZnJvbSAnaW52ZXJzaWZ5LWluamVjdC1kZWNvcmF0b3JzJ1xyXG5cclxuY29uc3QgY29udGFpbmVyOiBpbnRlcmZhY2VzLkNvbnRhaW5lciA9IG5ldyBDb250YWluZXIoKVxyXG5cclxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XHJcbiAgbGV0IGxvZ2dlciA9IG1ha2VMb2dnZXJNaWRkbGV3YXJlKHVuZGVmaW5lZCwgb3V0ID0+XHJcbiAgICBjb25zb2xlLmxvZyh0ZXh0U2VyaWFsaXplcihvdXQpKVxyXG4gIClcclxuICBjb250YWluZXIuYXBwbHlNaWRkbGV3YXJlKGxvZ2dlcilcclxufVxyXG5cclxuY29uc3QgcHJvdmlkZVRocm93YWJsZSA9IGZ1bmN0aW9uKGlkZW50aWZpZXI6IGFueSwgaXNUaHJvd2FibGU6IGJvb2xlYW4pIHtcclxuICByZXR1cm4gZmx1ZW50UHJvdmlkZShpZGVudGlmaWVyKVxyXG4gICAgLndoZW5UYXJnZXRUYWdnZWQoJ3Rocm93YWJsZScsIGlzVGhyb3dhYmxlKVxyXG4gICAgLmRvbmUoKVxyXG59XHJcblxyXG5jb25zdCBwcm92aWRlTmFtZWQgPSBmdW5jdGlvbihpZGVudGlmaWVyOiBhbnksIG5hbWU6IHN0cmluZykge1xyXG4gIHJldHVybiBmbHVlbnRQcm92aWRlKGlkZW50aWZpZXIpXHJcbiAgICAud2hlblRhcmdldE5hbWVkKG5hbWUpXHJcbiAgICAuZG9uZSgpXHJcbn1cclxuY29uc3QgcHJvdmlkZVNpbmdsZXRvbiA9IGZ1bmN0aW9uKGlkZW50aWZpZXI6IGFueSkge1xyXG4gIHJldHVybiBmbHVlbnRQcm92aWRlKGlkZW50aWZpZXIpXHJcbiAgICAuaW5TaW5nbGV0b25TY29wZSgpXHJcbiAgICAuZG9uZSgpXHJcbn1cclxuXHJcbmNvbnN0IHByb3ZpZGVOYW1lZFNpbmdsZXRvbiA9IGZ1bmN0aW9uKGlkZW50aWZpZXI6IGFueSwgbmFtZTogc3RyaW5nKSB7XHJcbiAgcmV0dXJuIGZsdWVudFByb3ZpZGUoaWRlbnRpZmllcilcclxuICAgIC5pblNpbmdsZXRvblNjb3BlKClcclxuICAgIC53aGVuVGFyZ2V0TmFtZWQobmFtZSlcclxuICAgIC5kb25lKClcclxufVxyXG5cclxuY29uc3QgcHJvdmlkZVRhZ2dlZFNpbmdsZXRvbiA9IGZ1bmN0aW9uKFxyXG4gIGlkZW50aWZpZXI6IGFueSxcclxuICB0YWc6IHN0cmluZyxcclxuICB2YWx1ZTogYW55XHJcbikge1xyXG4gIHJldHVybiBmbHVlbnRQcm92aWRlKGlkZW50aWZpZXIpXHJcbiAgICAuaW5TaW5nbGV0b25TY29wZSgpXHJcbiAgICAud2hlblRhcmdldFRhZ2dlZCh0YWcsIHZhbHVlKVxyXG4gICAgLmRvbmUoKVxyXG59XHJcblxyXG5sZXQgeyBsYXp5SW5qZWN0LCBsYXp5TXVsdGlJbmplY3QgfSA9IGdldERlY29yYXRvcnMoY29udGFpbmVyKVxyXG5cclxuZXhwb3J0IHtcclxuICBjb250YWluZXIsXHJcbiAgYXV0b1Byb3ZpZGUsXHJcbiAgcHJvdmlkZSxcclxuICBwcm92aWRlVGhyb3dhYmxlLFxyXG4gIHByb3ZpZGVOYW1lZCxcclxuICBpbmplY3QsXHJcbiAgbXVsdGlJbmplY3QsXHJcbiAgbGF6eUluamVjdCxcclxuICBsYXp5TXVsdGlJbmplY3QsXHJcbiAgbmFtZWQsXHJcbiAgcHJvdmlkZVNpbmdsZXRvbixcclxuICBwcm92aWRlTmFtZWRTaW5nbGV0b24sXHJcbiAgcHJvdmlkZVRhZ2dlZFNpbmdsZXRvbixcclxuICBidWlsZFByb3ZpZGVyTW9kdWxlXHJcbn1cclxuIiwiLy8gc29ydCBpcyBpbXBvcnRcclxuaW1wb3J0ICcuLi9BcHBsaWNhdGlvbidcclxuXHJcbi8vIGNvbnRyb2xsZXJcclxuaW1wb3J0ICcuLi8uLi9jb250cm9sbGVyJ1xyXG5cclxuLy8gc2VydmljZVxyXG4vLyBpbXBvcnQgJy4uL3NlcnZpY2UnXHJcbmltcG9ydCAnLi4vLi4vc2VydmljZS9pbXBsJ1xyXG5cclxuLy8gaW1wb3J0ICcuLi9pbml0aWFsaXplcidcclxuaW1wb3J0ICcuLi9pbml0aWFsaXplci9pbXBsL0NvbmZpZ1ByZUJ1aWxkSW5pdGlhbGl6ZXInXHJcbmltcG9ydCAnLi4vaW5pdGlhbGl6ZXIvaW1wbC9FdmVuTWFuYWdlckluaXRpYWxpemVyJ1xyXG5cclxuLy8gZXZlbnRcclxuaW1wb3J0ICcuLi8uLi9jb3JlL2luaXRpYWxpemVyL2ltcGwvTXVsdGlwbGVQcm92aWRlcnNFdmVudE1hbmFnZXInXHJcbmltcG9ydCAnLi4vLi4vY29yZS9ldmVudC9tYW5nZXIvcHJvdmlkZXIvU29ja2V0SU9FdmVudE1hbmFnZXInXHJcblxyXG4vLyBldmVudCBsaXN0ZW5lclxyXG5pbXBvcnQgJy4uL2V2ZW50L2xpc3RlbmVyL3NvY2tldC9PblNvY2tldFVzZXJMb2dpbkV2ZW50J1xyXG4iLCJleHBvcnQgKiBmcm9tICcuL0lPQydcclxuIiwiaW1wb3J0IHsgVEFHUyB9IGZyb20gJy4vY29uc3RhbnQvVGFncydcclxuaW1wb3J0IHsgQXBwbGljYXRpb24gfSBmcm9tICcuL2NvcmUvQXBwbGljYXRpb24nXHJcbmltcG9ydCB7IFRZUEVTIH0gZnJvbSAnLi9jb25zdGFudCdcclxuaW1wb3J0IGZzIGZyb20gJ2ZzJ1xyXG5pbXBvcnQgc29ja2V0SW8gZnJvbSAnc29ja2V0LmlvJ1xyXG5pbXBvcnQgaHR0cCBmcm9tICdodHRwJ1xyXG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJ1xyXG5pbXBvcnQgeyBBY3Rpb25UeXBlIH0gZnJvbSAndHlwZXNhZmUtYWN0aW9ucydcclxuaW1wb3J0IHsgYWRkUHJvamVjdCB9IGZyb20gJ0BzaGFyZS9hY3Rpb24vUHJvamVjdEFjdGlvbidcclxuaW1wb3J0IHsgSVVzZXJEdG8gfSBmcm9tICcuL2R0bydcclxuaW1wb3J0IHsgVVNFUl9GSUxFX1BBVEggfSBmcm9tICcuL2NvbnN0YW50J1xyXG5pbXBvcnQgeyBsb2dJbiB9IGZyb20gJ0BzaGFyZS9hY3Rpb24vVXNlckFjdGlvbidcclxuaW1wb3J0IHsgY29uZmlndXJlLCBnZXRMb2dnZXIgfSBmcm9tICdsb2c0anMnXHJcbmltcG9ydCB7IGNvbnRhaW5lciwgYXV0b1Byb3ZpZGUsIGJ1aWxkUHJvdmlkZXJNb2R1bGUgfSBmcm9tICcuL2NvcmUvaW9jJ1xyXG5pbXBvcnQgJy4vY29yZS9pb2MvTG9hZGVyJ1xyXG5pbXBvcnQgeyBJbnZlcnNpZnlFeHByZXNzU2VydmVyIH0gZnJvbSAnaW52ZXJzaWZ5LWV4cHJlc3MtdXRpbHMnXHJcbmltcG9ydCAqIGFzIGJvZHlQYXJzZXIgZnJvbSAnYm9keS1wYXJzZXInXHJcbmltcG9ydCB7IElVc2VyU2VydmljZSB9IGZyb20gJy4vc2VydmljZSdcclxuaW1wb3J0ICogYXMgc2VydmljZSBmcm9tICcuL3NlcnZpY2UvaW1wbCdcclxuaW1wb3J0IHsgU29ja2V0SU9FdmVudE1hbmFnZXIgfSBmcm9tICcuL2NvcmUvZXZlbnQvbWFuZ2VyL3Byb3ZpZGVyL1NvY2tldElPRXZlbnRNYW5hZ2VyJ1xyXG5pbXBvcnQgeyBJRXZlbnRNYW5hZ2VyUHJvdmlkZXIgfSBmcm9tICcuL2NvcmUvZXZlbnQvbWFuZ2VyL0lFdmVudE1hbmFnZXInXHJcblxyXG5jb25maWd1cmUoJy4vY29uZmlnL2xvZzRqcy5qc29uJylcclxuY29uc3QgbG9nZ2VyID0gZ2V0TG9nZ2VyKClcclxubG9nZ2VyLmxldmVsID0gcHJvY2Vzcy5lbnYuTE9HR0VSX0xFVkVMIHx8ICdvZmYnXHJcblxyXG4vLyBpbXBvcnQgeyBhcHBDb250YWluZXIgfSBmcm9tICcuL2ludmVyc2lmeS5jb25maWcnXHJcbi8vIGltcG9ydCB7IFRZUEVTIH0gZnJvbSAnLi9jb25zdGFudC9UeXBlcydcclxuLy8gaW1wb3J0IHsgSVVzZXJTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlJ1xyXG4vLyBjb25zdCB1c2VyU2VydmljZUluc3QgPSBhcHBDb250YWluZXIuZ2V0PElVc2VyU2VydmljZT4oVFlQRVMuSVVzZXJTZXJ2aWNlKVxyXG4vLyBjb25zb2xlLmxvZyh1c2VyU2VydmljZUluc3QpXHJcbi8vIGNvbnNvbGUubG9nKHVzZXJTZXJ2aWNlSW5zdC5zYXlIZWxsbygpKVxyXG5cclxuLy8gY29udGFpbmVyLmJpbmQ8UHJvamVjdFNlcnZpY2VJbXBsPihUWVBFUy5Qcm9qZWN0U2VydmljZSkudG8oUHJvamVjdFNlcnZpY2VJbXBsKVxyXG4vLyBjb250YWluZXIuYmluZDxVc2VyU2VydmljZUltcGw+KFRZUEVTLlVzZXJTZXJ2aWNlKS50byhVc2VyU2VydmljZUltcGwpXHJcbi8vIGF1dG9Qcm92aWRlKGNvbnRhaW5lciwgc2VydmljZSlcclxuXHJcbi8vIOW/hemhu+aUvuWcqExvYWRlcuS5i+WQjlxyXG4vLyBjb250YWluZXIubG9hZChidWlsZFByb3ZpZGVyTW9kdWxlKCkpXHJcblxyXG4vLyBjb25zdCBzZXJ2ZXIgPSBuZXcgSW52ZXJzaWZ5RXhwcmVzc1NlcnZlcihjb250YWluZXIpXHJcbi8vIHNlcnZlci5zZXRDb25maWcoYXBwID0+IHtcclxuLy8gICAvLyBhZGQgYm9keSBwYXJzZXJcclxuLy8gICBhcHAudXNlKFxyXG4vLyAgICAgYm9keVBhcnNlci51cmxlbmNvZGVkKHtcclxuLy8gICAgICAgZXh0ZW5kZWQ6IHRydWVcclxuLy8gICAgIH0pXHJcbi8vICAgKVxyXG4vLyAgIGFwcC51c2UoYm9keVBhcnNlci5qc29uKCkpXHJcbi8vIH0pXHJcbi8vIGxldCBhcHAgPSBzZXJ2ZXIuYnVpbGQoKVxyXG4vLyBhcHAubGlzdGVuKDMwMDIpXHJcblxyXG5jb250YWluZXIubG9hZChidWlsZFByb3ZpZGVyTW9kdWxlKCkpXHJcbmNvbnN0IGV4cHJlc3MgPSBuZXcgSW52ZXJzaWZ5RXhwcmVzc1NlcnZlcihjb250YWluZXIsIG51bGwsIHtcclxuICByb290UGF0aDogJy9hcGknXHJcbn0pXHJcbmNvbnN0IGFwcGxpY2F0aW9uOiBBcHBsaWNhdGlvbiA9IGNvbnRhaW5lci5nZXQ8QXBwbGljYXRpb24+KFRZUEVTLkFwcGxpY2F0aW9uKVxyXG5hcHBsaWNhdGlvbi5zZXRFeHByZXNzKGV4cHJlc3MpXHJcbmFwcGxpY2F0aW9uLnJ1bihjb250YWluZXIpXHJcblxyXG4vLyBjb25zdCBzb2NrZXRJTzogU29ja2V0SU8uU2VydmVyID0gY29udGFpbmVyLmdldDxTb2NrZXRJTy5TZXJ2ZXI+KFRZUEVTLlNvY2tldElPKVxyXG4vLyBzb2NrZXRJTy5vbignY29ubmVjdCcsICgpID0+IHtcclxuLy8gICBjb25zb2xlLmxvZygnU29ja2V0SU8gY29ubmVjdGVkLi4uJylcclxuLy8gfSlcclxuXHJcbi8vIGNvbnN0IHVzZXJMaXN0OiBJVXNlckR0b1tdID0gW11cclxuXHJcbi8vIGNvbnN0IHNlcnZlciA9IGh0dHAuY3JlYXRlU2VydmVyKGZ1bmN0aW9uKHJlcTogYW55LCByZXM6IGFueSkge1xyXG4vLyAgIHJlcy53cml0ZUhlYWQoMjAwKVxyXG4vLyAgIHJlcy5lbmQoJ2hlbGxvIHdvcmxkJylcclxuLy8gfSlcclxuXHJcbi8vIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzI4MzA2NzQwL3NvY2tldC1pby1jb25uZWN0LXRvLXVuaXgtc29ja2V0XHJcbi8vIHNvY2tldC5pbyBzZXR1cFxyXG4vLyBjb25zdCBpbyA9IHNvY2tldElvLmxpc3RlbihzZXJ2ZXIpIGFzIGFueVxyXG4vLyBpby5zZXQoJ3RyYW5zcG9ydHMnLCBbJ3dlYnNvY2tldCddKVxyXG5cclxuLy8gbGV0IHByb3RvY29sID0gJydcclxuLy8gY29uc3QgaXNEZXYgPSBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50J1xyXG4vLyBpZiAoIWlzRGV2KSB7XHJcbi8vICAgLy8gbGV0IG5nbml4IGtub3cgd2Ugd2FudCB0byBzdGFydCBzZXJ2aW5nIGZyb20gdGhlIHByb3h5XHJcbi8vICAgZnMub3BlblN5bmMoJy90bXAvYXBwLWluaXRpYWxpemVkJywgJ3cnKVxyXG4vLyAgIHByb3RvY29sID0gJy90bXAvbmdpbnguc29ja2V0J1xyXG4vLyAgIC8vIEZJWDogYWRkcmVzcyBpbiB1c2VkXHJcbi8vICAgaWYgKGZzLmV4aXN0c1N5bmMocHJvdG9jb2wpKSBmcy51bmxpbmtTeW5jKHByb3RvY29sKVxyXG4vLyB9IGVsc2Uge1xyXG4vLyAgIHByb3RvY29sID0gcHJvY2Vzcy5lbnYuU09DS0VUSU9fU0VSVkVSX1BPUlQgYXMgc3RyaW5nXHJcbi8vIH1cclxuXHJcbi8vIC8vIGxpc3RlbiB0byBuZ25peCBzb2NrZXRcclxuLy8gc2VydmVyLmxpc3Rlbihwcm90b2NvbCwgZnVuY3Rpb24oKSB7XHJcbi8vICAgLy8gRklYOiBQZXJtaXNzaW9uIGRlbmllZFxyXG4vLyAgIGlmIChwcm90b2NvbCAmJiBmcy5leGlzdHNTeW5jKHByb3RvY29sKSkgZnMuY2htb2RTeW5jKHByb3RvY29sLCA3NTUpXHJcbi8vICAgbG9nZ2VyLmRlYnVnKGBzZXJ2ZXIgdXBgKVxyXG4vLyB9KVxyXG5cclxuLy8gaW8ub24oJ2Nvbm5lY3RfZXJyb3InLCBmdW5jdGlvbihlcnI6IGFueSkge1xyXG4vLyAgIGxvZ2dlci5kZWJ1ZyhlcnIpXHJcbi8vIH0pXHJcblxyXG4vLyBpby5vbignY29ubmVjdF90aW1lb3V0JywgZnVuY3Rpb24oZXJyOiBhbnkpIHtcclxuLy8gICBsb2dnZXIuZGVidWcoZXJyKVxyXG4vLyB9KVxyXG5cclxuLy8gaW8ub24oJ2Nvbm5lY3Rpb24nLCBmdW5jdGlvbihzb2NrZXQ6IGFueSkge1xyXG4vLyAgIGxvZ2dlci5kZWJ1Zyhgc29ja2V0OiAke3NvY2tldC5pZH0gY29ubmVjdGVkYClcclxuLy8gICBsZXQgY3VycmVudFVzZXI6IElVc2VyRHRvXHJcbi8vICAgLy8gc29ja2V0LmVtaXQoJ2Nvbm5lY3Rpb24nLCBzb2NrZXQuaWQpXHJcblxyXG4vLyAgIHNvY2tldC5vbignZGlzY29ubmVjdCcsIGZ1bmN0aW9uKCkge1xyXG4vLyAgICAgbG9nZ2VyLmRlYnVnKGBkaXNjb25uZWN0ZWRgKVxyXG4vLyAgIH0pXHJcblxyXG4vLyAgIHNvY2tldC5vbihFQWN0aW9uVHlwZS5MT0dfSU4sIChhY3Rpb246IEFjdGlvblR5cGU8dHlwZW9mIGxvZ0luPikgPT4ge1xyXG4vLyAgICAgbG9nZ2VyLmRlYnVnKGAke0VBY3Rpb25UeXBlLkxPR19JTn0tLSR7SlNPTi5zdHJpbmdpZnkoYWN0aW9uKX1gKVxyXG4vLyAgICAgY3VycmVudFVzZXIgPSBhY3Rpb24ucGF5bG9hZC51c2VyXHJcbi8vICAgICBjb25zdCBleGlzdGluZ1VzZXIgPSB1c2VyTGlzdC5maW5kKFxyXG4vLyAgICAgICAodXNlcjogSVVzZXJEdG8pID0+IHVzZXIubmFtZSA9PT0gY3VycmVudFVzZXIubmFtZVxyXG4vLyAgICAgKVxyXG4vLyAgICAgbG9nZ2VyLmRlYnVnKGBleGlzdGluZ1VzZXI6JHtleGlzdGluZ1VzZXJ9YClcclxuLy8gICAgIGlmIChleGlzdGluZ1VzZXIpIHtcclxuLy8gICAgICAgY3VycmVudFVzZXIgPSBleGlzdGluZ1VzZXJcclxuLy8gICAgIH0gZWxzZSB7XHJcbi8vICAgICAgIG5ld1VzZXIoY3VycmVudFVzZXIpXHJcbi8vICAgICB9XHJcbi8vICAgICBsb2dnZXIuZGVidWcoYCR7SlNPTi5zdHJpbmdpZnkoY3VycmVudFVzZXIpfWApXHJcbi8vICAgICAvLyBzb2NrZXQuZW1pdChFQWN0aW9uVHlwZS5MR0dfU1VDQ0VTUywgeyBtc2c6ICdMb2cgaW4gc3VjY2Vzcy4uLicgfSlcclxuLy8gICAgIHNvY2tldC5lbWl0KEVBY3Rpb25UeXBlLkxPR19JTiwge1xyXG4vLyAgICAgICB0eXBlOiBFQWN0aW9uVHlwZS5MT0dfSU4sXHJcbi8vICAgICAgIHBheWxvYWQ6IHsgdXNlcjogY3VycmVudFVzZXIgfVxyXG4vLyAgICAgfSlcclxuLy8gICB9KVxyXG5cclxuLy8gICAvLyBzb2NrZXQub24oRUFjdGlvblR5cGUuQUREX1BST0pFQ1QsIChhY3Rpb246IEFjdGlvblR5cGU8dHlwZW9mIGFkZFByb2plY3Q+KSA9PiB7XHJcblxyXG4vLyAgIC8vIH0pXHJcbi8vIH0pXHJcblxyXG4vLyBmdW5jdGlvbiByZWFkSnNvbihwYXRoOiBzdHJpbmcsIGNhbGxiYWNrOiAob2JqZWN0OiBhbnkpID0+IGFueSk6IHZvaWQge1xyXG4vLyAgIGZzLnJlYWRGaWxlKHBhdGgsICd1dGY4JywgKGVyciwgZGF0YTogc3RyaW5nKTogdm9pZCA9PiB7XHJcbi8vICAgICBpZiAoZXJyKSB7XHJcbi8vICAgICAgIGxvZ2dlci5lcnJvcihlcnIpXHJcbi8vICAgICB9IGVsc2Uge1xyXG4vLyAgICAgICBjYWxsYmFjayhKU09OLnBhcnNlKGRhdGEpKVxyXG4vLyAgICAgfVxyXG4vLyAgIH0pXHJcbi8vIH1cclxuXHJcbi8vIGNvbnN0IG5ld1VzZXIgPSAodXNlcjogSVVzZXJEdG8pOiB2b2lkID0+IHtcclxuLy8gICBsb2dnZXIuZGVidWcoYG5ldyB1c2VyOiAke3VzZXIubmFtZX1gKVxyXG4vLyAgIHVzZXIubmFtZSA9IHVzZXIubmFtZVxyXG4vLyAgIHVzZXJMaXN0LnB1c2godXNlcilcclxuLy8gICAvLyBTYXZlIHRvIGZpbGVcclxuLy8gICByZWFkSnNvbihVU0VSX0ZJTEVfUEFUSCwgKHVzZXJEYXRhOiBJVXNlckR0b1tdKTogdm9pZCA9PiB7XHJcbi8vICAgICB1c2VyRGF0YS5wdXNoKHVzZXIpXHJcbi8vICAgICBjb25zdCBqc29uOiBzdHJpbmcgPSBKU09OLnN0cmluZ2lmeSh1c2VyRGF0YSlcclxuLy8gICAgIGxvZ2dlci5kZWJ1Zyhqc29uKVxyXG4vLyAgICAgZnMud3JpdGVGaWxlKFVTRVJfRklMRV9QQVRILCBqc29uLCAndXRmOCcsIGVyciA9PiB7XHJcbi8vICAgICAgIGlmIChlcnIpIHtcclxuLy8gICAgICAgICBsb2dnZXIuZGVidWcoZXJyKVxyXG4vLyAgICAgICAgIHJldHVyblxyXG4vLyAgICAgICB9XHJcbi8vICAgICAgIGxvZ2dlci5kZWJ1ZyhgV3JpdGUgdG8gJHtVU0VSX0ZJTEVfUEFUSH1gKVxyXG4vLyAgICAgICByZXR1cm5cclxuLy8gICAgIH0pXHJcbi8vICAgfSlcclxuLy8gfVxyXG4iLCJpbXBvcnQgeyBUWVBFUyB9IGZyb20gJy4uLy4uL2NvbnN0YW50J1xyXG5pbXBvcnQgeyBpbmplY3RhYmxlLCBpbmplY3QgfSBmcm9tICdpbnZlcnNpZnknXHJcbmltcG9ydCB7IElQcm9qZWN0U2VydmljZSB9IGZyb20gJy4vLi4vSVByb2plY3RTZXJ2aWNlJ1xyXG5pbXBvcnQgeyBwcm92aWRlIH0gZnJvbSAnaW52ZXJzaWZ5LWJpbmRpbmctZGVjb3JhdG9ycydcclxuXHJcbkBwcm92aWRlKFRZUEVTLlByb2plY3RTZXJ2aWNlKVxyXG5leHBvcnQgY2xhc3MgUHJvamVjdFNlcnZpY2VJbXBsIGltcGxlbWVudHMgSVByb2plY3RTZXJ2aWNlIHtcclxuICBnZXRBbGwoKTogYW55W10ge1xyXG4gICAgcmV0dXJuIFtcclxuICAgICAge1xyXG4gICAgICAgIGlkOiAxLFxyXG4gICAgICAgIG5hbWU6ICd0ZXN0J1xyXG4gICAgICB9XHJcbiAgICBdXHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IElQcm9qZWN0U2VydmljZSB9IGZyb20gJy4vLi4vSVByb2plY3RTZXJ2aWNlJ1xyXG5pbXBvcnQgeyBpbmplY3RhYmxlLCBpbmplY3QgfSBmcm9tICdpbnZlcnNpZnknXHJcbmltcG9ydCB7IElVc2VyU2VydmljZSB9IGZyb20gJy4uL0lVc2VyU2VydmljZSdcclxuaW1wb3J0IHsgVFlQRVMgfSBmcm9tICcuLi8uLi9jb25zdGFudCdcclxuaW1wb3J0IHsgcHJvdmlkZVNpbmdsZXRvbiwgcHJvdmlkZSB9IGZyb20gJy4uLy4uL2NvcmUvaW9jJ1xyXG5cclxuLy8gQGluamVjdGFibGUoKVxyXG4vLyBAcHJvdmlkZVNpbmdsZXRvbihUWVBFUy5JVXNlclNlcnZpY2UpXHJcbkBwcm92aWRlKFRZUEVTLlVzZXJTZXJ2aWNlKVxyXG4vLyBAaW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBVc2VyU2VydmljZUltcGwgaW1wbGVtZW50cyBJVXNlclNlcnZpY2Uge1xyXG4gIC8vIHByaXZhdGUgX3Byb2plY3Q6IElQcm9qZWN0U2VydmljZVxyXG5cclxuICBAaW5qZWN0KFRZUEVTLlByb2plY3RTZXJ2aWNlKVxyXG4gIHByaXZhdGUgX3Byb2plY3QhOiBJUHJvamVjdFNlcnZpY2VcclxuXHJcbiAgLy8gcHVibGljIGNvbnN0cnVjdG9yKEBpbmplY3QoVFlQRVMuSVByb2plY3RTZXJ2aWNlKSBwcm9qZWN0OiBJUHJvamVjdFNlcnZpY2UpIHtcclxuICAvLyAgIHRoaXMuX3Byb2plY3QgPSBwcm9qZWN0XHJcbiAgLy8gfVxyXG4gIHNheUhlbGxvKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gJ0hlbGxvIFdvcmxkIScgKyBKU09OLnN0cmluZ2lmeSh0aGlzLl9wcm9qZWN0LmdldEFsbCgpKVxyXG4gIH1cclxufVxyXG4iLCJleHBvcnQgKiBmcm9tICcuL1Byb2plY3RTZXJ2aWNlSW1wbCdcclxuZXhwb3J0ICogZnJvbSAnLi9Vc2VyU2VydmljZUltcGwnXHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJvZHktcGFyc2VyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImludmVyc2lmeVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJpbnZlcnNpZnktYmluZGluZy1kZWNvcmF0b3JzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImludmVyc2lmeS1leHByZXNzLXV0aWxzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImludmVyc2lmeS1pbmplY3QtZGVjb3JhdG9yc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJpbnZlcnNpZnktbG9nZ2VyLW1pZGRsZXdhcmVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibG9kYXNoL2ZvcmVhY2hcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibG9nNGpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZmxlY3QtbWV0YWRhdGFcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic29ja2V0LmlvXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=