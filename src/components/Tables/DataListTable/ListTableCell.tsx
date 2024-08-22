import * as React from 'react';
import { Grid } from '@mui/material';
import { TListTableCell } from './types';
import { setAlign } from './ListTableHeaders';

export default function ListTableCell({
  children,
  colSpan,
  sx,
  center,
  align,
}: TListTableCell) {
  return (
    <Grid
      item
      xs={colSpan ? colSpan : 2}
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: center ? 'center' : align ? setAlign(align) : null,
        ...sx,
      }}>
      {children}
    </Grid>
  );
}
