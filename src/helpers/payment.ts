// import axios from "axios";
// const request = require('request');
// const {initializePayment, verifyPayment} = require('../config/paystack')(request);
// import { header } from "express-validator";

const PayStack = require('paystack-node')
const token = "sk_test_8acebf46437130793523b02bf94e533b1714ef97";
const paystack = new PayStack(token,"development")

const initPayment =  async(email:string, amount:number, username:string )=>{
 
  const form = {
    amount:amount*100, 
    full_name:username, 
    email:email,
    metadata :{
    full_name : username
    }

};

const initialisePayment =  paystack.initializeTransaction({
  reference: "7PVGX8MEk85tgeEpVDtD",
  amount: 500000, // 5,000 Naira (remember you have to pass amount in kobo)
  email: "seun045olayinka@gmail.com",
  subaccount: "ACCT_8f4s1eq7ml6rlzj"
})
initialisePayment.then(function (response:any){
  console.log("the response",response.body);
}).catch(function (error:any){
  // deal with error
})

}


export default {
    initPayment
}