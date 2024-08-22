import { Meta, StoryObj } from "@storybook/react";

import IllustrationComponent from ".";
import { TIllustrations } from "./types";

const BASE_ARGS: TIllustrations = { name: "Achievement" };

export default {
  title: "Components/Utilities/Illustration",
  parameters: { layout: "centered" },
  component: IllustrationComponent,
  tags: ["autodocs"],
  args: BASE_ARGS,
} satisfies Meta<typeof IllustrationComponent>;

type Story = StoryObj<typeof IllustrationComponent>;

export const Illustration: Story = {};

export const CustomSize: Story = { args: { size: 512 } };
