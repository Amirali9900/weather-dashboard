// src/components/WeatherCard.tsx
import { useEffect, useState } from 'react';
import { Card, Typography, CircularProgress, Box } from '@mui/material';
import { getWeatherData } from '../services/weatherService';
import { useTranslation } from 'react-i18next';

export default function WeatherCard({ city }: { city: string }) {
  const [weather, setWeather] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const { i18n } = useTranslation();

  // مختصات تهران به عنوان نمونه
  const coordinates = {
    Tehran: { lat: 35.6892, lon: 51.3890 },
    // شهرهای دیگر را اضافه کن
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getWeatherData(
          Coordinates[city].lat,
          Coordinates[city].lon,
          i18n.language
        );
        setWeather(data);
      } catch (error) {
        console.error('خطا در دریافت اطلاعات آب‌وهوا', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [city, i18n.language]);

  if (loading) return <CircularProgress />;

  return (
    <Card sx={{ p: 3 }}>
      <Typography variant="h6">{city}</Typography>
      <Typography>{weather.current.weather[0].description}</Typography>
      <Typography>🌡 دما: {weather.current.temp}°C</Typography>
      <Typography>🤒 حس واقعی: {weather.current.feels_like}°C</Typography>
      <Typography>⬆️ بیشینه: {weather.daily[0].temp.max}°C</Typography>
      <Typography>⬇️ کمینه: {weather.daily[0].temp.min}°C</Typography>
    </Card>
  );
}
