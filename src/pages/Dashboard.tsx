// src/pages/Dashboard.tsx
import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Typography,
  useTheme,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import WeatherCard from '../components/WeatherCard';
import LanguageSwitcher from '../components/LanguageSwitcher';
import ThemeToggle from '../components/ThemeToggle';
import ForecastList from '../components/ForecastList';
import TemperatureChart from '../components/TemperatureChart';
import FooterInfo from '../components/FooterInfo';

export default function Dashboard() {
  const navigate = useNavigate();
  const name = localStorage.getItem('username');
  const { t, i18n } = useTranslation();
  const theme = useTheme();

  // بررسی وجود نام کاربر
  useEffect(() => {
    if (!name) {
      navigate('/');
    }
  }, [name]);

  const handleLogout = () => {
    localStorage.removeItem('username');
    navigate('/');
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Grid container spacing={4}>
        {/* هدر خوش‌آمدگویی و کنترل‌ها */}
        <Grid item xs={12}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              direction: i18n.language === 'fa' ? 'rtl' : 'ltr',
            }}
          >
            <Typography variant="h5">
              {t('welcome')}, {name}
            </Typography>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <ThemeToggle />
              <LanguageSwitcher />
              <Button variant="outlined" onClick={handleLogout}>
                {t('logout')}
              </Button>
            </Box>
          </Box>
        </Grid>

        {/* اطلاعات آب‌وهوا فعلی */}
        <Grid item xs={12} md={6}>
          <WeatherCard city="Tehran" />
        </Grid>

        {/* نمودار دمای ماهانه */}
        <Grid item xs={12} md={6}>
          <TemperatureChart />
        </Grid>

        {/* پیش‌بینی ۲ هفته‌ای */}
        <Grid item xs={12}>
          <Typography variant="h6" gutterBottom>
            {t('forecast_2weeks')}
          </Typography>
          <ForecastList />
        </Grid>

        {/* فوتر */}
        <Grid item xs={12}>
          <Divider sx={{ my: 2 }} />
          <FooterInfo />
        </Grid>
      </Grid>
    </Container>
  );
}
