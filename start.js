var childCprocess = require('child_process')
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

exec('npx lerna run bind')
