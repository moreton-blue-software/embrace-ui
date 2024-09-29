import React from 'react';
import { startCase } from 'lodash';
import { isDate, format } from 'date-fns';
import { Skeleton, Typography } from '@mui/material';

import { EditFieldProps } from './types';

function EditField(props: EditFieldProps) {
  const {
    value,
    isEdit,
    editContent,
    isLoading = false,
    autocompleteValue,
    isAutocomplete,
    isDateTime,
  } = props;

  let displayValue = !isAutocomplete ? value ?? '' : '';

  // check if value is date (not including time)
  if (isDate(value) && !isDateTime) displayValue = format(value as Date, 'dd/MM/yyyy');

  // check if value is date-time
  if (isDate(value) && isDateTime)
    displayValue = format(value as Date, 'dd/MM/yyyy hh:mm a');

  // check isAutocomplete & value is array of strings
  if (isAutocomplete && Array.isArray(value)) {
    if (value.length === 1) displayValue = value[0];
    if (value.length > 1) {
      value.map((val, i) => {
        if (i === 0) displayValue = val;
        if (i > 0) displayValue = `${displayValue}, ${val}`;
      });
    }
  }

  // check if autocomplete default value is array of options
  if (isAutocomplete && Array.isArray(autocompleteValue)) {
    displayValue = autocompleteValue.map(i => i.label).join(', ');
  }

  // check if autocomplete default value is single option
  if (
    isAutocomplete &&
    !Array.isArray(autocompleteValue) &&
    autocompleteValue?.hasOwnProperty('label')
  )
    displayValue = autocompleteValue.label;

  console.log('@EditField', { value, displayValue, isAutocomplete, autocompleteValue });

  return isLoading ? (
    <Skeleton variant="text" sx={{ fontSize: 18, width: 200, mb: '-12px' }} />
  ) : (
    <>
      {isEdit ? (
        editContent
      ) : (
        <Typography sx={theme => ({ color: theme.palette.text.primary, fontSize: 14 })}>
          {displayValue as string}
        </Typography>
      )}
    </>
  );
}

export default EditField;
