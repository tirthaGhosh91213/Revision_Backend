import https from 'https'
import chalk from 'chalk'
import { error } from 'console'

const showJoke=()=>{

  const api="https://official-joke-api.appspot.com/random_joke"
  https.get(api,(res)=>{
    let data=""
    res.on('data',(chunk)=>{
      data+=chunk;
    })
    res.on('end',()=>{
      const jokes=JSON.parse(data)
      console.log(jokes)
      console.log(chalk.white(`${jokes.setup}`))
      console.log(chalk.bgGreen.white(`${jokes.punchline}`))
    })
    res.on('error',(err)=>{
      console.log(err.message)
    })
  })
}
showJoke()

