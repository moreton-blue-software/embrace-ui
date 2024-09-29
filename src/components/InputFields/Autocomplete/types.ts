import {
  AutocompleteChangeReason,
  SxProps,
  TextFieldProps,
} from "@mui/material";

export type AutocompleteProps = {
  sx?: SxProps;
  name?: string;
  text?: string;
  value?: string | null;
  label?: string;
  children?: React.ReactNode;
  fieldOnly?: boolean;
  readonly?: boolean;
  disabled?: boolean;
  loading?: boolean;
  error?: boolean;
  messages?: string[];
  isDirty?: boolean;
  options?: {
    value: string;
    label: string;
    _source?: unknown;
  }[];
  onChange?: (
    value: string | null | undefined,
    selected: {
      value: string;
      label: string;
      _source?: unknown;
    } | null,
    reason: AutocompleteChangeReason
  ) => void;
  onSearch?: (searchKey: string) => void;
  focusOnMount?: boolean;
  textFieldRef?: React.RefObject<HTMLInputElement>;
  TextFieldProps?: TextFieldProps;
  CustomIcon?: React.FC;
  noStartIcon?: boolean;
};
