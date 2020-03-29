var shelljs = require('shelljs')
var path = require('path')

var webPackage = path.resolve('packages/client/app-room')
var public = path.resolve('__public__')

shelljs.echo('src').toEnd(path.resolve(`${webPackage}/.gitignore`))
// shelljs.echo('package.json').toEnd(path.resolve(`${webPackage}/.gitignore`))
// shelljs.sed('-i', /\/static\//, '', path.resolve(`${publicPackage}/.gitignore`))

shelljs.mv(`${webPackage}/package.json`, `${webPackage}/package.json.bak`)
shelljs.exec(`git add -f ${public}`)
