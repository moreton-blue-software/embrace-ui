import { SxProps, AvatarProps } from "@mui/material";

export type TImgAvatar = {
  variant?: "circular" | "rounded" | "square";
  size?: "tiny" | "mini" | "small" | "medium" | "large" | "xlarge";
  status?: "active" | "inactive" | "default";
  avatarProps?: AvatarProps;
  imgProps?: AvatarProps["imgProps"];
  src: string;
  sx?: SxProps;
};
