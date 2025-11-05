// src/services/weatherService.ts
import axios from 'axios';

const API_KEY = 'bfca2304541700a08fb306911dc07eef'; // کلید واقعی‌ات رو جایگزین کن
const BASE_URL = 'https://api.openweathermap.org/data/2.5/onecall';

export const getWeatherData = async (lat: number, lon: number, lang: string = 'fa') => {
  const response = await axios.get(BASE_URL, {
    params: {
      lat,
      lon,
      exclude: 'minutely,hourly,alerts',
      units: 'metric',
      lang,
      appid: API_KEY,
    },
  });
  return response.data;
};
