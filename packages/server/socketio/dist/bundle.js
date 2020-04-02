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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vLi4vLi4vc2hhcmUvY29uZmlnL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9jb25zdGFudC9FdmVudHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnN0YW50L0ZpbGVQYXRoLnRzIiwid2VicGFjazovLy8uL3NyYy9jb25zdGFudC9UeXBlcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uc3RhbnQvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRyb2xsZXIvVXNlckNvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRyb2xsZXIvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvQXBwbGljYXRpb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvZXZlbnQvbGlzdGVuZXIvc29ja2V0L09uU29ja2V0VXNlckxvZ2luRXZlbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvZXZlbnQvbWFuZ2VyL3Byb3ZpZGVyL1NvY2tldElPRXZlbnRNYW5hZ2VyLnRzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL2luaXRpYWxpemVyL2ltcGwvQ29uZmlnUHJlQnVpbGRJbml0aWFsaXplci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9pbml0aWFsaXplci9pbXBsL0V2ZW5NYW5hZ2VySW5pdGlhbGl6ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvaW5pdGlhbGl6ZXIvaW1wbC9NdWx0aXBsZVByb3ZpZGVyc0V2ZW50TWFuYWdlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9pb2MvSU9DLnRzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL2lvYy9Mb2FkZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvaW9jL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZS9pbXBsL1Byb2plY3RTZXJ2aWNlSW1wbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZS9pbXBsL1VzZXJTZXJ2aWNlSW1wbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZS9pbXBsL2luZGV4LnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcImJvZHktcGFyc2VyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaW52ZXJzaWZ5XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaW52ZXJzaWZ5LWJpbmRpbmctZGVjb3JhdG9yc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImludmVyc2lmeS1leHByZXNzLXV0aWxzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaW52ZXJzaWZ5LWluamVjdC1kZWNvcmF0b3JzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaW52ZXJzaWZ5LWxvZ2dlci1taWRkbGV3YXJlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibG9kYXNoL2ZvcmVhY2hcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJsb2c0anNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWZsZWN0LW1ldGFkYXRhXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic29ja2V0LmlvXCIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMx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b0Q7Ozs7Ozs7Ozs7O0FDQUEsd0Q7Ozs7Ozs7Ozs7O0FDQUEsd0Q7Ozs7Ozs7Ozs7O0FDQUEsMkM7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsNkM7Ozs7Ozs7Ozs7O0FDQUEsc0MiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXgudHNcIik7XG4iLCJjb25zdCBsb2NhbG9oc3QgPSAnaHR0cDovL2xvY2FsaG9zdCdcclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIFBPUlQ6IHByb2Nlc3MuZW52LlBPUlQsXHJcbiAgU09DS0VUSU9fU0VSVkVSX1BPUlQ6IHByb2Nlc3MuZW52LlNPQ0tFVElPX1NFUlZFUl9QT1JULFxyXG4gIGhvc3Q6IGAke2xvY2Fsb2hzdH06JHtwcm9jZXNzLmVudi5QT1JUfWAsXHJcbiAgQVBQX0lORE9PUl9QT1JUOiBwcm9jZXNzLmVudi5BUFBfSU5ET09SX1BPUlQsXHJcbiAgYXBwSW5kb29ySG9zdDogYCR7bG9jYWxvaHN0fToke3Byb2Nlc3MuZW52LkFQUF9JTkRPT1JfUE9SVH1gLFxyXG4gIHNvY2tlSU9Vcmw6IGAke2xvY2Fsb2hzdH06JHtwcm9jZXNzLmVudi5TT0NLRVRJT19TRVJWRVJfUE9SVH0vc29ja2UuaW8vYCxcclxuICBBUFBfSU5ET09SX1NUQVRJQ19GSUxFOiBwcm9jZXNzLmVudi5BUFBfSU5ET09SX1NUQVRJQ19GSUxFXHJcbn1cclxuIiwiZXhwb3J0IGNvbnN0IEVWRU5UX1RZUEVfTUFQID0ge1xyXG4gIGRvbWFpbjogJ2RvbWFpbi5ldmVudCcsXHJcbiAgc29ja2V0OiAnc29ja2V0LmV2ZW50J1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgRVZFTlRfTkFNRV9NQVAgPSB7XHJcbiAgb25Tb2NrZXRDb25uZWN0aW9uOiAnY29ubmVjdGlvbicsXHJcbiAgb25Tb2NrZXRVc2VyTG9naW46IGAke0VWRU5UX1RZUEVfTUFQLnNvY2tldH0ub25Tb2NrZXRVc2VyTG9naW5gXHJcbn1cclxuIiwiZXhwb3J0IGNvbnN0IFVTRVJfRklMRV9QQVRIOiBzdHJpbmcgPSAnLi91c2VyLmpzb24nIiwibGV0IFRZUEVTID0ge1xyXG4gIEFwcGxpY2F0aW9uOiBTeW1ib2woJ0FwcGxpY2F0aW9uJyksXHJcbiAgU29ja2V0SU86IFN5bWJvbCgnU29ja2V0SU8uU2VydmVyJyksXHJcbiAgUHJlQnVpbGRJbml0aWFsaXplcjogU3ltYm9sKCdQcmVCdWlsZEluaXRpYWxpemVyJyksXHJcbiAgUG9zdEluc3RhbnRpYXRlSW5pdGlhbGl6ZXI6IFN5bWJvbCgnUG9zdEluc3RhbnRpYXRlSW5pdGlhbGl6ZXInKSxcclxuICBJRXZlbnRNYW5hZ2VyOiBTeW1ib2woJ0lFdmVudE1hbmFnZXInKSxcclxuICBJRXZlbnRMaXN0ZW5lcjogU3ltYm9sKCdJRXZlbnRMaXN0ZW5lcicpLFxyXG4gIElFdmVudE1hbmFnZXJQcm92aWRlcjogU3ltYm9sKCdJRXZlbnRNYW5hZ2VyUHJvdmlkZXInKSxcclxuICBVc2VyU2VydmljZTogU3ltYm9sKCdVc2VyU2VydmljZScpLFxyXG4gIFByb2plY3RTZXJ2aWNlOiBTeW1ib2woJ1Byb2plY3RTZXJ2aWNlJylcclxufVxyXG5cclxuZXhwb3J0IHsgVFlQRVMgfVxyXG4iLCJleHBvcnQgKiBmcm9tICcuL0ZpbGVQYXRoJ1xyXG5leHBvcnQgKiBmcm9tICcuL1R5cGVzJ1xyXG4iLCJpbXBvcnQgeyBVc2VyU2VydmljZUltcGwgfSBmcm9tICcuLy4uL3NlcnZpY2UvaW1wbC9Vc2VyU2VydmljZUltcGwnXHJcbmltcG9ydCB7IHByb3ZpZGUsIGluamVjdCwgcHJvdmlkZU5hbWVkIH0gZnJvbSAnLi4vY29yZS9pb2MnXHJcbmltcG9ydCB7IFRZUEVTIH0gZnJvbSAnLi4vY29uc3RhbnQnXHJcbmltcG9ydCB7IGNvbnRyb2xsZXIsIGh0dHBHZXQsIGludGVyZmFjZXMsIFRZUEUgfSBmcm9tICdpbnZlcnNpZnktZXhwcmVzcy11dGlscydcclxuaW1wb3J0IHsgSVVzZXJTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZSdcclxuXHJcbi8vIEBwcm92aWRlKFRZUEVTLklVc2VyU2VydmljZSwgdHJ1ZSlcclxuLy8gQHByb3ZpZGVOYW1lZChUWVBFLkNvbnRyb2xsZXIsICdVc2VyQ29udHJvbGxlcicpXHJcbkBjb250cm9sbGVyKCcvdXNlcicpXHJcbmV4cG9ydCBjbGFzcyBVc2VyQ29udHJvbGxlciBpbXBsZW1lbnRzIGludGVyZmFjZXMuQ29udHJvbGxlciB7XHJcbiAgLy8gQGluamVjdChUWVBFUy5Vc2VyU2VydmljZSlcclxuICAvLyBwcml2YXRlIF91c2VyU2VydmljZSE6IElVc2VyU2VydmljZVxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgQGluamVjdChUWVBFUy5Vc2VyU2VydmljZSkgcHJpdmF0ZSBfdXNlclNlcnZpY2U6IFVzZXJTZXJ2aWNlSW1wbFxyXG4gICkge31cclxuXHJcbiAgQGh0dHBHZXQoJy8nKVxyXG4gIHB1YmxpYyBnZXQoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLl91c2VyU2VydmljZS5zYXlIZWxsbygpXHJcbiAgfVxyXG59XHJcbiIsImV4cG9ydCAqIGZyb20gJy4vVXNlckNvbnRyb2xsZXInXHJcbiIsImltcG9ydCB7IHByb3ZpZGUgfSBmcm9tICdpbnZlcnNpZnktYmluZGluZy1kZWNvcmF0b3JzJ1xyXG5pbXBvcnQgeyBJUG9zdEluc3RhbnRpYXRlSW5pdGlhbGl6ZXIgfSBmcm9tICcuL2luaXRpYWxpemVyL0lQb3N0SW5zdGFudGlhdGVJbml0aWFsaXplcidcclxuaW1wb3J0IHsgVFlQRVMgfSBmcm9tICcuLi9jb25zdGFudCdcclxuaW1wb3J0IHsgSVByZUJ1aWxkSW5pdGlhbGl6ZXIgfSBmcm9tICcuL2luaXRpYWxpemVyL0lQcmVCdWlsZEluaXRpYWxpemVyJ1xyXG5pbXBvcnQgaHR0cCBmcm9tICdodHRwJ1xyXG5pbXBvcnQgeyBJbnZlcnNpZnlFeHByZXNzU2VydmVyIH0gZnJvbSAnaW52ZXJzaWZ5LWV4cHJlc3MtdXRpbHMnXHJcbmltcG9ydCB7IG11bHRpSW5qZWN0LCBpbnRlcmZhY2VzIGFzIGludmVyc2lmeUludGVyZmFjZXMgfSBmcm9tICdpbnZlcnNpZnknXHJcbmltcG9ydCBzaGFyZUNvbmZpZyBmcm9tICdAc2hhcmUvY29uZmlnJ1xyXG5pbXBvcnQgZXhwcmVzcyBmcm9tICdleHByZXNzJ1xyXG5pbXBvcnQgaW8gZnJvbSAnc29ja2V0LmlvJ1xyXG5pbXBvcnQgeyBwcm92aWRlU2luZ2xldG9uIH0gZnJvbSAnLi9pb2MnXHJcblxyXG5AcHJvdmlkZVNpbmdsZXRvbihUWVBFUy5BcHBsaWNhdGlvbilcclxuZXhwb3J0IGNsYXNzIEFwcGxpY2F0aW9uIHtcclxuICBwcml2YXRlIF9leHByZXNzITogSW52ZXJzaWZ5RXhwcmVzc1NlcnZlclxyXG4gIHByaXZhdGUgX2h0dHBTZXJ2ZXIhOiBodHRwLlNlcnZlclxyXG4gIHByaXZhdGUgX3ByZUJ1aWxkSW5pdGlhbGl6ZXJzOiBJUHJlQnVpbGRJbml0aWFsaXplcltdXHJcbiAgcHJpdmF0ZSBfcG9zdEluc3RhbnRpYXRlSW5pdGlhbGl6ZXJzITogSVBvc3RJbnN0YW50aWF0ZUluaXRpYWxpemVyW11cclxuICBwcml2YXRlIF9hcHAhOiBleHByZXNzLkFwcGxpY2F0aW9uXHJcblxyXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihcclxuICAgIEBtdWx0aUluamVjdChUWVBFUy5QcmVCdWlsZEluaXRpYWxpemVyKVxyXG4gICAgcHJlQnVpbGRJbml0aWFsaXplcnM6IElQcmVCdWlsZEluaXRpYWxpemVyW11cclxuICApIHtcclxuICAgIHRoaXMuX3ByZUJ1aWxkSW5pdGlhbGl6ZXJzID0gcHJlQnVpbGRJbml0aWFsaXplcnNcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZXRFeHByZXNzKGV4cHJlc3M6IEludmVyc2lmeUV4cHJlc3NTZXJ2ZXIpIHtcclxuICAgIHRoaXMuX2V4cHJlc3MgPSBleHByZXNzXHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0SHR0cFNlcnZlcigpOiBodHRwLlNlcnZlciB7XHJcbiAgICByZXR1cm4gdGhpcy5faHR0cFNlcnZlclxyXG4gIH1cclxuXHJcbiAgcHVibGljIHJ1bihjb250YWluZXI6IGludmVyc2lmeUludGVyZmFjZXMuQ29udGFpbmVyKTogdm9pZCB7XHJcbiAgICB0aGlzLnByZUJ1aWxkSW5pdCh0aGlzLl9leHByZXNzKVxyXG4gICAgICAudGhlbigoKSA9PiB0aGlzLmluc3RhbnRpYXRlKGNvbnRhaW5lcikpXHJcbiAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICB0aGlzLl9wb3N0SW5zdGFudGlhdGVJbml0aWFsaXplcnMgPSBjb250YWluZXIuZ2V0QWxsPFxyXG4gICAgICAgICAgSVBvc3RJbnN0YW50aWF0ZUluaXRpYWxpemVyXHJcbiAgICAgICAgPihUWVBFUy5Qb3N0SW5zdGFudGlhdGVJbml0aWFsaXplcilcclxuICAgICAgfSlcclxuICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIHRoaXMucG9zdEluaXRpYWxpemVkKClcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnI6IEVycm9yKSA9PiBjb25zb2xlLmxvZyhlcnIpKVxyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIGluc3RhbnRpYXRlKFxyXG4gICAgY29udGFpbmVyOiBpbnZlcnNpZnlJbnRlcmZhY2VzLkNvbnRhaW5lclxyXG4gICk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPHZvaWQ+KHJlc29sdmUgPT4ge1xyXG4gICAgICB0aGlzLl9hcHAgPSB0aGlzLl9leHByZXNzLmJ1aWxkKClcclxuICAgICAgY29uc3QgcG9ydCA9IHNoYXJlQ29uZmlnLlNPQ0tFVElPX1NFUlZFUl9QT1JUXHJcblxyXG4gICAgICB0aGlzLl9odHRwU2VydmVyID0gdGhpcy5fYXBwLmxpc3Rlbihwb3J0LCAoKSA9PlxyXG4gICAgICAgIGNvbnNvbGUubG9nKGBTZXJ2ZXIgc3RhcnRlZCBhdCBwb3J0OiAke3BvcnR9YClcclxuICAgICAgKVxyXG5cclxuICAgICAgY29uc3Qgc29ja2V0SU86IFNvY2tldElPLlNlcnZlciA9IGlvKHRoaXMuZ2V0SHR0cFNlcnZlcigpKVxyXG4gICAgICBjb250YWluZXIuYmluZDxTb2NrZXRJTy5TZXJ2ZXI+KFRZUEVTLlNvY2tldElPKS50b0NvbnN0YW50VmFsdWUoc29ja2V0SU8pXHJcbiAgICAgIHJlc29sdmUoKVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCBwcmVCdWlsZEluaXQoZXhwcmVzczogSW52ZXJzaWZ5RXhwcmVzc1NlcnZlcik6IFByb21pc2U8dm9pZFtdPiB7XHJcbiAgICByZXR1cm4gUHJvbWlzZS5hbGwoXHJcbiAgICAgIHRoaXMuX3ByZUJ1aWxkSW5pdGlhbGl6ZXJzLm1hcCgoaW5pdGlhbGl6ZXI6IElQcmVCdWlsZEluaXRpYWxpemVyKSA9PlxyXG4gICAgICAgIGluaXRpYWxpemVyLmFwcGx5VG8oZXhwcmVzcylcclxuICAgICAgKVxyXG4gICAgKVxyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIHBvc3RJbml0aWFsaXplZCgpOiBQcm9taXNlPHZvaWRbXT4ge1xyXG4gICAgcmV0dXJuIFByb21pc2UuYWxsKFxyXG4gICAgICB0aGlzLl9wb3N0SW5zdGFudGlhdGVJbml0aWFsaXplcnMubWFwKFxyXG4gICAgICAgIChpbml0aWFsaXplcjogSVBvc3RJbnN0YW50aWF0ZUluaXRpYWxpemVyKSA9PlxyXG4gICAgICAgICAgaW5pdGlhbGl6ZXIuYXBwbHlUbyh0aGlzLl9odHRwU2VydmVyKVxyXG4gICAgICApXHJcbiAgICApXHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IGFjdGlvbiB9IGZyb20gJ3R5cGVzYWZlLWFjdGlvbnMnXHJcbmltcG9ydCB7IEVWRU5UX1RZUEVfTUFQLCBFVkVOVF9OQU1FX01BUCB9IGZyb20gJy4vLi4vLi4vLi4vLi4vY29uc3RhbnQvRXZlbnRzJ1xyXG5pbXBvcnQgeyBJRXZlbnRMaXN0ZW5lciB9IGZyb20gJy4uLy4uL21hbmdlci9JRXZlbnRMaXN0ZW5lcidcclxuaW1wb3J0IHsgcHJvdmlkZU5hbWVkLCBwcm92aWRlIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9pb2MnXHJcbmltcG9ydCB7IFRZUEVTIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29uc3RhbnQnXHJcbmltcG9ydCB7IEFjdGlvbnMgfSBmcm9tICdAc2hhcmUvYWN0aW9uJ1xyXG5cclxuLy8gQHByb3ZpZGVOYW1lZChUWVBFUy5JRXZlbnRMaXN0ZW5lciwgRVZFTlRfTkFNRV9NQVAub25Tb2NrZXRVc2VyTG9naW4pXHJcbkBwcm92aWRlKFRZUEVTLklFdmVudExpc3RlbmVyKVxyXG5leHBvcnQgY2xhc3MgT25Tb2NrZXRVc2VyTG9naW5FdmVudCBpbXBsZW1lbnRzIElFdmVudExpc3RlbmVyIHtcclxuICB0eXBlKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gRVZFTlRfVFlQRV9NQVAuc29ja2V0XHJcbiAgfVxyXG4gIG5hbWUoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiBFVkVOVF9OQU1FX01BUC5vblNvY2tldFVzZXJMb2dpblxyXG4gIH1cclxuICBoYW5kbGVycygpOiBGdW5jdGlvbltdIHtcclxuICAgIHJldHVybiBbXHJcbiAgICAgIChhY3Rpb246IEFjdGlvbnMpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhhY3Rpb24pXHJcbiAgICAgIH1cclxuICAgIF1cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgVEFHUyB9IGZyb20gJy4vLi4vLi4vLi4vLi4vY29uc3RhbnQvVGFncydcclxuaW1wb3J0IHsgSUV2ZW50TGlzdGVuZXIgfSBmcm9tICcuLi9JRXZlbnRMaXN0ZW5lcidcclxuaW1wb3J0IHsgRVZFTlRfVFlQRV9NQVAgfSBmcm9tICcuLi8uLi8uLi8uLi9jb25zdGFudC9FdmVudHMnXHJcbmltcG9ydCB7IElFdmVudE1hbmFnZXJQcm92aWRlciB9IGZyb20gJy4uL0lFdmVudE1hbmFnZXInXHJcbmltcG9ydCB7IFRZUEVTIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29uc3RhbnQnXHJcbmltcG9ydCB7XHJcbiAgcHJvdmlkZU5hbWVkU2luZ2xldG9uLFxyXG4gIGluamVjdCxcclxuICBwcm92aWRlU2luZ2xldG9uXHJcbn0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9pb2MnXHJcblxyXG4vLyBAcHJvdmlkZU5hbWVkU2luZ2xldG9uKFxyXG4vLyAgIFRZUEVTLklFdmVudE1hbmFnZXJQcm92aWRlcixcclxuLy8gICBUQUdTLlNvY2tldEV2ZW50TWFuYWdlclByb3ZpZGVyXHJcbi8vIClcclxuQHByb3ZpZGVTaW5nbGV0b24oVFlQRVMuSUV2ZW50TWFuYWdlclByb3ZpZGVyKVxyXG5leHBvcnQgY2xhc3MgU29ja2V0SU9FdmVudE1hbmFnZXIgaW1wbGVtZW50cyBJRXZlbnRNYW5hZ2VyUHJvdmlkZXIge1xyXG4gIHByb3RlY3RlZCBfc29ja2V0U2VydmVyOiBTb2NrZXRJTy5TZXJ2ZXJcclxuICBwcm90ZWN0ZWQgX3NvY2tldCE6IFNvY2tldElPLlNvY2tldFxyXG5cclxuICBwdWJsaWMgY29uc3RydWN0b3IoQGluamVjdChUWVBFUy5Tb2NrZXRJTykgc29ja2V0U2VydmVyOiBTb2NrZXRJTy5TZXJ2ZXIpIHtcclxuICAgIHRoaXMuX3NvY2tldFNlcnZlciA9IHNvY2tldFNlcnZlclxyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldCBzb2NrZXQoc29ja2V0OiBTb2NrZXRJTy5Tb2NrZXQpIHtcclxuICAgIHRoaXMuX3NvY2tldCA9IHNvY2tldFxyXG4gIH1cclxuICB0eXBlKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gRVZFTlRfVFlQRV9NQVAuc29ja2V0XHJcbiAgfVxyXG4gIGVtaXQoZXZlbnQ6IGltcG9ydCgnLi4vSUV2ZW50JykuSUV2ZW50KTogdm9pZCB7XHJcbiAgICB0aGlzLl9zb2NrZXRTZXJ2ZXIuZW1pdChldmVudC5uYW1lKCksIGV2ZW50LmRhdGEoKSlcclxuICB9XHJcbiAgb24oZXZlbnROYW1lOiBzdHJpbmcsIGNhbGxiYWNrOiBGdW5jdGlvbik6IHZvaWQge1xyXG4gICAgLy8gdGhpcy5fc29ja2V0U2VydmVyLm9uKGV2ZW50TmFtZSwgY2FsbGJhY2spXHJcbiAgfVxyXG5cclxuICBwdWJsaWMgaW5pdFNvY2tldExpc3RlbmVyKFxyXG4gICAgc29ja2V0OiBTb2NrZXRJTy5Tb2NrZXQsXHJcbiAgICBldmVudExpc3RlbmVyczogSUV2ZW50TGlzdGVuZXJbXVxyXG4gICk6IHZvaWQge1xyXG4gICAgZXZlbnRMaXN0ZW5lcnNcclxuICAgICAgLmZpbHRlcihcclxuICAgICAgICAoZXZlbnRMaXN0ZW5lcjogSUV2ZW50TGlzdGVuZXIpID0+IGV2ZW50TGlzdGVuZXIudHlwZSgpID09PSB0aGlzLnR5cGUoKVxyXG4gICAgICApXHJcbiAgICAgIC5mb3JFYWNoKChldmVudExpc3RlbmVyOiBJRXZlbnRMaXN0ZW5lcikgPT5cclxuICAgICAgICBldmVudExpc3RlbmVyLmhhbmRsZXJzKCkuZm9yRWFjaCgoZXZlbnRIYW5kZXI6IEZ1bmN0aW9uKSA9PlxyXG4gICAgICAgICAgKChoYW5kZXI6IEZ1bmN0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgIHNvY2tldC5vbihldmVudExpc3RlbmVyLm5hbWUoKSwgKGFjdGlvbjogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgLy8gaGFuZGVyLmFwcGx5KG51bGwsIHBheWxvYWQpXHJcbiAgICAgICAgICAgICAgaGFuZGVyKGFjdGlvbilcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgIH0pKGV2ZW50SGFuZGVyKVxyXG4gICAgICAgIClcclxuICAgICAgKVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBwcm92aWRlU2luZ2xldG9uIH0gZnJvbSAnLi4vLi4vaW9jJ1xyXG5pbXBvcnQgeyBJUHJlQnVpbGRJbml0aWFsaXplciB9IGZyb20gJy4uL0lQcmVCdWlsZEluaXRpYWxpemVyJ1xyXG5pbXBvcnQgeyBJbnZlcnNpZnlFeHByZXNzU2VydmVyIH0gZnJvbSAnaW52ZXJzaWZ5LWV4cHJlc3MtdXRpbHMnXHJcbmltcG9ydCBleHByZXNzIGZyb20gJ2V4cHJlc3MnXHJcbmltcG9ydCBib2R5UGFyc2VyIGZyb20gJ2JvZHktcGFyc2VyJ1xyXG5pbXBvcnQgeyBUWVBFUyB9IGZyb20gJy4uLy4uLy4uL2NvbnN0YW50J1xyXG5pbXBvcnQgc2hhcmVDb25maWcgZnJvbSAnQHNoYXJlL2NvbmZpZydcclxuXHJcbkBwcm92aWRlU2luZ2xldG9uKFRZUEVTLlByZUJ1aWxkSW5pdGlhbGl6ZXIpXHJcbmV4cG9ydCBjbGFzcyBDb25maWdQcmVCdWlsZEluaXRpYWxpemVyIGltcGxlbWVudHMgSVByZUJ1aWxkSW5pdGlhbGl6ZXIge1xyXG4gIGFwcGx5VG8oZXhwcmVzc1NlcnZlcjogSW52ZXJzaWZ5RXhwcmVzc1NlcnZlcik6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPHZvaWQ+KHJlc29sdmUgPT4ge1xyXG4gICAgICBleHByZXNzU2VydmVyLnNldENvbmZpZygoYXBwOiBleHByZXNzLkFwcGxpY2F0aW9uKSA9PiB7XHJcbiAgICAgICAgYXBwLnVzZShib2R5UGFyc2VyLnVybGVuY29kZWQoeyBleHRlbmRlZDogdHJ1ZSB9KSlcclxuICAgICAgICBhcHAudXNlKGJvZHlQYXJzZXIuanNvbigpKVxyXG4gICAgICAgIC8vIFdlYnBhY2stRGV2LVNlcnZlclxyXG4gICAgICAgIC8vIGFwcC51c2UoXHJcbiAgICAgICAgLy8gICAnLycsXHJcbiAgICAgICAgLy8gICBleHByZXNzLnN0YXRpYyhzaGFyZUNvbmZpZy5BUFBfSU5ET09SX1NUQVRJQ19GSUxFIGFzIHN0cmluZylcclxuICAgICAgICAvLyApXHJcbiAgICAgIH0pXHJcbiAgICAgIHJlc29sdmUoKVxyXG4gICAgfSlcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgVEFHUyB9IGZyb20gJy4vLi4vLi4vLi4vY29uc3RhbnQvVGFncydcclxuaW1wb3J0IHsgU29ja2V0SU9FdmVudE1hbmFnZXIgfSBmcm9tICcuLy4uLy4uL2V2ZW50L21hbmdlci9wcm92aWRlci9Tb2NrZXRJT0V2ZW50TWFuYWdlcidcclxuaW1wb3J0IHsgRVZFTlRfVFlQRV9NQVAgfSBmcm9tICcuLy4uLy4uLy4uL2NvbnN0YW50L0V2ZW50cydcclxuaW1wb3J0IHsgSUV2ZW50TGlzdGVuZXIgfSBmcm9tICcuLy4uLy4uL2V2ZW50L21hbmdlci9JRXZlbnRMaXN0ZW5lcidcclxuaW1wb3J0IHtcclxuICBJRXZlbnRNYW5hZ2VyLFxyXG4gIElFdmVudE1hbmFnZXJQcm92aWRlclxyXG59IGZyb20gJy4vLi4vLi4vZXZlbnQvbWFuZ2VyL0lFdmVudE1hbmFnZXInXHJcbmltcG9ydCB7IElQb3N0SW5zdGFudGlhdGVJbml0aWFsaXplciB9IGZyb20gJy4uL0lQb3N0SW5zdGFudGlhdGVJbml0aWFsaXplcidcclxuaW1wb3J0IHsgaW5qZWN0IH0gZnJvbSAnaW52ZXJzaWZ5J1xyXG5pbXBvcnQgeyBUWVBFUyB9IGZyb20gJy4uLy4uLy4uL2NvbnN0YW50J1xyXG5pbXBvcnQge1xyXG4gIHByb3ZpZGVTaW5nbGV0b24sXHJcbiAgbXVsdGlJbmplY3QsXHJcbiAgbmFtZWQsXHJcbiAgbGF6eU11bHRpSW5qZWN0XHJcbn0gZnJvbSAnLi4vLi4vaW9jJ1xyXG5cclxuQHByb3ZpZGVTaW5nbGV0b24oVFlQRVMuUG9zdEluc3RhbnRpYXRlSW5pdGlhbGl6ZXIpXHJcbmV4cG9ydCBjbGFzcyBFdmVuTWFuYWdlckluaXRpYWxpemVyIGltcGxlbWVudHMgSVBvc3RJbnN0YW50aWF0ZUluaXRpYWxpemVyIHtcclxuICAvLyBAbXVsdGlJbmplY3QoVFlQRVMuSUV2ZW50TWFuYWdlclByb3ZpZGVyKSBwdWJsaWMgX2V2ZW50TWFuYWdlcjogSUV2ZW50TWFuYWdlclxyXG4gIC8vIEBsYXp5TXVsdGlJbmplY3QoVFlQRVMuSUV2ZW50TWFuYWdlclByb3ZpZGVyKVxyXG4gIC8vIHByaXZhdGUgX2V2ZW50TWFuYWdlcjogSUV2ZW50TWFuYWdlclxyXG4gIHByaXZhdGUgX2V2ZW50TWFuYWdlcjogSUV2ZW50TWFuYWdlclxyXG4gIHByaXZhdGUgX2V2ZW50UHJvdmlkZXJzITogSUV2ZW50TWFuYWdlclByb3ZpZGVyW11cclxuICBwcml2YXRlIF9ldmVudExpc3RlbmVyczogSUV2ZW50TGlzdGVuZXJbXVxyXG4gIHByaXZhdGUgX3NvY2tldElPOiBTb2NrZXRJTy5TZXJ2ZXJcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBAaW5qZWN0KFRZUEVTLklFdmVudE1hbmFnZXIpIGV2ZW50TWFuYWdlcjogSUV2ZW50TWFuYWdlcixcclxuICAgIC8vIHNpbmdsZSBpbmplY3RcclxuICAgIC8vIEBpbmplY3QoVFlQRVMuSUV2ZW50TWFuYWdlclByb3ZpZGVyKVxyXG4gICAgLy8gQG5hbWVkKFRBR1MuU29ja2V0RXZlbnRNYW5hZ2VyUHJvdmlkZXIpXHJcbiAgICAvLyBldmVudFByb3ZpZGVyczogSUV2ZW50TWFuYWdlclByb3ZpZGVyW10sXHJcbiAgICAvLyBpbnZlcnNpZnktaW5qZWN0LWRlY29yYXRvcnNcclxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9pbnZlcnNpZnkvSW52ZXJzaWZ5SlMvaXNzdWVzLzM0MlxyXG4gICAgQG11bHRpSW5qZWN0KFRZUEVTLklFdmVudE1hbmFnZXJQcm92aWRlcilcclxuICAgIGV2ZW50UHJvdmlkZXJzOiBJRXZlbnRNYW5hZ2VyUHJvdmlkZXJbXSxcclxuICAgIEBtdWx0aUluamVjdChUWVBFUy5JRXZlbnRMaXN0ZW5lcikgZXZlbnRMaXN0ZW5lcnM6IElFdmVudExpc3RlbmVyW10sXHJcbiAgICBAaW5qZWN0KFRZUEVTLlNvY2tldElPKSBzb2NrZXRJTzogU29ja2V0SU8uU2VydmVyXHJcbiAgKSB7XHJcbiAgICB0aGlzLl9ldmVudE1hbmFnZXIgPSBldmVudE1hbmFnZXJcclxuICAgIHRoaXMuX2V2ZW50UHJvdmlkZXJzID0gZXZlbnRQcm92aWRlcnNcclxuICAgIHRoaXMuX2V2ZW50TGlzdGVuZXJzID0gZXZlbnRMaXN0ZW5lcnNcclxuICAgIHRoaXMuX3NvY2tldElPID0gc29ja2V0SU9cclxuICB9XHJcbiAgYXBwbHlUbyhzZXJ2ZXI6IGltcG9ydCgnaHR0cCcpLlNlcnZlcik6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPHZvaWQ+KHJlc29sdmUgPT4ge1xyXG4gICAgICB0aGlzLl9ldmVudE1hbmFnZXIuaW5pdFByb3ZpZGVycyh0aGlzLl9ldmVudFByb3ZpZGVycylcclxuICAgICAgdGhpcy5fZXZlbnRNYW5hZ2VyLmluaXRMaXN0ZW5lcnModGhpcy5fZXZlbnRMaXN0ZW5lcnMpXHJcbiAgICAgIHRoaXMuX3NvY2tldElPLm9uKCdjb25uZWN0JywgKHNvY2tldDogU29ja2V0SU8uU29ja2V0KSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1NvY2tldCBjb25uZWN0ZWQuLi4nKVxyXG4gICAgICAgIDsoPFNvY2tldElPRXZlbnRNYW5hZ2VyPihcclxuICAgICAgICAgIHRoaXMuX2V2ZW50TWFuYWdlci5nZXRSZWdpc3RlcmVkRXZlbnRQcm92aWRlcihFVkVOVF9UWVBFX01BUC5zb2NrZXQpXHJcbiAgICAgICAgKSkuaW5pdFNvY2tldExpc3RlbmVyKHNvY2tldCwgdGhpcy5fZXZlbnRMaXN0ZW5lcnMpXHJcbiAgICAgIH0pXHJcblxyXG4gICAgICByZXNvbHZlKClcclxuICAgIH0pXHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IElFdmVudExpc3RlbmVyIH0gZnJvbSAnLi8uLi8uLi9ldmVudC9tYW5nZXIvSUV2ZW50TGlzdGVuZXInXHJcbi8vIGltcG9ydCB7IEV2ZW50SGFuZGxlciB9IGZyb20gJy4uLy4uLy4uL2NvcmUvZXZlbnQvbWFuZ2VyL0lFdmVudExpc3RlbmVyJ1xyXG5pbXBvcnQgZm9yRWFjaCBmcm9tICdsb2Rhc2gvZm9yZWFjaCdcclxuaW1wb3J0IHtcclxuICBJRXZlbnRNYW5hZ2VyLFxyXG4gIElFdmVudE1hbmFnZXJQcm92aWRlclxyXG59IGZyb20gJy4vLi4vLi4vZXZlbnQvbWFuZ2VyL0lFdmVudE1hbmFnZXInXHJcbmltcG9ydCB7IHByb3ZpZGVTaW5nbGV0b24gfSBmcm9tICcuLi8uLi8uLi9jb3JlL2lvYydcclxuaW1wb3J0IHsgVFlQRVMgfSBmcm9tICcuLi8uLi8uLi9jb25zdGFudCdcclxuXHJcbkBwcm92aWRlU2luZ2xldG9uKFRZUEVTLklFdmVudE1hbmFnZXIpXHJcbmV4cG9ydCBjbGFzcyBNdWx0aXBsZVByb3ZpZGVyc0V2ZW50TWFuYWdlciBpbXBsZW1lbnRzIElFdmVudE1hbmFnZXIge1xyXG4gIHByb3RlY3RlZCBwcm92aWRlcnM6IHsgW3R5cGU6IHN0cmluZ106IElFdmVudE1hbmFnZXJQcm92aWRlciB9ID0ge31cclxuICBpbml0UHJvdmlkZXJzKFxyXG4gICAgcHJvdmlkZXJzOiBpbXBvcnQoJy4uLy4uL2V2ZW50L21hbmdlci9JRXZlbnRNYW5hZ2VyJykuSUV2ZW50TWFuYWdlclByb3ZpZGVyW11cclxuICApOiB0aGlzIHtcclxuICAgIGZvckVhY2gocHJvdmlkZXJzLCB0aGlzLnJlZ2lzdGVyUHJvdmlkZXIuYmluZCh0aGlzKSlcclxuICAgIHJldHVybiB0aGlzXHJcbiAgfVxyXG4gIGluaXRMaXN0ZW5lcnMoXHJcbiAgICBldmVudExpc3RlbmVyczogaW1wb3J0KCcuLi8uLi9ldmVudC9tYW5nZXIvSUV2ZW50TGlzdGVuZXInKS5JRXZlbnRMaXN0ZW5lcltdXHJcbiAgKTogdGhpcyB7XHJcbiAgICBldmVudExpc3RlbmVycy5mb3JFYWNoKChldmVudExpc3RlbmVyOiBJRXZlbnRMaXN0ZW5lcikgPT5cclxuICAgICAgZXZlbnRMaXN0ZW5lclxyXG4gICAgICAgIC5oYW5kbGVycygpXHJcbiAgICAgICAgLmZvckVhY2goKGV2ZW50SGFuZGxlcjogYW55KSA9PlxyXG4gICAgICAgICAgdGhpcy5nZXRSZWdpc3RlcmVkRXZlbnRQcm92aWRlcihldmVudExpc3RlbmVyLnR5cGUoKSkub24oXHJcbiAgICAgICAgICAgIGV2ZW50TGlzdGVuZXIubmFtZSgpLFxyXG4gICAgICAgICAgICBldmVudEhhbmRsZXJcclxuICAgICAgICAgIClcclxuICAgICAgICApXHJcbiAgICApXHJcbiAgICByZXR1cm4gdGhpc1xyXG4gIH1cclxuICByZWdpc3RlclByb3ZpZGVyKFxyXG4gICAgcHJvdmlkZXI6IGltcG9ydCgnLi4vLi4vZXZlbnQvbWFuZ2VyL0lFdmVudE1hbmFnZXInKS5JRXZlbnRNYW5hZ2VyUHJvdmlkZXJcclxuICApOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLnByb3ZpZGVyc1twcm92aWRlci50eXBlKCldKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignRXZlbnQgTWFuYWdlciBwcm92aWRlciBhbHJlYWR5IHJlZ2lzdGVyZWQhJylcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnByb3ZpZGVyc1twcm92aWRlci50eXBlKCldID0gcHJvdmlkZXJcclxuICB9XHJcbiAgZ2V0UmVnaXN0ZXJlZEV2ZW50UHJvdmlkZXIoXHJcbiAgICBldmVudFR5cGU6IHN0cmluZ1xyXG4gICk6IGltcG9ydCgnLi4vLi4vZXZlbnQvbWFuZ2VyL0lFdmVudE1hbmFnZXInKS5JRXZlbnRNYW5hZ2VyUHJvdmlkZXIge1xyXG4gICAgaWYgKCF0aGlzLnByb3ZpZGVyc1tldmVudFR5cGVdKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignVW5rbm93biBldmVudCBwcm92aWRlciByZXF1ZXN0ZWQuJylcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLnByb3ZpZGVyc1tldmVudFR5cGVdXHJcbiAgfVxyXG4gIGVtaXQoZXZlbnQ6IGltcG9ydCgnLi4vLi4vZXZlbnQvbWFuZ2VyL0lFdmVudCcpLklFdmVudCk6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzLnByb3ZpZGVycy5oYXNPd25Qcm9wZXJ0eShldmVudC50eXBlKCkpKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBldmVudCB0eXBlIScpXHJcbiAgICB9XHJcbiAgICB0aGlzLnByb3ZpZGVyc1tldmVudC50eXBlKCldLmVtaXQoZXZlbnQpXHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCAncmVmbGVjdC1tZXRhZGF0YSdcclxuaW1wb3J0IHsgQ29udGFpbmVyLCBpbmplY3QsIGludGVyZmFjZXMsIG11bHRpSW5qZWN0LCBuYW1lZCB9IGZyb20gJ2ludmVyc2lmeSdcclxuaW1wb3J0IHtcclxuICBhdXRvUHJvdmlkZSxcclxuICBidWlsZFByb3ZpZGVyTW9kdWxlLFxyXG4gIGZsdWVudFByb3ZpZGUsXHJcbiAgcHJvdmlkZVxyXG59IGZyb20gJ2ludmVyc2lmeS1iaW5kaW5nLWRlY29yYXRvcnMnXHJcbmltcG9ydCB7XHJcbiAgbWFrZUxvZ2dlck1pZGRsZXdhcmUsXHJcbiAgdGV4dFNlcmlhbGl6ZXJcclxufSBmcm9tICdpbnZlcnNpZnktbG9nZ2VyLW1pZGRsZXdhcmUnXHJcbmltcG9ydCBnZXREZWNvcmF0b3JzIGZyb20gJ2ludmVyc2lmeS1pbmplY3QtZGVjb3JhdG9ycydcclxuXHJcbmNvbnN0IGNvbnRhaW5lcjogaW50ZXJmYWNlcy5Db250YWluZXIgPSBuZXcgQ29udGFpbmVyKClcclxuXHJcbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xyXG4gIGxldCBsb2dnZXIgPSBtYWtlTG9nZ2VyTWlkZGxld2FyZSh1bmRlZmluZWQsIG91dCA9PlxyXG4gICAgY29uc29sZS5sb2codGV4dFNlcmlhbGl6ZXIob3V0KSlcclxuICApXHJcbiAgY29udGFpbmVyLmFwcGx5TWlkZGxld2FyZShsb2dnZXIpXHJcbn1cclxuXHJcbmNvbnN0IHByb3ZpZGVUaHJvd2FibGUgPSBmdW5jdGlvbihpZGVudGlmaWVyOiBhbnksIGlzVGhyb3dhYmxlOiBib29sZWFuKSB7XHJcbiAgcmV0dXJuIGZsdWVudFByb3ZpZGUoaWRlbnRpZmllcilcclxuICAgIC53aGVuVGFyZ2V0VGFnZ2VkKCd0aHJvd2FibGUnLCBpc1Rocm93YWJsZSlcclxuICAgIC5kb25lKClcclxufVxyXG5cclxuY29uc3QgcHJvdmlkZU5hbWVkID0gZnVuY3Rpb24oaWRlbnRpZmllcjogYW55LCBuYW1lOiBzdHJpbmcpIHtcclxuICByZXR1cm4gZmx1ZW50UHJvdmlkZShpZGVudGlmaWVyKVxyXG4gICAgLndoZW5UYXJnZXROYW1lZChuYW1lKVxyXG4gICAgLmRvbmUoKVxyXG59XHJcbmNvbnN0IHByb3ZpZGVTaW5nbGV0b24gPSBmdW5jdGlvbihpZGVudGlmaWVyOiBhbnkpIHtcclxuICByZXR1cm4gZmx1ZW50UHJvdmlkZShpZGVudGlmaWVyKVxyXG4gICAgLmluU2luZ2xldG9uU2NvcGUoKVxyXG4gICAgLmRvbmUoKVxyXG59XHJcblxyXG5jb25zdCBwcm92aWRlTmFtZWRTaW5nbGV0b24gPSBmdW5jdGlvbihpZGVudGlmaWVyOiBhbnksIG5hbWU6IHN0cmluZykge1xyXG4gIHJldHVybiBmbHVlbnRQcm92aWRlKGlkZW50aWZpZXIpXHJcbiAgICAuaW5TaW5nbGV0b25TY29wZSgpXHJcbiAgICAud2hlblRhcmdldE5hbWVkKG5hbWUpXHJcbiAgICAuZG9uZSgpXHJcbn1cclxuXHJcbmNvbnN0IHByb3ZpZGVUYWdnZWRTaW5nbGV0b24gPSBmdW5jdGlvbihcclxuICBpZGVudGlmaWVyOiBhbnksXHJcbiAgdGFnOiBzdHJpbmcsXHJcbiAgdmFsdWU6IGFueVxyXG4pIHtcclxuICByZXR1cm4gZmx1ZW50UHJvdmlkZShpZGVudGlmaWVyKVxyXG4gICAgLmluU2luZ2xldG9uU2NvcGUoKVxyXG4gICAgLndoZW5UYXJnZXRUYWdnZWQodGFnLCB2YWx1ZSlcclxuICAgIC5kb25lKClcclxufVxyXG5cclxubGV0IHsgbGF6eUluamVjdCwgbGF6eU11bHRpSW5qZWN0IH0gPSBnZXREZWNvcmF0b3JzKGNvbnRhaW5lcilcclxuXHJcbmV4cG9ydCB7XHJcbiAgY29udGFpbmVyLFxyXG4gIGF1dG9Qcm92aWRlLFxyXG4gIHByb3ZpZGUsXHJcbiAgcHJvdmlkZVRocm93YWJsZSxcclxuICBwcm92aWRlTmFtZWQsXHJcbiAgaW5qZWN0LFxyXG4gIG11bHRpSW5qZWN0LFxyXG4gIGxhenlJbmplY3QsXHJcbiAgbGF6eU11bHRpSW5qZWN0LFxyXG4gIG5hbWVkLFxyXG4gIHByb3ZpZGVTaW5nbGV0b24sXHJcbiAgcHJvdmlkZU5hbWVkU2luZ2xldG9uLFxyXG4gIHByb3ZpZGVUYWdnZWRTaW5nbGV0b24sXHJcbiAgYnVpbGRQcm92aWRlck1vZHVsZVxyXG59XHJcbiIsIi8vIHNvcnQgaXMgaW1wb3J0XHJcbmltcG9ydCAnLi4vQXBwbGljYXRpb24nXHJcblxyXG4vLyBjb250cm9sbGVyXHJcbmltcG9ydCAnLi4vLi4vY29udHJvbGxlcidcclxuXHJcbi8vIHNlcnZpY2VcclxuLy8gaW1wb3J0ICcuLi9zZXJ2aWNlJ1xyXG5pbXBvcnQgJy4uLy4uL3NlcnZpY2UvaW1wbCdcclxuXHJcbi8vIGltcG9ydCAnLi4vaW5pdGlhbGl6ZXInXHJcbmltcG9ydCAnLi4vaW5pdGlhbGl6ZXIvaW1wbC9Db25maWdQcmVCdWlsZEluaXRpYWxpemVyJ1xyXG5pbXBvcnQgJy4uL2luaXRpYWxpemVyL2ltcGwvRXZlbk1hbmFnZXJJbml0aWFsaXplcidcclxuXHJcbi8vIGV2ZW50XHJcbmltcG9ydCAnLi4vLi4vY29yZS9pbml0aWFsaXplci9pbXBsL011bHRpcGxlUHJvdmlkZXJzRXZlbnRNYW5hZ2VyJ1xyXG5pbXBvcnQgJy4uLy4uL2NvcmUvZXZlbnQvbWFuZ2VyL3Byb3ZpZGVyL1NvY2tldElPRXZlbnRNYW5hZ2VyJ1xyXG5cclxuLy8gZXZlbnQgbGlzdGVuZXJcclxuaW1wb3J0ICcuLi9ldmVudC9saXN0ZW5lci9zb2NrZXQvT25Tb2NrZXRVc2VyTG9naW5FdmVudCdcclxuIiwiZXhwb3J0ICogZnJvbSAnLi9JT0MnXHJcbiIsImltcG9ydCB7IFRBR1MgfSBmcm9tICcuL2NvbnN0YW50L1RhZ3MnXHJcbmltcG9ydCB7IEFwcGxpY2F0aW9uIH0gZnJvbSAnLi9jb3JlL0FwcGxpY2F0aW9uJ1xyXG5pbXBvcnQgeyBUWVBFUyB9IGZyb20gJy4vY29uc3RhbnQnXHJcbmltcG9ydCBmcyBmcm9tICdmcydcclxuaW1wb3J0IHNvY2tldElvIGZyb20gJ3NvY2tldC5pbydcclxuaW1wb3J0IGh0dHAgZnJvbSAnaHR0cCdcclxuaW1wb3J0IHBhdGggZnJvbSAncGF0aCdcclxuaW1wb3J0IHsgQWN0aW9uVHlwZSB9IGZyb20gJ3R5cGVzYWZlLWFjdGlvbnMnXHJcbmltcG9ydCB7IEVBY3Rpb25UeXBlIH0gZnJvbSAnQHNoYXJlL2NvbnN0YW50J1xyXG5pbXBvcnQgeyBhZGRQcm9qZWN0IH0gZnJvbSAnQHNoYXJlL2FjdGlvbi9Qcm9qZWN0QWN0aW9uJ1xyXG5pbXBvcnQgeyBJVXNlckR0byB9IGZyb20gJy4vZHRvJ1xyXG5pbXBvcnQgeyBVU0VSX0ZJTEVfUEFUSCB9IGZyb20gJy4vY29uc3RhbnQnXHJcbmltcG9ydCB7IGxvZ0luIH0gZnJvbSAnQHNoYXJlL2FjdGlvbi9Vc2VyQWN0aW9uJ1xyXG5pbXBvcnQgeyBjb25maWd1cmUsIGdldExvZ2dlciB9IGZyb20gJ2xvZzRqcydcclxuaW1wb3J0IHsgY29udGFpbmVyLCBhdXRvUHJvdmlkZSwgYnVpbGRQcm92aWRlck1vZHVsZSB9IGZyb20gJy4vY29yZS9pb2MnXHJcbmltcG9ydCAnLi9jb3JlL2lvYy9Mb2FkZXInXHJcbmltcG9ydCB7IEludmVyc2lmeUV4cHJlc3NTZXJ2ZXIgfSBmcm9tICdpbnZlcnNpZnktZXhwcmVzcy11dGlscydcclxuaW1wb3J0ICogYXMgYm9keVBhcnNlciBmcm9tICdib2R5LXBhcnNlcidcclxuaW1wb3J0IHsgSVVzZXJTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlJ1xyXG5pbXBvcnQgKiBhcyBzZXJ2aWNlIGZyb20gJy4vc2VydmljZS9pbXBsJ1xyXG5pbXBvcnQgeyBTb2NrZXRJT0V2ZW50TWFuYWdlciB9IGZyb20gJy4vY29yZS9ldmVudC9tYW5nZXIvcHJvdmlkZXIvU29ja2V0SU9FdmVudE1hbmFnZXInXHJcbmltcG9ydCB7IElFdmVudE1hbmFnZXJQcm92aWRlciB9IGZyb20gJy4vY29yZS9ldmVudC9tYW5nZXIvSUV2ZW50TWFuYWdlcidcclxuXHJcbmNvbmZpZ3VyZSgnLi9jb25maWcvbG9nNGpzLmpzb24nKVxyXG5jb25zdCBsb2dnZXIgPSBnZXRMb2dnZXIoKVxyXG5sb2dnZXIubGV2ZWwgPSBwcm9jZXNzLmVudi5MT0dHRVJfTEVWRUwgfHwgJ29mZidcclxuXHJcbi8vIGltcG9ydCB7IGFwcENvbnRhaW5lciB9IGZyb20gJy4vaW52ZXJzaWZ5LmNvbmZpZydcclxuLy8gaW1wb3J0IHsgVFlQRVMgfSBmcm9tICcuL2NvbnN0YW50L1R5cGVzJ1xyXG4vLyBpbXBvcnQgeyBJVXNlclNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2UnXHJcbi8vIGNvbnN0IHVzZXJTZXJ2aWNlSW5zdCA9IGFwcENvbnRhaW5lci5nZXQ8SVVzZXJTZXJ2aWNlPihUWVBFUy5JVXNlclNlcnZpY2UpXHJcbi8vIGNvbnNvbGUubG9nKHVzZXJTZXJ2aWNlSW5zdClcclxuLy8gY29uc29sZS5sb2codXNlclNlcnZpY2VJbnN0LnNheUhlbGxvKCkpXHJcblxyXG4vLyBjb250YWluZXIuYmluZDxQcm9qZWN0U2VydmljZUltcGw+KFRZUEVTLlByb2plY3RTZXJ2aWNlKS50byhQcm9qZWN0U2VydmljZUltcGwpXHJcbi8vIGNvbnRhaW5lci5iaW5kPFVzZXJTZXJ2aWNlSW1wbD4oVFlQRVMuVXNlclNlcnZpY2UpLnRvKFVzZXJTZXJ2aWNlSW1wbClcclxuLy8gYXV0b1Byb3ZpZGUoY29udGFpbmVyLCBzZXJ2aWNlKVxyXG5cclxuLy8g5b+F6aG75pS+5ZyoTG9hZGVy5LmL5ZCOXHJcbi8vIGNvbnRhaW5lci5sb2FkKGJ1aWxkUHJvdmlkZXJNb2R1bGUoKSlcclxuXHJcbi8vIGNvbnN0IHNlcnZlciA9IG5ldyBJbnZlcnNpZnlFeHByZXNzU2VydmVyKGNvbnRhaW5lcilcclxuLy8gc2VydmVyLnNldENvbmZpZyhhcHAgPT4ge1xyXG4vLyAgIC8vIGFkZCBib2R5IHBhcnNlclxyXG4vLyAgIGFwcC51c2UoXHJcbi8vICAgICBib2R5UGFyc2VyLnVybGVuY29kZWQoe1xyXG4vLyAgICAgICBleHRlbmRlZDogdHJ1ZVxyXG4vLyAgICAgfSlcclxuLy8gICApXHJcbi8vICAgYXBwLnVzZShib2R5UGFyc2VyLmpzb24oKSlcclxuLy8gfSlcclxuLy8gbGV0IGFwcCA9IHNlcnZlci5idWlsZCgpXHJcbi8vIGFwcC5saXN0ZW4oMzAwMilcclxuXHJcbmNvbnRhaW5lci5sb2FkKGJ1aWxkUHJvdmlkZXJNb2R1bGUoKSlcclxuY29uc3QgZXhwcmVzcyA9IG5ldyBJbnZlcnNpZnlFeHByZXNzU2VydmVyKGNvbnRhaW5lciwgbnVsbCwge1xyXG4gIHJvb3RQYXRoOiAnL2FwaSdcclxufSlcclxuY29uc3QgYXBwbGljYXRpb246IEFwcGxpY2F0aW9uID0gY29udGFpbmVyLmdldDxBcHBsaWNhdGlvbj4oVFlQRVMuQXBwbGljYXRpb24pXHJcbmFwcGxpY2F0aW9uLnNldEV4cHJlc3MoZXhwcmVzcylcclxuYXBwbGljYXRpb24ucnVuKGNvbnRhaW5lcilcclxuXHJcbi8vIGNvbnN0IHNvY2tldElPOiBTb2NrZXRJTy5TZXJ2ZXIgPSBjb250YWluZXIuZ2V0PFNvY2tldElPLlNlcnZlcj4oVFlQRVMuU29ja2V0SU8pXHJcbi8vIHNvY2tldElPLm9uKCdjb25uZWN0JywgKCkgPT4ge1xyXG4vLyAgIGNvbnNvbGUubG9nKCdTb2NrZXRJTyBjb25uZWN0ZWQuLi4nKVxyXG4vLyB9KVxyXG5cclxuLy8gY29uc3QgdXNlckxpc3Q6IElVc2VyRHRvW10gPSBbXVxyXG5cclxuLy8gY29uc3Qgc2VydmVyID0gaHR0cC5jcmVhdGVTZXJ2ZXIoZnVuY3Rpb24ocmVxOiBhbnksIHJlczogYW55KSB7XHJcbi8vICAgcmVzLndyaXRlSGVhZCgyMDApXHJcbi8vICAgcmVzLmVuZCgnaGVsbG8gd29ybGQnKVxyXG4vLyB9KVxyXG5cclxuLy8gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMjgzMDY3NDAvc29ja2V0LWlvLWNvbm5lY3QtdG8tdW5peC1zb2NrZXRcclxuLy8gc29ja2V0LmlvIHNldHVwXHJcbi8vIGNvbnN0IGlvID0gc29ja2V0SW8ubGlzdGVuKHNlcnZlcikgYXMgYW55XHJcbi8vIGlvLnNldCgndHJhbnNwb3J0cycsIFsnd2Vic29ja2V0J10pXHJcblxyXG4vLyBsZXQgcHJvdG9jb2wgPSAnJ1xyXG4vLyBjb25zdCBpc0RldiA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnXHJcbi8vIGlmICghaXNEZXYpIHtcclxuLy8gICAvLyBsZXQgbmduaXgga25vdyB3ZSB3YW50IHRvIHN0YXJ0IHNlcnZpbmcgZnJvbSB0aGUgcHJveHlcclxuLy8gICBmcy5vcGVuU3luYygnL3RtcC9hcHAtaW5pdGlhbGl6ZWQnLCAndycpXHJcbi8vICAgcHJvdG9jb2wgPSAnL3RtcC9uZ2lueC5zb2NrZXQnXHJcbi8vICAgLy8gRklYOiBhZGRyZXNzIGluIHVzZWRcclxuLy8gICBpZiAoZnMuZXhpc3RzU3luYyhwcm90b2NvbCkpIGZzLnVubGlua1N5bmMocHJvdG9jb2wpXHJcbi8vIH0gZWxzZSB7XHJcbi8vICAgcHJvdG9jb2wgPSBwcm9jZXNzLmVudi5TT0NLRVRJT19TRVJWRVJfUE9SVCBhcyBzdHJpbmdcclxuLy8gfVxyXG5cclxuLy8gLy8gbGlzdGVuIHRvIG5nbml4IHNvY2tldFxyXG4vLyBzZXJ2ZXIubGlzdGVuKHByb3RvY29sLCBmdW5jdGlvbigpIHtcclxuLy8gICAvLyBGSVg6IFBlcm1pc3Npb24gZGVuaWVkXHJcbi8vICAgaWYgKHByb3RvY29sICYmIGZzLmV4aXN0c1N5bmMocHJvdG9jb2wpKSBmcy5jaG1vZFN5bmMocHJvdG9jb2wsIDc1NSlcclxuLy8gICBsb2dnZXIuZGVidWcoYHNlcnZlciB1cGApXHJcbi8vIH0pXHJcblxyXG4vLyBpby5vbignY29ubmVjdF9lcnJvcicsIGZ1bmN0aW9uKGVycjogYW55KSB7XHJcbi8vICAgbG9nZ2VyLmRlYnVnKGVycilcclxuLy8gfSlcclxuXHJcbi8vIGlvLm9uKCdjb25uZWN0X3RpbWVvdXQnLCBmdW5jdGlvbihlcnI6IGFueSkge1xyXG4vLyAgIGxvZ2dlci5kZWJ1ZyhlcnIpXHJcbi8vIH0pXHJcblxyXG4vLyBpby5vbignY29ubmVjdGlvbicsIGZ1bmN0aW9uKHNvY2tldDogYW55KSB7XHJcbi8vICAgbG9nZ2VyLmRlYnVnKGBzb2NrZXQ6ICR7c29ja2V0LmlkfSBjb25uZWN0ZWRgKVxyXG4vLyAgIGxldCBjdXJyZW50VXNlcjogSVVzZXJEdG9cclxuLy8gICAvLyBzb2NrZXQuZW1pdCgnY29ubmVjdGlvbicsIHNvY2tldC5pZClcclxuXHJcbi8vICAgc29ja2V0Lm9uKCdkaXNjb25uZWN0JywgZnVuY3Rpb24oKSB7XHJcbi8vICAgICBsb2dnZXIuZGVidWcoYGRpc2Nvbm5lY3RlZGApXHJcbi8vICAgfSlcclxuXHJcbi8vICAgc29ja2V0Lm9uKEVBY3Rpb25UeXBlLkxPR19JTiwgKGFjdGlvbjogQWN0aW9uVHlwZTx0eXBlb2YgbG9nSW4+KSA9PiB7XHJcbi8vICAgICBsb2dnZXIuZGVidWcoYCR7RUFjdGlvblR5cGUuTE9HX0lOfS0tJHtKU09OLnN0cmluZ2lmeShhY3Rpb24pfWApXHJcbi8vICAgICBjdXJyZW50VXNlciA9IGFjdGlvbi5wYXlsb2FkLnVzZXJcclxuLy8gICAgIGNvbnN0IGV4aXN0aW5nVXNlciA9IHVzZXJMaXN0LmZpbmQoXHJcbi8vICAgICAgICh1c2VyOiBJVXNlckR0bykgPT4gdXNlci5uYW1lID09PSBjdXJyZW50VXNlci5uYW1lXHJcbi8vICAgICApXHJcbi8vICAgICBsb2dnZXIuZGVidWcoYGV4aXN0aW5nVXNlcjoke2V4aXN0aW5nVXNlcn1gKVxyXG4vLyAgICAgaWYgKGV4aXN0aW5nVXNlcikge1xyXG4vLyAgICAgICBjdXJyZW50VXNlciA9IGV4aXN0aW5nVXNlclxyXG4vLyAgICAgfSBlbHNlIHtcclxuLy8gICAgICAgbmV3VXNlcihjdXJyZW50VXNlcilcclxuLy8gICAgIH1cclxuLy8gICAgIGxvZ2dlci5kZWJ1ZyhgJHtKU09OLnN0cmluZ2lmeShjdXJyZW50VXNlcil9YClcclxuLy8gICAgIC8vIHNvY2tldC5lbWl0KEVBY3Rpb25UeXBlLkxHR19TVUNDRVNTLCB7IG1zZzogJ0xvZyBpbiBzdWNjZXNzLi4uJyB9KVxyXG4vLyAgICAgc29ja2V0LmVtaXQoRUFjdGlvblR5cGUuTE9HX0lOLCB7XHJcbi8vICAgICAgIHR5cGU6IEVBY3Rpb25UeXBlLkxPR19JTixcclxuLy8gICAgICAgcGF5bG9hZDogeyB1c2VyOiBjdXJyZW50VXNlciB9XHJcbi8vICAgICB9KVxyXG4vLyAgIH0pXHJcblxyXG4vLyAgIC8vIHNvY2tldC5vbihFQWN0aW9uVHlwZS5BRERfUFJPSkVDVCwgKGFjdGlvbjogQWN0aW9uVHlwZTx0eXBlb2YgYWRkUHJvamVjdD4pID0+IHtcclxuXHJcbi8vICAgLy8gfSlcclxuLy8gfSlcclxuXHJcbi8vIGZ1bmN0aW9uIHJlYWRKc29uKHBhdGg6IHN0cmluZywgY2FsbGJhY2s6IChvYmplY3Q6IGFueSkgPT4gYW55KTogdm9pZCB7XHJcbi8vICAgZnMucmVhZEZpbGUocGF0aCwgJ3V0ZjgnLCAoZXJyLCBkYXRhOiBzdHJpbmcpOiB2b2lkID0+IHtcclxuLy8gICAgIGlmIChlcnIpIHtcclxuLy8gICAgICAgbG9nZ2VyLmVycm9yKGVycilcclxuLy8gICAgIH0gZWxzZSB7XHJcbi8vICAgICAgIGNhbGxiYWNrKEpTT04ucGFyc2UoZGF0YSkpXHJcbi8vICAgICB9XHJcbi8vICAgfSlcclxuLy8gfVxyXG5cclxuLy8gY29uc3QgbmV3VXNlciA9ICh1c2VyOiBJVXNlckR0byk6IHZvaWQgPT4ge1xyXG4vLyAgIGxvZ2dlci5kZWJ1ZyhgbmV3IHVzZXI6ICR7dXNlci5uYW1lfWApXHJcbi8vICAgdXNlci5uYW1lID0gdXNlci5uYW1lXHJcbi8vICAgdXNlckxpc3QucHVzaCh1c2VyKVxyXG4vLyAgIC8vIFNhdmUgdG8gZmlsZVxyXG4vLyAgIHJlYWRKc29uKFVTRVJfRklMRV9QQVRILCAodXNlckRhdGE6IElVc2VyRHRvW10pOiB2b2lkID0+IHtcclxuLy8gICAgIHVzZXJEYXRhLnB1c2godXNlcilcclxuLy8gICAgIGNvbnN0IGpzb246IHN0cmluZyA9IEpTT04uc3RyaW5naWZ5KHVzZXJEYXRhKVxyXG4vLyAgICAgbG9nZ2VyLmRlYnVnKGpzb24pXHJcbi8vICAgICBmcy53cml0ZUZpbGUoVVNFUl9GSUxFX1BBVEgsIGpzb24sICd1dGY4JywgZXJyID0+IHtcclxuLy8gICAgICAgaWYgKGVycikge1xyXG4vLyAgICAgICAgIGxvZ2dlci5kZWJ1ZyhlcnIpXHJcbi8vICAgICAgICAgcmV0dXJuXHJcbi8vICAgICAgIH1cclxuLy8gICAgICAgbG9nZ2VyLmRlYnVnKGBXcml0ZSB0byAke1VTRVJfRklMRV9QQVRIfWApXHJcbi8vICAgICAgIHJldHVyblxyXG4vLyAgICAgfSlcclxuLy8gICB9KVxyXG4vLyB9XHJcbiIsImltcG9ydCB7IFRZUEVTIH0gZnJvbSAnLi4vLi4vY29uc3RhbnQnXHJcbmltcG9ydCB7IGluamVjdGFibGUsIGluamVjdCB9IGZyb20gJ2ludmVyc2lmeSdcclxuaW1wb3J0IHsgSVByb2plY3RTZXJ2aWNlIH0gZnJvbSAnLi8uLi9JUHJvamVjdFNlcnZpY2UnXHJcbmltcG9ydCB7IHByb3ZpZGUgfSBmcm9tICdpbnZlcnNpZnktYmluZGluZy1kZWNvcmF0b3JzJ1xyXG5cclxuQHByb3ZpZGUoVFlQRVMuUHJvamVjdFNlcnZpY2UpXHJcbmV4cG9ydCBjbGFzcyBQcm9qZWN0U2VydmljZUltcGwgaW1wbGVtZW50cyBJUHJvamVjdFNlcnZpY2Uge1xyXG4gIGdldEFsbCgpOiBhbnlbXSB7XHJcbiAgICByZXR1cm4gW1xyXG4gICAgICB7XHJcbiAgICAgICAgaWQ6IDEsXHJcbiAgICAgICAgbmFtZTogJ3Rlc3QnXHJcbiAgICAgIH1cclxuICAgIF1cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgSVByb2plY3RTZXJ2aWNlIH0gZnJvbSAnLi8uLi9JUHJvamVjdFNlcnZpY2UnXHJcbmltcG9ydCB7IGluamVjdGFibGUsIGluamVjdCB9IGZyb20gJ2ludmVyc2lmeSdcclxuaW1wb3J0IHsgSVVzZXJTZXJ2aWNlIH0gZnJvbSAnLi4vSVVzZXJTZXJ2aWNlJ1xyXG5pbXBvcnQgeyBUWVBFUyB9IGZyb20gJy4uLy4uL2NvbnN0YW50J1xyXG5pbXBvcnQgeyBwcm92aWRlU2luZ2xldG9uLCBwcm92aWRlIH0gZnJvbSAnLi4vLi4vY29yZS9pb2MnXHJcblxyXG4vLyBAaW5qZWN0YWJsZSgpXHJcbi8vIEBwcm92aWRlU2luZ2xldG9uKFRZUEVTLklVc2VyU2VydmljZSlcclxuQHByb3ZpZGUoVFlQRVMuVXNlclNlcnZpY2UpXHJcbi8vIEBpbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFVzZXJTZXJ2aWNlSW1wbCBpbXBsZW1lbnRzIElVc2VyU2VydmljZSB7XHJcbiAgLy8gcHJpdmF0ZSBfcHJvamVjdDogSVByb2plY3RTZXJ2aWNlXHJcblxyXG4gIEBpbmplY3QoVFlQRVMuUHJvamVjdFNlcnZpY2UpXHJcbiAgcHJpdmF0ZSBfcHJvamVjdCE6IElQcm9qZWN0U2VydmljZVxyXG5cclxuICAvLyBwdWJsaWMgY29uc3RydWN0b3IoQGluamVjdChUWVBFUy5JUHJvamVjdFNlcnZpY2UpIHByb2plY3Q6IElQcm9qZWN0U2VydmljZSkge1xyXG4gIC8vICAgdGhpcy5fcHJvamVjdCA9IHByb2plY3RcclxuICAvLyB9XHJcbiAgc2F5SGVsbG8oKTogc3RyaW5nIHtcclxuICAgIHJldHVybiAnSGVsbG8gV29ybGQhJyArIEpTT04uc3RyaW5naWZ5KHRoaXMuX3Byb2plY3QuZ2V0QWxsKCkpXHJcbiAgfVxyXG59XHJcbiIsImV4cG9ydCAqIGZyb20gJy4vUHJvamVjdFNlcnZpY2VJbXBsJ1xyXG5leHBvcnQgKiBmcm9tICcuL1VzZXJTZXJ2aWNlSW1wbCdcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYm9keS1wYXJzZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaW52ZXJzaWZ5XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImludmVyc2lmeS1iaW5kaW5nLWRlY29yYXRvcnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaW52ZXJzaWZ5LWV4cHJlc3MtdXRpbHNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaW52ZXJzaWZ5LWluamVjdC1kZWNvcmF0b3JzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImludmVyc2lmeS1sb2dnZXItbWlkZGxld2FyZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJsb2Rhc2gvZm9yZWFjaFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJsb2c0anNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVmbGVjdC1tZXRhZGF0YVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzb2NrZXQuaW9cIik7Il0sInNvdXJjZVJvb3QiOiIifQ==