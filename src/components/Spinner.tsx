import { cva, VariantProps } from "class-variance-authority";
import { FC } from "react";

const spinnerStyles = cva(
  "animate-spin inline-block border-[3px] border-current border-t-transparent rounded-full",
  {
    variants: {
      intent: {
        primary: "text-black",
        secondary: "text-blue-500",
        tertiary: "text-orange-500",
        quaternary: "text-indigo-500",
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
  intent: "primary" | "secondary" | "tertiary" | "quaternary";
  size: "small" | "medium" | "large" | "extra-large";
  className?: string;
}

export const Spinner: FC<Props> = ({ intent, size, className }) => {
  return (
    <div
      className={`${spinnerStyles({ intent, size })} ${className || ""}`}
      role="status"
      aria-label="loading"
    >
      <span className="sr-only">Loading...</span>
    </div>
  );
};
