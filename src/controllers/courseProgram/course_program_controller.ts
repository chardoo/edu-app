import { NextFunction, Request, Response } from "express";
import BadRequestError from "../../errors/bad-request-error";
import prismaClient from "../../extensions/prisma_ext";
import accessTokenUtils from "../../utils/usersAccessToken";
import generateJwtToken from "../../utils/jwt_Utils";
import { Prisma, PrismaClient } from ".prisma/client";
import constants from "../../constants/constants";
import { body } from "express-validator";
import moment from "moment";
//import redisConnect from '../../extensions/redis_ext';
// import QueueExt from "../../extensions/queues_ext";
import { Decimal } from "@prisma/client/runtime";
import Uplaods from "../../helpers/cloudinary";
import payments from "../../helpers/payment";
import formidable from "formidable";
import fs from "fs";
import request from "request";
import { randomGenerator } from "../../helpers/generateCode";
let today = moment().format("MMMM Do YYYY");
const Paystack = require("paystack")(process.env.paystack);
const assignCourseToProgram = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { courseId, programId } = req.body;

    const newCourse = await prismaClient.programToCourse.create({
      data: {
      courseId,
      programId,
      },
    });

    return res.status(201).json(newCourse);
  } catch (error) {
    return next(error);
  }
};



const getCoursesForAProgram = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { studentId, programId } = req.body;

    // Verify that the program is associated with the given student
    const studentProgram = await prismaClient.program.findMany({
      where: {
        id : programId
      },
      include: {
      courses:{
        include:{
          course:true
        }
      }
        
      },
    });

    if (!studentProgram) {
      return res.status(404).json({ message: 'Program not found for the given student' });
    }

    // Extract the courses from the student's program
   // const courses = studentProgram.program.courses.map(pc => pc.course);

    return res.status(200).json(studentProgram);
  } catch (error) {
    return next(error);
  }
};


export default {
  assignCourseToProgram,
  getCoursesForAProgram
};
