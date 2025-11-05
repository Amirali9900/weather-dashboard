// src/pages/Login.tsx
import {
  Box,
  Button,
  Container,
  Grid,
  MenuItem,
  Select,
  TextField,
  Typography,
  useTheme,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function Login() {
  const [name, setName] = useState('');
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const theme = useTheme();

  const handleSubmit = () => {
    if (name.trim()) {
      localStorage.setItem('username', name);
      navigate('/dashboard');
    }
  };

  const handleLanguageChange = (lang: string) => {
    i18n.changeLanguage(lang);
    document.documentElement.dir = lang === 'fa' ? 'rtl' : 'ltr';
  };

  return (
    <Container maxWidth="lg">
      <Grid
        container
        spacing={4}
        alignItems="center"
        justifyContent="center"
        sx={{
          minHeight: '100vh',
          direction: i18n.language === 'fa' ? 'rtl' : 'ltr',
        }}
      >
        {/* فرم ورود */}
        <Grid component="div" item xs={12} md={6}>
          <Box
            sx={{
              backgroundColor: theme.palette.background.paper,
              p: 4,
              borderRadius: 3,
              boxShadow: 3,
              textAlign: 'center',
            }}
          >
            <Typography variant="h4" gutterBottom>
              {t('login')}
            </Typography>
            <TextField
              fullWidth
              label={t('enter_name')}
              value={name}
              onChange={(e) => setName(e.target.value)}
              sx={{ mb: 3 }}
            />
            <Button variant="contained" fullWidth onClick={handleSubmit}>
              {t('login')}
            </Button>

            {/* انتخاب زبان */}
            <Box sx={{ mt: 3 }}>
              <Select
                value={i18n.language}
                onChange={(e) => handleLanguageChange(e.target.value)}
              >
                <MenuItem value="en">English</MenuItem>
                <MenuItem value="fa">فارسی</MenuItem>
              </Select>
            </Box>
          </Box>
        </Grid>

        {/* آیکون‌های آب‌وهوا */}
        <Grid component="div" item xs={12} md={6} >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 3,
            }}
          >
            <img src="/assets/cloud-sun-rain.png" alt="Cloud Sun Rain" width={120} />
            <img src="/assets/cloud-rain-moon.png" alt="Cloud Rain Moon" width={120} />
            <img src="/assets/cloud-wind-moon.png" alt="Cloud Wind Moon" width={120} />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
