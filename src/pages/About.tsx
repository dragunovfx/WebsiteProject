import React from 'react';
import {
  Container,
  Typography,
  Box,
  Paper,
} from '@mui/material';

const About: React.FC = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom>
        About Us
      </Typography>
      
      <Box sx={{ mt: 4 }}>
        <Paper sx={{ p: 3, mb: 3 }}>
          <Typography variant="h5" gutterBottom>
            Our Mission
          </Typography>
          <Typography variant="body1">
            To provide traders with comprehensive market analysis and educational resources
            to help them make informed trading decisions.
          </Typography>
        </Paper>

        <Paper sx={{ p: 3, mb: 3 }}>
          <Typography variant="h5" gutterBottom>
            What We Offer
          </Typography>
          <Typography variant="body1">
            Professional market analysis, trading strategies, and educational content
            designed to help traders of all levels improve their skills and knowledge.
          </Typography>
        </Paper>

        <Paper sx={{ p: 3 }}>
          <Typography variant="h5" gutterBottom>
            Contact Us
          </Typography>
          <Typography variant="body1">
            Have questions or suggestions? We'd love to hear from you.
            Reach out to us through our contact form or email.
          </Typography>
        </Paper>
      </Box>
    </Container>
  );
};

export default About; 