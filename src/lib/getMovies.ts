import { MovieSugestion } from "../types/moviesSugestion";
import { wait } from "./wait";

export const getMoviesSugestion = async () => {
  await wait(500);

  const response = await fetch("movies.json");

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  const data = (await response.json()) as MovieSugestion[];

  return data;
};
