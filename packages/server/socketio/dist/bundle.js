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

/***/ "./src/core/event/provider/SocketIOEventManager.ts":
/*!*********************************************************!*\
  !*** ./src/core/event/provider/SocketIOEventManager.ts ***!
  \*********************************************************/
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
var constant_2 = __webpack_require__(/*! ../../../constant */ "./src/constant/index.ts");
var ioc_1 = __webpack_require__(/*! ../../ioc */ "./src/core/ioc/index.ts");
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
__webpack_require__(/*! ../event/provider/SocketIOEventManager */ "./src/core/event/provider/SocketIOEventManager.ts");
// event listener
__webpack_require__(/*! ../../listener/socket/OnSocketUserLoginEvent */ "./src/listener/socket/OnSocketUserLoginEvent.ts");


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

/***/ "./src/listener/socket/OnSocketUserLoginEvent.ts":
/*!*******************************************************!*\
  !*** ./src/listener/socket/OnSocketUserLoginEvent.ts ***!
  \*******************************************************/
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
var UserServiceImpl_1 = __webpack_require__(/*! ../../service/impl/UserServiceImpl */ "./src/service/impl/UserServiceImpl.ts");
var ioc_1 = __webpack_require__(/*! ../../core/ioc */ "./src/core/ioc/index.ts");
var constant_1 = __webpack_require__(/*! ../../constant */ "./src/constant/index.ts");
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
        var _this = this;
        return [
            function (action) {
                _this._userService.list().then(function (data) { return console.log(data); });
                console.log(action);
            }
        ];
    };
    __decorate([
        ioc_1.inject(constant_1.TYPES.UserService),
        __metadata("design:type", UserServiceImpl_1.UserServiceImpl)
    ], OnSocketUserLoginEvent.prototype, "_userService", void 0);
    OnSocketUserLoginEvent = __decorate([
        ioc_1.provide(constant_1.TYPES.IEventListener)
    ], OnSocketUserLoginEvent);
    return OnSocketUserLoginEvent;
}());
exports.OnSocketUserLoginEvent = OnSocketUserLoginEvent;


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vLi4vLi4vc2hhcmUvY29uZmlnL2luZGV4LnRzIiwid2VicGFjazovLy8uLy4uLy4uL3NoYXJlL2NvbnN0YW50L0VCYXNlQ29uc3RhbnQudHMiLCJ3ZWJwYWNrOi8vLy4vLi4vLi4vc2hhcmUvY29uc3RhbnQvRXZlbnRzLnRzIiwid2VicGFjazovLy8uLy4uLy4uL3NoYXJlL2NvbnN0YW50L2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9jb25zdGFudC9GaWxlUGF0aC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uc3RhbnQvVHlwZXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnN0YW50L2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9jb250cm9sbGVyL1VzZXJDb250cm9sbGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9jb250cm9sbGVyL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL0FwcGxpY2F0aW9uLnRzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL2V2ZW50L3Byb3ZpZGVyL1NvY2tldElPRXZlbnRNYW5hZ2VyLnRzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL2hlbHBlci9EQkhlbHBlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9pbml0aWFsaXplci9pbXBsL0NvbmZpZ1ByZUJ1aWxkSW5pdGlhbGl6ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvaW5pdGlhbGl6ZXIvaW1wbC9FdmVuTWFuYWdlckluaXRpYWxpemVyLnRzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL2luaXRpYWxpemVyL2ltcGwvTXVsdGlwbGVQcm92aWRlcnNFdmVudE1hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvaW9jL0lPQy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9pb2MvTG9hZGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL2lvYy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpc3RlbmVyL3NvY2tldC9PblNvY2tldFVzZXJMb2dpbkV2ZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9tb2RlbC9Qcm9qZWN0LnRzIiwid2VicGFjazovLy8uL3NyYy9tb2RlbC9Vc2VyLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlL2ltcGwvUHJvamVjdFNlcnZpY2VJbXBsLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlL2ltcGwvVXNlclNlcnZpY2VJbXBsLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlL2ltcGwvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYm9keS1wYXJzZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJpbnZlcnNpZnlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJpbnZlcnNpZnktYmluZGluZy1kZWNvcmF0b3JzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaW52ZXJzaWZ5LWV4cHJlc3MtdXRpbHNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJpbnZlcnNpZnktaW5qZWN0LWRlY29yYXRvcnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJpbnZlcnNpZnktbG9nZ2VyLW1pZGRsZXdhcmVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJsb2Rhc2gvZm9yZWFjaFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImxvZzRqc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZmxlY3QtbWV0YWRhdGFcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzb2NrZXQuaW9cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0eXBlb3JtXCIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVB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O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsb0MiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXgudHNcIik7XG4iLCJjb25zdCBsb2NhbG9oc3QgPSAnaHR0cDovL2xvY2FsaG9zdCdcclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIFBPUlQ6IHByb2Nlc3MuZW52LlBPUlQsXHJcbiAgU09DS0VUSU9fU0VSVkVSX1BPUlQ6IHByb2Nlc3MuZW52LlNPQ0tFVElPX1NFUlZFUl9QT1JULFxyXG4gIGhvc3Q6IGAke2xvY2Fsb2hzdH06JHtwcm9jZXNzLmVudi5QT1JUfWAsXHJcbiAgQVBQX0lORE9PUl9QT1JUOiBwcm9jZXNzLmVudi5BUFBfSU5ET09SX1BPUlQsXHJcbiAgYXBwSW5kb29ySG9zdDogYCR7bG9jYWxvaHN0fToke3Byb2Nlc3MuZW52LkFQUF9JTkRPT1JfUE9SVH1gLFxyXG4gIHNvY2tlSU9Vcmw6IGAke2xvY2Fsb2hzdH06JHtwcm9jZXNzLmVudi5TT0NLRVRJT19TRVJWRVJfUE9SVH0vc29ja2UuaW8vYCxcclxuICBBUFBfSU5ET09SX1NUQVRJQ19GSUxFOiBwcm9jZXNzLmVudi5BUFBfSU5ET09SX1NUQVRJQ19GSUxFXHJcbn1cclxuIiwiZXhwb3J0IGVudW0gRVVzZXJTdGF0dXMge1xyXG4gIFNJR05fVVAgPSAxLFxyXG4gIExPR19JTiA9IDIsXHJcbiAgTE9HX09VVCA9IDNcclxufVxyXG5cclxuZXhwb3J0IGVudW0gRVByb2plY3RTdGF0dXMge1xyXG4gIFBST0pFQ1RfTkVXID0gMSxcclxuICBQUk9KRUNUX0xJU1QgPSAyLFxyXG4gIFBST0pFQ1RfRURJVCA9IDMsXHJcbiAgUFJPSkVDVF9ERUwgPSA0XHJcbn1cclxuIiwiZXhwb3J0IGNvbnN0IEVWRU5UX1RZUEVTID0ge1xyXG4gIGRvbWFpbjogJ0RPTUFJTi5FVkVOVCcsXHJcbiAgc29ja2V0OiAnU09DS0VULkVWRU5UJ1xyXG59XHJcblxyXG5leHBvcnQgZW51bSBFVXNlckV2ZW50IHtcclxuICBTSU5HX1VQID0gJ1NJTkdfVVAuU09DS0VULkVWRU5UJyxcclxuICBMT0dfSU4gPSAnTE9HX0lOLlNPQ0tFVC5FVkVOVCcsXHJcbiAgTE9HX09VVCA9ICdMT0dfT1VULlNPQ0tFVC5FVkVOVCcsXHJcbiAgTEdHX1NVQ0NFU1MgPSAnTEdHX1NVQ0NFUy5TT0NLRVQuRVZFTlQnXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIEVQcm9qZWN0RXZlbnQge1xyXG4gIEFERF9QUk9KRUNUID0gJ0FERF9QUk9KRUNULlNPQ0tFVC5FVkVOVCcsXHJcbiAgTElTVF9QUk9KRUNUID0gJ0xJU1RfUFJPSkVDVC5TT0NLRVQuRVZFTlQnLFxyXG4gIFVQREFURV9QUk9KRUNUID0gJ1VQREFURV9QUk9KRUNULlNPQ0tFVC5FVkVOVCcsXHJcbiAgREVMX1BST0pFQ1QgPSAnREVMX1BST0pFQ1QuU09DS0VULkVWRU5UJ1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgRVZFTlRTID0geyAuLi5FVXNlckV2ZW50LCAuLi5FUHJvamVjdEV2ZW50IH1cclxuIiwiZXhwb3J0ICogZnJvbSAnLi9FQmFzZUNvbnN0YW50J1xyXG5leHBvcnQgKiBmcm9tICcuL0V2ZW50cydcclxuIiwiZXhwb3J0IGNvbnN0IFVTRVJfRklMRV9QQVRIOiBzdHJpbmcgPSAnLi91c2VyLmpzb24nIiwibGV0IFRZUEVTID0ge1xyXG4gIEFwcGxpY2F0aW9uOiBTeW1ib2woJ0FwcGxpY2F0aW9uJyksXHJcbiAgU29ja2V0SU86IFN5bWJvbCgnU29ja2V0SU8uU2VydmVyJyksXHJcbiAgUHJlQnVpbGRJbml0aWFsaXplcjogU3ltYm9sKCdQcmVCdWlsZEluaXRpYWxpemVyJyksXHJcbiAgUG9zdEluc3RhbnRpYXRlSW5pdGlhbGl6ZXI6IFN5bWJvbCgnUG9zdEluc3RhbnRpYXRlSW5pdGlhbGl6ZXInKSxcclxuICBJRXZlbnRNYW5hZ2VyOiBTeW1ib2woJ0lFdmVudE1hbmFnZXInKSxcclxuICBJRXZlbnRMaXN0ZW5lcjogU3ltYm9sKCdJRXZlbnRMaXN0ZW5lcicpLFxyXG4gIElFdmVudE1hbmFnZXJQcm92aWRlcjogU3ltYm9sKCdJRXZlbnRNYW5hZ2VyUHJvdmlkZXInKSxcclxuICBVc2VyU2VydmljZTogU3ltYm9sKCdVc2VyU2VydmljZScpLFxyXG4gIFByb2plY3RTZXJ2aWNlOiBTeW1ib2woJ1Byb2plY3RTZXJ2aWNlJylcclxufVxyXG5cclxuZXhwb3J0IHsgVFlQRVMgfVxyXG4iLCJleHBvcnQgKiBmcm9tICcuL0ZpbGVQYXRoJ1xyXG5leHBvcnQgKiBmcm9tICcuL1R5cGVzJ1xyXG4iLCJpbXBvcnQgeyBVc2VyU2VydmljZUltcGwgfSBmcm9tICcuLy4uL3NlcnZpY2UvaW1wbC9Vc2VyU2VydmljZUltcGwnXHJcbmltcG9ydCB7IHByb3ZpZGUsIGluamVjdCwgcHJvdmlkZU5hbWVkIH0gZnJvbSAnLi4vY29yZS9pb2MnXHJcbmltcG9ydCB7IFRZUEVTIH0gZnJvbSAnLi4vY29uc3RhbnQnXHJcbmltcG9ydCB7XHJcbiAgY29udHJvbGxlcixcclxuICBodHRwR2V0LFxyXG4gIGludGVyZmFjZXMsXHJcbiAgVFlQRSxcclxuICBodHRwUG9zdFxyXG59IGZyb20gJ2ludmVyc2lmeS1leHByZXNzLXV0aWxzJ1xyXG5pbXBvcnQgeyBJVXNlclNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlJ1xyXG5pbXBvcnQgeyBSZXF1ZXN0LCBSZXNwb25zZSB9IGZyb20gJ2V4cHJlc3MnXHJcblxyXG4vLyBAcHJvdmlkZShUWVBFUy5JVXNlclNlcnZpY2UsIHRydWUpXHJcbi8vIEBwcm92aWRlTmFtZWQoVFlQRS5Db250cm9sbGVyLCAnVXNlckNvbnRyb2xsZXInKVxyXG5AY29udHJvbGxlcignL3VzZXInKVxyXG5leHBvcnQgY2xhc3MgVXNlckNvbnRyb2xsZXIgaW1wbGVtZW50cyBpbnRlcmZhY2VzLkNvbnRyb2xsZXIge1xyXG4gIC8vIEBpbmplY3QoVFlQRVMuVXNlclNlcnZpY2UpXHJcbiAgLy8gcHJpdmF0ZSBfdXNlclNlcnZpY2UhOiBJVXNlclNlcnZpY2VcclxuICBjb25zdHJ1Y3RvcihcclxuICAgIEBpbmplY3QoVFlQRVMuVXNlclNlcnZpY2UpIHByaXZhdGUgX3VzZXJTZXJ2aWNlOiBVc2VyU2VydmljZUltcGxcclxuICApIHt9XHJcblxyXG4gIEBodHRwUG9zdCgnLycpXHJcbiAgcHJpdmF0ZSBhc3luYyBjcmVhdGUocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICByZXMuc2VuZChhd2FpdCB0aGlzLl91c2VyU2VydmljZS5jcmVhdGUocmVxLmJvZHkpKVxyXG4gIH1cclxuXHJcbiAgQGh0dHBHZXQoJy8nKVxyXG4gIHB1YmxpYyBhc3luYyBsaXN0KHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgcmVzLnNlbmQoYXdhaXQgdGhpcy5fdXNlclNlcnZpY2UubGlzdCgpKVxyXG4gIH1cclxufVxyXG4iLCJleHBvcnQgKiBmcm9tICcuL1VzZXJDb250cm9sbGVyJ1xyXG4iLCJpbXBvcnQgeyBwcm92aWRlIH0gZnJvbSAnaW52ZXJzaWZ5LWJpbmRpbmctZGVjb3JhdG9ycydcclxuaW1wb3J0IHsgSVBvc3RJbnN0YW50aWF0ZUluaXRpYWxpemVyIH0gZnJvbSAnLi9pbml0aWFsaXplci9JUG9zdEluc3RhbnRpYXRlSW5pdGlhbGl6ZXInXHJcbmltcG9ydCB7IFRZUEVTIH0gZnJvbSAnLi4vY29uc3RhbnQnXHJcbmltcG9ydCB7IElQcmVCdWlsZEluaXRpYWxpemVyIH0gZnJvbSAnLi9pbml0aWFsaXplci9JUHJlQnVpbGRJbml0aWFsaXplcidcclxuaW1wb3J0IGh0dHAgZnJvbSAnaHR0cCdcclxuaW1wb3J0IHsgSW52ZXJzaWZ5RXhwcmVzc1NlcnZlciB9IGZyb20gJ2ludmVyc2lmeS1leHByZXNzLXV0aWxzJ1xyXG5pbXBvcnQgeyBtdWx0aUluamVjdCwgaW50ZXJmYWNlcyBhcyBpbnZlcnNpZnlJbnRlcmZhY2VzIH0gZnJvbSAnaW52ZXJzaWZ5J1xyXG5pbXBvcnQgc2hhcmVDb25maWcgZnJvbSAnQHNoYXJlL2NvbmZpZydcclxuaW1wb3J0IGV4cHJlc3MgZnJvbSAnZXhwcmVzcydcclxuaW1wb3J0IGlvIGZyb20gJ3NvY2tldC5pbydcclxuaW1wb3J0IHsgcHJvdmlkZVNpbmdsZXRvbiB9IGZyb20gJy4vaW9jJ1xyXG5cclxuQHByb3ZpZGVTaW5nbGV0b24oVFlQRVMuQXBwbGljYXRpb24pXHJcbmV4cG9ydCBjbGFzcyBBcHBsaWNhdGlvbiB7XHJcbiAgcHJpdmF0ZSBfZXhwcmVzcyE6IEludmVyc2lmeUV4cHJlc3NTZXJ2ZXJcclxuICBwcml2YXRlIF9odHRwU2VydmVyITogaHR0cC5TZXJ2ZXJcclxuICBwcml2YXRlIF9wcmVCdWlsZEluaXRpYWxpemVyczogSVByZUJ1aWxkSW5pdGlhbGl6ZXJbXVxyXG4gIHByaXZhdGUgX3Bvc3RJbnN0YW50aWF0ZUluaXRpYWxpemVycyE6IElQb3N0SW5zdGFudGlhdGVJbml0aWFsaXplcltdXHJcbiAgcHJpdmF0ZSBfYXBwITogZXhwcmVzcy5BcHBsaWNhdGlvblxyXG5cclxuICBwdWJsaWMgY29uc3RydWN0b3IoXHJcbiAgICBAbXVsdGlJbmplY3QoVFlQRVMuUHJlQnVpbGRJbml0aWFsaXplcilcclxuICAgIHByZUJ1aWxkSW5pdGlhbGl6ZXJzOiBJUHJlQnVpbGRJbml0aWFsaXplcltdXHJcbiAgKSB7XHJcbiAgICB0aGlzLl9wcmVCdWlsZEluaXRpYWxpemVycyA9IHByZUJ1aWxkSW5pdGlhbGl6ZXJzXHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2V0RXhwcmVzcyhleHByZXNzOiBJbnZlcnNpZnlFeHByZXNzU2VydmVyKSB7XHJcbiAgICB0aGlzLl9leHByZXNzID0gZXhwcmVzc1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldEh0dHBTZXJ2ZXIoKTogaHR0cC5TZXJ2ZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuX2h0dHBTZXJ2ZXJcclxuICB9XHJcblxyXG4gIHB1YmxpYyBydW4oY29udGFpbmVyOiBpbnZlcnNpZnlJbnRlcmZhY2VzLkNvbnRhaW5lcik6IHZvaWQge1xyXG4gICAgdGhpcy5wcmVCdWlsZEluaXQodGhpcy5fZXhwcmVzcylcclxuICAgICAgLnRoZW4oKCkgPT4gdGhpcy5pbnN0YW50aWF0ZShjb250YWluZXIpKVxyXG4gICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5fcG9zdEluc3RhbnRpYXRlSW5pdGlhbGl6ZXJzID0gY29udGFpbmVyLmdldEFsbDxcclxuICAgICAgICAgIElQb3N0SW5zdGFudGlhdGVJbml0aWFsaXplclxyXG4gICAgICAgID4oVFlQRVMuUG9zdEluc3RhbnRpYXRlSW5pdGlhbGl6ZXIpXHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICB0aGlzLnBvc3RJbml0aWFsaXplZCgpXHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyOiBFcnJvcikgPT4gY29uc29sZS5sb2coZXJyKSlcclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCBpbnN0YW50aWF0ZShcclxuICAgIGNvbnRhaW5lcjogaW52ZXJzaWZ5SW50ZXJmYWNlcy5Db250YWluZXJcclxuICApOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZTx2b2lkPihyZXNvbHZlID0+IHtcclxuICAgICAgdGhpcy5fYXBwID0gdGhpcy5fZXhwcmVzcy5idWlsZCgpXHJcbiAgICAgIGNvbnN0IHBvcnQgPSBzaGFyZUNvbmZpZy5TT0NLRVRJT19TRVJWRVJfUE9SVFxyXG5cclxuICAgICAgdGhpcy5faHR0cFNlcnZlciA9IHRoaXMuX2FwcC5saXN0ZW4ocG9ydCwgKCkgPT5cclxuICAgICAgICBjb25zb2xlLmxvZyhgU2VydmVyIHN0YXJ0ZWQgYXQgcG9ydDogJHtwb3J0fWApXHJcbiAgICAgIClcclxuXHJcbiAgICAgIGNvbnN0IHNvY2tldElPOiBTb2NrZXRJTy5TZXJ2ZXIgPSBpbyh0aGlzLmdldEh0dHBTZXJ2ZXIoKSlcclxuICAgICAgY29udGFpbmVyLmJpbmQ8U29ja2V0SU8uU2VydmVyPihUWVBFUy5Tb2NrZXRJTykudG9Db25zdGFudFZhbHVlKHNvY2tldElPKVxyXG4gICAgICByZXNvbHZlKClcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgcHJlQnVpbGRJbml0KGV4cHJlc3M6IEludmVyc2lmeUV4cHJlc3NTZXJ2ZXIpOiBQcm9taXNlPHZvaWRbXT4ge1xyXG4gICAgcmV0dXJuIFByb21pc2UuYWxsKFxyXG4gICAgICB0aGlzLl9wcmVCdWlsZEluaXRpYWxpemVycy5tYXAoKGluaXRpYWxpemVyOiBJUHJlQnVpbGRJbml0aWFsaXplcikgPT5cclxuICAgICAgICBpbml0aWFsaXplci5hcHBseVRvKGV4cHJlc3MpXHJcbiAgICAgIClcclxuICAgIClcclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCBwb3N0SW5pdGlhbGl6ZWQoKTogUHJvbWlzZTx2b2lkW10+IHtcclxuICAgIHJldHVybiBQcm9taXNlLmFsbChcclxuICAgICAgdGhpcy5fcG9zdEluc3RhbnRpYXRlSW5pdGlhbGl6ZXJzLm1hcChcclxuICAgICAgICAoaW5pdGlhbGl6ZXI6IElQb3N0SW5zdGFudGlhdGVJbml0aWFsaXplcikgPT5cclxuICAgICAgICAgIGluaXRpYWxpemVyLmFwcGx5VG8odGhpcy5faHR0cFNlcnZlcilcclxuICAgICAgKVxyXG4gICAgKVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBUQUdTIH0gZnJvbSAnLi4vLi4vLi4vY29uc3RhbnQvVGFncydcclxuaW1wb3J0IHsgSUV2ZW50TGlzdGVuZXIgfSBmcm9tICcuLi9JRXZlbnRMaXN0ZW5lcidcclxuaW1wb3J0IHsgRVZFTlRfVFlQRVMgfSBmcm9tICdAc2hhcmUvY29uc3RhbnQnXHJcbmltcG9ydCB7IElFdmVudE1hbmFnZXJQcm92aWRlciB9IGZyb20gJy4uL0lFdmVudE1hbmFnZXInXHJcbmltcG9ydCB7IFRZUEVTIH0gZnJvbSAnLi4vLi4vLi4vY29uc3RhbnQnXHJcbmltcG9ydCB7IHByb3ZpZGVOYW1lZFNpbmdsZXRvbiwgaW5qZWN0LCBwcm92aWRlU2luZ2xldG9uIH0gZnJvbSAnLi4vLi4vaW9jJ1xyXG5cclxuLy8gQHByb3ZpZGVOYW1lZFNpbmdsZXRvbihcclxuLy8gICBUWVBFUy5JRXZlbnRNYW5hZ2VyUHJvdmlkZXIsXHJcbi8vICAgVEFHUy5Tb2NrZXRFdmVudE1hbmFnZXJQcm92aWRlclxyXG4vLyApXHJcbkBwcm92aWRlU2luZ2xldG9uKFRZUEVTLklFdmVudE1hbmFnZXJQcm92aWRlcilcclxuZXhwb3J0IGNsYXNzIFNvY2tldElPRXZlbnRNYW5hZ2VyIGltcGxlbWVudHMgSUV2ZW50TWFuYWdlclByb3ZpZGVyIHtcclxuICBwcm90ZWN0ZWQgX3NvY2tldFNlcnZlcjogU29ja2V0SU8uU2VydmVyXHJcbiAgcHJvdGVjdGVkIF9zb2NrZXQhOiBTb2NrZXRJTy5Tb2NrZXRcclxuXHJcbiAgcHVibGljIGNvbnN0cnVjdG9yKEBpbmplY3QoVFlQRVMuU29ja2V0SU8pIHNvY2tldFNlcnZlcjogU29ja2V0SU8uU2VydmVyKSB7XHJcbiAgICB0aGlzLl9zb2NrZXRTZXJ2ZXIgPSBzb2NrZXRTZXJ2ZXJcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZXQgc29ja2V0KHNvY2tldDogU29ja2V0SU8uU29ja2V0KSB7XHJcbiAgICB0aGlzLl9zb2NrZXQgPSBzb2NrZXRcclxuICB9XHJcbiAgdHlwZSgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIEVWRU5UX1RZUEVTLnNvY2tldFxyXG4gIH1cclxuICBlbWl0KGV2ZW50OiBpbXBvcnQoJy4uL0lFdmVudCcpLklFdmVudCk6IHZvaWQge1xyXG4gICAgdGhpcy5fc29ja2V0U2VydmVyLmVtaXQoZXZlbnQubmFtZSgpLCBldmVudC5kYXRhKCkpXHJcbiAgfVxyXG4gIG9uKGV2ZW50TmFtZTogc3RyaW5nLCBjYWxsYmFjazogRnVuY3Rpb24pOiB2b2lkIHtcclxuICAgIC8vIHRoaXMuX3NvY2tldFNlcnZlci5vbihldmVudE5hbWUsIGNhbGxiYWNrKVxyXG4gIH1cclxuXHJcbiAgcHVibGljIGluaXRTb2NrZXRMaXN0ZW5lcihcclxuICAgIHNvY2tldDogU29ja2V0SU8uU29ja2V0LFxyXG4gICAgZXZlbnRMaXN0ZW5lcnM6IElFdmVudExpc3RlbmVyW11cclxuICApOiB2b2lkIHtcclxuICAgIGV2ZW50TGlzdGVuZXJzXHJcbiAgICAgIC5maWx0ZXIoXHJcbiAgICAgICAgKGV2ZW50TGlzdGVuZXI6IElFdmVudExpc3RlbmVyKSA9PiBldmVudExpc3RlbmVyLnR5cGUoKSA9PT0gdGhpcy50eXBlKClcclxuICAgICAgKVxyXG4gICAgICAuZm9yRWFjaCgoZXZlbnRMaXN0ZW5lcjogSUV2ZW50TGlzdGVuZXIpID0+XHJcbiAgICAgICAgZXZlbnRMaXN0ZW5lci5oYW5kbGVycygpLmZvckVhY2goKGV2ZW50SGFuZGVyOiBGdW5jdGlvbikgPT5cclxuICAgICAgICAgICgoaGFuZGVyOiBGdW5jdGlvbikgPT4ge1xyXG4gICAgICAgICAgICBzb2NrZXQub24oZXZlbnRMaXN0ZW5lci5uYW1lKCksIChhY3Rpb246IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgIC8vIGhhbmRlci5hcHBseShudWxsLCBwYXlsb2FkKVxyXG4gICAgICAgICAgICAgIGhhbmRlcihhY3Rpb24pXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICB9KShldmVudEhhbmRlcilcclxuICAgICAgICApXHJcbiAgICAgIClcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29ubmVjdGlvbiwgY3JlYXRlQ29ubmVjdGlvbiB9IGZyb20gJ3R5cGVvcm0nXHJcblxyXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi4vLi4vbW9kZWwvVXNlcidcclxuaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gJy4uLy4uL21vZGVsL1Byb2plY3QnXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIERCQ29uZmlndXJhdGlvbiB7XHJcbiAgdHlwZTogJ3Bvc3RncmVzJyB8ICdteXNxbCcgfCAnbW9uZ29kYidcclxuICBob3N0OiBzdHJpbmdcclxuICBwb3J0OiBudW1iZXJcclxuICB1c2VybmFtZTogc3RyaW5nXHJcbiAgcGFzc3dvcmQ6IHN0cmluZ1xyXG4gIGRhdGFiYXNlOiBzdHJpbmdcclxuICBzc2w/OiBib29sZWFuXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBEQlByb3ZpZGVyIHtcclxuICBwcml2YXRlIHN0YXRpYyBjb25uZWN0aW9uOiBDb25uZWN0aW9uXHJcbiAgcHJpdmF0ZSBzdGF0aWMgY29uZmlndXJhdGlvbjogREJDb25maWd1cmF0aW9uXHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgY29uZmlndXJlKGRhdGFiYXNlQ29uZmlndXJhdGlvbjogREJDb25maWd1cmF0aW9uKTogdm9pZCB7XHJcbiAgICBEQlByb3ZpZGVyLmNvbmZpZ3VyYXRpb24gPSBkYXRhYmFzZUNvbmZpZ3VyYXRpb25cclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgYXN5bmMgZ2V0Q29ubmVjdGlvbigpOiBQcm9taXNlPENvbm5lY3Rpb24+IHtcclxuICAgIGlmIChEQlByb3ZpZGVyLmNvbm5lY3Rpb24pIHtcclxuICAgICAgcmV0dXJuIERCUHJvdmlkZXIuY29ubmVjdGlvblxyXG4gICAgfVxyXG5cclxuICAgIGlmICghREJQcm92aWRlci5jb25maWd1cmF0aW9uKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignUGxlYXNlIGNvbmZpZ3VyZS4nKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHtcclxuICAgICAgdHlwZSxcclxuICAgICAgaG9zdCxcclxuICAgICAgcG9ydCxcclxuICAgICAgdXNlcm5hbWUsXHJcbiAgICAgIHBhc3N3b3JkLFxyXG4gICAgICBkYXRhYmFzZSxcclxuICAgICAgc3NsXHJcbiAgICB9ID0gREJQcm92aWRlci5jb25maWd1cmF0aW9uXHJcblxyXG4gICAgREJQcm92aWRlci5jb25uZWN0aW9uID0gYXdhaXQgY3JlYXRlQ29ubmVjdGlvbih7XHJcbiAgICAgIHR5cGUsXHJcbiAgICAgIGhvc3QsXHJcbiAgICAgIHBvcnQsXHJcbiAgICAgIHVzZXJuYW1lLFxyXG4gICAgICBwYXNzd29yZCxcclxuICAgICAgZGF0YWJhc2UsXHJcbiAgICAgIGV4dHJhOiB7IHNzbCB9LFxyXG4gICAgICBlbnRpdGllczogW1VzZXIsIFByb2plY3RdLFxyXG4gICAgICBzeW5jaHJvbml6ZTogdHJ1ZVxyXG4gICAgfSlcclxuXHJcbiAgICByZXR1cm4gREJQcm92aWRlci5jb25uZWN0aW9uXHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IHByb3ZpZGVTaW5nbGV0b24gfSBmcm9tICcuLi8uLi9pb2MnXHJcbmltcG9ydCB7IElQcmVCdWlsZEluaXRpYWxpemVyIH0gZnJvbSAnLi4vSVByZUJ1aWxkSW5pdGlhbGl6ZXInXHJcbmltcG9ydCB7IEludmVyc2lmeUV4cHJlc3NTZXJ2ZXIgfSBmcm9tICdpbnZlcnNpZnktZXhwcmVzcy11dGlscydcclxuaW1wb3J0IGV4cHJlc3MgZnJvbSAnZXhwcmVzcydcclxuaW1wb3J0IGJvZHlQYXJzZXIgZnJvbSAnYm9keS1wYXJzZXInXHJcbmltcG9ydCB7IFRZUEVTIH0gZnJvbSAnLi4vLi4vLi4vY29uc3RhbnQnXHJcbmltcG9ydCBzaGFyZUNvbmZpZyBmcm9tICdAc2hhcmUvY29uZmlnJ1xyXG5pbXBvcnQgeyBEQlByb3ZpZGVyIH0gZnJvbSAnLi4vLi4vaGVscGVyL0RCSGVscGVyJ1xyXG5cclxuQHByb3ZpZGVTaW5nbGV0b24oVFlQRVMuUHJlQnVpbGRJbml0aWFsaXplcilcclxuZXhwb3J0IGNsYXNzIENvbmZpZ1ByZUJ1aWxkSW5pdGlhbGl6ZXIgaW1wbGVtZW50cyBJUHJlQnVpbGRJbml0aWFsaXplciB7XHJcbiAgYXBwbHlUbyhleHByZXNzU2VydmVyOiBJbnZlcnNpZnlFeHByZXNzU2VydmVyKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2U8dm9pZD4ocmVzb2x2ZSA9PiB7XHJcbiAgICAgIGV4cHJlc3NTZXJ2ZXIuc2V0Q29uZmlnKChhcHA6IGV4cHJlc3MuQXBwbGljYXRpb24pID0+IHtcclxuICAgICAgICBhcHAudXNlKGJvZHlQYXJzZXIudXJsZW5jb2RlZCh7IGV4dGVuZGVkOiB0cnVlIH0pKVxyXG4gICAgICAgIGFwcC51c2UoYm9keVBhcnNlci5qc29uKCkpXHJcbiAgICAgICAgLy8gV2VicGFjay1EZXYtU2VydmVyXHJcbiAgICAgICAgLy8gYXBwLnVzZShcclxuICAgICAgICAvLyAgICcvJyxcclxuICAgICAgICAvLyAgIGV4cHJlc3Muc3RhdGljKHNoYXJlQ29uZmlnLkFQUF9JTkRPT1JfU1RBVElDX0ZJTEUgYXMgc3RyaW5nKVxyXG4gICAgICAgIC8vIClcclxuXHJcbiAgICAgICAgLy8gREJcclxuICAgICAgICBEQlByb3ZpZGVyLmNvbmZpZ3VyZSh7XHJcbiAgICAgICAgICB0eXBlOiAncG9zdGdyZXMnLFxyXG4gICAgICAgICAgZGF0YWJhc2U6ICdhcHBfaW5kb29yJyxcclxuICAgICAgICAgIHVzZXJuYW1lOiAncG9zdGdyZXMnLFxyXG4gICAgICAgICAgcGFzc3dvcmQ6ICdyb290JyxcclxuICAgICAgICAgIGhvc3Q6ICdsb2NhbGhvc3QnLFxyXG4gICAgICAgICAgcG9ydDogNTQzMlxyXG4gICAgICAgIH0pXHJcbiAgICAgIH0pXHJcbiAgICAgIHJlc29sdmUoKVxyXG4gICAgfSlcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgVEFHUyB9IGZyb20gJy4vLi4vLi4vLi4vY29uc3RhbnQvVGFncydcclxuaW1wb3J0IHsgU29ja2V0SU9FdmVudE1hbmFnZXIgfSBmcm9tICcuLi8uLi9ldmVudC9wcm92aWRlci9Tb2NrZXRJT0V2ZW50TWFuYWdlcidcclxuaW1wb3J0IHsgRVZFTlRfVFlQRVMgfSBmcm9tICdAc2hhcmUvY29uc3RhbnQnXHJcbmltcG9ydCB7IElFdmVudExpc3RlbmVyIH0gZnJvbSAnLi4vLi4vZXZlbnQvSUV2ZW50TGlzdGVuZXInXHJcbmltcG9ydCB7IElFdmVudE1hbmFnZXIsIElFdmVudE1hbmFnZXJQcm92aWRlciB9IGZyb20gJy4uLy4uL2V2ZW50L0lFdmVudE1hbmFnZXInXHJcbmltcG9ydCB7IElQb3N0SW5zdGFudGlhdGVJbml0aWFsaXplciB9IGZyb20gJy4uL0lQb3N0SW5zdGFudGlhdGVJbml0aWFsaXplcidcclxuaW1wb3J0IHsgaW5qZWN0IH0gZnJvbSAnaW52ZXJzaWZ5J1xyXG5pbXBvcnQgeyBUWVBFUyB9IGZyb20gJy4uLy4uLy4uL2NvbnN0YW50J1xyXG5pbXBvcnQge1xyXG4gIHByb3ZpZGVTaW5nbGV0b24sXHJcbiAgbXVsdGlJbmplY3QsXHJcbiAgbmFtZWQsXHJcbiAgbGF6eU11bHRpSW5qZWN0XHJcbn0gZnJvbSAnLi4vLi4vaW9jJ1xyXG5cclxuQHByb3ZpZGVTaW5nbGV0b24oVFlQRVMuUG9zdEluc3RhbnRpYXRlSW5pdGlhbGl6ZXIpXHJcbmV4cG9ydCBjbGFzcyBFdmVuTWFuYWdlckluaXRpYWxpemVyIGltcGxlbWVudHMgSVBvc3RJbnN0YW50aWF0ZUluaXRpYWxpemVyIHtcclxuICAvLyBAbXVsdGlJbmplY3QoVFlQRVMuSUV2ZW50TWFuYWdlclByb3ZpZGVyKSBwdWJsaWMgX2V2ZW50TWFuYWdlcjogSUV2ZW50TWFuYWdlclxyXG4gIC8vIEBsYXp5TXVsdGlJbmplY3QoVFlQRVMuSUV2ZW50TWFuYWdlclByb3ZpZGVyKVxyXG4gIC8vIHByaXZhdGUgX2V2ZW50TWFuYWdlcjogSUV2ZW50TWFuYWdlclxyXG4gIHByaXZhdGUgX2V2ZW50TWFuYWdlcjogSUV2ZW50TWFuYWdlclxyXG4gIHByaXZhdGUgX2V2ZW50UHJvdmlkZXJzITogSUV2ZW50TWFuYWdlclByb3ZpZGVyW11cclxuICBwcml2YXRlIF9ldmVudExpc3RlbmVyczogSUV2ZW50TGlzdGVuZXJbXVxyXG4gIHByaXZhdGUgX3NvY2tldElPOiBTb2NrZXRJTy5TZXJ2ZXJcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBAaW5qZWN0KFRZUEVTLklFdmVudE1hbmFnZXIpIGV2ZW50TWFuYWdlcjogSUV2ZW50TWFuYWdlcixcclxuICAgIC8vIHNpbmdsZSBpbmplY3RcclxuICAgIC8vIEBpbmplY3QoVFlQRVMuSUV2ZW50TWFuYWdlclByb3ZpZGVyKVxyXG4gICAgLy8gQG5hbWVkKFRBR1MuU29ja2V0RXZlbnRNYW5hZ2VyUHJvdmlkZXIpXHJcbiAgICAvLyBldmVudFByb3ZpZGVyczogSUV2ZW50TWFuYWdlclByb3ZpZGVyW10sXHJcbiAgICAvLyBpbnZlcnNpZnktaW5qZWN0LWRlY29yYXRvcnNcclxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9pbnZlcnNpZnkvSW52ZXJzaWZ5SlMvaXNzdWVzLzM0MlxyXG4gICAgQG11bHRpSW5qZWN0KFRZUEVTLklFdmVudE1hbmFnZXJQcm92aWRlcilcclxuICAgIGV2ZW50UHJvdmlkZXJzOiBJRXZlbnRNYW5hZ2VyUHJvdmlkZXJbXSxcclxuICAgIEBtdWx0aUluamVjdChUWVBFUy5JRXZlbnRMaXN0ZW5lcikgZXZlbnRMaXN0ZW5lcnM6IElFdmVudExpc3RlbmVyW10sXHJcbiAgICBAaW5qZWN0KFRZUEVTLlNvY2tldElPKSBzb2NrZXRJTzogU29ja2V0SU8uU2VydmVyXHJcbiAgKSB7XHJcbiAgICB0aGlzLl9ldmVudE1hbmFnZXIgPSBldmVudE1hbmFnZXJcclxuICAgIHRoaXMuX2V2ZW50UHJvdmlkZXJzID0gZXZlbnRQcm92aWRlcnNcclxuICAgIHRoaXMuX2V2ZW50TGlzdGVuZXJzID0gZXZlbnRMaXN0ZW5lcnNcclxuICAgIHRoaXMuX3NvY2tldElPID0gc29ja2V0SU9cclxuICB9XHJcbiAgYXBwbHlUbyhzZXJ2ZXI6IGltcG9ydCgnaHR0cCcpLlNlcnZlcik6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPHZvaWQ+KHJlc29sdmUgPT4ge1xyXG4gICAgICB0aGlzLl9ldmVudE1hbmFnZXIuaW5pdFByb3ZpZGVycyh0aGlzLl9ldmVudFByb3ZpZGVycylcclxuICAgICAgdGhpcy5fZXZlbnRNYW5hZ2VyLmluaXRMaXN0ZW5lcnModGhpcy5fZXZlbnRMaXN0ZW5lcnMpXHJcbiAgICAgIHRoaXMuX3NvY2tldElPLm9uKCdjb25uZWN0JywgKHNvY2tldDogU29ja2V0SU8uU29ja2V0KSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1NvY2tldCBjb25uZWN0ZWQuLi4nKVxyXG4gICAgICAgIDsoPFNvY2tldElPRXZlbnRNYW5hZ2VyPihcclxuICAgICAgICAgIHRoaXMuX2V2ZW50TWFuYWdlci5nZXRSZWdpc3RlcmVkRXZlbnRQcm92aWRlcihFVkVOVF9UWVBFUy5zb2NrZXQpXHJcbiAgICAgICAgKSkuaW5pdFNvY2tldExpc3RlbmVyKHNvY2tldCwgdGhpcy5fZXZlbnRMaXN0ZW5lcnMpXHJcbiAgICAgIH0pXHJcblxyXG4gICAgICByZXNvbHZlKClcclxuICAgIH0pXHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IElFdmVudExpc3RlbmVyIH0gZnJvbSAnLi4vLi4vZXZlbnQvSUV2ZW50TGlzdGVuZXInXHJcbi8vIGltcG9ydCB7IEV2ZW50SGFuZGxlciB9IGZyb20gJy4uLy4uLy4uL2NvcmUvZXZlbnQvbWFuZ2VyL0lFdmVudExpc3RlbmVyJ1xyXG5pbXBvcnQgZm9yRWFjaCBmcm9tICdsb2Rhc2gvZm9yZWFjaCdcclxuaW1wb3J0IHsgSUV2ZW50TWFuYWdlciwgSUV2ZW50TWFuYWdlclByb3ZpZGVyIH0gZnJvbSAnLi4vLi4vZXZlbnQvSUV2ZW50TWFuYWdlcidcclxuaW1wb3J0IHsgcHJvdmlkZVNpbmdsZXRvbiB9IGZyb20gJy4uLy4uLy4uL2NvcmUvaW9jJ1xyXG5pbXBvcnQgeyBUWVBFUyB9IGZyb20gJy4uLy4uLy4uL2NvbnN0YW50J1xyXG5cclxuQHByb3ZpZGVTaW5nbGV0b24oVFlQRVMuSUV2ZW50TWFuYWdlcilcclxuZXhwb3J0IGNsYXNzIE11bHRpcGxlUHJvdmlkZXJzRXZlbnRNYW5hZ2VyIGltcGxlbWVudHMgSUV2ZW50TWFuYWdlciB7XHJcbiAgcHJvdGVjdGVkIHByb3ZpZGVyczogeyBbdHlwZTogc3RyaW5nXTogSUV2ZW50TWFuYWdlclByb3ZpZGVyIH0gPSB7fVxyXG4gIGluaXRQcm92aWRlcnMoXHJcbiAgICBwcm92aWRlcnM6IGltcG9ydCgnLi4vLi4vZXZlbnQvSUV2ZW50TWFuYWdlcicpLklFdmVudE1hbmFnZXJQcm92aWRlcltdXHJcbiAgKTogdGhpcyB7XHJcbiAgICBmb3JFYWNoKHByb3ZpZGVycywgdGhpcy5yZWdpc3RlclByb3ZpZGVyLmJpbmQodGhpcykpXHJcbiAgICByZXR1cm4gdGhpc1xyXG4gIH1cclxuICBpbml0TGlzdGVuZXJzKFxyXG4gICAgZXZlbnRMaXN0ZW5lcnM6IGltcG9ydCgnLi4vLi4vZXZlbnQvSUV2ZW50TGlzdGVuZXInKS5JRXZlbnRMaXN0ZW5lcltdXHJcbiAgKTogdGhpcyB7XHJcbiAgICBldmVudExpc3RlbmVycy5mb3JFYWNoKChldmVudExpc3RlbmVyOiBJRXZlbnRMaXN0ZW5lcikgPT5cclxuICAgICAgZXZlbnRMaXN0ZW5lclxyXG4gICAgICAgIC5oYW5kbGVycygpXHJcbiAgICAgICAgLmZvckVhY2goKGV2ZW50SGFuZGxlcjogYW55KSA9PlxyXG4gICAgICAgICAgdGhpcy5nZXRSZWdpc3RlcmVkRXZlbnRQcm92aWRlcihldmVudExpc3RlbmVyLnR5cGUoKSkub24oXHJcbiAgICAgICAgICAgIGV2ZW50TGlzdGVuZXIubmFtZSgpLFxyXG4gICAgICAgICAgICBldmVudEhhbmRsZXJcclxuICAgICAgICAgIClcclxuICAgICAgICApXHJcbiAgICApXHJcbiAgICByZXR1cm4gdGhpc1xyXG4gIH1cclxuICByZWdpc3RlclByb3ZpZGVyKFxyXG4gICAgcHJvdmlkZXI6IGltcG9ydCgnLi4vLi4vZXZlbnQvSUV2ZW50TWFuYWdlcicpLklFdmVudE1hbmFnZXJQcm92aWRlclxyXG4gICk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMucHJvdmlkZXJzW3Byb3ZpZGVyLnR5cGUoKV0pIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdFdmVudCBNYW5hZ2VyIHByb3ZpZGVyIGFscmVhZHkgcmVnaXN0ZXJlZCEnKVxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMucHJvdmlkZXJzW3Byb3ZpZGVyLnR5cGUoKV0gPSBwcm92aWRlclxyXG4gIH1cclxuICBnZXRSZWdpc3RlcmVkRXZlbnRQcm92aWRlcihcclxuICAgIGV2ZW50VHlwZTogc3RyaW5nXHJcbiAgKTogaW1wb3J0KCcuLi8uLi9ldmVudC9JRXZlbnRNYW5hZ2VyJykuSUV2ZW50TWFuYWdlclByb3ZpZGVyIHtcclxuICAgIGlmICghdGhpcy5wcm92aWRlcnNbZXZlbnRUeXBlXSkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1Vua25vd24gZXZlbnQgcHJvdmlkZXIgcmVxdWVzdGVkLicpXHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy5wcm92aWRlcnNbZXZlbnRUeXBlXVxyXG4gIH1cclxuICBlbWl0KGV2ZW50OiBpbXBvcnQoJy4uLy4uL2V2ZW50L0lFdmVudCcpLklFdmVudCk6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzLnByb3ZpZGVycy5oYXNPd25Qcm9wZXJ0eShldmVudC50eXBlKCkpKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBldmVudCB0eXBlIScpXHJcbiAgICB9XHJcbiAgICB0aGlzLnByb3ZpZGVyc1tldmVudC50eXBlKCldLmVtaXQoZXZlbnQpXHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCAncmVmbGVjdC1tZXRhZGF0YSdcclxuaW1wb3J0IHsgQ29udGFpbmVyLCBpbmplY3QsIGludGVyZmFjZXMsIG11bHRpSW5qZWN0LCBuYW1lZCB9IGZyb20gJ2ludmVyc2lmeSdcclxuaW1wb3J0IHtcclxuICBhdXRvUHJvdmlkZSxcclxuICBidWlsZFByb3ZpZGVyTW9kdWxlLFxyXG4gIGZsdWVudFByb3ZpZGUsXHJcbiAgcHJvdmlkZVxyXG59IGZyb20gJ2ludmVyc2lmeS1iaW5kaW5nLWRlY29yYXRvcnMnXHJcbmltcG9ydCB7XHJcbiAgbWFrZUxvZ2dlck1pZGRsZXdhcmUsXHJcbiAgdGV4dFNlcmlhbGl6ZXJcclxufSBmcm9tICdpbnZlcnNpZnktbG9nZ2VyLW1pZGRsZXdhcmUnXHJcbmltcG9ydCBnZXREZWNvcmF0b3JzIGZyb20gJ2ludmVyc2lmeS1pbmplY3QtZGVjb3JhdG9ycydcclxuXHJcbmNvbnN0IGNvbnRhaW5lcjogaW50ZXJmYWNlcy5Db250YWluZXIgPSBuZXcgQ29udGFpbmVyKClcclxuXHJcbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xyXG4gIGxldCBsb2dnZXIgPSBtYWtlTG9nZ2VyTWlkZGxld2FyZSh1bmRlZmluZWQsIG91dCA9PlxyXG4gICAgY29uc29sZS5sb2codGV4dFNlcmlhbGl6ZXIob3V0KSlcclxuICApXHJcbiAgY29udGFpbmVyLmFwcGx5TWlkZGxld2FyZShsb2dnZXIpXHJcbn1cclxuXHJcbmNvbnN0IHByb3ZpZGVUaHJvd2FibGUgPSBmdW5jdGlvbihpZGVudGlmaWVyOiBhbnksIGlzVGhyb3dhYmxlOiBib29sZWFuKSB7XHJcbiAgcmV0dXJuIGZsdWVudFByb3ZpZGUoaWRlbnRpZmllcilcclxuICAgIC53aGVuVGFyZ2V0VGFnZ2VkKCd0aHJvd2FibGUnLCBpc1Rocm93YWJsZSlcclxuICAgIC5kb25lKClcclxufVxyXG5cclxuY29uc3QgcHJvdmlkZU5hbWVkID0gZnVuY3Rpb24oaWRlbnRpZmllcjogYW55LCBuYW1lOiBzdHJpbmcpIHtcclxuICByZXR1cm4gZmx1ZW50UHJvdmlkZShpZGVudGlmaWVyKVxyXG4gICAgLndoZW5UYXJnZXROYW1lZChuYW1lKVxyXG4gICAgLmRvbmUoKVxyXG59XHJcbmNvbnN0IHByb3ZpZGVTaW5nbGV0b24gPSBmdW5jdGlvbihpZGVudGlmaWVyOiBhbnkpIHtcclxuICByZXR1cm4gZmx1ZW50UHJvdmlkZShpZGVudGlmaWVyKVxyXG4gICAgLmluU2luZ2xldG9uU2NvcGUoKVxyXG4gICAgLmRvbmUoKVxyXG59XHJcblxyXG5jb25zdCBwcm92aWRlTmFtZWRTaW5nbGV0b24gPSBmdW5jdGlvbihpZGVudGlmaWVyOiBhbnksIG5hbWU6IHN0cmluZykge1xyXG4gIHJldHVybiBmbHVlbnRQcm92aWRlKGlkZW50aWZpZXIpXHJcbiAgICAuaW5TaW5nbGV0b25TY29wZSgpXHJcbiAgICAud2hlblRhcmdldE5hbWVkKG5hbWUpXHJcbiAgICAuZG9uZSgpXHJcbn1cclxuXHJcbmNvbnN0IHByb3ZpZGVUYWdnZWRTaW5nbGV0b24gPSBmdW5jdGlvbihcclxuICBpZGVudGlmaWVyOiBhbnksXHJcbiAgdGFnOiBzdHJpbmcsXHJcbiAgdmFsdWU6IGFueVxyXG4pIHtcclxuICByZXR1cm4gZmx1ZW50UHJvdmlkZShpZGVudGlmaWVyKVxyXG4gICAgLmluU2luZ2xldG9uU2NvcGUoKVxyXG4gICAgLndoZW5UYXJnZXRUYWdnZWQodGFnLCB2YWx1ZSlcclxuICAgIC5kb25lKClcclxufVxyXG5cclxubGV0IHsgbGF6eUluamVjdCwgbGF6eU11bHRpSW5qZWN0IH0gPSBnZXREZWNvcmF0b3JzKGNvbnRhaW5lcilcclxuXHJcbmV4cG9ydCB7XHJcbiAgY29udGFpbmVyLFxyXG4gIGF1dG9Qcm92aWRlLFxyXG4gIHByb3ZpZGUsXHJcbiAgcHJvdmlkZVRocm93YWJsZSxcclxuICBwcm92aWRlTmFtZWQsXHJcbiAgaW5qZWN0LFxyXG4gIG11bHRpSW5qZWN0LFxyXG4gIGxhenlJbmplY3QsXHJcbiAgbGF6eU11bHRpSW5qZWN0LFxyXG4gIG5hbWVkLFxyXG4gIHByb3ZpZGVTaW5nbGV0b24sXHJcbiAgcHJvdmlkZU5hbWVkU2luZ2xldG9uLFxyXG4gIHByb3ZpZGVUYWdnZWRTaW5nbGV0b24sXHJcbiAgYnVpbGRQcm92aWRlck1vZHVsZVxyXG59XHJcbiIsIi8vIHNvcnQgaXMgaW1wb3J0XHJcbmltcG9ydCAnLi4vQXBwbGljYXRpb24nXHJcblxyXG4vLyBjb250cm9sbGVyXHJcbmltcG9ydCAnLi4vLi4vY29udHJvbGxlcidcclxuXHJcbi8vIHNlcnZpY2VcclxuLy8gaW1wb3J0ICcuLi9zZXJ2aWNlJ1xyXG5pbXBvcnQgJy4uLy4uL3NlcnZpY2UvaW1wbCdcclxuXHJcbi8vIGltcG9ydCAnLi4vaW5pdGlhbGl6ZXInXHJcbmltcG9ydCAnLi4vaW5pdGlhbGl6ZXIvaW1wbC9Db25maWdQcmVCdWlsZEluaXRpYWxpemVyJ1xyXG5pbXBvcnQgJy4uL2luaXRpYWxpemVyL2ltcGwvRXZlbk1hbmFnZXJJbml0aWFsaXplcidcclxuXHJcbi8vIGV2ZW50XHJcbmltcG9ydCAnLi4vLi4vY29yZS9pbml0aWFsaXplci9pbXBsL011bHRpcGxlUHJvdmlkZXJzRXZlbnRNYW5hZ2VyJ1xyXG5pbXBvcnQgJy4uL2V2ZW50L3Byb3ZpZGVyL1NvY2tldElPRXZlbnRNYW5hZ2VyJ1xyXG5cclxuLy8gZXZlbnQgbGlzdGVuZXJcclxuaW1wb3J0ICcuLi8uLi9saXN0ZW5lci9zb2NrZXQvT25Tb2NrZXRVc2VyTG9naW5FdmVudCdcclxuIiwiZXhwb3J0ICogZnJvbSAnLi9JT0MnXHJcbiIsImltcG9ydCB7IFRBR1MgfSBmcm9tICcuL2NvbnN0YW50L1RhZ3MnXHJcbmltcG9ydCB7IEFwcGxpY2F0aW9uIH0gZnJvbSAnLi9jb3JlL0FwcGxpY2F0aW9uJ1xyXG5pbXBvcnQgeyBUWVBFUyB9IGZyb20gJy4vY29uc3RhbnQnXHJcbmltcG9ydCBmcyBmcm9tICdmcydcclxuaW1wb3J0IHNvY2tldElvIGZyb20gJ3NvY2tldC5pbydcclxuaW1wb3J0IGh0dHAgZnJvbSAnaHR0cCdcclxuaW1wb3J0IHBhdGggZnJvbSAncGF0aCdcclxuaW1wb3J0IHsgQWN0aW9uVHlwZSB9IGZyb20gJ3R5cGVzYWZlLWFjdGlvbnMnXHJcbmltcG9ydCB7IGFkZFByb2plY3QgfSBmcm9tICdAc2hhcmUvYWN0aW9uL1Byb2plY3RBY3Rpb24nXHJcbmltcG9ydCB7IElVc2VyRHRvIH0gZnJvbSAnLi9kdG8nXHJcbmltcG9ydCB7IFVTRVJfRklMRV9QQVRIIH0gZnJvbSAnLi9jb25zdGFudCdcclxuaW1wb3J0IHsgbG9nSW4gfSBmcm9tICdAc2hhcmUvYWN0aW9uL1VzZXJBY3Rpb24nXHJcbmltcG9ydCB7IGNvbmZpZ3VyZSwgZ2V0TG9nZ2VyIH0gZnJvbSAnbG9nNGpzJ1xyXG5pbXBvcnQgeyBjb250YWluZXIsIGF1dG9Qcm92aWRlLCBidWlsZFByb3ZpZGVyTW9kdWxlIH0gZnJvbSAnLi9jb3JlL2lvYydcclxuaW1wb3J0ICcuL2NvcmUvaW9jL0xvYWRlcidcclxuaW1wb3J0IHsgSW52ZXJzaWZ5RXhwcmVzc1NlcnZlciB9IGZyb20gJ2ludmVyc2lmeS1leHByZXNzLXV0aWxzJ1xyXG5pbXBvcnQgKiBhcyBib2R5UGFyc2VyIGZyb20gJ2JvZHktcGFyc2VyJ1xyXG5pbXBvcnQgeyBJVXNlclNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2UnXHJcbmltcG9ydCAqIGFzIHNlcnZpY2UgZnJvbSAnLi9zZXJ2aWNlL2ltcGwnXHJcbmltcG9ydCB7IFNvY2tldElPRXZlbnRNYW5hZ2VyIH0gZnJvbSAnLi9jb3JlL2V2ZW50L3Byb3ZpZGVyL1NvY2tldElPRXZlbnRNYW5hZ2VyJ1xyXG5pbXBvcnQgeyBJRXZlbnRNYW5hZ2VyUHJvdmlkZXIgfSBmcm9tICcuL2NvcmUvZXZlbnQvSUV2ZW50TWFuYWdlcidcclxuXHJcbmNvbmZpZ3VyZSgnLi9jb25maWcvbG9nNGpzLmpzb24nKVxyXG5jb25zdCBsb2dnZXIgPSBnZXRMb2dnZXIoKVxyXG5sb2dnZXIubGV2ZWwgPSBwcm9jZXNzLmVudi5MT0dHRVJfTEVWRUwgfHwgJ29mZidcclxuXHJcbi8vIGltcG9ydCB7IGFwcENvbnRhaW5lciB9IGZyb20gJy4vaW52ZXJzaWZ5LmNvbmZpZydcclxuLy8gaW1wb3J0IHsgVFlQRVMgfSBmcm9tICcuL2NvbnN0YW50L1R5cGVzJ1xyXG4vLyBpbXBvcnQgeyBJVXNlclNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2UnXHJcbi8vIGNvbnN0IHVzZXJTZXJ2aWNlSW5zdCA9IGFwcENvbnRhaW5lci5nZXQ8SVVzZXJTZXJ2aWNlPihUWVBFUy5JVXNlclNlcnZpY2UpXHJcbi8vIGNvbnNvbGUubG9nKHVzZXJTZXJ2aWNlSW5zdClcclxuLy8gY29uc29sZS5sb2codXNlclNlcnZpY2VJbnN0LnNheUhlbGxvKCkpXHJcblxyXG4vLyBjb250YWluZXIuYmluZDxQcm9qZWN0U2VydmljZUltcGw+KFRZUEVTLlByb2plY3RTZXJ2aWNlKS50byhQcm9qZWN0U2VydmljZUltcGwpXHJcbi8vIGNvbnRhaW5lci5iaW5kPFVzZXJTZXJ2aWNlSW1wbD4oVFlQRVMuVXNlclNlcnZpY2UpLnRvKFVzZXJTZXJ2aWNlSW1wbClcclxuLy8gYXV0b1Byb3ZpZGUoY29udGFpbmVyLCBzZXJ2aWNlKVxyXG5cclxuLy8g5b+F6aG75pS+5ZyoTG9hZGVy5LmL5ZCOXHJcbi8vIGNvbnRhaW5lci5sb2FkKGJ1aWxkUHJvdmlkZXJNb2R1bGUoKSlcclxuXHJcbi8vIGNvbnN0IHNlcnZlciA9IG5ldyBJbnZlcnNpZnlFeHByZXNzU2VydmVyKGNvbnRhaW5lcilcclxuLy8gc2VydmVyLnNldENvbmZpZyhhcHAgPT4ge1xyXG4vLyAgIC8vIGFkZCBib2R5IHBhcnNlclxyXG4vLyAgIGFwcC51c2UoXHJcbi8vICAgICBib2R5UGFyc2VyLnVybGVuY29kZWQoe1xyXG4vLyAgICAgICBleHRlbmRlZDogdHJ1ZVxyXG4vLyAgICAgfSlcclxuLy8gICApXHJcbi8vICAgYXBwLnVzZShib2R5UGFyc2VyLmpzb24oKSlcclxuLy8gfSlcclxuLy8gbGV0IGFwcCA9IHNlcnZlci5idWlsZCgpXHJcbi8vIGFwcC5saXN0ZW4oMzAwMilcclxuXHJcbmNvbnRhaW5lci5sb2FkKGJ1aWxkUHJvdmlkZXJNb2R1bGUoKSlcclxuY29uc3QgZXhwcmVzcyA9IG5ldyBJbnZlcnNpZnlFeHByZXNzU2VydmVyKGNvbnRhaW5lciwgbnVsbCwge1xyXG4gIHJvb3RQYXRoOiAnL2FwaSdcclxufSlcclxuY29uc3QgYXBwbGljYXRpb246IEFwcGxpY2F0aW9uID0gY29udGFpbmVyLmdldDxBcHBsaWNhdGlvbj4oVFlQRVMuQXBwbGljYXRpb24pXHJcbmFwcGxpY2F0aW9uLnNldEV4cHJlc3MoZXhwcmVzcylcclxuYXBwbGljYXRpb24ucnVuKGNvbnRhaW5lcilcclxuXHJcbi8vIGNvbnN0IHNvY2tldElPOiBTb2NrZXRJTy5TZXJ2ZXIgPSBjb250YWluZXIuZ2V0PFNvY2tldElPLlNlcnZlcj4oVFlQRVMuU29ja2V0SU8pXHJcbi8vIHNvY2tldElPLm9uKCdjb25uZWN0JywgKCkgPT4ge1xyXG4vLyAgIGNvbnNvbGUubG9nKCdTb2NrZXRJTyBjb25uZWN0ZWQuLi4nKVxyXG4vLyB9KVxyXG5cclxuLy8gY29uc3QgdXNlckxpc3Q6IElVc2VyRHRvW10gPSBbXVxyXG5cclxuLy8gY29uc3Qgc2VydmVyID0gaHR0cC5jcmVhdGVTZXJ2ZXIoZnVuY3Rpb24ocmVxOiBhbnksIHJlczogYW55KSB7XHJcbi8vICAgcmVzLndyaXRlSGVhZCgyMDApXHJcbi8vICAgcmVzLmVuZCgnaGVsbG8gd29ybGQnKVxyXG4vLyB9KVxyXG5cclxuLy8gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMjgzMDY3NDAvc29ja2V0LWlvLWNvbm5lY3QtdG8tdW5peC1zb2NrZXRcclxuLy8gc29ja2V0LmlvIHNldHVwXHJcbi8vIGNvbnN0IGlvID0gc29ja2V0SW8ubGlzdGVuKHNlcnZlcikgYXMgYW55XHJcbi8vIGlvLnNldCgndHJhbnNwb3J0cycsIFsnd2Vic29ja2V0J10pXHJcblxyXG4vLyBsZXQgcHJvdG9jb2wgPSAnJ1xyXG4vLyBjb25zdCBpc0RldiA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnXHJcbi8vIGlmICghaXNEZXYpIHtcclxuLy8gICAvLyBsZXQgbmduaXgga25vdyB3ZSB3YW50IHRvIHN0YXJ0IHNlcnZpbmcgZnJvbSB0aGUgcHJveHlcclxuLy8gICBmcy5vcGVuU3luYygnL3RtcC9hcHAtaW5pdGlhbGl6ZWQnLCAndycpXHJcbi8vICAgcHJvdG9jb2wgPSAnL3RtcC9uZ2lueC5zb2NrZXQnXHJcbi8vICAgLy8gRklYOiBhZGRyZXNzIGluIHVzZWRcclxuLy8gICBpZiAoZnMuZXhpc3RzU3luYyhwcm90b2NvbCkpIGZzLnVubGlua1N5bmMocHJvdG9jb2wpXHJcbi8vIH0gZWxzZSB7XHJcbi8vICAgcHJvdG9jb2wgPSBwcm9jZXNzLmVudi5TT0NLRVRJT19TRVJWRVJfUE9SVCBhcyBzdHJpbmdcclxuLy8gfVxyXG5cclxuLy8gLy8gbGlzdGVuIHRvIG5nbml4IHNvY2tldFxyXG4vLyBzZXJ2ZXIubGlzdGVuKHByb3RvY29sLCBmdW5jdGlvbigpIHtcclxuLy8gICAvLyBGSVg6IFBlcm1pc3Npb24gZGVuaWVkXHJcbi8vICAgaWYgKHByb3RvY29sICYmIGZzLmV4aXN0c1N5bmMocHJvdG9jb2wpKSBmcy5jaG1vZFN5bmMocHJvdG9jb2wsIDc1NSlcclxuLy8gICBsb2dnZXIuZGVidWcoYHNlcnZlciB1cGApXHJcbi8vIH0pXHJcblxyXG4vLyBpby5vbignY29ubmVjdF9lcnJvcicsIGZ1bmN0aW9uKGVycjogYW55KSB7XHJcbi8vICAgbG9nZ2VyLmRlYnVnKGVycilcclxuLy8gfSlcclxuXHJcbi8vIGlvLm9uKCdjb25uZWN0X3RpbWVvdXQnLCBmdW5jdGlvbihlcnI6IGFueSkge1xyXG4vLyAgIGxvZ2dlci5kZWJ1ZyhlcnIpXHJcbi8vIH0pXHJcblxyXG4vLyBpby5vbignY29ubmVjdGlvbicsIGZ1bmN0aW9uKHNvY2tldDogYW55KSB7XHJcbi8vICAgbG9nZ2VyLmRlYnVnKGBzb2NrZXQ6ICR7c29ja2V0LmlkfSBjb25uZWN0ZWRgKVxyXG4vLyAgIGxldCBjdXJyZW50VXNlcjogSVVzZXJEdG9cclxuLy8gICAvLyBzb2NrZXQuZW1pdCgnY29ubmVjdGlvbicsIHNvY2tldC5pZClcclxuXHJcbi8vICAgc29ja2V0Lm9uKCdkaXNjb25uZWN0JywgZnVuY3Rpb24oKSB7XHJcbi8vICAgICBsb2dnZXIuZGVidWcoYGRpc2Nvbm5lY3RlZGApXHJcbi8vICAgfSlcclxuXHJcbi8vICAgc29ja2V0Lm9uKEVBY3Rpb25UeXBlLkxPR19JTiwgKGFjdGlvbjogQWN0aW9uVHlwZTx0eXBlb2YgbG9nSW4+KSA9PiB7XHJcbi8vICAgICBsb2dnZXIuZGVidWcoYCR7RUFjdGlvblR5cGUuTE9HX0lOfS0tJHtKU09OLnN0cmluZ2lmeShhY3Rpb24pfWApXHJcbi8vICAgICBjdXJyZW50VXNlciA9IGFjdGlvbi5wYXlsb2FkLnVzZXJcclxuLy8gICAgIGNvbnN0IGV4aXN0aW5nVXNlciA9IHVzZXJMaXN0LmZpbmQoXHJcbi8vICAgICAgICh1c2VyOiBJVXNlckR0bykgPT4gdXNlci5uYW1lID09PSBjdXJyZW50VXNlci5uYW1lXHJcbi8vICAgICApXHJcbi8vICAgICBsb2dnZXIuZGVidWcoYGV4aXN0aW5nVXNlcjoke2V4aXN0aW5nVXNlcn1gKVxyXG4vLyAgICAgaWYgKGV4aXN0aW5nVXNlcikge1xyXG4vLyAgICAgICBjdXJyZW50VXNlciA9IGV4aXN0aW5nVXNlclxyXG4vLyAgICAgfSBlbHNlIHtcclxuLy8gICAgICAgbmV3VXNlcihjdXJyZW50VXNlcilcclxuLy8gICAgIH1cclxuLy8gICAgIGxvZ2dlci5kZWJ1ZyhgJHtKU09OLnN0cmluZ2lmeShjdXJyZW50VXNlcil9YClcclxuLy8gICAgIC8vIHNvY2tldC5lbWl0KEVBY3Rpb25UeXBlLkxHR19TVUNDRVNTLCB7IG1zZzogJ0xvZyBpbiBzdWNjZXNzLi4uJyB9KVxyXG4vLyAgICAgc29ja2V0LmVtaXQoRUFjdGlvblR5cGUuTE9HX0lOLCB7XHJcbi8vICAgICAgIHR5cGU6IEVBY3Rpb25UeXBlLkxPR19JTixcclxuLy8gICAgICAgcGF5bG9hZDogeyB1c2VyOiBjdXJyZW50VXNlciB9XHJcbi8vICAgICB9KVxyXG4vLyAgIH0pXHJcblxyXG4vLyAgIC8vIHNvY2tldC5vbihFQWN0aW9uVHlwZS5BRERfUFJPSkVDVCwgKGFjdGlvbjogQWN0aW9uVHlwZTx0eXBlb2YgYWRkUHJvamVjdD4pID0+IHtcclxuXHJcbi8vICAgLy8gfSlcclxuLy8gfSlcclxuXHJcbi8vIGZ1bmN0aW9uIHJlYWRKc29uKHBhdGg6IHN0cmluZywgY2FsbGJhY2s6IChvYmplY3Q6IGFueSkgPT4gYW55KTogdm9pZCB7XHJcbi8vICAgZnMucmVhZEZpbGUocGF0aCwgJ3V0ZjgnLCAoZXJyLCBkYXRhOiBzdHJpbmcpOiB2b2lkID0+IHtcclxuLy8gICAgIGlmIChlcnIpIHtcclxuLy8gICAgICAgbG9nZ2VyLmVycm9yKGVycilcclxuLy8gICAgIH0gZWxzZSB7XHJcbi8vICAgICAgIGNhbGxiYWNrKEpTT04ucGFyc2UoZGF0YSkpXHJcbi8vICAgICB9XHJcbi8vICAgfSlcclxuLy8gfVxyXG5cclxuLy8gY29uc3QgbmV3VXNlciA9ICh1c2VyOiBJVXNlckR0byk6IHZvaWQgPT4ge1xyXG4vLyAgIGxvZ2dlci5kZWJ1ZyhgbmV3IHVzZXI6ICR7dXNlci5uYW1lfWApXHJcbi8vICAgdXNlci5uYW1lID0gdXNlci5uYW1lXHJcbi8vICAgdXNlckxpc3QucHVzaCh1c2VyKVxyXG4vLyAgIC8vIFNhdmUgdG8gZmlsZVxyXG4vLyAgIHJlYWRKc29uKFVTRVJfRklMRV9QQVRILCAodXNlckRhdGE6IElVc2VyRHRvW10pOiB2b2lkID0+IHtcclxuLy8gICAgIHVzZXJEYXRhLnB1c2godXNlcilcclxuLy8gICAgIGNvbnN0IGpzb246IHN0cmluZyA9IEpTT04uc3RyaW5naWZ5KHVzZXJEYXRhKVxyXG4vLyAgICAgbG9nZ2VyLmRlYnVnKGpzb24pXHJcbi8vICAgICBmcy53cml0ZUZpbGUoVVNFUl9GSUxFX1BBVEgsIGpzb24sICd1dGY4JywgZXJyID0+IHtcclxuLy8gICAgICAgaWYgKGVycikge1xyXG4vLyAgICAgICAgIGxvZ2dlci5kZWJ1ZyhlcnIpXHJcbi8vICAgICAgICAgcmV0dXJuXHJcbi8vICAgICAgIH1cclxuLy8gICAgICAgbG9nZ2VyLmRlYnVnKGBXcml0ZSB0byAke1VTRVJfRklMRV9QQVRIfWApXHJcbi8vICAgICAgIHJldHVyblxyXG4vLyAgICAgfSlcclxuLy8gICB9KVxyXG4vLyB9XHJcbiIsImltcG9ydCB7IFVzZXJTZXJ2aWNlSW1wbCB9IGZyb20gJy4uLy4uL3NlcnZpY2UvaW1wbC9Vc2VyU2VydmljZUltcGwnXHJcbmltcG9ydCB7IGFjdGlvbiB9IGZyb20gJ3R5cGVzYWZlLWFjdGlvbnMnXHJcbmltcG9ydCB7IElFdmVudExpc3RlbmVyIH0gZnJvbSAnLi4vLi4vY29yZS9ldmVudC9JRXZlbnRMaXN0ZW5lcidcclxuaW1wb3J0IHsgcHJvdmlkZU5hbWVkLCBwcm92aWRlLCBpbmplY3QgfSBmcm9tICcuLi8uLi9jb3JlL2lvYydcclxuaW1wb3J0IHsgVFlQRVMgfSBmcm9tICcuLi8uLi9jb25zdGFudCdcclxuaW1wb3J0IHsgQWN0aW9ucyB9IGZyb20gJ0BzaGFyZS9hY3Rpb24nXHJcbmltcG9ydCB7IEVVc2VyRXZlbnQsIEVWRU5UX1RZUEVTIH0gZnJvbSAnQHNoYXJlL2NvbnN0YW50J1xyXG5cclxuLy8gQHByb3ZpZGVOYW1lZChUWVBFUy5JRXZlbnRMaXN0ZW5lciwgRVZFTlRfTkFNRV9NQVAub25Tb2NrZXRVc2VyTG9naW4pXHJcbkBwcm92aWRlKFRZUEVTLklFdmVudExpc3RlbmVyKVxyXG5leHBvcnQgY2xhc3MgT25Tb2NrZXRVc2VyTG9naW5FdmVudCBpbXBsZW1lbnRzIElFdmVudExpc3RlbmVyIHtcclxuICBAaW5qZWN0KFRZUEVTLlVzZXJTZXJ2aWNlKSBwcml2YXRlIF91c2VyU2VydmljZSE6IFVzZXJTZXJ2aWNlSW1wbFxyXG4gIHR5cGUoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiBFVkVOVF9UWVBFUy5zb2NrZXRcclxuICB9XHJcbiAgbmFtZSgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIEVVc2VyRXZlbnQuTE9HX0lOXHJcbiAgfVxyXG4gIGhhbmRsZXJzKCk6IEZ1bmN0aW9uW10ge1xyXG4gICAgcmV0dXJuIFtcclxuICAgICAgKGFjdGlvbjogQWN0aW9ucykgPT4ge1xyXG4gICAgICAgIHRoaXMuX3VzZXJTZXJ2aWNlLmxpc3QoKS50aGVuKGRhdGEgPT4gY29uc29sZS5sb2coZGF0YSkpXHJcbiAgICAgICAgY29uc29sZS5sb2coYWN0aW9uKVxyXG4gICAgICB9XHJcbiAgICBdXHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IFVzZXIgfSBmcm9tICcuL1VzZXInXHJcbmltcG9ydCB7IFByaW1hcnlHZW5lcmF0ZWRDb2x1bW4sIENvbHVtbiwgQmFzZUVudGl0eSwgTWFueVRvT25lIH0gZnJvbSAndHlwZW9ybSdcclxuXHJcbmV4cG9ydCBjbGFzcyBQcm9qZWN0IGV4dGVuZHMgQmFzZUVudGl0eSB7XHJcbiAgQFByaW1hcnlHZW5lcmF0ZWRDb2x1bW4oKVxyXG4gIHB1YmxpYyBpZCE6IG51bWJlclxyXG5cclxuICBAQ29sdW1uKClcclxuICBwdWJsaWMgcHJvamVjdF9uYW1lITogc3RyaW5nXHJcblxyXG4gIEBDb2x1bW4oKVxyXG4gIHB1YmxpYyBwcm9qZWN0X2Rlc2MhOiBzdHJpbmdcclxuXHJcbiAgLy8gQE1hbnlUb09uZShcclxuICAvLyAgIHR5cGUgPT4gVXNlcixcclxuICAvLyAgIHVzZXIgPT4gdXNlci5wcm9qZWN0cyxcclxuICAvLyAgIHtcclxuICAvLyAgICAgY2FzY2FkZTogdHJ1ZVxyXG4gIC8vICAgfVxyXG4gIC8vIClcclxuICAvLyBwdWJsaWMgdXNlciE6IFVzZXJcclxufVxyXG4iLCJpbXBvcnQge1xyXG4gIEVudGl0eSxcclxuICBQcmltYXJ5R2VuZXJhdGVkQ29sdW1uLFxyXG4gIENvbHVtbixcclxuICBCYXNlRW50aXR5LFxyXG4gIE9uZVRvTWFueVxyXG59IGZyb20gJ3R5cGVvcm0nXHJcbmltcG9ydCB7IFByb2plY3QgfSBmcm9tICcuL1Byb2plY3QnXHJcblxyXG5ARW50aXR5KClcclxuZXhwb3J0IGNsYXNzIFVzZXIgZXh0ZW5kcyBCYXNlRW50aXR5IHtcclxuICBAUHJpbWFyeUdlbmVyYXRlZENvbHVtbigpXHJcbiAgcHVibGljIGlkITogbnVtYmVyXHJcblxyXG4gIEBDb2x1bW4oKVxyXG4gIHB1YmxpYyB1c2VybmFtZSE6IHN0cmluZ1xyXG5cclxuICBAQ29sdW1uKClcclxuICBwdWJsaWMgZW1haWwhOiBzdHJpbmdcclxuXHJcbiAgQENvbHVtbih7IG51bGxhYmxlOiB0cnVlIH0pXHJcbiAgcHVibGljIGFnZSE6IG51bWJlclxyXG5cclxuICAvLyBAT25lVG9NYW55KFxyXG4gIC8vICAgdHlwZSA9PiBQcm9qZWN0LFxyXG4gIC8vICAgcHJvamVjdCA9PiBwcm9qZWN0LnVzZXJcclxuICAvLyApXHJcbiAgLy8gcHVibGljIHByb2plY3RzITogUHJvamVjdFtdXHJcbn1cclxuXHJcbi8vIGltcG9ydCB7IEFic3RyYWN0VXNlciB9IGZyb20gXCJAc2hhcmUvbW9kZWxcIjtcclxuLy8gaW1wb3J0IHsgSVVzZXJEdG8gfSBmcm9tICcuLi9kdG8nXHJcblxyXG4vLyBleHBvcnQgY2xhc3MgVXNlciBleHRlbmRzIEFic3RyYWN0VXNlciB7XHJcbi8vICAgaWQ6IHN0cmluZ1xyXG4vLyAgIG5hbWU6IHN0cmluZ1xyXG5cclxuLy8gICBjb25zdHJ1Y3Rvcihwcm9wczogSVVzZXJEdG8pIHtcclxuLy8gICAgIHN1cGVyKHByb3BzKVxyXG4vLyAgICAgdGhpcy5pZCA9IHByb3BzLmlkXHJcbi8vICAgICB0aGlzLm5hbWUgPSBwcm9wcy5uYW1lXHJcbi8vICAgfVxyXG5cclxuLy8gICBzdGF0aWMgY3JlYXRlKHByb3BzOiBJVXNlckR0bykge1xyXG4vLyAgICAgcmV0dXJuIG5ldyBVc2VyKE9iamVjdC5hc3NpZ24oe30sIHByb3BzLCB7XHJcblxyXG4vLyAgICAgfSkpXHJcbi8vICAgfVxyXG4vLyB9XHJcbiIsImltcG9ydCB7IFRZUEVTIH0gZnJvbSAnLi4vLi4vY29uc3RhbnQnXHJcbmltcG9ydCB7IGluamVjdGFibGUsIGluamVjdCB9IGZyb20gJ2ludmVyc2lmeSdcclxuaW1wb3J0IHsgSVByb2plY3RTZXJ2aWNlIH0gZnJvbSAnLi8uLi9JUHJvamVjdFNlcnZpY2UnXHJcbmltcG9ydCB7IHByb3ZpZGUgfSBmcm9tICdpbnZlcnNpZnktYmluZGluZy1kZWNvcmF0b3JzJ1xyXG5cclxuQHByb3ZpZGUoVFlQRVMuUHJvamVjdFNlcnZpY2UpXHJcbmV4cG9ydCBjbGFzcyBQcm9qZWN0U2VydmljZUltcGwgaW1wbGVtZW50cyBJUHJvamVjdFNlcnZpY2Uge1xyXG4gIGdldEFsbCgpOiBhbnlbXSB7XHJcbiAgICByZXR1cm4gW1xyXG4gICAgICB7XHJcbiAgICAgICAgaWQ6IDEsXHJcbiAgICAgICAgbmFtZTogJ3Rlc3QnXHJcbiAgICAgIH1cclxuICAgIF1cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgREJQcm92aWRlciB9IGZyb20gJy4vLi4vLi4vY29yZS9oZWxwZXIvREJIZWxwZXInXHJcbmltcG9ydCB7IElQcm9qZWN0U2VydmljZSB9IGZyb20gJy4vLi4vSVByb2plY3RTZXJ2aWNlJ1xyXG5pbXBvcnQgeyBpbmplY3RhYmxlLCBpbmplY3QgfSBmcm9tICdpbnZlcnNpZnknXHJcbmltcG9ydCB7IElVc2VyU2VydmljZSB9IGZyb20gJy4uL0lVc2VyU2VydmljZSdcclxuaW1wb3J0IHsgVFlQRVMgfSBmcm9tICcuLi8uLi9jb25zdGFudCdcclxuaW1wb3J0IHsgcHJvdmlkZVNpbmdsZXRvbiwgcHJvdmlkZSB9IGZyb20gJy4uLy4uL2NvcmUvaW9jJ1xyXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi4vLi4vbW9kZWwvVXNlcidcclxuXHJcbi8vIEBpbmplY3RhYmxlKClcclxuLy8gQHByb3ZpZGVTaW5nbGV0b24oVFlQRVMuSVVzZXJTZXJ2aWNlKVxyXG5AcHJvdmlkZShUWVBFUy5Vc2VyU2VydmljZSlcclxuLy8gQGluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgVXNlclNlcnZpY2VJbXBsIGltcGxlbWVudHMgSVVzZXJTZXJ2aWNlIHtcclxuICBwdWJsaWMgYXN5bmMgY3JlYXRlKHVzZXI6IFVzZXIpOiBQcm9taXNlPFVzZXI+IHtcclxuICAgIGNvbnN0IG5ld1VzZXIgPSBuZXcgVXNlcigpXHJcblxyXG4gICAgbmV3VXNlci51c2VybmFtZSA9IHVzZXIudXNlcm5hbWVcclxuICAgIG5ld1VzZXIuZW1haWwgPSB1c2VyLmVtYWlsXHJcblxyXG4gICAgY29uc3QgY29ubmVjdGlvbiA9IGF3YWl0IERCUHJvdmlkZXIuZ2V0Q29ubmVjdGlvbigpXHJcbiAgICByZXR1cm4gYXdhaXQgY29ubmVjdGlvbi5nZXRSZXBvc2l0b3J5KFVzZXIpLnNhdmUobmV3VXNlcilcclxuICB9XHJcbiAgcHVibGljIGFzeW5jIGxpc3QoKTogUHJvbWlzZTxVc2VyW10+IHtcclxuICAgIGNvbnN0IGNvbm5lY3Rpb24gPSBhd2FpdCBEQlByb3ZpZGVyLmdldENvbm5lY3Rpb24oKVxyXG4gICAgcmV0dXJuIGF3YWl0IGNvbm5lY3Rpb24uZ2V0UmVwb3NpdG9yeShVc2VyKS5maW5kKClcclxuICB9XHJcbiAgLy8gcHJpdmF0ZSBfcHJvamVjdDogSVByb2plY3RTZXJ2aWNlXHJcblxyXG4gIEBpbmplY3QoVFlQRVMuUHJvamVjdFNlcnZpY2UpXHJcbiAgcHJpdmF0ZSBfcHJvamVjdCE6IElQcm9qZWN0U2VydmljZVxyXG5cclxuICAvLyBwdWJsaWMgY29uc3RydWN0b3IoQGluamVjdChUWVBFUy5JUHJvamVjdFNlcnZpY2UpIHByb2plY3Q6IElQcm9qZWN0U2VydmljZSkge1xyXG4gIC8vICAgdGhpcy5fcHJvamVjdCA9IHByb2plY3RcclxuICAvLyB9XHJcbiAgc2F5SGVsbG8oKTogc3RyaW5nIHtcclxuICAgIHJldHVybiAnSGVsbG8gV29ybGQhJyArIEpTT04uc3RyaW5naWZ5KHRoaXMuX3Byb2plY3QuZ2V0QWxsKCkpXHJcbiAgfVxyXG59XHJcbiIsImV4cG9ydCAqIGZyb20gJy4vUHJvamVjdFNlcnZpY2VJbXBsJ1xyXG5leHBvcnQgKiBmcm9tICcuL1VzZXJTZXJ2aWNlSW1wbCdcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYm9keS1wYXJzZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaW52ZXJzaWZ5XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImludmVyc2lmeS1iaW5kaW5nLWRlY29yYXRvcnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaW52ZXJzaWZ5LWV4cHJlc3MtdXRpbHNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaW52ZXJzaWZ5LWluamVjdC1kZWNvcmF0b3JzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImludmVyc2lmeS1sb2dnZXItbWlkZGxld2FyZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJsb2Rhc2gvZm9yZWFjaFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJsb2c0anNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVmbGVjdC1tZXRhZGF0YVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzb2NrZXQuaW9cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidHlwZW9ybVwiKTsiXSwic291cmNlUm9vdCI6IiJ9