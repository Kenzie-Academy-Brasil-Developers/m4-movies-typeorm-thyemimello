import { NextFunction, Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Movie } from "../entities";
import { AppError } from "../erros";


export const validateId = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  const id: number = +req.params.id;

  const movieRepository = AppDataSource.getRepository(Movie);

  const validate = await movieRepository.findOne({ where: { id: id } });

  if (!validate) {
    throw new AppError("Movie not found", 404);
  }

  next();
};
