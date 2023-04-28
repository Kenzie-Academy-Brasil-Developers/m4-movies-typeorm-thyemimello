import { NextFunction, Request, Response } from "express";
import { ZodTypeAny } from "zod";
import { MovieRequest } from "../interfaces/interfaceMovies";



export const validateData = (schema: ZodTypeAny) => {
  return (req: Request, res: Response, next: NextFunction): void => {
    const data: MovieRequest = req.body;
    const validated: MovieRequest = schema.parse(data);
    req.body = validated;
    return next();
  };
};
