import { ReactElement } from "react";

type ButtonProps = {
  onClick: () => void;
  label: ReactElement | string;
  className?: string;
};

export const Button = ({ onClick, label, className = "" }: ButtonProps) => {
  return (
    <button onClick={onClick} className={className}>
      {label}
    </button>
  );
};
