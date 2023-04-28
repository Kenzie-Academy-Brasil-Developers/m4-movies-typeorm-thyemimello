import { Repository } from "typeorm";
import { Movie } from "../entities";
import { IConfigPage, IMoviesData } from "../interfaces/interfaceMovies";
import { AppDataSource } from "../data-source";

const listMoviesService = async (data: any) => {
    let page: number = Number(data.page) || 1;
    let perPage: number = Number(data.perPage) || 5;
  
    if (page <= 0) page = 1;
  
    if (perPage <= 0) perPage = 5;
  
    if (perPage >= 6) perPage = 5;
  
    const nextData = { ...data, page: page + 1 };
    const sort: string = data.sort || "id";
    const order: string = data.order || "asc";
  
    const config: IConfigPage = {
      take: perPage,
      skip: perPage * (page - 1),
      order: { [sort]: order },
    };
  
    if (!data.sort) {
      delete config.order;
    }
  
    const moviesRepository: Repository<Movie> =
      AppDataSource.getRepository(Movie);
  
    const movie: Movie[] = await moviesRepository.find(config);
  
    const movies: IMoviesData = {
      prevPage:
        page - 1 > 0
          ? `http://localhost:3000/movies?page=${page - 1}&perPage=${perPage}`
          : null,
      nextPage:
        (await moviePageService(nextData)).length > 0
          ? `http://localhost:3000/movies?page=${page + 1}&perPage=${perPage}`
          : null,
      count: (await moviesRepository.find()).length,
      data: movie,
    };
  
    return movies;
  };
  

  const moviePageService = async (data: any) => {
    const page: number = Number(data.page) || 1;
    const perPage: number = Number(data.perPage) || 5;
  
    const sort: string = data.sort || "id";
  
    const order: string = data.order || "asc";
    const moviesRepository: Repository<Movie> =
      AppDataSource.getRepository(Movie);
  
    const movies: Movie[] = await moviesRepository.find({
      take: perPage,
      skip: perPage * (page - 1),
      order: { [sort]: order },
    });
  
    return movies;
  };

  export { listMoviesService, moviePageService}