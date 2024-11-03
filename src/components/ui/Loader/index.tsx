import spinner from "../../../assets/spinner.svg";

type LoaderProps = {
  title: string;
};

export const Loader = ({ title }: LoaderProps) => (
  <div className="grid min-h-screen items-center justify-center">
    <main className="grid justify-items-center gap-4 md:gap-8">
      <h1 className="text-4xl font-semibold sm:text-5xl">{title}</h1>
      <img
        src={spinner}
        width={128}
        height={128}
        alt="Icon spinner"
        className="animate-spin h-24 w-24 md:h-28 md:w-28"
      />
    </main>
  </div>
);
