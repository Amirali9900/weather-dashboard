// src/components/ForecastList.tsx
import { Card, Typography, Grid } from '@mui/material';
import { useEffect, useState } from 'react';
import { getWeatherData } from '../services/weatherService';
import { useTranslation } from 'react-i18next';

export default function ForecastList() {
  const [forecast, setForecast] = useState<any[]>([]);
  const { i18n } = useTranslation();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getWeatherData(35.6892, 51.3890, i18n.language); // Tehran
      setForecast(data.daily.slice(0, 8)); // 8 روز اول
    };
    fetchData();
  }, [i18n.language]);

  return (
    <Grid container spacing={2}>
      {forecast.map((day, index) => {
        const date = new Date(day.dt * 1000).toLocaleDateString(i18n.language, {
          weekday: 'long',
        });
        return (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card sx={{ p: 2, textAlign: 'center' }}>
              <Typography variant="subtitle1">{date}</Typography>
              <img
                src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
                alt={day.weather[0].description}
              />
              <Typography>{day.weather[0].description}</Typography>
              <Typography>🌡 {day.temp.day}°C</Typography>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
}
