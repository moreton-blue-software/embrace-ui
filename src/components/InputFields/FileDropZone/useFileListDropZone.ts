import { omit } from "lodash";
import { useSnackbar } from "notistack";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useDropArea, useList, useUnmount } from "react-use";
import { TFile } from "./types";

const createFileURL = (file: TFile) => {
  const url = URL.createObjectURL(file);
  file.url = url;
  file.meta = {
    name: file.name,
    description: "",
  };
  return file;
};

export const useFileListDropZone = (params: {
  multiple: boolean;
  onDelete?: (file: File) => void;
}) => {
  const { multiple, onDelete } = params;
  const { enqueueSnackbar } = useSnackbar();
  const [filesMap, setFilesMap] = useState<Record<string, TFile>>({});
  const [fileList, fileListMethods] = useList<TFile>();

  const [bond, state] = useDropArea({
    onFiles: (droppedFiles) => fileListMethods.set(droppedFiles as TFile[]),
    onUri: () =>
      enqueueSnackbar("Please drop images only", { variant: "warning" }),
    onText: () =>
      enqueueSnackbar("Please drop images only", { variant: "warning" }),
  });

  useEffect(() => {
    if (!fileList.length) return;
    const uploads = multiple ? [...fileList] : [fileList[0]];
    if (!uploads.length) return;

    const uploadsMap = Object.fromEntries(
      uploads.map((upload: TFile) => [upload?.name, createFileURL(upload)])
    );
    Object.keys(uploadsMap).forEach((key) => {
      const file = filesMap[key];
      if (!file) return;
      enqueueSnackbar(`File ${file?.name} already in the list`, {
        variant: "warning",
      });
      if (file.url) URL.revokeObjectURL(file.url);
    });
    const newFilesMap = { ...filesMap, ...uploadsMap };

    const result = multiple ? newFilesMap : uploadsMap;
    console.log({ result });
    setFilesMap(result);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fileList]);

  const files = useMemo(() => Object.values(filesMap), [filesMap]);

  const reset = useCallback(() => {
    files.forEach((image) => {
      if (image.url) URL.revokeObjectURL(image.url);
    });
  }, [files]);

  const remove = useCallback(
    (file: TFile) =>
      setFilesMap((prev) => {
        if (file.url) URL.revokeObjectURL(file.url);
        onDelete?.(file);
        return omit(prev, file.name);
      }),
    [onDelete]
  );

  useUnmount(() => reset());

  return {
    bond,
    state,
    files,
    fileListMethods,
    filesMap,
    remove,
  };
};
