import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Project Website
        </Typography>
        <Box>
          <Button color="inherit" component={RouterLink} to="/">
            Home
          </Button>
          <Button color="inherit" component={RouterLink} to="/market-analysis">
            Market Analysis
          </Button>
          <Button color="inherit" component={RouterLink} to="/market-breakdown">
            Market Breakdown
          </Button>
          <Button color="inherit" component={RouterLink} to="/trading-strategies">
            Trading Strategies
          </Button>
          <Button color="inherit" component={RouterLink} to="/economic-calendar">
            Economic Calendar
          </Button>
          <Button color="inherit" component={RouterLink} to="/about">
            About
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar; 