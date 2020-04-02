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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
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
    UserController.prototype.create = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _b = (_a = res).send;
                        return [4 /*yield*/, this._userService.create(req.body)];
                    case 1:
                        _b.apply(_a, [_c.sent()]);
                        return [2 /*return*/];
                }
            });
        });
    };
    UserController.prototype.list = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _b = (_a = res).send;
                        return [4 /*yield*/, this._userService.list()];
                    case 1:
                        _b.apply(_a, [_c.sent()]);
                        return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        inversify_express_utils_1.httpPost('/'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", Promise)
    ], UserController.prototype, "create", null);
    __decorate([
        inversify_express_utils_1.httpGet('/'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", Promise)
    ], UserController.prototype, "list", null);
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

/***/ "./src/core/helper/DBHelper.ts":
/*!*************************************!*\
  !*** ./src/core/helper/DBHelper.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
var User_1 = __webpack_require__(/*! ../../model/User */ "./src/model/User.ts");
var Project_1 = __webpack_require__(/*! ../../model/Project */ "./src/model/Project.ts");
var DBProvider = /** @class */ (function () {
    function DBProvider() {
    }
    DBProvider.configure = function (databaseConfiguration) {
        DBProvider.configuration = databaseConfiguration;
    };
    DBProvider.getConnection = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, type, host, port, username, password, database, ssl, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (DBProvider.connection) {
                            return [2 /*return*/, DBProvider.connection];
                        }
                        if (!DBProvider.configuration) {
                            throw new Error('Please configure.');
                        }
                        _a = DBProvider.configuration, type = _a.type, host = _a.host, port = _a.port, username = _a.username, password = _a.password, database = _a.database, ssl = _a.ssl;
                        _b = DBProvider;
                        return [4 /*yield*/, typeorm_1.createConnection({
                                type: type,
                                host: host,
                                port: port,
                                username: username,
                                password: password,
                                database: database,
                                extra: { ssl: ssl },
                                entities: [User_1.User, Project_1.Project],
                                synchronize: true
                            })];
                    case 1:
                        _b.connection = _c.sent();
                        return [2 /*return*/, DBProvider.connection];
                }
            });
        });
    };
    return DBProvider;
}());
exports.DBProvider = DBProvider;


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
var DBHelper_1 = __webpack_require__(/*! ../../helper/DBHelper */ "./src/core/helper/DBHelper.ts");
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
                // DB
                DBHelper_1.DBProvider.configure({
                    type: 'postgres',
                    database: 'app_indoor',
                    username: 'postgres',
                    password: 'root',
                    host: 'localhost',
                    port: 5432
                });
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

/***/ "./src/model/Project.ts":
/*!******************************!*\
  !*** ./src/model/Project.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
var Project = /** @class */ (function (_super) {
    __extends(Project, _super);
    function Project() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], Project.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Project.prototype, "project_name", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Project.prototype, "project_desc", void 0);
    return Project;
}(typeorm_1.BaseEntity));
exports.Project = Project;


/***/ }),

/***/ "./src/model/User.ts":
/*!***************************!*\
  !*** ./src/model/User.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
var User = /** @class */ (function (_super) {
    __extends(User, _super);
    function User() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], User.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], User.prototype, "username", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], User.prototype, "email", void 0);
    __decorate([
        typeorm_1.Column({ nullable: true }),
        __metadata("design:type", Number)
    ], User.prototype, "age", void 0);
    User = __decorate([
        typeorm_1.Entity()
    ], User);
    return User;
}(typeorm_1.BaseEntity));
exports.User = User;
// import { AbstractUser } from "@share/model";
// import { IUserDto } from '../dto'
// export class User extends AbstractUser {
//   id: string
//   name: string
//   constructor(props: IUserDto) {
//     super(props)
//     this.id = props.id
//     this.name = props.name
//   }
//   static create(props: IUserDto) {
//     return new User(Object.assign({}, props, {
//     }))
//   }
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var DBHelper_1 = __webpack_require__(/*! ./../../core/helper/DBHelper */ "./src/core/helper/DBHelper.ts");
var inversify_1 = __webpack_require__(/*! inversify */ "inversify");
var constant_1 = __webpack_require__(/*! ../../constant */ "./src/constant/index.ts");
var ioc_1 = __webpack_require__(/*! ../../core/ioc */ "./src/core/ioc/index.ts");
var User_1 = __webpack_require__(/*! ../../model/User */ "./src/model/User.ts");
// @injectable()
// @provideSingleton(TYPES.IUserService)
var UserServiceImpl = /** @class */ (function () {
    // @injectable()
    function UserServiceImpl() {
    }
    UserServiceImpl.prototype.create = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            var newUser, connection;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        newUser = new User_1.User();
                        newUser.username = user.username;
                        newUser.email = user.email;
                        return [4 /*yield*/, DBHelper_1.DBProvider.getConnection()];
                    case 1:
                        connection = _a.sent();
                        return [4 /*yield*/, connection.getRepository(User_1.User).save(newUser)];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    UserServiceImpl.prototype.list = function () {
        return __awaiter(this, void 0, void 0, function () {
            var connection;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, DBHelper_1.DBProvider.getConnection()];
                    case 1:
                        connection = _a.sent();
                        return [4 /*yield*/, connection.getRepository(User_1.User).find()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
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

/***/ }),

/***/ "typeorm":
/*!**************************!*\
  !*** external "typeorm" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("typeorm");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vLi4vLi4vc2hhcmUvY29uZmlnL2luZGV4LnRzIiwid2VicGFjazovLy8uLy4uLy4uL3NoYXJlL2NvbnN0YW50L0VCYXNlQ29uc3RhbnQudHMiLCJ3ZWJwYWNrOi8vLy4vLi4vLi4vc2hhcmUvY29uc3RhbnQvRXZlbnRzLnRzIiwid2VicGFjazovLy8uLy4uLy4uL3NoYXJlL2NvbnN0YW50L2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9jb25zdGFudC9GaWxlUGF0aC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uc3RhbnQvVHlwZXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnN0YW50L2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9jb250cm9sbGVyL1VzZXJDb250cm9sbGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9jb250cm9sbGVyL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL0FwcGxpY2F0aW9uLnRzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL2V2ZW50L2xpc3RlbmVyL3NvY2tldC9PblNvY2tldFVzZXJMb2dpbkV2ZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL2V2ZW50L21hbmdlci9wcm92aWRlci9Tb2NrZXRJT0V2ZW50TWFuYWdlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9oZWxwZXIvREJIZWxwZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvaW5pdGlhbGl6ZXIvaW1wbC9Db25maWdQcmVCdWlsZEluaXRpYWxpemVyLnRzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL2luaXRpYWxpemVyL2ltcGwvRXZlbk1hbmFnZXJJbml0aWFsaXplci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9pbml0aWFsaXplci9pbXBsL011bHRpcGxlUHJvdmlkZXJzRXZlbnRNYW5hZ2VyLnRzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL2lvYy9JT0MudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvaW9jL0xvYWRlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9pb2MvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9tb2RlbC9Qcm9qZWN0LnRzIiwid2VicGFjazovLy8uL3NyYy9tb2RlbC9Vc2VyLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlL2ltcGwvUHJvamVjdFNlcnZpY2VJbXBsLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlL2ltcGwvVXNlclNlcnZpY2VJbXBsLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlL2ltcGwvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYm9keS1wYXJzZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJpbnZlcnNpZnlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJpbnZlcnNpZnktYmluZGluZy1kZWNvcmF0b3JzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaW52ZXJzaWZ5LWV4cHJlc3MtdXRpbHNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJpbnZlcnNpZnktaW5qZWN0LWRlY29yYXRvcnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJpbnZlcnNpZnktbG9nZ2VyLW1pZGRsZXdhcmVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJsb2Rhc2gvZm9yZWFjaFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImxvZzRqc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZmxlY3QtbWV0YWRhdGFcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzb2NrZXQuaW9cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0eXBlb3JtXCIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFD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Q0FBQyxPQUFPLENBQUM7NEJBQXpELHNCQUFPLFNBQWtEOzs7O0tBQzFEO0lBQ1ksOEJBQUksR0FBakI7Ozs7OzRCQUNxQixxQkFBTSxxQkFBVSxDQUFDLGFBQWEsRUFBRTs7d0JBQTdDLFVBQVUsR0FBRyxTQUFnQzt3QkFDNUMscUJBQU0sVUFBVSxDQUFDLGFBQWEsQ0FBQyxXQUFJLENBQUMsQ0FBQyxJQUFJLEVBQUU7NEJBQWxELHNCQUFPLFNBQTJDOzs7O0tBQ25EO0lBTUQsZ0ZBQWdGO0lBQ2hGLDRCQUE0QjtJQUM1QixJQUFJO0lBQ0osa0NBQVEsR0FBUjtRQUNFLE9BQU8sY0FBYyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNoRSxDQUFDO0lBUEQ7UUFEQyxrQkFBTSxDQUFDLGdCQUFLLENBQUMsY0FBYyxDQUFDOztxREFDSztJQWpCdkIsZUFBZTtRQUYzQixhQUFPLENBQUMsZ0JBQUssQ0FBQyxXQUFXLENBQUM7UUFDM0IsZ0JBQWdCO09BQ0gsZUFBZSxDQXlCM0I7SUFBRCxzQkFBQztDQUFBO0FBekJZLDBDQUFlOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNaNUIsc0dBQW9DO0FBQ3BDLGdHQUFpQzs7Ozs7Ozs7Ozs7O0FDRGpDLHdDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLHlEOzs7Ozs7Ozs7OztBQ0FBLG9EOzs7Ozs7Ozs7OztBQ0FBLHdEOzs7Ozs7Ozs7OztBQ0FBLHdEOzs7Ozs7Ozs7OztBQ0FBLDJDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLDZDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLG9DIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LnRzXCIpO1xuIiwiY29uc3QgbG9jYWxvaHN0ID0gJ2h0dHA6Ly9sb2NhbGhvc3QnXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBQT1JUOiBwcm9jZXNzLmVudi5QT1JULFxyXG4gIFNPQ0tFVElPX1NFUlZFUl9QT1JUOiBwcm9jZXNzLmVudi5TT0NLRVRJT19TRVJWRVJfUE9SVCxcclxuICBob3N0OiBgJHtsb2NhbG9oc3R9OiR7cHJvY2Vzcy5lbnYuUE9SVH1gLFxyXG4gIEFQUF9JTkRPT1JfUE9SVDogcHJvY2Vzcy5lbnYuQVBQX0lORE9PUl9QT1JULFxyXG4gIGFwcEluZG9vckhvc3Q6IGAke2xvY2Fsb2hzdH06JHtwcm9jZXNzLmVudi5BUFBfSU5ET09SX1BPUlR9YCxcclxuICBzb2NrZUlPVXJsOiBgJHtsb2NhbG9oc3R9OiR7cHJvY2Vzcy5lbnYuU09DS0VUSU9fU0VSVkVSX1BPUlR9L3NvY2tlLmlvL2AsXHJcbiAgQVBQX0lORE9PUl9TVEFUSUNfRklMRTogcHJvY2Vzcy5lbnYuQVBQX0lORE9PUl9TVEFUSUNfRklMRVxyXG59XHJcbiIsImV4cG9ydCBlbnVtIEVVc2VyU3RhdHVzIHtcclxuICBTSUdOX1VQID0gMSxcclxuICBMT0dfSU4gPSAyLFxyXG4gIExPR19PVVQgPSAzXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIEVQcm9qZWN0U3RhdHVzIHtcclxuICBQUk9KRUNUX05FVyA9IDEsXHJcbiAgUFJPSkVDVF9MSVNUID0gMixcclxuICBQUk9KRUNUX0VESVQgPSAzLFxyXG4gIFBST0pFQ1RfREVMID0gNFxyXG59XHJcbiIsImV4cG9ydCBjb25zdCBFVkVOVF9UWVBFUyA9IHtcclxuICBkb21haW46ICdET01BSU4uRVZFTlQnLFxyXG4gIHNvY2tldDogJ1NPQ0tFVC5FVkVOVCdcclxufVxyXG5cclxuZXhwb3J0IGVudW0gRVVzZXJFdmVudCB7XHJcbiAgU0lOR19VUCA9ICdTSU5HX1VQLlNPQ0tFVC5FVkVOVCcsXHJcbiAgTE9HX0lOID0gJ0xPR19JTi5TT0NLRVQuRVZFTlQnLFxyXG4gIExPR19PVVQgPSAnTE9HX09VVC5TT0NLRVQuRVZFTlQnLFxyXG4gIExHR19TVUNDRVNTID0gJ0xHR19TVUNDRVMuU09DS0VULkVWRU5UJ1xyXG59XHJcblxyXG5leHBvcnQgZW51bSBFUHJvamVjdEV2ZW50IHtcclxuICBBRERfUFJPSkVDVCA9ICdBRERfUFJPSkVDVC5TT0NLRVQuRVZFTlQnLFxyXG4gIExJU1RfUFJPSkVDVCA9ICdMSVNUX1BST0pFQ1QuU09DS0VULkVWRU5UJyxcclxuICBVUERBVEVfUFJPSkVDVCA9ICdVUERBVEVfUFJPSkVDVC5TT0NLRVQuRVZFTlQnLFxyXG4gIERFTF9QUk9KRUNUID0gJ0RFTF9QUk9KRUNULlNPQ0tFVC5FVkVOVCdcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEVWRU5UUyA9IHsgLi4uRVVzZXJFdmVudCwgLi4uRVByb2plY3RFdmVudCB9XHJcbiIsImV4cG9ydCAqIGZyb20gJy4vRUJhc2VDb25zdGFudCdcclxuZXhwb3J0ICogZnJvbSAnLi9FdmVudHMnXHJcbiIsImV4cG9ydCBjb25zdCBVU0VSX0ZJTEVfUEFUSDogc3RyaW5nID0gJy4vdXNlci5qc29uJyIsImxldCBUWVBFUyA9IHtcclxuICBBcHBsaWNhdGlvbjogU3ltYm9sKCdBcHBsaWNhdGlvbicpLFxyXG4gIFNvY2tldElPOiBTeW1ib2woJ1NvY2tldElPLlNlcnZlcicpLFxyXG4gIFByZUJ1aWxkSW5pdGlhbGl6ZXI6IFN5bWJvbCgnUHJlQnVpbGRJbml0aWFsaXplcicpLFxyXG4gIFBvc3RJbnN0YW50aWF0ZUluaXRpYWxpemVyOiBTeW1ib2woJ1Bvc3RJbnN0YW50aWF0ZUluaXRpYWxpemVyJyksXHJcbiAgSUV2ZW50TWFuYWdlcjogU3ltYm9sKCdJRXZlbnRNYW5hZ2VyJyksXHJcbiAgSUV2ZW50TGlzdGVuZXI6IFN5bWJvbCgnSUV2ZW50TGlzdGVuZXInKSxcclxuICBJRXZlbnRNYW5hZ2VyUHJvdmlkZXI6IFN5bWJvbCgnSUV2ZW50TWFuYWdlclByb3ZpZGVyJyksXHJcbiAgVXNlclNlcnZpY2U6IFN5bWJvbCgnVXNlclNlcnZpY2UnKSxcclxuICBQcm9qZWN0U2VydmljZTogU3ltYm9sKCdQcm9qZWN0U2VydmljZScpXHJcbn1cclxuXHJcbmV4cG9ydCB7IFRZUEVTIH1cclxuIiwiZXhwb3J0ICogZnJvbSAnLi9GaWxlUGF0aCdcclxuZXhwb3J0ICogZnJvbSAnLi9UeXBlcydcclxuIiwiaW1wb3J0IHsgVXNlclNlcnZpY2VJbXBsIH0gZnJvbSAnLi8uLi9zZXJ2aWNlL2ltcGwvVXNlclNlcnZpY2VJbXBsJ1xyXG5pbXBvcnQgeyBwcm92aWRlLCBpbmplY3QsIHByb3ZpZGVOYW1lZCB9IGZyb20gJy4uL2NvcmUvaW9jJ1xyXG5pbXBvcnQgeyBUWVBFUyB9IGZyb20gJy4uL2NvbnN0YW50J1xyXG5pbXBvcnQge1xyXG4gIGNvbnRyb2xsZXIsXHJcbiAgaHR0cEdldCxcclxuICBpbnRlcmZhY2VzLFxyXG4gIFRZUEUsXHJcbiAgaHR0cFBvc3RcclxufSBmcm9tICdpbnZlcnNpZnktZXhwcmVzcy11dGlscydcclxuaW1wb3J0IHsgSVVzZXJTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZSdcclxuaW1wb3J0IHsgUmVxdWVzdCwgUmVzcG9uc2UgfSBmcm9tICdleHByZXNzJ1xyXG5cclxuLy8gQHByb3ZpZGUoVFlQRVMuSVVzZXJTZXJ2aWNlLCB0cnVlKVxyXG4vLyBAcHJvdmlkZU5hbWVkKFRZUEUuQ29udHJvbGxlciwgJ1VzZXJDb250cm9sbGVyJylcclxuQGNvbnRyb2xsZXIoJy91c2VyJylcclxuZXhwb3J0IGNsYXNzIFVzZXJDb250cm9sbGVyIGltcGxlbWVudHMgaW50ZXJmYWNlcy5Db250cm9sbGVyIHtcclxuICAvLyBAaW5qZWN0KFRZUEVTLlVzZXJTZXJ2aWNlKVxyXG4gIC8vIHByaXZhdGUgX3VzZXJTZXJ2aWNlITogSVVzZXJTZXJ2aWNlXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBAaW5qZWN0KFRZUEVTLlVzZXJTZXJ2aWNlKSBwcml2YXRlIF91c2VyU2VydmljZTogVXNlclNlcnZpY2VJbXBsXHJcbiAgKSB7fVxyXG5cclxuICBAaHR0cFBvc3QoJy8nKVxyXG4gIHByaXZhdGUgYXN5bmMgY3JlYXRlKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgcmVzLnNlbmQoYXdhaXQgdGhpcy5fdXNlclNlcnZpY2UuY3JlYXRlKHJlcS5ib2R5KSlcclxuICB9XHJcblxyXG4gIEBodHRwR2V0KCcvJylcclxuICBwdWJsaWMgYXN5bmMgbGlzdChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIHJlcy5zZW5kKGF3YWl0IHRoaXMuX3VzZXJTZXJ2aWNlLmxpc3QoKSlcclxuICB9XHJcbn1cclxuIiwiZXhwb3J0ICogZnJvbSAnLi9Vc2VyQ29udHJvbGxlcidcclxuIiwiaW1wb3J0IHsgcHJvdmlkZSB9IGZyb20gJ2ludmVyc2lmeS1iaW5kaW5nLWRlY29yYXRvcnMnXHJcbmltcG9ydCB7IElQb3N0SW5zdGFudGlhdGVJbml0aWFsaXplciB9IGZyb20gJy4vaW5pdGlhbGl6ZXIvSVBvc3RJbnN0YW50aWF0ZUluaXRpYWxpemVyJ1xyXG5pbXBvcnQgeyBUWVBFUyB9IGZyb20gJy4uL2NvbnN0YW50J1xyXG5pbXBvcnQgeyBJUHJlQnVpbGRJbml0aWFsaXplciB9IGZyb20gJy4vaW5pdGlhbGl6ZXIvSVByZUJ1aWxkSW5pdGlhbGl6ZXInXHJcbmltcG9ydCBodHRwIGZyb20gJ2h0dHAnXHJcbmltcG9ydCB7IEludmVyc2lmeUV4cHJlc3NTZXJ2ZXIgfSBmcm9tICdpbnZlcnNpZnktZXhwcmVzcy11dGlscydcclxuaW1wb3J0IHsgbXVsdGlJbmplY3QsIGludGVyZmFjZXMgYXMgaW52ZXJzaWZ5SW50ZXJmYWNlcyB9IGZyb20gJ2ludmVyc2lmeSdcclxuaW1wb3J0IHNoYXJlQ29uZmlnIGZyb20gJ0BzaGFyZS9jb25maWcnXHJcbmltcG9ydCBleHByZXNzIGZyb20gJ2V4cHJlc3MnXHJcbmltcG9ydCBpbyBmcm9tICdzb2NrZXQuaW8nXHJcbmltcG9ydCB7IHByb3ZpZGVTaW5nbGV0b24gfSBmcm9tICcuL2lvYydcclxuXHJcbkBwcm92aWRlU2luZ2xldG9uKFRZUEVTLkFwcGxpY2F0aW9uKVxyXG5leHBvcnQgY2xhc3MgQXBwbGljYXRpb24ge1xyXG4gIHByaXZhdGUgX2V4cHJlc3MhOiBJbnZlcnNpZnlFeHByZXNzU2VydmVyXHJcbiAgcHJpdmF0ZSBfaHR0cFNlcnZlciE6IGh0dHAuU2VydmVyXHJcbiAgcHJpdmF0ZSBfcHJlQnVpbGRJbml0aWFsaXplcnM6IElQcmVCdWlsZEluaXRpYWxpemVyW11cclxuICBwcml2YXRlIF9wb3N0SW5zdGFudGlhdGVJbml0aWFsaXplcnMhOiBJUG9zdEluc3RhbnRpYXRlSW5pdGlhbGl6ZXJbXVxyXG4gIHByaXZhdGUgX2FwcCE6IGV4cHJlc3MuQXBwbGljYXRpb25cclxuXHJcbiAgcHVibGljIGNvbnN0cnVjdG9yKFxyXG4gICAgQG11bHRpSW5qZWN0KFRZUEVTLlByZUJ1aWxkSW5pdGlhbGl6ZXIpXHJcbiAgICBwcmVCdWlsZEluaXRpYWxpemVyczogSVByZUJ1aWxkSW5pdGlhbGl6ZXJbXVxyXG4gICkge1xyXG4gICAgdGhpcy5fcHJlQnVpbGRJbml0aWFsaXplcnMgPSBwcmVCdWlsZEluaXRpYWxpemVyc1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldEV4cHJlc3MoZXhwcmVzczogSW52ZXJzaWZ5RXhwcmVzc1NlcnZlcikge1xyXG4gICAgdGhpcy5fZXhwcmVzcyA9IGV4cHJlc3NcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRIdHRwU2VydmVyKCk6IGh0dHAuU2VydmVyIHtcclxuICAgIHJldHVybiB0aGlzLl9odHRwU2VydmVyXHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcnVuKGNvbnRhaW5lcjogaW52ZXJzaWZ5SW50ZXJmYWNlcy5Db250YWluZXIpOiB2b2lkIHtcclxuICAgIHRoaXMucHJlQnVpbGRJbml0KHRoaXMuX2V4cHJlc3MpXHJcbiAgICAgIC50aGVuKCgpID0+IHRoaXMuaW5zdGFudGlhdGUoY29udGFpbmVyKSlcclxuICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuX3Bvc3RJbnN0YW50aWF0ZUluaXRpYWxpemVycyA9IGNvbnRhaW5lci5nZXRBbGw8XHJcbiAgICAgICAgICBJUG9zdEluc3RhbnRpYXRlSW5pdGlhbGl6ZXJcclxuICAgICAgICA+KFRZUEVTLlBvc3RJbnN0YW50aWF0ZUluaXRpYWxpemVyKVxyXG4gICAgICB9KVxyXG4gICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5wb3N0SW5pdGlhbGl6ZWQoKVxyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycjogRXJyb3IpID0+IGNvbnNvbGUubG9nKGVycikpXHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgaW5zdGFudGlhdGUoXHJcbiAgICBjb250YWluZXI6IGludmVyc2lmeUludGVyZmFjZXMuQ29udGFpbmVyXHJcbiAgKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2U8dm9pZD4ocmVzb2x2ZSA9PiB7XHJcbiAgICAgIHRoaXMuX2FwcCA9IHRoaXMuX2V4cHJlc3MuYnVpbGQoKVxyXG4gICAgICBjb25zdCBwb3J0ID0gc2hhcmVDb25maWcuU09DS0VUSU9fU0VSVkVSX1BPUlRcclxuXHJcbiAgICAgIHRoaXMuX2h0dHBTZXJ2ZXIgPSB0aGlzLl9hcHAubGlzdGVuKHBvcnQsICgpID0+XHJcbiAgICAgICAgY29uc29sZS5sb2coYFNlcnZlciBzdGFydGVkIGF0IHBvcnQ6ICR7cG9ydH1gKVxyXG4gICAgICApXHJcblxyXG4gICAgICBjb25zdCBzb2NrZXRJTzogU29ja2V0SU8uU2VydmVyID0gaW8odGhpcy5nZXRIdHRwU2VydmVyKCkpXHJcbiAgICAgIGNvbnRhaW5lci5iaW5kPFNvY2tldElPLlNlcnZlcj4oVFlQRVMuU29ja2V0SU8pLnRvQ29uc3RhbnRWYWx1ZShzb2NrZXRJTylcclxuICAgICAgcmVzb2x2ZSgpXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIHByZUJ1aWxkSW5pdChleHByZXNzOiBJbnZlcnNpZnlFeHByZXNzU2VydmVyKTogUHJvbWlzZTx2b2lkW10+IHtcclxuICAgIHJldHVybiBQcm9taXNlLmFsbChcclxuICAgICAgdGhpcy5fcHJlQnVpbGRJbml0aWFsaXplcnMubWFwKChpbml0aWFsaXplcjogSVByZUJ1aWxkSW5pdGlhbGl6ZXIpID0+XHJcbiAgICAgICAgaW5pdGlhbGl6ZXIuYXBwbHlUbyhleHByZXNzKVxyXG4gICAgICApXHJcbiAgICApXHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgcG9zdEluaXRpYWxpemVkKCk6IFByb21pc2U8dm9pZFtdPiB7XHJcbiAgICByZXR1cm4gUHJvbWlzZS5hbGwoXHJcbiAgICAgIHRoaXMuX3Bvc3RJbnN0YW50aWF0ZUluaXRpYWxpemVycy5tYXAoXHJcbiAgICAgICAgKGluaXRpYWxpemVyOiBJUG9zdEluc3RhbnRpYXRlSW5pdGlhbGl6ZXIpID0+XHJcbiAgICAgICAgICBpbml0aWFsaXplci5hcHBseVRvKHRoaXMuX2h0dHBTZXJ2ZXIpXHJcbiAgICAgIClcclxuICAgIClcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgYWN0aW9uIH0gZnJvbSAndHlwZXNhZmUtYWN0aW9ucydcclxuaW1wb3J0IHsgSUV2ZW50TGlzdGVuZXIgfSBmcm9tICcuLi8uLi9tYW5nZXIvSUV2ZW50TGlzdGVuZXInXHJcbmltcG9ydCB7IHByb3ZpZGVOYW1lZCwgcHJvdmlkZSB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvaW9jJ1xyXG5pbXBvcnQgeyBUWVBFUyB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbnN0YW50J1xyXG5pbXBvcnQgeyBBY3Rpb25zIH0gZnJvbSAnQHNoYXJlL2FjdGlvbidcclxuaW1wb3J0IHsgRVVzZXJFdmVudCwgRVZFTlRfVFlQRVMgfSBmcm9tICdAc2hhcmUvY29uc3RhbnQnXHJcblxyXG4vLyBAcHJvdmlkZU5hbWVkKFRZUEVTLklFdmVudExpc3RlbmVyLCBFVkVOVF9OQU1FX01BUC5vblNvY2tldFVzZXJMb2dpbilcclxuQHByb3ZpZGUoVFlQRVMuSUV2ZW50TGlzdGVuZXIpXHJcbmV4cG9ydCBjbGFzcyBPblNvY2tldFVzZXJMb2dpbkV2ZW50IGltcGxlbWVudHMgSUV2ZW50TGlzdGVuZXIge1xyXG4gIHR5cGUoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiBFVkVOVF9UWVBFUy5zb2NrZXRcclxuICB9XHJcbiAgbmFtZSgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIEVVc2VyRXZlbnQuTE9HX0lOXHJcbiAgfVxyXG4gIGhhbmRsZXJzKCk6IEZ1bmN0aW9uW10ge1xyXG4gICAgcmV0dXJuIFtcclxuICAgICAgKGFjdGlvbjogQWN0aW9ucykgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGFjdGlvbilcclxuICAgICAgfVxyXG4gICAgXVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBUQUdTIH0gZnJvbSAnLi8uLi8uLi8uLi8uLi9jb25zdGFudC9UYWdzJ1xyXG5pbXBvcnQgeyBJRXZlbnRMaXN0ZW5lciB9IGZyb20gJy4uL0lFdmVudExpc3RlbmVyJ1xyXG5pbXBvcnQgeyBFVkVOVF9UWVBFUyB9IGZyb20gJ0BzaGFyZS9jb25zdGFudCdcclxuaW1wb3J0IHsgSUV2ZW50TWFuYWdlclByb3ZpZGVyIH0gZnJvbSAnLi4vSUV2ZW50TWFuYWdlcidcclxuaW1wb3J0IHsgVFlQRVMgfSBmcm9tICcuLi8uLi8uLi8uLi9jb25zdGFudCdcclxuaW1wb3J0IHtcclxuICBwcm92aWRlTmFtZWRTaW5nbGV0b24sXHJcbiAgaW5qZWN0LFxyXG4gIHByb3ZpZGVTaW5nbGV0b25cclxufSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL2lvYydcclxuXHJcbi8vIEBwcm92aWRlTmFtZWRTaW5nbGV0b24oXHJcbi8vICAgVFlQRVMuSUV2ZW50TWFuYWdlclByb3ZpZGVyLFxyXG4vLyAgIFRBR1MuU29ja2V0RXZlbnRNYW5hZ2VyUHJvdmlkZXJcclxuLy8gKVxyXG5AcHJvdmlkZVNpbmdsZXRvbihUWVBFUy5JRXZlbnRNYW5hZ2VyUHJvdmlkZXIpXHJcbmV4cG9ydCBjbGFzcyBTb2NrZXRJT0V2ZW50TWFuYWdlciBpbXBsZW1lbnRzIElFdmVudE1hbmFnZXJQcm92aWRlciB7XHJcbiAgcHJvdGVjdGVkIF9zb2NrZXRTZXJ2ZXI6IFNvY2tldElPLlNlcnZlclxyXG4gIHByb3RlY3RlZCBfc29ja2V0ITogU29ja2V0SU8uU29ja2V0XHJcblxyXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihAaW5qZWN0KFRZUEVTLlNvY2tldElPKSBzb2NrZXRTZXJ2ZXI6IFNvY2tldElPLlNlcnZlcikge1xyXG4gICAgdGhpcy5fc29ja2V0U2VydmVyID0gc29ja2V0U2VydmVyXHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2V0IHNvY2tldChzb2NrZXQ6IFNvY2tldElPLlNvY2tldCkge1xyXG4gICAgdGhpcy5fc29ja2V0ID0gc29ja2V0XHJcbiAgfVxyXG4gIHR5cGUoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiBFVkVOVF9UWVBFUy5zb2NrZXRcclxuICB9XHJcbiAgZW1pdChldmVudDogaW1wb3J0KCcuLi9JRXZlbnQnKS5JRXZlbnQpOiB2b2lkIHtcclxuICAgIHRoaXMuX3NvY2tldFNlcnZlci5lbWl0KGV2ZW50Lm5hbWUoKSwgZXZlbnQuZGF0YSgpKVxyXG4gIH1cclxuICBvbihldmVudE5hbWU6IHN0cmluZywgY2FsbGJhY2s6IEZ1bmN0aW9uKTogdm9pZCB7XHJcbiAgICAvLyB0aGlzLl9zb2NrZXRTZXJ2ZXIub24oZXZlbnROYW1lLCBjYWxsYmFjaylcclxuICB9XHJcblxyXG4gIHB1YmxpYyBpbml0U29ja2V0TGlzdGVuZXIoXHJcbiAgICBzb2NrZXQ6IFNvY2tldElPLlNvY2tldCxcclxuICAgIGV2ZW50TGlzdGVuZXJzOiBJRXZlbnRMaXN0ZW5lcltdXHJcbiAgKTogdm9pZCB7XHJcbiAgICBldmVudExpc3RlbmVyc1xyXG4gICAgICAuZmlsdGVyKFxyXG4gICAgICAgIChldmVudExpc3RlbmVyOiBJRXZlbnRMaXN0ZW5lcikgPT4gZXZlbnRMaXN0ZW5lci50eXBlKCkgPT09IHRoaXMudHlwZSgpXHJcbiAgICAgIClcclxuICAgICAgLmZvckVhY2goKGV2ZW50TGlzdGVuZXI6IElFdmVudExpc3RlbmVyKSA9PlxyXG4gICAgICAgIGV2ZW50TGlzdGVuZXIuaGFuZGxlcnMoKS5mb3JFYWNoKChldmVudEhhbmRlcjogRnVuY3Rpb24pID0+XHJcbiAgICAgICAgICAoKGhhbmRlcjogRnVuY3Rpb24pID0+IHtcclxuICAgICAgICAgICAgc29ja2V0Lm9uKGV2ZW50TGlzdGVuZXIubmFtZSgpLCAoYWN0aW9uOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAvLyBoYW5kZXIuYXBwbHkobnVsbCwgcGF5bG9hZClcclxuICAgICAgICAgICAgICBoYW5kZXIoYWN0aW9uKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgfSkoZXZlbnRIYW5kZXIpXHJcbiAgICAgICAgKVxyXG4gICAgICApXHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbm5lY3Rpb24sIGNyZWF0ZUNvbm5lY3Rpb24gfSBmcm9tICd0eXBlb3JtJ1xyXG5cclxuaW1wb3J0IHsgVXNlciB9IGZyb20gJy4uLy4uL21vZGVsL1VzZXInXHJcbmltcG9ydCB7IFByb2plY3QgfSBmcm9tICcuLi8uLi9tb2RlbC9Qcm9qZWN0J1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBEQkNvbmZpZ3VyYXRpb24ge1xyXG4gIHR5cGU6ICdwb3N0Z3JlcycgfCAnbXlzcWwnIHwgJ21vbmdvZGInXHJcbiAgaG9zdDogc3RyaW5nXHJcbiAgcG9ydDogbnVtYmVyXHJcbiAgdXNlcm5hbWU6IHN0cmluZ1xyXG4gIHBhc3N3b3JkOiBzdHJpbmdcclxuICBkYXRhYmFzZTogc3RyaW5nXHJcbiAgc3NsPzogYm9vbGVhblxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgREJQcm92aWRlciB7XHJcbiAgcHJpdmF0ZSBzdGF0aWMgY29ubmVjdGlvbjogQ29ubmVjdGlvblxyXG4gIHByaXZhdGUgc3RhdGljIGNvbmZpZ3VyYXRpb246IERCQ29uZmlndXJhdGlvblxyXG5cclxuICBwdWJsaWMgc3RhdGljIGNvbmZpZ3VyZShkYXRhYmFzZUNvbmZpZ3VyYXRpb246IERCQ29uZmlndXJhdGlvbik6IHZvaWQge1xyXG4gICAgREJQcm92aWRlci5jb25maWd1cmF0aW9uID0gZGF0YWJhc2VDb25maWd1cmF0aW9uXHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGFzeW5jIGdldENvbm5lY3Rpb24oKTogUHJvbWlzZTxDb25uZWN0aW9uPiB7XHJcbiAgICBpZiAoREJQcm92aWRlci5jb25uZWN0aW9uKSB7XHJcbiAgICAgIHJldHVybiBEQlByb3ZpZGVyLmNvbm5lY3Rpb25cclxuICAgIH1cclxuXHJcbiAgICBpZiAoIURCUHJvdmlkZXIuY29uZmlndXJhdGlvbikge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1BsZWFzZSBjb25maWd1cmUuJylcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB7XHJcbiAgICAgIHR5cGUsXHJcbiAgICAgIGhvc3QsXHJcbiAgICAgIHBvcnQsXHJcbiAgICAgIHVzZXJuYW1lLFxyXG4gICAgICBwYXNzd29yZCxcclxuICAgICAgZGF0YWJhc2UsXHJcbiAgICAgIHNzbFxyXG4gICAgfSA9IERCUHJvdmlkZXIuY29uZmlndXJhdGlvblxyXG5cclxuICAgIERCUHJvdmlkZXIuY29ubmVjdGlvbiA9IGF3YWl0IGNyZWF0ZUNvbm5lY3Rpb24oe1xyXG4gICAgICB0eXBlLFxyXG4gICAgICBob3N0LFxyXG4gICAgICBwb3J0LFxyXG4gICAgICB1c2VybmFtZSxcclxuICAgICAgcGFzc3dvcmQsXHJcbiAgICAgIGRhdGFiYXNlLFxyXG4gICAgICBleHRyYTogeyBzc2wgfSxcclxuICAgICAgZW50aXRpZXM6IFtVc2VyLCBQcm9qZWN0XSxcclxuICAgICAgc3luY2hyb25pemU6IHRydWVcclxuICAgIH0pXHJcblxyXG4gICAgcmV0dXJuIERCUHJvdmlkZXIuY29ubmVjdGlvblxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBwcm92aWRlU2luZ2xldG9uIH0gZnJvbSAnLi4vLi4vaW9jJ1xyXG5pbXBvcnQgeyBJUHJlQnVpbGRJbml0aWFsaXplciB9IGZyb20gJy4uL0lQcmVCdWlsZEluaXRpYWxpemVyJ1xyXG5pbXBvcnQgeyBJbnZlcnNpZnlFeHByZXNzU2VydmVyIH0gZnJvbSAnaW52ZXJzaWZ5LWV4cHJlc3MtdXRpbHMnXHJcbmltcG9ydCBleHByZXNzIGZyb20gJ2V4cHJlc3MnXHJcbmltcG9ydCBib2R5UGFyc2VyIGZyb20gJ2JvZHktcGFyc2VyJ1xyXG5pbXBvcnQgeyBUWVBFUyB9IGZyb20gJy4uLy4uLy4uL2NvbnN0YW50J1xyXG5pbXBvcnQgc2hhcmVDb25maWcgZnJvbSAnQHNoYXJlL2NvbmZpZydcclxuaW1wb3J0IHsgREJQcm92aWRlciB9IGZyb20gJy4uLy4uL2hlbHBlci9EQkhlbHBlcidcclxuXHJcbkBwcm92aWRlU2luZ2xldG9uKFRZUEVTLlByZUJ1aWxkSW5pdGlhbGl6ZXIpXHJcbmV4cG9ydCBjbGFzcyBDb25maWdQcmVCdWlsZEluaXRpYWxpemVyIGltcGxlbWVudHMgSVByZUJ1aWxkSW5pdGlhbGl6ZXIge1xyXG4gIGFwcGx5VG8oZXhwcmVzc1NlcnZlcjogSW52ZXJzaWZ5RXhwcmVzc1NlcnZlcik6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPHZvaWQ+KHJlc29sdmUgPT4ge1xyXG4gICAgICBleHByZXNzU2VydmVyLnNldENvbmZpZygoYXBwOiBleHByZXNzLkFwcGxpY2F0aW9uKSA9PiB7XHJcbiAgICAgICAgYXBwLnVzZShib2R5UGFyc2VyLnVybGVuY29kZWQoeyBleHRlbmRlZDogdHJ1ZSB9KSlcclxuICAgICAgICBhcHAudXNlKGJvZHlQYXJzZXIuanNvbigpKVxyXG4gICAgICAgIC8vIFdlYnBhY2stRGV2LVNlcnZlclxyXG4gICAgICAgIC8vIGFwcC51c2UoXHJcbiAgICAgICAgLy8gICAnLycsXHJcbiAgICAgICAgLy8gICBleHByZXNzLnN0YXRpYyhzaGFyZUNvbmZpZy5BUFBfSU5ET09SX1NUQVRJQ19GSUxFIGFzIHN0cmluZylcclxuICAgICAgICAvLyApXHJcblxyXG4gICAgICAgIC8vIERCXHJcbiAgICAgICAgREJQcm92aWRlci5jb25maWd1cmUoe1xyXG4gICAgICAgICAgdHlwZTogJ3Bvc3RncmVzJyxcclxuICAgICAgICAgIGRhdGFiYXNlOiAnYXBwX2luZG9vcicsXHJcbiAgICAgICAgICB1c2VybmFtZTogJ3Bvc3RncmVzJyxcclxuICAgICAgICAgIHBhc3N3b3JkOiAncm9vdCcsXHJcbiAgICAgICAgICBob3N0OiAnbG9jYWxob3N0JyxcclxuICAgICAgICAgIHBvcnQ6IDU0MzJcclxuICAgICAgICB9KVxyXG4gICAgICB9KVxyXG4gICAgICByZXNvbHZlKClcclxuICAgIH0pXHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IFRBR1MgfSBmcm9tICcuLy4uLy4uLy4uL2NvbnN0YW50L1RhZ3MnXHJcbmltcG9ydCB7IFNvY2tldElPRXZlbnRNYW5hZ2VyIH0gZnJvbSAnLi8uLi8uLi9ldmVudC9tYW5nZXIvcHJvdmlkZXIvU29ja2V0SU9FdmVudE1hbmFnZXInXHJcbmltcG9ydCB7IEVWRU5UX1RZUEVTIH0gZnJvbSAnQHNoYXJlL2NvbnN0YW50J1xyXG5pbXBvcnQgeyBJRXZlbnRMaXN0ZW5lciB9IGZyb20gJy4vLi4vLi4vZXZlbnQvbWFuZ2VyL0lFdmVudExpc3RlbmVyJ1xyXG5pbXBvcnQge1xyXG4gIElFdmVudE1hbmFnZXIsXHJcbiAgSUV2ZW50TWFuYWdlclByb3ZpZGVyXHJcbn0gZnJvbSAnLi8uLi8uLi9ldmVudC9tYW5nZXIvSUV2ZW50TWFuYWdlcidcclxuaW1wb3J0IHsgSVBvc3RJbnN0YW50aWF0ZUluaXRpYWxpemVyIH0gZnJvbSAnLi4vSVBvc3RJbnN0YW50aWF0ZUluaXRpYWxpemVyJ1xyXG5pbXBvcnQgeyBpbmplY3QgfSBmcm9tICdpbnZlcnNpZnknXHJcbmltcG9ydCB7IFRZUEVTIH0gZnJvbSAnLi4vLi4vLi4vY29uc3RhbnQnXHJcbmltcG9ydCB7XHJcbiAgcHJvdmlkZVNpbmdsZXRvbixcclxuICBtdWx0aUluamVjdCxcclxuICBuYW1lZCxcclxuICBsYXp5TXVsdGlJbmplY3RcclxufSBmcm9tICcuLi8uLi9pb2MnXHJcblxyXG5AcHJvdmlkZVNpbmdsZXRvbihUWVBFUy5Qb3N0SW5zdGFudGlhdGVJbml0aWFsaXplcilcclxuZXhwb3J0IGNsYXNzIEV2ZW5NYW5hZ2VySW5pdGlhbGl6ZXIgaW1wbGVtZW50cyBJUG9zdEluc3RhbnRpYXRlSW5pdGlhbGl6ZXIge1xyXG4gIC8vIEBtdWx0aUluamVjdChUWVBFUy5JRXZlbnRNYW5hZ2VyUHJvdmlkZXIpIHB1YmxpYyBfZXZlbnRNYW5hZ2VyOiBJRXZlbnRNYW5hZ2VyXHJcbiAgLy8gQGxhenlNdWx0aUluamVjdChUWVBFUy5JRXZlbnRNYW5hZ2VyUHJvdmlkZXIpXHJcbiAgLy8gcHJpdmF0ZSBfZXZlbnRNYW5hZ2VyOiBJRXZlbnRNYW5hZ2VyXHJcbiAgcHJpdmF0ZSBfZXZlbnRNYW5hZ2VyOiBJRXZlbnRNYW5hZ2VyXHJcbiAgcHJpdmF0ZSBfZXZlbnRQcm92aWRlcnMhOiBJRXZlbnRNYW5hZ2VyUHJvdmlkZXJbXVxyXG4gIHByaXZhdGUgX2V2ZW50TGlzdGVuZXJzOiBJRXZlbnRMaXN0ZW5lcltdXHJcbiAgcHJpdmF0ZSBfc29ja2V0SU86IFNvY2tldElPLlNlcnZlclxyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIEBpbmplY3QoVFlQRVMuSUV2ZW50TWFuYWdlcikgZXZlbnRNYW5hZ2VyOiBJRXZlbnRNYW5hZ2VyLFxyXG4gICAgLy8gc2luZ2xlIGluamVjdFxyXG4gICAgLy8gQGluamVjdChUWVBFUy5JRXZlbnRNYW5hZ2VyUHJvdmlkZXIpXHJcbiAgICAvLyBAbmFtZWQoVEFHUy5Tb2NrZXRFdmVudE1hbmFnZXJQcm92aWRlcilcclxuICAgIC8vIGV2ZW50UHJvdmlkZXJzOiBJRXZlbnRNYW5hZ2VyUHJvdmlkZXJbXSxcclxuICAgIC8vIGludmVyc2lmeS1pbmplY3QtZGVjb3JhdG9yc1xyXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2ludmVyc2lmeS9JbnZlcnNpZnlKUy9pc3N1ZXMvMzQyXHJcbiAgICBAbXVsdGlJbmplY3QoVFlQRVMuSUV2ZW50TWFuYWdlclByb3ZpZGVyKVxyXG4gICAgZXZlbnRQcm92aWRlcnM6IElFdmVudE1hbmFnZXJQcm92aWRlcltdLFxyXG4gICAgQG11bHRpSW5qZWN0KFRZUEVTLklFdmVudExpc3RlbmVyKSBldmVudExpc3RlbmVyczogSUV2ZW50TGlzdGVuZXJbXSxcclxuICAgIEBpbmplY3QoVFlQRVMuU29ja2V0SU8pIHNvY2tldElPOiBTb2NrZXRJTy5TZXJ2ZXJcclxuICApIHtcclxuICAgIHRoaXMuX2V2ZW50TWFuYWdlciA9IGV2ZW50TWFuYWdlclxyXG4gICAgdGhpcy5fZXZlbnRQcm92aWRlcnMgPSBldmVudFByb3ZpZGVyc1xyXG4gICAgdGhpcy5fZXZlbnRMaXN0ZW5lcnMgPSBldmVudExpc3RlbmVyc1xyXG4gICAgdGhpcy5fc29ja2V0SU8gPSBzb2NrZXRJT1xyXG4gIH1cclxuICBhcHBseVRvKHNlcnZlcjogaW1wb3J0KCdodHRwJykuU2VydmVyKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2U8dm9pZD4ocmVzb2x2ZSA9PiB7XHJcbiAgICAgIHRoaXMuX2V2ZW50TWFuYWdlci5pbml0UHJvdmlkZXJzKHRoaXMuX2V2ZW50UHJvdmlkZXJzKVxyXG4gICAgICB0aGlzLl9ldmVudE1hbmFnZXIuaW5pdExpc3RlbmVycyh0aGlzLl9ldmVudExpc3RlbmVycylcclxuICAgICAgdGhpcy5fc29ja2V0SU8ub24oJ2Nvbm5lY3QnLCAoc29ja2V0OiBTb2NrZXRJTy5Tb2NrZXQpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZygnU29ja2V0IGNvbm5lY3RlZC4uLicpXHJcbiAgICAgICAgOyg8U29ja2V0SU9FdmVudE1hbmFnZXI+KFxyXG4gICAgICAgICAgdGhpcy5fZXZlbnRNYW5hZ2VyLmdldFJlZ2lzdGVyZWRFdmVudFByb3ZpZGVyKEVWRU5UX1RZUEVTLnNvY2tldClcclxuICAgICAgICApKS5pbml0U29ja2V0TGlzdGVuZXIoc29ja2V0LCB0aGlzLl9ldmVudExpc3RlbmVycylcclxuICAgICAgfSlcclxuXHJcbiAgICAgIHJlc29sdmUoKVxyXG4gICAgfSlcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgSUV2ZW50TGlzdGVuZXIgfSBmcm9tICcuLy4uLy4uL2V2ZW50L21hbmdlci9JRXZlbnRMaXN0ZW5lcidcclxuLy8gaW1wb3J0IHsgRXZlbnRIYW5kbGVyIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9ldmVudC9tYW5nZXIvSUV2ZW50TGlzdGVuZXInXHJcbmltcG9ydCBmb3JFYWNoIGZyb20gJ2xvZGFzaC9mb3JlYWNoJ1xyXG5pbXBvcnQge1xyXG4gIElFdmVudE1hbmFnZXIsXHJcbiAgSUV2ZW50TWFuYWdlclByb3ZpZGVyXHJcbn0gZnJvbSAnLi8uLi8uLi9ldmVudC9tYW5nZXIvSUV2ZW50TWFuYWdlcidcclxuaW1wb3J0IHsgcHJvdmlkZVNpbmdsZXRvbiB9IGZyb20gJy4uLy4uLy4uL2NvcmUvaW9jJ1xyXG5pbXBvcnQgeyBUWVBFUyB9IGZyb20gJy4uLy4uLy4uL2NvbnN0YW50J1xyXG5cclxuQHByb3ZpZGVTaW5nbGV0b24oVFlQRVMuSUV2ZW50TWFuYWdlcilcclxuZXhwb3J0IGNsYXNzIE11bHRpcGxlUHJvdmlkZXJzRXZlbnRNYW5hZ2VyIGltcGxlbWVudHMgSUV2ZW50TWFuYWdlciB7XHJcbiAgcHJvdGVjdGVkIHByb3ZpZGVyczogeyBbdHlwZTogc3RyaW5nXTogSUV2ZW50TWFuYWdlclByb3ZpZGVyIH0gPSB7fVxyXG4gIGluaXRQcm92aWRlcnMoXHJcbiAgICBwcm92aWRlcnM6IGltcG9ydCgnLi4vLi4vZXZlbnQvbWFuZ2VyL0lFdmVudE1hbmFnZXInKS5JRXZlbnRNYW5hZ2VyUHJvdmlkZXJbXVxyXG4gICk6IHRoaXMge1xyXG4gICAgZm9yRWFjaChwcm92aWRlcnMsIHRoaXMucmVnaXN0ZXJQcm92aWRlci5iaW5kKHRoaXMpKVxyXG4gICAgcmV0dXJuIHRoaXNcclxuICB9XHJcbiAgaW5pdExpc3RlbmVycyhcclxuICAgIGV2ZW50TGlzdGVuZXJzOiBpbXBvcnQoJy4uLy4uL2V2ZW50L21hbmdlci9JRXZlbnRMaXN0ZW5lcicpLklFdmVudExpc3RlbmVyW11cclxuICApOiB0aGlzIHtcclxuICAgIGV2ZW50TGlzdGVuZXJzLmZvckVhY2goKGV2ZW50TGlzdGVuZXI6IElFdmVudExpc3RlbmVyKSA9PlxyXG4gICAgICBldmVudExpc3RlbmVyXHJcbiAgICAgICAgLmhhbmRsZXJzKClcclxuICAgICAgICAuZm9yRWFjaCgoZXZlbnRIYW5kbGVyOiBhbnkpID0+XHJcbiAgICAgICAgICB0aGlzLmdldFJlZ2lzdGVyZWRFdmVudFByb3ZpZGVyKGV2ZW50TGlzdGVuZXIudHlwZSgpKS5vbihcclxuICAgICAgICAgICAgZXZlbnRMaXN0ZW5lci5uYW1lKCksXHJcbiAgICAgICAgICAgIGV2ZW50SGFuZGxlclxyXG4gICAgICAgICAgKVxyXG4gICAgICAgIClcclxuICAgIClcclxuICAgIHJldHVybiB0aGlzXHJcbiAgfVxyXG4gIHJlZ2lzdGVyUHJvdmlkZXIoXHJcbiAgICBwcm92aWRlcjogaW1wb3J0KCcuLi8uLi9ldmVudC9tYW5nZXIvSUV2ZW50TWFuYWdlcicpLklFdmVudE1hbmFnZXJQcm92aWRlclxyXG4gICk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMucHJvdmlkZXJzW3Byb3ZpZGVyLnR5cGUoKV0pIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdFdmVudCBNYW5hZ2VyIHByb3ZpZGVyIGFscmVhZHkgcmVnaXN0ZXJlZCEnKVxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMucHJvdmlkZXJzW3Byb3ZpZGVyLnR5cGUoKV0gPSBwcm92aWRlclxyXG4gIH1cclxuICBnZXRSZWdpc3RlcmVkRXZlbnRQcm92aWRlcihcclxuICAgIGV2ZW50VHlwZTogc3RyaW5nXHJcbiAgKTogaW1wb3J0KCcuLi8uLi9ldmVudC9tYW5nZXIvSUV2ZW50TWFuYWdlcicpLklFdmVudE1hbmFnZXJQcm92aWRlciB7XHJcbiAgICBpZiAoIXRoaXMucHJvdmlkZXJzW2V2ZW50VHlwZV0pIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbmtub3duIGV2ZW50IHByb3ZpZGVyIHJlcXVlc3RlZC4nKVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMucHJvdmlkZXJzW2V2ZW50VHlwZV1cclxuICB9XHJcbiAgZW1pdChldmVudDogaW1wb3J0KCcuLi8uLi9ldmVudC9tYW5nZXIvSUV2ZW50JykuSUV2ZW50KTogdm9pZCB7XHJcbiAgICBpZiAoIXRoaXMucHJvdmlkZXJzLmhhc093blByb3BlcnR5KGV2ZW50LnR5cGUoKSkpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIGV2ZW50IHR5cGUhJylcclxuICAgIH1cclxuICAgIHRoaXMucHJvdmlkZXJzW2V2ZW50LnR5cGUoKV0uZW1pdChldmVudClcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0ICdyZWZsZWN0LW1ldGFkYXRhJ1xyXG5pbXBvcnQgeyBDb250YWluZXIsIGluamVjdCwgaW50ZXJmYWNlcywgbXVsdGlJbmplY3QsIG5hbWVkIH0gZnJvbSAnaW52ZXJzaWZ5J1xyXG5pbXBvcnQge1xyXG4gIGF1dG9Qcm92aWRlLFxyXG4gIGJ1aWxkUHJvdmlkZXJNb2R1bGUsXHJcbiAgZmx1ZW50UHJvdmlkZSxcclxuICBwcm92aWRlXHJcbn0gZnJvbSAnaW52ZXJzaWZ5LWJpbmRpbmctZGVjb3JhdG9ycydcclxuaW1wb3J0IHtcclxuICBtYWtlTG9nZ2VyTWlkZGxld2FyZSxcclxuICB0ZXh0U2VyaWFsaXplclxyXG59IGZyb20gJ2ludmVyc2lmeS1sb2dnZXItbWlkZGxld2FyZSdcclxuaW1wb3J0IGdldERlY29yYXRvcnMgZnJvbSAnaW52ZXJzaWZ5LWluamVjdC1kZWNvcmF0b3JzJ1xyXG5cclxuY29uc3QgY29udGFpbmVyOiBpbnRlcmZhY2VzLkNvbnRhaW5lciA9IG5ldyBDb250YWluZXIoKVxyXG5cclxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XHJcbiAgbGV0IGxvZ2dlciA9IG1ha2VMb2dnZXJNaWRkbGV3YXJlKHVuZGVmaW5lZCwgb3V0ID0+XHJcbiAgICBjb25zb2xlLmxvZyh0ZXh0U2VyaWFsaXplcihvdXQpKVxyXG4gIClcclxuICBjb250YWluZXIuYXBwbHlNaWRkbGV3YXJlKGxvZ2dlcilcclxufVxyXG5cclxuY29uc3QgcHJvdmlkZVRocm93YWJsZSA9IGZ1bmN0aW9uKGlkZW50aWZpZXI6IGFueSwgaXNUaHJvd2FibGU6IGJvb2xlYW4pIHtcclxuICByZXR1cm4gZmx1ZW50UHJvdmlkZShpZGVudGlmaWVyKVxyXG4gICAgLndoZW5UYXJnZXRUYWdnZWQoJ3Rocm93YWJsZScsIGlzVGhyb3dhYmxlKVxyXG4gICAgLmRvbmUoKVxyXG59XHJcblxyXG5jb25zdCBwcm92aWRlTmFtZWQgPSBmdW5jdGlvbihpZGVudGlmaWVyOiBhbnksIG5hbWU6IHN0cmluZykge1xyXG4gIHJldHVybiBmbHVlbnRQcm92aWRlKGlkZW50aWZpZXIpXHJcbiAgICAud2hlblRhcmdldE5hbWVkKG5hbWUpXHJcbiAgICAuZG9uZSgpXHJcbn1cclxuY29uc3QgcHJvdmlkZVNpbmdsZXRvbiA9IGZ1bmN0aW9uKGlkZW50aWZpZXI6IGFueSkge1xyXG4gIHJldHVybiBmbHVlbnRQcm92aWRlKGlkZW50aWZpZXIpXHJcbiAgICAuaW5TaW5nbGV0b25TY29wZSgpXHJcbiAgICAuZG9uZSgpXHJcbn1cclxuXHJcbmNvbnN0IHByb3ZpZGVOYW1lZFNpbmdsZXRvbiA9IGZ1bmN0aW9uKGlkZW50aWZpZXI6IGFueSwgbmFtZTogc3RyaW5nKSB7XHJcbiAgcmV0dXJuIGZsdWVudFByb3ZpZGUoaWRlbnRpZmllcilcclxuICAgIC5pblNpbmdsZXRvblNjb3BlKClcclxuICAgIC53aGVuVGFyZ2V0TmFtZWQobmFtZSlcclxuICAgIC5kb25lKClcclxufVxyXG5cclxuY29uc3QgcHJvdmlkZVRhZ2dlZFNpbmdsZXRvbiA9IGZ1bmN0aW9uKFxyXG4gIGlkZW50aWZpZXI6IGFueSxcclxuICB0YWc6IHN0cmluZyxcclxuICB2YWx1ZTogYW55XHJcbikge1xyXG4gIHJldHVybiBmbHVlbnRQcm92aWRlKGlkZW50aWZpZXIpXHJcbiAgICAuaW5TaW5nbGV0b25TY29wZSgpXHJcbiAgICAud2hlblRhcmdldFRhZ2dlZCh0YWcsIHZhbHVlKVxyXG4gICAgLmRvbmUoKVxyXG59XHJcblxyXG5sZXQgeyBsYXp5SW5qZWN0LCBsYXp5TXVsdGlJbmplY3QgfSA9IGdldERlY29yYXRvcnMoY29udGFpbmVyKVxyXG5cclxuZXhwb3J0IHtcclxuICBjb250YWluZXIsXHJcbiAgYXV0b1Byb3ZpZGUsXHJcbiAgcHJvdmlkZSxcclxuICBwcm92aWRlVGhyb3dhYmxlLFxyXG4gIHByb3ZpZGVOYW1lZCxcclxuICBpbmplY3QsXHJcbiAgbXVsdGlJbmplY3QsXHJcbiAgbGF6eUluamVjdCxcclxuICBsYXp5TXVsdGlJbmplY3QsXHJcbiAgbmFtZWQsXHJcbiAgcHJvdmlkZVNpbmdsZXRvbixcclxuICBwcm92aWRlTmFtZWRTaW5nbGV0b24sXHJcbiAgcHJvdmlkZVRhZ2dlZFNpbmdsZXRvbixcclxuICBidWlsZFByb3ZpZGVyTW9kdWxlXHJcbn1cclxuIiwiLy8gc29ydCBpcyBpbXBvcnRcclxuaW1wb3J0ICcuLi9BcHBsaWNhdGlvbidcclxuXHJcbi8vIGNvbnRyb2xsZXJcclxuaW1wb3J0ICcuLi8uLi9jb250cm9sbGVyJ1xyXG5cclxuLy8gc2VydmljZVxyXG4vLyBpbXBvcnQgJy4uL3NlcnZpY2UnXHJcbmltcG9ydCAnLi4vLi4vc2VydmljZS9pbXBsJ1xyXG5cclxuLy8gaW1wb3J0ICcuLi9pbml0aWFsaXplcidcclxuaW1wb3J0ICcuLi9pbml0aWFsaXplci9pbXBsL0NvbmZpZ1ByZUJ1aWxkSW5pdGlhbGl6ZXInXHJcbmltcG9ydCAnLi4vaW5pdGlhbGl6ZXIvaW1wbC9FdmVuTWFuYWdlckluaXRpYWxpemVyJ1xyXG5cclxuLy8gZXZlbnRcclxuaW1wb3J0ICcuLi8uLi9jb3JlL2luaXRpYWxpemVyL2ltcGwvTXVsdGlwbGVQcm92aWRlcnNFdmVudE1hbmFnZXInXHJcbmltcG9ydCAnLi4vLi4vY29yZS9ldmVudC9tYW5nZXIvcHJvdmlkZXIvU29ja2V0SU9FdmVudE1hbmFnZXInXHJcblxyXG4vLyBldmVudCBsaXN0ZW5lclxyXG5pbXBvcnQgJy4uL2V2ZW50L2xpc3RlbmVyL3NvY2tldC9PblNvY2tldFVzZXJMb2dpbkV2ZW50J1xyXG4iLCJleHBvcnQgKiBmcm9tICcuL0lPQydcclxuIiwiaW1wb3J0IHsgVEFHUyB9IGZyb20gJy4vY29uc3RhbnQvVGFncydcclxuaW1wb3J0IHsgQXBwbGljYXRpb24gfSBmcm9tICcuL2NvcmUvQXBwbGljYXRpb24nXHJcbmltcG9ydCB7IFRZUEVTIH0gZnJvbSAnLi9jb25zdGFudCdcclxuaW1wb3J0IGZzIGZyb20gJ2ZzJ1xyXG5pbXBvcnQgc29ja2V0SW8gZnJvbSAnc29ja2V0LmlvJ1xyXG5pbXBvcnQgaHR0cCBmcm9tICdodHRwJ1xyXG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJ1xyXG5pbXBvcnQgeyBBY3Rpb25UeXBlIH0gZnJvbSAndHlwZXNhZmUtYWN0aW9ucydcclxuaW1wb3J0IHsgYWRkUHJvamVjdCB9IGZyb20gJ0BzaGFyZS9hY3Rpb24vUHJvamVjdEFjdGlvbidcclxuaW1wb3J0IHsgSVVzZXJEdG8gfSBmcm9tICcuL2R0bydcclxuaW1wb3J0IHsgVVNFUl9GSUxFX1BBVEggfSBmcm9tICcuL2NvbnN0YW50J1xyXG5pbXBvcnQgeyBsb2dJbiB9IGZyb20gJ0BzaGFyZS9hY3Rpb24vVXNlckFjdGlvbidcclxuaW1wb3J0IHsgY29uZmlndXJlLCBnZXRMb2dnZXIgfSBmcm9tICdsb2c0anMnXHJcbmltcG9ydCB7IGNvbnRhaW5lciwgYXV0b1Byb3ZpZGUsIGJ1aWxkUHJvdmlkZXJNb2R1bGUgfSBmcm9tICcuL2NvcmUvaW9jJ1xyXG5pbXBvcnQgJy4vY29yZS9pb2MvTG9hZGVyJ1xyXG5pbXBvcnQgeyBJbnZlcnNpZnlFeHByZXNzU2VydmVyIH0gZnJvbSAnaW52ZXJzaWZ5LWV4cHJlc3MtdXRpbHMnXHJcbmltcG9ydCAqIGFzIGJvZHlQYXJzZXIgZnJvbSAnYm9keS1wYXJzZXInXHJcbmltcG9ydCB7IElVc2VyU2VydmljZSB9IGZyb20gJy4vc2VydmljZSdcclxuaW1wb3J0ICogYXMgc2VydmljZSBmcm9tICcuL3NlcnZpY2UvaW1wbCdcclxuaW1wb3J0IHsgU29ja2V0SU9FdmVudE1hbmFnZXIgfSBmcm9tICcuL2NvcmUvZXZlbnQvbWFuZ2VyL3Byb3ZpZGVyL1NvY2tldElPRXZlbnRNYW5hZ2VyJ1xyXG5pbXBvcnQgeyBJRXZlbnRNYW5hZ2VyUHJvdmlkZXIgfSBmcm9tICcuL2NvcmUvZXZlbnQvbWFuZ2VyL0lFdmVudE1hbmFnZXInXHJcblxyXG5jb25maWd1cmUoJy4vY29uZmlnL2xvZzRqcy5qc29uJylcclxuY29uc3QgbG9nZ2VyID0gZ2V0TG9nZ2VyKClcclxubG9nZ2VyLmxldmVsID0gcHJvY2Vzcy5lbnYuTE9HR0VSX0xFVkVMIHx8ICdvZmYnXHJcblxyXG4vLyBpbXBvcnQgeyBhcHBDb250YWluZXIgfSBmcm9tICcuL2ludmVyc2lmeS5jb25maWcnXHJcbi8vIGltcG9ydCB7IFRZUEVTIH0gZnJvbSAnLi9jb25zdGFudC9UeXBlcydcclxuLy8gaW1wb3J0IHsgSVVzZXJTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlJ1xyXG4vLyBjb25zdCB1c2VyU2VydmljZUluc3QgPSBhcHBDb250YWluZXIuZ2V0PElVc2VyU2VydmljZT4oVFlQRVMuSVVzZXJTZXJ2aWNlKVxyXG4vLyBjb25zb2xlLmxvZyh1c2VyU2VydmljZUluc3QpXHJcbi8vIGNvbnNvbGUubG9nKHVzZXJTZXJ2aWNlSW5zdC5zYXlIZWxsbygpKVxyXG5cclxuLy8gY29udGFpbmVyLmJpbmQ8UHJvamVjdFNlcnZpY2VJbXBsPihUWVBFUy5Qcm9qZWN0U2VydmljZSkudG8oUHJvamVjdFNlcnZpY2VJbXBsKVxyXG4vLyBjb250YWluZXIuYmluZDxVc2VyU2VydmljZUltcGw+KFRZUEVTLlVzZXJTZXJ2aWNlKS50byhVc2VyU2VydmljZUltcGwpXHJcbi8vIGF1dG9Qcm92aWRlKGNvbnRhaW5lciwgc2VydmljZSlcclxuXHJcbi8vIOW/hemhu+aUvuWcqExvYWRlcuS5i+WQjlxyXG4vLyBjb250YWluZXIubG9hZChidWlsZFByb3ZpZGVyTW9kdWxlKCkpXHJcblxyXG4vLyBjb25zdCBzZXJ2ZXIgPSBuZXcgSW52ZXJzaWZ5RXhwcmVzc1NlcnZlcihjb250YWluZXIpXHJcbi8vIHNlcnZlci5zZXRDb25maWcoYXBwID0+IHtcclxuLy8gICAvLyBhZGQgYm9keSBwYXJzZXJcclxuLy8gICBhcHAudXNlKFxyXG4vLyAgICAgYm9keVBhcnNlci51cmxlbmNvZGVkKHtcclxuLy8gICAgICAgZXh0ZW5kZWQ6IHRydWVcclxuLy8gICAgIH0pXHJcbi8vICAgKVxyXG4vLyAgIGFwcC51c2UoYm9keVBhcnNlci5qc29uKCkpXHJcbi8vIH0pXHJcbi8vIGxldCBhcHAgPSBzZXJ2ZXIuYnVpbGQoKVxyXG4vLyBhcHAubGlzdGVuKDMwMDIpXHJcblxyXG5jb250YWluZXIubG9hZChidWlsZFByb3ZpZGVyTW9kdWxlKCkpXHJcbmNvbnN0IGV4cHJlc3MgPSBuZXcgSW52ZXJzaWZ5RXhwcmVzc1NlcnZlcihjb250YWluZXIsIG51bGwsIHtcclxuICByb290UGF0aDogJy9hcGknXHJcbn0pXHJcbmNvbnN0IGFwcGxpY2F0aW9uOiBBcHBsaWNhdGlvbiA9IGNvbnRhaW5lci5nZXQ8QXBwbGljYXRpb24+KFRZUEVTLkFwcGxpY2F0aW9uKVxyXG5hcHBsaWNhdGlvbi5zZXRFeHByZXNzKGV4cHJlc3MpXHJcbmFwcGxpY2F0aW9uLnJ1bihjb250YWluZXIpXHJcblxyXG4vLyBjb25zdCBzb2NrZXRJTzogU29ja2V0SU8uU2VydmVyID0gY29udGFpbmVyLmdldDxTb2NrZXRJTy5TZXJ2ZXI+KFRZUEVTLlNvY2tldElPKVxyXG4vLyBzb2NrZXRJTy5vbignY29ubmVjdCcsICgpID0+IHtcclxuLy8gICBjb25zb2xlLmxvZygnU29ja2V0SU8gY29ubmVjdGVkLi4uJylcclxuLy8gfSlcclxuXHJcbi8vIGNvbnN0IHVzZXJMaXN0OiBJVXNlckR0b1tdID0gW11cclxuXHJcbi8vIGNvbnN0IHNlcnZlciA9IGh0dHAuY3JlYXRlU2VydmVyKGZ1bmN0aW9uKHJlcTogYW55LCByZXM6IGFueSkge1xyXG4vLyAgIHJlcy53cml0ZUhlYWQoMjAwKVxyXG4vLyAgIHJlcy5lbmQoJ2hlbGxvIHdvcmxkJylcclxuLy8gfSlcclxuXHJcbi8vIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzI4MzA2NzQwL3NvY2tldC1pby1jb25uZWN0LXRvLXVuaXgtc29ja2V0XHJcbi8vIHNvY2tldC5pbyBzZXR1cFxyXG4vLyBjb25zdCBpbyA9IHNvY2tldElvLmxpc3RlbihzZXJ2ZXIpIGFzIGFueVxyXG4vLyBpby5zZXQoJ3RyYW5zcG9ydHMnLCBbJ3dlYnNvY2tldCddKVxyXG5cclxuLy8gbGV0IHByb3RvY29sID0gJydcclxuLy8gY29uc3QgaXNEZXYgPSBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50J1xyXG4vLyBpZiAoIWlzRGV2KSB7XHJcbi8vICAgLy8gbGV0IG5nbml4IGtub3cgd2Ugd2FudCB0byBzdGFydCBzZXJ2aW5nIGZyb20gdGhlIHByb3h5XHJcbi8vICAgZnMub3BlblN5bmMoJy90bXAvYXBwLWluaXRpYWxpemVkJywgJ3cnKVxyXG4vLyAgIHByb3RvY29sID0gJy90bXAvbmdpbnguc29ja2V0J1xyXG4vLyAgIC8vIEZJWDogYWRkcmVzcyBpbiB1c2VkXHJcbi8vICAgaWYgKGZzLmV4aXN0c1N5bmMocHJvdG9jb2wpKSBmcy51bmxpbmtTeW5jKHByb3RvY29sKVxyXG4vLyB9IGVsc2Uge1xyXG4vLyAgIHByb3RvY29sID0gcHJvY2Vzcy5lbnYuU09DS0VUSU9fU0VSVkVSX1BPUlQgYXMgc3RyaW5nXHJcbi8vIH1cclxuXHJcbi8vIC8vIGxpc3RlbiB0byBuZ25peCBzb2NrZXRcclxuLy8gc2VydmVyLmxpc3Rlbihwcm90b2NvbCwgZnVuY3Rpb24oKSB7XHJcbi8vICAgLy8gRklYOiBQZXJtaXNzaW9uIGRlbmllZFxyXG4vLyAgIGlmIChwcm90b2NvbCAmJiBmcy5leGlzdHNTeW5jKHByb3RvY29sKSkgZnMuY2htb2RTeW5jKHByb3RvY29sLCA3NTUpXHJcbi8vICAgbG9nZ2VyLmRlYnVnKGBzZXJ2ZXIgdXBgKVxyXG4vLyB9KVxyXG5cclxuLy8gaW8ub24oJ2Nvbm5lY3RfZXJyb3InLCBmdW5jdGlvbihlcnI6IGFueSkge1xyXG4vLyAgIGxvZ2dlci5kZWJ1ZyhlcnIpXHJcbi8vIH0pXHJcblxyXG4vLyBpby5vbignY29ubmVjdF90aW1lb3V0JywgZnVuY3Rpb24oZXJyOiBhbnkpIHtcclxuLy8gICBsb2dnZXIuZGVidWcoZXJyKVxyXG4vLyB9KVxyXG5cclxuLy8gaW8ub24oJ2Nvbm5lY3Rpb24nLCBmdW5jdGlvbihzb2NrZXQ6IGFueSkge1xyXG4vLyAgIGxvZ2dlci5kZWJ1Zyhgc29ja2V0OiAke3NvY2tldC5pZH0gY29ubmVjdGVkYClcclxuLy8gICBsZXQgY3VycmVudFVzZXI6IElVc2VyRHRvXHJcbi8vICAgLy8gc29ja2V0LmVtaXQoJ2Nvbm5lY3Rpb24nLCBzb2NrZXQuaWQpXHJcblxyXG4vLyAgIHNvY2tldC5vbignZGlzY29ubmVjdCcsIGZ1bmN0aW9uKCkge1xyXG4vLyAgICAgbG9nZ2VyLmRlYnVnKGBkaXNjb25uZWN0ZWRgKVxyXG4vLyAgIH0pXHJcblxyXG4vLyAgIHNvY2tldC5vbihFQWN0aW9uVHlwZS5MT0dfSU4sIChhY3Rpb246IEFjdGlvblR5cGU8dHlwZW9mIGxvZ0luPikgPT4ge1xyXG4vLyAgICAgbG9nZ2VyLmRlYnVnKGAke0VBY3Rpb25UeXBlLkxPR19JTn0tLSR7SlNPTi5zdHJpbmdpZnkoYWN0aW9uKX1gKVxyXG4vLyAgICAgY3VycmVudFVzZXIgPSBhY3Rpb24ucGF5bG9hZC51c2VyXHJcbi8vICAgICBjb25zdCBleGlzdGluZ1VzZXIgPSB1c2VyTGlzdC5maW5kKFxyXG4vLyAgICAgICAodXNlcjogSVVzZXJEdG8pID0+IHVzZXIubmFtZSA9PT0gY3VycmVudFVzZXIubmFtZVxyXG4vLyAgICAgKVxyXG4vLyAgICAgbG9nZ2VyLmRlYnVnKGBleGlzdGluZ1VzZXI6JHtleGlzdGluZ1VzZXJ9YClcclxuLy8gICAgIGlmIChleGlzdGluZ1VzZXIpIHtcclxuLy8gICAgICAgY3VycmVudFVzZXIgPSBleGlzdGluZ1VzZXJcclxuLy8gICAgIH0gZWxzZSB7XHJcbi8vICAgICAgIG5ld1VzZXIoY3VycmVudFVzZXIpXHJcbi8vICAgICB9XHJcbi8vICAgICBsb2dnZXIuZGVidWcoYCR7SlNPTi5zdHJpbmdpZnkoY3VycmVudFVzZXIpfWApXHJcbi8vICAgICAvLyBzb2NrZXQuZW1pdChFQWN0aW9uVHlwZS5MR0dfU1VDQ0VTUywgeyBtc2c6ICdMb2cgaW4gc3VjY2Vzcy4uLicgfSlcclxuLy8gICAgIHNvY2tldC5lbWl0KEVBY3Rpb25UeXBlLkxPR19JTiwge1xyXG4vLyAgICAgICB0eXBlOiBFQWN0aW9uVHlwZS5MT0dfSU4sXHJcbi8vICAgICAgIHBheWxvYWQ6IHsgdXNlcjogY3VycmVudFVzZXIgfVxyXG4vLyAgICAgfSlcclxuLy8gICB9KVxyXG5cclxuLy8gICAvLyBzb2NrZXQub24oRUFjdGlvblR5cGUuQUREX1BST0pFQ1QsIChhY3Rpb246IEFjdGlvblR5cGU8dHlwZW9mIGFkZFByb2plY3Q+KSA9PiB7XHJcblxyXG4vLyAgIC8vIH0pXHJcbi8vIH0pXHJcblxyXG4vLyBmdW5jdGlvbiByZWFkSnNvbihwYXRoOiBzdHJpbmcsIGNhbGxiYWNrOiAob2JqZWN0OiBhbnkpID0+IGFueSk6IHZvaWQge1xyXG4vLyAgIGZzLnJlYWRGaWxlKHBhdGgsICd1dGY4JywgKGVyciwgZGF0YTogc3RyaW5nKTogdm9pZCA9PiB7XHJcbi8vICAgICBpZiAoZXJyKSB7XHJcbi8vICAgICAgIGxvZ2dlci5lcnJvcihlcnIpXHJcbi8vICAgICB9IGVsc2Uge1xyXG4vLyAgICAgICBjYWxsYmFjayhKU09OLnBhcnNlKGRhdGEpKVxyXG4vLyAgICAgfVxyXG4vLyAgIH0pXHJcbi8vIH1cclxuXHJcbi8vIGNvbnN0IG5ld1VzZXIgPSAodXNlcjogSVVzZXJEdG8pOiB2b2lkID0+IHtcclxuLy8gICBsb2dnZXIuZGVidWcoYG5ldyB1c2VyOiAke3VzZXIubmFtZX1gKVxyXG4vLyAgIHVzZXIubmFtZSA9IHVzZXIubmFtZVxyXG4vLyAgIHVzZXJMaXN0LnB1c2godXNlcilcclxuLy8gICAvLyBTYXZlIHRvIGZpbGVcclxuLy8gICByZWFkSnNvbihVU0VSX0ZJTEVfUEFUSCwgKHVzZXJEYXRhOiBJVXNlckR0b1tdKTogdm9pZCA9PiB7XHJcbi8vICAgICB1c2VyRGF0YS5wdXNoKHVzZXIpXHJcbi8vICAgICBjb25zdCBqc29uOiBzdHJpbmcgPSBKU09OLnN0cmluZ2lmeSh1c2VyRGF0YSlcclxuLy8gICAgIGxvZ2dlci5kZWJ1Zyhqc29uKVxyXG4vLyAgICAgZnMud3JpdGVGaWxlKFVTRVJfRklMRV9QQVRILCBqc29uLCAndXRmOCcsIGVyciA9PiB7XHJcbi8vICAgICAgIGlmIChlcnIpIHtcclxuLy8gICAgICAgICBsb2dnZXIuZGVidWcoZXJyKVxyXG4vLyAgICAgICAgIHJldHVyblxyXG4vLyAgICAgICB9XHJcbi8vICAgICAgIGxvZ2dlci5kZWJ1ZyhgV3JpdGUgdG8gJHtVU0VSX0ZJTEVfUEFUSH1gKVxyXG4vLyAgICAgICByZXR1cm5cclxuLy8gICAgIH0pXHJcbi8vICAgfSlcclxuLy8gfVxyXG4iLCJpbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi9Vc2VyJ1xyXG5pbXBvcnQgeyBQcmltYXJ5R2VuZXJhdGVkQ29sdW1uLCBDb2x1bW4sIEJhc2VFbnRpdHksIE1hbnlUb09uZSB9IGZyb20gJ3R5cGVvcm0nXHJcblxyXG5leHBvcnQgY2xhc3MgUHJvamVjdCBleHRlbmRzIEJhc2VFbnRpdHkge1xyXG4gIEBQcmltYXJ5R2VuZXJhdGVkQ29sdW1uKClcclxuICBwdWJsaWMgaWQhOiBudW1iZXJcclxuXHJcbiAgQENvbHVtbigpXHJcbiAgcHVibGljIHByb2plY3RfbmFtZSE6IHN0cmluZ1xyXG5cclxuICBAQ29sdW1uKClcclxuICBwdWJsaWMgcHJvamVjdF9kZXNjITogc3RyaW5nXHJcblxyXG4gIC8vIEBNYW55VG9PbmUoXHJcbiAgLy8gICB0eXBlID0+IFVzZXIsXHJcbiAgLy8gICB1c2VyID0+IHVzZXIucHJvamVjdHMsXHJcbiAgLy8gICB7XHJcbiAgLy8gICAgIGNhc2NhZGU6IHRydWVcclxuICAvLyAgIH1cclxuICAvLyApXHJcbiAgLy8gcHVibGljIHVzZXIhOiBVc2VyXHJcbn1cclxuIiwiaW1wb3J0IHtcclxuICBFbnRpdHksXHJcbiAgUHJpbWFyeUdlbmVyYXRlZENvbHVtbixcclxuICBDb2x1bW4sXHJcbiAgQmFzZUVudGl0eSxcclxuICBPbmVUb01hbnlcclxufSBmcm9tICd0eXBlb3JtJ1xyXG5pbXBvcnQgeyBQcm9qZWN0IH0gZnJvbSAnLi9Qcm9qZWN0J1xyXG5cclxuQEVudGl0eSgpXHJcbmV4cG9ydCBjbGFzcyBVc2VyIGV4dGVuZHMgQmFzZUVudGl0eSB7XHJcbiAgQFByaW1hcnlHZW5lcmF0ZWRDb2x1bW4oKVxyXG4gIHB1YmxpYyBpZCE6IG51bWJlclxyXG5cclxuICBAQ29sdW1uKClcclxuICBwdWJsaWMgdXNlcm5hbWUhOiBzdHJpbmdcclxuXHJcbiAgQENvbHVtbigpXHJcbiAgcHVibGljIGVtYWlsITogc3RyaW5nXHJcblxyXG4gIEBDb2x1bW4oeyBudWxsYWJsZTogdHJ1ZSB9KVxyXG4gIHB1YmxpYyBhZ2UhOiBudW1iZXJcclxuXHJcbiAgLy8gQE9uZVRvTWFueShcclxuICAvLyAgIHR5cGUgPT4gUHJvamVjdCxcclxuICAvLyAgIHByb2plY3QgPT4gcHJvamVjdC51c2VyXHJcbiAgLy8gKVxyXG4gIC8vIHB1YmxpYyBwcm9qZWN0cyE6IFByb2plY3RbXVxyXG59XHJcblxyXG4vLyBpbXBvcnQgeyBBYnN0cmFjdFVzZXIgfSBmcm9tIFwiQHNoYXJlL21vZGVsXCI7XHJcbi8vIGltcG9ydCB7IElVc2VyRHRvIH0gZnJvbSAnLi4vZHRvJ1xyXG5cclxuLy8gZXhwb3J0IGNsYXNzIFVzZXIgZXh0ZW5kcyBBYnN0cmFjdFVzZXIge1xyXG4vLyAgIGlkOiBzdHJpbmdcclxuLy8gICBuYW1lOiBzdHJpbmdcclxuXHJcbi8vICAgY29uc3RydWN0b3IocHJvcHM6IElVc2VyRHRvKSB7XHJcbi8vICAgICBzdXBlcihwcm9wcylcclxuLy8gICAgIHRoaXMuaWQgPSBwcm9wcy5pZFxyXG4vLyAgICAgdGhpcy5uYW1lID0gcHJvcHMubmFtZVxyXG4vLyAgIH1cclxuXHJcbi8vICAgc3RhdGljIGNyZWF0ZShwcm9wczogSVVzZXJEdG8pIHtcclxuLy8gICAgIHJldHVybiBuZXcgVXNlcihPYmplY3QuYXNzaWduKHt9LCBwcm9wcywge1xyXG5cclxuLy8gICAgIH0pKVxyXG4vLyAgIH1cclxuLy8gfVxyXG4iLCJpbXBvcnQgeyBUWVBFUyB9IGZyb20gJy4uLy4uL2NvbnN0YW50J1xyXG5pbXBvcnQgeyBpbmplY3RhYmxlLCBpbmplY3QgfSBmcm9tICdpbnZlcnNpZnknXHJcbmltcG9ydCB7IElQcm9qZWN0U2VydmljZSB9IGZyb20gJy4vLi4vSVByb2plY3RTZXJ2aWNlJ1xyXG5pbXBvcnQgeyBwcm92aWRlIH0gZnJvbSAnaW52ZXJzaWZ5LWJpbmRpbmctZGVjb3JhdG9ycydcclxuXHJcbkBwcm92aWRlKFRZUEVTLlByb2plY3RTZXJ2aWNlKVxyXG5leHBvcnQgY2xhc3MgUHJvamVjdFNlcnZpY2VJbXBsIGltcGxlbWVudHMgSVByb2plY3RTZXJ2aWNlIHtcclxuICBnZXRBbGwoKTogYW55W10ge1xyXG4gICAgcmV0dXJuIFtcclxuICAgICAge1xyXG4gICAgICAgIGlkOiAxLFxyXG4gICAgICAgIG5hbWU6ICd0ZXN0J1xyXG4gICAgICB9XHJcbiAgICBdXHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IERCUHJvdmlkZXIgfSBmcm9tICcuLy4uLy4uL2NvcmUvaGVscGVyL0RCSGVscGVyJ1xyXG5pbXBvcnQgeyBJUHJvamVjdFNlcnZpY2UgfSBmcm9tICcuLy4uL0lQcm9qZWN0U2VydmljZSdcclxuaW1wb3J0IHsgaW5qZWN0YWJsZSwgaW5qZWN0IH0gZnJvbSAnaW52ZXJzaWZ5J1xyXG5pbXBvcnQgeyBJVXNlclNlcnZpY2UgfSBmcm9tICcuLi9JVXNlclNlcnZpY2UnXHJcbmltcG9ydCB7IFRZUEVTIH0gZnJvbSAnLi4vLi4vY29uc3RhbnQnXHJcbmltcG9ydCB7IHByb3ZpZGVTaW5nbGV0b24sIHByb3ZpZGUgfSBmcm9tICcuLi8uLi9jb3JlL2lvYydcclxuaW1wb3J0IHsgVXNlciB9IGZyb20gJy4uLy4uL21vZGVsL1VzZXInXHJcblxyXG4vLyBAaW5qZWN0YWJsZSgpXHJcbi8vIEBwcm92aWRlU2luZ2xldG9uKFRZUEVTLklVc2VyU2VydmljZSlcclxuQHByb3ZpZGUoVFlQRVMuVXNlclNlcnZpY2UpXHJcbi8vIEBpbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFVzZXJTZXJ2aWNlSW1wbCBpbXBsZW1lbnRzIElVc2VyU2VydmljZSB7XHJcbiAgcHVibGljIGFzeW5jIGNyZWF0ZSh1c2VyOiBVc2VyKTogUHJvbWlzZTxVc2VyPiB7XHJcbiAgICBjb25zdCBuZXdVc2VyID0gbmV3IFVzZXIoKVxyXG5cclxuICAgIG5ld1VzZXIudXNlcm5hbWUgPSB1c2VyLnVzZXJuYW1lXHJcbiAgICBuZXdVc2VyLmVtYWlsID0gdXNlci5lbWFpbFxyXG5cclxuICAgIGNvbnN0IGNvbm5lY3Rpb24gPSBhd2FpdCBEQlByb3ZpZGVyLmdldENvbm5lY3Rpb24oKVxyXG4gICAgcmV0dXJuIGF3YWl0IGNvbm5lY3Rpb24uZ2V0UmVwb3NpdG9yeShVc2VyKS5zYXZlKG5ld1VzZXIpXHJcbiAgfVxyXG4gIHB1YmxpYyBhc3luYyBsaXN0KCk6IFByb21pc2U8VXNlcltdPiB7XHJcbiAgICBjb25zdCBjb25uZWN0aW9uID0gYXdhaXQgREJQcm92aWRlci5nZXRDb25uZWN0aW9uKClcclxuICAgIHJldHVybiBhd2FpdCBjb25uZWN0aW9uLmdldFJlcG9zaXRvcnkoVXNlcikuZmluZCgpXHJcbiAgfVxyXG4gIC8vIHByaXZhdGUgX3Byb2plY3Q6IElQcm9qZWN0U2VydmljZVxyXG5cclxuICBAaW5qZWN0KFRZUEVTLlByb2plY3RTZXJ2aWNlKVxyXG4gIHByaXZhdGUgX3Byb2plY3QhOiBJUHJvamVjdFNlcnZpY2VcclxuXHJcbiAgLy8gcHVibGljIGNvbnN0cnVjdG9yKEBpbmplY3QoVFlQRVMuSVByb2plY3RTZXJ2aWNlKSBwcm9qZWN0OiBJUHJvamVjdFNlcnZpY2UpIHtcclxuICAvLyAgIHRoaXMuX3Byb2plY3QgPSBwcm9qZWN0XHJcbiAgLy8gfVxyXG4gIHNheUhlbGxvKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gJ0hlbGxvIFdvcmxkIScgKyBKU09OLnN0cmluZ2lmeSh0aGlzLl9wcm9qZWN0LmdldEFsbCgpKVxyXG4gIH1cclxufVxyXG4iLCJleHBvcnQgKiBmcm9tICcuL1Byb2plY3RTZXJ2aWNlSW1wbCdcclxuZXhwb3J0ICogZnJvbSAnLi9Vc2VyU2VydmljZUltcGwnXHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJvZHktcGFyc2VyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImludmVyc2lmeVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJpbnZlcnNpZnktYmluZGluZy1kZWNvcmF0b3JzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImludmVyc2lmeS1leHByZXNzLXV0aWxzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImludmVyc2lmeS1pbmplY3QtZGVjb3JhdG9yc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJpbnZlcnNpZnktbG9nZ2VyLW1pZGRsZXdhcmVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibG9kYXNoL2ZvcmVhY2hcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibG9nNGpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZmxlY3QtbWV0YWRhdGFcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic29ja2V0LmlvXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInR5cGVvcm1cIik7Il0sInNvdXJjZVJvb3QiOiIifQ==