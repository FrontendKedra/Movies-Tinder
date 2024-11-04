import { MovieSuggestion } from "../types/movieSuggestion";
import { wait } from "./wait";

export const getMoviesSuggestion = async () => {
  await wait(500);

  const response = await fetch("movies.json");

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  const data = (await response.json()) as MovieSuggestion[];

  return data;
};
