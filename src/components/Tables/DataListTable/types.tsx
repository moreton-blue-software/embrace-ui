import { SxProps } from "@mui/material";

export type TListTableOptionMedia = {
  xs: boolean;
  sm: boolean;
  md: boolean;
  lg: boolean;
  xl: boolean;
};

export type TListTableCell = {
  name?: string;
  children?: React.ReactNode;
  colSpan?: number;
  sx?: SxProps;
  center?: boolean;
  align?: "left" | "center" | "right";
};

export type TListTableSortBtn = {
  name: string;
  activeField?: string;
  sortField?: string;
  sortDirection?: string;
  onClick?: any;
  hasSort?: boolean;
  textAlign?: string;
  center?: boolean;
  icon?: React.ReactElement;
  align?: "left" | "center" | "right";
};

export type TListTablePagination = {
  count: number;
  page: number;
  onChange: (page: number) => void;
  siblingCount: number;
  boundaryCount: number;
};

export type TListTableRowItem = {
  children: React.ReactNode;
  sx: SxProps;
};

export type TListTableRow = {
  dataTestID?: string;
  cells: Array<TListTableCell>;
  level?: number;
  isLast?: boolean;
  parentIsLast?: boolean;
  parentID?: string;
  id?: string;
  noChildren?: boolean;
  collapsibleContent?: React.ReactNode | React.ReactElement;
  rowIndicator?: {
    hasIndicator: boolean;
    hasIndicatorBorder: boolean;
    indicatorColor: string;
  };
  rowDisabled?: {
    isRowDisabled: boolean;
    disabledColor: string;
  };
};

export type TListTableRows = {
  rows?:
    | Array<TListTableRow>
    | ((option: { media: TListTableOptionMedia }) => Array<TListTableRow>);
  noRowsComponent?: React.ReactElement;
  rowsPerPage?: number;
  defaultExpandedRow?: number | null;
  onRowExpanded?: (row: number) => void;
  loadMoreButton?: boolean;
  infiniteQuery?: {
    currentPage: number;
    totalRows: number;
    onNextPage: (page: number) => void;
    onPrevPage: (page: number) => void;
  };
};

export type TListTableHeader = TListTableSortBtn & {
  colSpan: number;
  align?: "left" | "center" | "right";
};

export type TListTableHeaders = {
  headers:
    | Array<TListTableHeader>
    | ((option: {
        media: {
          xs: boolean;
          sm: boolean;
          md: boolean;
          lg: boolean;
          xl: boolean;
        };
      }) => Array<TListTableHeader>);
  sorting?: any;
  headerSx?: SxProps;
};

export type TDataListTable = TListTableRows &
  TListTableHeaders & {
    isLoading?: boolean;
    mobileView?: React.ReactNode;
    rowsPerPage?: number;
    headerSx?: SxProps;
  };
