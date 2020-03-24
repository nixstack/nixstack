var childCprocess = require('child_process')
var path = require('path')
var exec = childCprocess.exec

exec('npm install', { cwd: path.resolve('./packages/client/web') }, function(
  err
) {
  if (err) {
    throw err
  }
  console.log('Dependence installed...')
  exec('npm start', { cwd: path.resolve('./packages/client/web') })
})

exec('npm install', { cwd: path.resolve('./packages/client/public') }, function(
  err
) {
  if (err) {
    throw err
  }
  console.log('Dependence installed...')
  exec('npm start', { cwd: path.resolve('./packages/client/public') })
})

exec('npm install', { cwd: path.resolve('./packages/server/api') }, function(
  err
) {
  if (err) {
    throw err
  }
  console.log('Dependence installed...')
  exec('npm start', { cwd: path.resolve('./packages/server/api') })
})

// execSync('npx lerna bootstrap')

// execSync('npx lerna run start')

exec('npx lerna run bind')
