import { cva, VariantProps } from "class-variance-authority";
import { FC } from "react";

const spinnerStyles = cva(
  "animate-spin inline-block border-[3px] border-current border-t-transparent rounded-full",
  {
    variants: {
      color: {
        black: "text-black",
        blue: "text-blue-600",
        red: "text-red-600",
        yellow: "text-yellow-600",
        orange: "text-orange-600",
        indigo: "text-indigo-600",
        pink: "text-indigo-600",
      },
      size: {
        small: "w-4 h-4",
        medium: "w-6 h-6",
        large: "w-8 h-8",
        "extra-large": "w-9 h-9",
      },
    },
  }
);

interface Props extends VariantProps<typeof spinnerStyles> {
  color: "black" | "blue" | "red" | "yellow" | "orange" | "indigo" | "pink";
  size: "small" | "medium" | "large" | "extra-large";
  className?: string;
}

export const Spinner: FC<Props> = ({ color, size, className }) => {
  return (
    <div
      className={`${spinnerStyles({ color, size })} ${className || ""}`}
      role="status"
      aria-label="loading"
    >
      <span className="sr-only">Loading...</span>
    </div>
  );
};
