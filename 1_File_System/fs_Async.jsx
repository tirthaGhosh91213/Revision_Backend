const { error } = require('console')
const fs=require('fs')
const path=require('path')

const fileName="demo2.txt"
const pathName=path.join(__dirname,fileName)


fs.writeFile(pathName,"I will continue the discipline  and achive my goal ","utf-8", 
(error)=>{
  if (error) console.log(error)
    else console.log("File is created successfully ")
})


fs.readFile(pathName,"utf-8", 
(error,data)=>{
  if (error) console.log(error)
    else console.log(data)
})

fs.appendFile(pathName,"\n Yes i will continue the discipline ","utf-8" ,
(error)=>{
if(error) console.log(error)
  else console.log("Data update sucessfuly ")
})

/*
fs.unlink(pathName,
(error)=>{
if(error) console.log(error)
  else console.log("Delete sucessfully ")
})
*/

const newFilename ="NotDemo2.txt"
const newFile2=path.join(__dirname,newFilename)
fs.rename(pathName,newFile2,
(error)=>{
if(error) console.log(error)
  else console.log("Rename succesfully ")
})