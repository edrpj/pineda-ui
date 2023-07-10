import { Meta, StoryObj } from "@storybook/react";
import { Input } from "../components/Input";

const meta: Meta<typeof Input> = {
  title: "UI/Input",
  component: Input,
  args: {
    placeholder: "Type here...",
    type: "text"
  },
  argTypes: {
    intent: {
      control: "select",
      options: ["primary", "secondary", "tertiary", "quaternary", "quinary"],
    },
    type: {
      control: "select",
      options: ["text", "email", "password", "number"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Primary: Story = {
  args: {
    intent: "primary"
  },
};

export const Secondary: Story = {
  args: {
    intent: "secondary"
  },
};

export const Tertiary: Story = {
  args: {
    intent: "tertiary"
  },
};

export const Quaternay: Story = {
  args: {
    intent: "quaternary"
  },
};

export const Quinary: Story = {
  args: {
    intent: "quinary"
  },
};
