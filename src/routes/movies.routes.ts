import { Router } from "express";
import { verifyMovieExists } from "../middlewares/verifyMovieExists.middleware";
import { validateData } from "../middlewares/validateData.middleware";
import { requestMovieSchema, updateMovieSchema } from "../schemas/movies.Schemas";
import { createMovieController, deleteMovieController, listMoviesController, updateMovieController } from "../controllers/movies.Controller";
import { validateId } from "../middlewares/verifyId.middleware";

const movieRouter = Router();

movieRouter.post(
  "",
  verifyMovieExists,
  validateData(requestMovieSchema),
  createMovieController
);
movieRouter.get("", listMoviesController);

movieRouter.patch(
  "/:id",
  verifyMovieExists,
  validateId,
  validateData(updateMovieSchema),
  updateMovieController
);

movieRouter.delete("/:id", validateId, deleteMovieController);

export { movieRouter}
