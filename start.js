var childCprocess = require('child_process')
// var path = require('path')
var exec = childCprocess.exec

exec('./node_modules/.bin/lerna run start')

exec('./node_modules/.bin/lerna run bind')
