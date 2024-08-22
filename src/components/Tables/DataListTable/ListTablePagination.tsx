import React from 'react';
import { Box, Pagination, PaginationItem } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import { TListTablePagination } from './types';

export default function ListTablePagination({
  count,
  page,
  onChange,
  siblingCount,
  boundaryCount,
}: TListTablePagination) {
  return (
    <Box
      sx={theme => ({
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        '& .MuiPaginationItem-root': {
          backgroundColor: 'transparent',
        },
        '& .MuiPaginationItem-root.Mui-selected, & .MuiPaginationItem-root:hover': {
          backgroundColor: theme.palette.primary.main,
          color: '#ffffff',
        },
        '& .MuiPaginationItem-previousNext': {
          height: 28,
          '& svg': {
            fontSize: 16,
          },
        },
      })}>
      <Pagination
        variant="outlined"
        shape="rounded"
        count={count}
        page={page}
        siblingCount={siblingCount}
        boundaryCount={boundaryCount}
        onChange={(e, page) => onChange(page)}
        renderItem={item => (
          <PaginationItem components={{ previous: Prev, next: Next }} {...item} />
        )}
      />
    </Box>
  );
}

function Prev() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      <ChevronLeftIcon fontSize="small" />
    </Box>
  );
}

function Next() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      <ChevronRightIcon fontSize="small" />
    </Box>
  );
}
