#!/usr/bin/env node

var fs = require('fs')
var path = require('path')
var execSync = require('child_process').execSync
var glob = require('glob')

var pkgName = 'package.json'
var deps = '__dependence__.json'
var lernaPkgs = '__lerna__.json'
var rootPath = path.join(__dirname, '../')

process.chdir(rootPath)

fs.writeFileSync(
  path.resolve(`${rootPath}/${lernaPkgs}`),
  execSync(`${rootPath}/node_modules/.bin/lerna ls --json`)
)

var lernaPkgJsons = JSON.parse(
  fs.readFileSync(path.resolve(`${rootPath}/${lernaPkgs}`), 'utf-8')
)

var lernaPkgs = Array.from(lernaPkgJsons)
var pkgDeps = {}
var lernaPkgJson = {}
lernaPkgs.forEach(element => {
  if (element.name !== 'web') {
    lernaPkgJson = JSON.parse(
      fs.readFileSync(
        glob.sync(`packages/*/${element.name}/${pkgName}`)[0],
        'utf-8'
      )
    )
  }

  Object.assign(
    pkgDeps,
    lernaPkgJson.dependencies,
    lernaPkgJson.devDependencies
  )
})

var rootPkgJsons = JSON.parse(
  fs.readFileSync(path.resolve(`${rootPath}/${pkgName}`), 'utf-8')
)

Object.assign(pkgDeps, rootPkgJsons.dependencies)
Object.assign(rootPkgJsons, { dependencies: pkgDeps })

fs.writeFileSync(
  path.resolve(`${rootPath}/${pkgName}`),
  JSON.stringify(rootPkgJsons, null, 2)
)
