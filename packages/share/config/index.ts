const localohst = 'http://localhost'
export default {
  NODE_ENV: process.env.NODE_ENV,
  PORT: process.env.PORT,
  SOCKETIO_SERVER_PORT: process.env.SOCKETIO_SERVER_PORT,
  host: `${localohst}:${process.env.PORT}`,
  API_HOST: `${localohst}:${process.env.SOCKETIO_SERVER_PORT}/api`,
  APP_INDOOR_PORT: process.env.APP_INDOOR_PORT,
  appIndoorHost: `${localohst}:${process.env.APP_INDOOR_PORT}`,
  sockeIOUrl: `${localohst}:${process.env.SOCKETIO_SERVER_PORT}/socke.io/`,
  APP_INDOOR_STATIC_FILE: process.env.APP_INDOOR_STATIC_FILE,

  FILE_SYS_URL: process.env.FILE_SYS_URL,

  // DB
  DB_DIALECT: process.env.DB_DIALECT,
  DB_DATABASE: process.env.DB_DATABASE,
  DB_USERNAME: process.env.DB_USERNAME,
  DB_PASSWORD: process.env.DB_PASSWORD,
  DB_HOST: process.env.DB_HOST,
  DB_PORT: process.env.DB_PORT,
}
