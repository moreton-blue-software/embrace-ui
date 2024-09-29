import { useRef, useCallback, useEffect } from "react";
import { useFileListDropZone } from "./useFileListDropZone";
import { Box, Grid2 as Grid } from "@mui/material";
import { TFile } from "./types";
import FileListItem from "./FileListItem";

export type TFileListDropZone = {
  multiple?: boolean;
  onFilesChange?: (files: Record<string, File>) => void;
  onDelete?: (file: File, index: number) => void;
  onEdit?: (file: File, index: number) => void;
};

const FileListDropZone = (props: TFileListDropZone) => {
  const { multiple = false, onFilesChange, onDelete, onEdit } = props;
  const { bond, state, files, filesMap, remove, fileListMethods } =
    useFileListDropZone({
      multiple,
    });
  const fileRef = useRef<HTMLInputElement>(null);
  const handleClickInputFile = useCallback(() => {
    fileRef.current?.click();
  }, [fileRef]);
  const handleFiles = useCallback<React.ChangeEventHandler<HTMLInputElement>>(
    (e) => {
      const target = e.target;
      console.log({ target });
      const { files } = target;
      const fileList: TFile[] = [];
      if (files !== null) {
        const x = Array.from(files);
        fileList.push(...x);
      }
      fileListMethods.set(fileList);
    },
    [fileListMethods]
  );
  useEffect(() => {
    onFilesChange?.(filesMap);
  }, [filesMap, onFilesChange]);

  return (
    <Box {...bond}>
      <input
        type="file"
        ref={fileRef}
        required
        hidden
        multiple={multiple}
        accept="image/*,application/pdf"
        onChange={handleFiles}
      />
      <Grid
        container
        spacing={2}
        sx={{
          width: 1,
          height: 150,
          minWidth: 150,
          borderRadius: 4,
          textAlign: "center",
          alignItems: "center",
          justifyContent: "center",
          border: "1px solid gainsboro",
        }}
      >
        <Grid
          size={12}
          onClick={handleClickInputFile}
          sx={{
            height: 1,
            display: "flex",
            cursor: "pointer",
            userSelect: "none",
            alignItems: "center",
            justifyContent: "center",
            transition: "0.2s ease-out opacity",
            "&:hover": { opacity: 0.5 },
          }}
        >
          {state?.over ? "Drop here..." : "Click or drag files here..."}
        </Grid>
      </Grid>
      <Box
        {...bond}
        sx={{
          mt: 2,
          gap: "16px",
          display: "grid",
          textAlign: "center",
          minWidth: "400px",
          minHeight: "400px",
          gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
        }}
      >
        {files?.map((file, index) => (
          <Box key={index}>
            <FileListItem
              file={file}
              onEdit={(file: File) => onEdit?.(file, index)}
              onDelete={() => {
                remove(file);
                onDelete?.(file, index);
              }}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default FileListDropZone;
