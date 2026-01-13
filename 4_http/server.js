const http=require('http')

const server=http.createServer((req,res)=>{
  if(req.url=='/'){
    res.setHeader("Content-Type","text/plain")
    res.write("Hey i am Tirtha Ghosh .")
    res.end()
  }
  else if(req.url=='/help'){
    res.write("How can i help you ")
    res.end()
  }
  else{
    res.setHeader("Content-Type","text/html")
    res.write("<h1>Oops ! Page not found </h1>")
    res.end()
  }
})

const PORT=8001;
server.listen(PORT,()=>{
  console.log(`Server listening at the port ${PORT}`)
})