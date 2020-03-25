var childCprocess = require('child_process')
// var path = require('path')
var exec = childCprocess.exec

exec('npx lerna run start')

exec('npx lerna run bind')
