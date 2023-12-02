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
import QueueExt from "../../extensions/queues_ext";
import { Decimal } from "@prisma/client/runtime";
import Uplaods from "../../helpers/cloudinary";
import payments from "../../helpers/payment";
import formidable from "formidable";
import fs from "fs";
import request from "request";
import { randomGenerator } from "../../helpers/generateCode";
let today = moment().format("MMMM Do YYYY");
const Paystack = require("paystack")(process.env.paystack);
const LogIn = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { password, email } = req.body;
    const adminExists = await prismaClient.student.findFirst({
      where: {
        email: email,
      },
      select: {
        id: true,
        email: true,
        password: true,
        role: true,
        name: true,
        programId: true,

      },
    });

    if (!adminExists) {
      throw new BadRequestError("Login Failed!");
    }

    const isValidPassword = await accessTokenUtils.checkAccessToken(
      String(password),
      String(adminExists.password)
    );
    if (!isValidPassword) {
      throw new BadRequestError("Login Failed");
    }

    const { jwtToken, expiration } = generateJwtToken(
      adminExists.email,
      adminExists.id,
      adminExists.role.toString()
    );

    return res.status(200).json({
      id: adminExists.id,
      email: adminExists.email,
      role: adminExists.role,
      name: adminExists.name,
      programId: adminExists.programId,
      token: jwtToken,
      expiration,
      isValid: true,
    });
  } catch (error) {
    return next(error);
  }
};

const createStudentAccount = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {

      const {email, password, name,programDate, code,contact, programId, schoolId, studentId} = req.body;
        
      const { hashedToken, accessToken } =
        await accessTokenUtils.generateUserAccessToken(
          password! as string
        );

       const registerStudent = await prismaClient.student.create({
        data: {
          programId,
          name: name,
          email: email,
          schoolId,
          programDate,
          role:"student",
          code,
          studentId,
          contact,
          password: hashedToken,

        },
       select: { email: true, password: true, name: true, contact: true },
      });
      return res.status(201).json({  });
  
  } catch (error) {
    return next(error);
  }
};

export default {

  LogIn,
  createStudentAccount,
};
