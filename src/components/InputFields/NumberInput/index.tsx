import { TextField } from "@mui/material";
import { NumericFormat } from "react-number-format";

import { NumberInputProps } from "./types";

export default function NumberInput(props: NumberInputProps) {
  const { sx, isLoading, isDisabled, thousandsGroupStyle, onChange } = props;

  return (
    <NumericFormat
      {...props}
      thousandsGroupStyle={thousandsGroupStyle}
      thousandSeparator={thousandsGroupStyle ? "," : undefined}
      customInput={TextField}
      slotProps={{ inputLabel: { shrink: true } }}
      variant="outlined"
      fullWidth
      onChange={(
        event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
      ) => {
        if (onChange) onChange(Number(event.currentTarget.value));
      }}
      disabled={isDisabled || isLoading}
      sx={sx}
    />
  );
}
