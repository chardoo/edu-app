import { NextFunction, Request, Response } from "express";

const testfunction = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {

    return res.status(200).json({   message:"  successful"  });
  } catch (error) {
    return next(error);
  }
};



export default {
 testfunction
};
