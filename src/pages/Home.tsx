import React from 'react';
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  Button,
  useTheme,
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import SchoolIcon from '@mui/icons-material/School';
import AnalyticsIcon from '@mui/icons-material/Analytics';

const Home: React.FC = () => {
  const theme = useTheme();

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/images/trading-bg.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: 'white',
          py: { xs: 8, md: 12 },
          mb: 6,
        }}
      >
        <Container maxWidth="lg">
          <Typography 
            variant="h2" 
            component="h1" 
            gutterBottom
            sx={{
              fontWeight: 700,
              textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
            }}
          >
            DragunovFX
          </Typography>
          <Typography 
            variant="h5" 
            component="h2" 
            gutterBottom
            sx={{
              mb: 4,
              maxWidth: '800px',
              textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
            }}
          >
            Your Gateway to Professional Day Trading. Master the markets with expert analysis, 
            proven strategies, and real-time insights.
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            component={RouterLink}
            to="/market-breakdown"
            sx={{ 
              mt: 2,
              px: 4,
              py: 1.5,
              fontSize: '1.1rem',
              '&:hover': {
                transform: 'translateY(-2px)',
                transition: 'transform 0.2s',
              }
            }}
          >
            Start Trading Smarter
          </Button>
        </Container>
      </Box>

      {/* Featured Content */}
      <Container maxWidth="lg">
        <Box sx={{ flexGrow: 1, mb: 8 }}>
          <Typography 
            variant="h4" 
            component="h2" 
            gutterBottom 
            sx={{ 
              textAlign: 'center',
              mb: 6,
              fontWeight: 600,
            }}
          >
            Why Choose DragunovFX?
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Card 
                sx={{ 
                  height: '100%',
                  transition: 'transform 0.2s',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: theme.shadows[8],
                  }
                }}
              >
                <CardContent sx={{ textAlign: 'center', p: 4 }}>
                  <TrendingUpIcon sx={{ fontSize: 60, color: 'primary.main', mb: 2 }} />
                  <Typography variant="h5" component="h3" gutterBottom sx={{ fontWeight: 600 }}>
                    Market Analysis
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    Get real-time market insights and analysis to make informed trading decisions. 
                    Stay ahead of market trends with our expert analysis.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card 
                sx={{ 
                  height: '100%',
                  transition: 'transform 0.2s',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: theme.shadows[8],
                  }
                }}
              >
                <CardContent sx={{ textAlign: 'center', p: 4 }}>
                  <SchoolIcon sx={{ fontSize: 60, color: 'primary.main', mb: 2 }} />
                  <Typography variant="h5" component="h3" gutterBottom sx={{ fontWeight: 600 }}>
                    Trading Strategies
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    Learn proven trading strategies from experienced professionals. 
                    Master the art of trading with our comprehensive educational resources.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card 
                sx={{ 
                  height: '100%',
                  transition: 'transform 0.2s',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: theme.shadows[8],
                  }
                }}
              >
                <CardContent sx={{ textAlign: 'center', p: 4 }}>
                  <AnalyticsIcon sx={{ fontSize: 60, color: 'primary.main', mb: 2 }} />
                  <Typography variant="h5" component="h3" gutterBottom sx={{ fontWeight: 600 }}>
                    Market Breakdown
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    Detailed analysis of market trends and opportunities. 
                    Make data-driven decisions with our comprehensive market breakdowns.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>

        {/* Testimonials Section */}
        <Box sx={{ mb: 8 }}>
          <Typography 
            variant="h4" 
            component="h2" 
            gutterBottom 
            sx={{ 
              textAlign: 'center',
              mb: 6,
              fontWeight: 600,
            }}
          >
            What Our Traders Say
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Card sx={{ height: '100%' }}>
                <CardContent>
                  <Typography variant="body1" sx={{ fontStyle: 'italic', mb: 2 }}>
                    "The market analysis provided by DragunovFX has been invaluable to my trading journey. 
                    The insights are clear and actionable."
                  </Typography>
                  <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                    - John D.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card sx={{ height: '100%' }}>
                <CardContent>
                  <Typography variant="body1" sx={{ fontStyle: 'italic', mb: 2 }}>
                    "The trading strategies section helped me develop a systematic approach to the markets. 
                    Highly recommended for both beginners and experienced traders."
                  </Typography>
                  <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                    - Sarah M.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card sx={{ height: '100%' }}>
                <CardContent>
                  <Typography variant="body1" sx={{ fontStyle: 'italic', mb: 2 }}>
                    "The market breakdowns are incredibly detailed and have helped me identify 
                    opportunities I would have otherwise missed."
                  </Typography>
                  <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                    - Michael R.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>

        {/* CTA Section */}
        <Box 
          sx={{ 
            bgcolor: 'primary.main',
            color: 'white',
            py: 6,
            px: 4,
            borderRadius: 2,
            textAlign: 'center',
            mb: 6,
          }}
        >
          <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 600 }}>
            Ready to Start Your Trading Journey?
          </Typography>
          <Typography variant="h6" sx={{ mb: 4, maxWidth: '800px', mx: 'auto' }}>
            Join thousands of successful traders who have transformed their trading with DragunovFX
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            component={RouterLink}
            to="/market-breakdown"
            sx={{ 
              px: 4,
              py: 1.5,
              fontSize: '1.1rem',
              '&:hover': {
                transform: 'translateY(-2px)',
                transition: 'transform 0.2s',
              }
            }}
          >
            Get Started Now
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Home; 