import { Box, TextField } from "@mui/material";
import type { Meta, StoryObj } from "@storybook/react";

import FilterBox from "../FilterBox";

export default {
  title: "Components/Containers/FilterBox",
  component: FilterBox,
  tags: ["autodocs"],
  args: { sx: { width: 1 } },
  parameters: { layout: "centered" },
  decorators: [
    (Story) => (
      <Box
        sx={{ bgcolor: "#F5F5F5", borderRadius: 4, px: 8, py: 4, width: 400 }}
      >
        <Story />
      </Box>
    ),
  ],
} satisfies Meta<typeof FilterBox>;

type Story = StoryObj<typeof FilterBox>;

export const WithTextfield: Story = {
  render: (args) => (
    <FilterBox {...args}>
      <TextField label="Search" fullWidth />
    </FilterBox>
  ),
};
