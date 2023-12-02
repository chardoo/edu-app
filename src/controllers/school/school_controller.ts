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


const createSchool = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {

      const {city, region, name,category, yearOfEstablishment, } = req.body;
        
    //   const { hashedToken, accessToken } =
    //     await accessTokenUtils.generateUserAccessToken(
    //       password! as string
    //     );

       const registerSchool = await prismaClient.school.create({
        data: {
         name,
         category,
         city,
         region,
         yearOfEstablishment
        },
       select: { name: true,},
      });
      return res.status(201).json({ registerSchool});
  
  } catch (error) {
    return next(error);
  }
};

export default {

  createSchool,
};
