import React from "react";

import { ButtonProps, Button } from "@mui/material";

function MUIButton(props: ButtonProps) {
  return <Button {...props}>Click Me!</Button>;
}

export default MUIButton;
