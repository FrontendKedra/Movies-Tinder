import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <section className="grid justify-items-center gap-4 px-6">
        <p className="text-xl sm:text-3xl font-medium text-center">
          There are currently no more movies in the database <br /> Please check
          back later
        </p>
        <Link
          to="/"
          className="text-white sm:text-lg font-medium hover:opacity-90 active:opacity-85 bg-blue-800 rounded-xl px-3 py-2 sm:px-4 sm:py-3 w-fit"
        >
          Back to recommendations
        </Link>
      </section>
    </div>
  );
};
