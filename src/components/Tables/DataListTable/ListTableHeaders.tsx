import * as React from 'react';

import { Grid } from '@mui/material';
import ListTableSortBtn from './ListTableSortBtn';

import { TListTableHeaders } from './types';
import useMediaAllDown from './useMediaAllDown';

export default function ListTableHeaders({
  headers,
  sorting,
  headerSx,
}: TListTableHeaders) {
  const media = useMediaAllDown();

  const mappedHeaders = typeof headers === 'function' ? headers({ media }) : headers;

  return (
    <Grid
      container
      spacing={2}
      sx={{
        px: 2,
        ...headerSx,
      }}>
      {mappedHeaders.map((item, index) => (
        <Grid
          item
          xs={item.colSpan}
          key={index}
          sx={{
            display: item.center || item.align ? 'flex' : 'block',
            justifyContent: item.center
              ? 'center'
              : item.align
              ? setAlign(item.align)
              : null,
            minWidth: 0,
          }}>
          <ListTableSortBtn
            name={item.name}
            activeField={sorting?.value}
            sortField={item.sortField}
            sortDirection={sorting?.sort}
            onClick={sorting?.onSort}
            hasSort={item.hasSort}
            center={item.center}
            icon={item.icon}
            align={item.align}
          />
        </Grid>
      ))}
    </Grid>
  );
}

export function setAlign(alignment: 'left' | 'center' | 'right') {
  switch (alignment) {
    case 'left':
      return 'flex-start';
    case 'center':
      return 'center';
    case 'right':
      return 'flex-end';
    default:
      return 'flex-start';
  }
}
