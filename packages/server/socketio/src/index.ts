import { TYPES } from './constant'
import fs from 'fs'
import socketIo from 'socket.io'
import http from 'http'
import path from 'path'
import { ActionType } from 'typesafe-actions'
import { EActionType } from '@share/constant'
import { addProject } from '@share/action/ProjectAction'
import { IUserDto } from './dto'
import { USER_FILE_PATH } from './constant'
import { logIn } from '@share/action/UserAction'
import { configure, getLogger } from 'log4js'
import { container, autoProvide, buildProviderModule } from './ioc'
import './ioc/Loader'
import { InversifyExpressServer } from 'inversify-express-utils'
import * as bodyParser from 'body-parser'
import { IUserService } from './service'
import * as service from './service/impl'

configure('./config/log4js.json')
const logger = getLogger()
logger.level = process.env.LOGGER_LEVEL || 'off'

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
container.load(buildProviderModule())

const server = new InversifyExpressServer(container)
server.setConfig(app => {
  // add body parser
  app.use(
    bodyParser.urlencoded({
      extended: true
    })
  )
  app.use(bodyParser.json())
})
let app = server.build()
app.listen(3002)

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
