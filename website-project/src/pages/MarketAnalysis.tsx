import React from 'react';
import { Container, Typography, Box, Paper } from '@mui/material';

const MarketAnalysis: React.FC = () => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom>
          Market Analysis
        </Typography>
        <Paper sx={{ p: 3, mb: 3 }}>
          <Typography variant="h5" gutterBottom>
            Understanding Market Analysis
          </Typography>
          <Typography paragraph>
            Market analysis is a crucial component of successful trading. It involves studying market trends,
            patterns, and indicators to make informed trading decisions.
          </Typography>
        </Paper>
      </Box>
    </Container>
  );
};

export default MarketAnalysis; 