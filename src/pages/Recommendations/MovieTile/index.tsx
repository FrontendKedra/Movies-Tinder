import { Button } from "../../../components/ui/Button";
import { FaCheck, FaTimes } from "react-icons/fa";
import noImage from "../../../assets/noImage.jpg";

type MovieTileProps = {
  movie: {
    id: string;
    title?: string;
    imageURL?: string;
    summary?: string;
    rating?: number;
  };
  onApprove: () => void;
  onReject: () => void;
};

export const MovieTile = ({ movie, onApprove, onReject }: MovieTileProps) => {
  return (
    <div className="grid justify-center my-2 sm:my-4 items-center">
      <div className="p-4 max-w-[300px] sm:max-w-[420px] bg-white">
        <img
          src={movie.imageURL ? movie.imageURL : noImage}
          alt="Movie poster"
        />
        <section className="mt-3 space-y-2 sm:space-y-3">
          <h2 className="font-bold text-xl sm:text-2xl">
            {movie.title} {movie.rating ? `${movie.rating}/10` : ""}
          </h2>
          {movie.summary && (
            <article className="text-sm sm:text-base">{movie.summary}</article>
          )}
          <div className="flex justify-between">
            <Button
              onClick={onApprove}
              label={
                <p className="flex items-center text-sm sm:text-base gap-1">
                  <FaCheck className="w-4 h-4 sm:w-[18px] sm:h-[18px] mt-[2px]" />{" "}
                  Accept
                </p>
              }
              className="text-lg sm:text-xl text-green-700 hover:text-green-600 active:text-green-500 font-medium"
            />
            <Button
              onClick={onReject}
              label={
                <p className="flex items-center text-sm sm:text-base gap-1">
                  <FaTimes className="w-4 h-4 sm:w-[18px] sm:h-[18px] mt-[2px]" />{" "}
                  Reject
                </p>
              }
              className="text-lg sm:text-xl text-red-600 hover:text-red-500 active:text-red-400 font-medium"
            />
          </div>
        </section>
      </div>
    </div>
  );
};
