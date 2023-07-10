import {Meta, StoryObj} from "@storybook/react";
import {Select} from "../components/Select";

const meta = {
  title: "UI/Select",
  component: Select
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof Select>;

export const FocusBlue: Story = {
  args: {
    focusColor: "blue",
  }
}

export const FocusOrange: Story = {
  args: {
    focusColor: "orange",
  }
}

export const FocusIndigo: Story = {
  args: {
    focusColor: "indigo",
  }
}
