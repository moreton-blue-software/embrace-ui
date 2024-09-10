import { Meta, StoryObj } from "@storybook/react";
import ImgAvatar from "./ImgAvatar";

import { Box } from "@mui/material";

export default {
  title: "Components/Common/ImgAvatar",
  component: ImgAvatar,
  tags: ["autodocs"],
  argTypes: {
    sx: { control: "object" },
    status: {
      control: "select",
      options: ["active", "inactive", "default"],
      defaultValue: "default",
    },
    size: {
      control: "select",
      options: ["tiny", "mini", "small", "medium", "large", "xlarge"],
      defaultValue: "small",
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
} satisfies Meta<typeof ImgAvatar>;

type Story = StoryObj<typeof ImgAvatar>;

export const Default: Story = {};
