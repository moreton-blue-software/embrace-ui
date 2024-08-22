import * as React from 'react';

import { Grid, Typography, IconButton, Box, Collapse, Button } from '@mui/material';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import IndeterminateCheckBoxOutlinedIcon from '@mui/icons-material/IndeterminateCheckBoxOutlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

import ListTableRow from './ListTableRow';
import ListTableCell from './ListTableCell';
import ListTablePagination from './ListTablePagination';

import useMediaAllDown from './useMediaAllDown';

import { TListTableRows } from './types';
import { setAlign } from './ListTableHeaders';

import { chunk } from 'lodash';

export default function ListTableRows({
  rows,
  noRowsComponent,
  rowsPerPage = 0,
  defaultExpandedRow = null,
  onRowExpanded,
  loadMoreButton,
  infiniteQuery,
}: TListTableRows) {
  const [rowsState, setRowsState] = React.useState<any>({});
  const [activeIndex, setActiveIndex] = React.useState<number | null | void>(
    defaultExpandedRow,
  );
  const [currentPage, setCurrentPage] = React.useState<number>(0);

  // const [displayedRows, setDisplayedRows] = React.useState<number>(rowsPerPage);

  const media = useMediaAllDown();
  const mappedRows = typeof rows === 'function' ? rows({ media }) : rows || [];

  const getAncestors = React.useCallback(
    (id?: string, parentID?: string, level?: number) => {
      if (!mappedRows || !id || !level || level === 0) return;
      let currentParent = parentID;
      const ancestors = Array();
      for (let index = 0; index < level; index++) {
        mappedRows.find(row => {
          if (row.id && row.id === currentParent) {
            ancestors.push(row.id);
            currentParent = row.parentID;
          }
        });
      }

      return ancestors;
    },
    [mappedRows],
  );
  const handleExpand = (
    id: string | undefined,
    parentID: string | undefined,
    level: number,
  ) => {
    setRowsState(prev => {
      if (!mappedRows) return;

      const current = prev[`row${id}`];

      if (current?.isExpanded) {
        let otherRows = {};

        Object.entries(prev).forEach(entry => {
          const [key, value] = entry;
          // @ts-ignore
          if (value.ancestors) {
            // @ts-ignore
            const isRelated = value.ancestors.includes(id);
            if (isRelated) {
              otherRows = {
                ...otherRows,
                ...{
                  [key]: {
                    ...(value as Object),
                    isExpanded: false,
                  },
                },
              };
            }
          }
        });

        return {
          ...prev,
          ...otherRows,
          [`row${id}`]: {
            id: id,
            isExpanded: false,
            parentID: parentID,
            ancestors: getAncestors(id, parentID, level),
          },
        };
      }

      return {
        ...prev,
        [`row${id}`]: {
          id: id,
          isExpanded: true,
          parentID: parentID,
          ancestors: getAncestors(id, parentID, level),
        },
      };
    });
  };

  const groupedRows = rowsPerPage ? chunk(mappedRows, rowsPerPage) : [];
  const groupedRowsPages = rowsPerPage ? groupedRows.length : 0;

  // Named "paginatedRows" but if there is no "rowsPerPage" prop
  // passed, will just contain all mappedRow without pagination
  const paginatedRows = groupedRows.length ? groupedRows[currentPage] : mappedRows;

  const [__rows, setRows] = React.useState(() => [...paginatedRows]);

  // Refreshing __rows only if source of truth "rows" was updated maybe due to filters and etc.
  React.useEffect(() => setRows(() => [...paginatedRows]), [rows]);

  const triggerLoadMoreRows = () => {
    // Calculate the index of the next page
    const nextPageIndex = currentPage + 1;
    // Check if there are more pages available
    if (nextPageIndex < groupedRows.length) {
      // This will append rows from the next page to the current paginatedRows
      const nextPageRows = groupedRows[nextPageIndex];
      setRows(prevPaginatedRows => [...prevPaginatedRows, ...nextPageRows]);
      // Update the current page index
      setCurrentPage(nextPageIndex);
    }
  };

  const triggerGetPageRows = (page: number) => {
    if (!!infiniteQuery) {
      if (page < currentPage) infiniteQuery.onPrevPage(page);
      if (page > currentPage) infiniteQuery.onNextPage(page);
      return;
    }

    console.log('@ListTableRows>>triggerGetPageRows::', {
      groupedRows,
      currentPage: page - 1,
      currentRows: groupedRows[page - 1],
    });
    setRows(() => groupedRows[page - 1]);
    setCurrentPage(() => page - 1);
  };

  if (!mappedRows || mappedRows.length <= 0) {
    return noRowsComponent ? (
      noRowsComponent
    ) : (
      <Typography
        fontSize={12}
        mt={4}
        align="center"
        sx={{
          color: 'text.secondary',
        }}
      >
        No items available yet
      </Typography>
    );
  }

  return (
    <Grid container spacing={0.5} mt={1}>
      {__rows.map(
        (
          {
            cells,
            dataTestID,
            level,
            isLast,
            id,
            parentID,
            noChildren,
            parentIsLast,
            collapsibleContent,
            rowIndicator,
            rowDisabled,
          },
          rowIndex,
        ) => {
          const isNested = typeof level === 'number';
          const isLevelZero = level === 0 ? true : false;
          const rowIsActive = activeIndex === rowIndex;

          return (
            <Grid
              key={rowIndex}
              item
              xs={12}
              sx={{
                display: isNested
                  ? isLevelZero || rowsState[`row${parentID}`]?.isExpanded
                    ? 'block'
                    : 'none'
                  : '',
              }}
              data-testid={dataTestID}
            >
              <ListTableRow
                sx={{
                  minHeight: '64px',
                  position: 'relative',
                  backgroundColor: rowIndicator?.hasIndicator
                    ? rowIndicator.indicatorColor
                    : rowDisabled?.isRowDisabled
                      ? rowDisabled?.disabledColor
                      : rowIsActive
                        ? '#F3F7FB'
                        : null,
                  color: rowDisabled?.isRowDisabled ? 'gray' : 'inherit',
                  border: rowIndicator?.hasIndicatorBorder
                    ? `5px solid ${rowIndicator.indicatorColor}`
                    : rowIsActive
                      ? '1px solid #F3F7FB'
                      : null,
                  transition: '0.3s background-color',
                }}
              >
                {cells.map((cell, cellIndex) => (
                  <ListTableCell
                    key={cellIndex}
                    colSpan={cell.colSpan}
                    center={cell.center}
                    align={cell.align}
                    sx={cell.sx}
                  >
                    {cellIndex === 0 && isNested ? (
                      <Box
                        sx={{
                          paddingLeft: isNested ? `${level * 24}px` : '',
                          position: 'relative',
                          display: 'flex',
                          alignItems: 'center',
                        }}
                      >
                        {level && level !== 0 ? (
                          <>
                            <Box
                              sx={{
                                width: '2px',
                                height: isLast ? '32px' : '64px',
                                backgroundColor: '#CDD3DB',
                                position: 'absolute',
                                left: `${(level - 1) * 24 + 16}px`,
                                top: '-15px',
                              }}
                            />
                            <Box
                              sx={{
                                width: '16px',
                                height: '2px',
                                backgroundColor: '#CDD3DB',
                                position: 'absolute',
                                left: `${(level - 1) * 24 + 16}px`,
                              }}
                            />
                            {level !== 1 && !parentIsLast && (
                              <Box
                                sx={{
                                  width: '2px',
                                  height: '64px',
                                  backgroundColor: '#CDD3DB',
                                  position: 'absolute',
                                  left: '16px',
                                  top: '-15px',
                                }}
                              />
                            )}

                            {rowsState[`row${id}`]?.isExpanded && (
                              <Box
                                sx={{
                                  width: '2px',
                                  height: '32px',
                                  backgroundColor: '#CDD3DB',
                                  position: 'absolute',
                                  left: `${(level - 1) * 24 + 40}px`,
                                  top: '15px',
                                }}
                              />
                            )}
                          </>
                        ) : null}

                        {rowsState[`row${id}`]?.isExpanded ? (
                          <>
                            <Box
                              sx={{
                                width: '2px',
                                height: isLast || level === 0 ? '32px' : '64px',
                                backgroundColor: '#CDD3DB',
                                position: 'absolute',
                                top: level === 0 ? '16px' : '-16px',
                                left: '16px',
                              }}
                            />
                          </>
                        ) : null}
                        {isNested ? (
                          <IconButton
                            disableRipple={true}
                            disabled={noChildren}
                            size="small"
                            sx={{
                              '&:hover': {
                                backgroundColor: 'transparent',
                              },
                            }}
                            onClick={() => handleExpand(id, parentID, level)}
                          >
                            {rowsState[`row${id}`]?.isExpanded ? (
                              <IndeterminateCheckBoxOutlinedIcon
                                color={noChildren ? 'disabled' : 'primary'}
                                sx={{ backgroundColor: '#fff' }}
                              />
                            ) : (
                              <AddBoxOutlinedIcon
                                color={noChildren ? 'disabled' : 'primary'}
                                sx={{ backgroundColor: '#fff' }}
                              />
                            )}
                          </IconButton>
                        ) : null}
                      </Box>
                    ) : null}

                    {cellIndex === 0 && collapsibleContent ? (
                      <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => {
                          onRowExpanded?.(rowIndex);
                          setActiveIndex(rowIsActive ? null : rowIndex);
                        }}
                      >
                        {rowIsActive ? (
                          <KeyboardArrowUpIcon />
                        ) : (
                          <KeyboardArrowDownIcon />
                        )}
                      </IconButton>
                    ) : null}
                    <Box
                      sx={{
                        width: '100%',
                        display: 'flex',
                        justifyContent: cell.center
                          ? 'center'
                          : cell.align
                            ? setAlign(cell.align)
                            : null,
                      }}
                    >
                      {cell.children}
                    </Box>
                  </ListTableCell>
                ))}
              </ListTableRow>
              {collapsibleContent ? (
                <Collapse in={rowIsActive}>{collapsibleContent}</Collapse>
              ) : null}
            </Grid>
          );
        },
      )}

      {Boolean(loadMoreButton) && (
        <Grid item xs={12} display="flex" justifyContent="center" mt={2}>
          <Button variant="contained" color="primary" onClick={triggerLoadMoreRows}>
            Show More
          </Button>
        </Grid>
      )}

      {Boolean(rowsPerPage) && Boolean(!loadMoreButton) && rowsPerPage > 0 && (
        <Grid item xs={12} display="flex" justifyContent="flex-end" mt={2}>
          <ListTablePagination
            page={
              !!infiniteQuery ? (infiniteQuery.currentPage || 0) + 1 : currentPage + 1
            }
            count={
              infiniteQuery?.totalRows !== undefined
                ? calculateTotalRows({
                    totalRows: infiniteQuery.totalRows,
                    rowsPerPage,
                  })
                : groupedRowsPages
            }
            onChange={page => triggerGetPageRows(page)}
            siblingCount={1}
            boundaryCount={2}
          />
        </Grid>
      )}
    </Grid>
  );
}

function calculateTotalRows({
  rowsPerPage,
  totalRows,
}: {
  totalRows: number;
  rowsPerPage: number;
}) {
  const hasRemainder = totalRows % rowsPerPage !== 0;

  if (hasRemainder) {
    return Math.floor(totalRows / rowsPerPage) + 1;
  }

  return Math.floor(totalRows / rowsPerPage);
}
