export const Basic_Search_Source = `
  // fetch items api
  const fetchList = async () => {
    await Promise.delay(2000);
    return [
      {
        id: "001",
        name: "test",
      },
      {
        id: "002",
        name: "test2",
      },
    ];
  };

  // search hook
  const autoCompleteProps = useAutocompleteSearch({
    id: null,
    queryKey: ["Test_Basic_Search"],
    queryFn: async () => {
      return { list: await fetchList() };
    },
    getOptionLabel(item) {
      return item.name;
    },
  });

  return <Autocomplete {...autoCompleteProps} sx={{ width: 300 }} />;
`;

export const With_Initial_Value_Source = `
  // fetch items api
  const fetchList = async () => {
    await Promise.delay(2000);
    return [
      {
        id: "001",
        name: "test",
      },
      {
        id: "002",
        name: "test2",
      },
    ];
  };

  // search hook
  const autoCompleteProps = useAutocompleteSearch({
    id: "001",
    queryKey: ["Test_With_Initial_Value"],
    queryFn: async () => {
      return { list: await fetchList() };
    },
    getOptionLabel(item) {
      return item.name;
    },
  });

  return <Autocomplete {...autoCompleteProps} sx={{ width: 300 }} />;
`;

export const Fetch_Record_Id_Source = `
  // fetch items api
  const fetchList = async () => {
    await Promise.delay(1000);
    return [
      {
        id: "001",
        name: "test",
      },
      {
        id: "002",
        name: "test2",
      },
    ];
  };

  // fetch item by id api
  const fetchById = async (id?: string | null) => {
    if (!id) return null;
    await Promise.delay(1000);
    return {
      id,
      name: "data-" + id,
    };
  };

  // search hook
  const autoCompleteProps = useAutocompleteSearch({
    id: args.id as string,
    queryKey: ["Test_With_Initial_Value"],
    queryFn: async ({ id }) => {
      return { list: await fetchList(), idResult: await fetchById(id) };
    },
    getOptionLabel(item) {
      return item.name;
    },
  });

  return <Autocomplete {...autoCompleteProps} sx={{ width: 300 }} />;
`;

export const Search_Record_Text_Source = `
  // fetch items api
  const fetchList = async () => {
    await Promise.delay(1000);
    return [
      {
        id: "001",
        name: "test",
      },
      {
        id: "002",
        name: "test2",
      },
    ];
  };

  // fetch item by id api
  const searchByKeyword = async (kw?: string | null) => {
    if (!kw) return null;
    await Promise.delay(1000);
    return [
      {
        id: "s-" + kw + "-01",
        name: "keyword-" + kw + "-01",
      },
      {
        id: "s-" + kw + "-02",
        name: "keyword-" + kw + "-02",
      },
    ];
  };

  // search hook
  const autoCompleteProps = useAutocompleteSearch({
    id: args.id as string,
    queryKey: ["Test_Search_Record_Text"],
    queryFn: async ({ searchText }) => {
      return {
        list: await fetchList(),
        searchResults: await searchByKeyword(searchText),
      };
    },
    getOptionLabel(item) {
      return item.name;
    },
  });

  return <Autocomplete {...autoCompleteProps} sx={{ width: 300 }} />;
`;

export const Search_Record_With_Id_Source = `
  // fetch items api
  const fetchList = async () => {
    await Promise.delay(1000);
    return [
      {
        id: "001",
        name: "test",
      },
      {
        id: "002",
        name: "test2",
      },
    ];
  };
  // fetch item by id api
  const searchByKeyword = async (kw?: string | null) => {
    if (!kw) return null;
    await Promise.delay(1000);
    return [
      {
        id: "s-" + kw + "-01",
        name: "keyword-" + kw + "-01",
      },
      {
        id: "s-" + kw + "-02",
        name: "keyword-" + kw + "-02",
      },
    ];
  };
  // search hook
  const autoCompleteProps = useAutocompleteSearch({
    id: "001",
    queryKey: ["Test_Search_Record_Text"],
    queryFn: async ({ searchText }) => {
      return {
        list: await fetchList(),
        searchResults: await searchByKeyword(searchText),
      };
    },
    getOptionLabel(item) {
      return item.name;
    },
  });

  return <Autocomplete {...autoCompleteProps} sx={{ width: 300 }} />;
`;

export const Reuse_List_For_Search_Results_Source = `
  // search hook
  const autoCompleteProps = useAutocompleteSearch({
    id: args.id as string,
    queryKey: ["Test_Search_Record_Text"],
    queryFn: async ({ searchText }) => {
      await Promise.delay(2000);
      const list = [
        {
          id: "001",
          name: "test",
        },
        {
          id: "002",
          name: "test2",
        },
        {
          id: "003",
          name: "test3",
        },
      ];

      return {
        list,
        searchResults: list.filter((item) =>
          item.name.includes(searchText || "")
        ),
      };
    },
    getOptionLabel(item) {
      return item.name;
    },
  });

  return <Autocomplete {...autoCompleteProps} sx={{ width: 300 }} />;
`;
