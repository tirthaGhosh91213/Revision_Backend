const EventEmmiter=require('events')

const emmiters=new EventEmmiter();
emmiters.on("greet",()=>{
  console.log(`Hey Tirtha How are you `)
})

emmiters.emit("greet")

// with Parameter

emmiters.on("greet",(prof)=>{
  console.log(`Hey Tirtha How are you , ${prof} `)
})

emmiters.emit("greet","are you a developer ")

// using Object
emmiters.on("greet",(arg)=>{
  console.log(`Hey ${arg.name} How are you , ${arg.prof} `)
})

emmiters.emit("greet",{name:"Tirtha",prof:"are you a developer "})