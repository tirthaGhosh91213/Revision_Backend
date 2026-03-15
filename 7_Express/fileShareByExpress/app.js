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

app.listen(PORT,()=>{
  console.log(`Server running at http://localhost:${PORT}`)
})