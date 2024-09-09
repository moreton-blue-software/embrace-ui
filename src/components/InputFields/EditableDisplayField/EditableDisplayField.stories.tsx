import { useForm } from "react-hook-form";

import type { Meta, StoryObj } from "@storybook/react";

import EditableDisplayField from ".";
import { Box, TextField } from "@mui/material";

const meta: Meta<typeof EditableDisplayField> = {
  title: "Components/Input Fields/Editable Display Field",
  tags: ["autodocs"],
  component: EditableDisplayField,
  parameters: { layout: "centered" },
  decorators: [
    (Story) => (
      <Box sx={{ bgcolor: "#F5F5F5", borderRadius: 4, px: 8, py: 4 }}>
        <Story />
      </Box>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof EditableDisplayField>;

export const EditMode: Story = {
  args: {
    title: "Sample Title",
    name: "sampleName",
    isEdit: true,
  },
  render: (args) => {
    const form = useForm();

    return (
      <EditableDisplayField
        form={form}
        title={args.title}
        name={args.name}
        isEdit={args.isEdit}
      >
        <TextField sx={{ maxWidth: "95%" }} placeholder="Search here..." />
      </EditableDisplayField>
    );
  },
};

export const DisplayModeWithDefault: Story = {
  args: {
    title: "Sample Title",
    name: "sampleName",
    isEdit: false,
  },
  render: (args) => {
    const form = useForm({
      defaultValues: { sampleName: "Aljone Pogi" },
    });

    return (
      <EditableDisplayField
        form={form}
        title={args.title}
        name={args.name}
        isEdit={args.isEdit}
      >
        <TextField sx={{ maxWidth: "95%" }} placeholder="Search here..." />
      </EditableDisplayField>
    );
  },
};

export const DisplayModeWithDefaultDate: Story = {
  args: {
    title: "Date",
    name: "dateToday",
    isEdit: false,
  },
  render: (args) => {
    const form = useForm({
      defaultValues: { dateToday: new Date() },
    });

    return (
      <EditableDisplayField
        form={form}
        title={args.title}
        name={args.name}
        isEdit={args.isEdit}
      >
        <TextField sx={{ maxWidth: "95%" }} placeholder="Search here..." />
      </EditableDisplayField>
    );
  },
};

export const EditModeWithDefault: Story = {
  args: {
    title: "Sample Title",
    name: "sampleName",
    isEdit: true,
  },
  render: (args) => {
    const form = useForm({
      defaultValues: { sampleName: "Aljone Pogi" },
    });

    return (
      <EditableDisplayField
        form={form}
        title={args.title}
        name={args.name}
        isEdit={args.isEdit}
      >
        <TextField sx={{ maxWidth: "95%" }} placeholder="Search here..." />
      </EditableDisplayField>
    );
  },
};

export const FullWidthEditField: Story = {
  args: {
    title: "Full Width Text Field",
    name: "sampleField",
    isEdit: true,
  },
  render: (args) => {
    const form = useForm();

    return (
      <EditableDisplayField
        form={form}
        title={args.title}
        name={args.name}
        isEdit={args.isEdit}
      >
        <TextField fullWidth placeholder="Search here..." />
      </EditableDisplayField>
    );
  },
};
