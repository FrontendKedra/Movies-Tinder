import { useState } from "react";
import { useQuery, useMutation } from "react-query";
import axios from "axios";
import { getMoviesSugestion } from "../../../lib/getMovies";

export const useMovieSuggestions = () => {
  const [currentMovieIndex, setCurrentMovieIndex] = useState(0);

  const { isLoading, data, isError } = useQuery(
    "movieDetails",
    getMoviesSugestion
  );

  const showNextMovie = () => {
    setCurrentMovieIndex((prevIndex) => prevIndex + 1);
  };

  const approveMovieMutation = useMutation<void, unknown, string>(
    (movieId: string) => axios.put(`/recommendations/${movieId}/accept`),
    {
      onSuccess: () => {
        console.log("Movie suggestion approved");
        showNextMovie();
      },
      onError: (error) => {
        console.error("Error approving the movie:", error);
      },
    }
  );

  const rejectMovieMutation = useMutation<void, unknown, string>(
    (movieId: string) => axios.put(`/recommendations/${movieId}/reject`),
    {
      onSuccess: () => {
        console.log("Movie suggestion rejected");
        showNextMovie();
      },
      onError: (error) => {
        console.error("Error rejecting the movie:", error);
      },
    }
  );

  const movie = data?.[currentMovieIndex];

  return {
    movie,
    isLoading,
    isError,
    approveMovie: (id: string) => approveMovieMutation.mutate(id), // renamed to avoid conflict
    rejectMovie: (id: string) => rejectMovieMutation.mutate(id), // renamed to avoid conflict
  };
};
