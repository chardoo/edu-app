import express from 'express';
import schoolController from '../../controllers/student/student_controller';
import authMiddleware from '../../middlewares/authorization_middleware';
import validateRequestWare from '../../middlewares/validate_request_middleware';
import loginValidator from '../../validators/loginValidator'
import assetMiddleWare from '../../middlewares/media_asset_middleware'
import multer, { Multer } from "multer";
import path from 'path';

const uploader =  multer({ dest: "uploads/" } );
const schoolRouter =  express.Router();
schoolRouter.post('/createSchool',  schoolController.createStudentAccount)




export default schoolRouter;
