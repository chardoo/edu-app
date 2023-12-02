import { Attachment } from 'nodemailer/lib/mailer';


/** Email input */
export interface IEMailInput {
  to: string;
  from: string;
  html?: string;
  text?: string;
  subject: string;
}


