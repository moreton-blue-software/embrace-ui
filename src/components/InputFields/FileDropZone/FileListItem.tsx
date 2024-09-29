import React, { useState } from "react";
import {
  Box,
  Button,
  IconButton,
  Input,
  LinearProgress,
  Tooltip,
  Typography,
} from "@mui/material";
import { TFile } from "./types";
import { useToggle } from "react-use";
import { bytesToSize } from "../../../utils";

import InsertDriveFileOutlinedIcon from "@mui/icons-material/InsertDriveFileOutlined";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

const FileListItem = (props: {
  file: TFile;
  onEdit?: (file: TFile) => void;
  onDelete?: () => void;
}) => {
  const { file, onEdit, onDelete } = props;
  const [shouldEdit, toggleShouldEdit] = useToggle(false);
  const [progress, setProgress] = useState(0);

  file.onProgress = React.useCallback((value: number) => {
    setProgress(value * 100);
  }, []);

  return (
    <Box sx={{ position: "relative", maxWidth: "150px", width: "100%" }}>
      <Box
        width="100%"
        height="150px"
        sx={{ display: "flex", alignItems: "center" }}
      >
        {file.type === "application/pdf" ? (
          <InsertDriveFileOutlinedIcon
            sx={{
              height: "100px",
              width: "100%",
            }}
          />
        ) : (
          <img
            src={file.url}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "3px",
            }}
          />
        )}
      </Box>
      <Tooltip title={file.meta?.name} placement="right-start">
        <Box>
          {!shouldEdit && (
            <Typography
              variant="subtitle1"
              textOverflow="ellipsis"
              overflow="hidden"
              whiteSpace="nowrap"
            >
              {file.meta?.name}
            </Typography>
          )}
          <Typography
            variant="caption"
            textOverflow="ellipsis"
            overflow="hidden"
            whiteSpace="nowrap"
          >
            {bytesToSize(file.size)}
          </Typography>
        </Box>
      </Tooltip>
      {shouldEdit && (
        <Input
          type="text"
          defaultValue={file.meta?.name}
          onChange={(e) => (file.meta!.name = e.target.value)}
          onBlur={() => onEdit?.(file)}
        />
      )}
      <Box mt={2}>
        <Button
          variant="outlined"
          size="small"
          onClick={() => toggleShouldEdit()}
        >
          {shouldEdit ? "Cancel Edit" : "Edit"}
        </Button>
      </Box>
      <IconButton
        size="small"
        onClick={() => {
          onDelete?.();
        }}
        sx={{ position: "absolute", top: "-15px", right: "-15px" }}
      >
        <HighlightOffIcon />
      </IconButton>
      <Box mt={2} sx={{ width: "100%", heght: "8px" }}>
        <LinearProgress variant="determinate" value={progress} />
      </Box>
    </Box>
  );
};

export default FileListItem;
