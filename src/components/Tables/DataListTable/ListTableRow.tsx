import * as React from 'react';
import { Card, Grid } from '@mui/material';
import { TListTableRowItem } from './types';

export default function ListTableRow({ children, sx }: TListTableRowItem) {
  return (
    <Card
      elevation={1}
      sx={{
        px: 2,
        py: 1,
        display: 'flex',
        alignItems: 'center',
        ...sx,
      }}>
      <Grid container spacing={2}>
        {children}
      </Grid>
    </Card>
  );
}
