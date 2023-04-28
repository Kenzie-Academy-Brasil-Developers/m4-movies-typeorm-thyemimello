import { Repository } from "typeorm";
import { Movie } from "../entities";
import { AppDataSource } from "../data-source";

const createMovie = async (data: Movie): Promise<Movie> => {
    const moviesRepository: Repository<Movie> =
      AppDataSource.getRepository(Movie);
  
    const user: Movie = moviesRepository.create(data);
  
    const savedMovie: Movie = await moviesRepository.save(user);
  
    return savedMovie;
  };

  export default createMovie