#! /usr/bin/env node
const fs = require('fs')
const path = require('path')
const {getSelectors, makeTypes, pipe} = require('./lib')
require('colors')
console.log("Generating types with classy-cli...".green)

const [_,__,inputFile, outputFile = 'classname.ts'] = process.argv

const pathString = path.join(process.cwd(), inputFile)
// console.log(pathString)
const css = fs.readFileSync(pathString, 'utf8')
const template = (type) => `// Generated with classy-cli
    export type TClassname = ${type}
    export const classy = (classes: Array<TClassname | string>) => [...new Set(classes)].filter(e => e).join(' ')
`
const types = pipe(
    getSelectors, 
    makeTypes)(css)

fs.writeFileSync(path.join(process.cwd(), outputFile), template(types))