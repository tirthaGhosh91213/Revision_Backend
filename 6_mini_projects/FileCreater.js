import readline from "readline"
import fs from "fs"
import path from "path"


const rl=readline.createInterface({
  input:process.stdin,
  output:process.stdout,
})

// const pathName=path.join(__dirname,()=>{
//   rl.question("Enter the file name : ",handelRequest)
// const handelRequest=()=>{
//   fs.writeFileSync(pathName,"utf-8")
// }
// })

// const writeFile=fs.writeFileSync(pathName,"Hey Tirtha Let's strongly come back ","utf-8")
// console.log(writeFile)

// const readFile=fs.readFileSync(pathName,"utf-8")

// console.log(readFile)

const pathName=path.join()
rl.question("Enter the file name : ",()=>{
  fs.writeFileSync(pathName,"utf-8")
})
