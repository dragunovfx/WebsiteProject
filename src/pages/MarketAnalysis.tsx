import React from 'react';
import { Container, Typography, Box, Grid, Paper } from '@mui/material';
import CustomVideoPlayer from '../components/CustomVideoPlayer';
import { weeklyAnalyses } from '../data/videos';
import { useNavigate } from 'react-router-dom';

const MarketAnalysis = () => {
  const navigate = useNavigate();

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Weekly Market Analysis
      </Typography>
      <Box sx={{ mt: 3 }}>
        {weeklyAnalyses.map((analysis) => (
          <Paper
            key={analysis.videoId}
            sx={{
              mb: 3,
              p: 2,
              borderRadius: 2,
              backgroundColor: 'background.paper',
              boxShadow: 1,
              '&:hover': {
                boxShadow: 3,
                transform: 'translateY(-2px)',
                transition: 'all 0.2s ease-in-out'
              }
            }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <Box sx={{ width: '100%', maxWidth: '100%' }}>
                  <CustomVideoPlayer
                    src={analysis.videoUrl}
                    poster={analysis.thumbnailUrl}
                    title={analysis.title}
                    description={analysis.description}
                    videoId={analysis.videoId}
                  />
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <Typography 
                    variant="h6" 
                    gutterBottom 
                    sx={{ 
                      cursor: 'pointer',
                      '&:hover': {
                        color: 'primary.main'
                      }
                    }}
                    onClick={() => navigate(`/video/${analysis.videoId}`)}
                  >
                    {analysis.title}
                  </Typography>
                  <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                    {analysis.date}
                  </Typography>
                  <Typography variant="body2">
                    {analysis.description}
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Paper>
        ))}
      </Box>
    </Container>
  );
};

export default MarketAnalysis; 