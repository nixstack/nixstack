var childCprocess = require('child_process')
var execSync = childCprocess.execSync
var exec = childCprocess.exec

exec('npx lerna bootstrap', function(err) {
  if (err) {
    throw err
  }
  console.log('Dependence installed...')
  exec('npx lerna run start')
})
// execSync('npx lerna bootstrap')

// execSync('npx lerna run start')

execSync('npx lerna run bind')
