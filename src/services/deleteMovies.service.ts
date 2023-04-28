import { AppDataSource } from "../data-source";
import { Movie } from "../entities";

export const deleteMovieService = async (id: number) => {
    const moviesRepository = AppDataSource.getRepository(Movie);
  
    const deletedMovie = await moviesRepository.findBy({ id: id });
  
    await moviesRepository.remove(deletedMovie);
  }