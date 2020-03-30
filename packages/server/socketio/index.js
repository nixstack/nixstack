// const fs = require('fs')
// var http = require('http')
// const express = require('express')

// const unixSocket = '/tmp/nginx.socket'
// const protocol = unixSocket || process.env.PORT || 80

// // let ngnix know we want to start serving from the proxy
// fs.openSync('/tmp/app-initialized', 'w')

// const app = express()

// // app.use(express.static('static/web'))

// app.all('/data', function (req, res, next) {
//   res.json({ code: 4001, message: 'Not Found!', data: {} })
// })

// app.all('/mock', function (req, res, next) {
//   res.json({ code: 4002, message: 'Not Found!', data: {} })
// })

// // app.get('/', function(req, res) {
// //   res.redirect('web/index.html')
// //   res.sendFile('web/index.html')
// // })

// var server = http.createServer(app)

// // socket.io setup
// const io = require('socket.io').listen(server)
// io.set('transports', ['websocket'])
// // FIX: address in used
// if (unixSocket && fs.existsSync(unixSocket)) fs.unlinkSync(unixSocket)

// // listen to ngnix socket
// app.listen(protocol, function () {
// // FIX: Permission denied
//   if (unixSocket) fs.chmodSync(unixSocket, 755)
//   console.info(`[Web] erver running at ${protocol}`)
// })

// io.on('connect_error', function (err) {
//   console.error(`[Web] ${err}`)
// })

// io.on('connect_timeout', function (err) {
//   console.error(`[Web] ${err}`)
// })

// io.on('connection', function (socket) {
//   console.info(`[Web] socket: ${socket.id} connected`)

//   socket.on('disconnect', function () {
//     console.info('[Web] disconnected')
//   })

//   socket.on('login', message => {
//     socket.emit('login', { message: message })
//   })
// })


const fs = require('fs');

// let ngnix know we want to start serving from the proxy
fs.openSync('/tmp/app-initialized', 'w');

const server = require('http').createServer(function (req, res) {
  res.writeHead(200);
  res.end('hello world');
});

// https://stackoverflow.com/questions/28306740/socket-io-connect-to-unix-socket
// socket.io setup
const io = require('socket.io').listen(server);
io.set('transports', ['websocket']);

const unixSocket = '/tmp/nginx.socket'
// FIX: address in used
if (unixSocket && fs.existsSync(unixSocket)) fs.unlinkSync(unixSocket)

const logPath = '/app/logs/socket.io'

// listen to ngnix socket
server.listen(unixSocket, function () {
  // FIX: Permission denied
  if (unixSocket) fs.chmodSync(unixSocket, 755)
  console.info(`server up`);
  fs.writeFile(`${logPath}/access.log`, `server up\n`, { flag: 'a', encoding: 'utf-8', mode: '0666' }, function (err) {
    if (err) {
      console.log("文件写入失败")
    } else {
      console.log("文件追加成功");

    }

  })
});

io.on('connect_error', function (err) {
  fs.writeFile(`${logPath}/access.log`, err + '\n', { flag: 'a', encoding: 'utf-8', mode: '0666' }, function (err) {
    if (err) {
      console.log("文件写入失败")
    } else {
      console.log("文件追加成功");

    }

  })
  console.error(err);
});

io.on('connect_timeout', function (err) {
  fs.writeFile(`${logPath}/access.log`, err + '\n', { flag: 'a', encoding: 'utf-8', mode: '0666' }, function (err) {
    if (err) {
      console.log("文件写入失败")
    } else {
      console.log("文件追加成功");

    }

  })
  console.error(err);
});

io.on('connection', function (socket) {
  console.info(`socket: ${socket.id} connected`);

  fs.writeFile(`${logPath}/access.log`, `socket: ${socket.id} connected\n`, { flag: 'a', encoding: 'utf-8', mode: '0666' }, function (err) {
    if (err) {
      console.log("文件写入失败")
    } else {
      console.log("文件追加成功");

    }

  })

  socket.emit('connection', socket.id)


  socket.on('disconnect', function () {
    fs.writeFile(`${logPath}/access.log`, 'disconnected\n', { flag: 'a', encoding: 'utf-8', mode: '0666' }, function (err) {
      if (err) {
        console.log("文件写入失败")
      } else {
        console.log("文件追加成功");

      }

    })
    console.info('disconnected');
  });

  socket.on('login', message => {
    fs.writeFile(`${logPath}/access.log`, 'login\n', { flag: 'a', encoding: 'utf-8', mode: '0666' }, function (err) {
      if (err) {
        console.log("文件写入失败")
      } else {
        console.log("文件追加成功");

      }

    })
    socket.emit('login', { message: message });
  })
});
