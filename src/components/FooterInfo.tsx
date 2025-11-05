// src/components/FooterInfo.tsx
import { Box, Typography } from '@mui/material';

export default function FooterInfo() {
  const now = new Date().toLocaleString('fa-IR', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });

  return (
    <Box sx={{ textAlign: 'center', py: 2 }}>
      <Typography variant="body2">
        شرکت مهندسی   
      </Typography>
      <Typography variant="body2">ایمیل: info@nadim.ae</Typography>
      <Typography variant="body2">تاریخ و زمان: {now}</Typography>
    </Box>
  );
}
