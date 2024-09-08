import { ButtonProps, SvgIconTypeMap, DialogProps } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { useSnackbar } from "notistack";

import DialogExitGuard from "../components/Utilities/DialogExitGuard";

type DialogExitGuardParams = {
  title?: string;
  message?: string;
  cancelLabel?: string;
  acceptLabel?: string;
  acceptBtnColor?: string;
  acceptButtonProps?: ButtonProps;
  cancelBtnProps?: ButtonProps;
  Icon?: OverridableComponent<SvgIconTypeMap>;
  maxWidth?: DialogProps["maxWidth"];
  iconColor?: string;
};

function useDialogExitGuard(params: DialogExitGuardParams) {
  const snacker = useSnackbar();

  const exitGuard = (): Promise<boolean> => {
    return new Promise((resolve) => {
      const key = snacker.enqueueSnackbar(
        <DialogExitGuard
          {...params}
          acceptFn={() => {
            snacker.closeSnackbar(key);
            setTimeout(() => resolve(true), 500);
          }}
          cancelFn={() => {
            snacker.closeSnackbar(key);
            resolve(false);
          }}
        />,
        {
          variant: "default",
          persist: true,
          style: { display: "none" },
        }
      );
    });
  };

  return exitGuard;
}

export default useDialogExitGuard;
