import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material';

export default function useMediaAllDown() {
  const theme = useTheme();
  const xs = useMediaQuery(theme.breakpoints.down('xs'));
  const sm = useMediaQuery(theme.breakpoints.down('sm'));
  const md = useMediaQuery(theme.breakpoints.down('md'));
  const lg = useMediaQuery(theme.breakpoints.down('lg'));
  const xl = useMediaQuery(theme.breakpoints.down('xl'));
  return {
    xs,
    sm,
    md,
    lg,
    xl,
  };
}
