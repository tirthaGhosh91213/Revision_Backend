const fs=require('fs')
const path=require('path')

const fileName="promise.txt"
const pathName=path.join(__dirname,fileName)


// write file
fs.promises.writeFile(pathName,"Day 2 of comeback ","utf-8")
.then(console.log("File is created"))
.catch((error)=>{console.log(error)})


// read directory
const pathName2=__dirname
fs.promises.readdir(pathName2,"utf-8").then((data)=>{
  console.log(data)
}).catch((err)=>{
  console.log(err)
})

// read file
fs.promises.readFile(pathName,"utf-8").then((data)=>{console.log(data)}).then((err)=>{console.log(err)})


//Update file 
fs.promises.appendFile(pathName,"\nDay 2 of comeback , i will continue","utf-8")
.then(console.log("File updated sucessfully"))
.catch((error)=>{console.log(error)})

//File delete 
/*
fs.promises.unlink(pathName)
.then(console.log("File deleted sucessfully"))
.catch((error)=>{console.log(error)})
*/
