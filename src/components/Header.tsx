import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
} from '@mui/material';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

const Header: React.FC = () => {
  return (
    <AppBar position="static">
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <TrendingUpIcon sx={{ mr: 1 }} />
          <Typography
            variant="h6"
            component={RouterLink}
            to="/"
            sx={{
              flexGrow: 1,
              textDecoration: 'none',
              color: 'inherit',
              fontWeight: 700,
            }}
          >
            WebsiteProject
          </Typography>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button
              color="inherit"
              component={RouterLink}
              to="/market-breakdown"
            >
              Market Breakdown
            </Button>
            <Button
              color="inherit"
              component={RouterLink}
              to="/trading-strategies"
            >
              Trading Strategies
            </Button>
            <Button
              color="inherit"
              component={RouterLink}
              to="/market-analysis"
            >
              Market Analysis
            </Button>
            <Button
              color="inherit"
              component={RouterLink}
              to="/about"
            >
              About
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header; 