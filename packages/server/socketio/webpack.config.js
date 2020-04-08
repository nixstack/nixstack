const path = require('path')
// Module not found: Error: Can't resolve 'uws' in '**/node_modules/engine.io/lib'
const nodeExternals = require('webpack-node-externals')
const webpack = require('webpack')
const dotEnv = require('dotenv')
const findUp = require('find-up')

const root = path.dirname(findUp.sync('lerna.json'))
dotEnv.config({ path: path.resolve(root, '.env') })

module.exports = {
  mode: 'development',
  target: 'node',
  devtool: 'inline-source-map',
  entry: './src/index.ts',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/dist',
  },
  resolve: {
    extensions: ['.ts', '.js'],
    alias: {
      '@share': path.resolve(__dirname, '../../share'),
    },
  },
  module: {
    rules: [{ test: /\.tsx?$/, loader: 'awesome-typescript-loader' }],
  },
  externals: [nodeExternals()],
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development'),
        PORT: JSON.stringify(process.env.PORT || 80),
        SOCKETIO_SERVER_PORT: JSON.stringify(process.env.SOCKETIO_SERVER_PORT),
        APP_INDOOR_STATIC_FILE:
          process.env.APP_INDOOR_STATIC_FILE &&
          JSON.stringify(
            path.resolve(root, process.env.APP_INDOOR_STATIC_FILE)
          ),
        // DB
        DB_DIALECT: JSON.stringify(process.env.DB_DIALECT),
        DB_DATABASE: JSON.stringify(process.env.DB_DATABASE),
        DB_USERNAME: JSON.stringify(process.env.DB_USERNAME),
        DB_PASSWORD: JSON.stringify(process.env.DB_PASSWORD),
        DB_HOST: JSON.stringify(process.env.DB_HOST),
        DB_PORT: JSON.stringify(process.env.DB_PORT),
        DATABASE_URL: JSON.stringify(process.env.DATABASE_URL),
      },
    }),
  ],
}
