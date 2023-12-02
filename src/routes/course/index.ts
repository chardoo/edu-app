import express from 'express';
import courseController from '../../controllers/course/course_controller';
import programController from '../../controllers/program/program_controller';
import programCourseController from '../../controllers/courseProgram/course_program_controller';
import authMiddleware from '../../middlewares/authorization_middleware';
import validateRequestWare from '../../middlewares/validate_request_middleware';
import loginValidator from '../../validators/loginValidator'
import assetMiddleWare from '../../middlewares/media_asset_middleware'
import multer, { Multer } from "multer";
import path from 'path';

const uploader =  multer({ dest: "uploads/" } );
const courseRouter =  express.Router();
courseRouter.post('/add-course', courseController.createCourse)
courseRouter.get('/get-course',  courseController.getAllCourses)
courseRouter.post('/add-program', programController.createProgram);
courseRouter.get('/get-program', programController.getAllPrograms);

courseRouter.post('/assign-course-to-a-program', programCourseController.assignCourseToProgram);
courseRouter.post('/get-courses-for-program', programCourseController.getCoursesForAProgram);




export default courseRouter;
