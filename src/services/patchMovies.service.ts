import { AppDataSource } from "../data-source";
import { Movie } from "../entities";
import { IMovieUpdateData } from "../interfaces/interfaceMovies";

const updateMovieService = async (
    movieId: number,
    data: IMovieUpdateData
  ) => {
    const moviesRepository = AppDataSource.getRepository(Movie);
  
    const updatedMovie = await moviesRepository.save({ id: movieId, ...data });

    const movieFind = await moviesRepository.findOneBy({id: movieId})

    return movieFind;
  };

  export default updateMovieService