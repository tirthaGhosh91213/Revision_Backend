const crypto=require('crypto')
const randomValue=crypto.randomBytes(6).toString('hex')
console.log(randomValue)

const hashValue=crypto.createHash("sha256").update("Tirtha Ghosh").digest("hex")
console.log(hashValue)

// ***when the update value is same then the hashValue is also same for every time 