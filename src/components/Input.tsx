import { cva, VariantProps } from "class-variance-authority";
import { FC } from "react";

const inputStyles = cva(
  "mt-6 pl-4 w-64 h-10 font-3xl border border-gray-200 placeholder-gray-500 focus:border-2  focus:ring-0 rounded",
  {
    variants: {
      intent: {
        "primary": "bg-white focus:border-black",
        "secondary": "bg-white focus:border-blue-500",
        "tertiary": "bg-white focus:border-orange-500",
        "quaternary": "bg-white focus:border-indigo-500",
        "quinary": "bg-gray-200 focus:border-black",
      },
      fullWidth: {
        true: "w-full",
      },
      hasError: {
        true: "border-2 border-red-500 focus:border-2 focus:border-red-500 focus:outline-none focus:ring-0",
      },
    },
  }
);

interface Props extends VariantProps<typeof inputStyles> {
  intent: "primary" | "secondary" | "tertiary" | "quaternary" | "quinary";
  type: "text" | "email" | "password" | "number";
  placeholder: string;
  hasError?: boolean;
  fullWidth?: boolean;
  errorMessage?: string;
  helperText?: string;
  className?: string;
}

export const Input: FC<Props> = ({
  intent,
  type,
  placeholder,
  fullWidth,
  hasError,
  errorMessage,
  helperText,
  className,
  ...props
}) => {
  return (
    <>
      <input
        className={`${inputStyles({ intent, fullWidth, hasError })} ${
          className || ""
        }`}
        type={type}
        placeholder={placeholder}
        {...props}
      />

      {helperText && (
        <p className="text-sm text-gray-500 mt-2 pl-2">{helperText}</p>
      )}

      {errorMessage && (
        <p className="text-sm text-red-500 mt-2 pl-2">{errorMessage}</p>
      )}
    </>
  );
};
