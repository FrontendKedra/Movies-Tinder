import { useState } from "react";
import { useQuery, useMutation } from "react-query";
import { getMoviesSuggestion } from "../../../lib/getMovies";

export const useMovieSuggestions = () => {
  const [currentMovieIndex, setCurrentMovieIndex] = useState(0);

  const { isLoading, data, isError } = useQuery(
    "movieDetails",
    getMoviesSuggestion
  );

  const showNextMovie = () => {
    setCurrentMovieIndex((prevIndex) => prevIndex + 1);
  };

  const approveMovieMutation = useMutation<void, unknown, string>(
    async (movieId: string) => {
      const response = await fetch(`/recommendations/${movieId}/accept`, {
        method: "PUT",
      });
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
    },
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
    async (movieId: string) => {
      const response = await fetch(`/recommendations/${movieId}/reject`, {
        method: "PUT",
      });
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
    },
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
