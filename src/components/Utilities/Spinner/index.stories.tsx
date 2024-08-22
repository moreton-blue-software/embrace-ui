import { Meta, StoryObj } from "@storybook/react";

import Spinner from ".";

export default {
  title: "Components/Utilities/Spinner",
  component: Spinner,
  tags: ["autodocs"],
} satisfies Meta<typeof Spinner>;

type Story = StoryObj<typeof Spinner>;

export const Default: Story = {};
