import { cva, VariantProps } from "class-variance-authority";
import { FC } from "react";

const inputStyles = cva(
  "mt-6 pl-4 w-64 h-10 font-3xl bg-gray-200 placeholder-gray-500 focus:border-2 focus:border-black focus:ring-0 rounded",
  {
    variants: {
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
  type: "text" | "email" | "password" | "number";
  placeholder: string;
  hasError?: boolean;
  fullWidth?: boolean;
  errorMessage?: string;
  helperText?: string;
  className?: string;
}

export const Input: FC<Props> = ({
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
        className={`${inputStyles({ fullWidth, hasError })} ${className || ""}`}
        type={type}
        placeholder={placeholder}
        {...props}
      />

      {helperText && (
        <p className="text-sm text-medium-gray-brand pl-2">{helperText}</p>
      )}

      {errorMessage && (
        <p className="text-sm text-red-500 pl-2">{errorMessage}</p>
      )}
    </>
  );
};
