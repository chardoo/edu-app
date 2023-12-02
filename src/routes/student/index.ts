import express from 'express';
import studentController from '../../controllers/student/student_controller';
import authMiddleware from '../../middlewares/authorization_middleware';
import validateRequestWare from '../../middlewares/validate_request_middleware';
import loginValidator from '../../validators/loginValidator'
import assetMiddleWare from '../../middlewares/media_asset_middleware'
import multer, { Multer } from "multer";
import path from 'path';

const uploader =  multer({ dest: "uploads/" } );
const studentRouter =  express.Router();
studentRouter.post('/login', validateRequestWare, studentController.LogIn)
studentRouter.post('/createAccount',  studentController.createStudentAccount)




export default studentRouter;
