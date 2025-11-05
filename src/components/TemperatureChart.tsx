// src/components/TemperatureChart.tsx
import { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const mockData = [
  { month: 'Jan', high: 12, low: 3 },
  { month: 'Feb', high: 14, low: 5 },
  { month: 'Mar', high: 18, low: 8 },
  { month: 'Apr', high: 22, low: 12 },
  { month: 'May', high: 28, low: 17 },
  { month: 'Jun', high: 33, low: 21 },
  { month: 'Jul', high: 36, low: 24 },
  { month: 'Aug', high: 35, low: 23 },
  { month: 'Sep', high: 30, low: 19 },
  { month: 'Oct', high: 24, low: 14 },
  { month: 'Nov', high: 18, low: 9 },
  { month: 'Dec', high: 14, low: 5 },
];

export default function TemperatureChart() {
  return (
    <Box sx={{ height: 300 }}>
      <Typography variant="h6" gutterBottom>
        نمودار دمای ماهانه
      </Typography>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={mockData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="high" stroke="#ff7300" name="بیشینه" />
          <Line type="monotone" dataKey="low" stroke="#387908" name="کمینه" />
        </LineChart>
      </ResponsiveContainer>
    </Box>
  );
}
