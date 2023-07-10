import { Meta, StoryObj } from "@storybook/react";
import { Input } from "../components/Input";

const meta = {
  title: "UI/Input",
  component: Input,
  args: {
    placeholder: "Type here...",
  },
  argTypes: {
    type: {
      control: "select",
      options: ["text", "email", "password", "number"],
    },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Text: Story = {
  args: {
    type: "text",
  },
};
