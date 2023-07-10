import { cva, VariantProps } from "class-variance-authority";
import { FC } from "react";

const buttonStyles = cva("w-48 h-12 font-medium", {
  variants: {
    intent: {
      primary: "bg-black text-white hover:bg-brown-brand",
      "outline-primary":
        "bg-white text-black border border-gray-300 hover:border-black",
      secondary: "bg-blue-500 text-white hover:bg-blue-500",
      "outline-secondary":
        "bg-white text-blue-600 border border-blue-600 hover:border-blue-800 hover:text-blue-800",
      tertiary: "bg-orange-500 text-white hover:bg-orange-400",
      "outline-tertiary":
        "bg-white text-orange-500 border border-orange-500 hover:border-orange-700 hover:text-orange-700",
      quaternary: "bg-indigo-500 text-white hover:bg-indigo-400",
      "outline-quaternary":
        "bg-white text-indigo-500 border border-indigo-500 hover:border-indigo-700 hover:text-indigo-700",
    },
    fullWidth: {
      true: "w-full",
    },
    roundedFull: {
      true: "rounded-full",
      false: "rounded-md",
    },
  },
  defaultVariants: {
    intent: "primary",
    fullWidth: false,
    roundedFull: false,
  },
});

interface Props extends VariantProps<typeof buttonStyles> {
  label: string;
  intent?: "primary" | "outline-primary" | "secondary" | "outline-secondary" | "tertiary" | "outline-tertiary" | "quaternary" | "outline-quaternary";
  fullWidth?: boolean;
  roundedFull?: boolean;
  className?: string;
}

export const Button: FC<Props> = ({
  label,
  intent,
  fullWidth,
  roundedFull,
  className,
  ...props
}) => {
  return (
    <button
      className={`${buttonStyles({ intent, fullWidth, roundedFull })} ${
        className || ""
      }`}
      {...props}
    >
      {label}
    </button>
  );
};
