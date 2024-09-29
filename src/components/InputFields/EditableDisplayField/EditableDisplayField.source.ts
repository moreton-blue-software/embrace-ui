export const EDIT_MODE_SOURCE = `
  const form = useForm();

  return (
    <EditableDisplayField
      form={form}
      title="Sample Title"
      name="sampleName
      isEdit={true}
    >
      <TextField sx={{ maxWidth: "95%" }} placeholder="Search here..." />
    </EditableDisplayField>
  );
`;

export const DISPLAY_MODE_WITH_DEFAULT_SOURCE = `
  const form = useForm({
    defaultValues: { sampleName: "Aljone Pogi" },
  });

  return (
    <EditableDisplayField
      form={form}
      title="Sample Title"
      name="sampleName
      isEdit={false}
    >
      <TextField sx={{ maxWidth: "95%" }} placeholder="Search here..." />
    </EditableDisplayField>
  );
`;

export const DISPLAY_MODE_WITH_DEFAULT_DATE_SOURCE = `
  const form = useForm({
    defaultValues: { dateToday: new Date() },
  });

  return (
    <EditableDisplayField
      form={form}
      title="Date"
      name="dateToday"
      isEdit={false}
    >
      <TextField sx={{ maxWidth: "95%" }} placeholder="Search here..." />
    </EditableDisplayField>
  );
`;

export const EDIT_MODE_WITH_DEFAULT_SOURCE = `
  const form = useForm({
    defaultValues: { sampleName: "Aljone Pogi" },
  });

  return (
    <EditableDisplayField
      form={form}
      title="Sample Name"
      name="sampleName"
      isEdit={true}
    >
      <TextField sx={{ maxWidth: "95%" }} placeholder="Search here..." />
    </EditableDisplayField>
  );
`;

export const FULL_WIDTH_EDIT_FIELD_SOURCE = `
  const form = useForm();

    return (
      <EditableDisplayField
        form={form}
        title="Sample Name"
        name="sampleName"
        isEdit={true}
      >
        <TextField fullWidth placeholder="Search here..." />
      </EditableDisplayField>
    );
  );
`;
