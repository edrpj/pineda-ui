import { cva, VariantProps } from "class-variance-authority";
import { FC } from "react";

const Children: FC = (): JSX.Element => {
  return (
    <>
      <option selected>Select a fruit</option>
      <option value="orange">Orange</option>
      <option value="apple">Apple</option>
      <option value="mango">Mango</option>
    </>
  );
};

const selectStyles = cva(
  "py-3 px-4 pr-8 w-72 block border border-gray-200 bg-white ring-red-500 rounded-md text-sm focus:border focus:outline-none",
  {
    variants: {
      focus: {
        primary: "focus:border-black focus:ring-black",
        secondary: "focus:border-blue-500 focus:ring-blue-500",
        tertiary: "focus:border-orange-500 focus:ring-orange-500",
        quaternary: "focus:border-indigo-500 focus:ring-indigo-500",
      },
      fullWidth: {
        true: "w-full",
      },
      hasError: {
        true: "border-2 border-red-500 focus:border-red-500 focus:ring-red-500",
      },
    },
  }
);

interface Props extends VariantProps<typeof selectStyles> {
  children: JSX.Element | JSX.Element[];
  focus: "primary" | "secondary" | "tertiary" | "quaternary";
  fullWidth?: boolean;
  hasError?: boolean;
  errorMessage?: string;
  className?: string;
}

export const Select: FC<Props> = ({
  children = Children({}),
  focus,
  fullWidth,
  hasError,
  errorMessage,
  className,
  ...props
}) => {
  return (
    <>
      <select
        className={`${selectStyles({ focus, fullWidth, hasError })} ${
          className || ""
        }`}
        {...props}
      >
        {children}
      </select>

      {errorMessage && (
        <p className="text-sm text-red-600 mt-2 pl-2">{errorMessage}</p>
      )}
    </>
  );
};
