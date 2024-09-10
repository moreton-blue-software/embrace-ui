import { Paper, Box, BoxProps } from "@mui/material";
import React from "react";

const rootStyles = {
  "& fieldset.MuiOutlinedInput-notchedOutline": {
    display: "none",
  },
  "& .mbs-datepicker": {
    marginTop: "-5px",
  },
  "& .mbs-datepicker > div": {
    marginTop: "0px",
  },
  "& .mbs-datepicker > p": {
    marginLeft: "10px",
  },
  "& .mbs-datepicker input": {
    fontSize: "inherit",
  },
  "& .mbs-daterangepicker .MuiOutlinedInput-root": {
    background: "none",
  },
  "& .mbs-daterangepicker svg": {
    color: "lightgrey",
  },
  "& .mbs-searchbox > p": {
    marginLeft: "10px",
    opacity: 0.8,
    color: "inherit",
  },
  "& .mbs-searchbox > div": {
    marginTop: "5px",
  },
  "& .mbs-searchbox": {
    marginTop: "-7px",
  },
  "& .MuiTextField-root svg": {
    color: "lightgrey",
  },
  "& .MuiTextField-root .MuiInputBase-adornedStart input": {
    marginLeft: "5px",
  },
  "& .MuiCheckbox-root": {
    marginLeft: "16px",
  },
  "& .MuiFormLabel-root": {
    fontSize: "inherit !important",
  },
};

function FilterBox(filterBoxProps: BoxProps & { containerProps?: BoxProps }) {
  const { children, containerProps = {}, ...props } = filterBoxProps;
  const self = React.useRef<React.Ref<HTMLDivElement>>(null);

  const { width, minWidth, ...bProps } = props;

  return (
    <Box {...bProps}>
      <Paper sx={rootStyles}>
        <Box
          ref={self}
          minHeight="72px"
          {...{ p: 1, pt: 2, pb: 0 }}
          width={width}
          minWidth={minWidth}
          {...containerProps}
        >
          {children}
        </Box>
      </Paper>
    </Box>
  );
}

export default FilterBox;
