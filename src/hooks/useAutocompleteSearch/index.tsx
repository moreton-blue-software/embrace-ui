import { useEffect, useRef, useState, useMemo, useCallback } from "react";
import { QueryKey, UseQueryOptions, useQuery } from "@tanstack/react-query";

import { debounce } from "lodash";
import { CircularProgress, TextField, TextFieldProps } from "@mui/material";

export type TItem = {
  id: string;
};

export type TItemOption<T> = {
  label: string;
  value: string;
  id: string;
  _source: T;
};

export type TUseAutocompleteSearchFnResult<T extends TItem> = {
  list: T[];
  searchResults?: T[] | null;
  idResult?: T | null;
};

type TQOptions<
  TQueryKey extends QueryKey = QueryKey,
  TData = unknown,
> = UseQueryOptions<TData[], unknown, unknown, TQueryKey>;

type TUseAutocompleteSearch<
  T extends TItem,
  // _QK is used for typescript typing only
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _QK extends QueryKey = QueryKey,
> = {
  id: string | null;
  label?: string;
  queryKey: string[];
  queryFn: (params: {
    searchText: string | null | undefined;
    id: string | null | undefined;
  }) => Promise<TUseAutocompleteSearchFnResult<T>>;
  getOptionLabel?: (item: T) => string;
};

const useAutocompleteSearch = <
  T extends TItem,
  QK extends QueryKey = QueryKey,
>({
  id,
  label,
  queryKey,
  getOptionLabel,
  queryFn,
}: TUseAutocompleteSearch<T, QK>) => {
  const [value, setValue] = useState<TItemOption<T> | null>(null);
  const [inputValue, setInputValue] = useState<null | undefined | string>("");
  const itemsMapping = useRef<Record<string, TItemOption<T>>>({});

  const transform = useCallback(
    (result: T[] | null | undefined) => {
      itemsMapping.current = {};
      const options = result?.reduce?.((all, item) => {
        const label = getOptionLabel?.(item) ?? "";
        const opt = {
          label,
          value: item?.id,
          id: item?.id,
          _source: item,
        };
        if (itemsMapping.current[item.id]) return all;
        itemsMapping.current[item.id] = opt;
        all.push(opt);
        return all;
      }, [] as TItemOption<T>[]);
      return { options };
    },
    [getOptionLabel]
  );

  const state = useMemo(
    () => ({ searchText: inputValue, id }),
    [inputValue, id]
  );

  const opts = {
    queryKey: [...queryKey, state] as unknown as TQOptions<QK, T>["queryKey"],
    queryFn: async () => {
      const results = await queryFn(state);
      const options = [...results.list];
      if (results.searchResults) options.push(...results.searchResults);
      if (results.idResult) options.push(results.idResult);
      return options;
    },
    select: transform,
    refetchOnWindowFocus: false,
    notifyOnChangeProps: ["data"],
  } as TQOptions<QK, T>;

  const qResults = useQuery(opts);

  const data = qResults.data as ReturnType<typeof transform>;
  const status = qResults.status as string;

  useEffect(() => {
    setValue((oldValue) => {
      const value = id ? itemsMapping.current[id] : null;
      if (oldValue?.id === value?.id) return oldValue;
      return value;
    });
  }, [data?.options, id]);

  const result = useMemo(() => {
    const loading = status === "loading";

    return {
      value,
      options: data?.options ?? [],
      loading,
      isOptionEqualToValue: (option: TItem, value: TItem) => {
        return value?.id === option?.id;
      },
      onInputChange: debounce(
        (
          event: React.SyntheticEvent<Element, Event>,
          newInputValue: string | null | undefined,
          reason: string
        ) => {
          console.log("INPUT_CHANGE", { event, newInputValue, reason });
          if (!event) return;
          const { type } = event;
          if (reason !== "input" || ["blur", "click"].includes(type) || !event)
            return;
          setInputValue(newInputValue);
        },
        500
      ),
      renderInput: (params: TextFieldProps) => {
        return (
          <TextField
            {...params}
            label={label}
            InputProps={{
              ...params.InputProps,
              endAdornment: (
                <>
                  {loading ? (
                    <CircularProgress color="inherit" size={20} />
                  ) : null}
                  {params.InputProps?.endAdornment}
                </>
              ),
            }}
          />
        );
      },
    };
    // excluding "label" in the dependencies
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, status, data?.options]);

  return result;
};

export default useAutocompleteSearch;
