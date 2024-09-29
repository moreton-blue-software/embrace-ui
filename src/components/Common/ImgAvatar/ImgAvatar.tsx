import Avatar from "@mui/material/Avatar";
import { TImgAvatar } from "./types";

const sizeMap = {
  tiny: "16px",
  mini: "24px",
  small: "32px",
  medium: "48px",
  large: "56px",
  xlarge: "72px",
};

const statusMap = {
  active: "2px solid #1AE970",
  inactive: "2px solid #F4F5F7",
  default: "2px solid #05264a20",
};

const variantMap = {
  circular: "50%",
  rounded: "4px",
  square: "0px",
};

const ImgAvatar = (props: TImgAvatar) => {
  const {
    size = "medium",
    variant = "rounded",
    status = "default",
    sx,
    src,
    imgProps,
    avatarProps,
  } = props;

  const styles = {
    width: sizeMap[size],
    height: sizeMap[size],
    border: statusMap[status],
    borderRadius: variantMap[variant],
  };

  return (
    <Avatar
      sx={{ ...styles, ...sx }}
      src={src}
      imgProps={imgProps}
      {...avatarProps}
    />
  );
};

export default ImgAvatar;
