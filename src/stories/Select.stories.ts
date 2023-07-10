import { Meta, StoryObj } from "@storybook/react";
import { Select } from "../components/Select";

const meta: Meta<typeof Select> = {
  title: "UI/Select",
  component: Select,
  argTypes: {
    focus: {
      control: "select",
      options: ["primary", "secondary", "tertiary", "quaternary"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Select>;

export const FocusPrimary: Story = {
  args: {
    focus: "primary",
  },
};

export const FocusSecondary: Story = {
  args: {
    focus: "secondary",
  },
};

export const FocusTertiary: Story = {
  args: {
    focus: "tertiary",
  },
};

export const FocusQuaternary: Story = {
  args: {
    focus: "quaternary",
  },
};
