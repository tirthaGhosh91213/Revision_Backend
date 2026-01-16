import readline from "readline"
import fs from "fs"
import path from "path"


const rl=readline.createInterface({
  input:process.stdin,
  output:process.stdout,
})

const fileCreate=()=>{
  rl.question("Enter the file name : ",(fileName)=>{
    rl.question("Enter yout content here : ",(content)=>{
      fs.writeFileSync(fileName,content,"utf-8")
      rl.close()
    })
})
}
fileCreate()

