import { NextFunction, Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Movie } from "../entities";
import { AppError } from "../erros";

export const verifyMovieExists = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  if (req.body.name) {
    const name: string = req.body.name;

    const movieRepository = AppDataSource.getRepository(Movie);

    const validate = await movieRepository.findOne({ where: { name: name } });

    if (validate) {
      throw new AppError("Movie already exists.", 409);
    }
  }

  return next();
};
