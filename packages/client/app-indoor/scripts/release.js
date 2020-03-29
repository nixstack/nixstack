var rimraf = require('rimraf')
var mv = require('mv')
var path = require('path')
// var execSync = require('child_process').execSync
var findUp = require('find-up')
var pkgJson = require('../package.json')

process.chdir(path.join(__dirname, '../'))

var rootHome = path.dirname(findUp.sync('lerna.json'))
// console.log(lernaPath.split('packages'))


var releaseDir = path.join(rootHome, '__public__', pkgJson.name)
var buildBundle = path.resolve('./build')

// console.log(`Build starting in ${cwd}...`)
// execSync('npm run build')
// console.log('Build ended...')

rimraf(releaseDir, function (err) {
  if (err) throw err
  console.log('[Web] del ' + releaseDir + ' success...')
  mv(buildBundle, releaseDir, { mkdirp: true }, function (err) {
    if (err) throw err
    console.log('[Web] release to ' + buildBundle + ' success...')
  })
})
