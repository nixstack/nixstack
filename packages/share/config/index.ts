const localohst = 'http://localhost'
export default {
  PORT: process.env.PORT,
  SOCKETIO_SERVER_PORT: process.env.SOCKETIO_SERVER_PORT,
  host: `${localohst}:${process.env.PORT}`,
  APP_INDOOR_PORT: process.env.APP_INDOOR_PORT,
  appIndoorHost: `${localohst}:${process.env.APP_INDOOR_PORT}`,
  sockeIOUrl: `${localohst}:${process.env.SOCKETIO_SERVER_PORT}/socke.io/`,
  APP_INDOOR_STATIC_FILE: process.env.APP_INDOOR_STATIC_FILE
}
