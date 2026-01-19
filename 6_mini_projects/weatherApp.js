// import { error } from "console";
// import { url } from "inspector";
import readline from "readline/promises"

const rl=readline.createInterface({
  input:process.stdin,
  output:process.stdout,
})

const API_KEY="0fb9f2d4a56f8eae8e32fa8671e76d56";
// const URL="https://api.openweathermap.org/data/2.5/weather"

const shoWeather = async(city)=>{
  const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
  try {
    const res = await fetch(url)
    if(!res.ok){
      throw new Error("City is not found ❤️ ")
    }
    const weatherData= await res.json()
    console.log(weatherData)

  } catch (error) {
    console.log(error.message)
  }
}



const city =await rl.question("Enter your city name : ")
await shoWeather(city)
rl.close()