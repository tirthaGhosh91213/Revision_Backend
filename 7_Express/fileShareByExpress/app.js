import express from 'express'

import { PORT } from '../env.js';  // relative path

import path from 'path'

const app=express();

// Absolute path
const absolutePath=path.join(import.meta.dirname,'public');

app.use(express.static(absolutePath))

app.get("/",(req,res)=>{

// console.log(import.meta.dirname)  ---> full directory path
// const __filename=new URL(import.meta.url).pathname; --->  file path with instance 
// console.log(__filename)

const homepagepath=path.join(import.meta.dirname,'public','index.html')
res.sendFile(homepagepath)
})
//Route parameter 

app.get("/profile/:userName",(req,res)=>{
  console.log(req.params.userName)
  res.send(`The name of the user is ${req.params.userName}`)
})

app.get("/profile/:userName/:article",(req,res)=>{
  console.log(req.params.userName)
  const formatURL=req.params.article.replace(/-/g," ")
  res.send(`The name of the user is ${req.params.userName} and the Article is ${formatURL}`)
})

// Query  parameter 
app.get("/products",(req,res)=>{
  console.log(req.query)
  res.send(`The name of the prduct is ${req.query.product}`)
})

app.get("/pages",(req,res)=>{
  console.log(req.query)
  res.send(`The page number is ${req.query.page} and the limit is ${req.query.limit}`)
})
app.listen(PORT,()=>{
  console.log(`Server running at http://localhost:${PORT}`)
})