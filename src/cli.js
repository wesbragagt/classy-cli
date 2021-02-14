#! /usr/bin/env node
const fs = require('fs')
const path = require('path')
const {getSelectors, makeTypes, pipe} = require('./lib')
require('colors')
console.log("Generating types with classy-cli...".green)

const [_,__,inputFile, outputFile] = process.argv

const pathString = path.join(process.cwd(), inputFile)
// console.log(pathString)
const css = fs.readFileSync(pathString, 'utf8')

const output = pipe(getSelectors, makeTypes('type classname = '))(css)

fs.writeFileSync(path.join(process.cwd(), outputFile), output)