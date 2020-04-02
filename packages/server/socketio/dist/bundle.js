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

/***/ "./src/constant/Events.ts":
/*!********************************!*\
  !*** ./src/constant/Events.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.EVENT_TYPE_MAP = {
    domain: 'domain.event',
    socket: 'socket.event'
};
exports.EVENT_NAME_MAP = {
    onSocketConnection: 'connection',
    onSocketUserLogin: exports.EVENT_TYPE_MAP.socket + ".onSocketUserLogin"
};


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
var Events_1 = __webpack_require__(/*! ./../../../../constant/Events */ "./src/constant/Events.ts");
var ioc_1 = __webpack_require__(/*! ../../../../core/ioc */ "./src/core/ioc/index.ts");
var constant_1 = __webpack_require__(/*! ../../../../constant */ "./src/constant/index.ts");
// @provideNamed(TYPES.IEventListener, EVENT_NAME_MAP.onSocketUserLogin)
var OnSocketUserLoginEvent = /** @class */ (function () {
    function OnSocketUserLoginEvent() {
    }
    OnSocketUserLoginEvent.prototype.type = function () {
        return Events_1.EVENT_TYPE_MAP.socket;
    };
    OnSocketUserLoginEvent.prototype.name = function () {
        return Events_1.EVENT_NAME_MAP.onSocketUserLogin;
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
var Events_1 = __webpack_require__(/*! ../../../../constant/Events */ "./src/constant/Events.ts");
var constant_1 = __webpack_require__(/*! ../../../../constant */ "./src/constant/index.ts");
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
        return Events_1.EVENT_TYPE_MAP.socket;
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
        ioc_1.provideSingleton(constant_1.TYPES.IEventManagerProvider),
        __param(0, ioc_1.inject(constant_1.TYPES.SocketIO)),
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
var Events_1 = __webpack_require__(/*! ./../../../constant/Events */ "./src/constant/Events.ts");
var inversify_1 = __webpack_require__(/*! inversify */ "inversify");
var constant_1 = __webpack_require__(/*! ../../../constant */ "./src/constant/index.ts");
var ioc_1 = __webpack_require__(/*! ../../ioc */ "./src/core/ioc/index.ts");
var EvenManagerInitializer = /** @class */ (function () {
    function EvenManagerInitializer(eventManager, eventProviders, eventListeners, socketIO) {
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
                (_this._eventManager.getRegisteredEventProvider(Events_1.EVENT_TYPE_MAP.socket)).initSocketListener(socket, _this._eventListeners);
            });
            resolve();
        });
    };
    EvenManagerInitializer = __decorate([
        ioc_1.provideSingleton(constant_1.TYPES.PostInstantiateInitializer),
        __param(0, inversify_1.inject(constant_1.TYPES.IEventManager)),
        __param(1, ioc_1.multiInject(constant_1.TYPES.IEventManagerProvider)),
        __param(2, ioc_1.multiInject(constant_1.TYPES.IEventListener)),
        __param(3, inversify_1.inject(constant_1.TYPES.SocketIO)),
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

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(/*! reflect-metadata */ "reflect-metadata");
var inversify_1 = __webpack_require__(/*! inversify */ "inversify");
exports.inject = inversify_1.inject;
exports.multiInject = inversify_1.multiInject;
var inversify_binding_decorators_1 = __webpack_require__(/*! inversify-binding-decorators */ "inversify-binding-decorators");
exports.autoProvide = inversify_binding_decorators_1.autoProvide;
exports.buildProviderModule = inversify_binding_decorators_1.buildProviderModule;
exports.provide = inversify_binding_decorators_1.provide;
var inversify_logger_middleware_1 = __webpack_require__(/*! inversify-logger-middleware */ "inversify-logger-middleware");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vLi4vLi4vc2hhcmUvY29uZmlnL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9jb25zdGFudC9FdmVudHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnN0YW50L0ZpbGVQYXRoLnRzIiwid2VicGFjazovLy8uL3NyYy9jb25zdGFudC9UeXBlcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uc3RhbnQvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRyb2xsZXIvVXNlckNvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRyb2xsZXIvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvQXBwbGljYXRpb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvZXZlbnQvbGlzdGVuZXIvc29ja2V0L09uU29ja2V0VXNlckxvZ2luRXZlbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvZXZlbnQvbWFuZ2VyL3Byb3ZpZGVyL1NvY2tldElPRXZlbnRNYW5hZ2VyLnRzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL2luaXRpYWxpemVyL2ltcGwvQ29uZmlnUHJlQnVpbGRJbml0aWFsaXplci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9pbml0aWFsaXplci9pbXBsL0V2ZW5NYW5hZ2VySW5pdGlhbGl6ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvaW5pdGlhbGl6ZXIvaW1wbC9NdWx0aXBsZVByb3ZpZGVyc0V2ZW50TWFuYWdlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9pb2MvSU9DLnRzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL2lvYy9Mb2FkZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvaW9jL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZS9pbXBsL1Byb2plY3RTZXJ2aWNlSW1wbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZS9pbXBsL1VzZXJTZXJ2aWNlSW1wbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZS9pbXBsL2luZGV4LnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcImJvZHktcGFyc2VyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaW52ZXJzaWZ5XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaW52ZXJzaWZ5LWJpbmRpbmctZGVjb3JhdG9yc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImludmVyc2lmeS1leHByZXNzLXV0aWxzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaW52ZXJzaWZ5LWxvZ2dlci1taWRkbGV3YXJlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibG9kYXNoL2ZvcmVhY2hcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJsb2c0anNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWZsZWN0LW1ldGFkYXRhXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic29ja2V0LmlvXCIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwy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QUNMLElBQUksRUFBRSxNQUFNO2FBQ2I7U0FDRjtJQUNILENBQUM7SUFSVSxrQkFBa0I7UUFEOUIsc0NBQU8sQ0FBQyxnQkFBSyxDQUFDLGNBQWMsQ0FBQztPQUNqQixrQkFBa0IsQ0FTOUI7SUFBRCx5QkFBQztDQUFBO0FBVFksZ0RBQWtCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNML0Isb0VBQThDO0FBRTlDLHNGQUFzQztBQUN0QyxpRkFBMEQ7QUFFMUQsZ0JBQWdCO0FBQ2hCLHdDQUF3QztBQUd4QztJQURBLGdCQUFnQjtJQUNoQjtJQVlBLENBQUM7SUFOQyxnRkFBZ0Y7SUFDaEYsNEJBQTRCO0lBQzVCLElBQUk7SUFDSixrQ0FBUSxHQUFSO1FBQ0UsT0FBTyxjQUFjLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ2hFLENBQUM7SUFQRDtRQURDLGtCQUFNLENBQUMsZ0JBQUssQ0FBQyxjQUFjLENBQUM7O3FEQUNLO0lBSnZCLGVBQWU7UUFGM0IsYUFBTyxDQUFDLGdCQUFLLENBQUMsV0FBVyxDQUFDO1FBQzNCLGdCQUFnQjtPQUNILGVBQWUsQ0FZM0I7SUFBRCxzQkFBQztDQUFBO0FBWlksMENBQWU7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1Y1QixzR0FBb0M7QUFDcEMsZ0dBQWlDOzs7Ozs7Ozs7Ozs7QUNEakMsd0M7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEseUQ7Ozs7Ozs7Ozs7O0FDQUEsb0Q7Ozs7Ozs7Ozs7O0FDQUEsd0Q7Ozs7Ozs7Ozs7O0FDQUEsMkM7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsNkM7Ozs7Ozs7Ozs7O0FDQUEsc0MiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXgudHNcIik7XG4iLCJjb25zdCBsb2NhbG9oc3QgPSAnaHR0cDovL2xvY2FsaG9zdCdcclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIFBPUlQ6IHByb2Nlc3MuZW52LlBPUlQsXHJcbiAgU09DS0VUSU9fU0VSVkVSX1BPUlQ6IHByb2Nlc3MuZW52LlNPQ0tFVElPX1NFUlZFUl9QT1JULFxyXG4gIGhvc3Q6IGAke2xvY2Fsb2hzdH06JHtwcm9jZXNzLmVudi5QT1JUfWAsXHJcbiAgQVBQX0lORE9PUl9QT1JUOiBwcm9jZXNzLmVudi5BUFBfSU5ET09SX1BPUlQsXHJcbiAgYXBwSW5kb29ySG9zdDogYCR7bG9jYWxvaHN0fToke3Byb2Nlc3MuZW52LkFQUF9JTkRPT1JfUE9SVH1gLFxyXG4gIHNvY2tlSU9Vcmw6IGAke2xvY2Fsb2hzdH06JHtwcm9jZXNzLmVudi5TT0NLRVRJT19TRVJWRVJfUE9SVH0vc29ja2UuaW8vYCxcclxuICBBUFBfSU5ET09SX1NUQVRJQ19GSUxFOiBwcm9jZXNzLmVudi5BUFBfSU5ET09SX1NUQVRJQ19GSUxFXHJcbn1cclxuIiwiZXhwb3J0IGNvbnN0IEVWRU5UX1RZUEVfTUFQID0ge1xyXG4gIGRvbWFpbjogJ2RvbWFpbi5ldmVudCcsXHJcbiAgc29ja2V0OiAnc29ja2V0LmV2ZW50J1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgRVZFTlRfTkFNRV9NQVAgPSB7XHJcbiAgb25Tb2NrZXRDb25uZWN0aW9uOiAnY29ubmVjdGlvbicsXHJcbiAgb25Tb2NrZXRVc2VyTG9naW46IGAke0VWRU5UX1RZUEVfTUFQLnNvY2tldH0ub25Tb2NrZXRVc2VyTG9naW5gXHJcbn1cclxuIiwiZXhwb3J0IGNvbnN0IFVTRVJfRklMRV9QQVRIOiBzdHJpbmcgPSAnLi91c2VyLmpzb24nIiwibGV0IFRZUEVTID0ge1xyXG4gIEFwcGxpY2F0aW9uOiBTeW1ib2woJ0FwcGxpY2F0aW9uJyksXHJcbiAgU29ja2V0SU86IFN5bWJvbCgnU29ja2V0SU8uU2VydmVyJyksXHJcbiAgUHJlQnVpbGRJbml0aWFsaXplcjogU3ltYm9sKCdQcmVCdWlsZEluaXRpYWxpemVyJyksXHJcbiAgUG9zdEluc3RhbnRpYXRlSW5pdGlhbGl6ZXI6IFN5bWJvbCgnUG9zdEluc3RhbnRpYXRlSW5pdGlhbGl6ZXInKSxcclxuICBJRXZlbnRNYW5hZ2VyOiBTeW1ib2woJ0lFdmVudE1hbmFnZXInKSxcclxuICBJRXZlbnRMaXN0ZW5lcjogU3ltYm9sKCdJRXZlbnRMaXN0ZW5lcicpLFxyXG4gIElFdmVudE1hbmFnZXJQcm92aWRlcjogU3ltYm9sKCdJRXZlbnRNYW5hZ2VyUHJvdmlkZXInKSxcclxuICBVc2VyU2VydmljZTogU3ltYm9sKCdVc2VyU2VydmljZScpLFxyXG4gIFByb2plY3RTZXJ2aWNlOiBTeW1ib2woJ1Byb2plY3RTZXJ2aWNlJylcclxufVxyXG5cclxuZXhwb3J0IHsgVFlQRVMgfVxyXG4iLCJleHBvcnQgKiBmcm9tICcuL0ZpbGVQYXRoJ1xyXG5leHBvcnQgKiBmcm9tICcuL1R5cGVzJ1xyXG4iLCJpbXBvcnQgeyBVc2VyU2VydmljZUltcGwgfSBmcm9tICcuLy4uL3NlcnZpY2UvaW1wbC9Vc2VyU2VydmljZUltcGwnXHJcbmltcG9ydCB7IHByb3ZpZGUsIGluamVjdCwgcHJvdmlkZU5hbWVkIH0gZnJvbSAnLi4vY29yZS9pb2MnXHJcbmltcG9ydCB7IFRZUEVTIH0gZnJvbSAnLi4vY29uc3RhbnQnXHJcbmltcG9ydCB7IGNvbnRyb2xsZXIsIGh0dHBHZXQsIGludGVyZmFjZXMsIFRZUEUgfSBmcm9tICdpbnZlcnNpZnktZXhwcmVzcy11dGlscydcclxuaW1wb3J0IHsgSVVzZXJTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZSdcclxuXHJcbi8vIEBwcm92aWRlKFRZUEVTLklVc2VyU2VydmljZSwgdHJ1ZSlcclxuLy8gQHByb3ZpZGVOYW1lZChUWVBFLkNvbnRyb2xsZXIsICdVc2VyQ29udHJvbGxlcicpXHJcbkBjb250cm9sbGVyKCcvdXNlcicpXHJcbmV4cG9ydCBjbGFzcyBVc2VyQ29udHJvbGxlciBpbXBsZW1lbnRzIGludGVyZmFjZXMuQ29udHJvbGxlciB7XHJcbiAgLy8gQGluamVjdChUWVBFUy5Vc2VyU2VydmljZSlcclxuICAvLyBwcml2YXRlIF91c2VyU2VydmljZSE6IElVc2VyU2VydmljZVxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgQGluamVjdChUWVBFUy5Vc2VyU2VydmljZSkgcHJpdmF0ZSBfdXNlclNlcnZpY2U6IFVzZXJTZXJ2aWNlSW1wbFxyXG4gICkge31cclxuXHJcbiAgQGh0dHBHZXQoJy8nKVxyXG4gIHB1YmxpYyBnZXQoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLl91c2VyU2VydmljZS5zYXlIZWxsbygpXHJcbiAgfVxyXG59XHJcbiIsImV4cG9ydCAqIGZyb20gJy4vVXNlckNvbnRyb2xsZXInXHJcbiIsImltcG9ydCB7IHByb3ZpZGUgfSBmcm9tICdpbnZlcnNpZnktYmluZGluZy1kZWNvcmF0b3JzJ1xyXG5pbXBvcnQgeyBJUG9zdEluc3RhbnRpYXRlSW5pdGlhbGl6ZXIgfSBmcm9tICcuL2luaXRpYWxpemVyL0lQb3N0SW5zdGFudGlhdGVJbml0aWFsaXplcidcclxuaW1wb3J0IHsgVFlQRVMgfSBmcm9tICcuLi9jb25zdGFudCdcclxuaW1wb3J0IHsgSVByZUJ1aWxkSW5pdGlhbGl6ZXIgfSBmcm9tICcuL2luaXRpYWxpemVyL0lQcmVCdWlsZEluaXRpYWxpemVyJ1xyXG5pbXBvcnQgaHR0cCBmcm9tICdodHRwJ1xyXG5pbXBvcnQgeyBJbnZlcnNpZnlFeHByZXNzU2VydmVyIH0gZnJvbSAnaW52ZXJzaWZ5LWV4cHJlc3MtdXRpbHMnXHJcbmltcG9ydCB7IG11bHRpSW5qZWN0LCBpbnRlcmZhY2VzIGFzIGludmVyc2lmeUludGVyZmFjZXMgfSBmcm9tICdpbnZlcnNpZnknXHJcbmltcG9ydCBzaGFyZUNvbmZpZyBmcm9tICdAc2hhcmUvY29uZmlnJ1xyXG5pbXBvcnQgZXhwcmVzcyBmcm9tICdleHByZXNzJ1xyXG5pbXBvcnQgaW8gZnJvbSAnc29ja2V0LmlvJ1xyXG5pbXBvcnQgeyBwcm92aWRlU2luZ2xldG9uIH0gZnJvbSAnLi9pb2MnXHJcblxyXG5AcHJvdmlkZVNpbmdsZXRvbihUWVBFUy5BcHBsaWNhdGlvbilcclxuZXhwb3J0IGNsYXNzIEFwcGxpY2F0aW9uIHtcclxuICBwcml2YXRlIF9leHByZXNzITogSW52ZXJzaWZ5RXhwcmVzc1NlcnZlclxyXG4gIHByaXZhdGUgX2h0dHBTZXJ2ZXIhOiBodHRwLlNlcnZlclxyXG4gIHByaXZhdGUgX3ByZUJ1aWxkSW5pdGlhbGl6ZXJzOiBJUHJlQnVpbGRJbml0aWFsaXplcltdXHJcbiAgcHJpdmF0ZSBfcG9zdEluc3RhbnRpYXRlSW5pdGlhbGl6ZXJzITogSVBvc3RJbnN0YW50aWF0ZUluaXRpYWxpemVyW11cclxuICBwcml2YXRlIF9hcHAhOiBleHByZXNzLkFwcGxpY2F0aW9uXHJcblxyXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihcclxuICAgIEBtdWx0aUluamVjdChUWVBFUy5QcmVCdWlsZEluaXRpYWxpemVyKVxyXG4gICAgcHJlQnVpbGRJbml0aWFsaXplcnM6IElQcmVCdWlsZEluaXRpYWxpemVyW11cclxuICApIHtcclxuICAgIHRoaXMuX3ByZUJ1aWxkSW5pdGlhbGl6ZXJzID0gcHJlQnVpbGRJbml0aWFsaXplcnNcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZXRFeHByZXNzKGV4cHJlc3M6IEludmVyc2lmeUV4cHJlc3NTZXJ2ZXIpIHtcclxuICAgIHRoaXMuX2V4cHJlc3MgPSBleHByZXNzXHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0SHR0cFNlcnZlcigpOiBodHRwLlNlcnZlciB7XHJcbiAgICByZXR1cm4gdGhpcy5faHR0cFNlcnZlclxyXG4gIH1cclxuXHJcbiAgcHVibGljIHJ1bihjb250YWluZXI6IGludmVyc2lmeUludGVyZmFjZXMuQ29udGFpbmVyKTogdm9pZCB7XHJcbiAgICB0aGlzLnByZUJ1aWxkSW5pdCh0aGlzLl9leHByZXNzKVxyXG4gICAgICAudGhlbigoKSA9PiB0aGlzLmluc3RhbnRpYXRlKGNvbnRhaW5lcikpXHJcbiAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICB0aGlzLl9wb3N0SW5zdGFudGlhdGVJbml0aWFsaXplcnMgPSBjb250YWluZXIuZ2V0QWxsPFxyXG4gICAgICAgICAgSVBvc3RJbnN0YW50aWF0ZUluaXRpYWxpemVyXHJcbiAgICAgICAgPihUWVBFUy5Qb3N0SW5zdGFudGlhdGVJbml0aWFsaXplcilcclxuICAgICAgfSlcclxuICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIHRoaXMucG9zdEluaXRpYWxpemVkKClcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnI6IEVycm9yKSA9PiBjb25zb2xlLmxvZyhlcnIpKVxyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIGluc3RhbnRpYXRlKFxyXG4gICAgY29udGFpbmVyOiBpbnZlcnNpZnlJbnRlcmZhY2VzLkNvbnRhaW5lclxyXG4gICk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPHZvaWQ+KHJlc29sdmUgPT4ge1xyXG4gICAgICB0aGlzLl9hcHAgPSB0aGlzLl9leHByZXNzLmJ1aWxkKClcclxuICAgICAgY29uc3QgcG9ydCA9IHNoYXJlQ29uZmlnLlNPQ0tFVElPX1NFUlZFUl9QT1JUXHJcblxyXG4gICAgICB0aGlzLl9odHRwU2VydmVyID0gdGhpcy5fYXBwLmxpc3Rlbihwb3J0LCAoKSA9PlxyXG4gICAgICAgIGNvbnNvbGUubG9nKGBTZXJ2ZXIgc3RhcnRlZCBhdCBwb3J0OiAke3BvcnR9YClcclxuICAgICAgKVxyXG5cclxuICAgICAgY29uc3Qgc29ja2V0SU86IFNvY2tldElPLlNlcnZlciA9IGlvKHRoaXMuZ2V0SHR0cFNlcnZlcigpKVxyXG4gICAgICBjb250YWluZXIuYmluZDxTb2NrZXRJTy5TZXJ2ZXI+KFRZUEVTLlNvY2tldElPKS50b0NvbnN0YW50VmFsdWUoc29ja2V0SU8pXHJcbiAgICAgIHJlc29sdmUoKVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCBwcmVCdWlsZEluaXQoZXhwcmVzczogSW52ZXJzaWZ5RXhwcmVzc1NlcnZlcik6IFByb21pc2U8dm9pZFtdPiB7XHJcbiAgICByZXR1cm4gUHJvbWlzZS5hbGwoXHJcbiAgICAgIHRoaXMuX3ByZUJ1aWxkSW5pdGlhbGl6ZXJzLm1hcCgoaW5pdGlhbGl6ZXI6IElQcmVCdWlsZEluaXRpYWxpemVyKSA9PlxyXG4gICAgICAgIGluaXRpYWxpemVyLmFwcGx5VG8oZXhwcmVzcylcclxuICAgICAgKVxyXG4gICAgKVxyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIHBvc3RJbml0aWFsaXplZCgpOiBQcm9taXNlPHZvaWRbXT4ge1xyXG4gICAgcmV0dXJuIFByb21pc2UuYWxsKFxyXG4gICAgICB0aGlzLl9wb3N0SW5zdGFudGlhdGVJbml0aWFsaXplcnMubWFwKFxyXG4gICAgICAgIChpbml0aWFsaXplcjogSVBvc3RJbnN0YW50aWF0ZUluaXRpYWxpemVyKSA9PlxyXG4gICAgICAgICAgaW5pdGlhbGl6ZXIuYXBwbHlUbyh0aGlzLl9odHRwU2VydmVyKVxyXG4gICAgICApXHJcbiAgICApXHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IGFjdGlvbiB9IGZyb20gJ3R5cGVzYWZlLWFjdGlvbnMnXHJcbmltcG9ydCB7IEVWRU5UX1RZUEVfTUFQLCBFVkVOVF9OQU1FX01BUCB9IGZyb20gJy4vLi4vLi4vLi4vLi4vY29uc3RhbnQvRXZlbnRzJ1xyXG5pbXBvcnQgeyBJRXZlbnRMaXN0ZW5lciB9IGZyb20gJy4uLy4uL21hbmdlci9JRXZlbnRMaXN0ZW5lcidcclxuaW1wb3J0IHsgcHJvdmlkZU5hbWVkLCBwcm92aWRlIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9pb2MnXHJcbmltcG9ydCB7IFRZUEVTIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29uc3RhbnQnXHJcbmltcG9ydCB7IEFjdGlvbnMgfSBmcm9tICdAc2hhcmUvYWN0aW9uJ1xyXG5cclxuLy8gQHByb3ZpZGVOYW1lZChUWVBFUy5JRXZlbnRMaXN0ZW5lciwgRVZFTlRfTkFNRV9NQVAub25Tb2NrZXRVc2VyTG9naW4pXHJcbkBwcm92aWRlKFRZUEVTLklFdmVudExpc3RlbmVyKVxyXG5leHBvcnQgY2xhc3MgT25Tb2NrZXRVc2VyTG9naW5FdmVudCBpbXBsZW1lbnRzIElFdmVudExpc3RlbmVyIHtcclxuICB0eXBlKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gRVZFTlRfVFlQRV9NQVAuc29ja2V0XHJcbiAgfVxyXG4gIG5hbWUoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiBFVkVOVF9OQU1FX01BUC5vblNvY2tldFVzZXJMb2dpblxyXG4gIH1cclxuICBoYW5kbGVycygpOiBGdW5jdGlvbltdIHtcclxuICAgIHJldHVybiBbXHJcbiAgICAgIChhY3Rpb246IEFjdGlvbnMpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhhY3Rpb24pXHJcbiAgICAgIH1cclxuICAgIF1cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgVEFHUyB9IGZyb20gJy4vLi4vLi4vLi4vLi4vY29uc3RhbnQvVGFncydcclxuaW1wb3J0IHsgSUV2ZW50TGlzdGVuZXIgfSBmcm9tICcuLi9JRXZlbnRMaXN0ZW5lcidcclxuaW1wb3J0IHsgRVZFTlRfVFlQRV9NQVAgfSBmcm9tICcuLi8uLi8uLi8uLi9jb25zdGFudC9FdmVudHMnXHJcbmltcG9ydCB7IElFdmVudE1hbmFnZXJQcm92aWRlciB9IGZyb20gJy4uL0lFdmVudE1hbmFnZXInXHJcbmltcG9ydCB7IFRZUEVTIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29uc3RhbnQnXHJcbmltcG9ydCB7XHJcbiAgcHJvdmlkZU5hbWVkU2luZ2xldG9uLFxyXG4gIGluamVjdCxcclxuICBwcm92aWRlU2luZ2xldG9uXHJcbn0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9pb2MnXHJcblxyXG4vLyBAcHJvdmlkZU5hbWVkU2luZ2xldG9uKFxyXG4vLyAgIFRZUEVTLklFdmVudE1hbmFnZXJQcm92aWRlcixcclxuLy8gICBUQUdTLlNvY2tldEV2ZW50TWFuYWdlclByb3ZpZGVyXHJcbi8vIClcclxuQHByb3ZpZGVTaW5nbGV0b24oVFlQRVMuSUV2ZW50TWFuYWdlclByb3ZpZGVyKVxyXG5leHBvcnQgY2xhc3MgU29ja2V0SU9FdmVudE1hbmFnZXIgaW1wbGVtZW50cyBJRXZlbnRNYW5hZ2VyUHJvdmlkZXIge1xyXG4gIHByb3RlY3RlZCBfc29ja2V0U2VydmVyOiBTb2NrZXRJTy5TZXJ2ZXJcclxuICBwcm90ZWN0ZWQgX3NvY2tldCE6IFNvY2tldElPLlNvY2tldFxyXG5cclxuICBwdWJsaWMgY29uc3RydWN0b3IoQGluamVjdChUWVBFUy5Tb2NrZXRJTykgc29ja2V0U2VydmVyOiBTb2NrZXRJTy5TZXJ2ZXIpIHtcclxuICAgIHRoaXMuX3NvY2tldFNlcnZlciA9IHNvY2tldFNlcnZlclxyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldCBzb2NrZXQoc29ja2V0OiBTb2NrZXRJTy5Tb2NrZXQpIHtcclxuICAgIHRoaXMuX3NvY2tldCA9IHNvY2tldFxyXG4gIH1cclxuICB0eXBlKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gRVZFTlRfVFlQRV9NQVAuc29ja2V0XHJcbiAgfVxyXG4gIGVtaXQoZXZlbnQ6IGltcG9ydCgnLi4vSUV2ZW50JykuSUV2ZW50KTogdm9pZCB7XHJcbiAgICB0aGlzLl9zb2NrZXRTZXJ2ZXIuZW1pdChldmVudC5uYW1lKCksIGV2ZW50LmRhdGEoKSlcclxuICB9XHJcbiAgb24oZXZlbnROYW1lOiBzdHJpbmcsIGNhbGxiYWNrOiBGdW5jdGlvbik6IHZvaWQge1xyXG4gICAgLy8gdGhpcy5fc29ja2V0U2VydmVyLm9uKGV2ZW50TmFtZSwgY2FsbGJhY2spXHJcbiAgfVxyXG5cclxuICBwdWJsaWMgaW5pdFNvY2tldExpc3RlbmVyKFxyXG4gICAgc29ja2V0OiBTb2NrZXRJTy5Tb2NrZXQsXHJcbiAgICBldmVudExpc3RlbmVyczogSUV2ZW50TGlzdGVuZXJbXVxyXG4gICk6IHZvaWQge1xyXG4gICAgZXZlbnRMaXN0ZW5lcnNcclxuICAgICAgLmZpbHRlcihcclxuICAgICAgICAoZXZlbnRMaXN0ZW5lcjogSUV2ZW50TGlzdGVuZXIpID0+IGV2ZW50TGlzdGVuZXIudHlwZSgpID09PSB0aGlzLnR5cGUoKVxyXG4gICAgICApXHJcbiAgICAgIC5mb3JFYWNoKChldmVudExpc3RlbmVyOiBJRXZlbnRMaXN0ZW5lcikgPT5cclxuICAgICAgICBldmVudExpc3RlbmVyLmhhbmRsZXJzKCkuZm9yRWFjaCgoZXZlbnRIYW5kZXI6IEZ1bmN0aW9uKSA9PlxyXG4gICAgICAgICAgKChoYW5kZXI6IEZ1bmN0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgIHNvY2tldC5vbihldmVudExpc3RlbmVyLm5hbWUoKSwgKGFjdGlvbjogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgLy8gaGFuZGVyLmFwcGx5KG51bGwsIHBheWxvYWQpXHJcbiAgICAgICAgICAgICAgaGFuZGVyKGFjdGlvbilcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgIH0pKGV2ZW50SGFuZGVyKVxyXG4gICAgICAgIClcclxuICAgICAgKVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBwcm92aWRlU2luZ2xldG9uIH0gZnJvbSAnLi4vLi4vaW9jJ1xyXG5pbXBvcnQgeyBJUHJlQnVpbGRJbml0aWFsaXplciB9IGZyb20gJy4uL0lQcmVCdWlsZEluaXRpYWxpemVyJ1xyXG5pbXBvcnQgeyBJbnZlcnNpZnlFeHByZXNzU2VydmVyIH0gZnJvbSAnaW52ZXJzaWZ5LWV4cHJlc3MtdXRpbHMnXHJcbmltcG9ydCBleHByZXNzIGZyb20gJ2V4cHJlc3MnXHJcbmltcG9ydCBib2R5UGFyc2VyIGZyb20gJ2JvZHktcGFyc2VyJ1xyXG5pbXBvcnQgeyBUWVBFUyB9IGZyb20gJy4uLy4uLy4uL2NvbnN0YW50J1xyXG5pbXBvcnQgc2hhcmVDb25maWcgZnJvbSAnQHNoYXJlL2NvbmZpZydcclxuXHJcbkBwcm92aWRlU2luZ2xldG9uKFRZUEVTLlByZUJ1aWxkSW5pdGlhbGl6ZXIpXHJcbmV4cG9ydCBjbGFzcyBDb25maWdQcmVCdWlsZEluaXRpYWxpemVyIGltcGxlbWVudHMgSVByZUJ1aWxkSW5pdGlhbGl6ZXIge1xyXG4gIGFwcGx5VG8oZXhwcmVzc1NlcnZlcjogSW52ZXJzaWZ5RXhwcmVzc1NlcnZlcik6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPHZvaWQ+KHJlc29sdmUgPT4ge1xyXG4gICAgICBleHByZXNzU2VydmVyLnNldENvbmZpZygoYXBwOiBleHByZXNzLkFwcGxpY2F0aW9uKSA9PiB7XHJcbiAgICAgICAgYXBwLnVzZShib2R5UGFyc2VyLnVybGVuY29kZWQoeyBleHRlbmRlZDogdHJ1ZSB9KSlcclxuICAgICAgICBhcHAudXNlKGJvZHlQYXJzZXIuanNvbigpKVxyXG4gICAgICAgIC8vIFdlYnBhY2stRGV2LVNlcnZlclxyXG4gICAgICAgIC8vIGFwcC51c2UoXHJcbiAgICAgICAgLy8gICAnLycsXHJcbiAgICAgICAgLy8gICBleHByZXNzLnN0YXRpYyhzaGFyZUNvbmZpZy5BUFBfSU5ET09SX1NUQVRJQ19GSUxFIGFzIHN0cmluZylcclxuICAgICAgICAvLyApXHJcbiAgICAgIH0pXHJcbiAgICAgIHJlc29sdmUoKVxyXG4gICAgfSlcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgU29ja2V0SU9FdmVudE1hbmFnZXIgfSBmcm9tICcuLy4uLy4uL2V2ZW50L21hbmdlci9wcm92aWRlci9Tb2NrZXRJT0V2ZW50TWFuYWdlcidcclxuaW1wb3J0IHsgRVZFTlRfVFlQRV9NQVAgfSBmcm9tICcuLy4uLy4uLy4uL2NvbnN0YW50L0V2ZW50cydcclxuaW1wb3J0IHsgSUV2ZW50TGlzdGVuZXIgfSBmcm9tICcuLy4uLy4uL2V2ZW50L21hbmdlci9JRXZlbnRMaXN0ZW5lcidcclxuaW1wb3J0IHtcclxuICBJRXZlbnRNYW5hZ2VyLFxyXG4gIElFdmVudE1hbmFnZXJQcm92aWRlclxyXG59IGZyb20gJy4vLi4vLi4vZXZlbnQvbWFuZ2VyL0lFdmVudE1hbmFnZXInXHJcbmltcG9ydCB7IElQb3N0SW5zdGFudGlhdGVJbml0aWFsaXplciB9IGZyb20gJy4uL0lQb3N0SW5zdGFudGlhdGVJbml0aWFsaXplcidcclxuaW1wb3J0IHsgaW5qZWN0IH0gZnJvbSAnaW52ZXJzaWZ5J1xyXG5pbXBvcnQgeyBUWVBFUyB9IGZyb20gJy4uLy4uLy4uL2NvbnN0YW50J1xyXG5pbXBvcnQgeyBwcm92aWRlU2luZ2xldG9uLCBtdWx0aUluamVjdCB9IGZyb20gJy4uLy4uL2lvYydcclxuXHJcbkBwcm92aWRlU2luZ2xldG9uKFRZUEVTLlBvc3RJbnN0YW50aWF0ZUluaXRpYWxpemVyKVxyXG5leHBvcnQgY2xhc3MgRXZlbk1hbmFnZXJJbml0aWFsaXplciBpbXBsZW1lbnRzIElQb3N0SW5zdGFudGlhdGVJbml0aWFsaXplciB7XHJcbiAgcHJpdmF0ZSBfZXZlbnRNYW5hZ2VyOiBJRXZlbnRNYW5hZ2VyXHJcbiAgcHJpdmF0ZSBfZXZlbnRQcm92aWRlcnM6IElFdmVudE1hbmFnZXJQcm92aWRlcltdXHJcbiAgcHJpdmF0ZSBfZXZlbnRMaXN0ZW5lcnM6IElFdmVudExpc3RlbmVyW11cclxuICBwcml2YXRlIF9zb2NrZXRJTzogU29ja2V0SU8uU2VydmVyXHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgQGluamVjdChUWVBFUy5JRXZlbnRNYW5hZ2VyKSBldmVudE1hbmFnZXI6IElFdmVudE1hbmFnZXIsXHJcbiAgICBAbXVsdGlJbmplY3QoVFlQRVMuSUV2ZW50TWFuYWdlclByb3ZpZGVyKVxyXG4gICAgZXZlbnRQcm92aWRlcnM6IElFdmVudE1hbmFnZXJQcm92aWRlcltdLFxyXG4gICAgQG11bHRpSW5qZWN0KFRZUEVTLklFdmVudExpc3RlbmVyKSBldmVudExpc3RlbmVyczogSUV2ZW50TGlzdGVuZXJbXSxcclxuICAgIEBpbmplY3QoVFlQRVMuU29ja2V0SU8pIHNvY2tldElPOiBTb2NrZXRJTy5TZXJ2ZXJcclxuICApIHtcclxuICAgIHRoaXMuX2V2ZW50TWFuYWdlciA9IGV2ZW50TWFuYWdlclxyXG4gICAgdGhpcy5fZXZlbnRQcm92aWRlcnMgPSBldmVudFByb3ZpZGVyc1xyXG4gICAgdGhpcy5fZXZlbnRMaXN0ZW5lcnMgPSBldmVudExpc3RlbmVyc1xyXG4gICAgdGhpcy5fc29ja2V0SU8gPSBzb2NrZXRJT1xyXG4gIH1cclxuICBhcHBseVRvKHNlcnZlcjogaW1wb3J0KCdodHRwJykuU2VydmVyKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2U8dm9pZD4ocmVzb2x2ZSA9PiB7XHJcbiAgICAgIHRoaXMuX2V2ZW50TWFuYWdlci5pbml0UHJvdmlkZXJzKHRoaXMuX2V2ZW50UHJvdmlkZXJzKVxyXG4gICAgICB0aGlzLl9ldmVudE1hbmFnZXIuaW5pdExpc3RlbmVycyh0aGlzLl9ldmVudExpc3RlbmVycylcclxuICAgICAgdGhpcy5fc29ja2V0SU8ub24oJ2Nvbm5lY3QnLCAoc29ja2V0OiBTb2NrZXRJTy5Tb2NrZXQpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZygnU29ja2V0IGNvbm5lY3RlZC4uLicpXHJcbiAgICAgICAgOyg8U29ja2V0SU9FdmVudE1hbmFnZXI+KFxyXG4gICAgICAgICAgdGhpcy5fZXZlbnRNYW5hZ2VyLmdldFJlZ2lzdGVyZWRFdmVudFByb3ZpZGVyKEVWRU5UX1RZUEVfTUFQLnNvY2tldClcclxuICAgICAgICApKS5pbml0U29ja2V0TGlzdGVuZXIoc29ja2V0LCB0aGlzLl9ldmVudExpc3RlbmVycylcclxuICAgICAgfSlcclxuXHJcbiAgICAgIHJlc29sdmUoKVxyXG4gICAgfSlcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgSUV2ZW50TGlzdGVuZXIgfSBmcm9tICcuLy4uLy4uL2V2ZW50L21hbmdlci9JRXZlbnRMaXN0ZW5lcidcclxuLy8gaW1wb3J0IHsgRXZlbnRIYW5kbGVyIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9ldmVudC9tYW5nZXIvSUV2ZW50TGlzdGVuZXInXHJcbmltcG9ydCBmb3JFYWNoIGZyb20gJ2xvZGFzaC9mb3JlYWNoJ1xyXG5pbXBvcnQge1xyXG4gIElFdmVudE1hbmFnZXIsXHJcbiAgSUV2ZW50TWFuYWdlclByb3ZpZGVyXHJcbn0gZnJvbSAnLi8uLi8uLi9ldmVudC9tYW5nZXIvSUV2ZW50TWFuYWdlcidcclxuaW1wb3J0IHsgcHJvdmlkZVNpbmdsZXRvbiB9IGZyb20gJy4uLy4uLy4uL2NvcmUvaW9jJ1xyXG5pbXBvcnQgeyBUWVBFUyB9IGZyb20gJy4uLy4uLy4uL2NvbnN0YW50J1xyXG5cclxuQHByb3ZpZGVTaW5nbGV0b24oVFlQRVMuSUV2ZW50TWFuYWdlcilcclxuZXhwb3J0IGNsYXNzIE11bHRpcGxlUHJvdmlkZXJzRXZlbnRNYW5hZ2VyIGltcGxlbWVudHMgSUV2ZW50TWFuYWdlciB7XHJcbiAgcHJvdGVjdGVkIHByb3ZpZGVyczogeyBbdHlwZTogc3RyaW5nXTogSUV2ZW50TWFuYWdlclByb3ZpZGVyIH0gPSB7fVxyXG4gIGluaXRQcm92aWRlcnMoXHJcbiAgICBwcm92aWRlcnM6IGltcG9ydCgnLi4vLi4vZXZlbnQvbWFuZ2VyL0lFdmVudE1hbmFnZXInKS5JRXZlbnRNYW5hZ2VyUHJvdmlkZXJbXVxyXG4gICk6IHRoaXMge1xyXG4gICAgZm9yRWFjaChwcm92aWRlcnMsIHRoaXMucmVnaXN0ZXJQcm92aWRlci5iaW5kKHRoaXMpKVxyXG4gICAgcmV0dXJuIHRoaXNcclxuICB9XHJcbiAgaW5pdExpc3RlbmVycyhcclxuICAgIGV2ZW50TGlzdGVuZXJzOiBpbXBvcnQoJy4uLy4uL2V2ZW50L21hbmdlci9JRXZlbnRMaXN0ZW5lcicpLklFdmVudExpc3RlbmVyW11cclxuICApOiB0aGlzIHtcclxuICAgIGV2ZW50TGlzdGVuZXJzLmZvckVhY2goKGV2ZW50TGlzdGVuZXI6IElFdmVudExpc3RlbmVyKSA9PlxyXG4gICAgICBldmVudExpc3RlbmVyXHJcbiAgICAgICAgLmhhbmRsZXJzKClcclxuICAgICAgICAuZm9yRWFjaCgoZXZlbnRIYW5kbGVyOiBhbnkpID0+XHJcbiAgICAgICAgICB0aGlzLmdldFJlZ2lzdGVyZWRFdmVudFByb3ZpZGVyKGV2ZW50TGlzdGVuZXIudHlwZSgpKS5vbihcclxuICAgICAgICAgICAgZXZlbnRMaXN0ZW5lci5uYW1lKCksXHJcbiAgICAgICAgICAgIGV2ZW50SGFuZGxlclxyXG4gICAgICAgICAgKVxyXG4gICAgICAgIClcclxuICAgIClcclxuICAgIHJldHVybiB0aGlzXHJcbiAgfVxyXG4gIHJlZ2lzdGVyUHJvdmlkZXIoXHJcbiAgICBwcm92aWRlcjogaW1wb3J0KCcuLi8uLi9ldmVudC9tYW5nZXIvSUV2ZW50TWFuYWdlcicpLklFdmVudE1hbmFnZXJQcm92aWRlclxyXG4gICk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMucHJvdmlkZXJzW3Byb3ZpZGVyLnR5cGUoKV0pIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdFdmVudCBNYW5hZ2VyIHByb3ZpZGVyIGFscmVhZHkgcmVnaXN0ZXJlZCEnKVxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMucHJvdmlkZXJzW3Byb3ZpZGVyLnR5cGUoKV0gPSBwcm92aWRlclxyXG4gIH1cclxuICBnZXRSZWdpc3RlcmVkRXZlbnRQcm92aWRlcihcclxuICAgIGV2ZW50VHlwZTogc3RyaW5nXHJcbiAgKTogaW1wb3J0KCcuLi8uLi9ldmVudC9tYW5nZXIvSUV2ZW50TWFuYWdlcicpLklFdmVudE1hbmFnZXJQcm92aWRlciB7XHJcbiAgICBpZiAoIXRoaXMucHJvdmlkZXJzW2V2ZW50VHlwZV0pIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbmtub3duIGV2ZW50IHByb3ZpZGVyIHJlcXVlc3RlZC4nKVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMucHJvdmlkZXJzW2V2ZW50VHlwZV1cclxuICB9XHJcbiAgZW1pdChldmVudDogaW1wb3J0KCcuLi8uLi9ldmVudC9tYW5nZXIvSUV2ZW50JykuSUV2ZW50KTogdm9pZCB7XHJcbiAgICBpZiAoIXRoaXMucHJvdmlkZXJzLmhhc093blByb3BlcnR5KGV2ZW50LnR5cGUoKSkpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIGV2ZW50IHR5cGUhJylcclxuICAgIH1cclxuICAgIHRoaXMucHJvdmlkZXJzW2V2ZW50LnR5cGUoKV0uZW1pdChldmVudClcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0ICdyZWZsZWN0LW1ldGFkYXRhJ1xyXG5pbXBvcnQgeyBDb250YWluZXIsIGluamVjdCwgaW50ZXJmYWNlcywgbXVsdGlJbmplY3QgfSBmcm9tICdpbnZlcnNpZnknXHJcbmltcG9ydCB7XHJcbiAgYXV0b1Byb3ZpZGUsXHJcbiAgYnVpbGRQcm92aWRlck1vZHVsZSxcclxuICBmbHVlbnRQcm92aWRlLFxyXG4gIHByb3ZpZGVcclxufSBmcm9tICdpbnZlcnNpZnktYmluZGluZy1kZWNvcmF0b3JzJ1xyXG5pbXBvcnQge1xyXG4gIG1ha2VMb2dnZXJNaWRkbGV3YXJlLFxyXG4gIHRleHRTZXJpYWxpemVyXHJcbn0gZnJvbSAnaW52ZXJzaWZ5LWxvZ2dlci1taWRkbGV3YXJlJ1xyXG5cclxuY29uc3QgY29udGFpbmVyOiBpbnRlcmZhY2VzLkNvbnRhaW5lciA9IG5ldyBDb250YWluZXIoKVxyXG5cclxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XHJcbiAgbGV0IGxvZ2dlciA9IG1ha2VMb2dnZXJNaWRkbGV3YXJlKHVuZGVmaW5lZCwgb3V0ID0+XHJcbiAgICBjb25zb2xlLmxvZyh0ZXh0U2VyaWFsaXplcihvdXQpKVxyXG4gIClcclxuICBjb250YWluZXIuYXBwbHlNaWRkbGV3YXJlKGxvZ2dlcilcclxufVxyXG5cclxuY29uc3QgcHJvdmlkZVRocm93YWJsZSA9IGZ1bmN0aW9uKGlkZW50aWZpZXI6IGFueSwgaXNUaHJvd2FibGU6IGJvb2xlYW4pIHtcclxuICByZXR1cm4gZmx1ZW50UHJvdmlkZShpZGVudGlmaWVyKVxyXG4gICAgLndoZW5UYXJnZXRUYWdnZWQoJ3Rocm93YWJsZScsIGlzVGhyb3dhYmxlKVxyXG4gICAgLmRvbmUoKVxyXG59XHJcblxyXG5jb25zdCBwcm92aWRlTmFtZWQgPSBmdW5jdGlvbihpZGVudGlmaWVyOiBhbnksIG5hbWU6IHN0cmluZykge1xyXG4gIHJldHVybiBmbHVlbnRQcm92aWRlKGlkZW50aWZpZXIpXHJcbiAgICAud2hlblRhcmdldE5hbWVkKG5hbWUpXHJcbiAgICAuZG9uZSgpXHJcbn1cclxuY29uc3QgcHJvdmlkZVNpbmdsZXRvbiA9IGZ1bmN0aW9uKGlkZW50aWZpZXI6IGFueSkge1xyXG4gIHJldHVybiBmbHVlbnRQcm92aWRlKGlkZW50aWZpZXIpXHJcbiAgICAuaW5TaW5nbGV0b25TY29wZSgpXHJcbiAgICAuZG9uZSgpXHJcbn1cclxuXHJcbmNvbnN0IHByb3ZpZGVOYW1lZFNpbmdsZXRvbiA9IGZ1bmN0aW9uKGlkZW50aWZpZXI6IGFueSwgbmFtZTogc3RyaW5nKSB7XHJcbiAgcmV0dXJuIGZsdWVudFByb3ZpZGUoaWRlbnRpZmllcilcclxuICAgIC5pblNpbmdsZXRvblNjb3BlKClcclxuICAgIC53aGVuVGFyZ2V0TmFtZWQobmFtZSlcclxuICAgIC5kb25lKClcclxufVxyXG5jb25zdCBwcm92aWRlVGFnZ2VkU2luZ2xldG9uID0gZnVuY3Rpb24oXHJcbiAgaWRlbnRpZmllcjogYW55LFxyXG4gIHRhZzogc3RyaW5nLFxyXG4gIHZhbHVlOiBhbnlcclxuKSB7XHJcbiAgcmV0dXJuIGZsdWVudFByb3ZpZGUoaWRlbnRpZmllcilcclxuICAgIC5pblNpbmdsZXRvblNjb3BlKClcclxuICAgIC53aGVuVGFyZ2V0VGFnZ2VkKHRhZywgdmFsdWUpXHJcbiAgICAuZG9uZSgpXHJcbn1cclxuXHJcbmV4cG9ydCB7XHJcbiAgY29udGFpbmVyLFxyXG4gIGF1dG9Qcm92aWRlLFxyXG4gIHByb3ZpZGUsXHJcbiAgcHJvdmlkZVRocm93YWJsZSxcclxuICBwcm92aWRlTmFtZWQsXHJcbiAgaW5qZWN0LFxyXG4gIG11bHRpSW5qZWN0LFxyXG4gIHByb3ZpZGVTaW5nbGV0b24sXHJcbiAgcHJvdmlkZU5hbWVkU2luZ2xldG9uLFxyXG4gIHByb3ZpZGVUYWdnZWRTaW5nbGV0b24sXHJcbiAgYnVpbGRQcm92aWRlck1vZHVsZVxyXG59XHJcbiIsIi8vIHNvcnQgaXMgaW1wb3J0XHJcbmltcG9ydCAnLi4vQXBwbGljYXRpb24nXHJcblxyXG4vLyBjb250cm9sbGVyXHJcbmltcG9ydCAnLi4vLi4vY29udHJvbGxlcidcclxuXHJcbi8vIHNlcnZpY2VcclxuLy8gaW1wb3J0ICcuLi9zZXJ2aWNlJ1xyXG5pbXBvcnQgJy4uLy4uL3NlcnZpY2UvaW1wbCdcclxuXHJcbi8vIGltcG9ydCAnLi4vaW5pdGlhbGl6ZXInXHJcbmltcG9ydCAnLi4vaW5pdGlhbGl6ZXIvaW1wbC9Db25maWdQcmVCdWlsZEluaXRpYWxpemVyJ1xyXG5pbXBvcnQgJy4uL2luaXRpYWxpemVyL2ltcGwvRXZlbk1hbmFnZXJJbml0aWFsaXplcidcclxuXHJcbi8vIGV2ZW50XHJcbmltcG9ydCAnLi4vLi4vY29yZS9pbml0aWFsaXplci9pbXBsL011bHRpcGxlUHJvdmlkZXJzRXZlbnRNYW5hZ2VyJ1xyXG5pbXBvcnQgJy4uLy4uL2NvcmUvZXZlbnQvbWFuZ2VyL3Byb3ZpZGVyL1NvY2tldElPRXZlbnRNYW5hZ2VyJ1xyXG5cclxuLy8gZXZlbnQgbGlzdGVuZXJcclxuaW1wb3J0ICcuLi9ldmVudC9saXN0ZW5lci9zb2NrZXQvT25Tb2NrZXRVc2VyTG9naW5FdmVudCdcclxuIiwiZXhwb3J0ICogZnJvbSAnLi9JT0MnXHJcbiIsImltcG9ydCB7IEFwcGxpY2F0aW9uIH0gZnJvbSAnLi9jb3JlL0FwcGxpY2F0aW9uJ1xyXG5pbXBvcnQgeyBUWVBFUyB9IGZyb20gJy4vY29uc3RhbnQnXHJcbmltcG9ydCBmcyBmcm9tICdmcydcclxuaW1wb3J0IHNvY2tldElvIGZyb20gJ3NvY2tldC5pbydcclxuaW1wb3J0IGh0dHAgZnJvbSAnaHR0cCdcclxuaW1wb3J0IHBhdGggZnJvbSAncGF0aCdcclxuaW1wb3J0IHsgQWN0aW9uVHlwZSB9IGZyb20gJ3R5cGVzYWZlLWFjdGlvbnMnXHJcbmltcG9ydCB7IEVBY3Rpb25UeXBlIH0gZnJvbSAnQHNoYXJlL2NvbnN0YW50J1xyXG5pbXBvcnQgeyBhZGRQcm9qZWN0IH0gZnJvbSAnQHNoYXJlL2FjdGlvbi9Qcm9qZWN0QWN0aW9uJ1xyXG5pbXBvcnQgeyBJVXNlckR0byB9IGZyb20gJy4vZHRvJ1xyXG5pbXBvcnQgeyBVU0VSX0ZJTEVfUEFUSCB9IGZyb20gJy4vY29uc3RhbnQnXHJcbmltcG9ydCB7IGxvZ0luIH0gZnJvbSAnQHNoYXJlL2FjdGlvbi9Vc2VyQWN0aW9uJ1xyXG5pbXBvcnQgeyBjb25maWd1cmUsIGdldExvZ2dlciB9IGZyb20gJ2xvZzRqcydcclxuaW1wb3J0IHsgY29udGFpbmVyLCBhdXRvUHJvdmlkZSwgYnVpbGRQcm92aWRlck1vZHVsZSB9IGZyb20gJy4vY29yZS9pb2MnXHJcbmltcG9ydCAnLi9jb3JlL2lvYy9Mb2FkZXInXHJcbmltcG9ydCB7IEludmVyc2lmeUV4cHJlc3NTZXJ2ZXIgfSBmcm9tICdpbnZlcnNpZnktZXhwcmVzcy11dGlscydcclxuaW1wb3J0ICogYXMgYm9keVBhcnNlciBmcm9tICdib2R5LXBhcnNlcidcclxuaW1wb3J0IHsgSVVzZXJTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlJ1xyXG5pbXBvcnQgKiBhcyBzZXJ2aWNlIGZyb20gJy4vc2VydmljZS9pbXBsJ1xyXG5cclxuY29uZmlndXJlKCcuL2NvbmZpZy9sb2c0anMuanNvbicpXHJcbmNvbnN0IGxvZ2dlciA9IGdldExvZ2dlcigpXHJcbmxvZ2dlci5sZXZlbCA9IHByb2Nlc3MuZW52LkxPR0dFUl9MRVZFTCB8fCAnb2ZmJ1xyXG5cclxuLy8gaW1wb3J0IHsgYXBwQ29udGFpbmVyIH0gZnJvbSAnLi9pbnZlcnNpZnkuY29uZmlnJ1xyXG4vLyBpbXBvcnQgeyBUWVBFUyB9IGZyb20gJy4vY29uc3RhbnQvVHlwZXMnXHJcbi8vIGltcG9ydCB7IElVc2VyU2VydmljZSB9IGZyb20gJy4vc2VydmljZSdcclxuLy8gY29uc3QgdXNlclNlcnZpY2VJbnN0ID0gYXBwQ29udGFpbmVyLmdldDxJVXNlclNlcnZpY2U+KFRZUEVTLklVc2VyU2VydmljZSlcclxuLy8gY29uc29sZS5sb2codXNlclNlcnZpY2VJbnN0KVxyXG4vLyBjb25zb2xlLmxvZyh1c2VyU2VydmljZUluc3Quc2F5SGVsbG8oKSlcclxuXHJcbi8vIGNvbnRhaW5lci5iaW5kPFByb2plY3RTZXJ2aWNlSW1wbD4oVFlQRVMuUHJvamVjdFNlcnZpY2UpLnRvKFByb2plY3RTZXJ2aWNlSW1wbClcclxuLy8gY29udGFpbmVyLmJpbmQ8VXNlclNlcnZpY2VJbXBsPihUWVBFUy5Vc2VyU2VydmljZSkudG8oVXNlclNlcnZpY2VJbXBsKVxyXG4vLyBhdXRvUHJvdmlkZShjb250YWluZXIsIHNlcnZpY2UpXHJcblxyXG4vLyDlv4XpobvmlL7lnKhMb2FkZXLkuYvlkI5cclxuLy8gY29udGFpbmVyLmxvYWQoYnVpbGRQcm92aWRlck1vZHVsZSgpKVxyXG5cclxuLy8gY29uc3Qgc2VydmVyID0gbmV3IEludmVyc2lmeUV4cHJlc3NTZXJ2ZXIoY29udGFpbmVyKVxyXG4vLyBzZXJ2ZXIuc2V0Q29uZmlnKGFwcCA9PiB7XHJcbi8vICAgLy8gYWRkIGJvZHkgcGFyc2VyXHJcbi8vICAgYXBwLnVzZShcclxuLy8gICAgIGJvZHlQYXJzZXIudXJsZW5jb2RlZCh7XHJcbi8vICAgICAgIGV4dGVuZGVkOiB0cnVlXHJcbi8vICAgICB9KVxyXG4vLyAgIClcclxuLy8gICBhcHAudXNlKGJvZHlQYXJzZXIuanNvbigpKVxyXG4vLyB9KVxyXG4vLyBsZXQgYXBwID0gc2VydmVyLmJ1aWxkKClcclxuLy8gYXBwLmxpc3RlbigzMDAyKVxyXG5cclxuY29udGFpbmVyLmxvYWQoYnVpbGRQcm92aWRlck1vZHVsZSgpKVxyXG5jb25zdCBleHByZXNzID0gbmV3IEludmVyc2lmeUV4cHJlc3NTZXJ2ZXIoY29udGFpbmVyLCBudWxsLCB7XHJcbiAgcm9vdFBhdGg6ICcvYXBpJ1xyXG59KVxyXG5jb25zdCBhcHBsaWNhdGlvbjogQXBwbGljYXRpb24gPSBjb250YWluZXIuZ2V0PEFwcGxpY2F0aW9uPihUWVBFUy5BcHBsaWNhdGlvbilcclxuYXBwbGljYXRpb24uc2V0RXhwcmVzcyhleHByZXNzKVxyXG5hcHBsaWNhdGlvbi5ydW4oY29udGFpbmVyKVxyXG5cclxuLy8gY29uc3Qgc29ja2V0SU86IFNvY2tldElPLlNlcnZlciA9IGNvbnRhaW5lci5nZXQ8U29ja2V0SU8uU2VydmVyPihUWVBFUy5Tb2NrZXRJTylcclxuLy8gc29ja2V0SU8ub24oJ2Nvbm5lY3QnLCAoKSA9PiB7XHJcbi8vICAgY29uc29sZS5sb2coJ1NvY2tldElPIGNvbm5lY3RlZC4uLicpXHJcbi8vIH0pXHJcblxyXG4vLyBjb25zdCB1c2VyTGlzdDogSVVzZXJEdG9bXSA9IFtdXHJcblxyXG4vLyBjb25zdCBzZXJ2ZXIgPSBodHRwLmNyZWF0ZVNlcnZlcihmdW5jdGlvbihyZXE6IGFueSwgcmVzOiBhbnkpIHtcclxuLy8gICByZXMud3JpdGVIZWFkKDIwMClcclxuLy8gICByZXMuZW5kKCdoZWxsbyB3b3JsZCcpXHJcbi8vIH0pXHJcblxyXG4vLyBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8yODMwNjc0MC9zb2NrZXQtaW8tY29ubmVjdC10by11bml4LXNvY2tldFxyXG4vLyBzb2NrZXQuaW8gc2V0dXBcclxuLy8gY29uc3QgaW8gPSBzb2NrZXRJby5saXN0ZW4oc2VydmVyKSBhcyBhbnlcclxuLy8gaW8uc2V0KCd0cmFuc3BvcnRzJywgWyd3ZWJzb2NrZXQnXSlcclxuXHJcbi8vIGxldCBwcm90b2NvbCA9ICcnXHJcbi8vIGNvbnN0IGlzRGV2ID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCdcclxuLy8gaWYgKCFpc0Rldikge1xyXG4vLyAgIC8vIGxldCBuZ25peCBrbm93IHdlIHdhbnQgdG8gc3RhcnQgc2VydmluZyBmcm9tIHRoZSBwcm94eVxyXG4vLyAgIGZzLm9wZW5TeW5jKCcvdG1wL2FwcC1pbml0aWFsaXplZCcsICd3JylcclxuLy8gICBwcm90b2NvbCA9ICcvdG1wL25naW54LnNvY2tldCdcclxuLy8gICAvLyBGSVg6IGFkZHJlc3MgaW4gdXNlZFxyXG4vLyAgIGlmIChmcy5leGlzdHNTeW5jKHByb3RvY29sKSkgZnMudW5saW5rU3luYyhwcm90b2NvbClcclxuLy8gfSBlbHNlIHtcclxuLy8gICBwcm90b2NvbCA9IHByb2Nlc3MuZW52LlNPQ0tFVElPX1NFUlZFUl9QT1JUIGFzIHN0cmluZ1xyXG4vLyB9XHJcblxyXG4vLyAvLyBsaXN0ZW4gdG8gbmduaXggc29ja2V0XHJcbi8vIHNlcnZlci5saXN0ZW4ocHJvdG9jb2wsIGZ1bmN0aW9uKCkge1xyXG4vLyAgIC8vIEZJWDogUGVybWlzc2lvbiBkZW5pZWRcclxuLy8gICBpZiAocHJvdG9jb2wgJiYgZnMuZXhpc3RzU3luYyhwcm90b2NvbCkpIGZzLmNobW9kU3luYyhwcm90b2NvbCwgNzU1KVxyXG4vLyAgIGxvZ2dlci5kZWJ1Zyhgc2VydmVyIHVwYClcclxuLy8gfSlcclxuXHJcbi8vIGlvLm9uKCdjb25uZWN0X2Vycm9yJywgZnVuY3Rpb24oZXJyOiBhbnkpIHtcclxuLy8gICBsb2dnZXIuZGVidWcoZXJyKVxyXG4vLyB9KVxyXG5cclxuLy8gaW8ub24oJ2Nvbm5lY3RfdGltZW91dCcsIGZ1bmN0aW9uKGVycjogYW55KSB7XHJcbi8vICAgbG9nZ2VyLmRlYnVnKGVycilcclxuLy8gfSlcclxuXHJcbi8vIGlvLm9uKCdjb25uZWN0aW9uJywgZnVuY3Rpb24oc29ja2V0OiBhbnkpIHtcclxuLy8gICBsb2dnZXIuZGVidWcoYHNvY2tldDogJHtzb2NrZXQuaWR9IGNvbm5lY3RlZGApXHJcbi8vICAgbGV0IGN1cnJlbnRVc2VyOiBJVXNlckR0b1xyXG4vLyAgIC8vIHNvY2tldC5lbWl0KCdjb25uZWN0aW9uJywgc29ja2V0LmlkKVxyXG5cclxuLy8gICBzb2NrZXQub24oJ2Rpc2Nvbm5lY3QnLCBmdW5jdGlvbigpIHtcclxuLy8gICAgIGxvZ2dlci5kZWJ1ZyhgZGlzY29ubmVjdGVkYClcclxuLy8gICB9KVxyXG5cclxuLy8gICBzb2NrZXQub24oRUFjdGlvblR5cGUuTE9HX0lOLCAoYWN0aW9uOiBBY3Rpb25UeXBlPHR5cGVvZiBsb2dJbj4pID0+IHtcclxuLy8gICAgIGxvZ2dlci5kZWJ1ZyhgJHtFQWN0aW9uVHlwZS5MT0dfSU59LS0ke0pTT04uc3RyaW5naWZ5KGFjdGlvbil9YClcclxuLy8gICAgIGN1cnJlbnRVc2VyID0gYWN0aW9uLnBheWxvYWQudXNlclxyXG4vLyAgICAgY29uc3QgZXhpc3RpbmdVc2VyID0gdXNlckxpc3QuZmluZChcclxuLy8gICAgICAgKHVzZXI6IElVc2VyRHRvKSA9PiB1c2VyLm5hbWUgPT09IGN1cnJlbnRVc2VyLm5hbWVcclxuLy8gICAgIClcclxuLy8gICAgIGxvZ2dlci5kZWJ1ZyhgZXhpc3RpbmdVc2VyOiR7ZXhpc3RpbmdVc2VyfWApXHJcbi8vICAgICBpZiAoZXhpc3RpbmdVc2VyKSB7XHJcbi8vICAgICAgIGN1cnJlbnRVc2VyID0gZXhpc3RpbmdVc2VyXHJcbi8vICAgICB9IGVsc2Uge1xyXG4vLyAgICAgICBuZXdVc2VyKGN1cnJlbnRVc2VyKVxyXG4vLyAgICAgfVxyXG4vLyAgICAgbG9nZ2VyLmRlYnVnKGAke0pTT04uc3RyaW5naWZ5KGN1cnJlbnRVc2VyKX1gKVxyXG4vLyAgICAgLy8gc29ja2V0LmVtaXQoRUFjdGlvblR5cGUuTEdHX1NVQ0NFU1MsIHsgbXNnOiAnTG9nIGluIHN1Y2Nlc3MuLi4nIH0pXHJcbi8vICAgICBzb2NrZXQuZW1pdChFQWN0aW9uVHlwZS5MT0dfSU4sIHtcclxuLy8gICAgICAgdHlwZTogRUFjdGlvblR5cGUuTE9HX0lOLFxyXG4vLyAgICAgICBwYXlsb2FkOiB7IHVzZXI6IGN1cnJlbnRVc2VyIH1cclxuLy8gICAgIH0pXHJcbi8vICAgfSlcclxuXHJcbi8vICAgLy8gc29ja2V0Lm9uKEVBY3Rpb25UeXBlLkFERF9QUk9KRUNULCAoYWN0aW9uOiBBY3Rpb25UeXBlPHR5cGVvZiBhZGRQcm9qZWN0PikgPT4ge1xyXG5cclxuLy8gICAvLyB9KVxyXG4vLyB9KVxyXG5cclxuLy8gZnVuY3Rpb24gcmVhZEpzb24ocGF0aDogc3RyaW5nLCBjYWxsYmFjazogKG9iamVjdDogYW55KSA9PiBhbnkpOiB2b2lkIHtcclxuLy8gICBmcy5yZWFkRmlsZShwYXRoLCAndXRmOCcsIChlcnIsIGRhdGE6IHN0cmluZyk6IHZvaWQgPT4ge1xyXG4vLyAgICAgaWYgKGVycikge1xyXG4vLyAgICAgICBsb2dnZXIuZXJyb3IoZXJyKVxyXG4vLyAgICAgfSBlbHNlIHtcclxuLy8gICAgICAgY2FsbGJhY2soSlNPTi5wYXJzZShkYXRhKSlcclxuLy8gICAgIH1cclxuLy8gICB9KVxyXG4vLyB9XHJcblxyXG4vLyBjb25zdCBuZXdVc2VyID0gKHVzZXI6IElVc2VyRHRvKTogdm9pZCA9PiB7XHJcbi8vICAgbG9nZ2VyLmRlYnVnKGBuZXcgdXNlcjogJHt1c2VyLm5hbWV9YClcclxuLy8gICB1c2VyLm5hbWUgPSB1c2VyLm5hbWVcclxuLy8gICB1c2VyTGlzdC5wdXNoKHVzZXIpXHJcbi8vICAgLy8gU2F2ZSB0byBmaWxlXHJcbi8vICAgcmVhZEpzb24oVVNFUl9GSUxFX1BBVEgsICh1c2VyRGF0YTogSVVzZXJEdG9bXSk6IHZvaWQgPT4ge1xyXG4vLyAgICAgdXNlckRhdGEucHVzaCh1c2VyKVxyXG4vLyAgICAgY29uc3QganNvbjogc3RyaW5nID0gSlNPTi5zdHJpbmdpZnkodXNlckRhdGEpXHJcbi8vICAgICBsb2dnZXIuZGVidWcoanNvbilcclxuLy8gICAgIGZzLndyaXRlRmlsZShVU0VSX0ZJTEVfUEFUSCwganNvbiwgJ3V0ZjgnLCBlcnIgPT4ge1xyXG4vLyAgICAgICBpZiAoZXJyKSB7XHJcbi8vICAgICAgICAgbG9nZ2VyLmRlYnVnKGVycilcclxuLy8gICAgICAgICByZXR1cm5cclxuLy8gICAgICAgfVxyXG4vLyAgICAgICBsb2dnZXIuZGVidWcoYFdyaXRlIHRvICR7VVNFUl9GSUxFX1BBVEh9YClcclxuLy8gICAgICAgcmV0dXJuXHJcbi8vICAgICB9KVxyXG4vLyAgIH0pXHJcbi8vIH1cclxuIiwiaW1wb3J0IHsgVFlQRVMgfSBmcm9tICcuLi8uLi9jb25zdGFudCdcclxuaW1wb3J0IHsgaW5qZWN0YWJsZSwgaW5qZWN0IH0gZnJvbSAnaW52ZXJzaWZ5J1xyXG5pbXBvcnQgeyBJUHJvamVjdFNlcnZpY2UgfSBmcm9tICcuLy4uL0lQcm9qZWN0U2VydmljZSdcclxuaW1wb3J0IHsgcHJvdmlkZSB9IGZyb20gJ2ludmVyc2lmeS1iaW5kaW5nLWRlY29yYXRvcnMnXHJcblxyXG5AcHJvdmlkZShUWVBFUy5Qcm9qZWN0U2VydmljZSlcclxuZXhwb3J0IGNsYXNzIFByb2plY3RTZXJ2aWNlSW1wbCBpbXBsZW1lbnRzIElQcm9qZWN0U2VydmljZSB7XHJcbiAgZ2V0QWxsKCk6IGFueVtdIHtcclxuICAgIHJldHVybiBbXHJcbiAgICAgIHtcclxuICAgICAgICBpZDogMSxcclxuICAgICAgICBuYW1lOiAndGVzdCdcclxuICAgICAgfVxyXG4gICAgXVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBJUHJvamVjdFNlcnZpY2UgfSBmcm9tICcuLy4uL0lQcm9qZWN0U2VydmljZSdcclxuaW1wb3J0IHsgaW5qZWN0YWJsZSwgaW5qZWN0IH0gZnJvbSAnaW52ZXJzaWZ5J1xyXG5pbXBvcnQgeyBJVXNlclNlcnZpY2UgfSBmcm9tICcuLi9JVXNlclNlcnZpY2UnXHJcbmltcG9ydCB7IFRZUEVTIH0gZnJvbSAnLi4vLi4vY29uc3RhbnQnXHJcbmltcG9ydCB7IHByb3ZpZGVTaW5nbGV0b24sIHByb3ZpZGUgfSBmcm9tICcuLi8uLi9jb3JlL2lvYydcclxuXHJcbi8vIEBpbmplY3RhYmxlKClcclxuLy8gQHByb3ZpZGVTaW5nbGV0b24oVFlQRVMuSVVzZXJTZXJ2aWNlKVxyXG5AcHJvdmlkZShUWVBFUy5Vc2VyU2VydmljZSlcclxuLy8gQGluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgVXNlclNlcnZpY2VJbXBsIGltcGxlbWVudHMgSVVzZXJTZXJ2aWNlIHtcclxuICAvLyBwcml2YXRlIF9wcm9qZWN0OiBJUHJvamVjdFNlcnZpY2VcclxuXHJcbiAgQGluamVjdChUWVBFUy5Qcm9qZWN0U2VydmljZSlcclxuICBwcml2YXRlIF9wcm9qZWN0ITogSVByb2plY3RTZXJ2aWNlXHJcblxyXG4gIC8vIHB1YmxpYyBjb25zdHJ1Y3RvcihAaW5qZWN0KFRZUEVTLklQcm9qZWN0U2VydmljZSkgcHJvamVjdDogSVByb2plY3RTZXJ2aWNlKSB7XHJcbiAgLy8gICB0aGlzLl9wcm9qZWN0ID0gcHJvamVjdFxyXG4gIC8vIH1cclxuICBzYXlIZWxsbygpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuICdIZWxsbyBXb3JsZCEnICsgSlNPTi5zdHJpbmdpZnkodGhpcy5fcHJvamVjdC5nZXRBbGwoKSlcclxuICB9XHJcbn1cclxuIiwiZXhwb3J0ICogZnJvbSAnLi9Qcm9qZWN0U2VydmljZUltcGwnXHJcbmV4cG9ydCAqIGZyb20gJy4vVXNlclNlcnZpY2VJbXBsJ1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJib2R5LXBhcnNlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJpbnZlcnNpZnlcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaW52ZXJzaWZ5LWJpbmRpbmctZGVjb3JhdG9yc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJpbnZlcnNpZnktZXhwcmVzcy11dGlsc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJpbnZlcnNpZnktbG9nZ2VyLW1pZGRsZXdhcmVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibG9kYXNoL2ZvcmVhY2hcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibG9nNGpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZmxlY3QtbWV0YWRhdGFcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic29ja2V0LmlvXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=