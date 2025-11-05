// src/themes/theme.ts
import { createTheme } from '@mui/material';

export const getTheme = (mode: 'light' | 'dark') =>
  createTheme({
    palette: {
      mode,
    },
    typography: {
      fontFamily: 'IRANSans, Roboto, sans-serif',
    },
  });
