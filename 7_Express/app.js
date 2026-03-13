import express from "express"

const app=express();

app.get("/",(req,res)=>{
  return res.send("<h1>Hey Tirtha </h1>")
})

app.get("/about",(req,res)=>{
  return res.send("<h1>I am a full stack developer</h1>")
})
const PORT=process.env.PORT||6008;
app.listen(PORT,()=>{
  console.log(`Server running at port number ${PORT}`)
})