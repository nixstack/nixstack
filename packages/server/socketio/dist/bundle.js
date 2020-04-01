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
var ioc_1 = __webpack_require__(/*! ../ioc */ "./src/ioc/index.ts");
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

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var log4js_1 = __webpack_require__(/*! log4js */ "log4js");
var ioc_1 = __webpack_require__(/*! ./ioc */ "./src/ioc/index.ts");
__webpack_require__(/*! ./ioc/Loader */ "./src/ioc/Loader.ts");
var inversify_express_utils_1 = __webpack_require__(/*! inversify-express-utils */ "inversify-express-utils");
var bodyParser = __importStar(__webpack_require__(/*! body-parser */ "body-parser"));
log4js_1.configure('./config/log4js.json');
var logger = log4js_1.getLogger();
logger.level = Object({"NODE_ENV":"development","SOCKETIO_SERVER_PORT":"4000"}).LOGGER_LEVEL || 'off';
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
ioc_1.container.load(ioc_1.buildProviderModule());
var server = new inversify_express_utils_1.InversifyExpressServer(ioc_1.container);
server.setConfig(function (app) {
    // add body parser
    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(bodyParser.json());
});
var app = server.build();
app.listen(3002);
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

/***/ "./src/ioc/IOC.ts":
/*!************************!*\
  !*** ./src/ioc/IOC.ts ***!
  \************************/
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

/***/ "./src/ioc/Loader.ts":
/*!***************************!*\
  !*** ./src/ioc/Loader.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// service
// import '../service'
__webpack_require__(/*! ../service/impl */ "./src/service/impl/index.ts");
// controller
__webpack_require__(/*! ../controller */ "./src/controller/index.ts");


/***/ }),

/***/ "./src/ioc/index.ts":
/*!**************************!*\
  !*** ./src/ioc/index.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./IOC */ "./src/ioc/IOC.ts"));


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
var ioc_1 = __webpack_require__(/*! ../../ioc */ "./src/ioc/index.ts");
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

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnN0YW50L0ZpbGVQYXRoLnRzIiwid2VicGFjazovLy8uL3NyYy9jb25zdGFudC9UeXBlcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uc3RhbnQvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRyb2xsZXIvVXNlckNvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRyb2xsZXIvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9pb2MvSU9DLnRzIiwid2VicGFjazovLy8uL3NyYy9pb2MvTG9hZGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9pb2MvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2UvaW1wbC9Qcm9qZWN0U2VydmljZUltcGwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2UvaW1wbC9Vc2VyU2VydmljZUltcGwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2UvaW1wbC9pbmRleC50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJib2R5LXBhcnNlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImludmVyc2lmeVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImludmVyc2lmeS1iaW5kaW5nLWRlY29yYXRvcnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJpbnZlcnNpZnktZXhwcmVzcy11dGlsc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImludmVyc2lmeS1sb2dnZXItbWlkZGxld2FyZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImxvZzRqc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZmxlY3QtbWV0YWRhdGFcIiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNB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QztBQUd4QztJQURBLGdCQUFnQjtJQUNoQjtJQVlBLENBQUM7SUFOQyxnRkFBZ0Y7SUFDaEYsNEJBQTRCO0lBQzVCLElBQUk7SUFDSixrQ0FBUSxHQUFSO1FBQ0UsT0FBTyxjQUFjLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ2hFLENBQUM7SUFQRDtRQURDLGtCQUFNLENBQUMsZ0JBQUssQ0FBQyxjQUFjLENBQUM7O3FEQUNLO0lBSnZCLGVBQWU7UUFGM0IsYUFBTyxDQUFDLGdCQUFLLENBQUMsV0FBVyxDQUFDO1FBQzNCLGdCQUFnQjtPQUNILGVBQWUsQ0FZM0I7SUFBRCxzQkFBQztDQUFBO0FBWlksMENBQWU7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1Y1QixzR0FBb0M7QUFDcEMsZ0dBQWlDOzs7Ozs7Ozs7Ozs7QUNEakMsd0M7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEseUQ7Ozs7Ozs7Ozs7O0FDQUEsb0Q7Ozs7Ozs7Ozs7O0FDQUEsd0Q7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsNkMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXgudHNcIik7XG4iLCJleHBvcnQgY29uc3QgVVNFUl9GSUxFX1BBVEg6IHN0cmluZyA9ICcuL3VzZXIuanNvbiciLCJsZXQgVFlQRVMgPSB7XHJcbiAgVXNlclNlcnZpY2U6IFN5bWJvbCgnVXNlclNlcnZpY2UnKSxcclxuICBQcm9qZWN0U2VydmljZTogU3ltYm9sKCdQcm9qZWN0U2VydmljZScpXHJcbn1cclxuXHJcbmV4cG9ydCB7IFRZUEVTIH1cclxuIiwiZXhwb3J0ICogZnJvbSAnLi9GaWxlUGF0aCdcclxuZXhwb3J0ICogZnJvbSAnLi9UeXBlcydcclxuIiwiaW1wb3J0IHsgVXNlclNlcnZpY2VJbXBsIH0gZnJvbSAnLi8uLi9zZXJ2aWNlL2ltcGwvVXNlclNlcnZpY2VJbXBsJ1xyXG5pbXBvcnQgeyBwcm92aWRlLCBpbmplY3QsIHByb3ZpZGVOYW1lZCB9IGZyb20gJy4uL2lvYydcclxuaW1wb3J0IHsgVFlQRVMgfSBmcm9tICcuLi9jb25zdGFudCdcclxuaW1wb3J0IHsgY29udHJvbGxlciwgaHR0cEdldCwgaW50ZXJmYWNlcywgVFlQRSB9IGZyb20gJ2ludmVyc2lmeS1leHByZXNzLXV0aWxzJ1xyXG5pbXBvcnQgeyBJVXNlclNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlJ1xyXG5cclxuLy8gQHByb3ZpZGUoVFlQRVMuSVVzZXJTZXJ2aWNlLCB0cnVlKVxyXG4vLyBAcHJvdmlkZU5hbWVkKFRZUEUuQ29udHJvbGxlciwgJ1VzZXJDb250cm9sbGVyJylcclxuQGNvbnRyb2xsZXIoJy91c2VyJylcclxuZXhwb3J0IGNsYXNzIFVzZXJDb250cm9sbGVyIGltcGxlbWVudHMgaW50ZXJmYWNlcy5Db250cm9sbGVyIHtcclxuICAvLyBAaW5qZWN0KFRZUEVTLlVzZXJTZXJ2aWNlKVxyXG4gIC8vIHByaXZhdGUgX3VzZXJTZXJ2aWNlITogSVVzZXJTZXJ2aWNlXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBAaW5qZWN0KFRZUEVTLlVzZXJTZXJ2aWNlKSBwcml2YXRlIF91c2VyU2VydmljZTogVXNlclNlcnZpY2VJbXBsXHJcbiAgKSB7fVxyXG5cclxuICBAaHR0cEdldCgnLycpXHJcbiAgcHVibGljIGdldCgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuX3VzZXJTZXJ2aWNlLnNheUhlbGxvKClcclxuICB9XHJcbn1cclxuIiwiZXhwb3J0ICogZnJvbSAnLi9Vc2VyQ29udHJvbGxlcidcclxuIiwiaW1wb3J0IHsgVFlQRVMgfSBmcm9tICcuL2NvbnN0YW50J1xyXG5pbXBvcnQgZnMgZnJvbSAnZnMnXHJcbmltcG9ydCBzb2NrZXRJbyBmcm9tICdzb2NrZXQuaW8nXHJcbmltcG9ydCBodHRwIGZyb20gJ2h0dHAnXHJcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnXHJcbmltcG9ydCB7IEFjdGlvblR5cGUgfSBmcm9tICd0eXBlc2FmZS1hY3Rpb25zJ1xyXG5pbXBvcnQgeyBFQWN0aW9uVHlwZSB9IGZyb20gJ0BzaGFyZS9jb25zdGFudCdcclxuaW1wb3J0IHsgYWRkUHJvamVjdCB9IGZyb20gJ0BzaGFyZS9hY3Rpb24vUHJvamVjdEFjdGlvbidcclxuaW1wb3J0IHsgSVVzZXJEdG8gfSBmcm9tICcuL2R0bydcclxuaW1wb3J0IHsgVVNFUl9GSUxFX1BBVEggfSBmcm9tICcuL2NvbnN0YW50J1xyXG5pbXBvcnQgeyBsb2dJbiB9IGZyb20gJ0BzaGFyZS9hY3Rpb24vVXNlckFjdGlvbidcclxuaW1wb3J0IHsgY29uZmlndXJlLCBnZXRMb2dnZXIgfSBmcm9tICdsb2c0anMnXHJcbmltcG9ydCB7IGNvbnRhaW5lciwgYXV0b1Byb3ZpZGUsIGJ1aWxkUHJvdmlkZXJNb2R1bGUgfSBmcm9tICcuL2lvYydcclxuaW1wb3J0ICcuL2lvYy9Mb2FkZXInXHJcbmltcG9ydCB7IEludmVyc2lmeUV4cHJlc3NTZXJ2ZXIgfSBmcm9tICdpbnZlcnNpZnktZXhwcmVzcy11dGlscydcclxuaW1wb3J0ICogYXMgYm9keVBhcnNlciBmcm9tICdib2R5LXBhcnNlcidcclxuaW1wb3J0IHsgSVVzZXJTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlJ1xyXG5pbXBvcnQgKiBhcyBzZXJ2aWNlIGZyb20gJy4vc2VydmljZS9pbXBsJ1xyXG5cclxuY29uZmlndXJlKCcuL2NvbmZpZy9sb2c0anMuanNvbicpXHJcbmNvbnN0IGxvZ2dlciA9IGdldExvZ2dlcigpXHJcbmxvZ2dlci5sZXZlbCA9IHByb2Nlc3MuZW52LkxPR0dFUl9MRVZFTCB8fCAnb2ZmJ1xyXG5cclxuLy8gaW1wb3J0IHsgYXBwQ29udGFpbmVyIH0gZnJvbSAnLi9pbnZlcnNpZnkuY29uZmlnJ1xyXG4vLyBpbXBvcnQgeyBUWVBFUyB9IGZyb20gJy4vY29uc3RhbnQvVHlwZXMnXHJcbi8vIGltcG9ydCB7IElVc2VyU2VydmljZSB9IGZyb20gJy4vc2VydmljZSdcclxuLy8gY29uc3QgdXNlclNlcnZpY2VJbnN0ID0gYXBwQ29udGFpbmVyLmdldDxJVXNlclNlcnZpY2U+KFRZUEVTLklVc2VyU2VydmljZSlcclxuLy8gY29uc29sZS5sb2codXNlclNlcnZpY2VJbnN0KVxyXG4vLyBjb25zb2xlLmxvZyh1c2VyU2VydmljZUluc3Quc2F5SGVsbG8oKSlcclxuXHJcbi8vIGNvbnRhaW5lci5iaW5kPFByb2plY3RTZXJ2aWNlSW1wbD4oVFlQRVMuUHJvamVjdFNlcnZpY2UpLnRvKFByb2plY3RTZXJ2aWNlSW1wbClcclxuLy8gY29udGFpbmVyLmJpbmQ8VXNlclNlcnZpY2VJbXBsPihUWVBFUy5Vc2VyU2VydmljZSkudG8oVXNlclNlcnZpY2VJbXBsKVxyXG4vLyBhdXRvUHJvdmlkZShjb250YWluZXIsIHNlcnZpY2UpXHJcblxyXG4vLyDlv4XpobvmlL7lnKhMb2FkZXLkuYvlkI5cclxuY29udGFpbmVyLmxvYWQoYnVpbGRQcm92aWRlck1vZHVsZSgpKVxyXG5cclxuY29uc3Qgc2VydmVyID0gbmV3IEludmVyc2lmeUV4cHJlc3NTZXJ2ZXIoY29udGFpbmVyKVxyXG5zZXJ2ZXIuc2V0Q29uZmlnKGFwcCA9PiB7XHJcbiAgLy8gYWRkIGJvZHkgcGFyc2VyXHJcbiAgYXBwLnVzZShcclxuICAgIGJvZHlQYXJzZXIudXJsZW5jb2RlZCh7XHJcbiAgICAgIGV4dGVuZGVkOiB0cnVlXHJcbiAgICB9KVxyXG4gIClcclxuICBhcHAudXNlKGJvZHlQYXJzZXIuanNvbigpKVxyXG59KVxyXG5sZXQgYXBwID0gc2VydmVyLmJ1aWxkKClcclxuYXBwLmxpc3RlbigzMDAyKVxyXG5cclxuLy8gY29uc3QgdXNlckxpc3Q6IElVc2VyRHRvW10gPSBbXVxyXG5cclxuLy8gY29uc3Qgc2VydmVyID0gaHR0cC5jcmVhdGVTZXJ2ZXIoZnVuY3Rpb24ocmVxOiBhbnksIHJlczogYW55KSB7XHJcbi8vICAgcmVzLndyaXRlSGVhZCgyMDApXHJcbi8vICAgcmVzLmVuZCgnaGVsbG8gd29ybGQnKVxyXG4vLyB9KVxyXG5cclxuLy8gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMjgzMDY3NDAvc29ja2V0LWlvLWNvbm5lY3QtdG8tdW5peC1zb2NrZXRcclxuLy8gc29ja2V0LmlvIHNldHVwXHJcbi8vIGNvbnN0IGlvID0gc29ja2V0SW8ubGlzdGVuKHNlcnZlcikgYXMgYW55XHJcbi8vIGlvLnNldCgndHJhbnNwb3J0cycsIFsnd2Vic29ja2V0J10pXHJcblxyXG4vLyBsZXQgcHJvdG9jb2wgPSAnJ1xyXG4vLyBjb25zdCBpc0RldiA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnXHJcbi8vIGlmICghaXNEZXYpIHtcclxuLy8gICAvLyBsZXQgbmduaXgga25vdyB3ZSB3YW50IHRvIHN0YXJ0IHNlcnZpbmcgZnJvbSB0aGUgcHJveHlcclxuLy8gICBmcy5vcGVuU3luYygnL3RtcC9hcHAtaW5pdGlhbGl6ZWQnLCAndycpXHJcbi8vICAgcHJvdG9jb2wgPSAnL3RtcC9uZ2lueC5zb2NrZXQnXHJcbi8vICAgLy8gRklYOiBhZGRyZXNzIGluIHVzZWRcclxuLy8gICBpZiAoZnMuZXhpc3RzU3luYyhwcm90b2NvbCkpIGZzLnVubGlua1N5bmMocHJvdG9jb2wpXHJcbi8vIH0gZWxzZSB7XHJcbi8vICAgcHJvdG9jb2wgPSBwcm9jZXNzLmVudi5TT0NLRVRJT19TRVJWRVJfUE9SVCBhcyBzdHJpbmdcclxuLy8gfVxyXG5cclxuLy8gLy8gbGlzdGVuIHRvIG5nbml4IHNvY2tldFxyXG4vLyBzZXJ2ZXIubGlzdGVuKHByb3RvY29sLCBmdW5jdGlvbigpIHtcclxuLy8gICAvLyBGSVg6IFBlcm1pc3Npb24gZGVuaWVkXHJcbi8vICAgaWYgKHByb3RvY29sICYmIGZzLmV4aXN0c1N5bmMocHJvdG9jb2wpKSBmcy5jaG1vZFN5bmMocHJvdG9jb2wsIDc1NSlcclxuLy8gICBsb2dnZXIuZGVidWcoYHNlcnZlciB1cGApXHJcbi8vIH0pXHJcblxyXG4vLyBpby5vbignY29ubmVjdF9lcnJvcicsIGZ1bmN0aW9uKGVycjogYW55KSB7XHJcbi8vICAgbG9nZ2VyLmRlYnVnKGVycilcclxuLy8gfSlcclxuXHJcbi8vIGlvLm9uKCdjb25uZWN0X3RpbWVvdXQnLCBmdW5jdGlvbihlcnI6IGFueSkge1xyXG4vLyAgIGxvZ2dlci5kZWJ1ZyhlcnIpXHJcbi8vIH0pXHJcblxyXG4vLyBpby5vbignY29ubmVjdGlvbicsIGZ1bmN0aW9uKHNvY2tldDogYW55KSB7XHJcbi8vICAgbG9nZ2VyLmRlYnVnKGBzb2NrZXQ6ICR7c29ja2V0LmlkfSBjb25uZWN0ZWRgKVxyXG4vLyAgIGxldCBjdXJyZW50VXNlcjogSVVzZXJEdG9cclxuLy8gICAvLyBzb2NrZXQuZW1pdCgnY29ubmVjdGlvbicsIHNvY2tldC5pZClcclxuXHJcbi8vICAgc29ja2V0Lm9uKCdkaXNjb25uZWN0JywgZnVuY3Rpb24oKSB7XHJcbi8vICAgICBsb2dnZXIuZGVidWcoYGRpc2Nvbm5lY3RlZGApXHJcbi8vICAgfSlcclxuXHJcbi8vICAgc29ja2V0Lm9uKEVBY3Rpb25UeXBlLkxPR19JTiwgKGFjdGlvbjogQWN0aW9uVHlwZTx0eXBlb2YgbG9nSW4+KSA9PiB7XHJcbi8vICAgICBsb2dnZXIuZGVidWcoYCR7RUFjdGlvblR5cGUuTE9HX0lOfS0tJHtKU09OLnN0cmluZ2lmeShhY3Rpb24pfWApXHJcbi8vICAgICBjdXJyZW50VXNlciA9IGFjdGlvbi5wYXlsb2FkLnVzZXJcclxuLy8gICAgIGNvbnN0IGV4aXN0aW5nVXNlciA9IHVzZXJMaXN0LmZpbmQoXHJcbi8vICAgICAgICh1c2VyOiBJVXNlckR0bykgPT4gdXNlci5uYW1lID09PSBjdXJyZW50VXNlci5uYW1lXHJcbi8vICAgICApXHJcbi8vICAgICBsb2dnZXIuZGVidWcoYGV4aXN0aW5nVXNlcjoke2V4aXN0aW5nVXNlcn1gKVxyXG4vLyAgICAgaWYgKGV4aXN0aW5nVXNlcikge1xyXG4vLyAgICAgICBjdXJyZW50VXNlciA9IGV4aXN0aW5nVXNlclxyXG4vLyAgICAgfSBlbHNlIHtcclxuLy8gICAgICAgbmV3VXNlcihjdXJyZW50VXNlcilcclxuLy8gICAgIH1cclxuLy8gICAgIGxvZ2dlci5kZWJ1ZyhgJHtKU09OLnN0cmluZ2lmeShjdXJyZW50VXNlcil9YClcclxuLy8gICAgIC8vIHNvY2tldC5lbWl0KEVBY3Rpb25UeXBlLkxHR19TVUNDRVNTLCB7IG1zZzogJ0xvZyBpbiBzdWNjZXNzLi4uJyB9KVxyXG4vLyAgICAgc29ja2V0LmVtaXQoRUFjdGlvblR5cGUuTE9HX0lOLCB7XHJcbi8vICAgICAgIHR5cGU6IEVBY3Rpb25UeXBlLkxPR19JTixcclxuLy8gICAgICAgcGF5bG9hZDogeyB1c2VyOiBjdXJyZW50VXNlciB9XHJcbi8vICAgICB9KVxyXG4vLyAgIH0pXHJcblxyXG4vLyAgIC8vIHNvY2tldC5vbihFQWN0aW9uVHlwZS5BRERfUFJPSkVDVCwgKGFjdGlvbjogQWN0aW9uVHlwZTx0eXBlb2YgYWRkUHJvamVjdD4pID0+IHtcclxuXHJcbi8vICAgLy8gfSlcclxuLy8gfSlcclxuXHJcbi8vIGZ1bmN0aW9uIHJlYWRKc29uKHBhdGg6IHN0cmluZywgY2FsbGJhY2s6IChvYmplY3Q6IGFueSkgPT4gYW55KTogdm9pZCB7XHJcbi8vICAgZnMucmVhZEZpbGUocGF0aCwgJ3V0ZjgnLCAoZXJyLCBkYXRhOiBzdHJpbmcpOiB2b2lkID0+IHtcclxuLy8gICAgIGlmIChlcnIpIHtcclxuLy8gICAgICAgbG9nZ2VyLmVycm9yKGVycilcclxuLy8gICAgIH0gZWxzZSB7XHJcbi8vICAgICAgIGNhbGxiYWNrKEpTT04ucGFyc2UoZGF0YSkpXHJcbi8vICAgICB9XHJcbi8vICAgfSlcclxuLy8gfVxyXG5cclxuLy8gY29uc3QgbmV3VXNlciA9ICh1c2VyOiBJVXNlckR0byk6IHZvaWQgPT4ge1xyXG4vLyAgIGxvZ2dlci5kZWJ1ZyhgbmV3IHVzZXI6ICR7dXNlci5uYW1lfWApXHJcbi8vICAgdXNlci5uYW1lID0gdXNlci5uYW1lXHJcbi8vICAgdXNlckxpc3QucHVzaCh1c2VyKVxyXG4vLyAgIC8vIFNhdmUgdG8gZmlsZVxyXG4vLyAgIHJlYWRKc29uKFVTRVJfRklMRV9QQVRILCAodXNlckRhdGE6IElVc2VyRHRvW10pOiB2b2lkID0+IHtcclxuLy8gICAgIHVzZXJEYXRhLnB1c2godXNlcilcclxuLy8gICAgIGNvbnN0IGpzb246IHN0cmluZyA9IEpTT04uc3RyaW5naWZ5KHVzZXJEYXRhKVxyXG4vLyAgICAgbG9nZ2VyLmRlYnVnKGpzb24pXHJcbi8vICAgICBmcy53cml0ZUZpbGUoVVNFUl9GSUxFX1BBVEgsIGpzb24sICd1dGY4JywgZXJyID0+IHtcclxuLy8gICAgICAgaWYgKGVycikge1xyXG4vLyAgICAgICAgIGxvZ2dlci5kZWJ1ZyhlcnIpXHJcbi8vICAgICAgICAgcmV0dXJuXHJcbi8vICAgICAgIH1cclxuLy8gICAgICAgbG9nZ2VyLmRlYnVnKGBXcml0ZSB0byAke1VTRVJfRklMRV9QQVRIfWApXHJcbi8vICAgICAgIHJldHVyblxyXG4vLyAgICAgfSlcclxuLy8gICB9KVxyXG4vLyB9XHJcbiIsImltcG9ydCAncmVmbGVjdC1tZXRhZGF0YSdcclxuaW1wb3J0IHsgQ29udGFpbmVyLCBpbmplY3QsIGludGVyZmFjZXMsIG11bHRpSW5qZWN0IH0gZnJvbSAnaW52ZXJzaWZ5J1xyXG5pbXBvcnQge1xyXG4gIGF1dG9Qcm92aWRlLFxyXG4gIGJ1aWxkUHJvdmlkZXJNb2R1bGUsXHJcbiAgZmx1ZW50UHJvdmlkZSxcclxuICBwcm92aWRlXHJcbn0gZnJvbSAnaW52ZXJzaWZ5LWJpbmRpbmctZGVjb3JhdG9ycydcclxuaW1wb3J0IHtcclxuICBtYWtlTG9nZ2VyTWlkZGxld2FyZSxcclxuICB0ZXh0U2VyaWFsaXplclxyXG59IGZyb20gJ2ludmVyc2lmeS1sb2dnZXItbWlkZGxld2FyZSdcclxuXHJcbmNvbnN0IGNvbnRhaW5lcjogaW50ZXJmYWNlcy5Db250YWluZXIgPSBuZXcgQ29udGFpbmVyKClcclxuXHJcbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xyXG4gIGxldCBsb2dnZXIgPSBtYWtlTG9nZ2VyTWlkZGxld2FyZSh1bmRlZmluZWQsIG91dCA9PlxyXG4gICAgY29uc29sZS5sb2codGV4dFNlcmlhbGl6ZXIob3V0KSlcclxuICApXHJcbiAgY29udGFpbmVyLmFwcGx5TWlkZGxld2FyZShsb2dnZXIpXHJcbn1cclxuXHJcbmNvbnN0IHByb3ZpZGVUaHJvd2FibGUgPSBmdW5jdGlvbihpZGVudGlmaWVyOiBhbnksIGlzVGhyb3dhYmxlOiBib29sZWFuKSB7XHJcbiAgcmV0dXJuIGZsdWVudFByb3ZpZGUoaWRlbnRpZmllcilcclxuICAgIC53aGVuVGFyZ2V0VGFnZ2VkKCd0aHJvd2FibGUnLCBpc1Rocm93YWJsZSlcclxuICAgIC5kb25lKClcclxufVxyXG5cclxuY29uc3QgcHJvdmlkZU5hbWVkID0gZnVuY3Rpb24oaWRlbnRpZmllcjogYW55LCBuYW1lOiBzdHJpbmcpIHtcclxuICByZXR1cm4gZmx1ZW50UHJvdmlkZShpZGVudGlmaWVyKVxyXG4gICAgLndoZW5UYXJnZXROYW1lZChuYW1lKVxyXG4gICAgLmRvbmUoKVxyXG59XHJcbmNvbnN0IHByb3ZpZGVTaW5nbGV0b24gPSBmdW5jdGlvbihpZGVudGlmaWVyOiBhbnkpIHtcclxuICByZXR1cm4gZmx1ZW50UHJvdmlkZShpZGVudGlmaWVyKVxyXG4gICAgLmluU2luZ2xldG9uU2NvcGUoKVxyXG4gICAgLmRvbmUoKVxyXG59XHJcblxyXG5jb25zdCBwcm92aWRlTmFtZWRTaW5nbGV0b24gPSBmdW5jdGlvbihpZGVudGlmaWVyOiBhbnksIG5hbWU6IHN0cmluZykge1xyXG4gIHJldHVybiBmbHVlbnRQcm92aWRlKGlkZW50aWZpZXIpXHJcbiAgICAuaW5TaW5nbGV0b25TY29wZSgpXHJcbiAgICAud2hlblRhcmdldE5hbWVkKG5hbWUpXHJcbiAgICAuZG9uZSgpXHJcbn1cclxuY29uc3QgcHJvdmlkZVRhZ2dlZFNpbmdsZXRvbiA9IGZ1bmN0aW9uKFxyXG4gIGlkZW50aWZpZXI6IGFueSxcclxuICB0YWc6IHN0cmluZyxcclxuICB2YWx1ZTogYW55XHJcbikge1xyXG4gIHJldHVybiBmbHVlbnRQcm92aWRlKGlkZW50aWZpZXIpXHJcbiAgICAuaW5TaW5nbGV0b25TY29wZSgpXHJcbiAgICAud2hlblRhcmdldFRhZ2dlZCh0YWcsIHZhbHVlKVxyXG4gICAgLmRvbmUoKVxyXG59XHJcblxyXG5leHBvcnQge1xyXG4gIGNvbnRhaW5lcixcclxuICBhdXRvUHJvdmlkZSxcclxuICBwcm92aWRlLFxyXG4gIHByb3ZpZGVUaHJvd2FibGUsXHJcbiAgcHJvdmlkZU5hbWVkLFxyXG4gIGluamVjdCxcclxuICBtdWx0aUluamVjdCxcclxuICBwcm92aWRlU2luZ2xldG9uLFxyXG4gIHByb3ZpZGVOYW1lZFNpbmdsZXRvbixcclxuICBwcm92aWRlVGFnZ2VkU2luZ2xldG9uLFxyXG4gIGJ1aWxkUHJvdmlkZXJNb2R1bGVcclxufVxyXG4iLCIvLyBzZXJ2aWNlXHJcbi8vIGltcG9ydCAnLi4vc2VydmljZSdcclxuaW1wb3J0ICcuLi9zZXJ2aWNlL2ltcGwnXHJcblxyXG4vLyBjb250cm9sbGVyXHJcbmltcG9ydCAnLi4vY29udHJvbGxlcidcclxuIiwiZXhwb3J0ICogZnJvbSAnLi9JT0MnXHJcbiIsImltcG9ydCB7IFRZUEVTIH0gZnJvbSAnLi4vLi4vY29uc3RhbnQnXHJcbmltcG9ydCB7IGluamVjdGFibGUsIGluamVjdCB9IGZyb20gJ2ludmVyc2lmeSdcclxuaW1wb3J0IHsgSVByb2plY3RTZXJ2aWNlIH0gZnJvbSAnLi8uLi9JUHJvamVjdFNlcnZpY2UnXHJcbmltcG9ydCB7IHByb3ZpZGUgfSBmcm9tICdpbnZlcnNpZnktYmluZGluZy1kZWNvcmF0b3JzJ1xyXG5cclxuQHByb3ZpZGUoVFlQRVMuUHJvamVjdFNlcnZpY2UpXHJcbmV4cG9ydCBjbGFzcyBQcm9qZWN0U2VydmljZUltcGwgaW1wbGVtZW50cyBJUHJvamVjdFNlcnZpY2Uge1xyXG4gIGdldEFsbCgpOiBhbnlbXSB7XHJcbiAgICByZXR1cm4gW1xyXG4gICAgICB7XHJcbiAgICAgICAgaWQ6IDEsXHJcbiAgICAgICAgbmFtZTogJ3Rlc3QnXHJcbiAgICAgIH1cclxuICAgIF1cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgSVByb2plY3RTZXJ2aWNlIH0gZnJvbSAnLi8uLi9JUHJvamVjdFNlcnZpY2UnXHJcbmltcG9ydCB7IGluamVjdGFibGUsIGluamVjdCB9IGZyb20gJ2ludmVyc2lmeSdcclxuaW1wb3J0IHsgSVVzZXJTZXJ2aWNlIH0gZnJvbSAnLi4vSVVzZXJTZXJ2aWNlJ1xyXG5pbXBvcnQgeyBUWVBFUyB9IGZyb20gJy4uLy4uL2NvbnN0YW50J1xyXG5pbXBvcnQgeyBwcm92aWRlU2luZ2xldG9uLCBwcm92aWRlIH0gZnJvbSAnLi4vLi4vaW9jJ1xyXG5cclxuLy8gQGluamVjdGFibGUoKVxyXG4vLyBAcHJvdmlkZVNpbmdsZXRvbihUWVBFUy5JVXNlclNlcnZpY2UpXHJcbkBwcm92aWRlKFRZUEVTLlVzZXJTZXJ2aWNlKVxyXG4vLyBAaW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBVc2VyU2VydmljZUltcGwgaW1wbGVtZW50cyBJVXNlclNlcnZpY2Uge1xyXG4gIC8vIHByaXZhdGUgX3Byb2plY3Q6IElQcm9qZWN0U2VydmljZVxyXG5cclxuICBAaW5qZWN0KFRZUEVTLlByb2plY3RTZXJ2aWNlKVxyXG4gIHByaXZhdGUgX3Byb2plY3QhOiBJUHJvamVjdFNlcnZpY2VcclxuXHJcbiAgLy8gcHVibGljIGNvbnN0cnVjdG9yKEBpbmplY3QoVFlQRVMuSVByb2plY3RTZXJ2aWNlKSBwcm9qZWN0OiBJUHJvamVjdFNlcnZpY2UpIHtcclxuICAvLyAgIHRoaXMuX3Byb2plY3QgPSBwcm9qZWN0XHJcbiAgLy8gfVxyXG4gIHNheUhlbGxvKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gJ0hlbGxvIFdvcmxkIScgKyBKU09OLnN0cmluZ2lmeSh0aGlzLl9wcm9qZWN0LmdldEFsbCgpKVxyXG4gIH1cclxufVxyXG4iLCJleHBvcnQgKiBmcm9tICcuL1Byb2plY3RTZXJ2aWNlSW1wbCdcclxuZXhwb3J0ICogZnJvbSAnLi9Vc2VyU2VydmljZUltcGwnXHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJvZHktcGFyc2VyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImludmVyc2lmeVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJpbnZlcnNpZnktYmluZGluZy1kZWNvcmF0b3JzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImludmVyc2lmeS1leHByZXNzLXV0aWxzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImludmVyc2lmeS1sb2dnZXItbWlkZGxld2FyZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJsb2c0anNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVmbGVjdC1tZXRhZGF0YVwiKTsiXSwic291cmNlUm9vdCI6IiJ9