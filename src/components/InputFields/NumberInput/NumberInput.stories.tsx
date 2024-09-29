import type { Meta, StoryObj } from "@storybook/react";

import NumberInput from ".";
import { Box } from "@mui/material";

export default {
  title: "Components/Input Fields/NumberInput",
  component: NumberInput,
  tags: ["autodocs"],
  argTypes: {
    thousandsGroupStyle: {
      control: "select",
      options: ["thousand", "lakh", "wan"],
    },
  },
  parameters: { layout: "centered" },
  decorators: [
    (Story) => (
      <Box sx={{ bgcolor: "#F5F5F5", borderRadius: 4, px: 8, py: 4 }}>
        <Story />
      </Box>
    ),
  ],
} satisfies Meta<typeof NumberInput>;

type Story = StoryObj<typeof NumberInput>;

export const Default: Story = {
  render: (args) => {
    return (
      <NumberInput
        sx={{ width: 400 }}
        label="Price"
        placeholder="Enter price"
        prefix="$ "
        allowNegative={false}
        decimalScale={2}
        thousandsGroupStyle={args.thousandsGroupStyle}
      />
    );
  },
};
