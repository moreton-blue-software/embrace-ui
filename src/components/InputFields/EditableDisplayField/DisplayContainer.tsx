import React from 'react';
import { Box, Typography } from '@mui/material';

import { DisplayContainerProps } from './types';

const DisplayContainer = (props: DisplayContainerProps) => {
  const { sx = {}, title, content } = props;

  return (
    <Box sx={sx}>
      <Typography sx={theme => ({ color: theme.palette.text.secondary, fontSize: 12 })}>
        {title}
      </Typography>
      {content}
    </Box>
  );
};

export default DisplayContainer;
