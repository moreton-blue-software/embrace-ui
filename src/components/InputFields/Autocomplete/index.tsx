import React, { useMemo, useEffect } from "react";
import FilterListIcon from "@mui/icons-material/FilterList";
import {
  TextField,
  InputAdornment,
  Autocomplete as AutocompleteMui,
} from "@mui/material";

import { AutocompleteProps } from "./types";

const Autocomplete = (props: AutocompleteProps) => {
  const {
    sx,
    name,
    text,
    value,
    label,
    options = [],
    isDirty,
    error = false,
    loading = false,
    disabled,
    onChange,
    focusOnMount = false,
    textFieldRef,
    TextFieldProps = {},
    CustomIcon,
    noStartIcon,
  } = props;

  useEffect(() => {
    if (textFieldRef?.current && focusOnMount) {
      setTimeout(() => {
        textFieldRef.current?.focus();
      }, 100);
    }
  }, []);

  // create a map to access by key (O(1))
  const optionsMap = useMemo(() => {
    return Object.fromEntries(options.map((option) => [option.value, option]));
  }, [options]);

  return (
    <AutocompleteMui
      id={name}
      disabled={disabled}
      options={options}
      isOptionEqualToValue={(option, value) => option.value === value.value}
      renderOption={(elProps, option) => {
        return (
          <li {...elProps} key={elProps.id}>
            {option.label}
          </li>
        );
      }}
      onChange={(__, selected, reason) => {
        const { value } = selected || {};

        if (value || reason === "clear") {
          if (onChange) onChange(value, selected, reason);
        }
      }}
      value={{
        value: value || "",
        // automatically get the label based on value use
        label: value ? optionsMap?.[value]?.label || text || "" : text || "",
      }}
      loading={loading}
      sx={sx}
      renderInput={(params) => (
        <TextField
          inputRef={textFieldRef}
          {...params}
          InputProps={{
            ...params.InputProps,
            startAdornment: noStartIcon ? undefined : (
              <InputAdornment position="start">
                {CustomIcon ? <CustomIcon /> : <FilterListIcon />}
              </InputAdornment>
            ),
          }}
          label={label}
          error={error && isDirty}
          disabled={disabled}
          {...TextFieldProps}
        />
      )}
      fullWidth
    />
  );
};

export default Autocomplete;
