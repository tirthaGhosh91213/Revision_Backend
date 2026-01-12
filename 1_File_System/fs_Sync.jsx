// Write file 

const fs = require('fs')
const path=require('path')

const fileName ="Demo.txt";
const pathName=path.join(__dirname,fileName)

// path of the file
console.log(__dirname)

//***  */ fs.writeFileSync(filePath,"data",options)
const writeFile=fs.writeFileSync(pathName,"Hey Tirtha Let's strongly come back ","utf-8")
console.log(writeFile)


// Read data 
const readFile=fs.readFileSync(pathName,"utf-8")

// if you don't give the option(utf-8) then use toString() other wise not 
console.log(readFile.toString())
console.log(readFile)



// Update file 
const updateFile=fs.appendFileSync(pathName,"Please take is seriously ","utf-8")
console.log(updateFile)


// Delete File
/* const deleteFile=fs.unlinkSync(pathName)
 console.log(deleteFile)*/



// update the file name 

const newFilename="NotDemo.txt"
const fileName2=path.join(__dirname,newFilename)
fs.renameSync(pathName,fileName2)