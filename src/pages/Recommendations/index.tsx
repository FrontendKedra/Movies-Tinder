import { Loader } from "../../components/ui/Loader";
import { Error } from "../../components/ui/Error";
import { MovieTile } from "./MovieTile";
import { NotFound } from "./NotFound";
import { useSwipeable } from "react-swipeable";
import { useMovieSuggestions } from "./Hooks/useMovieSuggestions";

export const Recommendations = () => {
  const { movie, isLoading, isError, approveMovie, rejectMovie } =
    useMovieSuggestions();

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => {
      if (movie) {
        rejectMovie(movie.id);
      }
    },
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  if (isLoading) return <Loader title="Loading..." />;
  if (isError) return <Error />;

  return movie ? (
    <div {...swipeHandlers}>
      <MovieTile
        movie={movie}
        onApprove={() => approveMovie(movie.id)}
        onReject={() => rejectMovie(movie.id)}
      />
    </div>
  ) : (
    <NotFound />
  );
};
