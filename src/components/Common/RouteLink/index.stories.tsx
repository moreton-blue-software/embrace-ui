import type { Meta, StoryObj } from "@storybook/react";
import { StaticRouter } from "react-router-dom";
import RouteLink from ".";

import Typography from "@mui/material/Typography";

const meta = {
  title: "Components/Common/RouteLink",
  component: RouteLink,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <StaticRouter location="/" context={{}}>
        <Story />
      </StaticRouter>
    ),
  ],
} satisfies Meta<typeof RouteLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    to: "/",
    children: <Typography variant="h6">I'm a Link</Typography>,
    onClick: () => alert("Link clicked"),
  },
};
