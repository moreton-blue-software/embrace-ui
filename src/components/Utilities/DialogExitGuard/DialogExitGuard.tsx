import WarningIcon from '@mui/icons-material/ReportGmailerrorred';
import { Dialog, DialogContent, Box, Typography, Button } from '@mui/material';
import { alpha } from '@mui/material/styles';
import React from 'react';

import { TDialogExitGuard } from './types';

function DialogExitGuard(props: TDialogExitGuard) {
  const {
    title,
    message,
    acceptFn,
    cancelFn,
    cancelLabel,
    acceptLabel,
    acceptButtonProps = {},
    acceptBtnColor = '#E13B37',
    cancelBtnProps = {},
    Icon = WarningIcon,
    iconColor = '#E13B37',
    maxWidth = 'sm',
  } = props;

  const [dialogOpen, setDialogOpen] = React.useState(true);

  const handleAcceptFn = () => {
    acceptFn();
    setDialogOpen(false);
  };

  const handleCancelFn = () => {
    cancelFn();
    setDialogOpen(false);
  };

  return (
    <Dialog open={dialogOpen} maxWidth={maxWidth} fullWidth>
      <DialogContent
        sx={{
          p: 5,
          columnGap: 4,
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
        }}
      >
        <Icon
          sx={{
            width: '142px',
            height: '142px',
            padding: '5px',
            borderRadius: '100%',
            color: iconColor,
            background: alpha(iconColor, 0.2),
            boxShadow: `${alpha(iconColor, 0.05)} 0px 0px 0px 5px`,
          }}
        />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <Typography variant="h6" fontWeight="900" mb={1} fontSize={18}>
            {title ?? 'Close without Saving?'}
          </Typography>
          <Typography variant="subtitle2" mb={2}>
            {message ??
              'Are you sure you want to close without saving? Unsaved changes will be unrecoverable.'}
          </Typography>
          <Box display="flex" columnGap={1.25}>
            <Button
              variant="contained"
              {...acceptButtonProps}
              sx={{ bgcolor: acceptBtnColor, borderColor: acceptBtnColor }}
              onClick={handleAcceptFn}
            >
              {acceptLabel ?? 'Continue'}
            </Button>
            <Button variant="contained" {...cancelBtnProps} onClick={handleCancelFn}>
              {cancelLabel ?? 'Cancel'}
            </Button>
          </Box>
        </Box>
      </DialogContent>
    </Dialog>
  );
}

export default DialogExitGuard;
