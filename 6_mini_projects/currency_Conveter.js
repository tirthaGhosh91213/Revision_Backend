import https from "https"
import readline from "readline"
import chalk from "chalk"

const rl=readline.createInterface({
  input:process.stdin,
  output:process.stdout
})
const currencyRate=(amount,rate)=>{
return amount*rate
}
const API_Key= "cc5c8ab3563a429a27eec6cb"
const URL=`https://v6.exchangerate-api.com/v6/${API_Key}/latest/USD`
https.get(URL,(res)=>{
  let data = "";
  res.on('data',(chunk)=>{
    data = data+chunk;

  })
  res.on('end',()=>{
    const rates=JSON.parse(data).conversion_rates
    // console.log(rates)
    rl.question("Enter the amount : ",(amount)=>{
      rl.question("Enter the currency type that you want to convert (ex INR) : ",(currency)=>{
        const rate =rates[currency.toUpperCase()]
        if(rate){
          console.log(chalk.bgGreen.white`${amount} USD is appromaxly ${currencyRate(amount,rate)} in ${currency.toUpperCase()}`)
        }else{
          console.log("Invalid Currency")
          rl.close()
        }
        rl.close()
      })
    })
  })
})