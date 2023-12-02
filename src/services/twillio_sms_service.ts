const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
// const client = require('twilio')(accountSid, authToken);
// import axios from 'axios';
// var https = require('follow-redirects').https;
// var fs = require('fs');
import axios from 'axios';
import fetch from 'node-fetch'
const SERVICE_PLAN_ID = '83b40a78421d4a92917c983f452598d0';
const API_TOKEN = 'Yf05b9a11d2744593b94e13a038878360';
const SINCH_NUMBER = '+447520652578';
const TO_NUMBER = 'sender_number';

class SendSmsService {
 

    async sendMail(title:string, reciever: string, message: string ){
          console.log("sending sms");
          console.log(title);

          // SEND SMS

axios.get(`https://sms.arkesel.com/sms/api?action=send-sms&api_key=OmF3NGw3dmdya1hiMHFCV2Q=&to=${reciever}&from=Skiddo&sms=${message}`)
.then(response => console.log(response))
.catch(error => console.log(error));
        // const resp = await fetch(
        //     'https://us.sms.api.sinch.com/xms/v1/' + SERVICE_PLAN_ID + '/batches',
        //     {
        //       method: 'POST',
        //       headers: {
        //         'Content-Type': 'application/json',
        //         Authorization: 'Bearer ' + API_TOKEN
        //       },
        //       body: JSON.stringify({
        //         from: SINCH_NUMBER,
        //         to: [reciever],
        //         body: message})
        //     }
        //   );
        //   console.log(resp);
        
        //   const data = await resp.json();
        //   console.log(data);
//       var options = {
//         'method': 'POST',
//         'hostname': 'k3g3l1.api.infobip.com',
//         'path': '/sms/2/text/advanced',
//         'headers': {
//             'Authorization': '{authorization}',
//             'Content-Type': 'application/json',
//             'Accept': 'application/json'
//         },
//         'maxRedirects': 20
//     };
    
//     var req = https.request(options, function (res:any) {
//         var chunks: any = [];
    
//         res.on("data", function (chunk:any) {
//             chunks.push(chunk);
//         });
    
//         res.on("end", function (chunk:any) {
//             var body = Buffer.concat(chunks);
//             console.log(body.toString());
//         });
    
//         res.on("error", function (error:any) {
//             console.error(error);
//         });
//     });
    
//     var postData = JSON.stringify({
//       "messages": [
//           {
//               "destinations": [
//                   {
//                       "to": reciever
//                   }
//               ],
//               "from": "Skiddo",
//               "text": message
//           }
//       ]
//   });
  
//   req.write(postData);
  
//   req.end();
//     }
    }
}
  export default new SendSmsService();