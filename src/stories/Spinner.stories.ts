import { Meta, StoryObj } from "@storybook/react";
import { Spinner } from "../components/Spinner";

const meta = {
  title: "UI/Spinner",
  component: Spinner,
  args: {
    color: "indigo",
  },
  argTypes: {
    color: {
      control: "select",
      options: ["black", "blue", "red", "yellow", "orange", "indigo", "pink"],
    },
    size: {
      control: "select",
      options: ["small", "medium", "large", "extra-large"],
    },
  },
} satisfies Meta<typeof Spinner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Small: Story = {
  args: {
    size: "small",
  },
};

export const Medium: Story = {
  args: {
    size: "medium",
  },
};

export const Large: Story = {
  args: {
    size: "large",
  },
};

export const ExtraLarge: Story = {
  args: {
    size: "extra-large",
  },
};
