import { Meta, StoryObj } from "@storybook/react";

import { ReportDataGrid } from "./ReportDataGrid";

import Box from "@mui/material/Box";

export default {
  title: "Components/Tables/ReportDataGrid",
  component: ReportDataGrid,
  tags: ["autodocs"],
  args: {
    columns: [
      { field: "name", headerName: "Name", flex: 1 },
      { field: "age", headerName: "Age", flex: 1 },
      { field: "birthday", headerName: "Birthday", flex: 1 },
      { field: "occupation", headerName: "Occupation", flex: 1 },
    ],
    rows: [
      {
        id: 1,
        name: "Nina Williams",
        age: "44",
        birthday: "??",
        occupation: "Assassin",
      },
      {
        id: 2,
        name: "King",
        age: "31",
        birthday: "May 26",
        occupation: "Pro Wrestler",
      },
      {
        id: 3,
        name: "Paul Phoenix",
        age: "49",
        birthday: "April 3",
        occupation: "Freeloader",
      },
      {
        id: 4,
        name: "Emilie de Rochefort",
        age: "49",
        birthday: "November 11",
        occupation: "Daughter of Wealthy Oil Magnate",
      },
    ],
  },
} satisfies Meta<typeof ReportDataGrid>;

type Story = StoryObj<typeof ReportDataGrid>;

export const Default: Story = {
  render: (args) => (
    <Box width={1}>
      <ReportDataGrid {...args} />
    </Box>
  ),
};

export const ExportButton: Story = {
  args: {
    ...Default.args,
    exportOptions: { showExport: true },
  },
  render: (args) => (
    <Box width={1}>
      <ReportDataGrid {...args} />
    </Box>
  ),
};

export const ExportFilename: Story = {
  args: {
    ...ExportButton.args,
    exportOptions: {
      showExport: true,
      csvOptions: { fileName: "tis-custom-export-filename" },
    },
  },
  render: (args) => (
    <Box width={1}>
      <ReportDataGrid {...args} />
    </Box>
  ),
};
