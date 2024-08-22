import React from "react";
import { Box } from "@mui/material";

import ListTableHeaders from "./ListTableHeaders";
import ListTableRows from "./ListTableRows";
import Spinner from "../../Utilities/Spinner";

import { TDataListTable } from "./types";

export default function DataListTable({
  loadMoreButton,
  isLoading,
  sorting,
  headers,
  rows,
  noRowsComponent,
  rowsPerPage,
  headerSx,
  defaultExpandedRow,
  onRowExpanded,
  infiniteQuery,
}: TDataListTable) {
  return (
    <Box>
      <ListTableHeaders
        headers={headers}
        sorting={sorting}
        headerSx={headerSx}
      />
      {isLoading ? (
        <Spinner />
      ) : (
        <ListTableRows
          noRowsComponent={noRowsComponent}
          rows={rows}
          rowsPerPage={rowsPerPage}
          defaultExpandedRow={defaultExpandedRow}
          onRowExpanded={onRowExpanded}
          loadMoreButton={loadMoreButton}
          infiniteQuery={infiniteQuery}
        />
      )}
    </Box>
  );
}
