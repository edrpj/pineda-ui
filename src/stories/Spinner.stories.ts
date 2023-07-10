import { Meta, StoryObj } from "@storybook/react";
import { Spinner } from "../components/Spinner";

const meta: Meta<typeof Spinner>= {
  title: "UI/Spinner",
  component: Spinner,
  args: {
    intent: "secondary",
  },
  argTypes: {
    intent: {
      control: "select",
      options: ["primary", "secondary", "tertiary", "quaternary"],
    },
    size: {
      control: "select",
      options: ["small", "medium", "large", "extra-large"],
    },
  },
} 

export default meta;
type Story = StoryObj<typeof Spinner>;

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
