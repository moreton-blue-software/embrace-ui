import { useForm } from "react-hook-form";

import type { Meta, StoryObj } from "@storybook/react";
import { Title, Story, Source } from "@storybook/blocks";

import EditableDisplayField from ".";
import { Box, TextField } from "@mui/material";

import * as CODE from "./EditableDisplayField.source";

const meta: Meta<typeof EditableDisplayField> = {
  title: "Components/Input Fields/Editable Display Field",
  tags: ["autodocs"],
  component: EditableDisplayField,
  decorators: [
    (Story) => (
      <Box sx={{ bgcolor: "#F5F5F5", borderRadius: 4, px: 8, py: 4 }}>
        <Story />
      </Box>
    ),
  ],
  parameters: {
    layout: "centered",
    docs: {
      page: () => (
        <>
          <Title>Edit Mode</Title>
          <Story of={EditMode} />
          <Source of={EditMode} code={CODE.EDIT_MODE_SOURCE} />

          <Title>Display Mode with Default</Title>
          <Story of={DisplayModeWithDefault} />
          <Source
            of={DisplayModeWithDefault}
            code={CODE.DISPLAY_MODE_WITH_DEFAULT_SOURCE}
          />

          <Title>Display Mode with Default Date</Title>
          <Story of={DisplayModeWithDefaultDate} />
          <Source
            of={DisplayModeWithDefaultDate}
            code={CODE.DISPLAY_MODE_WITH_DEFAULT_DATE_SOURCE}
          />

          <Title>Edit Mode with Default</Title>
          <Story of={EditModeWithDefault} />
          <Source
            of={EditModeWithDefault}
            code={CODE.EDIT_MODE_WITH_DEFAULT_SOURCE}
          />

          <Title>Full Width Edit Field</Title>
          <Story of={FullWidthEditField} />
          <Source
            of={FullWidthEditField}
            code={CODE.FULL_WIDTH_EDIT_FIELD_SOURCE}
          />
        </>
      ),
    },
  },
};

export default meta;

type Story = StoryObj<typeof EditableDisplayField>;

export const EditMode: Story = {
  args: {
    title: "Sample Title",
    name: "sampleName",
    isEdit: true,
  },
  parameters: {
    docs: { source: { code: `this is the code` } },
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
