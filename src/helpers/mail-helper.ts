import ejs from "ejs";
import path from "path";
// import logger from "../libs/logger";
import constants from "../constants/constants";
import sendGridMailService from "../services/sendgrid-service";
import SendSmsService from "../services/twillio_sms_service";
export const sendSignupMail = async (
  fullName: string,
  email: string,
  message: string,
  contact: string
) => {
  // return SendSmsService.sendMail({
  //   "sender": "Skidoo App SignUp",
  //             "message": message,
  //             "recipients": [contact]

  // })

  console.log("sigiidoaidsasiosiisdaiossoidosodsa");

  return SendSmsService.sendMail(
    "Skidoo App Sign Up",
  contact,
  "Welcome to Skiddo Enjoy your time. we will deliver your video anytime ",
)

  
  // ejs.renderFile(
  //   path.join(__dirname, "../../views", "signup-email.ejs"),
  //   { fullName, message},
  //   async (err, template) => {
  //     if (err) {
  //      // logger.error(err,"Rendering email template error: ");
  //       throw err;
  //     }
  //     return sendGridMailService.sendMail({
  //       from: process.env.Skiddo_EMAIL!,
  //       subject: constants.Agent.successfulSignUp,
  //       to: email,
  //       html: template,
  //     });
  //   }
  // );
};





export const sendPasswordResetRequestMail = async (
  fullName: string,
  email: string,
  code: string,
  contact: string
  
) => {
  
  return SendSmsService.sendMail(
         "Skidoo App Password Reset",
          contact,
          ` kindly us the  code: ${code} to verify your account`,
       

  )



};



export const resetSuccesful = async (
  
  email: string,
  fullName: string,
  contact: string
  
) => {
   console.log(email, fullName)
  return  SendSmsService.sendMail(
    "Skidoo App Password",
    contact,
      `Your password has been reset succesfully`,
    

)


};


export const identifiedImageEmail = async (
  email: string, 
  event: string, 
  photographer: string,
  contact:String
) => {
   
//   return SendSmsService.sendMail({
//     "sender": "Skidoo",
//         "message": `  Hey There! ${ photographer} </b>  took  a nice picture of you at <b>  ${ event }. </b> Visit our app and enjoy the looks`,
//         "recipients": [contact]

// })
  



};

