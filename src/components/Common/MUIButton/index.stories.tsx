import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import MUIButton from ".";

const meta = {
  title: "Components/Common/MUIButton",
  component: MUIButton,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  args: { onClick: fn() },
} satisfies Meta<typeof MUIButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: "contained",
    color: "primary",
  },
};
