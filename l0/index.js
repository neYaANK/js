"use strict"
//const test = require("./User")
const {User} = require("./User")

const path = require("node:path")

//console.log('Hello World!')
//const user = new test.User("Ivan","Ivanov")
//const user = new User('Ivan','Ivanov')
//console.log(user)
console.log(path.resolve('fisrt','second','one','two'))


//CommonJS & ESmodules
//require:
//Resolving->Loading->Wrapping->Evaluation->Caching
//Resolving:
//1) core modules
//2) File
//*.js, *.json
//3) Directory
// package.json -> field main where value is the name of file
// index.js/index.json
//4) node_modules
//5) throw new Error()
