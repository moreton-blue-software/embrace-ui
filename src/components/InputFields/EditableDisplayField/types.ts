import React from "react";
import { SxProps } from "@mui/material";
import { UseFormReturn, FieldValues, Path } from "react-hook-form";

type AutocompleteOption = {
  id?: string;
  label: string;
  value: string;
};

export type EditableDisplayFieldProps<T extends FieldValues> = {
  children: React.ReactElement;
  name: Path<T>;
  form: UseFormReturn<T>;
  title: string;
  isEdit: boolean;
  sx?: SxProps;
  isDateTime?: boolean;
  isAutocomplete?: boolean;
  autocompleteValue?: AutocompleteOption | AutocompleteOption[];
};

export type EditFieldProps = {
  autocompleteValue?: AutocompleteOption | AutocompleteOption[];
  isAutocomplete: boolean;
  isDateTime: boolean;
  value?: number | string | Date;
  isEdit: boolean;
  editContent: React.ReactNode;
  isLoading?: boolean;
};

export type DisplayContainerProps = {
  sx?: SxProps;
  title: string;
  content: React.ReactNode;
};
