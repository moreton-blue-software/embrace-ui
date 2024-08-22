import { Meta, StoryObj } from "@storybook/react";

import Spinner from ".";

export default {
  title: "Components/Utilities/Spinner",
  parameters: { layout: "centered" },
  component: Spinner,
  tags: ["autodocs"],
} satisfies Meta<typeof Spinner>;

type Story = StoryObj<typeof Spinner>;

export const Default: Story = {};
