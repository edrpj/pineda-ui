import { Meta, StoryObj } from "@storybook/react";
import { Button } from "../components/Button";

const meta: Meta<typeof Button> = {
  title: "UI/Button",
  component: Button,
  args: {
    label: "Submit",
  },
  argTypes: {
    intent: {
      control: "select",
      options: [
        "primary",
        "outline-primary",
        "secondary",
        "outline-secondary",
        "tertiary",
        "outline-tertiary",
        "quaternary",
        "outline-quaternary",
      ],
    },
  },
} 

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    intent: "primary",
    className: "rounded-full",
  },
};

export const OutlinePrimary: Story = {
  args: {
    intent: "outline-primary",
  },
};

export const Secondary: Story = {
  args: {
    intent: "secondary",
  },
};

export const OutlineSecondary: Story = {
  args: {
    intent: "outline-secondary",
  },
};

export const Tertiary: Story = {
  args: {
    intent: "tertiary",
  },
};

export const OutlineTertiary: Story = {
  args: {
    intent: "outline-tertiary",
  },
};

export const Quaternay: Story = {
  args: {
    intent: "quaternary",
  },
};

export const OutlineQuaternary: Story = {
  args: {
    intent: "outline-quaternary",
  },
};
