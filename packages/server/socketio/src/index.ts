import fs from 'fs'
import socketIo from 'socket.io'
import http from 'http'
import path from 'path'
import { ActionType } from "typesafe-actions";
import { EActionType } from '@share/constant'
import { addProject } from '@share/action/ProjectAction'
import { IUserDto } from './dto';
import { USER_FILE_PATH } from './constant'
import { logIn } from '@share/action/UserAction'


import { configure, getLogger } from 'log4js';
configure('./config/log4js.json');
const logger = getLogger();
logger.level = process.env.LOGGER_LEVEL || 'off';

const userList: IUserDto[] = []

// let ngnix know we want to start serving from the proxy
fs.openSync('/tmp/app-initialized', 'w');

const server = http.createServer(function (req: any, res: any) {
  res.writeHead(200);
  res.end('hello world');
});

// https://stackoverflow.com/questions/28306740/socket-io-connect-to-unix-socket
// socket.io setup
const io = socketIo.listen(server) as any;
io.set('transports', ['websocket']);

const unixSocket = '/tmp/nginx.socket'
// FIX: address in used
if (unixSocket && fs.existsSync(unixSocket)) fs.unlinkSync(unixSocket)

const logPath = '/app/logs/socket.io'

// listen to ngnix socket
server.listen(unixSocket, function () {
  // FIX: Permission denied
  if (unixSocket) fs.chmodSync(unixSocket, 755)
  logger.debug(`server up`)
});

io.on('connect_error', function (err: any) {
  logger.debug(err)
});

io.on('connect_timeout', function (err: any) {
  logger.debug(err)
});

io.on('connection', function (socket: any) {
  logger.debug(`socket: ${socket.id} connected`)
  let currentUser: IUserDto
  // socket.emit('connection', socket.id)


  socket.on('disconnect', function () {
    logger.debug(`disconnected`)
  });

  socket.on(EActionType.LOG_IN, (action: ActionType<typeof logIn>) => {
    logger.debug(`${EActionType.LOG_IN}--${JSON.stringify(action)}`)
    currentUser = action.payload.user;
    const existingUser = userList.find((user: IUserDto) => user.name === currentUser.name);
    logger.debug(`existingUser:${existingUser}`)
    if (existingUser) {
      currentUser = existingUser;
    } else {
      newUser(currentUser);
    }
    logger.debug(`${JSON.stringify(currentUser)}`)
    // socket.emit(EActionType.LGG_SUCCESS, { msg: 'Log in success...' })
    socket.emit(EActionType.LOG_IN, {
      type: EActionType.LOG_IN,
      payload: { user: currentUser },
    });
  })

  // socket.on(EActionType.ADD_PROJECT, (action: ActionType<typeof addProject>) => {

  // })
});

function readJson(path: string, callback: (object: any) => any): void {
  fs.readFile(
    path,
    "utf8",
    (err, data: string): void => {
      if (err) {
        logger.error(err);
      } else {
        callback(JSON.parse(data));
      }
    },
  );
}


const newUser = (user: IUserDto): void => {
  logger.debug(`new user: ${user.name}`);
  user.name = user.name
  userList.push(user);
  // Save to file
  readJson(
    USER_FILE_PATH,
    (userData: IUserDto[]): void => {
      userData.push(user);
      const json: string = JSON.stringify(userData);
      logger.debug(json)
      fs.writeFile(USER_FILE_PATH, json, "utf8", (err) => {
        if (err) {
          logger.debug(err)
          return
        }
        logger.debug(`Write to ${USER_FILE_PATH}`)
        return;
      });
    },
  );
};