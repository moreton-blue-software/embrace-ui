import { Meta, StoryObj } from "@storybook/react";

import DataListTable from ".";
import Illustration from "../../Utilities/Illustration";
import { Box, Button, Typography } from "@mui/material";

import { multiRowData } from "./MockData";

const BASE_ARGS = {
  headers: [
    {
      name: "Col 1",
      colSpan: 4,
    },
    {
      name: "Col 2",
      colSpan: 4,
    },
    {
      name: "Col 3",
      colSpan: 4,
    },
  ],
  rows: [
    {
      cells: [
        {
          children: <Typography>Minatozaki Sana</Typography>,
          colSpan: 4,
        },
        {
          children: <Typography>Jeffrey the Unaliver</Typography>,
          colSpan: 4,
        },
        {
          children: <Typography>Slenderboy</Typography>,
          colSpan: 4,
        },
      ],
    },
  ],
};

export default {
  title: "Components/Tables/DataListTable",
  tags: ["autodocs"],
  component: DataListTable,
  args: BASE_ARGS,
} satisfies Meta<typeof DataListTable>;

type Story = StoryObj<typeof DataListTable>;

export const Default: Story = {};

export const Alignment: Story = {
  args: {
    headers: [
      {
        name: "Left",
        colSpan: 4,
      },
      {
        name: "Center",
        colSpan: 4,
        align: "center",
      },
      {
        name: "Right",
        colSpan: 4,
        align: "right",
      },
    ],
    rows: [
      {
        cells: [
          {
            children: <Typography>Sean Kelly</Typography>,
            colSpan: 4,
          },
          {
            children: <Typography>Jim Faller</Typography>,
            colSpan: 4,
            align: "center",
          },
          {
            children: <Typography>Quincy A.</Typography>,
            colSpan: 4,
            align: "right",
          },
        ],
      },
    ],
  },
};

export const Loading: Story = { args: { isLoading: true } };

export const EmptyRows: Story = { args: { rows: [] } };

export const CustomEmptyRow: Story = {
  args: {
    rows: [],
    noRowsComponent: (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          py: "40px",
        }}
      >
        <Illustration name="Achievement" size={256} />
        <Typography
          sx={{
            fontWeight: "normal",
            fontSize: "18px",
          }}
        >
          Nothing to see here but just this rocket trophy
        </Typography>
      </Box>
    ),
  },
};

export const CollapsibleContent: Story = {
  args: {
    rows: [
      {
        cells: [
          {
            children: <Typography>Sean Kelly</Typography>,
            colSpan: 4,
          },
          {
            children: <Typography>Jim Faller</Typography>,
            colSpan: 4,
          },
          {
            children: <Typography>Quincy A.</Typography>,
            colSpan: 4,
          },
        ],
        collapsibleContent: (
          <Box
            sx={{
              py: "24px",
              px: "16px",
              mt: "12px",
              backgroundColor: "gray",
            }}
          >
            <Button variant="contained">Shin Ryujin</Button>
          </Box>
        ),
      },
    ],
  },
};

export const Nested: Story = {
  args: {
    rows: [
      {
        id: "_1",
        cells: [
          {
            children: <Typography>Minatozaki Sana</Typography>,
            colSpan: 4,
          },
          {
            children: <Typography>Minatozaki Sana</Typography>,
            colSpan: 4,
          },
          {
            children: <Typography>Minatozaki Sana</Typography>,
            colSpan: 4,
          },
        ],
        isLast: false,
        level: 0,
      },
      {
        id: "_1_1",
        cells: [
          {
            children: <Typography>Minatozaki Sana</Typography>,
            colSpan: 4,
          },
          {
            children: <Typography>Minatozaki Sana</Typography>,
            colSpan: 4,
          },
          {
            children: <Typography>Minatozaki Sana</Typography>,
            colSpan: 4,
          },
        ],
        isLast: true,
        parentID: "_1",
        level: 1,
      },

      {
        id: "_1_1_1",
        cells: [
          {
            children: <Typography>Minatozaki Sana</Typography>,
            colSpan: 4,
          },
          {
            children: <Typography>Minatozaki Sana</Typography>,
            colSpan: 4,
          },
          {
            children: <Typography>Minatozaki Sana</Typography>,
            colSpan: 4,
          },
        ],
        isLast: false,
        parentID: "_1_1",
        level: 2,
        noChildren: true,
        parentIsLast: true,
      },

      {
        id: "_1_1_2",
        cells: [
          {
            children: <Typography>Minatozaki Sana</Typography>,
            colSpan: 4,
          },
          {
            children: <Typography>Minatozaki Sana</Typography>,
            colSpan: 4,
          },
          {
            children: <Typography>Minatozaki Sana</Typography>,
            colSpan: 4,
          },
        ],
        isLast: true,
        parentID: "_1_1",
        level: 2,
        noChildren: true,
        parentIsLast: true,
      },

      {
        id: "_2",
        cells: [
          {
            children: <Typography>Minatozaki Sana</Typography>,
            colSpan: 4,
          },
          {
            children: <Typography>Minatozaki Sana</Typography>,
            colSpan: 4,
          },
          {
            children: <Typography>Minatozaki Sana</Typography>,
            colSpan: 4,
          },
        ],
        isLast: true,
        level: 0,
        noChildren: true,
      },

      {
        id: "_3",
        cells: [
          {
            children: <Typography>Minatozaki Sana</Typography>,
            colSpan: 4,
          },
          {
            children: <Typography>Minatozaki Sana</Typography>,
            colSpan: 4,
          },
          {
            children: <Typography>Minatozaki Sana</Typography>,
            colSpan: 4,
          },
        ],
        isLast: false,
        level: 0,
      },

      {
        id: "_3_1",
        cells: [
          {
            children: <Typography>Minatozaki Sana</Typography>,
            colSpan: 4,
          },
          {
            children: <Typography>Minatozaki Sana</Typography>,
            colSpan: 4,
          },
          {
            children: <Typography>Minatozaki Sana</Typography>,
            colSpan: 4,
          },
        ],
        parentID: "_3",
        level: 1,
      },

      {
        id: "_3_1_1",
        cells: [
          {
            children: <Typography>Minatozaki Sana</Typography>,
            colSpan: 4,
          },
          {
            children: <Typography>Minatozaki Sana</Typography>,
            colSpan: 4,
          },
          {
            children: <Typography>Minatozaki Sana</Typography>,
            colSpan: 4,
          },
        ],
        isLast: false,
        parentID: "_3_1",
        level: 2,
        noChildren: true,
      },
      {
        id: "_3_1_2",
        cells: [
          {
            children: <Typography>Minatozaki Sana</Typography>,
            colSpan: 4,
          },
          {
            children: <Typography>Minatozaki Sana</Typography>,
            colSpan: 4,
          },
          {
            children: <Typography>Minatozaki Sana</Typography>,
            colSpan: 4,
          },
        ],
        isLast: true,
        parentID: "_3_1",
        level: 2,
        noChildren: true,
      },

      {
        id: "_3_2",
        cells: [
          {
            children: <Typography>Minatozaki Sana</Typography>,
            colSpan: 4,
          },
          {
            children: <Typography>Minatozaki Sana</Typography>,
            colSpan: 4,
          },
          {
            children: <Typography>Minatozaki Sana</Typography>,
            colSpan: 4,
          },
        ],
        parentID: "_3",
        level: 1,
      },
      {
        id: "_3_2_1",
        cells: [
          {
            children: <Typography>Minatozaki Sana</Typography>,
            colSpan: 4,
          },
          {
            children: <Typography>Minatozaki Sana</Typography>,
            colSpan: 4,
          },
          {
            children: <Typography>Minatozaki Sana</Typography>,
            colSpan: 4,
          },
        ],
        isLast: false,
        parentID: "_3_2",
        level: 2,
        noChildren: true,
      },

      {
        id: "_3_2_2",
        cells: [
          {
            children: <Typography>Minatozaki Sana</Typography>,
            colSpan: 4,
          },
          {
            children: <Typography>Minatozaki Sana</Typography>,
            colSpan: 4,
          },
          {
            children: <Typography>Minatozaki Sana</Typography>,
            colSpan: 4,
          },
        ],
        isLast: true,
        parentID: "_3_2",
        level: 2,
      },

      {
        id: "_3_2_2_1",
        cells: [
          {
            children: <Typography>Minatozaki Sana</Typography>,
            colSpan: 4,
          },
          {
            children: <Typography>Minatozaki Sana</Typography>,
            colSpan: 4,
          },
          {
            children: <Typography>Minatozaki Sana</Typography>,
            colSpan: 4,
          },
        ],
        isLast: true,
        parentID: "_3_2_2",
        level: 3,
      },

      {
        id: "_3_2_2_1_1",
        cells: [
          {
            children: <Typography>Minatozaki Sana</Typography>,
            colSpan: 4,
          },
          {
            children: <Typography>Minatozaki Sana</Typography>,
            colSpan: 4,
          },
          {
            children: <Typography>Minatozaki Sana</Typography>,
            colSpan: 4,
          },
        ],
        isLast: true,
        parentID: "_3_2_2_1",
        level: 4,
      },

      {
        id: "_3_2_2_1_1_1",
        cells: [
          {
            children: <Typography>Minatozaki Sana</Typography>,
            colSpan: 4,
          },
          {
            children: <Typography>Minatozaki Sana</Typography>,
            colSpan: 4,
          },
          {
            children: <Typography>Minatozaki Sana</Typography>,
            colSpan: 4,
          },
        ],
        parentID: "_3_2_2_1_1",
        level: 5,
        noChildren: true,
      },

      {
        id: "_3_2_2_1_1_2",
        cells: [
          {
            children: <Typography>Minatozaki Sana</Typography>,
            colSpan: 4,
          },
          {
            children: <Typography>Minatozaki Sana</Typography>,
            colSpan: 4,
          },
          {
            children: <Typography>Minatozaki Sana</Typography>,
            colSpan: 4,
          },
        ],
        isLast: true,
        parentID: "_3_2_2_1_1",
        level: 5,
      },

      {
        id: "_3_2_2_1_1_2_1",
        cells: [
          {
            children: <Typography>Minatozaki Sana</Typography>,
            colSpan: 4,
          },
          {
            children: <Typography>Minatozaki Sana</Typography>,
            colSpan: 4,
          },
          {
            children: <Typography>Minatozaki Sana</Typography>,
            colSpan: 4,
          },
        ],
        isLast: true,
        parentID: "_3_2_2_1_1_2",
        level: 6,
        noChildren: true,
      },

      {
        id: "3",
        cells: [
          {
            children: <Typography>Minatozaki Sana</Typography>,
            colSpan: 4,
          },
          {
            children: <Typography>Minatozaki Sana</Typography>,
            colSpan: 4,
          },
          {
            children: <Typography>Minatozaki Sana</Typography>,
            colSpan: 4,
          },
        ],
        parentID: "_3",
        level: 1,
        noChildren: true,
        isLast: true,
      },
    ],
  },
};

export const Paginated: Story = {
  args: {
    headers: [
      {
        name: "Name",
        colSpan: 4,
      },
      {
        name: "Job",
        colSpan: 4,
      },
      {
        name: "Number",
        colSpan: 4,
      },
    ],
    rows: multiRowData,
    rowsPerPage: 5,
  },
};
