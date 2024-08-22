import * as React from 'react';
import { Button, Typography } from '@mui/material';
import ArrowDownIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpIcon from '@mui/icons-material/ArrowUpward';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import { TListTableSortBtn } from './types';
import { setAlign } from './ListTableHeaders';

export default function ListTableSortBtn({
  name,
  activeField,
  sortField,
  sortDirection = '',
  onClick,
  hasSort,
  center,
  icon,
  align,
}: TListTableSortBtn) {
  return (
    <Button
      onClick={() => onClick(sortField)}
      variant="text"
      color="primary"
      disabled={!hasSort ? true : false}
      disableRipple={true}
      endIcon={
        hasSort
          ? activeField === sortField
            ? renderSortIcon(sortDirection)
            : renderSortIcon()
          : null
      }
      sx={{
        minHeight: '32px',
        padding: '0',
        justifyContent: center ? 'center' : align ? setAlign(align) : 'flex-start',
        // textAlign: center ? 'center' : 'left',
        '&:hover': {
          backgroundColor: 'transparent',
        },
      }}>
      <Typography
        sx={{
          textTransform: 'uppercase',
          fontSize: '0.75rem',
          fontWeight: 700,
          color: '#697D92',
          letterSpacing: '0.75px',
        }}>
        {icon ? icon : name}
      </Typography>
    </Button>
  );
}

const renderSortIcon = (sortDirection?: string) => {
  if (sortDirection === 'asc')
    return <ArrowUpIcon sx={{ color: 'text.secondary', fontSize: '2px' }} />;
  if (sortDirection === 'desc')
    return <ArrowDownIcon sx={{ color: 'text.secondary', fontSize: '2px' }} />;
  return (
    <CompareArrowsIcon
      sx={{ color: 'text.secondary', fontSize: '2px', transform: 'rotate(90deg)' }}
    />
  );
};
