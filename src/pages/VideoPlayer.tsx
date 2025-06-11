import React, { useEffect, useRef, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Box, Typography, IconButton, Container } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { weeklyAnalyses, VideoData } from '../data/videos';

const VideoPlayer = () => {
  const { videoId } = useParams();
  const navigate = useNavigate();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoData, setVideoData] = useState<VideoData | null>(null);

  useEffect(() => {
    const video = weeklyAnalyses.find(v => v.videoId === videoId);
    if (video) {
      setVideoData(video);
    } else {
      navigate('/market-analysis'); // Redirect if video not found
    }
  }, [videoId, navigate]);

  if (!videoData) {
    return null;
  }

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box sx={{ mb: 3 }}>
        <IconButton 
          onClick={() => navigate('/market-analysis')}
          sx={{ mb: 2 }}
        >
          <ArrowBackIcon />
        </IconButton>
        <Typography variant="h4" component="h1" gutterBottom>
          {videoData.title}
        </Typography>
      </Box>

      <Box sx={{ 
        width: '70%', 
        mx: 'auto',
        position: 'relative',
        paddingBottom: '39.375%', // 70% of 56.25% (16:9 aspect ratio)
        mb: 3
      }}>
        <video
          ref={videoRef}
          src={videoData.videoUrl}
          poster={videoData.thumbnailUrl}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'contain',
          }}
          controls
          autoPlay
        />
      </Box>

      <Box sx={{ width: '70%', mx: 'auto' }}>
        <Typography variant="body1" color="text.secondary">
          {videoData.description}
        </Typography>
      </Box>
    </Container>
  );
};

export default VideoPlayer; 