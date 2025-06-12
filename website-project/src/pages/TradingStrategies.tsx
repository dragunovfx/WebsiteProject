import React from 'react';
import { Container, Typography, Box, Paper } from '@mui/material';

const TradingStrategies: React.FC = () => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom>
          Trading Strategies
        </Typography>
        <Paper sx={{ p: 3, mb: 3 }}>
          <Typography variant="h5" gutterBottom>
            Proven Trading Strategies
          </Typography>
          <Typography paragraph>
            Learn about various trading strategies that have been proven effective in different market conditions.
            From day trading to long-term investing, we cover it all.
          </Typography>
        </Paper>
      </Box>
    </Container>
  );
};

export default TradingStrategies; 