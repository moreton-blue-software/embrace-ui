import { format } from "date-fns";
import {
  GridToolbarExport,
  GridToolbarExportProps,
  GridToolbarContainer,
} from "@mui/x-data-grid";

const GridToolbarExportOnly = (props?: {
  csvOptions?: GridToolbarExportProps["csvOptions"];
  pdfOptions?: GridToolbarExportProps["printOptions"];
}) => {
  return (
    <GridToolbarContainer sx={{ py: 2, justifyContent: "flex-end" }}>
      <GridToolbarExport
        variant="contained"
        color="primary"
        sx={{ py: 1, px: 3 }}
        csvOptions={{
          ...(props?.csvOptions || {}),
          fileName: props?.csvOptions?.fileName
            ? props?.csvOptions?.fileName
            : `data-export-${format(new Date(), "ddMMyyyyhhmmss")}`,
        }}
        printOptions={{
          hideFooter: true,
          hideToolbar: true,
          copyStyles: true,
          ...(props?.pdfOptions || {}),
        }}
      />
    </GridToolbarContainer>
  );
};

export default GridToolbarExportOnly;
