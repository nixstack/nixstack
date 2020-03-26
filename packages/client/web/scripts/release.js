var rimraf = require('rimraf')
var mv = require('mv')
var path = require('path')
var execSync = require('child_process').execSync
var shelljs = require('shelljs')

process.chdir(path.join(__dirname, '../packages/client/web'))

var webPublic = path.resolve('../public/static/web')
var webBuild = path.resolve('./build')

// console.log(`Build starting in ${cwd}...`)
// execSync('npm run build')
// console.log('Build ended...')

rimraf(webPublic, function(err) {
  if (err) throw err
  console.log('[Web] del ' + webPublic + ' success...')
  mv(webBuild, webPublic, { mkdirp: true }, function(err) {
    if (err) throw err
    console.log('[Web] release to ' + webBuild + ' success...')
  })
})

// rimraf(path.resolve('./src'), function() {})
mv('package.json', 'package.json.bak', {}, function() {})
shelljs.echo('src').toEnd('.gitignore')
shelljs.sed('-i', /\/static\//, '', path.resolve('../public/.gitignore'))
