// src/components/ThemeToggle.tsx
import { Button } from '@mui/material';
import { useThemeMode } from '../context/ThemeContext';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

export default function ThemeToggle() {
  const { toggle } = useThemeMode();
  const { t } = useTranslation();
  const theme = useTheme();

  const isDark = theme.palette.mode === 'dark';

  return (
    <Button
      variant="outlined"
      onClick={() => {
        toggle();
        localStorage.setItem('theme', isDark ? 'light' : 'dark');
      }}
      startIcon={isDark ? <Brightness7Icon /> : <Brightness4Icon />}
    >
      {isDark ? t('light_mode') : t('dark_mode')}
    </Button>
  );
}
