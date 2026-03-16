import express from "express"
import { PORT } from "./env.js";
import path from "path";

const app=express();

const staticPath=path.join(import.meta.dirname,"public")
console.log(staticPath)
app.use(express.static(staticPath));
app.use(express.urlencoded({extended:true})) /// extended :true for the nested object 

// app.get("/",(req,res)=>{
//   return res.send("<h1>Hey Tirtha </h1>")
// })

// app.get("/about",(req,res)=>{
//   return res.send("<h1>I am a full stack developer</h1>")
// })

// form submission

// app.get("/contact",(req,res)=>{
//   console.log(req.query)
//   res.redirect("/")
// })

app.post("/contact",(req,res)=>{
  console.log(req.body)
  res.send("OKKKKKK")
})

app.use((req,res)=>{
  // res.sendFile(path.join(staticPath,"404.html")) 
  // or 
  res.sendFile(path.join(import.meta.dirname ,"view","404.html"))
})

// const PORT=process.env.PORT||6008;
app.listen(PORT,()=>{
  console.log(`Server running at port number http://localhost:${PORT}`)
})