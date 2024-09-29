import React from "react";
import { merge } from "lodash";
import {
  DataGrid,
  DataGridProps,
  GridToolbarExportProps,
} from "@mui/x-data-grid";

import { GridToolbarExportOnly } from "./GridToolbarCustom";

export const ReportDataGrid = (
  props: DataGridProps & {
    exportOptions?: {
      showExport?: boolean;
      pdfOptions?: GridToolbarExportProps["printOptions"];
      csvOptions?: GridToolbarExportProps["csvOptions"];
    };
  }
) => {
  const slotExport = React.useMemo(
    () =>
      props?.exportOptions?.showExport
        ? {
            toolbar: () => (
              <GridToolbarExportOnly
                csvOptions={props?.exportOptions?.csvOptions}
                pdfOptions={props?.exportOptions?.pdfOptions}
              />
            ),
          }
        : {},
    [props.exportOptions]
  );

  return (
    <DataGrid
      disableColumnMenu
      disableColumnSelector
      showCellVerticalBorder
      showColumnVerticalBorder
      disableRowSelectionOnClick
      onPaginationModelChange={props.onPaginationModelChange}
      slots={merge(props.slots, slotExport)}
      sx={(theme) => ({
        "& .MuiDataGrid-columnHeaderTitle": {
          fontWeight: 600,
          color: "common.white",
        },
        "& .MuiDataGrid-columnHeader": {
          bgcolor: "primary.main",
        },
        "& .MuiDataGrid-columnHeader, .MuiDataGrid-cell": {
          borderRight: `1px solid ${
            theme.palette.mode === "light" ? "#d9d9d9" : "#303030"
          }`,
        },
        "& .MuiDataGrid-columnsContainer, .MuiDataGrid-cell": {
          borderBottom: `1px solid ${
            theme.palette.mode === "light" ? "#d9d9d9" : "#303030"
          }`,
        },
        "& .MuiDataGrid-sortIcon": { opacity: 1 },
        "& .MuiDataGrid-footerContainer": {
          flexDirection: "row-reverse",
        },
        "& .MuiDataGrid-cell:focus-within, & .MuiDataGrid-cell:focus": {
          outline: "none !important",
        },
        "& .MuiDataGrid-columnHeader:focus-within, & .MuiDataGrid-columnHeader:focus":
          {
            outline: "none !important",
          },
      })}
      {...props}
    />
  );
};

export default ReportDataGrid;
