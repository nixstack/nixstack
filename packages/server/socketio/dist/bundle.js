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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vLi4vLi4vc2hhcmUvY29uZmlnL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9jb25zdGFudC9GaWxlUGF0aC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uc3RhbnQvVHlwZXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnN0YW50L2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9jb250cm9sbGVyL1VzZXJDb250cm9sbGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9jb250cm9sbGVyL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL0FwcGxpY2F0aW9uLnRzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL2luaXRpYWxpemVyL2ltcGwvQ29uZmlnUHJlQnVpbGRJbml0aWFsaXplci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9pbml0aWFsaXplci9pbXBsL0V2ZW5NYW5hZ2VySW5pdGlhbGl6ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvaW9jL0lPQy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9pb2MvTG9hZGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL2lvYy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2UvaW1wbC9Qcm9qZWN0U2VydmljZUltcGwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2UvaW1wbC9Vc2VyU2VydmljZUltcGwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2UvaW1wbC9pbmRleC50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJib2R5LXBhcnNlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImludmVyc2lmeVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImludmVyc2lmeS1iaW5kaW5nLWRlY29yYXRvcnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJpbnZlcnNpZnktZXhwcmVzcy11dGlsc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImludmVyc2lmeS1sb2dnZXItbWlkZGxld2FyZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImxvZzRqc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZmxlY3QtbWV0YWRhdGFcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzb2NrZXQuaW9cIiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNsRkEsSUFBTSxTQUFTLEdBQUcsa0JBQWtCO0FBQ3BDLGtCQUFlO0lBQ2IsSUFBSSxFQUFFLElBQWdCO0lBQ3RCLG9CQUFvQixFQUFFLE1BQWdDO0lBQ3RELElBQUksRUFBSyxTQUFTLFNBQUksSUFBa0I7SUFDeEMsZUFBZSxFQUFFLGdMQUFXLENBQUMsZUFBZTtJQUM1QyxhQUFhLEVBQUssU0FBUyxTQUFJLGdMQUFX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SUFDNUIsSUFBSTtJQUNKLGtDQUFRLEdBQVI7UUFDRSxPQUFPLGNBQWMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDaEUsQ0FBQztJQVBEO1FBREMsa0JBQU0sQ0FBQyxnQkFBSyxDQUFDLGNBQWMsQ0FBQzs7cURBQ0s7SUFKdkIsZUFBZTtRQUYzQixhQUFPLENBQUMsZ0JBQUssQ0FBQyxXQUFXLENBQUM7UUFDM0IsZ0JBQWdCO09BQ0gsZUFBZSxDQVkzQjtJQUFELHNCQUFDO0NBQUE7QUFaWSwwQ0FBZTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVjVCLHNHQUFvQztBQUNwQyxnR0FBaUM7Ozs7Ozs7Ozs7OztBQ0RqQyx3Qzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSx5RDs7Ozs7Ozs7Ozs7QUNBQSxvRDs7Ozs7Ozs7Ozs7QUNBQSx3RDs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSw2Qzs7Ozs7Ozs7Ozs7QUNBQSxzQyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC50c1wiKTtcbiIsImNvbnN0IGxvY2Fsb2hzdCA9ICdodHRwOi8vbG9jYWxob3N0J1xyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgUE9SVDogcHJvY2Vzcy5lbnYuUE9SVCxcclxuICBTT0NLRVRJT19TRVJWRVJfUE9SVDogcHJvY2Vzcy5lbnYuU09DS0VUSU9fU0VSVkVSX1BPUlQsXHJcbiAgaG9zdDogYCR7bG9jYWxvaHN0fToke3Byb2Nlc3MuZW52LlBPUlR9YCxcclxuICBBUFBfSU5ET09SX1BPUlQ6IHByb2Nlc3MuZW52LkFQUF9JTkRPT1JfUE9SVCxcclxuICBhcHBJbmRvb3JIb3N0OiBgJHtsb2NhbG9oc3R9OiR7cHJvY2Vzcy5lbnYuQVBQX0lORE9PUl9QT1JUfWAsXHJcbiAgc29ja2VJT1VybDogYCR7bG9jYWxvaHN0fToke3Byb2Nlc3MuZW52LlNPQ0tFVElPX1NFUlZFUl9QT1JUfS9zb2NrZS5pby9gLFxyXG4gIEFQUF9JTkRPT1JfU1RBVElDX0ZJTEU6IHByb2Nlc3MuZW52LkFQUF9JTkRPT1JfU1RBVElDX0ZJTEVcclxufVxyXG4iLCJleHBvcnQgY29uc3QgVVNFUl9GSUxFX1BBVEg6IHN0cmluZyA9ICcuL3VzZXIuanNvbiciLCJsZXQgVFlQRVMgPSB7XHJcbiAgQXBwbGljYXRpb246IFN5bWJvbCgnQXBwbGljYXRpb24nKSxcclxuICBTb2NrZXRJTzogU3ltYm9sKCdTb2NrZXRJTy5TZXJ2ZXInKSxcclxuICBQcmVCdWlsZEluaXRpYWxpemVyOiBTeW1ib2woJ1ByZUJ1aWxkSW5pdGlhbGl6ZXInKSxcclxuICBQb3N0SW5zdGFudGlhdGVJbml0aWFsaXplcjogU3ltYm9sKCdQb3N0SW5zdGFudGlhdGVJbml0aWFsaXplcicpLFxyXG4gIFVzZXJTZXJ2aWNlOiBTeW1ib2woJ1VzZXJTZXJ2aWNlJyksXHJcbiAgUHJvamVjdFNlcnZpY2U6IFN5bWJvbCgnUHJvamVjdFNlcnZpY2UnKVxyXG59XHJcblxyXG5leHBvcnQgeyBUWVBFUyB9XHJcbiIsImV4cG9ydCAqIGZyb20gJy4vRmlsZVBhdGgnXHJcbmV4cG9ydCAqIGZyb20gJy4vVHlwZXMnXHJcbiIsImltcG9ydCB7IFVzZXJTZXJ2aWNlSW1wbCB9IGZyb20gJy4vLi4vc2VydmljZS9pbXBsL1VzZXJTZXJ2aWNlSW1wbCdcclxuaW1wb3J0IHsgcHJvdmlkZSwgaW5qZWN0LCBwcm92aWRlTmFtZWQgfSBmcm9tICcuLi9jb3JlL2lvYydcclxuaW1wb3J0IHsgVFlQRVMgfSBmcm9tICcuLi9jb25zdGFudCdcclxuaW1wb3J0IHsgY29udHJvbGxlciwgaHR0cEdldCwgaW50ZXJmYWNlcywgVFlQRSB9IGZyb20gJ2ludmVyc2lmeS1leHByZXNzLXV0aWxzJ1xyXG5pbXBvcnQgeyBJVXNlclNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlJ1xyXG5cclxuLy8gQHByb3ZpZGUoVFlQRVMuSVVzZXJTZXJ2aWNlLCB0cnVlKVxyXG4vLyBAcHJvdmlkZU5hbWVkKFRZUEUuQ29udHJvbGxlciwgJ1VzZXJDb250cm9sbGVyJylcclxuQGNvbnRyb2xsZXIoJy91c2VyJylcclxuZXhwb3J0IGNsYXNzIFVzZXJDb250cm9sbGVyIGltcGxlbWVudHMgaW50ZXJmYWNlcy5Db250cm9sbGVyIHtcclxuICAvLyBAaW5qZWN0KFRZUEVTLlVzZXJTZXJ2aWNlKVxyXG4gIC8vIHByaXZhdGUgX3VzZXJTZXJ2aWNlITogSVVzZXJTZXJ2aWNlXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBAaW5qZWN0KFRZUEVTLlVzZXJTZXJ2aWNlKSBwcml2YXRlIF91c2VyU2VydmljZTogVXNlclNlcnZpY2VJbXBsXHJcbiAgKSB7fVxyXG5cclxuICBAaHR0cEdldCgnLycpXHJcbiAgcHVibGljIGdldCgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuX3VzZXJTZXJ2aWNlLnNheUhlbGxvKClcclxuICB9XHJcbn1cclxuIiwiZXhwb3J0ICogZnJvbSAnLi9Vc2VyQ29udHJvbGxlcidcclxuIiwiaW1wb3J0IHsgcHJvdmlkZSB9IGZyb20gJ2ludmVyc2lmeS1iaW5kaW5nLWRlY29yYXRvcnMnXHJcbmltcG9ydCB7IElQb3N0SW5zdGFudGlhdGVJbml0aWFsaXplciB9IGZyb20gJy4vaW5pdGlhbGl6ZXIvSVBvc3RJbnN0YW50aWF0ZUluaXRpYWxpemVyJ1xyXG5pbXBvcnQgeyBUWVBFUyB9IGZyb20gJy4uL2NvbnN0YW50J1xyXG5pbXBvcnQgeyBJUHJlQnVpbGRJbml0aWFsaXplciB9IGZyb20gJy4vaW5pdGlhbGl6ZXIvSVByZUJ1aWxkSW5pdGlhbGl6ZXInXHJcbmltcG9ydCBodHRwIGZyb20gJ2h0dHAnXHJcbmltcG9ydCB7IEludmVyc2lmeUV4cHJlc3NTZXJ2ZXIgfSBmcm9tICdpbnZlcnNpZnktZXhwcmVzcy11dGlscydcclxuaW1wb3J0IHsgbXVsdGlJbmplY3QsIGludGVyZmFjZXMgYXMgaW52ZXJzaWZ5SW50ZXJmYWNlcyB9IGZyb20gJ2ludmVyc2lmeSdcclxuaW1wb3J0IHNoYXJlQ29uZmlnIGZyb20gJ0BzaGFyZS9jb25maWcnXHJcbmltcG9ydCBleHByZXNzIGZyb20gJ2V4cHJlc3MnXHJcbmltcG9ydCBpbyBmcm9tICdzb2NrZXQuaW8nXHJcbmltcG9ydCB7IHByb3ZpZGVTaW5nbGV0b24gfSBmcm9tICcuL2lvYydcclxuXHJcbkBwcm92aWRlU2luZ2xldG9uKFRZUEVTLkFwcGxpY2F0aW9uKVxyXG5leHBvcnQgY2xhc3MgQXBwbGljYXRpb24ge1xyXG4gIHByaXZhdGUgX2V4cHJlc3MhOiBJbnZlcnNpZnlFeHByZXNzU2VydmVyXHJcbiAgcHJpdmF0ZSBfaHR0cFNlcnZlciE6IGh0dHAuU2VydmVyXHJcbiAgcHJpdmF0ZSBfcHJlQnVpbGRJbml0aWFsaXplcnM6IElQcmVCdWlsZEluaXRpYWxpemVyW11cclxuICBwcml2YXRlIF9wb3N0SW5zdGFudGlhdGVJbml0aWFsaXplcnMhOiBJUG9zdEluc3RhbnRpYXRlSW5pdGlhbGl6ZXJbXVxyXG4gIHByaXZhdGUgX2FwcCE6IGV4cHJlc3MuQXBwbGljYXRpb25cclxuXHJcbiAgcHVibGljIGNvbnN0cnVjdG9yKFxyXG4gICAgQG11bHRpSW5qZWN0KFRZUEVTLlByZUJ1aWxkSW5pdGlhbGl6ZXIpXHJcbiAgICBwcmVCdWlsZEluaXRpYWxpemVyczogSVByZUJ1aWxkSW5pdGlhbGl6ZXJbXVxyXG4gICkge1xyXG4gICAgdGhpcy5fcHJlQnVpbGRJbml0aWFsaXplcnMgPSBwcmVCdWlsZEluaXRpYWxpemVyc1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldEV4cHJlc3MoZXhwcmVzczogSW52ZXJzaWZ5RXhwcmVzc1NlcnZlcikge1xyXG4gICAgdGhpcy5fZXhwcmVzcyA9IGV4cHJlc3NcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRIdHRwU2VydmVyKCk6IGh0dHAuU2VydmVyIHtcclxuICAgIHJldHVybiB0aGlzLl9odHRwU2VydmVyXHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcnVuKGNvbnRhaW5lcjogaW52ZXJzaWZ5SW50ZXJmYWNlcy5Db250YWluZXIpOiB2b2lkIHtcclxuICAgIHRoaXMucHJlQnVpbGRJbml0KHRoaXMuX2V4cHJlc3MpXHJcbiAgICAgIC50aGVuKCgpID0+IHRoaXMuaW5zdGFudGlhdGUoY29udGFpbmVyKSlcclxuICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuX3Bvc3RJbnN0YW50aWF0ZUluaXRpYWxpemVycyA9IGNvbnRhaW5lci5nZXRBbGw8XHJcbiAgICAgICAgICBJUG9zdEluc3RhbnRpYXRlSW5pdGlhbGl6ZXJcclxuICAgICAgICA+KFRZUEVTLlBvc3RJbnN0YW50aWF0ZUluaXRpYWxpemVyKVxyXG4gICAgICB9KVxyXG4gICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5wb3N0SW5pdGlhbGl6ZWQoKVxyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycjogRXJyb3IpID0+IGNvbnNvbGUubG9nKGVycikpXHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgaW5zdGFudGlhdGUoXHJcbiAgICBjb250YWluZXI6IGludmVyc2lmeUludGVyZmFjZXMuQ29udGFpbmVyXHJcbiAgKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2U8dm9pZD4ocmVzb2x2ZSA9PiB7XHJcbiAgICAgIHRoaXMuX2FwcCA9IHRoaXMuX2V4cHJlc3MuYnVpbGQoKVxyXG4gICAgICBjb25zdCBwb3J0ID0gc2hhcmVDb25maWcuU09DS0VUSU9fU0VSVkVSX1BPUlRcclxuXHJcbiAgICAgIHRoaXMuX2h0dHBTZXJ2ZXIgPSB0aGlzLl9hcHAubGlzdGVuKHBvcnQsICgpID0+XHJcbiAgICAgICAgY29uc29sZS5sb2coYFNlcnZlciBzdGFydGVkIGF0IHBvcnQ6ICR7cG9ydH1gKVxyXG4gICAgICApXHJcblxyXG4gICAgICBjb25zdCBzb2NrZXRJTzogU29ja2V0SU8uU2VydmVyID0gaW8odGhpcy5nZXRIdHRwU2VydmVyKCkpXHJcbiAgICAgIGNvbnRhaW5lci5iaW5kPFNvY2tldElPLlNlcnZlcj4oVFlQRVMuU29ja2V0SU8pLnRvQ29uc3RhbnRWYWx1ZShzb2NrZXRJTylcclxuICAgICAgcmVzb2x2ZSgpXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIHByZUJ1aWxkSW5pdChleHByZXNzOiBJbnZlcnNpZnlFeHByZXNzU2VydmVyKTogUHJvbWlzZTx2b2lkW10+IHtcclxuICAgIHJldHVybiBQcm9taXNlLmFsbChcclxuICAgICAgdGhpcy5fcHJlQnVpbGRJbml0aWFsaXplcnMubWFwKChpbml0aWFsaXplcjogSVByZUJ1aWxkSW5pdGlhbGl6ZXIpID0+XHJcbiAgICAgICAgaW5pdGlhbGl6ZXIuYXBwbHlUbyhleHByZXNzKVxyXG4gICAgICApXHJcbiAgICApXHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgcG9zdEluaXRpYWxpemVkKCk6IFByb21pc2U8dm9pZFtdPiB7XHJcbiAgICByZXR1cm4gUHJvbWlzZS5hbGwoXHJcbiAgICAgIHRoaXMuX3Bvc3RJbnN0YW50aWF0ZUluaXRpYWxpemVycy5tYXAoXHJcbiAgICAgICAgKGluaXRpYWxpemVyOiBJUG9zdEluc3RhbnRpYXRlSW5pdGlhbGl6ZXIpID0+XHJcbiAgICAgICAgICBpbml0aWFsaXplci5hcHBseVRvKHRoaXMuX2h0dHBTZXJ2ZXIpXHJcbiAgICAgIClcclxuICAgIClcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgcHJvdmlkZVNpbmdsZXRvbiB9IGZyb20gJy4uLy4uL2lvYydcclxuaW1wb3J0IHsgSVByZUJ1aWxkSW5pdGlhbGl6ZXIgfSBmcm9tICcuLi9JUHJlQnVpbGRJbml0aWFsaXplcidcclxuaW1wb3J0IHsgSW52ZXJzaWZ5RXhwcmVzc1NlcnZlciB9IGZyb20gJ2ludmVyc2lmeS1leHByZXNzLXV0aWxzJ1xyXG5pbXBvcnQgZXhwcmVzcyBmcm9tICdleHByZXNzJ1xyXG5pbXBvcnQgYm9keVBhcnNlciBmcm9tICdib2R5LXBhcnNlcidcclxuaW1wb3J0IHsgVFlQRVMgfSBmcm9tICcuLi8uLi8uLi9jb25zdGFudCdcclxuaW1wb3J0IHNoYXJlQ29uZmlnIGZyb20gJ0BzaGFyZS9jb25maWcnXHJcblxyXG5AcHJvdmlkZVNpbmdsZXRvbihUWVBFUy5QcmVCdWlsZEluaXRpYWxpemVyKVxyXG5leHBvcnQgY2xhc3MgQ29uZmlnUHJlQnVpbGRJbml0aWFsaXplciBpbXBsZW1lbnRzIElQcmVCdWlsZEluaXRpYWxpemVyIHtcclxuICBhcHBseVRvKGV4cHJlc3NTZXJ2ZXI6IEludmVyc2lmeUV4cHJlc3NTZXJ2ZXIpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZTx2b2lkPihyZXNvbHZlID0+IHtcclxuICAgICAgZXhwcmVzc1NlcnZlci5zZXRDb25maWcoKGFwcDogZXhwcmVzcy5BcHBsaWNhdGlvbikgPT4ge1xyXG4gICAgICAgIGFwcC51c2UoYm9keVBhcnNlci51cmxlbmNvZGVkKHsgZXh0ZW5kZWQ6IHRydWUgfSkpXHJcbiAgICAgICAgYXBwLnVzZShib2R5UGFyc2VyLmpzb24oKSlcclxuICAgICAgICAvLyBXZWJwYWNrLURldi1TZXJ2ZXJcclxuICAgICAgICAvLyBhcHAudXNlKFxyXG4gICAgICAgIC8vICAgJy8nLFxyXG4gICAgICAgIC8vICAgZXhwcmVzcy5zdGF0aWMoc2hhcmVDb25maWcuQVBQX0lORE9PUl9TVEFUSUNfRklMRSBhcyBzdHJpbmcpXHJcbiAgICAgICAgLy8gKVxyXG4gICAgICB9KVxyXG4gICAgICByZXNvbHZlKClcclxuICAgIH0pXHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IElQb3N0SW5zdGFudGlhdGVJbml0aWFsaXplciB9IGZyb20gJy4uL0lQb3N0SW5zdGFudGlhdGVJbml0aWFsaXplcidcclxuaW1wb3J0IHsgaW5qZWN0IH0gZnJvbSAnaW52ZXJzaWZ5J1xyXG5pbXBvcnQgeyBUWVBFUyB9IGZyb20gJy4uLy4uLy4uL2NvbnN0YW50J1xyXG5pbXBvcnQgeyBwcm92aWRlU2luZ2xldG9uIH0gZnJvbSAnLi4vLi4vaW9jJ1xyXG5cclxuQHByb3ZpZGVTaW5nbGV0b24oVFlQRVMuUG9zdEluc3RhbnRpYXRlSW5pdGlhbGl6ZXIpXHJcbmV4cG9ydCBjbGFzcyBFdmVuTWFuYWdlckluaXRpYWxpemVyIGltcGxlbWVudHMgSVBvc3RJbnN0YW50aWF0ZUluaXRpYWxpemVyIHtcclxuICBwcml2YXRlIF9zb2NrZXRJTzogU29ja2V0SU8uU2VydmVyXHJcblxyXG4gIGNvbnN0cnVjdG9yKEBpbmplY3QoVFlQRVMuU29ja2V0SU8pIHNvY2tldElPOiBTb2NrZXRJTy5TZXJ2ZXIpIHtcclxuICAgIHRoaXMuX3NvY2tldElPID0gc29ja2V0SU9cclxuICB9XHJcbiAgYXBwbHlUbyhzZXJ2ZXI6IGltcG9ydCgnaHR0cCcpLlNlcnZlcik6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPHZvaWQ+KHJlc29sdmUgPT4ge1xyXG4gICAgICB0aGlzLl9zb2NrZXRJTy5vbignY29ubmVjdCcsIChzb2NrZXQ6IFNvY2tldElPLlNvY2tldCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdTb2NrZXQgY29ubmVjdGVkLi4uJylcclxuICAgICAgfSlcclxuXHJcbiAgICAgIHJlc29sdmUoKVxyXG4gICAgfSlcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0ICdyZWZsZWN0LW1ldGFkYXRhJ1xyXG5pbXBvcnQgeyBDb250YWluZXIsIGluamVjdCwgaW50ZXJmYWNlcywgbXVsdGlJbmplY3QgfSBmcm9tICdpbnZlcnNpZnknXHJcbmltcG9ydCB7XHJcbiAgYXV0b1Byb3ZpZGUsXHJcbiAgYnVpbGRQcm92aWRlck1vZHVsZSxcclxuICBmbHVlbnRQcm92aWRlLFxyXG4gIHByb3ZpZGVcclxufSBmcm9tICdpbnZlcnNpZnktYmluZGluZy1kZWNvcmF0b3JzJ1xyXG5pbXBvcnQge1xyXG4gIG1ha2VMb2dnZXJNaWRkbGV3YXJlLFxyXG4gIHRleHRTZXJpYWxpemVyXHJcbn0gZnJvbSAnaW52ZXJzaWZ5LWxvZ2dlci1taWRkbGV3YXJlJ1xyXG5cclxuY29uc3QgY29udGFpbmVyOiBpbnRlcmZhY2VzLkNvbnRhaW5lciA9IG5ldyBDb250YWluZXIoKVxyXG5cclxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XHJcbiAgbGV0IGxvZ2dlciA9IG1ha2VMb2dnZXJNaWRkbGV3YXJlKHVuZGVmaW5lZCwgb3V0ID0+XHJcbiAgICBjb25zb2xlLmxvZyh0ZXh0U2VyaWFsaXplcihvdXQpKVxyXG4gIClcclxuICBjb250YWluZXIuYXBwbHlNaWRkbGV3YXJlKGxvZ2dlcilcclxufVxyXG5cclxuY29uc3QgcHJvdmlkZVRocm93YWJsZSA9IGZ1bmN0aW9uKGlkZW50aWZpZXI6IGFueSwgaXNUaHJvd2FibGU6IGJvb2xlYW4pIHtcclxuICByZXR1cm4gZmx1ZW50UHJvdmlkZShpZGVudGlmaWVyKVxyXG4gICAgLndoZW5UYXJnZXRUYWdnZWQoJ3Rocm93YWJsZScsIGlzVGhyb3dhYmxlKVxyXG4gICAgLmRvbmUoKVxyXG59XHJcblxyXG5jb25zdCBwcm92aWRlTmFtZWQgPSBmdW5jdGlvbihpZGVudGlmaWVyOiBhbnksIG5hbWU6IHN0cmluZykge1xyXG4gIHJldHVybiBmbHVlbnRQcm92aWRlKGlkZW50aWZpZXIpXHJcbiAgICAud2hlblRhcmdldE5hbWVkKG5hbWUpXHJcbiAgICAuZG9uZSgpXHJcbn1cclxuY29uc3QgcHJvdmlkZVNpbmdsZXRvbiA9IGZ1bmN0aW9uKGlkZW50aWZpZXI6IGFueSkge1xyXG4gIHJldHVybiBmbHVlbnRQcm92aWRlKGlkZW50aWZpZXIpXHJcbiAgICAuaW5TaW5nbGV0b25TY29wZSgpXHJcbiAgICAuZG9uZSgpXHJcbn1cclxuXHJcbmNvbnN0IHByb3ZpZGVOYW1lZFNpbmdsZXRvbiA9IGZ1bmN0aW9uKGlkZW50aWZpZXI6IGFueSwgbmFtZTogc3RyaW5nKSB7XHJcbiAgcmV0dXJuIGZsdWVudFByb3ZpZGUoaWRlbnRpZmllcilcclxuICAgIC5pblNpbmdsZXRvblNjb3BlKClcclxuICAgIC53aGVuVGFyZ2V0TmFtZWQobmFtZSlcclxuICAgIC5kb25lKClcclxufVxyXG5jb25zdCBwcm92aWRlVGFnZ2VkU2luZ2xldG9uID0gZnVuY3Rpb24oXHJcbiAgaWRlbnRpZmllcjogYW55LFxyXG4gIHRhZzogc3RyaW5nLFxyXG4gIHZhbHVlOiBhbnlcclxuKSB7XHJcbiAgcmV0dXJuIGZsdWVudFByb3ZpZGUoaWRlbnRpZmllcilcclxuICAgIC5pblNpbmdsZXRvblNjb3BlKClcclxuICAgIC53aGVuVGFyZ2V0VGFnZ2VkKHRhZywgdmFsdWUpXHJcbiAgICAuZG9uZSgpXHJcbn1cclxuXHJcbmV4cG9ydCB7XHJcbiAgY29udGFpbmVyLFxyXG4gIGF1dG9Qcm92aWRlLFxyXG4gIHByb3ZpZGUsXHJcbiAgcHJvdmlkZVRocm93YWJsZSxcclxuICBwcm92aWRlTmFtZWQsXHJcbiAgaW5qZWN0LFxyXG4gIG11bHRpSW5qZWN0LFxyXG4gIHByb3ZpZGVTaW5nbGV0b24sXHJcbiAgcHJvdmlkZU5hbWVkU2luZ2xldG9uLFxyXG4gIHByb3ZpZGVUYWdnZWRTaW5nbGV0b24sXHJcbiAgYnVpbGRQcm92aWRlck1vZHVsZVxyXG59XHJcbiIsIi8vIHNvcnQgaXMgaW1wb3J0XHJcbmltcG9ydCAnLi4vQXBwbGljYXRpb24nXHJcblxyXG4vLyBjb250cm9sbGVyXHJcbmltcG9ydCAnLi4vLi4vY29udHJvbGxlcidcclxuXHJcbi8vIHNlcnZpY2VcclxuLy8gaW1wb3J0ICcuLi9zZXJ2aWNlJ1xyXG5pbXBvcnQgJy4uLy4uL3NlcnZpY2UvaW1wbCdcclxuXHJcbi8vIGltcG9ydCAnLi4vaW5pdGlhbGl6ZXInXHJcbmltcG9ydCAnLi4vaW5pdGlhbGl6ZXIvaW1wbC9Db25maWdQcmVCdWlsZEluaXRpYWxpemVyJ1xyXG5pbXBvcnQgJy4uL2luaXRpYWxpemVyL2ltcGwvRXZlbk1hbmFnZXJJbml0aWFsaXplcidcclxuIiwiZXhwb3J0ICogZnJvbSAnLi9JT0MnXHJcbiIsImltcG9ydCB7IEFwcGxpY2F0aW9uIH0gZnJvbSAnLi9jb3JlL0FwcGxpY2F0aW9uJ1xyXG5pbXBvcnQgeyBUWVBFUyB9IGZyb20gJy4vY29uc3RhbnQnXHJcbmltcG9ydCBmcyBmcm9tICdmcydcclxuaW1wb3J0IHNvY2tldElvIGZyb20gJ3NvY2tldC5pbydcclxuaW1wb3J0IGh0dHAgZnJvbSAnaHR0cCdcclxuaW1wb3J0IHBhdGggZnJvbSAncGF0aCdcclxuaW1wb3J0IHsgQWN0aW9uVHlwZSB9IGZyb20gJ3R5cGVzYWZlLWFjdGlvbnMnXHJcbmltcG9ydCB7IEVBY3Rpb25UeXBlIH0gZnJvbSAnQHNoYXJlL2NvbnN0YW50J1xyXG5pbXBvcnQgeyBhZGRQcm9qZWN0IH0gZnJvbSAnQHNoYXJlL2FjdGlvbi9Qcm9qZWN0QWN0aW9uJ1xyXG5pbXBvcnQgeyBJVXNlckR0byB9IGZyb20gJy4vZHRvJ1xyXG5pbXBvcnQgeyBVU0VSX0ZJTEVfUEFUSCB9IGZyb20gJy4vY29uc3RhbnQnXHJcbmltcG9ydCB7IGxvZ0luIH0gZnJvbSAnQHNoYXJlL2FjdGlvbi9Vc2VyQWN0aW9uJ1xyXG5pbXBvcnQgeyBjb25maWd1cmUsIGdldExvZ2dlciB9IGZyb20gJ2xvZzRqcydcclxuaW1wb3J0IHsgY29udGFpbmVyLCBhdXRvUHJvdmlkZSwgYnVpbGRQcm92aWRlck1vZHVsZSB9IGZyb20gJy4vY29yZS9pb2MnXHJcbmltcG9ydCAnLi9jb3JlL2lvYy9Mb2FkZXInXHJcbmltcG9ydCB7IEludmVyc2lmeUV4cHJlc3NTZXJ2ZXIgfSBmcm9tICdpbnZlcnNpZnktZXhwcmVzcy11dGlscydcclxuaW1wb3J0ICogYXMgYm9keVBhcnNlciBmcm9tICdib2R5LXBhcnNlcidcclxuaW1wb3J0IHsgSVVzZXJTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlJ1xyXG5pbXBvcnQgKiBhcyBzZXJ2aWNlIGZyb20gJy4vc2VydmljZS9pbXBsJ1xyXG5cclxuY29uZmlndXJlKCcuL2NvbmZpZy9sb2c0anMuanNvbicpXHJcbmNvbnN0IGxvZ2dlciA9IGdldExvZ2dlcigpXHJcbmxvZ2dlci5sZXZlbCA9IHByb2Nlc3MuZW52LkxPR0dFUl9MRVZFTCB8fCAnb2ZmJ1xyXG5cclxuLy8gaW1wb3J0IHsgYXBwQ29udGFpbmVyIH0gZnJvbSAnLi9pbnZlcnNpZnkuY29uZmlnJ1xyXG4vLyBpbXBvcnQgeyBUWVBFUyB9IGZyb20gJy4vY29uc3RhbnQvVHlwZXMnXHJcbi8vIGltcG9ydCB7IElVc2VyU2VydmljZSB9IGZyb20gJy4vc2VydmljZSdcclxuLy8gY29uc3QgdXNlclNlcnZpY2VJbnN0ID0gYXBwQ29udGFpbmVyLmdldDxJVXNlclNlcnZpY2U+KFRZUEVTLklVc2VyU2VydmljZSlcclxuLy8gY29uc29sZS5sb2codXNlclNlcnZpY2VJbnN0KVxyXG4vLyBjb25zb2xlLmxvZyh1c2VyU2VydmljZUluc3Quc2F5SGVsbG8oKSlcclxuXHJcbi8vIGNvbnRhaW5lci5iaW5kPFByb2plY3RTZXJ2aWNlSW1wbD4oVFlQRVMuUHJvamVjdFNlcnZpY2UpLnRvKFByb2plY3RTZXJ2aWNlSW1wbClcclxuLy8gY29udGFpbmVyLmJpbmQ8VXNlclNlcnZpY2VJbXBsPihUWVBFUy5Vc2VyU2VydmljZSkudG8oVXNlclNlcnZpY2VJbXBsKVxyXG4vLyBhdXRvUHJvdmlkZShjb250YWluZXIsIHNlcnZpY2UpXHJcblxyXG4vLyDlv4XpobvmlL7lnKhMb2FkZXLkuYvlkI5cclxuLy8gY29udGFpbmVyLmxvYWQoYnVpbGRQcm92aWRlck1vZHVsZSgpKVxyXG5cclxuLy8gY29uc3Qgc2VydmVyID0gbmV3IEludmVyc2lmeUV4cHJlc3NTZXJ2ZXIoY29udGFpbmVyKVxyXG4vLyBzZXJ2ZXIuc2V0Q29uZmlnKGFwcCA9PiB7XHJcbi8vICAgLy8gYWRkIGJvZHkgcGFyc2VyXHJcbi8vICAgYXBwLnVzZShcclxuLy8gICAgIGJvZHlQYXJzZXIudXJsZW5jb2RlZCh7XHJcbi8vICAgICAgIGV4dGVuZGVkOiB0cnVlXHJcbi8vICAgICB9KVxyXG4vLyAgIClcclxuLy8gICBhcHAudXNlKGJvZHlQYXJzZXIuanNvbigpKVxyXG4vLyB9KVxyXG4vLyBsZXQgYXBwID0gc2VydmVyLmJ1aWxkKClcclxuLy8gYXBwLmxpc3RlbigzMDAyKVxyXG5cclxuY29udGFpbmVyLmxvYWQoYnVpbGRQcm92aWRlck1vZHVsZSgpKVxyXG5jb25zdCBleHByZXNzID0gbmV3IEludmVyc2lmeUV4cHJlc3NTZXJ2ZXIoY29udGFpbmVyLCBudWxsLCB7XHJcbiAgcm9vdFBhdGg6ICcvYXBpJ1xyXG59KVxyXG5jb25zdCBhcHBsaWNhdGlvbjogQXBwbGljYXRpb24gPSBjb250YWluZXIuZ2V0PEFwcGxpY2F0aW9uPihUWVBFUy5BcHBsaWNhdGlvbilcclxuYXBwbGljYXRpb24uc2V0RXhwcmVzcyhleHByZXNzKVxyXG5hcHBsaWNhdGlvbi5ydW4oY29udGFpbmVyKVxyXG5cclxuLy8gY29uc3Qgc29ja2V0SU86IFNvY2tldElPLlNlcnZlciA9IGNvbnRhaW5lci5nZXQ8U29ja2V0SU8uU2VydmVyPihUWVBFUy5Tb2NrZXRJTylcclxuLy8gc29ja2V0SU8ub24oJ2Nvbm5lY3QnLCAoKSA9PiB7XHJcbi8vICAgY29uc29sZS5sb2coJ1NvY2tldElPIGNvbm5lY3RlZC4uLicpXHJcbi8vIH0pXHJcblxyXG4vLyBjb25zdCB1c2VyTGlzdDogSVVzZXJEdG9bXSA9IFtdXHJcblxyXG4vLyBjb25zdCBzZXJ2ZXIgPSBodHRwLmNyZWF0ZVNlcnZlcihmdW5jdGlvbihyZXE6IGFueSwgcmVzOiBhbnkpIHtcclxuLy8gICByZXMud3JpdGVIZWFkKDIwMClcclxuLy8gICByZXMuZW5kKCdoZWxsbyB3b3JsZCcpXHJcbi8vIH0pXHJcblxyXG4vLyBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8yODMwNjc0MC9zb2NrZXQtaW8tY29ubmVjdC10by11bml4LXNvY2tldFxyXG4vLyBzb2NrZXQuaW8gc2V0dXBcclxuLy8gY29uc3QgaW8gPSBzb2NrZXRJby5saXN0ZW4oc2VydmVyKSBhcyBhbnlcclxuLy8gaW8uc2V0KCd0cmFuc3BvcnRzJywgWyd3ZWJzb2NrZXQnXSlcclxuXHJcbi8vIGxldCBwcm90b2NvbCA9ICcnXHJcbi8vIGNvbnN0IGlzRGV2ID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCdcclxuLy8gaWYgKCFpc0Rldikge1xyXG4vLyAgIC8vIGxldCBuZ25peCBrbm93IHdlIHdhbnQgdG8gc3RhcnQgc2VydmluZyBmcm9tIHRoZSBwcm94eVxyXG4vLyAgIGZzLm9wZW5TeW5jKCcvdG1wL2FwcC1pbml0aWFsaXplZCcsICd3JylcclxuLy8gICBwcm90b2NvbCA9ICcvdG1wL25naW54LnNvY2tldCdcclxuLy8gICAvLyBGSVg6IGFkZHJlc3MgaW4gdXNlZFxyXG4vLyAgIGlmIChmcy5leGlzdHNTeW5jKHByb3RvY29sKSkgZnMudW5saW5rU3luYyhwcm90b2NvbClcclxuLy8gfSBlbHNlIHtcclxuLy8gICBwcm90b2NvbCA9IHByb2Nlc3MuZW52LlNPQ0tFVElPX1NFUlZFUl9QT1JUIGFzIHN0cmluZ1xyXG4vLyB9XHJcblxyXG4vLyAvLyBsaXN0ZW4gdG8gbmduaXggc29ja2V0XHJcbi8vIHNlcnZlci5saXN0ZW4ocHJvdG9jb2wsIGZ1bmN0aW9uKCkge1xyXG4vLyAgIC8vIEZJWDogUGVybWlzc2lvbiBkZW5pZWRcclxuLy8gICBpZiAocHJvdG9jb2wgJiYgZnMuZXhpc3RzU3luYyhwcm90b2NvbCkpIGZzLmNobW9kU3luYyhwcm90b2NvbCwgNzU1KVxyXG4vLyAgIGxvZ2dlci5kZWJ1Zyhgc2VydmVyIHVwYClcclxuLy8gfSlcclxuXHJcbi8vIGlvLm9uKCdjb25uZWN0X2Vycm9yJywgZnVuY3Rpb24oZXJyOiBhbnkpIHtcclxuLy8gICBsb2dnZXIuZGVidWcoZXJyKVxyXG4vLyB9KVxyXG5cclxuLy8gaW8ub24oJ2Nvbm5lY3RfdGltZW91dCcsIGZ1bmN0aW9uKGVycjogYW55KSB7XHJcbi8vICAgbG9nZ2VyLmRlYnVnKGVycilcclxuLy8gfSlcclxuXHJcbi8vIGlvLm9uKCdjb25uZWN0aW9uJywgZnVuY3Rpb24oc29ja2V0OiBhbnkpIHtcclxuLy8gICBsb2dnZXIuZGVidWcoYHNvY2tldDogJHtzb2NrZXQuaWR9IGNvbm5lY3RlZGApXHJcbi8vICAgbGV0IGN1cnJlbnRVc2VyOiBJVXNlckR0b1xyXG4vLyAgIC8vIHNvY2tldC5lbWl0KCdjb25uZWN0aW9uJywgc29ja2V0LmlkKVxyXG5cclxuLy8gICBzb2NrZXQub24oJ2Rpc2Nvbm5lY3QnLCBmdW5jdGlvbigpIHtcclxuLy8gICAgIGxvZ2dlci5kZWJ1ZyhgZGlzY29ubmVjdGVkYClcclxuLy8gICB9KVxyXG5cclxuLy8gICBzb2NrZXQub24oRUFjdGlvblR5cGUuTE9HX0lOLCAoYWN0aW9uOiBBY3Rpb25UeXBlPHR5cGVvZiBsb2dJbj4pID0+IHtcclxuLy8gICAgIGxvZ2dlci5kZWJ1ZyhgJHtFQWN0aW9uVHlwZS5MT0dfSU59LS0ke0pTT04uc3RyaW5naWZ5KGFjdGlvbil9YClcclxuLy8gICAgIGN1cnJlbnRVc2VyID0gYWN0aW9uLnBheWxvYWQudXNlclxyXG4vLyAgICAgY29uc3QgZXhpc3RpbmdVc2VyID0gdXNlckxpc3QuZmluZChcclxuLy8gICAgICAgKHVzZXI6IElVc2VyRHRvKSA9PiB1c2VyLm5hbWUgPT09IGN1cnJlbnRVc2VyLm5hbWVcclxuLy8gICAgIClcclxuLy8gICAgIGxvZ2dlci5kZWJ1ZyhgZXhpc3RpbmdVc2VyOiR7ZXhpc3RpbmdVc2VyfWApXHJcbi8vICAgICBpZiAoZXhpc3RpbmdVc2VyKSB7XHJcbi8vICAgICAgIGN1cnJlbnRVc2VyID0gZXhpc3RpbmdVc2VyXHJcbi8vICAgICB9IGVsc2Uge1xyXG4vLyAgICAgICBuZXdVc2VyKGN1cnJlbnRVc2VyKVxyXG4vLyAgICAgfVxyXG4vLyAgICAgbG9nZ2VyLmRlYnVnKGAke0pTT04uc3RyaW5naWZ5KGN1cnJlbnRVc2VyKX1gKVxyXG4vLyAgICAgLy8gc29ja2V0LmVtaXQoRUFjdGlvblR5cGUuTEdHX1NVQ0NFU1MsIHsgbXNnOiAnTG9nIGluIHN1Y2Nlc3MuLi4nIH0pXHJcbi8vICAgICBzb2NrZXQuZW1pdChFQWN0aW9uVHlwZS5MT0dfSU4sIHtcclxuLy8gICAgICAgdHlwZTogRUFjdGlvblR5cGUuTE9HX0lOLFxyXG4vLyAgICAgICBwYXlsb2FkOiB7IHVzZXI6IGN1cnJlbnRVc2VyIH1cclxuLy8gICAgIH0pXHJcbi8vICAgfSlcclxuXHJcbi8vICAgLy8gc29ja2V0Lm9uKEVBY3Rpb25UeXBlLkFERF9QUk9KRUNULCAoYWN0aW9uOiBBY3Rpb25UeXBlPHR5cGVvZiBhZGRQcm9qZWN0PikgPT4ge1xyXG5cclxuLy8gICAvLyB9KVxyXG4vLyB9KVxyXG5cclxuLy8gZnVuY3Rpb24gcmVhZEpzb24ocGF0aDogc3RyaW5nLCBjYWxsYmFjazogKG9iamVjdDogYW55KSA9PiBhbnkpOiB2b2lkIHtcclxuLy8gICBmcy5yZWFkRmlsZShwYXRoLCAndXRmOCcsIChlcnIsIGRhdGE6IHN0cmluZyk6IHZvaWQgPT4ge1xyXG4vLyAgICAgaWYgKGVycikge1xyXG4vLyAgICAgICBsb2dnZXIuZXJyb3IoZXJyKVxyXG4vLyAgICAgfSBlbHNlIHtcclxuLy8gICAgICAgY2FsbGJhY2soSlNPTi5wYXJzZShkYXRhKSlcclxuLy8gICAgIH1cclxuLy8gICB9KVxyXG4vLyB9XHJcblxyXG4vLyBjb25zdCBuZXdVc2VyID0gKHVzZXI6IElVc2VyRHRvKTogdm9pZCA9PiB7XHJcbi8vICAgbG9nZ2VyLmRlYnVnKGBuZXcgdXNlcjogJHt1c2VyLm5hbWV9YClcclxuLy8gICB1c2VyLm5hbWUgPSB1c2VyLm5hbWVcclxuLy8gICB1c2VyTGlzdC5wdXNoKHVzZXIpXHJcbi8vICAgLy8gU2F2ZSB0byBmaWxlXHJcbi8vICAgcmVhZEpzb24oVVNFUl9GSUxFX1BBVEgsICh1c2VyRGF0YTogSVVzZXJEdG9bXSk6IHZvaWQgPT4ge1xyXG4vLyAgICAgdXNlckRhdGEucHVzaCh1c2VyKVxyXG4vLyAgICAgY29uc3QganNvbjogc3RyaW5nID0gSlNPTi5zdHJpbmdpZnkodXNlckRhdGEpXHJcbi8vICAgICBsb2dnZXIuZGVidWcoanNvbilcclxuLy8gICAgIGZzLndyaXRlRmlsZShVU0VSX0ZJTEVfUEFUSCwganNvbiwgJ3V0ZjgnLCBlcnIgPT4ge1xyXG4vLyAgICAgICBpZiAoZXJyKSB7XHJcbi8vICAgICAgICAgbG9nZ2VyLmRlYnVnKGVycilcclxuLy8gICAgICAgICByZXR1cm5cclxuLy8gICAgICAgfVxyXG4vLyAgICAgICBsb2dnZXIuZGVidWcoYFdyaXRlIHRvICR7VVNFUl9GSUxFX1BBVEh9YClcclxuLy8gICAgICAgcmV0dXJuXHJcbi8vICAgICB9KVxyXG4vLyAgIH0pXHJcbi8vIH1cclxuIiwiaW1wb3J0IHsgVFlQRVMgfSBmcm9tICcuLi8uLi9jb25zdGFudCdcclxuaW1wb3J0IHsgaW5qZWN0YWJsZSwgaW5qZWN0IH0gZnJvbSAnaW52ZXJzaWZ5J1xyXG5pbXBvcnQgeyBJUHJvamVjdFNlcnZpY2UgfSBmcm9tICcuLy4uL0lQcm9qZWN0U2VydmljZSdcclxuaW1wb3J0IHsgcHJvdmlkZSB9IGZyb20gJ2ludmVyc2lmeS1iaW5kaW5nLWRlY29yYXRvcnMnXHJcblxyXG5AcHJvdmlkZShUWVBFUy5Qcm9qZWN0U2VydmljZSlcclxuZXhwb3J0IGNsYXNzIFByb2plY3RTZXJ2aWNlSW1wbCBpbXBsZW1lbnRzIElQcm9qZWN0U2VydmljZSB7XHJcbiAgZ2V0QWxsKCk6IGFueVtdIHtcclxuICAgIHJldHVybiBbXHJcbiAgICAgIHtcclxuICAgICAgICBpZDogMSxcclxuICAgICAgICBuYW1lOiAndGVzdCdcclxuICAgICAgfVxyXG4gICAgXVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBJUHJvamVjdFNlcnZpY2UgfSBmcm9tICcuLy4uL0lQcm9qZWN0U2VydmljZSdcclxuaW1wb3J0IHsgaW5qZWN0YWJsZSwgaW5qZWN0IH0gZnJvbSAnaW52ZXJzaWZ5J1xyXG5pbXBvcnQgeyBJVXNlclNlcnZpY2UgfSBmcm9tICcuLi9JVXNlclNlcnZpY2UnXHJcbmltcG9ydCB7IFRZUEVTIH0gZnJvbSAnLi4vLi4vY29uc3RhbnQnXHJcbmltcG9ydCB7IHByb3ZpZGVTaW5nbGV0b24sIHByb3ZpZGUgfSBmcm9tICcuLi8uLi9jb3JlL2lvYydcclxuXHJcbi8vIEBpbmplY3RhYmxlKClcclxuLy8gQHByb3ZpZGVTaW5nbGV0b24oVFlQRVMuSVVzZXJTZXJ2aWNlKVxyXG5AcHJvdmlkZShUWVBFUy5Vc2VyU2VydmljZSlcclxuLy8gQGluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgVXNlclNlcnZpY2VJbXBsIGltcGxlbWVudHMgSVVzZXJTZXJ2aWNlIHtcclxuICAvLyBwcml2YXRlIF9wcm9qZWN0OiBJUHJvamVjdFNlcnZpY2VcclxuXHJcbiAgQGluamVjdChUWVBFUy5Qcm9qZWN0U2VydmljZSlcclxuICBwcml2YXRlIF9wcm9qZWN0ITogSVByb2plY3RTZXJ2aWNlXHJcblxyXG4gIC8vIHB1YmxpYyBjb25zdHJ1Y3RvcihAaW5qZWN0KFRZUEVTLklQcm9qZWN0U2VydmljZSkgcHJvamVjdDogSVByb2plY3RTZXJ2aWNlKSB7XHJcbiAgLy8gICB0aGlzLl9wcm9qZWN0ID0gcHJvamVjdFxyXG4gIC8vIH1cclxuICBzYXlIZWxsbygpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuICdIZWxsbyBXb3JsZCEnICsgSlNPTi5zdHJpbmdpZnkodGhpcy5fcHJvamVjdC5nZXRBbGwoKSlcclxuICB9XHJcbn1cclxuIiwiZXhwb3J0ICogZnJvbSAnLi9Qcm9qZWN0U2VydmljZUltcGwnXHJcbmV4cG9ydCAqIGZyb20gJy4vVXNlclNlcnZpY2VJbXBsJ1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJib2R5LXBhcnNlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJpbnZlcnNpZnlcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaW52ZXJzaWZ5LWJpbmRpbmctZGVjb3JhdG9yc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJpbnZlcnNpZnktZXhwcmVzcy11dGlsc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJpbnZlcnNpZnktbG9nZ2VyLW1pZGRsZXdhcmVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibG9nNGpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZmxlY3QtbWV0YWRhdGFcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic29ja2V0LmlvXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=