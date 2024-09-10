import type { Meta, StoryObj } from "@storybook/react";
import { Title, Story, Source } from "@storybook/blocks";

import Promise from "bluebird";
import { createUiStory } from "../utils/stories";
import useAutocompleteSearch from "./useAutocompleteSearch";
import { Box, Autocomplete } from "@mui/material";

import * as CODE from "./useAutocompleteSearch.source";

const meta: Meta = {
  title: "Hooks/useAutocompleteSearch",
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <Box sx={{ bgcolor: "#F5F5F5", borderRadius: 4, px: 8, py: 4 }}>
        <Story />
      </Box>
    ),
  ],
  parameters: {
    layout: "centered",
    docs: {
      page: () => (
        <>
          <Title>Basic Search</Title>
          <Story of={Basic_Search} />
          <Source of={Basic_Search} code={CODE.Basic_Search_Source} />

          <Title>With Initial Value</Title>
          <Story of={With_Initial_Value} />
          <Source
            of={With_Initial_Value}
            code={CODE.With_Initial_Value_Source}
          />

          <Title>Fetch Record ID</Title>
          <Story of={Fetch_Record_Id} />
          <Source of={Fetch_Record_Id} code={CODE.Fetch_Record_Id_Source} />

          <Title>Search Record Text</Title>
          <Story of={Search_Record_Text} />
          <Source
            of={Search_Record_Text}
            code={CODE.Search_Record_Text_Source}
          />

          <Title>Search Record with ID</Title>
          <Story of={Search_Record_With_Id} />
          <Source
            of={Search_Record_With_Id}
            code={CODE.Search_Record_With_Id_Source}
          />

          <Title>Re-use List for Search Results</Title>
          <Story of={Reuse_List_For_Search_Results} />
          <Source
            of={Reuse_List_For_Search_Results}
            code={CODE.Reuse_List_For_Search_Results_Source}
          />
        </>
      ),
    },
  },
};

export default meta;

type Story = StoryObj;

export const Basic_Search: Story = {
  render: createUiStory(() => {
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
  }).RenderComponent,
};

export const With_Initial_Value: Story = {
  render: createUiStory(() => {
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
  }).RenderComponent,
};

export const Fetch_Record_Id: Story = {
  render: createUiStory((args) => {
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
    const fetchById = async (id: string | null) => {
      if (!id) return null;
      await Promise.delay(1000);
      return {
        id,
        name: `data-${id}`,
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
  }).RenderComponent,
  args: { id: "999" },
  argTypes: {
    id: {
      control: "text",
    },
  },
};

export const Search_Record_Text: Story = {
  render: createUiStory((args) => {
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
    const searchByKeyword = async (kw: string | null) => {
      if (!kw) return null;
      await Promise.delay(1000);
      return [
        {
          id: `s-${kw}-01`,
          name: `keyword-${kw}-01`,
        },
        {
          id: `s-${kw}-02`,
          name: `keyword-${kw}-02`,
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
  }).RenderComponent,
};

export const Search_Record_With_Id: Story = {
  render: createUiStory((args) => {
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
    const searchByKeyword = async (kw: string | null) => {
      if (!kw) return null;
      await Promise.delay(1000);
      return [
        {
          id: `s-${kw}-01`,
          name: `keyword-${kw}-01`,
        },
        {
          id: `s-${kw}-02`,
          name: `keyword-${kw}-02`,
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
  }).RenderComponent,
  args: { id: "001" },
  argTypes: {
    id: {
      control: "text",
    },
  },
};

export const Reuse_List_For_Search_Results: Story = {
  render: createUiStory((args) => {
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
  }).RenderComponent,
  args: { id: "001" },
  argTypes: {
    id: {
      control: "text",
    },
  },
};
