const localohst = 'http://localhost'
export default {
  host: `${localohst}:${process.env.PORT}`,
  APP_INDOOR_PORT: process.env.APP_INDOOR_PORT,
  appIndoorHost: `${localohst}:${process.env.APP_INDOOR_PORT}`,
  sockeIOUrl: `${localohst}:${process.env.SOCKETIO_SERVER_PORT}/socke.io/`
}
