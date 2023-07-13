import { Meta, StoryObj } from "@storybook/react";
import { Avatar } from "../components/Avatar";

const meta: Meta<typeof Avatar> = {
  title: "UI/Avatar",
  component: Avatar,
  argTypes: {
    intent: {
      control: "select",
      options: ["primary", "secondary", "tertiary", "quaternary"],
    }
  }
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Initials: Story = {
  args: {
    label: "EP",
    intent: "tertiary"
  }
};
