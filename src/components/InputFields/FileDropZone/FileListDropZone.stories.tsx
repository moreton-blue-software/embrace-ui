import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import FileListDropZone, { TFileListDropZone } from "./FileListDropZone";
import { SnackbarProvider } from "notistack";
import { Box, Typography } from "@mui/material";

const baseArgs: TFileListDropZone = {};

export default {
  title: "Components/Input Fields/FileListDropZone",
  component: FileListDropZone,
  args: baseArgs,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  decorators: [
    (Story) => (
      <SnackbarProvider>
        <Story />
      </SnackbarProvider>
    ),
  ],
} satisfies Meta<typeof FileListDropZone>;

type Story = StoryObj<typeof FileListDropZone>;

export const Default: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [files, setFiles] = React.useState<Record<string, File>>({});

    return (
      <Box sx={{ bgcolor: "#F5F5F5", borderRadius: 4, minWidth: 800, p: 2 }}>
        <Box>
          <Typography variant="h6">Files</Typography>
          <pre>{JSON.stringify(files, null, 2)}</pre>
        </Box>
        <Box>
          <Typography variant="h6">Drop Zone</Typography>
          <FileListDropZone
            multiple
            onFilesChange={(files) => setFiles(files)}
          />
        </Box>
      </Box>
    );
  },
};
