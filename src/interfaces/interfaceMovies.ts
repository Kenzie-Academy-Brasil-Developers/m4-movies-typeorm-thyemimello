import { z } from "zod";
import { Movie } from "../entities";
import { moviesSchema } from "../schemas/movies.Schemas";


 interface IMovieData {
  prevPage: string | null;
  nextPage: string | null;
  count: number;
  data: Movie[];
}

 type IMovieSchema = z.infer<typeof moviesSchema>;

 type MovieRequest = Omit<IMovieSchema, "id">;

 interface IConfigPage {
  take: number;
  skip: number;
  order?: {
    [number: string]: string;
  };
}

 interface IMoviesData {
  prevPage: string | null;
  nextPage: string | null;
  count: number;
  data: Movie[];
}

 type IMovieUpdateData = Partial<MovieRequest>;

 export {IMovieData, IMovieSchema, MovieRequest, IConfigPage, IMoviesData, IMovieUpdateData }
