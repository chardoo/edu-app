// import { Worker } from 'bullmq';
// import dotenv from 'dotenv';
// import IoRedis from 'ioredis';
// import constants from './constants/constants';

// import {sendSignupMail,sendPasswordResetRequestMail, resetSuccesful,identifiedImageEmail} from './helpers/mail-helper'

// dotenv.config();

// // Background worker for  training models
// const TrainModelWorker = new Worker(
//   constants.queueName.ModelQueue,
//   async (job) => {
//     switch (job.name) {
//       // case constants.jobName.trainModel:
//       //  await trainModel.trainModelTorecogniseImages(job.data.trainigArray, job.data.email, job.data.fullName, job.data.contact);
//       //   break; 
//       case constants.jobName.sendEmail:
//         await sendSignupMail(job.data.fullName, job.data.email, job.data.message, job.data.contact);
//         break; 
//       case constants.jobName.forgotPassword:
//         await sendPasswordResetRequestMail(job.data.fullName,job.data.email, job.data.pin, job.data.contact);
//         break; 
//       case constants.jobName.successfulReset:
//           await resetSuccesful(job.data.email, job.data.fullName,job.data.contact);
//           break; 
//       case constants.jobName.imageRecognisedEmail:
//             await identifiedImageEmail(job.data.email, job.data.eventName, job.data.photographer,job.data.contact);
//             break;       
//       default:
//         break;
//     }
//   },
//   {
//     connection: new IoRedis(process.env.REDIS_URL, {
//       enableReadyCheck: true,
//       maxRetriesPerRequest: null,
//     }),
//   },
// );

// // const SearchFacesWorker = new Worker(
// //   constants.queueName.SeachFaceQueue,
// //   async (job) => {
// //     switch (job.name) {
// //       case constants.jobName.searchFace:
// //         await trainModel.detectFacesOfUploadedImages(job.data.imageSetToBeRecognise, job.data.eventName);
// //            break;  
// //       default:
// //         break;
// //     }
// //   },
// //   {
// //     connection: new IoRedis(process.env.REDIS_URL,),
// //   },
// // );

// // TODO:check if multiple workers will help
// export default{ TrainModelWorker,}