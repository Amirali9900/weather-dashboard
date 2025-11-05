// src/components/LanguageSwitcher.tsx
import { Button, Box } from '@mui/material';
import { useTranslation } from 'react-i18next';

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const toggleLang = () => {
    const newLang = i18n.language === 'fa' ? 'en' : 'fa';
    i18n.changeLanguage(newLang);
    document.documentElement.lang = newLang;
    document.documentElement.dir = newLang === 'fa' ? 'rtl' : 'ltr';
    localStorage.setItem('lang', newLang);
  };

  return (
    <Box>
      <Button variant="outlined" onClick={toggleLang}>
        {i18n.language === 'fa' ? 'English' : 'فارسی'}
      </Button>
    </Box>
  );
}
