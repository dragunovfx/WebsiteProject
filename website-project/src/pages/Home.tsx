import React from 'react';
import { Container, Typography, Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4, textAlign: 'center' }}>
        <Typography variant="h2" component="h1" gutterBottom>
          Welcome to Trading Education
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom color="text.secondary">
          Your comprehensive resource for learning about trading and market analysis
        </Typography>
        <Box sx={{ mt: 4 }}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={() => navigate('/market-analysis')}
            sx={{ mr: 2 }}
          >
            Start Learning
          </Button>
          <Button
            variant="outlined"
            color="primary"
            size="large"
            onClick={() => navigate('/about')}
          >
            Learn More
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Home; 