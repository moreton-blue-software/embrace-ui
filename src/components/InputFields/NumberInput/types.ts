import { SxProps } from "@mui/material";

export type NumberInputProps = {
  label: string;
  placeholder: string;
  value?: string | number | null;
  isLoading?: boolean;
  isDisabled?: boolean;
  sx?: SxProps;
  onChange?: (value: number | null | undefined) => void;
  // react-number-format props
  prefix?: string;
  suffix?: string;
  allowNegative?: boolean;
  decimalScale?: number;
  thousandsGroupStyle?: "thousand" | "lakh" | "wan";
};
