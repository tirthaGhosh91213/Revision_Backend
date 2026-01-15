import readline from "readline"

const rl=readline.createInterface({
  input:process.stdin,
  output:process.stdout,
})
const store=[]

const showTask=()=>{
  console.log("\n1: View Task :")
  console.log("2: Add Task :")
  console.log("3: Exit :")
  rl.question("Choose one option : ",handleRequest)
}
const handleRequest=(option)=>{
  if(option==="2"){
    rl.question("Enter the Task : ",(tasks)=>{
      store.push(tasks);
      console.log("Task Added sucessfuly ",tasks)
      showTask()
    })
  }
  else if (option==="1"){
    console.log("Your Tasks are :")
    store.forEach((task,idx)=>{
      console.log(`${idx+1}: ${task}`)
      showTask()
    })
  }
  else if(option==="3"){
    console.log("Good Bye ")
    rl.close()
    
  }
  else {
    console.log("Invalid Option ")
    showTask()}
}
showTask()