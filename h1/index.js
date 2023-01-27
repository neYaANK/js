"use strict"

const fs = require("node:fs/promises")
const oldFile = 'test.txt'
const newFile = 'hw1.txt'
const sign = "Ho-ho-ho!"

fs.readFile(oldFile,{encoding:'utf-8'})
    .then(data=>writeData(data).then(appendSign()))
    .catch(err=>console.error(err))

async function writeData(data){
    fs.writeFile(newFile, data, {encoding:'utf-8'})
        .then(console.log('where'))
        .catch(err=>console.error(err))    
}
function appendSign(){
    const toAppend = '\n'+sign
    fs.appendFile(newFile, toAppend,{encoding:'utf-8'})
        .then(console.log('success!'))
        .catch(err=>console.error(err))
}

