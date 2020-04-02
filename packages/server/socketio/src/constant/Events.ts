export const EVENT_TYPE_MAP = {
  domain: 'domain.event',
  socket: 'socket.event'
}

export const EVENT_NAME_MAP = {
  onSocketConnection: 'connection',
  onSocketUserLogin: `${EVENT_TYPE_MAP.socket}.onSocketUserLogin`
}
