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
const addBookToStore = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { pdf, name, price } = req.body;

    const newBook = await prismaClient.bookStore.create({
      data: {
        pdf,
        name,
        price
      },
      select: { id: true, pdf: true, name:true, price:true},
    });

    return res.status(201).json(newBook);
  } catch (error) {
    return next(error);
  }
};


const getAllBooks = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const courses = await prismaClient.bookStore.findMany({
      select: { id: true, pdf: true,  name:true, price:true},
    });

    return res.status(200).json(courses);
  } catch (error) {
    return next(error);
  }
};

const payForAbook = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { amount, email } = req.body;
      Paystack.transaction
        .initialize({
          email: email || "customer@email.com",
          amount: parseInt(amount) * 100, // in kobo
        })
        .then(function (body: any) {
         
          return res.status(200).json(body.data);
        });
    } catch (error) {
      return next(error);
    }
  };

  const completePayment = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const {  studentId, referenceId, BookStoreId, } = req.body;
      const options = {
        url: "https://api.paystack.co/transaction/verify/" + referenceId,
        headers: {
          authorization: "Bearer " + process.env.paystack,
          "content-type": "application/json",
          "cache-control": "no-cache",
        },
      };
      request.get(options, async (error, response: any, body: any) => {
        var Body = JSON.parse(body);
  
        if (Body.data.status == "success") {
          const studentLibrary = await prismaClient.studentLibrary.create({
            data: {
         
              studentId,
              BookStoreId,
            },
          });
          
          return res.status(200).json({ studentLibrary });
        }
        throw new BadRequestError("payment unsuccefull");
      });
    } catch (error) {
      return next(error);
    }
  };








export default {

    addBookToStore,
    getAllBooks,
    payForAbook
 
};
