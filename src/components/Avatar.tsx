import * as AvatarRUI from "@radix-ui/react-avatar";
import { cva, VariantProps } from "class-variance-authority";
import { FC } from "react";

const avatarRootStyles = cva(
  "inline-flex items-center justify-center align-middle overflow-hidden select-none w-12 h-12 rounded-full border",
  {
    variants: {
      intent: {
        primary: "border-black",
        secondary: "border-blue-500",
        tertiary: "border-orange-500",
        quaternary: "border-indigo-500",
      },
    },
  }
);

const avatarFallbackStyles = cva(
  "flex items-center justify-center w-full h-full bg-gray-100 leading-none font-medium",
  {
    variants: {
      intent: {
        primary: "text-black",
        secondary: "text-blue-500",
        tertiary: "text-orange-500",
        quaternary: "text-indigo-500",
      },
    },
  }
);

interface Props
  extends VariantProps<typeof avatarFallbackStyles | typeof avatarRootStyles> {
  intent: "primary" | "secondary" | "tertiary" | "quaternary";
  label?: string;
  className?: string;
}

export const Avatar: FC<Props> = ({ intent, label, className, ...props }) => {
  return (
    <AvatarRUI.Root
      className={`${avatarRootStyles({ intent })} ${className || ""}`}
      {...props}
    >
      <AvatarRUI.Fallback className={`${avatarFallbackStyles({ intent })}`}>
        {label}
      </AvatarRUI.Fallback>
    </AvatarRUI.Root>
  );
};
