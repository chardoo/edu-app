import nodemailer, { Transporter } from "nodemailer";
import SMTPTransport from "nodemailer/lib/smtp-transport";
import { IEMailInput } from "../interfaces/mail-interfaces";
// import MailService from "./mail-service";
import  sgMail from '@sendgrid/mail'

class SendGridService {
 
  async sendMail(mail: any) {
    try {
      sgMail.setApiKey(process.env.SEND_GRID!)
     const me = await sgMail.send(mail)

      
    } catch (error) {
       console.log(error);
    }
  }
}
export default new SendGridService();
