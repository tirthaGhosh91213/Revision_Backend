const evenntEmitter=require('events')
const emitter=new evenntEmitter()

const eventCount={
  "user_Login":0,
  "user_bring":0,
  "user_profile_update":0,
  "user_logout":0,
}

emitter.on("user_Login",(userName)=>{
  eventCount["user_Login"]++
  console.log(`${userName} is Loged in `)
})

emitter.on("user_bring",(userName,product)=>{
  eventCount["user_bring"]++
  console.log(`${userName} is brigging a ${product}`)
})

emitter.on("user_profile_update",(userName,update)=>{
  eventCount["user_profile_update"]++
  console.log(`${userName} name is updated to ${update}`)
})

emitter.on("user_logout",(userName)=>{
  eventCount["user_logout"]++
  console.log(`${userName} is Loged out`)
})
emitter.on("summery",()=>{
  console.log(eventCount)
})

emitter.emit("user_Login",'Tirtha')
emitter.emit("user_bring",'Tirtha' ,'Laptop')
emitter.emit("user_profile_update",'Tirtha' ,'Tirtha Ghosh')
emitter.emit("user_logout" ,'Tirtha Ghosh')

emitter.emit("summery")
