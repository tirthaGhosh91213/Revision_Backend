const { log } = require('console')
const fs=require('fs')
const path=require('path')

const fileName='async_await.txt'
const pathName=path.join(__dirname,fileName)

// read directory
/*
const pathName2=__dirname
const readdirectory= async()=>{
  try {
    const data= await fs.promises.readdir(pathName2,"utf-8")
    console.log(data)
  } catch (error) {
    console.log(error)
  }
}
readdirectory()
*/


// write file
const fileWrite=async()=>{
  try {
    await fs.promises.writeFile(pathName,"Hey ia am tirtha ","utf-8")
  } catch (error) {
    console.log(error)
  }
}
fileWrite()


// read File
const fileRead = async () => {
  try {
    const data = await fs.promises.readFile(pathName, "utf-8");
    console.log(data);
  } catch (error) {
    console.error(error);
  }
};

fileRead();


// update file
const fileUpdate=async()=>{
  try {
    await fs.promises.appendFile(pathName,"\nHey ia am tirtha i am here ","utf-8")
  } catch (error) {
    console.log(error)
  }
}
fileUpdate()


//delete file 
/*
const fileDelete = async () => {
  try {
    await fs.promises.unlink(pathName, "utf-8");
    console.log("File deleted ");
  } catch (error) {
    console.error(error);
  }
};

fileDelete();
*/