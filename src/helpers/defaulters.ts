import prismaClient from '../extensions/prisma_ext';
import { Prisma } from '.prisma/client';
import moment from 'moment';
let thirtydays =  moment().subtract(94, 'days').format("MMMM Do YYYY");
console.log(thirtydays)
const setdefaulters = async() =>{
try {
  //  const rich:enum = "defaulter"
  //  const me  = await prismaClient.dis.updateMany({
  //    where:{
  //      dateDisbursed:thirtydays,
  //    },
  //    data:{
       
  //    }
  //  });

  // const me = await prismaClient.user.findMany({ })
  // if(me){
  //   console.log('executed bro', me)
  // }
  //   return
} catch (error) {
  console.log(error)
    return null
    
}


}

export default{
  setdefaulters
} 

