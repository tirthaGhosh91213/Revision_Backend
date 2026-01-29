
import { readFile, writeFile } from "fs/promises";
import { createServer } from "http";
import path from "path";
import { json } from "stream/consumers";

const PORT =3002;
const DETAIL_PATH=path.join("data","links.json")

const saveLinks=async()=>{

}

const loadLinks= async()=>{
  try {
    const data= await readFile(DETAIL_PATH,'utf-8')
    return json.parse(data)

  } catch (error) {
    if(error.code==="ENOENT"){
     await writeFile(DETAIL_PATH,JSON.stringify(data))
     return {}
    }
    throw new error
  }
}

const server =createServer( async(req , res)=>{
  console.log(req.url)

  if(req.method==="GET" && req.url==="/"){
      try {
        const data = await readFile(path.join("public","index.html"))
         res.writeHead(200, { "Content-Type": "text/html" })

         res.end(data)
      } catch (error) {
        res.writeHead(200, { "Content-Type": "text/html" })

        res.end("Page not found ")
    }
  }

  if(req.method==="POST" && req.url==="/shortner"){
    const links = await loadLinks()
    const data=""
    
    req.on('data',(chunk)=>{
      data=data+chunk;
    });

    req.on('end',async()=>{
      const {url,shortcode}=JSON.parse(data) 
      if(!url){
        res.writeHead(400, { "Content-Type": "text/plain" })
        return res.end("URL is not valid ")
      }
      const findshortcode=shortcode || crypto.randomBytes(4).toString('hex')

      if(links[findshortcode]){
        res.writeHead(400, { "Content-Type": "text/plain" })
        return res.end("The short code is already exists please enter another")
      }
      links[findshortcode]=url;
      await saveLinks(links)
    })
  }
  
})

server.listen(PORT,()=>{
  console.log(`Server running at http://localhost:${PORT}`)
})
