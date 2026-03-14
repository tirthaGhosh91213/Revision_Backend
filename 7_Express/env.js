// export const PORT=isNaN(process.env.PORT)?3000:parseInt(process.env.PORT);

import {z} from 'zod'

const ageReq=z.coerce.number().min(18).max(100).int();
const theAge=21;
// const calculateAge=ageReq.parse(theAge);
// console.log(calculateAge)

const {data,error,success}=ageReq.safeParse(theAge);
console.log(data)

const portSchema=z.coerce.number().min(3000).max(9999).default(3002);
export const PORT=portSchema.parse(process.env.PORT)
