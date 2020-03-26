var shelljs = require('shelljs')
var path = require('path')

var webPackage = path.resolve('packages/client/web')
var publicPackage = path.resolve('packages/client/public')

shelljs.echo('src').toEnd(path.resolve(`${webPackage}/.gitignore`))
shelljs.echo('package.json').toEnd(path.resolve(`${webPackage}/.gitignore`))
shelljs.sed('-i', /\/static\//, '', path.resolve(`${publicPackage}/.gitignore`))
