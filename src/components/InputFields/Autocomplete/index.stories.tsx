import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import ChevronRight from "@mui/icons-material/ChevronRight";

import Autocomplete from ".";

export default {
  title: "Components/Input Fields/Autocomplete",
  tags: ["autodocs"],
  component: Autocomplete,
} satisfies Meta<typeof Autocomplete>;

type Story = StoryObj<typeof Autocomplete>;

export const Default: Story = {};

export const noStartIcon: Story = {
  args: { noStartIcon: true },
};

export const WithOptions = () => {
  const [selectedValue, setSelectedValue] = React.useState<
    string | null | undefined
  >();

  return (
    <Autocomplete
      label="Autocomplete Label"
      options={[
        { value: "x-code-id", label: "Option 1" },
        { value: "y-code-id", label: "Option 2" },
        { value: "z-code-id", label: "Option 3" },
      ]}
      value={selectedValue}
      onChange={(value) => setSelectedValue(value)}
      CustomIcon={ChevronRight}
    />
  );
};
