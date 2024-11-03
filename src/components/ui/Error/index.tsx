import danger from "../../../assets/danger.svg";

export const Error = () => (
  <div className="grid min-h-screen items-center justify-center">
    <main className="grid justify-items-center gap-3 md:gap-4 xl:gap-6">
      <img
        src={danger}
        alt="Error icon"
        className="h-24 w-24 md:h-32 md:w-32"
      />
      <h1 className="text-2xl font-medium md:text-2xl lg:text-3xl xl:text-4xl">
        An Error has occured
      </h1>
      <a
        href="/suggestions"
        className="rounded-3xl bg-blue-700 px-4 py-3 text-base font-bold text-white duration-300 hover:scale-105 hover:bg-blue-800 active:scale-110 active:bg-blue-900 md:px-5 md:py-4 md:text-lg lg:px-6 lg:py-[18px] lg:text-xl xl:px-7 xl:py-5"
      >
        Back to home page
      </a>
    </main>
  </div>
);
