import type { Movie } from "../types/movie.types";

const API_URL = "https://devsapihub.com/api-movies";

export const getMovies = async (): Promise<Movie[]> => {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error("No se pudieron obtener las películas");
  }

  return response.json();
};

export const getMovieById = async (id: number): Promise<Movie> => {
  const response = await fetch(`${API_URL}/${id}`);

  if (!response.ok) {
    throw new Error("No se pudo encontrar la película");
  }

  return response.json();
};