import React from 'react';
import {
  Container,
  Typography,
  Box,
  Paper,
} from '@mui/material';

const TradingStrategies: React.FC = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom>
        Trading Strategies
      </Typography>
      
      <Box sx={{ mt: 4 }}>
        <Paper sx={{ p: 3, mb: 3 }}>
          <Typography variant="h5" gutterBottom>
            Day Trading Basics
          </Typography>
          <Typography variant="body1">
            Learn the fundamental principles of day trading and how to get started.
          </Typography>
        </Paper>

        <Paper sx={{ p: 3, mb: 3 }}>
          <Typography variant="h5" gutterBottom>
            Technical Analysis
          </Typography>
          <Typography variant="body1">
            Master the art of technical analysis and chart patterns.
          </Typography>
        </Paper>

        <Paper sx={{ p: 3 }}>
          <Typography variant="h5" gutterBottom>
            Risk Management
          </Typography>
          <Typography variant="body1">
            Essential strategies for managing risk and protecting your capital.
          </Typography>
        </Paper>
      </Box>
    </Container>
  );
};

export default TradingStrategies; 