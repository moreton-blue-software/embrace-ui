import React from "react";
import { Controller, FieldValues } from "react-hook-form";

import EditField from "./EditField";
import DisplayContainer from "./DisplayContainer";
import { EditableDisplayFieldProps } from "./types";

function EditableDisplayField<T extends FieldValues>(
  props: EditableDisplayFieldProps<T>
) {
  const {
    name,
    form,
    title,
    isEdit,
    children,
    sx = {},
    autocompleteValue,
    isAutocomplete = false,
    isDateTime = false,
  } = props;

  return (
    <DisplayContainer
      sx={sx}
      title={title}
      content={
        <EditField
          isDateTime={isDateTime}
          isAutocomplete={isAutocomplete}
          autocompleteValue={autocompleteValue}
          value={form.getValues(name)}
          isEdit={isEdit}
          editContent={
            <Controller
              name={name}
              control={form.control}
              render={({ field }) => (
                <React.Fragment>
                  {React.cloneElement(children, {
                    ...(field as Record<string, unknown>),
                  })}
                </React.Fragment>
              )}
            />
          }
        />
      }
    />
  );
}

export default EditableDisplayField;
