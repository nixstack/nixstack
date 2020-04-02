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
var express_1 = __importDefault(__webpack_require__(/*! express */ "express"));
var body_parser_1 = __importDefault(__webpack_require__(/*! body-parser */ "body-parser"));
var constant_1 = __webpack_require__(/*! ../../../constant */ "./src/constant/index.ts");
var config_1 = __importDefault(__webpack_require__(/*! @share/config */ "../../share/config/index.ts"));
var ConfigPreBuildInitializer = /** @class */ (function () {
    function ConfigPreBuildInitializer() {
    }
    ConfigPreBuildInitializer.prototype.applyTo = function (expressServer) {
        return new Promise(function (resolve) {
            expressServer.setConfig(function (app) {
                app.use(body_parser_1.default.urlencoded({ extended: true }));
                app.use(body_parser_1.default.json());
                app.use('/', express_1.default.static(config_1.default.APP_INDOOR_STATIC_FILE));
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
var inversify_1 = __webpack_require__(/*! inversify */ "inversify");
var constant_1 = __webpack_require__(/*! ../../../constant */ "./src/constant/index.ts");
var ioc_1 = __webpack_require__(/*! ../../ioc */ "./src/core/ioc/index.ts");
var EvenManagerInitializer = /** @class */ (function () {
    function EvenManagerInitializer(socketIO) {
        this._socketIO = socketIO;
    }
    EvenManagerInitializer.prototype.applyTo = function (server) {
        var _this = this;
        return new Promise(function (resolve) {
            _this._socketIO.on('connect', function (socket) {
                console.log('Socket connected...');
            });
            resolve();
        });
    };
    EvenManagerInitializer = __decorate([
        ioc_1.provideSingleton(constant_1.TYPES.PostInstantiateInitializer),
        __param(0, inversify_1.inject(constant_1.TYPES.SocketIO)),
        __metadata("design:paramtypes", [Object])
    ], EvenManagerInitializer);
    return EvenManagerInitializer;
}());
exports.EvenManagerInitializer = EvenManagerInitializer;


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
var express = new inversify_express_utils_1.InversifyExpressServer(ioc_1.container);
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

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vLi4vLi4vc2hhcmUvY29uZmlnL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9jb25zdGFudC9GaWxlUGF0aC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uc3RhbnQvVHlwZXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnN0YW50L2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9jb250cm9sbGVyL1VzZXJDb250cm9sbGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9jb250cm9sbGVyL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL0FwcGxpY2F0aW9uLnRzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL2luaXRpYWxpemVyL2ltcGwvQ29uZmlnUHJlQnVpbGRJbml0aWFsaXplci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9pbml0aWFsaXplci9pbXBsL0V2ZW5NYW5hZ2VySW5pdGlhbGl6ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvaW9jL0lPQy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9pb2MvTG9hZGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL2lvYy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2UvaW1wbC9Qcm9qZWN0U2VydmljZUltcGwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2UvaW1wbC9Vc2VyU2VydmljZUltcGwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2UvaW1wbC9pbmRleC50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJib2R5LXBhcnNlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImV4cHJlc3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJpbnZlcnNpZnlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJpbnZlcnNpZnktYmluZGluZy1kZWNvcmF0b3JzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaW52ZXJzaWZ5LWV4cHJlc3MtdXRpbHNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJpbnZlcnNpZnktbG9nZ2VyLW1pZGRsZXdhcmVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJsb2c0anNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWZsZWN0LW1ldGFkYXRhXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic29ja2V0LmlvXCIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDbEZBLElBQU0sU0FBUyxHQUFHLGtCQUFrQjtBQUNwQyxrQkFBZTtJQUNiLElBQUksRUFBRSxJQUFnQjtJQUN0QixvQkFBb0IsRUFBRSxNQUFnQztJQUN0RCxJQUFJLEVBQUssU0FBUyxTQUFJLElBQWtCO0lBQ3hDLGVBQWUsRUFBRSxnTEFBVyxDQUFDLGVB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Z0I7SUFDaEI7SUFZQSxDQUFDO0lBTkMsZ0ZBQWdGO0lBQ2hGLDRCQUE0QjtJQUM1QixJQUFJO0lBQ0osa0NBQVEsR0FBUjtRQUNFLE9BQU8sY0FBYyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNoRSxDQUFDO0lBUEQ7UUFEQyxrQkFBTSxDQUFDLGdCQUFLLENBQUMsY0FBYyxDQUFDOztxREFDSztJQUp2QixlQUFlO1FBRjNCLGFBQU8sQ0FBQyxnQkFBSyxDQUFDLFdBQVcsQ0FBQztRQUMzQixnQkFBZ0I7T0FDSCxlQUFlLENBWTNCO0lBQUQsc0JBQUM7Q0FBQTtBQVpZLDBDQUFlOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNWNUIsc0dBQW9DO0FBQ3BDLGdHQUFpQzs7Ozs7Ozs7Ozs7O0FDRGpDLHdDOzs7Ozs7Ozs7OztBQ0FBLG9DOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLHlEOzs7Ozs7Ozs7OztBQ0FBLG9EOzs7Ozs7Ozs7OztBQ0FBLHdEOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLDZDOzs7Ozs7Ozs7OztBQ0FBLHNDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LnRzXCIpO1xuIiwiY29uc3QgbG9jYWxvaHN0ID0gJ2h0dHA6Ly9sb2NhbGhvc3QnXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBQT1JUOiBwcm9jZXNzLmVudi5QT1JULFxyXG4gIFNPQ0tFVElPX1NFUlZFUl9QT1JUOiBwcm9jZXNzLmVudi5TT0NLRVRJT19TRVJWRVJfUE9SVCxcclxuICBob3N0OiBgJHtsb2NhbG9oc3R9OiR7cHJvY2Vzcy5lbnYuUE9SVH1gLFxyXG4gIEFQUF9JTkRPT1JfUE9SVDogcHJvY2Vzcy5lbnYuQVBQX0lORE9PUl9QT1JULFxyXG4gIGFwcEluZG9vckhvc3Q6IGAke2xvY2Fsb2hzdH06JHtwcm9jZXNzLmVudi5BUFBfSU5ET09SX1BPUlR9YCxcclxuICBzb2NrZUlPVXJsOiBgJHtsb2NhbG9oc3R9OiR7cHJvY2Vzcy5lbnYuU09DS0VUSU9fU0VSVkVSX1BPUlR9L3NvY2tlLmlvL2AsXHJcbiAgQVBQX0lORE9PUl9TVEFUSUNfRklMRTogcHJvY2Vzcy5lbnYuQVBQX0lORE9PUl9TVEFUSUNfRklMRVxyXG59XHJcbiIsImV4cG9ydCBjb25zdCBVU0VSX0ZJTEVfUEFUSDogc3RyaW5nID0gJy4vdXNlci5qc29uJyIsImxldCBUWVBFUyA9IHtcclxuICBBcHBsaWNhdGlvbjogU3ltYm9sKCdBcHBsaWNhdGlvbicpLFxyXG4gIFNvY2tldElPOiBTeW1ib2woJ1NvY2tldElPLlNlcnZlcicpLFxyXG4gIFByZUJ1aWxkSW5pdGlhbGl6ZXI6IFN5bWJvbCgnUHJlQnVpbGRJbml0aWFsaXplcicpLFxyXG4gIFBvc3RJbnN0YW50aWF0ZUluaXRpYWxpemVyOiBTeW1ib2woJ1Bvc3RJbnN0YW50aWF0ZUluaXRpYWxpemVyJyksXHJcbiAgVXNlclNlcnZpY2U6IFN5bWJvbCgnVXNlclNlcnZpY2UnKSxcclxuICBQcm9qZWN0U2VydmljZTogU3ltYm9sKCdQcm9qZWN0U2VydmljZScpXHJcbn1cclxuXHJcbmV4cG9ydCB7IFRZUEVTIH1cclxuIiwiZXhwb3J0ICogZnJvbSAnLi9GaWxlUGF0aCdcclxuZXhwb3J0ICogZnJvbSAnLi9UeXBlcydcclxuIiwiaW1wb3J0IHsgVXNlclNlcnZpY2VJbXBsIH0gZnJvbSAnLi8uLi9zZXJ2aWNlL2ltcGwvVXNlclNlcnZpY2VJbXBsJ1xyXG5pbXBvcnQgeyBwcm92aWRlLCBpbmplY3QsIHByb3ZpZGVOYW1lZCB9IGZyb20gJy4uL2NvcmUvaW9jJ1xyXG5pbXBvcnQgeyBUWVBFUyB9IGZyb20gJy4uL2NvbnN0YW50J1xyXG5pbXBvcnQgeyBjb250cm9sbGVyLCBodHRwR2V0LCBpbnRlcmZhY2VzLCBUWVBFIH0gZnJvbSAnaW52ZXJzaWZ5LWV4cHJlc3MtdXRpbHMnXHJcbmltcG9ydCB7IElVc2VyU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2UnXHJcblxyXG4vLyBAcHJvdmlkZShUWVBFUy5JVXNlclNlcnZpY2UsIHRydWUpXHJcbi8vIEBwcm92aWRlTmFtZWQoVFlQRS5Db250cm9sbGVyLCAnVXNlckNvbnRyb2xsZXInKVxyXG5AY29udHJvbGxlcignL3VzZXInKVxyXG5leHBvcnQgY2xhc3MgVXNlckNvbnRyb2xsZXIgaW1wbGVtZW50cyBpbnRlcmZhY2VzLkNvbnRyb2xsZXIge1xyXG4gIC8vIEBpbmplY3QoVFlQRVMuVXNlclNlcnZpY2UpXHJcbiAgLy8gcHJpdmF0ZSBfdXNlclNlcnZpY2UhOiBJVXNlclNlcnZpY2VcclxuICBjb25zdHJ1Y3RvcihcclxuICAgIEBpbmplY3QoVFlQRVMuVXNlclNlcnZpY2UpIHByaXZhdGUgX3VzZXJTZXJ2aWNlOiBVc2VyU2VydmljZUltcGxcclxuICApIHt9XHJcblxyXG4gIEBodHRwR2V0KCcvJylcclxuICBwdWJsaWMgZ2V0KCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5fdXNlclNlcnZpY2Uuc2F5SGVsbG8oKVxyXG4gIH1cclxufVxyXG4iLCJleHBvcnQgKiBmcm9tICcuL1VzZXJDb250cm9sbGVyJ1xyXG4iLCJpbXBvcnQgeyBwcm92aWRlIH0gZnJvbSAnaW52ZXJzaWZ5LWJpbmRpbmctZGVjb3JhdG9ycydcclxuaW1wb3J0IHsgSVBvc3RJbnN0YW50aWF0ZUluaXRpYWxpemVyIH0gZnJvbSAnLi9pbml0aWFsaXplci9JUG9zdEluc3RhbnRpYXRlSW5pdGlhbGl6ZXInXHJcbmltcG9ydCB7IFRZUEVTIH0gZnJvbSAnLi4vY29uc3RhbnQnXHJcbmltcG9ydCB7IElQcmVCdWlsZEluaXRpYWxpemVyIH0gZnJvbSAnLi9pbml0aWFsaXplci9JUHJlQnVpbGRJbml0aWFsaXplcidcclxuaW1wb3J0IGh0dHAgZnJvbSAnaHR0cCdcclxuaW1wb3J0IHsgSW52ZXJzaWZ5RXhwcmVzc1NlcnZlciB9IGZyb20gJ2ludmVyc2lmeS1leHByZXNzLXV0aWxzJ1xyXG5pbXBvcnQgeyBtdWx0aUluamVjdCwgaW50ZXJmYWNlcyBhcyBpbnZlcnNpZnlJbnRlcmZhY2VzIH0gZnJvbSAnaW52ZXJzaWZ5J1xyXG5pbXBvcnQgc2hhcmVDb25maWcgZnJvbSAnQHNoYXJlL2NvbmZpZydcclxuaW1wb3J0IGV4cHJlc3MgZnJvbSAnZXhwcmVzcydcclxuaW1wb3J0IGlvIGZyb20gJ3NvY2tldC5pbydcclxuaW1wb3J0IHsgcHJvdmlkZVNpbmdsZXRvbiB9IGZyb20gJy4vaW9jJ1xyXG5cclxuQHByb3ZpZGVTaW5nbGV0b24oVFlQRVMuQXBwbGljYXRpb24pXHJcbmV4cG9ydCBjbGFzcyBBcHBsaWNhdGlvbiB7XHJcbiAgcHJpdmF0ZSBfZXhwcmVzcyE6IEludmVyc2lmeUV4cHJlc3NTZXJ2ZXJcclxuICBwcml2YXRlIF9odHRwU2VydmVyITogaHR0cC5TZXJ2ZXJcclxuICBwcml2YXRlIF9wcmVCdWlsZEluaXRpYWxpemVyczogSVByZUJ1aWxkSW5pdGlhbGl6ZXJbXVxyXG4gIHByaXZhdGUgX3Bvc3RJbnN0YW50aWF0ZUluaXRpYWxpemVycyE6IElQb3N0SW5zdGFudGlhdGVJbml0aWFsaXplcltdXHJcbiAgcHJpdmF0ZSBfYXBwITogZXhwcmVzcy5BcHBsaWNhdGlvblxyXG5cclxuICBwdWJsaWMgY29uc3RydWN0b3IoXHJcbiAgICBAbXVsdGlJbmplY3QoVFlQRVMuUHJlQnVpbGRJbml0aWFsaXplcilcclxuICAgIHByZUJ1aWxkSW5pdGlhbGl6ZXJzOiBJUHJlQnVpbGRJbml0aWFsaXplcltdXHJcbiAgKSB7XHJcbiAgICB0aGlzLl9wcmVCdWlsZEluaXRpYWxpemVycyA9IHByZUJ1aWxkSW5pdGlhbGl6ZXJzXHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2V0RXhwcmVzcyhleHByZXNzOiBJbnZlcnNpZnlFeHByZXNzU2VydmVyKSB7XHJcbiAgICB0aGlzLl9leHByZXNzID0gZXhwcmVzc1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldEh0dHBTZXJ2ZXIoKTogaHR0cC5TZXJ2ZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuX2h0dHBTZXJ2ZXJcclxuICB9XHJcblxyXG4gIHB1YmxpYyBydW4oY29udGFpbmVyOiBpbnZlcnNpZnlJbnRlcmZhY2VzLkNvbnRhaW5lcik6IHZvaWQge1xyXG4gICAgdGhpcy5wcmVCdWlsZEluaXQodGhpcy5fZXhwcmVzcylcclxuICAgICAgLnRoZW4oKCkgPT4gdGhpcy5pbnN0YW50aWF0ZShjb250YWluZXIpKVxyXG4gICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5fcG9zdEluc3RhbnRpYXRlSW5pdGlhbGl6ZXJzID0gY29udGFpbmVyLmdldEFsbDxcclxuICAgICAgICAgIElQb3N0SW5zdGFudGlhdGVJbml0aWFsaXplclxyXG4gICAgICAgID4oVFlQRVMuUG9zdEluc3RhbnRpYXRlSW5pdGlhbGl6ZXIpXHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICB0aGlzLnBvc3RJbml0aWFsaXplZCgpXHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyOiBFcnJvcikgPT4gY29uc29sZS5sb2coZXJyKSlcclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCBpbnN0YW50aWF0ZShcclxuICAgIGNvbnRhaW5lcjogaW52ZXJzaWZ5SW50ZXJmYWNlcy5Db250YWluZXJcclxuICApOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZTx2b2lkPihyZXNvbHZlID0+IHtcclxuICAgICAgdGhpcy5fYXBwID0gdGhpcy5fZXhwcmVzcy5idWlsZCgpXHJcbiAgICAgIGNvbnN0IHBvcnQgPSBzaGFyZUNvbmZpZy5TT0NLRVRJT19TRVJWRVJfUE9SVFxyXG5cclxuICAgICAgdGhpcy5faHR0cFNlcnZlciA9IHRoaXMuX2FwcC5saXN0ZW4ocG9ydCwgKCkgPT5cclxuICAgICAgICBjb25zb2xlLmxvZyhgU2VydmVyIHN0YXJ0ZWQgYXQgcG9ydDogJHtwb3J0fWApXHJcbiAgICAgIClcclxuXHJcbiAgICAgIGNvbnN0IHNvY2tldElPOiBTb2NrZXRJTy5TZXJ2ZXIgPSBpbyh0aGlzLmdldEh0dHBTZXJ2ZXIoKSlcclxuICAgICAgY29udGFpbmVyLmJpbmQ8U29ja2V0SU8uU2VydmVyPihUWVBFUy5Tb2NrZXRJTykudG9Db25zdGFudFZhbHVlKHNvY2tldElPKVxyXG4gICAgICByZXNvbHZlKClcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgcHJlQnVpbGRJbml0KGV4cHJlc3M6IEludmVyc2lmeUV4cHJlc3NTZXJ2ZXIpOiBQcm9taXNlPHZvaWRbXT4ge1xyXG4gICAgcmV0dXJuIFByb21pc2UuYWxsKFxyXG4gICAgICB0aGlzLl9wcmVCdWlsZEluaXRpYWxpemVycy5tYXAoKGluaXRpYWxpemVyOiBJUHJlQnVpbGRJbml0aWFsaXplcikgPT5cclxuICAgICAgICBpbml0aWFsaXplci5hcHBseVRvKGV4cHJlc3MpXHJcbiAgICAgIClcclxuICAgIClcclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCBwb3N0SW5pdGlhbGl6ZWQoKTogUHJvbWlzZTx2b2lkW10+IHtcclxuICAgIHJldHVybiBQcm9taXNlLmFsbChcclxuICAgICAgdGhpcy5fcG9zdEluc3RhbnRpYXRlSW5pdGlhbGl6ZXJzLm1hcChcclxuICAgICAgICAoaW5pdGlhbGl6ZXI6IElQb3N0SW5zdGFudGlhdGVJbml0aWFsaXplcikgPT5cclxuICAgICAgICAgIGluaXRpYWxpemVyLmFwcGx5VG8odGhpcy5faHR0cFNlcnZlcilcclxuICAgICAgKVxyXG4gICAgKVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBwcm92aWRlU2luZ2xldG9uIH0gZnJvbSAnLi4vLi4vaW9jJ1xyXG5pbXBvcnQgeyBJUHJlQnVpbGRJbml0aWFsaXplciB9IGZyb20gJy4uL0lQcmVCdWlsZEluaXRpYWxpemVyJ1xyXG5pbXBvcnQgeyBJbnZlcnNpZnlFeHByZXNzU2VydmVyIH0gZnJvbSAnaW52ZXJzaWZ5LWV4cHJlc3MtdXRpbHMnXHJcbmltcG9ydCBleHByZXNzIGZyb20gJ2V4cHJlc3MnXHJcbmltcG9ydCBib2R5UGFyc2VyIGZyb20gJ2JvZHktcGFyc2VyJ1xyXG5pbXBvcnQgeyBUWVBFUyB9IGZyb20gJy4uLy4uLy4uL2NvbnN0YW50J1xyXG5pbXBvcnQgc2hhcmVDb25maWcgZnJvbSAnQHNoYXJlL2NvbmZpZydcclxuXHJcbkBwcm92aWRlU2luZ2xldG9uKFRZUEVTLlByZUJ1aWxkSW5pdGlhbGl6ZXIpXHJcbmV4cG9ydCBjbGFzcyBDb25maWdQcmVCdWlsZEluaXRpYWxpemVyIGltcGxlbWVudHMgSVByZUJ1aWxkSW5pdGlhbGl6ZXIge1xyXG4gIGFwcGx5VG8oZXhwcmVzc1NlcnZlcjogSW52ZXJzaWZ5RXhwcmVzc1NlcnZlcik6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPHZvaWQ+KHJlc29sdmUgPT4ge1xyXG4gICAgICBleHByZXNzU2VydmVyLnNldENvbmZpZygoYXBwOiBleHByZXNzLkFwcGxpY2F0aW9uKSA9PiB7XHJcbiAgICAgICAgYXBwLnVzZShib2R5UGFyc2VyLnVybGVuY29kZWQoeyBleHRlbmRlZDogdHJ1ZSB9KSlcclxuICAgICAgICBhcHAudXNlKGJvZHlQYXJzZXIuanNvbigpKVxyXG4gICAgICAgIGFwcC51c2UoXHJcbiAgICAgICAgICAnLycsXHJcbiAgICAgICAgICBleHByZXNzLnN0YXRpYyhzaGFyZUNvbmZpZy5BUFBfSU5ET09SX1NUQVRJQ19GSUxFIGFzIHN0cmluZylcclxuICAgICAgICApXHJcbiAgICAgIH0pXHJcbiAgICAgIHJlc29sdmUoKVxyXG4gICAgfSlcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgSVBvc3RJbnN0YW50aWF0ZUluaXRpYWxpemVyIH0gZnJvbSAnLi4vSVBvc3RJbnN0YW50aWF0ZUluaXRpYWxpemVyJ1xyXG5pbXBvcnQgeyBpbmplY3QgfSBmcm9tICdpbnZlcnNpZnknXHJcbmltcG9ydCB7IFRZUEVTIH0gZnJvbSAnLi4vLi4vLi4vY29uc3RhbnQnXHJcbmltcG9ydCB7IHByb3ZpZGVTaW5nbGV0b24gfSBmcm9tICcuLi8uLi9pb2MnXHJcblxyXG5AcHJvdmlkZVNpbmdsZXRvbihUWVBFUy5Qb3N0SW5zdGFudGlhdGVJbml0aWFsaXplcilcclxuZXhwb3J0IGNsYXNzIEV2ZW5NYW5hZ2VySW5pdGlhbGl6ZXIgaW1wbGVtZW50cyBJUG9zdEluc3RhbnRpYXRlSW5pdGlhbGl6ZXIge1xyXG4gIHByaXZhdGUgX3NvY2tldElPOiBTb2NrZXRJTy5TZXJ2ZXJcclxuXHJcbiAgY29uc3RydWN0b3IoQGluamVjdChUWVBFUy5Tb2NrZXRJTykgc29ja2V0SU86IFNvY2tldElPLlNlcnZlcikge1xyXG4gICAgdGhpcy5fc29ja2V0SU8gPSBzb2NrZXRJT1xyXG4gIH1cclxuICBhcHBseVRvKHNlcnZlcjogaW1wb3J0KCdodHRwJykuU2VydmVyKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2U8dm9pZD4ocmVzb2x2ZSA9PiB7XHJcbiAgICAgIHRoaXMuX3NvY2tldElPLm9uKCdjb25uZWN0JywgKHNvY2tldDogU29ja2V0SU8uU29ja2V0KSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1NvY2tldCBjb25uZWN0ZWQuLi4nKVxyXG4gICAgICB9KVxyXG5cclxuICAgICAgcmVzb2x2ZSgpXHJcbiAgICB9KVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgJ3JlZmxlY3QtbWV0YWRhdGEnXHJcbmltcG9ydCB7IENvbnRhaW5lciwgaW5qZWN0LCBpbnRlcmZhY2VzLCBtdWx0aUluamVjdCB9IGZyb20gJ2ludmVyc2lmeSdcclxuaW1wb3J0IHtcclxuICBhdXRvUHJvdmlkZSxcclxuICBidWlsZFByb3ZpZGVyTW9kdWxlLFxyXG4gIGZsdWVudFByb3ZpZGUsXHJcbiAgcHJvdmlkZVxyXG59IGZyb20gJ2ludmVyc2lmeS1iaW5kaW5nLWRlY29yYXRvcnMnXHJcbmltcG9ydCB7XHJcbiAgbWFrZUxvZ2dlck1pZGRsZXdhcmUsXHJcbiAgdGV4dFNlcmlhbGl6ZXJcclxufSBmcm9tICdpbnZlcnNpZnktbG9nZ2VyLW1pZGRsZXdhcmUnXHJcblxyXG5jb25zdCBjb250YWluZXI6IGludGVyZmFjZXMuQ29udGFpbmVyID0gbmV3IENvbnRhaW5lcigpXHJcblxyXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcclxuICBsZXQgbG9nZ2VyID0gbWFrZUxvZ2dlck1pZGRsZXdhcmUodW5kZWZpbmVkLCBvdXQgPT5cclxuICAgIGNvbnNvbGUubG9nKHRleHRTZXJpYWxpemVyKG91dCkpXHJcbiAgKVxyXG4gIGNvbnRhaW5lci5hcHBseU1pZGRsZXdhcmUobG9nZ2VyKVxyXG59XHJcblxyXG5jb25zdCBwcm92aWRlVGhyb3dhYmxlID0gZnVuY3Rpb24oaWRlbnRpZmllcjogYW55LCBpc1Rocm93YWJsZTogYm9vbGVhbikge1xyXG4gIHJldHVybiBmbHVlbnRQcm92aWRlKGlkZW50aWZpZXIpXHJcbiAgICAud2hlblRhcmdldFRhZ2dlZCgndGhyb3dhYmxlJywgaXNUaHJvd2FibGUpXHJcbiAgICAuZG9uZSgpXHJcbn1cclxuXHJcbmNvbnN0IHByb3ZpZGVOYW1lZCA9IGZ1bmN0aW9uKGlkZW50aWZpZXI6IGFueSwgbmFtZTogc3RyaW5nKSB7XHJcbiAgcmV0dXJuIGZsdWVudFByb3ZpZGUoaWRlbnRpZmllcilcclxuICAgIC53aGVuVGFyZ2V0TmFtZWQobmFtZSlcclxuICAgIC5kb25lKClcclxufVxyXG5jb25zdCBwcm92aWRlU2luZ2xldG9uID0gZnVuY3Rpb24oaWRlbnRpZmllcjogYW55KSB7XHJcbiAgcmV0dXJuIGZsdWVudFByb3ZpZGUoaWRlbnRpZmllcilcclxuICAgIC5pblNpbmdsZXRvblNjb3BlKClcclxuICAgIC5kb25lKClcclxufVxyXG5cclxuY29uc3QgcHJvdmlkZU5hbWVkU2luZ2xldG9uID0gZnVuY3Rpb24oaWRlbnRpZmllcjogYW55LCBuYW1lOiBzdHJpbmcpIHtcclxuICByZXR1cm4gZmx1ZW50UHJvdmlkZShpZGVudGlmaWVyKVxyXG4gICAgLmluU2luZ2xldG9uU2NvcGUoKVxyXG4gICAgLndoZW5UYXJnZXROYW1lZChuYW1lKVxyXG4gICAgLmRvbmUoKVxyXG59XHJcbmNvbnN0IHByb3ZpZGVUYWdnZWRTaW5nbGV0b24gPSBmdW5jdGlvbihcclxuICBpZGVudGlmaWVyOiBhbnksXHJcbiAgdGFnOiBzdHJpbmcsXHJcbiAgdmFsdWU6IGFueVxyXG4pIHtcclxuICByZXR1cm4gZmx1ZW50UHJvdmlkZShpZGVudGlmaWVyKVxyXG4gICAgLmluU2luZ2xldG9uU2NvcGUoKVxyXG4gICAgLndoZW5UYXJnZXRUYWdnZWQodGFnLCB2YWx1ZSlcclxuICAgIC5kb25lKClcclxufVxyXG5cclxuZXhwb3J0IHtcclxuICBjb250YWluZXIsXHJcbiAgYXV0b1Byb3ZpZGUsXHJcbiAgcHJvdmlkZSxcclxuICBwcm92aWRlVGhyb3dhYmxlLFxyXG4gIHByb3ZpZGVOYW1lZCxcclxuICBpbmplY3QsXHJcbiAgbXVsdGlJbmplY3QsXHJcbiAgcHJvdmlkZVNpbmdsZXRvbixcclxuICBwcm92aWRlTmFtZWRTaW5nbGV0b24sXHJcbiAgcHJvdmlkZVRhZ2dlZFNpbmdsZXRvbixcclxuICBidWlsZFByb3ZpZGVyTW9kdWxlXHJcbn1cclxuIiwiLy8gc29ydCBpcyBpbXBvcnRcclxuaW1wb3J0ICcuLi9BcHBsaWNhdGlvbidcclxuXHJcbi8vIGNvbnRyb2xsZXJcclxuaW1wb3J0ICcuLi8uLi9jb250cm9sbGVyJ1xyXG5cclxuLy8gc2VydmljZVxyXG4vLyBpbXBvcnQgJy4uL3NlcnZpY2UnXHJcbmltcG9ydCAnLi4vLi4vc2VydmljZS9pbXBsJ1xyXG5cclxuLy8gaW1wb3J0ICcuLi9pbml0aWFsaXplcidcclxuaW1wb3J0ICcuLi9pbml0aWFsaXplci9pbXBsL0NvbmZpZ1ByZUJ1aWxkSW5pdGlhbGl6ZXInXHJcbmltcG9ydCAnLi4vaW5pdGlhbGl6ZXIvaW1wbC9FdmVuTWFuYWdlckluaXRpYWxpemVyJ1xyXG4iLCJleHBvcnQgKiBmcm9tICcuL0lPQydcclxuIiwiaW1wb3J0IHsgQXBwbGljYXRpb24gfSBmcm9tICcuL2NvcmUvQXBwbGljYXRpb24nXHJcbmltcG9ydCB7IFRZUEVTIH0gZnJvbSAnLi9jb25zdGFudCdcclxuaW1wb3J0IGZzIGZyb20gJ2ZzJ1xyXG5pbXBvcnQgc29ja2V0SW8gZnJvbSAnc29ja2V0LmlvJ1xyXG5pbXBvcnQgaHR0cCBmcm9tICdodHRwJ1xyXG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJ1xyXG5pbXBvcnQgeyBBY3Rpb25UeXBlIH0gZnJvbSAndHlwZXNhZmUtYWN0aW9ucydcclxuaW1wb3J0IHsgRUFjdGlvblR5cGUgfSBmcm9tICdAc2hhcmUvY29uc3RhbnQnXHJcbmltcG9ydCB7IGFkZFByb2plY3QgfSBmcm9tICdAc2hhcmUvYWN0aW9uL1Byb2plY3RBY3Rpb24nXHJcbmltcG9ydCB7IElVc2VyRHRvIH0gZnJvbSAnLi9kdG8nXHJcbmltcG9ydCB7IFVTRVJfRklMRV9QQVRIIH0gZnJvbSAnLi9jb25zdGFudCdcclxuaW1wb3J0IHsgbG9nSW4gfSBmcm9tICdAc2hhcmUvYWN0aW9uL1VzZXJBY3Rpb24nXHJcbmltcG9ydCB7IGNvbmZpZ3VyZSwgZ2V0TG9nZ2VyIH0gZnJvbSAnbG9nNGpzJ1xyXG5pbXBvcnQgeyBjb250YWluZXIsIGF1dG9Qcm92aWRlLCBidWlsZFByb3ZpZGVyTW9kdWxlIH0gZnJvbSAnLi9jb3JlL2lvYydcclxuaW1wb3J0ICcuL2NvcmUvaW9jL0xvYWRlcidcclxuaW1wb3J0IHsgSW52ZXJzaWZ5RXhwcmVzc1NlcnZlciB9IGZyb20gJ2ludmVyc2lmeS1leHByZXNzLXV0aWxzJ1xyXG5pbXBvcnQgKiBhcyBib2R5UGFyc2VyIGZyb20gJ2JvZHktcGFyc2VyJ1xyXG5pbXBvcnQgeyBJVXNlclNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2UnXHJcbmltcG9ydCAqIGFzIHNlcnZpY2UgZnJvbSAnLi9zZXJ2aWNlL2ltcGwnXHJcblxyXG5jb25maWd1cmUoJy4vY29uZmlnL2xvZzRqcy5qc29uJylcclxuY29uc3QgbG9nZ2VyID0gZ2V0TG9nZ2VyKClcclxubG9nZ2VyLmxldmVsID0gcHJvY2Vzcy5lbnYuTE9HR0VSX0xFVkVMIHx8ICdvZmYnXHJcblxyXG4vLyBpbXBvcnQgeyBhcHBDb250YWluZXIgfSBmcm9tICcuL2ludmVyc2lmeS5jb25maWcnXHJcbi8vIGltcG9ydCB7IFRZUEVTIH0gZnJvbSAnLi9jb25zdGFudC9UeXBlcydcclxuLy8gaW1wb3J0IHsgSVVzZXJTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlJ1xyXG4vLyBjb25zdCB1c2VyU2VydmljZUluc3QgPSBhcHBDb250YWluZXIuZ2V0PElVc2VyU2VydmljZT4oVFlQRVMuSVVzZXJTZXJ2aWNlKVxyXG4vLyBjb25zb2xlLmxvZyh1c2VyU2VydmljZUluc3QpXHJcbi8vIGNvbnNvbGUubG9nKHVzZXJTZXJ2aWNlSW5zdC5zYXlIZWxsbygpKVxyXG5cclxuLy8gY29udGFpbmVyLmJpbmQ8UHJvamVjdFNlcnZpY2VJbXBsPihUWVBFUy5Qcm9qZWN0U2VydmljZSkudG8oUHJvamVjdFNlcnZpY2VJbXBsKVxyXG4vLyBjb250YWluZXIuYmluZDxVc2VyU2VydmljZUltcGw+KFRZUEVTLlVzZXJTZXJ2aWNlKS50byhVc2VyU2VydmljZUltcGwpXHJcbi8vIGF1dG9Qcm92aWRlKGNvbnRhaW5lciwgc2VydmljZSlcclxuXHJcbi8vIOW/hemhu+aUvuWcqExvYWRlcuS5i+WQjlxyXG4vLyBjb250YWluZXIubG9hZChidWlsZFByb3ZpZGVyTW9kdWxlKCkpXHJcblxyXG4vLyBjb25zdCBzZXJ2ZXIgPSBuZXcgSW52ZXJzaWZ5RXhwcmVzc1NlcnZlcihjb250YWluZXIpXHJcbi8vIHNlcnZlci5zZXRDb25maWcoYXBwID0+IHtcclxuLy8gICAvLyBhZGQgYm9keSBwYXJzZXJcclxuLy8gICBhcHAudXNlKFxyXG4vLyAgICAgYm9keVBhcnNlci51cmxlbmNvZGVkKHtcclxuLy8gICAgICAgZXh0ZW5kZWQ6IHRydWVcclxuLy8gICAgIH0pXHJcbi8vICAgKVxyXG4vLyAgIGFwcC51c2UoYm9keVBhcnNlci5qc29uKCkpXHJcbi8vIH0pXHJcbi8vIGxldCBhcHAgPSBzZXJ2ZXIuYnVpbGQoKVxyXG4vLyBhcHAubGlzdGVuKDMwMDIpXHJcblxyXG5jb250YWluZXIubG9hZChidWlsZFByb3ZpZGVyTW9kdWxlKCkpXHJcbmNvbnN0IGV4cHJlc3MgPSBuZXcgSW52ZXJzaWZ5RXhwcmVzc1NlcnZlcihjb250YWluZXIpXHJcbmNvbnN0IGFwcGxpY2F0aW9uOiBBcHBsaWNhdGlvbiA9IGNvbnRhaW5lci5nZXQ8QXBwbGljYXRpb24+KFRZUEVTLkFwcGxpY2F0aW9uKVxyXG5hcHBsaWNhdGlvbi5zZXRFeHByZXNzKGV4cHJlc3MpXHJcbmFwcGxpY2F0aW9uLnJ1bihjb250YWluZXIpXHJcblxyXG4vLyBjb25zdCBzb2NrZXRJTzogU29ja2V0SU8uU2VydmVyID0gY29udGFpbmVyLmdldDxTb2NrZXRJTy5TZXJ2ZXI+KFRZUEVTLlNvY2tldElPKVxyXG4vLyBzb2NrZXRJTy5vbignY29ubmVjdCcsICgpID0+IHtcclxuLy8gICBjb25zb2xlLmxvZygnU29ja2V0SU8gY29ubmVjdGVkLi4uJylcclxuLy8gfSlcclxuXHJcbi8vIGNvbnN0IHVzZXJMaXN0OiBJVXNlckR0b1tdID0gW11cclxuXHJcbi8vIGNvbnN0IHNlcnZlciA9IGh0dHAuY3JlYXRlU2VydmVyKGZ1bmN0aW9uKHJlcTogYW55LCByZXM6IGFueSkge1xyXG4vLyAgIHJlcy53cml0ZUhlYWQoMjAwKVxyXG4vLyAgIHJlcy5lbmQoJ2hlbGxvIHdvcmxkJylcclxuLy8gfSlcclxuXHJcbi8vIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzI4MzA2NzQwL3NvY2tldC1pby1jb25uZWN0LXRvLXVuaXgtc29ja2V0XHJcbi8vIHNvY2tldC5pbyBzZXR1cFxyXG4vLyBjb25zdCBpbyA9IHNvY2tldElvLmxpc3RlbihzZXJ2ZXIpIGFzIGFueVxyXG4vLyBpby5zZXQoJ3RyYW5zcG9ydHMnLCBbJ3dlYnNvY2tldCddKVxyXG5cclxuLy8gbGV0IHByb3RvY29sID0gJydcclxuLy8gY29uc3QgaXNEZXYgPSBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50J1xyXG4vLyBpZiAoIWlzRGV2KSB7XHJcbi8vICAgLy8gbGV0IG5nbml4IGtub3cgd2Ugd2FudCB0byBzdGFydCBzZXJ2aW5nIGZyb20gdGhlIHByb3h5XHJcbi8vICAgZnMub3BlblN5bmMoJy90bXAvYXBwLWluaXRpYWxpemVkJywgJ3cnKVxyXG4vLyAgIHByb3RvY29sID0gJy90bXAvbmdpbnguc29ja2V0J1xyXG4vLyAgIC8vIEZJWDogYWRkcmVzcyBpbiB1c2VkXHJcbi8vICAgaWYgKGZzLmV4aXN0c1N5bmMocHJvdG9jb2wpKSBmcy51bmxpbmtTeW5jKHByb3RvY29sKVxyXG4vLyB9IGVsc2Uge1xyXG4vLyAgIHByb3RvY29sID0gcHJvY2Vzcy5lbnYuU09DS0VUSU9fU0VSVkVSX1BPUlQgYXMgc3RyaW5nXHJcbi8vIH1cclxuXHJcbi8vIC8vIGxpc3RlbiB0byBuZ25peCBzb2NrZXRcclxuLy8gc2VydmVyLmxpc3Rlbihwcm90b2NvbCwgZnVuY3Rpb24oKSB7XHJcbi8vICAgLy8gRklYOiBQZXJtaXNzaW9uIGRlbmllZFxyXG4vLyAgIGlmIChwcm90b2NvbCAmJiBmcy5leGlzdHNTeW5jKHByb3RvY29sKSkgZnMuY2htb2RTeW5jKHByb3RvY29sLCA3NTUpXHJcbi8vICAgbG9nZ2VyLmRlYnVnKGBzZXJ2ZXIgdXBgKVxyXG4vLyB9KVxyXG5cclxuLy8gaW8ub24oJ2Nvbm5lY3RfZXJyb3InLCBmdW5jdGlvbihlcnI6IGFueSkge1xyXG4vLyAgIGxvZ2dlci5kZWJ1ZyhlcnIpXHJcbi8vIH0pXHJcblxyXG4vLyBpby5vbignY29ubmVjdF90aW1lb3V0JywgZnVuY3Rpb24oZXJyOiBhbnkpIHtcclxuLy8gICBsb2dnZXIuZGVidWcoZXJyKVxyXG4vLyB9KVxyXG5cclxuLy8gaW8ub24oJ2Nvbm5lY3Rpb24nLCBmdW5jdGlvbihzb2NrZXQ6IGFueSkge1xyXG4vLyAgIGxvZ2dlci5kZWJ1Zyhgc29ja2V0OiAke3NvY2tldC5pZH0gY29ubmVjdGVkYClcclxuLy8gICBsZXQgY3VycmVudFVzZXI6IElVc2VyRHRvXHJcbi8vICAgLy8gc29ja2V0LmVtaXQoJ2Nvbm5lY3Rpb24nLCBzb2NrZXQuaWQpXHJcblxyXG4vLyAgIHNvY2tldC5vbignZGlzY29ubmVjdCcsIGZ1bmN0aW9uKCkge1xyXG4vLyAgICAgbG9nZ2VyLmRlYnVnKGBkaXNjb25uZWN0ZWRgKVxyXG4vLyAgIH0pXHJcblxyXG4vLyAgIHNvY2tldC5vbihFQWN0aW9uVHlwZS5MT0dfSU4sIChhY3Rpb246IEFjdGlvblR5cGU8dHlwZW9mIGxvZ0luPikgPT4ge1xyXG4vLyAgICAgbG9nZ2VyLmRlYnVnKGAke0VBY3Rpb25UeXBlLkxPR19JTn0tLSR7SlNPTi5zdHJpbmdpZnkoYWN0aW9uKX1gKVxyXG4vLyAgICAgY3VycmVudFVzZXIgPSBhY3Rpb24ucGF5bG9hZC51c2VyXHJcbi8vICAgICBjb25zdCBleGlzdGluZ1VzZXIgPSB1c2VyTGlzdC5maW5kKFxyXG4vLyAgICAgICAodXNlcjogSVVzZXJEdG8pID0+IHVzZXIubmFtZSA9PT0gY3VycmVudFVzZXIubmFtZVxyXG4vLyAgICAgKVxyXG4vLyAgICAgbG9nZ2VyLmRlYnVnKGBleGlzdGluZ1VzZXI6JHtleGlzdGluZ1VzZXJ9YClcclxuLy8gICAgIGlmIChleGlzdGluZ1VzZXIpIHtcclxuLy8gICAgICAgY3VycmVudFVzZXIgPSBleGlzdGluZ1VzZXJcclxuLy8gICAgIH0gZWxzZSB7XHJcbi8vICAgICAgIG5ld1VzZXIoY3VycmVudFVzZXIpXHJcbi8vICAgICB9XHJcbi8vICAgICBsb2dnZXIuZGVidWcoYCR7SlNPTi5zdHJpbmdpZnkoY3VycmVudFVzZXIpfWApXHJcbi8vICAgICAvLyBzb2NrZXQuZW1pdChFQWN0aW9uVHlwZS5MR0dfU1VDQ0VTUywgeyBtc2c6ICdMb2cgaW4gc3VjY2Vzcy4uLicgfSlcclxuLy8gICAgIHNvY2tldC5lbWl0KEVBY3Rpb25UeXBlLkxPR19JTiwge1xyXG4vLyAgICAgICB0eXBlOiBFQWN0aW9uVHlwZS5MT0dfSU4sXHJcbi8vICAgICAgIHBheWxvYWQ6IHsgdXNlcjogY3VycmVudFVzZXIgfVxyXG4vLyAgICAgfSlcclxuLy8gICB9KVxyXG5cclxuLy8gICAvLyBzb2NrZXQub24oRUFjdGlvblR5cGUuQUREX1BST0pFQ1QsIChhY3Rpb246IEFjdGlvblR5cGU8dHlwZW9mIGFkZFByb2plY3Q+KSA9PiB7XHJcblxyXG4vLyAgIC8vIH0pXHJcbi8vIH0pXHJcblxyXG4vLyBmdW5jdGlvbiByZWFkSnNvbihwYXRoOiBzdHJpbmcsIGNhbGxiYWNrOiAob2JqZWN0OiBhbnkpID0+IGFueSk6IHZvaWQge1xyXG4vLyAgIGZzLnJlYWRGaWxlKHBhdGgsICd1dGY4JywgKGVyciwgZGF0YTogc3RyaW5nKTogdm9pZCA9PiB7XHJcbi8vICAgICBpZiAoZXJyKSB7XHJcbi8vICAgICAgIGxvZ2dlci5lcnJvcihlcnIpXHJcbi8vICAgICB9IGVsc2Uge1xyXG4vLyAgICAgICBjYWxsYmFjayhKU09OLnBhcnNlKGRhdGEpKVxyXG4vLyAgICAgfVxyXG4vLyAgIH0pXHJcbi8vIH1cclxuXHJcbi8vIGNvbnN0IG5ld1VzZXIgPSAodXNlcjogSVVzZXJEdG8pOiB2b2lkID0+IHtcclxuLy8gICBsb2dnZXIuZGVidWcoYG5ldyB1c2VyOiAke3VzZXIubmFtZX1gKVxyXG4vLyAgIHVzZXIubmFtZSA9IHVzZXIubmFtZVxyXG4vLyAgIHVzZXJMaXN0LnB1c2godXNlcilcclxuLy8gICAvLyBTYXZlIHRvIGZpbGVcclxuLy8gICByZWFkSnNvbihVU0VSX0ZJTEVfUEFUSCwgKHVzZXJEYXRhOiBJVXNlckR0b1tdKTogdm9pZCA9PiB7XHJcbi8vICAgICB1c2VyRGF0YS5wdXNoKHVzZXIpXHJcbi8vICAgICBjb25zdCBqc29uOiBzdHJpbmcgPSBKU09OLnN0cmluZ2lmeSh1c2VyRGF0YSlcclxuLy8gICAgIGxvZ2dlci5kZWJ1Zyhqc29uKVxyXG4vLyAgICAgZnMud3JpdGVGaWxlKFVTRVJfRklMRV9QQVRILCBqc29uLCAndXRmOCcsIGVyciA9PiB7XHJcbi8vICAgICAgIGlmIChlcnIpIHtcclxuLy8gICAgICAgICBsb2dnZXIuZGVidWcoZXJyKVxyXG4vLyAgICAgICAgIHJldHVyblxyXG4vLyAgICAgICB9XHJcbi8vICAgICAgIGxvZ2dlci5kZWJ1ZyhgV3JpdGUgdG8gJHtVU0VSX0ZJTEVfUEFUSH1gKVxyXG4vLyAgICAgICByZXR1cm5cclxuLy8gICAgIH0pXHJcbi8vICAgfSlcclxuLy8gfVxyXG4iLCJpbXBvcnQgeyBUWVBFUyB9IGZyb20gJy4uLy4uL2NvbnN0YW50J1xyXG5pbXBvcnQgeyBpbmplY3RhYmxlLCBpbmplY3QgfSBmcm9tICdpbnZlcnNpZnknXHJcbmltcG9ydCB7IElQcm9qZWN0U2VydmljZSB9IGZyb20gJy4vLi4vSVByb2plY3RTZXJ2aWNlJ1xyXG5pbXBvcnQgeyBwcm92aWRlIH0gZnJvbSAnaW52ZXJzaWZ5LWJpbmRpbmctZGVjb3JhdG9ycydcclxuXHJcbkBwcm92aWRlKFRZUEVTLlByb2plY3RTZXJ2aWNlKVxyXG5leHBvcnQgY2xhc3MgUHJvamVjdFNlcnZpY2VJbXBsIGltcGxlbWVudHMgSVByb2plY3RTZXJ2aWNlIHtcclxuICBnZXRBbGwoKTogYW55W10ge1xyXG4gICAgcmV0dXJuIFtcclxuICAgICAge1xyXG4gICAgICAgIGlkOiAxLFxyXG4gICAgICAgIG5hbWU6ICd0ZXN0J1xyXG4gICAgICB9XHJcbiAgICBdXHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IElQcm9qZWN0U2VydmljZSB9IGZyb20gJy4vLi4vSVByb2plY3RTZXJ2aWNlJ1xyXG5pbXBvcnQgeyBpbmplY3RhYmxlLCBpbmplY3QgfSBmcm9tICdpbnZlcnNpZnknXHJcbmltcG9ydCB7IElVc2VyU2VydmljZSB9IGZyb20gJy4uL0lVc2VyU2VydmljZSdcclxuaW1wb3J0IHsgVFlQRVMgfSBmcm9tICcuLi8uLi9jb25zdGFudCdcclxuaW1wb3J0IHsgcHJvdmlkZVNpbmdsZXRvbiwgcHJvdmlkZSB9IGZyb20gJy4uLy4uL2NvcmUvaW9jJ1xyXG5cclxuLy8gQGluamVjdGFibGUoKVxyXG4vLyBAcHJvdmlkZVNpbmdsZXRvbihUWVBFUy5JVXNlclNlcnZpY2UpXHJcbkBwcm92aWRlKFRZUEVTLlVzZXJTZXJ2aWNlKVxyXG4vLyBAaW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBVc2VyU2VydmljZUltcGwgaW1wbGVtZW50cyBJVXNlclNlcnZpY2Uge1xyXG4gIC8vIHByaXZhdGUgX3Byb2plY3Q6IElQcm9qZWN0U2VydmljZVxyXG5cclxuICBAaW5qZWN0KFRZUEVTLlByb2plY3RTZXJ2aWNlKVxyXG4gIHByaXZhdGUgX3Byb2plY3QhOiBJUHJvamVjdFNlcnZpY2VcclxuXHJcbiAgLy8gcHVibGljIGNvbnN0cnVjdG9yKEBpbmplY3QoVFlQRVMuSVByb2plY3RTZXJ2aWNlKSBwcm9qZWN0OiBJUHJvamVjdFNlcnZpY2UpIHtcclxuICAvLyAgIHRoaXMuX3Byb2plY3QgPSBwcm9qZWN0XHJcbiAgLy8gfVxyXG4gIHNheUhlbGxvKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gJ0hlbGxvIFdvcmxkIScgKyBKU09OLnN0cmluZ2lmeSh0aGlzLl9wcm9qZWN0LmdldEFsbCgpKVxyXG4gIH1cclxufVxyXG4iLCJleHBvcnQgKiBmcm9tICcuL1Byb2plY3RTZXJ2aWNlSW1wbCdcclxuZXhwb3J0ICogZnJvbSAnLi9Vc2VyU2VydmljZUltcGwnXHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJvZHktcGFyc2VyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV4cHJlc3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaW52ZXJzaWZ5XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImludmVyc2lmeS1iaW5kaW5nLWRlY29yYXRvcnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaW52ZXJzaWZ5LWV4cHJlc3MtdXRpbHNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaW52ZXJzaWZ5LWxvZ2dlci1taWRkbGV3YXJlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImxvZzRqc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWZsZWN0LW1ldGFkYXRhXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInNvY2tldC5pb1wiKTsiXSwic291cmNlUm9vdCI6IiJ9