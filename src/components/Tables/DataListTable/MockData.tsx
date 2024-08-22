import React from 'react';
import { Typography } from '@mui/material';

import { faker } from '@faker-js/faker';
import { times } from 'lodash';

export const multiRowData = times(51, () => {
  return {
    cells: [
      {
        children: <Typography>{faker.name.fullName()}</Typography>,
        colSpan: 4,
      },
      {
        children: <Typography>{faker.name.jobTitle()}</Typography>,
        colSpan: 4,
      },
      {
        children: <Typography>{faker.phone.number()}</Typography>,
        colSpan: 4,
      },
    ],
  };
});
