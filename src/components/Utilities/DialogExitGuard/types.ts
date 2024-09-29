import { ButtonProps, SvgIconTypeMap, DialogProps } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';

export type TDialogExitGuard = {
  title?: string;
  message?: string;
  cancelLabel?: string;
  acceptLabel?: string;
  acceptBtnColor?: string;
  acceptButtonProps?: ButtonProps;
  cancelBtnProps?: ButtonProps;
  Icon?: OverridableComponent<SvgIconTypeMap>;
  iconColor?: string;
  maxWidth?: DialogProps['maxWidth'];
  acceptFn: () => void;
  cancelFn: () => void;
};
